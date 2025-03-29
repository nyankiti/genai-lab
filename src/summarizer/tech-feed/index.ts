import * as cheerio from 'cheerio';
import Parser from 'rss-parser';
import { WATCHING_TECH_SITES_FRONTEND } from './constant';

type Article = {
  feedName: string;
  title: string;
  url: string;
  text: string;
  summary?: string;
};

const CONFIG = {
  techFeedMaxEntriesPerDay: 10,
  outputPath: 'tech_feed/{date}.md',
  thresholdDays: 7,
};

class TechFeed {
  private threshold = new Date(Date.now() - CONFIG.thresholdDays * 86400000);

  async run() {
    const markdowns: string[] = [];

    const parser = new Parser();
    for (const site of WATCHING_TECH_SITES_FRONTEND) {
      const entries = await this.parseFeedAndExtractTargetEntries(site.feedUrl, parser);
      if (!entries) continue;
      console.log(
        'entries:',
        entries.map((entry) => entry.link),
      );
      for (const entry of entries) {
        const article = await this.retrieveArticle(entry.link, site.siteName);
        if (!article) continue;
        console.log('article:', article);
      }
    }
  }

  async retrieveArticle(url: string, feedName: string): Promise<Article | null> {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
      const text = $('main').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
      return { feedName, title: $('title').text(), url, text };
    } catch (error) {
      console.error(`Failed to fetch article: ${error}`);
      return null;
    }
  }

  async parseFeedAndExtractTargetEntries(
    feedUrl: string,
    parser: Parser,
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
      feed = await parser.parseString(text);
    } catch {
      try {
        feed = await parser.parseURL(feedUrl);
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
