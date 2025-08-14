# How Coxwave delivers GenAI value faster with Vercel - Vercel

[View on Vercel Blog](https://vercel.com/blog/how-coxwave-delivers-genai-value-faster-with-vercel)

## CoxwaveがVercelを活用し、GenAIの価値を迅速に提供する方法

Coxwaveは、大規模なGenAI製品を構築する企業を支援する企業です。彼らは、コンサルティング部門AXと分析プラットフォームAlignを通じて、Anthropic、Meta、Microsoft、PwCといった高度な技術を持つ企業をサポートしています。

**課題:**

*   GenAI市場の急速な変化に対応するため、迅速な価値提供が不可欠
*   従来のデプロイサイクルとインフラストラクチャでは、変化のスピードに追いつけない

**解決策:**

*   Next.jsとVercelを採用し、Webアプリケーション戦略を再構築
*   VercelのPreview Deployments、組み込みCDN、自動スケーリング機能を活用

**結果:**

*   デプロイ時間が85%短縮
*   本番環境へのデプロイ頻度が週1回から1日に2回に増加
*   実験からフィードバックまでのサイクルが劇的に短縮
*   インスタントロールバックによる本番環境の復旧時間の52%削減

**具体的な効果:**

*   AIアシスタントExploration Copilotの開発において、VercelのPreview Environmentsを活用し、本番環境のリスクなく、複数のLLMを活用したバリエーションを並行して構築・テスト
*   AI SDK（useChatフックなど）により、会話機能の実装を迅速化し、定型的な作業を削減し、ユーザーからのフィードバックを迅速に収集

**導入前後の比較:**

| 導入前                       | 導入後                                               |
| ---------------------------- | ------------------------------------------------------ |
| CloudFront + S3でのデプロイ     | Vercelによる一貫性のある開発・本番環境                 |
| 環境構築に手間がかかる        | チームによるフルデプロイライフサイクル                |
| 修正のデプロイが遅く、不安定   | 各ブランチに独自のテスト環境が提供される              |

**結論:**

VercelとNext.jsの組み合わせは、Coxwaveの開発速度向上だけでなく、顧客体験の向上、製品への信頼性の向上にも貢献しており、今後のプロジェクトでも活用される予定です。

---
# The real serverless compute to database connection problem, solved - Vercel

[View on Vercel Blog](https://vercel.com/blog/the-real-serverless-compute-to-database-connection-problem-solved)

## Vercel が提示するサーバーレスにおけるデータベース接続問題とその解決策

この記事は、サーバーレスコンピューティングとデータベース接続の関係における一般的な誤解を解き明かし、実際に存在する課題とその解決策を提示しています。

**誤解:** サーバーレスコンピューティングは、従来のデータベースへの接続数が多くなるという誤解がありますが、これは誤りです。実際の問題は、サーバーレスプラットフォームが関数を一時停止する際に接続をリークする可能性があることです。

**問題の本質:**

*   サーバーレス環境では、仮想マシンのライフサイクルが従来の環境と異なります。サーバーレス環境では、関数が一時停止され、アイドル状態の接続が残り、リークの原因となる可能性があります。
*   データベース接続は、アクティブ（クエリ実行中）とアイドル（再利用可能）の2つの状態があります。アイドル状態の接続は、通常は一定時間後にプールによって閉じられますが、関数の停止時にこのタイマーが発火せず、接続がリークされる可能性があります。

**リークの問題点:**

*   データベース接続プールでの最大接続数に制限がある場合に問題となります。接続がリークすると、利用可能な接続数が減少し、アプリケーションのパフォーマンスに悪影響を及ぼす可能性があります。
*   新しいバージョンのアプリをデプロイすると、古いサーバーレス関数がすべて停止し、接続プールがリークする可能性があり、影響が集中することがあります。

**解決策:**

*   従来のサーバーレス環境（AWS Lambdaなど）では、接続を閉じることでリークを防ぐことはできますが、リクエストごとに新しい接続を開く必要があるため、レイテンシが大幅に増加するというトレードオフがあります。
*   Vercel Fluid Computeなどのモダンなサーバーレスプラットフォームは、`waitUntil`という機能を提供し、関数がメインのリクエストが完了した後も、アイドル接続を閉じるのに十分な時間だけ存続できます。

**Fluid Computeにおける具体的な解決策:**

1.  アイドルタイムアウトよりも少し長いタイマーをスケジュールします。
2.  `waitUntil`を使用して、タイマーが発火し、クライアントが閉じられるまで関数を存続させます。
3.  他のクライアントがタイマーが発火する前にリリースされた場合は、タイマーをキャンセルし、再スケジュールします。

これにより、Fluid Computeは、従来のサーバー環境と同様に、接続を適切に閉じることができます。

**導入方法:**

Fluid Computeでは、次のコードでデータベース接続プールを簡単に管理できます。

```javascript
import { Pool } from "pg";
import { attachDatabasePool } from "@vercel/functions"

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

attachDatabasePool(pool);
```

**コストとベストプラクティス:**

*   `waitUntil`の使用によるコストは、Active CPU Pricingによりほぼゼロです。
*   **ベストプラクティス:**
    *   接続のアイドルタイムアウトを短く設定する（例：5秒）。
    *   データベース接続プールをグローバルスコープで定義する。
    *   プールの最大サイズを1に設定しない。
    *   ローリングリリースを使用する。
    *   Fluid Computeを使用している場合は、`attachDatabasePool`を使用する。

**結論:**

サーバーレスコンピューティングは、通常動作時にデータベース接続数を増加させるわけではありません。本当の問題は、関数の停止時に発生する接続リークです。Vercel Fluid Computeは、`waitUntil`機能と`attachDatabasePool`を提供することで、この問題に対する効果的かつ低コストな解決策を提供しています。

---
# The three types of AI bot traffic and how to handle them - Vercel

[View on Vercel Blog](https://vercel.com/blog/the-three-types-of-ai-bot-traffic-and-how-to-handle-them)

## AIボットトラフィックの3つの種類と、それらへの対応方法 - Vercel

この記事は、AIボットトラフィックの増加と、それに対応するための戦略について解説しています。Vercelのデータに基づき、AIボットトラフィックを3つの段階に分け、それぞれの役割と、ウェブサイトへの影響を分析しています。

**3種類のAIボットトラフィック**

1.  **AIトレーニングクローラー**: GPTBotやClaudeBotなど、ウェブ上のほぼすべての公開ページをクロールし、AIモデルの学習用データとして利用します。ドキュメント、ブログ記事、製品ページなど、幅広い情報を収集します。この段階でコンテンツがインデックス化されないと、AIの回答に引用される可能性が低くなります。
2.  **AIエンジングラウンディングボット**: ユーザーの質問に対して、トレーニングデータと最新の情報を組み合わせて回答を生成するために使用されます。例えば、「Next.js 15の最新情報は？」といった質問に対し、ウェブサイトの情報を参照します。この段階でコンテンツが引用されることで、AIが関連するツールをユーザーに推薦する可能性が高まります。
3.  **AIリファラル**: AIが生成した回答から、ユーザーがウェブサイトに直接アクセスするトラフィックです。高度にターゲットされたプロンプトからの引用を通じて訪問するため、高いコンバージョン率が期待できます。

**AIボットのブロックが裏目に出る理由**

AIボットをブロックすることは、かつてGoogleのクローラーをブロックしたサイトが検索トラフィックを逃したのと同様に、新しい発見チャネルを遮断することにつながります。AIはすでに数十億のクエリを処理しており、ユーザーは従来の検索と並行してAIプラットフォームを通じてコンテンツを発見しています。

**AIボットの活用と対策**

*   **AIボットを許可するページ**: ドキュメント、ブログ記事、ランディングページ、製品ページ、料金ページなど、発見につながるコンテンツはクロールを許可することで、引用や推薦の恩恵を受けられます。
*   **AIボットをブロックするページ**: ログイン、チェックアウト、管理ページ、ユーザーダッシュボードなど、機密性の高いページはブロックできます。
*   **コンテンツの性質による対応**: ニュースサイトや教育プラットフォームのように、コンテンツがビジネスモデルの核心である場合は、AIアクセスを制限することも考えられます。

**結論**

AIボットは、ウェブサイトにとって新たなトラフィック源、引用、ブランド認知をもたらす可能性があります。Vercel Firewall、Bot Protection、BotIDなどのツールを活用し、機密ページを保護しながら、価値のあるコンテンツへのアクセスを許可することで、AI主導の発見を活用し、ウェブサイトの成長を促進できます。

---
# Introducing the Runtime Cache API - Vercel

[View on Vercel Blog](https://vercel.com/changelog/introducing-the-runtime-cache-api)

## Vercel の Runtime Cache API の紹介：詳細な要約

この記事は、Vercel が提供する新しい Runtime Cache API の紹介です。この API を利用することで、Functions、Routing Middleware、および Builds 内でデータを一時的に保存し、取得できるようになります。

**主なポイント:**

*   **概要:** Runtime Cache は、同じリージョン内の Functions、Routing Middleware、Builds でデータを効率的に保存・取得するためのエフェメラル（一時的）なキャッシュです。
*   **特徴:** タグベースの無効化をサポートし、精密かつ効率的なキャッシュ制御を実現します。
*   **利用方法:** `@vercel/functions` から `getCache` 関数をインポートすることで、API を利用できます。例として、指定されたキー（例: 'blog'）に対するキャッシュの取得と設定、TTL（有効期限）の設定、タグ付けの方法が示されています。
*   **監視:** Observability ダッシュボードの Runtime Cache タブで、ヒット率、無効化パターン、ストレージ使用量などを監視できます。
*   **料金:** Runtime Cache の読み書きは、ランタイムリージョンに基づいて課金されます。Next.js 13 で `unstable_cache()` や `fetch()` のキャッシュに使用される Vercel Data Cache は現在ベータ版で、課金は発生しません。
*   **Data Cache の監視:** Runtime Cache タブのトグルを使用して、Vercel Data Cache の使用状況も確認できます。

**つまり、この API を利用することで、Vercel 上で動くアプリケーションのパフォーマンス向上、リソース効率の最適化、データの一貫性の維持に役立ちます。**

---
# Kodee’s Kotlin Roundup: 2.2.20-Beta2, Kotlin LSP Update, Shipaton 2025, and a New Face on the Foundation Board | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/08/kodee-kotlin-roundup-july-25-edition/)

## KodeeのKotlin Roundup: 2.2.20-Beta2、Kotlin LSPアップデート、Shipaton 2025、Kotlin Foundationボードの新メンバー

本記事は、Kotlinブログに掲載された最新情報をまとめたものです。Kotlinの開発状況、コミュニティの動向、そしてイベント情報などがKodeeによって紹介されています。

**主なニュース:**

*   **Kotlin 2.2.20-Beta2:** Swiftエクスポートのデフォルト有効化、Web開発の新しいターゲット、Kotlin/Nativeの改善など、Kotlin Multiplatformの機能強化が行われています。
*   **人気プログラミング言語ランキング:** Stack Overflow Developer Survey 2025によると、Kotlinは15位にランクインしました。
*   **Kotlin Language Server Protocol (LSP) アップデート:** コア機能が大幅に洗練され、今後の進化が期待されています。
*   **Shipaton 2025:** Kotlin Multiplatformアプリの開発を支援する2ヶ月間のイベントが開催されます。Compose Multiplatform for iOSの安定版リリースを機に、Kotlin開発者は参加を検討できます。賞金総額55,000米ドルに加え、Kotlin Multiplatform Reach Awardも用意されています。
*   **Kotlin Foundationボードの新メンバー:** Meta社のSenior Staff Software EngineerであるSergei Rybalkin氏が新たにボードメンバーに加わりました。
*   **IntelliJ IDEA 2025.2:** 新しいSpringデバッガー、Spring Modulithのサポート、Kotlinのコア機能の継続的な提供など、IDEの最新情報が紹介されています。
*   **Kotlin 2.2のコンテキスト依存解決:** より簡潔なコード記述を可能にする実験的な機能が紹介されています。
*   **KotlinX RPC 0.9.1:** 長期的な安定性と進化を目的とした、KotlinX RPCの最新リリース。KotlinX Serializationからの分離、APIとライフタイム管理の改善、Strictモードのデフォルト設定などが含まれています。
*   **Koog 0.3.0:** KotlinベースのAIエージェント構築フレームワークKoogの最新バージョン。耐久性、実行速度、可観測性、そして実システムとの統合が向上しています。Koogを使用して、AIエージェントの問題解決に取り組んだ事例も紹介されています。
*   **その他の記事と動画:** Kakao PayのKotlinとSpring採用事例、モジュール化されたKtor、Kotlinコンパイラーのファジング、Ktor 3.2.2のリリース、Kotlin NotebookとIntelliJプラットフォームの連携に関する情報など、様々な情報が紹介されています。Kotlin YouTubeチャンネルで人気の動画も紹介されています。