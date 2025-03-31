import dotenv from 'dotenv';
import snoowrap from 'snoowrap';

import { SUB_REDDITS } from './constant';

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
  thresholdDays: 2,
  limit: 5,
};

export class RedditExplorer {
  private redditClient: snoowrap;

  constructor() {
    this.redditClient = new snoowrap({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      userAgent: process.env.REDDIT_USER_AGENT ?? '',
      refreshToken: process.env.REDDIT_REFRESH_TOKEN,
    });
  }

  async run() {
    const markdowns: string[] = [];

    for (const subreddit of SUB_REDDITS) {
      const posts = await this.retrieveHotPosts(subreddit);
      for (const post of posts) {
        post.comments = await this.retrieveTopCommentsOfPost(post.id);
        post.summary = await this.summarizeRedditPost(post);
      }
      console.log(posts);
    }
  }

  private async summarizeRedditPost(post: RedditPost): Promise<string> {
    // TODO: gemini clinetを用いてmarkdownの要約を作成する
    return 'test summary';
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
        post.upvote_ratio < 0.7
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
}

(async () => {
  const redditExplorer = new RedditExplorer();
  await redditExplorer.run();
})();
