# Set Multiple Headers at Once in Spring WebClient | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916791077/0/baeldung~Set-Multiple-Headers-at-Once-in-Spring-WebClient)

## Spring WebClientで複数のヘッダーを一度に設定する方法

このチュートリアルでは、Spring WebClientで複数のHTTPヘッダーを一度に設定する方法について解説しています。Spring WebFluxの`WebClient`は、同期および非同期のHTTPリクエストを処理するためのクラスです。

**1. はじめに**

WebClientは、HTTPリクエストのメタデータであるヘッダーを管理するために`HttpHeaders`クラスを使用します。このクラスは`MultiValueMap<String, String>`を実装しており、単一のヘッダーキーに複数の値を設定できます（例えば、`Accept`ヘッダーなど）。

**2. WebClientでのヘッダーの扱い**

WebClientでは、ヘッダーは認証情報、コンテンツタイプ、バージョン情報など、様々な情報を伝えるために使用されます。`HttpHeaders`クラスは、リクエストとレスポンスの両方のヘッダーを表現するために設計されています。

**3. 複数のヘッダーの設定方法**

WebClientで複数のヘッダーを設定する方法は、以下の3つです。

*   **3.1. 個々のリクエストに対してヘッダーを設定する**
    特定の個々のリクエストに対してヘッダーを設定する場合、`headers(Consumer<HttpHeaders> headersConsumer)`メソッドを使用します。このメソッドは、リクエストごとに異なるヘッダーを設定するのに適しています。例として、ランダムなリクエストIDとカスタムヘッダーを設定するコードを示しています。`MockWebServer`を使用して、WebClientの動作をテストしています。

*   **3.2. デフォルトヘッダーをグローバルに設定する**
    すべてのリクエストに共通のヘッダーを設定する場合、`defaultHeaders()`メソッドを使用します。これにより、クライアントインスタンスが作成される際に、すべてのリクエストに自動的にヘッダーが追加されます。グローバルヘッダーは、個別のリクエストで上書きすることも可能です。

*   **3.3. `ExchangeFilterFunction`を使用してヘッダーを動的に変更する**
    実行時にヘッダーを動的に設定または変更する場合、`ExchangeFilterFunction`を使用します。この機能を使うと、リクエストの際にヘッダーを柔軟に操作できます。複数のフィルターをチェーンして使用することも可能です。

**4. まとめ**

WebClientは、単一のリクエスト、グローバルなすべてのリクエスト、または実行時の動的な設定など、様々な方法でヘッダーを管理するための柔軟なアプローチを提供します。本記事では、これらの方法をコード例とともに解説し、Spring WebClientでのヘッダー管理の理解を深めることを目指しています。GitHubで完全なコード例を参照できます。

---
# Introduction to Objenesis | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916790267/0/baeldung~Introduction-to-Objenesis)

## Objenesisの紹介 | Baeldung

**概要:**

Objenesisは、Javaのコンストラクタを実行せずにオブジェクトをインスタンス化できる小さなJavaライブラリです。このチュートリアルでは、Objenesisの仕組み、プロジェクトでの使用方法、および実践的な例を通してその用途を詳しく解説します。

**1. 概要と背景:**

Javaでのオブジェクト生成は通常、コンストラクタの実行を伴いますが、Objenesisを使用すると、コンストラクタロジックを強制することなくオブジェクトを作成できます。これは、単体テストでの依存関係のモック、フレームワーク内でのオブジェクトライフサイクルの管理、複雑なコンストラクタ依存関係を持つレガシーコードの処理、または逆シリアル化などの特定のシナリオで役立ちます。

**2. 従来のオブジェクト作成との比較:**

従来のJavaオブジェクト作成では、`new`キーワードを使用してコンストラクタを呼び出してオブジェクトを生成します。コンストラクタはオブジェクトの初期化処理を行います。

**3. Objenesisの動作原理:**

Objenesisは、`new`キーワードやコンストラクタの呼び出しに頼らず、低レベルのJVMメカニズムを使用してメモリを割り当て、コンストラクタを完全にバイパスしてオブジェクトをインスタンス化します。内部的には、JVMベンダーとバージョンに応じて、さまざまなインスタンシエータ戦略を試みます。

**3.1. 設定:**

Objenesisを使用するには、Maven依存関係を追加します。

```xml
<dependency>
    <groupId>org.objenesis</groupId>
    <artifactId>objenesis</artifactId>
    <version>3.4</version>
</dependency>
```

このライブラリは、`ObjenesisStd`（標準、スレッドセーフな実装）と`ObjenesisSerializer`（シリアル化フレームワークに最適化された非スレッドセーフな実装）の2つの主要な実装を提供します。また、`ObjenesisHelper`ユーティリティクラスは、これらの実装を使用したオブジェクトインスタンス化を簡素化します。

**3.2. ObjenesisStdを使用したオブジェクト作成:**

`ObjenesisStd`クラスを使用して、コンストラクタを呼び出さずにオブジェクトを作成できます。

```java
Objenesis objenesis = new ObjenesisStd();
User user = objenesis.newInstance(User.class);
assertNotNull(user);

user.setName("Harry Potter");
assertEquals("Harry Potter", user.getName());
```

**3.3. ObjenesisSerializerを使用したオブジェクト作成:**

`ObjenesisSerializer`クラスは、シリアル化ベースのインスタンス化戦略を使用します。使用する際は、クラスが`Serializable`インターフェースを実装していることを確認する必要があります。

```java
Objenesis objenesis = new ObjenesisSerializer();
User user = objenesis.newInstance(User.class);
assertNotNull(user);

user.setName("Harry Potter");
assertEquals("Harry Potter", user.getName());
```

**3.4. ObjenesisHelperを使用したオブジェクト作成:**

`ObjenesisHelper`クラスは、標準とシリアル化の両方の戦略を使用したオブジェクト作成を簡素化します。

```java
User user = ObjenesisHelper.newInstance(User.class);
assertNotNull(user);

user.setName("Harry Potter");
assertEquals("Harry Potter", user.getName());

User user = ObjenesisHelper.newSerializableInstance(User.class);
assertNotNull(user);

user.setName("Harry Potter");
assertEquals("Harry Potter", user.getName());
```

**4. 高度なユースケース:**

Objenesisは、標準的なオブジェクト作成が難しい多くの高度なユースケースをサポートします。

*   **シリアル化フレームワーク:** Kryoなどのシリアル化フレームワークは、逆シリアル化中にコンストラクタを呼び出さずにオブジェクトを作成するためにObjenesisを内部的に使用します。
*   **モックフレームワーク:** MockitoやEasyMockなどのモックフレームワークは、テスト目的でモックオブジェクトまたはプロキシを作成するためにObjenesisを使用します。
*   **finalクラスとprivateコンストラクタ:** finalクラスやprivateコンストラクタを持つクラスのインスタンス化を可能にします。
*   **依存性注入フレームワーク:** 依存性注入フレームワークで、コンストラクタインジェクションが実用的でない場合に、プロパティベースのインジェクションを可能にします。
*   **パフォーマンス重視のアプリケーション:** オブジェクトを再初期化することなく、オブジェクトを複製または再利用できます。

**5. ベストプラクティス:**

Objenesisは便利な代替手段ですが、注意して使用し、その影響を理解することが推奨されます。

*   **コンストラクタを優先:** 通常のオブジェクト作成にはコンストラクタを使用し、コンストラクタ呼び出しをバイパスする必要がある場合にのみObjenesisを使用します。
*   **セキュリティ制限に注意:** Java Security Managerやコンテナ化されたアプリケーションなどの環境では、Objenesisがブロックされる可能性があります。
*   **フレームワークの統合を活用:** MockitoやKryoなどのフレームワークを使用する場合は、Objenesisを直接呼び出すのではなく、内部的に処理させるようにします。
*   **未初期化オブジェクトの処理:** Objenesisはコンストラクタロジックをスキップするため、デフォルトで初期化されたフィールドの扱いに注意する必要があります。
*   **インスタンス化されたオブジェクトのテスト:** Objenesisで作成されたオブジェクトが正しく機能していることを徹底的にテストします。
*   **使用法の明確なドキュメント化:** Objenesisの使用法と関連するオブジェクト初期化戦略をドキュメント化し、他の開発者にとっての保守性を向上させます。

**6. まとめ:**

この記事では、コンストラクタを呼び出さずにオブジェクトを作成できるObjenesisライブラリについて解説しました。このライブラリは、シリアル化、モッキング、プロキシフレームワークに役立ちます。Objenesisは強力ですが、意図しない副作用を避けるために必要な場合にのみ使用すべきです。

---
# Enable or Disable Embedded Tomcat with Profile in Spring Boot | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916777781/0/baeldung~Enable-or-Disable-Embedded-Tomcat-with-Profile-in-Spring-Boot)

## Spring Boot でプロファイルを使用して埋め込み Tomcat を有効/無効にする方法

この記事は、Spring Boot アプリケーションで埋め込み Tomcat サーバーをプロファイルに基づいて有効/無効にする方法について解説しています。

**1. 概要**

Spring Boot はデフォルトで埋め込み Tomcat サーバーを提供していますが、Web エンドポイントを持たないアプリケーションやバックグラウンドサービスとして実行する場合には、Tomcat を無効にすることでリソース使用量を最適化できます。本記事では、埋め込み Tomcat サーバーを有効/無効にするケースと、Spring Boot プロファイルを使用してこれを動的に構成する方法について説明します。

**2. 埋め込み Tomcat の理解**

Spring Boot は、埋め込み Tomcat サーバーをアプリケーションの実行可能 JAR ファイル内にバンドルすることで、アプリケーションのデプロイを簡素化します。これにより、外部 Tomcat インスタンスをインストールして構成する必要がなくなり、開発とデプロイが効率化されます。Spring Boot は、`spring-boot-starter-web` などの Spring Boot Starter を使用して、埋め込み Tomcat に必要な依存関係を含めます。

*   **2.1. 埋め込み Tomcat の利点**
    *   デプロイの簡素化：外部 Tomcat サーバーをインストールする必要がない
    *   自己完結型アプリケーション：アプリケーションを JAR ファイルとしてパッケージ化し、どこでも実行できる
    *   自動構成：Spring Boot が依存関係に基づいて Tomcat を自動的に構成する
    *   柔軟性：Jetty や Undertow などの他の埋め込みサーバーに簡単に置き換え可能

*   **2.2. Tomcat サーバーを無効にする場合**
    *   非 Web アプリケーション：CLI ツールやバッチジョブなど、HTTP リクエストを処理しないアプリケーション
    *   代替サーバーを使用するマイクロサービス：Nginx などの専用 Web サーバーを使用するサービス
    *   リソースの最適化：Tomcat を無効にすることで、メモリと CPU 使用量を削減

**3. Spring Boot プロファイルの構成**

Spring Boot は、`spring.profiles.active` プロパティを使用して環境固有の構成を定義できます。これにより、埋め込み Tomcat サーバーを有効または無効にするための異なるプロファイルベースの構成を作成できます。通常、次のような個別の構成ファイルを作成します。

*   `application-dev.properties`（Tomcat が有効な開発用）
*   `application-batch.properties`（Tomcat が無効なバッチ処理用）

**4. プロファイルを使用した埋め込み Tomcat の無効化**

Spring Boot は、`spring.main.web-application-type` プロパティに基づいて埋め込み Web サーバーを有効にするかどうかを決定します。埋め込み Tomcat を無効にするには、これを `NONE` に設定します。

プロファイル固有の構成では、`application-batch.properties` ファイルを次のように変更します。

```properties
spring.main.web-application-type=NONE
```

このプロファイルがアクティブな場合、Spring Boot は Tomcat を起動せず、アプリケーションを非 Web サービスとして扱います。

または、YAML を使用してこの設定を構成することもできます。

```yaml
spring:
  main:
    web-application-type: NONE
```

**5. 異なるプロファイルの構成例**

2 つのプロファイルを持つアプリケーションを構成する例を示します。

*   **開発プロファイル (dev)** – Tomcat が有効（デフォルト設定）
*   **バッチプロファイル (batch)** – Tomcat が無効

埋め込み Tomcat サーバーが正常に起動するように、`application-dev.properties` ファイルでプロパティを設定します。

```properties
spring.main.web-application-type=SERVLET
```

バッチ処理用に埋め込み Tomcat サーバーを無効にするには、`application-batch.properties` ファイルでプロパティを設定します。

```properties
spring.main.web-application-type=NONE
```

**6. プロファイルの切り替え**

複数のプロファイル構成を定義したら、`application.properties` ファイルで目的のプロファイルをアクティブ化できます。

```properties
spring.profiles.active=batch
```

または、コマンドライン引数として渡すこともできます。

```bash
java -Dspring.profiles.active=batch -jar myapp.jar
```

これにより、開発、テスト、または本番デプロイ中に、Web 有効モードと非 Web モードを必要に応じて切り替えることができます。

**7. 結論**

Spring Boot では、プロファイルを使用して埋め込み Tomcat サーバーを柔軟に構成できます。`spring.main.web-application-type` を活用することで、非 Web アプリケーションで必要に応じて Tomcat を無効にし、リソース使用量とデプロイ構成を最適化できます。プロファイルベースの設定または動的 Java ロジックを使用することで、アプリケーションがさまざまな環境にシームレスに適応できます。

---
# Fix DateTimeParseException: “Unable to obtain LocalDateTime from TemporalAccessor” | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916776893/0/baeldung~Fix-DateTimeParseException-Unable-to-obtain-LocalDateTime-from-TemporalAccessor)

## 「Fix DateTimeParseException: “Unable to obtain LocalDateTime from TemporalAccessor”」記事の要約

**概要:**

この記事は、Javaの`java.time`パッケージを用いた日付・時刻処理において発生する `DateTimeParseException: “Unable to obtain LocalDateTime from TemporalAccessor”` という例外について解説しています。この例外は、入力データの形式が期待される形式と異なったり、日付や時刻の要素が不足している場合に発生します。記事では、この例外が発生する原因を具体的に説明し、効果的な回避策と修正方法を提示しています。

**主な内容:**

1.  **例外の理解:**
    *   `LocalDateTime` オブジェクトを `TemporalAccessor` から取得できないというエラーは、入力文字列が日付と時刻の両方の情報を含んでいない場合に発生する。
    *   `LocalDateTime` は日付と時刻の両方を必要とするため、入力文字列に日付のみが含まれると例外がスローされる。

2.  **一般的な原因と解決策:**
    *   **入力文字列に時刻情報がない場合:**
        *   解決策: `LocalDate` を使用するか、時刻情報を追加して `LocalDateTime` としてパースする。
    *   **`DayOfWeek` を `LocalDateTime` としてパースしようとした場合:**
        *   解決策: 特定の曜日の次の日付を計算し、時刻と組み合わせて `LocalDateTime` を作成する。
    *   **`LocalTime` を `LocalDateTime` としてパースしようとした場合:**
        *   解決策: `LocalDate` と `LocalTime` を組み合わせて `LocalDateTime` を作成する。
    *   **`YearMonth` を `LocalDateTime` としてパースしようとした場合:**
        *   解決策: `YearMonth` をそのまま使用するか、`YearMonth` と日付情報を組み合わせて `LocalDate` を作成し、さらに時刻と組み合わせて `LocalDateTime` を作成する。
    *   **`MonthDay` を `LocalDateTime` としてパースしようとした場合:**
        *   解決策: `MonthDay` をそのまま使用するか、`MonthDay` に年情報を加えて `LocalDate` を作成し、さらに時刻と組み合わせて `LocalDateTime` を作成する。

3.  **結論:**
    *   `DateTimeParseException` を回避するには、入力形式が期待されるパターンと一致することを確認し、適切な `java.time` クラス（`LocalDate`, `LocalDateTime`, `ZonedDateTime`, `OffsetDateTime`）を使用することが重要。

**補足:**

記事では、GitHub で公開されているサンプルコードへのリンクも提供しています。

---
# KotlinConf 2025: Last Tickets, Epic Talks, an Evening to Remember, and More | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/04/kotlinconf-2025-last-tickets-and-highlights/)

## KotlinConf 2025: チケット販売終了間近！注目の講演と見逃せないイベントの紹介

このブログ記事では、2025年5月21日から23日にデンマークのコペンハーゲンで開催されるKotlinConf'25について、イベント内容とチケット情報が紹介されています。

**イベント概要:**

*   **講演:** Springの作者Rod Johnson氏、Duolingoチームによるケーススタディ、McDonald'sアプリでのKotlin Multiplatform活用事例など、Kotlinに関する最新技術や活用事例に関する講演が多数予定されています。
*   **ワークショップ:** Kotlinのデータ分析、Compose MultiplatformによるUI構築など、実践的なワークショップも開催されます。まだ、チケットが若干残っているワークショップもあるようです。
*   **その他のイベント:** Kotlin Language Designチームによるクイズ、Kotlin Foundationの助成金を受けたライブラリ作者によるライブデモ、Kotlinコミュニティとの交流の場、KotlinConfパーティーなど、様々なイベントが企画されています。
*   **Kodee (Kotlinのマスコット) の登場:** 会場ではKodeeとの交流も楽しめます。

**チケット情報:**

*   チケットの販売数が限られており、購入はお早めに。

**その他:**

*   過去のKotlinConfの講演者や参加者のコメントが紹介されており、イベントの質の高さが伺えます。
*   Kotlin HeroesコンテストやGoogle Summer of Code 2025への参加案内など、Kotlinに関する様々な情報も掲載されています。
*   Kotlinの最新情報やアップデートも紹介されています。
---
# Thinking with images | OpenAI

[View on OpenAI News](https://openai.com/index/thinking-with-images)

## OpenAIによる画像理解の進化：o3とo4-miniモデルの登場

**概要:**

OpenAIは、画像理解能力を飛躍的に向上させた新しいビジュアル推論モデル「o3」と「o4-mini」を発表しました。これらのモデルは、従来のモデルとは異なり、画像を見て理解するだけでなく、画像を用いて連鎖的な思考を行うことが可能です。この技術革新により、ChatGPTは画像分析をこれまで以上に正確かつ深く行えるようになり、複雑な問題解決能力が格段に向上しました。

**主な特徴と利点:**

*   **連鎖的思考による画像理解:** 画像をツールで処理し、クロップ、ズーム、回転などの操作を行うことで、より詳細な分析を実現。
*   **ネイティブ機能:** 専門的なモデルに依存することなく、高度な画像処理と推論を統合。
*   **多様な問題解決:** 経済学の問題セットのステップバイステップの説明、ビルドエラーの根本原因分析など、幅広い分野で活用可能。
*   **マルチモーダルベンチマークでの高い性能:** 視覚とテキストの推論をシームレスに組み合わせることで、マルチモーダルベンチマークにおいて最高のパフォーマンスを達成。
*   **対話の容易化:** 画像を撮影して質問するだけで、オブジェクトの位置に関係なく、より直感的にChatGPTと対話できる。

**具体的な活用例:**

*   ノートに書かれた文字の読み取り
*   QED問題の解決
*   看板に書かれた文字の特定
*   バス停の場所と時刻表の検索
*   迷路の解決
*   MITの卒業式の日付特定
*   映画の撮影場所の特定

**ベンチマーク性能:**

o3とo4-miniは、STEMの質問応答（MMMU、MathVista）、チャートの読み取りと推論（CharXiv）、知覚プリミティブ（VLMs are Blind）、視覚検索（V\*）など、様々なマルチモーダルタスクにおいて、従来のモデルを大幅に上回る性能を示しています。特にV\*では、95.7%の精度を達成し、ベンチマークをほぼ解決しました。

**現在の課題と今後の展望:**

*   **冗長な推論:** 過度に長い思考チェーンと、不要なツール呼び出しや画像操作のステップが発生する可能性がある。
*   **知覚エラー:** 基本的な知覚エラーがまだ発生する可能性がある。
*   **信頼性の問題:** 問題に対して異なる視覚的推論プロセスを試みることがあり、誤った結果につながる場合がある。

OpenAIは、これらの課題に取り組みながら、画像理解能力をさらに向上させ、より簡潔で信頼性の高いモデルの開発を目指しています。マルチモーダル推論の研究を進め、これらの改善が日常生活における様々な活動をどのように変革できるかを探求していくとのことです。

**補足:**

記事中では、2025年4月16日の更新として、o3のCharxiv-r、Mathvista、vlmsareblindの性能が、システムプロンプトの変更により更新されたことが言及されています。

---
# Introducing OpenAI o3 and o4-mini | OpenAI

[View on OpenAI News](https://openai.com/index/introducing-o3-and-o4-mini)

## OpenAI o3 および o4-mini の紹介：要約

OpenAI は、思考時間を長くするように訓練された新しい o シリーズモデル、OpenAI o3 および o4-mini をリリースしました。これらのモデルは、好奇心旺盛なユーザーから高度な研究者まで、ChatGPT の機能を大幅に向上させるものです。

**主な特徴と機能:**

*   **高度な推論能力:** これらのモデルは、Web 検索、Python を使用したファイルの分析、視覚的入力の深い推論、画像生成など、ChatGPT 内のすべてのツールをエージェント的に使用および組み合わせることができます。
*   **ツール使用の最適化:**  ツールをいつ、どのように使用して、詳細で思慮深い回答を適切な出力形式で迅速に（通常 1 分以内）生成するかを推論するように訓練されています。これにより、複雑な問題をより効果的に解決できます。
*   **o3:**  コーディング、数学、科学、視覚認識などの分野で最先端の能力を発揮する強力な推論モデルです。Codeforces、SWE-bench、MMMU などのベンチマークで新しい SOTA を達成しています。特に、画像、グラフ、グラフィックの分析などの視覚タスクが得意です。
*   **o4-mini:**  高速で費用対効果の高い推論に最適化された小型モデルです。数学、コーディング、視覚タスクにおいて、そのサイズとコストに対して優れたパフォーマンスを発揮します。AIME 2024 および 2025 で最高のベンチマークパフォーマンスを達成しています。
*   **改善された応答:** 以前のモデルよりも優れた指示追従と、より有用で検証可能な応答を提供します。
*   **会話的で自然な応答:** メモリと過去の会話を参照して、よりパーソナライズされ、関連性の高い応答を生成します。

**その他の変更点:**

*   **強化学習の継続的な拡大:** 強化学習における大規模な計算量増加は、GPT シリーズの事前学習と同様に、パフォーマンスの向上につながることが確認されました。
*   **画像との思考:** これらのモデルは、画像を思考プロセスに直接統合し、視覚的およびテキスト的推論を組み合わせた新しい問題解決を可能にします。
*   **エージェント的ツール使用への取り組み:** ChatGPT 内のツールに完全にアクセスできるだけでなく、API での関数呼び出しを介して独自のカスタムツールにもアクセスできます。
*   **Codex CLI:** ターミナルから実行できる軽量のコーディングエージェントです。
*   **安全性:** 生物学的脅威、マルウェア生成、ジェイルブレイクなどの分野で新しい拒否プロンプトを追加し、安全性の向上を図っています。
*   **アクセス:** ChatGPT Plus、Pro、および Team ユーザーは、本日より o3、o4-mini、および o4-mini-high をモデルセレクターで使用できるようになります。ChatGPT Enterprise および Edu ユーザーは 1 週間後にアクセスできるようになります。無料ユーザーは、クエリを送信する前にコンポーザーで 'Think' を選択して o4-mini を試すことができます。

**今後の展望:**

*   今後のモデルは、o シリーズの専門的な推論能力と GPT シリーズの自然な会話能力とツール使用を組み合わせ、シームレスで自然な会話と、積極的なツール使用と高度な問題解決をサポートする予定です。


---
# OpenAI o3 and o4-mini System Card | OpenAI

[View on OpenAI News](https://openai.com/index/o3-o4-mini-system-card)

## OpenAI o3 および o4-mini システムカード：詳細な要約

2025年4月16日に公開されたこの記事では、OpenAIが開発した新しいAIモデル「OpenAI o3」と「o4-mini」について紹介されています。これらのモデルは、最先端の推論能力と、Webブラウジング、Python、画像・ファイル分析、画像生成、キャンバス、自動化、ファイル検索、メモリといった完全なツール機能を組み合わせたものです。

**主な特徴:**

*   **高度な推論能力:** 複雑な数学、コーディング、科学的な課題を解決することに優れており、優れた視覚認識と分析能力も示します。
*   **ツールを活用:** 画像のトリミングや変換、Web検索、Pythonによるデータ分析など、思考プロセスにおいてツールを連携して活用します。
*   **強化学習による学習:** 大規模な強化学習を用いて、連鎖的な思考（chains of thought）を学習しています。
*   **安全性への取り組み:** 潜在的に危険なプロンプトへの応答において、安全ポリシーを考慮した推論を行う「熟考的アライメント」を通じて、モデルの安全性と堅牢性の向上を目指しています。
*   **準備フレームワーク Version 2 に基づくリリース:** OpenAIの「準備フレームワーク」のバージョン2に基づいて初めてリリースされました。

**安全性評価と結果:**

OpenAIの安全性諮問グループ（SAG）は、これらのモデルの準備状況評価をレビューし、以下の3つの追跡カテゴリにおいて「High」のしきい値には達していないと結論づけました。

*   生物学的および化学的能力
*   サイバーセキュリティ
*   AIの自己改善

記事では、これらの評価の詳細と、リスク軽減に向けた取り組みについても説明しています。

**まとめ:**

OpenAI o3 および o4-mini は、高度な推論能力と多様なツール機能を備えた新しいAIモデルです。OpenAIは、これらのモデルの安全性と堅牢性を高めるための取り組みを継続し、安全なAI開発を目指しています。

---
# 2025-04-09のJS: express 5.1(正式リリース)、Safari 18.4、ESLint bulk suppressions - JSer.info

[View on jser.info](https://jser.info/2025/04/09/express-5.1-safari-18.4-eslint-bulk-suppressions/)

## JSer.info #731 概要

2025年4月9日のJSer.infoは、Express 5.1の正式リリース、Safari 18.4のリリース、ESLintのbulk suppressions機能の紹介を中心に、JavaScript関連の最新情報がまとめられています。

**主要なトピック:**

*   **Express 5.1.0 (正式リリース):**
    *   Express 5.xシリーズの正式リリース。
    *   npmでのデフォルトバージョンが5.xに変更。
    *   ドキュメントの刷新と、4.xから5.xへの移行を支援するcodemodマイグレーションツールを提供。
    *   LTS (Long Term Support) ポリシーが発表され、Express 4.xは2026年10月1日にサポート終了予定。
*   **Safari 18.4 リリース:**
    *   **Declarative Web Push のサポート:** Service Worker を使用せずにプッシュ通知を管理できる新機能。
    *   **CSS 関連:** `shape()`関数、writing-mode の横書きモード、`text-autospace` のサポート。
    *   **Web API:** Image Capture API、iOS/iPad OS での Screen Wake Lock API、Cookie Store API のサポート。
    *   **JavaScript 関連:** ES2025 の Iterator Helpers、Stage 3 の `Error.isError` のサポート。
*   **ESLint bulk suppressions:**
    *   既存のコードベースにESLintを導入する際に、既存のエラーを抑制しつつ、新規追加ファイルにのみルールを適用できる機能。
    *   `eslint-suppressions.json` を生成し、そこに記録された違反を無視することで実現。
*   **その他:**
    *   Cookie Store API、ArrayBuffer、React Query の API デザイン、Standard Schema を JSON Schema へ変換するライブラリ、StarlingMonkey (Wasm最適化SpiderMonkeyベースのJSエンジン)、bare (モバイル/組み込み向けJSランタイム)、es-git (Node.jsのN-APIを使ったGitバインディングライブラリ) など、様々なJavaScript関連技術の情報が紹介されています。

**記事の補足:**

*   Safari 18.4 の Declarative Web Push は、ITP (Intelligent Tracking Prevention) 対応により Service Worker が削除されプッシュ通知が送れなくなる問題を解決するためのものです。
*   ESLint の bulk suppressions は、既存のプロジェクトに Lint を導入する際の、一度に大量のエラーが発生する問題を解決し、段階的な移行を容易にするための機能です。

---
# 2025-04-03のJS: Next.js LTS Policy、Rsdoctor 1.0、zx@lite - JSer.info

[View on jser.info](https://jser.info/2025/04/03/next.js-lts-policy-rsdoctor-1.0-zxlite/)

JSer.info #730 の要約です。

**Next.js に関する情報:**

*   **Next.js LTS (Long Term Support) ポリシー:** メジャーバージョンごとに、Active LTS（最新バージョン）とMaintenance LTS（2年間）が提供されます。このポリシーは、Next.js のミドルウェアバイパスに関するポストモーテムの一環として公開されました。

**ツールに関する情報:**

*   **Rsdoctor 1.0:** webpack-bundle-analyzer のようにバンドルサイズ分析やビルド分析を行うツールで、rspack または webpack で利用できます。
*   **zx 8.5.0:** より小さいサイズのパッケージである zx@lite が追加されました。npm/GitHub/JSR/homebrew/Docker など、様々な方法でインストールできます。

**その他のリリース情報:**

*   **Biome v2.0 beta:** プラグイン追加、Linter の機能追加など。
*   **React v19.1.0:** captureOwnerStack API の追加、<Suspense> の配置変更、react-server-dom-parcel パッケージ追加など。
*   **Bun v1.2.7:** Cookie の読み書きを行う Bun.Cookie/Bun.CookieMap の追加など。
*   **lerna-lite v4.0.0:** Node.js 18 のサポート終了、依存関係のアップデートなど。
*   **Rspack 1.3:** 循環参照検出プラグインの追加、Lazy compilation の導入など。
*   **ES2025 Candidate:** 2025年6月の Ecma GA で承認されれば正式リリース予定。
*   **tailwindcss v4.1.0:** 新しい variant、utilities の追加など。
*   **Firefox 137:** CSS の hyphenate-limit-chars プロパティ、JavaScript の Math.sumPrecise()、Atomics.pause() のサポート。SVG の <discard> 要素のサポート。DevTools の機能拡張など。
*   **Node.js v23.11.0:** assert.partialDeepStrictEqual、crypto.diffieHellman などの追加。
*   **URLPattern API:** Node.js、Cloudflare Workers、Deno などでサポートされている URLPattern API について。
*   **CSS レイアウト:** display: masonry に代わる flexbox, grid に対するプロパティ追加に関する議論。

**書籍:**

*   Effective TypeScript 第2版

---
# More accurate DevTools performance debugging using real-world data  |  Blog  |  Chrome for DevelopersGitHubBluesky

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/devtools-grounded-real-world?hl=en)

## 詳細な要約：DevToolsのパフォーマンスデバッグを実世界のデータでより正確に

この記事は、Chrome DevToolsのパフォーマンスパネルを改善するためのChromeの開発努力について、特に実世界のデータに基づいたパフォーマンスデバッグを可能にする新機能に焦点を当てています。開発環境とユーザーの多様なパフォーマンス体験とのギャップを埋めることを目的としています。

**主な内容:**

*   **CPUスロットリングキャリブレーション:**
    *   Chrome 134から導入された新しいツールで、適切なCPUスロットリングレベルの選択における不確実性を排除します。
    *   キャリブレーションを実行すると、開発マシンに合わせた「ローティアモバイル」と「ミッドティアモバイル」のスロットリングプリセットが生成されます。
    *   これにより、開発者が高速なデスクトップデバイスでサイトを構築し、多くのユーザーが性能の低いモバイルデバイスを使用しているというミスマッチに対応します。

*   **CPUスロットリングの仕組み:**
    *   CPUスロットリングは、タブのメインスレッドを短時間で頻繁に中断および一時停止させることで機能します。
    *   これにより、メインスレッドでの作業にかかる時間が長くなり、CPUの負荷が高いモバイルデバイスをシミュレートできます。
    *   たとえば、4倍のCPUスロットリングでは、メインスレッドは時間の約75%で一時停止し、作業時間は4倍になります。

*   **CPUスロットリングの限界:**
    *   モバイルハードウェアのすべての側面をシミュレートできるわけではありません。
    *   GPU負荷の高い作業、ディスク速度、メモリ帯域幅、熱スロットリングなど、一部の要素はCPUスロットリングでは正確に再現できません。
    *   GPU負荷の高いCSSアニメーションやエフェクトなど、開発マシンでは問題なく動作しても、モバイルデバイスではパフォーマンスが低下する可能性があります。

*   **実世界のデータに基づいたその他の改善点:**
    *   パフォーマンスパネルは、Chrome User Experience Report (CrUX)によって測定された75パーセンタイルのユーザーに基づいて、スロットリングに関する提案を行います。
    *   リアルタイムのメトリックビューは、ローカルで測定されたメトリックが実世界のデータと異なる場合に警告を発します。
    *   トレース内のメトリックが、ユーザーが実際に経験しているものと一致しない場合、パフォーマンスパネルのインサイトが警告を発します。
    *   75パーセンタイルのCore Web Vitalsを使用して、インサイトの表示順序をランク付けします。
    *   パフォーマンスパネルのトレース選択ドロップダウンに、各トレースのモバイルエミュレーション情報が表示されます。

*   **まとめ:**
    *   デバッグの決定は、実世界のデータに基づいている必要があります。
    *   CPUスロットリングのキャリブレーションと、実世界のデータとラボでのエクスペリエンスの差異に関する警告は、適切な方法で作業しているかどうかの不確実性を減らし、実世界のパフォーマンスのより一貫した近似を可能にします。
    *   DevToolsは、設定に関する推測をなくし、潜在的な不一致を強調することで、ユーザーに影響を与える実際のパフォーマンス問題の修正に時間を費やすのに役立ちます。

この記事は、実世界のデータとDevToolsの機能を組み合わせることで、開発者がより正確にパフォーマンスの問題を特定し、ユーザーエクスペリエンスを向上させるのに役立つように設計されています。

---
# Chrome 136 beta  |  Blog  |  Chrome for DevelopersXGitHubLinkedInMastodonBlueskyHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/chrome-136-beta?hl=en)

## Chrome 136 Beta リリース概要（日本語）

Chrome 136 ベータ版のリリースについて、開発者向けのブログ記事を要約します。

**概要:**

Chrome 136 ベータ版は、Android、ChromeOS、Linux、macOS、Windows 向けにリリースされ、多数の新機能、CSS/UI 関連の機能強化、Web API の更新、セキュリティとプライバシーの改善、開発者向け機能、および試験運用（Origin Trials）が導入されています。

**主な変更点:**

*   **CSS と UI:**
    *   `dynamic-range-limit` プロパティの追加（HDR コンテンツの最大輝度制限）
    *   カーシブスクリプトにおける letter-spacing の無視
    *   `:visited` リンク履歴のパーティション化（プライバシー保護強化）
    *   `string attr()` の `raw-string` への変更
    *   `var()` の型非依存フォールバック
    *   `print-color-adjust` プロパティの標準化
*   **Web API:**
    *   `AudioContext` の "interrupted" 状態の追加
    *   Blob URL のストレージキーによるパーティション化（Storage Partitioning の継続）
    *   非応答 Web ページからのクラッシュレポートへのコールスタックの追加
    *   Captured Surface Control API の導入
    *   CapturedSurfaceResolution API の追加
    *   キャプチャされたポインターへのクリックイベントのディスパッチ
    *   マジックコメントによるコンパイルヒント
    *   FedCM の複数 IdP サポートとパッシブモードでの機能削除
    *   Fluent Scrollbars（Windows 11 スタイルのスクロールバー）
    *   WebRTC での H265 (HEVC) コーデックのサポート
    *   MediaRecorder API での HEVC エンコーディングのサポート
    *   Chrome Enterprise における IP アドレスロギングとレポート
    *   HTTP キャッシュキーへのナビゲーションイニシエーターの組み込み
    *   `<canvas>` の `lang` 属性のサポート
    *   Permissions Policy レポートでの新しい違反タイプ
    *   予測可能なストレージクォータの報告
    *   Private Aggregation API での集約エラーレポート
    *   RegExp.escape の追加
    *   Speculation rules へのタグフィールドの追加
    *   Storage Access API の Strict Same Origin Policy
    *   ProgressEvent 属性の型を double に変更
    *   DOMPointInit の使用
    *   Web Authentication の条件付き作成（Passkey アップグレード）
    *   WebGPU: `GPUAdapterInfo.isFallbackAdapter` 属性
*   **試験運用（Origin Trials）:**
    *   Audio Output Devices API: `setDefaultSinkId()`
    *   Web アプリケーションのパフォーマンス分析
    *   Device Bound Session Credentials
    *   Canvas テキストレンダリング実装の更新
*   **非推奨と削除:**
    *   Intl Locale Info のゲッターの非推奨化
    *   `HTMLFencedFrameElement.canLoadOpaqueURL()` の削除

**その他:**

*   Chrome 136 は、2025 年 4 月 3 日にベータ版としてリリース。
*   Google.com (デスクトップ版) および Google Play Store (Android 版) からダウンロード可能。
*   詳細な情報は、ChromeStatus.com または関連するドキュメントを参照。

**注記:**

記事内では、各機能の概要、目的、および実装に関する技術的な詳細が示されています。開発者は、これらの情報を通じて、Chrome 136 で導入された変更を理解し、自身の Web サイトやアプリケーションへの影響を評価できます。

---
# Insights sidebar in the DevTools Performance panel  |  Blog  |  Chrome for DevelopersGitHubBluesky

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/devtools-insights-sidebar?hl=en)

このブログ記事は、Chrome DevTools Performanceパネルに統合された「Insights」サイドバーについて解説しています。このサイドバーは、LighthouseのインサイトをPerformanceパネルに直接表示し、パフォーマンスの問題を特定しやすくするためのツールです。

**主な内容:**

*   **Insightsサイドバーの概要:** パフォーマンスのトレース中にLighthouseのインサイトを表示し、関連するイベントをタイムライン上でハイライト表示します。Chrome 131以降で導入され、以降のリリースで機能が拡張されています。
*   **使い方:** Performanceパネルで記録を開始し、ページの読み込みや操作を行った後、記録を停止すると、サイドバーにインサイトが表示されます。インサイトをクリックすると、トレースの関連部分が拡大表示され、問題の特定を支援します。
*   **インサイトの種類:**
    *   **ページ読み込みに関するインサイト:** LCP（Largest Contentful Paint）の改善に焦点を当てたインサイト（LCPの各段階の分析、リクエストの最適化など）や、LCP以外のページ読み込みに関連するインサイト（サードパーティリソースの分析、フォント表示の最適化、ネットワーク依存関係の分析など）。
    *   **応答性に関するインサイト:** INP（Interaction to Next Paint）の分析、DOMサイズの最適化、ビューポートの設定など、ページの応答性に関連する問題の特定を支援するインサイト。
    *   **レイアウトの安定性に関するインサイト:** CLS（Cumulative Layout Shift）の分析、レイアウトシフトの原因となる要素の特定を支援するインサイト。
*   **LCPに関する詳細:** LCPの各フェーズを分析し、どの部分に時間がかかっているかを可視化します。
*   **その他:** サードパーティリソースのパフォーマンス分析、フォント表示の最適化、ネットワーク依存関係の特定、画像配信の改善など、幅広いパフォーマンス問題に対するインサイトが提供されます。
*   **今後の展望:** 現状のインサイトを改善し、新しいインサイトを追加していく予定とのことです。

記事は、InsightsサイドバーがLighthouseの機能をPerformanceパネルに統合し、トレースの理解を深め、データとの関連性を高めることを目指していると結論付けています。

---
# Making :visited more private  |  Blog  |  Chrome for Developers

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/visited-links?hl=en)

## Chromeにおける`:visited`のプライバシー強化について

本記事は、Chrome for Developersブログで公開された、`:visited`セレクタのプライバシーに関する改善について解説しています。

**要約:**

*   **問題点:** ウェブサイトは、ユーザーが以前にクリックしたリンクに対してカスタムスタイルを適用するためにCSSの`:visited`セレクタを使用してきました。しかし、この機能はユーザーのブラウジング履歴を漏洩させる攻撃に悪用される可能性がありました。攻撃者は、`:visited`セレクタを利用して、ユーザーがどのリンクを訪問したかを特定し、ブラウジング履歴の詳細を推測することができました。
*   **解決策:** Chrome 136から、Chromeは`:visited`リンクの履歴を分割（partitioning）することで、この問題を解決しました。
    *   **リンク履歴の分割:**  `:visited`履歴は、リンクがクリックされたコンテキスト（リンクのURL、トップレベルサイト、フレームオリジン）とともに保存されます。これにより、あるサイトで訪問したリンクが、他のサイトで`:visited`として表示されることがなくなります。
    *   **自己リンクの例外:**  同一サイト内のサブページへのリンクについては、ユーザーエクスペリエンスを向上させるため、例外が設けられています。サイトは、自サイトのサブページへのリンクを`:visited`として表示できます。ただし、これは第三者のサイトへのリンクや、サードパーティのiframe内のリンクには適用されません。
*   **効果:**  この改善により、サイトはユーザーのブラウジング履歴をクロスサイトで追跡することがより困難になり、セキュリティが向上します。
*   **その他:**  Chromeは、これらのプライバシー保護を実装した最初の主要ブラウザです。記事内には、より詳しい議論や問題提起、バグ報告のための情報も記載されています。


---
# New in Chrome 135  |  Blog  |  Chrome for DevelopersXGitHubLinkedInMastodonBlueskyHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/new-in-chrome-135?hl=en)

## Chrome 135 の新機能: 要約

この記事は、Chrome 135 の主な新機能を紹介しています。

**主な新機能:**

*   **CSS カルーセル:**  `::scroll-button()` と `::scroll-marker()`  といった新しい CSS 擬似要素により、スクロール可能な領域をカルーセルとして実装できるようになりました。  詳細は  「Carousels with CSS」を参照してください。
*   **`command` と `commandfor` 属性:**  `popovertargetaction` と `popovertarget` 属性を置き換える新しい属性で、ボタンに宣言的な動作を提供します。これにより、シンプルさとアクセシビリティが向上し、組み込みの共通機能が提供されます。詳細は「Introducing command and commandfor」を参照してください。
*   **`shape()` CSS 関数:**  `clip-path` と `offset-path` プロパティの形状を定義するために使用されます。 これは、より標準的な CSS 構文で、追加の単位や数学関数などのフルレンジの CSS 機能を提供します。
*   **その他:**
    *   Web Speech API に MediaStreamTrack のサポートが追加されました。
    *   Float16Array がサポートされ、Baseline Newly available になりました。
    *   Observable API がサポートされました。

**さらに詳しく知りたい方へ:**

*   Chrome 135 リリースノート
*   Chrome DevTools の新機能 (135)
*   ChromeStatus.com の Chrome 135 アップデート
*   Chrome リリースカレンダー

Chrome Developers YouTube チャンネルを購読するか、X や LinkedIn でフォローして、最新情報を入手してください。

記事は 2025 年 4 月 1 日に公開されています。

