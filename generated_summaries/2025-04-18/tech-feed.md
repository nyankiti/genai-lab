# Protection against React Router vulnerability CVE-2025-31137 - Vercel

[View on Vercel Blog](https://vercel.com/changelog/protection-against-react-router-vulnerability-cve-2025-31137)

## React Routerの脆弱性CVE-2025-31137に対するVercelの対応についての要約

この記事は、Remixウェブフレームワークのセキュリティ研究者によって発見されたReact Routerの深刻な脆弱性CVE-2025-31137について報告しています。この脆弱性は、Host/X-Forwarded-Hostヘッダーを介したURL操作を可能にするものです。

**Vercelの対応:**

*   Vercelは、自社および顧客がこの脆弱性の影響を受けていないことを確認しています。
*   Vercelは、キャッシュキーの一部としてクエリパラメータを使用しており、`_data`クエリパラメータによるキャッシュポイズニングから保護されています。
*   Vercelの`@vercel/remix`アダプターは、Expressアダプターと同様にX-Forwarded-Hostを使用していますが、エンドユーザーがVercelでホストされているFunctionにX-Forwarded-Hostを送信することはできません。

**推奨事項:**

*   Remix 2.16.3 / React Router 7.4.1でパッチがリリースされています。
*   顧客は最新バージョンにアップデートすることが推奨されています。

**まとめ:**

Vercelは、React Routerの脆弱性CVE-2025-31137の影響を受けないことを確認し、顧客に対して最新バージョンへのアップデートを推奨しています。

---
# Lower pricing for Fast Data Transfer - Vercel

[View on Vercel Blog](https://vercel.com/changelog/lower-pricing-for-fast-data-transfer)

## Vercel、高速データ転送（FDT）の料金を値下げ

Vercelは、アジア太平洋、ラテンアメリカ、アフリカ地域の高速データ転送（FDT）の料金を最大50%値下げすることを発表しました。

**値下げの詳細:**

*   **対象:** ProおよびEnterpriseプランの全ユーザー
*   **適用開始:**
    *   **新規Pro/Enterpriseユーザー:** 即時適用
    *   **既存Proユーザー:** 本日から適用
    *   **既存Enterpriseユーザー:** 次の請求サイクルから適用（通常は毎月）

**値下げ後の地域別料金:**

| Vercel地域                     | 旧価格（1GBあたり） | 新価格（1GBあたり） |
| :----------------------------- | :------------------ | :------------------ |
| ケープタウン (cpt1)           | $0.39               | $0.28               |
| 香港 (hkg1)                  | $0.30               | $0.16               |
| ムンバイ (bom1)                | $0.33               | $0.20               |
| 大阪 (kix1)                  | $0.31               | $0.16               |
| サンパウロ (gru1)              | $0.44               | $0.22               |
| ソウル (icn1)                  | $0.47               | $0.35               |
| シンガポール (sin1)              | $0.30               | $0.16               |
| シドニー (syd1)                | $0.32               | $0.16               |
| 東京 (hnd1)                  | $0.31               | $0.16               |

詳細については、[Fast Data Transferの詳細](https://vercel.com/docs/concepts/edge-network/fast-data-transfer) を参照するか、[利用状況ページ](https://vercel.com/dashboard/projects/your-project-name/usage)でFDTの使用状況を確認してください。

---
# Enhanced Builds now have double the compute - Vercel

[View on Vercel Blog](https://vercel.com/changelog/enhanced-builds-now-have-double-the-compute)

## Vercel「Enhanced Builds」がコンピュート能力を2倍に増強

Vercelは、エンタープライズ顧客向けに提供している「Enhanced Builds」のコンピュート能力を2倍に強化しました。これにより、大規模なコードベースやCPU負荷の高いビルドのパフォーマンスがさらに向上します。

Enhanced Buildsは、monoreposや、依存関係の解決、トランスパイル、静的生成など、タスクを並列実行するフレームワークを使用するチーム向けに設計されています。

既にEnhanced Buildsを利用している顧客は、特別な操作なしで、最大25%のビルド時間の短縮を実感しています。

この変更により、利用可能なすべてのコアに作業を効率的に分散させることで、Turbopackビルドも大幅に高速化されます。Vercelの内部テストでは、コア数の増加に伴い、ほぼ線形的なパフォーマンス向上が確認されています。

Enhanced Buildsの詳細は、Vercelのドキュメントを参照するか、Vercelアカウントチームにお問い合わせください。

---
# Java Weekly, Issue 590 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916847789/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 590 の詳細な要約

**発行日:** 2025年4月17日

**内容:**

Java Weekly Issue 590 では、Javaエコシステムに関する様々な最新情報がまとめられています。内容は以下の通りです。

**1. SpringとJavaに関する記事:**

*   **Markdown in Java Docs (blog.jetbrains.com):** Markdownを使用してJavadocを生成する方法の詳細な解説と、IntelliJのReader Modeによるドキュメントレンダリングサポートについて紹介しています。
*   **Prompt Engineering Techniques with Spring AI (spring.io):** Spring AI を使用した、ゼロショットプロンプティング、役割プロンプティング、連想思考など、複数のプロンプトエンジニアリング技術に関するガイドです。
*   **その他:**
    *   Enhanced Concurrency for Your Jakarta EE Applications (blog.payara.fish)
    *   Optimizing Java for the Cloud-Native Era with Quarkus (quarkus.io)
    *   Introducing Docker Model Runner: A Better Way to Build and Run GenAI Models Locally (docker.com)
    *   A Guide to Creating JavaFX Native Images (foojay.io)

**ウェビナーとプレゼンテーション:**

*   Foojay Podcast #69: All Things Java at VoxxedDays Amsterdam (foojay.io)
*   Sequenced Collections – Deep Dive with the Expert (inside.java)
*   JavaOne’25 Highlights – Inside Java Newscast #89 (inside.java)
*   A Bootiful Podcast: Wiremock’s leaders Lee Turner and Tom Akehurst (spring.io)

**アップグレード推奨情報:**

*   Spring AI with Docker Model Runner (spring.io)
*   Hibernate Reactive 3.0.0.Beta3 and 2.4.6.Final released (in.relation.to)
*   GraalVM for JDK 24 Community 24.0.1 (github.com/graalvm)
*   Quarkus 3.21.2 (github.com/quarkusio)
*   Elasticsearch 8.18.0 (github.com/elastic)
*   Micronaut Core 4.8.10 (github.com/micronaut-projects)
*   WildFly 36 is released! (wildfly.org)

**2. 技術と考察に関する記事:**

*   **From APIs to Capabilities to Support AI Agents (christianposta.com):** エンタープライズアーキテクチャがAPI中心のアプローチから、機能とAIエージェントに移行する傾向について解説しています。
*   **その他:**
    *   QCon London 2025 Day 1: Parsing Data from Space, Developer Joy, Local First Apps, Platforms (infoq.com)
    *   How Senior Software Engineers Can Learn from Junior Engineers (infoq.com)
    *   Time to panic? AI and Cybercrime legislation is on your doorstep now (foojay.io)
    *   Alexa+ gets us a step closer to ambient interfaces (allthingsdistributed.com)
    *   New Docker Extension for Visual Studio Code (docker.com)

**3. 今週のおすすめ:**

*   **As an engineer, I’d rather be called stupid than stay silent (shiftmag.dev):** エンジニアとして、無知と思われるよりも沈黙を守ることを避けるという内容の記事。

---
# Smarter Kotlin Development With JetBrains AI: Junie and AI Assistant in IntelliJ IDEA | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/04/smarter-kotlin-development-with-jetbrains-ai-junie-and-ai-assistant-in-your-ide/)

## JetBrains AIによるKotlin開発の進化：JunieとIntelliJ IDEAのAIアシスタント

この記事では、JetBrainsが提供するAIツール「Junie」と「AIアシスタント」が、Kotlin開発者向けにどのように役立つかを解説しています。

**Junie：Kotlinを話すコーディングエージェント**

*   Junieは、新規プロジェクトの開始、既存プロジェクトへのモジュールや機能の追加、反復的なタスクの実行など、様々なKotlin開発タスクを支援します。
*   自然言語で実現したい内容を記述すると、Junieはコードを生成し、反復処理を行い、フォローアップを行います。
*   プロジェクト固有のルールを`.junie/guidelines.md`ファイルで定義することで、Junieの動作をカスタマイズできます。
*   主な用途：
    *   新規プロジェクトの開始
    *   プロトタイピング
    *   仕様に基づくモジュールの実装
    *   エンドツーエンドの機能開発
    *   サードパーティサービスの統合
    *   仕様からの基本的なUIの生成

**AIアシスタント：日々の開発を支援するスマートツール**

*   AIアシスタントは、コードの記述、テストの生成、エラーの説明、バージョン管理タスクの管理など、開発ワークフロー全体でコンテキストに応じたインテリジェンスを提供します。
*   Kotlinのサポートに重点を置いて設計されており、JetBrains独自のLLM「Mellum」によってコード補完の提案が行われます。
*   主な用途：
    *   JavaコードからKotlinへの変換
    *   Gradleビルドファイルの変更
    *   不足している関数やクラスの補完
    *   マルチプラットフォームボイラープレートの作成

**KotlinとAIの相性の良さ**

*   Kotlinは、構造と明瞭さを備えた言語であり、AIツールとの相性が良いです。
*   理由：
    *   より信頼性の高い結果が得られる（Kotlinコードの品質が高い）
    *   よりクリーンな入力（Kotlinのコンパクトな構文）
    *   より良いコンテキスト（静的型付けと明確な構造）
    *   積極的なサポート（JetBrainsのAIテストスイートで検証）

**利用方法**

*   JunieとAIアシスタントは、IntelliJ IDEA Ultimateおよびその他のJetBrains IDEで利用可能です。
*   JetBrains AIプラグインを有効にし、ツールウィンドウを開いて使用を開始できます。
*   JetBrains AIアシスタントはAndroid Studioでもサポートされていますが、Junieはまだ利用できません（今後のサポート拡大を検討中）。
*   利用には、JetBrains IDEの有効なサブスクリプションが必要です。
*   サブスクリプションのティアに応じて、月間のクラウドクレジットが提供されます。
*   無料、Pro、Ultimateの3つのティアが利用可能で、新規ユーザーは30日間のAI Proトライアルを利用できます。

**その他**

記事では、Kotlinに関する他の記事やイベント情報も紹介されています。

---
# 2025-04-17のJS: Zod 4 beta、Next.js 15.3とRspack、LLMを使ったテストのマイグレーション - JSer.info

[View on jser.info](https://jser.info/2025/04/17/zod-4-beta-next.js-15.3rspack-llm/)

## JSer.info #732の要約

JSer.info #732では、以下のトピックが取り上げられています。

**Zod 4 betaのリリース:**
*   Zod 4のベータ版がリリースされ、パフォーマンスとバンドルサイズの改善、Tree Shaking可能なAPIの提供（@zod/mini, @zod/core）、再帰可能なオブジェクト定義API（z.interface()）、メタデータ管理API（z.registry()）、JSONスキーマ変換API（toJSONSchema()）などが追加されました。

**Next.js 15.3のリリース:**
*   Next.js 15.3がリリースされ、Rspackのビルドツールとしてのサポート、Turbopackをnext buildでも利用可能に、クライアントサイド計測のinstrumentation-client.{js,ts}のサポート、Navigation Hooksのサポート、useLinkStatusの追加、TypeScript LSPのパフォーマンス改善などが行われました。実験的な機能として、<Link unstable_dynamicOnHovertrue>のサポートも含まれています。

**LLMを活用したテストマイグレーションの事例:**
*   Airbnbが、EnzymeからReact Testing Libraryへの大規模なテスト移行をLLMを活用して行いました。移行プロセスをステップ化し、再試行ループや関連テスト/移行ガイドラインをコンテキストとして追加することで、75%のテストを自動移行。さらに、失敗ファイルにステップごとのコメントを付与し、学習させることで、最終的に97%の自動移行を実現しました。

**その他:**
*   Bun v1.2.9のリリース、StyleX v0.12.0のリリース、SpiderMonkeyによるECMAScript Proposal Stage 3のTemporal実装のFirefox 139への対応、Astro 5.7のリリースなど、様々なライブラリやツールのリリース情報が紹介されました。
*   Cloudflare WorkersでのNext.jsの利用、WebAssemblyの解説、Reactパフォーマンス改善事例集、HTMLのh1要素のデフォルトスタイルの変更、Node.jsテストのベストプラクティスドキュメント、ZigとV8で書かれたヘッドレスブラウザ、LLRTをRuntimeとして利用したシングル実行可能バイナリ作成ツール、型システムに関する書籍の紹介など、様々なトピックが取り上げられました。
