# External API caching insights now in Observability - Vercel

[View on Vercel Blog](https://vercel.com/changelog/external-api-caching-insights-now-in-observability)

## Vercel の Observability に外部 API のキャッシュ情報が追加

この記事は、Vercel の Observability ダッシュボードに、外部 API 呼び出しのキャッシュ動作に関する新しい洞察が追加されたことを伝えています。

具体的には、以下の機能が追加されました。

*   **キャッシュ利用状況の可視化:** Observability ダッシュボードの外部 API ページで、キャッシュから提供されたリクエスト数とオリジンから提供されたリクエスト数を比較できる新しい列が表示されます。
*   **アクセス権:** キャッシュに関する洞察は、すべてのユーザーがホスト名単位で、Observability Plus の加入者はパス単位で利用できます。
*   **関連情報へのリンク:** 外部 API ダッシュボードへのリンクと、Vercel Data Cache についての詳しい情報へのリンクが提供されています。

---
# Java Weekly, Issue 595 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918773114/0/baeldung)

## Java Weekly, Issue 595 | Baeldung 要約

この Java Weekly (Issue 595) は、2025年5月9日に更新され、Java開発に関連する最新のニュースや情報をまとめたものです。主な内容は以下の通りです。

**1. SpringとJava関連:**

*   **Hibernate 7 (and Hibernate Validator 9):** Hibernate ORM 7.0.0.Final がリリースされ、Jakarta Data 1.0 仕様の完全実装など、多くの新機能が追加されました。
*   **Spring AI 1.0:** LLM (大規模言語モデル) などの AI 機能を Spring アプリケーションに統合するための Spring AI 1.0.0 がリリースされました。
*   **その他:** Testcontainers と Spring Boot の組み合わせ、JDK 25 への JEP (Java Enhancement Proposal) の提案、JDK の JSON API の開発に関する情報、Deep Netts と Java AI を使用した研究事例、高速インメモリデータベースアプリケーションに関するプレゼンテーション、Spring AI と OAuth2 を使用した MCP 認証、Spring Kafka と MongoDB を使用したリアルタイム AI 詐欺検知システムの構築に関する情報など。
*   **Webinar とプレゼンテーション:**  モダンJava開発、Java 24、JVM メモリトラブルシューティング、AI Reliability Engineering (AIRE)、Java のガベージコレクションのパフォーマンス向上、Eclipse Collections、This Week in Spring (AI) などに関するウェビナーとプレゼンテーションが紹介されています。
*   **アップグレード情報:** Spring Security 6.5.0、Spring AI 1.0、Spring Vault 3.2.0、Spring Data 2024.1.6 および 2024.0.12、Spring Web Services 4.0.14/4.1.0、Spring Framework 6.1.20 および 6.2.7 (CVE-2025-22233 の修正)、Spring for GraphQL 1.4.0、Hibernate Validator 9.0.0.Final、Quarkus 3.22.3、Spring for Apache Pulsar 1.1.12 および 1.2.6 のリリース情報。

**2. 技術と考察:**

*   **AI を活用したソフトウェア開発における技術的考察:** AI をソフトウェア開発プロセスに統合する方法、最適なユースケース、課題への対応について概説。
*   **その他:** MySQL クエリ最適化、LLM を使用したカスタムツール構築、2000 以上のマイクロサービスに対する自動コード移行、アジャイル脅威モデリングに関する記事紹介。

**3. Pick of the Week:** Springコース以外のロードマップ紹介。

---
# KotlinConf 2025 Unpacked: Upcoming Language Features, AI-Powered Development, and Kotlin Multiplatform Upgrades | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/05/kotlinconf-2025-language-features-ai-powered-development-and-kotlin-multiplatform/)

## KotlinConf 2025: 主要発表の日本語要約

KotlinConf 2025では、世界中で250万人の開発者に利用されているKotlinの進化と、今後の展望が発表されました。

**1. 言語の進化とK2コンパイラ**

*   **Kotlin 2.2:**
    *   `when-with-subject`におけるガード条件
    *   マルチドル補間
    *   非ローカルブレークとコンティニュー
    *   ベータ版のコンテキストパラメータ
*   **K2コンパイラ:**
    *   IntelliJ IDEA 2025.1でデフォルトに
    *   コンパイル時間の短縮（IntelliJモノレポで40%以上短縮）
    *   新しい言語機能の安定したロールアウトを可能に
*   **今後の言語機能:**
    *   位置ベースのデストラクチャリング
    *   名前ベースのデストラクチャリング
    *   null可能性の強化
    *   リッチエラー
    *   `Must-use return values`
    *   `CheckReturnValue`
*   **コンパイラプラグインAPI:** 安定したAPI設計により、カスタムチェックやコード生成が容易に

**2. 開発ツールとエコシステム**

*   **Amper:**
    *   実験的なKotlinおよびJVMビルドツール
    *   マルチプラットフォーム、バックエンド、コマンドラインツールに対応
*   **Kotlin Foundation:**
    *   Block, Inc.とMetaが新たに加入
    *   2024年のKotlin Foundation Grants Program受賞者発表
    *   Grants Programの再開

**3. AIとの連携**

*   **Koog:** KotlinでAIエージェントを構築するためのフレームワーク（オープンソース）
*   **JetBrains AI:**
    *   IDEへの深い統合（コードベースに関するチャット、プロジェクト固有の質問への回答、コンテキストに応じた回答）
    *   Mellum: Kotlinに特化したLLMによるコード補完（オープンソース）
    *   Junie: Kotlinアプリケーション全体で複雑なタスクを実行できるAIコーディングエージェント（EAPをGitHubで公開予定）

**4. Kotlin Multiplatform (KMP)**

*   **主要なアップデート:**
    *   IntelliJ IDEAおよびAndroid Studio向けの新しいKMPプラグイン
    *   Swift Exportの最初の実験的リリース（Kotlin 2.2.20）
    *   Compose Multiplatform for iOSがStableに
    *   Compose Hot Reloadの導入
*   **Compose Multiplatform for iOS:**
    *   Stable版としてリリース
    *   ネイティブのようなスクロール、テキスト選択、ドラッグアンドドロップ、可変フォントサポート、ジェスチャを提供
    *   Compose Hot Reloadにより、UIの変更を即座に確認可能
*   **Kotlin/WasmとCompose for Web:**
    *   パフォーマンス改善とAPIの実装が進んでおり、両方とも年内にBeta版を予定

**5. サーバサイドKotlin**

*   **採用の増加:** 半数のKotlin開発者がバックエンドで使用
*   **Springとの戦略的パートナーシップ:**
    *   KotlinとSpringアプリケーションの完全なnull安全性
    *   Kotlinの公式学習資料
    *   `kotlinx.reflect`による高速なKotlinリフレクション

**6. その他のアップデート**

*   **Ktor 3:** 最大3倍のI/Oパフォーマンス向上、設定サポートの強化、Server-Sent Events、WebAssemblyサポートなどの新機能
*   **Exposed:** ライブラリのコアが再構築され、SQLコンセプトのサポート、ドキュメント、オンボーディングが改善。IDEサポートの強化
*   **Official Kotlin LSP:**
    *   公式のKotlin Language Server Protocol (LSP)開発開始
    *   Visual Studio Code向けの新しいKotlin拡張機能
    *   コード補完、ナビゲーション、インスペクション、クイックフィックス、Java相互運用性、プロジェクトインポートの基本的なサポート
    *   年内にAlphaリリース予定

**7. まとめ**

Kotlinコミュニティへの感謝と、今後のKotlinの革新的で野心的な未来を共に築くことへの期待が述べられています。

---
# Strengthening Kotlin for Backend Development: A Strategic Partnership With Spring | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/05/strategic-partnership-with-spring/)

## Kotlinによるバックエンド開発の強化：Springとの戦略的パートナーシップ

このブログ記事は、JetBrainsがKotlinを最新のバックエンド開発における強力な基盤として捉え、Springチームとの戦略的パートナーシップを強化することを発表しています。このパートナーシップは、KotlinをSpringアプリケーション開発におけるより自然で強力な選択肢にするためのものです。

**主なパートナーシップの内容：**

*   **KotlinとSpringアプリにおける完全なNull安全性:** Springチームは、フレームワーク全体のNull安全性を向上させることで、Kotlinの型安全性を強化します。
*   **Kotlinによる公式学習資料:** Springのコア学習リソースがKotlinで利用可能になり、開発者がKotlinの慣用的なプラクティスを最初から簡単に学べるようになります。
*   **kotlinx.reflectによる高速なKotlinリフレクション:** JetBrainsは、依存性注入やシリアライゼーションなど、リフレクションを多用するシナリオでのパフォーマンスを向上させるために、新しい高速バージョンのリフレクションライブラリ(kotlinx.reflect)を開発しています。
*   **進化する設定DSL:** 新しいBean Registration DSLは、ラムダおよびDSLベースのBean定義をより良くサポートするための基盤を提供します。

**KotlinとSpringの組み合わせの利点：**

*   **簡潔で保守性の高いコード:** Kotlinは一般的なバックエンド操作を簡素化し、コードをより簡潔で保守しやすくします。
*   **DSLと拡張関数:** Kotlinは、DTO、ドメインモデル、マッピングの明確でコンパクトな定義を可能にし、ビルダーパターンやオーバーロード関連のボイラープレートの必要性をなくします。また、拡張関数やトップレベル関数を通じてモジュール設計を促進します。
*   **Kotlin-first機能:** Springは、Coroutinesによるリアクティブアプリケーションの構築、Kotlin拡張機能、設定DSLなどのKotlin-first機能を長年サポートしています。
*   **シームレスな統合:** Javaとの完全な相互運用性により、既存のJavaおよびSpringコードベースにKotlinを徐々に導入できます。

**Kotlinの採用事例：**

Expedia、Atlassian (Jira Software)、Mercedes-Benz.ioなど、多くの企業がKotlinとSpringの組み合わせを活用して、開発速度の向上と保守性の向上を実現しています。Spring開発者の27%がKotlinを使用しており、Springの創設者であるRod Johnson氏もKotlinConf 2025でその使用を公言しています。

**今後の展望：**

JetBrainsとSpringチームの共同努力により、Kotlinの使用者はさらに増加すると予想されています。KotlinとSpringは連携することでより強力になり、バックエンド開発の生産性、楽しさ、Kotlinの活用を促進するでしょう。

---
# Meet Koog: Empowering Kotlin Developers to Build AI Agents | The JetBrains Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/ai/2025/05/meet-koog-empowering-kotlin-developers-to-build-ai-agents/)

## Koog: Kotlin開発者がAIエージェントを構築するためのフレームワークが登場

JetBrainsは、Kotlinコミュニティ向けに、AIエージェントを構築するための革新的なオープンソースフレームワーク「Koog」を発表しました。これは、Kotlin DSL (Domain-Specific Language) を使用してJVMエコシステム内でAIエージェントを構築できるものです。

**Koogの開発背景と目的:**

*   従来のチャットアシスタントの進化に着目し、単なる会話を超えた、自律的な行動（タスク処理、意思決定、フィードバックへの対応など）が可能なAIエージェントの可能性に着目。
*   Kotlin開発者が、Kotlinの持つ生産性と柔軟性を活かしてAIエージェントを開発できる環境を提供したいという思いから開発。
*   Kotlinネイティブで包括的なエージェントフレームワークが不足していたため、JetBrainsの社内でのエージェント開発経験を基に、直感的で、構成可能で、強力なフレームワークを構築。

**Koogの主な機能:**

*   純粋なKotlin実装：外部サービスに依存せず、KotlinだけでAIエージェントを構築・実行可能。
*   モジュール式機能システム：コンポーザブルな機能システムを通じてエージェントの機能を拡張。
*   ツール統合：カスタムツールを作成し、エージェントに外部システムやリソースへのアクセスを提供。
*   すぐに使えるソリューション：ストリーミング、構造化出力生成、特定の出力の強制、履歴圧縮戦略など、一般的なユースケースに対応。
*   カスタマイズ可能なワークフロー：カスタムツールを使用して、エージェントに外部システムやリソースへのアクセスを提供。
*   追跡と監視：LLM呼び出し、ツール、エージェントのステージなどを設定可能なトレースを提供。

**Koogの利点:**

*   Kotlin開発者は、Kotlinの慣れ親しんだ環境でAIエージェントを開発できる。
*   様々なAI関連の課題に対するすぐに使えるソリューションが提供される。
*   柔軟性と拡張性が高く、様々なユースケースに対応可能。

**その他:**

*   Koogはオープンソースであり、GitHubで公開されています。
*   JetBrainsは、Koogを試してコミュニティに参加することを推奨しています。
*   JetBrainsは、AIアシスタント関連の他のアップデート（Visual Studio CodeへのAI Assistant統合、Google Gemini 2.5 Proのサポート、新しいOpenAIモデルの追加など）も発表しています。

---
#  Shipping code faster with o3, o4-mini, and GPT-4.1 | OpenAI

[View on OpenAI News](https://openai.com/index/coderabbit)

## コードレビューを高速化: CodeRabbitがOpenAIのモデルを活用

この論文は、AIを活用したコードレビューツール「CodeRabbit」が、OpenAIのo3、o4-mini、GPT-4.1などのモデルを活用して、開発サイクルを加速させ、バグを減らすことに成功した事例を紹介しています。

**主なポイント:**

*   **課題:** コード生成が進化する一方で、手作業によるコードレビューがボトルネックとなり、開発速度を阻害。
*   **解決策:** CodeRabbitは、OpenAIのLLM(大規模言語モデル)を活用して、コードレビューを自動化。
    *   プルリクエスト提出時に、リポジトリをサンドボックス環境でクローンし、コード履歴、リンター、コードグラフ分析、課題チケット、開発者の会話などからコンテキストを付加。
    *   o4-miniとo3を使用して、複数行にわたるバグやリファクタリング、アーキテクチャの問題を特定。
    *   GPT-4.1の1Mトークンのコンテキストウィンドウを活用し、レビューの要約、docstringの生成、品質保証チェックを実施。
    *   顧客のコードレビュー要件、セキュリティ体制、ベストプラクティスを組み込んだカスタムLLMプロンプトを使用。
*   **成果:**
    *   レビューの正確性が50%向上
    *   プルリクエストのマージ速度が向上
    *   顧客満足度の向上
    *   開発速度が最大4倍に向上
    *   本番環境のバグが50%減少
    *   ROIが20～60倍
*   **今後の展望:** o3-miniに関するさらなるカスタマイズ、強化学習の導入、IDEサポートの拡大を計画。

**背景:**

CodeRabbitは、手作業によるコードレビューの遅さに課題を感じていたエンジニアリングリーダーによって2023年に設立されました。AIによるコードレビューは、複雑なコードベースや分散チーム、見つけにくいエッジケースの問題を解決し、開発者の貴重な時間を有効活用し、本番環境へのバグ混入を防ぐことを目指しています。

**結論:**

CodeRabbitは、OpenAIのモデルを活用することで、コードレビューの効率化を実現し、開発サイクルを加速させ、より高品質なソフトウェア開発を可能にしています。
