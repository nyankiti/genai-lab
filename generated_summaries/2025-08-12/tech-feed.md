# v0.dev -> v0.app - Vercel

[View on Vercel Blog](https://vercel.com/blog/v0-app)

## v0.dev が v0.app に進化 - Vercel

**要約:**

Vercel が提供するAIビルダーであるv0.devが、v0.appへと進化しました。v0.appは、単一のプロンプトで、UI、コンテンツ、バックエンド、ロジックを含む完全なアプリを構築できます。v0.appは、思考、計画、構築を自律的に行う「エージェントAI」を搭載し、より洗練されたアプリ開発を実現します。

**主な特徴と利点:**

*   **エージェントAI:** 試行錯誤のプロンプトを越え、ユーザーが望むものを説明するだけで、AIが適切な手順を理解し、過去の構築内容を記憶し、アプリのあらゆる側面における複雑さを処理しながら、安全に構築します。
*   **自動化された機能:** エラーの検出、実装の比較、デザインのインスピレーション生成、ウェブ検索、作業計画の作成、ファイルの読み込み、ウェブサイトの検査、タスク管理、統合の実現など、様々な機能を自動で実行します。
*   **幅広い活用例:** 創業者による投資家向けプレゼンテーション資料の作成から、プロダクトマネージャーによるユーザーストーリーからの完全な機能を持つアプリの構築、営業チームによる顧客セグメントに合わせたデモ環境のカスタマイズまで、様々な用途で利用できます。
*   **簡素化された開発プロセス:** v0.dev では修正や機能追加のために繰り返しプロンプトを入力する必要がありましたが、v0.app ではエージェントAIが自動的に計画、調整、改善を行うため、より少ないプロンプトで目的を達成できます。

**まとめ:**

v0.appは、技術的な知識に関わらず、誰でもアイデアをフルスタックアプリに変えることができる革新的なツールです。Vercel は、v0.app を通じて、ソフトウェア開発のあり方を変革し、誰もがアイデアを形にできる世界を目指しています。 v0.app は無料で試すことができます。

---
# Introduction to Netty-socketio | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923088113/0/baeldung~Introduction-to-Nettysocketio)

## Netty-socketio 入門：要約

このブログ記事では、Netty-socketioライブラリについて解説しています。Netty-socketioは、Nettyネットワークサーバーを利用してSocket.IO接続を処理するJavaライブラリです。これにより、Webアプリケーションとの双方向通信を可能にするSocket.IOサービスを構築できます。

**1. Socket.IOとは？**

Socket.IOは、ブラウザとバックエンドサーバー間の低遅延、双方向、イベントベースの通信を可能にするJavaScriptライブラリです。通常はWebSocketsを使用しますが、WebTransport APIやHTTP long-pollingにも対応しています。Socket.IOは、基盤となるトランスポートを抽象化し、メッセージの順序保証や、不安定なネットワーク接続でもメッセージ配信を試みるなどの機能を提供します。サーバー側では、各接続に一意のIDを割り当て、名前付きイベントの送受信、およびルームによるイベントのグループ化をサポートしています。

**2. Netty-socketioのセットアップ**

Netty-socketioを使用するには、Mavenで依存関係を追加し、Socket.IOトラフィック用のネットワークサーバーを作成する必要があります。

*   **依存関係:** `com.corundumstudio.socketio:netty-socketio:2.0.13`
*   **サーバー構成:** ホスト名とポートを設定します。
*   **サーバー起動:** `SocketIOServer.start()` でサーバーを起動します。

**3. クライアントとの接続**

Socket.IOクライアントは、CDNからライブラリを読み込み、サーバーに接続します。JavaScriptコードの例:

```javascript
const socket = io("ws://localhost:8081");
```

**4. イベントの処理**

接続、切断イベントのリスナーを登録し、クライアントからのイベントを処理できます。

*   **接続/切断リスナー:** `server.addConnectListener()`、`server.addDisconnectListener()`
*   **イベントリスナー:** `server.addEventListener("message", String.class, (client, message, request) -> { ... });`

**5. メッセージの送信**

クライアントにメッセージを送信するには、`SocketIOClient`インスタンスの`sendEvent()`メソッドを使用します。

```java
client.sendEvent("message", payload);
```

**6. ルーム**

ルームは、複数のクライアントをグループ化するための機能です。

*   **ルームへの参加:** `client.joinRoom("testroom");`
*   **ルームからの退出:** `client.leaveRoom("testroom");`
*   **ルームへのイベント送信:** `server.getRoomOperations("testroom").sendEvent("message", "Hello, Room!");`

**7. デモンストレーション**

記事では、シンプルなチャットルームアプリケーションの例を示しています。接続時にルームに参加し、メッセージを他のクライアントにブロードキャストする機能が実装されています。

**8. まとめ**

Netty-socketioは、Socket.IOサーバーを構築するための強力なフレームワークです。記事では、その基本的な使い方を紹介しました。詳細な例はGitHubで公開されています。

---
# Using Oracle Vector Database With Spring AI | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923088116/0/baeldung~Using-Oracle-Vector-Database-With-Spring-AI)

## Baeldung: Spring AI で Oracle ベクトルデータベースを使用する方法

このチュートリアル記事では、Spring AI を使用して Oracle ベクトルデータベースと統合する方法について解説しています。

**主な内容:**

1.  **概要:**
    *   従来のキーワードベースの検索方法では、意味や文脈を理解することが難しいため、ベクトルデータベースの利用が重要となる。
    *   Oracle Database 23ai はベクトルストア機能を統合し、従来の構造化データ管理とベクトル類似検索を同時に実現できる。
    *   本記事では、Oracle ベクトルデータベースと Spring AI を統合し、類似検索の実装、Retrieval-Augmented Generation (RAG) チャットボットの構築について解説する。

2.  **プロジェクトのセットアップ:**
    *   Spring AI の依存関係を追加。
    *   `spring-ai-starter-vector-store-oracle`、`spring-ai-advisors-vector-store`、`spring-ai-starter-model-openai` などの依存関係を使用。
    *   Spring AI Bill of Materials (BOM) を使用して、依存関係のバージョン競合を回避。
    *   OpenAI API キーとモデルを `application.yaml` で設定。
    *   `spring.ai.vectorstore.oracle.initialize-schema` を `true` に設定すると、アプリケーション起動時にスキーマが自動的に作成される (本番環境ではデータベース移行ツールを使用)。

3.  **Oracle ベクトルデータベースへのデータ投入:**
    *   Breaking Bad Quotes API から引用を取得する `QuoteFetcher` ユーティリティクラスを作成。
    *   `VectorStoreInitializer` クラスを作成し、`ApplicationRunner` インターフェースを実装。
    *   起動時に `QuoteFetcher` を使用して引用を取得し、`Document` に変換して `vectorStore.add()` でデータベースに保存。

4.  **ローカルテスト環境のセットアップ (Testcontainers):**
    *   Testcontainers を使用して Oracle ベクトルデータベースの Docker インスタンスを起動。
    *   `spring-ai-spring-boot-testcontainers` と `oracle-free` の依存関係を追加。
    *   `TestcontainersConfiguration` クラスで、`OracleContainer` を `@ServiceConnection` で定義。
    *   テストクラスで `@Import(TestcontainersConfiguration.class)` を使用して、ローカルテスト環境を構築。

5.  **類似検索の実行:**
    *   基本的な類似検索の実装: Breaking Bad のテーマに基づいて関連する引用を検索。
    *   `SearchRequest` を使用して検索クエリと検索結果数を設定。
    *   `vectorStore.similaritySearch()` メソッドで類似検索を実行。
    *   メタデータによるフィルタリング: 特定の著者とテーマに基づいて引用を検索。

6.  **RAG チャットボットの構築:**
    *   カスタムプロンプトテンプレートの定義: チャットボットのペルソナとガイドラインを定義。
    *   `ChatClient` ビーンの設定: チャットコンプリーションモデルとのインタラクションのエントリポイント。
    *   `PromptTemplate` ビーンを設定し、`StTemplateRenderer` でデリミタを設定。
    *   `QuestionAnswerAdvisor` を使用して RAG パターンを実装。
    *   チャットボットとの対話: 自然言語の質問に対する回答を取得。

7.  **結論:**
    *   Oracle ベクトルデータベースと Spring AI の統合方法を解説。
    *   類似検索と RAG の実装について説明。
    *   Testcontainers を使用したローカルテスト環境の構築。
    *   Breaking Bad の引用 API を使用したデータ投入。
    *   GitHub でコード例を公開。
