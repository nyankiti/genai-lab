import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { distDir } from 'libs/file';
import { generatedSummariesDir } from 'summarizer/tech-feed';

const generateSummariesJson = async () => {
  const summaryFiles = await readdir(generatedSummariesDir());
  const slugs = summaryFiles.map((file) => path.basename(file, path.extname(file)));

  for (const slug of slugs) {
    const todaysTechFeedPath = path.join(generatedSummariesDir(), `${slug}.md`);
    const summaryJson: Record<string, string> = {};
    const fileContent = await readFile(todaysTechFeedPath, 'utf-8');
    summaryJson['tech-feed'] = fileContent;

    const targetPath = path.join(distDir, slug, 'summaries.json');
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, JSON.stringify(summaryJson, null, 2), 'utf-8');
    console.log(`✅ Summaries JSON generated at ${targetPath}`);
  }
};

(async () => {
  await generateSummariesJson();
})();
