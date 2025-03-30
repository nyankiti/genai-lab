import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { distDir } from 'libs/file';
import { generatedSummariesDir } from 'summarizer/tech-feed';

const generateSummariesJson = async () => {
  const summaryDirs = await readdir(generatedSummariesDir());

  for (const dateStringDir of summaryDirs) {
    const summaryFiles = await readdir(path.join(generatedSummariesDir(), dateStringDir));
    const summaryJson: Record<string, string> = {};

    for (const fileName of summaryFiles) {
      const targetSummryPath = path.join(generatedSummariesDir(), dateStringDir, fileName);
      const fileContent = await readFile(targetSummryPath, 'utf-8');
      // tech-feed, redditなど
      summaryJson[fileName] = fileContent;
    }
    const targetPath = path.join(distDir, 'summary', `${dateStringDir}.json`);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, JSON.stringify(summaryJson, null, 2), 'utf-8');
    console.log(`✅ Summaries JSON generated at ${targetPath}`);
  }
};

/**
 * summaryが存在する日付を確認するためのsummariesList.jsonを生成する
 */
export const generateSummariesListJson = async () => {
  const summaryFiles = await readdir(path.join(distDir, 'summary'));
  const summaryList = summaryFiles.map((file) => path.parse(file).name);
  const targetPath = path.join(distDir, 'summary', 'list.json');
  await writeFile(targetPath, JSON.stringify(summaryList, null, 2), 'utf-8');
  console.log(`✅ Summaries list JSON generated at ${targetPath}`);
};

(async () => {
  await generateSummariesJson();
  await generateSummariesListJson();
})();
