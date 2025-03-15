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
  };
  reviews: {
    totalCount: number;
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

export interface PullRequestSummary {
  repositoryBasicInfo: string;
  mergedPullRequestsOverview: string;
  recentPullRequests: string;
  fileChangesAnalysis: string;
}

export class RepositoryService {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

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
    const query = gql`
      query GetRepositoryPullRequests(
        $owner: String!,
        $name: String!,
        $prCount: Int!,
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
            first: $prCount,
            states: [MERGED],
            orderBy: { field: CREATED_AT, direction: DESC }
          ) {
            totalCount
            nodes {
              id
              number
              title
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
              comments {
                totalCount
              }
              reviews {
                totalCount
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
          prCount,
          filesPerPR,
        },
      });

      return result.data.repository as RepositoryInfo;
    } catch (error) {
      console.error('Error fetching repository pull requests:', error);
      return null;
    }
  }
}
