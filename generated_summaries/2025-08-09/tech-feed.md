# How Zapier scales product partnerships with v0 - Vercel

[View on Vercel Blog](https://vercel.com/blog/how-zapier-scales-product-partnerships-with-v0)

## Zapierがv0 - Vercelを活用して製品パートナーシップを拡大

この記事は、ZapierがVercelのv0を使用して製品パートナーシップを拡大している事例を紹介しています。

**概要:**

Zapierは、AIを活用した自動化プラットフォームであり、約8,000のアプリ間でインテリジェントな情報を自動アクションに変換するサービスを提供しています。パートナー企業に対しては、Zapierの自動化エンジンを自社製品に組み込む「Powered by Zapier」という機能を提供していますが、以前は、パートナーに最適な組み込みエクスペリエンスを提示することが課題でした。

**課題と解決策:**

*   **課題:** パートナーに、自社製品に組み込んだ場合の具体的なUIやワークフローを提示することが難しく、プロトタイプの作成に時間がかかり、限られたリソースで対応する必要がありました。
*   **解決策:** Vercelのv0を使用することで、高忠実度のデモを数時間で生成できるようになりました。パートナーのアプリのスクリーンショットをv0に入力するだけで、UI、サインインフロー、ロジックなどを備えたインタラクティブなモックアップを迅速に作成できます。

**主な成果:**

*   **時間短縮:** プロトタイプ作成にかかる時間を12時間以上削減。
*   **デモ数の増加:** パートナーとの会話で利用するデモ数を大幅に増加（100倍）。
*   **より良いパートナーコミュニケーション:** 従来のAPIドキュメントの提示から、具体的なUIを示すプロトタイプリンクの共有に変わり、より具体的で協調的なコミュニケーションを実現。
*   **実装サイクルの加速:** パートナーは、プロトタイプを参考に自社の実装を進めることができ、導入サイクルの短縮に貢献。
*   **より多くの統合の実現:** 最終ユーザー向けの統合がさらに多く実現。

**今後の展望:**

Zapierは、v0のPlatform APIを活用して、パートナーからの問い合わせに基づいて自動的にモックアップを生成する仕組みを検討しています。最終的には、8,000社のZapier統合パートナーすべてに対して、パーソナライズされたフロントエンドモックアップを作成することを目指しています。これにより、エンジニアやデザイナーだけでなく、チーム全体でデザインの作成、修正、バージョン管理を行うことができるようになります。

---
# Improved metrics search in Observability Plus - Vercel

[View on Vercel Blog](https://vercel.com/changelog/improved-metrics-search-in-observability-plus)

Vercel Observability Plusにおけるメトリクス検索が改善され、より高速で簡単にカスタムクエリを作成できるようになりました。

主な改善点：

*   メトリクス名の一部や、"TTFB"（Time to First Byte）などの一般的な略語を入力して、素早くメトリクスを検索できるようになりました。
*   イベントに関連するすべてのメトリクスを並べて表示できます。
*   キーボードショートカットでナビゲーションが高速化されました。
*   モバイルデバイス向けに最適化されたインターフェースにアクセスできます。

これらのアップデートは、Observability Plusをご利用のすべてのチームで利用可能です。

---
# vlt is now available in builds via zero configuration - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vlt-is-now-available-in-builds-via-zero-configuration)

## Vercelでvltパッケージマネージャーがゼロ設定で利用可能に

Vercelは、ビルドでvltパッケージマネージャーをゼロ設定でサポートするようになりました。

**概要:**

*   本日より、`vlt-lock.json`ファイルを含むプロジェクトは、デフォルトのインストールコマンドとして`vlt install`を自動的に実行するようになります。
*   vltを利用するには、Node.js 20.x以降が必要です。
*   vltは、最新のビルドイメージでのみ利用可能です。

Vercelにおけるパッケージマネージャーのサポートの詳細については、関連情報をご参照ください。

---
# Bulk upgrade deprecated Node.js versions - Vercel

[View on Vercel Blog](https://vercel.com/changelog/bulk-upgrade-deprecated-node-js-versions)

## VercelにおけるNode.jsの非推奨バージョンのバルクアップグレードについて

**概要:**

Vercelは、Node.js 18以前のバージョンを使用しているすべてのプロジェクトを、VercelダッシュボードからワンクリックでNode.js 22にアップグレードできる機能を提供開始しました。この機能により、プロジェクト設定内のNode.jsバージョンが更新されます。

**注意点:**

*   **package.jsonの更新:** プロジェクトの`package.json`ファイルでNode.jsのバージョンを指定している場合は、手動で更新する必要があります。
*   **既存のデプロイメントへの影響:** アップグレードは既存のデプロイメントには影響しません。

**アクション:**

非推奨のNode.jsバージョンを使用しているプロジェクトは、今すぐアップグレードを検討できます。

---
# Parallel Flux vs Flux in Project Reactor | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922919054/0/baeldung~Parallel-Flux-vs-Flux-in-Project-Reactor)

## Project ReactorにおけるParallel Flux vs Flux の比較

この記事では、Javaで非同期かつノンブロッキングなリアクティブアプリケーションを構築する際に役立つProject ReactorライブラリのFluxとParallelFluxを比較しています。

**概要**

*   **Project Reactorの概要:** Project Reactorは、FluxとMonoという2つのリアクティブ型を提供し、非同期処理を実現します。
*   **Flux:** 0個からN個の要素のリアクティブストリームを表します。デフォルトではシングルスレッドで順次処理されますが、スレッドスケジューラを使用して並行処理することも可能です。I/Oバウンドなタスクや小規模データセットに適しています。
*   **ParallelFlux:** Fluxを拡張し、並列処理を可能にします。ストリームを複数の「レール」またはサブストリームに分割し、それぞれを別のスレッドで処理します。CPU集中型のタスクに適しています。

**FluxとParallelFluxの違い**

*   **処理方法:** Fluxはデフォルトで順次処理、ParallelFluxは並列処理。
*   **用途:** FluxはI/Oバウンドタスク、ParallelFluxはCPU集中型タスク。
*   **パフォーマンス:** CPU集中型タスクでは、ParallelFluxの方がFluxよりも高速になる傾向があります。
*   **スレッド管理:** ParallelFluxは並列処理のために追加のスレッド管理オーバーヘッドが発生する場合があります。

**Fibonacci数列計算による比較**

記事では、計算負荷の高いFibonacci数列を計算するタスクを使用して、FluxとParallelFluxのパフォーマンスを比較しています。

*   **Flux実装:** 要素をシングルスレッドで順次処理します。
*   **ParallelFlux実装:** ストリームを複数のスレッドに分割して並列処理します。
*   **結果:** JMH (Java Microbenchmark Harness) を使用したベンチマークの結果、CPUバウンドなタスクにおいてParallelFluxはFluxよりも大幅に高速であることが示されました。

**スケジューラについて**

*   **役割:** リアクティブストリームを処理するスレッドを制御します。
*   **種類:**
    *   `Schedulers.parallel()`: CPUバウンドタスク向け。利用可能なCPUコア数に等しい固定スレッドプールを使用。
    *   `Schedulers.boundedElastic()`: I/Oバウンドタスク向け。必要に応じてスレッドプールを動的に拡張。
*   **選択:** ワークロードに合わせて適切なスケジューラを選択することが重要です。

**FluxとParallelFluxの使い分け**

*   **Flux:** REST呼び出しやデータベースアクセスなどのI/Oバウンドタスク、小規模データセット、またはシーケンシャル処理で十分な場合に適しています。
*   **ParallelFlux:** CPU集中型タスク、大規模データセット、並列処理によるパフォーマンス向上が期待できる場合に適しています。

**ParallelFluxの注意点とベストプラクティス**

*   **注意点:**
    *   小さなタスクでは、スレッド管理オーバーヘッドがパフォーマンスを低下させる可能性があります。
    *   CPUコア数以上のレールを使用すると、スレッドコンテンションが発生し、パフォーマンスが低下する可能性があります。
    *   デフォルトでは順序は保証されません。
*   **ベストプラクティス:**
    *   CPUバウンドタスクには`Schedulers.parallel()`を使用します。
    *   レールの数をCPUコア数に合わせます。
    *   順序が重要な場合は、`ordered()`や事後処理を適用します。

**結論**

記事では、CPU集約的なFibonacciアルゴリズムを使用してFluxとParallelFluxを比較し、それぞれの違い、ベストプラクティス、および注意点について解説しました。

---
# KotlinX RPC 0.9.1 Is Now Available | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/08/kotlinx-rpc-0-9-1-is-now-available/)

## KotlinX RPC 0.9.1 リリース概要

JetBrainsは、KotlinのRPCライブラリであるKotlinX RPCのバージョン0.9.1をリリースしました。このリリースは、ライブラリの長期的な安定性、保守性、および進化を目的とした大幅な改善が含まれています。主な変更点は以下の通りです。

**主な変更点:**

*   **kotlinx.serializationからのデカップリング:** kotlinx-rpc-coreモジュールがkotlinx.serializationから分離されました。これにより、gRPC環境でkotlinx.serializationを使用せずにkotlinx.rpcを利用できるようになりました。データのシリアライズは、RpcClientとRpcServerインターフェースの実装者に委ねられます。
*   **簡素化されたライフタイム管理:** リソース管理が簡素化され、一般的なミスが減りました。@Rpcで生成された実装、RpcClient、およびRpcServerはCoroutineScopeを継承しなくなりました。これにより、RpcServer.registerServiceファクトリメソッドからCoroutineScopeパラメータが削除され、APIが簡素化されました。
*   **厳格モードのデフォルト有効化:** バージョン0.5.0で導入された厳格モードがデフォルトで有効になりました。APIを簡素化し、正確性を保証します。バージョン0.8.0以降では無効にすることができません。
*   **その他の改善点と修正:**
    *   null許容のコンテキストシリアライザのサポート
    *   KtorサーバーのWebSocketインストールの柔軟性の向上
    *   KtorRpcClientがKrpcClientを継承するように
    *   APIドキュメントにおけるプラットフォームステータスラベルの生成
    *   DokkaによるAPIドキュメントの生成
    *   ウェブサイトへの変更ログの追加
    *   オンボーディングガイドの追加
    *   スタンドアロンk2モジュールのコンパイル修正
    *   README.mdの更新（非サスペンドフローの使用）
    *   トランスポートコルーチンコンテキストの伝播
    *   KrpcClientが一度だけ作成されるように
    *   Grpcサンプルアップデート

**その他:**

*   コミュニティからの貢献に対する感謝
*   start.ktor.ioでのインタラクティブジェネレーターとGitHub上のサンプルへの案内
*   Slackの#kotlinx-rpcコミュニティへの参加案内
