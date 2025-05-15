
# mem0ai/mem0

**stars**: 29796

[View Repository on Github](https://github.com/mem0ai/mem0)

Memory for AI Agents; SOTA in AI Agent Memory; Announcing OpenMemory MCP - local and secure memory management.

## README要約
## mem0ai/mem0 リポジトリ概要 (日本語)

このリポジトリは、AIエージェントのためのメモリレイヤーである「Mem0」の実装です。AIエージェントのメモリ機能を向上させ、パーソナライズされたAIインタラクションを実現することを目指しています。

**主な特徴:**

*   **高性能:** OpenAI Memoryと比較して、LOCOMOベンチマークで+26%の精度向上、91%の高速化、90%のトークン使用量の削減を達成。
*   **マルチレベルメモリ:** ユーザー、セッション、エージェントの状態をシームレスに保持し、適応的なパーソナライゼーションを実現。
*   **開発者フレンドリー:** 直感的なAPI、クロスプラットフォームSDK、フルマネージドサービスオプションを提供。

**主なユースケース:**

*   AIアシスタント: 一貫性のある、コンテキスト豊富な会話
*   カスタマーサポート: 過去のチケットとユーザー履歴を記憶し、個別のサポートを提供
*   ヘルスケア: 患者の好みと履歴を追跡し、パーソナライズされたケアを実現
*   生産性 & ゲーム: ユーザーの行動に基づいた、適応型のワークフローと環境

**主な機能と利点:**

*   **OpenMemory MCPの発表:** ローカルで安全なメモリ管理を提供。
*   **さまざまなLLMのサポート:** `gpt-4o-mini` (OpenAI) をデフォルトとしていますが、様々なLLMに対応。
*   **シンプルなクイックスタート:** ホストプラットフォームとセルフホストパッケージの両方を提供。
*   **豊富な統合:** ChatGPT、ブラウザ拡張機能、Langgraph、CrewAIなどとの連携。

**利用方法:**

1.  **ホストプラットフォーム:** [Mem0 Platform](https://app.mem0.ai)でサインアップし、SDKまたはAPIキーを使用してメモリレイヤーを組み込む。
2.  **セルフホスト:** pipまたはnpmを使用してSDKをインストール。

```python
# サンプルコード（Python）
from openai import OpenAI
from mem0 import Memory

openai_client = OpenAI()
memory = Memory()

def chat_with_memories(message: str, user_id: str = "default_user") -> str:
    # 関連する記憶を検索
    relevant_memories = memory.search(query=message, user_id=user_id, limit=3)
    memories_str = "\n".join(f"- {entry['memory']}" for entry in relevant_memories["results"])

    # アシスタントの応答を生成
    system_prompt = f"You are a helpful AI. Answer the question based on query and memories.\nUser Memories:\n{memories_str}"
    messages = [{"role": "system", "content": system_prompt}, {"role": "user", "content": message}]
    response = openai_client.chat.completions.create(model="gpt-4o-mini", messages=messages)
    assistant_response = response.choices[0].message.content

    # 会話から新しい記憶を作成
    messages.append({"role": "assistant", "content": assistant_response})
    memory.add(messages, user_id=user_id)

    return assistant_response

def main():
    print("Chat with AI (type 'exit' to quit)")
    while True:
        user_input = input("You: ").strip()
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break
        print(f"AI: {chat_with_memories(user_input)}")

if __name__ == "__main__":
    main()
```

**その他:**

*   詳細なドキュメント: [https://docs.mem0.ai](https://docs.mem0.ai)
*   コミュニティ: Discord、Twitter
*   著作権表示: Apache 2.0


---

# airweave-ai/airweave

**stars**: 1617

[View Repository on Github](https://github.com/airweave-ai/airweave)

Airweave lets agents search any app

## README要約
## Airweave の日本語要約

**Airweave** は、エージェントがあらゆるアプリを検索できるようにするツールです。MCP互換であり、あらゆるアプリ、データベース、APIをシームレスに接続し、その内容をエージェントが利用できる知識に変換します。

**主な特徴:**

*   25以上のソースからの**データ同期**を最小限の設定で実現
*   **エンティティ抽出**と変換パイプライン
*   OAuth2を利用した**マルチテナント**アーキテクチャ
*   コンテンツハッシュを用いた**インクリメンタルアップデート**
*   エージェントクエリのための**セマンティック検索**
*   データ変更の**バージョン管理**
*   SaaSビルダー向けの**ホワイトラベル**サポート

**主な機能:**

*   **データ同期**: 25以上のソースからのデータ同期をサポートしています。
*   **セマンティック検索**: エージェントが自然言語で情報を検索できるようになります。
*   **SDK**: PythonおよびTypeScript/JavaScript向けのSDKが提供されており、Airweaveを簡単に利用できます。
*   **APIとUI**: REST APIとUI（ダッシュボード）の両方から利用できます。
*   **対応インテグレーション**: Asana、Calendly、ChatGPT、ClickUp、Confluence、Dropbox、Facebook、Github、Gmail、Google Calendar、Google Drive、Hubspot、Intercom、Jira、Linear、Linkedin、Mailchimp、Monday、MySQL、Notion、Onedrive、Oracle、Outlook Calendar、Outlook Mail、Perplexity、Postgresql、Salesforce、Slack、SQL Server、Sqlite、Stripe、Todoist、Trello、Whatsapp、Zendesk 等のアプリに対応しています。

**技術スタック:**

*   **フロントエンド**: React/TypeScript、ShadCN
*   **バックエンド**: FastAPI (Python)
*   **データベース**: PostgreSQL (メタデータ), Qdrant (ベクトル)
*   **デプロイ**: Docker Compose (開発環境), Kubernetes (本番環境)

**クイックスタート:**

1.  リポジトリをクローンします。
2.  `start.sh` を実行します。
3.  `http://localhost:8080` からダッシュボードにアクセスできます。

**ロードマップ:**

*   さらなるソースインテグレーション
*   大規模な同期のためのRedisワーカーキュー
*   イベントドリブン同期のためのWebhooks
*   HelmチャートによるKubernetesサポート

**その他:**

*   貢献は大歓迎です。
*   MITライセンスで公開されています。
*   DiscordコミュニティやGitHub Issuesを通じてサポートを受けられます。


---

# openai/simple-evals

**stars**: 3198

[View Repository on Github](https://github.com/openai/simple-evals)



## README要約
## リポジトリ概要

このリポジトリ `openai/simple-evals` は、言語モデルの評価を行うための軽量なライブラリです。OpenAI が最新モデルの精度を公開する際に、その透明性を確保するためにオープンソース化されました。

## ベンチマーク結果

リポジトリの README には、様々な言語モデルに対するベンチマーク結果が掲載されています。主な評価項目と、各モデルの評価結果は以下の通りです。

*   **MMLU (Measuring Massive Multitask Language Understanding)**: 多様なタスクに対するモデルの理解度を測定。
*   **GPQA (A Graduate-Level Google-Proof Q&A Benchmark)**: 難解な質問応答能力を評価。
*   **MATH (Measuring Mathematical Problem Solving)**: 数学の問題解決能力を評価。
*   **HumanEval (Evaluating Large Language Models Trained on Code)**: コード生成能力を評価。
*   **MGSM (Multilingual Grade School Math Benchmark)**: 多言語での小学校レベルの数学問題を評価。
*   **DROP (A Reading Comprehension Benchmark)**: パッセージからの離散的推論を必要とする読解力を評価。
*   **SimpleQA**: 短期的な事実性を評価。

評価対象のモデルには、`o3`, `o4-mini`, `o3-mini`, `o1`といった OpenAI のモデルの他、`GPT-4.1`, `GPT-4o`, `GPT-4.5-preview`, `GPT-4 Turbo` といった GPT 系モデル、さらに Anthropic の `Claude 3.5 Sonnet` と `Claude 3 Opus`、Meta の `Llama 3.1`, Grok, Gemini など、幅広いモデルが含まれています。

## 特徴と評価方法

このライブラリでは、特にゼロショット、連鎖思考（chain-of-thought）の設定に重点を置いています。これは、命令/チャットに調整されたモデルのパフォーマンスをより現実的に反映するためです。few-shot プロンプトやロールプレイングプロンプトといった手法は、ベースモデルや、命令に従うのが苦手なモデルを評価する際に使われる傾向があり、このライブラリでは採用されていません。

## 今後の開発と貢献

このリポジトリは積極的にメンテナンスされる予定はありませんが、以下の変更は受け入れられる可能性があります。

*   バグ修正
*   新しいモデルへのアダプターの追加
*   新しいモデルやシステムプロンプトを用いた評価結果の追加

なお、大規模な評価のコレクションを目的とした [openai/evals](https://github.com/openai/evals) とは異なり、このリポジトリは特定の評価に特化しています。

## サンプラー

OpenAI API および Anthropic API のためのサンプリングインターフェースが実装されています。これらの API を使用するには、事前に `*_API_KEY` 環境変数を設定する必要があります。

## セットアップ

HumanEval (Pythonプログラミング) と OpenAI API、Anthropic API を使用するためのセットアップ方法が記載されています。

## 評価の実行

評価を実行するには、以下のコマンドを使用します。

```bash
python -m simple-evals.simple_evals --list-models
```

これにより、評価可能なすべてのモデルがリスト表示されます。

```bash
python -m simple-evals.simple_evals --model <model_name> --examples <num_examples>
```

このコマンドを実行すると、OpenAI API を介して評価が実行されます。

## 注意事項

*   モデルの評価結果は、プロンプトに依存します。
*   o-series モデルはシステムプロンプトの使用をサポートしていません。
*   このリポジトリへの貢献は、MIT ライセンスの下で行われるものとします。
*   OpenAI は、このデータを使用して、製品の今後の改善を行う権利を留保します。

