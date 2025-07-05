# Sandbox now supports sudo and installing RPM packages - Vercel

[View on Vercel Blog](https://vercel.com/changelog/sandbox-now-supports-sudo-and-installing-rpm-packages)

## Vercel SandboxがsudoとRPMパッケージのインストールに対応 - 詳細な要約

Vercelは、開発環境を容易にするサービス「Vercel Sandbox」において、sudo（スーパーユーザー権限）のサポートを開始しました。これにより、Sandbox内で従来のLinuxシステムと同様に、ランタイム環境を完全に制御できるようになりました。

**主な変更点:**

*   **sudoの利用:**  `runCommand`メソッドを使用して、sudo権限でコマンドを実行できます。これにより、GoやPythonパッケージ、カスタムバイナリなどのシステム依存関係を、コード実行前にインストールすることが可能になります。
*   **簡単な設定:**  sudo設定は使いやすさを重視しており、PATHやHOMEが適切に設定され、カスタム環境変数も引き継がれます。
*   **利点:**  信頼できないコードを、適切な権限で隔離された環境で容易に実行できるようになり、複雑な回避策が不要になります。

Vercel Sandboxのsudo機能により、開発者はより柔軟で強力な環境構築を行い、様々なプロジェクトや依存関係に対応できるようになりました。詳細はVercelのドキュメントで確認できます。

---
# Correlate logs and traces with OpenTelemetry in Vercel Log Drains - Vercel

[View on Vercel Blog](https://vercel.com/changelog/correlate-logs-and-traces-with-opentelemetry-in-vercel-log-drains)

## VercelのログドレインでOpenTelemetryを使ってログとトレースを関連付ける方法 (要約)

Vercelは、OpenTelemetry (OTel) を利用してアプリケーションを計測している顧客向けに、ログと分散トレースの自動的な関連付けを開始しました。トレースは、アプリケーションのパフォーマンスと動作に関するデータを収集し、パフォーマンスの問題、エラー、その他の問題の原因を特定するのに役立ちます。

OTelを使用してリクエストがトレースされると、Vercelは関連するログにトレースIDとスパンIDを付加します。これにより、個々のログを特定のトレースまたはスパンに関連付けることができます。

この機能は、DatadogおよびDash0との統合を通じてログドレインを使用している顧客が利用できます。OTelをこれらの統合と使用している顧客は、特別な設定を行うことなく、ログとトレースの関連付けが自動的に行われます。

---
# Implementing the Core Services of Spring Authorization Server with Redis | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921158615/0/baeldung~Implementing-the-Core-Services-of-Spring-Authorization-Server-with-Redis)

## Spring Authorization ServerのコアサービスをRedisで実装する

本記事は、Spring Authorization ServerのコアサービスをRedisで実装する方法について解説しています。

**1. 概要**

Spring Authorization Serverのデフォルト実装では、RegisteredClient、Tokenストア、承認状態などのデータがインメモリに保存されます。これはデモやテストには便利ですが、水平スケーリング、再起動、その他のシナリオには適していません。

この問題を解決するために、SpringはRedisを使用したコアサービスの実装を提供しています。Redisを使用することで、トークンと登録済みクライアントの永続性と耐久性を実現できます。また、トークンの管理、認証サーバーのスケーリング、監視、イベントソーシング、複数のノード間でのトークンの取り消しなど、さまざまな利点も得られます。

本記事では、Spring Authorization ServiceのコアサービスをRedisで実装する方法を詳しく解説します。変更または追加する必要があるコンポーネントを説明し、実装に必要なコード例を示します。デモンストレーションには組み込みのRedisサーバーを使用しますが、コンテナベースまたはデプロイされたインスタンスでも同様に動作します。

**2. 基本プロジェクト**

デモコードは、既存のSpring Security OAuthプロジェクトを基に作成されています。このプロジェクトは、記事のリストを提供するREST APIです。ただし、エンドポイントは保護されており、認証と承認が必要です。本記事では、記事のサービス自体には変更を加えず、Authorization Server側の変更に焦点を当てます。

**2.1. プロジェクト構造**

基本プロジェクトは、次の3つのモジュールで構成されています。

*   Authorization Server: 記事リソースとクライアントサーバーの両方の認証ソースとして機能します。
*   Resource Server: Authorization Serverに対して認証を検証した後、記事のリストを提供します。
*   Client Server: ユーザーを認証し、Authorization Serverに対して承認されたリクエストを行うREST APIクライアントです。

本記事では、Authorization Serverにいくつかの変更を加えた上で、基本プロジェクトと同じコードを使用します。

**2.2. 依存関係**

まず、すべてのモジュールで使用するSpring依存関係の共通バージョンを定義します。すべてのモジュールは、spring-boot-starter-parentを親として使用する共通の親を使用します。

また、Authorization Serverで使用する組み込みRedisサーバーの依存関係も定義する必要があります。

**3. Spring Authorization ServerとRedis**

Spring Authorization Serverは、デフォルトでは、以下の情報をインメモリ実装で利用します。

*   RegisteredClientRepository
*   Tokenストア
*   承認許可
*   承認状態

ただし、長期的なストレージ、スケーラビリティ、監視要件がある場合は、Authorization Serverはデータベースに情報を保存できる必要があります。

Springは、Spring Authorization ServiceのコアサービスをRedisで実装するためのオプションを提供しています。これを行うには、次の手順を実行します。

1.  エンティティモデルを定義します。
2.  Spring Dataリポジトリを作成します。
3.  コアサービスを実装します。
4.  コアサービスを構成します。

**3.1. Authorization Serviceのエンティティモデル（Redis）**

まず、RegisteredClient、OAuth2Authorization、OAuth2AuthorizationConsentなどのコアコンポーネントを表すエンティティを定義する必要があります。OAuth2Authorizationクラスは、承認の種類に基づいて分解されます。作成するエンティティについて見てみましょう。

*   Registered Client Entity (OAuth2RegisteredClient) は、RegisteredClientからマッピングされた情報を永続化するために使用されます。
*   承認同意エンティティ (OAuth2UserConsent) は、OAuth2AuthorizationConsentからマッピングされた情報を永続化するために使用されます。
*   承認付与ベースエンティティ (OAuth2AuthorizationGrantAuthorization) は、OAuth2Authorizationにマッピングされ、各承認付与タイプに共通の属性を持つ基本エンティティです。
*   OAuth 2.0 の承認コード付与エンティティ (OAuth2AuthorizationCodeGrantAuthorization) は、OAuth 2.0 "authorization\_code" 付与タイプの追加の属性を定義します。
*   OpenID Connect 1.0 の承認コード付与エンティティ (OidcAuthorizationCodeGrantAuthorization) は、OpenID Connect 1.0 "authorization\_code" 付与タイプの追加の属性を定義します。
*   クライアント資格情報付与エンティティ (OAuth2ClientCredentialsGrantAuthorization) は、"client\_credentials" 付与タイプの追加の属性を定義します。
*   デバイスコード付与エンティティ (OAuth2DeviceCodeGrantAuthorization) は、"urn:ietf:params:oauth:grant-type:device\_code" 付与タイプの追加の属性を定義します。
*   トークン交換付与エンティティ (OAuth2TokenExchangeGrantAuthorization) は、"urn:ietf:params:oauth:grant-type:token-exchange" 付与タイプの追加の属性を定義します。

エンティティファイルのコード実装は、GitHubで確認できます。

**3.2. Authorization ServiceのSpring Dataリポジトリ（Redis）**

次に、Spring Authorization ServiceのコアサービスをRedisで実装するために必要な最小限のリポジトリを作成します。

*   Registered Client Repository (OAuth2RegisteredClientRepository) は、id または clientId によって OAuth2RegisteredClient を検索します。
*   承認同意リポジトリ (OAuth2UserConsentRepository) は、登録済みのクライアントIDとプリンシパル名によって OAuth2UserConsent レコードを検索して削除します。
*   承認付与リポジトリ (OAuth2AuthorizationGrantAuthorizationRepository) は、付与タイプに応じて、id、state、deviceCode などによって OAuth2AuthorizationGrantAuthorization を検索します。

リポジトリの実装コードは、GitHubで確認できます。

**3.3. Authorization Serviceのコアサービス（Redis）**

同様に、以前の Authorization Service のコアサービスに対応するサービスを構築します。これらのコアサービスは次のとおりです。

*   Model Mapper (ModelMapper) はコアサービスではありませんが、エンティティオブジェクトとドメインオブジェクト間のマッピングを行うために、次のすべてのコアサービスで使用します。
*   登録済みクライアントリポジトリ (RedisRegisteredClientRepository) は、OAuth2RegisteredClientRepository、OAuth2RegisteredClient、ModelMapper クラスを組み合わせて RegisteredClient オブジェクトを永続化します。
*   承認同意サービス (RedisOAuth2AuthorizationConsentService) は、OAuth2UserConsentRepository、OAuth2UserConsent、ModelMapper クラスを組み合わせて OAuth2AuthorizationConsent オブジェクトを永続化します。
*   承認サービス (RedisOAuth2AuthorizationService) は、OAuth2AuthorizationGrantAuthorizationRepository、OAuth2AuthorizationGrantAuthorization、ModelMapper クラスを組み合わせて OAuth2Authorization オブジェクトを永続化します。

サービスの実装コードは、GitHubで確認できます。

**3.4. Authorization ServiceのSpring構成（Redis）**

最後に、Spring Authorization Serviceのコアサービスを有効にするSpring構成ファイルを作成する必要があります。

SecurityConfigクラスには、基本プロジェクトと同じBeanを含める必要があります。デモンストレーションで後で使用するユーザー資格情報は、ユーザー名「admin」、パスワード「password」です。Redisの構成を見てみましょう。

*   @PostConstruct および @PreDestroy アノテーションは、組み込み Redis サーバーを開始および停止するために使用されます。
*   JedisConnectionFactory および RedisTemplate Bean は、Redis に接続するために使用されます。
*   RedisCustomConversions Bean は、Redis への永続化に必要なオブジェクトからハッシュへの変換に必要です。
*   RedisRegisteredClientRepository は、登録済みのクライアントリポジトリ Bean を設定し、クライアントを登録するために使用されます（次のセクションで説明します）。
*   RedisOAuth2AuthorizationService は、適切なリポジトリを設定して、authorizationService Bean として登録されます。
*   同様に、RedisOAuth2AuthorizationConsentService は、authorizationConsentService Bean として登録されます。

**3.5. 登録済みクライアント**

デフォルトのインメモリ永続化を使用する Spring OAuth Security を使用する場合、プロパティを使用して登録済みクライアントを定義できます。これは、OAuth2AuthorizationServerProperties クラスを使用する、バージョン 3.1.0 以降の Spring Authorization Service の組み込み機能です。

しかし、Redis で Spring Authorization Service のコアサービスを実装しているため、カスタム RegisteredClientRepository を使用するため、この場合はデフォルトではサポートされていません。

これには、OAuth2AuthorizationServerProperties クラスを使用し、カスタムリポジトリへのマッピングとストレージを自分で行う、ハードコーディングされた値を直接使用するなど、さまざまな方法があります。今回のチュートリアルでは、ハードコーディングされた値を使用し、RedisRegisteredClientRepository に RegisteredClient を直接保存するという、より複雑でない方法を採用します（前のセクションで示しました）。

コードを使用して RegisteredClient を作成しましょう。

この構成は、基本プロジェクトのプロパティベースの登録済みクライアントのコピーであるため、よく知られているはずです。4 つの承認付与タイプすべてに対してエンティティを作成したことに注意してください。

**4. Authorization Serviceのデモンストレーション（Redis）**

記事リソースへのアクセス方法を見てみましょう。まず、3 つのモジュールすべてを起動する必要があります。この場合、IntelliJ を使用します。

次に、http://127.0.0.1:8080/articles に移動します。このページはログインページにリダイレクトされます。

このページで、ユーザーは articles-client-authorization-code または articles-client-oidc をクリックして認証できます。どちらの場合も、ユーザー名とパスワード ("admin", "password"、UserDetailsService Bean で設定されているとおり) を入力する必要があります。

このようにして、Authorization Server に対して認証を行い、articles-client へのアクセス権を取得します。ユーザーが最初のオプションを選択して認証する場合、ログインに成功するとこのページにリダイレクトされ、2 番目のリンクをクリックして記事ページに移動する必要があります。ユーザーが 2 番目のオプションを選択した場合、すべてが自動的に行われます。

画像では、ログインに成功した後、ユーザーがリソースにアクセスできることがわかります。ブラウザーに追加された Cookie も確認できます。

もう 1 つの注意点として、Spring Authorization Service のコアサービスを Redis で実装したため、Redis サーバーにライブセッションなどの情報があることを確認できます。

oauth2\_registered\_client オブジェクトは、ログイン前に Redis に存在していた唯一のオブジェクトでした。残りは、ログインに成功した後に保存されるすべてのデータです。

**5. 結論**

本記事では、Spring Authorization Service のコアサービスと Redis について説明しました。デフォルトのインメモリストレージから Redis を使用するように切り替えるために変更する必要があるコンポーネントを確認しました。最後に、認可されたユーザーがリソースにアクセスするための認証プロセスと、Authorization Server がトークンを Redis に保存する方法について説明しました。

いつものように、例で使用されているすべてのソースコードは、GitHub で入手できます。

---
# Using Sequences in the H2 Database | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921146849/0/baeldung~Using-Sequences-in-the-H-Database)

このBaeldungの記事は、H2データベースでシーケンスを使用する方法に焦点を当てています。

**概要:**

*   **シーケンスの重要性:** 効率性とスケーラビリティのために、本番環境ではシーケンスベースの主キー生成が使用されることが多い。開発やテストではH2などのインメモリデータベースが使用されるが、記事ではH2でのシーケンスの使用方法を解説している。
*   **H2シーケンスの基本:** H2データベースでシーケンスを作成、取得、削除するためのSQLステートメント（CREATE SEQUENCE、SELECT NEXT VALUE FOR、DROP SEQUENCE）を紹介。デフォルトのオプション（初期値1、インクリメント1）に加えて、START WITHとINCREMENT BYを使用し、初期値とインクリメント値をカスタマイズする方法を説明。
*   **JPAエンティティでのシーケンスの使用:** @GeneratedValueとGenerationType.SEQUENCEを使用して、JPAエンティティの主キーをシーケンスで生成する方法を解説。allocationSize = 1の使用についても触れている。
*   **Oracleとの互換性:** H2をOracleのSQLステートメントと互換性を持たせるために、JDBC URLにMODE=Oracleオプションを設定する方法を紹介。これにより、Oracleスタイルのシーケンスクエリ（SELECT <seq_name>.nextval FROM dual）がH2で動作するようになる。MODE=Oracleの場合、シーケンス値はLongではなくBigDecimalにマッピングされる点にも注意。
*   **Spring Bootテストでの実装:** Spring Bootテストを使用して、シーケンスの作成、値の取得、削除、およびJPAエンティティでの使用を検証する例を提供。

記事は、H2シーケンスをSpring Bootアプリケーションで使用し、本番データベースとの互換性を確保するための実践的な情報を提供している。

---
# How to Use Apache Camel ProducerTemplate With Spring Boot | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921146852/0/baeldung~How-to-Use-Apache-Camel-ProducerTemplate-With-Spring-Boot)

## Apache Camel ProducerTemplate を Spring Boot で使用する方法

このチュートリアルでは、Apache Camel の ProducerTemplate を Spring Boot アプリケーションで使用する方法について解説しています。

**1. ProducerTemplate の概要**

*   ProducerTemplate は、Spring Boot エンドポイントから Apache Camel ルートにメッセージを送信するためのインターフェースです。
*   JdbcTemplate と同様に、Camel ルートとのやり取りを可能にします。
*   主なメソッド:
    *   `sendBody()`: InOnly メッセージを送信し、応答を期待しません。
    *   `requestBody()`: InOut メッセージを送信し、Camel ルートからの応答を受け取ります。
*   これらのメソッドにより、inOnly および inOut メッセージングパターンを実装できます。

**2. Maven 依存関係**

Spring Boot アプリケーションで ProducerTemplate を使用するには、`pom.xml` に以下の依存関係を追加します。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <version>3.5.3</version>
</dependency>

<dependency>
    <groupId>org.apache.camel.springboot</groupId>
    <artifactId>camel-spring-boot-starter</artifactId>
    <version>4.12.0</version>
</dependency>
```

*   `spring-boot-starter` は Spring MVC および RESTful アプリケーションを記述するためのクラスを提供します。
*   `camel-spring-boot-starter` は Spring Boot とのシームレスな統合を提供します。

**3. Camel ルートの作成**

Camel ルートを作成するには、`RouteBuilder` を継承したクラスを作成し、 `@Component` アノテーションを付与します。 `configure()` メソッド内でルートを定義します。

```java
@Component
class CamelRoute extends RouteBuilder {
    @Override
    public void configure() {
        from("direct:start").log("Received: ${body}")
          .transform(simple("Hello ${body}"));
        from("direct:fileRoute").to("file://output?fileName=output.txt&fileExist=Append");
        from("direct:beanRoute").bean(ProcessingBean.class, "process");
    }

    @Bean
    public ProcessingBean processingBean() {
        return new ProcessingBean();
    }
}
```

*   この例では、3つのルートを定義しています。
    *   `direct:start`: メッセージを受け取り、ログに出力し、メッセージを変換します。
    *   `direct:fileRoute`: メッセージをファイルに追加します。
    *   `direct:beanRoute`: メッセージを Bean で処理します。

**4. コントローラーとテストクラス**

*   `ProducerTemplateController` クラスを作成し、`ProducerTemplate` を注入します。

```java
@RestController
public class ProducerTemplateController {
    @Autowired
    private ProducerTemplate producerTemplate;
}
```

*   `sendBody()` および `requestBody()` メソッドを使用して、inOnly および inOut メッセージをそれぞれ送信できます。

*   テストクラスを作成し、`@CamelSpringBootTest`、`@SpringBootTest`、`@DirtiesContext` アノテーションを付与します。

**5. エンドポイントとテストケース**

*   コントローラーに複数のエンドポイントを作成し、ProducerTemplate を使用して Camel ルートにメッセージを送信します。
    *   `send/simple/{message}`:  `direct:start` ルートにメッセージを送信し、変換されたメッセージを返します。
    *   `send/file/{message}`:  `direct:fileRoute` ルートにメッセージを送信し、ファイルを更新します (inOnly)。
    *   `send/bean/{message}`:  `direct:beanRoute` ルートにメッセージを送信し、Bean で処理されたメッセージを返します。

*   各エンドポイントに対応するテストケースを作成し、期待される応答を確認します。

**6. まとめ**

このチュートリアルでは、Spring Boot アプリケーションで ProducerTemplate を使用して、REST エンドポイントから Camel ルートに inOnly および inOut メッセージを送信する方法を学びました。

**補足:**

*   記事内には、Azure Container Apps や Orkes などの他のテクノロジーについても言及がありますが、本記事の主題ではありません。
*   記事のソースコードは GitHub で公開されています。

---
# A Guide to Spring gRPC Project | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921146300/0/baeldung~A-Guide-to-Spring-gRPC-Project)

## Spring gRPCプロジェクトのガイド

このチュートリアルでは、Spring gRPCプロジェクトを使用してgRPCサーバーを構築する基本的な方法を解説しています。Spring gRPCは、Springの利点を活かしながら、gRPCサーバー、メッセージ、クライアントを容易に構築できるフレームワークです。

**1. 概要**

このガイドでは、SpringアプリケーションにgRPCサーバーを組み込む方法を説明します。Spring gRPCプロジェクトを利用することで、迅速な開発や依存性注入など、Springのメリットを享受できます。

**2. プロジェクトのセットアップ**

*   Spring Initializrを使用して、Spring gRPC依存関係を選択したプロジェクトを作成します。
*   既存のアプリケーションにgRPCサーバーを追加する場合は、以下の依存関係を追加します。
    *   `io.grpc:grpc-services:1.72.0`
    *   `org.springframework.grpc:spring-grpc-spring-boot-starter:0.8.0`
*   Spring gRPCは、Spring Boot 3.4.xおよび3.5.xをサポートしています。
*   Protoファイルからクラスとインターフェースを生成するためのビルドプラグイン（例: `protobuf-maven-plugin`）が必要です。

**3. Protoファイルの定義**

*   Protoファイル（例: `calculator.proto`）を作成し、gRPCサービスとメッセージを定義します。
*   `syntax = "proto3";`を使用してプロトコルバッファ言語のバージョンを指定します。
*   オプション（例: `java_multiple_files`, `java_package`, `java_outer_classname`）を使用して、生成されるJavaコードの構造を制御します。
*   リクエストメッセージとレスポンスメッセージを定義します（例: `Request`, `Response`）。
*   サービスを定義します（例: `Calculator`サービス）。

**4. Protoファイルからのサービスとメッセージインターフェースの生成**

*   `mvnw clean package`コマンドを実行して、Protoファイルから必要なソースファイルを生成します。
*   生成されたコードには、メッセージの具体的な実装クラス（例: `Request`, `Response`）と、サービス用の抽象クラス（例: `CalculatorGrpc.CalculatorImplBase`）が含まれます。

**5. 具象サービスの実装**

*   生成されたベースクラスを拡張し、`Multiply`メソッドなどのメソッドを実装します。
*   `@Service`アノテーションを使用してサービスクラス（例: `GrpcCalculatorService`）を作成します。
*   `multiply`メソッドをオーバーライドし、リクエストオブジェクトから計算を実行してレスポンスを返します。

**6. サービスの実行とテスト**

*   IDEのメインメソッドまたはコマンドライン（`mvnw spring-boot:run`）を使用してサービスを実行します。
*   `grpcurl`などのgRPCツールを使用して、サービスをテストします。
*   コマンドラインからリクエストを送信し、結果を確認します。

**結論**

Spring gRPCプロジェクトを使用すると、少ないコードでgRPCサーバーを迅速に構築し、Springエコシステムに完全に統合できます。このガイドでは、Spring gRPCの基本的な使用法を説明し、Protoファイルの定義、サービスの生成、実装、テストの手順を示しました。

---
# 2025-07-04のJS: ECMAScript 2025、Rspack 1.4、Deno 2.4、Bundle Sizeの改善 - JSer.info

[View on jser.info](https://jser.info/2025/07/04/ecmascript-2025-rspack-1.4-deno-2.4-bundle-size/)

## JSer.info #740 要約

2024年7月4日のJSer.infoの記事では、ECMAScript 2025の正式リリース、Rspack 1.4、Deno 2.4、バンドルサイズの改善に関する情報がまとめられています。

**ECMAScript 2025**

*   Ecma Internationalの総会で承認され、正式リリースされました。
*   主な新機能として、Iterator helpers、Set.prototypeメソッド、JSON modulesインポート、RegExp.escapeメソッド、正規表現修飾子フラグ、Promise.tryメソッド、Float16Arrayなどが追加されました。

**Rspack 1.4**

*   Wasmを利用したブラウザ環境での実行サポートが追加され、バンドルサイズの改善が図られました。
*   デフォルトでIncremental buildが有効化され、実験的なCssChunkingPluginの追加、MultiCompilerでのlazy compilationサポート、Perfettoベースのパフォーマンス分析ツールの追加などが行われました。

**Deno 2.4**

*   以前に廃止されたdeno bundleコマンドが復活しました。
*   テキストのbyteインポート機能やOpenTelemetryの安定化が行われました。
*   --preloadフラグの追加、deno updateコマンドの追加、package.jsonのconditional exportsサポートなど、開発体験の向上が図られました。

**その他**

*   **Chrome 139 beta:** CSS関連の機能改善（var()/attr()の短絡評価、caret-animation/corner-shape/CSS Custom Functionsのサポートなど）、JSON MIME typeのサポート、Origin trialsでの機能追加など。
*   **StyleX v0.14.0:** viewTransitionClass APIの追加、lintのvalidImportsオプション追加、styleResolutionオプションのデフォルト値変更（application-orderからproperty-specificityへ）。
*   **Electron 37.0:** Chromium、Node.js、V8のアップデート、window.openの機能拡張、Node.jsの--experimental-network-inspectionサポート、unhandled rejectionの動作変更など。
*   **Recharts 3:** Custom componentsのサポート、デフォルトでのaccessibilityLayerの有効化など。
*   **logtape:** 依存関係のない、構造化ログをサポートするロガーライブラリ。Node.js、Deno、ブラウザ、Edge Functionsで動作し、pinoやwinstonとのIntegrationも可能。
*   **CSS if()関数:** if()関数を使ったプロパティの値に対する条件分岐の方法について。
*   **CKEditorのバンドルサイズ最適化:** tree shakingの問題解決（/* #\_\_PURE\_\_ */コメントの活用、ES2022へのtarget変更、sideEffectsフラグの設定など）とSondaを使ったバンドル分析。
*   **React useOptimistic hooks:** useOptimistic hooksの使い方とsetStateとの違い。
*   **tz-lookup:** 緯度経度からタイムゾーンを検索するJavaScriptライブラリ。
