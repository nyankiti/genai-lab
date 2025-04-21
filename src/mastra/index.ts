import { createLogger } from '@mastra/core/logger';
import { Mastra } from '@mastra/core/mastra';
import { weatherWorkflow } from './workflows';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
