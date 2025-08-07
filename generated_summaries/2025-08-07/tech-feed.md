# Introducing Vercel MCP: Connect Vercel to your AI tools - Vercel

[View on Vercel Blog](https://vercel.com/blog/introducing-vercel-mcp-connect-vercel-to-your-ai-tools)

## Vercel MCPの紹介：VercelをAIツールに接続

Vercelは、AIクライアントがVercelプロジェクトと連携するための安全でOAuth準拠のインターフェースであるVercel MCPサーバーをパブリックベータ版として公開しました。

**概要:**

*   **目的:** 開発者のワークフローにおいて重要性を増しているAIツールに、Vercelのようなインフラへの安全かつ構造化されたアクセスを提供します。
*   **機能:** ClaudeやVS Codeなどの対応ツールが、開発環境やAIアシスタント内から直接、ログ、ドキュメント、プロジェクトメタデータに安全にアクセスできます。
*   **特徴:**
    *   Vercel MCPサーバーは、AIモデルが外部システムと対話するために呼び出すツールを公開します。
    *   Vercelアカウントと対応するAIクライアントを接続し、読み取り専用の構造化データへの安全なアクセスを可能にします。
    *   ドキュメント検索、デプロイログの取得、チームとプロジェクトの取得などの機能をサポートします。
    *   プロンプトの定義もサポートしており、再利用可能なプロンプトテンプレートをMCPクライアントに提供できます。
*   **接続方法:**  https://mcp.vercel.com をカスタム接続として追加し、Vercel MCPセットアップドキュメントに従います。
*   **セキュリティ:**
    *   承認されたクライアントの許可リストを使用し、セキュリティを重視しています。
    *   MCP AuthorizationとStreamable HTTP仕様をサポートし、プロトコルのベストプラクティスを保証します。
    *   読み取り専用アクセスであり、プロジェクトへの意図しない変更を防ぎます。
    *   OAuth同意画面による接続ごとの認証、およびトークン流出を防ぐための対策を講じています。
*   **利用例:** GitHub Copilot in VS CodeでNext.jsアプリをVercelにビルドしてデプロイし、デプロイ失敗時にログをIDEに表示してAIアシスタントがエラー分析と修正提案を行うなど。
*   **今後の展望:** より多くのクライアントへの対応、読み取り専用機能の拡張など、ワークフロー全体の強化を目指しています。
*   **セキュリティに関する推奨事項:**
    *   信頼できるソースからのMCPクライアントのみを使用し、許可リストを確認する。
    *   第三者マーケットプレイスからインストールする際は、ドメイン名/URLを再確認する。
    *   プロンプトインジェクションなどの脅威を理解し、システムを保護する。
    *   各エージェントとMCPツールの権限とデータアクセスレベルを慎重に確認する。
    *   実行前に各ステップを確認し承認する人間確認を有効にする。
    *   公式のエンドポイント（https://mcp.vercel.com）にのみ接続する。

**Vercel MCPの利点:**

*   AIを活用したワークフローへのVercelの統合により、開発、デバッグ、リリースを迅速化。
*   AIモデルへの構造化された安全なアクセスを提供し、独自のMCPサーバーを構築するための基盤を提供。
---
# Microfrontends support is now in Public Beta - Vercel

[View on Vercel Blog](https://vercel.com/changelog/microfrontends-support-is-now-in-public-beta)

## VercelのMicrofrontendsサポートがパブリックベータで利用可能に

Vercelは、大規模なアプリケーションをより小さな単位に分割し、開発者の迅速な開発を可能にするMicrofrontendsのサポートをパブリックベータで提供開始しました。

この機能により、チームや大規模なアプリケーションは独立して構築とテストが可能になり、Vercelはこれらを統合して単一のアプリケーションとしてルーティングします。これにより、ビルド時間の短縮、並行開発の促進、レガシーシステムの段階的な移行などが実現します。

開発者は、Vercel Toolbarを使用して各Microfrontendを独立して反復的にテストできます。また、Microfrontends間のナビゲーションは、高速な遷移を実現するためのプリフェッチとプリレンダリングの恩恵を受けます。

Microfrontendsを始めるには、Vercelが提供するサンプルをクローンするか、以下のクイックスタートガイドに従います。

1.  VercelダッシュボードのSettingsにあるMicrofrontendsタブに移動する
2.  Microfrontendsグループを作成し、すべてのMicrofrontendプロジェクトを追加する
3.  各Microfrontendアプリケーションに `@vercel/microfrontends` パッケージを追加する
4.  デフォルトのアプリケーションに `microfrontends.json` 設定ファイルを追加し、Previewでテスト後、準備ができたらProductionにデプロイする

`microfrontends.json` ファイルの例:

```json
{
  "dashboard": {},
  "docs": {
    "routing": [{
      "paths": ["/docs", "/docs/:path*"]
    }]
  }],
  "marketing": {
    "routing": [{
      "paths": ["/home", "/pricing"]
    }]
  }}
```

詳細については、Vercelのドキュメントを参照してください。

---
# Web Crawler Using WebMagic | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922790837/0/baeldung~Web-Crawler-Using-WebMagic)

## WebMagic を使用した Web クローラー | Baeldung 要約

このBaeldungの記事では、JavaでWebクローラーを構築するためのフレームワークであるWebMagicについて解説しています。

**記事の主な内容:**

1.  **WebMagicの概要:** WebMagicは、PythonのScrapyに影響を受けて開発された、シンプルで強力かつスケーラブルなWebクローラーフレームワークです。HTTPリクエスト、HTMLの解析、タスクのスケジューリング、データパイプラインの処理を最小限のコードで実現します。

2.  **WebMagicのアーキテクチャ:** WebMagicはモジュール化された拡張可能なアーキテクチャを持っています。主要なコンポーネントは以下の通りです。
    *   **Spider:** クローリングプロセス全体を調整するメインエンジン。
    *   **Scheduler:** クローリングするURLのキューを管理し、重複クロールを防止。
    *   **Downloader:** HTTPリクエストを処理し、HTMLコンテンツをダウンロード。
    *   **PageProcessor:** ターゲットデータ（製品、価格など）や新しいクロール先のリンクを抽出するロジックを定義。
    *   **Pipeline:** 抽出されたデータの後処理（データベースへの保存、ファイルへの書き込み、コンソールへの出力など）を行う。

3.  **Mavenでのセットアップ:** WebMagicはMavenをビルドツールとして使用します。pom.xmlファイルに依存関係を追加し、slf4j-log4j12を排除することで競合を回避します。

4.  **Hello Worldの例:** `BookScraper` クラスを使用して、`books.toscrape.com` サイトから最初の10冊の本のタイトルと価格をコンソールに出力する基本的なクローラーの例を示しています。この例では、CSSセレクタを使用してデータを抽出しています。

5.  **結論:** WebMagicは、JavaでWebクローラーを構築するためのシンプルで強力なアプローチを提供します。開発者は、HTTP、解析、スレッドに関する定型的なコードを書くことではなく、データの抽出に集中できます。

記事の最後には、GitHubでソースコードが公開されていることが記載されています。
