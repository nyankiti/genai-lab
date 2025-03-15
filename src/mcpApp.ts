import { GithubClient } from 'libs/github-clinet';
import { MyMCPClient } from 'libs/mcp-client';

async function main() {
  // const client = new MyMCPClient();
  // await client.connectToServer();
  // console.log(
  //   await client.processQueryByQroq(
  //     'facebook/react リポジトリの直近一週間のアクティビティをmarkdown形式で要約して',
  //   ),
  // );
  const githubClient = new GithubClient();
  const a = await githubClient.getRepositoryPullRequests('facebook', 'react');
  console.dir(a, { depth: null });
}

main();
