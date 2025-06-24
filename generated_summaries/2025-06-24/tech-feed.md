# Keith Messick joins Vercel as CMO - Vercel

[View on Vercel Blog](https://vercel.com/blog/keith-messick-joins-vercel-as-cmo)

## Vercel、初のCMOとしてKeith Messick氏を迎え、AIへの取り組みを強化

この記事は、Vercelが、AIの潜在的な可能性に対応し、フロントエンドからフルスタックへと進化を遂げ、エンタープライズ機能を強化し、自社の開発者ツールへのAI統合を含む、次世代AIアプリケーションを推進することを目指していると発表しています。

その一環として、Vercelは新たにKeith Messick氏を初の最高マーケティング責任者（CMO）として迎え入れ、成長を支援し、開発者の声を増幅させることに注力します。

Messick氏は、Redisで100人規模のチームを統括した経験を持ち、LaunchDarklyでのFeature Managementカテゴリーの創出や、DialPad、Lucidworksでのマーケティングを指揮するなど、豊富な経験と知識を持っています。彼は、創業者としての経験と開発者としての経験を活かし、商業的な洞察力、クリエイティブなビジョン、分析的な思考力、技術的な共感を兼ね備えています。

Vercelは、コミュニティとの直接的な関わりを重視し、Guillermo氏とのXでの交流や、高速道路での広告など、様々な方法で開発者とのエンゲージメントを深めていく予定です。Messick氏もこの精神を基盤に、Vercelがクリエイティビティと技術革新の交差点としての役割を深めていくことに貢献します。

Vercelのマーケティングチームは、AI Gateway、v0複合モデル、Vercel Blob GA、Flags Explorer GA、Chat SDK、Fluid computeなどのローンチを主導しており、現在、コンテンツエンジニア、カスタマーマーケター、フィールドマーケターなどの採用も行っています。

---
# Find teams, projects, and pages in the Vercel dashboard with universal search - Vercel

[View on Vercel Blog](https://vercel.com/changelog/dashboard-universal-search)

Vercelダッシュボードのすべてのページ右上隅に検索機能が追加されました。

この検索機能により、以下のものを瞬時に見つけることができます。

*   チーム
*   プロジェクト
*   デプロイ (ブランチ別)
*   ページ
*   設定

より複雑な検索には、AIを活用したナビゲーションアシスタントも利用できます。これにより、ダッシュボード内の任意のページを見つけたり、質問に基づいてフィルターを適用したりできます。詳細はドキュメントで確認できます。

---
# Cleaning Spring Properties Files | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920630711/0/baeldung)

## Spring プロパティファイル クリーニング | Baeldung の要約

この記事は、Spring プロジェクトのプロパティファイルが肥大化し、読みにくくなる問題を解決するためのMavenプラグイン「Spring Properties Cleaner」を紹介しています。

**主な内容:**

1.  **問題点:**
    *   Spring プロジェクトの設定プロパティは、プロファイルに応じて複数のファイルに分散することが一般的です。
    *   ファイルが増えると、重複、書式設定の不統一、論理的な順序の欠如、冗長な設定などが起こりやすくなります。
    *   手動での整理には手間がかかります。

2.  **Spring Properties Cleaner プラグイン:**
    *   プロパティファイルの整理と管理を自動化する Maven プラグインです。
    *   **機能:**
        *   重複キーの検出
        *   書式設定（スペースの削除など）の修正
        *   キーのソート
        *   プレフィックスのインライン化
        *   共通プロパティの抽出
        *   垂直方向の空白の整理
    *   プラグイン設定は `pom.xml` に記述し、`mvn compile` でエラーチェック、`mvn spring-properties-cleaner:fix` で修正を行います。

3.  **設定例:**
    *   `sort`: プロパティのソート（アルファベット順、クラスター化など）
    *   `inlinePrefix`: プレフィックスをインライン化するための正規表現
    *   `common`: 共通プロパティの抽出モード（`full`, `consistent`, `multiple`）
    *   `whitespace`: 垂直方向の空白の整理方法

4.  **メリット:**
    *   プロパティファイルを整理し、可読性を向上させる。
    *   問題を自動的に検出し、修正することで、将来的な問題の発生を防止する。

5.  **まとめ:**
    *   Spring Properties Cleaner は、Spring プロジェクトのプロパティファイルの整理、管理を効率化し、保守性を向上させるための便利なツールです。

**補足:**

*   記事は Azure Container Apps、Orkes、Mockito、Java Concurrency、Spring WebFlux、Java Streams、JSON、Apache HTTP Client、Apache Maven、Spring Data JPA、Playwright、AI Chatbot など、さまざまなSpring関連の技術についても触れていますが、主要なテーマは Spring Properties Cleaner です。
*   記事には、具体的な `pom.xml` の設定例や、修正前後のプロパティファイルの変化が示されています。

---
# Using the Model Context Protocol With Quarkus and Langchain4j | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920621477/0/baeldung)

このBaeldungの記事は、QuarkusとLangchain4jを使用してModel Context Protocol (MCP)を実装する方法について解説しています。

**1. 概要**

近年、大規模言語モデル（LLM）の登場により、AIのアプリケーションへの統合が進んでいます。この記事では、QuarkusとLangChain4Jを使って、MCPサーバーとクライアントを構築し、シンプルなチャットボットを作成する方法を紹介します。MCPサーバーを通じて、タイムゾーンに基づいた現在の日付の取得や、サーバーJVMに関する情報の取得といったカスタムタスクをLLMの能力に拡張します。

**2. Model Context Protocol (MCP) の基本**

*   2024年11月にAnthropicによってオープンソース化されたMCPは、AIアプリケーションと外部データソースを接続するための標準化された方法を提供します。
*   **なぜMCPが必要なのか？** AIアプリケーションでは、組織やアプリケーション固有の「コンテキスト」をLLM経由で公開することが求められるようになっています。このコンテキストをAIワークフローに統合することは重要ですが、データベース、ファイルシステム、検索エンジンなど、さまざまなデータソースからのコンテキストの統合は課題となります。
*   MCPは、LLMを緊密に結合することなく、既存のサービスをAIと統合できるようにします。
*   **MCPのアーキテクチャ:** MCPは、クライアント・サーバーアーキテクチャを採用しており、MCPホスト（LLMと統合するメインアプリケーション）、MCPクライアント（MCPサーバーとの1対1の接続を確立）、MCPサーバー（外部データソースと統合し、機能を提供する）で構成されます。
*   MCPは、Standard Input/Output (stdio) と Server-Sent Events (SSE) の2つのトランスポートタイプを提供しています。

**3. カスタムMCPサーバーの作成**

Quarkusを使用してMCPサーバーを作成する手順を説明します。

*   **前提条件:** JDKとQuarkus CLIのインストールが必要です。
*   **プロジェクトの作成:** `quarkus create app --no-code -x qute,quarkus-mcp-server-sse quarkus-mcp-server` コマンドを実行してプロジェクトを作成します。
*   **依存関係:** 必要な依存関係（`quarkus-mcp-server-sse`, `quarkus-qute`など）をpom.xmlに追加します。
*   **カスタムツールの定義と公開:** `@Tool`アノテーションと`@ToolArg`アノテーションを使用して、MCPサーバーで公開するツールを定義します。例えば、特定のタイムゾーンでの現在時刻を取得するツールや、JVMのシステム情報を取得するツールなどを作成します。
*   **MCPサーバーの実行:** 開発モードでQuarkusサーバーを実行し、Dev UIを使用してツールをテストします。
*   **設定:** application.propertiesファイルで `quarkus.package.jar.type=uber-jar` と `quarkus.http.port=9000` を設定します。

**4. カスタムMCPクライアントの作成**

QuarkusとLangChain4jを使用して、MCPサーバーに接続するクライアントを作成します。

*   **プロジェクトの作成:** `quarkus create app --no-code -x langchain4j-mcp,langchain4j-ollama,vertx-http quarkus-mcp-client`コマンドでプロジェクトを作成します。
*   **依存関係:** 必要な依存関係（`quarkiverse-langchain4j-mcp`, `quarkiverse-langchain4j-ollama`, `quarkus-vertx-http`）をpom.xmlに追加します。
*   **チャットボットの定義:** `@RegisterAiService` アノテーションを使用して`McpClientAI`インターフェースを作成し、チャットサービスを定義します。`@SystemMessage` アノテーションでカスタムSystem Promptを設定し、`@McpToolBox` アノテーションでMCPサーバーの設定を行います。
*   **LLMとツールの接続:** application.propertiesファイルで、`quarkus.langchain4j.timeout`、`quarkus.langchain4j.chat-model.provider`、`quarkus.langchain4j.ollama.chat-model.model-id`、`quarkus.langchain4j.ollama.base-url`、`quarkus.langchain4j.mcp.default.transport-type`、`quarkus.langchain4j.mcp.default.url` などの設定を行い、LLMとMCPサーバーを接続します。
*   **チャットサービスのテスト:** Quarkus Dev UIのチャットUIを使用して、チャットサービスをテストします。LLMに、時間やシステム情報に関する質問をすることで、MCPサーバーのツールが利用されていることを確認します。

**5. 結論**

この記事では、Quarkusを使用してMCPサーバーを構成し、LangChain4jを使用してこのMCPサーバーに接続する個別のMCPクライアントアプリケーションを構築する方法を示しました。LLMの能力を拡張するために、JVMシステム情報や現在時刻を取得するツールを提供しました。MCPサーバーは、独自のコードを使用してさまざまな機能を提供し、MCPクライアントはこれらのツールをLLM接続アプリケーションに簡単に統合できるようにします。

---
# Faking OAuth2 Single Sign-on in Spring | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920614367/0/baeldung)

## SpringでのOAuth2シングルサインオン(SSO)の偽装

この記事は、SpringアプリケーションでOAuth2シングルサインオン(SSO)を実装し、テストケースで認証をシミュレートする方法について解説しています。

**1. 概要**

OAuth2 SSOは、一度ログインすると他のアプリケーションに再度ログインすることなくアクセスできる便利な仕組みです。通常、認証を管理する認可サーバー（サードパーティ）が存在しますが、テストではこれをモックする必要があります。この記事では、SpringアプリケーションでOAuth2 SSOを偽装し、テストを容易にする2つの方法を紹介します。

**2. SpringアプリケーションでのOAuth2の実装**

まず、Keycloakを認可サーバーとして使用する、OAuth2 SSOが有効なシンプルなSpring Bootアプリケーションを作成します。アプリケーションは、以下の依存関係を持ち、`/`エンドポイントにアクセス保護されたRESTエンドポイントを持ちます。

*   spring-boot-starter-oauth2-client
*   spring-boot-starter-security
*   spring-boot-starter-web
*   spring-boot-starter-test
*   spring-security-test

OAuth2設定は、`SecurityConfig`クラスと`application.yaml`ファイルで構成されます。`SecurityFilterChain` Beanでリクエストを認証し、OAuth2設定で認可サーバー（Keycloak）の詳細を設定します。

**3. OAuth2 SSOの偽装**

このセクションでは、OAuth2 SSOを偽装する2つの方法について説明します。どちらの方法でも、テストケースを実行する際にKeycloakを実行する必要はありません。

**3.1. MockMvcを使った認証のバイパス**

認証をバイパスするには、`OAuth2AuthorizedClientService` Beanによってクライアントとして登録できるダミープロバイダーが必要です。

1.  `NoOAuth2Config`というテスト設定クラスを作成し、`ClientRegistrationRepository`と`OAuth2AuthorizedClientService`を定義します。この設定では、ダミーのクライアント情報を指定します。
2.  テストケースで`@Import(NoOAuth2Config.class)`と`@ActiveProfiles("test")`を使用してこの設定をインポートし、`MockMvc`を自動設定します。
3.  `oauth2Login()`を使用して認証をバイパスします。

この方法では、Spring Securityの設定のみを使用して認証をバイパスします。

**3.2. WireMockを使ったOAuth2 SSOサービスの偽装**

認可サーバーをモックするには、WireMockを使用します。

1.  WireMockの依存関係を追加します。
2.  `application-test.yaml`ファイルに、メインの`application.yaml`ファイルと同様の設定を追加します。
3.  `@BeforeAll`と`@AfterAll`アノテーションを使用して、WireMockサーバーを設定し、テスト前に起動し、テスト後に停止します。
4.  認可サーバーのエンドポイント（`.well-known/openid-configuration`など）をモックするスタブを定義します。

この方法では、WireMock APIを使用して認可サーバーをモックします。

**4. まとめ**

この記事では、Keycloakを認可サーバーとして使用した基本的なOAuth2 SSOの設定と、テストケースでの認証シミュレーションについて解説しました。認証をバイパスする方法と、WireMock APIを使用して認可サーバーをモックする方法を説明しました。

GitHubで完全なコード例が公開されています。

---
# Kotlin 2.2.0 Released | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/06/kotlin-2-2-0-released/)

## Kotlin 2.2.0 リリース：新機能、改善点、そしてコミュニティへの感謝

JetBrainsが開発した簡潔なマルチプラットフォーム言語であるKotlinのバージョン2.2.0がリリースされました。このバージョンには、新機能と安定した言語機能、ツール更新、様々なプラットフォームでのパフォーマンス向上、重要な修正が含まれています。

**主なハイライト:**

*   **言語:** コンテキストパラメータを含む、プレビュー版の新言語機能。ガード条件、非ローカルbreakとcontinue、マルチドル補間など、以前実験的だったいくつかの機能が安定版に。
*   **Kotlinコンパイラ:** コンパイラ警告の統一管理。
*   **Kotlin/JVM:** インターフェース関数のデフォルトメソッド生成の変更。
*   **Kotlin/Native:** LLVM 19およびメモリ消費の追跡と調整に関する新機能。
*   **Kotlin/Wasm:** Wasmターゲットの分離と、プロジェクトごとにBinaryenを設定する機能。
*   **Kotlin/JS:** @JsPlainObjectインターフェース向けに生成されたcopyメソッドの修正。
*   **Gradle:** Kotlin Gradleプラグインにバイナリ互換性検証が含まれる。
*   **標準ライブラリ:** Base64とHexFormat APIが安定版に。

**詳細について:**

変更の完全なリストは、「Kotlin 2.2.0の新機能」またはGitHubのリリースノートを参照してください。

**ライブストリーム:**

Kotlin Language Evolutionチームが、新機能について議論し、質問に答えるライブストリームが2025年7月10日午後4時（UTC）に開催されます。見逃した場合でも、録画が後で利用可能になります。

**インストール方法:**

Kotlinプラグインは、IntelliJ IDEAおよびAndroid Studioにバンドルされたプラグインとして配布されています。新しいKotlinバージョンに更新するには、ビルドスクリプトでKotlinのバージョンを2.2.0に変更してください。コマンドラインコンパイラが必要な場合は、GitHubリリースページからダウンロードしてください。

**問題が発生した場合:**

Slack（招待の取得）でヘルプを見つけたり、YouTrackの課題トラッカーに問題を報告したりできます。

**ドキュメント調査:**

Kotlinドキュメントに関するフィードバックを収集するための調査が実施されています。

**コミュニティへの感謝:**

今回のリリースには、多くの貢献者のプルリクエストが含まれました。また、EAPチャンピオンの皆様にも特別な感謝が述べられています。

**関連情報:**

*   Kotlin 2.2.0の新機能ドキュメント
*   Kotlin 2.2.0互換性ガイド
*   K2コンパイラ移行ガイド
*   K2コンパイラのパフォーマンスベンチマークとプロジェクトでの測定方法
*   Kotlin EAPチャンピオン

**その他:**

最新のKotlin機能に関する更新を受け取るために、ブログ更新の購読も可能です。

---
# VMware Tanzu Gemfire on Kubernetes 2.5をインストールするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/857)

## VMware Tanzu Gemfire on Kubernetes 2.5 インストールメモ - 要約

本記事は、VMware Tanzu Gemfire on Kubernetes 2.5 (GemFire) をKubernetes環境にインストールし、GemFireクラスターを構築する手順をまとめたものです。

**主な流れ:**

1.  **Docker Registryのアクセストークン取得とイメージのリロケート:** BroadcomサポートサイトからDockerレジストリのトークンを取得し、トークンの有効期限切れによる運用上の手間を省くため、Helm Chartとコンテナイメージをghcr.ioにリロケートします。
2.  **Tanzu GemFire on Kubernetesのインストール:** GemFire CRD (Custom Resource Definition) とOperatorをHelmを用いてKubernetesにインストールします。
3.  **GemFireClusterの作成:** GemFire Operatorを利用して、GemFireClusterインスタンスをKubernetes上に作成します。この際、コンテナイメージはghcr.ioにリロケートしたものが使用されます。Locator 2台、Server 3台の構成を例としています。
4.  **GemFireクラスターへの接続と動作確認:**  kubectlを用いてLocator Pod内でbashを実行し、gfsh (GemFire Shell) を利用してGemFireクラスターに接続します。TLS (Transport Layer Security) が有効になっているため、証明書を利用した接続を行います。接続後、`list members` コマンドでクラスターの状態を確認し、Regionを作成してデータの読み書きを行い、動作を確認します。
5.  **外部からのGemFireアクセス設定:**  ContourのHTTPProxyを使用して、Locatorの管理APIを公開し、Podの外からgfshでGemFireに接続できるようにします。
6.  **JavaアプリケーションからのGemFire接続:** サンプルJavaアプリケーション（https://github.com/making/demo-gemfire）を用いて、GemFireへの接続とデータの格納を行います。アプリケーションをK8s上にデプロイし、外部からアクセスして動作確認を行います。
7.  **クリーンアップ:**  アプリケーション、GemFireCluster、GemFire Operator、CRDをそれぞれ削除します。

**特徴:**

*   GemFire Operatorを利用することで、Kubernetes上でのGemFireクラスターの管理が容易になる。
*   TLSがデフォルトで有効になっており、セキュリティが強化されている。
*   ghcr.ioへのイメージのリロケートにより、Dockerレジストリの認証情報管理の手間を軽減。

本記事は、Tanzu GemFire on Kubernetesのインストールから、Javaアプリケーションからの接続までの一連の流れを、具体的なコマンドと設定例を交えて解説しており、Kubernetes環境でのGemFire利用の導入に役立ちます。

---
# VMware Tanzu Gemfire 10.1をOrbStackのLinux Machine上のRocky Linuxにインストールするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/854)

## VMware Tanzu Gemfire 10.1をOrbStackのRocky Linuxにインストールするメモ - 要約

本記事は、OrbStackのLinux Machine上のRocky Linux環境にVMware Tanzu Gemfire 10.1をインストールする手順をまとめたものです。Java 21をサポートするGemfire 10.1を使用し、最新のJava 21 OpenJDKをインストールします。OrbStackの機能を利用し、Gemfireクラスター（2つのLocatorと3つのServer）を構築し、耐障害性のテストまで実施しています。

**主な手順:**

1.  **Gemfireの展開:** ダウンロードしたGemfireのアーカイブを展開します。
2.  **Linux Machineの作成と設定:**
    *   `cloud-init`ファイルを用いて、Java 21 OpenJDK、必要なユーティリティのインストール、`GEMFIRE_HOME`などの環境変数の設定、Gemfireユーザーの作成を行います。
    *   OrbStackのコマンドで、Locatorマシンを2つ、Serverマシンを3つ作成します。
3.  **Locatorの起動:** 各Locatorを起動し、クラスターを形成します。
4.  **Serverの起動:** 各Serverを起動し、クラスターに参加させます。
5.  **Regionの作成とデータ操作:**
    *   `gfsh`シェルを使用して、PARTITION\_PERSISTENTタイプのRegionを作成し、データを格納します。
    *   データの確認と、`locate entry`コマンドによるデータ配置の確認を行います。
6.  **耐障害性のテスト:**
    *   Serverの1つを停止し、データの冗長性が失われることを確認します。
    *   `rebalance`コマンドを実行してデータの再配置を行い、冗長性が回復することを確認します。
    *   停止したServerを再起動し、データの再配置が行われることを確認します。
7.  **Tanzu GemFire Management Consoleでの可視化:**
    *   DockerコンテナとしてTanzu GemFire Management Consoleを起動し、クラスターの状態を可視化します。
8.  **Javaアプリからの接続:**
    *   サンプルJavaアプリケーションからGemfireに接続し、データの登録と表示を行います。
    *   サンプルアプリをDockerイメージとしても実行し、動作確認を行います。
9.  **クリーンアップ:** クラスターを停止し、作成したすべてのマシンを削除します。
