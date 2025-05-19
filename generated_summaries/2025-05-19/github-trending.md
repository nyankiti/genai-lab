
# th-ch/youtube-music

**stars**: 20578

[View Repository on Github](https://github.com/th-ch/youtube-music)

YouTube Music Desktop App bundled with custom plugins (and built-in ad blocker / downloader)

## README要約
## YouTube Music Desktop App の要約

**概要:**

「YouTube Music Desktop App」は、YouTube Music をデスクトップアプリケーションとして利用できる Electron ラッパーです。カスタムプラグインに対応しており、広告ブロック、ダウンロード機能など、さまざまな機能を追加できます。

**主な機能:**

*   **ネイティブなルック＆フィール:** 元のインターフェースを保持することを目指しています。
*   **カスタムプラグインのフレームワーク:** スタイル、コンテンツ、機能など、YouTube Music をユーザーのニーズに合わせて変更できます。プラグインはワンクリックで有効/無効を切り替えられます。
*   **広告ブロック:** 広告をブロックします。
*   **ダウンロード機能:** MP3 ファイルをインターフェースから直接ダウンロードできます。
*   **その他:** アルバムカラーテーマ、アンビエントモード、Discord Rich Presence連携、イコライザー、歌詞表示、通知機能、再生速度調整、スキップ機能など、様々なプラグインが利用可能です。

**プラグイン一覧:**

*   広告ブロッカー
*   アルバムアクション (いいね、嫌い、削除など)
*   アルバムカラーテーマ
*   アンビエントモード
*   オーディオコンプレッサー
*   ナビゲーションバーのぼかし
*   年齢制限のバイパス
*   キャプションセレクター
*   コンパクトサイドバー
*   クロスフェード
*   自動再生の無効化
*   Discord Rich Presence
*   ダウンローダー
*   イコライザー
*   指数ボリューム
*   In-App メニュー
*   Scrobbler (Last.fm, ListenBrainz)
*   Lumia Stream
*   歌詞 Genius
*   Music Together
*   ナビゲーション
*   Googleログインの無効化
*   通知
*   ピクチャーインピクチャー
*   再生速度
*   正確な音量
*   ショートカット＆MPRIS
*   嫌いな曲のスキップ
*   無音部分のスキップ
*   SponsorBlock
*   同期歌詞
*   タスクバーメディアコントロール
*   TouchBar
*   Tuna OBS
*   動画品質チェンジャー
*   動画切り替え
*   ビジュアライザー

**インストール:**

*   **Arch Linux:** AUR から `youtube-music-bin` パッケージをインストールします。
*   **macOS:** Homebrew で `brew install th-ch/youtube-music/youtube-music` を実行します。
*   **Windows:** Scoop で `scoop install extras/youtube-music` を実行するか、Winget で `winget install th-ch.YouTubeMusic` を実行します。オフラインでのインストールも可能です。

**開発:**

*   `pnpm install --frozen-lockfile` で依存関係をインストールし、`pnpm dev` で開発を開始します。
*   カスタムプラグインを作成できます。
*   プラグインは、HTML/CSS の変更や、フロントエンドとバックエンド間の通信が可能です。

**ビルド:**

*   `pnpm build:OS` コマンドを使用します。 (例: `pnpm dist:win`、`pnpm dist:mac`)

**テスト:**

*   Playwright を使用してテストを実行できます。

**ライセンス:**

*   MIT

**FAQ:**

*   メニューが表示されない場合は、In-App メニュープラグイン使用時は `alt`キーまたは\` キーで表示できます。


---

# yt-dlp/yt-dlp

**stars**: 112312

[View Repository on Github](https://github.com/yt-dlp/yt-dlp)

A feature-rich command-line audio/video downloader

## README要約
## yt-dlpの要約（日本語）

**yt-dlp** は、多機能なコマンドラインのオーディオ/ビデオダウンローダーです。様々なウェブサイト（[サポートされているサイト](supportedsites.md)を参照）に対応しており、youtube-dlc をベースに開発された youtube-dl のフォーク版です。

### 主な特徴

*   **多様なサイトのサポート:** 多数のサイトから動画や音声をダウンロードできます。
*   **豊富な機能:** ダウンロード、フォーマット変換、メタデータの編集、字幕の取得など、様々な機能を備えています。
*   **柔軟なオプション:** 詳細な設定やカスタマイズが可能で、ユーザーのニーズに合わせて柔軟に利用できます。
*   **SponsorBlock 統合:** YouTube動画のスポンサーセクションなどを自動的にマークしたり削除したりする機能が利用できます。
*   **更新機能:** コマンドラインから最新バージョンへの更新が可能です。
*   **プラグイン機能:** 独自の機能を追加できるプラグインに対応しています。

### インストール

yt-dlp は、バイナリファイル、pip、またはサードパーティのパッケージマネージャーを使用してインストールできます。

*   **バイナリファイル:** Windows、Linux/BSD、macOS 向けのスタンドアロンバイナリが提供されています。
*   **pip:** Python のパッケージ管理ツール pip を使用してインストールできます。
*   **サードパーティパッケージマネージャー:** 多くのLinuxディストリビューションなどで利用可能です。

詳細なインストール方法は、[yt-dlp の Wiki](https://github.com/yt-dlp/yt-dlp/wiki/Installation) を参照してください。

### 主なコマンドラインオプション

yt-dlp は、多くのコマンドラインオプションで動作を制御します。以下に主要なオプションをまとめます。

*   `-U, --update`: yt-dlp を最新バージョンに更新します。
*   `-i, --ignore-errors`: ダウンロードまたはポストプロセスエラーを無視します。
*   `-f, --format`: ダウンロードする動画のフォーマットを指定します。
*   `-S, --format-sort`: フォーマットのソート順を指定します。
*   `-o, --output`: 出力ファイル名のテンプレートを指定します。
*   `-x, --extract-audio`: 動画を音声ファイルに変換します。
*   `--write-subs`: 字幕ファイルをダウンロードします。
*   `--sub-format`: 字幕のフォーマットを指定します。
*   `--cookies FILE`: クッキーファイルからクッキーを読み込みます。
*   `--proxy URL`: プロキシサーバーを使用します。
*   `--playlist-items ITEM_SPEC`: ダウンロードするプレイリストのアイテムを指定します。
*   `--match-filters FILTER`: 動画のフィルター条件を指定します。
*   `--sponsorblock-mark CATS`: SponsorBlock のカテゴリを指定して、チャプターを作成します。
*   `--sponsorblock-remove CATS`: SponsorBlock のカテゴリを指定して、動画から削除します。

これらのオプションを組み合わせることで、柔軟なダウンロードとポストプロセスが可能です。

### 設定ファイル

yt-dlp は、コマンドラインオプションをファイルに保存して設定できます。設定ファイルは、複数の場所から読み込まれ、優先順位があります。

1.  メイン設定ファイル
2.  ポータブル設定ファイル
3.  ホームディレクトリの設定ファイル
4.  ユーザー設定ファイル
5.  システム設定ファイル

設定ファイルを作成することで、毎回同じオプションを入力する必要がなくなります。

### フォーマット選択

yt-dlp は、`-f` オプションを使って、ダウンロードする動画のフォーマットを選択できます。様々な形式の指定方法があり、柔軟な選択が可能です。

*   **フォーマットコード:** `-f 22` のように、フォーマットコードで指定します。
*   **ファイル拡張子:** `-f mp4` のように、拡張子で指定します。
*   **キーワード:** `best`, `bestvideo`, `bestaudio` などのキーワードで指定します。
*   **フィルター:** `best[height<=720]` のように、条件でフィルタリングできます。
*   **ソート:** `-S +size` のように、ソート順を指定します。

### メタデータの編集

yt-dlp は、`--parse-metadata` オプションや `--replace-in-metadata` オプションを使って、動画のメタデータを編集できます。

*   `--parse-metadata`: 別のフィールドからデータを抽出してメタデータを設定します。
*   `--replace-in-metadata`: メタデータのテキストを置換します。

これらのオプションを使うことで、動画のタイトルや説明などを変更したり、追加の情報を追加したりできます。

### プラグイン

yt-dlp は、機能拡張を可能にするプラグインに対応しています。

*   **種類:** extractor (エクストラクタ) と postprocessor (ポストプロセッサ) の2種類があります。
*   **インストール:** 設定ディレクトリ、実行ファイルのある場所、pip などからインストールできます。
*   **利用:** `--use-postprocessor` オプションでポストプロセッサを有効化できます。

プラグインを使用することで、yt-dlp の機能をさらに拡張できます。

### その他の情報

*   **CONTRIBUTING:** プロジェクトへの貢献に関する情報が記載されています。
*   **WIKI:** 詳細な情報が Wiki に掲載されています。
*   **CHANGES FROM YOUTUBE-DL:** youtube-dl からの変更点に関する情報が掲載されています。

yt-dlp は、多機能でありながら、コマンドラインで簡単に使える強力なダウンローダーです。


---

# unclecode/crawl4ai

**stars**: 43497

[View Repository on Github](https://github.com/unclecode/crawl4ai)

🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & Scraper. Don't be shy, join here: https://discord.gg/jP8KfhDhyN

## README要約
## unclecode/crawl4ai リポジトリ概要（日本語）

このリポジトリは、LLM（大規模言語モデル）に最適化されたオープンソースのWebクローラー兼スクレーパー「Crawl4AI」です。

**主な特徴:**

*   **LLMフレンドリー:** RAGやファインチューニングに適した、スマートで簡潔なMarkdownを生成します。
*   **高速:** リアルタイムでコスト効率の良いパフォーマンスを提供し、最大6倍の高速化を実現します。
*   **柔軟なブラウザ制御:** セッション管理、プロキシ、カスタムフックにより、スムーズなデータアクセスを実現します。
*   **ヒューリスティックなインテリジェンス:** 高度なアルゴリズムを使用して効率的な抽出を行い、コストのかかるモデルへの依存を減らします。
*   **オープンソース＆デプロイ可能:** APIキーを必要とせず、Dockerやクラウド統合が可能です。
*   **活発なコミュニティ:** 活発なコミュニティによって積極的にメンテナンスされており、GitHubでトレンド入りしています。

**主な機能:**

*   **Markdown生成:**
    *   クリーンなMarkdownの生成（正確なフォーマット）
    *   AIフレンドリーな処理のためのノイズ除去（ヒューリスティックベース）
    *   引用と参考文献の追加（ページリンクを番号付き参照リストに変換）
    *   カスタム戦略の作成（特定のニーズに合わせたMarkdown生成）
    *   BM25アルゴリズムによるフィルタリング（コア情報の抽出）
*   **構造化データ抽出:**
    *   LLMによる抽出（すべてのLLMをサポート）
    *   チャンキング戦略（トピックベース、正規表現、文レベル）
    *   コサイン類似度による関連コンテンツの抽出
    *   CSSベースの抽出（XPathとCSSセレクタ）
    *   カスタムスキーマ定義（構造化JSONの抽出）
*   **ブラウザ統合:**
    *   ユーザー所有のブラウザの使用（ボット検出の回避）
    *   リモートブラウザ制御（Chrome DevTools Protocol）
    *   ブラウザプロファイラー（永続的なプロファイルの管理）
    *   セッション管理（ブラウザ状態の保存と再利用）
    *   プロキシサポート（セキュアなアクセス）
    *   フルブラウザ制御（ヘッダー、クッキー、ユーザーエージェントなど）
    *   マルチブラウザサポート（Chromium、Firefox、WebKit）
    *   動的ビューポート調整（完全なレンダリングの確保）
*   **クローリング＆スクレイピング:**
    *   メディアサポート（画像、音声、動画、srcsetなど）
    *   動的クローリング（JSの実行と待ち合わせ）
    *   スクリーンショット
    *   生のHTML/ローカルファイル処理
    *   包括的なリンク抽出（内部、外部、iframeコンテンツ）
    *   カスタムフックの定義
    *   キャッシング
    *   メタデータの抽出
    *   IFrameコンテンツ抽出
    *   Lazy Loadの処理
    *   フルページスキャン（インフィニットスクロールページ）
*   **デプロイメント:**
    *   Docker化されたセットアップ（FastAPIサーバー）
    *   APIセキュリティ（JWTトークン認証）
    *   APIゲートウェイ（APIベースのワークフロー）
    *   スケーラブルなアーキテクチャ
    *   クラウドデプロイメント

**インストール:**

1.  `pip install crawl4ai`
2.  `crawl4ai-setup`
3.  必要に応じて、Playwrightをインストール: `python -m playwright install chromium`

**Dockerデプロイメント:**

*   `docker pull unclecode/crawl4ai:0.6.0-rN` (リビジョン番号を指定)
*   `docker run -d -p 11235:11235 --name crawl4ai --shm-size=1g unclecode/crawl4ai:0.6.0-rN` (リビジョン番号を指定)
*   プレイグラウンドへのアクセス: `http://localhost:11235/playground`

**高度な使用例:**

*   **ヒューリスティックなMarkdown生成:** `PruningContentFilter` または `BM25ContentFilter` を使用したMarkdown生成。
*   **JavaScriptの実行と構造化データの抽出:** `JsonCssExtractionStrategy` を使用したJavaScript実行と構造化データの抽出。
*   **LLMを使用した構造化データの抽出:** `LLMExtractionStrategy` とPydanticモデル定義。
*   **カスタムユーザープロファイルを使用したブラウザの利用:** ブラウザプロファイルとセッション管理。

**最近のアップデート:**

*   **バージョン0.6.0:**
    *   世界対応のクローリング（ジオロケーション、言語設定）
    *   テーブルからDataFrameへの抽出
    *   ブラウザプーリング（高速化）
    *   ネットワークとコンソールのキャプチャ
    *   MCP統合（AIツールとの連携）
    *   インタラクティブプレイグラウンド
    *   Dockerデプロイメントの刷新
*   **バージョン0.5.0:**
    *   ディープクローリングシステム
    *   メモリ適応型ディスパッチャ
    *   複数のクローリング戦略
    *   コマンドラインインターフェース
    *   ブラウザプロファイラー
    *   Crawl4AIコーディングアシスタント
    *   LXMLスクレイピングモード
    *   プロキシローテーション
    *   LLMコンテンツフィルター
    *   PDF処理

**ドキュメントとロードマップ:**

*   [ドキュメントサイト](https://docs.crawl4ai.com/)
*   [ロードマップ](https://github.com/unclecode/crawl4ai/blob/main/ROADMAP.md)

**貢献について:**

オープンソースコミュニティからの貢献を歓迎します。コントリビューションガイドラインを参照してください。

**ライセンスと引用:**

*   Apache License 2.0
*   使用時にはアトリビューション（帰属表示）が必要です。バッジ、またはテキストによる表示が可能です。
*   研究やプロジェクトで使用する場合は、適切なBibTeX形式での引用をお願いします。

**連絡先:**

*   GitHub: [unclecode](https://github.com/unclecode)
*   Twitter: [@unclecode](https://twitter.com/unclecode)
*   ウェブサイト: [crawl4ai.com](https://crawl4ai.com)

**ミッション:**

デジタルフットプリントを構造化された価値ある資産に変え、個人と組織がオープンソースツールでデータを抽出し、構造化できるようにします。データ経済を共有し、真のAIの進歩を促進することを目指しています。


---

# Stirling-Tools/Stirling-PDF

**stars**: 59337

[View Repository on Github](https://github.com/Stirling-Tools/Stirling-PDF)

#1 Locally hosted web application that allows you to perform various operations on PDF files

## README要約
## Stirling-PDF の概要

Stirling-PDF は、Docker を利用した堅牢なローカルホスト型のウェブベース PDF 操作ツールです。PDF ファイルの分割、結合、変換、並べ替え、画像追加、回転、圧縮など、様々な操作を可能にします。クライアントサイドで完結するか、タスク実行中にサーバーメモリにのみ存在するか、タスク実行のためだけに一時的にファイルとして存在する設計となっており、ユーザーがダウンロードしたファイルは、その時点でサーバーから削除されます。

主な特徴は以下の通りです。

*   **豊富なPDF操作:** 50以上のPDF操作（ページの表示・編集、結合、分割、回転、削除、レイアウト変更、拡大縮小、コントラスト調整、トリミングなど）
*   **高度な変換機能:** PDF から画像への変換、他の一般的なファイルから PDF への変換 (LibreOffice 使用)、HTML から PDF への変換、PDF から XML への変換、PDF から CSV への変換、URL から PDF への変換、Markdown から PDF への変換
*   **セキュリティとパーミッション:** パスワードの追加・削除、PDF パーミッションの変更、透かしの追加、PDF の認証・署名、PDF のサニタイズ、テキストの自動赤字化
*   **その他の機能:** 署名の追加、PDF のサイズまたはページ数による分割、PDF の修復、空白ページの検出・削除、2 つの PDF の比較、画像の追加・抽出・削除、注釈の削除、ページ番号の追加、ファイル名の自動変更、OCR（Tesseract OCR 使用）、PDF/A への変換（LibreOffice 使用）、メタデータの編集、PDF のフラット化、PDF の情報取得、埋め込み JavaScript の表示
*   **並列処理とカスタム機能:** 並列ファイル処理とダウンロード、ダークモード、カスタムダウンロードオプション、複数の機能を自動的に実行できる「パイプライン」、外部スクリプトとの統合のための API、オプションのログインと認証、データベースのバックアップとインポート、SSO などのエンタープライズ機能。
*   **多言語対応:** 40の言語をサポート（日本語を含む）。

詳細なドキュメントは[https://docs.stirlingpdf.com/](https://docs.stirlingpdf.com/) で提供されています。

貢献やコミュニティへの参加も歓迎されており、[CONTRIBUTING.md](CONTRIBUTING.md) で貢献ガイドライン、[HowToAddNewLanguage.md](HowToAddNewLanguage.md) で翻訳ガイド、[Issue Tracker](https://github.com/Stirling-Tools/Stirling-PDF/issues) で issue の追跡、[Discord Community](https://discord.gg/HYmhKj45pU) でコミュニティへの参加、[DeveloperGuide.md](DeveloperGuide.md) で開発者ガイドを確認できます。

また、[Stirling PDF Enterprise](https://docs.stirlingpdf.com/Pro) という商用版も提供されています。

