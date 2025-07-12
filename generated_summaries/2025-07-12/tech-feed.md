# Java Weekly, Issue 602 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921508874/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 602 の要約

2025年7月11日に更新されたJava Weekly Issue 602の内容は以下の通りです。

**1. SpringとJava**

*   **RESTful API Guidelines:** REST API構築のベストプラクティスを紹介。
*   **OCI Cloud ShellでのJavaランタイム設定の簡素化:** Java Download Toolkitを使用して、異なるJavaバージョンを簡単に設定する方法。
*   その他: バッチ処理、トラフィック負荷時のコンパイル、Inside Java Newsletter、Java開発者のためのデータモデリング、レガシーモダナイゼーションプロジェクトのリスク軽減に関する記事。
*   **ウェビナーとプレゼンテーション:** マーシャリング、Java 25の非LTS版に関する情報、伝説的なJava Champion、Dr. Heinz Kabutzのポッドキャスト、Java30周年記念イベント、新しいプロジェクト発表、高性能Javaイベント。
*   **アップグレード情報:** JobRunr、Spring gRPC、Quarkus、Jetty、Eclipse-collections、Grails-core、Micronaut Core、Camelの最新バージョン。

**2. Technical & Musings**

*   **組織が専門家ジェネラリストを必要とする理由:** 採用戦略、特に専門分野での人材確保に関する考察。専門家ジェネラリストの重要性について。
*   その他: 今後のCTOフェローシップからの記事、コードに関するツール、TestcontainersとリモートDockerホストの接続、MCP承認に関する記事。

**3. Pick of the Week**

*   **Writing Code Was Never The Bottleneck:** 今週のおすすめ記事。

全体として、Java Weekly Issue 602は、REST API、Javaランタイム設定、最新のライブラリ、開発戦略、ウェビナーなど、Javaコミュニティに関連する幅広いトピックをカバーしています。

---
# Securing Spring AI MCP Servers With OAuth2 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921497813/0/baeldung~Securing-Spring-AI-MCP-Servers-With-OAuth)

## Baeldung の記事「Securing Spring AI MCP Servers With OAuth2」の要約

この記事では、Spring AI アプリケーションで OAuth2 を使用して MCP (Model Context Protocol) サーバーを保護する方法について解説しています。

**内容の概要:**

*   **MCP サーバーの重要性:** Anthropic によって導入された MCP は、AI モデルが外部ツール、データソース、サービスと構造的に対話するためのオープンスタンダードです。MCP サーバーは、ファイルへのアクセス、データベースのクエリ、API の呼び出しなど、特定の機能を MCP インターフェースを介して公開する軽量のバックエンドアプリケーションです。
*   **セキュリティの必要性:** MCP サーバーを本番環境で運用するには、独立したアプリケーションとして分離することが推奨されます。しかし、機密性の高いタスクを扱う可能性があるため、エンドポイントを保護し、信頼できるクライアントへのアクセスを制限する必要があります。
*   **OAuth2 を利用した保護:** OAuth2 は、API への安全なトークンベースのアクセス委譲のためのよく知られたプロトコルです。MCP サーバーは、ユーザーの資格情報を直接管理する代わりに、中央の認証サーバーによって発行された検証済みのアクセストークンを信頼します。OAuth2 を使用して、スコープとロールに基づいて、クライアントアプリケーションの特定の MCP 機能へのアクセスを許可または制限できます。
*   **実装手順:**
    1.  **依存関係の追加:** Spring AI MCP サーバー、OAuth 認証サーバー、Spring Security のリソースサーバーの依存関係を追加します。
    2.  **MCP サーバーの実装:** 株価情報を返すシンプルな MCP サーバーを実装します。 `StockInformationHolder` クラスと `McpServerConfiguration` クラスを作成します。
    3.  **セキュリティ構成の追加:** `application.yml` ファイルを使用して認証サーバーを構成し、`McpServerSecurityConfiguration` クラスを作成して、 `/mcp` と `/sse` エンドポイントへの認証済みリクエストを許可するように設定します。
    4.  **テスト:**  `McpServerOAuth2LiveTest` クラスを作成して、保護された MCP サーバーをテストします。 アクセストークンを取得し、`/sse` エンドポイントと `/mcp/message` エンドポイントにリクエストを送信し、レスポンスが期待通りに受信されることを確認します。
*   **結論:** このチュートリアルでは、Spring AI アプリケーションで OAuth2 を使用して MCP サーバーを保護する方法を示しました。 Spring Boot を通じて OAuth2 をシームレスに統合し、主要な MCP エンドポイントを保護しました。 本番環境では、Keycloak や Okta などのフル機能の ID プロバイダーとの統合や、ロールベース/スコープベースのアクセス制御の実装などが考えられます。

記事は、MCP サーバーのセキュリティ保護における OAuth2 の役割と、Spring AI での実装方法を段階的に解説しています。 また、本番環境での拡張についても言及しています。

---
# Writing Stored Procedures for H2 in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921497816/0/baeldung~Writing-Stored-Procedures-for-H-in-Java)

## H2データベースでJavaでストアドプロシージャを作成する方法

このチュートリアルでは、H2データベースエンジンで使用するJavaでストアドプロシージャを作成する方法を解説します。

**1. ストアドプロシージャとは**

ストアドプロシージャは、多くのデータベースエンジンがサポートするメカニズムであり、データベース内で独自のカスタム機能を作成できます。名前と一連の入力パラメータを持つ新しいプロシージャを作成し、必要な機能を実行して適切な結果を返します。H2データベースエンジンでは、これらはユーザー定義関数と呼ばれます。H2の組み込み関数（UPPER()やDATEDIFF()など）とは区別するために使用されます。

**2. H2での関数の使用**

H2では、SQLクエリ内で関数を直接使用できます。ユーザー定義関数も同様に動作し、組み込み関数と同じように使用できます。例えば、`SELECT * FROM numbers WHERE IS_PRIME(number) = TRUE`のように、ユーザー定義関数`IS_PRIME()`を使用して素数判定を行うことができます。

**3. ユーザー定義関数の作成**

H2でユーザー定義関数を作成するには、次の2つの方法があります。

*   **ソースコードの提供:** データベースに直接関数のソースコードを提供します。CREATE ALIASコマンドを使用して、関数名とソースコードを含む文字列を指定します。
*   **プリコンパイルされたコード:** Javaで関数を作成し、H2にその存在を通知します。CREATE ALIASステートメントを使用して、完全修飾関数名を指定します。

    *   **ソースコードの提供:** `CREATE ALIAS SAY_HELLO AS ' String sayHello() { return "Hello, World!"; } ';`のように記述します。これにより、"Hello, World!"を返すユーザー定義関数が作成されます。
    *   **プリコンパイルされたコード:** H2は、クラスパス上のコードを呼び出すことができます。静的メソッドである必要があり、メソッドとそれを含むクラスはpublicである必要があります。
        `CREATE ALIAS JAVA_RANDOM FOR "java.lang.Math.random";`

**4. メソッドパラメータ**

ユーザー定義関数に値を渡すことができます。JDBCと同じデータ型変換ルールに従う限り、パラメータ型は正しく動作します。また、`java.sql.Connection`型のパラメータを受け入れることもできます。これはメソッドの最初のパラメータである必要があり、現在のクエリに使用されている同じデータベース接続を受け取ります。これにより、ユーザー定義関数内からデータベースと対話できます。

**5. 例外**

ユーザー定義関数でエラーを通知するために例外をスローすることも可能です。H2はこれを扱い、JDBC APIを通じて適切に伝播します。

**6. まとめ**

この記事では、H2データベース内で独自のユーザー定義関数を作成し、それらを使用する方法について説明しました。カスタムコードをH2データベース内に記述する必要がある場合は、この方法を試してみてください。

---
# Fixing Hibernate AnnotationException: Field Is a @ManyToOne Association and May Not Use @Column | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921497378/0/baeldung~Fixing-Hibernate-AnnotationException-Field-Is-a-ManyToOne-Association-and-May-Not-Use-Column)

## 「Fixing Hibernate AnnotationException: Field Is a @ManyToOne Association and May Not Use @Column」 の要約

このチュートリアルでは、Hibernateで発生する「AnnotationException: field is a @ManyToOne association and may not use @Column」というエラーを解決する方法について解説しています。

**1. エラーの概要と原因:**

このエラーは、HibernateがJavaクラスをデータベーステーブルにマッピングする際に、アノテーションの解釈に問題がある場合に発生します。具体的には、`@ManyToOne`アノテーションが適用されたフィールドに、`@Column`アノテーションを誤って使用すると発生します。`@Column`は、単純な列のマッピングに使用され、関連付け（join）を持つフィールドには不適切です。

**2. エラーの再現方法:**

`University`エンティティクラスと`Student`エンティティクラスを作成します。`Student`クラスでは、`@ManyToOne`アノテーションを使用して`University`との関連付けを定義しますが、同時に`@Column`アノテーションを使用してしまうとエラーが発生します。

**3. 解決策:**

`@ManyToOne`関係にあるフィールドに対しては、`@Column`ではなく`@JoinColumn`アノテーションを使用します。`@JoinColumn`は、外部キーの関係を正しくマッピングするために使用されます。

**4. まとめ:**

この記事では、`@ManyToOne`関係を持つフィールドに`@Column`を使用した場合に発生するHibernateの`AnnotationException`エラーの原因と解決方法を説明しました。`@JoinColumn`を使用することで、問題を解決できることを示しています。

---
# Count the Number of Sign Changes in an Array | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921497381/0/baeldung~Count-the-Number-of-Sign-Changes-in-an-Array)

このチュートリアルでは、配列内の符号の変化の数を数える2つのアプローチについて説明します。

**概要**

最初に、配列を走査し、符号の変化が発生するたびにカウンターを増やす反復アルゴリズムを検討します。次に、Java 8 Streamsを利用して、同じ結果を簡潔かつ関数的なスタイルで実現する方法を説明します。途中で、ゼロ値などのエッジケースについても議論します。最終的には、問題と効率的で読みやすいソリューションを実装するための戦略を理解します。

**1. 反復アプローチ**

各要素の符号を前の非ゼロの符号と比較して、符号が異なる場合にカウンターを増やすループを使用します。 `Integer.signum()` を使用して値を -1, 0, または 1 に正規化し、直接的な符号比較を可能にします。ゼロ値は符号の変化としてカウントされないようにスキップされ、前の符号は非ゼロ値に遭遇したときにのみ更新されます。このアルゴリズムは線形時間 O(n) で実行され、定数空間 O(1) を使用します。

**2. Java 8 Streamsの使用**

ストリームを使用して同じロジックを表現することもできます。これは、各要素とその前の要素をペアにし、符号の違いに基づいてフィルタリングすることを含みます。このアプローチは、中間配列とストリームを作成するため、命令的なバージョンと比較してメモリ使用量が増加します。タイムコンプレックスはO(n)です。

**3. まとめ**

反復アプローチは、単純な制御構造を使用して、明確で効率的なソリューションを提供します。一方、Java 8 Streamsアプローチは、より表現力豊かで宣言的な代替手段を提供します。どちらのソリューションも同じ時間計算量 O(n) を持ちますが、メモリ使用量とスタイルが異なります。どちらを選択するかは、明確さ、パフォーマンス、または最新のJavaプラクティスの遵守のいずれを優先するかに依存します。

---
# Chat Memory in Spring AI | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921497384/0/baeldung~Chat-Memory-in-Spring-AI)

このBaeldungの記事は、Spring AIにおけるチャットメモリの実装と利用方法について解説しています。

**1. チャットメモリの重要性:**
*   大規模言語モデル (LLM) はステートレスであり、以前のメッセージを記憶しないため、会話のコンテキストを維持するためにチャットメモリが必要となる。
*   チャットメモリは、コンテキスト理解、パーソナライゼーション、永続性を提供する。

**2. Spring AI が提供するチャットメモリ:**
*   `ChatMemory` インターフェースと様々な実装を提供。
*   OpenAIの統合のために `spring-ai-starter-model-openai` のMaven依存関係を追加。
*   `ChatMemoryRepository` インターフェースを実装し、チャットメッセージを保存する。

**3. 利用可能なチャットメモリリポジトリ:**
*   **インメモリリポジトリ:** デフォルトで使用され、永続性は必要ない場合に適している。
*   **JDBCリポジトリ:** リレーショナルデータベースにチャットメッセージを永続化。MySQL、PostgreSQL、SQL Server、HSQLDBなどのデータベースをサポート。未サポートのデータベースの場合は、`JdbcChatMemoryRepositoryDialect` インターフェースを実装してSQL文を提供する必要がある。

**4. チャットクライアントへの適用:**
*   `ChatMemoryAutoConfiguration` によって自動設定が行われるため、インメモリリポジトリを使用する場合は明示的な定義は不要。
*   JDBCリポジトリを使用する場合は、`ChatMemoryRepository` の Bean を定義してデフォルトをオーバーライドする。
*   `@SessionScope` アノテーションを付与し、複数のリクエスト間でインスタンスを永続化する必要がある。

**5. OpenAIとの統合:**
*   OpenAIのAPIキーを設定し、データベース接続とスキーマを初期化。
*   `ChatService` を作成し、`ChatClient` を `ChatMemoryAdvisor` で初期化。
*   `ChatController` を作成し、RESTエンドポイントを通じてチャットサービスを呼び出す。
*   OpenAIへのHTTPリクエストを傍受し、チャット履歴が送信されていることを確認する。

**6. 動作確認:**
*   Postmanを使用し、RESTエンドポイントにリクエストを送信し、HTTPリクエストの内容を確認。
*   2回目のリクエストでは、Spring AI が以前のプロンプトと応答を OpenAI に送信し、チャット履歴を維持していることが確認できる。

**7. まとめ:**
*   Spring AIのチャットメモリを使用して、複数のチャットリクエスト間でチャット履歴を維持し、会話エクスペリエンスを向上させる方法を解説。
*   様々なメモリリポジトリとSpring AIおよびOpenAIとの統合方法を説明。
*   Spring AI のチャットメモリが OpenAI とどのように連携しているかを解説。

記事は最後に、GitHubで提供されている完全なソースコードへのリンクを提供しています。

---
# Passkey への道 #5: 2FA/WebAuthn | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-07-12/load-to-passkey-5.html)

## Passkey への道 #5: 2FA/WebAuthn 要約

この記事は、パスワードに代わる認証技術「Passkey」への移行過程における、二要素認証（2FA）におけるWebAuthnの役割と課題について解説しています。

**WebAuthnの概要と利点**

*   **WebAuthnとは:** WebAuthnは、ブラウザで標準化されたAPIであり、物理的なセキュリティキーやスマートフォンなどのデバイスを利用して、パスワードの代わりに認証を行う技術です。
*   **安全性の高さ:** WebAuthnは、文字列入力が不要であるため、フィッシングなどの攻撃に対する耐性が高く、ドメインが変更されると認証ができないため、安全性が高いです。また、デバイスは耐タンパー性を備えており、物理的な攻撃も困難です。

**WebAuthnの課題と普及の道のり**

*   **初期の課題:** 物理的なセキュリティキーは、紛失や破損のリスクがあり、一部の企業やセキュリティ意識の高いユーザーに限られていました。
*   **スマホ対応による転換点:** スマートフォンの普及により、WebAuthnはより身近なものになりました。スマートフォンは、安全性の高い「Platform Authenticator」として、秘密鍵を内蔵し、広く普及しました。

**2FAリカバリと課題**

*   **リカバリの重要性:** 2FAでは、万が一デバイスを紛失した場合のリカバリが重要です。メールアドレスでのリカバリは、メールが乗っ取られるリスクがあるため、安全性を損なう可能性があります。
*   **バックアップコードの問題点:** TOTPやWebAuthnでは、多くの場合、バックアップコードが提供されますが、ユーザーはバックアップコードの重要性を理解していなかったり、管理が杜撰であったりする問題がありました。その結果、デバイス紛失時に2FAにアクセスできなくなるという事態が発生し、2FAの利用を諦める原因となっていました。
*   **パスワードマネージャーとAuthy:** パスワードマネージャーの登場により、TOTPの鍵をクラウドで同期できるようになり、デバイス間の移行が容易になりました。これにより、バックアップコードの管理といった煩わしさから解放され、「クラウドにログインすれば同じ環境」という新しい世界観が生まれました。

**WebAuthnの未来**

*   **現状:** TOTPは最終的に文字列を入力する必要があり、WebAuthnの方が安全性が高いです。
*   **展望:** WebAuthnの共有化（デバイス間の連携）が実現できれば、より利便性の高い認証方法となる可能性があります。

---
# Spring Enterpriseレポジトリアクセス方法 - IK.AM

[View on IK.AM](https://ik.am/entries/860)

## Spring Enterprise レポジトリへのアクセス方法 - 要約

このドキュメントは、VMware Tanzu Spring (またはVMware Tanzu Platform for Cloud Foundry)を購入したユーザーがSpring Enterpriseのプライベートレポジトリにアクセスする方法を説明しています。Spring Enterpriseは、Spring Framework、Spring Boot、Springなどの長期商用サポートを提供する製品であり、OSS版ではサポートが終了したSpring Boot 2.7などのバージョンも提供されています。

**Mavenでの設定手順:**

1.  Broadcom Supportにログインし、Spring EnterpriseのページからMavenレポジトリのアクセストークンを取得します。"Token Access"をクリックし、"Token Download"ボタンを押して表示されたダイアログからトークンをコピーします。
2.  ホームディレクトリ直下の.m2ディレクトリに`settings.xml`を作成し、以下の内容を記述します。`BC_SUPPORT_USERNAME`と`BC_SUPPORT_ACCESS_TOKEN`は、Broadcomのサポートアカウントのユーザー名（メールアドレス）と取得したアクセストークンに置き換えます。

```xml
<settings>
  <servers>
    <server>
      <id>tanzu-spring-release</id>
      <username>BC_SUPPORT_USERNAME</username>
      <password>BC_SUPPORT_ACCESS_TOKEN</password>
    </server>
  </servers>
  <profiles>
    <profile>
      <id>tanzu-spring-release</id>
      <activation>
        <activeByDefault>true</activeByDefault>
      </activation>
      <repositories>
        <repository>
          <id>tanzu-spring-release</id>
          <name>Spring Enterprise Supported Releases</name>
          <url>https://packages.broadcom.com/artifactory/spring-enterprise</url>
          <snapshots>
            <enabled>false</enabled>
          </snapshots>
        </repository>
      </repositories>
      <pluginRepositories>
        <pluginRepository>
          <id>tanzu-spring-release</id>
          <name>Spring Enterprise Supported Releases</name>
          <url>https://packages.broadcom.com/artifactory/spring-enterprise</url>
          <snapshots>
            <enabled>false</enabled>
          </snapshots>
        </pluginRepository>
      </pluginRepositories>
    </profile>
  </profiles>
</settings>
```

**動作確認:**

1.  `https://start.spring.io/`から雛形プロジェクトをダウンロードし、解凍します。
2.  `pom.xml`を開き、Spring BootのバージョンをSpring Enterpriseで提供されているバージョン（例：2.7.27）に変更します。
3.  Mavenコマンド（Mac/Linux: `./mvnw clean compile`、Windows: `mvnw.cmd clean compile`）を実行してコンパイルします。
4.  コンパイルが成功し、`https://packages.broadcom.com/artifactory/spring-enterprise`からファイルがダウンロードされることを確認します。
5.  `./mvnw dependency:tree` (Mac/Linux) または `mvnw.cmd dependency:tree` (Windows) コマンドで、プロジェクトで使用されているSpringのバージョンを確認できます。

---
# The EU Code of Practice and future of AI in Europe | OpenAI

[View on OpenAI News](https://openai.com/global-affairs/eu-code-of-practice)

## EU Code of PracticeとヨーロッパにおけるAIの未来｜OpenAI

OpenAIは、EUの「汎用AIに関する行動規範」に署名する意向を発表しました。これは、AI開発者がEU AI法を遵守するための枠組みであり、OpenAIはこれを通じて、ヨーロッパにおけるAIの未来を構築することを目指しています。

**EUにおけるAIの現状とOpenAIの取り組み:**

*   ヨーロッパは、OpenAIにとって世界有数の市場であり、多くの人々に技術を提供しています。
*   OpenAIの技術は、医療研究の加速、科学研究の促進、教育の改善、ヨーロッパのスタートアップエコシステムの構築に貢献しています。
*   行動規範は、ヨーロッパがAI大陸アクションプランを推進し、AIのインパクトをさらに高めるための道を開きます。
*   OpenAIは、ヨーロッパにおけるAI人材の育成、地元のAI開発者への支援、そしてAIツールの普及を推進します。
*   OpenAIは、EUのAIの競争力を高めるために、AIの導入速度やエネルギー、トレーニングデータなどの資源への影響を評価するよう提言しています。

**OpenAI for Countries European Rollout:**

OpenAIは、データセンターの増強、AIを活用した教育の推進、戦略的な政府との連携、そしてAIスタートアップのための資金調達などを通じて、ヨーロッパのAIインフラ開発を加速させることを目指しています。

**責任あるAIへのコミットメント:**

OpenAIは、安全でアクセス可能、かつセキュアなAIモデルをヨーロッパの人々に提供することにコミットしています。同社は、透明性、説明責任、安全性を重視したモデル開発を行っており、行動規範に反映されています。OpenAIは、安全対策として、詳細なシステムカードの公開、Safety Evaluation Hubによる評価結果の公開、Red Teaming Networkによる外部専門家による検証、Model Specによるモデルの振る舞いの形成などを行っています。

OpenAIは、これらの取り組みを通じて、AI技術が世界中で責任を持って利用されるように努めています。
