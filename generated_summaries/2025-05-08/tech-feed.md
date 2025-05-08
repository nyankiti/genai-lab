# Introducing the Flags Explorer, first-party integrations, and updates to the Flags SDK  - Vercel

[View on Vercel Blog](https://vercel.com/blog/introducing-the-flags-explorer-first-party-integrations-and-updates)

## Vercel、Flags Explorer、ファーストパーティ統合、Flags SDK のアップデートを発表

この記事では、Vercelが提供する機能フラグに関する最新アップデートについて解説しています。主な内容は以下の通りです。

**1. Flags Explorer の一般公開**

*   Vercel Toolbarから直接機能フラグを管理できる機能。
*   フラグの値をオーバーライドすることで、テストや実験を容易にします。
*   自分のセッションでのみフラグをオーバーライドできるため、他のチームメンバーに影響を与えることなく、本番環境で新機能をテストできます。
*   新機能のデモや、フィードバック収集、テスト・QAにも活用できます。
*   すべてのプランのユーザーが利用可能。

**2. Vercel Marketplace における Experimentation カテゴリの導入と Statsig とのファーストパーティ統合**

*   Experimentation カテゴリを通じて、実験と機能フラグのツールをプロジェクト、デプロイワークフロー、リリースプロセスに統合できます。
*   Statsig をローンチパートナーとして、強力な機能フラグと実験プラットフォームを提供。
*   Statsigとの統合によるメリット：
    *   簡単なセットアップ（数回のクリックで設定可能）。
    *   管理された設定（環境変数とAPIキーが事前設定）。
    *   一貫したデプロイメント（すべての環境で実験が確実に実行されるように、設定とバージョン履歴を一貫して保持）。
    *   低レイテンシのフラグ評価（VercelのEdge Configに機能フラグを同期し、ネットワークリクエストを削減）。

**3. Flags SDK のアップデートと新しいアダプター**

*   Next.jsおよびSvelteKitアプリケーションで機能フラグを統合するためのオープンソースライブラリ。
*   Statsigなどの人気のあるプロバイダー、他のサードパーティツール、または独自のカスタムソリューションと連携。
*   新しいアダプターアーキテクチャにより、さまざまなプロバイダーから直接機能フラグを読み込めるようになり、コードと機能フラグプロバイダーの接続が簡素化されました。
*   @flags-sdk/statsigパッケージを使用すると、VercelのFlags Explorer内でStatsigのフラグを直接管理できます。

**結論**

Vercelは、Flags Explorer、Vercel MarketplaceにおけるExperimentationカテゴリの導入、Flags SDKのアップデートを通じて、機能フラグと実験をより簡単にワークフローに統合できるようにしました。これにより、反復速度の向上、リスクの軽減、パーソナライズされたユーザーエクスペリエンスの提供が実現し、より迅速かつ自信を持って開発できるようになります。

---
# Flags Explorer is now generally available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/flags-explorer-is-now-generally-available)

Flags Explorerが一般公開されました。Flags Explorerは、同僚に影響を与えたり、フラグプロバイダーにサインインしたりすることなく、自分のセッションで機能フラグを上書きできる機能です。これにより、本番環境で機能を公開前にテストし、作業の流れを維持できます。

この機能はすべてのVercelユーザーが利用可能になりました。Hobby、Pro、Enterpriseプランでは、月に150回のオーバーライドが利用でき、ProおよびEnterpriseプランでは、月に250ドルで無制限のオーバーライドが利用できます。

ベータ版でFlags Explorerを使用していたチームは、月に150回のオーバーライド制限が適用される前に、新しい無制限オプションを30日間有効化できます。これは、VercelダッシュボードまたはVercelツールバーから直接行えます。

さらに、Flags SDKは、使用しているアダプターに関係なく、Flags Explorerで設定されたオーバーライドを自動的に尊重します。

---
# Faster builds now available with compute upgrades on paid plans - Vercel

[View on Vercel Blog](https://vercel.com/changelog/faster-builds-now-available-with-compute-upgrades-on-paid-plans)

## Vercelの有料プランで高速ビルドが利用可能に

Vercelは、有料プランのユーザー向けに、ビルドパフォーマンスを向上させる「強化されたビルドマシン」の提供を開始しました。

**概要:**

*   **提供内容:** 8 CPU、16 GBメモリ、58 GBディスクを備えた、従来の2倍のリソースを持つビルドマシン
*   **効果:** ビルド時間の短縮、合計ビルド時間の削減（既存ユーザーは最大25%の高速化を既に実感）
*   **対象プラン:** 全ての有料プラン
*   **利用方法:** 各プロジェクトごとに有効化可能で、分単位で課金
*   **Enterpriseプラン:** 事前割り当てされたビルドスロットとオンデマンドビルドの両方を、より高性能なマシンで実行可能

詳細はドキュメントを参照してください。

---
# MCP server support on Vercel - Vercel

[View on Vercel Blog](https://vercel.com/changelog/mcp-server-support-on-vercel)

## VercelにおけるMCPサーバーサポートの詳細な要約

この記事は、VercelがModel Context Protocol (MCP)サーバーのデプロイをサポートすることを発表しています。MCPは、AIモデルとの統合を構築するための手法であり、VercelではMCPサーバー（AIモデルが接続できる）とMCPクライアント（MCPサーバーを呼び出すAIチャットボットアプリケーション）の両方をサポートしています。

**MCPの概要とAPIとの違い:**

*   MCPは、AIモデルが特定のタスクを達成するためのツールキットのようなもので、REST APIとは異なります。1つのMCPツールは、複数のAPIやその他のビジネスロジックを裏で利用することがあります。
*   MCPは、AIにおけるツール呼び出しに似ており、異なるサーバーでホストされているツールを呼び出すための手段となります。
*   MCPはHTTPとOAuthを使用するウェブAPIに似たプロトコルをサポートするようになりました。これにより、以前のステートフルなServer-Sent Events (SSE)プロトコルが改善されました。

**VercelでのMCPサーバーのデプロイ:**

*   Vercelは、MCPサーバーの構築を簡素化するために、新しいパッケージ`@vercel/mcp-adapter`をリリースしました。これは、古いSSEトランスポートと新しいステートレスHTTPトランスポートの両方をサポートしています。
*   SSEトランスポートに必要な状態を処理するために、UpstashやRedis Labsなどのプロバイダーを通じてRedisサーバーを統合できます。

**利点と今後の展望:**

*   Vercelを利用してMCPサーバーをデプロイすることで、Fluidコンピューティングを使用した場合、従来のサーバーレスと比較して90%以上のコスト削減を実現した事例があります。Fluidは、AI推論やエージェントワークロード向けに、Node.jsやPythonとの互換性を維持しつつ、より費用対効果の高いプラットフォームを提供します。
*   VercelのAI SDKは、Node.jsまたはNext.jsアプリをMCPサーバーに接続するための組み込みサポートを提供しています。
*   今後は、HTTPトランスポートで構築されたMCPサーバーや、OAuthサポートなどの最新の開発に期待が寄せられています。
*   shadcn/uiなどの他のVercelプロジェクトもMCPの統合を検討しており、MCPサーバーのユースケースに関するフィードバックはコミュニティで共有できます。

**結論:**

Vercelは、MCPサーバーのデプロイを容易にし、AIモデルとの統合を構築するための強力なプラットフォームを提供しています。新しい`@vercel/mcp-adapter`パッケージと、Fluidコンピューティングによるコスト削減の可能性により、VercelはMCP開発者にとって魅力的な選択肢となっています。

---
# Bot activity and crawler insights now in Observability - Vercel

[View on Vercel Blog](https://vercel.com/changelog/bot-activity-and-crawler-insights-now-in-observability)

## Vercel Observabilityの新機能：ボットとクローラーの詳細なインサイト

Vercel Observabilityが、AIクローラーや検索エンジンを含む個々のボットとボットカテゴリに関する詳細な内訳を提供するようになりました。

**主な内容:**

*   **すべてのプランのユーザー:** Observability > Edge Requestsダッシュボードで、ボットとボットカテゴリに関するデータを閲覧できます。
*   **Observability Plusユーザー:**
    *   AIなどのボットカテゴリでトラフィックをフィルタリングできます。
    *   個々のボットのメトリクスを確認できます。
    *   クエリビルダーでボットまたはカテゴリ別にトラフィックを分析できます。

  Observabilityダッシュボードで、ボットとクローラーのアクティビティを詳細に確認できるようになりました。

---
# Transcribing Audio Files With OpenAI in Spring AI | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917913881/0/baeldung~Transcribing-Audio-Files-With-OpenAI-in-Spring-AI)

## 「Spring AI で OpenAI を使用して音声ファイルを文字起こしする」の要約

このチュートリアル記事では、Spring AI を使用して OpenAI の音声認識モデルで音声ファイルを文字起こしする方法について解説しています。

**主な内容:**

1.  **概要:**
    *   企業が顧客サポート通話の分析、動画の字幕生成、会議議事録作成など、様々な目的で音声コンテンツからデータを抽出する必要がある。
    *   手動での文字起こしは時間とコストがかかるため、OpenAI が提供する高精度な音声認識モデルを用いて自動化する。
    *   Spring AI を利用して、OpenAI の Whisper モデルで音声ファイルを文字起こしする方法を説明。
    *   OpenAI API キーが必要。

2.  **プロジェクトのセットアップ:**
    *   必要な依存関係の追加（Spring AI の OpenAI スターター）と、Spring Milestones リポジトリの設定。
    *   `application.yaml` ファイルでの OpenAI API キーと音声認識モデルの設定（`whisper-1` モデルの指定、言語設定）。
    *   Spring AI が自動的に `OpenAiAudioTranscriptionModel` 型の Bean を作成。

3.  **音声文字起こしツールの構築:**
    *   `AudioTranscriber` サービスクラスの作成。
    *   `TranscriptionRequest` と `TranscriptionResponse` のレコード定義（音声ファイル、コンテキスト、文字起こし結果）。
    *   `transcribe()` メソッドの実装：`AudioTranscriptionPrompt` を作成し、`OpenAiAudioTranscriptionModel` Bean の `call()` メソッドを呼び出す。
    *   Spring Boot のファイルアップロード制限の調整（最大ファイルサイズを 25MB に設定）。

4.  **音声文字起こしツールのテスト:**
    *   REST API エンドポイント (`/transcribe`) の公開（POST リクエスト）。
    *   HTTPie CLI を使用した API テスト（音声ファイルとコンテキストを送信）。
    *   コンテキストプロンプトを使用することで、特定の名前（Baeldung）の正確な文字起こしが可能になる。

5.  **結論:**
    *   Spring AI で OpenAI を使用して音声ファイルを文字起こしする方法を解説。
    *   OpenAI の Whisper モデルを使用した音声文字起こしツールの実装。
    *   コンテキストプロンプトが文字起こしの精度を向上させることを確認。
    *   記事で使用したコード例は GitHub で公開。

---
# Call Java Class in JSP | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917912807/0/baeldung~Call-Java-Class-in-JSP)

## JSP で Java クラスを呼び出す方法

この記事は、JSP (JavaServer Pages) ファイル内で Java クラスを呼び出す方法について解説しています。JSP は、MVC パターンにおける View 層に焦点を当てており、ビジネスロジックの実行やデータ取得には Java クラスとの連携が必要になる場合があります。特に、小規模プロジェクトやレガシーアプリケーションにおいて、JSP 内で Java コードを呼び出すことは有効な手段です。

この記事では、以下の2つの方法を紹介しています。

**1. JSP スクリプトレットの使用:**

*   `<% ... %>` タグで囲まれた Java コードを記述し、Java クラスのメソッドを呼び出す方法です。
*   例として、`CourseWelcome` クラスのインスタンスメソッド `greeting()` や、static メソッド `staticWelcome()` を呼び出す方法が示されています。
*   Spring Boot を使用して JSP ページにアクセスするためのコントローラーとマッピングの設定例も示されています。

**2. `<jsp:useBean>` アクションの使用:**

*   `jsp:useBean` タグを使用して Java クラスのインスタンスを作成し、そのインスタンスのメソッドを呼び出す方法です。
*   id 属性で Bean の参照名を設定し、class 属性で Bean のクラス名を指定します。
*   Bean のインスタンスメソッドは、Bean の参照名を使用して呼び出せます。
*   ただし、`jsp:useBean` ではクラスの static メソッドを呼び出すことはできません。
*   JSP ファイル内で `CourseWelcome` クラスのメソッドを呼び出す例が示されています。
*   また、JavaBean と組み合わせて使用する例も示されており、`jsp:setProperty` タグを使用して Bean のプロパティを設定する方法が解説されています。
*   `CourseWelcomeBean` という JavaBean の例が示されており、`username` と `courseName` のプロパティと、`greetingUser()` と `welcomeMsg()` のインスタンスメソッドを持っています。

**まとめ:**

この記事では、JSP 内で Java クラスを呼び出すための2つの方法を紹介しています。JSP スクリプトレットは手軽ですが、コードの可読性や保守性が低下する可能性があります。`<jsp:useBean>` アクションは、より構造的な方法であり、JavaBean と組み合わせて使用することで、データの受け渡しや Bean の管理が容易になります。

記事の最後には、サンプルコードが GitHub で公開されていることが記載されています。

---
# Micrometer Observation and Spring Kafka | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917912810/0/baeldung~Micrometer-Observation-and-Spring-Kafka)

## Micrometer ObservationとSpring Kafkaの要約

この記事では、MicrometerとSpring Boot Actuatorを使用して、Spring Kafkaにおける監視機能を活用する方法について解説しています。

**1. 概要**

*   Spring Kafkaを使用するアプリケーションの監視機能について解説します。
*   Apache Kafkaのネイティブメトリクス、Spring Kafka固有のメトリクス、Micrometerを使用したカスタムタグの追加、トレーシングについて説明します。

**2. 環境設定**

*   Spring Bootアプリケーションに`spring-kafka`と`spring-boot-starter-actuator`の依存関係を追加します。
*   Actuatorエンドポイントを有効にして、メトリクスを公開します。
*   この記事では、ブログと学習サイトのバックエンドアプリケーションを例に、記事コメントを作成するHTTPエンドポイントと、Kafkaトピック`baeldung.article-comment.added`にメッセージを送信するプロデューサーと、同じトピックからメッセージを消費するリスナーを使用します。

**3. ネイティブKafkaメトリクス**

*   `spring-boot-starter-actuator`の依存関係を追加するだけで、Kafkaのメトリクスがデフォルトで公開されます。
*   **プロデューサーメトリクス**: レコードエラー率、要求の平均レイテンシ、バッファ枯渇率、レコード送信率、未処理の要求数など。
*   **コンシューマーメトリクス**: 消費者の遅延、平均フェッチレイテンシ、再バランスの頻度、最後のポーリングからの経過時間、連続するポーリング間の平均時間など。
*   カスタムタグを追加することで、これらのメトリクスをカスタマイズできます。

**4. KafkaTemplateの監視**

*   KafkaTemplate beanは、Kafkaにメッセージを公開するために使用されます。
*   Micrometerは、KafkaTemplateに固有のメトリクスを記録し、`spring.kafka.template`メトリクス名で公開します。
*   `setMicrometerTags()`メソッドを使用して、KafkaTemplateにカスタムタグを追加または更新できます。
*   `setMicrometerTagsProvider()`を使用して、レコードのキーを抽出し、それをタグとして追加できます。

**5. KafkaListenerの監視**

*   Micrometerは、KafkaListenerも監視し、`spring.kafka.listener`メトリクス名で関連メトリクスを公開します。
*   `setMicrometerTags()`および`setMicrometerTagsProvider()`メソッドを使用して、リスナーメトリクスにカスタムMicrometerタグを付加できます。
*   これらのタグは、`ConcurrentKafkaListenerContainerFactory`レベルで設定します。

**6. Kafkaメッセージのトレーシング**

*   Micrometerのトレーシング機能は、トレース情報をログに追加することで、リクエストの流れを追跡するのに役立ちます。
*   Spring Kafkaの組み込み機能を使用して、トレースコンテキストをメッセージメタデータ（HTTPリクエストヘッダーまたはKafkaメッセージヘッダーなど）を介して伝搬させます。
*   `MDC`を使用してトレーシング情報をログに記録し、`traceId`と`spanId`をログに追加します。
*   `KafkaTemplate`で`setObservationEnabled(true)`を呼び出すことで、トレース情報をメッセージヘッダーに追加できます。
*   リスナー側でも、コンテナレベルで`setObservationEnabled(true)`を有効にすることで、受信メッセージの`traceparent`ヘッダーを解析し、MDCに追加できます。

**7. まとめ**

*   Apache Kafkaのネイティブメトリクスと、Spring KafkaおよびMicrometerによる拡張監視サポートを組み合わせることで、メッセージングシステムの健全性とパフォーマンスを包括的に把握できます。
*   ネイティブメトリクスは低レベルの運用に関する洞察を提供し、Spring固有のメトリクスはよりコンテキスト的でアプリケーションを意識した可観測性を提供します。
*   カスタムタグを追加してメトリクスを強化する方法について説明しました。
*   トレーシングを有効にし、トレース情報でログを強化する方法について説明しました。
*   トレース情報を`traceparent`メッセージヘッダー経由で伝搬するようにSpring Kafka beansをカスタマイズし、異なるコンポーネント間のメッセージフローを追跡できるようにしました。

---
# How to Install NVM in a Docker Container | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917911949/0/baeldung~How-to-Install-NVM-in-a-Docker-Container)

## DockerコンテナにNVMをインストールする方法 | Baeldungの要約

この記事では、Dockerコンテナ内にNode Version Manager (NVM)をインストールする3つの方法について解説しています。

**1. NVM Dockerイメージの使用:**
   - Docker HubにあるNVMのDockerイメージを直接利用する方法です。`guolin/node-nvm-docker` イメージの例が示されています。
   - このイメージを使用すると、NVMとNode.jsがプリインストールされた状態でコンテナを起動できます。

**2. コマンドの実行:**
   - 既存または新規のDockerコンテナで、コマンドを実行してNVMをインストールする方法です。
   - Ubuntuコンテナを起動し、`apt update`と`apt install curl -y`でcurlをインストールした後、curlコマンドを使ってNVMをダウンロード・インストールします。
   - `export NVM_DIR` と `source` コマンドでNVMをロードします。
   - `nvm install node` を使ってNode.jsの最新版をインストールできます。

**3. Dockerfileからのビルド:**
   - Dockerfileを使用して、NVMのインストールを自動化する方法です。
   - Dockerfileには、ベースイメージ (Ubuntu) の指定、curlのインストール、NVMのインストール、環境変数の設定、Node.jsのインストール、ENTRYPOINTとCMDの設定が含まれています。
   - `docker build` コマンドでDockerイメージをビルドし、`docker run` コマンドでコンテナを実行できます。
   - ビルドしたコンテナ内では、`nvm install` コマンドを使ってNode.jsのバージョンを切り替えることも可能です。

この記事の主な目的は、Dockerコンテナ内でのNVMのインストール方法を、Dockerイメージの使用、コマンドの実行、Dockerfileの利用という3つのアプローチで分かりやすく説明することです。GitHubリポジトリへのリンクも提供されています。

---
# Introducing data residency in Asia | OpenAI

[View on OpenAI News](https://openai.com/index/introducing-data-residency-in-asia)

## OpenAI、アジアでのデータレジデンシーを発表

OpenAIは、API、ChatGPT Enterprise、およびChatGPT Edu向けに、日本、インド、シンガポール、韓国でデータレジデンシーを開始することを発表しました。これにより、これらの国々で事業を展開する企業は、OpenAIの製品を利用する際、現地のデータ主権要件を満たせるようになります。

**データレジデンシーの概要:**

*   **対象製品:** ChatGPT Enterprise、ChatGPT Edu、APIプラットフォーム
*   **対象地域:** 日本、インド、シンガポール、韓国
*   **内容:** 対象のお客様は、顧客コンテンツをこれらの地域で保存できるようになります。これは、ChatGPTとの会話、カスタムGPT、アップロードされたファイルなど、テキスト、ビジョン、画像を含むすべてのデータに適用されます。
*   **APIプラットフォーム:** APIプラットフォームでは、APIダッシュボードで新しいプロジェクトを作成し、関連する国を選択することでデータレジデンシーを有効にできます。

**データレジデンシーがもたらすメリット:**

*   **コンプライアンスの強化:** 現地のデータ主権要件への準拠を支援します。
*   **データ管理の強化:** データ制御を強化し、セキュリティとプライバシーを向上させます。

**既存のエンタープライズグレードの機能:**

データレジデンシーは、OpenAIの既存のエンタープライズグレードのデータプライバシー、セキュリティ、およびコンプライアンス機能を基盤としています。これらの機能には以下が含まれます。

*   高度な暗号化技術（AES-256、TLS 1.2+）
*   顧客データのデフォルトでのモデル学習の無効化（顧客が明示的にオプトインしない限り）
*   GDPR、CCPAなどのプライバシー法への準拠、CSA STARおよびSOC 2 Type 2規格への準拠
*   データ処理付加条項（DPA）の提供

**詳細情報:**

データレジデンシーの対象やサポートされているデータに関する詳細は、ChatGPTおよびAPIプラットフォームのヘルプページ、またはOpenAIの営業窓口から入手できます。

---
# The San Antonio Spurs use ChatGPT to scale impact on and off the court | OpenAI

[View on OpenAI News](https://openai.com/index/san-antonio-spurs)

## サンアントニオ・スパーズ、ChatGPTを活用してコート内外での影響力を拡大

**概要:**

サンアントニオ・スパーズは、ChatGPT Enterpriseを活用して、運営効率の向上、グローバルファンとのエンゲージメント強化、AI文化の醸成を実現しています。特に、ChatGPTを導入することで、スタッフのAI利用能力を向上させ、毎月1,800時間の業務時間削減に成功しています。

**主なポイント:**

*   **文化変革の推進:** グローバルファンからの期待に応えるために、スパーズはChatGPTを導入し、データ分析、コンテンツ作成、リーダーシッププログラムの拡大など、様々な分野で活用しています。
*   **人中心の導入:** OpenAIのChatGPT Enterpriseを選択し、パイロットプログラム、対面トレーニング、社内ハッカソンなどを通じて、スタッフのAI利用への抵抗感を減らし、主体的な利用を促しました。
*   **目的に合わせたGPTの活用:** スパーズは、コミュニティ活動、運営、パートナーシップ、ファンエンゲージメントなど、具体的な課題を解決するために、従業員が作成したカスタムGPTを多数活用しています。
    *   例：ファンからの意見を分析するGPT、リーダーシップ研修の内容をカスタマイズするGPT、偽造商品を検出するGPTなど。
*   **短期間でのROI実現:** AI利用能力が大幅に向上し、時間削減やファンエンゲージメントの強化に成功しました。
    *   AI利用能力が14%から85%以上に向上。
    *   ファンとのコミュニケーションをスペイン語とフランス語で実施。
    *   94%のユーザーがLLMツールに対する自信を向上。
*   **継続的なAI学習の促進:** スパーズはAIを単なる技術革新ではなく、学習、連携、持続的な影響を生み出すための手段と捉えています。
    *   AIとコーチングに関する研究トラックを設けたSpurs Performance Instituteを設立。
    *   社内ハッカソンを通じて新しいアイデアを共有。
*   **他組織への導入指針:**
    *   技術と文化の両方を理解しているチームとの連携。
    *   直感的に使えるツールの選択。

**結論:**

スパーズは、ChatGPTを単なるツールとしてではなく、組織文化の一部として取り入れることで、業務効率化、ファンとの関係性強化、そして革新的な組織文化の醸成に成功しています。その成功の鍵は、人を中心としたアプローチと、明確な目的意識、そして継続的な学習への意欲にあります。

---
# Lowe’s puts project expertise into every hand  | OpenAI

[View on OpenAI News](https://openai.com/index/lowes)

ローソン（Lowe's）は、OpenAIと提携し、ホームセンターでの顧客と従業員の両方をサポートするAIプラットフォームを開発しました。このプラットフォームは、顧客向けバーチャルアドバイザー「Mylow」と、店舗従業員向けのモバイルアプリ「Mylow Companion」で構成されています。

**主なポイント：**

*   **課題の解決：** ホームセンターでの買い物は複雑で、専門知識が必要となるため、ローソンは顧客と従業員の両方に対して、AIを活用してプロジェクトに関する専門知識を提供することを目指しています。
*   **MylowとMylow Companion：** Mylowは、Lowes.comで、顧客が自然言語で質問し、ステップバイステップのガイダンスや製品の推奨事項を得るためのものです。Mylow Companionは、店舗従業員向けに、製品に関する情報、設置手順、在庫状況などを迅速に提供するモバイルアプリです。
*   **メリット：**
    *   顧客は、プロジェクトに関するより具体的な情報や、自信を持って購入するためのサポートを得られます。
    *   従業員は、自分の専門分野以外のことでも、顧客の質問に迅速に答えることができ、顧客サービスの向上に繋がります。
    *   全体として、顧客の購入意欲を高め、より多くの情報を得て、より良い買い物を促すことを目指しています。
*   **AIをビジネスモデルに統合：** ローソンは、AI戦略を、顧客体験、従業員向けのツール、内部業務の3つの柱を中心に構築し、ビジネスとテクノロジーの緊密な連携を重視しています。
*   **今後の展望：** ローソンは、OpenAIとの連携を強化し、Mylow Companionに音声サポートを導入したり、本社従業員向けにChatGPT Enterpriseを展開するなど、AI活用の範囲を拡大していく予定です。
*   **目標：** すべての従業員と顧客が、自信を持ってホームセンターでのプロジェクトに取り組めるようにすることを目指しています。
---
# Introducing OpenAI for Countries | OpenAI

[View on OpenAI News](https://openai.com/global-affairs/openai-for-countries)

## OpenAI for Countries の詳細な要約

2025年5月7日、OpenAIは「OpenAI for Countries」という新たなイニシアチブを発表しました。これは、民主的なAI基盤の構築を望む世界中の国々を支援することを目的としています。

このイニシアチブは、1月にトランプ大統領、Oracle、SoftBankとのパートナーシップで発表された、アメリカのAIインフラへの大規模投資プロジェクト「Stargate」の一環として展開されます。現在、テキサス州アビリーンに最初のスーパーコンピューティングキャンパスが建設されており、今後も拠点を増やす予定です。

OpenAIは、多くの国々から同様のAIインフラ構築支援の要望を受けており、AIインフラが将来の経済成長と国家発展の基盤となることを認識しています。そこで、これらの国々を支援し、民主的なAIを普及させることを目指しています。民主的なAIとは、長年の民主主義の原則を保護し、取り入れたAIの開発、使用、展開を意味します。具体的には、人々がAIとの関わり方を選択できる自由、政府によるAIの統制を防ぐこと、自由競争を保証する自由市場などが含まれます。

「OpenAI for Countries」では、以下の具体的な取り組みを通じて、各国とのパートナーシップを構築します。

*   **データセンターの共同建設**: 各国のデータ主権を支援し、新しいローカル産業を創出し、AIをカスタマイズし、データをプライベートかつコンプライアンスに準拠した方法で活用できるようにします。
*   **カスタマイズされたChatGPTの提供**: より良い医療、教育、効率的な公共サービスなどを提供します。各国のニーズに合わせてローカライズされ、言語と文化を尊重し、将来の国際的な基準を遵守します。
*   **AIモデルのセキュリティと安全管理の継続的な進化**: AIモデルの性能向上に伴い、データセンターや物理的なセキュリティなど、AIの展開、運用、保護に必要なプロセスと管理に投資します。AIの安全性には、民主的なプロセスと人権の尊重が不可欠であり、世界的な民主的な意見を反映させるために協力します。
*   **国家スタートアップファンドの設立**: OpenAIの資金と現地の資金を組み合わせて、健全な国家AIエコシステムを育成し、雇用創出、新企業設立、新たな収益源、地域社会の発展を支援します。
*   **グローバルStargateプロジェクトへの投資**: パートナー国は、グローバルStargateプロジェクトへの投資を通じて、米国主導のAIリーダーシップと民主的なAIのグローバルなネットワーク効果を拡大することに貢献します。

OpenAIは、このイニシアチブの第一段階として、個々の国または地域と10のプロジェクトを実施し、そこから拡大していくことを目指しています。各国からの関心表明は、米国に駐在する各国の代表者を通じて、または世界各地のOpenAIのオフィスにいる幹部を通じて受け付けています。
