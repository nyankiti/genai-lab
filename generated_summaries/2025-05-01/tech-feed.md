# Checks API support added for Marketplace integration providers - Vercel

[View on Vercel Blog](https://vercel.com/changelog/checks-api-support-added-for-marketplace-integration-providers)

## Vercel Marketplace統合プロバイダ向けにChecks APIサポートが追加

この記事は、Vercel Marketplaceのネイティブ統合を構築するプロバイダが、より高度な機能を提供できるよう、Checks APIのサポートが追加されたことを伝えています。

**主なポイント:**

*   VercelのChecks APIを使用することで、デプロイ後にカスタムテストやアサーションを定義し、実行できるようになりました。
*   テスト結果は、Vercelダッシュボードに直接表示され、開発者が問題に対処するためのアクションを促します。
*   テストプロバイダは、信頼性テスト（API可用性、ランタイムエラーなど）、パフォーマンステスト（応答時間、負荷シミュレーションなど）、Web Vitals（レイアウトシフトなど）などのチェックを実装できます。
*   統合を構築する際のベストプラクティスとして、設定を最小限に抑え、導入から最初の結果表示までをガイドし、明確で実行可能な結果をダッシュボードに表示し、上級者向けにチェックの拡張やカスタマイズ方法をドキュメント化することが推奨されています。
*   詳細については、Checks APIのドキュメントを参照してください。

**利点:**

*   開発者は、ワークフローの早い段階で実際の問題を検出できます。
*   統合プロバイダは、より深い機能を提供し、ユーザーエクスペリエンスを向上させることができます。

---
# How to Fix Exception: Cannot Load Driver Class: com.mysql.jdbc.driver in Spring Boot | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917543822/0/baeldung~How-to-Fix-Exception-Cannot-Load-Driver-Class-commysqljdbcdriver-in-Spring-Boot)

## Spring Bootで「Cannot load driver class: com.mysql.jdbc.Driver」エラーを修正する方法

このチュートリアルでは、Spring BootでMySQLデータベースに接続する際に発生する「Cannot load driver class: com.mysql.jdbc.Driver」エラーの修正方法について解説します。

**1. エラーの原因**

このエラーは、古いバージョンのMySQL JDBCドライバクラスを使用していることが原因です。以前のMySQL JDBCドライバ（Connector/J）では、`com.mysql.jdbc.Driver` が使用されていましたが、MySQL Connector/J 8.0以降ではこのクラスは非推奨となり削除されました。新しいドライバクラスは `com.mysql.cj.jdbc.Driver` です。古いクラス名を使用すると、新しいバージョンのドライバでは `ClassNotFoundException` が発生します。

**2. 修正方法**

エラーを修正するには、Spring Bootの設定とプロジェクトの依存関係を更新する必要があります。

**2.1. 正しいドライバクラスの使用**

`application.properties` または `application.yml` ファイルで古いドライバクラスを新しいクラスに置き換えます。

*   **application.propertiesの場合:**

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/mydb
    spring.datasource.username=root
    spring.datasource.password=secret
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    ```
*   **application.ymlの場合:**

    ```yaml
    spring:
      datasource:
        url: jdbc:mysql://localhost:3306/mydb
        username: root
        password: secret
        driver-class-name: com.mysql.cj.jdbc.Driver
    ```

    Spring Bootは、クラスパスからドライバクラスを自動的に検出することもできます。正しいバージョンのMySQLドライバが存在する場合は、`driver-class-name`プロパティを省略することも可能です。

**2.2. 依存関係の更新**

最新の安定版のMySQL JDBCドライバをプロジェクトで使用します。

*   **Mavenの場合:**

    ```xml
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>9.2.0</version>
    </dependency>
    ```
*   **Gradleの場合:**

    ```groovy
    implementation("com.mysql:mysql-connector-j:9.2.0")
    ```

    古いバージョンのドライバを使用すると、Spring BootやJavaの最近のバージョンとの互換性の問題が発生する可能性があります。

**3. テスト**

設定と依存関係を更新した後、アプリケーションがデータベースに接続できることを確認するためにテストを行います。

```java
@SpringBootTest
class LoadDriverLiveTest {
    @Autowired
    private DataSource dataSource;

    @Test
    void whenConnectingToDatabase_thenConnectionShouldBeValid() throws Exception {
        try (Connection connection = dataSource.getConnection()) {
            assertNotNull(connection);
        }
    }
}
```

テストが成功すれば、Spring Bootがドライバクラスを正常にロードし、MySQLデータベースへの接続を確立したことを確認できます。

**4. まとめ**

この記事では、Spring Bootで「Cannot load driver class: com.mysql.jdbc.Driver」エラーが発生する原因と、ドライバクラス名とプロジェクトの依存関係を更新することで修正する方法を説明しました。JDBCをSpring Bootで使用する場合は、依存関係と設定間の互換性を確認することが重要です。詳細については、Spring Bootの公式ドキュメントとMySQL Connector/Jのリリースノートを参照してください。

---
# Mastering Context in MapStruct: Leveraging @Context for Complex Source Mappings | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917542634/0/baeldung~Mastering-Context-in-MapStruct-Leveraging-Context-for-Complex-Source-Mappings)

## MapStructにおけるコンテキストの活用：複雑なソースマッピングのための@Contextアノテーションの活用

### 要約

この記事では、MapStructライブラリにおける`@Context`アノテーションの活用方法について解説しています。`@Context`は、MapStructで複雑なソースマッピングを行う際に、外部ソースやサービスからターゲットPOJOの属性を埋めたり、状態変数を渡したりするのに役立ちます。

1.  **@Contextの概要:**

    *   単純なPOJO間のマッピングでは、`@Mapping`アノテーションのソースとターゲットの属性で十分です。
    *   しかし、ターゲット属性の値を決定するために、カスタムサービスに引数を渡すなど、より詳細な制御が必要な場合があります。
    *   この場合、Mapperクラスの`@Context`属性が役立ちます。

2.  **マッピングのユースケース:**

    *   記事では、証券取引アプリケーションを例に、`@Context`がどのように役立つかを説明しています。
    *   取引リクエストを処理する際、元のリクエストにはない情報（セキュリティIDに対応する標準IDなど）を外部のセキュリティルックアップサービスから取得する必要があります。
    *   この外部サービスへの呼び出しを行うために、`@Context`を使用します。

3.  **@BeforeMappingアノテーションとの連携:**

    *   `@BeforeMapping`メソッドと`@Mapping#expression`属性で宣言されたJava式でコンテキスト値を利用できます。
    *   `@BeforeMapping`メソッドは、マッピングの実装開始時に呼び出され、初期化処理などを行うのに適しています。
    *   例として、`@BeforeMapping`メソッドでセキュリティサービスを初期化し、`@Mapping#expression`属性でセキュリティサービスのメソッドを呼び出して、ターゲット属性の値を設定する例が示されています。

4.  **@AfterMappingアノテーションとの連携:**

    *   初期のマッピングが完了した後、外部コンテキストに基づいて属性を埋めたい場合、`@AfterMapping`アノテーションを使用できます。
    *   `@AfterMapping`メソッドは、マッピング操作の終盤に呼び出されます。
    *   `@AfterMapping`メソッドは、`@Context`引数に加えて、`@MappingTarget`アノテーションを使用してソースオブジェクトにアクセスできます。

5.  **@ObjectFactoryアノテーションとの連携:**

    *   `@ObjectFactory`アノテーションを使用すると、マッピング操作を詳細にカスタマイズできます。
    *   `@ObjectFactory`で注釈されたメソッドでも、コンテキスト引数を利用できます。
    *   ターゲットオブジェクトを作成するファクトリクラスを定義し、`@Mapper#uses`属性でそのクラスを指定します。
    *   これにより、生成された実装は、`TradeDto`のコンストラクタではなく、ファクトリメソッドを呼び出してターゲットオブジェクトを作成します。

6.  **結論:**

    *   `@Context`アノテーションを使用することで、外部コンテキストに依存するターゲット属性のマッピングを制御できます。
    *   `@AfterMapping`、`@BeforeMapping`、`@ObjectFactory`アノテーション、`@Mapping#expression`属性などの既存の機能と連携して、マッピング操作を柔軟にカスタマイズできます。

記事では、これらの概念を理解するためのコード例とテストも提供されています。
---
# Structuring Ktor Projects Using Domain-Driven Design (DDD) Concepts: A Step-by-Step Guide With a Minimalistic CRM | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/04/domain-driven-design-guide/)

このガイドは、Ktorプロジェクトをドメイン駆動設計 (DDD) の概念を用いて構造化する方法を、ミニマルなCRMシステムを構築する手順を通して説明しています。Ktorは柔軟性の高いフレームワークであり、Spring Bootのような意見の強いフレームワークとは異なり、事前に定義されたプロジェクト構造を強制しません。このため、Ktor初心者にとって、スケーラビリティ、保守性、長期的な成長を考慮してプロジェクトをどのように構造化すべきかは課題となる場合があります。

このガイドでは、その課題に応えるため、ミニマルなCRMシステムを段階的に構築します。まず、単純なKtorアプリケーションから始め、DDDと機能ベースのモジュール化に基づいた、適切に構造化され、スケーラブルなプロジェクトへと進化させていきます。

**アプローチ:**

1.  **ドメインモデルの定義:** CRMのコアドメインモデルを定義します。DDDでは、エンティティ、バリューオブジェクト、アグリゲートを中心にドメイン層を構築します。
    *   **エンティティ:**
        *   Customer: 顧客を表します。
        *   Contact: 顧客に連絡を取る手段を表します。
        *   Note: ビジネス情報ややり取りを表します。
        *   Reminder: 連絡先に関連するアラートを表します。
    *   **バリューオブジェクト:** 不変であり、属性によってのみ定義されます。識別子や複雑な属性をカプセル化します（例：Emailオブジェクト）。
    *   **アグリゲート:** ビジネスルールを適用する際に単一のユニットとして扱われるドメインオブジェクトの集まり。Customerがアグリゲートルートとなり、その関連するContactとNoteをカプセル化します。Reminderは独立したアグリゲートとなります。
2.  **ビジネス動作のカプセル化:** リポジトリ、ドメインサービス、ドメインイベントを用いて、CRMのユースケースを実装し、関心の分離を維持します。
    *   **リポジトリ:** ドメインモデルとデータ永続化メカニズム（データベースなど）の間の抽象化レイヤー。
    *   **ドメインサービス:** エンティティやバリューオブジェクトに自然に属さないビジネスロジックをカプセル化します。
    *   **ドメインイベント:** ドメイン内で何らかの重要な出来事が発生したことを示すメッセージ。
        *   EventPublisherインタフェースを使用してイベントを公開できます。
3.  **プレゼンテーション層の構築（Ktor）:**
    *   REST APIをプレゼンテーション層として公開するために、サービスをWebサーバーに接続します。
    *   ドメインサブパッケージに、対応するドメインオブジェクトとアグリゲートのサブルートを拡張関数として定義します。

**まとめ:**

この記事では、エンティティ、バリューオブジェクト、リポジトリ、ドメインサービスなどの主要なDDDの概念を紹介し、Ktorプロジェクトへの適用方法を示しました。シンプルなCRMシステムを構築し、コードを明確に定義されたドメインサブパッケージ（顧客、リマインダー）に整理し、専用のバリュークラスとモジュール化されたルートを使用しました。このアプローチにより、Ktorアプリケーションの明確でスケーラブルで保守性の高いコードベースを作成できます。
