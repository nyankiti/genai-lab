import type { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  type Prompt,
} from '@modelcontextprotocol/sdk/types.js';

const PROMPTS: Record<string, Prompt> = {
  'explain-code': {
    name: 'explain-code',
    description: 'Explain how code works',
    arguments: [
      {
        name: 'code',
        description: 'Code to explain',
        required: true,
      },
      {
        name: 'language',
        description: 'Programming language',
        required: false,
      },
    ],
  },
};

export const setupPromptHandlers = (mcpServer: Server) => {
  mcpServer.setRequestHandler(ListPromptsRequestSchema, async () => {
    return {
      prompts: Object.values(PROMPTS),
    };
  });

  mcpServer.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const prompt = PROMPTS[request.params.name];
    if (!prompt) {
      throw new Error(`Prompt not found: ${request.params.name}`);
    }
    // PROMPTSにて定義したpromptごとにcontentを作成する
    if (request.params.name === 'explain-code') {
      const language = request.params.arguments?.language || 'Unknown';
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Explain how this ${language} code works:\n\n${request.params.arguments?.code}`,
            },
          },
        ],
      };
    }

    throw new Error('Prompt implementation not found');
  });
};
