
# kamranahmedse/developer-roadmap

**stars**: 314173

[View Repository on Github](https://github.com/kamranahmedse/developer-roadmap)

Interactive roadmaps, guides and other educational content to help developers grow in their careers.

## README要約


---

# elie222/inbox-zero

**stars**: 6133

[View Repository on Github](https://github.com/elie222/inbox-zero)

AI personal assistant for email. Open source app to help you reach inbox zero fast.

## README要約
## Inbox Zero - AIを活用したオープンソースのメールアシスタント

### 概要

「Inbox Zero」は、メールの処理時間を短縮するためのAIアシスタントと、それを実現するオープンソースのメールクライアントを組み合わせたアプリケーションです。AIを活用してメールの自動管理を行い、ユーザーが「Inbox Zero」の状態を迅速に達成できるように設計されています。

### 主な機能

*   **AIパーソナルアシスタント:** テキストプロンプトに基づき、返信の下書き、ラベル付け、アーカイブ、返信、転送、スパムマーク、Webhookの呼び出しなど、人間が行うようなメール管理アクションを自動化します。
*   **返信ゼロ:** 返信が必要なメールと、返信待ちのメールを追跡します。
*   **スマートカテゴリ:** これまでメールのやり取りをした相手を分類します。
*   **一括配信停止:** 読まないメールからの購読をワンクリックで解除できます。
*   **コールドメールブロッカー:** コールドメールを自動的にブロックします。
*   **メール分析:** 毎日の、毎週の、毎月のメール活動の統計情報を追跡します。

### 技術スタック

*   Next.js
*   Tailwind CSS
*   shadcn/ui
*   Prisma
*   Upstash
*   Turborepo

### 開発者向け情報

**自己ホスト:**

1.  必要なもの:
    *   Node.js >= 18.0.0
    *   pnpm >= 8.6.12
    *   Docker desktop（オプション）
2.  外部サービスのセットアップ（必須）:
    *   Google OAuth
    *   Google PubSub
3.  LLM (Large Language Model) の選択:
    *   Anthropic、OpenAI、AWS Bedrock Anthropic、Google Gemini、OpenRouter、Groq (Llama 3.3 70B)、Ollama (ローカル) が利用可能
4.  データベース: Postgres を使用。ローカルでの実行には Docker Compose を使用可能。
5.  Redis: Upstash Redis を推奨。ローカルでの実行には Docker Compose を使用可能。
6.  `.env` ファイルの設定: `apps/web/.env.example` を参考に、必要な環境変数を設定。
7.  マイグレーションの実行: `pnpm prisma migrate dev`
8.  ローカル開発の実行: `pnpm run dev` または `turbo dev`
9.  本番環境での実行: `pnpm run build`、`pnpm start`
10. 認証ユーザーを管理者に昇格させるには、`.env`で `ADMINS=hello@gmail.com` のように設定し、`/admin` ページから自分を管理者として登録。

**Google OAuth と Gmail API の設定:**

1.  Google Cloud Console でプロジェクトを作成
2.  Gmail API と People API を有効化
3.  OAuth 同意画面を設定
    *   ユーザータイプを選択（"External" または "Internal"）
    *   必要なアプリ情報を入力
    *   スコープを追加:
        *   `https://www.googleapis.com/auth/userinfo.profile`
        *   `https://www.googleapis.com/auth/userinfo.email`
        *   `https://www.googleapis.com/auth/gmail.modify`
        *   `https://www.googleapis.com/auth/gmail.settings.basic`
        *   `https://www.googleapis.com/auth/contacts`
    *   テストユーザーを追加
4.  OAuth 2.0 クレデンシャルを作成
    *   タイプを「Web application」に
    *   許可された JavaScript のオリジンとリダイレクト URI を設定
5.  環境変数の設定（`.env` ファイル）:
    *   `GOOGLE_CLIENT_ID`
    *   `GOOGLE_CLIENT_SECRET`

**Google PubSub を利用したメールのリアルタイム更新:**

1.  Google PubSub でトピックを作成
2.  サブスクリプションを作成
3.  トピックに公開権限を付与
4.  環境変数 `GOOGLE_PUBSUB_TOPIC_NAME` を設定
5.  サブスクリプションの URL を設定 (例: `https://www.getinboxzero.com/api/google/webhook?token=TOKEN`)。`GOOGLE_PUBSUB_VERIFICATION_TOKEN` を `.env` に設定。
6.  開発環境では ngrok を利用可能。
7.  `/api/google/watch/all` でメールの監視を開始。

**Cron ジョブの設定:**

Google Watch を必須とし、他のジョブはオプションです。
*  `/api/google/watch/all` (毎日午前1時)
*  `/api/resend/summary/all` (毎週月曜日の午後4時)
*  `/api/reply-tracker/disable-unused-auto-draft` (毎日午前3時)


---

# public-apis/public-apis

**stars**: 336242

[View Repository on Github](https://github.com/public-apis/public-apis)

A collective list of free APIs

## README要約
## public-apis リポジトリの詳細な要約（日本語）

このリポジトリは、**無料で利用できるAPIの包括的なリスト**をまとめたものです。世界中の様々な分野から集められたAPIが、コミュニティメンバーによって手動でキュレーションされ、管理されています。

**リポジトリの主な内容:**

*   **APIのコレクション:** 幅広いドメイン（動物、アニメ、ビジネス、金融、天気など）にわたる多数の公開APIがリストされています。
*   **コミュニティ主導:** 多くのAPIが、このリポジトリの貢献者によって手動で追加・更新されています。
*   **APILayerとの連携:** リポジトリの作成者には、APIマーケットプレイスを持つ[APILayer](https://apilayer.com/)のスタッフも含まれており、APILayerのAPIも紹介されています。
*   **Postmanでの利用:** 一部のAPIについては、Postmanコレクションのリンクも提供されており、PostmanでAPIを試すことが容易になっています。

**APILayerのAPI紹介:**

*   IP Stack: IPアドレスによるウェブサイト訪問者の位置情報特定
*   Marketstack: 世界中の株式市場データ
*   Weatherstack: 世界各地の天気情報
*   Numverify: 電話番号の検証とルックアップ
*   Fixer: 為替レート

**貢献について:**

*   **コントリビューションガイド:**  [CONTRIBUTING.md](CONTRIBUTING.md) で、貢献方法が説明されています。
*   **API:** リポジトリのAPIに関する情報。
*   **イシューとプルリクエスト:** APIに関する問題の報告や、機能追加などの提案が可能です。
*   **ライセンス:** [LICENSE](LICENSE) ファイルにライセンス情報（MITライセンス）が記載されています。

**インデックス:**

リポジトリには、APIの種類別に分類されたインデックスが用意されています。APIの種類には、動物、アニメ、反マルウェア、アート&デザインなど、多岐にわたる分野が含まれています。各APIは、API名、説明、認証の種類、HTTPSの利用有無、CORSの利用有無が一覧で表示されています。

**まとめ:**

このリポジトリは、開発者が様々なプロジェクトで利用できる**無料のAPIの宝庫**です。コミュニティによって管理されており、常に新しいAPIが追加・更新されています。さまざまな分野のAPIを簡単に検索し、利用することができます。また、貢献を通じて、APIリストの拡充に貢献することも可能です。

