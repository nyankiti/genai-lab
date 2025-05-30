# Java Weekly, Issue 596 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919222895/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 596 要約

この Java Weekly の Issue 596 は、2025年5月9日に更新され、Java と Spring フレームワークに関連する最新のニュース、記事、ウェビナー、リリース情報などをまとめています。

**主な内容:**

1.  **Spring と Java:**

    *   Spring AI と Java Virtual Threads を組み合わせたバッチ処理によるプロンプト送信方法のガイド
    *   Spring Boot 3.5 のリリース（設定、コンテナ、SSL の改善など）
    *   Spring Authorization Server 1.5 GA リリース
    *   Spring Data Ahead of Time Repositories について
    *   Java 30周年記念記事
    *   Spring Boot で gRPC を Mocking する方法
    *   MockMvcTester を使用して JSON としてオブジェクトを返すユニットテストの記述方法
2.  **ウェビナーとプレゼンテーション:**

    *   Java でのパターンマッチング
    *   James Lewis によるインタビュー
    *   Spring IO 創設者 Sergi Almar のポッドキャスト
    *   Tomcat 11 への Vaadin アプリケーションの WAR としてのデプロイ方法
    *   MongoDB のデータ形式である BSON の入門ガイド
3.  **アップグレード情報:**

    *   Spring Security 6.4.6
    *   Spring Boot 3.5.0
    *   Spring Integration 6.5 GA
    *   Hibernate Reactive 3.0.0.Final および 4.0.0.Beta1
    *   Quarkus 3.23.0.CR1
    *   Jetty.project 12.1.0.beta0
    *   Vert.x 5.0.0.CR8
    *   Zuul v3.0.10
    *   Micronaut-core v4.8.14
    *   Camel-4.12.0
    *   Payara Platform Community 6.2025.5
4.  **Technical & Musings:**

    *   Retrieval Augmented Generation (RAG) の基礎に関する理論的な概要
    *   Azul と JetBrains の Kotlin ワークロードのランタイムパフォーマンス向上に関するコラボレーション
    *   Reactor Kafka プロジェクトの廃止
    *   Aurora DSQL のスケーリングに関する記事
    *   Embable による Gen AI への AI の活用方法
5.  **Pick of the Week:**

    *   人生を変えるかもしれない 5 つのシンプルなアイデア

**全体として、この Java Weekly は、Java および関連技術の最新の動向、新機能、改善点、アップグレード情報を網羅しており、開発者にとって有益な情報源となっています。**

---
# @Provides vs Provider Classes in Guice | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919184498/0/baeldung~Provides-vs-Provider-Classes-in-Guice)

## Guiceにおける@ProvidesとProviderクラスの比較

このチュートリアルでは、Googleの依存性注入フレームワークであるGuiceにおける`@Provides`アノテーションとProviderクラスの違いについて解説しています。

**1. Guiceの基礎**
Guiceは、Java 5以降向けの軽量な依存性注入（DI）フレームワークであり、Springほど包括的ではありませんが、DIをよりシンプルにするための機能が豊富にあります。Guiceは、DIパターンに従い、Javaコードとアノテーションを使用してオブジェクト間の依存関係を定義します。Guiceの主要なコンポーネントには、コンストラクタインジェクション、メソッドインジェクション、フィールドまたはパラメータインジェクションをサポートする `@Inject` アノテーションなどがあります。

**2. Providerクラス**
Providerクラスは、オブジェクトの生成プロセスを管理するために使用されます。インスタンス化プロセスが複雑であったり、追加のロジックが必要な場合に役立ちます。
Providerクラスは`com.google.inject.Provider<T>`インターフェースを実装し、単一の`T get()`メソッドを定義します。このメソッドの実装は、必要な型のインスタンスを返します。
例として、イベントをクライアントに通知する`Notifier`インターフェースと、その実装である`EmailNotifier`クラスを示しています。
Providerクラスを定義し、モジュールクラスでバインドすることで、Guiceが`EmailNotifier`の`get()`メソッドを呼び出して`Notifier`の依存関係を注入するようにします。

複数の実装がある場合は、`@Named`アノテーションを使用して、それぞれのバインディングを固有の文字列識別子に関連付けることで区別できます。

**3. @Providesアノテーション**
`@Provides`アノテーションは、Providerクラスのよりシンプルな代替手段として設計されています。メソッドに注釈を付け、メソッドの戻り型が依存性注入システム内のバインド型になります。
例として、`Logger`インターフェースと、`@Provides`アノテーションを使用してモジュールクラス内に定義された`provideLogger`メソッドを示しています。`@Provides`アノテーションを使用すると、Providerクラスを明示的に宣言する必要がなくなり、モジュールクラスの`configure()`メソッドでのバインディングも不要になります。

**4. @ProvidesとProviderの違い**
`@Provides`とProviderクラスの違いについてのまとめは、記事を参照してください。

**5. 結論**
この記事では、GuiceにおけるProviderクラスとその代替手段である`@Provides`アノテーションについて解説しました。これらのアプローチは、Guiceでの依存性注入を容易にするのに役立ちます。また、両方のアプローチのメリットとデメリットについても議論しました。

---
# Converting a String to a SOAPMessage | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919184501/0/baeldung~Converting-a-String-to-a-SOAPMessage)

## 記事の要約：文字列からSOAPMessageへの変換 | Baeldung

このチュートリアルでは、Javaで生のSOAP XML文字列を使いやすい`SOAPMessage`オブジェクトに変換する方法について解説しています。

**1. はじめに**

SOAPメッセージは、Java API for XML-based messaging (SAAJ)の一部であり、エンベロープ、ヘッダー、ボディを含む完全なSOAPリクエストまたはレスポンスを表します。

**2. SAAJ MessageFactoryの使用**

*   `javax.xml.soap`パッケージで提供される標準の`MessageFactory`を使用します。
*   生の文字列をバイトストリームに変換し、ファクトリに渡して構造化されたSOAPメッセージを構築します。
*   `usingSAAJMessageFactory()`というユーティリティメソッドの実装例を示し、サンプルSOAP文字列を使用して変換を検証します。

**3. DOM解析の使用**

*   XMLをDOM (Document Object Model) APIを使用して`Document`オブジェクトに解析し、そのDOM表現を使用して`SOAPPart`を埋めます。
*   名前空間対応の`DocumentBuilderFactory`を使用して`DocumentBuilder`を作成し、入力SOAP文字列を`Document`オブジェクトに解析します。
*   `MessageFactory`を使用して`SOAPMessage`を初期化し、`setContent()`メソッドを使用して`SOAPPart`の内容をDOMSourceに置き換えます。
*   `usingDOMParsing()`というユーティリティメソッドの実装例を示し、サンプルSOAP XML文字列を使用して検証します。
*   DOMベースの方法は、SOAPメッセージを作成する前にXML構造を変更する必要がある場合に柔軟性を提供します。

**4. まとめ**

*   `MessageFactory`アプローチは、単純でわかりやすい変換に最適です。
*   DOMベースの方法はより多くの制御を提供し、SOAPメッセージを構築する前にXMLを操作または変更する必要がある場合に役立ちます。
*   ソースコードはGitHubで入手できます。

---
# 2025-05-29のJS: TypeScript Native Previews、Firefox 139、Angular 20、Chrome 137 - JSer.info

[View on jser.info](https://jser.info/2025/05/29/typescript-native-previews-firefox-139-angular-20-chrome-137/)

## JSer.info #736 要約

このJSer.infoの記事では、2025年5月29日に関するJavaScript関連の様々な情報が紹介されています。

**主要なトピック:**

*   **TypeScript Native Previews:** TypeScriptのGo言語ネイティブ実装である`@typescript/native-preview`が公開されました。コンパイラ`tsgo`とVSCode拡張も提供されています。
*   **Firefox 139:**
    *   `hidden=until-found`属性のサポートとTemporal APIの実装。
    *   実験的機能として、Prioritized Task Scheduling API、View Transition API、HTML属性における`<`と`>`の自動エスケープなどが追加。
*   **Angular v20:**
    *   `effect`, `linkedSignal`, `toSignal`, `Incremental hydration`, `route-level render mode config`がStableに。
    *   `Zoneless`がDeveloper Previewに。
    *   実験的機能として`httpResource`と`vitest`のサポート。
    *   Chrome DevToolsでのAngular固有のパフォーマンス情報を扱うAPI `ng.enableProfiling()`が追加。
    *   `*ngIf`/`*ngFor`/`*ngSwitch`の非推奨化。
*   **Chrome 137:**
    *   CSS: 条件付き値を表現する`if()`関数、フォーカスナビゲーション順序を制御する`reading-flow`/`reading-order`プロパティの追加。
    *   Web API: Selection APIに`getComposedRanges()`と`direction`プロパティ、Web CryptographyでのEd25519サポートの追加。
    *   WebAssembly: JavaScript Promise Integration (JSPI)の正式サポート。
*   **Node.js v24.1.0:** `node:fs`の`glob`がStableに。
*   **Bun v1.2.14/v1.2.15:**
    *   `bun install`が`catalog:`をサポート。
    *   Fetch APIがzstdをサポート。
    *   `"module": "Preserve"`がデフォルト値に。
    *   `bun audit`の追加。
    *   `BUN_OPTIONS`環境変数の追加。
    *   `vm.SourceTextModule`、`perf_hooks.createHistogram()`のサポート。
*   **Storybook v9.0.0:** Storybookのメジャーアップデート。
*   **ESLint v9.0.0:** ESLint v9.0.0の回顧。
*   **Remix:** Remixの今後の方向性について。Remix v3ではDBや組み込みコンポーネントを含むフレームワークとなり、ReactではなくPreactのforkをベースにしたものを組み込む予定。
*   **その他:**
    *   Vltが`jsr:` prefixでJSRパッケージのインストールをサポート。
    *   Reactの動作をビジュアライズしたサイト。
    *   ECMAScript Stage 1のSignalsとWCIG Observableについてのスライド。

**関連情報:**

*   TSKaigi 2025の資料まとめ。
*   ブラウザ/JavaScript/ライブラリの歴史をタイムラインでまとめたもの。

**サポートのお願い:**

記事のサポートとして、JSer.infoの周知、GitHub Sponsorsでの支援、Twitterでのフォローを呼びかけています。
