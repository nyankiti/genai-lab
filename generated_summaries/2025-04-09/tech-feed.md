# Expanding observability on Vercel - Vercel

[View on Vercel Blog](https://vercel.com/blog/expanding-observability-on-vercel)

## Vercelにおけるオブザーバビリティの拡張 - 要約

Vercelは、Sentry、Checkly、Dash0の新しいネイティブインテグレーションをVercel Marketplaceに追加し、オブザーバビリティを強化しました。これにより、開発者は既に信頼しているツールを使って、アプリの監視、測定、デバッグを簡単に行えるようになります。特別な設定や、ビルドやデプロイ方法の変更は必要ありません。

これらのツールはVercel Marketplaceを通じて直接接続され、統合された請求、シングルサインオン、プロバイダーダッシュボードへのアクセスを提供し、手間をかけずに詳細な可視性を実現します。

この発表では、ネイティブインテグレーション用のLog Drainsも導入されました。Dash0は、この機能に対応する最初のプロバイダーであり、VercelプロジェクトからのログをDash0に送信して、より深い洞察と集中監視を行うことができます。

Vercelは、開発者がコンテキストスイッチングや複数のダッシュボード管理を行うことなく、開発現場に近い場所でオブザーバビリティツールを利用できるようにすることを目指しています。お気に入りのインテグレーションをMarketplaceから追加するだけで、すぐに価値を得ることができます。

生産回帰に関するアラート、時間の経過に伴うパフォーマンスの追跡、問題のより迅速なデバッグなど、Vercelは開発プロセスにオブザーバビリティを容易に組み込めるようにします。

Vercel Marketplaceでオブザーバビリティインテグレーションを探索できます。サービスプロバイダーとしてMarketplaceに参加することに興味がある場合は、プロバイダーアプリケーションを提出できます。

---
# Automatic mitigation of Google and Bing crawl delay, via Vercel’s Skew Protection - Vercel

[View on Vercel Blog](https://vercel.com/changelog/automatic-mitigation-of-crawler-delay-via-skew-protection)

## VercelのSkew ProtectionによるGoogleとBingのクロール遅延の自動軽減に関する要約

この記事は、VercelのSkew Protection機能が、GoogleとBingのウェブクローラーによるクロールとレンダリングの遅延によって発生するインデックス作成の失敗を自動的に防ぐようになったことを説明しています。

**主なポイント:**

*   GoogleとBingのクローラーは、ドキュメントをクロールしてから数週間後にヘッドレスブラウザを使用してレンダリングすることがあり、その間にウェブサイトが再デプロイされるとインデックス作成が失敗する可能性があります。
*   VercelのSkew Protectionは、GooglebotやBingbotなどの主要な検索エンジンのボットからのリクエストに対して、Skew Protectionの最大有効期間を60日に拡張することで、この問題を自動的に解決します。
*   これにより、60日前にデプロイされたアセットであっても、検索エンジンがドキュメントをレンダリングする際にアクセスできるようになり、SEOが改善されます。
*   Skew Protectionを利用するProおよびEnterpriseアカウントは、ダッシュボードで設定された最大有効期間に関係なく、この遅延から自動的に保護されます。
*   詳細については、Skew Protectionの機能を調べ、プロジェクトで有効にしてください。また、VercelのSEOに関するリサーチ（GoogleのJavaScript処理方法など）も参照できます。

---
# Sentry, Checkly, and Dash0 join the Vercel Marketplace - Vercel

[View on Vercel Blog](https://vercel.com/changelog/sentry-checkly-and-dash0-join-the-vercel-marketplace)

## Vercel Marketplace に Sentry, Checkly, Dash0 が加わりました！

この記事は、Vercel Marketplace に新たに Sentry, Checkly, Dash0 という3つのネイティブインテグレーションが追加されたことを報告しています。これらのインテグレーションは、アプリケーションの監視、デバッグ、最適化を容易にするために役立ちます。

**各サービスの概要:**

*   **Sentry:** リアルタイムのエラー追跡とパフォーマンスモニタリングにより、問題解決を迅速化します。
*   **Checkly:** フロントエンドとAPIのエンドツーエンドモニタリングと合成チェックを提供します。
*   **Dash0:** 開発者ファーストのエクスペリエンスを備えたログ管理と構造化されたオブザーバビリティを提供します。また、Native Log Drains をサポートしており、Vercelプロジェクトから外部のロギングシステムにログをストリーミングして、より詳細なインサイトと一元的なモニタリングを可能にします。

**主な特徴:**

*   Log Drain サポート：これにより、Vercelプロジェクトから外部のロギングシステムへのログストリーミングが可能になりました。
*   簡単な導入：摩擦のないオンボーディング、シングルサインオン、Vercelを通じた統合課金により、数クリックで開始できます。

記事は、これらの新しいオブザーバビリティインテグレーションを試すことを勧めています。

---
# How to Keep a Container Running in Docker Compose | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916379219/0/baeldung~How-to-Keep-a-Container-Running-in-Docker-Compose)

このチュートリアルでは、Docker Composeを使用してコンテナを実行し続ける方法について解説しています。

**1. 概要**

Dockerコンテナは、本来はプロセスが終了すると停止します。しかし、MySQLデータベースやSpring Boot Webアプリケーションのように、継続的に実行されることが期待されるコンテナもあります。一方、Ubuntuコンテナのように、主要なタスクが完了した後も実行し続ける必要がある場合もあります。この記事では、Docker Composeを使用して、このようなコンテナを継続的に実行する方法を学びます。

**2. Docker Composeの設定**

Docker Composeは、マルチコンテナサービスを定義し実行するためのツールです。前提条件として、Docker (Docker Server、Docker Client、Docker Compose) がサポートされているOSにインストールされている必要があります (このチュートリアルではLinux Ubuntuを使用)。

**3. Ubuntuコンテナの実行**

docker-compose.ymlというDocker Compose設定ファイルを使用して、サービスを定義します。

*   `docker-compose up -d` コマンドでサービスをバックグラウンドで実行します。
*   `docker ps -a` コマンドでコンテナの状態を確認します。初期設定では、Ubuntuコンテナは作成後すぐに終了します。

3.1. **Docker Composeサービスの開始**

`docker-compose up -d`コマンドを使って、サービスをバックグラウンドで実行します。

3.2. **テスト間のクリーンアップ**

各例を実行する前に、`docker-compose down` コマンドを使用してコンテナを削除できます。

**4. TTYの割り当て**

コンテナが実行され続けるように、擬似TTYを割り当てることができます。設定ファイルに `tty: true` を追加します。

**5. `tail` コマンドの使用**

`tail -f /dev/null` コマンドを使用すると、コンテナを実行し続けることができます。これは、`tail` コマンドが `/dev/null` から永久に読み取り続けるためです。

**6. `sleep` コマンドの使用**

`sleep infinity` コマンドも、コンテナを実行し続けるために使用できます。`infinity` を使用することで、コマンドが永遠に完了せず、コンテナが実行され続けます。

**7. 無限ループスクリプトの使用**

`while true; do sleep 1; done` のような無限ループスクリプトを使用することもできます。これは、常に真である `while true` 条件により、コンテナが実行され続けるためです。この方法は、ログメッセージの出力やプロセスのステータス取得などのタスクを実行する際に柔軟性があります。

**8. hello-worldコンテナが機能しない理由**

これらの方法は、すべての種類のコンテナで機能するわけではありません。たとえば、hello-worldイメージベースのコンテナは、これらの方法では実行し続けることができません。これは、hello-worldイメージのDockerfileがLinux環境を提供せず、コマンドを実行するためのシェルがないためです。

**9. 結論**

このチュートリアルでは、Docker Composeでコンテナを実行し続けるさまざまな方法について学びました。すべてのDockerコンテナで明示的な設定を行う必要はなく、アプリケーションやプロセスを起動する一部のコンテナは、デフォルトで実行し続けることに注意してください。また、一部のコンテナはBashシェルや他のLinuxコマンドの実行を許可しないため、すべての種類のコンテナを実行し続けることができるわけではありません。

---
# Spring Batch + Spring BootでJob内で利用するデータベースとJobを管理するデータベースを別々にするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/845)

## Spring Batch + Spring Boot でJob管理DBと利用DBを分ける方法

この記事は、Spring BootとSpring Batchを使用して、ジョブ内で利用するデータベースと、ジョブの管理に使用するデータベースを別々に設定する方法をまとめたものです。 Spring Boot 3.4とSpring Batch 5.2での動作確認済みです。

**設定方法の概要:**

1.  **`DataSourceConfig`クラスの作成:**
    *   `DataSourceConfig`クラスを作成し、`@Configuration`と`@ConditionalOnProperty(name = "spring.batch.datasource.url")`アノテーションを付与します。
    *   ジョブ内で利用するデータベース (デフォルトのデータソース) の設定として、`spring.datasource.*`で始まるプロパティを設定します。
    *   ジョブ管理用データベースの設定として、`spring.batch.datasource.*`で始まるプロパティを設定します。
    *   `@BatchDataSource`アノテーションを付与して、ジョブ管理用データソースであることを明示します。
    *   `@BatchTransactionManager`アノテーションを付与して、ジョブ管理用トランザクションマネージャーであることを明示します。
    *   `@Bean(defaultCandidate = false)`を付与することで、明示的に `@Qualifier` を使用しない限り、Beanがインジェクションの対象にならないようにします。

2.  **プロパティファイルの設定:**
    *   `spring.datasource.*` にジョブ内で利用するデータベースの設定を記述します。
    *   `spring.batch.datasource.*` にジョブを管理するデータベースの設定を記述します。
    *   `spring.batch.datasource.url` を設定することで、`DataSourceConfig`が有効になります。設定がない場合は、Spring Bootのデフォルトの自動設定が適用されます。

**具体的な設定例:**

*   ジョブ内で利用するデータベースとジョブ管理データベースの両方にPostgreSQLを使用する場合:

    ```properties
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.datasource.url=jdbc:postgresql://localhost:5432/mydatabase
    spring.datasource.username=myuser
    spring.datasource.password=secret

    spring.batch.datasource.driver-class-name=org.postgresql.Driver
    spring.batch.datasource.url=jdbc:postgresql://localhost:15432/spring_batch
    spring.batch.datasource.username=spring_batch
    spring.batch.datasource.password=admin
    ```

*   ジョブ管理データベースにインメモリのH2データベースを使用する場合:

    ```properties
    spring.batch.datasource.url=jdbc:h2:mem:spring_batch
    spring.batch.datasource.driverClassName=org.h2.Driver
    spring.batch.datasource.username=sa
    spring.batch.datasource.password=
    ```

**ポイント:**

*   `@Bean(defaultCandidate = false)`を使用することで、意図しないデータソースのインジェクションを防ぎ、設定の明示性を高めています。
*   `@ConditionalOnProperty`を使用することで、`spring.batch.datasource.url` が設定された場合にのみ、ジョブ管理データベースの設定が有効になります。
*   ジョブ管理データベースとジョブ内で利用するデータベースには、異なるデータベース、または同じデータベースの異なるインスタンスを使用できます。
