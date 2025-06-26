# ​Introducing BotID, invisible bot filtering for critical routes - Vercel

[View on Vercel Blog](https://vercel.com/blog/introducing-botid)

## Vercel、重要なルート向けに目に見えないボットフィルタリング「BotID」を発表

この記事では、Vercelが発表した新しいボット対策ツール「BotID」について解説しています。

**概要:**

BotIDは、高度なボットによる不正アクセスを防ぐための新しいセキュリティレイヤーです。従来の対策では見抜けない、人間と見分けがつかないほど巧妙なボットに対応するため、目に見えない方法でボットを検知し、バックエンドへのアクセスをブロックします。

**主な特徴:**

*   **高度なボット対策:** JavaScriptを実行し、CAPTCHAを突破し、人間のようにインターフェースを操作する高度なボットを検知します。
*   **目に見えない保護:** CAPTCHAなどの煩わしい表示をすることなく、ユーザーエクスペリエンスを損ないません。
*   **シンプルな導入:** 設定ファイルや調整は不要で、パッケージをインストールし、リライトを設定し、クライアントをマウントし、サーバー側でリクエストを検証するだけです。
*   **2つのモード:** 基本モード（デフォルト）と、Kasadaによる高度な検知機能を追加したDeep Analysisモードがあります。
*   **セッションレベルでの検知:** 軽量で難読化されたコードをリクエスタの環境に注入し、毎回変更することで、リプレイや改ざん、静的解析を防ぎます。
*   **多角的なシグナル収集:** ユーザーエージェントヘッダーやIPアドレスなどの静的な情報に頼らず、人間とボットを区別するための多数のシグナルを収集します。
*   **自己学習:** 攻撃パターンをグローバルな機械学習ネットワークにフィードし、継続的に保護を強化します。
*   **高速かつ信頼性:** サーバー側の検証は1つの関数呼び出しで完了し、設定やAPIキーの管理、閾値の調整は不要です。
*   **Kasadaとの連携:** Deep AnalysisモードはKasadaの技術を利用し、高度なボットからの攻撃に対する防御を強化します。
*   **多様なユースケース:** チェックアウト、ログイン、サインアップ、APIなど、自動化された不正アクセスによるコストが発生する重要なルートを保護します。
*   **あらゆる規模のチームに対応:** スケールアップや、不正なアカウント作成、機密データのスクレイピングなど、様々なボットの脅威に対処できます。

**利用方法:**

BotIDはすべてのチームで利用可能で、ProおよびEnterpriseチームはKasadaによるDeep Analysisを利用できます。導入は簡単で、パッケージをインストールし、保護したいルートを定義してデプロイするだけです。

**まとめ:**

BotIDは、従来の対策では防ぎきれない高度なボットによる不正アクセスを、ユーザーエクスペリエンスを損なわずに効果的にブロックするための革新的なソリューションです。Vercelは、BotIDを通じて、開発者のセキュリティ対策を強化し、アプリケーションの保護を支援します。

---
# Introducing Active CPU pricing for Fluid compute - Vercel

[View on Vercel Blog](https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute)

## VercelがFluid Compute向けにActive CPU料金を導入

### 概要

Vercelは、I/Oバウンドなワークロード（AI推論、エージェント、MCPサーバーなど）向けに設計されたFluid Computeに、新しい料金モデル「Active CPU」を導入しました。このモデルは、コードがCPUを積極的に使用している場合にのみ料金が発生するもので、より効率的なコスト削減を実現します。

### 背景

従来のサーバーとサーバーレスコンピューティングにはそれぞれ課題がありました。サーバーはリソースのプロビジョニングとスケーリングを手動で管理する必要があり、アイドル時間によるコストの無駄が発生していました。一方、サーバーレスは、個別のインスタンス起動によるオーバーヘッドや、リソースのアンダーユースが発生していました。

### Fluid Computeの利点

Fluid Computeは、従来のサーバーレスモデルから脱却し、複数のリクエストで同じリソースを共有することで、コールドスタートをなくし、アイドル時間を再利用します。これにより、AIのようなI/Oバウンドなワークロードを効率的に実行できます。

### Active CPU料金モデルの詳細

Active CPU料金モデルは、以下の3つの指標に基づいて料金を計算します。

*   **Active CPU:** コードが仮想CPU（vCPU）を積極的に実行している時間をミリ秒単位で計測します。料金はvCPU数と使用時間の積で計算され、1時間あたり$0.128から。
*   **Provisioned Memory:** 関数の実行中に必要なメモリをGB-時間単位で計測します。料金はActive CPUよりも低く、1GB-時間あたり$0.0106から。Fluidのメモリ再利用機能により、コストを抑えます。
*   **Invocations:** 関数の呼び出し回数で計算され、従来のサーバーレスと同様に料金に含まれます。

### Active CPU料金モデルのメリット

この新しい料金モデルは、実際の使用量に応じて料金を計算するため、以下のメリットがあります。

*   コストの最適化: 実際の使用量に合わせてコストが変動し、無駄を削減します。
*   スケーラビリティ: 実際の使用量に応じてスケーリングするため、高いパフォーマンスと効率性を実現します。
*   モダンアプリへの適合: 現代的なアプリの実行方法に合わせて設計されています。

### 利用方法

Active CPU料金は、Hobby、Pro、および新しいEnterpriseチームでデフォルトで有効になっています。既存のEnterpriseのお客様は、プラン構成によって利用可否が異なります。詳細については、Vercelチームにお問い合わせください。

### まとめ

Active CPU料金の導入により、Fluid ComputeはAIアプリケーションなどのモダンワークロード向けに、より費用対効果の高いコンピューティング環境を提供します。

---
# Edge Middleware and Edge Functions are now powered by Vercel Functions - Vercel

[View on Vercel Blog](https://vercel.com/changelog/edge-middleware-and-edge-functions-are-now-powered-by-vercel-functions)

## Vercel FunctionsがEdgeランタイムに対応：要約

Vercelは、Edgeランタイムを使用する関数を、統一されたVercel Functionsインフラストラクチャで実行するように変更しました。これにより、Edge MiddlewareとEdge FunctionsはそれぞれVercel Routing MiddlewareとVercel Functionsに置き換えられました。

**主な変更点:**

*   **Edge Middleware → Vercel Routing Middleware:** キャッシュ前でFluid computeを使用して実行。
*   **Edge Functions → Vercel Functions (Edge Runtimeを使用):** キャッシュ後で実行。
*   **統合されたインフラストラクチャ:** 全ての関数（Edgeランタイムを含む）が、Fluid compute、Node.jsとEdgeランタイムのマルチランタイム対応、フレームワーク主導の自動デプロイ、Active CPU timeに基づいた統一された価格設定をサポート。
*   **Vercel Routing Middlewareの一般公開:** 全てのVercelユーザーが利用可能になりました。

これらの変更により、Vercel Functionsはパフォーマンスとコスト効率を向上させ、より柔軟な環境を提供します。
---
# AI Gateway is now in Beta - Vercel

[View on Vercel Blog](https://vercel.com/changelog/ai-gateway-is-now-in-beta)

## VercelのAI Gatewayがベータ版に

この記事は、Vercelが提供するAI Gatewayがベータ版になったことを知らせています。

**概要:**

AI Gatewayは、様々なAIモデルプロバイダー（OpenAI, xAI, Anthropic, Googleなど）へのアクセスを単一のエンドポイントで提供します。これにより、開発者は高い稼働率、高速な応答、そして特定のプロバイダーへの依存からの脱却といったメリットを享受できます。

**ベータ版で利用可能な機能:**

*   プロバイダーのリスト価格に基づく従量課金制
*   Bring-Your-Own-Key (BYOK) サポート
*   モデルごとの使用量、レイテンシ、エラーメトリクスなどの改善された可観測性
*   簡素化された認証
*   より信頼性の高い推論のためのフォールバックとプロバイダールーティング
*   高いスループットとレート制限

AI Gatewayは無料で試すことができ、詳細についてはドキュメントを参照できます。

---
# Lower pricing with Active CPU pricing for Fluid compute - Vercel

[View on Vercel Blog](https://vercel.com/changelog/lower-pricing-with-active-cpu-pricing-for-fluid-compute)

## VercelのFluid ComputeにおけるActive CPU料金体系の導入 - 要約

Vercelは、Fluid Compute上のVercel Functionsにおいて、**Active CPU料金体系**を導入しました。これにより、CPUが実際に処理を行っている時間に対してのみ課金されるようになり、アイドル時間中のコストが削減されます。これは、LLM（大規模言語モデル）の推論、長時間実行されるAIエージェント、またはアイドル時間のあるタスクなど、様々なワークロードのコスト削減に貢献します。

**Active CPU料金体系は、以下の3つの主要な指標に基づいています:**

*   **Active CPU:** コードがインスタンス内でアクティブに実行されている時間。料金は1時間あたり$0.128。
*   **Provisioned Memory:** インスタンスに割り当てられたメモリ。料金は1GBあたり1時間あたり$0.0106。
*   **Invocations:** 関数呼び出しごとに1回の課金。

**例:**

Standardマシンサイズで100% Active CPUで実行される関数は、1時間あたり約$0.149のコストがかかります (Active CPU 1時間 + プロビジョニングされたメモリ2GB)。以前の料金体系では、1時間あたり$0.31842でした (1.7GBメモリ × $0.18)。

**利用可能状況:**

Active CPU料金体系は、Hobby、Pro、および新しいEnterpriseチーム向けにデフォルトで有効になっています。既存のEnterprise顧客の場合は、現在のプラン設定によって利用可能状況が異なります。

**適用:**

この変更は、再デプロイ後に有効になります。

Active CPU料金体系を備えたFluid Computeの詳細と発表内容については、関連情報をご覧ください。

---
# Vercel Microfrontends is now in Limited Beta - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-microfrontends-is-now-in-limited-beta)

## Vercel Microfrontends リミテッドベータ版の開始

この記事は、Vercel が Enterprise チーム向けに提供を開始した「Vercel Microfrontends」のリミテッドベータ版について紹介しています。

**主な内容:**

*   **概要:** Vercel Microfrontends は、複数のフロントエンドアプリケーションを、ユーザーからは単一のアプリケーションとして見えるようにデプロイし、管理できる機能です。
*   **メリット:**
    *   **大規模アプリの高速開発:** アプリを小さな単位に分割することで、ビルド時間が短縮され、各チームが独立して開発を進められるようになります。
    *   **チームワークフローの独立性:** 各チームが独自のデプロイパイプラインとフレームワークを管理できます。
    *   **段階的な移行:** 大規模な書き換えを行うことなく、レガシーシステムを少しずつモダナイズできます。
*   **利用方法:** リミテッドベータ版への参加は、アカウント担当者またはセールスへ連絡することで可能です。

---
# Rolling Releases are now generally available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/rolling-releases-are-now-generally-available)

## Vercelのローリングリリースが一般公開

Vercelは、安全で段階的な新しいデプロイメントのロールアウトを可能にする「ローリングリリース」の一般公開を発表しました。ローリングリリースは、組み込みのモニタリング、ロールアウト制御を備え、カスタムルーティングは不要です。

**主な特徴:**

*   **段階的なロールアウト:** 各ロールアウトは、定義されたステージから開始し、自動的に進行するか、手動で完全リリースに昇格させることができます。プロジェクトごとにロールアウトステージを設定し、各ステージの進行方法を決定できます。高速なプロパゲーションパイプラインを通じて、300ミリ秒以内にグローバルに更新が伝播します。
*   **リアルタイムモニタリング:** エラー率やSpeed Insights（Core Web Vitals、Time to First Byteなど）をバージョン間で追跡し、比較できます。
*   **柔軟な制御:** REST API、CLI、プロジェクトダッシュボード、またはVercel Terraformプロバイダーを使用して、ロールアウトを管理できます。
*   **バージョンラベル付きログ:** ログとテレメトリはデプロイメント別にラベル付けされており、デバッグを容易にします。

**料金:**

ProおよびEnterpriseチームは、1つのプロジェクトでローリングリリースを追加料金なしで有効にできます。Enterpriseのお客様は、無制限のプロジェクトにアップグレードできます。

ローリングリリースの詳細については、Vercelのドキュメントを参照するか、プロジェクトで有効にしてください。

---
# Run untrusted code with Vercel Sandbox - Vercel

[View on Vercel Blog](https://vercel.com/changelog/run-untrusted-code-with-vercel-sandbox)

## Vercel Sandbox の詳細な要約

Vercel Sandbox は、Fluid コンピューティングを基盤とした安全なクラウドリソースであり、AIエージェントが生成したコードなど、信頼できないコードを実行するために設計されています。

**主な特徴:**

*   **独立したSDK**:  Vercel 以外のプラットフォームを含むあらゆる環境から実行可能な、スタンドアロンの SDK です。
*   **隔離された環境**: 一時的で隔離された microVM 環境でワークロードを実行します。
*   **実行時間**: 最大 45 分間の実行をサポートします。
*   **Fluid コンピューティング**: Active CPU 時間に基づいて課金され、CPU を積極的に使用しているときだけ料金が発生します。
*   **料金プラン**: Hobby および Pro チーム向けのアロケーションと価格設定があります。
*   **現在ベータ版**: すべてのプランの顧客が利用可能です。

**利用例（コードスニペット）:**

AI が生成した Node.js スクリプトを実行する例を示しています。スクリプトは、`ai`ライブラリの `generateText` 関数を使用して、AI に俳句を出力する Node.js スクリプトのコードを生成させ、`Sandbox` SDK を使用してそのコードを隔離された環境で実行します。

**まとめ:**

Vercel Sandbox は、AI が生成したコードなど、信頼できないコードを安全かつ効率的に実行するための新しいソリューションです。Fluid コンピューティングにより、コスト効率も高めています。

---
# Vercel Queues is now in Limited Beta - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-queues-is-now-in-limited-beta)

Vercel Queuesが限定ベータ版として公開されました。Vercel Queuesは、Vercelアプリケーション向けのメッセージキューサービスです。

このサービスは、タスクをキューに送信することで処理をバックグラウンドにオフロードし、ユーザーがリクエスト中に遅い操作の完了を待つ必要をなくします。また、リトライや失敗をより確実に処理できるようになります。

Vercel Queuesは、メッセージを保存するために追加専用ログを使用し、AIビデオ処理、メール送信、外部サービスの更新などのタスクが永続化され、失われないことを保証します。

主な機能は以下の通りです。

*   **Pub/Subパターン:** トピックベースのメッセージングにより、複数のコンシューマーグループに対応
*   **ストリーミングサポート:** ペイロードをメモリに完全にロードせずに処理
*   **合理化された認証:** OIDCトークンによる自動認証
*   **SDK:** 完全なタイプセーフを備えたTypeScript SDK

簡単なメッセージの送受信の例も示されています。

Vercel Communityに参加して、限定ベータ版への参加希望を表明できます。

---
# Higher defaults and limits for Vercel Functions running Fluid compute - Vercel

[View on Vercel Blog](https://vercel.com/changelog/higher-defaults-and-limits-for-vercel-functions-running-fluid-compute)

## Vercel FunctionsのFluidコンピュートにおけるデフォルトと上限の引き上げについて

この記事は、Vercel FunctionsのFluidコンピュートを利用する際のデフォルトの制限が引き上げられたことを発表しています。

**主な変更点:**

*   **実行時間の延長:** 全てのプランにおいて、デフォルトの実行時間が300秒に増加しました（以前はHobbyプランで60秒、ProとEnterpriseプランで90秒）。
    *   Hobbyプラン: デフォルト300秒（以前は60秒）、最大300秒（以前は60秒）
    *   Proプラン: デフォルト300秒（以前は90秒）、最大800秒
    *   Enterpriseプラン: デフォルト300秒（以前は90秒）、最大800秒
*   **メモリとCPUインスタンスサイズの更新:**
    *   Standard（デフォルト）: 1 vCPU / 2 GB（以前は1 vCPU / 1.7 GB）
    *   Performance: 2 vCPU / 4 GB（以前は1.7 vCPU / 3 GB）
*   **Basic CPUインスタンスの廃止:** HobbyプロジェクトはStandard CPUを使用するようになりました。

これらの変更は、実際のコンピューティング時間に基づいて課金されるActive CPU pricingによって可能になりました。メモリのみの使用期間は大幅に低いレートで請求されるため、より長い実行時間でもコスト効率が向上します。

もし関数の実行制限に達している場合は、ログを確認して、最大の実行時間を調整するか、プランをアップグレードする必要があります。

---
# Hibernate ORM With Panache | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920734664/0/baeldung~Hibernate-ORM-With-Panache)

## Hibernate ORM with Panache - Baeldungの要約

この記事は、Hibernate ORM の拡張機能である Quarkus の Panache ライブラリについて解説しています。Panache は、Hibernate を使用した永続化層の開発を簡素化し、Spring Data JPA に似た方法でボイラープレートコードの処理を支援します。

**主な内容:**

1.  **概要:** Hibernate は人気のある ORM フレームワークであり、Panache は Quarkus でエンティティ管理を簡素化するライブラリです。
2.  **Quarkus Panache:** Panache は、エンティティの作成、更新、削除、基本的なクエリの実行、カスタムリポジトリの定義など、データベース層を管理するための便利なメソッドを提供します。
    *   **依存関係:** Panache を使用するには、Quarkus およびデータベースドライバーの依存関係を追加する必要があります。H2 データベースの使用例が示されています。
    *   **プロパティ:** `quarkus.datasource` などのプロジェクトプロパティを設定します。
3.  **PanacheEntity でエンティティを作成:**
    *   `PanacheEntity` を継承することで、ID フィールドと基本的な CRUD メソッドを自動的に継承できます。
    *   Active Record パターンを採用し、ボイラープレートを削減します。
    *   `@Entity` アノテーションを使用してエンティティを定義します。
4.  **CRUD 操作の実行:**
    *   `persist()` で新しいエンティティを作成します。
    *   `listAll()`, `findById()`, `findByIdOptional()` でデータを読み取ります。
    *   `list()` で特定のフィールドに基づいてデータをフィルタリングします。
    *   `delete()` でレコードを削除します。
5.  **カスタムロジックに PanacheRepository を使用:** Spring Data に似て、カスタムリポジトリを使用して独自のロジックを実装できます。
    *   `PanacheRepository<Article>` を実装する `ArticleRepository` の例が示されています。
6.  **Panache エンティティのテスト:** Quarkus のサポートを活用して、`@QuarkusTest` アノテーションを使用して Panache エンティティをテストします。
7.  **ベストプラクティス:**
    *   シンプルなユースケースには Active Record パターンを使用し、複雑なシナリオには Repository パターンを使用します。
    *   `PanacheQuery<T>` を使用して、ページネーションやソートを実装します。
    *   パフォーマンス向上のために、プロジェクション付きのカスタムクエリを使用します。
8.  **結論:** Panache は Hibernate エンティティの管理を簡素化し、ボイラープレートコードを削減し、永続化層をクリーンかつ効率的に保つのに役立ちます。

記事の最後には、GitHub で完全なコードを利用できることが記載されています。

---
# ContourのTLS Session Proxyingを使ってRedisにSNIでアクセスするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/859)

## ContourのTLS Session Proxyingを用いたRedisへのSNIアクセスに関するメモ

本記事は、ContourのTLS Session Proxying機能を利用して、RedisにSNI (Server Name Indication) を用いてアクセスする方法について解説しています。ContourはHTTP/HTTPSのリバースプロキシですが、TCP Proxyingもサポートしており、RedisのようなTCPベースのサービスに対しても利用できます。

**TLS Session Proxyingの利点**

*   複数のサービスを同じEnvoyポートでSNIを利用して公開できる (追加のExternal IPは不要)
*   EnvoyでTLS終端を行うため、Redis側にTLS設定は不要
*   Upstream TLSを有効にすることで、EnvoyからRedisへの通信をTLS化することも可能、またはTLS Passthroughも可能

**手順**

1.  **Redisのデプロイ:** BitnamiのHelmチャートを使用して、永続化と認証を無効にしたRedisをKubernetesにデプロイします。
2.  **HTTPProxyの設定:** ContourのHTTPProxyを使用して、RedisのTCP Proxyingを設定します。 `fqdn` をRedisのドメイン名 (例: redis.lan.ik.am) に設定し、 `tcpproxy` セクションでRedis Serviceのポートを指定します。
3.  **DNS設定:** RedisのFQDNがEnvoyのExternal IPに解決されるようにDNSを設定します。
4.  **Redisへの接続確認:** `redis-cli` を使用してRedisに接続を試みます。SNIを指定するため、 `--sni redis.lan.ik.am` オプションを使用します。
5.  **Spring Bootアプリケーションからの接続:** Spring Bootアプリケーション (Spring Data Redisを使用) からRedisに接続を試みます。 `spring.data.redis.host` にRedisのドメイン名、 `spring.data.redis.port` に443、 `spring.data.redis.ssl.enabled` を `true` に設定します。Spring Data Redis (Lettuce) では、接続先のホスト名でSNIが自動的に設定されます。

**まとめ**

ContourのTLS Session Proxyingを利用することで、RedisのようなTCPサービスに対してもSNIによるTLS接続を実現できます。これにより、複数のサービスを同じポートで公開し、リソースを効率的に利用することが可能になります。
