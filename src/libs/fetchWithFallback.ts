import type Parser from 'rss-parser';

import * as cheerio from 'cheerio';

/**
 * 以下の順番でurlの内容を取得し、成功した場合にレスポンスを文字列で返す
 * 1. fetchを用いて通常のHTTPリクエストを行う
 * 2. parser.parseURLを用いて、URLからRSSを取得する
 * 3. 自作のproxy経由で取得する
 */
export const fetchRssWithFallback = async (
  feedUrl: string,
  parser: Parser,
): Promise<
  | ({
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      [key: string]: any;
    } & Parser.Output<{
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      [key: string]: any;
    }>)
  | null
> => {
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
      const errorText = await response.text();
      console.error(
        `Failed to fetch RSS: ${response.status} ${response.statusText}\nResponse: ${errorText}`,
      );
      throw new Error('Failed to fetch RSS');
    }

    const text = await response.text();
    return await parser.parseString(text);
  } catch (e) {
    console.error(`Failed to fetch RSS: ${e}`);
  }

  try {
    return await parser.parseURL(feedUrl);
  } catch (e) {
    console.error(`Failed to parser.parseURL: ${e}`);
  }

  try {
    const response = await fetch(`https://sokes-nook.net/api/proxy?url=${feedUrl}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Failed to fetch RSS via proxy: ${response.status} ${response.statusText}\nResponse: ${errorText}`,
      );
      throw new Error('Failed to fetch RSS via proxy');
    }

    const text = await response.text();
    return await parser.parseString(text);
  } catch (e) {
    console.error(`Failed to fetch RSS via proxy: ${e}`);
  }

  return null;
};

export type Article = {
  feedName: string;
  title: string;
  url: string;
  text: string;
  summary?: string;
};

/**
 * 以下の順番でurlの内容を取得し、成功した場合にレスポンスを文字列で返す
 * 1. fetchを用いて通常のHTTPリクエストを行う
 * 2. 自作のproxy経由で取得する
 * 3. TODO: puppeteerを用いて取得する（未実装）
 */
export const retrieveArticleWithFallback = async (
  url: string,
  feedName: string,
): Promise<Article | null> => {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://www.google.com/',
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
      },
    });
    if (!response.ok) {
      console.error(`Failed to fetch article: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch article');
    }
    const html = await response.text();

    const $ = cheerio.load(html);
    let text = $('main').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
    if (text.length < 10) {
      text = $('article').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
    }
    return { feedName, title: $('title').text(), url, text };
  } catch (error) {
    console.error(`Failed to fetch article: ${error}`);
  }

  try {
    const response = await fetch(`https://sokes-nook.net/api/proxy?url=${url}`);
    if (!response.ok) {
      console.error(`Failed to fetch article via proxy: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch article via proxy');
    }
    const html = await response.text();

    const $ = cheerio.load(html);
    let text = $('main').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
    if (text.length < 10) {
      text = $('article').find('p, code, ul, h1, h2, h3, h4, h5, h6').text();
    }
    return { feedName, title: $('title').text(), url, text };
  } catch (error) {
    console.error(`Failed to fetch article via proxy: ${error}`);
  }

  return null;
};
