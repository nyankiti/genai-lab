import { GithubClient } from 'libs/github-clinet';
import { MyMCPClient } from 'libs/mcp-client';

async function main() {
  const client = new MyMCPClient();
  await client.connectToServer();
  console.log(
    await client.processQueryByQroq(
      'facebook/react リポジトリの直近一週間にマージされPRの内容についてmarkdown形式で要約して。どのような議論があったかも要約して。PRのリンクも参照できるようにして。',
    ),
  );
  await client.close();

  // const githubClient = new GithubClient();
  // const a = await githubClient.getMergedPRsLastWeek('facebook', 'react');
  // console.dir(a, { depth: null });
}

main();
