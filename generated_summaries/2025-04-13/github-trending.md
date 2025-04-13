
# colinhacks/zod

**stars**: 36804

[View Repository on Github](https://github.com/colinhacks/zod)

TypeScript-first schema validation with static type inference

## README要約
## colinhacks/zod リポジトリの日本語要約

このリポジトリは、TypeScriptファーストのスキーマ検証ライブラリ「Zod」です。Zodは、シンプルなデータ型から複雑なネストされたオブジェクトまで、あらゆるデータ型を「スキーマ」として宣言し、検証します。

### 主な特徴

- **TypeScriptとの統合**: Zodは、重複した型宣言をなくすことを目指しています。一度バリデータを宣言すれば、Zodは自動的に静的なTypeScript型を推論します。これにより、よりシンプルな型を組み合わせて複雑なデータ構造を容易に構築できます。
- **ゼロ依存**: 外部ライブラリに依存せず、軽量（圧縮・最小化で8KB）です。
- **Node.jsおよびモダンブラウザ対応**: 幅広い環境で利用できます。
- **イミュータブル**: メソッド（例：`.optional()`）は新しいインスタンスを返します。
- **簡潔で連鎖可能なインターフェース**: 直感的な記述方法で、可読性の高いコードを書けます。
- **関数的アプローチ**: データ検証ではなく、データ解析に焦点を当てています。
- **JavaScriptにも対応**: TypeScriptを使用せずにJavaScriptプロジェクトでも利用できます。

### バージョン4について

現在、Zod 4がベータ版で利用可能です。詳細については、[https://v4.zod.dev/v4](https://v4.zod.dev/v4) を参照してください。

### 機能

Zodは、以下の要素をサポートしています。

- **プリミティブ型**: `string`, `number`, `bigint`, `boolean`, `date`, `symbol`, `undefined`, `null`, `void`, `any`, `unknown`, `never`
- **型変換**: プリミティブ型に対する型変換をサポートしています。例えば、文字列を数値に変換できます。
- **リテラル型**: `"hello world"` や `5` のようなリテラル型を表現します。
- **文字列検証**: `max`, `min`, `length`, `email`, `url`, `emoji`, `uuid`, `nanoid`, `cuid`, `cuid2`, `ulid`, `regex`, `includes`, `startsWith`, `endsWith`, `datetime` などの検証メソッドを提供しています。
- **数値検証**: `gt`, `gte`, `lt`, `lte`, `int`, `positive`, `nonnegative`, `negative`, `nonpositive`, `multipleOf`, `finite`, `safe` などの検証メソッドを提供しています。
- **BigInt検証**: `gt`, `gte`, `lt`, `lte`, `positive`, `nonnegative`, `negative`, `nonpositive`, `multipleOf` などの検証メソッドを提供しています。
- **Boolean検証**:
- **Date検証**: `min`, `max` などの検証メソッドを提供しています。
- **Enum検証**: `z.enum` と `z.nativeEnum` を使用して、enum型を検証できます。
- **Optional型**: `z.optional()` で任意のスキーマをオプションにできます。
- **Nullable型**: `z.nullable()` でnullable型を生成できます。
- **オブジェクト**: オブジェクトスキーマを定義し、`.shape`, `.keyof`, `.extend`, `.merge`, `.pick/.omit`, `.partial`, `.deepPartial`, `.required`, `.passthrough`, `.strict`, `.strip`, `.catchall` などのメソッドで操作できます。
- **配列**: `z.array()` で配列を定義し、`.element`, `.nonempty`, `.min/.max/.length` などのメソッドで操作できます。
- **Tuple型**: 固定数の要素と、それぞれ異なる型を持つTupleを定義できます。
- **Union型**: `z.union()` または `.or` で「OR」型を定義できます。
- **Discriminated Union型**: `z.discriminatedUnion()` で、特定のキーを持つオブジェクトのUnion型を定義できます。
- **Record型**: `z.record()` で、`Record<string, number>`のような型を検証できます。
- **Map型**: `z.map()` でMap型を検証できます。
- **Set型**: `z.set()` でSet型を検証できます。
- **Intersection型**: `z.intersection()` または `.and` で「AND」型を定義できます。
- **再帰型**: `z.lazy()` を使用して再帰的なスキーマを定義できます。
- **Promise型**: `z.promise()` でPromise型を検証できます。
- **Instanceof**: `z.instanceof()` でクラスのインスタンスを検証できます。
- **Function型**: `z.function()` で関数の入力と出力を検証できます。
- **Preprocess**: `z.preprocess()` で、解析前にデータの変換を適用できます。
- **カスタムスキーマ**: `z.custom()` で、Zodが直接サポートしていない型（テンプレート文字列リテラルなど）のスキーマを作成できます。

### スキーマメソッド

すべてのZodスキーマには、次のメソッドが含まれています。

- `.parse`: データを検証し、有効な場合は型付きの値を返します。無効な場合はエラーをスローします。
- `.parseAsync`: 非同期の[refinements](#refine) または [transforms](#transform)を使用する場合に使用します。
- `.safeParse`: 検証失敗時にエラーをスローせず、成功またはエラーのオブジェクトを返します。
- `.safeParseAsync`: `.safeParse` の非同期バージョンです。
- `.refine`: カスタム検証ロジックを提供できます。
- `.superRefine`: より高度な検証とエラー処理を提供します。
- `.transform`: データの変換を定義できます。
- `.default`: デフォルト値を設定します。
- `.describe`: スキーマに説明を追加します。
- `.catch`: 解析エラーが発生した場合に返す値を設定します。
- `.optional`: スキーマをオプションにします。
- `.nullable`: スキーマをnullableにします。
- `.nullish`: スキーマをnullishにします。
- `.array`: スキーマの配列を作成します。
- `.promise`: Promise型を作成します。
- `.or`: Union型を作成します。
- `.and`: Intersection型を作成します。
- `.brand`: 型にブランドを付与します。
- `.readonly`: スキーマをreadonlyにします。
- `.pipe`: スキーマをパイプラインとして連結します。

### その他の情報

- Zodには、型推論、ジェネリック関数の記述、エラー処理、エラーフォーマットに関するガイドとコンセプトがあります。
- 他の検証ライブラリとの比較も行われています（Joi, Yup, io-ts, Runtypes, Ow）。
- リポジトリには変更ログも含まれています。

### インストール

```bash
npm install zod       # npm
deno add npm:zod      # deno
yarn add zod          # yarn
bun add zod           # bun
pnpm add zod          # pnpm
```

### 免責事項

この要約は、与えられたリポジトリの説明とREADMEに基づいて作成されました。詳細については、元のリポジトリを参照してください。


---

# n8n-io/n8n

**stars**: 79572

[View Repository on Github](https://github.com/n8n-io/n8n)

Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.

## README要約
## n8n の概要

n8n は、技術チーム向けに設計されたワークフロー自動化プラットフォームです。ノーコードのスピードとコードの柔軟性を両立し、400以上の連携機能、ネイティブAI機能、そしてフェアコードライセンスを備えています。データとデプロイメントを完全に制御しながら、強力な自動化を構築できます。

**主な機能:**

*   **柔軟なコーディング:** JavaScript/Pythonでのコーディング、npmパッケージの追加、ビジュアルインターフェースの利用が可能。
*   **AI-Nativeプラットフォーム:** LangChainに基づいたAIエージェントワークフローを、独自のデータとモデルで構築。
*   **フルコントロール:** フェアコードライセンスを利用してセルフホスト、またはクラウドサービスを利用。
*   **エンタープライズ対応:** 詳細な権限設定、SSO、エアギャップデプロイメントなど。
*   **活発なコミュニティ:** 400以上の連携機能と900以上のすぐに使えるテンプレート。

**クイックスタート:**

*   **npx を使用 (Node.js が必要):** `npx n8n`
*   **Docker を使用:**
    ```bash
    docker volume create n8n_data
    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
    ```
    エディタには http://localhost:5678 からアクセスできます。

**リソース:**

*   ドキュメント
*   400以上の連携機能
*   サンプルワークフロー
*   AI & LangChain ガイド
*   コミュニティフォーラム
*   コミュニティチュートリアル

**サポート:**

コミュニティフォーラムでサポートを受け、他のユーザーと交流できます。

**ライセンス:**

n8n は、フェアコードライセンスのもとで提供されています。

*   **ソースコード公開:** 常にソースコードが公開されています。
*   **セルフホスト可能:** どこにでもデプロイできます。
*   **拡張可能:** 独自のノードと機能を追加できます。

エンタープライズライセンスは、追加機能とサポートのために利用できます。

**貢献:**

バグ報告や機能提案は、コントリビューティングガイドを参照してください。

**チームへの参加:**

自動化の未来を形作りたい方は、求人情報を確認してください。

**n8n の意味:**

「nodemation (ノーデメーション)」の略で、n-eight-n と発音します。Node.js を利用し、Node-View を使用していること、そして「automation (自動化)」を支援することを意味しています。


---

# vllm-project/vllm

**stars**: 44527

[View Repository on Github](https://github.com/vllm-project/vllm)

A high-throughput and memory-efficient inference and serving engine for LLMs

## README要約
## vLLM の詳細な要約

**vLLM** は、大規模言語モデル (LLM) の高スループットかつメモリ効率の高い推論とサービングエンジンです。UC Berkeley の Sky Computing Lab で開発され、現在ではコミュニティ主導のプロジェクトとして、学術界と産業界からの貢献を受けています。

**主な特徴と利点:**

*   **高速性:**
    *   最先端のサービングスループット
    *   **PagedAttention** を使用した効率的な attention key と value メモリ管理
    *   連続バッチ処理によるリクエストの効率的な処理
    *   CUDA/HIP graph を活用した高速なモデル実行
    *   GPTQ, AWQ, INT4, INT8, FP8 など、様々な量子化方式のサポート
    *   FlashAttention や FlashInfer との統合を含む、最適化された CUDA カーネル
    *   投機的デコーディング
    *   チャンク化されたプリフィル
*   **柔軟性と使いやすさ:**
    *   Hugging Face の一般的なモデルとのシームレスな統合
    *   並列サンプリング、ビームサーチなど、様々なデコーディングアルゴリズムによる高スループットサービング
    *   分散推論のためのテンソル並列処理とパイプライン並列処理のサポート
    *   ストリーミング出力
    *   OpenAI 互換の API サーバー
    *   NVIDIA GPU、AMD CPU と GPU、Intel CPU と GPU、PowerPC CPU、TPU、AWS Neuron のサポート
    *   Prefix caching のサポート
    *   Multi-lora のサポート
*   **サポートモデル:**
    *   Transformer 型 LLM (Llama など)
    *   Mixture-of-Expert LLM (Mixtral, Deepseek-V2、V3 など)
    *   Embedding モデル (E5-Mistral など)
    *   マルチモーダル LLM (LLaVA など)

**導入と利用:**

*   `pip install vllm` で簡単にインストールできます。
*   ドキュメント (https://docs.vllm.ai) で、インストール、クイックスタート、サポートモデルの一覧などの詳細情報を確認できます。

**コミュニティとサポート:**

*   貢献を歓迎しており、[Contributing to vLLM](https://docs.vllm.ai/en/stable/contributing/overview.html) で参加方法を確認できます。
*   スポンサーとして、様々な企業や組織から資金やリソースの提供を受けています。
*   技術的な質問や機能リクエストは GitHub Issues または Discussions、ユーザー間の議論は vLLM Forum、開発に関する協力は Slack で行えます。

**引用:**

研究で vLLM を使用する場合は、論文 (https://arxiv.org/abs/2309.06180) を引用してください。

**最新情報:**

*   2025年4月: Asia Developer Day 開催
*   2025年3月: vLLM x Ollama Inference Night および vLLM China Meetup 開催
*   2025年3月: East Coast vLLM Meetup 開催
*   2025年2月: Meta との第9回 vLLM ミートアップ開催
*   2025年1月: vLLM V1 Alpha リリース (アーキテクチャの主要なアップグレード)
*   2025年1月: Google Cloud との第8回 vLLM ミートアップ開催
*   2024年12月: PyTorch エコシステムへの参加

**その他:**

*   vLLM のロゴは、[メディアキット](https://github.com/vllm-project/media-kit) から入手できます。


---

# crestalnetwork/intentkit

**stars**: 5907

[View Repository on Github](https://github.com/crestalnetwork/intentkit)

An open and fair framework for everyone to build AI agents equipped with powerful skills. Launch your agent, improve the world, your wallet, or both!

## README要約
## IntentKit: AIエージェントのためのオープンで公正なフレームワークの概要

IntentKitは、Crestalが開発した、AIエージェントを構築・管理するためのオープンソースのフレームワークです。このフレームワークを使用すると、ブロックチェーンとの連携、ソーシャルメディア管理、カスタムスキルの統合など、様々な能力を持つAIエージェントを開発できます。現在アルファ段階であり、本番環境での使用は推奨されていません。

**主な特徴:**

*   **複数エージェントのサポート:** 複数のAIエージェントを同時に管理できます。
*   **自律的なエージェント管理:** エージェントの自律的な動作をサポートしています。
*   **ブロックチェーン統合:** EVM互換チェーンとの連携をサポートしています。
*   **ソーシャルメディア統合:** Twitter、Telegramなど、複数のソーシャルメディアプラットフォームとの連携をサポートしています。
*   **拡張可能なスキルシステム:** さまざまなスキルを組み込むことができます。例えば、チェーンとのインタラクション、インターネット検索、画像処理などがあります。
*   **拡張可能なプラグインシステム:** 現在開発中です。

**アーキテクチャ:**

IntentKitのアーキテクチャは、エントリポイント（Twitter/Telegramなど）を介して外部からの入力を受け取り、AgentがLangGraphを使用して処理を行います。Agentは、ストレージ（エージェント設定、資格情報、個性、メモリ、スキル状態など）とスキル（チェーン統合、ウォレット管理、オンチェーンアクション、インターネット検索、画像処理など）にアクセスします。

**開発について:**

*   [DEVELOPMENT.md](DEVELOPMENT.md) に開発ガイドがあります。
*   [docs/](docs/) にドキュメントが用意されています。

**プロジェクト構造:**

*   **abstracts/:** 抽象クラスとインターフェース
*   **app/:** コアアプリケーションコード
    *   **core/:** コアモジュール
    *   **services/:** サービス
    *   **entrypoints/:** エージェントとのインタラクション方法
    *   **admin/:** 管理ロジック
    *   **config/:** 設定
    *   **api.py:** REST APIサーバー
    *   **autonomous.py:** 自律エージェントスケジューラー
    *   **singleton.py:** シングルトンエージェントスケジューラー
    *   **scheduler.py:** 定期タスクのスケジューラー
    *   **readonly.py:** 読み取り専用エントリポイント
    *   **twitter.py:** Twitterリスナー
    *   **telegram.py:** Telegramリスナー
*   **clients/:** 外部サービスのクライアント
*   **docs/:** ドキュメント
*   **models/:** データベースモデル
*   **scripts/:** エージェント管理用スクリプト
*   **skills/:** スキルの実装
*   **plugins/:** プラグインの実装（予約済み）
*   **utils/:** ユーティリティ関数

**コントリビューションについて:**

コントリビューションは大歓迎です。[CONTRIBUTING.md](CONTRIBUTING.md) を読んでからプルリクエストを送信してください。

**スキル開発:**

[docs/contributing/wishlist.md](docs/contributing/wishlist.md) でリクエストを確認し、[docs/contributing/skills.md](docs/contributing/skills.md) でスキル開発ガイドを確認してください。

**ライセンス:**

本プロジェクトはMITライセンスの下で公開されています。詳細については、[LICENSE](LICENSE) ファイルを参照してください。


---

# funstory-ai/BabelDOC

**stars**: 1886

[View Repository on Github](https://github.com/funstory-ai/BabelDOC)

Yet Another Document Translator

## README要約
## BabelDOC: ドキュメント翻訳ツール 詳細要約

**概要**

BabelDOCは、PDFドキュメントの翻訳と二カ国語比較を目的としたPythonライブラリです。科学論文の翻訳に焦点を当てています。オンラインサービスとして、[Immersive Translate - BabelDOC](https://app.immersivetranslate.com/babel-doc/) が提供されており、月間1000ページの無料翻訳が利用できます。また、[PDFMathTranslate](https://github.com/Byaidu/PDFMathTranslate) を利用することで、自己デプロイとWebUIによる翻訳サービスも可能です。コマンドラインインターフェース（CLI）とPython APIも提供されており、他のプログラムへの組み込みにも対応しています。

**主な機能**

*   **PDF翻訳**: PDFファイルの翻訳をサポートします。
*   **二カ国語PDFの生成**: 元のPDFと翻訳後のPDFを並べて表示する機能を提供します。
*   **オンラインサービスとの連携**: Immersive Translate - BabelDOCとの連携。
*   **自己デプロイ**: PDFMathTranslateを用いた自己デプロイ。
*   **コマンドラインインターフェース（CLI）**: 簡単なコマンドで翻訳を実行できます。
*   **Python API**: 他のプログラムへの組み込みを可能にします。

**インストールと使用方法**

*   **uv (推奨) を使用したPyPIからのインストール**:
    1.  uvをインストールし、`PATH`環境変数を設定します。
    2.  `uv tool install --python 3.12 BabelDOC` を実行します。
    3.  `babeldoc --help` でコマンドを確認します。
    4.  翻訳コマンドを実行します: `babeldoc --bing --files example.pdf`

*   **uvを使用したソースからのインストール**:
    1.  uvをインストールし、`PATH`環境変数を設定します。
    2.  リポジトリをクローンします: `git clone https://github.com/funstory-ai/BabelDOC`
    3.  プロジェクトディレクトリに移動します: `cd BabelDOC`
    4.  依存関係をインストールし、`babeldoc`を実行します: `uv run babeldoc --help`
    5.  翻訳コマンドを実行します: `uv run babeldoc --files example.pdf --openai --openai-model "gpt-4o-mini" --openai-base-url "https://api.openai.com/v1" --openai-api-key "your-api-key-here"`

**高度なオプション**

*   **言語オプション**: `--lang-in`, `--lang-out` で入力言語と出力言語を指定します（デフォルト: 入力=en, 出力=zh）。
*   **PDF処理オプション**: ファイル指定、ページ指定、行分割、クリーンアップ、二カ国語PDFの順序設定、互換性向上オプションなど。
*   **翻訳サービスオプション**: QPS制限、キャッシュの無視、二カ国語/単一言語PDFの出力有無、翻訳対象の最小テキスト長、OpenAIの使用設定。
*   **OpenAI固有のオプション**: モデル、ベースURL、APIキーの設定。
*   **出力制御**: 出力ディレクトリ、デバッグログ、レポート間隔の設定。
*   **オフラインアセット管理**: オフライン環境での利用を可能にするための、アセットパッケージの生成と復元。

**設定ファイル**

TOML形式の設定ファイルを使用して、上記オプションをまとめて設定できます。

**Python API**

`babeldoc.high_level.init()` の呼び出し後、提供されているPython APIを使用して翻訳できます。

**背景**

このプロジェクトは、PDFドキュメントの構造解析、翻訳、レンダリングのパイプラインを提供することを目的としています。他の類似プロジェクト（mathpix, Doc2X, minerU, PDFMathTranslateなど）を参考に、より標準的なパイプラインとインターフェースを提供することを目指しています。

**ロードマップ**

*   行のサポート
*   表のサポート
*   ページ/列をまたぐ段落のサポート
*   高度な組版機能
*   アウトラインのサポート
*   バージョン1.0では、PDF Reference, Version 1.7を以下の言語で翻訳することを目指しています:
    *   簡体字中国語
    *   繁体字中国語
    *   日本語
    *   スペイン語
    *   レイアウトエラー1%未満
    *   コンテンツ損失1%未満

**既知の問題**

1.  著者と参考文献セクションの解析エラー
2.  行のサポート不足
3.  ドロップキャップの未対応
4.  大きなページのスキップ

**貢献について**

コントリビューションは歓迎されており、[CONTRIBUTING](https://github.com/funstory-ai/yadt/blob/main/docs/CONTRIBUTING.md) ガイドを参照してください。また、[Code of Conduct](https://github.com/funstory-ai/yadt/blob/main/docs/CODE_OF_CONDUCT.md) が適用されます。

**謝辞**

関連プロジェクトへの謝辞が記載されています。

**スター履歴**

Star Historyのグラフが提供されています。
