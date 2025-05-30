
# WhiskeySockets/Baileys

**stars**: 5591

[View Repository on Github](https://github.com/WhiskeySockets/Baileys)

Lightweight full-featured typescript/javascript WhatsApp Web API

## README要約
## Baileys: 軽量かつフル機能のWhatsApp Web API (TypeScript/JavaScript)

### 概要

Baileys は、WhatsApp Web API と対話するための WebSocket をベースとした TypeScript ライブラリです。Selenium などのブラウザを必要とせず、WebSocket を直接使用することで、リソース消費を抑えられます。マルチデバイスおよび Web 版の WhatsApp に対応しています。

### 注意事項

*   **重要な注意:** これは一時的な README であり、新しいガイドは現在開発中です。完成次第、公開されます。
*   **免責事項:** 本プロジェクトは WhatsApp またはその関連会社とは公式に提携しておらず、WhatsApp の利用規約に違反する行為を推奨していません。

### 主な特徴

*   **軽量性:** Selenium や Chromium を使用しないため、RAM の使用量を削減できます。
*   **WebSocket ベース:** WhatsApp Web API と直接対話します。
*   **マルチデバイス対応:** WhatsApp のマルチデバイスおよび Web バージョンをサポートしています。
*   **QR コードまたはペアリングコード認証:** 2 つの方法で WhatsApp アカウントを認証できます。

### インストール

安定版:

```bash
yarn add @whiskeysockets/baileys
```

エッジ版（最新の修正と機能が提供されますが、安定性の保証はありません）:

```bash
yarn add github:WhiskeySockets/Baileys
```

インポート:

```typescript
import makeWASocket from '@whiskeysockets/baileys'
```

### 使い方

[Example/example.ts](Example/example.ts) を参照して、ライブラリの基本的な使用例を確認できます。

1.  リポジトリをダウンロードまたはクローンします。
2.  ターミナルで次のコマンドを実行します。

    ```bash
    cd path/to/Baileys
    yarn
    yarn example
    ```

### ドキュメント

*   新しいガイドは現在開発中です。
*   [Discord](https://discord.gg/WeJM5FP9GG)
*   [Docs](https://guide.whiskeysockets.io/)

### 機能と使用方法

1.  **アカウント接続:**
    *   **QR コード:** 端末の WhatsApp で QR コードをスキャンして接続します。
    *   **ペアリングコード:** 電話番号を入力してペアリングコードを取得し、接続します。
    *   **履歴の受信:** `syncFullHistory: true` を設定すると、フル履歴を受信できます。
2.  **ソケット設定に関する重要な注意:**
    *   **グループメタデータのキャッシュ (推奨):** グループを使用する場合は、グループメタデータをキャッシュするように設定することをお勧めします。
    *   **再試行システムの改善と投票の復号化:** メッセージ送信の改善、エラー発生時の再試行、投票の復号化には、ストアを設定し、`getMessage` を構成する必要があります。
    *   **WhatsApp アプリでの通知の受信:** WhatsApp アプリで通知を受信するには、`markOnlineOnConnect` を `false` に設定します。
3.  **セッションの保存と復元:**
    *   認証情報を保存し、再接続時に読み込むことで、QR コードのスキャンを繰り返す必要がなくなります。
    *   `useMultiFileAuthState` 関数は、認証状態をファイルに保存するためのユーティリティ関数です。本番環境では、SQL/no-SQL データベースでの認証とキーの状態管理を強く推奨します。
4.  **イベントの処理:**
    *   Baileys は EventEmitter 構文を使用してイベントを処理します。
    *   イベントの例:
        ```typescript
        const sock = makeWASocket()
        sock.ev.on('messages.upsert', ({ messages }) => {
            console.log('got messages', messages)
        })
        ```
5.  **データストアの実装:**
    *   Baileys には、チャット、連絡先、メッセージ用のデフォルトのストレージはありませんが、インメモリの実装が提供されています。
    *   独自のデータストアを構築することを強く推奨します。
6.  **WhatsApp ID:**
    *   メッセージを送信する相手の WhatsApp ID（`jid` とも呼ばれます）。
    *   形式: `[国コード][電話番号]@s.whatsapp.net` (個人), `123456789-123345@g.us` (グループ), `[作成タイムスタンプ]@broadcast` (ブロードキャストリスト), `status@broadcast` (ステータス).
7.  **ユーティリティ関数:**
    *   `getContentType`: メッセージのコンテンツタイプを返します。
    *   `getDevice`: メッセージからデバイスを返します。
    *   `makeCacheableSignalKeyStore`: 認証ストアを高速化します。
    *   `downloadContentFromMessage`: 任意のメッセージからコンテンツをダウンロードします。
8.  **メッセージの送信:**
    *   単一の関数を使用して、すべての種類のメッセージを送信します。
    *   サポートされているメッセージコンテンツは[こちら](https://baileys.whiskeysockets.io/types/AnyMessageContent.html)を参照してください。
    *   サポートされているオプションは[こちら](https://baileys.whiskeysockets.io/types/MiscMessageGenerationOptions.html)を参照してください。
    *   **非メディアメッセージ:**
        *   テキストメッセージ
        *   引用メッセージ (すべてのタイプで動作)
        *   ユーザーのメンション (ほとんどのタイプで動作)
        *   メッセージの転送
        *   位置情報メッセージ
        *   連絡先メッセージ
        *   リアクションメッセージ
        *   ピンメッセージ
        *   投票メッセージ
    *   **リンクプレビュー付きメッセージの送信:** `link-preview-js`をインストールする必要があります。
    *   **メディアメッセージ:**
        *   GIF メッセージ (動画として送信)
        *   動画メッセージ
        *   音声メッセージ
        *   画像メッセージ
        *   ViewOnce メッセージ
9.  **メッセージの変更:**
    *   **メッセージの削除（全員向け）**
    *   **メッセージの編集**
10. **メディアメッセージの操作:**
    *   **メディアメッセージのサムネイル**
    *   **メディアメッセージのダウンロード**
    *   **WhatsApp へのメディアメッセージの再アップロード**
11. **通話の拒否**
12. **チャットの状態の送信:**
    *   **メッセージの既読**
    *   **プレゼンスの更新**
13. **チャットの変更:**
    *   **チャットのアーカイブ**
    *   **チャットのミュート/ミュート解除**
    *   **チャットの既読/未読のマーク**
    *   **自分自身のメッセージの削除**
    *   **チャットの削除**
    *   **メッセージのスター/スター解除**
    *   **消えるメッセージ**
14. **ユーザークエリ:**
    *   **WhatsApp で ID が存在するかどうかを確認**
    *   **チャット履歴のクエリ（グループも）**
    *   **ステータスの取得**
    *   **プロフィール写真の取得（グループも）**
    *   **ビジネスプロフィールの取得 (説明やカテゴリなど)**
    *   **誰かのプレゼンスの取得 (入力中かどうかなど)**
15. **プロフィールの変更:**
    *   **プロフィールステータスの変更**
    *   **プロフィール名の変更**
    *   **表示写真の変更（グループも）**
    *   **表示写真の削除（グループも）**
16. **グループ:**
    *   **グループの作成**
    *   **追加/削除または降格/昇格**
    *   **件名 (名前) の変更**
    *   **説明の変更**
    *   **設定の変更**
    *   **グループを退会**
    *   **招待コードの取得**
    *   **招待コードの無効化**
    *   **招待コードを使用した参加**
    *   **招待コードによるグループ情報の取得**
    *   **メタデータのクエリ（参加者、名前、説明...）**
    *   `groupInviteMessage` を使用した参加
    *   **参加リクエストリストの取得**
    *   **参加リクエストの承認/拒否**
    *   **すべての参加グループメタデータの取得**
    *   **一時的な切り替え**
    *   **追加モードの変更**
17. **プライバシー:**
    *   **ユーザーのブロック/ブロック解除**
    *   **プライバシー設定の取得**
    *   **ブロックリストの取得**
    *   **最終ログイン時のプライバシーの更新**
    *   **オンラインプライバシーの更新**
    *   **プロフィール写真のプライバシーの更新**
    *   **ステータスのプライバシーの更新**
    *   **既読確認のプライバシーの更新**
    *   **グループ追加のプライバシーの更新**
    *   **デフォルトの消滅モードの更新**
18. **ブロードキャストリストとステータス:**
    *   **ブロードキャストとステータスの送信**
    *   **ブロードキャストリストの受信者と名前のクエリ**
19. **カスタム機能の記述:**
    *   **Baileys ログでのデバッグレベルの有効化**
    *   **WhatsApp がどのように通信しているか**
    *   **Websocket イベントのコールバックの登録**

### ライセンス

MIT License

このプロジェクトの利用における潜在的な誤用については、作者は一切の責任を負いません。


---

# vuejs/core

**stars**: 50250

[View Repository on Github](https://github.com/vuejs/core)

🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.

## README要約
## vuejs/core リポジトリ概要

このリポジトリは、Web UI構築のためのプログレッシブで段階的に採用可能なJavaScriptフレームワークであるVue.jsのコア部分を扱っています。

**主な情報:**

*   **Vue.jsの主要機能:** UI構築を目的とした、プログレッシブで段階的に採用可能なJavaScriptフレームワークです。
*   **ドキュメント:** 公式ドキュメントである[vuejs.org](https://vuejs.org/)を参照してください。
*   **スポンサー:** Vue.jsの開発は、[backers](https://github.com/vuejs/core/blob/main/BACKERS.md)の支援によって支えられています。開発を支援したい場合は、[スポンサー](https://vuejs.org/sponsor/)を検討してください。特別スポンサーとしてAppwriteが紹介されています。
*   **質問とサポート:** 質問やサポートは、[公式フォーラム](https://forum.vuejs.org)または[コミュニティチャット](https://chat.vuejs.org)をご利用ください。このリポジトリのissueは、バグ報告と機能リクエストに限定されています。
*   **イシュー:** イシューを提出する際は、[新しいイシューヘルパー](https://new-issue.vuejs.org/)を使用し、ガイドラインに従ってください。
*   **最新情報:**
    *   [X](https://x.com/vuejs)
    *   [Bluesky](https://bsky.app/profile/vuejs.org)
    *   [Blog](https://blog.vuejs.org/)
    *   [Job Board](https://vuejobs.com/?ref=vuejs)
*   **貢献:** プルリクエストを行う前に、[コントリビューティングガイド](https://github.com/vuejs/core/blob/main/.github/contributing.md)を読んでください。Vue関連のプロジェクト/コンポーネント/ツールがある場合は、[このキュレートされたリスト](https://github.com/vuejs/awesome-vue)にプルリクエストで追加できます。
*   **ライセンス:** MITライセンスです。
*   **著作権:** 2013年からYuxi (Evan) Youが著作権を所有しています。
*   **コントリビューター:** 多くの貢献者によって支えられており、その一部がグラフィックで表示されています。

---

# anthropics/prompt-eng-interactive-tutorial

**stars**: 4716

[View Repository on Github](https://github.com/anthropics/prompt-eng-interactive-tutorial)

Anthropic's Interactive Prompt Engineering Tutorial

## README要約
## Anthropicのプロンプトエンジニアリングインタラクティブチュートリアルの概要

このリポジトリは、Anthropicが提供する、Claude（同社のLLM）で最適なプロンプトを設計するための包括的なステップバイステップのインタラクティブチュートリアルです。

**コースの目的**:

*   Claude内で最適なプロンプトを設計する方法を理解する。
*   プロンプトの基本的な構造を習得する。
*   一般的な失敗パターンを認識し、それらに対応するための「80/20」テクニックを学ぶ。
*   Claudeの強みと弱みを理解する。
*   一般的なユースケース向けに、強力なプロンプトをゼロから構築できるようになる。

**コース構造**:

このコースは、プロンプトの記述とトラブルシューティングを実践できる機会を多く提供するように構成されています。9つの章と付随する演習で構成されており、高度な方法を紹介する付録も用意されています。各章は順番に学習するように設計されています。

**各レッスンには「例プレイグラウンド」エリアがあり、**そこでレッスン内の例を自由に試して、プロンプトを変更することでClaudeの応答がどのように変化するかを確認できます。解答キーも提供されています。

**使用モデル**:

このチュートリアルでは、Anthropicの最も小さく、高速で、安価なモデルであるClaude 3 Haikuを使用しています。Anthropicには、Haikuよりもインテリジェントな2つの他のモデル（Claude 3 SonnetとClaude 3 Opus）も存在し、Opusが最もインテリジェントです。

**代替バージョン**:

このチュートリアルは、AnthropicのClaude for Sheets拡張機能を使用して[Google Sheets](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8/edit?usp=sharing)でも利用可能です。こちらの方がユーザーフレンドリーであるため、そちらの使用を推奨しています。

**目次**:

チュートリアルは、初心者、中級者、上級者の3つのレベルに分かれています。各章はレッスンと一連の演習で構成されています。

**初心者**:

*   Chapter 1: 基本的なプロンプト構造
*   Chapter 2: 明確で直接的な指示
*   Chapter 3: ロールの割り当て

**中級者**:

*   Chapter 4: 指示とデータの分離
*   Chapter 5: 出力のフォーマットとClaudeの代弁
*   Chapter 6: 予知能力（段階的な思考）
*   Chapter 7: 例の使用

**上級者**:

*   Chapter 8: ハルシネーションの回避
*   Chapter 9: 複雑なプロンプトの構築（業界ユースケース）
    *   複雑なプロンプトをゼロから - チャットボット
    *   法的サービス向けの複雑なプロンプト
    *   演習：金融サービス向けの複雑なプロンプト
    *   演習：コーディング向けの複雑なプロンプト
    *   おめでとうございます＆次のステップ

**付録**:

*   標準的なプロンプトを超えて
    *   プロンプトの連鎖
    *   ツールの使用
    *   検索と取得

学習を開始するには、`01_Basic Prompt Structure`から始めてください。


---

# livestorejs/livestore

**stars**: 1480

[View Repository on Github](https://github.com/livestorejs/livestore)

LiveStore is a next-generation state management framework based on reactive SQLite and built-in sync engine.

## README要約
## livestorejs/livestore の詳細な要約

このリポジトリは、**LiveStore**という次世代のステート管理フレームワークを提供しています。特徴は以下の通りです。

*   **リアクティブ SQLite ベース:** データの永続化にSQLiteを利用し、リアクティブな特性を備えています。つまり、データの変更にリアルタイムに反応し、UIを自動的に更新できます。
*   **組み込みの同期エンジン:** データの同期機能を内蔵しています。これにより、異なるデバイスやブラウザ間でデータの同期を容易に実現できます。

このフレームワークは、リアクティブなデータ管理とシンプルな同期を必要とするWebアプリケーション開発において、優れた選択肢となる可能性があります。

**主な利点:**

*   **永続化:** SQLiteによるデータの永続化により、データの保持とオフライン利用が可能になります。
*   **リアクティブ性:** データの変更に自動的に対応し、UIを効率的に更新できます。
*   **同期機能:** 組み込みの同期エンジンにより、データの共有と同期を容易に行えます。

**詳細については、具体的なAPIや機能、使い方などは、README.mdを参照して下さい。** READMEには、パッケージのインストール方法、基本的な使用例、高度な機能の説明などが記載されているはずです。


---

# microsoft/ai-agents-for-beginners

**stars**: 22232

[View Repository on Github](https://github.com/microsoft/ai-agents-for-beginners)

11 Lessons to Get Started Building AI Agents

## README要約
## リポジトリの要約：AI Agents for Beginners

このリポジトリは、AIエージェントの構築を始めるための11のレッスンを提供するコースです。Microsoftが提供しており、初心者向けにAIエージェントの基礎を体系的に学ぶことができます。

**主な特徴:**

*   **レッスン構成:** AIエージェントの概要、AIエージェントフレームワークの探求、設計パターン、ツール利用、RAG(Retrieval-Augmented Generation)、信頼性のあるAIエージェントの構築、プランニング、マルチエージェント、メタ認知、プロダクション環境でのAIエージェント、およびModel Context Protocol (MCP) を含む11のレッスンで構成されています。各レッスンは、テキストとコードサンプル、短いビデオ、追加学習リソースを提供しています。
*   **言語サポート:** 英語に加え、簡体字中国語、繁体字中国語（香港）、繁体字中国語（台湾）、フランス語、日本語、韓国語、ポルトガル語（ブラジル）、スペイン語、ドイツ語、ペルシア語、ポーランド語、ヒンディー語といった多言語に対応しています。
*   **技術スタック:** Azure AI Foundry、GitHub Model Catalogsを活用したコードサンプルが提供されており、Language Modelとのインタラクションを学ぶことができます。さらに、Azure AI Agent Service、Semantic Kernel、AutoGenといったMicrosoftのAIエージェントフレームワークおよびサービスを使用しています。
*   **開始方法:** リポジトリをフォークしてコードを実行できます。各レッスンには、コードサンプルと、Azure AI FoundryまたはGithub Modelsで使用するための手順が含まれています。コースのセットアップについては、[Course Setup](./00-course-setup/README.md)を参照してください。
*   **貢献:** 改善点や誤りの発見、質問などがあれば、issueの作成やプルリクエストによる貢献が歓迎されています。Azure AI Foundry Community DiscordやAzure AI Foundry Developer Forumも、質問やフィードバックの場として提供されています。
*   **関連コース:** 著者は、Generative AI、ML、Data Science、AI、Web開発、IoT、XR開発など、様々な分野の初心者向けコースも提供しています。

このコースは、AIエージェント開発の基礎を学びたい初心者にとって、実践的な知識と経験を得るための良いスタート地点となるでしょう。

