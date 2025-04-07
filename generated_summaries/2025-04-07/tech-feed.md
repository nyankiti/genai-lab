# What Is an API in Java? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916208774/0/baeldung~What-Is-an-API-in-Java)

## JavaにおけるAPIとは？ | Baeldung 要約

この記事では、JavaにおけるAPIの概念と重要性を解説し、簡単なCRUD REST APIの実装例を通してAPI開発の基礎を紹介しています。

**1. APIの基本**

*   API (Application Programming Interface) は、異なるソフトウェアシステム間の通信を可能にするメソッドとクラスの集合。
*   レストランのメニューのように、APIを利用することで内部の実装を気にせず、機能を利用できる。
*   現代のアプリケーションは、コンポーネントベースのアーキテクチャを採用しており、APIを通じてコンポーネント間で通信を行う。

**2. APIの種類**

*   **Web API:** 他のWebアプリケーションとのやり取りに使用。RESTful API (HTTPメソッドを利用)、SOAP API (より安全)、GraphQL (必要なデータのみ要求可能) などがある。
*   **OS API:** ファイル操作、ネットワークアクセスなど、OS固有の機能へのアクセスを提供。
*   **Database API:** データベースとの接続、CRUD操作に利用 (JDBC, JPA, Spring Data JPAなど)。
*   **Hardware API:** プリンタ、カメラ、センサーなどのハードウェアコンポーネントとのやり取りに使用。

**3. CRUD REST APIの実装**

*   **HttpServerの使用:** JavaのHttpServerを使用して、REST APIを簡単に作成。
    *   /usersエンドポイントに対するリクエストを処理。
    *   handle()メソッドで、GET, POST, PUT, DELETEリクエストを振り分け。
    *   handleGet()メソッドでユーザーリストを返却。
    *   handlePost()メソッドで新しいユーザーを追加。
    *   handlePut()メソッドで既存のユーザー情報を更新。
    *   handleDelete()メソッドでユーザーを削除。
*   **テスト:** Mavenでプロジェクトをパッケージ化し、jarファイルを作成。PowerShellで`java -cp`コマンドを使ってAPIを起動し、`curl`コマンドでAPIコールを行い、動作確認を行う。

**4. 外部ライブラリとフレームワーク**

*   **Spring Boot:** 依存性の管理、セキュリティ、データベース連携を容易にし、RESTfulサービスの作成を簡素化。
*   **Jakarta EE:** 大規模分散アプリケーション構築のためのエンタープライズフレームワーク。トランザクション管理、メッセージング、セキュリティなどの機能を提供。
*   **JAX-RS:** RESTful Webサービスの構築に特化したJava標準。

**5. まとめ**

JavaにおけるAPIの概念、様々なAPIの種類、簡単なREST APIの実装方法を解説。 Spring Bootなどのフレームワークを利用することで、API開発をより簡単かつ安全に行える。

---
# Converting a cURL Request to an HTTP Request in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207919/0/baeldung~Converting-a-cURL-Request-to-an-HTTP-Request-in-Java)

## cURLリクエストをJavaのHTTPリクエストに変換する方法 - Baeldung

本記事は、cURLコマンドをJavaのHTTPリクエストに変換する様々な方法を解説しています。APIをテストする際に便利なcURLコマンドを、再利用性、テスト性、エラー処理能力を高めるためにJavaコードに変換する手法を紹介しています。

**1. はじめに**

cURLは、HTTPリクエストを簡単に送信できるコマンドラインツールであり、APIのテストに役立ちます。この記事では、cURLコマンドをJavaのHTTPリクエストに変換する方法をいくつか解説します。

**2. cURLコマンドの理解**

例として、以下のcURLコマンドを挙げ、その内容を説明します。

```bash
curl -X POST "http://example.com/api" \
  -H "Content-Type: application/json" \
  -d '{"key1":"value1", "key2":"value2"}'
```

このコマンドは、`http://example.com/api` にPOSTリクエストを送信し、Content-Typeをapplication/jsonに設定し、JSON形式のペイロードを送信します。

**3. Javaの組み込みHttpURLConnection**

Javaの標準ライブラリに含まれる`HttpURLConnection`クラスを使用すると、HTTPリクエストを簡単に作成できます。

*   **利点:** 外部依存関係を必要としないため、シンプルで手軽に実装できます。
*   **実装:**
    1.  URLオブジェクトを作成します。
    2.  `HttpURLConnection`を開き、リクエストメソッドをPOSTに設定し、ヘッダーを設定します。
    3.  出力ストリームを介してJSONペイロードを送信します。
    4.  レスポンスコードを取得し、`BufferedReader`を使用してレスポンスを読み込みます。
*   **テスト:** 有効なPOSTリクエストに対する非nullのレスポンスをアサートするテストケース例を示します。

**4. Apache HttpClient**

Apache HttpClientは、より高度なHTTPリクエスト制御と柔軟性を提供する、広く利用されているライブラリです。

*   **利点:** 接続タイムアウトの設定、接続プールの管理、インターセプターの追加など、HTTP通信の多くの側面をカスタマイズできます。
*   **実装:**
    1.  `CloseableHttpClient`インスタンスを作成し、POSTリクエストを実行します。
    2.  `Content-Type`ヘッダーを設定し、JSONペイロードを`StringEntity`としてリクエストに添付します。
    3.  レスポンスを文字列に変換します。
*   **カスタマイズ:** 接続タイムアウトを設定し、リクエストの詳細をログに記録するインターセプターを追加する例を示します。

**5. OkHttp**

OkHttpは、Square社が開発した、使いやすさと優れたパフォーマンスで知られるモダンなHTTPクライアントです。HTTP/2をサポートし、AndroidおよびJavaアプリケーションで広く使用されています。

*   **利点:** シンプルで高速、効率的なリクエスト処理。
*   **実装:**
    1.  `RequestBody`を使用してJSONペイロードを保持し、content typeを指定します。
    2.  `Request.Builder()`を使用して、URL、メソッド、リクエストボディ、ヘッダーを設定します。
    3.  `client.newCall(request).execute()`を使用してリクエストを実行し、例外処理を行います。

**6. SpringのWebClient**

Springフレームワークを使用している場合、`WebClient`はHTTPリクエストを簡素化する高レベルのクライアントです。最新の非ブロッキングHTTPクライアントであり、SpringアプリケーションでのHTTPリクエストに推奨される方法です。

*   **利点:** 非同期・リアクティブな環境でのHTTPリクエストを容易にします。
*   **実装:**
    1.  WebClientインスタンスを作成し、ターゲットURLを設定し、Content-Typeヘッダーを設定します。
    2.  `bodyValue()`を使用してJSONペイロードを添付します。
    3.  `block()`を使用して同期的に実行し、レスポンスを返します。非同期/リアクティブアプリケーションの場合は、`block()`を削除し、`Mono<String>`を返すことができます。

**7. まとめ**

本記事では、cURLコマンドをJavaコードに変換する様々な方法を紹介しました。

*   **HttpURLConnection:** 外部依存関係を避けたいシンプルなケースに最適です。
*   **Apache HttpClient:** HTTPリクエストを細かく制御する必要があるアプリケーションに最適です。
*   **OkHttp:** マイクロサービスやAndroid開発に適した、パフォーマンスに優れたモダンなHTTPクライアントです。
*   **Spring WebClient:** Springエコシステム内のリアクティブアプリケーションに最適です。

---
# Load Shedding in Quarkus | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207922/0/baeldung~Load-Shedding-in-Quarkus)

## Quarkusにおける負荷シェディング - Baeldung

**概要:**

この記事では、Quarkusアプリケーションにおける負荷シェディング（Load Shedding）の実装方法と、その設定について解説しています。負荷シェディングは、高トラフィック条件下で意図的にリクエストを拒否することで、システム過負荷を防ぐための技術です。

**主な内容:**

1.  **概要:** Quarkusの`quarkus-load-shedding`エクステンションの概要と目的を説明。アプリケーションやサービスの過負荷を防止するために、高トラフィック時にリクエストを制御する仕組みを提供します。
2.  **セットアップ:** `quarkus-load-shedding`エクステンションをQuarkusプロジェクトに追加する方法（依存関係の追加）を紹介。
3.  **デフォルトの負荷シェディング:** エクステンションのデフォルト設定（有効化）と、`application.properties`ファイルによる設定変更（`quarkus.load-shedding.enabled`, `quarkus.load-shedding.max-limit`, `quarkus.load-shedding.initial-limit`）について説明。JMeterを使用したテスト結果も提示し、設定による挙動の違いを示しています。
4.  **カスタム負荷シェディング:** 負荷シェディングの動作をカスタマイズするための設定について詳細に説明。
    *   **リクエストの優先度付け:** リクエストの優先度を設定し、負荷が高い場合にどのリクエストを優先的に処理するかを決定する方法を解説（`quarkus.load-shedding.priority.enabled`, `RequestPrioritizer`の実装）。`/fibonacci`エンドポイントを例に、優先度設定によるリクエスト拒否率の変化を示しています。
    *   **負荷検出のトリガー:** CPU負荷をシミュレートし、負荷シェディングの動作をテストする方法を紹介。
    *   **システムプローブレート:** `probeFactor`設定（`quarkus.load-shedding.probe-factor`）による、システムの状態監視頻度の調整について解説。低い値と高い値でのJMeterテスト結果の違いを示しています。
    *   **キュー管理:** `alphaFactor`と`betaFactor`設定（`quarkus.load-shedding.alpha-factor`, `quarkus.load-shedding.beta-factor`）による、許容リクエスト数の増減制御について解説。JMeterテストの結果を示し、設定による影響を説明しています。
5.  **結論:** `quarkus-load-shedding`エクステンションをQuarkusアプリケーションに組み込み、負荷に応じて効果的に対応するための方法をまとめ。設定プロパティを調整することで、特定のニーズに合わせたカスタマイズができることを強調しています。GitHub上のコードへのリンクも提供。

**補足:**

*   記事では、RESTエンドポイント (`FibonacciResource`, `FactorialResource`) を使用した負荷シェディングの実装例と、JMeterによるテスト方法を示しています。
*   設定項目について、それぞれの役割と影響を具体的に説明し、テスト結果を用いて理解を深めています。
*   エクステンションは実験的なステータスであることに注意が必要です。
---
# Copy Specific Fields by Using BeanUtils.copyProperties in Spring | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207160/0/baeldung~Copy-Specific-Fields-by-Using-BeanUtilscopyProperties-in-Spring)

## SpringにおけるBeanUtils.copyPropertiesを使った特定のフィールドのコピー

この記事は、Spring Frameworkの`BeanUtils.copyProperties`メソッドを使って、特定のフィールドだけをオブジェクト間でコピーする方法について解説しています。

**1. 概要**

Javaアプリケーションでオブジェクト間でデータをコピーする際、`BeanUtils.copyProperties`は便利な手段ですが、デフォルトではすべてのマッチするプロパティをコピーします。特定のフィールドだけをコピーしたい場合、この動作をカスタマイズする必要があります。この記事では、そのための3つのアプローチを紹介しています。

**2. ignorePropertiesオプションの使用**

`copyProperties`メソッドは、第3引数に`ignoreProperties`を受け取ることができ、コピーを無視するフィールドを指定できます。この引数には、無視したいプロパティ名を可変長引数で渡します。

**例:** `BeanUtils.copyProperties(sourceBean, targetBean, "address");`
  - 上記の例では、`sourceBean`の`address`プロパティは`targetBean`にコピーされません。

**3. カスタムラッパーの使用**

コピーしたい特定のフィールドを指定できるユーティリティメソッドを作成します。このメソッドは`BeanUtils.copyProperties`をラップし、コピー対象外のフィールドを排除できます。

**例:**
```java
public static void copySpecifiedProperties(Object source, Object target, Set<String> props) {
    String[] excludedProperties = Arrays.stream(BeanUtils.getPropertyDescriptors(source.getClass()))
      .map(PropertyDescriptor::getName)
      .filter(name -> !props.contains(name))
      .toArray(String[]::new);
    BeanUtils.copyProperties(source, target, excludedProperties);
}
```

  - 上記のメソッドは、コピーしたいプロパティ名のセットを受け取り、それ以外のフィールドをコピー対象外として`BeanUtils.copyProperties`を呼び出します。

**4. 中間DTOオブジェクトの使用**

中間DTOオブジェクトを作成し、コピー前にソースオブジェクトから特定のフィールドをフィルタリングします。まず、ソースオブジェクトから中間DTOオブジェクトにフィールドをコピーし、次に中間DTOオブジェクトからターゲットオブジェクトにコピーします。

**例:**
```java
public class TempDTO {
    public String name;
    public int age;
}
```
  - `SourceBean`から`TempDTO`へ、そして`TempDTO`から`TargetBean`へコピーする。

**5. 結論**

この記事では、`BeanUtils.copyProperties`を使って特定のフィールドをコピーする様々なアプローチを解説しました。
- `ignoreProperties`パラメータは、シンプルな解決策を提供します。
- カスタムラッパーと中間オブジェクトのアプローチは、無視するプロパティが多数ある場合に、より柔軟な対応を可能にします。

中間オブジェクトのアプローチは、2回のコピー操作を行うため、若干遅い場合がありますが、関心の分離を確実に行い、不必要なデータコピーを回避し、柔軟なフィールドマッピングを実現します。

---
# Synchronous Communication With Apache Kafka Using ReplyingKafkaTemplate | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916207163/0/baeldung~Synchronous-Communication-With-Apache-Kafka-Using-ReplyingKafkaTemplate)

## Synchronous Communication With Apache Kafka Using ReplyingKafkaTemplate に関する要約

このBaeldungの記事では、Apache Kafkaを用いてSpring Bootアプリケーションで同期的なリクエスト-レスポンス通信を実装する方法について解説しています。

**1. 概要:**

通常、Kafkaは非同期通信に適していますが、ReplyingKafkaTemplateを使用することで同期的なリクエスト-レスポンスパターンを実現できます。記事では、通知送信システムを例に、Kafkaの非同期性を利用しつつも、リクエストに対する即時的なレスポンスを可能にする方法を説明しています。

**2. プロジェクトのセットアップ:**

*   Spring Kafkaの依存関係を追加します。
*   リクエストとレスポンスのメッセージを表すレコードを定義します（例: NotificationDispatchRequest, NotificationDispatchResponse）。
*   リクエストとレスポンスのKafkaトピックを定義し、タイムアウト時間などの設定を行います。
*   `application.yaml`ファイルでKafka接続に必要なプロパティ（ブートストラップサーバー、シリアライゼーション、デシリアライゼーション、グループIDなど）を設定します。
*   KafkaMessageListenerContainer、ReplyingKafkaTemplate、KafkaTemplate、KafkaListenerContainerFactoryなどのKafka設定Beanを定義します。

**3. 同期通信の実装:**

*   `NotificationDispatchService`クラスを作成し、`ReplyingKafkaTemplate`を使用してリクエストメッセージを送信し、レスポンスを待ちます。 `sendAndReceive()`メソッドを使用し、リクエストトピックにメッセージを送信します。このメソッドはRequestReplyFutureオブジェクトを返し、これを使ってレスポンスを待ちます。
*   `NotificationDispatchListener`クラスを作成し、リクエストトピックからのメッセージをリッスンします。 `@SendTo`アノテーションを使用して、レスポンスをレスポンスのトピックに送信します。

**4. まとめ:**

記事では、Apache Kafkaを利用してSpring Bootアプリケーションの2つのコンポーネント間で同期通信を実現する方法を紹介しました。ReplyingKafkaTemplateを使用することで、Kafkaの非同期的な性質を同期的なリクエスト-レスポンスパターンに変換できます。ただし、このアプローチは一般的なものではないため、本番環境で実装する前にプロジェクトのアーキテクチャとの適合性を慎重に検討する必要があります。

---
# Join Kotlin Heroes: Episode 12 and Win Kotlin Swag | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/04/join-kotlin-heroes-episode-12/)

## Kotlin Heroes: Episode 12 開催！Kotlinグッズをゲットしよう！

このブログ記事では、JetBrainsが主催するプログラミングコンテスト「Kotlin Heroes: Episode 12」の開催について告知しています。

**概要:**

*   Kotlin Heroesは、あらゆるレベルのプログラマーが楽しめる、楽しくてやりがいのあるコンテストです。アルゴリズムの問題を解き、Kotlinについて学び、賞品を獲得するチャンスがあります。
*   **開催期間:**
    *   練習ラウンド: 既に開始済み。いつでも参加して、コンテスト形式に慣れることができます。
    *   本戦: 2025年4月7日。2時間30分で最大10問の問題を解きます。
*   **参加メリット:**
    *   Kotlinのスキルを練習し、向上させることができます。
    *   楽しく他の参加者と競い合えます。
    *   素敵な賞品を獲得できます。
*   **賞品:**
    *   1位: USD 512
    *   2位: USD 256
    *   3位: USD 128
    *   4～50位: Kotlin Heroes Tシャツ
    *   さらに、1問以上解いた参加者の中から抽選で50名にKotlin Heroes Tシャツがプレゼントされます。
*   **事前準備:**
    *   競技プログラミングのヒントやコツを学ぶためのプレイリスト。
    *   Kotlinユーザー向けの競技プログラミングチュートリアル。
    *   過去のKotlin Heroesコンテスト（Episode 9, 10, 11）の確認。
*   **参加方法:** 記事内のリンクから登録できます。
*   **その他:**
    *   記事内では、JetBrainsからのニュースレター購読への同意を求めるフォーム、KodeeのKotlinニュースまとめ記事、Google Summer of Code 2025への参加案内、Ktor 3.1.0 リリース情報など、Kotlinに関する最新情報も紹介されています。

---
# Even more OpenTelemetry - Kubernetes special

[View on A Java geek Nicolas Fränkel's blog](https://blog.frankel.ch/even-more-opentelemetry-kubernetes/)

## Even more OpenTelemetry - Kubernetes スペシャル：詳細な要約

この記事は、OpenTelemetryのデモをさらに発展させるために、Kubernetesに焦点を当てた変更を加えた内容を紹介しています。著者は、Apache APISIXを離れてLoftLabsに入社し、vClusterというクラスター仮想化ソリューションに触発され、Kubernetes関連の機能をデモに追加しました。

**主な変更点と追加機能:**

1.  **Docker ComposeからHelmへの移行:**
    *   デモではDocker Composeが便利だが、本番環境での利用は少ないため、Kubernetesへの移行を検討。
    *   Helmを選択し、インフラストラクチャにHelmチャートをサブチャートとして利用。
    *   Valkey、Traefik、OpenTelemetry Collector、OpenTelemetry Operator、Jaeger、PostgreSQLなどのHelmチャートを利用。

2.  **vClusterによるKubernetesトポロジー:**
    *   インフラストラクチャ関連のポッドはホストクラスターに、アプリポッドは専用の仮想クラスターのデフォルト名前空間にデプロイ。
    *   ホストクラスターと仮想クラスター間の通信にvClusterの機能を利用。
    *   `helm upgrade` コマンドを使って、vCluster、インフラ、アプリをデプロイ。

3.  **TraefikをIngress Controllerとして利用:**
    *   APIGatewayとしてTraefikを試用。
    *   Helmチャートで簡単にインストールでき、OpenTelemetryとも統合。
    *   Traefikの設定例を紹介。

4.  **vClusterを使ったサービス公開:**
    *   仮想クラスター内のアプリポッドがホストクラスターのサービスにアクセスできるように、vClusterの `replicateServices` と `sync.toHost.ingresses` を利用。

5.  **OpenTelemetry Collectorの導入:**
    *   各クラスターにOpenTelemetry Collectorを導入し、Kubernetes関連のデータを自動的に追加するように設定。
    *   Kubernetesのプリセットを利用。

6.  **PostgreSQLの初期化:**
    *   Helmチャートを使って、SQLスクリプトをConfigMap経由でPostgreSQLを初期化する方法を紹介。

7.  **Kubernetesによるポッドのインストルメンテーション:**
    *   KubernetesのInstrumentation機能を利用し、OpenTelemetryを使用していないPythonベースのアプリケーションにOpenTelemetryを追加。
    *   `Instrumentation` オブジェクトと、ポッドへのannotationで実現。

8.  **Quarkusコンポーネントの追加:**
    *   QuarkusアプリケーションへのOpenTelemetry統合。
    *   必要な依存関係と、トレースをカスタマイズする例を紹介。

**まとめ:**

著者は、既存のOpenTelemetryデモに以下の機能を追加しました。

*   Docker ComposeからKubernetesへの移行
*   Helmチャートによるインストール
*   vClusterによるアプリポッドとインフラポッドの分離
*   TraefikをIngress Controllerとして利用
*   各クラスターへのOpenTelemetry Collectorのインストール
*   Kubernetes InstrumentationによるOpenTelemetryの追加
*   Quarkusアプリケーションの追加

著者は、デモに新しいスタックを追加することに意欲的で、.Netの追加を検討していると述べています。
