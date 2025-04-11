import path from 'node:path';
import { Client as MCPClient } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import type {
  ChatCompletionMessageParam as GroqChatCompletionMessageParam,
  ChatCompletionTool as GroqChatCompletionTool,
} from 'groq-sdk/resources/chat/completions';
import OpenAI from 'openai';
import type { ChatCompletionMessageParam, ChatCompletionTool } from 'openai/resources';
import { z } from 'zod';

dotenv.config();

const githubMCPServerScriptPath = path.join(
  process.cwd(),
  'node_modules',
  '@modelcontextprotocol',
  'server-github',
  'dist',
  'index.js',
);
const myMCPServerScriptPath = path.join(process.cwd(), 'src', 'libs', 'mcp-server', 'index.ts');

// 以下のdeepseekのモデルだとreasoningを受け付けない（ドキュメントには受け付けていると書いているが...）
// const MODEL_NAME = "deepseek-r1-distill-llama-70b";
const MODEL_NAME = 'llama-3.3-70b-versatile';
const MAX_TOKENS = 1000;

export class MyMCPClient {
  private mcpClient: MCPClient;
  private openaiClient: OpenAI;
  private groqClient: Groq;
  private transport: StdioClientTransport;
  private availableTools: Awaited<ReturnType<MCPClient['listTools']>>['tools'] = [];

  constructor() {
    this.mcpClient = new MCPClient({
      name: 'my-mcp-client',
      version: '1.0.0',
    });
    this.openaiClient = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    });
    // openapiのAPIキーを利用する場合
    // this.openaiClient = new OpenAI({
    //   apiKey: process.env.OPENAI_API_KEY,
    // });
    this.groqClient = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const githubPersonalAccessToken = process.env.GH_PERSONAL_ACCESS_TOKEN;
    if (!githubPersonalAccessToken) throw new Error('GH_PERSONAL_ACCESS_TOKEN is not set');

    this.transport = new StdioClientTransport({
      command: 'tsx',
      args: [myMCPServerScriptPath],
      env: {
        GH_PERSONAL_ACCESS_TOKEN: githubPersonalAccessToken,
        ...(process.env as Record<string, string>),
      },
    });
  }

  async connectToServer(): Promise<void> {
    await this.mcpClient.connect(this.transport);
    console.log('Connected to MCP server');
    const listToolsResponse = await this.mcpClient.listTools();
    this.availableTools = listToolsResponse.tools;
  }

  async processQuery(query: string): Promise<string | null | undefined> {
    const messages: Array<GroqChatCompletionMessageParam & { name?: string }> = [
      { role: 'user', content: query },
    ];
    const availableTools: Array<GroqChatCompletionTool> = this.availableTools.map((tool) => ({
      type: 'function',
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.inputSchema,
      },
    }));

    const response = await this.groqClient.chat.completions.create({
      model: MODEL_NAME,
      messages: messages,
      tools: availableTools,
      tool_choice: 'required',
      max_completion_tokens: 4096,
    });

    const responseMessage = response.choices[0].message;
    const toolCalls = responseMessage.tool_calls;
    if (toolCalls) {
      messages.push(responseMessage);
      for (const toolCall of toolCalls.slice(0, 1)) {
        const toolName = toolCall.function.name;
        const toolArgs = JSON.parse(toolCall.function.arguments);
        const toolResult = await this.mcpClient.request(
          {
            method: 'tools/call',
            params: {
              name: toolName,
              arguments: toolArgs,
            },
          },
          // TODO: github-serverが提供するツールのスキーマがあるはずだがわからないので一旦any
          z.any(),
        );

        // FOR DEBUG
        console.log('Tool call result:', toolResult);
        const toolResultContents = JSON.stringify(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          toolResult.content.map((content: any) => {
            // FIXME: ここがstringではなくobjectを期待されているっぽい？
            if (content.type === 'text') return content.text;
            throw Error(`content type not supported: ${content.type}, ${content}`);
          }),
        );
        messages.push({
          tool_call_id: toolCall.id,
          role: 'tool',
          name: toolName,
          content: toolResultContents,
        });
      }
      const secondResponse = await this.groqClient.chat.completions.create({
        model: MODEL_NAME,
        messages: messages,
      });
      return secondResponse.choices[0].message.content;
    }
    return responseMessage.content;
  }

  /**
   * memo: openaiのAPIを利用すると以下のようにエラーしてしまう
   * ```
   * error: {
   *  message: "'messages.2' : for 'role:tool' the following must be satisfied[('messages.2.content' : value must be a string)]",
   *  type: 'invalid_request_error'
   * },
   */
  async processQueryByOpenAIClient(query: string): Promise<string> {
    const messages: Array<ChatCompletionMessageParam & { name?: string }> = [
      { role: 'user', content: query },
    ];
    const availableTools: Array<ChatCompletionTool> = this.availableTools.map((tool) => ({
      type: 'function',
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.inputSchema,
      },
    }));

    const response = await this.openaiClient.chat.completions.create({
      model: MODEL_NAME,
      max_tokens: MAX_TOKENS,
      messages,
      stream: false,
      tools: availableTools,
      tool_choice: 'required',
      max_completion_tokens: 4096,
    });

    const reasoningMessage = response.choices[0].message;
    const toolCalls = reasoningMessage.tool_calls;

    // tool callsがない場合はreasoningMessageに通常の回答が入っている
    if (!toolCalls) return reasoningMessage.content ?? '';

    messages.push(reasoningMessage);

    for (const toolCall of toolCalls) {
      const toolName = toolCall.function.name;
      const toolArgs = JSON.parse(toolCall.function.arguments);
      // FOR DEBUG
      console.log('Calling tool:', toolName, toolArgs, toolCall.id);

      const toolResult = await this.mcpClient.request(
        {
          method: 'tools/call',
          params: {
            name: toolName,
            arguments: toolArgs,
          },
        },
        // TODO: github-serverが提供するツールのスキーマがあるはずだがわからないので一旦any
        z.any(),
      );

      // FOR DEBUG
      console.log('Tool call result:', toolResult);
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const toolResultContents = toolResult.content.map((content: any) => {
        if (content.type === 'text') return content.text;
        throw Error(`content type not supported: ${content.type}, ${content}`);
      });
      messages.push({
        tool_call_id: toolCall.id,
        role: 'tool' as const,
        name: toolName,
        content: toolResultContents,
      });
    }

    console.log('messages');
    console.dir(messages, { depth: null });

    const followUpResponse = await this.openaiClient.chat.completions.create({
      model: MODEL_NAME,
      messages,
    });
    return followUpResponse.choices[0].message.content ?? '';
  }

  async mcpToolCallTest(): Promise<void> {
    try {
      const callToolResult = await this.mcpClient.request(
        {
          method: 'tools/call',
          params: {
            name: 'search_code',
            arguments: {
              q: 'test',
              per_page: 10,
              page: 1,
            },
          },
          // list_pull_requestsはまだ対応していない
          // params: {
          //   name: "list_pull_requests", // 呼び出すツール名
          //   arguments: {
          //     owner: "facebook",
          //     repo: "react",
          //     state: "closed",
          //     sort: "updated",
          //     direction: "desc",
          //     per_page: 10,
          //     page: 1,
          //   },
          // },
        },
        z.any(), // 型定義スキーマ
      );

      console.log('Tool call result:', callToolResult);
    } catch (error) {
      console.error('Error calling tool:', error);
    }
  }

  async close(): Promise<void> {
    await this.mcpClient.close();
  }
}
