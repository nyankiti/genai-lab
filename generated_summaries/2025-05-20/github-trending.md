
# CopilotKit/CopilotKit

**stars**: 19494

[View Repository on Github](https://github.com/CopilotKit/CopilotKit)

React UI + elegant infrastructure for AI Copilots, AI chatbots, and in-app AI agents. The Agentic last-mile 🪁

## README要約
## CopilotKit の概要

CopilotKit は、React UI と洗練されたインフラストラクチャを組み合わせ、AI コパイロット、AI チャットボット、およびアプリ内 AI エージェントを構築するためのツールキットです。 これは、ユーザーがアプリケーション内で AI を活用したアシスタントやエージェントを統合するための「エージェント型ラストマイル」を表現しています。

**主な特徴:**

*   React UI コンポーネントとインフラストラクチャ
*   AI コパイロット、チャットボット、およびアプリ内 AI エージェントの構築
*   ユーザーとの直接的な対話が可能で、アプリケーション内でシームレスに統合

**主要コンポーネントと機能:**

*   **React Core パッケージ:** CopilotKit の中核機能が含まれており、npm で入手可能です。
*   **UI コンポーネント:** 深くカスタマイズ可能な、プリビルドされたコンポーネントを提供（CSS、サブコンポーネントのカスタマイズオプション）
*   **RAG (Retrieval-Augmented Generation):** ユーザーのデータと連携した AI 機能の実現
*   **知識ベースの統合:** カスタムナレッジベースの利用を可能にする
*   **Frontend Actions:** ジェネレーティブ UI と、ストリーミングサポート。
*   **Structured Autocompletion:** 構造化されたオートコンプリート機能。
*   **CoAgents (In-App LangGraph Agents):** アプリ内 LangGraph エージェントをサポート。

**主なユースケース:**

*   **フォーム入力コパイロット:** 面倒なフォーム入力の自動化と会話形式での入力。
*   **ステートマシンコパイロット:** 複雑な会話フローの管理と、コンテキストに応じた対話。
*   **データとのチャット:** データダッシュボードとの AI による対話、データ分析。
*   **SaaS コパイロット (銀行):** 複雑なデータ構造と連携した金融アシスタント。
*   **旅行プランナー:** 詳細な旅程作成、観光地の検索。
*   **リサーチキャンバス:** 複数エージェントによる論文分析と要約生成。

**開始方法:**

*   [クイックスタートドキュメント](https://docs.copilotkit.ai/quickstart) で簡単に開始できます。
*   コードサンプルが提供されており、UI のカスタマイズや、RAG、知識ベースの統合、Frontend Actions などの機能の実装方法を示しています。

**貢献:**

*   貢献は大歓迎です。コード、ドキュメント、デモアプリの作成、または単なる普及など、様々な方法で貢献できます。
*   [CONTRIBUTING.md](https://github.com/CopilotKit/CopilotKit/blob/main/CONTRIBUTING.md) にコード貢献に関する詳細が記載されています。
*   [Discord](https://discord.gg/6dffbvGU3D) でチームやコミュニティと交流できます。

**ライセンス:**

*   MIT ライセンスに基づいています。

---

# kortix-ai/suna

**stars**: 11736

[View Repository on Github](https://github.com/kortix-ai/suna)

Suna - Open Source Generalist AI Agent

## README要約
## Suna - オープンソースの汎用AIエージェントの概要

Sunaは、あなたの代わりに様々なタスクをこなす、完全にオープンソースのAIアシスタントです。自然な会話を通じて、リサーチ、データ分析、日常の課題を解決するためのデジタルコンパニオンとして機能します。直感的なインターフェースを備え、あなたのニーズを理解し、結果を提供します。

**主な特徴と機能:**

*   **ブラウザ自動化:** ウェブサイトのナビゲーションとデータ抽出をシームレスに行います。
*   **ファイル管理:** ドキュメントの作成と編集をサポートします。
*   **ウェブクロールと拡張検索:** ウェブ上の情報を収集し、高度な検索を行います。
*   **コマンドライン実行:** システムタスクを実行します。
*   **ウェブサイトのデプロイ:** ウェブサイトを簡単に公開できます。
*   **APIとサービスの統合:** 様々なAPIやサービスと連携します。

これらの機能を組み合わせることで、Sunaは複雑な問題を解決し、簡単な会話を通じてワークフローを自動化します。

**主要コンポーネント:**

Sunaは、以下の4つの主要コンポーネントで構成されています。

1.  **Backend API:** RESTエンドポイント、スレッド管理、AnthropicなどのLLMとの統合（LiteLLM経由）を処理するPython/FastAPIサービス。
2.  **Frontend:** チャットインターフェース、ダッシュボードなどを提供するNext.js/Reactアプリケーション。
3.  **Agent Docker:** ブラウザ自動化、コードインタープリター、ファイルシステムアクセス、ツール統合、セキュリティ機能を備えた、各エージェントの分離された実行環境。
4.  **Supabase Database:** 認証、ユーザー管理、会話履歴、ファイルストレージ、エージェントの状態、分析、リアルタイムサブスクリプションによるデータ永続化を処理します。

**ユースケース:**

Sunaは、以下のような様々なタスクに利用できます。

*   競合分析
*   VC（ベンチャーキャピタル）リストの作成
*   求職者の検索
*   企業旅行の計画
*   Excelでの作業
*   イベントスピーカーの候補探し
*   科学論文の要約と相互参照
*   リード獲得のための情報収集と最初のコンタクトメールの作成
*   SEO分析
*   旅行プランの作成
*   最近資金調達したスタートアップの情報収集
*   フォーラムのディスカッションのスクレイピング

**セルフホスティング:**

Sunaは、セットアップウィザードを使用して、独自のインフラストラクチャにセルフホストできます。

*   Supabaseプロジェクトの設定（データベースと認証）
*   Redisの設定（キャッシュとセッション管理）
*   Daytonaの設定（セキュアなエージェント実行）
*   LLMプロバイダーとの統合（Anthropic、OpenAI、Groqなど）
*   ウェブ検索とスクレイピング機能の設定

**セルフホスティングのクイックスタート:**

1.  リポジトリをクローンします。
2.  セットアップウィザードを実行します。
3.  コンテナを起動または停止します。

詳細な手順については、[Self-Hosting Guide](./docs/SELF-HOSTING.md)を参照してください。

**貢献:**

コミュニティからの貢献を歓迎します。詳細は、[Contributing Guide](./CONTRIBUTING.md)を参照してください。

**ライセンス:**

Kortix Sunaは、Apache License, Version 2.0の下でライセンスされています。完全なライセンステキストについては、[LICENSE](./LICENSE)を参照してください。


---

# zen-browser/desktop

**stars**: 30475

[View Repository on Github](https://github.com/zen-browser/desktop)

Welcome to a calmer internet

## README要約
## Zen Browser / Desktop の詳細な要約

**概要:**

「Zen Browser」は、インターネット閲覧に「静けさ」をもたらすことを目指した、Firefoxベースのオープンソースウェブブラウザです。速度、プライバシー、生産性のバランスを重視しています。

**主な特徴:**

*   **Firefoxベース:** 最新のFirefoxバージョンをベースに開発されており、最新の機能とセキュリティアップデートを享受できます。
*   **多様なプラットフォーム対応:** Linux, macOS, Windowsで利用可能です。
*   **インストール方法:** Winget (Windows), Homebrew (macOS), Arch Linux向けパッケージ、tarball、AppImageなど、様々な方法でインストールできます。公式サイトまたはGitHub Releasesからダウンロードできます。
*   **更新機能:** ブラウザ内蔵の更新機能により、簡単に最新バージョンにアップデートできます。
*   **オープンソース:** コミュニティからの貢献を歓迎しています。

**貢献と開発:**

*   **貢献ガイドライン:** 貢献する前に、[contribution guidelines](./docs/contribute.md)を参照してください。
*   **イシューメトリクス:** 月末にクローズされたイシュー数を記録し、進捗を追跡しています。
*   **バージョン管理:** Semantic Versioning（セマンティックバージョニング）を使用しています。
*   **ブランチ:** 開発用ブランチ (`dev`) と安定版リリース用ブランチ (`stable`) があります。
*   **開発環境構築:** [these instructions](https://docs.zen-browser.app/guides/building)に従って、ローカル環境でビルドして実行できます。
*   **使用コンポーネント:** Firefoxフォークを改善するためのコンポーネントが含まれています。

**謝辞:**

開発チームと貢献者、および以下のプロジェクトに感謝しています。

*   BetterFox (デフォルト設定)
*   Arc Palette (グラデーション画像)
*   Edge Firefox (icons.cssの変更元)

**その他:**

*   **ライセンス:** MPL 2.0ライセンスで公開されています。
*   **比較:** 他の主要なブラウザ (Chromium, Brave) との比較を視覚的に示しています。

**ダウンロード:**

*   [https://zen-browser.app/download](https://zen-browser.app/download)
*   [https://github.com/zen-browser/desktop/releases](https://github.com/zen-browser/desktop/releases)

