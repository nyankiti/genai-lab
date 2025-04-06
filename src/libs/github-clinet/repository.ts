import { type ApolloClient, type NormalizedCacheObject, gql } from '@apollo/client';

// PRとリポジトリ情報の型定義
export interface RepositoryInfo {
  name: string;
  description: string | null;
  url: string;
  pullRequests: {
    nodes: Array<PullRequestInfo>;
  };
}
export interface PullRequestInfo {
  number: number;
  title: string;
  body: string;
  url: string;
  mergedAt: string;
  additions: number;
  deletions: number;
  changedFiles: number;
  labels: {
    nodes: Array<{
      name: string;
      color: string;
    }>;
  };
  author: {
    login: string;
  } | null;
  reviews: {
    totalCount: number;
    nodes: Array<{
      body: string;
      comments: {
        nodes: Array<{
          body: string;
        }>;
      };
    }>;
  };
  baseRefName: string;
  headRefName: string;
}

export class RepositoryService {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  /** リポジトリのREADMEを取得する
   * @param owner リポジトリのオーナー名
   * @param name リポジトリ名
   * @returns リポジトリのREADME
   */
  async getReadme(owner: string, name: string): Promise<string | null> {
    const query = gql`
  query GetReadme($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      object(expression: "HEAD:README.md") {
        __typename 
        ... on Blob {
          text
        }
      }
    }
  }
`;
    try {
      const result = await this.client.query({
        query,
        variables: {
          owner,
          name,
        },
      });
      if (result.data.repository.object?.__typename === 'Blob') {
        return result.data.repository.object.text;
      }
      console.warn('README.md is not a Blob or not found.');
      return null;
    } catch (error) {
      console.error('Error fetching README:', error);
      return null;
    }
  }

  /**
   * リポジトリの詳細情報を取得する
   * @param owner リポジトリのオーナー名
   * @param name リポジトリ名
   * @returns リポジトリ情報
   */
  async getRepositoryInfo(owner: string, name: string): Promise<RepositoryInfo | null> {
    const query = gql`
  query GetRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      url
    }
  }
`;
    try {
      const result = await this.client.query({
        query,
        variables: {
          owner,
          name,
        },
      });
      return result.data.repository as RepositoryInfo;
    } catch (error) {
      console.error('Error fetching repository information:', error);
      return null;
    }
  }

  /**
   * 直近1週間のマージ済みPRの詳細情報を取得する
   * @param owner リポジトリのオーナー名
   * @param name リポジトリ名
   * @param prCount 取得するPRの数（デフォルト10件）
   * @param daysAgo 何日前までのPRを取得するか（デフォルト7日間）
   * @returns リポジトリ情報とPR詳細情報
   */
  async getMergedPRsLastWeek(
    owner: string,
    name: string,
    prCount = 10,
    daysAgo = 7,
  ): Promise<RepositoryInfo | null> {
    // 現在の日時から指定日数前の日時を計算
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - daysAgo);

    // マージ済みPRを十分な数取得するために、より多くのPRを取得
    const fetchCount = prCount * 2; // 安全のため2倍の数を取得

    const query = gql`
  query GetRepositoryPullRequests(
    $owner: String!,
    $name: String!,
    $fetchCount: Int!
  ) {
    repository(owner: $owner, name: $name) {
      name
      description
      url
      pullRequests(
        first: $fetchCount,
        states: [MERGED],
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          number
          title
          body  # ← PRの説明
          url
          mergedAt
          additions
          deletions
          changedFiles
          baseRefName
          headRefName
          labels(first: 10) {
            nodes {
              name
              color
            }
          }
          author {
            login
          }
          reviews(first: 5) { # ← レビュー取得（最大5件）
            totalCount
            nodes {
              body
              comments(first: 5) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
`;

    try {
      const result = await this.client.query({
        query,
        variables: {
          owner,
          name,
          fetchCount,
        },
      });

      // 上書きするため、structuredCloneを作成
      const repository = structuredClone(result.data.repository);

      if (repository?.pullRequests?.nodes) {
        const filteredPRs = repository.pullRequests.nodes.filter(
          (pr: PullRequestInfo) => pr.mergedAt && new Date(pr.mergedAt) >= pastDate,
        );

        const limitedPRs = filteredPRs.slice(0, prCount);

        // コピーしたオブジェクトのプロパティを更新
        repository.pullRequests.nodes = limitedPRs;
        repository.pullRequests.totalCount = limitedPRs.length;
      }
      return result.data.repository as RepositoryInfo;
    } catch (error) {
      console.error('Error fetching repository pull requests:', error);
      return null;
    }
  }
}
