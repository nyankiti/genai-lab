
# gitroomhq/postiz-app

**stars**: 20244

[View Repository on Github](https://github.com/gitroomhq/postiz-app)

📨 The ultimate social media scheduling tool, with a bunch of AI 🤖

## README要約
## gitroomhq/postiz-app の詳細な要約（日本語）

**概要:**

このリポジトリは、AIを搭載した究極のソーシャルメディアスケジューリングツール「Postiz」のソースコードを公開しています。Postizは、Buffer、Hypefury、Twitter Hunterなどの競合製品に代わるもので、ソーシャルメディアの投稿管理、オーディエンスの構築、リードの獲得、ビジネスの成長に必要な全ての機能を提供します。

**主な機能:**

*   ソーシャルメディア投稿のスケジュール設定（多数のAI機能搭載）
*   アナリティクスによる効果測定
*   チームメンバーとの共同作業（投稿の交換、購入）
*   チームメンバーの招待、コメント、投稿のスケジュール設定
*   ホスト版とセルフホスト版の機能差は現時点ではありません。

**対応プラットフォーム:**

Instagram, Youtube, Dribbble, Linkedin, Reddit, TikTok, Facebook, Pinterest, Threads, X (Twitter), Slack, Discord, Mastodon, Bluesky

**技術スタック:**

*   NX (モノレポ)
*   NextJS (React)
*   NestJS
*   Prisma (デフォルトはPostgreSQL)
*   Redis (BullMQ)
*   Resend (メール通知)

**クイックスタート:**

プロジェクトを起動するには、[クイックスタートガイド](https://docs.postiz.com/quickstart)を参照してください。

**その他:**

*   Postiz Coinへの投資も推奨されています。
*   [ドキュメント](https://docs.postiz.com)で詳細を確認できます。
*   [YouTubeチュートリアル](https://youtube.com/@postizofficial)も用意されています。
*   開発者向けに[Discord](https://discord.postiz.com)が提供されています。
*   G2のレビュー調査への協力も呼びかけられています。

**ライセンス:**

このリポジトリのソースコードは、[AGPL-3.0ライセンス](LICENSE)の下で利用可能です。


---

# nautechsystems/nautilus_trader

**stars**: 6433

[View Repository on Github](https://github.com/nautechsystems/nautilus_trader)

A high-performance algorithmic trading platform and event-driven backtester

## README要約
## NautilusTrader の詳細な要約

NautilusTrader は、高性能なアルゴリズム取引プラットフォームであり、イベントドリブンバックテスターとしても機能します。オープンソースで、Rust を中心に、Python および Cython を組み合わせて構築されており、バックテストからライブ取引まで、コード変更なしで同一の戦略を実行できることが特徴です。

**主な特徴:**

*   **高速性:** Rust で記述されたコア部分と、非同期ネットワーキングに tokio を使用することで、高いパフォーマンスを実現。
*   **信頼性:** Rust による型安全性とスレッド安全性、Redis を利用した状態永続化（オプション）。
*   **移植性:** Linux、macOS、Windows で動作し、Docker を利用したデプロイも可能。
*   **柔軟性:** モジュール化されたアダプターにより、REST API や WebSocket フィードなど、様々なデータソースや取引所に接続可能。
*   **高度な機能:** IOC、FOK、GTC、GTD、DAY、AT\_THE\_OPEN、AT\_THE\_CLOSE などの執行条件、post-only、reduce-only、iceberg などの執行指示、OCO、OUO、OTO などのコンティンジェンシー注文に対応。
*   **カスタマイズ性:** ユーザー定義のコンポーネント追加や、キャッシュとメッセージバスを活用したシステム構築が可能。
*   **バックテスト:** ナノ秒単位の解像度で、複数の取引所、銘柄、戦略を同時にバックテスト可能。ティック、バー、オーダーブック、カスタムデータなど、様々なデータに対応。
*   **ライブ取引:** バックテストとライブ取引で同一の戦略コードを使用可能。
*   **マルチ取引所:** 市場メイキングや裁定取引など、様々な戦略に対応。
*   **AI トレーニング:** 高速なバックテストエンジンは、AI トレーディングエージェント（RL/ES）のトレーニングにも利用可能。

**技術的な側面:**

*   **Rust:** パフォーマンスと安全性を重視したシステムプログラミング言語。メモリ安全性とスレッド安全性をコンパイル時に保証。
*   **Python:** データサイエンス、機械学習、AI の分野で広く利用されている言語。NautilusTrader では、Python の使いやすさを活かしつつ、Cython を用いて静的型付けを導入し、パフォーマンスと型安全性を向上。
*   **Cython:** Python の機能を拡張し、静的型付けと C/C++ との連携を可能にする。

**利用用途:**

*   **アルゴリズム取引戦略の開発とバックテスト:** 過去のデータを用いて、イベントドリブンなエンジンで戦略を検証。
*   **ライブ取引への戦略のデプロイ:** バックテストと同一のコードで、ライブ取引環境で戦略を実行。
*   **高頻度取引:** FX、株式、先物、オプション、暗号資産、ベッティングなど、様々な資産クラスと取引タイプに対応。
*   **AI トレーディングエージェントのトレーニング:** 高速なバックテスト環境を利用して、強化学習などの AI モデルを訓練。

**インストール:**

*   **PyPI からのインストール:** `pip install -U nautilus_trader`
*   **Nautech Systems パッケージインデックスからのインストール:**
    *   最新の安定版: `pip install -U nautilus_trader --index-url=https://packages.nautechsystems.io/simple`
    *   開発版 (ナイトリー、開発ブランチ): `--pre` オプションを使用

**その他:**

*   **バージョン:** 安定版と、開発ブランチからのナイトリー版が提供される。
*   **Redis:** キャッシュデータベースやメッセージバスを使用する場合に必要（オプション）。
*   **Docker:** Docker イメージが提供されており、`jupyterlab` がインストールされたものも利用可能。
*   **開発:** 開発者向けガイドが提供されており、Rustテストには `cargo-nextest` が推奨。
*   **コミュニティ:** Discord サーバーにて、活発なコミュニティが形成されている。
*   **ライセンス:** GNU Lesser General Public License v3.0。
*   **その他:** ドキュメント、ウェブサイト、サポート体制も充実。

NautilusTrader は、Python をメイン言語として使用しながら、Rust のパフォーマンスと安全性を最大限に活用することで、高品質なアルゴリズム取引プラットフォームを提供しています。


---

# MODSetter/SurfSense

**stars**: 5010

[View Repository on Github](https://github.com/MODSetter/SurfSense)

Open Source Alternative to NotebookLM / Perplexity / Glean, connected to external sources such as search engines (Tavily, Linkup), Slack, Linear, Notion, YouTube, GitHub, Discord and more.

## README要約
## SurfSense の概要

SurfSense は、NotebookLM や Perplexity のような AI リサーチツールに代わるオープンソースの代替品です。検索エンジン (Tavily、LinkUp)、Slack、Linear、Notion、YouTube、GitHub、Discord などの外部ソースに接続することで、個人の知識ベースとの連携を強化し、高度なカスタマイズが可能な AI リサーチエージェントとしての機能を提供します。

**主な特徴:**

*   **アイデア**: 個人的な知識ベースに統合された、高度にカスタマイズ可能なプライベート NotebookLM と Perplexity
*   **ファイル形式の多種多様なアップロード**: ドキュメント、画像、動画など、50 以上のファイル形式のコンテンツを個人の知識ベースに保存
*   **強力な検索**: 保存されたコンテンツから素早く検索
*   **保存されたコンテンツとのチャット**: 自然言語で対話し、引用付きの回答を取得
*   **引用付き回答**: Perplexity のように引用付きの回答を提供
*   **プライバシーとローカル LLM サポート**: Ollama ローカル LLM との互換性
*   **自己ホスト可能**: オープンソースでローカルに簡単にデプロイ
*   **ポッドキャスト**: 高速なポッドキャスト生成エージェント（3 分のポッドキャストを 20 秒以下で作成）、チャットの会話をオーディオコンテンツに変換、複数の TTS プロバイダ (OpenAI, Azure, Google Vertex AI) をサポート
*   **高度な RAG (Retrieval-Augmented Generation) 技術**:
    *   150 以上の LLM をサポート
    *   6000 以上の埋め込みモデルをサポート
    *   主要なリランキングツールをすべてサポート (Pinecode, Cohere, Flashrank など)
    *   階層的なインデックス (2 層 RAG セットアップ) を使用
    *   ハイブリッド検索 (セマンティック検索 + 全文検索 + Reciprocal Rank Fusion) を利用
    *   RAG as a Service API バックエンド

**外部ソースとの連携:**

*   検索エンジン (Tavily、LinkUp)
*   Slack
*   Linear
*   Notion
*   YouTube 動画
*   GitHub
*   Discord
*   その他（今後追加予定）

**サポートされるファイル形式:**

LlamaCloud と Unstructured の ETL サービスによって、以下のファイル形式がサポートされています。詳細は README を参照してください。

*   **ドキュメント & テキスト:** (LlamaCloud: 50+ フォーマット, Unstructured: 11 フォーマット)
*   **プレゼンテーション:** (LlamaCloud: 5 フォーマット, Unstructured: 2 フォーマット)
*   **スプレッドシート & データ:** (LlamaCloud: 28 フォーマット, Unstructured: 4 フォーマット)
*   **画像:** (LlamaCloud: 11 フォーマット, Unstructured: 7 フォーマット)
*   **オーディオ & ビデオ:** (.mp3, .mpga, .m4a, .wav, .mp4, .mpeg, .webm)
*   **Eメール & コミュニケーション:** (Unstructured: 3 フォーマット)

**クロスブラウザ拡張機能:**
SurfSense 拡張機能を使用すると、認証保護されたウェブページを含む、任意のウェブページを保存できます。

**インストール方法:**

*   **Docker インストール**: 依存関係がコンテナ化されており、最も簡単な方法です。pgAdmin によるデータベース管理 (Web UI) 付き、`.env` ファイルによる環境変数カスタマイズ、デプロイオプションの柔軟性 (フルスタックまたはコアサービスのみ)。
    *   [Docker Setup Guide](DOCKER_SETUP.md) および [Deployment Guide](DEPLOYMENT_GUIDE.md) を参照してください。
*   **手動インストール**: セットアップをより詳細に制御したい場合や、カスタマイズが必要な場合に推奨されます。
    *   [manual-installation](https://www.surfsense.net/docs/manual-installation) を参照してください。

**インストール前の準備:**
*   PGVector セットアップ
*   Unstructured.io API キー
*   その他の必要な API キー

**技術スタック:**

*   **バックエンド:** FastAPI, PostgreSQL with pgvector, SQLAlchemy, Alembic, FastAPI Users, LangGraph, LangChain, LiteLLM 経由での LLM 統合, リランキングツール, ハイブリッド検索, ベクトル埋め込み, pgvector, Chonkie (高度なドキュメントチャンキング)
*   **フロントエンド:** Next.js, React, TypeScript, Vercel AI SDK Kit UI Stream Protocol, Tailwind CSS, Shadcn, Lucide React, Framer Motion, Sonner, Geist, React Hook Form, Zod, @hookform/resolvers, @tanstack/react-table
*   **DevOps:** Docker, Docker Compose, pgAdmin
*   **拡張機能:** Plasmo 上の Manifest v3

**今後の開発予定:**

*   より多くのコネクタの追加
*   マイナーバグの修正
*   ドキュメントチャットの実装
*   ポッドキャストの実装

**貢献:**

貢献は大歓迎です。スターを付けるだけでも、または問題を見つけて作成することでも貢献できます。
バックエンドの微調整も常に歓迎されています。

