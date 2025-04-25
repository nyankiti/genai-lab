
# kortix-ai/suna

**stars**: 3731

[View Repository on Github](https://github.com/kortix-ai/suna)

Suna - Open Source Generalist AI Agent

## README要約
## Suna - オープンソースのジェネラリストAIエージェントの要約

**Suna**は、実世界のタスクを簡単に達成できるように設計された、完全にオープンソースのAIアシスタントです。自然な会話を通じて、研究、データ分析、日常的な課題を支援するデジタルコンパニオンとして機能します。直感的なインターフェースで必要なものを理解し、結果を提供します。

### 主な機能と能力

*   **ブラウザ自動化:** Webサイトのナビゲーションとデータ抽出をシームレスに行います。
*   **ファイル管理:** ドキュメントの作成と編集をサポートします。
*   **Webクロールと拡張検索:** Web上の情報を検索し、収集します。
*   **コマンドライン実行:** システムタスクを実行します。
*   **Webサイトデプロイメント:** Webサイトを公開します。
*   **APIとサービスの統合:** さまざまなAPIとサービスと連携します。

Sunaはこれらの機能を組み合わせることで、複雑な問題を解決し、簡単な会話を通じてワークフローを自動化します。

### アーキテクチャ

Sunaは、以下の4つの主要コンポーネントで構成されています。

*   **Backend API:** Python/FastAPIで構築され、RESTエンドポイント、スレッド管理、LLM（OpenAI、Anthropicなど）との統合をLiteLLMを介して処理します。
*   **Frontend:** Next.js/Reactで構築され、チャットインターフェースやダッシュボードなどのUIを提供します。
*   **Agent Docker:** 各エージェントの分離された実行環境であり、ブラウザ自動化、コードインタープリタ、ファイルシステムアクセス、ツール統合、およびセキュリティ機能を提供します。
*   **Supabase Database:** 認証、ユーザー管理、会話履歴、ファイルストレージ、エージェントの状態、分析、リアルタイムサブスクリプションなど、データの永続性を処理します。

### 用途例

Sunaは、以下のような様々なタスクに利用できます。

1.  競合分析
2.  VC (ベンチャーキャピタル) リスト作成
3.  求人候補者の検索
4.  会社旅行の計画
5.  Excel作業の自動化
6.  イベントスピーカーのプロスペクティング
7.  科学論文の要約と相互参照
8.  研究と最初のコンタクトドラフトの作成
9.  SEO分析
10. 個人的な旅行の計画
11. 最近資金調達を受けたスタートアップ企業の調査
12. フォーラムディスカッションのスクレイピング

### ローカルでの実行と自己ホスティング

Sunaは、自己ホストすることも可能です。

**要件:**

*   Supabaseプロジェクト
*   Redisデータベース
*   Daytonaサンドボックス
*   Python 3.11
*   LLMプロバイダーのAPIキー（OpenAIまたはAnthropic）
*   （オプション）Tavily APIキー（拡張検索）

**インストール手順:**

1.  リポジトリのクローン作成
2.  バックエンド環境の設定（.envファイルの編集）
3.  Supabaseデータベースの設定
4.  フロントエンド環境の設定（.env.localファイルの編集）
5.  依存関係のインストール
6.  アプリケーションの起動（フロントエンドとバックエンドをそれぞれ別のターミナルで実行）
7.  ブラウザでSunaにアクセス

### その他の情報

*   **ライセンス:** Apache License, Version 2.0
*   **貢献者:** Adam Cohen Hillel, Dat-lequoc, Marko Kraemer
*   **利用技術:** Daytona, Supabase, Playwright, OpenAI, Anthropic, Tavily, RapidAPI

**このリポジトリは、AIエージェントの分野における強力なツールであり、様々なタスクを自動化し、効率的に作業を進めることを可能にします。オープンソースであるため、自由に利用、改変、貢献することができます。**


---

# RVC-Boss/GPT-SoVITS

**stars**: 45129

[View Repository on Github](https://github.com/RVC-Boss/GPT-SoVITS)

1 min voice data can also be used to train a good TTS model! (few shot voice cloning)

## README要約
## GPT-SoVITS: 高性能Few-shot音声クローニング&TTS WebUIの要約

**GPT-SoVITS**は、わずか1分の音声データから高品質な音声クローンを作成できる、強力なFew-shot音声変換（Voice Conversion, VC）およびテキスト読み上げ（Text-to-Speech, TTS）WebUIです。

**主な特徴:**

1.  **Zero-shot TTS:** 5秒の音声サンプルから即座にテキスト読み上げを実現。
2.  **Few-shot TTS:** 1分間のトレーニングデータでモデルを微調整し、音声の類似性とリアリズムを向上。
3.  **多言語対応:** トレーニングデータとは異なる言語での推論が可能。現在、英語、日本語、韓国語、広東語、中国語をサポート。
4.  **WebUIツール:** 音声伴奏分離、自動トレーニングセット分割、中国語ASR、テキストラベリングなどのツールを統合。初心者でもトレーニングデータセットやGPT/SoVITSモデルを簡単に作成できます。

**主なバージョン:**

*   **V1:** オリジナルバージョン。
*   **V2:**
    *   韓国語と広東語のサポート追加。
    *   最適化されたテキストフロントエンド。
    *   事前学習モデルの拡張 (2000時間から5000時間へ)。
    *   低品質の参照音声に対する合成品質の改善。
*   **V3:**
    *   音色の類似性向上（微調整なしでベースモデルだけで大幅に改善）。
    *   GPTモデルの安定性向上（繰り返しや省略の削減、感情表現の強化）。
*   **V4:**
    *   V3で発生していた非整数倍アップサンプリングによる金属ノイズの問題を修正。
    *   ネイティブに48kHzオーディオを出力し、こもった音を防ぐ（V3は24kHz）。

**インストール:**

*   Windows、Linux、macOSに対応。
*   中国国内のユーザー向けに、AutoDL Cloud Dockerや統合パッケージが提供されています。
*   手動インストールの場合、Python、PyTorch、FFmpegなどの依存関係をインストールする必要があります。
*   Dockerでの実行も可能です。

**使用方法:**

1.  **WebUIの起動:**
    *   統合パッケージユーザーは、`go-webui.bat` (または`go-webui.ps1`)を実行。
    *   それ以外の場合は、コマンドラインから`python webui.py <language(optional)>`を実行。
    *   V1を使用する場合は、`go-webui-v1.bat`または`python webui.py v1 <language(optional)>`。
2.  **微調整 (Finetune):**
    *   音声パスの自動入力。
    *   音声を小さなチャンクに分割。
    *   ノイズ除去 (オプション)。
    *   ASR (自動音声認識)。
    *   ASRトランスクリプションの校正。
    *   次のタブでモデルの微調整。
3.  **推論 WebUI の起動:**
    *   統合パッケージユーザーは、`go-webui-v2.bat` (または`go-webui-v2.ps1`)を実行し、`1-GPT-SoVITS-TTS/1C-inference`で推論WebUIを開きます。
    *   それ以外の場合は、`python GPT_SoVITS/inference_webui.py <language(optional)>`または`python webui.py`を実行し、`1-GPT-SoVITS-TTS/1C-inference`で推論WebUIを開きます。

**その他:**

*   多言語でのトレーニングデータが利用可能です。
*   コマンドラインからの実行方法も提供されています。
*   UVR5 (Ultimate Vocal Remover)やASRなどのツールも統合されています。
*   様々なプロジェクトやコントリビューターに感謝の意を表しています。

**今後の予定 (Todo List):**

*   日本語と英語のローカライズ
*   ユーザーガイド
*   日本語および英語のデータセットでの微調整
*   **機能:**
    *   Zero-shot/few-shot音声変換
    *   TTS発話速度制御
    *   TTS感情制御の改善
    *   GPT vocabsの確率分布へのSoVITSトークン入力の実験
    *   英語と日本語のテキストフロントエンドの改善
    *   小型および大型TTSモデルの開発
    *   Colabスクリプト
    *   トレーニングデータセットの拡張 (2000時間 -> 10000時間)
    *   より良いSoVITSベースモデル (オーディオ品質の向上)
    *   モデルミックス


---

# khoj-ai/khoj

**stars**: 29015

[View Repository on Github](https://github.com/khoj-ai/khoj)

Your AI second brain. Self-hostable. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI (gpt, claude, gemini, llama, qwen, mistral). Get started - free.

## README要約
## khoj-ai/khoj の詳細な要約

このリポジトリは、自己ホスト可能なAI「Khoj」に関するもので、個人の「第二の脳」として機能することを目的としています。ウェブやドキュメントから情報を取り出し、カスタムエージェントの構築、自動化スケジューリング、詳細なリサーチを可能にします。あらゆるオンラインまたはローカルのLLM（gpt、claude、gemini、llama、qwen、mistralなど）を個人の自律型AIとして利用できます。

**主な特徴:**

*   **多機能なAIアシスタント:**
    *   ローカルまたはオンラインのLLMとのチャット。
    *   インターネットおよびドキュメント（画像、PDF、Markdown、org-mode、Word、Notionファイルなど）からの情報取得。
    *   ブラウザ、Obsidian、Emacs、デスクトップ、スマートフォン、WhatsAppからのアクセス。
    *   カスタム知識、ペルソナ、チャットモデル、ツールを持つエージェントの作成。
    *   繰り返し行うリサーチの自動化。パーソナルニュースレターやスマート通知の受信。
    *   高度なセマンティック検索による関連ドキュメントの迅速な検索。
    *   画像の生成、音声での会話、メッセージの再生。
*   **柔軟な利用方法:**
    *   オープンソースであり、自己ホスト可能。
    *   ローカル環境（[ドキュメント](https://docs.khoj.dev/get-started/setup)を参照）またはクラウドアプリ（[https://app.khoj.dev](https://app.khoj.dev)）での利用が可能。
*   **その他:**
    *   新しい機能として、`/research`コマンドによる実験的なリサーチモード、カスタムエージェントの作成、最新の検索・推論ベンチマークでの高いパフォーマンスが紹介されています。
    *   エンタープライズ向けのクラウドサービス、オンプレミス、ハイブリッドソリューションの提供（詳細は[https://khoj.dev/teams](https://khoj.dev/teams)）。

**その他情報:**

*   [https://app.khoj.dev](https://app.khoj.dev) でKhojを体験できます。
*   機能の詳細なリストは[https://docs.khoj.dev/category/features](https://docs.khoj.dev/category/features) を参照。
*   自己ホストの方法は[https://docs.khoj.dev/get-started/setup](https://docs.khoj.dev/get-started/setup) を参照。
*   カスタムエージェントの作成方法は[https://blog.khoj.dev/posts/create-agents-on-khoj/](https://blog.khoj.dev/posts/create-agents-on-khoj/) を参照。
*   FAQ: 自己ホストなしでの利用可能、Khojが読み取れるドキュメントの種類、カスタムエージェントの作成方法に関する質問への回答が記載されています。
*   コントリビューターへの感謝と、コントリビューションを希望する人への[コントリビューションガイドライン](https://docs.khoj.dev/contributing/development)への案内、[コントリビュータープロジェクトボード](https://github.com/orgs/khoj-ai/projects/4)へのリンク。

このリポジトリは、自己ホスト可能なパーソナルAIツールとしてのKhojの機能と可能性を包括的に説明しており、様々なLLMとの連携、多様なデータソースへの対応、カスタムエージェントの作成など、幅広い用途に対応できることが強調されています。


---

# facebookresearch/dinov2

**stars**: 10390

[View Repository on Github](https://github.com/facebookresearch/dinov2)

PyTorch code and models for the DINOv2 self-supervised learning method.

## README要約
## facebookresearch/dinov2 リポジトリ概要 (日本語)

このリポジトリは、Facebook AI Research (FAIR) によって開発された自己教師あり学習手法である **DINOv2** の PyTorch コードと事前学習済みモデルを提供しています。DINOv2 は、ラベルやアノテーションを使用せずに、堅牢な視覚的特徴量を学習することを目的としています。

**主な特徴:**

*   **自己教師あり学習:** ラベルなしのデータセット (1億4200万枚の画像) で事前学習されたモデルを提供。
*   **高性能な特徴量:** 様々なコンピュータビジョンタスクで、線形層などの単純な分類器と組み合わせるだけで高いパフォーマンスを発揮。ファインチューニングを必要とせず、ドメイン間のロバスト性も高い。
*   **ViT (Vision Transformer) モデル:** ViT-S/14、ViT-B/14、ViT-L/14、ViT-g/14 の各モデルを提供。レジスタ付きのモデルも利用可能。
*   **多様なタスクへの対応:** ImageNet での k-NN および線形分類、深度推定、セマンティックセグメンテーション用の事前学習済みヘッドを提供。
*   **PyTorch Hub 統合:** PyTorch Hub を通じて、簡単に事前学習済みモデルと分類器を読み込むことが可能。
*   **モデルカード:** モデルの詳細な情報を提供する MODEL\_CARD.md が付属。
*   **デモンストレーション:** オンラインデモへのリンクも提供。

**更新情報:**

*   2023年10月26日：[Vision Transformers Need Registers](https://arxiv.org/abs/2309.16588) に基づき、レジスタ付きの DINOv2 バックボーンを追加。

**モデルの種類:**

様々なサイズの ViT モデル (ViT-S/14, ViT-B/14, ViT-L/14, ViT-g/14) と、レジスタの有無のバリエーションが提供されています。これらのモデルは、ImageNet k-NN および線形分類でのパフォーマンスが示されています。

**利用方法:**

1.  **インストール:** PyTorch 2.0、xFormers 0.0.18 およびその他の依存関係が必要。conda または pip で依存関係をインストール可能。
2.  **データ準備:** ImageNet-1k および ImageNet-22k データセットの準備が必要。データセットのディレクトリ構造とメタデータファイルの準備に関する説明が提供されています。
3.  **トレーニング:** 提供されている `train.py` スクリプトと設定ファイルを使用して、DINOv2 モデルをトレーニングできます。トレーニング時間と結果の目安も示されています。
4.  **評価:** k-NN、ロジスティック回帰、線形分類などの評価スクリプトが提供されており、トレーニング済みのモデルを評価できます。
5.  **事前学習済みモデルの利用:** 事前学習済みバックボーン、線形ヘッド（ImageNet分類、深度推定、セマンティックセグメンテーション）、Mask2Former が ADE20K で事前学習されたセグメンテーションモデルを、PyTorch Hub または直接ダウンロードして利用できます。

**提供物:**

*   PyTorch コード
*   事前学習済みモデル (バックボーン、分類器ヘッド)
*   トレーニングおよび評価スクリプト
*   モデルカード (MODEL\_CARD.md)
*   ノートブック (depth\_estimation.ipynb, semantic\_segmentation.ipynb)

**ライセンス:**

Apache License 2.0 で提供されています。

**引用:**

リポジトリを利用する際は、提供されている BibTeX 形式の論文を引用することが推奨されています。


---

# tensorflow/tensorflow

**stars**: 189570

[View Repository on Github](https://github.com/tensorflow/tensorflow)

An Open Source Machine Learning Framework for Everyone

## README要約
## TensorFlow リポジトリ概要 (日本語)

このリポジトリは、機械学習のためのオープンソースプラットフォームであるTensorFlowに関するものです。

**概要:**

*   TensorFlowは、機械学習の研究開発を加速し、開発者がMLを活用したアプリケーションを簡単に構築・展開できるようにするための、包括的かつ柔軟なツール、ライブラリ、コミュニティリソースのエコシステムを提供します。
*   Google Brainの機械学習チームによって開発され、機械学習とニューラルネットワークの研究に使用されていましたが、様々な分野で利用可能な汎用性を持っています。
*   PythonとC++ APIを提供し、他の言語向けのAPIも提供しています（互換性は保証されていません）。

**特徴:**

*   機械学習の研究開発に役立つ幅広いツール、ライブラリ、コミュニティリソースを提供
*   PythonとC++の安定したAPIを提供
*   様々なデバイス（CPU、GPU、DirectX、MacOS-metal）に対応
*   TensorFlowのエコシステムには、ツール、ライブラリ、コミュニティリソースが含まれる
*   Nightlyバイナリが利用可能で、テストを容易に

**インストール:**

TensorFlowのインストールは、[pipパッケージ](https://www.tensorflow.org/install/pip)の使用、[GPUサポートの有効化](https://www.tensorflow.org/install/gpu)、[Dockerコンテナの使用](https://www.tensorflow.org/install/docker)、または[ソースからのビルド](https://www.tensorflow.org/install/source)によって行えます。

*   現在のリリースをインストール（CUDA対応GPUカードのサポートを含む）:
    ```bash
    pip install tensorflow
    ```
*   CPUのみのパッケージ:
    ```bash
    pip install tensorflow-cpu
    ```
*   最新バージョンに更新するには、上記のコマンドに `--upgrade` フラグを追加します。
*   Nightlyバイナリは、`tf-nightly` と `tf-nightly-cpu` パッケージから利用できます。

**使用例:**

```python
>>> import tensorflow as tf
>>> tf.add(1, 2).numpy()
3
>>> hello = tf.constant('Hello, TensorFlow!')
>>> hello.numpy()
b'Hello, TensorFlow!'
```

**貢献:**

*   コントリビューションガイドラインに従ってください。
*   [TensorFlowの行動規範](CODE_OF_CONDUCT.md)を遵守してください。
*   リクエストとバグの追跡にはGitHub Issuesを使用します。
*   一般的な質問や議論にはTensorFlow Forumを使用してください。
*   特定の質問にはStack Overflowを使用してください。

**パッチ適用ガイドライン:**

TensorFlowの特定のバージョン（例: 2.8）に対してバグ修正やセキュリティ脆弱性に対する修正を適用する手順を以下に示します。

1.  TensorFlowリポジトリをクローンし、対応するブランチに切り替えます。
2.  必要な変更を適用（cherry-pick）し、コードの競合を解決します。
3.  TensorFlowのテストを実行し、すべてパスすることを確認します。
4.  ソースからTensorFlow pipパッケージをビルドします。

**ビルドステータス:**

公式ビルドとコミュニティがサポートするプラットフォームと設定が提供されています。ビルドステータスの詳細については、READMEをご参照ください。

**その他:**

*   TensorFlowに関する様々なリソースへのリンクが提供されています（公式ドキュメント、チュートリアル、モデル、ブログ、Twitter、YouTubeなど）。
*   Coursera、Udacity、Edxなどのコースへのリンクが提供されています。
*   ライセンスは[Apache License 2.0](LICENSE)です。

