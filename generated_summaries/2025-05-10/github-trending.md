
# longbridge/gpui-component

**stars**: 1736

[View Repository on Github](https://github.com/longbridge/gpui-component)

UI components for building fantastic desktop application by using GPUI.

## README要約
## GPUI Component の日本語要約

このリポジトリは、[GPUI](https://gpui.rs) を使用して素晴らしいデスクトップアプリケーションを構築するための UI コンポーネント群を提供しています。

**主な特徴:**

*   **豊富さ**: 40以上のクロスプラットフォームデスクトップ UI コンポーネント。
*   **ネイティブ**: macOS および Windows のコントロールにインスパイアされ、shadcn/ui デザインと組み合わせてモダンな体験を実現。
*   **使いやすさ**: ステートレスな `RenderOnce` コンポーネントを採用し、シンプルで使いやすい。
*   **カスタマイズ性**: 組み込みの `Theme` と `ThemeColor` を利用し、マルチテーマと変数ベースの設定に対応。
*   **多様なサイズ**: `xs`, `sm`, `md`, `lg` などのサイズをサポート。
*   **柔軟なレイアウト**: パネル配置、サイズ変更、およびフリーフォーム (Tiles) レイアウトのためのドックレイアウト。
*   **高パフォーマンス**: 大量のデータレンダリングをスムーズに行うための仮想化された Table および List コンポーネント。
*   **コンテンツレンダリング**: Markdown およびシンプルな HTML をネイティブにサポート。

**使用例:**

[Longbridge Pro](https://longbridge.com/desktop) というアプリケーションが GPUI Component を使用して構築されています。このアプリケーションではマルチテーマサポートが実装されており、`Theme` 機能に基づいて簡単に実装できます。

**利用方法:**

GPUI および GPUI Component は現在開発中であり、依存関係を git で追加する必要があります。

```toml
gpui = { git = "https://github.com/huacnlee/zed.git", branch = "webview" }
gpui-component = { git = "https://github.com/longbridge/gpui-component.git" }
```

### WebView

[Wry](https://github.com/tauri-apps/wry) をベースとした `WebView` 要素も提供されています。これはオプション機能であり、feature flag を使用して有効化できます。

```toml
gpui-component = { git = "https://github.com/longbridge/gpui-component.git", features = ["webview"] }
```

詳細な使用例は、[story](https://github.com/longbridge/gpui-component/tree/main/crates/story) ディレクトリにあります。

### アイコン

`Icon` 要素も提供されていますが、デフォルトでは SVG ファイルは含まれていません。

[Lucide](https://lucide.dev) のアイコンが使用されている例がありますが、他のアイコンも利用可能です。SVG ファイルを [IconName](https://github.com/longbridge/gpui-component/blob/main/crates/ui/src/icon.rs#L86) で定義されているように命名してください。

**開発:**

GPUI Component を使用して構築されたアプリケーションのギャラリーがあります。

```bash
cargo run
```

より多くの例は `examples` ディレクトリにあり、`cargo run --example <example_name>` で実行できます。

詳細については、[DEVELOPMENT](DEVELOPMENT) を参照してください。

**ライセンス:**

Apache-2.0

*   UI デザインは [shadcn/ui](https://ui.shadcn.com) に基づいています。
*   アイコンは [Lucide](https://lucide.dev) から提供されています。


---

# NVIDIA/NeMo

**stars**: 14136

[View Repository on Github](https://github.com/NVIDIA/NeMo)

A scalable generative AI framework built for researchers and developers working on Large Language Models, Multimodal, and Speech AI (Automatic Speech Recognition and Text-to-Speech)

## README要約
## NVIDIA/NeMo リポジトリ概要 (日本語)

NVIDIA/NeMo は、大規模言語モデル (LLM)、マルチモーダルモデル (MM)、音声認識 (ASR)、テキスト読み上げ (TTS) に特化した、スケーラブルでクラウドネイティブな生成 AI フレームワークです。研究者や PyTorch 開発者が、既存のコードや事前学習済みのモデルを活用して、効率的に新しい生成 AI モデルを構築、カスタマイズ、およびデプロイできるように設計されています。

**主な特徴:**

*   **大規模言語モデル (LLMs)**
*   **マルチモーダルモデル (MMs)**
*   **自動音声認識 (ASR)**
*   **テキスト読み上げ (TTS)**
*   **コンピュータビジョン (CV)**

**最新情報:**

*   **Hugging Face モデルのサポート:** NeMo は、Hugging Face の AutoModel を利用して、テキスト生成などの分野で様々な Hugging Face モデルの事前学習とファインチューニングをサポート。将来的には、Vision Language Model など、さらに多くのモデルファミリーをサポート予定。
*   **Blackwell サポート:** Blackwell アーキテクチャへの対応を追加。B200 での機能パリティを強化。
*   **NeMo Framework 2.0 リリース:** モジュール性と使いやすさを重視した NeMo 2.0 をリリース。 Python ベースの構成、PyTorch Lightning のモジュール化された抽象化、NeMo-Run を用いたスケーラビリティなどの改善。
*   **Cosmos World Foundation Models サポート:** NVIDIA Cosmos プラットフォームの World Foundation Models のトレーニングとカスタマイズをサポート。ビデオデータ処理の高速化を実現する NeMo Curator ライブラリも提供。
*   **Llama 3.1 サポート:** Meta 社の Llama 3.1 LLM のトレーニングとカスタマイズに対応。
*   **MLPerf Training v4.0 での記録更新:** NVIDIA H100 GPU を使用して、LLM の事前学習で高いパフォーマンスとスケーラビリティを達成。LLM のファインチューニングと、テキストから画像へのトレーニングでも記録を更新。
*   **最新の LLM および MM への対応:** Griffin アーキテクチャや、State Space Model (SSM) のトレーニングをサポート。Nemotron 340B モデルの SFT、PEFT、PTQ をサポート。
*   **音声認識の高速化:** CTC, RNN-T, TDT モデルの推論を最大 10 倍高速化。
*   **NVIDIA NeMo Canary モデルのリリース:** 英語、スペイン語、ドイツ語、フランス語の音声認識と翻訳に対応した多言語モデル。
*   **Parakeet ASR モデルのリリース:** Suno.ai と共同開発した、高い精度を誇る英語音声認識モデル。
*   **Parakeet-TDT モデルのリリース:** Parakeet モデルファミリーに、高い精度と速度を両立した Parakeet-TDT を追加。

**NeMo 2.0 の主な改善点:**

*   **Python ベースの構成:** YAML ファイルから Python ベースの構成に移行し、柔軟性と制御性を向上。
*   **モジュール化された抽象化:** PyTorch Lightning のモジュール化された抽象化を採用し、モデルの各コンポーネントの変更や実験を容易に。
*   **スケーラビリティ:** NeMo-Run を使用して、大規模な実験を数千の GPU にわたってシームレスにスケール。

**NeMo Framework Launcher:**

NeMo Framework Launcher は、NeMo フレームワークのエクスペリエンスを効率化するためのクラウドネイティブツールです。CSP や Slurm クラスターで NeMo フレームワークのトレーニングジョブを実行するために使用されます。

**モデルのデプロイと最適化:**

*   NeMo LLMs と MMs は、NVIDIA NeMo Microservices でデプロイと最適化が可能。
*   NeMo ASR と TTS モデルは、NVIDIA Riva を使用して推論を最適化し、実用化できます。

**インストール方法:**

*   **Conda / Pip:** 任意のプラットフォームで NeMo を試す場合に推奨。ASR および TTS ドメインに適しています。
*   **NGC PyTorch コンテナ:** ソースコードからインストールする場合、最適化されたコンテナを使用。
*   **NGC NeMo コンテナ:** 最高のパフォーマンスを求めるユーザー向けの、すぐに使えるソリューション。

**その他:**

*   [ドキュメント](https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/) が充実。
*   [チュートリアル](https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/stable/starthere/tutorials.html) が利用可能。
*   [Hugging Face Hub](https://huggingface.co/models?library=nemo&sort=downloads&search=nvidia) と [NVIDIA NGC](https://catalog.ngc.nvidia.com/models?query=nemo&orderBy=weightPopularDESC) で、事前学習済みの NeMo モデルを公開。
*   開発者向けのドキュメントも充実。
*   コントリビューションを歓迎。
*   [Publications](https://nvidia.github.io/NeMo/publications/) に NeMo フレームワークを利用した論文のリストを掲載。
*   [ブログ](https://blogs.nvidia.com/blog/) でも NeMo に関する情報が発信されています。
*   ライセンスは Apache 2.0 および NVIDIA AI PRODUCT AGREEMENT が適用されます。
*   [ディスカッションボード](https://github.com/NVIDIA/NeMo/discussions) で質問や議論が可能。

**今後予定されている機能:**

*   NeMo Framework Launcher での ASR および TTS トレーニングのサポート。

**要件:**

*   Python 3.10 以降
*   Pytorch 2.5 以降
*   NVIDIA GPU (モデルのトレーニングを行う場合)


---

# Byaidu/PDFMathTranslate

**stars**: 23001

[View Repository on Github](https://github.com/Byaidu/PDFMathTranslate)

PDF scientific paper translation with preserved formats - 基于 AI 完整保留排版的 PDF 文档全文双语翻译，支持 Google/DeepL/Ollama/OpenAI 等服务，提供 CLI/GUI/MCP/Docker/Zotero

## README要約
## PDFMathTranslate - 詳細な要約（日本語）

**PDFMathTranslate** は、PDF形式の科学論文を翻訳し、元のレイアウトを可能な限り保持することを目指したツールです。AIを活用し、数式、図表、目次、注釈などを正確に再現した上で、多言語間の翻訳を可能にします。 Google、DeepL、Ollama、OpenAI などの様々な翻訳サービスに対応し、CLI、GUI、MCP、Docker、Zoteroなど、複数の利用方法を提供しています。

**主な特徴:**

*   **フォーマット保持:** 数式、図表、目次、注釈など、PDF文書の元のレイアウトを忠実に再現して翻訳します。
*   **多言語対応:** 多くの言語に対応し、双方向翻訳が可能です。
*   **多様な翻訳サービス:** Google、DeepL、Ollama、OpenAIなど、様々な翻訳サービスを利用できます。
*   **複数の利用方法:**
    *   コマンドラインツール (CLI)
    *   インタラクティブなユーザーインターフェース (GUI)
    *   Dockerコンテナ
    *   Zoteroプラグイン

**アップデート情報:**

*   2025年5月9日: pdf2zh 2.0 プレビュー版リリース
*   2025年3月3日: BabelDOC WebUI（実験的）のサポート追加
*   2025年2月22日: リリースCIの改善とWindows実行ファイルのパッケージ化
*   2024年12月24日: Xinference 上のローカルモデルのサポート
*   2024年12月19日: 非PDF/A文書の互換性サポート
*   2024年12月13日: バックエンドの追加サポート
*   2024年12月10日: Azure上のOpenAIモデルのサポート

**プレビュー:**

*   GIF形式のデモ動画が提供されており、翻訳とレイアウト保持の様子を確認できます。

**オンラインデモ:**

*   以下のオンラインデモで、インストールなしで試用できます。
    *   [Public free service](https://pdf2zh.com/)
    *   [Immersive Translate - BabelDOC](https://app.immersivetranslate.com/babel-doc/)
    *   [HuggingFace](https://huggingface.co/spaces/reycn/PDFMathTranslate-Docker)
    *   [ModelScope](https://www.modelscope.cn/studios/AI-ModelScope/PDFMathTranslate)

**インストールと使用方法:**

様々な利用方法が提供されています。

1.  **UVインストール:**

    *   Python (3.10 <= version <= 3.12) が必要です。
    *   `pip install uv; uv tool install --python 3.12 pdf2zh`を実行してパッケージをインストールします。
    *   `pdf2zh document.pdf` で翻訳を実行します。

2.  **Windows実行ファイル:**

    *   [リリースページ](https://github.com/Byaidu/PDFMathTranslate/releases)から `pdf2zh-version-win64.zip` をダウンロードし、解凍して `pdf2zh.exe` を実行します。

3.  **グラフィカルユーザーインターフェース (GUI):**

    *   Python (3.10 <= version <= 3.12) が必要です。
    *   `pip install pdf2zh` を実行してパッケージをインストールします。
    *   `pdf2zh -i` を実行してブラウザでGUIを起動します (http://localhost:7860/)。

4.  **Docker:**

    *   `docker pull byaidu/pdf2zh` でDockerイメージをプルします。
    *   `docker run -d -p 7860:7860 byaidu/pdf2zh` でコンテナを実行し、ブラウザで http://localhost:7860/ を開きます。
    *   クラウドサービスへのデプロイ方法も提供されています（Heroku、Render、Zeabur、Sealos、Koyeb）。

5.  **Zotero Plugin:**

    *   [Zotero PDF2zh](https://github.com/guaguastandup/zotero-pdf2zh) を参照してください。

6.  **コマンドライン:**

    *   Python (3.10 <= version <= 3.12) が必要です。
    *   `pip install pdf2zh` を実行してパッケージをインストールします。
    *   `pdf2zh document.pdf` を実行して翻訳を行います。

**インストールに関する注意点:**

*   Windowsでファイルが開けない場合は、`vc_redist.x64.exe` をインストールしてみてください。
*   Docker Hubにアクセスできない場合は、[GitHub Container Registry](https://github.com/Byaidu/PDFMathTranslate/pkgs/container/pdfmathtranslate) のイメージを試してください。
*   AIモデルのダウンロードに問題がある場合は、環境変数 `HF_ENDPOINT=https://hf-mirror.com` を設定してみてください。
*   問題が発生した場合は、FAQ（[FAQ](https://github.com/Byaidu/PDFMathTranslate/wiki#-faq--%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)）を参照してください。

**高度なオプション:**

コマンドラインで翻訳コマンドを実行する際に、様々なオプションを指定できます。

*   `-i`: GUIの起動
*   `-p`: 部分的な翻訳
*   `-li`: ソース言語
*   `-lo`: ターゲット言語
*   `-s`: 翻訳サービス
*   `-t`: マルチスレッド
*   `-o`: 出力ディレクトリ
*   `-f`, `-c`: 例外処理
*   `-cp`: 互換性モード
*   `--skip-subset-fonts`: フォントサブセットをスキップ
*   `--ignore-cache`: 翻訳キャッシュを無視
*   `--share`: 公開リンク
*   `--authorized`: 認証
*   `--prompt`: カスタムプロンプト
*   `--onnx`: カスタムDocLayout-YOLO ONNXモデルの使用
*   `--serverport`: カスタムWebUIポートの使用
*   `--dir`: バッチ翻訳
*   `--config`: 設定ファイル
*   `--babeldoc`: BabelDOCバックエンドの使用
*   `--mcp`: MCP STDIOモードの有効化
*   `--sse`: MCP SSEモードの有効化

詳細な説明は、[高度な利用方法](./docs/ADVANCED.md) を参照してください。

**二次開発 (API):**

他のPythonプログラム内での利用や、HTTP APIとの連携方法については、[APIの詳細](./docs/APIS.md) を参照してください。

*   [Python API](./docs/APIS.md#api-python)
*   [HTTP API](./docs/APIS.md#api-http)

**TODO:**

*   DocLayNetベースのモデルによるレイアウト解析
*   ページの回転、目次、リスト形式の修正
*   古い論文の数式の修正
*   KeyboardInterrupt例外時の非同期リトライ
*   西洋言語向けKnuth–Plassアルゴリズム
*   非PDF/Aファイルへの対応
*   ZoteroおよびObsidianのプラグイン

**謝辞:**

*   Immersive Translation: プロの月間メンバーシップコードの提供
*   BabelDOC: 新しいバックエンド
*   PyMuPDF, Pdfminer.six, MinerU, Gradio PDF, MathTranslate, DocLayout-YOLO, PDF Explained, PDF Cheat Sheets, Go Noto Universal

**貢献者:**

*   貢献者一覧は、GitHubのGraphs/contributors ページに表示されています。

**スター履歴:**

*   Star Historyのグラフが提供されています。

---

# ultralytics/ultralytics

**stars**: 40495

[View Repository on Github](https://github.com/ultralytics/ultralytics)

Ultralytics YOLO11 🚀

## README要約
## ultralytics/ultralytics の詳細な要約

このリポジトリは、Ultralytics が開発した最先端の [YOLO モデル](https://www.ultralytics.com/yolo) を提供しています。長年のコンピュータビジョンとAI研究に基づいて構築され、高速、正確、そして使いやすさを特徴としています。このリポジトリは、[YOLO11](https://docs.ultralytics.com/models/yolo11/) を中心に、様々なバージョンの YOLO モデルを扱っており、オブジェクト検出、トラッキング、インスタンスセグメンテーション、画像分類、ポーズ推定などのタスクに優れています。

**主な特徴:**

*   **高速かつ正確:** パフォーマンスと柔軟性のために常に更新されています。
*   **多言語対応:** 中国語、韓国語、日本語、ロシア語、ドイツ語、フランス語、スペイン語、ポルトガル語、トルコ語、ベトナム語、アラビア語に対応しています。
*   **多様なタスク:** オブジェクト検出、トラッキング、インスタンスセグメンテーション、画像分類、ポーズ推定をサポート。
*   **豊富なモデル:** [YOLOv3](https://docs.ultralytics.com/models/yolov3/) から最新の [YOLO11](https://docs.ultralytics.com/models/yolo11/) まで、様々な YOLO モデルを提供。
*   **統合:** Weights & Biases, Comet ML, Roboflow, Intel OpenVINO などの主要な AI プラットフォームとの連携。
*   **Ultralytics HUB:** データの可視化、YOLOモデルのトレーニング、デプロイを容易にするオールインワンのプラットフォーム。

**主な機能と使用方法:**

*   **インストール:** `pip install ultralytics` を使用して、Python 環境にインストールできます。Conda、Docker、Gitからのソースコードからのインストールも可能です。
*   **CLI (コマンドラインインターフェース):** `yolo` コマンドを使用して、事前学習済みのモデルでの予測などが可能です。
*   **Python API:** Pythonコードに直接統合して、モデルの読み込み、トレーニング、評価、予測、エクスポートなどが行えます。

**モデル詳細:**

*   **検出 (COCO):** YOLO11n、YOLO11s、YOLO11m、YOLO11l、YOLO11x の各モデルが利用可能。
*   **セグメンテーション (COCO):** YOLO11n-seg、YOLO11s-seg、YOLO11m-seg、YOLO11l-seg、YOLO11x-seg の各モデルが利用可能。
*   **分類 (ImageNet):** YOLO11n-cls、YOLO11s-cls、YOLO11m-cls、YOLO11l-cls、YOLO11x-cls の各モデルが利用可能。
*   **ポーズ推定 (COCO):** YOLO11n-pose、YOLO11s-pose、YOLO11m-pose、YOLO11l-pose、YOLO11x-pose の各モデルが利用可能。
*   **回転バウンディングボックス (DOTAv1):** YOLO11n-obb、YOLO11s-obb、YOLO11m-obb、YOLO11l-obb、YOLO11x-obb の各モデルが利用可能。

**ライセンス:**

*   **AGPL-3.0 ライセンス:** 学生、研究者、愛好家向け。
*   **Ultralytics エンタープライズライセンス:** 商用利用向け。

**コミュニティとサポート:**

*   GitHub Issues: バグレポートや機能リクエスト
*   Discord, Reddit, Ultralytics Community Forums: 質問、ディスカッション、コミュニティサポート
*   Ultralytics HUB: データの可視化、トレーニング、デプロイのためのプラットフォーム

**貢献:**

貢献者を歓迎しており、[Contributing Guide](https://docs.ultralytics.com/help/contributing/) を参照して、コントリビュートできます。


---

# Lightricks/LTX-Video

**stars**: 4268

[View Repository on Github](https://github.com/Lightricks/LTX-Video)

Official repository for LTX-Video

## README要約
## LTX-Video リポジトリ概要 (日本語)

**LTX-Video** は、Lightricks社が開発した、DiT (Diffusion Transformer) を基盤とした、高品質な動画を「リアルタイム」で生成可能な動画生成モデルの公式リポジトリです。

**主な特徴:**

*   **リアルタイム生成:** 1216×704解像度で30FPSの動画を、視聴速度よりも高速に生成できます。
*   **多様な機能:** テキストからの動画生成 (Text-to-Video)、画像からの動画生成 (Image-to-Video)、キーフレームベースのアニメーション、動画の拡張 (前後)、動画から動画への変換など、様々な機能を組み合わせることが可能です。
*   **高品質:** 大規模な動画データセットで学習されており、写実的で多様なコンテンツを生成できます。
*   **柔軟な入力:** テキストプロンプト、画像、動画セグメントなど、様々な条件で動画を生成できます。
*   **コミュニティ貢献:** ComfyUI や Diffusers との統合、8-bit最適化モデル、TeaCacheによる高速化、LoRAによるファインチューニングなど、活発なコミュニティによる貢献があります。

**主な機能と利用方法:**

*   **オンラインデモ:** LTX-Studio、Fal.ai、Replicateでオンラインデモが利用可能です。
*   **ローカル実行:**
    1.  リポジトリをクローンし、環境をセットアップします (Python 3.10.5, CUDA 12.2, PyTorch >= 2.1.2)。
    2.  `inference.py` スクリプトを使用して、テキストプロンプト、画像、動画から動画を生成します。
    3.  ComfyUI との統合により、さらに高度なワークフローを構築できます。
    4.  Diffusers ライブラリもサポートされており、公式ドキュメントを参照して利用できます。
*   **プロンプトエンジニアリング:** 詳細な動作とシーンの説明を、単一のパラグラフで、具体的かつ時系列に沿って記述することが推奨されます。

**ニュース:**

*   2025年5月5日: 新しい13Bモデル (0.9.7) と、高速推論用の fp8 量子化モデル、アップスケーラーをリリース。
*   2025年4月15日: 品質向上のための新しいチェックポイント (0.9.6) と、15倍高速な distilled モデルをリリース。
*   2025年3月5日: コマーシャル利用可能な新しいライセンス (OpenRail-M) を公開し、品質向上した v0.9.5 をリリース。キーフレームと動画拡張のサポートを追加し、LTX-Studioでの新しいオンラインWebアプリを公開しました。
*   2025年2月20日: STG（Spatiotemporal Guidance）の改善、macOSでのMPSサポート、8ビットモデル (LTX-VideoQ8) のサポート、TeaCacheの追加、ComfyUI-LTXTricks の追加、Diffusion-Pipe の追加。
*   2024年12月31日: 研究論文を公開。
*   2024年12月20日: 品質向上したチェックポイント (v0.9.1) をリリース。STG/PAG のサポート、Diffusers 形式のチェックポイント読み込み、未使用部分の CPU へのオフロード、新しいタイムステップ条件付き VAE デコーダーのサポートを追加。
*   2024年11月21日: 初期リリース (v0.9.0)。Text-to-Video と Image-to-Video の生成をサポート。

**モデル:**

| モデル              | バージョン | 備考                                                                                      | inference.py 設定                                                                                                                                      | ComfyUI ワークフロー（推奨）                                                               |
|--------------------|---------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| ltxv-13b           | 0.9.7   | 最高品質、より多くの VRAM が必要                                                      | [ltxv-13b-0.9.7-dev.yaml](https://github.com/Lightricks/LTX-Video/blob/main/configs/ltxv-13b-0.9.7-dev.yaml)                                             | [ltxv-13b-i2v-base.json](https://github.com/Lightricks/ComfyUI-LTXVideo/blob/master/example_workflows/ltxv-13b-i2v-base.json)             |
| ltxv-13b-fp8 | 0.9.7   | ltxv-13b の量子化バージョン   | Coming soon | [ltxv-13b-i2v-base-fp8.json](https://github.com/Lightricks/ComfyUI-LTXVideo/blob/master/example_workflows/ltxv-13b-i2v-base-fp8.json) |
| ltxv-2b            | 0.9.6   | 良好な品質、ltxv-13b よりも少ない VRAM 要件                                              | [ltxv-2b-0.9.6-dev.yaml](https://github.com/Lightricks/LTX-Video/blob/main/configs/ltxv-2b-0.9.6-dev.yaml)                                                 | [ltxvideo-i2v.json](https://github.com/Lightricks/ComfyUI-LTXVideo/blob/master/example_workflows/low_level/ltxvideo-i2v.json)             |
| ltxv-2b-distilled  | 0.9.6   | 15倍高速、リアルタイム対応、少ないステップで済む、STG/CFG 不要                     | [ltxv-2b-0.9.6-distilled.yaml](https://github.com/Lightricks/LTX-Video/blob/main/configs/ltxv-2b-0.9.6-distilled.yaml)                                     | [ltxvideo-i2v-distilled.json](https://github.com/Lightricks/ComfyUI-LTXVideo/blob/master/example_workflows/low_level/ltxvideo-i2v-distilled.json)             |

**パラメータガイド:**

*   解像度プリセット: 詳細なシーンには高解像度、高速生成とシンプルなシーンには低解像度。
*   シード値: 特定のスタイルや構図を再現するために使用。
*   ガイダンススケール: 推奨値は 3-3.5。
*   推論ステップ: 品質にはより多くのステップ (40以上)、速度には少ないステップ (20-30)。

**コミュニティ貢献:**

*   **ComfyUI-LTXTricks:** RF-Inversion, RF-Edit, FlowEdit などの高度な技術を実装した、LTX Video モデルをより細かく制御するための追加ノードを提供するコミュニティプロジェクト。
*   **LTX-VideoQ8:** NVIDIA ADA GPU での高速化を実現する、8ビット最適化された LTX-Video バージョン。
*   **TeaCache for LTX-Video:** 学習不要なキャッシングアプローチで、LTX-Video の推論を最大2倍高速化。
*   **Diffusion-Pipe:** LTX-Video の LoRA を使用した全ファインチューニングをサポートする、パイプライン並列処理を備えた実験的なトレーニングフレームワーク。

**謝辞:**

LTX-Video の実装において、DiT と PixArt-alpha プロジェクトに感謝しています。

**引用:**

論文が公開されており、研究に役立つ場合は、リポジトリにスターを付け、論文を引用してください。

**Lightricks社について:**

AI を重視する企業であり、視覚コンテンツの制作方法に革命を起こしています。AI、コンピュータービジョン、動画生成に情熱を持っている方は、Lightricks社の採用情報をご覧ください。


---

# element-plus/element-plus

**stars**: 25782

[View Repository on Github](https://github.com/element-plus/element-plus)

🎉 A Vue.js 3 UI Library made by Element team

## README要約
## element-plus/element-plus の概要

このリポジトリは、Elementチームによって開発されたVue.js 3向けのUIライブラリ「Element Plus」です。

**主な特徴:**

*   **Vue 3 Composition API:** Vue 3のComposition APIに対応し、より柔軟でモダンな開発を可能にします。
*   **TypeScriptで記述:** 型安全性を高め、大規模プロジェクトにも適しています。

**主要情報:**

*   **npm:** パッケージは[npm](https://www.npmjs.com/package/element-plus)で公開されています。
*   **Node.jsの要件:** Node.js 18以降が必要です。
*   **ドキュメント:**  [Getting Started](https://element-plus.org/) に詳細なドキュメントがあります。 中国語版の加速ミラーサイトも利用可能です。
*   **Breaking change:**  2022年2月7日に最初の安定版がリリースされ、APIは安定しています。Element UIからのアップグレード方法に関する情報や、変更点リストは [Breaking Change List](https://github.com/element-plus/element-plus/discussions/5658) で確認できます。
*   **移行ツール:** Element UIからElement Plusへの移行を支援する[gogocode migration tool](https://github.com/thx/gogocode/tree/main/packages/gogocode-plugin-element)があります。  Vue Element Adminでのテスト結果も公開されています。
*   **Playground:**  組み込みの [Playground](https://element-plus.run/)  や、CodeSandboxでの[デモ](https://codesandbox.io/s/element-plus-demo-dxtcr)でコンポーネントを試すことができます。

**翻訳:**

Element Plusは多言語に対応しており、翻訳への協力も歓迎しています。[Crowdin](https://badges.crowdin.net/element-plus/localized.svg) を通じて翻訳に参加できます。

**開発への参加:**

*   開発チームへの参加を歓迎しており、[CONTRIBUTING](https://github.com/element-plus/element-plus/blob/dev/CONTRIBUTING.md)  と [Code of Conduct](https://github.com/element-plus/element-plus/blob/dev/CODE_OF_CONDUCT.md) を参照してください。
*   現在、Testing、GitHub Actions、PMの専門家を探しています。

**ライセンス:**

Element Plusは [MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE) ライセンスで公開されています。

