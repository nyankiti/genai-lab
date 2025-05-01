
# patchy631/ai-engineering-hub

**stars**: 8666

[View Repository on Github](https://github.com/patchy631/ai-engineering-hub)

In-depth tutorials on LLMs, RAGs and real-world AI agent applications.

## README要約
## AI Engineering Hub の要約

このリポジトリ「AI Engineering Hub」は、大規模言語モデル（LLM）、検索拡張生成（RAG）、および現実世界のAIエージェントアプリケーションに関する詳細なチュートリアルと実践的な例を提供するプロジェクトです。

**主な目的:**

*   AIエンジニアリングの深い理解と実践的な経験を提供すること。
*   LLM、RAG、AIエージェントに関する詳細なチュートリアルを提供すること。
*   プロジェクトで実装、適応、スケーリングするための実際の例を提供すること。
*   初心者から研究者まで、あらゆるスキルレベルのユーザーがAIエンジニアリングを実験し、成功できるよう支援すること。

**主な内容:**

*   LLMとRAGに関する詳細なチュートリアル
*   現実世界のAIエージェントアプリケーションの例
*   コードの実装、適応、スケーリングのための実践的な例

**貢献について:**

*   貢献を歓迎しており、新しいチュートリアルの追加、既存コードの改善、問題の報告など、様々な形で参加できます。
*   貢献方法は、リポジトリをフォークし、ブランチを作成し、プルリクエストを提出すること。

**その他:**

*   最新のチュートリアルや情報、限定リソースを受け取るためのニュースレター購読を推奨。購読すると、150以上のデータサイエンスのレッスンが詰まった無料の電子書籍が提供される。
*   MITライセンスに基づいてライセンスされている。
*   ディスカッションや提案、その他の問い合わせは、イシューを作成することで行える。

**最終的な目的:**

AIエンジニアリングコミュニティの発展に貢献し、AI分野での知識と経験を共有すること。


---

# QwenLM/Qwen-Agent

**stars**: 7376

[View Repository on Github](https://github.com/QwenLM/Qwen-Agent)

Agent framework and applications built upon Qwen>=2.0, featuring Function Calling, Code Interpreter, RAG, and Chrome extension.

## README要約
## Qwen-Agent：Qwen LM 上に構築されたエージェントフレームワークの詳細な要約

**概要**

Qwen-Agent は、Qwen>=2.0 をベースとしたエージェントフレームワークであり、Function Calling、Code Interpreter、RAG、Chrome 拡張機能などの機能を備えています。 Qwen Chat のバックエンドとしても機能しています。

**主な特徴**

*   **強力な機能:** Function Calling、Code Interpreter、RAG（Retrieval-Augmented Generation）をサポートし、多様なタスクに対応できます。
*   **柔軟な拡張性:** LLM (BaseChatModel を継承) や Tool (BaseTool を継承) などのコンポーネントを提供し、独自の Agent (Agent クラスを継承) を簡単に開発できます。
*   **使いやすい GUI:** Gradio をベースとした GUI インターフェースを提供し、Agent の迅速なデプロイをサポートします。
*   **実用的な例:** Browser Assistant、Code Interpreter、Custom Assistant などのサンプルアプリケーションが含まれています。
*   **高いパフォーマンス:** 長いドキュメントに対する質問応答 (RAG) で優れたパフォーマンスを発揮し、効率性と精度を両立しています。

**主な更新履歴**

*   2025年3月18日: `reasoning_content` フィールドのサポート、Qwen2.5 シリーズおよび QwQ-32B 向け Function Call テンプレートの調整。
*   2025年3月7日: [QwQ-32B Tool-call Demo](./examples/assistant_qwq.py) の追加。並列、マルチステップ、マルチターンのツール呼び出しをサポート。
*   2024年12月3日: GUI を Gradio 5 にアップグレード。GUI の実行には Python 3.10 以降が必要。
*   2024年9月18日: [Qwen2.5-Math Demo](./examples/tir_math.py) の追加。

**インストール**

1.  **PyPI からのインストール:**
    ```bash
    pip install -U "qwen-agent[gui,rag,code_interpreter,mcp]"
    # または最小限の要件で `pip install -U qwen-agent`
    ```
    オプション要件: `[gui]`、`[rag]`、`[code_interpreter]`、`[mcp]`
2.  **ソースコードからのインストール:**
    ```bash
    git clone https://github.com/QwenLM/Qwen-Agent.git
    cd Qwen-Agent
    pip install -e ./"[gui,rag,code_interpreter,mcp]"
    # または最小限の要件で `pip install -e ./`
    ```

**モデルサービスの準備**

*   Alibaba Cloud の [DashScope](https://help.aliyun.com/zh/dashscope/developer-reference/quick-start) が提供するモデルサービスを使用するか、オープンソースの Qwen モデルを使用して独自のモデルサービスをデプロイします。
    *   DashScope を使用する場合、環境変数 `DASHSCOPE_API_KEY` を設定します。
    *   独自のモデルサービスをデプロイする場合、Qwen2 の README に従って OpenAI 互換 API サービスをデプロイします。vLLM または Ollama を使用できます。
    *   QwQ モデルの場合、サービス開始時に `--enable-reasoning` および `--reasoning-parser deepseek_r1` パラメータを追加することをお勧めします。`--enable-auto-tool-choice` および `--tool-call-parser hermes` パラメータは追加 **しないでください**。Qwen-Agent が vLLM からツール出力を独自に解析します。

**独自の Agent の開発**

1.  **カスタムツールの追加 (オプション):** `BaseTool` を継承して、独自のツールを定義します。 `@register_tool` デコレータを使用して登録します。
2.  **LLM の設定:** 使用する LLM の設定 (モデル名、モデルサーバー、API キーなど) を行います。
3.  **Agent の作成:** `Assistant` (ツールとファイルの利用が可能) などの既存の Agent クラスを使用するか、`Agent` クラスを継承して独自の Agent を作成します。
4.  **Agent の実行:** Agent を実行し、チャットボットとして対話します。

**MCP の使用方法**

MCP (Model Context Protocol) を使用するには、次の手順に従います。

1.  [MCP サーバーのウェブサイト](https://github.com/modelcontextprotocol/servers) で必要なツールを選択し、関連する環境を設定します。
2.  MCP サーバーのコマンドと引数を設定ファイルで指定します。
3.  MCP の使用例については、[MCP usage example](./examples/assistant_mcp_sqlite_bot.py)を参照してください。

**FAQ**

*   **Function Calling (Tool Calling) のサポート:** あり。LLM クラスは Function Calling を提供し、一部の Agent クラスもこの機能を利用しています。
*   **長文ドキュメント (100 万トークン) に対する質問応答:** 高速な RAG ソリューションと、高精度だがコストのかかる Agent が提供されています。

**アプリケーション: BrowserQwen**

BrowserQwen は、Qwen-Agent をベースにしたブラウザアシスタントです。詳細については、[BrowserQwen のドキュメント](https://github.com/QwenLM/Qwen-Agent/blob/main/browser_qwen.md)を参照してください。

**免責事項**

Code Interpreter はサンドボックス化されておらず、ユーザーの環境でコードを実行します。危険なタスクの実行を Qwen に要求したり、Code Interpreter を本番環境で直接使用したりしないでください。


---

# daytonaio/daytona

**stars**: 17188

[View Repository on Github](https://github.com/daytonaio/daytona)

Daytona is a Secure and Elastic Infrastructure for Running AI-Generated Code

## README要約
## Daytona: AI生成コード実行のための安全で弾力的なインフラ

このリポジトリは、AIによって生成されたコードを実行するための、安全で弾力的なインフラであるDaytonaに関するものです。

**主な特徴:**

*   **超高速インフラ:** コードから実行まで、90ms未満でのSandbox作成。
*   **分離されたランタイム:** インフラへのリスクなしに、AI生成コードを実行。
*   **大規模並列化 (近日公開):** Sandboxのファイルシステムとメモリ状態をフォーク可能。
*   **プログラム制御:** ファイル、Git、LSP、実行API
*   **無制限の永続性:** Sandboxを永続的に保持可能。
*   **OCI/Docker互換性:** 任意のOCI/Dockerイメージを使用してSandboxを作成可能。

**インストール:**

*   **Python SDK:** `pip install daytona-sdk`
*   **TypeScript SDK:** `npm install @daytonaio/sdk`

**クイックスタート:**

1.  [https://app.daytona.io](https://app.daytona.io) でアカウントを作成。
2.  [新しいAPIキー](https://app.daytona.io/dashboard/keys) を生成。
3.  [Getting Started ドキュメント](https://www.daytona.io/docs/getting-started/) に従って、Daytona SDKの使用を開始。

**最初のSandboxの作成:**

READMEには、Python SDKとTypeScript SDKを使用したSandboxの作成方法の例が示されています。APIキーを取得し、`create`メソッドでSandboxを作成し、`code_run`メソッドでコードを実行し、`remove`メソッドでSandboxを削除する手順が示されています。

**その他:**

*   ドキュメント、バグ報告、機能リクエスト、Slack、X (Twitter) へのリンクが提供されています。
*   DaytonaはGNU GENERAL PUBLIC LICENSEの下でオープンソースであり、コントリビューターの著作権に帰属します。
*   貢献するには、Developer Certificate of Origin Version 1.1を確認し、コントリビューティングガイドに従ってください。


---

# vllm-project/vllm

**stars**: 46293

[View Repository on Github](https://github.com/vllm-project/vllm)

A high-throughput and memory-efficient inference and serving engine for LLMs

## README要約
## vLLM: 高スループットかつメモリ効率の良いLLM推論・サービングエンジン

vLLMは、大規模言語モデル（LLM）の推論とサービングを高速かつ簡単に実行できるライブラリです。UC BerkeleyのSky Computing Labで開発され、現在は学術界と産業界からの貢献によりコミュニティ主導のプロジェクトとして進化を続けています。

**主な特徴**:

*   **高速性**:
    *   最先端のスループット
    *   [**PagedAttention**](https://blog.vllm.ai/2023/06/20/vllm.html)による、注意機構のキーと値メモリの効率的な管理
    *   連続するリクエストのバッチ処理
    *   CUDA/HIPグラフによる高速なモデル実行
    *   [GPTQ](https://arxiv.org/abs/2210.17323), [AWQ](https://arxiv.org/abs/2306.00978), INT4, INT8、およびFP8といった量子化
    *   FlashAttentionとFlashInferとの統合を含む、最適化されたCUDAカーネル
    *   投機的デコーディング
    *   チャンク化されたプリフィル
*   **柔軟性と使いやすさ**:
    *   Hugging Faceの一般的なモデルとのシームレスな統合
    *   並列サンプリング、ビームサーチなど、様々なデコーディングアルゴリズムによる高スループットサービング
    *   分散推論のためのテンソル並列処理とパイプライン並列処理のサポート
    *   ストリーミング出力
    *   OpenAI互換APIサーバー
    *   NVIDIA GPU、AMD CPUとGPU、Intel CPUとGPU、PowerPC CPU、TPU、およびAWS Neuronのサポート
    *   プレフィックスキャッシングサポート
    *   マルチロラサポート

**サポートモデル**:
Transformer型LLM (例: Llama)、Mixture-of-Expert LLM (例: Mixtral, Deepseek-V2 and V3)、埋め込みモデル (例: E5-Mistral)、マルチモーダルLLM (例: LLaVA)など、Hugging Faceで公開されている多くの一般的なオープンソースモデルをシームレスにサポートしています。

**最新情報**:
*   2024年5月、[vLLM x Ollama Inference Night](https://lu.ma/vllm-ollama)の開催、スライド公開。
*   2024年5月、[最初のvLLM China Meetup](https://mp.weixin.qq.com/s/n77GibL2corAtQHtVEAzfg)の開催、スライド公開。
*   2024年3月、[the East Coast vLLM Meetup](https://lu.ma/7mu4k4xx)の開催、スライド公開。
*   2024年2月、Metaとの[第9回vLLMミートアップ](https://lu.ma/h7g3kuj9)の開催、スライド公開（Metaのスライドは非公開）。
*   2024年1月、vLLM V1のアルファ版リリース。アーキテクチャの大幅なアップグレードにより1.7倍の高速化を実現。
*   2024年1月、Google Cloudとの[第8回vLLMミートアップ](https://lu.ma/zep56hui)の開催、スライド公開。
*   2023年12月、vLLMが[pytorch ecosystem](https://pytorch.org/blog/vllm-joins-pytorch)に参加。

**その他の情報**:
*   [ドキュメント](https://docs.vllm.ai/en/latest/)
    *   [インストール](https://docs.vllm.ai/en/latest/getting_started/installation.html)
    *   [クイックスタート](https://docs.vllm.ai/en/latest/getting_started/quickstart.html)
    *   [サポートされているモデルのリスト](https://docs.vllm.ai/en/latest/models/supported_models.html)
*   [貢献](https://docs.vllm.ai/en/stable/contributing/overview.html)
*   [スポンサー](https://opencollective.com/vllm)
*   [論文](https://arxiv.org/abs/2309.06180)
*   [連絡先](https://github.com/vllm-project/vllm/issues)
    *   技術的な質問や機能リクエスト: GitHub [Issues](https://github.com/vllm-project/vllm/issues)または[Discussions](https://github.com/vllm-project/vllm/discussions)
    *   ユーザー同士の議論: [vLLM Forum](https://discuss.vllm.ai)
    *   貢献と開発の調整: [Slack](https://slack.vllm.ai)
    *   セキュリティ関連の開示: GitHubの[Security Advisories](https://github.com/vllm-project/vllm/security/advisories)
    *   コラボレーションとパートナーシップ: [vllm-questions@lists.berkeley.edu](mailto:vllm-questions@lists.berkeley.edu)
*   [メディアキット](https://github.com/vllm-project/media-kit)

