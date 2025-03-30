import { GoogleGenerativeAI } from '@google/generative-ai';
import type { GenerateContentRequest, GenerativeModel } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const geminiClientConfig = {
  model: 'gemini-2.0-flash-exp',
  temperature: 1.0,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
  timeout: 60000,
  useSearch: false,
};

export class GeminiClient {
  private client: GenerativeModel;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set');
    const genAI = new GoogleGenerativeAI(apiKey);
    this.client = genAI.getGenerativeModel(geminiClientConfig);
  }

  async generateContent(contents: string, systemInstruction?: string): Promise<string> {
    try {
      const request: GenerateContentRequest = {
        contents: [
          {
            role: 'user' as const,
            parts: [{ text: contents }],
          },
        ],
        systemInstruction,
      };
      const response = await this.client.generateContent(request);
      if (response.response.candidates && response.response.candidates.length > 0) {
        return response.response.candidates[0].content.parts[0].text || '';
      }
    } catch (error) {
      console.error('Error generating content:', error);
    }
    return '';
  }
}
