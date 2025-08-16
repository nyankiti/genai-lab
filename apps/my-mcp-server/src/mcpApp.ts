import { MyMCPClient } from 'mcp-client';

async function main() {
  const client = new MyMCPClient();
  await client.connectToServer();
  console.log(
    await client.processQuery(
      'facebook/react リポジトリの直近一週間にマージされPRの内容についてmarkdown形式で要約して。どのような議論があったかも要約して。PRのリンクも参照できるようにして。',
    ),
  );
  // console.log(
  //   await client.processQueryByOpenAIClient(
  //     'facebook/react リポジトリの直近一週間にマージされPRの内容についてmarkdown形式で要約して。どのような議論があったかも要約して。PRのリンクも参照できるようにして。',
  //   ),
  // );
  await client.close();
}

main();
