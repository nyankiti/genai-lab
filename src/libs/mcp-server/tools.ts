import type { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
} from '@modelcontextprotocol/sdk/types.js';

// Toolsの定義
const TOOLS: Record<string, Tool> = {
  'github-repo-summary': {
    name: 'github-repo-summary',
    description: 'Search GitHub repository pull requests',
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

export const setupToolHandlers = (mcpServer: Server) => {
  mcpServer.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: Object.values(TOOLS),
  }));

  mcpServer.setRequestHandler(CallToolRequestSchema, async (request) => {
    const tool = TOOLS[request.params.name];
    if (!tool) {
      throw new Error(`Tool not found: ${request.params.name}`);
    }
    // TOOLSにて定義したtoolごとに具体的な処理を実装する
    if (request.params.name === 'github-repo-summary') {
      const owner = request.params.arguments?.owner as string;
      const name = request.params.arguments?.name as string;
      console.log('owner:', owner);
      console.log('name:', name);
      // TODO ここでGitHub APIを叩いて結果を返す
      return {
        content: [
          {
            type: 'text',
            text: owner + name,
          },
        ],
      };
    }

    throw new Error('Tool implementation not found');
  });
};
