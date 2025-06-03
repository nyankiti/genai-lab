# How to Do Nested Mapping in Mapstruct? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919509224/0/baeldung~How-to-Do-Nested-Mapping-in-Mapstruct)

このBaeldungの記事は、MapStructライブラリを使用してネストされたプロパティをマッピングする方法について解説しています。

**1. 概要**
このチュートリアルでは、MapStructライブラリを使用して、ソースPOJOからターゲットPOJOのプロパティへのネストされたプロパティのマッピングを実現する方法を説明します。

**2. ユースケース**
Orderエンティティ（CustomerとProductを含むネストされた構造を持つ）とOrderDtoエンティティ（Orderのフラット化されたバージョン）を使用して、MapStructのネストされたマッピング機能をデモンストレーションします。

**3. @Mappingアノテーションを使用したネストされたプロパティのマッピング**
*   MapStructライブラリの規則に従い、@Mapperアノテーションで装飾されたマッパーインターフェースを定義します。
*   @Mappingアノテーションを使用して、Orderオブジェクトの属性（ネストされたものを含む）からOrderDto属性へのマッピングを定義します。
*   ドット表記を使用して、Order#customerやOrder#productなどの属性のプロパティにアクセスします。
*   Javaの式も使用できます。
*   MavenプラグインであるMapStruct Processorは、Mappingアノテーションを解析し、OrderMapperImplクラスを生成します。
*   サンプルOrderオブジェクトを作成し、マッパーのorderToOrderDto()メソッドに引数として渡します。
*   ネストされたすべてのプロパティがターゲットOrderDtoオブジェクトに正しくマッピングされていることを検証します。

**4. 抽象マッパーを使用したネストされたプロパティのマッピング**
*   @Mappingアノテーションだけでは、マッピングプロセスで必要な結果が得られない場合に、抽象マッパークラスを使用することができます。
*   orderToOrderDto()メソッドは、applyCustomMappings()メソッドを呼び出してOrderDtoオブジェクトを初期化します。
*   mapCustomer()やmapProduct()などの抽象メソッドを呼び出します。これらのメソッドは、基本的な@Mappingアノテーションを持ち、OrderオブジェクトからOrderDtoオブジェクトのcustomerとproduct属性のプロパティを更新します。
*   どのメソッドを抽象のままにしてカスタマイズするかを選択できます。
*   AbstractOrderMapperImplクラスを生成するために、クラスをビルドします。
*   AbstractOrderMapper#orderToOrderDto()メソッドを実行し、マッピングを検証します。

**5. 結論**
この記事では、ソースエンティティのネストされたプロパティをターゲットエンティティにマッピングする方法を学びました。これは、データ変換アプリケーションで頻繁に遭遇する重要な要件であり、MapStructライブラリの重要な機能です。さらに、複雑なシナリオを処理するためのカスタマイズ機能も備えています。

---
# A Guide to Embeddings Model API in Spring AI | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919509227/0/baeldung~A-Guide-to-Embeddings-Model-API-in-Spring-AI)

## Spring AIにおける埋め込みモデルAPIガイド

**概要:**

本記事は、Spring AIにおける埋め込みモデルAPIについて解説しています。埋め込みモデルAPIは、テキストデータをアプリケーションで処理できるように、テキストを埋め込み表現に変換するための抽象化レイヤーを提供します。具体的には、Spring AIが提供するインターフェースを利用して、様々な埋め込みモデル（OpenAIなど）を簡単に統合する方法を説明しています。

**1. 埋め込みの概要:**

*   AIモデルは、テキストや画像を高次元ベクトル表現である埋め込みに変換することで、データの意味を学習します。
*   埋め込み間の類似度を計算することで、AIモデルは関係性を理解します。類似度が高いほど、テキストの意味が近いことを示します。

**2. 埋め込みモデルAPI:**

Spring AIは、埋め込みモデルを扱うためのAPIを提供しており、以下の要素で構成されます。

*   **EmbeddingModel:** テキストを埋め込みに変換するインターフェース。様々なモデルプロバイダーに対応しています。
*   **EmbeddingRequest:** 変換対象のテキストを含むリクエスト。
*   **EmbeddingResponse:** 埋め込み結果とメタデータを含むレスポンス。
*   **Embedding:** 埋め込み表現（float型の配列）とメタデータ。

**3. OpenAIとの統合:**

*   **Maven依存関係:** `spring-ai-openai-spring-boot-starter` をpom.xmlに追加。
*   **OpenAI設定:** `spring.ai.openai.api-key` でOpenAI APIキーを設定。
*   **自動構成:** `spring.ai.openai.embedding.options.model` で使用する埋め込みモデルを指定。
*   **手動構成:** 複数のモデルやプロバイダーを使用する場合、`OpenAiApi` および `OpenAiEmbeddingModel` を手動で定義。

**4. 埋め込みサービスのテスト:**

*   埋め込みサービスをテストするためのRESTエンドポイントの例を紹介。
*   `curl`コマンドを使ったテスト例とその結果（メタデータと埋め込み結果）を提示。

**5. まとめ:**

Spring AIの埋め込みモデルAPIは、OpenAIなどのモデルプロバイダーを抽象化し、Javaアプリケーションへの組み込みを容易にします。記事では、自動構成と手動構成の例を通じて、APIの柔軟性と簡便性を示しています。

---
# How to Return anydata on GraphQL Mutation | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919508372/0/baeldung~How-to-Return-anydata-on-GraphQL-Mutation)

## 記事の要約：GraphQL Mutationで任意のデータを返す方法

この記事は、GraphQLのミューテーションから任意のデータ型を返す方法について解説しています。具体的には、ミューテーションの戻り値を柔軟にし、状況に応じて異なるタイプのデータを返す方法に焦点を当てています。

**1. はじめに:**
GraphQLミューテーションでは、固定された型を返すだけでは不十分な場合があります。例えば、成功メッセージや詳細なオブジェクトを返す必要がある場合があります。

**2. anydataの理解:**
GraphQLにおけるanydataは、ミューテーションがクライアントに返す可能性のあるあらゆるデータ型を指します。これは、使用事例やミューテーション内のロジックによって異なります。

**3. GraphQLスキーマの定義:**
スキーマファイル(schema.graphqls)を作成し、ミューテーションとその戻り値の型を定義します。ここでは、`updateProfile`ミューテーションを例にとり、`AnydataResponse`というunion型を使用して、`SimpleMessage`または`UserProfile`のいずれかを返すように定義しています。

**4. Javaモデルの作成:**
GraphQLスキーマに対応するJavaクラスを作成します。
- `AnydataResponse`：マーカーインターフェース。
- `SimpleMessage`：シンプルなメッセージを保持するクラス。
- `UserProfile`：ユーザープロファイルを表すクラス。

**5. ミューテーションリゾルバの実装:**
ミューテーションのロジックをJavaで実装します。
- `updateProfile()`メソッドを作成し、`DataFetcher`を返します。
- `DataFetchingEnvironment`から引数を取得し、`type`の値に基づいて、`SimpleMessage`または`UserProfile`オブジェクトを返します。

**6. ミューテーションのテスト:**
GraphQLエンジンをセットアップし、スキーマとリゾルバを接続し、単体テストを実行して、ミューテーションが期待通りの結果を返すことを確認します。

**7. まとめ:**
この記事では、union型とカスタムロジックを使用して、GraphQLミューテーションから任意のデータを返す方法を解説しました。この方法により、APIの柔軟性が向上し、さまざまな種類の応答を簡単に処理できるようになります。

---
# Introduction to Tribuo – A Java Machine Learning Library | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919508375/0/baeldung~Introduction-to-Tribuo-A-Java-Machine-Learning-Library)

このBaeldungの記事は、Java用の機械学習ライブラリであるTribuoを紹介しています。

**概要:**

1.  **Tribuoとは？** Tribuoは、Oracleが開発した、本番環境で使用できるオープンソースのJava機械学習ライブラリです。WekaやDeeplearning4jと同様に、様々な機械学習タスクをサポートし、Javaアプリケーションとの統合が容易です。Tribuoは、回帰、分類、クラスタリングなどのタスクをサポートし、強型付け（型チェック）により実行時エラーを防ぎます。また、ONNX形式でのモデルのインポート/エクスポートに対応しており、他のフレームワークとの連携も可能です。Provenance tracking（データセット、モデルパラメータ、トレーニング設定に関するメタデータのログ記録）も特徴です。
2.  **サポートされている機械学習アルゴリズム:** Tribuoは、分類（カテゴリ予測）、回帰（連続値予測）、クラスタリング（データのグループ化）などの機械学習タスクをサポートしています。
3.  **Tribuoプロジェクトの設定:** UCI Red Wine Qualityデータセットを使用して、Tribuoで回帰モデルを構築する手順を説明しています。
    *   Tribuoの依存関係をpom.xmlに追加します。
    *   UCI Wine Qualityデータセットをダウンロードします。
    *   `WineQualityRegression`クラスを作成し、データセットの読み込み、データ分割、回帰モデルのトレーニング、モデルの評価、モデルの保存を行います。
4.  **モデルの使用:** 作成したモデルを使用してワインの品質を予測する`WinePredictor`クラスを作成します。ワインのサンプルデータを入力し、Tribuoでロードされたモデルを使用して予測を行います。
5.  **結論:** Tribuoとその機能について学び、回帰アルゴリズムを使用してワインの品質を予測するモデルのトレーニングを行いました。記事には、GitHub上の完全なソースコードへのリンクも含まれています。

記事は、Azure Container Apps、Orkes、Spring Cloud、Mockito、Java Concurrency、Spring WebFlux、Java Streams、Jackson、Apache HTTP Client、Apache Maven、Spring Data JPA、Playwrightなど、他の技術やフレームワークにも触れていますが、主眼はTribuoの紹介と使用方法にあります。

---
# AI-Powered Learning, Part 2: Get Unstuck With AI Hints in Python and Kotlin Tasks | The JetBrains Academy Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/education/2025/06/02/ai-hints-plugin/)

## AIを活用した学習、パート2：PythonとKotlinのタスクでAIヒントを活用して行き詰まりを解消

JetBrains Academyのブログ記事では、AIを活用した学習機能の第2弾として、プログラミングタスクでAIヒントを活用する方法を紹介しています。

**概要：**

*   **AIヒントの目的:** プログラミング初心者向けに、コーディングタスクで詰まった際に、次のステップやコンパイルエラーの修正、テストの失敗の解決をAIが段階的にサポートする。
*   **利用方法:** JetBrains Academyプラグインを最新版にアップデートし、PythonまたはKotlinのタスクを解いている際にAIヒントをリクエストできる。
*   **AIヒントの内容:**
    *   タスクを進めるための次の論理的なステップの提案。
    *   コンパイルエラーの修正。
    *   テストの失敗を解決するためのヒント。
    *   ヒントは、IDEの静的コード分析と大規模言語モデル（LLM）の組み合わせによって生成される。
*   **精度について:** 生成されたヒントはまだ進化段階であり、不完全または不正確な場合もある。改善のために、フィードバックボタンからのユーザーの意見が役立つ。
*   **利用可能な場所:** 現在、すべてのIDEベースのMarketplaceコースでPythonとKotlinのプログラミングタスクに使用可能。
*   **フィードバック:** 質問やフィードバックはコメント欄またはプラグインから直接送信可能。

この機能は、プログラミング学習をより親しみやすく、挫折感を軽減することを目指しています。

---
# Get Answers to Your KMP Questions | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/06/get-answers-to-your-kmp-questions/)

## Kotlinブログ「KMPに関する質問への回答」の要約

このブログ記事は、Kotlin Multiplatform (KMP) に関するよくある質問への回答をまとめたものです。KotlinConf 2025 のクロージングパネルで寄せられた質問の一部に、より詳細な回答を提供しています。

主な質問と回答は以下の通りです。

*   **IntelliJ IDEA と Android Studio の Swift サポート:** 既存の KMP プラグインは Swift と Kotlin/Swift の相互運用をサポートしており、今後さらに機能が追加される予定です。
*   **ネイティブコンパイル速度の改善 (デスクトップターゲット):** ネイティブビルドのパフォーマンス改善に取り組んでおり、推奨事項を確認した上で、問題があればバグレポートを提出してほしいとしています。
*   **KMP の今後の展望:** Compose Multiplatform の開発に注力し、Web 向け Beta 版の Compose Multiplatform を計画しています。ビジネスロジックの共有、Kotlin/JS、Kotlin/Native Swift エクスポートにも重点を置いています。 IntelliJ IDEA と Android Studio 向けの KMP プラグインの安定性向上と生産性機能の追加も予定されています。
*   **Compose/KMP における Web サポートの改善:** Web 向け Compose Multiplatform の Beta 版を開発しており、HTML 要素との相互運用、古いブラウザとの互換性モード、アクセシビリティサポートのプロトタイプ、UIコンポーネントの改善などを計画しています。
*   **Compose Multiplatform for Web におけるアクセシビリティと SEO サポート:** 今年末に Compose セマンティクスノードを DOM 要素にマッピングすることで、基本的なアクセシビリティサポートを実装する予定です。 SEO は、サーバーサイドでのコンテンツの事前レンダリングによってさらに改善できる可能性がありますが、まだ調査は行われていません。
*   **Compose Multiplatform のスクロールバーの存在理由:** デスクトップターゲット向けに最初に実装されましたが、他のプラットフォームへの導入も検討されています。
*   **KMP 向け Navigation 3 のサポート:** Navigation 3 は Kotlin Multiplatform を念頭に置いて構築されており、サポートされる予定です。ただし、具体的な時期は未定です。

記事の最後に、Kotlin ブログの更新を購読するためのフォームと、関連する記事へのリンクが掲載されています。
