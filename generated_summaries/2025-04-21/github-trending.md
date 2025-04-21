
# Byaidu/PDFMathTranslate

**stars**: 20732

[View Repository on Github](https://github.com/Byaidu/PDFMathTranslate)

PDF scientific paper translation with preserved formats - 基于 AI 完整保留排版的 PDF 文档全文双语翻译，支持 Google/DeepL/Ollama/OpenAI 等服务，提供 CLI/GUI/Docker/Zotero

## README要約
## PDFMathTranslate：科学論文PDFのフォーマットを保持したまま全文翻訳

**概要**

PDFMathTranslateは、PDF形式の科学論文を、数式、図表、目次、注釈などのフォーマットを維持したまま、多言語に翻訳するツールです。Google、DeepL、Ollama、OpenAIなどの翻訳サービスに対応し、CLI（コマンドラインインターフェース）、GUI（グラフィカルユーザーインターフェース）、Docker、Zoteroプラグインなど、さまざまな方法で利用できます。

**主な特徴**

*   **フォーマット保持:** 数式、図表、目次、注釈などを元のPDF文書のレイアウトをほぼそのままに保持して翻訳します。
*   **多言語対応:** 複数の言語間の翻訳をサポートします。
*   **多様な翻訳サービス:** Google、DeepL、Ollama、OpenAIなど、様々な翻訳サービスを利用できます。
*   **複数の利用方法:** CLI、GUI、Docker、Zoteroプラグインなど、ユーザーのニーズに合わせた多様な利用方法を提供します。

**更新情報**

*   2025年3月3日: 実験的な新バックエンド[BabelDOC](https://github.com/funstory-ai/BabelDOC) WebUIのサポートを追加（[@awwaawwa](https://github.com/awwaawwa)）
*   2025年2月22日: リリースCIの改善とWindows-amd64 exeのパッケージ化（[@awwaawwa](https://github.com/awwaawwa)）
*   2024年12月24日: [Xinference](https://github.com/xorbitsai/inference)でのローカルモデルのサポートを追加（[@imClumsyPanda](https://github.com/imClumsyPanda)）
*   2024年12月19日: `-cp` を使用した非PDF/Aドキュメントのサポートを追加（[@reycn](https://github.com/reycn)）
*   2024年12月13日: 追加のバックエンドサポート（[@YadominJinta](https://github.com/YadominJinta)）
*   2024年12月10日: Azure上のOpenAIモデルのサポートを追加（[@yidasanqian](https://github.com/yidasanqian)）

**プレビュー**

翻訳結果のプレビューは以下の通りです。

<div align="center">
<img src="./docs/images/preview.gif" width="80%"/>
</div>

**オンラインデモ**

次のデモでアプリケーションを試すことができます。

*   [公開無料サービス](https://pdf2zh.com/)（インストール不要、推奨）
*   [Immersive Translate - BabelDOC](https://app.immersivetranslate.com/babel-doc/)（毎月1000ページ無料、推奨）
*   [HuggingFace上のデモ](https://huggingface.co/spaces/reycn/PDFMathTranslate-Docker)
*   [ModelScope上のデモ](https://www.modelscope.cn/studios/AI-ModelScope/PDFMathTranslate)（インストール不要）

**インストールと使用方法**

様々なユースケースに対応するため、複数のインストール方法を提供しています。

1.  **UVインストール:**
    *   Pythonがインストールされていること (3.10 <= version <= 3.12)
    *   パッケージのインストール: `pip install uv; uv tool install --python 3.12 pdf2zh`
    *   翻訳の実行: `pdf2zh document.pdf`

2.  **Windows exe:**
    *   [リリースページ](https://github.com/Byaidu/PDFMathTranslate/releases)から`pdf2zh-version-win64.zip`をダウンロード
    *   解凍し、`pdf2zh.exe`をダブルクリックして実行

3.  **グラフィカルユーザーインターフェース (GUI):**
    *   Pythonがインストールされていること (3.10 <= version <= 3.12)
    *   パッケージのインストール: `pip install pdf2zh`
    *   ブラウザで起動: `pdf2zh -i`
    *   ブラウザが自動的に起動しない場合は、`http://localhost:7860/`にアクセス

4.  **Docker:**
    *   Dockerイメージのプルと実行: `docker pull byaidu/pdf2zh; docker run -d -p 7860:7860 byaidu/pdf2zh`
    *   ブラウザで開く: `http://localhost:7860/`
    *   クラウドサービスへのDockerデプロイは、Heroku、Render、Zeabur、Koyebのボタンを利用できます。

5.  **Zotero Plugin:**
    *   [Zotero PDF2zh](https://github.com/guaguastandup/zotero-pdf2zh)を参照

6.  **コマンドライン:**
    *   Pythonがインストールされていること (3.10 <= version <= 3.12)
    *   パッケージのインストール: `pip install pdf2zh`
    *   翻訳の実行: `pdf2zh document.pdf`

    **注:**
    *   Windowsでダウンロード後にファイルが開けない場合は、[vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)をインストールしてください。
    *   Docker Hubにアクセスできない場合は、[GitHub Container Registry](https://github.com/Byaidu/PDFMathTranslate/pkgs/container/pdfmathtranslate)のイメージを試してください。

**インストールできない場合**

プログラムはAIモデル（`wybxc/DocLayout-YOLO-DocStructBench-onnx`）を必要としますが、ネットワークの問題でダウンロードできない場合があります。その場合は、以下の環境変数を使用して回避策を試してください。

```shell
set HF_ENDPOINT=https://hf-mirror.com
```

PowerShellユーザーの場合:

```shell
$env:HF_ENDPOINT = https://hf-mirror.com
```

問題が解決しない場合は、[FAQ](https://github.com/Byaidu/PDFMathTranslate/wiki#-faq--%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)を参照してください。

**高度なオプション**

コマンドラインで翻訳コマンドを実行すると、翻訳されたドキュメント`example-mono.pdf`とバイリンガルドキュメント`example-dual.pdf`が現在の作業ディレクトリに生成されます。デフォルトではGoogleが翻訳サービスとして使用されます。より多くの翻訳サービスは、[HERE](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#services) で確認できます。

<img src="./docs/images/cmd.explained.png" width="580px"  alt="cmd"/>

高度なオプションを以下に示します。

| オプション         | 機能                                                                                                      | 例                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| files          | ローカルファイル                                                                                                   | `pdf2zh ~/local.pdf`                           |
| links          | オンラインファイル                                                                                                  | `pdf2zh http://arxiv.org/paper.pdf`            |
| `-i`           | [GUI](https://github.com/Byaidu/PDFMathTranslate/blob/main/README.md#gui)                                      | `pdf2zh -i`                                    |
| `-p`           | [部分翻訳](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#partial) | `pdf2zh example.pdf -p 1`                      |
| `-li`          | [ソース言語](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#languages)            | `pdf2zh example.pdf -li en`                    |
| `-lo`          | [ターゲット言語](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#languages)            | `pdf2zh example.pdf -lo zh`                    |
| `-s`           | [翻訳サービス](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#services)         | `pdf2zh example.pdf -s deepl`                  |
| `-t`           | [マルチスレッド](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#threads)                | `pdf2zh example.pdf -t 1`                      |
| `-o`           | 出力ディレクトリ                                                                                                    | `pdf2zh example.pdf -o output`                 |
| `-f`, `-c`     | [例外](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#exceptions)                | `pdf2zh example.pdf -f "(MS.*)"`               |
| `-cp`          | 互換性モード                                                                                            | `pdf2zh example.pdf --compatible`              |
| `--skip-subset-fonts` | [フォントサブセットをスキップ](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#font-subset)  | `pdf2zh example.pdf --skip-subset-fonts`       |
| `--ignore-cache` | [翻訳キャッシュを無視](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#cache)       | `pdf2zh example.pdf --ignore-cache`            |
| `--share`      | 公開リンク                                                                                                   | `pdf2zh -i --share`                            |
| `--authorized` | [認証](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#auth)                   | `pdf2zh -i --authorized users.txt [auth.html]` |
| `--prompt`     | [カスタムプロンプト](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#prompt)                 | `pdf2zh --prompt [prompt.txt]`                 |
| `--onnx`       | [カスタム DocLayout-YOLO ONNXモデルの使用]                                                                        | `pdf2zh --onnx [onnx/model/path]`              |
| `--serverport` | [カスタム WebUI ポートの使用]                                                                                       | `pdf2zh --serverport 7860`                     |
| `--dir`        | [バッチ翻訳]                                                                                             | `pdf2zh --dir /path/to/translate/`             |
| `--config`     | [設定ファイル](https://github.com/Byaidu/PDFMathTranslate/blob/main/docs/ADVANCED.md#cofig)             | `pdf2zh --config /path/to/config/config.json`  |
| `--serverport` | [カスタム gradio サーバポート]                                                                                   | `pdf2zh --serverport 7860`                     |
|`--babeldoc`| 実験的なバックエンド [BabelDOC](https://funstory-ai.github.io/BabelDOC/) を使用して翻訳 |`pdf2zh --babeldoc` -s openai example.pdf|

詳細については、[高度な使用法](./docs/ADVANCED.md)に関するドキュメントを参照してください。

**二次開発 (API)**

pdf2zh APIは現在、一時的に非推奨となっています。APIは、[pdf2zh 2.0](https://github.com/Byaidu/PDFMathTranslate/issues/586)がリリースされた後に再度提供される予定です。プログラムによるアクセスが必要な場合は、[BabelDOC](https://github.com/funstory-ai/BabelDOC)の`babeldoc.high_level.async_translate`関数を使用してください。

このAPIの一時的な非推奨とは、関連するコードは当面削除されませんが、技術サポートは提供されず、バグ修正も行われないことを意味します。

<!--二次開発アプリケーションについては、[APIの詳細](./docs/APIS.md)に関するドキュメントを参照してください。

- [Python API](./docs/APIS.md#api-python), 他のPythonプログラムでプログラムを使用する方法
- [HTTP API](./docs/APIS.md#api-http), プログラムがインストールされたサーバーと通信する方法 -->

**今後の課題**

-   \[ ] DocLayNetベースのモデルによるレイアウト解析、[PaddleX](https://github.com/PaddlePaddle/PaddleX/blob/17cc27ac3842e7880ca4aad92358d3ef8555429a/paddlex/repo_apis/PaddleDetection_api/object_det/official_categories.py#L81)、[PaperMage](https://github.com/allenai/papermage/blob/9cd4bb48cbedab45d0f7a455711438f1632abebe/README.md?plain=1#L102)、[SAM2](https://github.com/facebookresearch/sam2)
-   \[ ] ページの回転、目次、リスト形式の修正
-   \[ ] 古い論文のピクセル数式の修正
-   \[ ] KeyboardInterruptを除く非同期再試行
-   \[ ] 西洋言語向けのKnuth–Plassアルゴリズム
-   \[ ] 非PDF/Aファイルのサポート
-   \[ ] [Zotero](https://github.com/zotero/zotero) および [Obsidian](https://github.com/obsidianmd/obsidian-releases) のプラグイン

**謝辞**

-   [Immersive Translation](https://immersivetranslate.com) は、このプロジェクトのアクティブな貢献者に対して毎月のProメンバーシップ引き換えコードを提供しています。詳細は、[CONTRIBUTOR\_REWARD.md](https://github.com/funstory-ai/BabelDOC/blob/main/docs/CONTRIBUTOR_REWARD.md) を参照してください。
-   新バックエンド: [BabelDOC](https://github.com/funstory-ai/BabelDOC)
-   ドキュメントのマージ: [PyMuPDF](https://github.com/pymupdf/PyMuPDF)
-   ドキュメントの解析: [Pdfminer.six](https://github.com/pdfminer/pdfminer.six)
-   ドキュメントの抽出: [MinerU](https://github.com/opendatalab/MinerU)
-   ドキュメントのプレビュー: [Gradio PDF](https://github.com/freddyaboulton/gradio-pdf)
-   マルチスレッド翻訳: [MathTranslate](https://github.com/SUSYUSTC/MathTranslate)
-   レイアウト解析: [DocLayout-YOLO](https://github.com/opendatalab/DocLayout-YOLO)
-   ドキュメント標準: [PDF Explained](https://zxyle.github.io/PDF-Explained/)、[PDF Cheat Sheets](https://pdfa.org/resource/pdf-cheat-sheets/)
-   多言語フォント: [Go Noto Universal](https://github.com/satbyy/go-noto-universal)

**貢献者**

<a href="https://github.com/Byaidu/PDFMathTranslate/graphs/contributors">
  <img src="https://opencollective.com/PDFMathTranslate/contributors.svg?width=890&button=false" />
</a>

![Alt](https://repobeats.axiom.co/api/embed/dfa7583da5332a11468d686fbd29b92320a6a869.svg "Repobeats analytics image")

**Star History**

<a href="https://star-history.com/#Byaidu/PDFMathTranslate&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Byaidu/PDFMathTranslate&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Byaidu/PDFMathTranslate&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Byaidu/PDFMathTranslate&type=Date"/>
 </picture>
</a>


---

# Shubhamsaboo/awesome-llm-apps

**stars**: 28854

[View Repository on Github](https://github.com/Shubhamsaboo/awesome-llm-apps)

Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.

## README要約
## Shubhamsaboo/awesome-llm-apps リポジトリ概要（日本語）

このリポジトリは、OpenAI、Anthropic、Gemini、DeepSeek、Qwen、Llamaなどのオープンソースモデルを使用した、RAG（Retrieval Augmented Generation）とAIエージェントを組み合わせた優れたLLM（Large Language Model）アプリのコレクションです。

**主な特徴:**

*   多様なドメイン（コードリポジトリ、メールなど）でのLLMの応用例を紹介。
*   OpenAI、Anthropic、Gemini、オープンソースLLMと、RAGやAIエージェントを組み合わせたアプリを多数掲載。
*   各プロジェクトは詳細なドキュメント付きで、オープンソースエコシステムへの貢献を促す。

**主な内容:**

*   **AIエージェント:**
    *   様々な用途のAIエージェント（ブログ-ポッドキャスト変換、ブレイクアップ回復、データ分析、医療画像診断、ミーム生成、音楽生成、旅行、ニュースなど）
    *   高度なAIエージェント（深層研究、システム設計、リード生成、金融コーチ、映画制作、不動産、投資、ヘルス&フィットネス、ジャーナリスト、メンタルヘルス、会議など）
    *   ゲームプレイAIエージェント（3D Pygame、チェス、Tic-Tac-Toe）
    *   マルチエージェントチーム（競争力分析、金融、ゲームデザイン、法務、採用、サービス、教育、マルチモーダルコーディング、マルチモーダルデザイン）
    *   音声AIエージェント（オーディオツアー、カスタマーサポート）
    *   MCP AIエージェント（ブラウザ、GitHub）
*   **RAG（Retrieval Augmented Generation）:**
    *   Agentic RAG、ブログ検索、自律RAG、修正RAG、Deepseek Local RAG、Gemini Agentic RAG、ハイブリッド検索RAG、Llama 3.1 Local RAG、ローカルRAGエージェント、RAG-as-a-Service、Cohereを用いたRAG、RAGチェーン、データベースルーティングを用いたRAG
*   **MCP AIエージェント:**
    *   GitHub Agent
    *   ブラウザAgent
*   **高度なLLMアプリ:**
    *   "Xとチャット" チュートリアル（GitHub、Gmail、PDF、研究論文、Substack、YouTube動画）
    *   メモリ機能付きLLMアプリチュートリアル（ArXivエージェント、旅行エージェント、Llama3ステートフルチャット、パーソナライズされたメモリ、ローカルChatGPTクローン、マルチLLMメモリ）
    *   LLMファインチューニングチュートリアル（Llama 3.2 ファインチューニング）

**Global AI Agent Hackathon 開催:**

AIエージェントエコシステムパートナーとのコラボレーションによるグローバルAIエージェントハッカソンが開催されます。AIエージェント、RAG、ツール利用、またはマルチエージェントシステムに取り組む開発者、ビルダー、およびスタートアップを対象としており、最大25,000ドルの賞金とパートナーからのAPIおよびツール使用クレジット20,000ドル分を獲得するチャンスがあります。上位5つのプロジェクトは、このリポジトリで紹介されます。

**利用方法:**

1.  リポジトリをクローン: `git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git`
2.  目的のプロジェクトディレクトリへ移動: `cd awesome-llm-apps/starter_ai_agents/ai_travel_agent` （例）
3.  必要な依存関係をインストール: `pip install -r requirements.txt`
4.  各プロジェクトの`README.md`ファイルに記載された手順に従い、アプリをセットアップし実行。

**コントリビュート:**

アイデア、改善、新しいアプリの追加は歓迎されており、GitHub Issueまたはプルリクエストを通じて貢献できます。新しいアプリを追加する際は、既存のプロジェクト構造に従い、詳細な`README.md`を必ず含めてください。

**スター（星）を付けて、最新情報をお見逃しなく！**


---

# yt-dlp/yt-dlp

**stars**: 108355

[View Repository on Github](https://github.com/yt-dlp/yt-dlp)

A feature-rich command-line audio/video downloader

## README要約
## yt-dlp の詳細な要約 (日本語)

yt-dlp は、多機能なコマンドラインオーディオ/ビデオダウンローダーです。

**1. 概要**

*   **機能:** 様々なサイト (数千のサイト) からの動画や音声のダウンロードをサポートしています。
*   **ベース:**  youtube-dl のフォークで、youtube-dlc がベースとなっています。
*   **特徴:**  高機能で、豊富なオプション、プラグイン、様々なフォーマットのサポート、メタデータの編集、SponsorBlock との連携などを備えています。
*   **更新:**  yt-dlp 自体を `yt-dlp -U` コマンドで更新できます。安定版 (stable)、ナイトリー版 (nightly)、マスター版 (master) の３つのリリースチャネルがあります。ナイトリー版は、最新の変更や修正が適用された、推奨されるリリースです。

**2. インストール**

*   **方法:**
    *   バイナリファイル (Windows, Linux/BSD, macOS 用)
    *   pip (Python パッケージ)
    *   サードパーティのパッケージマネージャー
*   **インストール手順:**  [yt-dlp Wiki](https://github.com/yt-dlp/yt-dlp/wiki/Installation) で詳細が解説されています。

**3. 主な機能とオプション**

*   **対応サイト:**  数千のサイトに対応しています。
*   **フォーマット選択:**  ダウンロードする動画や音声のフォーマットを、詳細に選択できます。
    *   `--format` オプションでフォーマットコードを指定したり、ファイル拡張子 (`mp4` など) で指定したりできます。
    *   `bestvideo+bestaudio` のように、ビデオとオーディオをマージすることも可能です。
    *   `--format-sort` オプションで、フォーマットのソート方法をカスタマイズできます。
*   **動画の選択:**
    *   `--playlist-items` オプションで、プレイリストの特定のアイテムだけをダウンロードできます。
    *   `--min-filesize`, `--max-filesize` オプションで、ファイルサイズの制限ができます。
    *   `--date`, `--datebefore`, `--dateafter` オプションで、アップロード日の範囲指定ができます。
    *   `--match-filters` オプションで、様々な条件で動画をフィルタリングできます。
*   **ダウンロードオプション:**
    *   `--concurrent-fragments` オプションで、DASH/HLS 形式の動画を並行してダウンロードできます。
    *   `--limit-rate` オプションで、ダウンロード速度を制限できます。
    *   `--retries`, `--fragment-retries` オプションで、リトライ回数を設定できます。
*   **ファイルシステムオプション:**
    *   `-o` オプションで、出力ファイル名テンプレートを設定できます。
    *   `-P` オプションで、ファイルの保存先パスを設定できます。
    *   `--restrict-filenames`, `--windows-filenames` オプションで、ファイル名の制限や互換性を設定できます。
    *   `--write-description`, `--write-info-json` オプションで、説明やメタデータをファイルに書き出すことができます。
    *   `--cookies-from-browser` オプションで、ブラウザから Cookie を読み込むことができます。
*   **サムネイルオプション:**
    *   `--write-thumbnail` オプションで、サムネイルを書き出すことができます。
*   **字幕オプション:**
    *   `--write-subs`, `--write-auto-subs` オプションで、字幕をダウンロードできます。
    *   `--sub-format`, `--sub-langs` オプションで、字幕のフォーマットと言語を設定できます。
*   **認証オプション:**
    *   `-u`, `-p` オプションで、ユーザー名とパスワードを指定できます。
    *   `--netrc` オプションで、`.netrc` ファイルを使った認証ができます。
    *   `--video-password`, `--ap-mso`, `--ap-username`, `--ap-password` オプションで、動画固有のパスワードや、MSO 認証 (TV プロバイダ) を設定できます。
*   **後処理オプション:**
    *   `-x` オプションで、動画を音声ファイルに変換できます。
    *   `--audio-format`, `--audio-quality` オプションで、音声フォーマットと品質を設定できます。
    *   `--remux-video`, `--recode-video` オプションで、動画の再エンコードができます。
    *   `--embed-subs`, `--embed-thumbnail`, `--embed-metadata` オプションで、字幕やサムネイル、メタデータを動画に埋め込むことができます。
    *   `--xattrs` オプションで、動画ファイルにメタデータを書き込むことができます。
*   **SponsorBlock オプション:**
    *   `--sponsorblock-mark`, `--sponsorblock-remove` オプションで、SponsorBlock を利用して、動画からスポンサーセクションなどを自動的に削除できます。
*   **その他のオプション:**  ネットワーク設定、地理的制限、詳細情報表示、シミュレーション、作業回避策など、多くのオプションが用意されています。

**4. 設定**

*   **設定ファイルの場所:**  複数の場所から設定ファイルを読み込みます。 (`yt-dlp.conf`, XDG ディレクトリ、APPDATA など)
*   **設定ファイルのエンコーディング:**  UTF-8 に対応しています。
*   **`.netrc` ファイル:**  認証情報を `.netrc` ファイルに保存し、yt-dlp から利用できます。

**5. 出力テンプレート**

*   `-o` オプションで使用し、ダウンロードするファイル名の形式を指定します。
*   **特別なシーケンス:**  動画のメタデータなど、様々な情報をファイル名に含めることができます (`%(title)s`, `%(id)s`, `%(ext)s` など)。
*   **フォーマット指定:**  `%` に続けて、フォーマット操作を指定できます。
*   **ファイルタイプ別設定:**  ファイルタイプ (`subtitle`, `thumbnail` など) ごとに異なる出力テンプレートを設定できます。

**6. フォーマット選択**

*   `-f` オプションで、ダウンロードするフォーマットを選択します。
*   **基本的な指定:**  フォーマットコードやファイル拡張子で指定できます。
*   **特殊な名前:**  `best`, `bestvideo`, `bestaudio` などのキーワードで、最適なフォーマットを選択できます。
*   **優先順位:**  `/` で区切ることで、複数のフォーマットの優先順位を指定できます。
*   **マージ:**  `+` で区切ることで、複数のフォーマットをマージできます。
*   **フィルタリング:**  `[]` 内で条件を指定して、フォーマットをフィルタリングできます。
*   **ソート:** `--format-sort` オプションで、フォーマットのソート順序をカスタマイズできます。

**7. メタデータの変更**

*   `--parse-metadata` オプションと `--replace-in-metadata` オプションで、メタデータを変更できます。
*   **`--parse-metadata`:** メタデータから情報を抽出して、別のフィールドに設定できます。
*   **`--replace-in-metadata`:** メタデータの特定の部分を、正規表現を使って置換できます。

**8. エクストラクタ引数**

*   `--extractor-args` オプションで、エクストラクタに引数を渡すことができます。
*   **用途:** エクストラクタ固有の機能や設定に利用できます (例: YouTube の `player_client`、YouTube の`comment_sort`など)。

**9. プラグイン**

*   **機能拡張:**  エクストラクタやポストプロセッサを、プラグインとして追加できます。
*   **場所:**  設定ディレクトリや、実行ファイルと同じディレクトリに配置します。
*   **利用方法:**  エクストラクタプラグインは自動的に呼び出され、ポストプロセッサプラグインは `--use-postprocessor` オプションで指定します。

**10. 埋め込み (Embedding)**

*   **Python API:**  Python コードから yt-dlp を利用できます。
*   **`YoutubeDL` クラス:**  `yt_dlp.YoutubeDL` クラスを使って、yt-dlp の機能を呼び出せます。
*   **例:**  情報を抽出、ダウンロード、オーディオ抽出、動画のフィルタリング、カスタムポストプロセッサの追加など、様々な機能が利用可能です。

**11. youtube-dl からの変更点**

*   **新機能:**
    *   SponsorBlock 連携
    *   フォーマットのソート
    *   様々なエクストラクタの追加と修正
    *   ブラウザからの Cookie の取得
    *   ダウンロード時間の範囲指定
    *   チャプターによる動画分割
    *   並列フラグメントダウンロード
    *   Aria2c と HLS/DASH の連携
    *   新しいオプションの追加
    *   プラグイン機能
    *   自己更新機能
*   **動作の違い:**
    *   サポートする Python バージョン
    *   デフォルトの出力テンプレート
    *   デフォルトのフォーマットソート
    *   デフォルトのフォーマット選択
    *   その他のデフォルト動作
*   **非推奨オプション:**
    *   youtube-dl との互換性のために、多くのオプションが非推奨となっています。

**12. その他**

*   **コントリビューション:**  バグ報告やコードの貢献が可能です。
*   **Wiki:**  yt-dlp の詳細な情報が Wiki で公開されています。


---

# microsoft/markitdown

**stars**: 50458

[View Repository on Github](https://github.com/microsoft/markitdown)

Python tool for converting files and office documents to Markdown.

## README要約
## MarkItDown の要約

MarkItDown は、様々なファイルを Markdown 形式に変換するための軽量な Python ツールです。主に、LLM (大規模言語モデル) や関連するテキスト分析パイプラインでの利用を目的としており、ドキュメントの重要な構造と内容 (見出し、リスト、表、リンクなど) を Markdown で保持することを重視しています。出力は人間が読みやすい場合もありますが、テキスト分析ツールによる処理を意図しています。

**主な機能:**

*   PDF、PowerPoint、Word、Excel、画像 (EXIF メタデータと OCR)、音声 (EXIF メタデータと音声トランスクリプション)、HTML、テキストベース形式 (CSV、JSON、XML)、ZIP ファイル (内容を反復処理)、YouTube URL、EPub など、様々なファイル形式をサポートしています。
*   Markdown 形式への変換により、最小限のマークアップで重要なドキュメント構造を表現でき、トークンの効率性も高まります。
*   Azure Document Intelligence を使用した変換もサポートしています。
*   LLM を使用した画像説明も可能です。

**インストール:**

pip を使用して `pip install 'markitdown[all]'` でインストールできます。個別の依存関係を選択することも可能で、例えば `pip install 'markitdown[pdf, docx, pptx]'` のように指定できます。

**使用方法:**

*   **コマンドライン:**
    ```bash
    markitdown path-to-file.pdf > document.md
    ```
    または、`-o` オプションで出力ファイルを指定します。パイプでの入力も可能です。
*   **Python API:**
    ```python
    from markitdown import MarkItDown

    md = MarkItDown(enable_plugins=False) # プラグインを有効にする場合は True
    result = md.convert("test.xlsx")
    print(result.text_content)
    ```

**追加機能:**

*   **プラグイン:** サードパーティのプラグインをサポートしています。`--list-plugins` でインストールされているプラグインを確認し、`--use-plugins` オプションで有効化できます。プラグインの開発方法については、`packages/markitdown-sample-plugin` を参照してください。
*   **Docker:** Docker イメージも提供されており、簡単に実行できます。
*   **Azure Document Intelligence:** Azure Document Intelligence を使用した変換も可能です。

**変更点:**

*   バージョン 0.1.0 から、依存関係がオプションの機能グループに整理されました。互換性のある動作には `pip install 'markitdown[all]'` を使用してください。
*   `convert_stream()` はバイナリファイルのようなオブジェクトを要求します。
*   `DocumentConverter` クラスのインターフェースが、ファイルパスではなくファイルストリームから読み込むように変更されました。

**コントリビューション:**

*   Microsoft の CLA (Contributor License Agreement) に同意する必要があります。
*   [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) に従います。
*   Issue や PR のレビュー、または「open for contribution」や「open for reviewing」とマークされたものを支援できます。
*   テストとチェックは、`packages/markitdown` ディレクトリで `hatch test` を実行し、`pre-commit run --all-files` で pre-commit checks を実行します。
*   サードパーティプラグインの作成と共有も可能です。

**商標:**

本プロジェクトは、Microsoft の商標やロゴを含む可能性があります。Microsoft の商標やロゴの使用は、[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general) に従う必要があります。

