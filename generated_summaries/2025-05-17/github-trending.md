
# neondatabase/neon

**stars**: 17562

[View Repository on Github](https://github.com/neondatabase/neon)

Neon: Serverless Postgres. We separated storage and compute to offer autoscaling, code-like database branching, and scale to zero.

## README要約
## Neon の概要

Neon は、AWS Aurora Postgres のオープンソース、サーバーレスな代替手段です。ストレージとコンピューティングを分離し、PostgreSQL のストレージレイヤーを置き換えることで、データをノードのクラスターに分散させます。

### 主な特徴

*   **サーバーレス Postgres:** ストレージとコンピューティングを分離することで、自動スケーリング、コードライクなデータベースブランチ、およびゼロへのスケールを実現。
*   **ストレージエンジン:** Compute ノードを支えるスケーラブルなストレージバックエンド (Pageserver) と、耐久性の高い WAL サービス (Safekeepers)。
*   **自由な利用:** [Neon Free Tier](https://neon.tech/github) を通じて、サーバーレス Postgres インスタンスを試すことができます。

### Quick Start

1.  [Neon Free Tier](https://neon.tech/github) を利用してサーバーレス Postgres インスタンスを作成。
2.  お好みの Postgres クライアント (psql, dbeaver など) またはオンライン [SQL Editor](https://neon.tech/docs/get-started-with-neon/query-with-neon-sql-editor/) で接続。
3.  アプリケーションからの接続については、[Connect from any application](https://neon.tech/docs/connect/connect-from-any-app/) を参照。
4.  ローカル環境での実行も可能。

### アーキテクチャの概要

Neon インストールは、コンピュートノードと Neon ストレージエンジンで構成されます。

*   **コンピュートノード:** ステートレス PostgreSQL ノード。Neon ストレージエンジンをバックエンドとして使用。
*   **Pageserver:** コンピュートノード用のスケーラブルなストレージバックエンド。
*   **Safekeepers:** コンピュートノードから WAL を受信し、Pageserver で処理されてクラウドストレージにアップロードされるまで耐久的に保存する、冗長な WAL サービスを形成。

### ローカル開発環境の実行

Neon は、ワークステーションで小規模な実験やコード変更のテストに使用できます。

**依存関係のインストール:**

*   **Linux:** Ubuntu/Debian、Fedora、Arch based systems に必要なパッケージを記載。
*   **macOS:** XCode、protobuf、openssl、flex、bison などの依存関係と、Rust、PostgreSQL クライアントのインストール方法を説明。
*   Rust toolchain のバージョンは、[rust-toolchain.toml](./rust-toolchain.toml) ファイルで定義され、`rustup` によって自動的に使用されます。

**ビルド:**

*   Linux と macOS でのビルド方法 (コマンド) を説明。
*   release ビルドを行う場合は `BUILD_TYPE=release make -j` を使用。

**依存関係のインストールに関する注意点:**

*   psql クライアントを実行するには、`postgresql-client` パッケージをインストールするか、PATH と LD\_LIBRARY\_PATH を修正して、pg\_install/bin と pg\_install/lib をそれぞれ含める。
*   統合テストまたは Python スクリプトを実行するには、Python (3.11 以降) と、プロジェクトディレクトリで `./scripts/pysync` を使用して python3 パッケージをインストール。

**Neon データベースの実行:**

1.  `.neon` ディレクトリに Pageserver、Safekeeper、Broker を初期化 (cargo neon init)。
2.  Pageserver、Safekeeper、Broker を起動 (cargo neon start)。
3.  初期テナントを作成し、デフォルトに設定 (cargo neon tenant create --set-default)。
4.  Postgres コンピュートノードを作成 (cargo neon endpoint create main)。
5.  Postgres コンピュートノードを起動 (cargo neon endpoint start main)。
6.  psql を使用して Postgres に接続し、クエリを実行。
7.  ブランチを作成し、そこで Postgres を実行し、データの分離を確認。
8.  テスト後に、実行中の全てのインスタンスを停止するには、`cargo neon stop` を実行。

**その他の詳細:**

*   ローカル開発コントロールプレーンについては、[Local Development Control Plane (`neon_local`))](./control_plane/README.md) を参照。
*   初期テナントの設定中にエラーが発生した場合は、`.neon` ディレクトリを削除して問題を解決してからセットアップを再開。

### テストの実行

*   **Rust unit tests:** [`cargo-nextest`](https://nexte.st/) を使用。
*   **Integration tests:** 依存関係をインストールし、`CARGO_BUILD_FLAGS="--features=testing" make` と `./scripts/pytest` を実行。
    *   ローカルテストでは、`DEFAULT_PG_VERSION=17 BUILD_TYPE=release ./scripts/pytest` のように、1 つの組み合わせで実行すると便利。

### Flamegraphs

[`flamegraph-rs`](https://github.com/flamegraph-rs/flamegraph) または [`flamegraph.pl`](https://github.com/brendangregg/FlameGraph) を使用して、Flamegraph を生成できます。`lld` または `mold` を使用する場合は、`--no-rosegment` リンカ引数が必要です。

### クリーンアップ

*   `make clean`: ビルド成果物を削除。
*   `make distclean`: すべてのビルドと設定の手順からすべての成果物を削除し、ターゲットディレクトリ内の cargo バイナリ、および `.neon` ディレクトリ内のデータベースも削除。

### ドキュメント

*   [docs](/docs): すべての利用可能な markdown ドキュメントのトップレベルの概要。
*   [sourcetree.md](/docs/sourcetree.md): ソースツリーレイアウトの概要。
*   `cargo doc --no-deps --open`: `rustdoc` ドキュメントをブラウザで表示。

### その他のリソース

*   [SELECT 'Hello, World'](https://neon.tech/blog/hello-world/): Nikita Shamgunov による高レベルアーキテクチャに関するブログ投稿
*   [Architecture decisions in Neon](https://neon.tech/blog/architecture-decisions-in-neon/): Heikki Linnakangas によるブログ投稿
*   [Neon: Serverless PostgreSQL!](https://www.youtube.com/watch?v=rES0yzeERns): Heikki Linnakangas によるストレージシステムに関するプレゼンテーション

### Postgres 用語

Neon は PostgreSQL の内部に密接に関連しているため、多くの専門用語が使用されます。詳細は以下を参照。

*   [Neon glossary](/docs/glossary.md)
*   [PostgreSQL glossary](https://www.postgresql.org/docs/14/glossary.html)
*   PostgreSQL のその他のドキュメントとソース

### 開発への参加

*   [CONTRIBUTING.md](/CONTRIBUTING.md): コードスタイルとプラクティスについて。
*   [sourcetree.md](/docs/sourcetree.md): ソースツリーのレイアウトについて。
*   http://www.interdb.jp/pg/index.html: PostgreSQL の内部について。


---

# happycola233/tchMaterial-parser

**stars**: 1458

[View Repository on Github](https://github.com/happycola233/tchMaterial-parser)

国家中小学智慧教育平台 电子课本下载工具，帮助您从智慧教育平台中获取电子课本的 PDF 文件网址并进行下载，让您更方便地获取课本内容。

## README要約
## happycola233/tchMaterial-parser リポジトリ詳細要約

このリポジトリは、国家中小学智慧教育平台（中国の小中学校向けスマート教育プラットフォーム）から電子教科書のPDFファイルをダウンロードするためのツールです。

**主な機能:**

*   **電子教科書のPDFダウンロード:** 国家中小学智慧教育平台の電子教科書のPDFファイルURLを取得し、ダウンロードできます。
*   **Access Tokenサポート:** 2025年2月以降、プラットフォームへのアクセスにAccess Token（ログイン情報）が必要になるため、Access Tokenの設定機能を搭載しています。
*   **バッチダウンロード:** 複数の教科書URLを一度に入力して、まとめてダウンロードできます。
*   **自動ファイル名:** 教材名でファイル名が自動的に設定され、ダウンロードしたファイルを整理しやすくなっています。
*   **高DPI対応:** 高解像度ディスプレイでのUI表示を最適化しています。
*   **ダウンロード進捗表示:** ダウンロードの進捗状況をリアルタイムで表示し、一時停止/再開機能も備えています。
*   **クロスプラットフォーム対応:** Windows、Linux、macOSなどのOSに対応しています（ただし、GUIが必要）。

**特徴:**

*   **Access Token ログイン:** ユーザーがAccess Tokenを手動で入力でき、Windowsではレジストリに保存され、次回起動時に自動的に読み込まれます。
*   **バッチダウンロード:** 複数のURLを同時に処理できます。
*   **自動ファイル命名:** 教材名に基づいてファイル名が自動的に生成されます。
*   **高DPI対応:** 高解像度ディスプレイでのUI表示を最適化します。
*   **ダウンロード進捗表示:** ダウンロードの進行状況を視覚的に表示します。
*   **クロスプラットフォームサポート:** Windows、Linux、macOSをサポートしています（GUIが必要です）。

**インストールと使用方法:**

1.  **ダウンロード:**
    *   GitHub Releasesページから、WindowsまたはLinux (x64アーキテクチャ)向けの実行ファイルをダウンロードできます。
    *   Arch Linuxユーザーは、AUR (Arch User Repository) を使用して `yay -S tchmaterial-parser` コマンドでインストールできます。
2.  **Access Tokenの設定:**
    *   国家中小学智慧教育プラットフォームにログインし、F12キーまたはCtrl+Shift+Iキーを押して開発者ツールを開きます。
    *   コンソールで、READMEに記載されているJavaScriptコードを実行し、Access Tokenを取得します。
    *   プログラム内で「設定 Token」ボタンをクリックし、取得したAccess Tokenを貼り付けて保存します。
    *   Access Tokenは、ダウンロード失敗時に「401 Unauthorized」エラーが表示された場合は、再設定が必要です。
3.  **教科書URLの入力:**
    *   電子教科書のプレビューページのURLをプログラムのテキストボックスに貼り付けます（複数のURLを改行区切りで入力可能）。
4.  **ダウンロード:**
    *   「ダウンロード」ボタンをクリックすると、PDFファイルが自動的にダウンロードされます。

**よくある質問:**

*   **ダウンロード失敗:** Access Tokenが正しく設定されているか、有効期限が切れていないか、ネットワーク接続が正常に機能しているか、URLが有効であるかを確認します。
*   **Access Tokenの保存場所:**
    *   Windows: レジストリ `HKEY_CURRENT_USER\Software\tchMaterial-parser` の `AccessToken` 値。
    *   Linux: `~/.config/tchMaterial-parser/data.json` ファイル。
    *   macOSなど: 実行時のみメモリに保存され、再起動すると再入力が必要です。
*   **Tokenの安全性:** 本ツールはTokenをクラウドに保存しません。Tokenは公開しないでください。

**その他:**

*   Bugの報告や機能追加の提案は、IssueまたはPull Requestで行えます。
*   ライセンス: MITライセンス
*   関連プロジェクト: ChinaTextbook ([https://github.com/TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook)) で教材のPDFをダウンロードすることもできます。
*   スター履歴が提供されています。
*   本ツールは、MITライセンスの下で公開されており、自由に利用、改変、再配布できます。


---

# n8n-io/n8n

**stars**: 94636

[View Repository on Github](https://github.com/n8n-io/n8n)

Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.

## README要約
## n8n - 自動化プラットフォームの詳細な要約

n8n は、技術チーム向けに設計された、柔軟性と迅速性を兼ね備えたワークフロー自動化プラットフォームです。コードの柔軟性と、ノーコード開発の迅速さを両立させ、400以上の連携機能、ネイティブAI機能、フェアコードライセンスを提供しています。これにより、データとデプロイメントを完全に制御しながら、強力な自動化を実現できます。

**主な機能:**

*   **必要な時にコードを使用**: JavaScript/Python の記述、npm パッケージの追加、またはビジュアルインターフェースの使用が可能。
*   **AIネイティブプラットフォーム**: LangChainに基づいたAIエージェントのワークフローを、独自のデータとモデルで構築。
*   **フルコントロール**: フェアコードライセンスでセルフホスト、またはクラウドサービスを利用可能。
*   **エンタープライズ対応**: 高度な権限管理、SSO、およびエアギャップデプロイメントに対応。
*   **活発なコミュニティ**: 400以上の連携機能と、900以上のすぐに使えるテンプレートを提供。

**迅速な開始方法:**

*   **npxで即時実行**: (Node.js が必要)

    ```
    npx n8n
    ```
*   **Dockerでのデプロイ**:

    ```
    docker volume create n8n_data
    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
    ```

    エディターには http://localhost:5678 からアクセスできます。

**リソース:**

*   ドキュメント
*   400以上の連携機能
*   ワークフローの例
*   AI & LangChain ガイド
*   コミュニティフォーラム
*   コミュニティチュートリアル

**サポート:**

コミュニティフォーラムでサポートや他のユーザーとの交流が可能です。

**ライセンス:**

n8n は [フェアコード](https://faircode.io) で、[Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) および [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md) で配布されています。

*   ソースコードは常に公開
*   セルフホスト可能
*   拡張可能（独自のノードと機能を追加可能）

追加機能とサポートについては、エンタープライズライセンスが提供されています。

**コントリビューション:**

バグの報告や機能の提案は、コントリビューティングガイドを参照してください。

**チームへの参加:**

自動化の未来を形作りたい方は、求人情報を確認してチームに参加してください。

**n8n の意味:**

「nodemation」（ノードメーション）を意味し、n-eight-nと発音します。これは、Node.js を使用し、ノードベースで動作し、自動化を支援することから名付けられました。


---

# trycua/cua

**stars**: 7137

[View Repository on Github](https://github.com/trycua/cua)

c/ua is the Docker Container for Computer-Use AI Agents.

## README要約
## trycua/cua リポジトリの要約

**c/ua**（「クーア」と発音）は、Apple Silicon搭載Mac上で、高性能仮想コンテナ内でAIエージェントがオペレーティングシステム全体をほぼネイティブな速度で制御できるようにするDockerコンテナです。

### 主な特徴

*   **Apple Silicon対応**: M1/M2/M3/M4シリーズのMacで動作します。
*   **高速な仮想化**: ほぼネイティブの速度で動作するVMを管理。
*   **柔軟なAgent Loops**: 複数のエージェントループをサポート。
    *   **UITARS-1.5**: MLXを使用してローカルで実行、またはクラウドプロバイダーを使用。
    *   **OpenAI CUA**: OpenAIのComputer-Useプレビューモデルを使用。
    *   **Anthropic CUA**: AnthropicのComputer-Use機能を使用。
    *   **OmniParser-v2.0**: Set-of-Marks promptingでUIを制御。
*   **開発者向けSDK**: Python SDKが利用可能。
*   **Lume CLI**: VM管理のためのCLIツールを提供。
*   **Lumier**: Dockerインターフェース for macOS and Linux VMs

### クイックスタート

以下のコマンドで、Computer-Use Agent UIとVMを起動できます。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/scripts/playground.sh)"
```

このスクリプトは以下の処理を行います。

*   Lume CLIのインストール（必要な場合）
*   最新のmacOS CUAイメージの取得（必要な場合）
*   Python環境のセットアップと必要なパッケージのインストール/アップデート
*   Computer-Use Agent UIの起動

### 開発者向け

1.  **Lume CLIのインストール:**

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/lume/scripts/install.sh)"
    ```

2.  **macOS CUAイメージの取得:**

    ```bash
    lume pull macos-sequoia-cua:latest
    ```

3.  **Python SDKのインストール:**

    ```bash
    pip install "cua-computer[all]" "cua-agent[all]"
    ```

4.  **コードでの使用例:** PythonコードでComputerインタフェースとAgentを利用できます。

### 提供モジュール

*   **Lume**: macOS/Linux向けのVM管理ツール
*   **Lumier**: macOSとLinuxのDockerインターフェース
*   **Computer**: 仮想マシンを制御するためのインターフェース
*   **Agent**: AIエージェントフレームワーク
*   **MCP Server**: Claude Desktopなどと連携するためのMCPサーバー
*   **SOM**: Set-of-Markライブラリ
*   **PyLume**: LumeのPythonバインディング
*   **Computer Server**: Computerのサーバーコンポーネント
*   **Core**: コアユーティリティ

### 関連情報

*   [MCP Serverの使い方](libs/mcp-server/README.md)
*   [AIエージェントの利用方法](libs/agent/README.md)
*   [Lume CLIの使い方](libs/lume/README.md)
*   [トレーニングデータ生成に関するブログ](https://www.trycua.com/blog/training-computer-use-models-trajectories-1)
*   [macOS上で独自のOperatorを構築する方法に関するブログ](https://www.trycua.com/blog/build-your-own-operator-on-macos-1)

### デモ

*   MCP ServerとTableauの連携
*   AI-Gradioによるマルチアプリワークフロー (ブラウザ、VS Code、ターミナル)
*   CursorでのGitHub issue修正の例

### コミュニティ

*   [Discordコミュニティ](https://discord.com/invite/mVnXXpdE85)

### ライセンス

MITライセンスで公開されています。

### コントリビューション

コントリビューションを歓迎しています。詳細については、[CONTRIBUTING.md](CONTRIBUTING.md)を参照してください。

### 商標

Apple、macOS、Apple SiliconはApple Inc.の商標です。UbuntuとCanonicalはCanonical Ltd.の登録商標です。MicrosoftはMicrosoft Corporationの登録商標です。このプロジェクトは、Apple Inc.、Canonical Ltd.、またはMicrosoft Corporationとは提携、承認、または後援されていません。

### スターゲイザーズ

感謝の意を表します。

### コントリビューター

多くのコントリビューターがいます。


---

# xaoyaoo/PyWxDump

**stars**: 8039

[View Repository on Github](https://github.com/xaoyaoo/PyWxDump)

获取微信信息；读取数据库，本地查看聊天记录并导出为csv、html等格式用于AI训练，自动回复等。支持多账户信息获取，支持所有微信版本。

## README要約
## PyWxDump リポジトリ概要 (日本語)

**PyWxDump** は、WeChat (微信) のアカウント情報を取得し、データベースを復号化して、チャット履歴を閲覧・エクスポートするためのPythonツールです。AI学習や自動返信などへの活用も想定されています。

**主な機能:**

*   **アカウント情報取得:**
    *   WeChatのニックネーム、アカウント、電話番号、メールアドレス、データベースキーなどを取得
    *   現在ログイン中のWeChatの情報を取得
*   **データベース復号化:**
    *   取得したキーを使用してWeChatデータベースを復号化
*   **チャット履歴閲覧:**
    *   Webインターフェースによるチャット履歴の閲覧
*   **チャット履歴エクスポート:**
    *   HTML、CSV形式でのチャットログのエクスポートによるバックアップ
*   **複数アカウント対応:**
    *   複数のWeChatアカウントの情報取得に対応

**その他機能:**

*   [pywxdumpmini](https://github.com/xaoyaoo/pywxdumpmini) (データベースキーと場所の取得に特化したミニマル版)
*   WebUIのカスタマイズ（[wxdump_web](https://github.com/xaoyaoo/wxdump_web) を使用）
*   MACデータベースの復号化方法の提供
*   データベース内のフィールドの説明
*   CE (Cheat Engine) を使用したベースアドレスオフセットの取得方法

**今後の開発計画:**

*   個人ごとのチャットログ分析とワードクラウド生成
*   日別のチャット数分析とグラフ化
*   月別・年別のチャット量分析とグラフ化
*   年次ビジュアライゼーションレポート生成
*   エンタープライズWeChatへの対応強化
*   タイムライン（友達の輪）の閲覧とバックアップ
*   WeChatストレージのクリーンアップ
*   UI制御による特定の相手への自動メッセージ送信

**利用シーン:**

1.  ネットワークセキュリティ
2.  日常的なバックアップ
3.  リモートでのチャット履歴閲覧 (Web経由)

**免責事項:**

*   本プロジェクトは**学習とコミュニケーション**を目的としており、**違法行為への使用を固く禁じます**。
*   本プロジェクトの利用によって発生するいかなる法的責任や損害についても、作者および本プロジェクトは責任を負いません。
*   ダウンロード、保存、コンパイル、使用は24時間以内とし、それ以降の使用は自己責任となります。
*   不正な目的での使用、プライバシーの侵害、二次開発は禁止されています。

**その他:**

*   Windows環境での動作確認のみ。macOSやLinuxでは問題が発生する可能性あり。
*   問題点、誤りの報告、改善提案はGitHubのIssueで受け付けています。
*   FAQ、変更履歴はドキュメントを参照してください。
*   Web UIは、[wxdump_web](https://github.com/xaoyaoo/wxdump_web) で開発されています。

**スターをいただけると嬉しいです！**

**関連ドキュメント:**

*   [UserGuide.md](https://github.com/xaoyaoo/PyWxDump/tree/master/doc/UserGuide.md): 詳細な使用方法
*   [CE obtaining base address.md](https://github.com/xaoyaoo/PyWxDump/tree/master/doc/CE%E5%8F%96%E5%BE%97%E5%9F%BA%E5%9D%80.md): Cheat Engineを使用したベースアドレス取得方法
*   [wx database brief.md](https://github.com/xaoyaoo/PyWxDump/tree/master/doc/wx%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%80%E8%BF%B0.md): データベースの概要

**参考:**

*   本プロジェクトは、[SharpWxDump](https://github.com/AdminTest0/SharpWxDump) のPython版としてリファクタリングされ、多くの新機能が追加されています。

