# Fluid compute: Evolving serverless for AI workloads - Vercel

[View on Vercel Blog](https://vercel.com/blog/fluid-compute-evolving-serverless-for-ai-workloads)

## Fluid Compute: AIワークロード向けに進化するサーバーレス - Vercel (日本語要約)

VercelのFluid Computeは、AIワークロード向けに最適化された新しいコンピューティングモデルです。従来のサーバーレスコンピューティングは、高速でステートレスなWebアプリのトランザクション向けに設計されており、LLM（大規模言語モデル）との対話のような持続的な計算と継続的な実行パターンには適していませんでした。

**課題: 従来のサーバーレスコンピューティングとLLMワークロードのミスマッチ**

LLMとの対話は、単一の要求と応答以上の複雑なプロセスを伴います。

1.  サーバーレス関数が起動
2.  LLM APIにリクエストを送信 (計算リソースを消費)
3.  応答を待機 (数秒〜数分間アイドル状態、しかし課金は発生)
4.  LLMが処理を完了し、応答を関数に返す
5.  応答がクライアントにストリーミングされる
6.  後続のリクエストごとに新しい関数インスタンスが生成される傾向

このプロセスは、従来のサーバーレスコンピューティングのアーキテクチャと異なる以下の点を浮き彫りにします。

*   **トランザクションの時間:** ミリ秒単位の応答を想定していた従来のサーバーレスに対し、LLMは複数秒の処理時間を必要とします。
*   **実行パターン:** 単一の独立したリクエスト向けに設計されていた従来の関数に対し、LLMはシーケンシャルな対話を処理する必要があります。
*   **リソースのライフサイクル:** 短い時間で完了することを前提としていた従来のモデルに対し、LLMは継続的な対話を処理する必要があります。
*   **スケーリングモデル:** 短時間のバーストに対応するように最適化されていた水平スケーリングに対し、LLMは継続的なワークロードに対応する必要があります。

**解決策: Fluid Compute**

Fluid Computeは、既存のリソースを再利用し、新しいリソースをスケールする前に効率的に活用することで、総計算量を削減します。

*   **リソースの再利用:** 各リクエストに対して新しい関数を起動する代わりに、利用可能な容量をインテリジェントに再利用。
*   **効率的なスケーリング:** 単一インスタンス内でスケーリングを行い（many-to-one）、コールドスタートや追加の起動を回避。
*   **動的な計算リソースの割り当て:** 不要な関数の生成を避け、計算を動的に共有。

**Fluid Computeの利点:**

*   **コスト削減:** アイドル状態の計算をなくし、すべての関数呼び出しが積極的に処理に貢献。
*   **パフォーマンス向上:** 複数のAI推論リクエストを単一のインスタンスで同時に処理し、効率的なスケーリングを実現。
*   **高い応答性:** ユーザーは中断のない応答を得られ、開発者はインフラストラクチャの非効率性を削減。
*   **セキュリティと信頼性:** Vercel Firewallによるエッジセキュリティ、安全なインスタンスアーキテクチャ、および高可用性を実現。

Fluid Computeは、AIワークロードに必要な効率性、パフォーマンス、セキュリティを提供します。AIアプリの安全性を維持し、コストを予測可能に保ちながら、高いパフォーマンスを発揮します。Fluid Computeは、新しいプロジェクトではデフォルトで有効になっており、既存のプロジェクトでも有効にすることができます。

---
# Fluid compute now supports ISR background and on-demand revalidation - Vercel

[View on Vercel Blog](https://vercel.com/changelog/fluid-compute-now-supports-isr-background-and-on-demand-revalidation)

## Vercel、Fluid ComputeでISR（Incremental Static Regeneration）のバックグラウンドおよびオンデマンド再検証をサポート

この記事は、VercelのFluid Computeが、すべてのプロジェクトでバックグラウンドおよびオンデマンドのISRをサポートするようになったことを発表しています。

**主なポイント:**

*   Fluid Computeは、ISR関数においてパフォーマンスと並行処理の効率を向上させます。
*   設定変更は不要で、最近デプロイした場合は既にFluid Computeを利用しています。
*   Fluid Computeは既存のリソースを再利用し、高並行処理ワークロードのコストを最大85%削減します。
*   サーバーレスでありながら、サーバーのような効率を実現：
    *   最適化された並行処理
    *   ゼロから無限へのスケーリング
    *   最小限のコールドスタート
    *   従量課金制
    *   Node.jsとPythonのフルサポート
    *   インフラ管理不要
    *   `waitUntil`を使用したバックグラウンドタスク

記事では、既存プロジェクトでFluidを有効にする方法と、詳細についてはブログとドキュメントを参照するよう呼びかけています。

---
# Faster login flow and new Google Sign-in support - Vercel

[View on Vercel Blog](https://vercel.com/changelog/faster-login-flow-and-new-google-sign-in-support)

## Vercel のログインフロー改善と Google Sign-in サポート追加の要約

Vercel は、ログイン体験を改善し、より高速なアクセスを実現しました。今回のアップデートでは、Google Sign-in (Google One Tap を含む) が完全にサポートされるようになりました。

*   **アカウントの連携:**
    *   既存の Vercel アカウントのメールアドレスと Google アカウントのメールアドレスが一致する場合、ログイン画面の Google ボタンから簡単にログインし、アカウントを自動的に連携できます。
    *   メールアドレスが一致しない場合は、ログイン後、アカウント設定から Google アカウントを手動で連携できます。

---
# Replace Specific Word From File With Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919285097/0/baeldung~Replace-Specific-Word-From-File-With-Java)

このBaeldungの記事では、Javaでファイル内の特定の単語を置換する方法について解説しています。

**記事の主な内容:**

*   **導入:** Javaの標準パッケージ（IO、NIO）とApache Commons IOライブラリを使用して、ファイル内の特定の単語を置換する方法を紹介。
*   **サンプルデータ:** 記事内で使用するサンプルデータとパラメータ（ファイルパス、出力ファイルパス、検証用出力）を定義。
*   **実装例:**
    *   **BufferedReader:** ファイルを1行ずつ読み込み、StringBuilderで全体の内容を構築し、Stringのreplace()メソッドで単語を置換。
    *   **Scanner:** BufferedReaderと同様の方法で、Scannerクラスを使用して単語を置換。
    *   **NIO2 Files:** Files.lines()メソッドで1行ずつ読み込み、map()関数で単語を置換。
    *   **Apache Commons IO:** FileUtils.readLines()メソッドでファイル全体をリストとして読み込み、StringBuilderとreplace()で単語を置換。
    *   **メモリ効率の良いアプローチ:** ファイルを1行ずつ読み込みながら、Files.writeString()で逐次的に書き込むことで、メモリ使用量を削減。
*   **比較:** 各アプローチのメリットとデメリットを比較。メモリ使用量とCPU使用量のトレードオフについて言及。
*   **結論:** 状況に応じて、CPU使用率とメモリ使用量のどちらを優先するかを考慮して、適切な方法を選択する。

記事では、各方法の実装例とJUnitテストケースも示されており、実際にコードを動かして試せるようになっています。また、記事で紹介されているコードはGitHubで公開されています。

---
# Amazon Aurora DSQLにSpring BootでアクセスするTips - IK.AM

[View on IK.AM](https://ik.am/entries/853)

## Amazon Aurora DSQLにSpring BootでアクセスするためのTips

この記事では、Spring BootからAmazon Aurora DSQLにアクセスする際の注意点と設定方法について解説しています。サンプルアプリのコードも公開されており、具体的な手順を確認できます。

**1. 依存ライブラリの追加**

*   DSQLにアクセスするには、PostgreSQL JDBCやSpring JDBCに加え、AWS SDKが必要です。DSQLのパスワード（トークン）をAWS SDKから動的に取得する必要があるためです。
*   Spring Cloud AWSを利用してAWS Credentialsを管理します。`io.awspring.cloud:spring-cloud-aws-starter`コア機能で十分です。
*   DSQLのトークン取得には`software.amazon.awssdk:dsql`を追加します。
*   AWS SSOを利用する場合は、`software.amazon.awssdk:sso`も追加します。
*   依存ライブラリのバージョンは、`io.awspring.cloud:spring-cloud-aws-dependencies`のBOMで管理します。

**2. DataSourceの設定**

*   コンソールでDSQLを作成し、パブリックエンドポイントを取得します。
*   `application.properties`で、JDBC URL、ユーザー名、リージョンを設定します。
    *   `sslmode=verify-full`を使用する場合は、JavaのTrustStoreが使用される`org.postgresql.ssl.DefaultJavaSSLFactory`が推奨されます。
*   DSQLのトークンを取得してDataSourceに設定するために、`DataSourceConfig`を作成します。
    *   DSQLのパスワードを定期的に更新するタスクのスケジューリング、楽観的排他制御エラーを`OptimisticLockingFailureException`に変換する`SQLExceptionTranslator`の登録を行います。

**3. DataSourceConfigの詳細**

*   `dsqlTokenSupplier`で、AWS SDKを用いてDSQLのトークンを取得します。
*   `dsqlDataSource`で、`HikariDataSource`を初期化し、取得したトークンをパスワードとして設定します。
*   `DsqlSQLExceptionTranslator`を作成し、楽観的排他制御エラー（SQLStateが"40001"）を`OptimisticLockingFailureException`に変換します。
*   `JdbcTransactionManager`に`dsqlSQLExceptionTranslator`を設定します。
*   `tokenRefresher`で、トークンを定期的に更新するタスクをスケジューリングします。HikariCPの`HikariConfigMXBean`と`HikariPoolMXBean`を利用して、パスワードの変更とコネクションの破棄を行います。
*   `DsqlExceptionOverride`を利用して、DSQL固有のエラーをHikariCPで適切に処理します。

**4. 楽観的排他制御エラーのリトライ**

*   楽観的排他制御エラーが発生した場合は、アプリケーション側でリトライする必要があります。
*   Spring Retryを使用し、`@Retryable`アノテーションで`OptimisticLockingFailureException`に対するリトライを設定します。
*   `@Transactional`と`@Retryable`を組み合わせる際は、トランザクションのネストに注意が必要です。外側の`@Transactional`でリトライを設定する必要があります。

**5. その他**

*   Aurora DSQL使用時の制約として、外部キー制約、シーケンス、extensionが利用できない点に注意が必要です。
*   主キーにはUUIDの使用が適しています。
*   既存のPostgreSQLアプリケーションをそのままDSQLに移行することは困難ですが、無料枠を活用して様々な機能を試すことができます。
*   負荷テストにはvegetaコマンドを使用し、楽観的排他制御エラーの発生を確認できます。
