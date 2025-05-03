
# aipotheosis-labs/aci

**stars**: 1360

[View Repository on Github](https://github.com/aipotheosis-labs/aci)

ACI.dev is the open source platform that connects your AI agents to 600+ tool integrations with multi-tenant auth, granular permissions, and access through direct function calling or a unified MCP server.

## README要約
## ACI.dev の概要 (日本語)

**ACI.dev** は、AIエージェントのツール利用を支援するオープンソースインフラストラクチャです。600以上のツールインテグレーションへのアクセスを提供し、マルチテナント認証、きめ細かい権限管理、直接の関数呼び出しまたは統一されたMCPサーバーを介したアクセスを可能にします。

**主な特徴**:

*   **600以上のプリビルドインテグレーション**: 人気のあるサービスやアプリに簡単に接続できます。
*   **柔軟なアクセス方法**: 統一されたMCPサーバーまたは軽量SDK(Python)を使用して直接の関数呼び出しが可能です。
*   **マルチテナント認証**: 開発者とエンドユーザーの両方に対して、組み込みのOAuthフローとシークレット管理を提供します。
*   **エージェントの信頼性の向上**: 自然言語による権限境界と動的なツール発見。
*   **フレームワークとモデルに依存しない**: 任意のLLMフレームワークとエージェントアーキテクチャで動作します。
*   **100% オープンソース**: すべてApache 2.0ライセンスの下で公開されています (バックエンド、開発者ポータル、インテグレーション)。

**ACI.dev を使用する利点**:

*   **大規模な認証**: 複数のユーザーを複数のサービスに安全に接続。
*   **過負荷のない発見**: LLMのコンテキストウィンドウを圧倒することなく、適切なツールを発見し使用できます。
*   **自然言語による権限**: 人間が理解しやすい境界でエージェントの機能を制御。
*   **一度構築し、どこでも実行**: オープンソースでフレームワークに依存しないアプローチにより、ベンダーロックインを回避。

**活用例**:

*   **パーソナルアシスタントチャットボット**: ウェブ検索、カレンダー管理、メール送信、SaaSツールとの連携など。
*   **リサーチエージェント**: 特定のトピックに関する調査を行い、結果を他のアプリ (Notion, Google Sheetsなど) に同期。
*   **アウトバウンドセールスエージェント**: リードジェネレーション、メールでの連絡、CRMの更新を自動化。
*   **カスタマーサポートエージェント**: 顧客の問い合わせに基づいて回答を提供し、チケットを管理し、アクションを実行。

**関連リポジトリ**:

*   **Unified MCP Server**: [aci-mcp](https://github.com/aipotheosis-labs/aci-mcp)
*   **Python SDK**: [aci-python-sdk](https://github.com/aipotheosis-labs/aci-python-sdk)
*   **エージェントのサンプル**: [aci-agents](https://github.com/aipotheosis-labs/aci-agents)

**ローカル開発**:

ACI.devプラットフォーム全体 (バックエンドサーバーとフロントエンドポータル) をローカルで実行するには、各コンポーネントのREADMEファイルを参照してください。

*   **Backend**: [backend/README.md](backend/README.md)
*   **Frontend**: [frontend/README.md](frontend/README.md)

**コントリビューション**:

貢献を歓迎しており、詳細については[CONTRIBUTING.md](CONTRIBUTING.md)を参照してください。

**インテグレーションリクエスト**:

必要なインテグレーション (アプリまたは機能) が不足している場合は、[Integration Request Template](.github/ISSUE_TEMPLATE/integration_request.yml)からリクエストを送信してください。また、PRを送信してご自身でインテグレーションを追加することも可能です。


---

# MODSetter/SurfSense

**stars**: 1957

[View Repository on Github](https://github.com/MODSetter/SurfSense)

Open Source Alternative to NotebookLM / Perplexity / Glean, connected to external sources such as search engines (Tavily, Linkup), Slack, Linear, Notion, YouTube, GitHub and more.

## README要約
## SurfSense の概要（日本語）

SurfSense は、NotebookLM や Perplexity のようなツールに代わるオープンソースの代替手段です。検索エンジン (Tavily、Linkup) 、Slack、Linear、Notion、YouTube、GitHub などの外部ソースに接続し、個人の知識ベースと統合することで、高度にカスタマイズ可能な AI リサーチエージェントとして機能します。

### 主な特徴

1.  **パーソナライズされた情報源との統合:**
    *   外部ソース (検索エンジン、Slack、Linear、Notion、YouTube、GitHub) との連携
    *   自分のドキュメント、画像など（27 種類のファイル形式をサポート）をアップロードして、個人の知識ベースを構築
    *   ローカル LLM (Ollama など) との連携
2.  **強力な検索機能:**
    *   保存されたコンテンツ内を高速に検索
    *   自然言語での対話と、引用付きの回答
    *   Perplexity のように、引用付きの回答を提供
3.  **柔軟性と拡張性:**
    *   自己ホスト可能で、ローカルに簡単にデプロイ可能
    *   150 以上の LLM、6000 以上の埋め込みモデルに対応
    *   主要なリランキング (Pinecode、Cohere、Flashrank など) をサポート
    *   階層的なインデックス、ハイブリッド検索 (意味検索 + 全文検索 + Reciprocal Rank Fusion) を使用
4.  **その他:**
    *   ブラウザ拡張機能で、認証保護された Web ページを保存可能
    *   **Podcast**機能は、UI と安定性の向上のため一時的に非推奨

### インストール方法

SurfSense は、以下の 2 つの方法でインストールできます。

1.  **Docker インストール**: 依存関係をすべてコンテナ化して、SurfSense を簡単に起動できます。カスタマイズ性は低めです。
2.  **手動インストール (推奨)**: より詳細なセットアップや、デプロイメントのカスタマイズを希望するユーザー向けです。

両方のインストールガイドには、Windows、macOS、Linux の OS 別手順が記載されています。インストール前に、PGVector、Google OAuth、Unstructured.io API キーなど、必要な設定を済ませておく必要があります。

### テクノロジー

*   **バックエンド**: FastAPI、PostgreSQL (pgvector)、SQLAlchemy、Alembic、FastAPI Users、LangGraph、LangChain、LLM 統合 (LiteLLM)、Rerankers、ハイブリッド検索、ベクトル埋め込み、pgvector、Chonkie
*   **フロントエンド**: Next.js、React、TypeScript、Vercel AI SDK Kit UI Stream Protocol、Tailwind CSS、Shadcn、Lucide React、Framer Motion、Sonner、Geist、React Hook Form、Zod、@hookform/resolvers、@tanstack/react-table
*   **拡張機能**: Manifest v3 (Plasmo)

### 今後の予定

*   コネクタの追加
*   軽微なバグ修正
*   Canvas 実装
*   ハイブリッド検索の完成
*   ファイルアップロード QA のサポート
*   WebSockets を使用したストリーミング応答 (現在は AI SDK Stream Protocol を使用)
*   ローカルモデルとの互換性の向上
*   クロスブラウザ拡張機能
*   クリティカル通知（一時停止中）
*   チャットの保存
*   保存されたセッションのキーワード検索ページ
*   複数/単一ドキュメントチャット

### コントリビュートについて

SurfSense への貢献は大歓迎です。Star を付けるだけでも、あるいは問題を見つけて作成することでも貢献できます。バックエンドの微調整も歓迎です。


---

# cloudflare/mcp-server-cloudflare

**stars**: 1582

[View Repository on Github](https://github.com/cloudflare/mcp-server-cloudflare)



## README要約
## Cloudflare MCP Server の概要

このリポジトリは、Cloudflare が提供する Model Context Protocol (MCP) サーバー群をホストしています。MCP は、大規模言語モデル (LLM) と外部システム間のコンテキストを管理するための新しい標準化されたプロトコルです。

このリポジトリに収録されている MCP サーバーを使用することで、MCP クライアント (例: Cursor, Claude) から Cloudflare のサービスに接続し、自然言語を使って Cloudflare アカウント経由でタスクを実行できます。これらのサーバーは、アカウントからの設定の読み取り、情報の処理、データに基づいた提案、提案された変更の実行などを可能にします。これらのアクションは、アプリケーション開発、セキュリティ、パフォーマンスなど、Cloudflare のさまざまなサービス全体で行うことができます。

**主な機能と提供されるサーバー:**

このリポジトリには、Cloudflare の様々なサービスにアクセスするための複数の MCP サーバーが含まれています。各サーバーは特定の機能を提供し、Cloudflare の様々なツールと連携します。

| サーバー名                                                | 説明                                                                                   | サーバー URL                                 |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------- |
| ドキュメントサーバー                                       | Cloudflare の最新のリファレンス情報を取得                                                  | `https://docs.mcp.cloudflare.com/sse`         |
| Workers バインディングサーバー                                | ストレージ、AI、計算プリミティブを使用して Workers アプリケーションを構築                                   | `https://bindings.mcp.cloudflare.com/sse`     |
| 可観測性サーバー                                          | アプリケーションのログと分析に関するデバッグとインサイトの取得                                 | `https://observability.mcp.cloudflare.com/sse`|
| Radar サーバー                                              | グローバルなインターネットトラフィックのインサイト、トレンド、URL スキャンなど                | `https://radar.mcp.cloudflare.com/sse`        |
| コンテナサーバー                                          | サンドボックス開発環境の立ち上げ                                                        | `https://containers.mcp.cloudflare.com/sse`   |
| ブラウザーレンダリングサーバー                               | Web ページの取得、Markdown への変換、スクリーンショットの取得                                      | `https://browser.mcp.cloudflare.com/sse`      |
| Logpush サーバー                                           | Logpush ジョブの正常性の概要の取得                                                     | `https://logs.mcp.cloudflare.com/sse`         |
| AI Gateway サーバー                                         | ログの検索、プロンプトとレスポンスの詳細の取得                                             | `https://ai-gateway.mcp.cloudflare.com/sse`   |
| AutoRAG サーバー                                           | AutoRAG に関するドキュメントのリストと検索                                                | `https://autorag.mcp.cloudflare.com/sse`      |
| 監査ログサーバー                                          | 監査ログのクエリとレビューレポートの生成                                                | `https://auditlogs.mcp.cloudflare.com/sse`    |
| DNS 分析サーバー                                           | DNS パフォーマンスの最適化と問題のデバッグ                                                  | `https://dns-analytics.mcp.cloudflare.com/sse`|
| Digital Experience Monitoring サーバー                     | 組織にとって重要なアプリケーションに関する迅速なインサイトの取得                                     | `https://dex-analysis.mcp.cloudflare.com/sse` |
| Cloudflare One CASB サーバー                               | SaaS アプリケーションのセキュリティ設定ミスを迅速に特定し、ユーザーとデータを保護                           | `https://casb.mcp.cloudflare.com/sse`         |

**MCP サーバーへのアクセス方法:**

*   MCP クライアントがリモート MCP サーバーを直接サポートしている場合 (例: Cloudflare AI Playground)、クライアントのインターフェースからサーバー URL を直接入力できます。
*   MCP クライアントがリモート MCP サーバーをまだサポートしていない場合は、`mcp-remote` (https://www.npmjs.com/package/mcp-remote) を使用してクライアントの設定ファイルを作成し、アクセスするサーバーを指定します。

**トラブルシューティング:**

Claude (などのLLM) がコンテキスト長制限に達し、応答が途中で中断されることがあります。これを避けるために、以下を試してください。

*   クエリを具体的にし、簡潔に保つ。
*   単一のリクエストが複数のツール呼び出しを呼び出す場合、複数の小さなツール呼び出しに分割して、応答を短くする。

**その他:**

*   一部の機能は、有料の Cloudflare Workers プランが必要となる場合があります。
*   貢献を希望する場合は、`CONTRIBUTING.md` を参照してください。
*   フィードバック、バグ報告、機能要求は、リポジトリの Issues で受け付けています。


---

# wonderwhy-er/DesktopCommanderMCP

**stars**: 2317

[View Repository on Github](https://github.com/wonderwhy-er/DesktopCommanderMCP)

This is MCP server for Claude that gives it terminal control, file system search and diff file editing capabilities

## README要約
## Desktop Commander MCP - 要約

**Desktop Commander MCP** は、Claude AIにターミナル制御、ファイルシステム検索、ファイル編集機能を提供するMCP (Model Context Protocol) サーバーです。これにより、AIを活用してコードやテキストの編集、プロセスの実行、タスクの自動化が可能となり、APIトークンコストを気にせず、他のAIエディタを超える機能を提供します。

### 主な機能

*   ターミナルコマンドの実行（出力ストリーミング付き）
*   コマンドのタイムアウトとバックグラウンド実行
*   プロセス管理 (リスト表示、kill)
*   セッション管理（長時間実行コマンド用）
*   サーバー設定管理 (取得、設定、複数設定の一括更新、再起動なしの動的変更)
*   ファイルシステムのフル操作 (読み書き、ディレクトリ作成/一覧表示、移動、ファイル検索、メタデータ取得)
*   コード編集機能 (部分的なテキスト置換、ファイル全体のリライト、複数ファイルのサポート、パターンベース置換、vscode-ripgrepを利用したフォルダ内の再帰的なコード/テキスト検索)

### インストール方法

*   **npx 経由:** `npx @wonderwhy-er/desktop-commander@latest setup`
    *   デバッグモード: `npx @wonderwhy-er/desktop-commander@latest setup --debug`
*   **macOS 用 Bash スクリプト:** `curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install.sh | bash`
*   **Smithery 経由:** `npx -y @smithery/cli install @wonderwhy-er/desktop-commander --client claude`
*   **claude\_desktop\_config.json への手動追加:**  JSONエントリを追加し、Claudeを再起動。
*   **ローカルチェックアウト:** リポジトリをクローンして`npm run setup`を実行し、Claudeを再起動。

インストール後は、Claudeを再起動すると自動的に最新版にアップデートされます。

### 使用方法

様々なツールが利用可能で、設定、ターミナル、ファイルシステム、テキスト編集の各カテゴリに分類されています。

**利用可能なツール:**

| カテゴリ           | ツール                      | 説明                                                                                                                                                                                                     |
| ---------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **設定**          | `get_config`                | サーバーの全設定をJSON形式で取得 (blockedCommands, defaultShell, allowedDirectoriesを含む)                                                                                                                               |
|                  | `set_config_value`          | 特定の設定値をキーで設定。設定可能項目：blockedCommands、defaultShell、allowedDirectories                                                                                                                                   |
| **ターミナル**   | `execute_command`           | ターミナルコマンドを実行（タイムアウトとシェル選択可能）                                                                                                                                                         |
|                  | `read_output`               | 実行中のターミナルセッションから新しい出力を読み込み                                                                                                                                                              |
|                  | `force_terminate`           | 実行中のターミナルセッションを強制終了                                                                                                                                                                              |
|                  | `list_sessions`             | アクティブなターミナルセッションを一覧表示                                                                                                                                                                              |
|                  | `list_processes`            | 実行中のプロセスを詳細情報付きで一覧表示                                                                                                                                                                              |
|                  | `kill_process`              | PIDで実行中のプロセスを終了                                                                                                                                                                                          |
| **ファイルシステム** | `read_file`                 | ローカルファイルまたはURLからコンテンツを読み込み（テキストと画像に対応）                                                                                                                                                       |
|                  | `read_multiple_files`       | 複数のファイルを同時に読み込み                                                                                                                                                                                          |
|                  | `write_file`                | ファイルの内容を完全に置き換え（大規模な変更に最適）                                                                                                                                                                           |
|                  | `create_directory`          | 新しいディレクトリを作成または存在を確認                                                                                                                                                                                         |
|                  | `list_directory`            | ファイルとディレクトリの詳細なリストを取得                                                                                                                                                                                 |
|                  | `move_file`                 | ファイルとディレクトリを移動またはリネーム                                                                                                                                                                                   |
|                  | `search_files`              | ファイル名を部分一致（大文字小文字を区別しない）で検索                                                                                                                                                               |
|                  | `search_code`               | ファイル内のテキスト/コードパターンをripgrepを使用して検索                                                                                                                                                                 |
|                  | `get_file_info`             | ファイルまたはディレクトリの詳細なメタデータを取得                                                                                                                                                                            |
| **テキスト編集**  | `edit_block`                | 部分的なテキスト置換を適用（ファイルサイズの20%未満の変更に最適）                                                                                                                                                           |

**ツール使用例:**

*   **検索/置換ブロック形式:**

```
filepath.ext
<<<<<<< SEARCH
content to find
=======
new content
>>>>>>> REPLACE
```

*   **URLサポート:**  `read_file` はローカルファイルとURLからコンテンツを読み込み可能。  画像はClaudeのインターフェースに表示され、テキストとしてではなく、Claudeは画像のコンテンツを分析できる。  URLリクエストにはデフォルトで30秒のタイムアウトが設定。

### 長時間実行コマンドの処理

長時間かかるコマンドの処理:

1.  `execute_command`は、タイムアウト後に最初の出力を返します。
2.  コマンドはバックグラウンドで継続されます。
3.  `read_output`とPIDを使用して、新しい出力を取得します。
4.  必要に応じて`force_terminate`を使用して停止します。

### 設定管理

**重要セキュリティ警告:**

1.  設定変更は、実際の作業とは**別のチャットウィンドウ**で行ってください。
2.  `allowedDirectories`設定は、現時点ではファイルシステム操作のみを制限し、ターミナルコマンドは制限しません。

**設定ツール:**

*   `get_config({})`: 設定全体を取得。
*   `set_config_value({ "key": "defaultShell", "value": "/bin/zsh" })`: 特定の設定値を設定。
*   複数の設定値を設定する場合は、別々の呼び出しを使用。

**ベストプラクティス:**

1.  設定変更専用のチャットを作成。
2.  空の`allowedDirectories`は、ファイル操作に対してファイルシステム全体へのアクセスを許可することに注意。
3.  `/`のような広範なパスではなく、正確なディレクトリを指定する。
4.  変更後、必ず`get_config({})`で設定が正しく適用されたことを確認。

### シェルの使い分け

コマンド実行に使用するシェルを指定できます。

```javascript
// デフォルトシェル（bash またはシステムのデフォルト）を使用
execute_command({ "command": "echo $SHELL" })

// zsh を明示的に使用
execute_command({ "command": "echo $SHELL", "shell": "/bin/zsh" })

// bash を明示的に使用
execute_command({ "command": "echo $SHELL", "shell": "/bin/bash" })
```

これにより、シェル固有の機能を使用したり、コマンド間で環境を統一することができます。

### デバッグ

デバッグが必要な場合は、debugモードでインストールできます。

```bash
# npx を使用
npx @wonderwhy-er/desktop-commander@latest setup --debug

# またはローカルにインストールされている場合
npm run setup:debug
```

デバッガーを接続するには、Chromeで`chrome://inspect`を開き、Node.jsインスタンスを探すか、VS Codeで"Attach to Node Process"デバッグ設定を使用します。

### Model Context Protocol (MCP) 統合

このプロジェクトは、MCP Filesystem Serverを拡張し、Claude Desktopでのローカルサーバーサポート、システムコマンド実行、プロセス管理、ファイル操作、検索/置換ブロックによるコード編集を可能にします。

### 今後の予定

*   WSL (Windows Subsystem for Linux) サポート
*   SSH サポート (リモートサーバーコマンド実行)
*   CSV/PDFなどのファイル形式への対応改善
*   ターミナルサンドボックス (Mac/Linux/Windows) のセキュリティ強化
*   HTML/Markdownなどのファイル読み込みモード
*   対話型シェルサポート (ssh, node/python repl)
*   大規模ファイルの読み書きの改善

### サポート

このプロジェクトは、GitHub Sponsors、Buy Me A Coffee、GitHubのスターを通してサポートできます。

### ウェブサイト

最新情報、ドキュメント、更新については、[https://desktopcommander.app/](https://desktopcommander.app/) をご覧ください。

### その他のリソース

*   [記事](https://wonderwhy-er.medium.com/claude-with-mcps-replaced-cursor-windsurf-how-did-that-happen-c1d1e2795e96)
*   [動画](https://www.youtube.com/watch?v=ly3bed99Dy8)
*   [Analytics India Mag 記事](https://analyticsindiamag.com/ai-features/this-developer-ditched-windsurf-cursor-using-claude-with-mcps/)
*   [Discordサーバー](https://discord.gg/kQ27sNnZr7)

### よくある質問 (FAQ)

*   **Desktop Commanderとは？**  Claude Desktop でファイルシステムとターミナルにアクセスできるようにする MCP ツールで、コーディング、自動化、コードベースの調査などに役立ちます。
*   **Cursor/Windsurfとの違いは？**  IDEに焦点を当てたツールとは異なり、OS全体で動作し、一度にすべての変更を実行します。
*   **APIクレジットは必要ですか？** いいえ、Claude DesktopのProサブスクリプション ($20/月) で動作し、追加の費用はかかりません。
*   **自動アップデートはされますか？** はい、npxまたはSmithery経由でインストールした場合、Claudeを再起動すると自動的にアップデートされます。
*   **一般的な使用例は？**  複雑なコードベースの調査、図やドキュメントの生成、システム全体のタスクの自動化、複数のプロジェクトの同時作業、正確なコード変更。
*   **インストールや使用に問題がある場合、どこで助けを得られますか？**  Discordサーバー、GitHub issues、FAQ (FAQ.md とウェブサイトのFAQセクション) でサポートを受けられます。

### データ収集とプライバシー

Desktop Commanderは、ツールの改善を目的とした限定的な匿名のテレメトリデータを収集します。個人情報、ファイルの内容、ファイルパス、またはコマンド引数は収集されません。

テレメトリはデフォルトで有効になっています。オプトアウトするには、チャットで「Disable telemetry」と尋ねます。

### ライセンス

MITライセンスです。


---

# Atmosphere-NX/Atmosphere

**stars**: 15841

[View Repository on Github](https://github.com/Atmosphere-NX/Atmosphere)

Atmosphère is a work-in-progress customized firmware for the Nintendo Switch.

## README要約
Atmosphèreは、Nintendo Switch向けのカスタムファームウェアであり、現在開発中です。

**主なコンポーネント:**

*   **Fusée:** ステージ2 (カスタムTrustZone) および package2 (Kernel/FIRM sysmodules) のロードと検証を担当する最初のステージローダー。通常Package1loader/NX Bootloaderの機能を置き換えます。
    *   **Sept:** 7.0.0でのランタイムキー導出のサポートを有効にするために使用されるペイロード。
*   **Exosphère:** カスタムSecure Monitorを実行するための、カスタマイズされたTrustZone。
*   **Thermosphère:** EL2 EmuNANDのサポート、つまり、仮想化/リダイレクトされたNANDイメージのバックアップと使用。
*   **Stratosphère:** RosalinaスタイルのカスタムSysmodule(s)であり、カーネルを拡張したり新機能を提供したり、ローダー再実装スタイルで重要なシステムアクションをフックします。
*   **Troposphère:** アプリケーションレベルのHorizon OSパッチで、望ましいCFW機能を実装するために使用されます。

**ライセンス:**

このソフトウェアはGPLv2ライセンスに基づいており、特定のプロジェクトには例外が適用されます。

*   [Nintendo](https://github.com/Nintendo)はGPLv2ライセンスから除外され、代わりにAtmosphèreプロジェクトのために作成されたソースコードをZero-Clause BSDライセンスでライセンスできます。

**クレジット:**

Atmosphèreは現在、SciresM、TuxSH、hexkyz、fincsによって開発および保守されています。以下の方々およびプロジェクトに貢献が認められています。

*   switchbrew、devkitPro、ReSwitched Team、ChaN、Marcus Geelnard、naehrwert、st4rk、CTCaer、m4xw、Riley、hedgeberg、lioncash、jaames、Atmosphèreの[splash design contest](https://github.com/Atmosphere-NX/Atmosphere-splashes)にエントリを提出したすべての人、Atmosphèreリポジトリに積極的に貢献しているすべての人々。


---

# unionlabs/union

**stars**: 56296

[View Repository on Github](https://github.com/unionlabs/union)

The trust-minimized, zero-knowledge bridging protocol, designed for censorship resistance, extremely high security, and usage in decentralized finance.

## README要約
## unionlabs/union リポジトリ概要

このリポジトリは、検閲耐性、非常に高いセキュリティ、および分散型金融（DeFi）での利用を目的として設計された、信頼を最小限に抑えたゼロ知識ブリッジングプロトコルの実装です。

**主な特徴:**

*   **信頼最小化:** 信頼できる第三者、オラクル、マルチシグ、またはMPC（Multi-Party Computation）に依存しません。
*   **ゼロ知識証明:** 効率的なゼロ知識インフラストラクチャレイヤーを提供し、一般的なメッセージパッシング、アセット転送、NFT、およびDeFiをサポートします。
*   **クロスチェーン互換性:** Cosmosチェーン（IBC互換）と、Ethereum、Berachain、ArbitrumなどのEVMチェーンに接続できます。
*   **ガバナンス:** 他のチェーン上のコントラクトのアップグレード、接続、トークン設定、およびプロトコルの進化は、分散型ガバナンスによって制御され、ユーザー、バリデータ、およびオペレーターの優先順位に沿うように設計されています。

**構成要素:**

リポジトリは、以下の主要コンポーネントで構成されています。各コンポーネントは、異なる言語や技術を用いて実装されています。

*   `uniond`: Unionノードの実装（Go）
*   `galoisd`: ゼロ知識証明プロバイダーの実装（Go, Gnark）
*   `voyager`: 高性能クロスエコシステムリレーヤー（Rust）
*   `hubble`: マルチエコシステム、GMP対応チェーンインデクサー（Rust）
*   `cosmwasm`: CosmWasmスマートコントラクトスタック（Rust）
*   `light-clients`: 様々なエコシステム向けのライトクライアント（Rust）
*   `unionvisor`: プロダクション使用を目的としたノードスーパーバイザー（Rust）
*   `drip`: Cosmosチェーン用ファウセット（Rust）
*   `evm`: EVMスマートコントラクトスタック（Solidity）
*   `app`: webアプリケーション（TypeScript, Svelte）
*   `site`: ウェブサイト（TypeScript, Astro）
*   `TypeScript SDK`: Unionと対話するためのTypeScript SDK（TypeScript）

**開発環境とビルド:**

*   **Nix:** 全てのコンポーネントを再現性のある方法でビルドするためにNixパッケージマネージャーを使用します。
*   **開発シェル:** `nix develop` コマンドを使用することで、必要な依存関係（cargo, rustc, node, goなど）が全て揃った開発環境に入ることができます。
*   **フォーマットとチェック:** `nix run .#pre-commit -L` コマンドで、リポジトリ全体のフォーマットとスペルチェックを実行できます。

**ドキュメントとリソース:**

*   公式ドキュメント: [https://docs.union.build](https://docs.union.build)
*   各コンポーネントには、各 `README.md` に開発者向けドキュメントが付属しています。
*   Discordチャンネル: [https://discord.union.build](https://discord.union.build) の `#developers` チャンネルで質問できます。

