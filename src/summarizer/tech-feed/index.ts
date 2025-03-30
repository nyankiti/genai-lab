import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import Parser from 'rss-parser';

import { GeminiClient } from 'libs/gemini-client';
import { TEST_WATCHING_TECH_SITES_FRONTEND, WATCHING_TECH_SITES_FRONTEND } from './constant';

dotenv.config();

type Article = {
  feedName: string;
  title: string;
  url: string;
  text: string;
  summary?: string;
};

const repoRoot = execSync('git rev-parse --show-toplevel').toString().trim();

const CONFIG = {
  techFeedMaxEntriesPerDay: 10,
  outputPath: path.join(repoRoot, `output/tech_feed/${new Date().toISOString().split('T')[0]}.md`),
  thresholdDays: 2,
};

class TechFeed {
  private threshold: Date;
  private parser: Parser;
  private geminiClient: GeminiClient;

  constructor() {
    this.threshold = new Date(Date.now() - CONFIG.thresholdDays * 86400000);
    this.parser = new Parser();
    this.geminiClient = new GeminiClient();
  }
  async run() {
    const markdowns: string[] = [];

    for (const site of TEST_WATCHING_TECH_SITES_FRONTEND) {
      const entries = await this.parseFeedAndExtractTargetEntries(site.feedUrl);
      if (!entries) continue;
      console.log(
        'entries:',
        entries.map((entry) => entry.link),
      );
      for (const entry of entries) {
        const article = await this.retrieveArticle(entry.link, site.siteName);
        if (!article) continue;
        console.log('article:', article);
        article.summary = await this.summarizeArticle(article);
        console.log(`Summarized article: ${article.title}`);
        markdowns.push(this.stylizeArticle(article));
      }
      await new Promise((res) => setTimeout(res, 1000));
    }
    this.storeSummaries(markdowns);
  }

  storeSummaries(summaries: string[]) {
    fs.mkdirSync(path.dirname(CONFIG.outputPath), { recursive: true });
    fs.writeFileSync(CONFIG.outputPath, summaries.join('\n---\n'), 'utf-8');
    console.log(`Saved summaries to ${CONFIG.outputPath}`);
  }

  stylizeArticle(article: Article): string {
    return `# ${article.title}\n\n[View on ${article.feedName}](${article.url})\n\n${article.summary}`;
  }

  async summarizeArticle(article: Article): Promise<string> {
    return this.geminiClient.generateContent(
      `\n${article.title}\n\n本文:\n${article.text}`,
      '与えられた記事のタイトルと本文を元に詳細な要約を日本語で作成してください。',
    );
  }

  async retrieveArticle(url: string, feedName: string): Promise<Article | null> {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
      let text = $('main').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
      if (text.length < 10) {
        text = $('article').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
      }
      return { feedName, title: $('title').text(), url, text };
    } catch (error) {
      console.error(`Failed to fetch article: ${error}`);
      return null;
    }
  }

  async parseFeedAndExtractTargetEntries(
    feedUrl: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ): Promise<{ [key: string]: any }[] | null> {
    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    let feed;
    try {
      const response = await fetch(feedUrl, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Referer: 'https://www.google.com/',
          Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        },
      });
      if (!response.ok) {
        console.error(`Failed to fetch RSS: ${response.status}`);
        return null;
      }

      const text = await response.text();
      // [memo] parser.parseURLだと、User-Agentの付与がうまくいかず、一部feedで403となってしまうため、fetchで取得してからparseStringする
      feed = await this.parser.parseString(text);
    } catch {
      try {
        feed = await this.parser.parseURL(feedUrl);
      } catch (e) {
        console.error(`Failed to parse RSS feed: ${e}`);
        return null;
      }
    }

    if (!feed || !feed.items) {
      console.error('Failed to parse RSS feed');
      return null;
    }
    const entries = feed.items
      .filter((entry) => entry.pubDate && new Date(entry.pubDate) > this.threshold)
      .slice(0, CONFIG.techFeedMaxEntriesPerDay);

    return entries;
  }
}

(async () => {
  const techFeed = new TechFeed();
  await techFeed.run();
})();
