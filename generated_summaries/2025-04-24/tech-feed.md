#  Vercel's Bot Filter stops malicious bots in a single click  - Vercel

[View on Vercel Blog](https://vercel.com/blog/bot-filter-one-click-bot-protection-now-in-public-beta)

Vercelは、ワンクリックで悪質なボットをブロックする「Bot Filter」をリリースしました。

**概要:**

*   Vercel Web Application Firewall (WAF) は、クロスサイトスクリプティング、トラバーサル、DDoS攻撃などのアプリケーションレイヤーの脅威をブロックします。
*   Bot Filter は、ワンクリックでアプリケーションをボット攻撃から保護する、無料のマネージドルールセットです。

**Bot Filter の特徴:**

*   ヒューリスティックベースの検出により、ブラウザベースのトラフィック (人間) と非ブラウザベースのトラフィック (ボット) を区別します。
*   本物のブラウザからのリクエストや、検証済みのボットは許可されます。
*   非ブラウザクライアントからのリクエスト (curlや不要なスクレイパーなど) にはチャレンジが発行されます。
*   WAF に直接統合され、検証済みのボットのリストを維持し、メンテナンスの手間を省きます。

**Bot Filter の利用シーン:**

*   人間ユーザーと Vercel が検証したボットへのアクセスを制限したい場合。
*   AIボットや SEOボットなどの正当なサービスに対して、または主に人間トラフィックを期待する場合に最適です。
*   ログオンリーモードで開始し、トラフィックとボットソースを可視化できます。

**Bot Filter の制限事項:**

*   人間とブラウザの動作を模倣する洗練されたボットに対する保護は設計されていません。
*   完全な自動化をブロックしたい場合は、Attack Challenge Mode を使用します。

**今後の展望:**

*   Bot Protection SDK、ランタイムボット保護機能など、より高度な機能が計画されています。
*   エンタープライズユーザー向けには、自動化されたトラフィックをより詳細に制御するための、検出信号へのアクセスが提供されます。
*   フィードバックは Vercel Community で受け付けています。

**利用方法:**

*   Firewall の Configure ダッシュボードから Bot Filter を有効にできます。
*   ログオンリーモードで開始し、アローリストを調整してから、アクティブな適用に切り替えることを推奨します。

---
# Node.js Vercel Functions now support request cancellation - Vercel

[View on Vercel Blog](https://vercel.com/changelog/node-js-vercel-functions-now-support-request-cancellation)

## Vercel Functions (Node.js) でのリクエストキャンセル機能サポートに関する要約

Vercel Functions (Node.js) が、リクエストのキャンセルを検出して、完了前に実行を停止できるようになりました。これにより、ユーザーが離脱、タブを閉じる、AIチャットで停止を押すといった操作が行われた際に、不要な計算処理を早期に終了させることが可能になります。

この機能により、不要なコンピューティングリソースの消費、トークンの生成、ユーザーが閲覧しないデータの送信を削減できます。

リクエストのキャンセルは、`Request.signal.aborted` または `abort` イベントを通じて検知できます。記事内では、`Request.signal.aborted` を利用した例と、AI SDK を使用している場合に `abortSignal` をストリームに転送する方法がコード例とともに紹介されています。

---
# Bot Filter is now in public beta - Vercel

[View on Vercel Blog](https://vercel.com/changelog/bot-filter-is-now-in-public-beta)

## Vercel の Bot Filter がパブリックベータで利用可能に

Vercel の Web Application Firewall に、新しい Bot Filter のマネージドルールセットが追加され、すべてのユーザー向けにパブリックベータとして公開されました。

**Bot Filter の概要:**

*   非ブラウザソースからの自動化されたトラフィックを削減するのに役立ちます。
*   2つのアクションを選択して対応できます。
    *   **ログ記録のみ:** 識別されたボットトラフィックをファイアウォールタブに記録する（リクエストはブロックしない）。
    *   **チャレンジ:** 非ブラウザソースからのトラフィックにブラウザチャレンジを提供し、検証済みのボットは自動的に除外する。
*   すでに検証済みのボットによってカバーされていない、正当な自動化されたトラフィックを妨げないように、特定の要求に対してバイパスアクションを使用するカスタム WAF ルールを設定できます。
*   チャレンジアクションを有効にする前に、ログ記録のみのアクションから始めてトラフィックを観察することを推奨します。

**有効にする方法:**

1.  プロジェクトダッシュボードで、ファイアウォールタブに移動し、[Configure] を選択します。
2.  [Bot Protections] で、[Bot Filter] を選択します。
3.  [Log] または [Challenge] を選択します。
4.  [Review Changes] を選択し、適用する変更を確認します。
5.  [Publish] を選択し、本番環境のデプロイに適用します。

**Bot Filter の役割:**

*   DDoS攻撃、低品質トラフィック、スプーフィングトラフィックなどの一般的な脅威をブロックする Vercel の既存の対策を補完します。
*   明確に悪意のあるものではない、自動化されたトラフィックに対して追加の保護レイヤーを追加します。

**フィードバック:**

パブリックベータ期間中に、Vercel コミュニティのスレッドでフィードバック、機能リクエスト、Bot Filter に関する体験を共有できます。

**詳細:**

Bot Filter のマネージドルールセットと Vercel ファイアウォールに関する詳細については、[詳細情報] を参照してください。

---
# Prisma joins the Vercel Marketplace - Vercel

[View on Vercel Blog](https://vercel.com/changelog/prisma-joins-the-vercel-marketplace)

## Vercel MarketplaceにPrismaが参加：高速なPostgresデータベースを簡単に利用可能に

この記事は、PrismaがVercel Marketplaceにストレージプロバイダーとして参加したことを伝えています。

**要約:**

*   Prisma Postgresが、Vercel Marketplaceで利用可能になりました。これは、フルスタックおよびエッジアプリケーション向けに最適化されたサーバーレスデータベースです。
*   Vercel Marketplaceを通じて、アカウント作成、課金、無料利用枠が統合されており、わずか数クリックでPrisma Postgresを使い始めることができます。別途登録は不要です。
*   Vercelユーザーは、Prismaのネイティブ統合により以下のメリットを得られます。
    *   コールドスタートのない高性能Postgresデータベース
    *   自動スケーリングとグローバルキャッシング、接続プーリング
    *   視覚的なデータ管理とAIを活用したパフォーマンス提案
*   Prismaは、すべてのVercelプランで利用可能です。

---
# Fluid compute is now the default for new projects - Vercel

[View on Vercel Blog](https://vercel.com/changelog/fluid-compute-is-now-the-default-for-new-projects)

## Vercel、Fluid computeを新規プロジェクトのデフォルトに

この記事は、VercelがFluid computeを新しいプロジェクトでデフォルトで利用できるようにしたことを発表しています。

主な内容は以下の通りです。

*   **デフォルト化の背景:** Fluid computeの一般公開、大規模プロダクションアプリでの採用、v0.devの全デプロイメントでのデフォルト有効化を経て、今回の変更に至りました。
*   **Fluid computeの利点:**
    *   既存のインスタンスを再利用し、高並行処理ワークロードのコストを最大85%削減
    *   サーバーの効率性とサーバーレスの柔軟性を両立
    *   関数あたりの同時リクエスト数の増加
    *   ゼロから無限へのスケーリング
    *   最小限のコールドスタート
    *   従量課金制
    *   Node.jsとPythonの完全サポート
    *   インフラ管理不要
    *   waitUntilを用いたバックグラウンドタスク
*   **既存プロジェクトへの適用:** 既存のプロジェクトでもFluid computeを有効にすることができます。詳細はVercelのブログとドキュメントを参照してください。

---
# Introducing our latest image generation model in the API | OpenAI

[View on OpenAI News](https://openai.com/index/image-generation-api)

## OpenAI、APIで最新の画像生成モデル「gpt-image-1」を発表

### 概要

OpenAIは、ChatGPTで人気を博している画像生成機能をAPI経由で利用可能にする新モデル「gpt-image-1」を発表しました。このモデルは、様々なスタイルでの画像生成、カスタムガイドラインへの忠実な従順、世界知識の活用、正確なテキストレンダリングといった機能を持ち、クリエイティブツール、eコマース、教育、エンタープライズソフトウェア、ゲームなど、幅広い分野での活用が期待されています。

### 特徴

*   多様なスタイルでの画像生成
*   カスタムガイドラインへの忠実な従順
*   世界知識の活用
*   正確なテキストレンダリング
*   有害な画像の生成を制限する安全対策
*   C2PAメタデータの埋め込み
*   **価格:** テキスト入力トークンは$5/1Mトークン、画像入力トークンは$10/1Mトークン、画像出力トークンは$40/1Mトークン

### 活用事例

すでに、Adobe、Airtable、Figma、Gamma、HeyGen、OpusClip、Quora、Wix、Photoroom、Playgroundといった企業が「gpt-image-1」を活用した製品やサービスを提供しています。

*   **Adobe:** FireflyやExpressアプリで、様々なスタイルを試せる画像生成機能を提供。
*   **Airtable:** マーケティング・クリエイティブチーム向けに、キャンペーンコンセプトの生成、アセットのリミックス、ローカライズなどを容易に。
*   **Figma:** デザインプラットフォーム内で、画像生成と編集が可能に。
*   **Gamma:** プレゼンテーションやウェブサイトのイラスト作成、既存画像の編集、スタイル変更などに利用。
*   **HeyGen:** アバター作成機能を強化。
*   **OpusClip:** YouTubeサムネイルの自動生成。
*   **Quora:** デフォルトの画像生成モデルとして採用。
*   **Wix:** AIデザインプラットフォーム「Wixel」に統合し、プロ品質のデザインを簡単に作成。
*   **Photoroom:** 新しいAIツール（Product Beautifier、Product Staging、Virtual Model）で、オンライン販売者がスタジオ品質のビジュアルを迅速に作成。
*   **Playground:** デザイン編集機能を強化。

### 今後の展開

Canva、GoDaddy、HubSpot、Instacart、invideoなどの企業も、画像生成機能を自社サービスに統合することを目指しています。これらの企業は、ロゴ作成、マーケティング資料の作成、レシピやショッピングリストの生成、動画編集など、様々な用途での活用を模索しています。

### 安全性と利用方法

「gpt-image-1」は、ChatGPTの画像生成と同様の安全対策が施されており、有害な画像の生成を制限し、C2PAメタデータを含んでいます。また、`moderation`パラメータでモデレーションの感度を調整することも可能です。

モデルはImages APIを通じてグローバルに利用可能で、Responses APIでも間もなくサポートが開始されます。利用開始には、組織の認証が必要となる場合があります。詳細な利用方法と価格は、OpenAIのドキュメントで確認できます。