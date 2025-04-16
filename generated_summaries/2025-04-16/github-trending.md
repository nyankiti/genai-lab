
# vanna-ai/vanna

**stars**: 15575

[View Repository on Github](https://github.com/vanna-ai/vanna)

🤖 Chat with your SQL database 📊. Accurate Text-to-SQL Generation via LLMs using RAG 🔄.

## README要約
## Vanna: SQLデータベースとの対話を実現するRAGフレームワーク

**概要:**

Vannaは、MITライセンスで公開されているオープンソースのPython RAG (Retrieval-Augmented Generation) フレームワークです。LLM (Large Language Model) を活用し、自然言語での質問からSQLクエリを生成し、データベースとの対話を可能にします。

**主な特徴:**

*   **SQL生成:** 自然言語での質問から正確なSQLクエリを生成。
*   **RAGアーキテクチャ:** データの検索拡張生成 (RAG) を利用し、精度を向上。
*   **柔軟な対応:** データベース、LLM、ベクトルデータベースを自由に選択可能。
*   **自己学習:** 実行されたクエリから自動的に学習し、精度を向上。
*   **セキュア:** データベースの内容はLLMやベクトルデータベースに送信されず、SQL実行はローカル環境で行われる。
*   **拡張性:** 独自のLLMやベクトルデータベースを簡単に拡張可能。

**動作の仕組み:**

1.  **トレーニング:** データベースのスキーマ (DDL文)、ドキュメント、SQLクエリをVannaに学習させ、RAG「モデル」を作成。
2.  **質問:** 訓練されたモデルに質問を投げかけると、SQLクエリが生成され、データベースで実行可能。

**ユーザーインターフェース:**

*   Jupyter Notebook
*   Streamlitアプリ (vanna-ai/vanna-streamlit)
*   Flaskアプリ (vanna-ai/vanna-flask)
*   Slackbot (vanna-ai/vanna-slack)

**サポートされている要素:**

*   **LLM:** OpenAI, Anthropic, Gemini, HuggingFace, AWS Bedrock, Ollama, Qianwen, Qianfan, Zhipu
*   **ベクトルデータベース:** AzureSearch, Opensearch, PgVector, PineCone, ChromaDB, FAISS, Marqo, Milvus, Qdrant, Weaviate, Oracle
*   **データベース:** PostgreSQL, MySQL, PrestoDB, Apache Hive, ClickHouse, Snowflake, Oracle, Microsoft SQL Server, BigQuery, SQLite, DuckDB

**インストール:**

```bash
pip install vanna
```

**利用方法:**

1.  LLMとベクトルデータベースを選択し、適切なインポート文を使用。
2.  DDL文、ドキュメント、SQLクエリを用いてモデルをトレーニング。
3.  `vn.ask()` メソッドで質問し、SQLクエリを取得し実行。

**RAG vs Fine-Tuning:**

*   **RAG:**
    *   LLMに依存しない。
    *   トレーニングデータの削除が容易。
    *   費用対効果が高い。
    *   将来性がある。
*   **Fine-Tuning:**
    *   プロンプトのトークン数を最小化したい場合に有効。
    *   トレーニングに時間がかかる。
    *   一般的に費用が高い。

**なぜVannaなのか？**

1.  **高度なデータセットでの高精度:** トレーニングデータ量に比例して精度が向上。
2.  **セキュアでプライベート:** データベースの内容は保護される。
3.  **自己学習:** 成功したクエリを学習し、精度を向上。
4.  **あらゆるSQLデータベースに対応:** Pythonで接続できるあらゆるSQLデータベースをサポート。
5.  **フロントエンドの選択肢:** Jupyter Notebook、Slackbot、Webアプリ、Streamlitアプリ、カスタムフロントエンドなど、多様なインターフェースに対応。

**リソース:**

*   [詳細ドキュメント](https://vanna.ai/docs/)
*   [ウェブサイト](https://vanna.ai)
*   [Discordサポートグループ](https://discord.gg/qUZYKHremx)


---

# microsoft/ai-agents-for-beginners

**stars**: 14937

[View Repository on Github](https://github.com/microsoft/ai-agents-for-beginners)

10 Lessons to Get Started Building AI Agents

## README要約
## microsoft/ai-agents-for-beginners リポジトリの要約

このリポジトリは、AIエージェントの構築を始めるための10個のレッスンからなるコースを提供しています。初心者向けに設計されており、AIエージェントの基礎を学ぶことができます。

**主な内容:**

*   **10個のレッスン:** AIエージェントの構築に必要な基礎知識を網羅。各レッスンは、1つのトピックに焦点を当て、自己完結型です。
*   **コードサンプル:** 各レッスンには、Azure AI FoundryやGitHub Model Catalogsなどのプラットフォームと連携するためのPythonコードサンプルが含まれています。
*   **動画と追加リソース:** 各レッスンには、READMEによる説明と短い動画があり、学習を深めるための追加リソースへのリンクも提供されています。
*   **多言語対応:** 英語、中国語(簡体字/繁体字/香港)、フランス語、日本語、韓国語、ポルトガル語(ブラジル)、スペイン語、ドイツ語、ペルシア語、ポーランド語、ヒンディー語の翻訳版READMEが用意されています。

**使用するフレームワークとサービス:**

*   Azure AI Agent Service
*   Semantic Kernel
*   AutoGen

**学習の準備:**

*   リポジトリをフォークして、コードサンプルを実行できます。
*   Azure AI Foundryを使用するには、Azureアカウントが必要です。
*   GitHub Modelsは無料で利用できますが、使用制限があります。

**その他:**

*   コースに関する質問やフィードバックは、GitHub IssuesまたはAzure AI Community Discordで受け付けています。
*   他のコースへのリンクも提供されており、Generative AIやWeb開発など、様々な分野を学ぶことができます。
*   コントリビューションを歓迎しており、Code of Conductに従ってコミュニティに参加できます。
*   Microsoftの商標やロゴの使用に関するガイドラインも提示されています。


---

# nautechsystems/nautilus_trader

**stars**: 5372

[View Repository on Github](https://github.com/nautechsystems/nautilus_trader)

A high-performance algorithmic trading platform and event-driven backtester

## README要約
## NautilusTrader の詳細な要約（日本語）

**NautilusTrader** は、Nautech Systems が開発した、高性能なアルゴリズム取引プラットフォームです。イベント駆動型のバックテスターとしても機能し、Python ネイティブ環境で、高度な取引戦略の開発と展開を支援します。

**主な特徴**:

*   **高性能**: Rust で記述されたコアコンポーネントと非同期ネットワーキング (tokio) により、高速な実行を実現。
*   **信頼性**: Rust の型安全性とスレッド安全性により、信頼性の高いシステムを構築。Redis を使用した状態永続化 (オプション)。
*   **移植性**: Linux、macOS、Windows で動作し、Docker でのデプロイも可能。
*   **柔軟性**: モジュール式のアダプターにより、REST API や WebSocket フィードとの統合が容易。
*   **高度な機能**: IOC、FOK、GTC などの高度な注文タイプ、条件付きトリガー、執行指示、OCO、OUO、OTO などのコンティンジェンシー注文に対応。
*   **カスタマイズ性**: ユーザー定義のコンポーネントの追加や、キャッシュとメッセージバスを活用したシステム構築が可能。
*   **バックテスティング**: ティックデータ、バーデータ、板情報、カスタムデータなど、様々なデータを用いて、複数の取引所、商品、戦略を同時並行的に実行。ナノ秒単位の解像度をサポート。
*   **ライブ取引**: バックテストとライブ取引で同一の戦略コードを使用可能。
*   **マルチ取引所**: マーケットメイキングや裁定取引戦略をサポート。
*   **AI トレーニング**: AI 取引エージェント (RL/ES) のトレーニングに利用できる高速バックテストエンジン。

**主な利点**:

*   **高性能なイベント駆動型 Python**: ネイティブバイナリコアコンポーネント。
*   **バックテストとライブ取引の整合性**: 同一の戦略コード。
*   **運用リスクの削減**: リスク管理機能の強化、論理的正確性、型安全性。
*   **高い拡張性**: メッセージバス、カスタムコンポーネント、カスタムデータ、カスタムアダプター。

**技術スタック**:

*   **Rust**: コアコンポーネントは Rust で記述され、高いパフォーマンスと安全性を実現。
*   **Python**: Python をネイティブ環境として提供し、Cython を利用して Rust との連携を強化。
*   **Cython**: Python に静的型付け言語の利点を取り入れ、豊富なライブラリとコミュニティエコシステムを活用。

**統合**:

NautilusTrader はモジュール設計されており、アダプターを介して様々な取引所やデータプロバイダーと接続できます。現在、以下の取引所およびデータプロバイダーとの統合が可能です。

*   Betfair
*   Binance/Binance US/Binance Futures
*   Bybit
*   Coinbase International
*   Databento
*   dYdX
*   Interactive Brokers
*   OKX
*   Polymarket
*   Tardis

**バージョン管理とリリース**:

*   **master**: 最新リリース版のソースコード。
*   **nightly**: experimental および開発中の機能を含む、develop ブランチから毎日 UTC 14:00 にマージ。
*   **develop**: 活発に開発が進められているブランチ。

**インストール**:

*   **PyPI**: `pip install -U nautilus_trader` で最新版をインストール。
*   **Nautech Systems パッケージインデックス**: stable および development ビルドのバイナリホイールが提供されており、最新版またはプレリリース版をインストール可能。
*   **ソースからのインストール**: 依存関係をインストール後、`uv sync --all-extras` でインストール可能。

**Redis**: NautilusTrader で Redis を使用することはオプションであり、キャッシュデータベースまたはメッセージバスのバックエンドとして構成する場合に必要です。

**Makefile**: 開発用のインストールやビルドタスクを自動化する `Makefile` が提供されています。

**Docker**: `python:3.12-slim` ベースの Docker コンテナが提供されており、様々なイメージバリアントが利用可能。

**開発**: [Developer Guide](https://nautilustrader.io/docs/latest/developer_guide/index.html) で開発に関する情報を提供。
**テスト**: Rust のテストには、[cargo-nextest](https://nexte.st) を使用。

**貢献**: 貢献を歓迎し、[CONTRIBUTING.md](https://github.com/nautechsystems/nautilus_trader/blob/develop/CONTRIBUTING.md) に従って、貢献の手順やコントリビューターライセンス契約 (CLA) を確認。プルリクエストは `develop` ブランチをターゲットとする。

**コミュニティ**: [Discord](https://discord.gg/NautilusTrader) で活発なコミュニティが形成されており、最新情報やサポートが提供されている。

**ライセンス**: GNU Lesser General Public License v3.0 に基づいてライセンスされており、コントリビューターライセンス契約 (CLA) が必要。


---

# fuma-nama/fumadocs

**stars**: 4431

[View Repository on Github](https://github.com/fuma-nama/fumadocs)

The beautiful docs framework with Next.js.

## README要約
## fumadocs リポジトリの要約

**fumadocs**は、Next.jsを使用して美しく洗練されたドキュメントウェブサイトを構築するためのフレームワークです。

**主な特徴:**

*   Next.jsを基盤としているため、高速で効率的なドキュメントサイトを構築できます。
*   詳細については、[公式ドキュメント](https://fumadocs.vercel.app)を参照してください。
*   **ESM (ECMAScript Modules)のみ**をサポートしています。

**その他:**

*   リポジトリには、ロゴ画像とバナー画像が含まれています。
*   ステッカー画像が用意されており、印刷して使用できます。
*   コントリビュートする際は、[コントリビューティングガイド](/.github/contributing.md)を参照する必要があります。


---

# Budibase/budibase

**stars**: 24172

[View Repository on Github](https://github.com/Budibase/budibase)

Create business apps and automate workflows in minutes. Supports PostgreSQL, MySQL, MariaDB, MSSQL, MongoDB, Rest API, Docker, K8s, and more 🚀 No code / Low code platform..

## README要約
## Budibase の概要

Budibase は、ビジネスアプリケーションを数分で作成し、ワークフローを自動化できるオープンソースのローコードプラットフォームです。PostgreSQL、MySQL、MariaDB、MSSQL、MongoDB、REST API、Docker、K8s など、幅広いデータソースと環境に対応しています。

**主な特徴:**

*   **迅速なアプリケーション開発:** フォーム、ポータル、承認アプリなど、様々なビジネスアプリケーションを素早く構築できます。
*   **オープンソースと拡張性:** GPL v3 ライセンスで公開されており、自由にコードを改変・拡張できます。
*   **多様なデータソースへの対応:** MongoDB、CouchDB、PostgreSQL、MariaDB、MySQL、Airtable、S3、DynamoDB、REST API など、様々なデータソースに接続できます。
*   **強力なコンポーネント:** 豊富なUIコンポーネントを利用して、洗練されたUIを簡単にデザインできます。CSSスタイリングオプションも充実しており、カスタマイズも可能です。
*   **ワークフローの自動化:** Webhook連携、メール送信など、手作業のプロセスを自動化できます。
*   **豊富なツールとの連携:** 様々なツールとの統合により、既存のスタックに合わせたアプリケーション構築が可能です。
*   **柔軟なデプロイ:** 独自のインフラストラクチャへの自己ホスト、または Budibase Cloud を利用できます。

**提供機能:**

*   シングルページアプリケーションの構築
*   レスポンシブデザイン
*   豊富なデータソースとの接続
*   ドラッグ＆ドロップによるUIデザイン
*   ワークフローの自動化
*   APIによる拡張性
*   ユーザー管理、グループ管理

**ドキュメントとコミュニティ:**

*   [公式ドキュメント](https://docs.budibase.com/docs)
*   [GitHub Discussions](https://github.com/Budibase/budibase/discussions) でのコミュニティサポート
*   機能リクエスト、バグレポート

**利用開始方法:**

*   **自己ホスト:** Docker、Kubernetes、Digital Ocean などの方法で、既存のインフラストラクチャにデプロイできます。
*   **Budibase Cloud:** Budibase Cloud を利用して、手軽にアプリケーションを構築できます。

**その他:**

*   Budibase API を利用することで、Budibase をバックエンドとして活用したり、他システムとの連携も可能です。
*   コントリビュートも歓迎しており、貢献方法に関するドキュメントが用意されています。
*   Code of Conduct に則って、コミュニティ運営が行われています。
*   ライセンスは GPL v3、クライアントとコンポーネントライブラリは MPL です。

