import type Parser from 'rss-parser';

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
