
# i-am-alice/3rd-devs

**stars**: 299

[View Repository on Github](https://github.com/i-am-alice/3rd-devs)



## README要約
## i-am-alice/3rd-devs リポジトリ詳細要約（日本語）

このリポジトリは、AI_devs 3 コースのレッスンからの例を含んでいます。これらの例は主に JavaScript / TypeScript で記述されており、Node.js と Bun を使用して実行できるバックエンドコードが含まれています。

### 前提条件

*   Node.js
*   Bun

これらのツールが最新バージョンでインストールされていることを確認してください。

### インストール

1.  リポジトリをクローン:

    ```bash
    git clone git@github.com:i-am-alice/3rd-devs.git
    cd 3rd-devs
    ```
2.  依存関係をインストール:

    ```bash
    bun install
    ```
3.  `.env.example` を `.env` にコピーし、APIキー (最初は OpenAI キーで十分) を設定します。
4.  `package.json` ファイルから利用可能な例を実行します。

### Docker によるインストール

Docker コンテナを実行できる場合は、スクリプトを使用して、すぐに使える環境を構築して実行できます。

1.  環境ファイルを保存するディレクトリで、次のコマンドを実行します。

    ```bash
    curl -fsSL https://env.ag3nts.org -o setup.sh
    bash setup.sh
    ```
2.  上記のスクリプトはシステムを何も変更しません。次の操作を実行します。
    *   リポジトリを "3rd-devs" ディレクトリにクローン (コンテナの外、現在のディレクトリ内)
    *   Dockerfile の準備
    *   "aidevs" という名前の古い Docker イメージを削除 (存在する場合)
    *   Docker イメージの構築プロセスを開始
    *   ドッカー化された環境内で必要なパッケージのインストール
3.  イメージの構築に成功したら、次のコマンドで実行できます (ポート 3000 が既に使用されている場合は、別のポートを選択してください)。

    ```bash
    docker run --rm -it -p 3000:3000 --name aidevs -v ${PWD}/3rd-devs:/app aidevs3
    ```

4.  "3rd-devs" ディレクトリ内のファイルは、任意の IDE で変更できます。コンテナ内から直接アクセスできます。
5.  コンテナ内から `.env.example` を `.env` にコピーし、必要な API キー (最初は OpenAI キーで十分) を設定します。
6.  環境の準備完了です。

### 各レッスンの内容

#### S01E01

*   **Thread:** 会話の要約メカニズムを備えた、ユーザーとアシスタント間の会話の例。
    *   サーバー起動: `bun run thread`
    *   デモのインタラクション: `curl -X POST http://localhost:3000/api/demo`
    *   チャットインタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"message": { "role": "user", "content": "Hi"}}'`
*   **Use Search:** 検索エンジンを使用する必要があるかどうかを決定するプロンプトの例。 `promptfoo` のインストールが必要（`npm install promptfoo`）。
    *   スクリプト実行: `bun use_search`
*   **Pick domains:** Web 検索クエリを生成し、適切なドメインを指定するプロンプトの例。
    *   スクリプト実行: `bun pick_domains`
*   **Rate:** モデルの回答が適切な情報を含んでいるかどうかを評価するプロンプトの例。
    *   スクリプト実行: `bun rate`
*   **Websearch:** Firecrawl を使用して Web 検索を行い、Web ページのコンテンツを取得する例。 `.env` に FIRECRAWL_API_KEY が必要。
    *   サーバー起動: `bun websearch`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Search wiki for 'John Wick'"}]}'`

#### S01E02

*   **Linear:** Linear API と連携する例。 `.env` に `LINEAR_API_KEY` と `LINEAR_WEBHOOK_SECRET` が必要。また、ngrok などを使用してローカルホストを外部からアクセス可能にする必要があり、Linear の Webhook 設定も必要。Linear のプロジェクト ID と説明を prompt に合わせて修正する必要がある。
    *   サーバー起動: `bun linear`
    *   プロジェクトリスト取得: `curl http://localhost:3000/api/linear/projects`
*   **Files:** 会話のコンテキストに基づいて情報を保存する例。 Obsidian で開くことができる `files/context` ディレクトリにファイルが保存される。
    *   サーバー起動: `bun files`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hey there, what\'s up?"}], "conversation_id": "d7582176-bc52-4ef3-980a-047b868f9f49"}'`

#### S01E03

*   **Langfuse:** Langfuse と連携する例。 `.env` に `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_HOST` が必要。Langfuse で `Answer` という名前の prompt を作成する必要がある。
    *   サーバー起動: `bun langfuse`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hey there, what\'s up?"}]}'`
*   **Tiktokenizer:** OpenAI モデルへのリクエストのトークン数をカウントする例。
    *   サーバー起動: `bun tiktokenizer`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hey there, what\'s up?"}], "model": "gpt-4o"}'`
*   **Max tokens:** 最大出力トークン数に達した場合でもモデルの応答を継続させる例。
    *   サーバー起動: `bun max_tokens`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Write ten sentences about apples and put them in order."}]}'`
*   **Constitution:** 特定の条件を満たさないリクエストをブロックする例。
    *   サーバー起動: `bun constitution`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello!"}]}'`

#### S01E04

*   **Memory:** モデルの長期記憶を実装する例。 `.env` は不要。Markdown ファイルが `memories` ディレクトリに保存される。
    *   サーバー起動: `bun memory`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello!"}]}'`

#### S01E05

*   **External:** API キーを `Authorization` ヘッダーで渡す例。`.env` の `PERSONAL_API_KEY` を使用。リクエスト数の制限あり。
    *   サーバー起動: `bun external`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello!"}]}'`
*   **Prompts:** Langfuse と連携する例。 `.env` に `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_HOST` が必要。Langfuse で `Answer` prompt を作成する必要がある。
    *   サーバー起動: `bun prompts`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello!"}]}'`
*   **Database:** 会話履歴などの情報をデータベースに整理する例。
    *   サーバー起動: `bun database`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello!"}]}'`
*   **Qdrant:** Qdrant ベクトルデータベースとの基本的な接続例。Langfuse で `Answer` prompt を作成する必要がある。
    *   サーバー起動: `bun qdrant`
    *   インタラクション: `curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello!"}]}'`

#### S02E01

*   **Audio:** フロントエンド (`audio-frontend`) とバックエンド (`audio-backend`) の両方を実行する必要がある例。
    *   フロントエンド起動: `bun audio:dev`
    *   バックエンド起動: `bun audio`
    *   インタラクション: ブラウザで http://localhost:5173 を開く

#### S02E02

*   **Vision:**
    *   コード実行: `bun vision`
    *   コード実行: `bun recognize`
    *   **Recognize-Pixtral:** `.env` に `MISTRAL_API_KEY` が必要。
        *   コード実行: `bun recognize_pixtral`

#### S02E04

*   **Captions:**
    *   コード実行: `bun captions`
    *   インタラクション: `captions/article.md` で実行
*   **Summary:**
    *   コード実行: `bun summary`
    *   インタラクション: `summary/article.md` で実行
*   **Video:** `.env` に `GOOGLE_AI_STUDIO_API_KEY` が必要。
    *   コード実行: `bun video`
    *   インタラクション: `video/test.mp3` で実行
*   **Narration:** `.env` に `GOOGLE_AI_STUDIO_API_KEY` と `ELEVEN_LABS_API_KEY` が必要。ElevenLabs のクレジットを消費するため、コードを実行せずにサンプル音声ファイルを再生することも可能。
    *   コード実行: `bun narration`
    *   インタラクション: `narration/app.ts` 内のメッセージで実行

#### S02E05

*   **Read:**
    *   コード実行: `bun read`
    *   インタラクション: `read/article.md` で実行し、`read/summary.wav` を生成
*   **Mindmap:** フロントエンド (`audio-map-frontend`) とバックエンド (`audio-map`) の両方を実行する必要がある例。
    *   フロントエンド起動: `bun map:dev`
    *   バックエンド起動: `bun audio-map`
    *   インタラクション: ブラウザで http://localhost:5173 を開く
*   **Notes:**
    *   コード実行: `bun notes`
    *   インタラクション: `notes/app.ts` でのメッセージで実行

#### S03E01

*   **Text Splitter:**
    *   コード実行: `bun text-splitter`
    *   インタラクション: `text-splitter` ディレクトリ内の markdown ファイルで実行
*   **Unstructured:**
    *   コード実行: `bun unstructured`
    *   インタラクション: `unstructured` ディレクトリ内の `source.md` で実行

#### S03E02

*   **Embedding:** `.env` に `QDRANT_URL` と `QDRANT_API_KEY` が必要。
    *   コード実行: `bun embedding`
    *   インタラクション: `embedding/app.ts` 内のデータで実行
*   **Rerank:**
    *   コード実行: `bun rerank`
    *   インタラクション: `rerank/app.ts` 内のデータで実行
*   **Naive RAG:**
    *   コード実行: `bun naive-rag`
    *   インタラクション: `naive-rag/app.ts` 内のデータで実行
*   **Better RAG:**
    *   コード実行: `bun better-rag`
    *   インタラクション: `better-rag/app.ts` 内のデータで実行
*   **Semantic:**
    *   コード実行: `bun semantic`
    *   インタラクション: `semantic/app.ts` 内のデータで実行

#### S03E03

*   **Algolia:** `.env` に `ALGOLIA_APP_ID` と `ALGOLIA_API_KEY` が必要。 Algolia でインデックスを作成し、Facet `author` を追加する必要がある。
    *   コード実行: `bun algolia`
    *   インタラクション: `algolia/app.ts` 内のデータで実行
*   **Sync:** `.env` に `ALGOLIA_APP_ID` と `ALGOLIA_API_KEY` が必要。 Algolia の無料アカウントが必要。Algolia で `text` フィールドを `searchableAttributes` として設定する必要がある。
    *   コード実行: `bun sync`
    *   インタラクション: `sync/app.ts` 内のデータで実行
*   **Hybrid:** `.env` に `QDRANT_URL`、`QDRANT_API_KEY`、`ALGOLIA_APP_ID`、`ALGOLIA_API_KEY` が必要。`sync` のように Algolia と接続する必要がある。
    *   コード実行: `bun hybrid`
    *   インタラクション: `hybrid/app.ts` 内のデータで実行

#### S03E05

Neo4j データベースへの接続が必要。ローカルにインストールし、`.env` に `NEO4J_URI`, `NEO4J_USER`, `NEO4J_PASSWORD` を設定。

*   **Neo4j-101:**
    *   コード実行: `bun neo4j-101`
    *   インタラクション: `neo4j-101/app.ts` 内のデータで実行
*   **Neo4j:**
    *   コード実行: `bun neo4j`
    *   インタラクション: `neo4j/app.ts` 内のデータで実行


---

# lobehub/lobe-chat

**stars**: 60520

[View Repository on Github](https://github.com/lobehub/lobe-chat)

🤯 Lobe Chat - an open-source, modern-design AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / DeepSeek / Qwen), Knowledge Base (file upload / knowledge management / RAG ), Multi-Modals (Plugins/Artifacts) and Thinking. One-click FREE deployment of your private ChatGPT/ Claude / DeepSeek application.

## README要約
## Lobe Chat - 詳細な要約（日本語）

Lobe Chat は、オープンソースでモダンなデザインの AI チャットフレームワークです。主な特徴は以下の通りです。

**概要**

*   **多機能**: OpenAI、Claude 3、Gemini、Ollama、DeepSeek、Qwen などの複数の AI プロバイダーをサポート。ファイルアップロード、知識ベース管理、RAG (Retrieval-Augmented Generation) などの知識ベース機能、プラグインやアーティファクトなどのマルチモーダル対応、および思考プロセスの可視化機能を備えています。
*   **簡単デプロイ**: ワンクリックで、プライベートな ChatGPT/Claude/DeepSeek アプリケーションを無料でデプロイできます。

**主な機能**

1.  **思考の連鎖 (Chain of Thought)**: AI の推論プロセスをステップバイステップで可視化し、AI がどのように結論に至るかをリアルタイムで確認できます。
2.  **会話の分岐 (Branching Conversations)**: 会話の流れを複数の方向に展開でき、柔軟な会話が可能です。既存のメッセージから新しい会話を分岐させ、コンテキストを保持しながら異なるトピックを探索できます。
3.  **アーティファクトのサポート**: Claude Artifacts に対応し、SVG グラフィックスの生成と表示、インタラクティブな HTML ページの構築、様々な形式のドキュメント作成など、多様なコンテンツ形式のリアルタイムな作成と可視化を可能にします。
4.  **ファイルアップロード/知識ベース**: ドキュメント、画像、音声、動画などの様々なファイルをアップロードし、知識ベースを作成できます。会話中にファイルや知識ベースを利用し、より豊かな対話を実現します。
5.  **マルチモデルサービスプロバイダーのサポート**: OpenAI、Ollama、Anthropic、Bedrock、Google、DeepSeek、PPIO、HuggingFace、OpenRouter、Cloudflare Workers AI など、40以上のモデルプロバイダーをサポートし、多様な会話ニーズに対応します。
6.  **ローカル LLM (大規模言語モデル) のサポート**: Ollama を利用したローカルモデルの使用をサポートしており、ユーザーは独自のモデルやサードパーティのモデルを柔軟に利用できます。
7.  **モデルの視覚認識**: OpenAI の gpt-4-vision モデルに対応し、画像をアップロードまたはドラッグ＆ドロップすることで、エージェントが画像のコンテンツを認識し、インテリジェントな会話を可能にします。
8.  **TTS & STT 音声会話**: Text-to-Speech (TTS) と Speech-to-Text (STT) 技術をサポートし、テキストメッセージを音声に変換できます。さまざまな音声オプションが用意されており、パーソナライズされたコミュニケーション体験を提供します。
9.  **テキストから画像生成**: DALL-E 3、MidJourney、Pollinations などの AI ツールを利用して、会話内で直接画像を作成できます。
10. **プラグインシステム (Function Calling)**: ウェブ検索、画像生成、Bilibili や Steam などのプラットフォームからのデータ取得など、様々な機能拡張を可能にするプラグインをサポートしています。
11. **エージェントマーケット (GPTs)**: 488以上のエージェントが利用可能なマーケットプレイスを提供しています。ユーザーは、さまざまなエージェントを発見し、自身の作品を投稿して共有できます。
12. **ローカル/リモートデータベースのサポート**: サーバーサイドデータベース (PostgreSQL) とローカルデータベースの両方をサポートしており、データ管理とプライバシー保護に関する様々なニーズに対応します。
13. **マルチユーザー管理のサポート**: next-auth、Clerk を利用した、様々な認証方法や、多要素認証、ユーザープロファイル管理などの高度なユーザー管理機能をサポートしています。
14. **PWA (Progressive Web App)**: デスクトップとモバイルデバイスの両方でネイティブアプリのような体験を提供する PWA 技術を採用しています。
15. **モバイルデバイスへの適応**: モバイルデバイス向けに最適化されたデザインと操作性を実現しています。
16. **カスタムテーマ**: ライト/ダークモード、カラーカスタマイズなど、ユーザーの好みに合わせたテーマ設定が可能です。

**パフォーマンス**

*   デスクトップとモバイルデバイスの両方で、高いパフォーマンスを発揮します。

**セルフホスティング**

*   Vercel、Zeabur、Alibaba Cloud、Docker Image を利用して、数分で独自のチャットボットをデプロイできます。

**エコシステム**

*   Lobe UI、Lobe Icons、Lobe TTS、Lobe Lint などの関連プロジェクトがあります。

**プラグイン**

*   プラグインシステムにより、LobeChat の機能を拡張できます。
*   [lobe-chat-plugins](https://github.com/lobehub/lobe-chat-plugins) は、LobeChat 用のプラグインインデックスで、利用可能なプラグインを表示します。
*   [chat-plugin-template](https://github.com/lobehub/chat-plugin-template) は、LobeChat プラグイン開発用のテンプレートです。
*   [@lobehub/chat-plugin-sdk](https://github.com/lobehub/chat-plugin-sdk) は、LobeChat プラグインの作成を支援する SDK です。
*   [@lobehub/chat-plugins-gateway](https://github.com/lobehub/chat-plugins-gateway) は、LobeChat プラグイン用のバックエンドサービスです。

**ローカル開発**

*   GitHub Codespaces またはローカル環境で開発できます。

**コントリビューション**

*   コードコントリビューションを歓迎しており、GitHub の Issues や Projects から参加できます。

**スポンサー**

*   プロジェクトへの支援を受け付けています。

**関連製品**

*   Lobe SD Theme、Lobe Midjourney WebUI、Lobe i18n、Lobe Commit など、他の関連プロジェクトも公開しています。

**ライセンス**

*   Apache 2.0 ライセンスで公開されています。


---

# Lightricks/ComfyUI-LTXVideo

**stars**: 1625

[View Repository on Github](https://github.com/Lightricks/ComfyUI-LTXVideo)

LTX-Video Support for ComfyUI

## README要約
## ComfyUI-LTXVideo リポジトリ概要（日本語）

このリポジトリは、Lightricksが開発したLTXV（LTX-Video）モデルをComfyUIで利用するためのカスタムノード群を提供しています。ComfyUIのコアコードはLTXVモデルを既にサポートしていますが、このリポジトリは、LTXVモデルをより有効に活用するためのツールを提供することに焦点を当てています。

**主な特徴とアップデート:**

*   **LTXVモデルのサポート:**  LTXVモデルの最新バージョン（LTXV 13B 0.9.7、LTXV 0.9.6、LTXV 0.9.5、LTX-Video-2b-v0.9.1など）をサポートし、それぞれ異なる特徴と最適化を提供しています。
*   **高速化と高品質化:**  Quantizedモデル（LTXV 13B Quantized 0.9.7）により、消費電力の少ないGPUでも高速な推論が可能になり、高品質な動画生成を実現します。
*   **Latent Upscaling:**  Latentテンソルをデコード/エンコードせずにアップスケーリングできるモデル（ltxv-spatial-upscaler-0.9.7.safetensors, ltxv-temporal-upscaler-0.9.7.safetensors）を提供し、マルチスケール推論による高速かつ高品質な結果を可能にします。
*   **高度なノードとワークフロー:**
    *   **STGGuiderAdvanced:**  異なるCFG（Classifier-Free Guidance）とSTG（Spatial-Temporal Guidance）パラメータを拡散ステップごとに適用し、最適な品質を実現します。
    *   **Frame Conditioning:**  指定されたフレーム間の補間を可能にします。
    *   **Sequence Conditioning:**  与えられたフレームシーケンスからのモーション補間を可能にし、ビデオの拡張（最初、最後、中間からの）を実現します。
    *   **Prompt Enhancer:**  最適なモデルパフォーマンスのために最適化されたプロンプト生成を支援します。
*   **LTXTricksの統合:**  LTXTricksのコードがこのリポジトリに統合され、元のリポジトリのワークフローも引き続き動作します。
*   **商用利用ライセンスの提供:** LTXVideoモデルは商用利用が可能になりました。
*   **Example Workflows (例):**
    *   Image to Video（ベース、キーフレーム、拡張）
    *   Image to Video 8b Quantized
    *   Inversion（Flow Edit, RF Edit）

**インストール:**

*   **ComfyUI-Managerを使用:**  推奨されるインストール方法で、`ComfyUI-LTXVideo`を検索してインストールします。
*   **手動インストール:**
    1.  ComfyUIをインストールします。
    2.  このリポジトリをComfyUIの`custom-nodes`フォルダにクローンします。
    3.  必要なパッケージをインストールします ( `pip install -r requirements.txt` )。
*   **モデルのインストール:**
    1.  Hugging FaceからLTXVモデル（例: `ltx-video-2b-v0.9.1.safetensors`）をダウンロードし、`models/checkpoints`フォルダに配置します。
    2.  `google_t5-v1_1-xxl_encoderonly` などのT5テキストエンコーダをインストールします。

**利用方法:**

*   **Example Workflows:** リポジトリには、様々な使用例のワークフローが用意されており、これらを参考にすることで、LTXVモデルの機能を簡単に試すことができます。これらのワークフローを利用するには、`ComfyUI-VideoHelperSuite` などの追加のカスタムノードが必要になる場合があります。
*   **Quantizedモデル:**  Quantizedモデルを使用するには、[LTXVideo-Q8-Kernels](https://github.com/Lightricks/LTXVideo-Q8-Kernels)パッケージをインストールする必要があります。LoadCheckpointノードによるモデルの読み込みはできません。
*   **Latent Upscaling:**  Latent Upscalingモデルを使用するには、`models/upscale_models`フォルダにSpatial/Temporal upscalerモデルを配置する必要があります。

**補足:**

*   このリポジトリはLTXVモデルのComfyUI統合を容易にし、その機能を最大限に引き出すためのツールを提供しています。
*   提供されているExample Workflowsは、LTXVモデルの様々な機能（Image to Video、Frame Conditioning、Sequence Conditioningなど）を理解し、活用するための優れた出発点となります。
*   Quantizedモデルの利用や、Latent Upscalingモデルの使用には、それぞれ特別な手順が必要です。


---

# iptv-org/iptv

**stars**: 93390

[View Repository on Github](https://github.com/iptv-org/iptv)

Collection of publicly available IPTV channels from all over the world

## README要約
## IPTV-org/iptv リポジトリの要約

このリポジトリは、世界中の公開されているIPTV（インターネットプロトコルテレビ）チャンネルのコレクションを提供しています。

**主な特徴:**

*   **豊富なチャンネルリスト:** 世界中の様々なチャンネルへのリンクを網羅しています。
*   **様々なプレイリスト:**
    *   **メインプレイリスト:** 全チャンネルをまとめたリスト
    *   **カテゴリ別プレイリスト:** アニメ、スポーツ、ニュースなど、チャンネルをカテゴリ別に分類
    *   **言語別プレイリスト:** チャンネルを放送言語別に分類
    *   **国別プレイリスト:** チャンネルを放送対象国別に分類
    *   **地域別プレイリスト:** チャンネルを地域別に分類
*   **簡単な利用方法:** プレイリストのURLを対応するビデオプレイヤーで開くだけで視聴できます。
*   **EPG (電子番組表):** チャンネルのほとんどにEPGが提供されています (iptv-org/epg リポジトリを参照)。
*   **データソース:** チャンネルデータは iptv-org/database リポジトリから取得されています。
*   **API:** APIドキュメントは iptv-org/api リポジトリにあります。
*   **その他のリソース:** IPTV関連の他の役立つリソースへのリンクは iptv-org/awesome-iptv リポジトリにあります。
*   **コミュニティ:** ディスカッションフォーラムが提供されており、チャンネルに関する質問やアイデアを共有できます。
*   **FAQ:** よくある質問への回答が FAQ.md ファイルにまとめられています。
*   **貢献:** 貢献方法については CONTRIBUTING.md を参照してください。
*   **法的情報:** このリポジトリには動画ファイルは一切保存されていません。ユーザーが提出した、公開されている動画ストリームURLへのリンクのみが含まれています。著作権侵害に関する問題がある場合は、プルリクエストまたはイシューを通じて削除を依頼できます。

**その他:**

*   NSFW（18歳以上向け）チャンネルの配信は2024年1月30日に停止されました。
*   GitHub Actions を使用してプレイリストが定期的に更新されています。
*   CC0ライセンスで公開されています。

---

# bytedance/UI-TARS-desktop

**stars**: 13576

[View Repository on Github](https://github.com/bytedance/UI-TARS-desktop)

A GUI Agent application based on UI-TARS(Vision-Language Model) that allows you to control your computer using natural language.

## README要約
## UI-TARS Desktop の詳細な要約（日本語）

**概要:**

UI-TARS Desktop は、自然言語を使ってコンピュータを操作できる GUI エージェントアプリケーションです。UI-TARS (Vision-Language Model) を基盤としており、ユーザーはテキストで指示を与えることで、マウス操作、キーボード操作、ブラウザ操作など、様々な機能を実行できます。

**主な特徴:**

*   **自然言語制御:** Vision-Language Model を利用し、自然な言葉でコンピュータを操作できます。
*   **視覚認識:** スクリーンショットと視覚認識機能をサポートしています。
*   **正確な操作:** マウスとキーボードの正確な制御が可能です。
*   **クロスプラットフォーム:** Windows、MacOS、ブラウザなど、様々なプラットフォームで動作します。
*   **リアルタイムフィードバック:** 実行状況をリアルタイムで表示します。
*   **プライベートで安全:** すべてローカルで処理されるため、プライバシーとセキュリティが確保されています。

**最新情報:**

*   **2025-04-17:** 新しいUIがデザインされた UI-TARS Desktop アプリケーション v0.1.0 がリリースされました。ブラウザ操作機能が追加され、UI-TARS-1.5 モデルに対応し、パフォーマンスと制御精度が向上しました。
*   **2025-02-20:** GUI 自動化エージェント構築のためのクロスプラットフォームツールキットである [UI TARS SDK](./docs/sdk.md) が導入されました。
*   **2025-01-23:** ModelScope プラットフォームに関する新しい情報を含む「Cloud Deployment」セクションが更新されました。ModelScope プラットフォームを使用してデプロイできるようになりました。

**デモ:**

*   VS Code で自動保存機能を有効にし、AutoSave の遅延を 500 ミリ秒に設定する。
*   GitHub で UI-TARS-Desktop プロジェクトの最新の未解決の問題を確認する。

**関連情報:**

*   [論文](https://arxiv.org/abs/2501.12326)
*   [Hugging Face モデル](https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B)
*   [Discord コミュニティ](https://discord.gg/pTXwYVjfcs)
*   [ModelScope](https://www.modelscope.cn/collections/UI-TARS-bccb56fa1ef640)
*   [Midscene (ブラウザで使用)](https://github.com/web-infra-dev/midscene)
*   [DeepWiki](https://deepwiki.com/bytedance/UI-TARS-desktop)
*   [Agent TARS (技術プレビュー版)](./apps/agent-tars/README.md)

**その他:**

*   [クイックスタート](./docs/quick-start.md) で始められます。
*   [デプロイメント](https://github.com/bytedance/UI-TARS/blob/main/README_deploy.md) については、こちらを参照してください。
*   コントリビュートについては [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。
*   SDK (実験的) については [@ui-tars/sdk](./docs/sdk.md) を参照してください。
*   ライセンスは Apache License 2.0 です。
*   研究に役立つ場合は、スターと引用を推奨しています。
