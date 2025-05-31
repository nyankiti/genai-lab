
# getzep/graphiti

**stars**: 10282

[View Repository on Github](https://github.com/getzep/graphiti)

Build Real-Time Knowledge Graphs for AI Agents

## README要約
## Graphiti リポジトリ概要（日本語）

**Graphiti** は、AIエージェント向けに設計された、**リアルタイムの知識グラフ構築フレームワーク**です。ダイナミックな環境で動作するAIエージェント向けに、時間的側面を考慮した知識グラフを構築およびクエリすることを目的としています。従来の検索拡張生成（RAG）手法とは異なり、ユーザーのインタラクション、構造化データ、非構造化データ、および外部情報を継続的に統合し、一貫したクエリ可能なグラフを構築します。

**主な特徴:**

*   **動的データのリアルタイム統合:** 新しいエピソードをバッチ再計算なしに即座に統合。
*   **二重時間データモデル:** イベントの発生時間と取り込み時間を明示的に追跡し、正確な時点クエリを可能にします。
*   **効率的なハイブリッド検索:** セマンティック埋め込み、キーワード（BM25）、グラフ走査を組み合わせ、LLMによる要約に依存することなく、低レイテンシクエリを実現。
*   **カスタムエンティティ定義:** Pydanticモデルによる簡単なOntology (オントロジー)作成と開発者定義のエンティティのサポート。
*   **スケーラビリティ:** 大規模データセットを効率的に処理し、エンタープライズ環境に適した並列処理をサポート。

**Graphiti を使用してできること:**

*   動的なユーザーインタラクションとビジネスデータの統合と維持。
*   エージェントのステートベースの推論とタスク自動化を容易にします。
*   セマンティック検索、キーワード検索、グラフベース検索など、複雑で進化するデータに対するクエリ。

**主な利点:**

*   **リアルタイム更新:** データの頻繁な変更に対応。
*   **時間的コンテキスト:** 過去のデータに対する正確なクエリが可能。
*   **柔軟性:** カスタムエンティティタイプやスキーマに対応。
*   **効率性:** 大規模データセットでも低レイテンシを実現。

**Graphiti と GraphRAG の比較:**

| 特徴                     | GraphRAG                           | Graphiti                               |
| -------------------------- | ---------------------------------- | -------------------------------------- |
| **主な用途**             | 静的ドキュメントの要約              | 動的データ管理                         |
| **データ処理**             | バッチ処理                         | 継続的、増分更新                       |
| **知識構造**             | エンティティクラスタ、コミュニティ要約 | エピソードデータ、セマンティックエンティティ、コミュニティ |
| **検索手法**             | 逐次的なLLMによる要約           | ハイブリッド検索（セマンティック、キーワード、グラフベース） |
| **適応性**             | 低                                 | 高                                    |
| **時間処理**             | 基本的なタイムスタンプ追跡         | 明示的な二重時間追跡                   |
| **矛盾の処理**           | LLM主導の要約判断                 | 時間的なエッジの無効化                  |
| **クエリレイテンシ**       | 数秒から数十秒                      | 通常はサブ秒                       |
| **カスタムエンティティタイプ** | いいえ                                 | はい、カスタマイズ可能                  |
| **スケーラビリティ**       | 比較的低い                             | 高、大規模データセット向けに最適化         |

**インストール:**

*   Python 3.10以上
*   Neo4j 5.26以上 (埋め込みストレージのバックエンドとして)
*   OpenAI APIキー（LLM推論と埋め込み用）

```bash
pip install graphiti-core
```
または
```bash
poetry add graphiti-core
```
オプションで、Anthropic, Groq, Google GeminiなどのLLMプロバイダーをインストールできます。

**Quick Start:**

サンプルコードが提供されており、Neo4jへの接続、Graphiti インデックスの初期化、エピソードの追加、ハイブリッド検索による関係の検索、グラフ距離による検索結果の再ランキング、定義済みの検索レシピを使用したノード検索の方法を解説しています。

**MCP Server:**

MCP (Model Context Protocol) サーバーの実装が提供されており、AIアシスタントがMCPプロトコルを通じてGraphitiの知識グラフ機能と対話することを可能にします。

**REST Service:**

FastAPIを用いて構築されたAPIサービスが提供されており、Graphiti APIとの対話に利用できます。

**Azure OpenAIとの連携:**

Azure OpenAIをLLM推論と埋め込みの両方に使用できます。Azure OpenAIの認証情報を設定し、モデル名を指定する必要があります。

**Google Geminiとの連携:**

Google GeminiをLLM推論と埋め込みの両方に使用できます。Google APIキーを設定し、モデル名を指定する必要があります。

**ドキュメント:**

*   [ガイドとAPIドキュメント](https://help.getzep.com/graphiti)
*   [Quick Start](https://help.getzep.com/graphiti/graphiti/quick-start)
*   [LangChainのLangGraphとGraphitiを使ったエージェントの構築](https://help.getzep.com/graphiti/graphiti/lang-graph-agent)

**ステータスとロードマップ:**

Graphitiは活発に開発されており、APIの安定性を保ちつつ、カスタムグラフスキーマのサポート、検索機能の強化、MCPサーバーの改善、テストカバレッジの拡大などが計画されています。

**コントリビューション:**

コード、ドキュメント、問題解決など、あらゆる貢献を歓迎します。

**サポート:**

Zep Discord サーバーの #Graphiti チャンネルでサポートを受けられます。


---

# anthropics/courses

**stars**: 12398

[View Repository on Github](https://github.com/anthropics/courses)

Anthropic's educational courses

## README要約
## anthropic/courses リポジトリ概要

このリポジトリは、Anthropicが提供する教育コースをまとめたものです。現在は以下の5つのコースが含まれています。

**コースの推奨受講順**

1.  **[Anthropic API fundamentals](./anthropic_api_fundamentals/README.md)**: Claude SDKの基本を学びます。APIキーの取得、モデルパラメータの設定、マルチモーダルプロンプトの作成、レスポンスのストリーミングなどを学習します。
2.  **[Prompt engineering interactive tutorial](./prompt_engineering_interactive_tutorial/README.md)**: 主要なプロンプトエンジニアリング技術を段階的に学ぶ包括的なガイドです。[AWS Workshop version](https://catalog.us-east-1.prod.workshops.aws/workshops/0644c9e9-5b82-45f2-8835-3b5aa30b1848/en-US)も提供されています。
3.  **[Real world prompting](./real_world_prompting/README.md)**: 複雑な現実世界のプロンプトにプロンプトエンジニアリング技術を適用する方法を学びます。[Google Vertex version](https://github.com/anthropics/courses/tree/vertex/real_world_prompting)も存在します。
4.  **[Prompt evaluations](./prompt_evaluations/README.md)**: プロンプトの品質を測定するための、実運用向けのプロンプト評価の作成方法を学びます。
5.  **[Tool use](./tool_use/README.md)**: Claudeを活用したワークフローでツール使用を成功させるために必要なすべてを学びます。

**注意点**

これらのコースでは、受講者のAPIコストを抑えるため、Anthropicの最も低コストのモデルであるClaude 3 Haikuの使用を推奨しています。他のClaudeモデルを使用することも可能です。


---

# ccxt/ccxt

**stars**: 36612

[View Repository on Github](https://github.com/ccxt/ccxt)

A JavaScript / TypeScript / Python / C# / PHP / Go cryptocurrency trading API with support for more than 100 bitcoin/altcoin exchanges

## README要約
## CCXT – CryptoCurrency eXchange Trading Library の詳細な要約

**CCXT (CryptoCurrency eXchange Trading Library)** は、100以上の仮想通貨取引所に対応した、JavaScript、TypeScript、Python、C#、PHP、Go 言語向けのオープンソースの仮想通貨取引 API ライブラリです。

### 主な特徴

*   **多言語対応:** JavaScript、Python、PHP、C#、Go をサポート
*   **多数の取引所をサポート:** 100以上の仮想通貨取引所に対応
*   **完全実装された API:** パブリックおよびプライベート API の両方をサポート
*   **データ正規化:** クロス取引所分析やアービトラージのためのオプションのデータ正規化
*   **使いやすい統一 API:** すぐに統合できる統一 API
*   **クロスプラットフォーム:** Node.js、Python 3、PHP 8.1+、.NET Standard 2.0/2.1、Go 1.20+、およびWebブラウザで動作

### 免責事項

CCXT はサービスやサーバーではなく、**MIT ライセンス**の下で提供される、**非管理型のオープンソース API ブローカーソフトウェア**です。

*   **非管理型:** CCXT は取引の仲介者ではなく、トレーダーは CCXT をインストールして取引所に直接接続します。
*   **MIT ライセンス:** どのような目的にも使用できますが、自己責任でお願いします。
*   **API ブローカー:** 取引所の API ブローカープログラムからのリベートによって資金提供されており、多くの取引所と公式 API ブローカー契約を結んでいます。
*   **フリーソフトウェア:** 無料で使用でき、隠れた料金はありません。
*   **オープンソース:** コードを見て、変更できます。

### その他の情報

*   **インストール:** npm, PyPI, Packagist/Composer, NuGet, GO を使用したパッケージ管理と、GitHub リポジトリからのクローンによるインストールに対応しています。
*   **ドキュメント:** 詳細については、[マニュアル](https://github.com/ccxt/ccxt/wiki/) を参照してください。
*   **利用方法:**
    *   **パブリック API:** 市場データ、取引ペア、価格フィード、オーダーブック、取引履歴、ティックデータ、OHLC(V) などの公開情報にアクセスできます。
    *   **プライベート API:** 取引所のウェブサイトから API キーを取得し、アカウント残高の管理、注文の発注、資金の入出金、注文履歴の取得などを行うことができます。
*   **コントリビューティング:** 変更を適用する場合は、[CONTRIBUTING](https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md) ドキュメントを参照してください。
*   **サポート:** 開発チームへのサポートは、[Open Collective](https://opencollective.com/ccxt) を通じた寄付により行われています。
*   **ソーシャル:** Twitter, Medium, Discord, Telegram (Announcements, Chat) でコミュニティと繋がることができます。

### 対応取引所

[README の対応取引所のリスト](https://github.com/ccxt/ccxt#supported-cryptocurrency-exchanges)を参照ください。

---

# coleam00/local-ai-packaged

**stars**: 1329

[View Repository on Github](https://github.com/coleam00/local-ai-packaged)

Run all your local AI together in one package - Ollama, Supabase, n8n, Open WebUI, and more!

## README要約
## coleam00/local-ai-packaged リポジトリの日本語要約

**概要:**

このリポジトリは、ローカルで動作するAI環境を簡単に構築できるDocker Composeテンプレートです。Ollama、Supabase、n8n、Open WebUIなど、様々なツールを統合し、ローカルLLM（大規模言語モデル）の実行、Open WebUIを通じたチャットインターフェース、Supabaseによるデータベース・ベクトルストア・認証機能を提供します。

**特徴:**

*   **統合された環境:** Ollama, Supabase, n8n, Open WebUI, Flowise, Qdrant, Neo4j, SearXNG, Caddy, Langfuseといったツールを一つのパッケージとして提供。
*   **N8NによるローコードAIワークフロー:** n8nプラットフォームを利用して、400以上の統合と高度なAIコンポーネントを使ったローコードAIワークフローを構築可能。
*   **ローカルLLMの実行:** Ollamaを使用して、最新のローカルLLMをインストールし、実行可能。
*   **使いやすいチャットインターフェース:** Open WebUIで、ローカルモデルやN8Nエージェントとの対話が可能。
*   **データ管理:** Supabaseをデータベース、ベクトルストア、認証に使用。Qdrantもオプションとして利用可能。
*   **その他:** Flowise (AIエージェントビルダー), Neo4j (知識グラフエンジン), SearXNG (メタ検索エンジン), Caddy (HTTPS/TLS管理), Langfuse (LLMエンジニアリングプラットフォーム) を統合。
*   **N8N + OpenWebUI 連携:** Open WebUI で N8N エージェントと連携できる。
*   **環境変数設定:** .env ファイルを設定することで、Supabaseなどのサービスを簡単に設定可能。

**含まれる主なツール:**

*   **n8n:** ローコードプラットフォーム
*   **Supabase:** オープンソースのデータベースaaS
*   **Ollama:** ローカルLLM実行プラットフォーム
*   **Open WebUI:** ChatGPT風インターフェース
*   **Flowise:** ローコードAIエージェントビルダー
*   **Qdrant:** ベクトルストア
*   **Neo4j:** 知識グラフエンジン
*   **SearXNG:** メタ検索エンジン
*   **Caddy:** HTTPS/TLS管理
*   **Langfuse:** LLMエンジニアリングプラットフォーム

**前提条件:**

*   Python
*   Git/GitHub Desktop
*   Docker/Docker Desktop

**インストール:**

1.  リポジトリをクローン
2.  `.env.example` を `.env` にコピーし、環境変数を設定
3.  `start_services.py` スクリプトを実行して、サービスを開始

**利用可能なGPUプロファイル:**

*   `cpu`: CPUのみで実行
*   `gpu-nvidia`: Nvidia GPUを使用
*   `gpu-amd`: AMD GPUを使用 (Linuxのみ)
*   `none`: OllamaをDocker外で実行

**Open WebUI との連携:**

1.  Open WebUI に n8n_pipe.py のコードを Function として追加
2.  Function の設定で、n8n の Webhook URL を指定

**Cloudデプロイ:**

Linuxマシン (Ubuntu推奨) でのデプロイ手順と、ファイアウォール設定、DNSレコード設定について説明。

**アップグレード:**

`docker compose pull` と `python start_services.py` を実行して、コンテナを最新バージョンに更新。

**トラブルシューティング:**

SupabaseやGPU関連の問題に対する解決策が提供。

**関連情報:**

*   n8n 公式 AI テンプレートギャラリー
*   AI関連のキーコンセプトとテンプレートへのリンク
*   ビデオチュートリアル

**ライセンス:**

Apache License 2.0

---

**ポイント:**

このリポジトリは、ローカルAI環境を簡単に構築できるだけでなく、n8n との連携により、多様なAIワークフローをローコードで構築できる強力なツールです。GPUを活用した高速なLLM実行も可能で、様々な環境での利用に対応しています。


---

# KwaiVGI/LivePortrait

**stars**: 15601

[View Repository on Github](https://github.com/KwaiVGI/LivePortrait)

Bring portraits to life!

## README要約

