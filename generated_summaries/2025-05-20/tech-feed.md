# Vercel Blob insights now available in Observability - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-blob-insights-now-available-in-observability)

## Vercel Blob のオブザーバビリティ機能に関する要約

この記事は、Vercel のオブザーバビリティダッシュボードに Vercel Blob 専用のタブが追加されたことを伝えています。このタブでは、アプリケーション全体における Blob ストレージの使用状況に関する詳細なインサイトが得られます。

チームレベルでは、データ転送量、ダウンロード量、キャッシュアクティビティ、API操作などの指標を確認できます。さらに、ユーザーエージェント、エッジリージョン、クライアントIPごとのアクティビティを詳細に分析することも可能です。

これにより、ユーザーは利用パターンを理解し、非効率な部分を特定し、アプリケーションにおけるアセットの保存と提供方法を最適化することができます。

---
# Hypertune joins the Vercel Marketplace - Vercel

[View on Vercel Blog](https://vercel.com/changelog/hypertune-joins-the-vercel-marketplace)

## Vercel Marketplace に Hypertune が登場 - 要約

Hypertune が Vercel Marketplace にネイティブ統合されました。Flags タブの Flags & Experimentation プロバイダーとして利用できます。

この統合により、以下の機能が提供されます。

*   強力なフラグ管理、A/Bテスト、分析、アプリケーション設定
*   型安全なクライアント生成によるエンドツーエンドの型安全性
*   Edge Config を使用した、低遅延のパーソナライゼーション
*   優れた Flags SDK アダプター

ワンクリック設定と統合された請求で、Vercel 上で簡単にインストールしてアクセスできます。Vercel Marketplace 用に構築された Hypertune テンプレートを今すぐデプロイできます。

---
# Stream Gatherers in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918610334/0/baeldung)

## JavaのStream Gathererに関する要約

この記事は、Java 24で導入されたStream Gathererについて解説しています。Stream APIの柔軟性を高めるために導入されたGathererインターフェースの機能と使い方を詳細に説明しています。

**1. 概要**

*   Java 8で導入されたStream APIは、要素の反復、フィルタリング、マッピングなどの基本操作を容易にしますが、中間操作の柔軟性に限界がありました。
*   Java 24では、中間操作の柔軟性を高めるためにGathererインターフェースが導入されました。

**2. Stream Gatherer**

*   Stream Gathererは、カスタムの中間操作を可能にし、パイプラインの柔軟性と表現力を向上させることを目的としています。
*   非同期および増分処理をサポートし、カスタムのデータグループ化または累積を可能にします。
*   要素をm-to-nの関係に変換し、以前に見た要素を追跡して後の要素の変換を決定したり、並列実行を可能にしたり、無限ストリームを有限ストリームに変換したりできます。
*   Gathererは、以下の4つの主要な関数で構成されています。
    *   `initializer()`: 状態を保存するためのオプションの関数。
    *   `integrator()`: 新しいストリーム要素を統合し、要素を出力。
    *   `combiner()`: 並列処理を有効にするオプションの関数。
    *   `finisher()`: ストリームに消費する要素がなくなったときに呼び出されるオプションの関数。
*   組み込みのGathererとして、`fold()`, `mapConcurrent()`, `scan()`, `windowSliding()` などがあります。

**3. 用途**

*   Gathererを使って、1対1、1対多、多対1、多対多など、様々な要素間の関係を処理できます。
*   カスタムGathererの実装方法も解説されており、要素の長さを計算する1対1の例、文を単語に分割する1対多の例、整数のストリームを合計する多対1の例、スライディングウィンドウアルゴリズムを実装する多対多の例などがあります。

**4. まとめ**

*   Gatherer APIは、中間Stream操作に柔軟性と表現力を提供し、 `collect()` に似た機能を中間操作に提供します。
*   さまざまな機能、組み込みGatherer、カスタムGathererの実装方法を解説しています。
*   GitHubでコードを確認できます。

---
# How to Check if a Number Is the Sum of Two or More Consecutive Integers | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918610337/0/baeldung)

## 記事「ある数が2つ以上の連続する整数の和であるかどうかをチェックする方法 | Baeldung」の要約

この記事は、ある数が2つ以上の連続する整数の和として表せるかどうかを判断する方法について解説しています。

**1. 問題の背景**
与えられた整数が、連続する2つ以上の整数の和として表現できるかどうかを判定する問題を扱います。

**2. 数学的背景**
*   **連続する整数の和の特性:** 連続する整数の和は、その数列の長さと最初の項の値を考慮することで計算できます。
*   **重要な定理:** 2つ以上の連続する整数の和として表現できるのは、2の累乗以外のすべての正の整数です。
    *   2の累乗は、因数分解すると奇数と偶数の因数に分離できないため、連続する整数の和として表現できません。
    *   2の累乗以外の整数は、少なくとも1つの奇数の約数(1より大きい)を持つため、連続する整数の和として表現できます。

**3. 実装方法**
*   **ブルートフォースアプローチ:**
    *   考えられるすべての数列の長さを試し、和が対象の整数に等しくなるかどうかをチェックします。
    *   実装は分かりやすいですが、nの値が大きくなると効率が悪くなります。
*   **最適化されたアプローチ(ビット演算):**
    *   与えられた整数が2の累乗かどうかをビット演算を用いて判定します。
    *   正の整数nが2の累乗でなければ、2つ以上の連続する整数の和として表せます。
    *   O(1)の時間計算量で済み、非常に効率的です。

**4. まとめ**
2の累乗以外のすべての正の整数は、2つ以上の連続する整数の和として表現できます。ブルートフォースアプローチは理解しやすいですが、最適化されたビット演算による方法は、非常に大きな入力に対しても効率的です。

---
# Flexible Pub/Sub Messaging With Spring Boot and Dapr | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918572855/0/baeldung)

この記事は、Spring BootとDaprを使用して、特定のブローカーに依存しない柔軟なPub/Subメッセージングシステムを構築する方法について解説しています。

**主な内容:**

*   **Daprの概要:** Dapr（分散アプリケーションランタイム）は、分散システムにおける共通の課題に対処するためのAPIとビルディングブロックを提供します。インフラストラクチャを抽象化することで、ビジネスロジックに集中できるようになり、テストの容易性、環境間の移植性、インフラストラクチャ変更に対する回復力が向上します。
*   **Spring Bootとの統合:** Daprは、Spring Bootとのシームレスな統合を提供し、`DaprMessagingTemplate`や`@Topic`などの馴染みのあるインターフェースを使用して、基盤となるインフラストラクチャの詳細を知ることなく、分散メッセージング機能を活用できます。これにより、コードを変更することなくブローカーを簡単に交換できます。
*   **Ride-hailingアプリの例:** ユーザーがライドをリクエストし、ドライバーがそのリクエストをサブスクライブするライド・ヘイリングのシナリオを通じて、Pub/Subシステムの構築方法を説明します。
*   **依存関係:** `spring-boot-starter-web`と`dapr-spring-boot-starter`の依存関係を追加します。テストには`dapr-spring-boot-starter-test`とRabbitMQコンテナを使用します。
*   **パブリッシャーの実装:** `DaprMessagingTemplate`を使用してメッセージを送信します。`application.properties`でメッセージングコンポーネントの名前を設定し、`@Configuration`と`@EnableConfigurationProperties`を使用して構成します。
*   **サブスクライバーの実装:** `@Topic`アノテーションを使用して、受信メッセージをコントローラーメソッドにバインドします。CloudEventオブジェクトからペイロードを取得し、条件に基づいてライドを受け入れるか拒否します。拒否の場合は例外をスローしてメッセージを再キューイングします。
*   **Testcontainersを使用したテスト:** Testcontainersを使用して、DaprサイドカーとRabbitMQインスタンスをローカルで起動し、外部ツールやDapr CLIに依存せずに、パブリッシャーとサブスクライバーの動作をテストします。
    *   **テスト構成:** テストプロパティ、メッセージングコンポーネント名、Daprコンテナの専用ポートなどを設定します。
    *   **コンテナ構成:** RabbitMQコンテナとDaprコンテナを構成します。Daprコンテナの設定には、`requeueInFailure`、`withComponent`、`withAppChannelAddress`などを使用します。
    *   **テストアプリ:** テストパッケージ内にテストアプリを作成し、メインアプリケーションクラスを参照します。
    *   **統合テスト:** `@SpringBootTest`アノテーションを使用して統合テストを作成し、コントローラーとDaprコンテナを注入します。テストでは、受け入れ可能なライドと拒否されたライドのシナリオを検証します。
*   **結論:** DaprとSpring Bootの統合により、特定のインフラに依存することなく、疎結合なPub/Subメッセージングシステムを構築できることを示しました。Testcontainersを使用することで、ローカルで簡単にテストを実行できます。

記事の目的は、Daprを活用して、柔軟でテスト可能なPub/SubメッセージングシステムをSpring Bootで構築する方法を具体的に示すことです。

---
# Kotlin Multiplatform Tooling: Now in IntelliJ IDEA and Android Studio | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/05/kotlin-multiplatform-tooling-now-in-intellij-idea-and-android-studio/)

## Kotlin Multiplatform Tooling: IntelliJ IDEAとAndroid Studioで利用可能に

このブログ記事は、Kotlin Multiplatform (KMP) の新しいツール群が、IntelliJ IDEAとAndroid StudioのBeta版としてリリースされたことを発表しています。このプラグインは、プロジェクトのセットアップからクロスプラットフォーム開発、Compose UIプレビューまで、KMP開発のあらゆる側面を簡素化します。

**主な機能:**

*   **統合された新規プロジェクトウィザード:** IDE内でKMPプロジェクトを簡単に作成できます。Android、iOS、デスクトップ、Web、サーバーなど、すべてのターゲットの組み合わせをサポートし、ネイティブUIまたはCompose MultiplatformのUIを選択できます。
*   **事前チェック:** プロジェクトを開くと、OS、Java、Android SDK、Xcode、Gradle設定などの環境チェックが自動的に実行され、不足や古いものがあれば修正方法が提示されます。
*   **実行構成の自動生成:** Android、iOS、Web、デスクトップ、サーバーなど、プロジェクトで利用可能なすべてのプラットフォームの実行構成が自動的に生成されます。
*   **クロス言語サポート:** KotlinとSwiftの両方を使用するプロジェクトで、IDE内でのクロス言語ナビゲーション、構文のハイライト表示、クイックドキュメント、デバッグが可能になります。
*   **Compose Multiplatformサポート:** Compose Multiplatform for iOSがStableになり、iOS、Android、デスクトップで共有UIを構築できるようになりました。オートコンプリート、ナビゲーション、リファクタリング、リソースサポートなどの機能により、IDE内でCompose Multiplatformコードをフルサポートします。UIプレビューも可能です。
*   **Compose Hot Reload:** UIの変更をアプリを再起動したり、状態を失うことなく、即座に確認できます。レイアウト、スタイル、ロジックを変更しても、Hot Reloadが変更を検出し、ライブで適用されます。

**インストール方法:**

JetBrains Marketplaceから、IntelliJ IDEA 2025.1.1とAndroid Studio Narwhal 2025.1.1にKMPプラグインをインストールできます。現在macOSのみをサポートしており、WindowsとLinuxのサポートは近日公開予定です。K2モードを有効にする必要があり、設定から有効にできます。

**今後の展望:**

*   **プラットフォームサポートの拡大:** WindowsとLinuxのサポートが追加されます。
*   **SwiftのIDEサポートの強化:** より高度な機能（使用箇所の検索、型階層ナビゲーションなど）が計画されています。
*   **KMPモジュールの作成の簡素化:** 統合されたKMPウィザードを使用して、新しいKMPモジュールを作成できるようになります。
*   **Webおよびデスクトッププラットフォームのツールサポートの改善:** モバイルプラットフォームのサポートが安定した後、デスクトップとWeb開発のツールを改善し、スムーズで統一されたマルチプラットフォーム体験を目指します。

**フィードバックの募集:**

Kotlinlang Slackの#multiplatformチャンネルでフィードバックを募集しており、問題があればIssue Trackerで報告できます。

---
# SendGrid SDKを使わずSpringのRestClientで直接APIを呼び出してメール送信するメモ - IK.AM

[View on IK.AM](https://ik.am/entries/851)

## SendGrid SDKを使わずにSpringのRestClientでメール送信するメモ

この記事は、SendGridのJava SDKを使わずに、SpringのRestClientを用いて直接SendGrid APIを呼び出し、メール送信を行う方法について解説しています。

**背景と利点:**

*   SendGrid SDKは便利だが、コードのカスタマイズ性や開発・テスト用途での送信先変更の煩雑さ、古いApache HttpClientの使用といった理由から、著者個人の好みには合わない。
*   シンプルなREST APIアクセスでメール送信できるため、SDKを使わずにSpringのRestClientで十分。
*   RestClientを使用することで、クライアントサイドのアクセスログ、オブザーバビリティ（トレース、メトリクス）、リトライなどの既存の機能を利用でき、他のAPI呼び出しと同様の運用が可能。

**実装手順:**

1.  **プロジェクト作成:** Spring Initializrを使用してSpring Bootプロジェクトを作成し、必要な依存関係（web, actuator, configuration-processor, prometheus, testcontainers）を追加。
2.  **プロパティ設定:** SendGridのAPIキー、ベースURL、送信元メールアドレスをプロパティとして定義し、`SendGridProps`レコードクラスを作成。
3.  **メインクラスの設定:** `@ConfigurationPropertiesScan`アノテーションを追加して、プロパティをスキャンできるようにする。
4.  **/v3/mail/send API呼び出し:** `HelloController`クラスで、`RestClient`を用いて`/v3/mail/send` APIを呼び出すロジックを実装。リクエストボディは、送信先、件名、本文、返信元をMapで構成。
5.  **TestcontainersでのSendGridモック起動:** 実際のSendGrid APIではなく、モックサービスMailDevを利用するために、Testcontainersの設定を追加。これにより、テスト環境でメール送信の動作をシミュレートできる。
    *   MailDevは、SendGrid APIをラップし、モックSMTPサーバーとして機能する。
    *   Testcontainersの設定では、MailDevのDockerイメージを指定し、ポートマッピングや起動時のログ監視を設定。
    *   `DynamicPropertyRegistrar`を使用して、Testcontainersで起動したMailDevのURLとAPIキーをSpringのプロパティに登録。
6.  **テスト:** Testcontainersを利用したIntegration Testを作成し、メールが正しく送信されたか、MailDevのWeb UIで確認できる。
    *   `spring.http.client.factory=simple`を設定し、HTTP/2非対応のSimpleClientHttpRequestFactoryを使用。
    *   `/email` APIを呼び出し、受信したメールの内容を検証。
7.  **SendGridへの送信:** ローカルでの動作確認後、SendGridのAPIキーと送信元メールアドレスを設定して、実際にSendGrid経由でメールを送信する。

**まとめ:**

この記事では、SpringのRestClientを活用してSendGrid APIを直接呼び出し、メールを送信する方法を解説しました。Testcontainersを用いたモック環境でのテストも紹介し、より実践的な内容となっています。これにより、SendGrid SDKに依存せず、Springの既存機能を利用して、柔軟なメール送信機能を実装できます。
