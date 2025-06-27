# Vercel Ship 2025 recap - Vercel

[View on Vercel Blog](https://vercel.com/blog/vercel-ship-2025-recap)

## Vercel Ship 2025 リキャップ - 日本語要約

Vercel は、2025年に開催された年次イベント「Ship 2025」で、AI時代のアプリ開発を加速させるための新機能を発表しました。本記事では、その主要な発表内容をまとめます。

**AI Cloud の構築**

Vercel は、従来の Frontend Cloud に代わる、AI時代に対応した AI Cloud の構築を目指しています。これは、AI を活用したアプリの開発を容易にし、高速、柔軟、かつセキュアな開発環境を提供するものです。

**主な発表内容**

1.  **AI Gateway:** さまざまな AI モデルプロバイダーへのアクセスを単一のエンドポイントで提供。プロバイダーの切り替え、リクエストのインテリジェントなルーティング、フォールバック設定により、高い可用性と柔軟性を実現します。OpenAI、Anthropic、Google、xAI などのモデルを、使用量に応じた課金体系で利用できます。

2.  **Fluid と Active CPU:** AI推論などの I/O バウンドワークロードを効率的に処理するための新しいコンピュートモデル。従来のサーバーレスモデルとは異なり、複数のリクエストでリソースを共有し、コスト削減を実現します。Active CPU は、コードが実際に実行されている時間に対して課金され、メモリ使用量も細かく課金されるため、より効率的なリソース利用が可能です。

3.  **Vercel Sandbox:** 信頼できないコードを安全に実行するための分離された環境。Node.js と Python をサポートし、最大45分の実行時間で、安全なコンテナ内でログストリーミングや依存関係のインストールが可能です。

4.  **Rolling Releases:** 安全かつ段階的な新しいデプロイメント。エラー率やパフォーマンスの低下を監視し、ロールアウトの一時停止や中止を可能にします。

5.  **Microfrontends:** 大規模なアプリケーションを独立してデプロイ可能な小さな単位に分割。チームは、独自の技術スタックで開発、テスト、デプロイでき、Vercel が統合とルーティングを処理します。

6.  **BotID:** Kasada との提携により実現した、目に見えないボット検出。ログイン、サインアップ、API などの重要なリクエストを保護し、ユーザーエクスペリエンスを損なうことなく、高度なボット攻撃を防御します。

7.  **Vercel Agent:** アプリのパフォーマンスとセキュリティデータを分析する AI アシスタント。異常の要約、原因の特定、ファイアウォールルールの管理、最適化の提案などを行います。

8.  **Vercel Queue:** バックグラウンドでの処理を可能にし、ユーザーのリクエストを高速化します。AI ビデオ処理、メール送信、外部サービスの更新などに利用できます。

**まとめ**

Vercel は、AI 時代のアプリ開発を支援するため、AI Gateway、Fluid と Active CPU、Vercel Sandbox、Rolling Releases、Microfrontends、BotID、Vercel Agent、Vercel Queue などの新機能を発表しました。これらの機能は、開発者の生産性向上、アプリケーションのセキュリティ強化、そして AI 活用による革新的なアプリ開発を促進します。

---
# New webhook events for domain management - Vercel

[View on Vercel Blog](https://vercel.com/changelog/new-webhook-events-for-domain-management)

## Vercel、ドメイン管理に関する新しいWebhookイベントを発表

Vercelは、ドメイン管理に関するより詳細な情報を得るためのWebhookイベントを新たに提供開始しました。これにより、ドメインに関連する重要な操作を追跡し、監視することが可能になります。

**新しく追加されたイベントカテゴリは以下の通りです:**

*   **ドメイン転送:** ドメインの受信転送の主要な段階を追跡。
*   **ドメイン更新:** 更新試行と自動更新ステータスの変更を監視し、可用性に影響が出る前に問題を発見可能。
*   **ドメイン証明書:** 証明書の発行、更新、削除時に通知を受け取り、環境全体で有効なHTTPSカバレッジを維持。
*   **DNS変更:** DNSレコードの作成、更新、削除時にアラートを受信。
*   **プロジェクトドメイン管理:** プロジェクト間でのドメインのライフサイクル変更（作成、更新、検証ステータス、再割り当てなど）を検出。

これらのイベントは、ユーザーまたは顧客ごとにドメインを動的に割り当てるマルチテナントプラットフォームにとって特に有効です。また、チームは、重要なドメインおよび証明書の操作に監視とアラートを組み込むことができます。

Webhookイベントへの登録方法の詳細については、Webhookドキュメントを参照してください。

---
# Java Weekly, Issue 600 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920803802/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 600 要約

この Java Weekly の第 600 号は、2025 年 6 月 20 日に更新されました。

**1. Spring と Java**

*   **記事紹介:**
    *   Spring Boot のデバッグに関する IntelliJ IDEA の Spring Debugger プラグインの紹介
    *   JMH ライブラリを使った Java のベンチマークとプロファイリング
    *   その他、Hexagonal Architecture、Java Collections、Spring Boot + Kafka Streams、ReadyNow を使った最適化、GPU を活用した LLM 推論 (GPULlama3.java) に関する記事が紹介されています。
*   **ウェビナーとプレゼンテーション:**
    *   Stack Overflow Podcast による Java 30 周年記念
    *   Inside Java Newscast #93: Java 25 Encodes PEM
    *   「Integrity by Default」に関する Inside Java エピソード
    *   Micrometer.io に関する Spring のポッドキャスト
*   **アップデート情報:**
    *   Spring Modulith 1.4.1 と 1.3.7
    *   Spring Boot 3.5.3
    *   Quarkus 3.23.4
    *   Jetty.project 12.1.0.beta1
    *   Microprofile 7.1
    *   Eclipse-vertx
    *   Elasticsearch 9.0.3
    *   Micronaut-core v4.9.5
    *   Camel-4.10.6

**2. 技術と考察**

*   **記事紹介:**
    *   AI エージェントがマイクロサービスにおける認証を正しく行うことを迫るかどうかの考察
    *   AI エージェントの特性（自律性、確率性、動的な連携による呼び出しグラフの構築）に焦点を当てています。
    *   その他、AI 生成ライブラリ、AI インタラクションの安全性、LLM の抽象化、Data Lakehouse に関する記事が紹介されています。

**3. 今週のおすすめ**

*   「Don't Shave That Yak!」という記事が紹介されています。

---
# Retell AI makes voice agent automation customizable and code-free with GPT-4o | OpenAI

[View on OpenAI News](https://openai.com/index/retell-ai)

## Retell AI、GPT-4o を活用して音声エージェント自動化をカスタマイズ可能かつコード不要で実現

Retell AI は、OpenAI の GPT-4o を活用し、音声エージェントの自動化をカスタマイズ可能かつコード不要で実現するプラットフォームを開発しました。これにより、最大80%のコールハンドリングコスト削減を実現しています。

**主な特徴:**

*   **GPT-4o の活用:** 自然な会話を可能にし、文脈理解、論理的な思考、リアルタイムでの適切なアクション実行を実現。
*   **コード不要のプラットフォーム:** レガシーなスクリプトシステムを改造するのではなく、AIネイティブでコードを書かずに、質問への回答、予約、管理業務の解決など、自然な音声エージェントを迅速に展開できます。
*   **迅速なモデル統合:** OpenAI の最新モデルを迅速に統合し、数日以内に新機能を提供。
*   **高パフォーマンス:** GPTモデルの高い精度と応答速度により、リアルな会話を実現。機能呼び出しの成功率は70%以上。
*   **機能拡張:** 予約、リード獲得、管理業務の解決、通話後の分析、結果評価、設定可能なエージェントワークフロー、動的な会話フローなど、様々な機能を提供。
*   **高い顧客満足度:** NPS90という高い顧客満足度を達成。
*   **ビジネス成果:** コールハンドリングコストの最大80%削減、24時間対応による顧客満足度向上、85〜90%の成功率での転送、ローンチから16ヶ月で1400万ドルの収益、月平均25%の成長を実現。
*   **今後の展望:** より高度な会話フロー、インテリジェントな転送、CRM 連携の強化、リアルタイム分析、よりスマートなコールスコアリングと品質保証（QA）などの機能を提供予定。

Retell AI は、GPT-4o およびGPT-4.1を活用し、顧客との会話の未来を構築しています。

---
# 2025-06-26のJS: Biome v2、Vite 7.0、Chrome 138、Firefox 140 - JSer.info

[View on jser.info](https://jser.info/2025/06/26/biome-v2-vite-7.0-chrome-138-firefox-140/)

## JSer.info #739 要約 (2025-06-26)

このJSer.infoの記事では、2025年6月26日にリリースされた様々なJavaScript関連のツールやライブラリ、ブラウザのアップデート情報をまとめています。

**主要なリリース:**

*   **Biome v2:** 設定ファイルのネストやLinterプラグインのサポート、Assist機能の追加、HTML formatterのサポートなどが行われました。破壊的変更として、`--apply/--apply-unsafe`の廃止、設定ファイルの`include/ignore`から`includes`への変更などがあります。
*   **Vite 7.0:** Node.js 20.19+/22.12+をサポート対象に変更し、デフォルトのブラウザターゲットをBaseline Widely Availableに変更。SassのレガシーAPIのサポート終了、Environment APIの拡張、非推奨機能の削除なども含まれています。
*   **Chrome 138:** ローカルのGemini Nanoを使ったTranslator/Language Detector/Summarizer APIの追加、CSSの新しい関数群のサポート、`width`プロパティでの`stretch`キーワードのサポートなど、様々な機能が追加されました。
*   **Firefox 140:** CSS Custom Highlight APIのサポート、Cookie Store APIでの非同期cookie操作、pointerrawupdateイベントのサポートなどが追加されました。

**その他のリリース/更新情報:**

*   React Native 0.80 (React 19.1へのアップデート、Deep importsの非推奨化、Legacy Architectureの非推奨化など)
*   Prettier 3.6 (新しいCLIの利用、@prettier/plugin-oxc/@prettier/plugin-hermesプラグインの追加など)
*   SVGO 4.0.0 (Node.js 14のサポート終了、デフォルトプラグインの変更、パッケージのインポート方法の変更など)
*   Bun v1.2.17 (`.html`ファイルのバンドル、`node:zlib`のサポート、`--unhandled-rejections`フラグのサポートなど)
*   Node.js v22.17.0 (assert.partialDeepStrictEqual()の安定化、HTTP/2 priority signalingの非推奨化など)
*   Node.js v24.3.0 (--experimental-transform-typesの警告削除、node:testでプロパティのモックをサポートなど)
*   JSON moduleがBaseline化

**書籍情報:**

*   Astro フロントエンド開発の教科書（7月7日発売予定）
*   Exploring JavaScript (ES2025 Edition)

この記事は、JSエコシステムの最新動向を把握するための情報源として活用できます。
