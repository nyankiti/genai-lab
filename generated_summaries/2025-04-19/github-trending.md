
# jlowin/fastmcp

**stars**: 5751

[View Repository on Github](https://github.com/jlowin/fastmcp)

🚀 The fast, Pythonic way to build MCP servers and clients

## README要約
## FastMCP v2 の詳細な要約（日本語）

**FastMCP v2** は、LLM（大規模言語モデル）サーバーとクライアントを構築するための高速かつ Pythonicな方法を提供するライブラリです。Model Context Protocol (MCP) を基盤としており、LLM にコンテキストとツールを提供するための標準化された方法を提供します。

**概要:**

*   FastMCP は、MCP サーバーとクライアントを簡単に構築するための、Pythonic なインターフェースを提供します。
*   ツール、リソース、プロンプトをクリーンで Pythonic なコードで作成し、コンポーネントを接続できます。
*   MCP プロトコルの複雑な詳細やサーバー管理を処理するため、開発者は優れたツールとアプリケーションの構築に集中できます。

**主な特徴:**

*   **サーバー:**
    *   直感的なデコレータを使用して、最小限のボイラープレートでサーバーを作成できます。
    *   既存のサーバーをプロキシして、設定やトランスポートを変更できます。
    *   複数のサーバーを組み合わせて、複雑なアプリケーションを構築できます。
    *   OpenAPI 仕様または FastAPI オブジェクトからサーバーを自動生成できます。
*   **クライアント:**
    *   プログラム的に MCP サーバーと対話できます。
    *   任意のトランスポートを使用して、任意の MCP サーバーに接続できます。
    *   手動介入なしでサーバーをテストできます。
    *   LLM サンプリングなどのコア MCP 機能で革新できます。

**MCP について:**

*   MCP (Model Context Protocol) は、LLM アプリケーションにデータと機能を提供するための標準化された方法です。
*   MCP サーバーは、**リソース**（GET エンドポイントに相当し、コンテキストに情報をロード）、**ツール**（POST/PUT エンドポイントに相当し、アクションを実行）、**プロンプト**（再利用可能なテンプレート）などを公開できます。
*   FastMCP は、これらのサーバーを構築および操作するための高レベルの Pythonic インターフェースを提供します。

**FastMCP の利点:**

*   **高速:** 高レベルのインターフェースにより、コードが少なく、開発が速くなります。
*   **シンプル:** 最小限のボイラープレートで MCP サーバーを構築できます。
*   **Pythonic:** Python 開発者にとって自然な使い心地を提供します。
*   **完全:** サーバーとクライアントの両方について、コア MCP 仕様の完全な実装を提供することを目指しています。

**v2 の新機能:**

FastMCP v2 では、プロキシ機能や MCP サーバーの構成などの高度な機能が導入され、OpenAPI 仕様や FastAPI オブジェクトからの自動生成も可能になりました。また、LLM サンプリングなどの新しいクライアント側の機能も導入されています。

**コアコンセプト:**

*   `FastMCP` サーバー: MCP アプリケーションを表す中心的なオブジェクトで、接続、プロトコルの詳細、ルーティングを処理します。
*   ツール: LLM が Python 関数を実行してアクションを実行できるようにします。計算、外部 API 呼び出し、副作用を含むタスクに最適です。`@mcp.tool()` デコレータで修飾します。
*   リソース: LLM にデータを提供します。主に情報を提供し、大きな計算や副作用がないように設計されています（GET リクエストに相当）。`@mcp.resource("your://uri")` デコレータで修飾します。URI 内の `{}` を使用して、動的リソースを定義できます。
*   プロンプト: LLM の再利用可能なテンプレートまたはインタラクションパターンを定義します。LLM がサーバーの機能を効果的に使用するようにガイドします。`@mcp.prompt()` デコレータで修飾します。関数は、希望するプロンプトコンテンツ（単純な文字列、`Message` オブジェクト、またはこれらのリスト）を返します。
*   コンテキスト: `fastmcp.Context` で型ヒントされたパラメータを追加することにより、ツールまたはリソース関数内で MCP サーバーの機能にアクセスできます。コンテキストオブジェクトは、ロギング、進捗状況レポート、リソースアクセス、リクエスト情報、およびサンプリング（高度な機能）を提供します。
*   イメージ: `fastmcp.Image` ヘルパークラスを使用して、イメージの入力と出力を簡単に処理できます。
*   MCP クライアント: `Client` クラスを使用すると、Python コードから任意の MCP サーバー（FastMCP 固有ではない）と対話できます。

**高度な機能:**

*   プロキシサーバー: 他の MCP エンドポイント（サーバーまたは他のクライアント接続）にリクエストをプロキシする FastMCP サーバーを作成します。
*   MCP サーバーの構成: 複数の FastMCP サーバーを作成し、それらを親サーバーに「マウント」して、より大きな MCP アプリケーションを構築します。ツール名とリソース URI のプレフィックスを自動的に処理し、競合を回避します。
*   OpenAPI & FastAPI 生成: 既存の Web API から FastMCP サーバーを自動的に生成します。
*   stderr の処理: サーバーの `stderr` をクライアントの `stderr` に転送します。

**サーバーの実行方法:**

*   開発モード (推奨): `fastmcp dev your_server_file.py` を使用します。
*   Claude Desktop 統合 (通常の使用): `fastmcp install your_server_file.py` を使用します。
*   直接実行 (高度なユースケース): `python your_server_file.py` または `uv run python your_server_file.py` を使用します。

**例:**

*   `simple_echo.py`: 基本的なツール、リソース、およびプロンプト。
*   `complex_inputs.py`: ツール入力に Pydantic モデルを使用する。
*   `mount_example.py`: 複数の FastMCP サーバーをマウントする。
*   `sampling.py`: MCP サーバー内で LLM の完了を使用する。
*   `screenshot.py`: Image オブジェクトを返すツール。
*   `text_me.py`: 外部 API と対話するツール。
*   `memory.py`: データベースとのインタラクションを含む、より複雑な例。

**貢献:**

貢献を歓迎します。


---

# virattt/ai-hedge-fund

**stars**: 25778

[View Repository on Github](https://github.com/virattt/ai-hedge-fund)

An AI Hedge Fund Team

## README要約
## virattt/ai-hedge-fund の詳細な要約

このリポジトリは、AIを活用したヘッジファンドのコンセプト実証プロジェクトです。教育目的であり、実際の取引や投資を意図したものではありません。

**目的:** AIを活用した取引判断の可能性を探求すること。

**特徴:**

*   **エージェントベースのシステム:** 複数のエージェントが連携して取引判断を行います。
*   **著名な投資家を模倣:** ベン・グレアム、ビル・アックマン、キャシー・ウッド、チャーリー・マンガー、マイケル・バーリー、ピーター・リンチ、フィル・フィッシャー、スタンリー・ドラッケンミラー、ウォーレン・バフェットといった、様々な投資家の戦略を模倣した10人のエージェントを搭載。
*   **分析エージェント:** 評価、センチメント、ファンダメンタルズ、テクニカル分析を行うエージェントも存在。
*   **リスク管理とポートフォリオ管理:** リスクマネージャーとポートフォリオマネージャーが、最終的な取引判断と注文生成を担います。
*   **シミュレーション:** 実際の取引は行わず、取引判断をシミュレーションします。

**免責事項:**

*   教育および研究目的のみ。
*   実際の取引や投資には使用不可。
*   保証なし。
*   過去のパフォーマンスは将来の結果を保証しない。
*   著者は金銭的損失に対する責任を負わない。
*   投資判断にはファイナンシャルアドバイザーに相談すること。

**セットアップ:**

1.  リポジトリのクローン
2.  Poetryのインストール (未インストールの場合は)
3.  依存関係のインストール
4.  環境変数の設定 (.env.example を .env にコピー)
5.  APIキーの設定 (OpenAI, Groq, Financial Datasetsなど)

**使用方法:**

*   **ヘッジファンドの実行:** `poetry run python src/main.py --ticker AAPL,MSFT,NVDA`
    *   `--ollama` フラグでローカルLLMの使用も可能。
    *   `--show-reasoning` フラグで各エージェントの推論を表示。
    *   `--start-date` と `--end-date` で期間指定も可能。
*   **バックテスターの実行:** `poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA`
    *   `--ollama` フラグでローカルLLMの使用も可能。
    *   `--start-date` と `--end-date` で期間指定も可能。

**プロジェクト構造:**

*   `src/`:
    *   `agents/`: 各エージェントの定義とワークフロー。
        *   例: `bill_ackman.py`, `fundamentals.py`, `warren_buffett.py`
    *   `tools/`: エージェントが使用するツール。
        *   `api.py`
    *   `backtester.py`: バックテスターツール。
    *   `main.py`: メインエントリポイント。
*   `pyproject.toml`: プロジェクト設定。

**コントリビュート:**

1.  リポジトリのフォーク
2.  フィーチャーブランチの作成
3.  変更のコミット
4.  ブランチのプッシュ
5.  プルリクエストの作成

**機能リクエスト:** [issue](https://github.com/virattt/ai-hedge-fund/issues) を作成し、`enhancement` タグを付与。

**ライセンス:** MIT License。


---

# linera-io/linera-protocol

**stars**: 23165

[View Repository on Github](https://github.com/linera-io/linera-protocol)

Main repository for the Linera protocol

## README要約
## linera-io/linera-protocol リポジトリ概要（日本語）

このリポジトリは、高度なスケーラビリティと低レイテンシを実現するWeb3アプリケーション向けの分散型ブロックチェーンインフラストラクチャであるLineraプロトコルの主要なリポジトリです。

**主な特徴:**

*   **Lineraプロトコル**: 分散型ブロックチェーンインフラストラクチャを実装。
*   **Rustで実装**: 効率性と安全性を重視してRustプログラミング言語を使用。
*   **Web3アプリケーション向け**: 高スループット、低レイテンシ、スケーラビリティのニーズに対応。

**リポジトリ構成:**

このリポジトリは、Lineraプロトコルの中核となる様々なクレートとディレクトリで構成されています。依存関係の低いものから高いものへと順に以下のものが含まれています。

*   `linera-base`: 暗号化など、基盤となる定義。
*   `linera-version`: バイナリやサービスでのバージョン情報を管理。
*   `linera-views`: キーバリューストアへの複雑なデータ構造のマッピング。
*   `linera-execution`: Lineraアプリケーションの実行と永続化されたデータ。
*   `linera-chain`: ブロックチェーン、証明書、クロスチェーンメッセージング。
*   `linera-storage`: `linera-chain`の上に構築されたストレージ抽象化。
*   `linera-core`: クライアントとサーバーロジック、ノード同期などの中核的なプロトコル。
*   `linera-rpc`: RPCメッセージのデータ型とデータスキーマ定義。
*   `linera-client`: Lineraクライアントのライブラリ (CLI、`linera-service`、`linera-web`で使用)。
*   `linera-service`: クライアント (CLIウォレット)、プロキシ (バリデータフロントエンド)、サーバー用の実行可能ファイル。
*   `linera-sdk`: Rustで記述されたLineraアプリケーション開発用のライブラリ（Wasm仮想マシン向け）。
*   `examples`: Rustで書かれたLineraアプリケーションのサンプル。

**クイックスタートガイド:**

リポジトリには、Linera CLIツールを使ったローカルテストネットワークの設定と、ウォレット間の転送を行う簡単な手順が記載されています。
以下は、その手順の概要です。

1.  LineraバイナリのコンパイルとPATHへの追加。
2.  ローカルテストネットワークの起動。
3.  ウォレットの初期化。
4.  チェーンのリクエスト。
5.  残高の確認。
6.  転送の実行。
7.  残高の再確認。
8.  ユーザーの残高への資金の投入。
9.  ユーザー残高の再確認。

より詳細な情報や複雑な例については、Lineraの[開発者向けマニュアル](https://linera.dev)や、リポジトリ内の[サンプルアプリケーション](./examples)を参照できます。


---

# browserbase/stagehand

**stars**: 10440

[View Repository on Github](https://github.com/browserbase/stagehand)

An AI web browsing framework focused on simplicity and extensibility.

## README要約
## browserbase/stagehand の詳細な要約 (日本語)

**概要**

Stagehand は、AIを活用したWebブラウジングを簡単かつ拡張可能にするためのフレームワークです。開発者は、コード（Playwright）と自然言語のどちらを使用するかを選択でき、本番環境でのブラウザ自動化に適しています。

**主な特徴**

*   **コードと自然言語の使い分け:** 未知のページをナビゲートする際にはAIを、正確な操作が必要な場合はコードを使用することで、柔軟な自動化を実現します。
*   **アクションのプレビューとキャッシュ:** AIアクションを実行前にプレビューでき、繰り返し行うアクションをキャッシュすることで時間とトークンを節約できます。
*   **1行のコードでコンピュータ利用モデルを統合:** OpenAIやAnthropicなどの最先端のコンピュータ利用モデルを1行のコードでブラウザに統合できます。

**利用例**

```typescript
// Playwrightの関数をpageオブジェクトに対して使用
const page = stagehand.page;
await page.goto("https://github.com/browserbase");

// act()を使用して個別の操作を実行
await page.act("click on the stagehand repo");

// コンピュータ利用エージェントを使用してより大きなアクションを実行
const agent = stagehand.agent({
    provider: "openai",
    model: "computer-use-preview",
});
await agent.execute("Get to the latest PR");

// extract()を使用してページからデータを抽出
const { author, title } = await page.extract({
  instruction: "extract the author and title of the PR",
  schema: z.object({
    author: z.string().describe("The username of the PR author"),
    title: z.string().describe("The title of the PR"),
  }),
});
```

**ドキュメントと開始方法**

*   詳細なドキュメントは [docs.stagehand.dev](https://docs.stagehand.dev) で参照できます。
*   Stagehandを始めるには、以下のコマンドでプロジェクトを作成できます。

    ```bash
    npx create-browser-app
    ```

*   また、[Quickstart Guide](https://docs.stagehand.dev/get_started/quickstart) も参照ください。

**ソースからのビルドと実行**

```bash
git clone https://github.com/browserbase/stagehand.git
cd stagehand
npm install
npx playwright install
npm run build
npm run example # ./examples/example.tsでブランクスクリプトを実行
```

**環境設定**

LLMプロバイダーとBrowserbaseの認証情報を設定するには、`.env` ファイルを編集します。

```bash
cp .env.example .env
nano .env # APIキーを追加するために.envファイルを編集
```

**貢献**

Stagehandへの貢献は歓迎されています。貢献を検討している場合は、[Slackコミュニティ](https://stagehand.dev/slack)でAnirudh KamathまたはPaul Kleinに連絡して、目標との整合性を確認することをお勧めします。

**謝辞**

Playwright、tarsier、gemini-zod、fuji-webに大きく依存しています。また、貢献者の方々にも感謝の意を表しています。

**ライセンス**

MITライセンスでライセンスされています。著作権は2025 Browserbase, Inc.に帰属します。


---

# nocobase/nocobase

**stars**: 14337

[View Repository on Github](https://github.com/nocobase/nocobase)

NocoBase is an extensibility-first, open-source no-code/low-code platform for building business applications and enterprise solutions.

## README要約
## NocoBase の概要

NocoBase は、ビジネスアプリケーションやエンタープライズソリューションを構築するための、拡張性を重視したオープンソースのノーコード/ローコードプラットフォームです。

**主な特徴:**

*   **オープンソース**: 自由に利用、カスタマイズできます。
*   **拡張性**: プラグインアーキテクチャを採用しており、機能拡張が容易です。まるでスマートフォンにアプリをインストールするような感覚で、機能を追加できます。
*   **データモデル駆動**: 従来のノーコードプラットフォームとは異なり、データ構造をUIから分離しています。これにより、複雑なニーズにも対応できる柔軟性を持ちつつ、ノーコードのシンプルさを両立しています。
*   **WYSIWYG (What You See Is What You Get)**: UIを直感的に設定でき、特別な知識がなくても管理画面でUIを直接設定できます。
*   **プラグインアーキテクチャ**: すべての機能をプラグインとして実装しており、新しい機能を簡単に追加できます。

**インストール方法:**

*   **Docker**: 推奨。ノーコード環境に適しており、アップグレードも容易です。
*   **create-nocobase-app CLI**: プロジェクトのビジネスコードが完全に独立しており、ローコード開発をサポートします。
*   **Gitソースコード**: 最新の未リリース版を試したい場合や、開発に参加したい場合に推奨されます。高い開発スキルが必要です。

**詳細情報:**

*   **ホームページ**: [https://www.nocobase.com/](https://www.nocobase.com/)
*   **オンラインデモ**: [https://demo.nocobase.com/new](https://demo.nocobase.com/new)
*   **ドキュメント**: [https://docs.nocobase.com/](https://docs.nocobase.com/)
*   **フォーラム**: [https://forum.nocobase.com/](https://forum.nocobase.com/)
*   **チュートリアル**: [https://www.nocobase.com/en/tutorials](https://www.nocobase.com/en/tutorials)
*   **ユースケース**: [https://www.nocobase.com/en/blog/tags/customer-stories](https://www.nocobase.com/en/blog/tags/customer-stories)
*   **リリースノート**: [https://www.nocobase.com/en/blog/timeline](https://www.nocobase.com/en/blog/timeline)

NocoBase は、数分でデプロイできるため、研究開発に時間や費用をかけずに、プライベートで制御可能かつ非常にスケーラブルなノーコード開発プラットフォームを構築できます。

