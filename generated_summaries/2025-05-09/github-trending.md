
# 78/xiaozhi-esp32

**stars**: 12639

[View Repository on Github](https://github.com/78/xiaozhi-esp32)

Build your own AI friend

## README要約
## リポジトリ「78/xiaozhi-esp32」の概要

このリポジトリは、AIフレンドを自作するためのプロジェクトです。中国語、英語、日本語に対応しており、MITライセンスの下で公開されています。

**プロジェクトの目的**

本プロジェクトは、AIハードウェア開発への入門を支援し、最新の大規模言語モデル（LLM）をハードウェアデバイスに適用する方法を学ぶことを目的としています。学生や技術に興味のある開発者など、幅広い層がAI技術を体験できるよう、学習と実践の場を提供しています。

**主な機能**

*   Wi-Fi / ML307 Cat.1 4G通信
*   BOOTボタンによる起動/中断（クリック/長押し）
*   オフライン音声起動 (ESP-SR)
*   ストリーミング音声会話（WebSocketまたはUDPプロトコル）
*   5ヶ国語音声認識 (SenseVoice: 中国語、広東語、英語、日本語、韓国語)
*   声紋認証 (3D Speaker)
*   大規模言語モデルTTS（火山引擎またはCosyVoice）
*   大規模言語モデルLLM（Qwen, DeepSeek, Doubao）
*   カスタマイズ可能なプロンプトと音声（カスタムキャラクター）
*   短期記憶（会話ごとの要約）
*   OLED / LCDディスプレイ（信号強度または会話内容表示）
*   LCDディスプレイでの画像表示
*   多言語対応（中国語、英語）

**ハードウェア**

*   ブレッドボードによる手作り実践（詳細は飛書ドキュメントを参照）
*   様々な開発ボードへの対応（立創·実戦派 ESP32-S3開発板、楽鑫 ESP32-S3-BOX3、M5Stack CoreS3など）

**ファームウェア**

*   開発環境なしで焼くことができる、すぐに使えるファームウェアを提供
*   デフォルトでxiaozhi.meの公式サーバーに接続し、個人アカウント登録でQwenリアルタイムモデルを無料利用可能
*   開発環境（CursorまたはVSCode、ESP-IDFプラグイン、Linux推奨）
*   Google C++ コードスタイルに準拠

**スマートエージェント設定**

*   xiaozhi.meのコンソールから設定可能
*   設定方法のビデオチュートリアル（旧版インターフェース）

**技術情報**

*   WebSocket通信プロトコルの詳細なドキュメント
*   個人PCでのサーバー構築について、別のMITライセンスで公開されているプロジェクト「xiaozhi-esp32-server」を参照

**その他**

*   プロジェクトへの参加を歓迎し、IssueやQQグループでの意見交換を推奨
*   開発ボードのカスタマイズ、IoT制御モジュールについてのドキュメントを提供
*   Star Historyグラフによるプロジェクトの人気の推移を表示


---

# zed-industries/zed

**stars**: 58517

[View Repository on Github](https://github.com/zed-industries/zed)

Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

## README要約
## Zed の概要（日本語）

このリポジトリは、Atom や Tree-sitter の開発者が手がけた、高パフォーマンスなマルチプレイヤー対応コードエディタ「Zed」のソースコードを公開しています。

**主な特徴:**

*   **高速性:** 思考速度でコーディングできることを目指した高性能なコードエディタです。
*   **マルチプレイヤー対応:** 複数人でリアルタイムに共同編集できる機能を備えています。

**インストール:**

*   macOS と Linux では、[https://zed.dev/download](https://zed.dev/download) から直接ダウンロードするか、ローカルのパッケージマネージャー経由でインストールできます。
*   Windows および Web 版は現在開発中で、それぞれ [https://github.com/zed-industries/zed/issues/5394](https://github.com/zed-industries/zed/issues/5394) と [https://github.com/zed-industries/zed/issues/5396](https://github.com/zed-industries/zed/issues/5396) で進捗状況が追跡されています。

**開発について:**

*   macOS、Linux、Windows でのビルド方法に関するドキュメントが提供されています。
*   ローカルでの共同作業の実行方法についても解説されています。

**コントリビュート:**

*   [CONTRIBUTING.md](./CONTRIBUTING.md) に、Zed へのコントリビュート方法が記載されています。
*   採用情報も公開されており、現在求人募集も行っています（[https://zed.dev/jobs](https://zed.dev/jobs)）。

**ライセンス:**

*   Zed は、第三者の依存関係に関するライセンス情報を適切に提供することが求められます。
*   オープンソースライセンスの準拠には、[`cargo-about`](https://github.com/EmbarkStudios/cargo-about) が利用されています。
*   CI が失敗する場合は、ライセンス関連のエラーを確認し、問題に応じて対処する必要があります。

**補足:**

*   このリポジトリは、Zed の開発者コミュニティへの参加を促し、貢献者を歓迎しています。


---

# MODSetter/SurfSense

**stars**: 3152

[View Repository on Github](https://github.com/MODSetter/SurfSense)

Open Source Alternative to NotebookLM / Perplexity / Glean, connected to external sources such as search engines (Tavily, Linkup), Slack, Linear, Notion, YouTube, GitHub and more.

## README要約
## SurfSense の概要（日本語）

SurfSense は、NotebookLM や Perplexity のような AI 研究ツールを、個人の知識ベースと統合したオープンソースの代替ツールです。検索エンジン（Tavily、LinkUp）、Slack、Linear、Notion、YouTube、GitHub などの外部ソースに接続し、高度にカスタマイズ可能な AI 研究エージェントとして機能します。

**主な機能**

*   **パーソナル知識ベースとの統合**: 自分のファイル（ドキュメント、画像、27 種類のファイル形式）をアップロードして、独自の知識ベースを構築できます。
*   **強力な検索**: 保存したコンテンツ内を迅速に検索できます。
*   **チャット機能**: 保存されたコンテンツと自然言語で対話し、引用付きの回答を得られます。
*   **引用付きの回答**: Perplexity のように、根拠となる情報を引用して回答します。
*   **プライバシーとローカルLLMのサポート**: Ollama などのローカルLLMで動作します。
*   **自己ホスト可能**: オープンソースであり、ローカル環境へのデプロイが簡単です。
*   **ポッドキャスト機能**:
    *   高速なポッドキャスト生成エージェント（約20秒で3分間のポッドキャストを作成）。
    *   チャットでの会話を魅力的な音声コンテンツに変換。
    *   複数の TTS プロバイダ（OpenAI、Azure、Google Vertex AI）をサポート。
*   **高度な RAG テクニック**:
    *   150以上のLLMをサポート
    *   6000以上のEmbeddingモデルをサポート
    *   主要なRerankerをすべてサポート（Pinecode、Cohere、Flashrankなど）
    *   階層インデックス（2段階RAG設定）を使用
    *   ハイブリッド検索（セマンティック検索と全文検索を組み合わせたReciprocal Rank Fusionを使用）
    *   RAG as a Service API バックエンド
*   **外部ソースとの連携**:
    *   検索エンジン（Tavily、LinkUp）
    *   Slack
    *   Linear
    *   Notion
    *   YouTube 動画
    *   GitHub
    *   今後さらに多くのソースに対応予定
*   **クロスブラウザ拡張機能**: ウェブページを保存するための拡張機能（認証保護されたページも保存可能）。

**インストール方法**

1.  [Docker インストール](https://www.surfsense.net/docs/docker-installation): 依存関係がすべてコンテナ化され、簡単にセットアップできます。カスタマイズの自由度は低めです。
2.  [手動インストール（推奨）](https://www.surfsense.net/docs/manual-installation): セットアップを細かく制御したい、またはカスタマイズが必要な場合に推奨されます。

**インストール前の準備**

*   PGVector の設定
*   Google OAuth の設定
*   Unstructured.io API キー
*   その他の必要な API キー

**技術スタック**

*   **バックエンド**: FastAPI、PostgreSQL with pgvector、SQLAlchemy、Alembic、FastAPI Users、LangGraph、LangChain、LiteLLMによるLLM統合、Rerankers、ハイブリッド検索、ベクター埋め込み、pgvector、Chonkie (詳細なドキュメントチャンクと埋め込みライブラリ)
*   **フロントエンド**: Next.js、React、TypeScript、Vercel AI SDK Kit UI Stream Protocol、Tailwind CSS、Shadcn、Lucide React、Framer Motion、Sonner、Geist、React Hook Form、Zod、@hookform/resolvers、@tanstack/react-table
*   **拡張機能**: Manifest v3（Plasmo）

**今後の開発予定**

*   コネクタの追加
*   軽微なバグの修正
*   Canvasの実装
*   ハイブリッド検索の完成
*   ファイルアップロードQAのサポート
*   AI SDK Stream Protocolへの移行
*   ローカルモデルとの互換性
*   クロスブラウザ拡張機能
*   重要通知
*   チャットの保存
*   保存されたセッションの基本的なキーワード検索ページ

**コントリビューション**

スターを付けることや、課題の発見や作成など、あらゆる貢献を歓迎しています。バックエンドの調整も大歓迎です。


---

# Blaizzy/mlx-audio

**stars**: 1075

[View Repository on Github](https://github.com/Blaizzy/mlx-audio)

A text-to-speech (TTS), speech-to-text (STT) and speech-to-speech (STS) library built on Apple's MLX framework, providing efficient speech analysis on Apple Silicon.

## README要約
## MLX-Audioの概要（日本語）

**MLX-Audio**は、AppleのMLXフレームワーク上に構築されたテキスト読み上げ（TTS）および音声対音声（STS）ライブラリです。Apple Silicon（Mシリーズチップ）上で効率的な音声合成を実現することを目指しています。

**主な特徴:**

*   Apple Silicon上での高速な推論処理
*   多言語対応
*   音声カスタマイズオプション
*   音声速度調整機能（0.5倍～2.0倍）
*   3D音声ビジュアライゼーションを備えたインタラクティブなWebインターフェース
*   TTS生成のためのREST API
*   パフォーマンス最適化のための量子化サポート
*   Finder/Explorerとの統合による出力ファイルへの直接アクセス

**インストール:**

```bash
pip install mlx-audio
pip install -r requirements.txt  # WebインターフェースとAPIの依存関係
```

**クイックスタート:**

```bash
# 基本的な使用法
mlx_audio.tts.generate --text "Hello, world"

# 出力ファイル名のプレフィックスを指定
mlx_audio.tts.generate --text "Hello, world" --file_prefix hello

# 音声速度を調整（0.5～2.0）
mlx_audio.tts.generate --text "Hello, world" --speed 1.4
```

**Pythonからの呼び出し:**

```python
from mlx_audio.tts.generate import generate_audio

generate_audio(
    text=("テキスト文字列"),
    model_path="モデルパス",
    voice="音声スタイル",
    speed=1.2,
    lang_code="言語コード",
    file_prefix="ファイル名のプレフィックス",
    audio_format="wav/mp3など",
    sample_rate=24000,
    join_audio=True,
    verbose=True  # 詳細出力を有効/無効
)

print("音声生成完了！")
```

**WebインターフェースとAPIサーバー:**

MLX-Audioには、音声周波数に応答する3Dビジュアライゼーションを備えたWebインターフェースが付属しています。このインターフェースでは、以下のことが可能です。

1.  さまざまな音声と速度設定でのTTS生成
2.  独自の音声ファイルのアップロードと再生
3.  インタラクティブな3Dオーブによる音声の可視化
4.  生成された音声ファイルの自動保存
5.  ローカル実行時に出力フォルダーを直接開く機能

**Webインターフェースの起動:**

```bash
mlx_audio.server  # コマンドラインから起動

# カスタムホストとポート
mlx_audio.server --host 0.0.0.0 --port 9000

# 詳細ログ出力
mlx_audio.server --verbose
```

Webブラウザで `http://127.0.0.1:8000` にアクセスしてインターフェースを利用できます。

**APIエンドポイント:**

*   `POST /tts`: TTS音声を生成
    *   `text`: テキスト（必須）
    *   `voice`: 音声 (デフォルト: "af\_heart")
    *   `speed`: 速度 (0.5～2.0, デフォルト: 1.0)
*   `GET /audio/{filename}`: 音声ファイルを取得
*   `POST /play`: 音声を再生
    *   `filename`: ファイル名（必須）
*   `POST /stop`: 音声再生を停止
*   `POST /open_output_folder`: 出力フォルダを開く (ローカル実行時のみ)

出力ファイルは、デフォルトで `~/.mlx_audio/outputs` に保存されます。

**利用可能なモデル:**

*   **Kokoro:** 多言語対応のTTSモデル
    *   サポート言語: 英語（アメリカ、イギリス）、日本語、中国語（要追加パッケージ）
*   **CSM (Conversational Speech Model):** Sesameによるモデル。参照音声を使用して音声のカスタマイズが可能。

**高度な機能:**

*   **量子化:** モデルのパフォーマンスを向上させます。

**ライセンス:**

MIT License

**謝辞:**

Apple MLXチーム、Kokoroモデルアーキテクチャ、および3DビジュアライゼーションにThree.jsを使用していることに感謝しています。


---

# harry0703/MoneyPrinterTurbo

**stars**: 27669

[View Repository on Github](https://github.com/harry0703/MoneyPrinterTurbo)

利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.

## README要約
## MoneyPrinterTurbo の詳細な要約

**MoneyPrinterTurbo** は、AI 大規模言語モデル (LLM) を利用して、キーワードまたはトピックに基づいて、高品質の短編動画を自動生成するプロジェクトです。API と WebUI の両方をサポートし、動画の企画から生成、編集までをワンストップで行うことを目指しています。

**主な特徴:**

*   **自動動画生成:** 提供されたテーマやキーワードから、動画のスクリプト、素材、字幕、BGM を自動生成し、高品質な短編動画を作成します。
*   **多様な動画フォーマット:** 縦型 (9:16、1080x1920) および横型 (16:9、1920x1080) の動画サイズをサポート。
*   **バッチ処理:** 複数の動画を一度に生成し、最も気に入ったものを選択できます。
*   **カスタマイズオプション:**
    *   動画クリップの長さを調整可能。
    *   中国語と英語のスクリプトをサポート。
    *   音声合成は、リアルタイムプレビューと複数の音声に対応。
    *   字幕のフォント、位置、色、サイズ、およびアウトラインを調整可能。
    *   BGM のランダムまたは指定、BGM 音量設定。
*   **高品質な素材:** 高品質で著作権フリーの動画素材をソースとして使用し、ローカル素材の利用も可能。
*   **LLM の統合:** OpenAI、Moonshot、Azure、gpt4free、one-api、Tongyi Qianwen、Google Gemini、Ollama、DeepSeek、Wenshi Yiyan 等の様々なモデルに対応。中国ユーザーは DeepSeek または Moonshot が推奨されています。

**今後の計画:**

*   GPT-SoVITS を使った音声合成のサポート。
*   音声合成の自然さ、感情表現の向上。
*   トランジション効果の追加。
*   素材とスクリプトの整合性の向上。
*   動画の長さを調整するオプションの追加 (短、中、長)。
*   より多くの音声合成サービスプロバイダーのサポート (OpenAI TTS など)。
*   YouTube への自動アップロード。

**提供されるデモ動画:**  縦型と横型の両方の動画サンプルが、プロジェクトの README に掲載されています。

**技術的な要件:**

*   推奨スペック: CPU 4 コア以上、RAM 8GB 以上、GPU は必須ではない
*   OS: Windows 10 以降、MacOS 11.0 以降

**導入方法:**

1.  **一括起動パッケージ (Windows):**
    *   提供されている一括起動パッケージをダウンロードし、解凍して使用できます。
    *   `update.bat` を実行して最新コードに更新し、`start.bat` を実行して起動。
    *   Chrome または Edge で WebUI を開きます。
2.  **手動デプロイ:**
    *   Git からリポジトリをクローン: `git clone https://github.com/harry0703/MoneyPrinterTurbo.git`
    *   依存関係のインストール (pdm を推奨): `pdm sync`
    *   ImageMagick のインストール（Windows の場合はスタティックライブラリ版を推奨、MacOS と Linux は brew または apt 等でインストール）。
    *   WebUI の起動: `webui.bat` (Windows) または `sh webui.sh` (MacOS/Linux)
    *   API サービスの起動: `python main.py`
    *   API ドキュメントへのアクセス: http://127.0.0.1:8080/docs または http://127.0.0.1:8080/redoc

3.  **Docker デプロイ:**
    *   Docker がインストールされていることを確認。
    *   リポジトリのルートディレクトリで `docker-compose up` を実行。
    *   WebUI に http://0.0.0.0:8501 からアクセス。
    *   API ドキュメントは http://0.0.0.0:8080/docs または http://0.0.0.0:8080/redoc

**追加情報:**

*   音声合成: プロジェクト内の `docs/voice-list.txt` に、サポートされている音声の一覧があります。Azure の音声合成 (API キーが必要) もサポートされています。
*   字幕生成:
    *   `edge` (高速、高品質) または `whisper` (低速、高信頼性) の字幕生成方式を選択可能。
    *   `whisper` モデルを使用するには、Hugging Face から `whisper-large-v3` モデルをダウンロードし、`./MoneyPrinterTurbo/models` に配置する必要があります。
*   BGM: プロジェクトの `resource/songs` ディレクトリにデフォルトの音楽ファイルが格納されています。
*   フォント: `resource/fonts` ディレクトリに字幕用のフォントファイルを配置できます。
*   よくある質問:
    *   ffmpeg 関連のエラー: ffmpeg をインストールし、設定ファイルでパスを設定する。
    *   ImageMagick のポリシー関連のエラー: policy.xml を編集して権限を設定。
    *   "Too many open files" エラー: システムのファイルオープン数制限を増加させる。
    *   Whisper モデルのダウンロードエラー: モデルファイルをマニュアルでダウンロードし、指定のディレクトリに配置。

**貢献とサポート:**

*   Issue または Pull Request を通じて、フィードバックや貢献が可能です。
*   本プロジェクトは、https://github.com/FujiwaraChoki/MoneyPrinter をベースに、多くの改善と機能追加が行われています。

