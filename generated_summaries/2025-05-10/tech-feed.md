# New quick actions in Observability - Vercel

[View on Vercel Blog](https://vercel.com/changelog/new-quick-actions-in-observability)

## Observabilityの新機能：迅速なアクション - Vercel

この記事は、VercelのObservabilityに実装された新機能について簡単に説明しています。

**要約:**

Observabilityのビューとクエリ結果において、個々の結果を素早くコピー、フィルタリング、または除外できるようになりました。

*   **コピー:** 全てのObservabilityビューで利用可能。
*   **フィルタリングと除外:** カスタムクエリの検索結果で利用可能。

これらの迅速なアクションにより、Observabilityクエリの探求と絞り込みが容易になります。

本機能は、ObservabilityとObservability Plusのユーザーが利用できます。

---
# Java Weekly, Issue 593 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918015167/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 593 要約

この Java Weekly の第 593 号は、2025 年 5 月 9 日に更新されました。

**主なトピック:**

*   **Java 25 の新機能:** JDK 25 では、インスタンス main メソッドやコンパクトなソースファイルなど、初心者でも「Hello World」プログラムを簡単に記述できる機能が導入されました。
*   **Spring AI の機能拡張:** Spring AI のモデルコンテキストプロトコル (MCP) を使用した動的なツール更新について解説しています。
*   **その他の記事:** 以下のトピックに関する記事へのリンクが掲載されています。
    *   文字列の高速化
    *   Crossplane の利用
    *   Redis の AGPLv3 ライセンスでの提供
    *   Ollama を使用したローカル AI エージェントの構築
    *   Spring Boot と Redis を使用したセマンティック検索
    *   Java と Scala を使用した再帰、サンス、トランポリン
*   **ウェビナーとプレゼンテーション:** Java for AI、Spring インストラクター Mary Ellen Bowman をフィーチャーした A Bootiful Podcast、James Gosling を迎えた Foojay Podcast #71、Viktor Klang を迎えた Episode 35 “Stream Gatherers”、「QCon London 2025 Day 3」など、様々なウェビナーやプレゼンテーションへのリンクが掲載されています。
*   **アップデート情報:**
    *   Java Card Development Kit バージョン 25.0
    *   Spring AI 1.0.0 M8
    *   Spring Cloud 2025.0.0-RC1 (Northfields)
    *   Jhipster v8.10.0
    *   jetty-12.0.20
    *   Micronaut Core 4.8.13
    *   camel-4.8.7
*   **Pick of the Week:** Spring のコースと Pro のセールに関する情報です。
---
# Query in DynamoDB on the Basis of Partition Key and Sort Key | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918009296/0/baeldung~Query-in-DynamoDB-on-the-Basis-of-Partition-Key-and-Sort-Key)

この Baeldung の記事は、Amazon DynamoDB におけるパーティションキーとソートキーを利用したクエリについて解説しています。

**主な内容:**

*   **DynamoDB の概要:** AWS が提供する NoSQL データベースサービスであり、高速でスケーラブルなアプリケーション構築に適しています。キーバリューとドキュメントデータモデルを採用し、パーティションキーとソートキーを組み合わせた複合キーモデルを使用することで、効率的なデータアクセスパターンを設計できます。
*   **複合キーモデルの理解:** DynamoDB のプライマリキーには、パーティションキーのみの単純キーと、パーティションキーとソートキーを組み合わせた複合キーの2種類があります。パーティションキーはデータの保存場所を決定し、ソートキーはパーティション内のデータソートやフィルタリングに使用されます。
*   **Maven 依存関係:** Java アプリケーションから DynamoDB にアクセスするために必要な、AWS SDK for Java v2 の依存関係について説明しています。
*   **パーティションキーによるクエリ:** 最も基本的なクエリ方法として、パーティションキーのみを使用したクエリについて解説しています。特定のパーティションキーを持つすべてのアイテムが返されます。
*   **パーティションキーとソートキーを使用したクエリ:** より詳細なフィルタリングを行うために、パーティションキーとソートキーを組み合わせて使用する方法を説明しています。ソートキーに対する条件を指定することで、パーティション内の結果を絞り込むことができます。
*   **ソートキーの条件:** BETWEEN や BEGINS\_WITH などのソートキーに対する様々な条件について解説しています。
    *   BETWEEN: 特定の範囲内のアイテムを取得する。
    *   BEGINS\_WITH: 特定のプレフィックスで始まるアイテムを取得する。
*   **クエリにおけるページネーションの処理:** DynamoDB は各クエリの応答サイズを 1MB に制限しているため、より多くのデータがある場合は、LastEvaluatedKey を使用して結果をページング処理する必要があります。
*   **結論:** DynamoDB の複合キーモデルは、効率的なデータの整理と取得を可能にし、パーティションキーとソートキーを組み合わせることで、高性能アプリケーション向けの効率的でスケーラブルなアクセスパターンを実現できると結論付けています。

記事では、Java を使用した DynamoDB クエリの実装例や、GitHub でのコード例へのリンクも提供しています。

---
# Kodee’s Kotlin Roundup: Compose Multiplatform for iOS is Stable (Plus AI, Web, and More!) | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/05/kodees-kotlin-roundup-compose-multiplatform-for-ios-is-stable/)

## Kodee の Kotlin まとめ: Compose Multiplatform for iOS が安定版に（AI、Web なども！）

この記事は、Kotlin 関連の最新情報をまとめたもので、以下のトピックを扱っています。

**1. Kotlin の最新情報:**

*   **Kotlin 2.1.21-RC2:** バグ修正とパフォーマンス向上を施したリリース候補版。
*   **Kotlin 2.2.0-Beta2:** コンパイラの警告管理の統一、JVM に関する変更、Gradle と Problems API の統合などの改善。
*   **KotlinConf 2025:** オンラインでのライブストリーミングが予定されており、YouTube チャンネルで配信。
*   **JetBrains AI との連携:** Junie と AI Assistant が IntelliJ IDEA に統合され、Kotlin の開発を支援。

**2. Kotlin Multiplatform (KMP):**

*   **Compose Multiplatform for iOS が安定版に:** iOS 向け Compose Multiplatform が安定版となり、ネイティブ UI コードの共有、ネイティブ体験の完全な制御、スケーラブルなアプリケーション開発が可能になった。
*   **klibs.io の成長:** KMP ライブラリの検索プラットフォームである klibs.io に登録されるライブラリが倍増。

**3. サーバーサイド開発向け Kotlin:**

*   **Ktor 3.1.3 リリース:** バグ修正、パフォーマンス向上、依存関係のアップデートを実施。
*   **ドメイン駆動設計 (DDD) ガイド:** Ktor プロジェクトを DDD で構造化する方法を紹介するガイドが公開。

**4. Web 開発向け Kotlin:**

*   **Kotlin Notebook が IntelliJ IDEA に統合:** IntelliJ IDEA Ultimate に Kotlin Notebook が標準搭載され、バックエンドや API 開発を支援。
*   **Web 開発の進捗:** IDE サポートの改善、Kotlin/Wasm と Compose Multiplatform for web が Beta に移行など、Web 開発が活発化。

**5. その他のニュース:**

*   K2 モードに関する情報。
*   Google I/O での Kotlin 関連セッション。
*   Gradle のベストプラクティス。
*   Amper のアップデート。
*   コンテキストパラメータに関する情報。
*   Fuzz Testing の導入。
*   Kotlin YouTube チャンネルの注目動画。
*   KotlinConf 2025 の情報。
*   Kotlin Heroes コンテスト。

この記事は、Kotlin コミュニティの最新情報と、様々な分野での Kotlin の活用状況を包括的に伝えています。

---
# Automatically create passkeys in Google Password Manager on Chrome desktop  |  Blog  |  Chrome for DevelopersGitHubLinkedInBlueskyHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/passkey-automatic-upgrades?hl=en)

このブログ記事は、Google Chromeのデスクトップ版のパスキー自動作成機能について解説しています。

**主な内容:**

*   **自動パスキー作成の導入:** ユーザーが追加の手順を踏むことなく、パスワードマネージャーが自動的にパスキーを作成する機能を紹介しています。これは、パスワードに代わるフィッシング耐性の高いパスキーの普及を促進するための取り組みです。
*   **仕組み:** ウェブサイトがパスワードマネージャーに対し、パスワードでのサインイン後にパスキーの自動作成を要求します。パスワードが保存されており、最近サインインに使用された場合に機能します。
*   **利点:**
    *   スムーズな移行：追加の手順なしでパスキーを利用可能。
    *   フィッシングリスクの軽減：パスワードベースの攻撃を排除。
    *   優れたユーザーエクスペリエンス：煩わしいプロンプトがなく、認証がスムーズに行われます。
*   **実装方法:** `navigator.credentials.create()` を使用し、`mediation: 'conditional'` を指定することで実現できます。Chrome 136以降のデスクトップ版で利用可能で、Android版も近日公開予定です。
*   **無効化:** ユーザーはChromeの設定で自動パスキー作成を無効にすることができます。
*   **関連情報:** パスキーの導入に関する他のリソースへのリンクが提供されています。

この記事は、パスキーへの移行を容易にし、セキュリティを向上させるために、開発者に対し自動パスキー作成機能の実装を推奨しています。

---
# JSer.info のMCPサーバを公開しました - JSer.info

[View on jser.info](https://jser.info/2025/05/09/jser-mcp/)

## JSer.info のMCPサーバ公開に関する要約

JSer.info は、AIエージェントなどから JSer.info のデータへアクセスするための Model Context Protocol (MCP) サーバーを公開しました。

**MCPとは:**

*   AIエージェントや開発ツールが外部のデータソースと連携するためのプロトコルです。
*   JSer.info のデータセットへプログラムからアクセス可能にします。

**利用できるツール:**

*   `jser_search_items`: アイテム（記事、スライドなど）を検索
*   `jser_search_posts`: 週刊まとめ記事を検索
*   `jser_product_name`: URLからプロダクト名を推定
*   `jser_week`: 特定の週刊まとめ記事を取得
*   `jser_weeks`: 全ての週刊まとめ記事を取得
*   `jser_weeks_between`: 日付範囲内の週刊まとめ記事を取得
*   `jser_week_with_item_url`: 特定のアイテムURLを含む週刊まとめ記事を取得
*   `jser_item_with_item_url`: 特定のURLに合致するアイテムの詳細情報を取得

**利用例:**

*   「特定の JavaScript ライブラリについて言及している JSer.info の記事一覧を取得する」
*   「JSer.info スタイルでURLの記事を解説して」

**利用方法:**

*   VSCode などの MCP クライアントから利用できます。
*   リモートサーバー（`https://mcp.jser.info/mcp`）に接続
*   ローカル環境でサーバーを起動

**データソース:**

*   JSer.info のデータは `jser/dataset` を利用して扱えます。
*   過去の記事や投稿がJSONとして取得できます。
*   URLからのプロダクト名取得も過去データに基づいています。

**関連情報:**

*   詳細や最新情報は `jser/mcp` リポジトリを参照してください。
