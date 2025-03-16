import type { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
} from '@modelcontextprotocol/sdk/types.js';
import type { GithubClient } from 'libs/github-clinet';

// Toolsの定義
const TOOLS: Record<string, Tool> = {
  'github-repo-merged-PRs-last-week': {
    name: 'github-repo-merged-PRs-last-week',
    description:
      'Retrieves detailed information about pull requests that were merged within the last week in the specified GitHub repository (owner/name). This method uses GitHub API v4 (GraphQL) to fetch data, including PR title, author, merge date, number of changed files, additions, deletions, and review status.',
    inputSchema: {
      type: 'object',
      properties: {
        owner: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
      required: ['owner', 'name'],
    },
  },
};

export const setupToolHandlers = (mcpServer: Server, githubClient: GithubClient) => {
  mcpServer.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: Object.values(TOOLS),
  }));

  mcpServer.setRequestHandler(CallToolRequestSchema, async (request) => {
    const tool = TOOLS[request.params.name];
    if (!tool) {
      throw new Error(`Tool not found: ${request.params.name}`);
    }
    // TOOLSにて定義したtoolごとに具体的な処理を実装する
    if (request.params.name === 'github-repo-merged-PRs-last-week') {
      const owner = request.params.arguments?.owner as string;
      const name = request.params.arguments?.name as string;
      console.log('owner:', owner);
      console.log('name:', name);
      const repositoryPullRequestsResult = await githubClient.getMergedPRsLastWeek(owner, name, 3);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(repositoryPullRequestsResult),
          },
        ],
      };
    }

    throw new Error('Tool implementation not found');
  });
};
