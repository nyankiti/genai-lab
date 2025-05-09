# CDN origin timeout increased to two minutes - Vercel

[View on Vercel Blog](https://vercel.com/changelog/cdn-origin-timeout-increased-to-two-minutes)

## Vercel の CDN オリジンタイムアウトが 2 分に延長

Vercel は、CDN がバックエンドからのデータ送信を待機する時間を、従来の 30 秒から最大 120 秒に延長しました。この拡張されたプロキシリクエストタイムアウトは、すべてのプランで追加料金なしで利用できます。

このプロキシリクエストタイムアウトは、CDN が外部バックエンドが応答するのを待機する時間を定義しており、この時間を超えるとリクエストはキャンセルされます。最初のバイトが受信された後、バックエンドは 2 分以上かけてリクエストを完了することもできますが、少なくとも 120 秒ごとにデータの送信を続ける必要があります。

この変更により、LLM 生成や複雑なデータクエリなど、処理時間の長いワークロードの信頼性が向上し、504 ゲートウェイタイムアウトの発生率が減少します。

この変更は直ちに有効であり、ユーザーによるアクションや設定は不要です。

---
# Up to 80% pricing reduction for Web Analytics - Vercel

[View on Vercel Blog](https://vercel.com/changelog/up-to-80-pricing-reduction-for-web-analytics)

## Vercel Web Analytics の価格改定：最大80%の大幅値下げ

Vercel は Web Analytics の価格を大幅に引き下げました。

**主な変更点:**

*   **Web Analytics のイベント単価:** イベント単位での課金となり、10 万イベント単位での課金から変更。単価は 1 イベントあたり 0.00003 ドル (10 万イベントあたり 3 ドル) となり、従来の 10 万イベントあたり 14 ドルから 79% の値下げ。
*   **Web Analytics Plus アドオン:** 月額料金が 10 ドルとなり、従来の 50 ドルから 80% の値下げ。
*   **イベント上限の増加:**
    *   Hobby プラン：月間 5 万イベント (従来の 2.5 千イベントから 20 倍増)
    *   Pro プラン：月間 10 万イベント (従来の 2.5 万イベントから 4 倍増)

Web Analytics Plus アドオンは、データ保持期間の延長や UTM パラメータの利用などの機能を追加するオプションです。

---
# Validate Map Using Spring Validator | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917988032/0/baeldung~Validate-Map-Using-Spring-Validator)

## Validate Map Using Spring Validator | Baeldung 要約

この記事は、SpringのValidatorインターフェースを使用して、`Map<String, String>`を検証する方法について解説しています。

**1. 問題点と既存の解決策の限界:**

*   Springの標準的なBean Validationでは、`Map`のキーと値を直接制約で検証することはできません。`@Length`や`@NotBlank`のようなアノテーションを`Map`の型パラメータに直接適用しても、Hibernate Validatorはそれを認識しません。
*   `Map`がJavaBeanのプロパティとしてラップされている場合、型レベルの制約は有効になる可能性がありますが、キーと値の両方の検証には制限があり、一貫性がありません。

**2. カスタムバリデータの必要性と実装:**

*   この問題を解決するために、Springの`Validator`インターフェースを実装するカスタムバリデータを作成します。
*   バリデータは、`supports()`メソッドと`validate()`メソッドを実装します。
    *   `supports()`は、バリデータが検証するクラスを定義します（この場合、`Map.class`）。
    *   `validate()`は、`Map`の各エントリを反復処理し、キーと値を個別に検証します。
*   キーの長さや値の空白など、個々の要素に対する検証ルールを適用できます。
*   `errors.rejectValue()`を使用して、検証エラーを報告します。

**3. プロジェクト設定:**

*   Spring Bootを使用している場合は、`spring-boot-starter-validation`依存関係を追加します。
*   Spring Frameworkのみを使用している場合は、Jakarta Validation APIとHibernate Validatorの依存関係を手動で追加します。

**4. カスタムバリデータの使用:**

*   カスタムバリデータをSpring管理のサービスに注入し、ビジネスロジックの実行前に使用します。
*   検証結果を`MapBindingResult`に格納し、エラーがある場合は`IllegalArgumentException`をスローします。

**5. まとめ:**

*   カスタムバリデータを使用することで、`Map<String, String>`構造を完全に制御し、各キーと値を検証できます。
*   この方法は、動的な入力、設定、ユーザー定義のフォーム、またはサードパーティのJSON構造を扱う場合に特に有効です。

---
# Testing in Java Series | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917965241/0/baeldung~Testing-in-Java-Series)

## Testing in Java シリーズ - Baeldung

このページは、Baeldungの「Testing in Java」シリーズに関する情報を提供しています。

**内容:**

*   **Azure Container Apps:** Javaアプリケーションとマイクロサービスの構築とデプロイを支援する、フルマネージドのサーバーレスコンテナサービス。
*   **Orkes:** チームがアプリケーション、マイクロサービス、AIエージェントなどを開発、接続、デプロイする方法を変革するためのワークフローオーケストレーションプラットフォーム。
*   **Spring Cloudを使用したマイクロサービスアーキテクチャ:** eBookのダウンロードを案内。
*   **Mockito:** Javaコードのクリーンで直感的な単体テストを容易にするライブラリ。ガイドとeBookのダウンロードを案内。
*   **Java Concurrency:** マルチスレッドアプリケーションの基礎を理解するためのガイドとeBookのダウンロードを案内。
*   **Spring WebFlux:** リアクティブプログラミングの入門、ReactorプロジェクトとSpring Bootの活用を案内。Pro会員向けにeBookのダウンロードを案内。
*   **Java Streams:** ストリームAPIの基本的な使い方から、陥りやすい落とし穴、他の言語機能との組み合わせまでを解説するガイド。Pro会員向けにeBookのダウンロードを案内。
*   **JSONとApache HTTP Client:** eBookのダウンロードを案内。
*   **Apache Maven:** eBookのダウンロードを案内。
*   **SpringとSpring Boot:** Learn Springコースへのリンク。Spring Boot 3とSpring 6を利用したREST API構築に関するコースへのリンク。
*   **Spring Security:** CoreとOAuthに焦点を当てた2つのコースへのリンク。
*   **Spring Data JPA:** Spring BootでJPAを扱うためのコースへのリンク。
*   **テストツール:** JUnit、Mockito、Hamcrest、TestNG、Cucumber、JMeter、AssertJ、SeleniumなどのJavaベースのテストツールに関するガイドへのリンク。

**各テストツールの概要:**

*   **JUnit:** JUnitシリーズガイド。
*   **Mockito:** Mockitoシリーズガイド。
*   **Hamcrest:** テストの可読性を高めるためのマッチャを提供するライブラリ。
*   **TestNG:** テストフレームワーク。
*   **Cucumber:** BDD（ビヘイビア駆動開発）のフレームワーク。
*   **JMeter:** パフォーマンステストツール。
*   **AssertJ:** Fluentインターフェースを使用したアサーションライブラリ。
*   **Selenium:** Webアプリケーションの自動テストツール。
---
# Present and Future of Kotlin for Web | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/05/present-and-future-kotlin-for-web/)

## Kotlin Web開発の現在と未来：要約

JetBrainsのKotlinブログでは、Kotlin Multiplatform（KMP）によるWeb開発への取り組みと今後の展望について発表されました。

**TL;DR:** Kotlinは、Web開発におけるKMPの堅牢でシームレスなサポートを強化するため、以下の分野に注力しています。

*   WebターゲットのIDEサポートの改善
*   Kotlin/WasmとCompose Multiplatform for webのベータ版への昇格
*   古いブラウザ向けのCompose Multiplatform互換モードの提供
*   Kotlin/JSにおける相互運用性の制限の解消
*   Kotlin/JSにおける最新JavaScript標準への対応

**現在の状況：JavaScriptとWasm**

KMPは、JavaScript（Kotlin/JS）とWebAssembly（Kotlin/Wasm）の2つのWebターゲットを提供しています。

*   **Kotlin/JS:** ビジネスロジックの共有に適しており、JSネイティブUIとの連携が容易です。
*   **Kotlin/Wasm:** UIを含むアプリケーション全体を共有する場合に最適で、UI共有シナリオにおいて優れたパフォーマンスを発揮します。

**今後のアップデート**

*   **IDEサポートの改善:** IntelliJ IDEAおよびAndroid StudioでのKMPサポートを強化し、Webターゲットのデバッグ機能やプロジェクト作成ウィザードなどを追加します。
*   **Kotlin/WasmとCompose Multiplatformのベータ版昇格:** WebはCompose Multiplatformユーザーにとって重要なプラットフォームであり、開発体験を向上させるために、アクセシビリティやネイティブHTML要素との相互運用性の改善を進めています。
*   **Compose Multiplatform互換モード:** WasmGCに対応していない古いブラウザ向けに、JavaScript版のCompose Multiplatformを提供する互換モードを導入します。これにより、すべてのブラウザでアプリケーションが利用可能になります。
*   **Kotlin/JSの相互運用性の改善:** @JsExportアノテーションの制限を解消し、よりシームレスなJavaScriptとの相互運用性を実現します。また、多言語Gradleプラグイン内にDSLを導入し、ライブラリからの必要な宣言をすべてエクスポートできるようにします。
*   **Kotlin/JSの最新JavaScript標準への対応:** 最新のJavaScript機能（クラス、ジェネレーター、アロー関数など）のサポートを強化し、バンドルサイズの削減とパフォーマンス向上を図ります。古いブラウザへの対応として、BabelをGradleプラグインに統合します。

**今後の計画**

*   Wasmターゲットにおけるマルチスレッドサポートのプロトタイプ
*   Wasmターゲットにおけるモジュールごとのコンパイル
*   モダンJavaScriptツールとの統合（esbuild、repack、Vite、bunなど）
*   TypeScript型定義からのKotlinラッパーの自動生成

JetBrainsは、コミュニティからのフィードバックを基に、KotlinのWeb開発における明確な方向性を確立しました。
