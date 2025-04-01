import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import Parser from 'rss-parser';

import { getDateString } from 'libs/date';
import {
  type Article,
  fetchRssWithFallback,
  retrieveArticleWithFallback,
} from 'libs/fetchWithFallback';
import { repoRoot } from 'libs/file';
import { GeminiClient } from 'libs/gemini-client';
import { WATCHING_TECH_SITES_FRONTEND } from './constant';

dotenv.config();

export const generatedSummariesDir = () => path.join(repoRoot, 'generated_summaries');

const CONFIG = {
  techFeedMaxEntriesPerDay: 10,
  thresholdDays: 2,
};

export class TechFeed {
  private targetDate: Date;
  private threshold: Date;
  private parser: Parser;
  private geminiClient: GeminiClient;

  constructor(targetDate: Date) {
    this.targetDate = targetDate;
    this.threshold = new Date(targetDate.getTime() - CONFIG.thresholdDays * 86400000);
    this.parser = new Parser();
    this.geminiClient = new GeminiClient();
  }
  async run() {
    const outputPath = path.join(
      generatedSummariesDir(),
      getDateString(this.targetDate),
      'tech-feed.md',
    ); // /generated_summaries/{dateString}/tech-feed.md に保存する

    if (fs.existsSync(outputPath)) {
      console.log(`File already exists: ${outputPath}`);
      return;
    }

    const markdowns: string[] = [];

    for (const site of WATCHING_TECH_SITES_FRONTEND) {
      const entries = await this.parseFeedAndExtractTargetEntries(site.feedUrl);
      if (!entries) continue;
      console.log(
        'entries:',
        entries.map((entry) => entry.link),
      );
      for (const entry of entries) {
        const article = await retrieveArticleWithFallback(entry.link, site.siteName);
        if (!article) continue;
        article.summary = await this.summarizeArticle(article);
        markdowns.push(this.stylizeArticle(article));
      }
      await new Promise((res) => setTimeout(res, 1000));
    }

    if (markdowns.length === 0) {
      markdowns.push(`${getDateString(this.targetDate)} の記事はありませんでした。\n\n`);
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, markdowns.join('\n---\n'), 'utf-8');
    console.log(`Saved summaries to ${outputPath}`);
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

  async parseFeedAndExtractTargetEntries(
    feedUrl: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ): Promise<{ [key: string]: any }[] | null> {
    const feed = await fetchRssWithFallback(feedUrl, this.parser);

    if (!feed || !feed.items) {
      console.error('Failed to parse RSS feed');
      return null;
    }
    const entries = feed.items
      .filter(
        (entry) =>
          entry.pubDate &&
          new Date(entry.pubDate) > this.threshold &&
          new Date(entry.pubDate) <= this.targetDate,
      )
      .slice(0, CONFIG.techFeedMaxEntriesPerDay);

    return entries;
  }
}
