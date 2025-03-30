import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { todaysDateString } from 'libs/date';
import { distDir } from 'libs/file';
import { todaysTechFeedPath } from 'summarizer/tech-feed';

const generateSummariesJson = async () => {
  const summaryJson: Record<string, string> = {};
  const fileContent = await readFile(todaysTechFeedPath(), 'utf-8');
  summaryJson['tech-feed'] = fileContent;

  const targetPath = path.join(distDir, todaysDateString(), 'summaries.json');
  await writeFile(targetPath, JSON.stringify(summaryJson, null, 2), 'utf-8');

  console.log(`✅ Summaries JSON generated at ${targetPath}`);
};

const main = async () => {
  await mkdir(path.join(distDir, todaysDateString()), { recursive: true });
  await generateSummariesJson();
};

(async () => {
  await main();
})();
