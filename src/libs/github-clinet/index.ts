import { ApolloClient, InMemoryCache, type NormalizedCacheObject, gql } from '@apollo/client';
import dotenv from 'dotenv';
import { type RepositoryInfo, RepositoryService } from './repository';

// for local
dotenv.config();

const githubPersonalAccessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

export class GithubClient {
  private client: ApolloClient<NormalizedCacheObject>;
  private repositoryService: RepositoryService;
  constructor() {
    if (!githubPersonalAccessToken) {
      throw new Error('GITHUB_PERSONAL_ACCESS_TOKEN is not set');
    }
    this.client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${githubPersonalAccessToken}`,
      },
    });
    this.repositoryService = new RepositoryService(this.client);
  }

  /**
   * リポジトリの情報と直近のマージ済みPRの詳細情報を取得する
   * @param owner リポジトリのオーナー名
   * @param name リポジトリ名
   * @param prCount 取得するPRの数（デフォルト10件）
   * @param filesPerPR 各PRで取得する変更ファイル数（デフォルト20件）
   * @returns リポジトリ情報とPR詳細情報
   */
  async getRepositoryPullRequests(
    owner: string,
    name: string,
    prCount = 10,
    filesPerPR = 20,
  ): Promise<RepositoryInfo | null> {
    return this.repositoryService.getRecentRepositoryPullRequests(owner, name, prCount, filesPerPR);
  }
}
