import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

import { getDateString } from 'libs/date';
import { GeminiClient } from 'libs/gemini-client';
import { GithubClient } from 'libs/github-clinet';
import { TARGET_LANGUAGES } from './constant';
import { generatedSummariesDir } from './tech-feed';

type Repository = {
  name: string;
  description: string | null;
  link: string;
  stars: number;
  language: string;
  readmeSummary?: string;
};

const MARKDOWN_FORMAT = `
# {title}

**stars**: {stars}

[View Repository on Github]({url})

{description}

## README要約
{readmeSummary}
`;

export class GithubTrending {
  private targetDate: Date;
  private githubClinet: GithubClient;
  private geminiClient: GeminiClient;

  constructor(targetDate: Date) {
    this.targetDate = targetDate;
    this.githubClinet = new GithubClient();
    this.geminiClient = new GeminiClient();
  }

  async run(): Promise<void> {
    const outputPath = path.join(
      generatedSummariesDir(),
      getDateString(this.targetDate),
      'github-trending.md',
    ); // /generated_summaries/{dateString}/github-trending.md に保存する

    if (fs.existsSync(outputPath)) {
      console.log(`File already exists: ${outputPath}`);
      return;
    }

    const recentSummarizedRepos = this.getRecentSummarizedRepos();
    const markdowns: string[] = [];

    const trendRepos = await this.fetchTrendRepos();
    for (const repo of trendRepos) {
      // 直近5日ですでに要約済みのリポジトリはスキップ
      if (recentSummarizedRepos.includes(repo.link)) {
        console.log(`Already summarized: ${repo.link}`);
        continue;
      }
      // wchat対象でない言語の場合は除外
      if (!TARGET_LANGUAGES.includes(repo.language.toLowerCase())) {
        console.log(`Not target language: ${repo.name}, ${repo.description}, ${repo.link}`);
        continue;
      }

      const repoReadme = await this.githubClinet.getRepositoryReadme(
        repo.name.split('/')[0],
        repo.name.split('/')[1],
      );
      if (repoReadme) {
        const readmeSummary = await this.summarizeReadme(repo, repoReadme);
        repo.readmeSummary = readmeSummary;
        await new Promise((res) => setTimeout(res, 3000));
      }

      const markdown = MARKDOWN_FORMAT.replace('{title}', repo.name)
        .replace('{url}', repo.link)
        .replace('{stars}', String(repo.stars))
        .replace('{description}', repo.description || '')
        .replace('{readmeSummary}', repo.readmeSummary || '');

      markdowns.push(markdown);
    }

    if (markdowns.length === 0) {
      markdowns.push(`${getDateString(this.targetDate)} のgithub trend要約は存在しません。\n\n`);
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, markdowns.join('\n---\n'), 'utf-8');
    console.log(`✅ Saved summaries to ${outputPath}`);
  }

  async summarizeReadme(repo: Repository, readme: string): Promise<string> {
    return this.geminiClient.generateContent(
      `\n${repo.name}\n\nリポジトリ説明:\n${repo.description}\n\nREADME:\n${readme}`,
      '与えられたリポジトリの説明とREADMEを元に詳細な要約を日本語で作成してください。',
    );
  }

  /**
   * @returns GitHubのトレンドリポジトリを取得する
   * @throws エラーが発生した場合
   * @description
   * GitHubのトレンドリポジトリを取得する
   * 取得するリポジトリは、上位8件を取得する
   * トレンドリポジトリはGitHub GraphQL APIでは取得できないので、HTMLをパースして取得する
   */
  private async fetchTrendRepos(): Promise<Repository[]> {
    const response = await fetch('https://github.com/trending/');

    if (!response.ok) {
      console.error(`Failed to fetch github trend: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch github trend');
    }

    const html = await response.text();

    const $ = cheerio.load(html);
    const repos: Repository[] = [];

    $('h2.h3.lh-condensed').each((_, el) => {
      const name = $(el).find('a').text().trim().replace(/\s+/g, '');
      const description = $(el).parent().find('p.col-9.color-fg-muted').text().trim() || null;
      const starsText = $(el).parent().find("a[href*='stargazers']").text().trim().replace(',', '');
      const language = $(el).parent().find('span[itemprop="programmingLanguage"]').text().trim();
      const stars = Number.parseInt(starsText) || 0;

      repos.push({
        name,
        description,
        link: `https://github.com/${name}`,
        stars,
        language,
      });
    });

    return repos.slice(0, 8); // 上位8件を取得
  }

  /**
   * @returns 最近のリポジトリ要約の配列を取得する
   * @description
   * 直近5間のリポジトリ要約を取得し、repositoryのurlの配列を作成する
   */
  private getRecentSummarizedRepos(): string[] {
    // 直近5間のリポジトリ要約を取得し、permalinkの配列を作成する
    const generatedSummariesDirPath = generatedSummariesDir();
    const directories = fs.readdirSync(generatedSummariesDirPath);
    const threshold = new Date(this.targetDate.getTime() - 5 * 86400000);
    const recentDirectories = directories.filter((dir) => {
      const dirDate = new Date(dir);
      return dirDate >= threshold;
    });
    const recentSummaries: string[] = [];
    for (const dir of recentDirectories) {
      const filePath = path.join(generatedSummariesDirPath, dir, 'github-trending.md');
      const content = fs.readFileSync(filePath, 'utf-8');
      const markdowns = content.split('\n---\n');
      for (const markdown of markdowns) {
        const match = markdown.match(/\[View Repository on Github\]\(([^)]+)\)/);
        if (match) {
          const permalink = match[1];
          recentSummaries.push(permalink);
        }
      }
    }
    return [...new Set(recentSummaries)];
  }
}

(async () => {
  const githubTrending = new GithubTrending(new Date());
  await githubTrending.run();
})();
