# Business Process Automation with Kogito | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918479039/0/baeldung~Business-Process-Automation-with-Kogito)

## Kogito によるビジネスプロセス自動化 | Baeldung

**概要:**

この記事では、クラウドネイティブなビジネスアプリケーションを構築するためのオープンソースプラットフォームである Apache Kogito について解説しています。Kogito の機能、アーキテクチャ、コアテクノロジー、ユースケース、サンプルコードを通じて、ビジネスプロセスとルールをマイクロサービスとして実行し、Kubernetes 環境で効率的にデプロイする方法を説明しています。

**主な内容:**

1.  **Kogito の概要:**
    *   Kogito は、モノリシックアーキテクチャではなく、マイクロサービスと Kubernetes に焦点を当てた BPM ツールです。
    *   BPMN 2.0 や DMN などの標準規格をサポートし、これらは実行可能なモデルとしてアプリケーションに直接統合されます。
    *   KIE (Knowledge Is Everything) プロジェクトから派生したものであり、Kubernetes と Knowledge を組み合わせた名前です。

2.  **Kogito を支えるコアテクノロジー:**
    *   jBPM: ビジネスプロセスモデリングと実行（BPMN を使用）
    *   Drools: 強力なルールエンジン（DRL または DMN を使用）
    *   これらをクラウドネイティブに拡張し、Quarkus と Spring Boot をサポート、DevOps への対応、Prometheus, Grafana, OpenAPI との統合を提供。

3.  **Kogito の主な機能:**
    *   **クラウドネイティブと Kubernetes ファースト:** Kubernetes 上でネイティブに動作し、自動スケーリング、コンテナ化、回復力を提供。
    *   **イベントドリブンアーキテクチャ:** Apache Kafka との統合による非同期通信をサポートし、リアルタイムなビジネスイベントへの対応を実現。
    *   **モデル駆動開発:** BPMN と DMN のための視覚的なツールとエディタを提供し、モデルを実行可能なサービスにコンパイル。
    *   **開発者中心のツール:** VS Code プラグイン、Kogito Tooling などのオンラインエディタ、Quarkus および Spring Boot などのフレームワークのネイティブサポート。
    *   **DevOps 対応:** CI/CD パイプラインへの統合、OpenTelemetry によるトレース、Prometheus と Grafana によるモニタリング、Kubernetes のヘルスチェックとの互換性。

4.  **ユースケース:**
    *   融資と保険の請求処理: 資格、承認、ルーティングに関する複雑なルールを自動化。
    *   顧客オンボーディング: コンプライアンスチェックと承認を伴う多段階ワークフローの管理。
    *   サプライチェーン管理: 在庫、ロジスティクス、ベンダーの行動に関連するルールに基づいたアクションのトリガー。
    *   ヘルスケアワークフロー: 患者のジャーニー、ドキュメント化、ルール主導の治療プロトコルの処理。

5.  **サンプル:**
    *   融資承認サービスを例に、Drools を使用したルールの実装方法と、Kogito を使用してマイクロサービスとして REST エンドポイントを構築する方法を示す。
    *   Quarkus プロジェクトへの依存関係の追加、Drools ルールファイルの配置、curl コマンドによるリクエスト送信の手順。
    *   カスタム API の作成: Kogito を使用しない、カスタムエンドポイントと JSON スキーマの定義。
    *   Drools ルールエンジンを Quarkus アプリケーションに統合するための Kogito API の使用。

6.  **結論:**
    *   Kogito は、クラウドネイティブなビジネスアプリケーションを構築するための自動化ツールであり、継続的に開発が進められている。
    *   Kogito Examples Repository で提供されているサンプルコードが参考になる。
    *   記事で紹介されているコードは GitHub で公開されている。

---
# Read a Gradle Defined Variable in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918479042/0/baeldung~Read-a-Gradle-Defined-Variable-in-Java)

## 記事の要約：Gradleで定義された変数をJavaで読み込む方法

このチュートリアルでは、Gradleファイルで定義された変数をビルド時にJavaコードで読み込む3つの方法を紹介しています。これにより、JavaコードとGradleコードで変数を重複して定義する代わりに、1か所で定義し、ビルド時の設定に基づいてコードの動作を変化させることができます。

**1. コード生成による方法:**

*   **Javaクラスの生成:** `ext`ブロックで定義したGradle変数をJavaコードで利用できるように、ビルド時にJavaのfinalクラスを生成します。
    *   Gradleの`sourceSets`で生成されたソースディレクトリを指定します。
    *   `tasks.register`で、`BuildConfig.java`ファイルを作成するタスクを定義します。このファイルには、Gradle変数から読み込んだ静的変数が含まれます。
    *   生成されたファイルをJavaコードから`BuildConfig.MY_VERSION`のように参照できます。
    *   `compileJava.dependsOn generateBuildConfig`で、コンパイル前に生成タスクが実行されるようにします。
*   **プロパティファイルの生成:** ほぼ同様の手法ですが、プロパティファイルを作成します。
    *   `sourceSets`で、生成されたリソースディレクトリを指定します。
    *   `tasks.register`で、プロパティファイルを作成するタスクを定義します。
    *   Javaコードでは、`Properties`クラスを使用して、プロパティファイルを読み込みます。
    *   `compileJava.dependsOn generateProperties`で、コンパイル前に生成タスクが実行されるようにします。

**2. 環境変数またはシステムプロパティとしての注入:**

*   最も簡単な方法で、変数を環境変数またはシステムプロパティとして注入します。
    *   `test`などのGradleタスク内で、`systemProperty`や`environment`を使用して変数を設定します。
    *   Javaコードでは、`System.getProperty()`または`System.getenv()`を使用して変数を読み込みます。
    *   タスクの実行順序を調整する必要はありません。

**結論:**

各方法は、異なるシナリオに適しています。コンパイル時にチェックできる定数を使用したコード生成は、ランタイムエラーを減らす利点があります。ランタイムインジェクションは、最も動的なアプローチを提供し、アプリケーションを再起動することなく変数の値を更新することができます。

---
# How to Configure GraphQL/REST APIs Using Apache Camel | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918479045/0/baeldung~How-to-Configure-GraphQLREST-APIs-Using-Apache-Camel)

このブログ記事「Apache Camel を使用して GraphQL/REST API を設定する方法」は、Apache Camel を利用して REST API と GraphQL API の両方を構築し、設定する方法を詳細に解説しています。

**主な内容:**

1.  **導入:** Apache Camel は、異なるシステム間の連携を容易にする強力な統合フレームワークです。このチュートリアルでは、Apache Camel を使用して REST と GraphQL API を公開する小さなアプリケーションを構築します。
2.  **プロジェクトのセットアップ:**  `pom.xml` ファイルに Apache Camel、Jetty、GraphQL、Jackson などの依存関係を追加します。これらの依存関係は、アプリケーションの構築に必要なコンポーネントを提供します。
3.  **Book モデルの作成:**  `Book` というシンプルなモデルクラスを作成します。このクラスは、API で返したいデータを表します。
4.  **Service クラスの作成:** `BookService` クラスを作成し、書籍のリストを返します。ここでは、単純化のためにデータをモックしています。
    *   書籍の取得、IDによる書籍の取得、新しい書籍の追加の 3 つの操作を提供します。
5.  **Camel を使用した REST エンドポイントの作成:**
    *   Camel の `RouteBuilder` を使用して、HTTP エンドポイントとルーティングロジックを定義します。
    *   例外処理のための `onException()` メソッドを使用します。
    *   `restConfiguration()` を使用してサーバー設定を行います。
    *   `/api/books`、`/api/books/{id}`、`/api/books` に対して GET と POST リクエストを処理するエンドポイントを作成します。
6.  **GraphQL スキーマの作成:** GraphQL スキーマを `books.graphqls` というファイルに定義します。
    *   `Book` 型を定義します。
    *   `Query` 型と `Mutation` 型を定義します。
7.  **GraphQL スキーマローダーの追加:**
    *   スキーマを読み込み、レジストリに解析し、各 GraphQL 操作がどのように解決されるかを定義する `CustomSchemaLoader` クラスを作成します。
    *   `dataFetcher()` を使用して、GraphQL クエリまたはミューテーションと、サービス層の実際のメソッドを接続します。
8.  **GraphQL ルートの追加:**
    *   受信した HTTP POST リクエストをリッスンし、GraphQL エンジンに委譲する Camel ルートを定義します。
    *   `/graphql` パスで HTTP リクエストをリッスンするようにルートを設定します。
9.  **メインアプリケーションクラス:**
    *   Camel コンテキストを初期化し、スキーマローダーを登録し、ルートを追加し、サーバーを稼働状態に保つ `CamelRestGraphQLApp` クラスを作成します。
10. **テスト:** Camel の `CamelContext` と `ProducerTemplate` を使用して、HTTP リクエストをシミュレートしてテストを作成します。
11. **結論:** この記事では、Camel アプリケーションに REST エンドポイントと GraphQL エンドポイントを統合し、書籍データを効率的に管理する方法を示しています。

この記事は、Apache Camel を使用して GraphQL と REST API を両方実装する方法を学ぶための実践的なガイドです。
