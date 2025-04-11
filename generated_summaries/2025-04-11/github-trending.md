
# girafe-ai/ml-course

**stars**: 2867

[View Repository on Github](https://github.com/girafe-ai/ml-course)

Open Machine Learning course

## README要約
## girafe-ai/ml-course リポジトリ概要

このリポジトリは、girafe-ai が提供する機械学習コースの内容をまとめたものです。

**主な内容:**

*   **コース概要:** 機械学習コースの最初の学期の内容を網羅しています。
*   **講義と資料:** 各週ごとの講義内容、動画、スライド、課題、締切、およびコメントが表形式で整理されています。内容は、ナイーブベイズ、kNN、線形回帰、線形分類、SVM、PCA、木構造、アンサンブル、勾配ブースティング、深層学習の基礎、Backpropagation、DropoutとBatchnorm、Embeddingsとseq2seqモデルなど、幅広いトピックをカバーしています。
*   **参考文献:** 機械学習に関する書籍や資料へのリンクが提供されています。
*   **前提条件:** コースを受講するための前提知識が、[./prerequisites.md](prerequisites.md) に記載されています。
*   **試験プログラム:** [./approximate\_program.pdf](approximate_program.pdf) に試験プログラムが記載されています。
*   **貢献者:** コースの作成に関わった主要な著者、貢献者、および協力者の一覧が示されています。

**補足:**

*   2023年のYandex MLトレーニングのブランチへのリンクも提供されています。
*   講義動画、スライド、課題へのリンクは、各週の内容に対応して提供されています。
*   一部の週では、講義動画の代わりにセミナー動画へのリンクが提供されていたり、講義が行われなかったりすることがあります。
*   参考文献は、書籍へのリンクを含みます。
*   コースはロシア語で提供されている部分が多くあります。

---

# clockworklabs/SpacetimeDB

**stars**: 12839

[View Repository on Github](https://github.com/clockworklabs/SpacetimeDB)

Multiplayer at the speed of light

## README要約
## SpacetimeDB の概要

**SpacetimeDB** は、[clockworklabs](https://clockworklabs.io/) によって開発された、超高速なマルチプレイヤーアプリケーション向けのデータベースシステムです。これは、データベースとサーバーを組み合わせたようなもので、クライアントとデータベースの間に従来のサーバーを置くことなく、クライアントが直接データベースに接続し、アプリケーションロジックを実行できます。

**主な特徴:**

*   **高速性:** メモリ内にアプリケーションの状態を保持し、Write-Ahead Log (WAL) を使用してデータの永続化を行うことで、最小限のレイテンシと最大限の速度を実現しています。これにより、リアルタイムアプリケーション (ゲーム、チャット、共同作業ツールなど) に適しています。
*   **モジュール:** アプリケーションロジックを「モジュール」と呼ばれる特別なストアドプロシージャとしてデータベース内に直接アップロードできます。これにより、単一の言語 (Rust) でアプリケーション全体を記述し、単一のバイナリとしてデプロイできます。
*   **スケーラビリティ:** スケーリングやDevOpsは不要であり、インフラストラクチャ管理の負担を軽減します。
*   **柔軟性:** ゲーム、チャット、共同作業ツールなど、さまざまなリアルタイムアプリケーションに対応できます。

**アーキテクチャ:**

SpacetimeDB は、クライアントから直接データベースにアクセスできるアーキテクチャを採用しています。クライアントはモジュール内のロジックを実行し、データベースはクライアント間で状態を同期します。

**利用用途:**

*   リアルタイムゲーム
*   チャットアプリケーション
*   共同作業ツール
*   その他、高速かつ低レイテンシが求められるアプリケーション

**インストール:**

SpacetimeDB は、macOS、Linux、Windows でインストールできます。インストールは、提供されているスクリプトを実行するか、ソースコードからビルドすることによって行います。Docker を使用して実行することも可能です。

**言語サポート:**

*   **サーバーサイド (モジュール):**
    *   Rust
    *   C#
*   **クライアントサイド:**
    *   Rust
    *   C#
    *   Typescript

**ライセンス:**

SpacetimeDB は BSL 1.1 ライセンスの下で利用できます。このライセンスはオープンソースライセンスではありませんが、数年後には AGPL v3.0 ライセンス (リンキング例外付き) に変換されます。

**その他の情報:**

*   公式サイト: [https://spacetimedb.com](https://spacetimedb.com)
*   ドキュメント: [https://spacetimedb.com/docs](https://spacetimedb.com/docs)
*   GitHub: [https://github.com/clockworklabs/SpacetimeDB](https://github.com/clockworklabs/SpacetimeDB)
*   Discord: [https://discord.gg/spacetimedb](https://discord.gg/spacetimedb)


---

# microsoft/ai-agents-for-beginners

**stars**: 12074

[View Repository on Github](https://github.com/microsoft/ai-agents-for-beginners)

10 Lessons to Get Started Building AI Agents

## README要約
## microsoft/ai-agents-for-beginners リポジトリの要約

このリポジトリは、AIエージェントの構築を始めるための10個のレッスンを提供するコースです。初心者向けに設計されており、AIエージェントの基本的な概念から応用までを網羅しています。

**主な内容:**

*   **10のレッスン:** AIエージェントの基礎を学ぶための10個のレッスンが用意されており、各レッスンは独立したトピックに焦点を当てています。
*   **コードサンプル:** 各レッスンには、Azure AI Foundry や GitHub Model Catalogs を利用した Python のコードサンプルが含まれています。
*   **AIエージェントのフレームワークとサービス:** Azure AI Agent Service、Semantic Kernel、AutoGen などの Microsoft の AI エージェント関連のフレームワークとサービスを使用します。
*   **多言語対応:** 英語、中国語（簡体字、繁体字、香港）、フランス語、日本語、韓国語、ポルトガル語（ブラジル）、スペイン語、ドイツ語、ペルシャ語、ポーランド語、ヒンディー語に翻訳されたREADMEが提供されています。
*   **その他のコース:** Microsoft が提供する「Generative AI for Beginners」をはじめとする他のコースへのリンクも掲載されています。

**学習に必要なもの:**

*   Azure AI Foundry (Azureアカウントが必要) または GitHub Models (無料、制限あり)
*   このリポジトリをフォークしてコードを実行できます。
*   各レッスンには、README ファイルと短いビデオが含まれており、理解を深めるための追加リソースへのリンクも提供されています。

**貢献とサポート:**

*   改善提案やコードのエラー報告は、Issue または Pull Request を通じて受け付けています。
*   AIエージェントの構築に関する質問や問題については、Azure AI Community Discord でサポートを得ることができます。

**その他:**

*   このプロジェクトは、Microsoft Open Source Code of Conduct に従っています。
*   Microsoftの商標およびブランドガイドラインに準拠して使用する必要があります。

このコースは、AIエージェントの世界への入門として、初心者にとって非常に役立つ内容を提供しています。


---

# NVIDIA/cuda-python

**stars**: 1932

[View Repository on Github](https://github.com/NVIDIA/cuda-python)

CUDA Python: Performance meets Productivity

## README要約
## NVIDIA/cuda-python の概要（日本語）

NVIDIA/cuda-python は、Python から NVIDIA の CUDA プラットフォームにアクセスするためのツール群です。パフォーマンスと生産性の両立を目指し、以下のコンポーネントで構成されています。

*   **cuda.core:** CUDA Runtime への Pythonic なアクセスと、その他のコア機能を提供します。
*   **cuda.bindings:** CUDA C API への低レベルな Python バインディングを提供します。
*   **cuda.cooperative:** Numba CUDA カーネル内で使用できる、CCCL の再利用可能なブロック全体およびワープ全体の *デバイス* プリミティブを提供する Python パッケージです。
*   **cuda.parallel:** CCCL の高性能でカスタマイズ可能な並列アルゴリズム（`sort`、`scan`、`reduce`、`transform` など）に簡単にアクセスできる Python パッケージです。これは *ホスト* で呼び出すことができます。
*   **numba.cuda:** Numba が CUDA GPU プログラミングのために提供するターゲットであり、Python コードの制限されたサブセットを CUDA カーネルとデバイス関数に直接コンパイルします。CUDA 実行モデルに従います。

NVIDIA CPU & GPU Math Libraries にアクセスするには、[nvmath-python](https://docs.nvidia.com/cuda/nvmath-python/latest) を参照してください。

現在、CUDA Python は既存のコンポーネントの改善と新しいコンポーネントの導入のため、再構築中です。以前の `cuda-python` パッケージで利用可能だったすべての機能は引き続き利用できます。インストールガイドと詳細については、[cuda.bindings](https://nvidia.github.io/cuda-python/cuda-bindings/latest) のドキュメントを参照してください。

## メタパッケージとしての cuda-python

`cuda-python` は、複数のサブパッケージをまとめたメタパッケージとして再構成されています。各サブパッケージは独立してバージョン管理されており、必要に応じて各コンポーネントを個別にインストールできます。

### サブパッケージ: `cuda.core`

`cuda.core` パッケージは、CUDA Runtime への慣用的な（Pythonic な）アクセスと、その他の機能を提供します。

その主な目的は以下の通りです。

1.  CUDA Driver、Runtime、および JIT コンパイラツールチェーンへの**慣用的（"pythonic"）**アクセスを提供すること。
2.  エンドツーエンドの CUDA 開発を迅速かつ完全に Python で実行できるようにすることで、**開発者の生産性**に焦点を当てること。
3.  新しい Python GPU ライブラリがゼロから開始する際に、CUDA 用の**自作** Python 抽象化を避けること。
4.  最新の CUDA 機能への対応と**メンテナンス**の負担を軽減すること。
5.  現在および将来の CUDA 開発者の**学習曲線**を平坦化すること。

### サブパッケージ: `cuda.bindings`

`cuda.bindings` パッケージは、CUDA ホスト API に完全にアクセスできる、低レベルなインターフェースの標準セットです。

利用可能なインターフェースは以下の通りです。

*   CUDA Driver
*   CUDA Runtime
*   NVRTC
*   nvJitLink
*   NVVM


---

# datawhalechina/llm-cookbook

**stars**: 18306

[View Repository on Github](https://github.com/datawhalechina/llm-cookbook)

面向开发者的 LLM 入门教程，吴恩达大模型系列课程中文版

## README要約
## datawhalechina/llm-cookbook リポジトリの要約

本リポジトリは、LLM（大規模言語モデル）開発に興味を持つ国内開発者向けに、実践的な入門チュートリアルを提供するプロジェクトです。吴恩达（アンドリュー・ウン）先生による大模型シリーズのコースを基盤とし、Prompt EngineeringからRAG開発、モデル微調整まで、LLM開発の全プロセスを網羅しています。

**プロジェクトの目的:**

*   LLM開発に必要な基礎知識と実践スキルを、国内の開発者向けにわかりやすく提供すること。
*   呉恩達先生のコースをベースに、翻訳、復元、最適化を行い、国内の学習環境に最適化されたコンテンツを提供すること。
*   Prompt Engineering、ChatGPT APIを利用したシステム構築、LangChainフレームワークを用いたアプリケーション開発など、LLM開発における様々な分野をカバーすること。

**主な内容:**

*   **コース構成:** 呉恩達先生の11個のコースを基にしたコンテンツが提供されており、必修と選修の2つのカテゴリに分類されています。
    *   **必修コース:** LLM開発の基礎となるPrompt Engineering、ChatGPTを用いたシステム構築、LangChainの基本と応用などを学習できます。
    *   **選修コース:** RAG開発、モデル微調整、評価ツール（Gradio, W&B）の活用、高度なPromptテクニックなど、より専門的な内容を学習できます。
*   **学習方法:** Pythonの基礎知識があれば誰でも学習を開始できます。OpenAIのAPIキーとJupyter Notebookが利用できる環境が推奨されています。
*   **リソース:** オンラインで読めるドキュメント、PDF版、双方向字幕付き動画、ソースコードなど、多様な学習リソースが提供されています。

**特徴:**

*   呉恩達先生の公式コースをベースにした質の高いコンテンツ。
*   国内学習者向けに最適化された翻訳、復元、コード例。
*   中文Promptの提供により、中国語環境でのLLM利用をサポート。
*   様々なレベルの学習者が、自分の興味や目的に合わせて学習できる柔軟な構成。

**貢献:**

*   本プロジェクトへのコントリビューションを歓迎しており、既存のコース形式に沿って新しいコースを開発し、PRを提出できます。

**その他:**

*   オンラインドキュメント、PDF、動画、ソースコードなどの学習リソース。
*   Datawhaleコミュニティによる活発なサポート。
*   貢献者一覧の表示。
*   ライセンス：CC BY-NC-SA 4.0


---

# getmaxun/maxun

**stars**: 10887

[View Repository on Github](https://github.com/getmaxun/maxun)

🔥 Open Source No Code Web Data Extraction Platform. Turn Websites To APIs & Spreadsheets With No-Code Robots In Minutes 🔥

## README要約
## Maxun の詳細な要約

**概要:**

getmaxun/maxun は、WebサイトをAPIやスプレッドシートに変換できる、オープンソースのノーコードWebデータ抽出プラットフォームです。数分でノーコードロボットを作成し、Webスクレイピングを自動化できます。

**主な特徴:**

*   **ノーコードデータ抽出:** コーディングなしでWebサイトからデータを抽出。
*   **自動化:** ロボットは自動でWebサイトを巡回し、データを収集。
*   **3つのアクション:**
    *   リストの取得 (Capture List): 構造化されたデータの抽出 (例: Amazonの商品)。
    *   テキストの取得 (Capture Text): 個々のテキストコンテンツの抽出。
    *   スクリーンショットの取得 (Capture Screenshot): Webページのスクリーンショットの取得 (全画面または表示部分)。
*   **ページネーションとスクロールの処理:** Webサイトのページングやスクロールに対応。
*   **スケジューリング:** ロボットを特定のスケジュールで実行可能。
*   **API化:** WebサイトをAPIとして利用可能。
*   **スプレッドシートへの変換:** データをスプレッドシートにエクスポート可能。
*   **BYOP (Bring Your Own Proxy):** プロキシ設定により、アンチボット対策を回避。
*   **統合:** Google Sheetとの連携。
*   **今後の機能:**
    *   Webサイトのレイアウト変更への対応（近日公開予定）
    *   ログインや2要素認証が必要なサイトへの対応（近日公開予定）

**インストール:**

1.  プロジェクトのルートフォルダを作成。
2.  `.env` ファイルを作成し、[ENVEXAMPLE](https://github.com/getmaxun/maxun/blob/master/ENVEXAMPLE) を参考に環境変数を設定。
3.  **Docker Compose (推奨):**
    *   `docker-compose.yml` をルートフォルダにコピー。
    *   `docker-compose up -d` コマンドを実行。
    *   フロントエンド: http://localhost:5173/、バックエンド: http://localhost:8080/ でアクセス。
4.  **Dockerなし:**
    *   Node.js、PostgreSQL、MinIO、Redisをインストール。
    *   `git clone https://github.com/getmaxun/maxun` でリポジトリをクローン。
    *   依存関係のインストール: `npm install` (ルートフォルダ) → `cd maxun-core && npm install && cd ..`
    *   ChromiumとPlaywrightのインストール: `npx playwright install --with-deps chromium`
    *   フロントエンドとバックエンドの起動: `npm run start`
    *   フロントエンド: http://localhost:5173/、バックエンド: http://localhost:8080/ でアクセス。

**環境変数:**

`.env`ファイルで以下の環境変数を設定する必要があります。

| 変数                 | 必須 | 説明                                                                           | デフォルト値       |
|----------------------|------|--------------------------------------------------------------------------------|--------------------|
| `BACKEND_PORT`       | Yes  | バックエンドのポート番号                                                      | 8080               |
| `FRONTEND_PORT`      | Yes  | フロントエンドのポート番号                                                    | 5173               |
| `BACKEND_URL`        | Yes  | バックエンドのURL                                                            | http://localhost:8080 |
| `VITE_BACKEND_URL`   | Yes  | フロントエンドからバックエンドへの接続に使用されるURL                         | http://localhost:8080 |
| `PUBLIC_URL`         | Yes  | フロントエンドのURL                                                            | http://localhost:5173 |
| `VITE_PUBLIC_URL`    | Yes  | バックエンドからフロントエンドへの接続に使用されるURL                         | http://localhost:5173 |
| `JWT_SECRET`         | Yes  | JWTの署名と検証に使用する秘密鍵                                                 |                    |
| `DB_NAME`            | Yes  | PostgreSQLデータベース名                                                      |                    |
| `DB_USER`            | Yes  | PostgreSQLデータベースのユーザー名                                               |                    |
| `DB_PASSWORD`        | Yes  | PostgreSQLデータベースのパスワード                                               |                    |
| `DB_HOST`            | Yes  | PostgreSQLデータベースサーバーのホストアドレス                                      |                    |
| `DB_PORT`            | Yes  | PostgreSQLデータベースサーバーのポート番号                                         |                    |
| `ENCRYPTION_KEY`     | Yes  | 機密データ（プロキシ、パスワード）の暗号化に使用されるキー                            |                    |
| `MINIO_ENDPOINT`     | Yes  | Robot Run Screenshots を保存するための MinIO のエンドポイントURL                      |                    |
| `MINIO_PORT`         | Yes  | MinIO サービスのポート番号                                                      |                    |
| `MINIO_CONSOLE_PORT` | No   | MinIO WebUI サービスのポート番号                                                 |                    |
| `MINIO_ACCESS_KEY`   | Yes  | MinIO への認証用のアクセスキー                                                 |                    |
| `GOOGLE_CLIENT_ID`   | No   | Google OAuth のクライアントID (Google Sheet 連携用)                                |                    |
| `GOOGLE_CLIENT_SECRET` | No   | Google OAuth のクライアントシークレット                                            |                    |
| `GOOGLE_REDIRECT_URI` | No   | Google OAuth のリダイレクトURI                                                    |                    |
| `AIRTABLE_CLIENT_ID`   | No   | Airtable OAuth のクライアントID (Airtable 連携用)                                  |                    |
| `AIRTABLE_REDIRECT_URI` | No   | Airtable OAuth のリダイレクトURI                                                    |                    |
| `REDIS_HOST`         | Yes  | Redis サーバーのホストアドレス (BullMQ を使用したスケジューリング用)               |                    |
| `REDIS_PORT`         | Yes  | Redis サーバーのポート番号                                                      |                    |
| `REDIS_PASSWORD`     | No   | Redis 認証用のパスワード                                                        |                    |
| `MAXUN_TELEMETRY`    | No   | 匿名利用データ送信を無効にする (デフォルト: 有効)                               |                    |

**仕組み:**

Maxun を使用すると、ユーザーのアクションをエミュレートし、データを抽出するカスタムロボットを作成できます。ロボットは、リストの取得、テキストの取得、またはスクリーンショットの取得のいずれかのアクションを実行できます。ロボットが作成されると、手動介入なしにデータを抽出し続けます。

**クラウド版:**

インフラストラクチャ管理なしでMaxunを実行し、大規模なデータ抽出を行うためのマネージドクラウド版も提供予定です。クラウド版では、アンチボット対策、プロキシローテーション、CAPTCHA解決も行われます。[クラウド版のウェイトリスト](https://docs.google.com/forms/d/e/1FAIpQLSdbD2uhqC4sbg4eLZ9qrFbyrfkXZ2XsI6dQ0USRCQNZNn5pzg/viewform)にご参加ください。

**ライセンス:**

AGPLv3

**その他:**

開発初期段階であり、フィードバックを歓迎。匿名でのフィードバックは[こちら](https://forms.gle/E8vRMVB7bUbsSktPA)から。


---

# mendableai/firecrawl

**stars**: 34949

[View Repository on Github](https://github.com/mendableai/firecrawl)

🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.

## README要約
## mendableai/firecrawl リポジトリ概要（日本語）

**概要:**

このリポジトリは、ウェブサイト全体をLLM（大規模言語モデル）対応のマークダウンまたは構造化データに変換するためのAPIサービス「Firecrawl」のものです。Firecrawlは、ウェブサイトのスクレイピング、クロール、データ抽出を単一のAPIで実現します。

**主な機能:**

*   **スクレイピング:** 指定されたURLの内容をLLM対応の形式（マークダウン、構造化データ、スクリーンショット、HTMLなど）で取得します。
*   **クロール:** ウェブサイトのすべてのアクセス可能なサブページをクロールし、各ページのデータをLLM対応の形式で取得します。
*   **マッピング（アルファ版）:** ウェブサイトのURLマップを高速に生成します。
*   **抽出:** 1つまたは複数のページ、またはウェブサイト全体から、プロンプトまたはスキーマに基づいて構造化データを抽出します。
*   **LLM抽出（ベータ版）:** スクレイピングしたページから構造化データを抽出します。
*   **検索:** ウェブ検索とスクレイピングを組み合わせ、検索クエリに対する完全なページコンテンツを取得します。
*   **アクション:** クラウド版限定。ウェブページの操作（クリック、スクロール、入力など）を実行してからコンテンツをスクレイピングします。
*   **バッチスクレイピング（新機能）:** 複数のURLを同時にスクレイピングする機能。

**提供形式:**

*   マークダウン
*   構造化データ
*   スクリーンショット
*   HTML
*   その他（リンク、メタデータなど）

**特徴:**

*   LLMに最適化されたデータ形式
*   プロキシ、アンチボットメカニズム、動的コンテンツ（JavaScriptレンダリング）への対応
*   柔軟なカスタマイズ（タグの除外、カスタムヘッダーによる認証壁の突破、最大クロール深度など）
*   PDF、docx、画像などのメディアの解析
*   高い信頼性
*   バッチ処理

**APIの使用方法:**

Firecrawl APIを使用するには、[firecrawl.dev](https://firecrawl.dev)でサインアップし、APIキーを取得する必要があります。

*   **スクレイピング:** `POST /v1/scrape` APIを使用します。
*   **クロール:** `POST /v1/crawl` APIを使用し、クロールジョブIDを取得して、`GET /v1/crawl/{id}` でステータスを確認します。
*   **マッピング:** `POST /v1/map` APIを使用します。
*   **抽出:** `POST /v1/extract` APIを使用します。
*   **検索:** `POST /v1/search` APIを使用します。

**SDKs:**

Python, Node.js, Go, Rust用のSDKが提供されています。Langchain, LlamaIndex, CrewAI, Composio, PraisonAI, Superinterface, Vectorize, Dify, Langflow, Flowise AI, Cargo, Pipedream, Zapier, Pabbly Connect などのLLMフレームワークやローコードフレームワークとの統合も可能です。

**ローカル実行:**

ローカルで実行する場合は、[CONTRIBUTING.md](https://github.com/mendableai/firecrawl/blob/main/CONTRIBUTING.md)に記載されているガイドを参照してください。

**オープンソースとクラウド版:**

FirecrawlはAGPL-3.0ライセンスで提供されるオープンソースプロジェクトですが、より多くの機能を提供するクラウド版サービス（[firecrawl.dev](https://firecrawl.dev)）も提供されています。クラウド版では、オープンソース版にはない機能（アクション、バッチスクレイピングなど）を利用できます。

**貢献:**

コントリビュートを歓迎しています。コントリビュートガイド（[CONTRIBUTING.md](https://github.com/mendableai/firecrawl/blob/main/CONTRIBUTING.md)）を読んでからプルリクエストを送信してください。セルフホストする場合は、セルフホストガイド（[SELF\_HOST.md](SELF_HOST.md)）を参照してください。

**ライセンス:**

このプロジェクトは主にGNU Affero General Public License v3.0 (AGPL-3.0)でライセンスされています。ただし、一部のコンポーネントはMITライセンスでライセンスされています。詳細は各ディレクトリ内のLICENSEファイルを参照してください。SDKおよび一部のUIコンポーネントはMITライセンスでライセンスされています。

**免責事項:**

Firecrawlを使用したスクレイピング、検索、クロールを行う際には、ウェブサイトのポリシーを尊重することが利用者の責任です。ウェブサイトのプライバシーポリシーと利用規約を遵守してください。デフォルトでは、Firecrawlはrobots.txtの指示に従います。


---

# microsoft/markitdown

**stars**: 47779

[View Repository on Github](https://github.com/microsoft/markitdown)

Python tool for converting files and office documents to Markdown.

## README要約
## MarkItDown の概要

MarkItDown は、Microsoft が開発した、ファイルや Office ドキュメントを Markdown に変換するための軽量な Python ツールです。LLM (大規模言語モデル) やテキスト分析パイプラインでの利用を目的としており、[textract](https://github.com/deanmalmgren/textract) と類似の機能を提供します。ただし、重要なドキュメント構造（見出し、リスト、テーブル、リンクなど）と内容を Markdown 形式で保持することに重点を置いています。MarkItDown の出力は、ある程度見やすく人間が読める形になることもありますが、あくまでテキスト分析ツールでの利用を目的としており、人間の消費を目的とした高忠実度のドキュメント変換には最適でない場合があります。

**主な特徴:**

*   **多様なファイル形式のサポート:** PDF、PowerPoint、Word、Excel、画像 (EXIF メタデータと OCR)、音声 (EXIF メタデータと音声書き起こし)、HTML、テキストベース形式 (CSV、JSON、XML)、ZIP ファイル、YouTube URL、EPub など、幅広いファイル形式に対応しています。
*   **Markdown を採用する理由:** Markdown はプレーンテキストに近く、最小限のマークアップで重要なドキュメント構造を表現できます。GPT-4o など主要な LLM は Markdown をネイティブに「話す」ことができ、Markdown を理解しています。また、Markdown はトークン効率にも優れています。
*   **オプションの依存関係:** 様々なファイル形式を有効にするために、オプションの依存関係があります。`pip install 'markitdown[all]'` で全ての依存関係をインストールできます。または、`pip install markitdown[pdf, docx, pptx]` のように個別にインストールすることも可能です。
*   **プラグインのサポート:** サードパーティプラグインをサポートしており、`markitdown --list-plugins` でインストールされたプラグインを一覧表示、`markitdown --use-plugins path-to-file.pdf` でプラグインを有効化できます。プラグインの開発については、`packages/markitdown-sample-plugin` を参照してください。
*   **Azure Document Intelligence の統合:** Azure Document Intelligence を使用した変換も可能です。
*   **Python API:** Python API を介して MarkItDown を利用できます。
*   **Docker イメージ:** Docker イメージが提供されており、手軽に利用できます。

**インストール:**

pip を使用して `pip install 'markitdown[all]'` でインストールできます。また、ソースコードからインストールすることも可能です。

**使用方法:**

*   **コマンドライン:** `markitdown path-to-file.pdf > document.md` または `markitdown path-to-file.pdf -o document.md` のように使用できます。パイプライン処理もサポートしています。
*   **Python API:** `from markitdown import MarkItDown` をインポートして、`MarkItDown` クラスをインスタンス化し、`.convert()` メソッドでファイルを変換します。Document Intelligence を使用する場合は、`docintel_endpoint` を指定します。LLM を使用する場合は、`llm_client` と `llm_model` を指定します。
*   **Docker:** Docker イメージを使用すると、簡単にファイル変換を実行できます。

**その他:**

*   **コントリビューション:** コントリビューションを歓迎しており、CLA (Contributor License Agreement) に同意する必要があります。
*   **コードオブコンダクト:** Microsoft オープンソースコードオブコンダクトに従っています。
*   **テスト:** `packages/markitdown` ディレクトリで `hatch test` を実行してテストできます。
*   **商標:** 商標やロゴの使用については、Microsoft のガイドラインに従う必要があります。

**変更点 (0.0.1 から 0.1.0):**

*   依存関係がオプションの機能グループに整理されました。
*   `convert_stream()` がバイナリファイルライクオブジェクト (バイナリモードで開かれたファイル、または `io.BytesIO` オブジェクトなど) を要求するようになりました。
*   `DocumentConverter` クラスのインターフェースが、ファイルパスではなくファイルライクストリームから読み込むように変更されました。一時ファイルは作成されなくなりました。プラグインメンテナまたはカスタム `DocumentConverter` を使用している場合はコードの更新が必要な可能性がありますが、`MarkItDown` クラスまたは CLI のみを使用している場合は変更は不要です。
*   `markitdown-mcp` を参照し、LLM アプリケーションとの統合に MCP (Model Context Protocol) サーバーが提供されています。
