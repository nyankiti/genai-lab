# How Consensys rebuilt MetaMask.io with Vercel and Next.js - Vercel

[View on Vercel Blog](https://vercel.com/blog/how-consensys-rebuilt-metamask-io-with-vercel-and-next-js)

## MetaMask.io の Vercel と Next.js への再構築に関する要約

この記事は、Consensys が MetaMask.io を Vercel と Next.js を用いて再構築した経緯と、その成果についてまとめたものです。

**背景:**

2014年以来、Web3 領域を牽引してきた Consensys は、自己管理型ウォレットである MetaMask をはじめとする様々なツールを開発し、多くのユーザーを獲得してきました。しかし、MetaMask.io は、初期は静的サイト生成 (SSG) で構築され、GitHub Pages でホストされていましたが、製品の成長に伴い、デプロイの遅延、動的コンテンツのサポートの困難さ、CMS の開発への追従の遅れといった問題に直面していました。

**再構築の目的と方法:**

Consensys は、運用上の信頼性を高め、製品のローンチや急速な成長に対応できるサイトを構築することを目指し、MetaMask.io を Next.js と Vercel を用いたモダンなスタックに移行しました。

*   **フロントエンド:** Next.js を採用し、動的レンダリングによるパフォーマンスとコンテンツ配信の完全な制御を実現。
*   **CMS:** Contentful を導入し、非開発者でも柔軟性を損なうことなくコンテンツ管理と更新を迅速化。
*   **インフラ:** Vercel を活用し、CI/CD、ホスティング、グローバル配信、およびオブザーバビリティを統合。

**移行のプロセス:**

カナリアリリースを実施し、1% のトラフィックから開始してシステム安定性を検証後、4時間で100% にスケールアップしました。

**再構築の成果:**

*   **パフォーマンス向上:** 稼働時間の向上、デプロイの高速化、SEO の改善。
*   **動的コンテンツの提供:** Incremental Static Regeneration (ISR) とスマートキャッシングにより、トークン価格などの動的なコンテンツとライブデータの提供が可能に。
*   **チーム間のコラボレーションの促進:** プレビュー URL とインラインコメント、並行ビルドにより、迅速なイテレーションと QA における摩擦の軽減。

**結論:**

Consensys は、Vercel を導入したことで、チームがインフラに集中することなく、今後の開発に注力できる環境を構築することができました。

---
# Modify Property Files in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918289892/0/baeldung~Modify-Property-Files-in-Java)

## Java でのプロパティファイルの変更 | Baeldung

この Baeldung の記事では、Java でプロパティファイルを安全に変更する方法について解説しています。ファイル全体を上書きすることなく、既存のデータに影響を与えずにプロパティを追加、更新する方法に焦点を当てています。

**1. 概要**

*   Java のプロパティファイルは、アプリケーション実行に必要な設定情報をキーと値のペアで保存します。
*   Java は Properties クラスを通じてプロパティファイルを操作するための基本的なサポートを提供していますが、既存のファイルを上書きする可能性があります。
*   この記事では、Java のコア API (File Streams API、Files API) と Apache Commons ライブラリを使用して、既存のデータを保持しながらプロパティファイルを変更する方法を紹介します。
*   XML プロパティファイルの変更方法についても触れています。

**2. プロジェクト構造とユーティリティクラス**

*   `PropertyMutator` インターフェース: プロパティの取得と追加/更新を定義。
*   `PropertyLoader` クラス: プロパティファイルをリソースフォルダから読み込むためのユーティリティ。

**3. Java File Streams を使用したプロパティファイルの変更**

*   `FileStreamsPropertyMutator` クラス: `FileInputStream` と `FileOutputStream` を使用してプロパティファイルを変更する。
*   `addOrUpdateProperty()` メソッド: 既存のプロパティを読み込み、新しいプロパティを設定し、`FileOutputStream` で変更を保存する。
*   JUnit テスト: 新しいプロパティが追加され、既存のプロパティが影響を受けないことを検証。既存のプロパティの値が更新され、他のプロパティに影響がないことを検証。

**4. Apache Commons を使用したプロパティファイルの変更**

*   Apache Commons ライブラリの `FileBasedConfigurationBuilder` クラスを使用。
*   依存関係として、`commons-configuration2` と `commons-beanutils` を pom.xml に追加。
*   `ApacheCommonsPropertyMutator` クラス: プロパティファイルへのアクセスと変更を容易にする。
*   `getAppPropertiesConfigBuilder()` メソッド: 設定ビルダーを取得。
*   `addOrUpdateProperty()` メソッド: ビルダーから `Configuration` オブジェクトを取得し、`setProperty()` でプロパティを追加/更新し、変更を保存する。
*   JUnit テスト: 新しいプロパティが追加され、既存のプロパティが影響を受けないことを検証。既存のプロパティの値が更新され、他のプロパティに影響がないことを検証。

**5. Java Files API を使用したプロパティファイルの変更**

*   Files API を使用すると、プロパティではなく行単位で処理するため、`PropertyMutator` インターフェースを実装しない。
*   `FileAPIPropertyMutator` クラス。
*   `addPropertyKeyWithValue()` メソッド: ファイルの末尾に新しいプロパティを追加する。
*   `updateProperty()` メソッド: 特定のプロパティを含む行を検索し、更新する。
*   JUnit テスト: 新しいプロパティが追加され、既存のプロパティが影響を受けないことを検証。既存のプロパティの値が更新され、他のプロパティに影響がないことを検証。

**6. XML プロパティファイルの変更**

*   `XMLFilePropertyMutator` クラス: XML ファイルのプロパティを変更するために `PropertyMutator` インターフェースを実装。
*   `loadFromXML()` と `storeToXML()` メソッドを使用。
*   JUnit テスト: 新しいプロパティが追加され、既存のプロパティが影響を受けないことを検証。既存のプロパティの値が更新され、他のプロパティに影響がないことを検証。

**7. まとめ**

この記事では、Java でプロパティファイルを変更する方法について、Java のさまざまな API と Apache Commons ライブラリの使用方法を解説しました。ファイル全体を上書きせずに、既存のデータを保持しながらプロパティを変更するための実践的なアプローチを示しています。また、XML プロパティファイルの変更方法についても触れました。

---
# Spring AOP for a Method Call Within the Same Class | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918289895/0/baeldung~Spring-AOP-for-a-Method-Call-Within-the-Same-Class)

## Spring AOP (Aspect-Oriented Programming) と同じクラス内のメソッド呼び出し: 詳細な要約

この記事は、Spring AOPにおける問題点である、同じクラス内のメソッド呼び出しがAOPの機能を迂回してしまう問題について解説しています。

**1. はじめに:**
Spring AOPは、トランザクションやキャッシングなどの機能をメソッド呼び出しの前後に追加する際に、プロキシオブジェクトを使用します。しかし、同じクラス内のメソッドから別のメソッドが呼び出される場合、このプロキシが使用されず、AOPの機能が適用されない問題があります。

**2. プロキシとSpring AOP:**
Springは、Beanに付加的な機能を追加するためにプロキシオブジェクトを作成し、それを他のBeanに注入します。たとえば、`@Transactional` や `@Cacheable` アノテーションが付いたメソッドは、プロキシによってキャッシュなどの機能が追加されます。

**3. AOP: 内部メソッド呼び出しと外部メソッド呼び出し:**
外部からのメソッド呼び出しではプロキシが使用されるため、AOP機能が適用されます。しかし、同じクラス内の別のメソッドから呼び出される場合（内部呼び出し）、プロキシは使用されず、AOP機能は適用されません。記事内の例では、`@Cacheable` を使用したキャッシュ機能において、外部呼び出しではキャッシュが有効になる一方、内部呼び出しではキャッシュが無視されることを示しています。

**4. 回避策:**
この問題に対するいくつかの回避策が提案されています。

*   **リファクタリング:** 最も推奨される方法は、内部呼び出しを行うメソッドを別のクラスに移動し、そこからAOP機能が適用されるBeanを呼び出すことです。この方法では、AOPの機能を確実に利用できます。
*   **自己注入（Self-Injection）:** リファクタリングが難しい場合、プロキシをクラス自体に注入することもできます。ただし、これは循環依存関係を引き起こすため、`@Lazy` アノテーションを使用して遅延読み込みを行う必要があります。

**5. 結論:**
同じクラス内のメソッド呼び出しに対するSpring AOPの問題は、リファクタリングによって解決するのが理想的です。それが難しい場合は、自己注入を利用できます。また、AspectJのようなツールを使用することで、リファクタリングや自己注入なしにAOP機能を実装することも可能です。

---
# Conditional Logging With Logback | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918289898/0/baeldung~Conditional-Logging-With-Logback)

## Conditional Logging With Logback | Baeldung 要約

この記事では、Logbackフレームワークが提供する条件付きロギング機能について解説しています。

**1. Logbackの概要と条件付きロギングの重要性:**

*   Logbackは、Log4jの後継となるロギングフレームワークで、柔軟で高度な機能を提供。
*   条件付きロギングは、ログ出力を制御し、ランタイムでの様々なユースケースに対応するために役立つ。例えば、環境（ローカル、サーバー）や条件（本番環境でのみセキュリティエラーを監視サービスに送信）に応じてログをフィルタリングすることが可能。

**2. Logbackの設定:**

*   Logbackを使用するには、SLF4Jライブラリとlogback-classicライブラリを依存関係として追加する必要がある。
*   条件付き処理には、Janinoライブラリも必要。

**3. 条件付き処理の実装:**

*   Logbackは、`<if>`, `<then>`, `<else>` 要素を使用した条件付き処理をサポート。
*   システムプロパティやコンテキストプロパティにアクセスして条件を評価できる。
*   `property()` (または`p()`) メソッドを使用してプロパティの値を取得し、`isNull()`、`isDefined()` メソッドで値の有無をチェックできる。
*   これにより、単一の設定ファイルで異なる環境に対応可能。

**4. EvaluatorFilterの使用:**

*   EvaluatorFilterは、ランタイムでJava式を評価してログ出力を制御する。
*   `OnMatch`と`OnMismatch`タグを使用して、`DENY`, `NEUTRAL`, `ACCEPT`のいずれかの値を返すように設定できる。
*   これにより、特定のログを制限し、機密データの漏洩を防ぐことが可能。

**5. Spring Profileと変数置換:**

*   Logbackの設定ファイルで条件付き処理を使用する方法の他に、Spring Profileや環境固有の変数を活用することで、よりクリーンなログ管理が可能。
*   Spring Profileを使用すると、開発、ステージング、本番環境ごとに異なるログ設定を簡単に切り替えられる。
*   環境固有の変数を定義することで、ランタイムで特定のロガーに動的にログをリダイレクトできる。

**6. まとめ:**

*   Logbackの条件付きロギング機能（条件付き処理、EvaluatorFilter）は、ログ出力を柔軟に制御するための強力なツール。
*   Spring Profileや環境変数の活用も、よりクリーンで管理しやすいログ管理を実現できる。
*   この記事では、これらの機能の詳細と、それぞれの使用方法について解説している。

---
# Introduction to the Class-File API | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918288833/0/baeldung~Introduction-to-the-ClassFile-API)

この文書は、Java 24 で導入された Java Class-File API の紹介です。このAPIは、レガシーJDKのASMライブラリの内部コピー実装に頼らずに、クラスファイルの処理を可能にするインターフェースを作成することを目的としています。

**1. Class-File API の概要**

*   **目的**: ASMライブラリに依存せずにクラスファイルを処理できるインターフェースを提供。
*   **主な要素**:
    *   **要素（Element）**: 変数、命令、メソッド、クラスなど、コードの一部を表す。要素は他の要素を含むこともある。
    *   **ビルダー（Builder）**: 各要素を生成するために使用（MethodBuilder、CodeBuilder など）。
    *   **変換関数（Transform Function）**: ビルダーを使用して、要素を他の要素に変換する。

**2. クラスファイルの生成**

*   MethodBuilder と CodeBuilder クラスを使用してクラスファイルを生成する方法を説明。
*   **例**: 従業員の給与計算ロジック（calculateAnnualBonus メソッド）を例に、MethodBuilder と CodeBuilder を使用して同じ機能を持つメソッドを生成。
*   **手順**:
    1.  Label オブジェクトを定義して、条件分岐を実装。
    2.  aload()、ldc()、invokevirtual()、ifeq() などの命令を使用してコードを生成。
    3.  ClassFile.of().build() を使用してクラスファイルをインスタンス化し、.class ファイルに書き込む。

**3. クラスファイルの変換**

*   あるクラスファイルの内容を別のクラスファイルにコピーする方法を説明。
*   **手順**:
    1.  元のクラスファイルを読み込む。
    2.  CodeTransform、MethodTransform、ClassTransform を定義して、変換処理を行う。
    3.  ClassFile.transformClass() を使用してクラスファイルを変換し、新しいファイルに書き込む。
*   **カスタマイズ**: カスタムの MethodTransform を作成し、特定のメソッド名を持つメソッドのみを処理する例を提示。

**4. まとめ**

*   Class File API を使用して、クラスをゼロから作成したり、あるクラスの内容を別のクラスにコピーする方法を説明。
*   ビルダー、トランスフォーマー、要素を使用して、実行時にクラスを作成および変換する例を提供。
*   ソースコードは GitHub で利用可能。

---
# Doing Minus Operation on String in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918288836/0/baeldung~Doing-Minus-Operation-on-String-in-Java)

## Javaでの文字列に対するマイナス演算の実装 | Baeldung 要約

このBaeldungの記事では、Javaの文字列クラスにおけるマイナス演算子のサポートの欠如とその代替手段について解説しています。

**1. 背景:**

*   Javaの`String`クラスは、文字列操作に広く使用されますが、`+`演算子による連結はサポートされているものの、直接的な「マイナス」演算はサポートされていません。
*   この制限は、Javaの演算子システムの設計に起因しており、文字列の減算に対する明確な意味論がないためです。例えば、「文字列から特定の文字を削除するのか」、「部分文字列を削除するのか」など、具体的な操作内容が曖昧であるためです。

**2. 文字列操作のための代替手段:**

*   Javaでは、マイナス演算の代替として、`substring`、`replace`、またはStreamAPIを用いた方法が利用できます。

**3. 文字の削除方法:**

*   **末尾の文字の削除:** `substring()`メソッドを用いて、特定の文字（例：末尾の文字）を削除できます。ただし、空文字列の場合には`IndexOutOfBoundsException`が発生しないように注意する必要があります。
*   **特定の文字または部分文字列の削除:** `replace()`メソッドを使用すると、特定の文字または部分文字列を他の文字または空文字列に置き換えることで削除できます。
    *   `replace(char oldChar, char newChar)`：特定の文字を削除する場合。
    *   `replace(CharSequence target, CharSequence replacement)`：特定の文字列（部分文字列）を削除する場合。
*   **Stream API を使用したカスタムソリューション:** より複雑な条件での文字のフィルタリングが必要な場合は、Java Streamsを使用できます。これにより、柔軟な操作が可能になりますが、`replace()`に比べて可読性とパフォーマンスが低下する可能性があります。

**4. 末尾の文字列の削除:**

*   `removeTrailingStringBySubstring()`メソッドを使用すると、文字列の末尾から特定の文字列を削除できます。このメソッドは、末尾の文字列が一致する場合にのみ削除を行い、一致しない場合は元の文字列を返します。

**5. まとめ:**

Javaの`String`クラスはマイナス演算子をサポートしていませんが、`substring`、`replace`、またはStreamAPIなどのメソッドを組み合わせることで、同様の機能を実装できます。シンプルな位置ベースの削除には`substring`が、特定の文字や部分文字列の削除には`replace`が適しています。より複雑なロジックが必要な場合は、Streamsが柔軟性を提供しますが、実装の複雑さが増加する可能性があります。すべての実装は、単体テストによって検証することが推奨されています。

---
# Spring BatchのResourcelessJobRepositoryを使いメタデータを保存しないようにするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/847)

## Spring BatchのResourcelessJobRepositoryを使ったメタデータ非保存の実装メモ

この記事は、Spring Batchでメタデータを保存しないようにする方法について解説しています。記事の著者は、メタデータを視覚化するためのSpring Batch Dashboardも作成しており、メタデータの有効活用も検討してほしいと述べています。

**背景と問題点**

*   Spring Batchでは、バッチ処理実行時にDBにメタデータが自動で作成されます。
*   過去には、MapベースのインメモリJobRepositoryが提供されていましたが、Spring Batch 5で廃止されました。
*   インメモリJobRepositoryは、Webアプリケーションなどの常駐プロセス上でバッチを起動する場合、メモリが増え続ける問題がありました。

**解決策：ResourcelessJobRepository**

*   Spring Batch 5.2から、メタデータを保存しない`ResourcelessJobRepository`が導入されました。
*   このリポジトリを使用することで、DBへのメタデータ保存を回避できます。

**注意点**

*   `ResourcelessJobRepository`を使用する場合、ジョブのリスタートはできません。メタデータが保存されないためです。
*   `ResourcelessJobRepository`はスレッドセーフではありません。
*   記事の内容は、Spring Boot 3.4.5、Spring Batch 5.2.2で動作確認されています。
*   これらのバージョンでは、Spring Batchの自動設定がデータベースを使用する前提となっているため、`ResourcelessJobRepository`を使用するには自動設定を無効にする必要があります。これはSpring Batch 6、Spring Boot 4では改善される予定です。

**実装手順**

1.  **Spring Bootプロジェクトの作成:** Spring Initializrを使用してMavenプロジェクトを作成します。
2.  **Spring Batchの自動設定の無効化:** `application.properties`に以下の設定を追加します。

    ```properties
    spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration
    ```

    そして、手動でSpring Batchのコア機能を定義します。
3.  **JobRepositoryの定義:** `BatchConfig.java`で、`ResourcelessJobRepository`を`jobRepository`としてBean定義します。
4.  **Jobの定義:** `JobConfig.java`で、`ResourcelessTransactionManager`を`PlatformTransactionManager`として指定します。
5.  **依存関係の調整:** `spring-boot-starter-jdbc`の依存関係を`pom.xml`から除外します（データベースを使用しない場合）。
6.  **ビルドと実行:**
    *   Mavenでビルドし、`java -jar target/hello-spring-batch-0.0.1-SNAPSHOT.jar`で実行します。
    *   GraalVM Native Imageでコンパイルし、ネイティブイメージを実行することも可能です。

**結論**

`ResourcelessJobRepository`を使用することで、Spring Batchのメタデータ保存を回避し、インメモリ環境でのメモリ消費の問題を解決できます。ただし、ジョブのリスタートやスレッドセーフ性に関する注意点があります。

---
# AI powers Expedia’s marketing evolution | OpenAI

[View on OpenAI News](https://openai.com/index/expedia-jochen-koedijk)

## AIがエクスペディアのマーケティング進化を推進

この記事は、エクスペディア・グループの最高マーケティング責任者（CMO）であるヨッヘン・コエディク氏との対話形式で、AIがマーケティングに与える影響と、マーケターがAI時代を生き抜くために必要なことについて考察しています。

**マーケティングとCMOの役割の変化:**

*   データ駆動型へと大きく変化し、データとインサイトがマーケティング活動全体で活用されるようになった。
*   実験的な思考が重要となり、失敗を恐れず、好奇心を持ち、変化に柔軟に対応する必要がある。
*   マーケティングにおける因果関係の特定能力が向上している。

**AIがCMOの役割をどのように支援しているか:**

1.  **インサイトと分析:** ライフタイムバリューモデリングや入札システムの科学的精度向上、記述分析のスケールアップ、トレンド発見やリアルタイム分析による迅速なインサイト獲得。
2.  **生産性とクリエイティブ開発:** テキスト、画像、動画など、コンテンツ制作の効率化。
3.  **消費者行動:** 消費者の検索行動の変化への対応。SEOだけでなく、新しい検索環境に適応する必要がある。

**AIエージェントの将来性:**

*   旅行マーケティングにおいて、AIエージェントが重要な役割を果たす可能性。
*   旅行の計画や予約を効率化し、パーソナライズされた旅行体験を提供する。
*   ブランドが独自のAIエージェントを開発し、人間とのインタラクションを補完する可能性。

**AIによる顧客関係とロイヤリティの強化:**

*   AIによる検索は旅行のインスピレーションに役立つが、予約においては信頼できるプラットフォームが重要。
*   One Keyのようなロイヤリティプログラムを活用して、顧客との関係を強化し、リピーターを増やす。

**組織内でのAI活用促進:**

*   AIを目的達成のための手段として捉え、AIがブランド成長、トラフィック、コンバージョンに貢献することを示すことで、チームのモチベーションを高める。
*   マーケティングMLサイエンスグループのような専門チームと、ジェネレーティブAIの活用を組み合わせることで、AI利用を民主化する。
*   クリエイティブ、MLサイエンティスト、ソフトウェア開発者、マーケターを連携させたクロスファンクショナルチームを編成し、実験を促進し、AIに対する恐怖心を払拭する。

**具体的な成果:**

*   ジェネレーティブAIを活用して、大規模なコンテンツ（特に動画）を迅速に生成。
*   OpenAIのツールを使用してコンテンツ品質を管理し、ブランドの信頼性とエンゲージメントを向上。

**AI時代にマーケターが持つべきスキル:**

*   スキルよりもマインドセットが重要。
*   好奇心、オープンマインド、不快感に耐えること。
*   実験精神、プロンプトエンジニアリング、マルチモーダル統合、継続的な改善への意欲。
*   多様な役割（クリエイター、開発者、マーケター）を連携させ、新たなアイデアを生み出す。

**エクスペディア・グループのAI活用事例:**

*   OpenAIのAPIを活用し、旅行サイトで画像選択と表示を自動化。
*   ChatGPTをマーケティング部門で活用し、さまざまなクリエイティブなユースケースを実現。
