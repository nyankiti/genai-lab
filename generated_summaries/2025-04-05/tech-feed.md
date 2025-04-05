# Run and share custom queries in Observability Plus - Vercel

[View on Vercel Blog](https://vercel.com/changelog/run-and-share-custom-queries-in-observability-plus)

## VercelのObservability Plusでカスタムクエリの作成と共有が可能に

VercelのObservability Plusの利用者は、Observabilityダッシュボードから直接カスタムクエリを作成し、共有できるようになりました。これにより、コードを書くことなく、特定のメトリクス、ルート、アプリケーションの動作をより簡単に調査できるようになります。

**主な機能:**

*   特定のページとメトリクスに焦点を当てるためのルートによるフィルタリング
*   オートコンプリート機能を備えた高度なフィルタリング（クエリ言語は不要）
*   ルートとプロジェクトのコンテキスト内でのチャート分析
*   URLまたはコピーボタンによるクエリの即時共有

この新しいクエリ機能は、モニタリングダッシュボードを基盤としており、データの詳細な調査を行う際にコンテキストを維持するのに役立ちます。

**利用方法:**

Observabilityダッシュボードを開き、任意のチャートの「Explore query」矢印、または省略記号メニューからクエリビルダーを選択します。

詳細については、Observabilityでのクエリ実行と利用可能なメトリクスに関する情報を参照してください。

---
# How PAIGE grew revenue by 22% with Shopify, Next.js, and Vercel - Vercel

[View on Vercel Blog](https://vercel.com/blog/how-paige-grew-revenue-by-22-with-shopify-next-js-and-vercel)

## PAIGEがShopify、Next.js、Vercelを活用して売上を22%増加させた事例

大手デニム・アパレル小売のPAIGEは、従来のECアーキテクチャの複雑さによる技術的な問題を抱えていました。より高速で信頼性の高いオンライン体験を求めて、Shopify、Next.js、Vercelを活用したシンプルなヘッドレス技術スタックを導入。その結果、ブラックフライデー期間の売上が22%増加し、コンバージョン率が76%向上しました。

**課題と解決策:**

*   **課題:** 既存のCommercetools、Angular、Bloomreachを基盤としたECシステムは複雑で、統合やデータ同期の問題、開発の遅延、部門間の連携の課題がありました。
*   **解決策:** 既存のシステムを再構築し、Shopify、Next.js、Vercelを採用。
    *   **Shopify:** EC、小売、フルフィルメント、カスタマーサービス、マーケティングとのスムーズな統合を実現し、オムニチャネル機能を強化。
    *   **Next.js:** サーバーサイドレンダリング（SSR）により、SEO問題を解決し、業界標準に準拠。ベンダーロックインを回避しつつ柔軟性も確保。
    *   **Vercel:** 自動デプロイ、グローバルCDN、プレビューデプロイ、インスタントロールバックなどの機能により、ピーク時でも安定したユーザーエクスペリエンスを提供。

**成果:**

*   ブラックフライデー期間の売上が22%増加
*   コンバージョン率が76%向上
*   1分あたりの平均注文数が24%増加
*   ダウンタイムなしでトラフィックが22%増加

**今後の展望:**

シンプルな技術スタックにより、PAIGEはオムニチャネル機能の迅速な拡張、UX/UIデザインの改善、サイトパフォーマンスの向上を実現し、顧客エンゲージメントを強化しています。これにより、新たな機能の実装やビジネス要求への迅速な対応が可能となり、ピークシーズンや市場トレンドへの対応も強化され、更なる成長が見込まれています。

---
# Vercel Secure Compute now supports multiple environments - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-secure-compute-now-supports-multiple-environments)

Vercel Secure Computeが複数環境に対応しました。これにより、Vercel Secure Computeを使用しているチームは、各プロジェクト環境（本番環境、プレビュー環境、カスタム環境）を、プロジェクト設定から直接、個別のSecure Computeネットワークに関連付けることができるようになりました。これにより、単一のプロジェクト内で環境ごとのネットワーク分離が容易になります。

プロジェクトの環境をSecure Computeに接続するには、以下の手順で行います。

1.  プロジェクトのSecure Compute設定に移動します。
2.  Secure Computeに接続したい各環境について、
    *   アクティブなネットワークを選択します。
    *   必要に応じて、フェイルオーバーを有効にするためにパッシブなネットワークを選択します。
    *   オプションで、プロジェクトのビルドコンテナをネットワークに含めるためにビルドを有効にします。
3.  変更を保存するために「保存」をクリックします。

---
# Multi-Factor Authentication (MFA) is now available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/mfa-is-now-available)

## Vercel で多要素認証 (MFA) が利用可能に

Vercel は、ユーザーアカウントのセキュリティを強化するため、多要素認証 (MFA) を導入しました。

**概要:**

*   時間ベースのワンタイムパスワード (TOTP) を使用したMFAが利用可能になりました。Google Authenticator や Authy などの認証アプリで生成されたコードを入力することで、2要素目の認証を行います。
*   既存のパスキー (WebAuthnキー) も、2要素目として使用できます。
*   MFAを有効にすることで、最初のログイン方法が侵害されても、アカウントを保護する追加のセキュリティレイヤーが提供されます。

**MFAの有効化方法:**

1.  アカウント設定の「認証」に移動し、MFAを有効にします。
2.  既存のログイン方法 (メールOTPまたはGitプロバイダ) を使用して、1要素目の認証を行います。
3.  TOTP認証アプリを使用して、2要素目の認証を完了します。

**重要な注意点:**

*   パスキーログイン (WebAuthn) は、2要素認証を本質的に行っているため、追加の認証は必要ありません。
*   チームスコープのSAML SSOログインは、認証をIDプロバイダ (IdP) に委任するため、Vercel内での追加の要素は必要ありません。

**詳細:**

アカウント設定からMFAを今すぐ有効にできます。詳細については、Vercelのドキュメントを参照してください。

---
# Java Weekly, Issue 588 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916103168/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 588 要約

この Java Weekly Issue 588 は、2025年4月4日に更新され、Javaおよび関連技術に関する最新情報を提供しています。

**主な内容は以下の通りです:**

1.  **SpringとJava:**
    *   Hibernate 6における`SELECT NEW`の廃止に関する提案。
    *   Java Cleaner APIを活用した効率的なリソース管理。
    *   JavaOne 2025の2日目と3日目の内容（FFM API、仮想スレッド、プラットフォームエンジニアリング、Jakarta EEの進化など）。
    *   Jakarta Dataにおける仕様、Valhallaでのvar-handlesの洗練、STF Milestone 3に関する情報など。
    *   Inside Java NewscastやSpringのポッドキャストなどのウェビナーおよびプレゼンテーション情報。

2.  **技術と考察:**
    *   SQLにラムダ式が組み込まれつつある現状と、jOOQによるJavaラムダ式とのマッピング方法。
    *   MCP（Micronaut Cloud Platform）認証仕様に関する考察。
    *   HTTP+SSEに関するMCPの最近の変更点についての解説。
    *   大規模な文字列マッチングにおける学際的な協力とリソース配分に関する呼びかけ。

3.  **今週のおすすめ:**
    *   JDConf 2025（4月9日、10日）の講演内容：JavaとAI、Spring Boot、Jakarta EE、Java 25、Quarkusなど。

**アップデート推奨:**

*   Quarkus 3.21、Quarkus 3.20 (LTS版)
*   generator-jhipster v8.10.0
*   zuul v3.0.1
*   Micronaut Core 4.8.9
*   camel-4.11.0

この Issue は、Java開発者向けに、Spring、Java、関連技術に関する最新の動向、ウェビナー、カンファレンス、ライブラリのアップデートなど、幅広い情報を提供しています。

---
# A Bootiful Podcast: AWS Developer Advocate and industry legend James Ward

[View on Spring Blog](https://spring.io/blog/2025/04/04/a-bootiful-podcast-james-ward)

## A Bootiful Podcast: AWS デベロッパーアドボケイトであり業界のレジェンド、James Ward

この短い記事は、VMwareが提供するサービスや情報へのリンクを紹介しています。

*   **VMwareによるトレーニングと認定:** キャリアアップを支援するためのトレーニングと認定プログラムを提供しています。
*   **Tanzu Springによるサポート:** OpenJDK、Spring、Apache Tomcat®のサポートとバイナリを、シンプルなサブスクリプションで提供しています。
*   **Springコミュニティのイベント情報:** Springコミュニティで開催されるイベントに関する情報へのリンクを提供しています。

---
# Using Spring AI 1.0.0-SNAPSHOT: Part 2 - Important Changes and Updates

[View on Spring Blog](https://spring.io/blog/2025/04/04/spring-ai-using-snapshots-part-2)

## Spring AI 1.0.0-SNAPSHOT の利用：パート2 - 重要な変更点とアップデート (要約)

この記事は、Spring AI 1.0.0-SNAPSHOT に関する内容ではなく、Springエコシステム全体に関連するいくつかの情報を提供しています。具体的には以下の内容に言及しています。

*   **VMware によるトレーニングと認定:** VMware が提供するトレーニングと認定プログラムが、個人のスキルアップを加速させるために役立つ。
*   **Tanzu Spring サポート:** Tanzu Spring が、OpenJDK、Spring、Apache Tomcat のサポートとバイナリをシンプルなサブスクリプションで提供している。
*   **Spring コミュニティのイベント情報:** Spring コミュニティで開催される今後のイベントが確認できる。

つまり、Spring AI 1.0.0-SNAPSHOT に焦点を当てた内容ではなく、Springエコシステム全体に関する関連情報を提供しています。

---
# Bringing intelligence to every workflow | OpenAI

[View on OpenAI News](https://openai.com/index/notion)

## OpenAI がすべてのワークフローにインテリジェンスをもたらす

この記事では、NotionとOpenAIの協業によるAIの活用について解説しています。

**概要:**

*   **Notion AIの誕生:** Notionは、チームが会議の議事録から製品ロードマップまで、あらゆるものを書き込み、計画し、整理するためのワークスペースです。OpenAIのモデルを統合することで、コンテンツの要約、文章の生成、自然言語での質問への回答など、AIを深く活用したプラットフォームへと進化しました。
*   **協業の始まり:** NotionはGPT-4に早期にアクセスし、1週間でAIライティングアシスタントのプロトタイプを開発しました。この試みが、現在ではNotionの重要な機能であるNotion AIへと発展しました。
*   **AIの進化と影響:** Notionは、検索、データベース作成、会議ノートなど、すべての要素でAIを活用する「ネイティブAI製品」へと変貌しました。OpenAIのモデル（GPT-4o、GPT-4o miniなど）が基盤となっており、ユーザーは自然言語で質問し、引用元を含む正確な回答を得られるようになりました。
*   **開発の加速とフィードバック:** Notionは、OpenAIの新しいモデルを迅速に評価し、統合するための内部ツールとインフラストラクチャを開発しました。これにより、OpenAIに製品ニーズや実装に関するフィードバックを提供し、ルーティング、エンベディング、予約容量などの機能改善に貢献しています。
*   **ビジネスへの影響:**
    *   Notion AIのローンチ後数週間で200万人以上がウェイティングリストに参加。
    *   AI機能を利用するユーザーの3分の2近くが、非利用ユーザーよりも活発に製品を利用。
    *   AIユーザーは、週に平均70分以上の時間を節約。
    *   86%の顧客がNotionのAI機能がなくなると非常に失望すると回答。
    *   AIは、Notionのビジネスモデルにおいて重要な収益源となっています。
*   **今後の展望:** Notionは、AIを単なる情報生成ツールではなく、ワークフローの自動化まで実現する「真のコラボレーター」へと進化させることを目指しています。

**まとめ:**

NotionとOpenAIの協業は、AIをワークスペースに深く統合し、ユーザーの生産性向上とビジネス成長を促進しています。Notionは、OpenAIのモデルを活用し、AI機能を迅速に開発・改善することで、AIの可能性を最大限に引き出しています。今後、AIは、情報を生成したり検索したりするだけでなく、それを活用してワークフローを自動化する「チーフ・オブ・スタッフ」のような存在へと進化していくことが期待されています。
