import { type ApolloClient, type NormalizedCacheObject, gql } from '@apollo/client';

// PRとリポジトリ情報の型定義
export interface RepositoryInfo {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  defaultBranchRef: {
    name: string;
  };
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  pullRequests: {
    totalCount: number;
    nodes: Array<PullRequestInfo>;
  };
}
export interface PullRequestInfo {
  id: string;
  number: number;
  title: string;
  body: string; // ← PRの説明を追加
  url: string;
  state: string;
  createdAt: string;
  updatedAt: string;
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
    avatarUrl: string;
  } | null;
  comments: {
    totalCount: number;
    nodes: Array<{
      body: string;
      author: {
        login: string;
        avatarUrl: string;
      } | null;
    }>;
  };
  reviews: {
    totalCount: number;
    nodes: Array<{
      state: string; // APPROVED, CHANGES_REQUESTED, COMMENTED など
      body: string;
      author: {
        login: string;
        avatarUrl: string;
      } | null;
    }>;
  };
  commits: {
    totalCount: number;
  };
  baseRefName: string;
  headRefName: string;
  files: {
    nodes: Array<{
      path: string;
      additions: number;
      deletions: number;
      changeType: string;
    }>;
  };
  mergeCommit: {
    message: string;
    oid: string;
  } | null;
}

export class RepositoryService {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}
  /**
   * 直近1週間のマージ済みPRの詳細情報を取得する
   * @param owner リポジトリのオーナー名
   * @param name リポジトリ名
   * @param prCount 取得するPRの数（デフォルト30件）
   * @param filesPerPR 各PRで取得する変更ファイル数（デフォルト20件）
   * @param daysAgo 何日前までのPRを取得するか（デフォルト7日間）
   * @returns リポジトリ情報とPR詳細情報
   */
  async getRecentRepositoryPullRequests(
    owner: string,
    name: string,
    prCount = 30,
    filesPerPR = 20,
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
    $fetchCount: Int!,
    $filesPerPR: Int!
  ) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      url
      stargazerCount
      forkCount
      updatedAt
      defaultBranchRef {
        name
      }
      primaryLanguage {
        name
        color
      }
      pullRequests(
        first: $fetchCount,
        states: [MERGED],
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          id
          number
          title
          body  # ← PRの説明
          url
          state
          createdAt
          updatedAt
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
            avatarUrl
          }
          comments(first: 5) { # ← コメント取得（最大5件）
            totalCount
            nodes {
              body
              author {
                login
                avatarUrl
              }
            }
          }
          reviews(first: 5) { # ← レビュー取得（最大5件）
            totalCount
            nodes {
              state
              body
              author {
                login
                avatarUrl
              }
            }
          }
          commits {
            totalCount
          }
          files(first: $filesPerPR) {
            nodes {
              path
              additions
              deletions
              changeType
            }
          }
          mergeCommit {
            message
            oid
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
          filesPerPR,
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
