# Z.ai's GLM-4.5 and GLM-4.5 Air are now supported in Vercel AI Gateway - Vercel

[View on Vercel Blog](https://vercel.com/changelog/z-ais-glm-4-5-and-glm-4-5-air-are-now-supported-in-vercel-ai-gateway)

Z.aiの最新フラッグシップモデルであるGLM-4.5とGLM-4.5 Airが、VercelのAI Gatewayで利用可能になりました。これにより、ユーザーは他のプロバイダーアカウントを必要とせずに、これらのモデルにアクセスできます。

AI Gatewayを使用することで、ユーザーは一貫したAPIを通じてモデルを呼び出し、使用量とコストを追跡し、パフォーマンス最適化、リトライ、フェイルオーバーを設定して、プロバイダー平均以上の稼働時間を確保できます。

AI SDK v5で利用するには、まずパッケージをインストールし（pnpm i ai@beta）、モデルをzai/glm-4.5またはzai/glm-4.5-airに設定します。具体的なコード例も示されています。

AI Gatewayは、組み込みのオブザーバビリティ、BYOK（Bring Your Own Key）サポート、および自動リトライによるインテリジェントなプロバイダールーティングを提供します。AI Gatewayの詳細については、関連リンクを参照してください。

---
# Should Jackson’s ObjectMapper be Declared as a Static Field? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922350494/0/baeldung)

## JacksonのObjectMapperをstaticフィールドとして宣言すべきか？

この記事は、JavaのJSONライブラリであるJacksonの`ObjectMapper`を静的フィールドとして宣言することの利点と欠点について解説しています。

**1. はじめに**

Jacksonの`ObjectMapper`はJavaのJSON処理の中心的な存在です。`ObjectMapper`の構築と設定には、クラスパスの操作、モジュールの検出、内部キャッシュのウォームアップなどが含まれるため、共有のMapperを使用すべきか、それとも呼び出しごとに新しいMapperを作成すべきか、という疑問が生じます。この記事では、トレードオフを検討し、Jacksonのスレッドセーフティ保証を検証し、実用的なガイダンスを提供します。

**2. 開発者がstatic ObjectMapperを使用する理由**

`ObjectMapper`を作成する際には、Moduleのロードと登録、Serializer/Deserializerキャッシュの構築、アノテーションのスキャン、デフォルトフォーマッタの設定など、多くの処理が行われます。これらの処理をリクエストごとに行うとパフォーマンスが低下する可能性があります。そのため、以下のようなヘルパークラスを使用することが一般的です。

```java
public final class JsonUtils {
    public static final ObjectMapper MAPPER = new ObjectMapper();
}
```

これにより、JVM全体で再利用可能なMapperが提供され、レイテンシの改善につながります。ただし、正しく設定を管理する必要があります。

**3. Jacksonのスレッドセーフティ**

Jacksonは以下のスレッドセーフティを保証しています。

*   **最初の使用後、不変であること:** 公式Javadocによると、`ObjectMapper`は、すべての設定が最初の読み書き呼び出しの前に完了していれば、完全にスレッドセーフです。
*   **設定メソッドはコピーを行い、パッチは行わないこと:** `enable()`、`disable()`、または`configure()`のような呼び出しは、単一のvolatile書き込みを介して、新しい不変の`SerializationConfig`/`DeserializationConfig`インスタンスをインストールします。既存のライターは古いスナップショットを保持するため、同時切り替えでデータが破損することはありません。
*   **可変の協力者が契約を破る:** 状態を持つスレッドセーフでないオブジェクト（例：`java.text.SimpleDateFormat`）を`setDateFormat()`を介して注入すると、安全でない共有状態が再導入されます。

したがって、危険なのは、Jacksonが単に委譲する可変のヘルパーを共有することです。

**4. 再利用によるパフォーマンスへの影響**

シングルトンMapperは以下のメリットを提供します。

*   コールドスタートコストをゼロにする（モジュール検出とアノテーションスキャンは一度だけ実行されます）
*   ホットシリアライザキャッシュ（高価なシリアライザはメモリ内に保持されます）
*   ガーベージの削減（各リクエストは、必要な増分バッファのみを割り当てます）

ただし、Mapperが常に再設定またはクローン化されると、これらの利点は失われます。そのため、「一度設定し、永遠に使用する」ことを目指すべきです。

**5. グローバルMapperの欠点**

単一のアプリケーション全体で`ObjectMapper`を使用すると、定型文を回避できますが、微妙なバグが発生する可能性があります。以下の問題はすべて、コードベースのすべての部分が同じ可変インスタンスと通信しているという事実に起因します。

*   **設定のリーク:** ある場所で行われた設定の変更は、他のすべての場所にリークします。
*   **テストにおける隠れた結合:** グローバルMapperを共有する単体テストは、固定された順序で実行するか、手動でリセットする必要があります。そうしないと、隠れた状態が残ります。
*   **要件の競合:** 異なるコンシューマーは、互換性のない設定を必要とする場合があります。グローバルMapperを使用すると、最後の設定が優先されます。
*   **競合状態:**  `setDateFormat()`のようなスレッドセーフでないメソッドを使用すると、競合状態が発生する可能性があります。

**6. スコープされた代替手段**

グローバルインスタンスを作成したくない、または`ObjectMapper`を毎回作成したくない場合は、代替手段を探す必要があります。

*   **依存性の注入（Spring）:** Spring Beanはデフォルトでシングルトンであるため、静的状態に頼ることなく、ApplicationContextごとに正確に1つのMapperを公開できます。
*   **1回限りの調整のための軽量コピー:** たとえば、単一のレスポンスのプリティプリントが必要な場合は、グローバルMapperを変更する代わりに、Mapperをフォークできます。

**7. 結論**

この記事では、静的`ObjectMapper`について考察しました。これは、最初の呼び出しの前にすべての設定を完了し、可変のヘルパーの注入を避ける場合に完全に安全です。その規律が困難または不可能な場合は、DIシングルトンまたは`copy()`呼び出しを使用することをお勧めします。最も重要なことは、`SimpleDateFormat`のような可変でスレッドセーフでないオブジェクトをグローバルスコープから外し、Jacksonが設計されたように、スレッド間で高速で予測可能なJSON処理を提供することです。

---
# Understanding Message Delivery with Multiple Partitions | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922350497/0/baeldung)

## Understanding Message Delivery with Multiple Partitions | Baeldung 要約

この記事は、Apache Kafkaにおけるメッセージ配信の仕組みを、複数のパーティションを持つトピックを中心に解説しています。Kafkaのパーティションアーキテクチャが、どのようにメッセージの順序性、スケーラビリティ、そして消費者の協調動作を実現しているのかを詳細に説明しています。

**1. パーティションへのメッセージルーティング:**

*   **キーベースのパーティショニング:** メッセージにキーが設定されている場合、KafkaはMurmurHash2アルゴリズムなどの決定論的ハッシュ関数を用いて、同一キーのメッセージが常に同じパーティションにルーティングされるようにします。これにより、関連するメッセージの順序性を保証できます。
*   **キーレスメッセージのラウンドロビン:** キーが設定されていないメッセージは、スティッキーパーティショニングという手法で配信されます。これは、バッチ処理の効率を向上させるために、あるパーティションが完全にいっぱいになるまで、同じパーティションにメッセージを詰め込む方法です。

**2. パーティション間における順序性の保証:**

*   **パーティション内の順序性:** 各パーティション内では、メッセージはシーケンシャルなオフセットで厳密な順序が保証されます。
*   **パーティション間の順序性:** 異なるキーを持つメッセージは異なるパーティションにルーティングされる可能性があるため、パーティション間での順序性は保証されません。

**3. コンシューマーグループの協調動作:**

*   **パーティション割り当て:** 同じグループ内の複数のコンシューマーは、Kafkaによってパーティションが割り当てられ、各パーティションは1つのコンシューマーによって処理されます。これにより、グループ内での重複処理を防止し、並列処理によるスケーラビリティを確保します。
*   **複数のグループによるファンアウト:** 異なるコンシューマーグループは、同じメッセージを独立して処理できます。各グループは独自のオフセット追跡を行い、異なるサービスがそれぞれのペースでメッセージを処理できます。

**4. コンシューマーのリバランス:**

*   コンシューマーがグループに参加または脱退すると、Kafkaはパーティションの再割り当てを行います。協調的な再割り当て戦略を使用することで、影響を受けるコンシューマーを最小限に抑え、中断を軽減します。

**5. メッセージ処理の保証:**

*   Kafkaでは、at-least-once配信を実現するために、手動でオフセットコミットを制御します。メッセージ処理に失敗した場合でも、メッセージが失われないようにします。

**6. まとめ:**

Kafkaは、パーティションベースのアーキテクチャを採用しており、スケーラビリティとスループットを重視しています。パーティションレベルでの順序性を保証することで、ほとんどの現実世界の要件に対応できます。アプリケーションをこれらの制約に合わせて設計することで、効率的に大量のメッセージを処理できるスケーラブルなシステムを構築できます。

**補足:**

記事には、Azure Container Apps、Orkes、Spring Boot、Spring Security、Spring Data JPA、AIチャットボットなどの関連情報へのリンクも含まれています。

---
# How to Use ParameterizedTypeReference in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922350050/0/baeldung)

## 記事の要約

この記事は、Javaにおけるジェネリック型を扱う際の型消去問題に対処するためのSpringの `ParameterizedTypeReference` の使用方法について解説しています。

**1. 型消去の問題と解決策:**

*   Javaの型消去により、実行時にジェネリック型情報が失われます（例： `List<String>` と `List<Integer>` は実行時には `List` になる）。
*   `ParameterizedTypeReference` は、コンパイル時に完全なジェネリック型情報を保持し、実行時にも利用できるようにすることで、この問題を解決します。

**2. `ParameterizedTypeReference` の使用方法:**

*   `RestTemplate` と `WebClient` の両方で使用できます。
*   `RestTemplate` では、 `exchange()` メソッドで利用し、ジェネリックコレクション ( `List<User>` など) を正しく型付けして取得できます。
*   `WebClient` では、リアクティブな操作 ( `Mono` や `Flux` ) でネストされたジェネリック型 ( `Map<String, List<User>>` など) を扱う際に使用します。
*   カスタムのジェネリックラッパーオブジェクト ( `ApiResponse<T>` など) のデシリアライズにも対応します。

**3. ベストプラクティス:**

*   `ParameterizedTypeReference` は、ジェネリックコレクション、カスタムジェネリックラッパー、ネストされたジェネリック型を扱う場合に利用します。
*   シンプルな型や、ジェネリック型を使用しない場合は不要です。
*   頻繁に使用する型参照は、静的定数として定義し、再利用することでパフォーマンスを向上させます。

**4. まとめ:**

`ParameterizedTypeReference` は、SpringのHTTPクライアントでジェネリック型を扱う上で不可欠なツールです。型消去の問題を解決し、ジェネリックコレクションや複雑な型の扱いを容易にします。

---
# Restart a Job on Failure and Continue in Spring Batch | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922350053/0/baeldung)

このBaeldungの記事は、Spring Batchにおけるジョブの失敗からの再開と継続に関する包括的なガイドです。

**1. はじめに**
Spring Batchは、ジョブが失敗した場合に再開できる強力なメカニズムを提供します。これにより、大規模なデータ処理タスクを効率的に処理できます。Spring BatchのJobRepositoryはジョブ実行状態を永続化し、デフォルトでジョブの再開を可能にします。

**2. Maven依存関係**
spring-boot-starter-batch、spring-boot-starter-data-jpa、およびh2依存関係をpom.xmlにインポートする必要があります。H2データベースを使用してジョブ実行状態を永続化し、アプリケーション実行間でジョブの再開を可能にします。

**3. シンプルなSpring Batchジョブの定義**
BatchConfigクラスを作成し、simpleJobという名前のジョブを設定します。このジョブは、CSVファイルを処理する単一のステップで構成されます。
*   **3.1. 設定:** simpleJobは、JobBuilderを使用して定義され、step1ステップでCSVファイルを読み込み、処理し、書き込みます。
*   **3.2. Item Reader:** FlatFileItemReaderは、data.csvファイルから文字列を読み込み、各行を文字列にマッピングします。 saveState(true)を使用して、実行コンテキストに読み取り位置を永続化し、ジョブの失敗時に最後の未コミットチャンクから再開できるようにします。
*   **3.3. Item Processor:** RestartItemProcessorは、各アイテムを処理し、PROCESSEDをプレフィックスとして付加します。Item3で失敗をシミュレートします。
*   **3.4. Item Writer:** ItemWriterは、処理されたアイテムをコンソールに出力します。

**4. 失敗したSpring Batchジョブの再開**
Spring Batchジョブはデフォルトで再開可能であり、失敗した時点からシームレスに再開できます。この機能を使用するには、ジョブの状態をJobRepositoryに永続化する必要があります。
*   **4.1. ジョブの失敗のシミュレーション:** ItemProcessorは、Item3の処理中にRuntimeExceptionをスローするように構成されます。
*   **4.2. ジョブの再開:** CommandLineRunnerを使用して、JobExplorerと固定JobParametersを使用して失敗したジョブインスタンスを検出し、JobLauncher.run()またはJobOperator.restart()を使用してジョブを再開します。 RestartItemProcessorのsetFailOnItem3(false)を設定してItem3での失敗を無視します。
*   **4.3. ジョブの再開のテスト:** ユニットテストを追加して、Spring Batchのジョブ再開機能を検証します。
*   **4.4. ジョブの再開の防止:** .preventRestart()をJobBuilderに追加して、ジョブを常に最初から開始するように構成し、再開を防止します。

**5. 結論**
Spring Batchのデフォルトの再開機能は、ジョブの失敗からの堅牢な回復を可能にします。これにより、失敗したジョブが完了したアイテムを再処理したり、データを失うことなく、失敗した時点から再開できるようになります。この記事では、再開機能を説明するシンプルなジョブを作成しました。また、JobBuilderでpreventRestart()を使用してこの動作をオーバーライドする方法についても説明しました。

---
# Koog: Building and Scaling AI Agents – Join Our Livestream Series | The JetBrains Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/ai/2025/07/koog-building-and-scaling-ai-agents-join-our-livestream-series/)

## Koog: AIエージェントの構築とスケーリング – ライブストリームシリーズ開催のお知らせ (JetBrainsブログ)

JetBrainsは、AIエージェントの構築に焦点を当てたライブストリームシリーズ「Koog: Building and Scaling AI Agents」を開催することを発表しました。このシリーズは、JetBrainsが提供するオープンソースのAgenticフレームワークであるKoogを使って、KotlinでAIエージェントを開発する方法を学ぶことを目的としています。

**イベントの詳細:**

*   **内容:** Koogの基本的な概念から高度なユースケースまで、Kotlin開発者だけでなく、AIに興味のある方々にも役立つ内容です。
*   **開催日:** 2025年8月12日と18日
*   **時間:** いずれもUTC午後3時
*   **登録:** 現在受付中

**セッション内容:**

*   **セッション1 (8月12日): KotlinでAIエージェント開発を始める - Koogのご紹介**
    *   Koogの哲学、ビジョン、成長中のエコシステム
    *   AIエージェント開発にKotlinを選ぶ理由
    *   Koogのコアアーキテクチャとエージェントモデルの内部構造
    *   最初の"Hello Agent"を最小限の設定で構築し、実行する方法

*   **セッション2 (8月18日): KoogでよりスマートなAIエージェントを構築する**
    *   Koogエージェントがコンテキストとどのように連携し、その動作を制御するか
    *   組み込みのトレース機能を使用したデバッグと可観測性
    *   外部ツールとAPIを統合してエージェントの機能を拡張する方法
    *   旅行計画エージェントの構築方法

**参加のメリット:**

*   JetBrainsの最新Kotlinベースのフレームワークに関する実践的な知識
*   Koogの開発者から直接学ぶ
*   質疑応答やフィードバックの機会

このシリーズは、シンプルなエージェントから動的で状態を持ち、説明可能なシステムへと移行したい開発者にとって、Koogが最適な理由を理解する絶好の機会です。

---
# Ship, Share, and Win: The Kotlin Multiplatform Award at Shipaton 2025 | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/07/kmp-shipaton/)

## Ship, Share, and Win: Shipaton 2025 での Kotlin Multiplatform Award

**概要:**

JetBrainsは、2025年8月1日から9月30日まで開催されるモバイルアプリ開発ハッカソン「RevenueCat Shipaton 2025」のゴールドスポンサーとして、Kotlin Multiplatformを活用した開発を推進し、優れたアプリを表彰する「Kotlin Multiplatform Reach Award」を創設しました。この賞は、技術力だけでなく、Kotlinコミュニティにおける共有精神も重視しています。

**内容:**

*   **Shipaton 2025:**
    *   2ヶ月間のグローバルハッカソンで、新しいモバイルアプリの開発に焦点を当てています。
    *   Kotlin開発者にとって、Compose Multiplatform for iOSが安定版となり、絶好の機会となっています。
    *   参加者は、8週間で新しいモバイルアプリを構築し、RevenueCat SDKを統合してアプリ内またはWeb購入機能を実装し、締め切り前にApp StoreまたはGoogle Playに公開する必要があります。
*   **Kotlin Multiplatform Reach Award:**
    *   KotlinとCompose Multiplatformを用いてiOSとAndroid両方のアプリを開発し、最も優れたアプリに贈られます。
    *   開発プロセスをコミュニティと共有することも評価対象となります。
    *   賞金総額は55,000ドルで、上位5チームに分配されます。
    *   **受賞条件:**
        *   KotlinとCompose Multiplatformを使用したアプリであること。
        *   KotlinとCompose Multiplatformでの開発経験に関する短い説明または開発ストーリーの共有（ブログ記事、X/Twitterスレッド、LinkedIn記事、ビデオなど）。
        *   質問例: 
            *   最も印象的だった「aha!」体験や時間節約になったこと。
            *   開発プロセスで最も驚いたこと。
            *   克服した最大の課題。
*   **特別企画: Junie, AI coding agent:**
    *   Shipaton参加者向けに、JetBrainsのAIコーディングエージェント「Junie」を利用できる特別プログラムを実施。
    *   選ばれた20名の開発者は、Junieを2ヶ月間フルアクセスでき、開発プロセスを公開し、JetBrainsにフィードバックを提供します。
*   **その他:**
    *   KotlinとCompose Multiplatformの入門リソースへのリンクを提供。
    *   KMP（Kotlin Multiplatform）に関するFAQブログ記事へのリンクも掲載。

**目的:**

*   Kotlin MultiplatformとCompose Multiplatformを使用したモバイルアプリ開発を促進。
*   Kotlinコミュニティにおける技術力の向上と、開発プロセスの共有を奨励。
*   Shipaton 2025を通じて、Kotlinの認知度と利用を拡大。
---
# Mavenプロジェクトのmainクラスを直接javaコマンドで実行するメモ - IK.AM

[View on IK.AM](https://ik.am/entries/864)

## Mavenプロジェクトのmainクラスを直接javaコマンドで実行する方法

この記事は、Mavenプロジェクトのmainクラスを、 `mvn exec:java` や `mvn spring-boot:run`、または実行可能jarファイルを使わずに、直接 `java` コマンドで実行する方法を解説しています。

**主なポイント:**

*   **実行方法:**
    1.  `mvn compile` でプロジェクトをコンパイルします。
    2.  `java -cp target/classes:$(mvn dependency:build-classpath -q -Dmdep.outputFile=/dev/stdout) com.example.changeme.Main` を実行します。`com.example.changeme.Main` は、実行したいmainクラスの完全修飾名に置き換えます。
    3.  `mvn dependency:build-classpath -q -Dmdep.outputFile=/dev/stdout` コマンドは、依存関係にあるjarファイルのパスをまとめて出力します。

*   **Spring Bootの例:**
    *   Spring Initializrを使ってSpring Bootプロジェクトを作成し、上記の手順で実行できることを確認しています。
    *   Spring Bootアプリケーションが正常に起動することを確認しています。

*   **高速化のヒント:**
    *   `./mvnw dependency:build-classpath -q -Dmdep.outputFile=/dev/stdout > build-classpath.txt` で依存関係のパス情報をファイルに保存しておくと、実行時の起動速度が向上します。
    *   `java -cp target/classes:$(cat build-classpath.txt) com.example.DemoApplication` のように、ファイルを参照して実行します。
    *   `pom.xml` に変更を加えた場合は、`build-classpath.txt` を更新する必要があります。

---
# Introducing study mode | OpenAI

[View on OpenAI News](https://openai.com/index/chatgpt-study-mode)

## ChatGPTの新機能「Study Mode」の紹介

OpenAIは、ChatGPTに新たな学習モード「Study Mode」を導入しました。これは、単なる答えを提供するのではなく、問題を段階的に解決するためのガイダンスを提供する学習体験を提供します。

**Study Modeの特徴**

*   **対話的なプロンプト:** ソクラテス式質問、ヒント、自己反省プロンプトを組み合わせ、答えを直接提供するのではなく、理解を深め、積極的な学習を促進します。
*   **足場を組んだ回答:** 情報はわかりやすいセクションに整理され、トピック間の主要なつながりが強調され、適切な量のコンテキストを提供することで、複雑なトピックの圧倒感を軽減します。
*   **パーソナライズされたサポート:** スキルレベルや過去のチャットからの記憶に基づいて、ユーザーに適したレベルでレッスンが提供されます。
*   **知識チェック:** クイズや自由記述式の質問、パーソナライズされたフィードバックを通じて、知識の定着を促し、新しい状況で知識を応用する能力をサポートします。
*   **柔軟性:** 会話中にStudy Modeを簡単にオン/オフでき、学習目標に合わせて柔軟に対応できます。

**Study Modeの仕組み**

Study Modeは、教師、科学者、教育専門家と協力して作成されたカスタムシステム指示によって支えられています。この指示は、深い学習をサポートする一連のコア行動（積極的な参加の奨励、認知負荷の管理、メタ認知と自己反省の積極的な発達、好奇心の育成、実用的で支持的なフィードバックの提供）を反映しています。

**学生によるStudy Modeの利用例**

Study Modeは、大学生を念頭に置いて設計されました。学生からは、以下のようなフィードバックが寄せられています。

*   「24時間365日、すべてを知っている「オフィスアワー」のようなもの」
*   「密度の高い資料を明確でわかりやすく説明してくれる」
*   「理解するのに何度も挑戦していた概念について、3時間の学習セッションの後、自信を持てるほど理解できた」

**Study Modeの使用例**

*   ゲーム理論の学習
*   宿題のサポート
*   試験対策
*   新しいトピックの学習

**Study Modeの現状と今後の展望**

Study Modeは、カスタムシステム指示によって実現されています。OpenAIは、学生からのフィードバックを通じて学習し、エクスペリエンスを改善することを重視しています。

今後の展望として、以下の機能が検討されています。

*   複雑な概念やテキスト量の多い概念のより明確な可視化
*   会話全体の目標設定と進捗状況の追跡
*   各学生のスキルレベルと目標に合わせたより深いパーソナライゼーション

OpenAIは、AIと学習に関する研究を推進し、教育分野におけるAIの最適な活用方法について研究を続けています。そして、学習成果への影響について分析し、より良い教育体験を提供することを目指しています。
