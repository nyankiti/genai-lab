# Run and share custom queries in Observability Plus - Vercel

[View on Vercel Blog](https://vercel.com/changelog/run-and-share-custom-queries-in-observability-plus)

VercelのObservability Plusを利用している顧客は、Observabilityダッシュボードから直接カスタムクエリを作成し共有できるようになった。これにより、コードを書かずに特定のメトリクス、ルート、アプリケーションの動作を調査することが容易になる。

この新しいクエリインターフェースでは、以下のことが可能になった：

*   特定のページとメトリクスに焦点を当てるためのルートによるフィルタリング
*   オートコンプリート機能付きの高度なフィルタリング（クエリ言語不要）
*   ルートとプロジェクトのコンテキストでグラフを分析
*   URLまたはコピーボタンでクエリを即座に共有

この新しいクエリ体験は、モニタリングダッシュボードを基盤としており、データに深く入り込む際にコンテキストを維持するのに役立つ。

試すには、Observabilityダッシュボードを開き、いずれかのグラフのクエリ矢印または省略記号メニューからクエリビルダーを選択する。Observabilityでのクエリの実行と、利用可能なメトリクスについてさらに詳しく学ぶことができる。

---
# What Is an API in Java? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916208774/0/baeldung~What-Is-an-API-in-Java)

## JavaにおけるAPIとは？

この記事は、JavaにおけるAPIの概念を解説し、その重要性と活用方法を説明しています。

**1. APIの定義と重要性**

*   API (Application Programming Interface) は、異なるソフトウェアシステム間の通信を可能にする一連のメソッドとクラスです。
*   APIは、アプリケーションを構成要素に分割し、それぞれの構成要素がAPIを介して相互に通信する、コンポーネントベースアーキテクチャにおいて不可欠です。
*   APIを利用することで、開発者は内部の動作を気にすることなく、外部のサービスや機能を簡単に利用できます。

**2. APIの種類**

*   **Web API:** Webアプリケーション間の通信に使用され、RESTful APIが主流です。PayPal APIやYouTube APIなどが例として挙げられます。
*   **OS API:** ファイル操作やネットワークアクセスなど、OS固有の機能を利用できます。Java NIOやJava Process APIなどが例です。
*   **データベースAPI:** データベースとのCRUD操作を可能にします。JDBCやJPA、Spring Data JPAなどがあります。
*   **ハードウェアAPI:** プリンターやカメラ、センサーなどのハードウェアコンポーネントとの連携を可能にします。Java Sound APIやJava Print APIなどが例です。

**3. CRUD APIの実装例**

*   HTTPサーバ (HttpServer) を使用して、REST APIを作成する方法を解説しています。
    *   `main()`メソッドで、HTTPサーバを起動し、`/users`エンドポイントを登録します。
    *   `handle()`メソッドで、リクエストメソッド (GET, POST, PUT, DELETE) に応じて、適切なハンドラ関数を呼び出します。
    *   各ハンドラ関数 (handleGet, handlePost, handlePut, handleDelete) で、CRUD操作を実行します。
*   **テスト:** Mavenを使用してプロジェクトをパッケージ化し、`curl`コマンドでAPIをテストする方法を説明しています。

**4. 外部ライブラリ/フレームワーク**

*   **Spring Boot:** 迅速な開発と自動設定、依存性注入、組み込みTomcatサーバなどの機能を提供し、RESTfulサービスの構築を容易にします。Spring Data JPAによるデータベース連携も可能です。
*   **Jakarta EE:** 大規模な分散アプリケーション向けで、JAX-RS、JPA、CDIなどのAPIを提供します。WildFlyなどのアプリケーションサーバ上で動作します。
*   **JAX-RS:** RESTful Webサービスの構築に特化したJava標準です。軽量で効率的であり、@GET、@POST、@PUT、@DELETEなどのアノテーションを使ってエンドポイントを定義できます。JerseyやRESTEasyなどの実装があります。

**5. まとめ**

*   JavaにおけるAPIの概念を理解し、REST APIの実装例を通じてAPI開発の基礎を学びます。
*   Spring BootやJakarta EE、JAX-RSなどのフレームワークを活用することで、より高度なAPI開発が可能になります。

---
# Converting a cURL Request to an HTTP Request in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207919/0/baeldung~Converting-a-cURL-Request-to-an-HTTP-Request-in-Java)

## cURL リクエストを Java の HTTP リクエストに変換する方法

このチュートリアルでは、cURL コマンドを Java コードの HTTP リクエストに変換する様々な方法を紹介しています。cURL は HTTP リクエストを簡単に送信できるコマンドラインツールですが、それを Java コードに変換することで、API コールを再利用可能で、テスト可能にし、エラー処理を向上させることができます。

**1. はじめに**

API を扱う際、cURL でリクエストをテストすることから始めることがよくあります。本記事では、cURL コマンドを Java の HTTP リクエストに変換する方法を解説します。

**2. cURL コマンドの理解**

例として、以下のような cURL コマンドを取り上げます。

```bash
curl -X POST "http://example.com/api" \
  -H "Content-Type: application/json" \
  -d '{"key1":"value1", "key2":"value2"}'
```

このコマンドは、`http://example.com/api` に対して POST リクエストを送信し、JSON 形式のデータを送信します。

**3. Java の組み込み `HttpURLConnection`**

Java 標準ライブラリに含まれる `HttpURLConnection` クラスを使用すると、最も簡単に HTTP リクエストを作成できます。追加の依存関係は必要ありません。

```java
String sendPostWithHttpURLConnection(String targetUrl) {
    // ... (コードは省略、本文を参照)
}
```

この方法では、`URL` クラスで接続を設定し、`HttpURLConnection` を使用して接続を開きます。リクエストメソッドを POST に設定し、ヘッダーを追加して JSON 形式のリクエストボディを指定します。レスポンスコードを取得し、`BufferedReader` を使用してレスポンスを読み取ります。

**4. Apache HttpClient**

Apache HttpClient は、HTTP リクエストを作成するための強力なライブラリです。`HttpURLConnection` よりも高度な制御と柔軟性を提供します。

依存関係として、`org.apache.httpcomponents.client5:httpclient5` を pom.xml に追加する必要があります。

```java
String sendPostRequestUsingApacheHttpClient(String targetUrl) {
    // ... (コードは省略、本文を参照)
}
```

この例では、`CloseableHttpClient` インスタンスを作成し、POST リクエストを実行します。Content-Type ヘッダーを設定し、JSON ペイロードを `StringEntity` にラップしてリクエストに添付します。接続タイムアウトの設定や、リクエストインターセプターの追加も可能です。

**5. OkHttp**

OkHttp は、使いやすさと優れたパフォーマンスで知られる、Square 社製のモダンな HTTP クライアントです。HTTP/2 をサポートし、Android および Java アプリケーションで広く使用されています。

依存関係として、`com.squareup.okhttp3:okhttp` を pom.xml に追加します。

```java
String sendPostRequestUsingOkHttp(String targetUrl) {
    // ... (コードは省略、本文を参照)
}
```

`RequestBody` を定義して JSON ペイロードを保持し、`Request.Builder()` を使用してターゲット URL、HTTP メソッド (POST)、リクエストボディ、ヘッダーを設定します。最後に、`client.newCall(request).execute()` を使用してリクエストを実行します。

**6. Spring の WebClient**

Spring フレームワークを使用している場合は、WebClient が HTTP リクエストを簡素化する高レベルのクライアントです。モダンでノンブロッキングな HTTP クライアントであり、Spring アプリケーションで HTTP リクエストを作成する推奨方法です。

```java
String sendPostRequestUsingWebClient(String targetUrl) {
    // ... (コードは省略、本文を参照)
}
```

WebClient インスタンスを作成し、Content-Type ヘッダーを設定します。`bodyValue(jsonInput)` を使用して JSON ペイロードを添付します。ブロックメソッドを使用すると、メソッドが同期的に実行され、レスポンスが返されます。非同期またはリアクティブアプリケーションでは、ブロックメソッドを削除して `Mono<String>` を返すこともできます。

**7. まとめ**

この記事では、cURL コマンドを Java コードに変換する方法を、`HttpURLConnection`、Apache HttpClient、OkHttp、Spring WebClient を使用して説明しました。

*   `HttpURLConnection`: 簡単なユースケースで、外部の依存関係を避けたい場合に最適です。
*   Apache HttpClient: HTTP リクエストを細かく制御する必要がある場合に最適です。
*   OkHttp: マイクロサービスまたは Android 開発に適した、パフォーマンスに優れたモダンな HTTP クライアントです。
*   Spring WebClient: リアクティブアプリケーション、特に Spring エコシステム内で最適です。

ソースコードは GitHub で利用可能です。

---
# Load Shedding in Quarkus | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207922/0/baeldung~Load-Shedding-in-Quarkus)

## Quarkusにおけるロードシェディング（負荷分散） - Baeldung

**概要:**

このBaeldungの記事では、Quarkusアプリケーションにおけるロードシェディング（負荷分散）の実装とカスタマイズ方法について解説しています。ロードシェディングは、高トラフィック時に意図的にリクエストを拒否することで、システム過負荷を防ぐためのメカニズムです。

**内容詳細:**

1.  **概要:**
    *   `quarkus-load-shedding`拡張機能は、Quarkusアプリケーションでシステム過負荷を回避するために、リクエストを意図的に拒否する仕組みを提供します。
    *   拡張機能をカスタマイズするための主要な設定プロパティが用意されています。
    *   この記事では、この拡張機能をQuarkusアプリケーションに組み込み、特定のニーズに合わせて設定をカスタマイズする方法を説明します。

2.  **セットアップ:**
    *   `quarkus-load-shedding`拡張機能をQuarkusプロジェクトの依存関係に追加します。
    *   `./mvnw quarkus:dev`コマンドでdevモードでアプリケーションを起動すると、Dev UIで拡張機能を確認できます。
    *   現時点では、この拡張機能は実験的なステータスです。

3.  **デフォルトのロードシェディング:**
    *   拡張機能はデフォルトで有効になり、デフォルト設定でリクエストのシェディングを開始します。
    *   `application.properties`ファイルを編集して、設定を調整できます。
        *   `quarkus.load-shedding.enabled=true`
        *   `quarkus.load-shedding.max-limit=10`
        *   `quarkus.load-shedding.initial-limit=5`
        *   `max-limit`は同時リクエストの境界を設定し、`initial-limit`は許容キューサイズの計算に使用されます。
    *   JMeterを使用して設定をテストし、HTTP 503エラー率を確認できます。

4.  **カスタムロードシェディング:**
    *   `quarkus-load-shedding`拡張機能は、ロードシェディングの動作をカスタマイズできるいくつかの設定を提供します。

    *   **4.1. リクエストの優先順位付け:**
        *   `application.properties`で優先順位を有効にします。
            *   `quarkus.load-shedding.priority.enabled=true`
        *   `RequestPrioritizer`の実装を提供して、リクエストの優先順位を指定します。
        *   `@Provider`アノテーションと`HttpServerRequestWrapper`型のリクエストに適用するように設定します。
        *   特定のターゲットエンドポイントに優先順位を割り当てます。
        *   例：`/fibonacci`エンドポイントに`RequestPriority.CRITICAL`を設定し、他のエンドポイントよりも優先順位を高くします。

    *   **4.2. 負荷検出のトリガー:**
        *   システムに負荷をかけるために、CPU負荷をシミュレートします。
        *   `/fibonacci`リソースの`@PostConstruct`で、CPU負荷の高いタスクを開始します。
        *   テスト前に、`/fibonacci`エンドポイントに最初のリクエストをトリガーします。
        *   JMeterテストで、優先順位の高い`/fibonacci`エンドポイントのリジェクション率が低くなることを確認します。

    *   **4.3. システムプローブレート:**
        *   `probeFactor`設定は、拡張機能がシステムの要求処理能力の変動をどの程度頻繁にプローブするかを制御します。
        *   デフォルト値は30です。
        *   `probeFactor`を高く設定すると、システムの負荷変動に対する感度が低下します。
        *   `application.properties`で設定を変更できます。

    *   **4.4. キュー管理:**
        *   `alphaFactor`と`betaFactor`設定は、観測されたリクエストキューサイズに基づいて、制限がどのように増減するかを制御します。
        *   これらの設定を`application.properties`に追加して、動作を確認します。
        *   制限の割り当てが徐々に行われ、最大制限に達していなくてもリクエストが拒否される場合があります。

5.  **結論:**
    *   `quarkus-load-shedding`拡張機能をQuarkusアプリケーションに組み込み、負荷状況下でシステムが効果的に応答する方法を説明しました。
    *   設定プロパティを調整して拡張機能をカスタマイズし、各プロパティの意味を理解しました。
    *   GitHubでコードが公開されています。

---
# Copy Specific Fields by Using BeanUtils.copyProperties in Spring | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207160/0/baeldung~Copy-Specific-Fields-by-Using-BeanUtilscopyProperties-in-Spring)

このチュートリアルは、Spring Frameworkの `BeanUtils.copyProperties` メソッドを使用して、特定のフィールドのみをコピーする方法に焦点を当てています。デフォルトでは、このメソッドは一致するすべてのプロパティをコピーしますが、異なる構造を持つソースとターゲットオブジェクト間、または特定の操作に必要なフィールドのサブセットのみをコピーする必要がある場合があります。

主な内容は以下の通りです。

1.  **概要**: `BeanUtils.copyProperties` の基本と、特定のフィールドのみをコピーする必要があるシチュエーションについて説明します。
2.  **ignoreProperties オプションの使用**: `copyProperties` メソッドは、コピーをスキップするフィールドを指定する `ignoreProperties` という3番目の引数を受け入れます。これにより、不要なフィールドを簡単に除外できます。
    *   例として、`address` フィールドをコピーから除外するコードを示します。
3.  **カスタムラッパーの使用**: 特定のフィールドをコピーし、他のフィールドを除外するユーティリティメソッドを作成します。
    *   `BeanUtils.copyProperties` をラップし、コピーするフィールドを指定できる方法を紹介します。
    *   例として、`name` と `age` フィールドのみをコピーし、`address` フィールドを除外するコードを示します。
4.  **中間 DTO オブジェクトの使用**: 中間 DTO (Data Transfer Object) を作成し、ソースオブジェクトから中間 DTO に特定のフィールドをコピーし、次に中間 DTO からターゲットオブジェクトにコピーする方法を紹介します。
    *   これにより、フィールドのフィルタリングと選択的なマッピングが可能になります。
    *   例として、`TempDTO` を使用して `name` と `age` をコピーし、`address` を除外するコードを示します。
5.  **結論**: 各方法の利点と欠点、およびアプリケーションのニーズに最適な方法を選択するための考慮事項をまとめます。
    *   `ignoreProperties` は簡単な解決策ですが、カスタムラッパーと中間オブジェクトはより柔軟性を提供します。
    *   中間オブジェクトは、2回のコピー操作によりわずかに遅くなる可能性がありますが、関心の分離を確実に行い、不要なデータコピーを防ぎます。

記事の最後には、GitHub 上でコードが利用可能であることが示されています。

---
# Synchronous Communication With Apache Kafka Using ReplyingKafkaTemplate | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207163/0/baeldung~Synchronous-Communication-With-Apache-Kafka-Using-ReplyingKafkaTemplate)

## Baeldung: ReplyingKafkaTemplate を使用した Apache Kafka での同期通信

このチュートリアルは、Spring Boot アプリケーションで Apache Kafka を使用して同期リクエスト-応答通信を実装する方法に焦点を当てています。Kafka は本質的に非同期通信を目的としていますが、応答がすぐに必要なシナリオのために、別のトピックを通じて同期通信をサポートするように構成できます。

**1. 概要**

*   Apache Kafka は、イベント駆動型アーキテクチャで広く使用されているメッセージングシステムです。
*   通常、Kafka は非同期通信に使用されますが、同期リクエスト-応答通信も可能です。
*   このチュートリアルでは、Spring Boot で ReplyingKafkaTemplate を使用してこれを実現する方法を説明します。

**2. プロジェクトのセットアップ**

*   通知ディスパッチシステムをシミュレーションします。
*   Spring Kafka の依存関係を pom.xml に追加します。
*   リクエストと応答のメッセージを表すレコード (NotificationDispatchRequest, NotificationDispatchResponse) を定義します。
*   リクエストと応答の Kafka トピックを定義し、応答タイムアウトを設定します。

**3. 実装**

*   **Kafka 設定 Bean の定義:**
    *   KafkaMessageListenerContainer (応答トピックからメッセージをポーリング)
    *   ReplyingKafkaTemplate (同期通信を可能にする)
    *   KafkaTemplate (応答を送信するために使用)
    *   KafkaListenerContainerFactory (リクエストトピックからメッセージを消費するリスナーコンポーネント)
*   **NotificationDispatchService の実装:**
    *   ReplyingKafkaTemplate を使用して、リクエストトピックにメッセージを送信します。
    *   sendAndReceive() メソッドを使用して、応答を待ちます。
*   **NotificationDispatchListener の実装:**
    *   リクエストトピックからメッセージをリスニングします。
    *   @SendTo アノテーションを使用して、応答を応答トピックに送信します。

**4. まとめ**

*   ReplyingKafkaTemplate を使用して、Kafka の非同期性を同期のリクエスト-応答パターンに変換できます。
*   このアプローチは少し異例であるため、本番環境で実装する前に、プロジェクトのアーキテクチャと一致するかどうかを慎重に評価することが重要です。

記事では、Spring Kafka を使用して同期通信を実装するためのコード例と設定手順が提供されています。GitHub 上で利用可能なすべてのコード例が利用できます。
