# How Fern delivers 6M+ monthly views and 80% faster docs with Vercel - Vercel

[View on Vercel Blog](https://vercel.com/blog/how-fern-delivers-6m-monthly-views-and-80-faster-docs-with-vercel)

## FernがVercelを利用して、月間600万以上のビューと80%の高速化を実現

この記事では、ドキュメントプロバイダーであるFernが、VercelとNext.jsを活用して、効率的なマルチテナント、開発サイクルの高速化、そして50〜80%の高速なロード時間をどのように実現しているかを紹介しています。

**主なポイント:**

*   **マルチテナントプラットフォームの構築:** Fernは、WebflowやElevenLabsなどの企業が、APIドキュメントを単一のNext.jsアプリケーションから作成、カスタマイズ、提供できるようにするマルチテナントプラットフォームです。
*   **Vercelの活用によるパフォーマンス向上:** Vercelのインフラストラクチャを利用することで、自動キャッシュ、最適化されたコンテンツ配信、瞬時のスケーラビリティを実現し、開発サイクルを高速に保っています。
*   **Next.js App Routerへの移行による高速化:** Next.js App Routerへの移行により、ページロード時間が50〜80%短縮され、ナビゲーション速度とLighthouseスコアが向上しました。
*   **アーキテクチャ:** 単一のNext.jsアプリをVercel上で実行し、Vercel Middlewareを使用してトラフィックを動的にルーティングすることで、シンプルで効率的なインフラストラクチャを実現しています。
*   **デプロイの最適化:**  Vercel Functionsへの移行により、デプロイ時間が短縮され、プレビュー環境でのテストが可能になりました。これにより、フィードバックループを短縮し、継続的なイテレーションを可能にしています。
*   **エンタープライズレベルのパフォーマンス:**  VercelのCDNを活用することで、グローバルなコンテンツ配信と自動キャッシュ、Incremental Static Regeneration (ISR)により、高速なロード時間を実現しています。
*   **Next.js App Routerの利点:** Next.js App Routerへの移行により、ロード時間の高速化、Time to First Byte (TTFB)の高速化、よりスムーズなナビゲーションが可能になりました。
*   **成長への対応:** Fernは月間63%の成長を遂げており、VercelのインフラストラクチャとNext.js App Routerを活用することで、高速、カスタマイズ性、可用性を求める企業向けのドキュメントプラットフォームとして成長を続けています。

この記事は、FernがVercelのインフラストラクチャ、Next.js App Router、エッジキャッシュを利用して、複雑なインフラストラクチャ管理なしに、高性能なマルチテナントドキュメントエクスペリエンスを提供していることを強調しています。

---
# Java Weekly, Issue 594 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918370220/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 594 | Baeldung 要約

**概要:**

Baeldungが発行するJava Weeklyの第594号では、Javaに関する様々な最新情報がまとめられています。2025年5月9日に更新されました。

**主要なトピック:**

1.  **SpringとJava:**
    *   Spring AIとOllamaを使用したローカルAIエージェントの構築（プライバシー重視、費用や制限なし）。
    *   JBang Jashライブラリによる外部プロセス実行の簡素化（fluent API）。
    *   その他、JEP 505（構造化同時実行）の進捗、MockMvcTesterによるJSONレスポンスの単体テスト、モデルコンテキストプロトコルの採用、AI搭載のフォームフィラー開発、JEP 512（コンパクトソースファイルとインスタンスmainメソッド）の検討、KotlinのWeb開発における現状と展望。
    *   関連ウェビナーやプレゼンテーションの情報。
    *   Hibernate Search 8.0.0.Beta1、Spring AI 1.0.0 RC1、Quarkus 3.22.2、Jhipster v8.11.0、jetty-12.0.21、vert.x 5.0.0.CR8、Elasticsearch 9.0.1、Helidon 4.2.2といったライブラリのアップグレード情報。

2.  **技術と考察:**
    *   AIエージェントエコシステムのセキュリティを向上させるための登録ワークフローの紹介。
    *   その他、LLMを使用した関数呼び出し、QuarkusでのAgentic AI、サーバーレスデータベースの構築、Cloudflare Tunnel for Home Assistant、コーディングアシスタントによるサプライチェーンへの脅威。

3.  **今週のおすすめ:**
    *   Baeldung ProとAll Accessの新しい料金ページ（25%オフ）。

---
# How to Use Maps in Protobuf | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918351698/0/baeldung~How-to-Use-Maps-in-Protobuf)

## Protobufでのマップの使用方法

この記事では、Protocol Buffers（protobuf）でマップを効率的に使用する方法について解説しています。protobufは、JSONよりも高速で効率的なデータシリアル化方法であり、型付きの構造化データを扱う場合に特に適しています。

**1. 導入**

*   protobufは、構造化データをシリアル化するための高速かつ効率的な方法です。JSONの代替として、コンパクトで高性能です。
*   protobufは、複数の言語向けに最適化されたコードを生成します。
*   .protoファイルでデータ構造を定義し、生成されたコードを使用してデータを送受信します。
*   文字列、整数、ブール値、浮動小数点数などの一般的な型をサポートし、リストやマップとも連携して、複雑なデータを管理します。

**2. マップの理解**

*   マップは、辞書のようなキーと値のデータ構造です。
*   各キーは特定の値を指し、高速な検索を可能にします。
*   DNSシステムのようなもので、各ドメイン名がIPアドレスを指します。
*   Protobuf 3は、マップを直接サポートしています。

**2.1 マップとは？**

*   キーと値のデータ構造

**2.2 マップの構文**

*   `map<key_type, value_type>` の形式でフィールドを定義します。
*   キーは文字列、int32、boolなどのスカラー型である必要があります。
*   値は、スカラー、enum、または別のメッセージなど、有効なprotobuf型にできます。

**3. マップの実装**

*   食品配達システムを例に、各レストランが独自のメニューを持つように実装します。

**3.1 コードベースでのProtobufの設定**

*   Protocコンパイラをビルドライフサイクルに統合します。
*   `protobuf-maven-plugin`を`pom.xml`ファイルに設定します。
*   コンパイラに加えて、protobufランタイムも必要です。

**3.2 マップフィールドを持つメッセージの定義**

*   マップを含むシンプルなprotobufメッセージを定義します。
*   レストラン名とメニューをマップとして格納します。メニューは、食品アイテムとその価格をマップとして格納します。

```protobuf
syntax = "proto3"

message Menu {
    map<string, float> items = 1;
}

message FoodDelivery {
    map<string, Menu> restaurants = 1;
}
```

**3.3 マップへのデータの入力**

*   protobufの `map<k, v>` は、JavaのHashMapのように動作します。
*   レストラン名とメニューを格納します。

```java
Food.Menu pizzaMenu = Food.Menu.newBuilder()
  .putItems("Margherita", 12.99f)
  .putItems("Pepperoni", 14.99f)
  .build();

Food.Menu sushiMenu = Food.Menu.newBuilder()
  .putItems("Salmon Roll", 10.50f)
  .putItems("Tuna Roll", 12.33f)
  .build();

Food.FoodDelivery.Builder foodData = Food.FoodDelivery.newBuilder();
foodData.putRestaurants("Pizza Place", pizzaMenu);
foodData.putRestaurants("Sushi Place", sushiMenu);

return foodData.build();
```

**4. バイナリファイルからのデータの保存と取得**

*   protobufマップデータをバイナリファイルにシリアル化（保存）し、逆シリアル化（読み込み）します。

**4.1 Protobufマップのバイナリファイルへのシリアル化**

*   構造化データをコンパクトなバイナリ形式に変換し、軽量で高速な保存またはネットワーク送信を可能にします。
*   ファイルパスを定義し、シリアル化ロジックを実装します。

```java
private final String FILE_PATH = "src/main/resources/foodfile.bin";

public void serializeToFile(Food.FoodDelivery delivery) {
    try (FileOutputStream fos = new FileOutputStream(FILE_PATH)) {
        delivery.writeTo(fos);
        logger.info("Successfully wrote to the file.");
    } catch (IOException ioe) {
        logger.warning("Error serializing the Map or writing the file");
    }
}
```

**4.2 バイナリファイルのProtobufマップへの逆シリアル化**

*   バイナリファイルをProtobufマップに逆シリアル化します。
*   入力ストリームを開き、Protobufコンパイラによって生成されたメソッドを使用して保存されたデータを解析します。

```java
public Food.FoodDelivery deserializeFromFile(Food.FoodDelivery delivery) {
    try (FileInputStream fis = new FileInputStream(FILE_PATH)) {
        return Food.FoodDelivery.parseFrom(fis);
    } catch (FileNotFoundException e) {
        logger.severe(String.format("File not found: %s location", FILE_PATH));
        return Food.FoodDelivery.newBuilder().build();
    } catch (IOException e) {
        logger.warning(String.format("Error reading file: %s location", FILE_PATH));
        return Food.FoodDelivery.newBuilder().build();
    }
}
```

**4.3 逆シリアル化後の結果の表示**

*   逆シリアル化されたデータを表示します。
*   レストラン名とメニュー項目を表示します。

```java
public void displayRestaurants(Food.FoodDelivery delivery) {
    Map<String, Food.Menu> restaurants = delivery.getRestaurantsMap();
    for (Map.Entry<String, Food.Menu> restaurant : restaurants.entrySet()) {
        logger.info(String.format("Restaurant: %s", restaurant.getKey()));
        restaurant.getValue()
          .getItemsMap()
          .forEach((menuItem, price) -> logger.info(String.format(" - %s costs $ %.2f", menuItem, price)));
    }
}
```

**5. 実装のテスト**

*   Protobufマップ操作が正しく機能することを確認するために、シリアル化が正しくファイルにデータを書き込むことを検証します。
*   逆シリアル化が元のデータを正しく復元することを確認します。
*   ログ出力をキャプチャし、予期されるデータがログに記録されているかどうかを確認します。
*   テストでは、シリアル化、逆シリアル化、およびログ出力を検証します。

```java
@Test
void givenProtobufObject_whenSerializeToFile_thenFileShouldExist() {
    foodDelivery.serializeToFile(testData);
    File file = new File(FILE_PATH);
    assertTrue(file.exists(), "Serialized file should exist");
}

@Test
void givenSerializedFile_whenDeserialize_thenShouldMatchOriginalData() {
    foodDelivery.serializeToFile(testData);
    Food.FoodDelivery deserializedData = foodDelivery.deserializeFromFile(testData);
    assertEquals(testData.getRestaurantsMap(), deserializedData.getRestaurantsMap(), "Deserialized data should match the original data");
}

@Test
void givenDeserializedObject_whenDisplayRestaurants_thenShouldLogCorrectOutput() {
    foodDelivery.serializeToFile(testData);
    Food.FoodDelivery deserializedData = foodDelivery.deserializeFromFile(testData);
    Logger logger = Logger.getLogger(FoodDelivery.class.getName());
    TestLogHandler testHandler = new TestLogHandler();
    logger.addHandler(testHandler);
    logger.setUseParentHandlers(false);
    foodDelivery.displayRestaurants(deserializedData);
    List<String> logs = testHandler.getLogs();
    assertTrue(logs.stream().anyMatch(log -> log.contains("Restaurant: Pizza Place")),
      "Log should contain 'Restaurant: Pizza Place'");
    assertTrue(logs.stream().anyMatch(log -> log.contains("Margherita costs $ 12.99")),
      "Log should contain 'Margherita costs $ 12.99'");
}
```

**6. まとめ**

*   Protobufでマップを使用すると、データモデルでキーと値の関係を管理するための構造化された効率的な方法が提供されます。
*   ProtobufマップをJavaで定義、シリアル化、および逆シリアル化する方法を説明しました。
*   堅牢なユニットテストを実装して、シリアル化と逆シリアル化プロセスが正しく機能し、データの整合性を維持することを確認しました。
*   適切なMaven設定とベストプラクティスを実装することで、Protobufマップをアプリケーションに自信を持って統合し、パフォーマンス上の利点を活用し、コードベースをクリーンで保守しやすくすることができます。

この記事に関連するコードはGitHubで利用できます。

---
# Introduction to RESTHeart | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918350807/0/baeldung~Introduction-to-RESTHeart)

## RESTHeart入門 - Baeldung記事の要約

このBaeldungの記事は、MongoDB上にHTTP APIを迅速に構築できるJavaベースのフレームワークであるRESTHeartを紹介しています。RESTHeartは、MongoDBコレクションをRESTとGraphQL APIとして、最小限の設定で、必要な制御を維持しながら公開することを可能にします。

**1. RESTHeartとは**

RESTHeartは、MongoDB上で構築されたオープンソースのAPIサーバーです。コレクションをRESTとGraphQLエンドポイントとして自動的に公開し、コードを書かずにAPIを作成できます。主な特徴は以下の通りです。

*   HTTPとGraphQLを介したフルCRUDサポート
*   ロールベースのアクセス制御と認証
*   ユーザーとロール管理のための組み込み管理API
*   Javaプラグインまたは構成によるカスタム動作のための拡張ポイント

これにより、HTTPベースのAPIを迅速に実装できるゼロコードソリューションが提供されます。必要に応じて、追加機能のためにカスタムJavaコードを統合することも可能です。

**2. RESTHeartの実行**

RESTHeartは、Java 21以降の環境で動作します。ローカルで実行するには、RESTHeartディストリビューションをダウンロードし、`restheart.jar`を実行します。Dockerイメージも提供されており、MongoDBを含むDocker Compose環境で実行することもできます。

**3. 認証とユーザー**

RESTHeartへのほとんどのAPI呼び出しには認証が必要です。デフォルトでは、ユーザーレコードはMongoDBデータベースのusersコレクションで管理されます。RESTHeartは、デフォルトでadminユーザーとsecretパスワードを使用して起動します。

**4. CRUD操作**

RESTHeartは、MongoDBコレクションを標準のRESTとGraphQL APIを介して操作できます。

*   **REST API:**  GET、POST、PUT、PATCH、DELETEの標準的なURLパターンを使用します。
*   **GraphQL API:**  `gql-apps`コレクションにAPI定義を作成することで、データにアクセスできます。APIは、GraphQLスキーマ定義言語で記述され、GraphQL APIとMongoDBコレクション間のマッピングを定義します。

**5. まとめ**

RESTHeartは、HTTP APIの作成を簡素化する強力なフレームワークです。RESTHeartを使用することで、MongoDBをバックエンドとするAPIを迅速かつ効率的に構築できます。この記事では、RESTHeartの基本的な機能と使い方を概説しました。

---
# Spring Bootで作ったAPIのUIをClaudeに作らせるTips - IK.AM

[View on IK.AM](https://ik.am/entries/848)

## Spring Bootで作ったAPIのUIをClaudeで作成するTips - 要約

本記事は、Spring Bootで作ったAPIのUIを、LLM(Claude)を利用して効率的に作成する方法を紹介しています。バックエンドエンジニアが苦手としがちなフロントエンドの実装を、Claudeに依頼することで、デモアプリやサンプルアプリの見栄えを向上させ、開発効率を大幅に高めることを目指しています。

**1. API設計とSpring Boot実装:**

*   まず、作成するAPIの設計ドキュメントを作成します。形式はテキストベースで、Claudeが理解できれば問題ありません。
*   サンプルとして簡易掲示板（BBS）のAPIを設計し、Spring Bootで実装します。
*   APIの実装には、Commentクラス、CommentController、およびIntegration Testを作成します。
*   エラーメッセージの出力設定を行います。

**2. UIの作成とClaudeの活用:**

*   設計ドキュメントをClaudeに渡し、React + React Router + Typescript + vite + Tailwindを用いたUIを作成してもらいます。
*   Claude CodeをMCPサーバーとして使用することで、ローカルのファイルを直接編集し、効率的に作業を進めます。
*   Claudeは、fetch + swrを用いたHTTPアクセス、ライト/ダークモードの実装、コンポーネント化を意識したコード生成を行います。
*   生成されたUIの動作確認を行い、必要に応じてデザインの調整や機能追加をClaudeに依頼します。
*   作成されたソースコードは、タスクごとにGitでコミットし、変更を管理します。

**3. UIの改修とエラー対応:**

*   UIに対して、LintやBuildのエラーが発生した場合、Claudeに修正を依頼します。
*   問題が解決しない場合は、エラーを特定し、個別のタスクとしてClaudeに依頼します。

**4. APIとUIの統合:**

*   UIのpackage.jsonを修正し、ビルドされたアセットをSpring Bootのtarget/classes/META-INF/resourcesに出力するように設定します。
*   Mavenのfrontend-maven-pluginを追加し、ビルド時にUIのインストールとビルドを実行するように設定します。
*   Paketo Buildpack利用時のキャッシュ問題に対応するため、application.propertiesでキャッシュ設定を調整します。
*   Spring Bootのビルドを行い、UIのアセットが正しく配置されていることを確認します。
*   Spring Bootアプリケーションを実行し、UIが表示されることを確認します。
*   React Routerによるルーティングに対応するため、Spring Bootのコントローラーでindex.htmlへのフォワード処理を実装します。

**5. まとめ:**

*   Claudeを活用することで、デモアプリや小規模アプリのUIを効率的に作成できます。
*   スタイル変更などの追加タスクもClaudeに依頼し、柔軟にUIを調整できます。
*   大規模なソースコードでの利用や、メンテナンス性については、今後の検証が必要です。
*   本記事の手法を用いて作成されたUIを持つ、複数のサンプルアプリが紹介されています。