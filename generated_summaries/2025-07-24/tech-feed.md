# Build your own AI app builder with the v0 Platform API - Vercel

[View on Vercel Blog](https://vercel.com/blog/build-your-own-ai-app-builder-with-the-v0-platform-api)

## v0 Platform APIで独自のAIアプリビルダーを構築する方法 - Vercel

この記事は、Vercelが提供する「v0 Platform API」を使用して、独自のAI生成アプリを構築、拡張、自動化する方法について解説しています。

**v0 Platform APIとは？**

*   v0.devを支えるインフラへのプログラマチックなアクセスを提供するREST APIです。
*   自然言語からのフルスタックWebアプリ生成、既存機能へのコード生成の統合、LLM生成UIを基盤とした新製品の開発を可能にします。
*   プロンプトからプロジェクト、コードファイル、デプロイまで、v0のコード生成ライフサイクル全体をラップしています。
*   各アプリはv0.devのチャットリンクと連携し、様々な機能を提供します。
    *   自然言語からのアプリ生成
    *   独自のコンテキスト（ソースコード、Git、shadcnレジストリからのファイル、添付ファイルなど）の利用
    *   Vercelプロジェクトの作成、チャットへのリンク、デプロイのトリガー

**v0 Platform APIの使い方**

*   v0 SDK (TypeScriptライブラリ) を使用すると、APIとの連携が容易になります。
*   APIキーを取得し、環境変数 `V0_API_KEY` に設定します。
*   SDKを用いて、v0のAIコード生成機能をアプリケーションに統合できます。
*   生成されたファイルへのアクセスや、デモURLを利用したiframeへの表示などが可能です。

**Platform APIで何ができるか？**

*   v0をヘッドレスアプリビルダーとして利用できます。
*   すでに、以下の用途に活用されています。
    *   ユーザーがサイトを記述して、本番環境対応のコードを取得できるWebサイトビルダー
    *   デプロイされたWebアプリケーションを返すSlackおよびDiscordボット
    *   プロンプトからアプリへのワークフローを構築するVSCodeプラグインとCLI
    *   自然言語からUIコンポーネントを生成する、分析ツールやCRMツールへの組み込みフロー
    *   ユーザーの意図を読み取り、ライブアプリとデモリンクを返すカスタム開発環境とエージェント

**開始方法**

*   v0 Platform APIテンプレート（Next.jsアプリケーション）を利用して、プロジェクト管理、チャット履歴、リアルタイムアプリ生成などの機能を実装できます。

---
# Executing SQL Scripts in H2 Database | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922051277/0/baeldung~Executing-SQL-Scripts-in-H-Database)

## H2データベースでSQLスクリプトを実行する方法

この記事では、Spring BootアプリケーションでH2インメモリデータベースを使用する際に、SQLスクリプトを実行する様々な方法について解説しています。

**1. JDBC URLでのスクリプト指定:**

*   H2データベースでは、JDBC URLに `INIT` 句を追加することで、データベースの初期化時にSQLスクリプトを自動実行できます。
*   `INIT=RUNSCRIPT FROM 'classpath:/sql/init_my_db.sql'` のように記述することで、クラスパス上のSQLスクリプトを実行できます。
*   絶対パスでスクリプトを指定するには、`file:` プレフィックスを使用します。

**2. Spring Bootの組み込みスクリプト検出: schema.sqlとdata.sql:**

*   Spring Data JPAを使用している場合、Spring Bootはクラスパスから `schema.sql` と `data.sql` という特別なファイルを自動的に検出し、実行します。
    *   `schema.sql`: スキーマ定義（テーブル作成など）
    *   `data.sql`: 初期データ投入
*   `schema.sql` が先に実行され、次に `data.sql` が実行されます。
*   これらのファイルの場所を変更するには、`spring.sql.init.schema-locations` と `spring.sql.init.data-locations` プロパティを設定します。
*   自動検出を無効にするには、`spring.sql.init.mode` を `never` に設定します。

**3. EntityManagerによるSQLスクリプトの動的実行:**

*   `EntityManager` を使用して、ネイティブクエリ経由で H2 の `RUNSCRIPT` コマンドを実行することで、SQLスクリプトをプログラム的に実行できます。
*   `entityManager.createNativeQuery("RUNSCRIPT FROM 'classpath:/sql/add_cities.sql'").executeUpdate();` のように記述します。
*   `RUNSCRIPT` コマンドは、クラスパスまたはファイルシステムからSQLファイルを読むことができます。
*   `RUNSCRIPT` コマンドを実行するには、`executeUpdate()` メソッドを呼び出す必要があります。`getResultList()` などのメソッドを呼び出すと例外が発生します。

**結論:**

この記事では、H2データベースでSQLスクリプトを実行する3つの主要な方法を解説しました。JDBC URLの `INIT` 句、`EntityManager` を使用した動的実行、Spring Bootの `schema.sql` と `data.sql` のサポートなど、それぞれの方法にはテストのライフサイクルにおける特定のニーズに対応する利点があります。これらの戦略を活用することで、よりクリーンでメンテナンス性の高い統合テストを作成し、最終的にはより堅牢なアプリケーションを構築できます。

---
# Creating an AI Agent in Java Using Embabel Agent Framework | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922051280/0/baeldung~Creating-an-AI-Agent-in-Java-Using-Embabel-Agent-Framework)

このBaeldungの記事は、JavaでAIエージェントを作成するためのEmbabel Agent Frameworkを紹介しています。

**概要**

記事は、クラウドネイティブJavaアプリケーションの構築に役立つAzure Container Appsや、ワークフローオーケストレーションプラットフォームOrkesの紹介から始まり、AIエージェントの重要性を強調しています。そして、Embabel Agent Frameworkを使用して、目標指向のアクションプランニング（GOAP）を通じて、LLMと外部ツール間の複雑なワークフローを調整するAIエージェントを簡単に作成する方法を解説しています。

**Quizzardエージェントの構築**

具体的な例として、ブログ記事からクイズを生成する「Quizzard」エージェントを構築する手順が示されています。

1.  **プロジェクトのセットアップ**: Embabel Agent Starterの依存関係を追加し、Embabelのスナップショットリポジトリをpom.xmlに設定。LLMモデル（Claude-Opus）を設定し、Anthropic APIキーを環境変数に設定します。
2.  **プロンプトテンプレートの定義**: クイズの生成要件を明確に記述したプロンプトテンプレートを作成し、ブログタイトルとコンテンツのプレースホルダーを準備します。
3.  **エージェントの作成**:
    *   `@Agent`アノテーションでエージェントとして宣言します。
    *   `fetchBlogContent`アクション：`@Action`アノテーションでマークし、WebからブログコンテンツをFetch MCPサーバーを使用して取得します。
    *   `generateQuiz`アクション：`@Action`と`@AchievesGoal`アノテーションを使用し、取得したブログコンテンツからクイズを生成します。

**エージェントとの対話**

`@EnableAgentShell`アノテーションを使用してインタラクティブシェルモードを有効にし、`execute`コマンドでエージェントにリクエストを送信する方法を解説しています。ログを通じて、エージェントが計画を立て、アクションを実行し、最終的にクイズを生成する様子を確認できます。また、トークン使用量やコストなどのメトリクスも表示されます。

**まとめ**

記事は、Embabel Agent Frameworkを使用して、Webコンテンツの取得とクイズ生成を行うQuizzardエージェントのような、マルチステップエージェントを構築できることを示しています。GitHubで利用可能なコード例へのリンクも提供しています。
