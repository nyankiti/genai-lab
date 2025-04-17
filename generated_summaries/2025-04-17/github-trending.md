
# DioxusLabs/dioxus

**stars**: 26710

[View Repository on Github](https://github.com/DioxusLabs/dioxus)

Fullstack app framework for web, desktop, mobile, and more.

## README要約
## Dioxus リポジトリ概要 (日本語)

**Dioxus** は、Web、デスクトップ、モバイルなど、様々なプラットフォーム向けのフルスタックアプリケーションフレームワークです。Rust言語で記述されており、単一のコードベースで複数のプラットフォームに対応できることが特徴です。

**主な特徴:**

*   **クロスプラットフォーム対応:** Web、デスクトップ (macOS, Linux, Windows)、モバイル (Android, iOS) など、幅広いプラットフォームをサポートしています。
*   **シグナルベースの状態管理:** React、Solid、Svelteの良い点を組み合わせた、人間工学に基づいた状態管理を提供しています。
*   **型安全なルーティングとサーバー関数:** Rustのコンパイル時の保証を活用し、型安全なルーティングとサーバー関数を提供します。
*   **統合されたバンドラー:**  Web、macOS、Linux、Windows向けに最適化されたバンドルを簡単に作成できます。
*   **ホットリローディング:** `dx serve` コマンドで開発サーバーを起動し、コードを変更するとリアルタイムで変更が反映されます。
*   **ネイティブモバイルサポート:** AndroidとiOSのネイティブアプリをRustで簡単に構築できます。
*   **WebAssembly:** WebAssemblyを利用してWebアプリケーションを構築し、50KB以下の軽量なアプリを実現できます。

**その他の特長:**

*   使いやすいドキュメントが提供されています。
*   活発なコミュニティ (Discord) があります。
*   DioxusLabsのフルタイムエンジニアチームが開発をサポートしています。

**Dioxus の強み:**

*   **Reactライク:** コンポーネント、プロップス、フックなどのReactライクな概念を採用し、UIを構築します。
*   **HTMLとCSS:** HTMLとCSSを全面的に活用し、それらに慣れた開発者が容易に利用できます。
*   **レンダラー非依存:** 柔軟なアーキテクチャにより、様々なプラットフォームのレンダラーを簡単に切り替えることができます。
*   **コミュニティ貢献:** 積極的にライブラリをオープンソース化し、エコシステムの成長を促進しています。

**Dioxus vs 他のフレームワーク:**

Dioxusは、Tauri、Leptos、Yew、egui、Iced、Electronなどの他のフレームワークと比較して、以下のような違いがあります。

*   **Tauri:** ネイティブRustでUIを構築できるため、Rustコードを直接実行できます。Dioxusは、Tauriよりも軽量で、プラットフォーム固有の機能を利用できます。
*   **Leptos:** リアクティブモデルとレンダリングにシグナルを使用し、Webアプリケーションに特化しています。Dioxusは、より広範なプラットフォームをサポートしています。
*   **Yew:** シングルページWebアプリケーションに特化しており、フルスタックおよびクロスプラットフォーム対応のDioxusとは異なります。
*   **egui:**  フレームごとに再レンダリングされる即時モードGUIライブラリです。Dioxusは、スタイルとレイアウトの状態を保持するリテインモードUIフレームワークであり、よりネイティブな外観とパフォーマンスを実現します。
*   **Iced:** Elmのステート管理モデルを使用し、WGPUでネイティブにレンダリングします。DioxusはWebビューをレンダラーとして使用し、HTMLとCSSでUIを構築します。
*   **Electron:** Electronは、Web技術でクロスプラットフォームデスクトップアプリを構築できます。Dioxusは、より軽量で、ネイティブのWebViewを利用します。

**利用方法:**

*   `cargo run --example <example>` でサンプルを実行できます。
*   Dioxus CLI (`dx`) をインストールして、 `dx serve --example <example> --platform web -- --no-default-features` でWebプラットフォームでサンプルを実行できます。

**貢献について:**

*   ドキュメントの貢献
*   問題の報告 (issue tracker)
*   Discord での質問
*   コードの投稿

**ライセンス:**

MITライセンスまたはApache-2ライセンスでライセンスされています。


---

# yeongpin/cursor-free-vip

**stars**: 17970

[View Repository on Github](https://github.com/yeongpin/cursor-free-vip)

[Support 0.48.x]（Reset Cursor AI MachineID & Bypass Higher Token Limit） Cursor Ai ，自动重置机器ID ， 免费升级使用Pro功能: You've reached your trial request limit. / Too many free trial accounts used on this machine. Please upgrade to pro. We have this limit in place to prevent abuse. Please let us know if you believe this is a mistake.

## README要約
## yeongpin/cursor-free-vip の詳細な要約

このリポジトリは、AI搭載のテキストエディタ「Cursor」の利用制限を回避するためのツールです。具体的には、Cursor AIの試用回数制限や、マシンIDによるアカウントロックを突破し、Pro機能を無償で利用できるようにすることを目的としています。

**主な機能:**

*   **Cursorの設定リセット:**  Cursorの構成をリセットし、制限回避を試みます。
*   **マルチプラットフォーム対応:** Windows、macOS、Linuxに対応しています。
*   **自動化スクリプト:** ワンクリックで利用できるスクリプトが提供されています。
*   **設定ファイル:** ユーザーは、設定ファイルを通じて、ブラウザパスなどのカスタマイズが可能です。

**使用方法:**

1.  **自動実行スクリプト:**
    *   Linux/macOS: `curl -fsSL https://raw.githubusercontent.com/yeongpin/cursor-free-vip/main/scripts/install.sh -o install.sh && chmod +x install.sh && ./install.sh`
    *   Archlinux: `yay -S cursor-free-vip-git` (AUR経由)
    *   Windows: `irm https://raw.githubusercontent.com/yeongpin/cursor-free-vip/main/scripts/install.ps1 | iex`
2.  **手動リセット:**
    *   Linux/macOS: `curl -fsSL https://raw.githubusercontent.com/yeongpin/cursor-free-vip/main/scripts/reset.sh | sudo bash`
    *   Windows: `irm https://raw.githubusercontent.com/yeongpin/cursor-free-vip/main/scripts/reset.ps1 | iex`

**重要な注意点:**

*   **管理者権限:** スクリプトは管理者権限で実行する必要があります。
*   **Cursorの終了:** スクリプトを実行する前に、Cursorが完全に終了していることを確認してください。
*   **利用目的:** このツールは学習および研究目的でのみ利用してください。
*   **利用規約:** このツールを使用する際は、関連ソフトウェアの利用規約を遵守してください。
*   **エラー対応:** "User is not authorized" エラーが発生した場合、使い捨てメールの使用が原因である可能性があるため、一時的なメールサービスの使用を避けるようにしてください。

**免責事項:**

このツールを利用した結果については、ユーザーが全責任を負います。

**その他:**

*   [CHANGELOG.md](CHANGELOG.md)で更新履歴を確認できます。
*   コントリビューションを歓迎しています。
*   プロジェクトへのサポートとして、コーヒーの購入を促しています。
*   ライセンスは[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) です。


---

# NirDiamant/RAG_Techniques

**stars**: 14475

[View Repository on Github](https://github.com/NirDiamant/RAG_Techniques)

This repository showcases various advanced techniques for Retrieval-Augmented Generation (RAG) systems. RAG systems combine information retrieval with generative models to provide accurate and contextually rich responses.

## README要約
## NirDiamant/RAG_Techniques リポジトリ要約

このリポジトリは、Retrieval-Augmented Generation (RAG) システムを高度化するための様々なテクニックを紹介しています。RAGシステムは、情報検索と生成モデルを組み合わせることで、正確で文脈豊かな応答を提供します。

**主な内容:**

*   **高度なRAGテクニックの包括的なコレクション:** 精度、効率、文脈的豊かさを向上させるための最新技術が網羅されています。
*   **豊富なドキュメントと実践的なガイドライン:** 各テクニックの詳細なドキュメントと実装手順が提供されます。
*   **活発なコミュニティ:** Discordコミュニティを通じて、技術的な議論、アイデア交換、共同開発を促進しています。
*   **定期的な更新:** 最新の技術的進歩が随時追加されます。

**主な機能:**

*   最先端のRAG機能強化
*   各技術に対する包括的なドキュメント
*   実践的な実装ガイドライン
*   最新の進歩に関する定期的な更新

**テクニックの分類:**

このリポジトリで扱われている技術は、以下のカテゴリに分類されています。

*   **基礎 (Foundational)**: RAGの基本的な実装方法（LangChain、LlamaIndex、CSVファイルを使用したRAG、信頼性の高いRAG、チャンクサイズの最適化、プロポジションチャンキングなど）。
*   **クエリの拡張 (Query Enhancement)**: クエリの性能を向上させる方法（クエリの変換、HyDE、HyPEなど）。
*   **コンテキストの強化 (Context Enrichment)**: 検索結果のコンテキストを豊かにする方法（コンテキストチャンクヘッダー、関連セグメントの抽出、周辺ウィンドウの追加、セマンティックチャンキング、コンテキスト圧縮など）。
*   **高度な検索 (Advanced Retrieval)**: さまざまな検索手法の組み合わせや高度な検索機能（融合検索、インテリジェントなランキング、多面的なフィルタリング、階層インデックス、アンサンブル検索、ダーツボード検索、マルチモーダル検索など）。
*   **反復および適応技術 (Iterative and Adaptive Techniques)**: ユーザーのインタラクションから学習し、検索戦略を適応させる方法（フィードバックループを使用した検索、適応検索、反復検索など）。
*   **評価 (Evaluation)**: RAGシステムを評価する様々な手法（DeepEval、GroUSEなど）。
*   **説明可能性と透明性 (Explainability and Transparency)**: 検索プロセスの透明性を高める方法（説明可能な検索など）。
*   **高度なアーキテクチャ (Advanced Architectures)**: より複雑なRAGシステムの構築方法（知識グラフの統合、GraphRAG、RAPTOR、Self RAG、Corrective RAGなど）。
*   **特別な高度な技術 (Special Advanced Technique)**: 複雑な問題を解決するための高度なRAGソリューション（Sophisticated Controllable Agent for Complex RAG Tasks）。

**関連プロジェクト:**

*   [Prompt Engineering Techniques guide](https://github.com/NirDiamant/Prompt_Engineering): プロンプトエンジニアリングのテクニック集
*   [GenAI Agents Repository](https://github.com/NirDiamant/GenAI_Agents): AIエージェントの実装とチュートリアル集

**貢献について:**

コミュニティからの貢献を歓迎しており、新しい技術や改善を提案できます。

**ライセンス:**

本プロジェクトは、カスタムの非商用ライセンスに基づいて公開されています。詳細については、[LICENSE](LICENSE)ファイルを参照してください。

**その他:**

*   [DiamantAI Newsletter](https://diamantai.substack.com/?r=336pe4&utm_campaign=pub-share-checklist): AIに関する最新情報やチュートリアルが配信されます。
*   スポンサーも募集しています。

このリポジトリは、RAG技術に関する包括的な知識ハブとして機能し、研究者や実務者がRAGシステムの限界を押し広げるための貴重なリソースを提供しています。


---

# OpenBB-finance/OpenBB

**stars**: 40800

[View Repository on Github](https://github.com/OpenBB-finance/OpenBB)

Investment Research for Everyone, Everywhere.

## README要約
## OpenBB Platform の日本語概要

このリポジトリは、誰でもどこでも利用できる投資リサーチプラットフォームである **OpenBB Platform** に関するものです。これは、無料かつ完全オープンソースの金融プラットフォームであり、株式、オプション、暗号通貨、外国為替、マクロ経済、債券など、幅広い金融データへのアクセスを提供します。ユーザーのニーズに合わせて拡張機能も豊富に用意されています。

**主な特徴:**

*   **無料かつオープンソース:** 誰でも自由に利用、改変、配布できます。
*   **多岐にわたるデータ:** 株式、オプション、暗号通貨など、様々な金融データにアクセスできます。
*   **拡張性:** ユーザーのニーズに合わせて機能を拡張できます。
*   **AI 搭載のワークスペース:**  AIを活用した研究および分析ワークスペースである [pro.openbb.co](https://pro.openbb.co) があります。
*   **AI エージェント:**  OpenBB 内のすべてのデータにアクセスできるオープンソースの AI 金融アナリストエージェントも利用可能です (リポジトリ: [https://github.com/OpenBB-finance/openbb-agents](https://github.com/OpenBB-finance/openbb-agents))。

**インストール:**

*   PyPI から `pip install openbb` でインストールできます。
*   リポジトリを直接クローンすることもできます: `git clone https://github.com/OpenBB-finance/OpenBB.git`
*   OpenBB Platform CLI も `pip install openbb-cli` でインストールできます。
*   詳細なインストール方法は、[OpenBB ドキュメント](https://docs.openbb.co/platform/installation) を参照してください。

**貢献:**

このプロジェクトへの貢献は以下の3つの方法があります。

1.  **コントリビューターになる:** 詳細な情報は [コントリビューションドキュメント](https://docs.openbb.co/platform/developer_guide/contributing) を参照してください。
2.  **GitHub チケットを作成する:** バグ報告、改善提案、新機能のリクエストができます。
    *   バグ報告: [https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D](https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D)
    *   改善提案: [https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=enhancement&template=enhancement.md&title=%5BIMPROVE%5D](https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=enhancement&template=enhancement.md&title=%5BIMPROVE%5D)
    *   機能リクエスト: [https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=new+feature&template=feature_request.md&title=%5BFR%5D](https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=new+feature&template=feature_request.md&title=%5BFR%5D)
3.  **フィードバックを提供する:** Discord やその他のソーシャルメディアでフィードバックを送信できます。

**ライセンス:** AGPLv3 License

**免責事項:** 金融商品の取引にはリスクが伴います。OpenBB Platform のデータは必ずしも正確ではなく、取引の結果として生じる損失について責任を負いません。

**連絡先:**

*   質問: `support@openbb.co`
*   その他: `hello@openbb.co`
*   ソーシャルメディア: [openbb.co/links](https://openbb.co/links)

**その他:**

*   [Star History](https://api.star-history.com/svg?repos=openbb-finance/OpenBB&type=Date&theme=dark) を通して、プロジェクトの成長を確認できます。
*   コントリビューターのリストが提供されています。
