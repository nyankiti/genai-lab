# Vapi MCP server hosted on Vercel - Vercel

[View on Vercel Blog](https://vercel.com/blog/vapi-mcp-server-on-vercel)

## Vercel 上でホストされる Vapi MCP サーバー - Vercel 要約

この記事は、Vapi社が、リアルタイム音声エージェント構築用のAPIを開発するにあたり、MCPサーバーをVercel上に再構築した事例を紹介しています。

**概要:**

*   Vapiは、AIモデルが外部機能にアクセスするためのMCPサーバーをVercel上で構築。これにより、エージェントの作成、テストの自動化、トランスクリプト分析、ワークフロー構築、およびVapiのエンドポイントへのアクセスが可能になった。
*   MCP（Model Context Protocol）サーバーは、AIモデルが特定のタスクを達成するための専用ツールキットのようなもの。
*   Vapiは、VercelのMCPアダプターを使用してサーバーを再構築し、Server-Sent Events（SSE）と新しいStreamable HTTPトランスポートの両方をサポート。

**Vercelへの移行メリット:**

*   **MCPアダプター:** Node.js互換フレームワークのルートエンドポイントに簡単に組み込めるパッケージを提供。
*   **Fluid Compute:** 計算時間を最大化し、リソース利用効率を最適化。MCPクライアントの複数の接続を既存リソースで処理し、新しいリソースのスケールアップをインテリジェントに行う。
*   **その他:** Observability、FirewallなどのVercelの製品群を活用し、インフラ管理ではなく製品開発に注力できる。

**結論:**

Vapiは、VercelのMCPアダプター、Observability、Fluid Compute、Firewallといった製品群を活用することで、インフラ管理の負担を軽減し、製品開発に集中できるようになりました。

---
# Vercel Blob is now generally available: fully integrated, durable object storage - Vercel

[View on Vercel Blog](https://vercel.com/blog/vercel-blob-now-generally-available)

## Vercel Blob が正式リリース：完全に統合された耐久性のあるオブジェクトストレージ

Vercel Blob が正式リリースされ、Vercel のアプリケーション配信ネットワークに完全に統合された耐久性の高いストレージを提供します。

**概要:**

Vercel Blob は、高速でグローバルに利用可能、かつ持続的なストレージをシンプルに設定できるよう設計されています。AWS S3 を基盤とし、Vercel のグローバルなアプリケーション配信と自動キャッシュに深く統合されており、予測可能な料金体系で、大規模なパブリックアセットを効率的に提供します。

**主な特徴:**

*   **パフォーマンス、耐久性、効率性:** 大容量ワークロード向けに構築されており、数枚のプロフィール写真からテラバイト単位のメディアまで対応。AWS S3 インフラストラクチャを活用し、99.999999999% の信頼性を実現。
*   **キャッシュがシームレスに動作:** Vercel のキャッシュインフラストラクチャとの深い統合により、管理と設定が不要。アセットリクエストは最寄りの Vercel リージョンにルーティングされ、キャッシュヒットまたはミスに応じて処理されます。これにより、個別の CDN が不要になり、データ転送コストを削減し、ロード時間を短縮。
*   **SDKによる簡単操作:** `@vercel/blob` SDK を使用することで、ファイルアップロードを簡単な関数呼び出しで行うことができます。最大 5TB の大容量アップロードに対応し、マルチパートアップロード、再開可能、リトライ、並行処理をサポート。
*   **Vercel ダッシュボード統合:** ファイルのブラウズと管理を Vercel ダッシュボードから直接行えます。
*   **イメージ最適化との連携:** Vercel Image Optimization と直接統合し、画像ストレージと最適化を同じワークフロー内で実行。`next/image` などのフレームワークネイティブな画像最適化を利用可能。
*   **価格体系:** 使用量ベースで、地域ごとの料金設定。ストレージ、API 操作、Blob データ転送の料金が明確に提示されています。無料プランも提供。
*   **オブザーバビリティ:** Observability ダッシュボードに専用の Blob タブが追加され、データ転送、ダウンロードボリューム、キャッシュアクティビティ、API 操作などの詳細な使用状況を確認できます。

**今後の展望:**

認証されたリクエストのためのスコープアクセスを持つプライベート Blob や、データレジデンシー制御などの機能追加を予定しています。ローカル開発のツール改善にも取り組んでいます。

---
# Vercel Blob is now generally available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-blob-is-now-generally-available)

## Vercel Blob が正式リリース - 詳細要約

Vercel が提供するオブジェクトストレージサービスである Vercel Blob が正式にリリースされました。これにより、高性能かつグローバルにスケーラブルなオブジェクトストレージをワークフローやアプリに組み込むことが可能になります。

**主な特徴:**

*   **高い耐久性:** 99.999999999% の耐久性を保証する S3 インフラストラクチャを基盤としています。
*   **大規模利用実績:** v0.dev などの本番環境で利用されており、既に4億以上のファイルを保存しています。
*   **従量課金制:**
    *   ストレージ: 1GBあたり月額 $0.023
    *   シンプルなAPI操作（読み取りなど）: 100万回あたり $0.40
    *   高度なAPI操作（アップロードなど）: 100万回あたり $5.00
    *   Blob データ転送: 1GBあたり $0.050～
*   **料金適用開始日:**
    *   新規 Blob ストア: 本日から
    *   既存のストア: 2025年6月16日から
*   **価格設定:** ストレージと操作料金は S3 に準拠しており、Blob データ転送は、Fast Data Transfer よりも最大3倍安価で、Vercel のグローバルキャッシュレイヤーと直接統合する新しいメカニズムです。
*   **Hobby プランの無料利用枠拡大:** Hobby ユーザーは、毎月 1GB のストレージと 10GB の Blob データ転送を無料で利用できます。

Vercel Blob を利用するには、ドキュメントを参照してください。

---
# Qodana Case Study: Kotlin - The Qodana Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/qodana/2025/05/qodana-case-study-kotlin/)

## Qodana事例研究: Kotlin - 要約

**概要:**

JetBrainsのQodanaブログは、KotlinチームがKotlin 2.0のリリースに向けて、Qodanaを活用してコード品質を向上させた事例を紹介しています。大規模なコードベースにおける複雑な変更と、従来のテスト方法の限界を克服するために、静的コード分析ツールであるQodanaが導入されました。

**課題:**

*   Kotlin 2.0のリリースに伴う大規模なコード変更 (コンパイラ、IDEプラグイン、インスペクションの書き換えなど)
*   従来のテストでは対応できない、複雑で相互に関連するシステムのテスト
*   手動テストでは膨大な時間とリソースが必要

**解決策:**

*   Qodanaによる静的コード分析の活用
    *   IntelliJ IDEAなどの大規模コードベースに対して、インスペクションの動作検証
    *   手動テストでは見つけにくい、エッジケース、不整合、バグの早期発見
*   CIパイプラインへの統合 (TeamCity)
    *   ベースラインファイルによる既知の問題のフィルタリング
    *   開発者とQAエンジニアへの迅速なフィードバック提供

**結果:**

*   時間と労力の節約 (手動テストのボトルネック解消)
*   精度の向上 (バグの早期発見と確実性向上)
*   チーム全体の賛同と標準ワークフローへの組み込み
*   より高速なリリースと品質への信頼感向上

**今後の展望:**

*   QodanaのCIへの更なる統合とインフラ自動化
*   パフォーマンスQAのサポート
*   Exploratory QAモデルの継続的な進化

**まとめ:**

Qodanaは、複雑なKotlinのコードベースにおけるQA戦略の重要な柱となり、品質向上と開発効率の向上に貢献しました。Kotlinチームは、Qodanaによって、大規模コードベースでのテストを効率化し、問題の早期発見を実現し、開発チームの信頼を獲得しました。
---
# Amper Update, May 2025 – A Standalone Build Tool for Kotlin, Server-Side and Multiplatform | The Amper Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/amper/2025/05/amper-update-may-2025/)

## Amper Update, 2025年5月 – Kotlin、サーバーサイド、マルチプラットフォーム向けのスタンドアロンビルドツール

このブログ記事は、JetBrainsが開発中の実験的なビルドツール「Amper」の最新バージョン0.7.0のアップデート内容を紹介しています。

**主な変更点:**

*   **サーバーサイド開発のサポート:** KtorとSpringフレームワークに対応し、実行可能なJARパッケージングやBOM依存関係の利用、IDE統合などが可能になりました。`amper init`コマンドで提供される新しいテンプレートを利用することで、サーバーサイドプロジェクトを簡単に始められます。
*   **iOSサポートの追加:** Kotlin Multiplatform (KMP)開発において、Android、デスクトップに加え、iOSもサポート対象となりました。
*   **IDEの改善:** 診断機能とクイックフィックスが強化され、依存関係バージョンの競合に関する警告や、未解決の依存関係の自動追加など、開発者の利便性を高める機能が追加されました。
*   **スタンドアロンAmperへの移行:** 今後、スタンドアロン版Amperが中心となり、GradleベースのAmperは段階的に廃止される予定です。スタンドアロン版は、ビルドプロセスを完全に制御することで、IDEサポートの向上、柔軟性、拡張性を実現することを目指しています。
*   **依存関係の更新:** Compose Multiplatformがバージョン1.8.0にアップデートされ、iOSでのCompose Multiplatformが安定版になりました。

**その他:**

*   既存のAmperプロジェクトは`update`コマンドで、新規プロジェクトは`init`コマンドで簡単にアップデートできます。
*   最新のAmper機能を最大限に活用するには、IntelliJ IDEA 2025.1.2 Preview以降を使用してください。
*   フィードバックはKotlinlang Slackの#amperチャンネルまたはYouTrack issueで受け付けています。
---
# New tools and features in the Responses API | OpenAI

[View on OpenAI News](https://openai.com/index/new-tools-and-features-in-the-responses-api)

## OpenAI、Responses APIの新ツールと機能について

OpenAIは、開発者と企業向けのResponses APIに、新しいツールと機能を追加しました。

**新機能の概要**

*   **リモートMCPサーバーサポート:**
    *   Responses APIでリモートMCPサーバーのサポートが追加され、開発者は数行のコードでOpenAIのモデルをあらゆるMCPサーバーに接続できるようになりました。
    *   MCP（Model Context Protocol）は、アプリケーションがLLM（大規模言語モデル）にコンテキストを提供する方法を標準化するオープンプロトコルです。
    *   Cloudflare、HubSpot、Intercom、PayPal、Plaid、Shopify、Stripe、Square、Twilio、Zapierなどの人気のあるリモートMCPサーバーが利用できます。
    *   OpenAIはMCPのステアリングコミッティーに参加し、エコシステムの発展に貢献しています。
*   **画像生成、Code Interpreter、ファイル検索のアップデート:**
    *   **画像生成:** 最新の画像生成モデル（gpt-image-1）をResponses API内でツールとして利用できるようになり、リアルタイムストリーミングと複数回の編集に対応。
    *   **Code Interpreter:** データ分析、複雑な数学やコーディング問題の解決、画像の理解と操作に役立つCode Interpreterツールが利用可能に。
    *   **ファイル検索:** 複数のベクターストアを横断した検索や、配列による属性フィルタリングが可能に。
*   **Responses APIの新しい機能:**
    *   **バックグラウンドモード:** 長時間タスクを非同期的に処理し、タイムアウトや接続の問題を回避。
    *   **Reasoning summaries:** モデルの内部思考過程を簡潔な自然言語で要約し、デバッグや監査、ユーザーエクスペリエンスの向上に貢献。追加費用なしで利用可能。
    *   **暗号化されたreasoning items:** Zero Data Retention（ZDR）に加入している顧客は、reasoning itemsをAPIリクエスト間で再利用できるようになり、OpenAIサーバーに保存されることはありません。

**対象モデルと価格**

*   これらのツールと機能は、GPT-4oシリーズ、GPT-4.1シリーズ、OpenAI oシリーズのモデル（o1、o3、o3-mini、o4-mini）で利用できます。画像生成は、o3でのみサポートされています。
*   既存のツールの価格は変更ありません。
    *   画像生成: 入力テキストトークンあたり$5.00/1M、画像入力トークンあたり$10.00 /1M、画像出力トークンあたり$40.00 /1M（キャッシュされた入力トークンは75%オフ）。
    *   Code Interpreter: コンテナあたり$0.03。
    *   ファイル検索: ベクターストレージ1GBあたり1日$0.10、ツールコール1,000回あたり$2.50。
    *   リモートMCPサーバーのツールコールには追加費用はかかりません。APIからの出力トークンに対して課金されます。

**日付:** 2025年5月21日
