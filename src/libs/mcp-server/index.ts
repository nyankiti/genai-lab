import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { GithubClient } from 'libs/github-clinet';
import { setupPromptHandlers } from './prompts';
import { setupToolHandlers } from './tools';

const mcpServer = new Server(
  {
    name: 'my-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      prompts: {},
      tools: {},
    },
  },
);
const githubClinet = new GithubClient();

console.error('my MCP Server starting...');

setupPromptHandlers(mcpServer);
setupToolHandlers(mcpServer, githubClinet);
// TODO 必要に応じてResourceHandlerも実装する

console.error('my MCP Server started');

async function runServer() {
  const transport = new StdioServerTransport();
  await mcpServer.connect(transport);
  console.error('my MCP Server running on stdio');
}
runServer().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
