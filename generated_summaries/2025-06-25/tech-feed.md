# WPP and Vercel: Bringing AI to the creative process - Vercel

[View on Vercel Blog](https://vercel.com/blog/wpp-and-vercel-bringing-ai-to-the-creative-process)

## WPPとVercelのパートナーシップ拡大：クリエイティブプロセスへのAI導入

この記事は、WPPとVercelのパートナーシップ拡大を発表しています。このコラボレーションにより、WPPのクリエイティブチームとクライアントは、v0とAI SDKを直接利用できるようになります。

**主な内容:**

*   **AIツールの活用:** WPPのクリエイターは、v0とAI SDKを使用して、デジタル体験やエージェントを迅速に設計、プロトタイプ作成、テスト、デプロイできるようになりました。これにより、アイデア出しから反復までのサイクルが数週間から数時間へと短縮されます。
*   **v0の導入:** v0は、デザイナーにとって新しい働き方をもたらします。コーディングの専門知識を持たない開発者関連の役割の担当者でも、開発者を必要とする前に、美しく高性能なオンライン体験を高い精度で作成できます。
*   **成果:** v0とAI SDKの導入により、WPPの社内パイロットでは、デジタル制作時間が最大25%短縮されました。これにより、クリエイティブチームは、最も得意とするクリエイティブな作業に集中できるようになります。
*   **具体的な事例:**
    *   **VML North America:** Hydrowクライアントは、ヘッドレスアーキテクチャとNext.js、Vercelの採用により、サイト更新速度が3,000%向上、Core Web Vitalsが50%改善、オーサリング時間が数週間から数分に短縮されました。
    *   **AKQA:** Next.js Middlewareによる機能フラグの統合により、小売クライアントは、デプロイメントとは別に新機能を有効化できるようになりました。これにより、テストと学習のアプローチが可能になり、リスクが大幅に軽減されました。
    *   **Ogilvy:** Next.jsとVercelにより、クライアントは、関連性の高いコンテンツをグローバルな顧客に提供し、最適化された可用性を確保しながら、メンテナンスコストを最小限に抑え、インフラストラクチャの障害を軽減しました。Ogilvyは、最近のクライアントで最大30%のコスト削減を実現し、90%台後半の可用性を向上させました。
*   **コミュニティの構築:** この拡大したパートナーシップにより、WPPは新しいVercel製品リリースへの優先アクセス権を獲得し、WPP Open（WPPのAI対応マーケティングサービスプラットフォーム）内での新製品開発、統合、およびイノベーションへの共同投資も行います。
*   **WPP x Vercel AI生成型CXハッカソン:** 2025年3月開催予定のイベントで、v0とAIがデジタル体験の構築方法をどのように変えているかを示す予定です。
*   **今後の展望:** WPPとVercelは協力して、クライアントのオーディエンスを理解し、ストーリー、デザイン、コードを組み合わせた作品を制作することを目指しています。以前は数ヶ月と大規模なチームを必要としたものが、今では小さなチームで数日で実現できるようになります。

**まとめ:**

WPPとVercelは、AI技術をクリエイティブプロセスに統合することで、デジタル体験の制作を加速させ、クライアントの成果を向上させることを目指しています。このパートナーシップは、効率性の向上、コスト削減、革新的な体験の創出につながることが期待されています。

---
# Vercel Blob CLI is now available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-blob-cli-is-now-available)

## Vercel Blob CLI が利用可能になりました

Vercel CLI (バージョン 43.3.0) に Blob コマンドが追加され、ターミナルから直接 Vercel Blob のストアとファイルを管理できるようになりました。Vercel Blob CLI と Vercel Blob について、詳細はこちらをご覧ください。

---
# Manually purge the CDN cache - Vercel

[View on Vercel Blog](https://vercel.com/changelog/manually-purge-the-cdn-cache)

## Vercel CDN キャッシュの手動パージに関する要約

Vercelのオーナーロールを持つユーザーは、VercelのCDNキャッシュを手動でパージできるようになりました。パージは、プロジェクトのキャッシュ設定ダッシュボードから、またはCLIバージョン44.2.0以降で `vercel cache purge --type=cdn` コマンドを実行することで行えます。

通常、CDNキャッシュは新しいデプロイメントごとに自動的にパージされます。しかし、今回の機能追加により、新しいビルドを待つことなく、キャッシュされたコンテンツを即座に更新したい場合に役立ちます。特に、画像最適化などの永続的なキャッシュシナリオで、デプロイメント間でパスがキャッシュされる場合に有効です。アップストリームの画像が変更された場合など、即座にキャッシュをリフレッシュできます。

詳細はドキュメントを参照してください。

---
# Introduction to DiceDB | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920673785/0/baeldung)

この記事は、DiceDBというオープンソースの高性能インメモリデータベースについて紹介しています。

**主な内容:**

*   **DiceDBの概要:** 高速で、リアルタイムアプリケーション向けに設計されており、SETやGETといった馴染みのあるコマンドをサポートしています。
*   **インストールと使用方法:** Dockerまたはソースコードからインストールできます。Dockerを使ったインストール方法と、DiceDB CLI（コマンドラインインターフェース）のインストール方法を説明しています。
*   **基本操作:** SETコマンドによるキーと値の保存、GETコマンドによる値の取得、存在しないキーに対するGETコマンドの挙動について説明しています。
*   **その他のコマンド:** DEL（キーの削除）、ECHO（入力の返却）、PING（サーバーの応答確認）、TYPE（キーのデータ型確認）、EXISTS（キーの存在確認）といった、DiceDBで利用可能な便利なコマンドを紹介しています。
*   **結論:** DiceDBは、高速でオープンソースなリアルタイムデータ管理のための選択肢であり、チャットルームやリーダーボードなどのより高度な使用例は公式ドキュメントで確認できると述べています。

記事の目的は、DiceDBの基本的な使い方を理解し、その機能を試すための手引きを提供することです。

---
# One Reader with Multiple Processors and Writers in Spring Batch | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920673788/0/baeldung)

## Spring Batchにおける1つのリーダー、複数のプロセッサー、複数のライターの実装

このチュートリアルでは、Spring Batchジョブで、1つのリーダー、複数のプロセッサー、複数のライターを実装する方法を解説しています。このアプローチは、データを一度読み込み、様々な方法で処理し、その結果を複数の宛先に書き込む必要がある場合に有効です。

**1. はじめに**

Spring Batchを使用して、CSVファイルからデータを読み込み、顧客のタイプに基づいて異なる方法で処理し、データベースとCSVファイルの両方に結果を書き込む方法を説明します。

**2. Spring Batchプロジェクトの設定**

*   `pom.xml`にSpring Boot Starter BatchとSpring Boot Starter Data JPAの依存関係を追加します。
*   H2インメモリデータベースを開発目的で使用します。
*   サンプルデータを含むCSVファイル（`customers.csv`）を用意し、`src/main/resources`に配置します。
*   顧客データを表す`Customer`エンティティクラスを作成します。

**3. CSVリーダーの実装**

*   `FlatFileItemReader`を使用してCSVファイルを読み込みます。
*   各レコードを`Customer`オブジェクトにマッピングします。
*   フィールド名がCSVヘッダーと`Customer`クラスのプロパティと一致するように設定します。

**4. 条件付きプロセッサーの作成**

*   `TypeAProcessor`と`TypeBProcessor`の2つのプロセッサーを作成します。
*   各プロセッサーは、`ItemProcessor`インターフェースを実装します。
*   `TypeAProcessor`は、タイプAの顧客の名前を大文字に変換し、メールアドレスにプレフィックスを追加します。
*   `TypeBProcessor`は、タイプBの顧客の名前を小文字に変換し、異なるメールプレフィックスを使用します。

**5. プロセッサールーターの実装**

*   `CustomerProcessorRouter`を作成し、`ItemProcessor`インターフェースを実装します。
*   顧客のタイプフィールドに基づいて、適切なプロセッサーに処理を委譲します。

**6. 複数のライターの設定**

*   `JpaItemWriter`を使用して、処理された`Customer`オブジェクトをデータベースに永続化します。
*   `FlatFileItemWriter`を使用して、CSVファイルを生成します。
*   `CompositeItemWriter`を使用して、両方の宛先に同時に書き込みます。

**7. ステップとジョブの設定**

*   `Job`を作成し、1つのステップを定義します。
*   ステップは、データをチャンク単位で読み込み、ルーターを介して処理し、データベースとフラットファイルの両方に書き込みます。

**8. ジョブの実行とテスト**

*   統合テストを作成して、ジョブが期待通りに動作することを確認します。
*   データベースと出力ファイルの結果を検証します。
*   タイプAとタイプBの顧客が正しく処理されていることを確認します。

**9. まとめ**

このチュートリアルでは、Spring Batchジョブを1つのリーダー、複数のプロセッサー、複数のライターを使用して構成する方法を学びました。 CSVファイルからデータを読み込み、内容に基づいて各レコードを特定のプロセッサーにルーティングし、最後に複数のライターに書き込みを委譲しました。

---
# How to Implement Retry for JUnit Tests | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920673074/0/baeldung)

## JUnitテストのリトライの実装方法

このBaeldungの記事では、JUnitテストにおけるリトライの実装方法について解説しています。

**1. 概要**

*   自動化されたテストは、現代のソフトウェア開発において不可欠。
*   しかし、テストの失敗がすべてバグによるものとは限らず、レースコンディション、ネットワーク遅延、リソース制約など、一時的な問題で断続的に失敗することがある。
*   このような一時的な失敗に対処するため、テストにリトライロジックを実装することが有効。
*   リトライメカニズムにより、テストを失敗と見なす前に、指定された回数だけ再実行することができ、テスト実行の安定化やCIパイプラインでの誤検出の削減に役立つ。
*   この記事では、JUnit 4とJUnit 5の両方でリトライロジックを実装する方法、カスタムアプローチとライブラリベースのアプローチ、およびベストプラクティスについて説明する。

**2. JUnit 5でのリトライロジックの実装**

*   JUnit 5では、JUnit 4に比べてテストの動作をカスタマイズするのが容易になる強力な拡張モデルが導入された。
*   JUnit 5でリトライロジックを実装する一般的な方法は2つある。
    *   テスト失敗時にプログラム的にリトライを処理するカスタム拡張機能を作成する方法。
    *   JUnit Pioneerのような外部ライブラリを使用して、組み込みのリトライアノテーションを使用する方法。

    *   **2.1. TestExecutionExceptionHandler を使用したカスタムリトライ拡張機能**

        *   TestExecutionExceptionHandler インターフェースを実装することにより、カスタム拡張機能をJUnit 5で作成できる。これにより、テストの実行中に例外がスローされた場合にリトライを行うことが可能。
        *   コード例として、3回までリトライするカスタム拡張機能の実装が示されている。
        *   使用する際には、テストクラスに `@ExtendWith(RetryExtension.class)` とアノテーションを付与する。
        *   リトライ回数は `ExtensionContext.Store` を使用してテストコンテキストに保存され、各リトライはデバッグに役立つようにログに記録される。
        *   すべての試行後にテストがまだ失敗する場合は、例外を再スローして失敗としてマークする。
    *   **2.2. JUnit Pioneer の @RetryingTest の使用**

        *   JUnit Pioneerライブラリは、@RetryingTest アノテーションを提供しており、失敗したテストを自動的にリトライできる。
        *   pom.xmlにjunit-pioneerの依存関係を追加する必要がある。
        *   使用例として、最大リトライ回数を指定するだけで、ライブラリがテストを再実行する。

**3. JUnit 4でのリトライロジックの実装**

*   JUnit 4にはJUnit 5のような最新の拡張モデルはないが、カスタムTestRuleを作成することでリトライロジックを実現できる。
*   コード例として、RetryRule というカスタム TestRule の実装が示されている。
*   このルールは、テスト実行をラップし、設定された回数だけ失敗した場合に再試行する。
*   各試行はログに記録され、すべてのリトライが失敗した場合、テストは最後の例外をスローすることにより失敗とマークされる。

**4. テストリトライのベストプラクティス**

*   タイミングや環境の問題により断続的に失敗する場合にリトライは有効。ただし、一貫して失敗する場合は、リトライは実際の問題を隠すだけになる。
*   デバッグを容易にするため、各リトライ試行を常にログに記録する。
*   リトライ回数が多すぎると、テスト実行が遅くなり、問題を見えなくする可能性がある。一般的なデフォルトは2〜3回。
*   リトライは一時的な解決策として使用し、根本原因を修正することを目的とする。

**5. まとめ**

*   失敗したテストをリトライすることで、特にCI環境において、テストスイートの信頼性を大幅に向上させることができる。
*   JUnit 4とJUnit 5は、カスタムロジックまたはJUnit Pioneerのようなサードパーティライブラリを介して、両方ともリトライをサポートしている。
*   バグを無視するのではなく、高品質なソフトウェアを構築しながら、外部の不安定性を管理するために、リトライを責任を持って使用する。

---
# Java on Azure Day 2025で"Spring AIで学ぶMCPの活用"について話してきました。 - IK.AM

[View on IK.AM](https://ik.am/entries/858)

## Java on Azure Day 2025 でのセッション「Spring AIで学ぶMCPの活用」に関する要約

IK.AM氏が、Java on Azure Day 2025 で「Spring AIで学ぶMCPの活用」と題したセッションを実施しました。このセッションでは、Spring AI を活用して、マイクロソフト認定資格 (MCP) の学習に役立つ方法について解説しました。

セッションの録画とスライドは公開されており、実際に使用したデモのソースコードもGitHub上で公開されています。デモでは、Azure OpenAI Service と Github Copilot を使用していますが、普段は Claude (OpenAI API + Desktop) を利用しており、特定の環境に依存しない内容となっています。

---
# VMware Tanzu Gemfire on Kubernetes 2.5をインストールするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/857)

## VMware Tanzu Gemfire on Kubernetes 2.5 インストールメモ - 詳細要約

この記事は、VMware Tanzu Gemfire on Kubernetes 2.5 を Kubernetes 環境にインストールし、GemFire クラスターを構築する手順をまとめたものです。

**主な内容:**

1.  **Docker レジストリへのアクセスとイメージのリロケーション:**
    *   Broadcom Support から Docker レジストリのアクセストークンを取得。
    *   トークンの有効期限切れに対応するため、コンテナイメージを ghcr.io へリロケート。`imgpkg`コマンドを使用し、CRD、Operator、Controller イメージをリロケート。

2.  **Tanzu GemFire on Kubernetes のインストール:**
    *   GemFire CRD (Custom Resource Definition) と Operator を Helm を使用してインストール。
    *   `kubectl` コマンドで名前空間と Docker Registry Secret を作成。
    *   リロケートしたイメージを使用して Helm チャートをインストール。
    *   インストール後、Pod の状態を確認し Operator が正常に起動していることを確認。
    *   `kubectl api-resources` コマンドで利用可能なカスタムリソースを確認。

3.  **GemFireCluster の作成:**
    *   Gemfire Operator を使用して、`demo` namespace に GemFireCluster インスタンスを作成。
    *   GemFire コンテナイメージも ghcr.io にリロケート済み。
    *   Locator 2 台、Server 3 台の構成で GemFireCluster を定義。
    *   PersistentVolumeClaim の `deleteOnShutdown` 設定について言及。
    *   `kubectl get` コマンドで GemFireCluster の状態を確認。

4.  **GemFire クラスターへの接続と動作確認:**
    *   Locator Pod 内で bash を実行し、GemFire への接続を確認。
    *   デフォルトで TLS が有効になっているため、証明書パスワードを使用して `gfsh` で接続。
    *   `connect` コマンドを使用して Locator に接続し、`list members` コマンドでメンバーが正しく起動していることを確認。
    *   `create region` コマンドで PARTITION\_PERSISTENT タイプの Region を作成し、テストデータ追加。
    *   `query` コマンドでデータの存在を確認。

5.  **外部からの GemFire へのアクセス設定:**
    *   Locator の管理 API を公開するために、Contour の HTTPProxy を使用。
    *   HTTPProxy を作成し、`gfsh` から `connect --url` を使用して GemFire に接続。

6.  **Java アプリケーションからの GemFire への接続:**
    *   既存のデモアプリをデプロイし、GemFire に接続する手順を説明。
    *   `demo-gemfire` アプリケーションを使用し、Helm チャートでデプロイ。
    *   Ingress を使用してアプリケーションにアクセスし、顧客情報を登録できることを確認。
    *   `gfsh` で登録した顧客情報が Region に保存されていることを確認。

7.  **外部 Java アプリからの GemFire への接続 (SNI Proxy):**
    *   外部の Java アプリから GemFire にアクセスするために、SNI Proxy の設定を紹介。
    *   Contour の HTTPProxy の TLS Session Passthrough を使用。
    *   Locator と Server への HTTPProxy を作成。
    *   外部 Java アプリから GemFire に接続するために必要な設定を説明。
    *   Java アプリケーションを起動し、http://localhost:8080 にアクセスして GemFire 上のデータを確認。

8.  **クリーンアップ:**
    *   アプリケーション、GemFireCluster、GemFire Operator と CRD を削除する手順を説明。

**まとめ:**

この記事では、Tanzu GemFire on Kubernetes 2.5 のインストールから、Java アプリケーションからの接続まで、Kubernetes 環境における GemFire クラスターの構築と利用方法を詳細に解説しています。GemFire Operator を活用することで、Kubernetes 上での GemFire クラスターの管理が容易になり、セキュリティも強化されていることが強調されています。
