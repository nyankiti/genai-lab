
# LadybirdBrowser/ladybird

**stars**: 38839

[View Repository on Github](https://github.com/LadybirdBrowser/ladybird)

Truly independent web browser

## README要約
## Ladybird ブラウザの概要

Ladybird は、Web標準に準拠した新しいエンジンを基盤とする、完全に独立したウェブブラウザです。現在プレアルファ版であり、開発者向けです。

### 主な特徴

*   **マルチプロセスアーキテクチャ:** メインUIプロセス、複数の WebContent レンダラープロセス、ImageDecoder プロセス、RequestServer プロセスで構成されています。
*   **サンドボックス:** 各タブは独自のレンダラープロセスを持ち、システムからサンドボックス化されています。
*   **アウトオブプロセス:** 画像デコードとネットワーク接続をアウトオブプロセスで行い、悪意のあるコンテンツへの耐性を高めています。
*   **SerenityOS コンポーネントの継承:** 以下の SerenityOS の主要ライブラリを借用しています。
    *   LibWeb: ウェブレンダリングエンジン
    *   LibJS: JavaScript エンジン
    *   LibWasm: WebAssembly 実装
    *   LibCrypto/LibTLS: 暗号プリミティブと TLS
    *   LibHTTP: HTTP/1.1 クライアント
    *   LibGfx: 2D グラフィックスライブラリ、画像デコードとレンダリング
    *   LibUnicode: Unicode およびロケールサポート
    *   LibMedia: 音声と動画再生
    *   LibCore: イベントループ、OS 抽象化レイヤー
    *   LibIPC: プロセス間通信

### ビルドと実行

[ビルド手順](Documentation/BuildInstructionsLadybird.md)を参照してください。

Ladybird は Linux、macOS、Windows (WSL2)、およびその他の \*Nix で動作します。

### ドキュメント

コード関連のドキュメントは [ドキュメント](Documentation/) フォルダにあります。

### コミュニティと参加

開発に関する議論は [Discord サーバー](https://discord.gg/nvfjVJ4Svh) で行われています。

初めて貢献する場合は、[貢献の開始](Documentation/GettingStartedContributing.md)をお読みください。

イシューを報告する前に、[イシューポリシー](CONTRIBUTING.md#issue-policy) と [詳細なイシュー報告ガイドライン](ISSUES.md)を確認してください。

完全な貢献ガイドラインは [`CONTRIBUTING.md`](CONTRIBUTING.md) にあります。

### ライセンス

Ladybird は 2 条項 BSD ライセンスの下でライセンスされています。


---

# microsoft/ai-agents-for-beginners

**stars**: 18567

[View Repository on Github](https://github.com/microsoft/ai-agents-for-beginners)

10 Lessons to Get Started Building AI Agents

## README要約
## microsoft/ai-agents-for-beginners リポジトリの要約

このリポジトリは、AIエージェントの構築を始めるための10のレッスンを提供するコースです。Microsoftが提供しており、AIエージェントの基礎を学ぶことを目的としています。

**主な内容:**

*   **10のレッスン:** AIエージェントの基礎を網羅した10のレッスンを提供します。各レッスンは独立しており、自分の興味のあるところから始めることができます。
*   **コードサンプル:** 各レッスンには、Azure AI FoundryとGitHub Model Catalogs（無料）を利用したPythonコードサンプルが含まれています。
*   **多言語対応:** 英語、中国語（簡体字、繁体字、香港）、フランス語、日本語、韓国語、ポルトガル語（ブラジル）、スペイン語、ドイツ語、ペルシャ語、ポーランド語、ヒンディー語に対応しています。
*   **必須ツール:**
    *   GitHub Models (無料 / 限定)
    *   Azure AI Foundry (Azureアカウントが必要)
    *   Azure AI Agent Service
    *   Semantic Kernel
    *   AutoGen
*   **追加情報:**
    *   Generative AIの基礎を学ぶためのコース「Generative AI For Beginners」へのリンク。
    *   コードを実行するためのリポジトリのフォーク方法。
    *   質問やサポートを受けるためのAzure AI Community Discordへのリンク。
    *   貢献方法（問題の提起、プルリクエストの作成）

**各レッスンの構成:**

*   READMEに書かれたレッスン内容と短い動画
*   Azure AI FoundryとGithub ModelsをサポートするPythonコードサンプル
*   追加の学習リソースへのリンク

**各レッスンの内容:**

1.  AIエージェントとエージェントのユースケースの紹介
2.  AIエージェントフレームワークの探求
3.  AIエージェントのデザインパターンの理解
4.  ツール使用デザインパターン
5.  エージェント型RAG (Retrieval-Augmented Generation)
6.  信頼できるAIエージェントの構築
7.  プランニングデザインパターン
8.  マルチエージェントデザインパターン
9.  メタ認知デザインパターン
10. 運用環境におけるAIエージェント

**その他のコース:**

Microsoftは、本コース以外にも、Generative AI for Beginners (.NET版を含む)、ML for Beginners、Data Science for Beginners、AI for Beginners、Cybersecurity for Beginners、Web Dev for Beginners、IoT for Beginners、XR Development for Beginners、GitHub Copilotに関するコースも提供しています。

**貢献について:**

このプロジェクトへの貢献は大歓迎です。MicrosoftのContributor License Agreement (CLA)に従い、プルリクエストを送信する際にCLAボットの指示に従ってください。

**商標について:**

本プロジェクトには、Microsoftの商標やロゴが含まれる場合があります。Microsoftの商標やロゴの使用は、MicrosoftのTrademark & Brand Guidelinesに従う必要があります。第三者の商標やロゴの使用は、それぞれのポリシーに従います。

---

# Shubhamsaboo/awesome-llm-apps

**stars**: 30829

[View Repository on Github](https://github.com/Shubhamsaboo/awesome-llm-apps)

Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.

## README要約
## Shubhamsaboo/awesome-llm-apps の要約

このリポジトリは、OpenAI、Anthropic、Gemini、DeepSeek、Qwen、Llamaなどのオープンソースモデルを含む様々なLLM (大規模言語モデル) アプリケーションのコレクションです。RAG (Retrieval Augmented Generation) とAIエージェントを活用した、実用的で創造的なLLMアプリケーションの発見と、オープンソースエコシステムの成長への貢献を目的としています。

**主な特徴:**

*   **多様なアプリケーション:** コードリポジトリからメール、3Dゲームまで、様々なドメインにおけるLLMの応用事例を提供。
*   **モデルの活用:** OpenAI、Anthropic、Gemini、オープンソースモデル（DeepSeek, Qwen, Llamaなど）を組み合わせたアプリ。
*   **RAGとAIエージェント:** RAGやAIエージェント技術を利用したアプリを多数収録。
*   **ドキュメント化されたプロジェクト:** わかりやすく解説されたプロジェクトを通じて学習が可能。
*   **グローバルAIエージェントハッカソン:** AIエージェントに関するハッカソンが開催され、最大25,000ドルの賞金とAPI/ツールクレジットが提供される。

**含まれる主なカテゴリー:**

*   AIエージェント (スターター、高度、自律型ゲーム、マルチエージェントチーム、音声AIエージェント、MCP AIエージェント)
*   RAG (Retrieval Augmented Generation) チュートリアル
*   高度なLLMアプリ (特定のものとのチャット、メモリを持つLLMアプリ、LLMファインチューニングチュートリアル)

**利用方法:**

1.  リポジトリをクローン。
2.  目的のプロジェクトディレクトリに移動。
3.  必要な依存関係をインストール (requirements.txt)。
4.  各プロジェクトのREADME.mdに記載されている指示に従って、アプリを実行。

**コントリビューション:**

改善や新しいアプリの追加は歓迎されており、GitHub Issueの作成またはプルリクエストの提出を通じて貢献できます。

**その他:**

このリポジトリをStarし、今後の更新情報を見逃さないようにすることが推奨されています。


---

# CapSoftware/Cap

**stars**: 8411

[View Repository on Github](https://github.com/CapSoftware/Cap)

Open source Loom alternative. Beautiful, shareable screen recordings.

## README要約
## Cap: オープンソースの Loom 代替ツールの概要

**Cap** は、Loom のオープンソース代替ツールです。ビデオメッセージングツールであり、ビデオの録画、編集、共有を迅速に行うことができます。

**主な特徴:**

*   **オープンソース:** 自由に使用、改変、配布できます。
*   **ビデオメッセージング:** 簡単にビデオを作成し共有できます。
*   **macOS & Windows 用のダウンロード:** macOS および Windows で利用可能です。
*   **Self Hosting (開発中):** Vercel や Render へのワンクリックデプロイ、Docker でのセルフホスティングオプションも検討されています。Cap Discord で貢献できます。

**技術スタック:**

Cap は、Turborepo を使用したモノレポアーキテクチャを採用しており、以下の技術で構築されています。

*   **フロントエンド:** SolidStart (Tauri 用), Next.js (web 用)
*   **バックエンド:** Rust (Tauri 用)
*   **言語:** TypeScript
*   **UI:** React
*   **ORM:** Drizzle
*   **データベース:** MySQL
*   **スタイル:** TailwindCSS

**モノレポ内のアプリとパッケージ:**

*   **Apps:**
    *   `desktop`: Tauri (Rust) アプリ。SolidStart をフロントエンドで使用。
    *   `web`: Next.js Web アプリ。
*   **Packages:**
    *   `ui`: 共有コンポーネントライブラリ。
    *   `utils`: 共有ユーティリティライブラリ。
    *   `tsconfig`: 共有 `tsconfig` 設定。
    *   `database`: 共有データベースライブラリ (React および Drizzle ORM)。
    *   `config`: `eslint` 設定。

**貢献:**

コントリビューションについては、`CONTRIBUTING.md` を参照してください。
