import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';
import snoowrap from 'snoowrap';

import { getDateString } from 'libs/date';
import { GeminiClient } from 'libs/gemini-client';
import { SUB_REDDITS } from './constant';
import { generatedSummariesDir } from './tech-feed';

dotenv.config();

type PostType = 'image' | 'gallery' | 'video' | 'poll' | 'crosspost' | 'text' | 'link';

type RedditComment = {
  text: string;
  upvotes: number;
};

class RedditPost {
  constructor(
    public type: PostType,
    public id: string,
    public title: string,
    public url: string | null,
    public upvotes: number,
    public text: string,
    public permalink: string,
    public comments: RedditComment[],
    public summary: string,
    public thumbnail: string,
  ) {}
}

const CONFIG = {
  techFeedMaxEntriesPerDay: 10,
  thresholdDays: 1,
  limit: 5,
};

const MARKDOWN_FORMAT = `
# {title}

**Upvotes**: {upvotes}

{imageOrVideoOrNone}

[View on Reddit]({permalink})

{summary}
`;

export class RedditExplorer {
  private targetDate: Date;
  private redditClient: snoowrap;
  private geminiClient: GeminiClient;

  constructor(targetDate: Date) {
    this.targetDate = targetDate;
    this.redditClient = new snoowrap({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      userAgent: process.env.REDDIT_USER_AGENT ?? '',
      refreshToken: process.env.REDDIT_REFRESH_TOKEN,
    });
    this.geminiClient = new GeminiClient();
  }

  async run() {
    const outputPath = path.join(
      generatedSummariesDir(),
      getDateString(this.targetDate),
      'reddit.md',
    ); // /generated_summaries/{dateString}/reddit.md に保存する

    if (fs.existsSync(outputPath)) {
      console.log(`File already exists: ${outputPath}`);
      return;
    }

    const recentSummarizedArticles = this.getRecentSummarizedArticles();
    const markdowns: string[] = [];

    for (const subreddit of SUB_REDDITS) {
      const posts = await this.retrieveHotPosts(subreddit);
      for (const post of posts) {
        // 直近5日に要約済みかどうかを判定する
        if (recentSummarizedArticles.includes(post.permalink)) {
          console.log(`Already summarized: ${post.permalink}`);
          continue;
        }

        post.comments = await this.retrieveTopCommentsOfPost(post.id);
        post.summary = await this.summarizeRedditPost(post);
        await new Promise((res) => setTimeout(res, 3000));
        markdowns.push(this.stylizePost(post));
      }
    }

    if (markdowns.length === 0) {
      markdowns.push(`${getDateString(this.targetDate)} の記事はありませんでした。\n\n`);
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, markdowns.join('\n---\n'), 'utf-8');
    console.log(`✅ Saved summaries to ${outputPath}`);
  }

  private async summarizeRedditPost(post: RedditPost): Promise<string> {
    const commentsText = post.comments
      .map((comment) => `${comment.upvotes} upvotes: ${comment.text}`)
      .join('\n');
    return this.geminiClient.generateContent(
      this.getContents(),
      this.systemInstructionFormat(post.title, commentsText, post.text),
    );
  }

  private async retrieveHotPosts(subreddit: string): Promise<RedditPost[]> {
    const posts: RedditPost[] = [];
    const submission = await this.redditClient
      .getSubreddit(subreddit)
      .getHot({ limit: CONFIG.limit });

    for (const post of submission) {
      const postType = this.judgePostType(post);
      const url = postType === 'video' ? this.getVideoUrl(post) : post.url;

      if (
        post.author.name === 'AutoModerator' ||
        post.title.toLowerCase().includes('megathread') ||
        post.upvote_ratio < 0.7 || // upvoteの割合が 70% 未満（downvoteの方が多い）の投稿を除外
        post.ups < 35 //  upvote数が 35 未満の投稿を除外
      ) {
        continue;
      }

      if (['gallery', 'poll', 'crosspost'].includes(postType)) {
        continue;
      }

      posts.push(
        new RedditPost(
          postType,
          post.id,
          post.title,
          url,
          post.ups,
          post.selftext,
          `https://www.reddit.com${post.permalink}`,
          [],
          '',
          post.thumbnail,
        ),
      );
    }
    return posts;
  }

  private async retrieveTopCommentsOfPost(postId: string): Promise<RedditComment[]> {
    return this.redditClient
      .getSubmission(postId)
      .fetch()
      .then((submission) => {
        return submission
          .expandReplies({ limit: 0, depth: 1 })
          .then((sub) => {
            return sub.comments
              .slice(0, CONFIG.limit)
              .map((comment) => ({ text: comment.body, upvotes: comment.ups }));
          })
          .catch((e) => {
            console.error(`Failed to expand replies for post ${postId}: ${e}`);
            return [];
          });
      })
      .catch((e) => {
        console.error(`Failed to fetch comments for post ${postId}: ${e}`);
        return [];
      });
  }

  private judgePostType(post: snoowrap.Submission): PostType {
    if (post.post_hint === 'image') return 'image';
    if (post.post_hint === 'gallery') return 'gallery';
    if (post.is_video) return 'video';
    if ('poll_data' in post) return 'poll';
    if ('crosspost_parent' in post) return 'crosspost';
    return post.is_self ? 'text' : 'link';
  }

  private getVideoUrl(post: snoowrap.Submission): string | null {
    return (
      post.media?.reddit_video?.fallback_url ||
      post.secure_media?.reddit_video?.fallback_url ||
      null
    );
  }

  private systemInstructionFormat(title: string, comments: string, selftext: string): string {
    const selfTextSection = selftext
      ? `投稿文
    '''
    ${selftext}
    '''
    `
      : '';
    return `以下のテキストは、Redditのあるポストのタイトルと${selftext ? '投稿文、そして' : ''}当ポストに対する主なコメントです。
    
    よく読んで、ユーザーの質問に答えてください。
    
    タイトル
    '''
    ${title}
    '''

    ${selfTextSection}
    
    コメント
    '''${comments}
    '''`;
  }

  private getContents(): string {
    return `
    以下の2つの質問について、順を追って詳細に、分かりやすく答えてください。
    
    1. このポストの内容を説明してください。
    2. このポストに対するコメントのうち、特に興味深いものを教えてください。
    
    この質問の回答以外の出力は不要です。回答はmarkdown形式で出力してください。
    `;
  }

  private stylizePost(post: RedditPost): string {
    const imageOrVideoOrNone =
      post.type === 'image'
        ? `![Image](${post.url})`
        : post.type === 'video' && post.url
          ? `<video src="${post.url}" controls style="width: 100%; height: auto; max-height: 500px;"></video>`
          : '';

    return MARKDOWN_FORMAT.replace('{title}', post.title)
      .replace('{upvotes}', post.upvotes.toString())
      .replace('{imageOrVideoOrNone}', imageOrVideoOrNone)
      .replace('{permalink}', post.permalink)
      .replace('{summary}', post.summary);
  }

  private getRecentSummarizedArticles(): string[] {
    // 直近5間の要約記事を取得し、permalinkの配列を作成する
    const generatedSummariesDirPath = generatedSummariesDir();
    const directories = fs.readdirSync(generatedSummariesDirPath);
    const threshold = new Date(this.targetDate.getTime() - 5 * 86400000);
    const recentDirectories = directories.filter((dir) => {
      const dirDate = new Date(dir);
      return dirDate >= threshold;
    });
    const recentSummaries: string[] = [];
    for (const dir of recentDirectories) {
      const filePath = path.join(generatedSummariesDirPath, dir, 'reddit.md');
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const markdowns = content.split('\n---\n');
        for (const markdown of markdowns) {
          const match = markdown.match(/\[View on Reddit\]\(([^)]+)\)/);
          if (match) {
            const permalink = match[1];
            recentSummaries.push(permalink);
          }
        }
      } catch {
        // ファイルが存在しない場合はスキップ
        console.error(`File not found: ${filePath}`);
      }
    }
    return [...new Set(recentSummaries)];
  }
}

(async () => {
  const redditExplorer = new RedditExplorer(new Date());
  await redditExplorer.run();
})();
