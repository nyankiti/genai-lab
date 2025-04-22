
# allenai/olmocr

**stars**: 11663

[View Repository on Github](https://github.com/allenai/olmocr)

Toolkit for linearizing PDFs for LLM datasets/training

## README要約
## olmOCR リポジトリの要約

olmOCR は、大規模言語モデル (LLM) 用のデータセットや学習のために PDF を線形化するためのツールキットです。AI2 (Allen Institute for Artificial Intelligence) によって開発、メンテナンスされており、Apache 2.0 ライセンスの下で公開されています。

**主な機能とコンポーネント:**

*   **PDF 線形化:** PDF 文書を LLM で利用できるようにテキスト形式に変換します。
*   **プロンプティング戦略:** ChatGPT 4o を使用した自然なテキスト解析のためのプロンプティング戦略が含まれています。
*   **評価ツールキット:** 様々なパイプラインのバージョンを比較するための評価ツールです。
*   **フィルタリング:** 言語と SEO スパムの基本的なフィルタリング機能があります。
*   **微調整コード:** Qwen2-VL や Molmo-O の微調整コードが含まれています。
*   **パイプライン:** Sglang を使用して、何百万もの PDF を微調整されたモデルで処理できます。
*   **Dolma ビューア:** PDF から作成された [Dolma ドキュメント](https://github.com/allenai/dolma) の表示機能があります。

**主なファイルと機能:**

*   `buildsilver.py`: ChatGPT 4o を使用した自然なテキスト解析のためのプロンプティング戦略。
*   `runeval.py`: さまざまなパイプラインのバージョンを比較するための評価ツール。
*   `filter.py`: 言語と SEO スパムのフィルタリング。
*   `train.py`: Qwen2-VL および Molmo-O の微調整コード。
*   `pipeline.py`: 微調整されたモデルを使用して、大量の PDF を処理するためのパイプライン。
*   `dolmaviewer.py`: PDF から生成された Dolma ドキュメントを表示するためのビューア。

**インストールと使用方法:**

1.  **前提条件:**
    *   最新の NVIDIA GPU (RTX 4090、L40S、A100、H100 など) および少なくとも 20 GB の GPU RAM。
    *   30 GB の空きディスク容量。
    *   `poppler-utils` および追加のフォントのインストールが必要です。Ubuntu/Debian の場合は以下のコマンドでインストールできます。

    ```bash
    sudo apt-get update
    sudo apt-get install poppler-utils ttf-mscorefonts-installer msttcorefonts fonts-crosextra-caladea fonts-crosextra-carlito gsfonts lcdf-typetools
    ```

2.  **conda 環境の設定:**
    ```bash
    conda create -n olmocr python=3.11
    conda activate olmocr
    ```

3.  **リポジトリのクローンとインストール:**
    ```bash
    git clone https://github.com/allenai/olmocr.git
    cd olmocr
    pip install -e .  # CPU-only の場合
    pip install -e .[gpu] --find-links https://flashinfer.ai/whl/cu124/torch2.4/flashinfer/ # GPU 使用の場合
    ```

4.  **ローカルでの使用:**
    *   単一 PDF の変換: `python -m olmocr.pipeline ./localworkspace --pdfs tests/gnarly_pdfs/horribleocr.pdf`
    *   画像ファイルの変換: `python -m olmocr.pipeline ./localworkspace --pdfs random_page.png`
    *   複数 PDF の変換: `python -m olmocr.pipeline ./localworkspace --pdfs tests/gnarly_pdfs/*.pdf`
    *   結果は `localworkspace/results` ディレクトリに Dolma スタイルの JSONL 形式で保存されます。
    *   結果の表示: `python -m olmocr.viewer.dolmaviewer localworkspace/results/output_*.jsonl`

5.  **マルチノード/クラスタでの使用:**
    *   AWS S3 を使用して PDF を読み込み、AWS S3 出力バケットを使用して作業を調整できます。
    *   最初のノード: `python -m olmocr.pipeline s3://my_s3_bucket/pdfworkspaces/exampleworkspace --pdfs s3://my_s3_bucket/jakep/gnarly_pdfs/*.pdf`
    *   後続のノード: `python -m olmocr.pipeline s3://my_s3_bucket/pdfworkspaces/exampleworkspace`
    *   Beaker を使用して PDF を変換することもできます (AI2 内部向け)。

6.  **パイプラインのヘルプ:** `python -m olmocr.pipeline --help` で使用可能な引数の詳細を参照できます。

**このツールキットは、LLM 用のデータセットの構築やトレーニングを支援するために、PDF 文書を効率的に処理するための機能を提供します。**


---

# drawdb-io/drawdb

**stars**: 27310

[View Repository on Github](https://github.com/drawdb-io/drawdb)

Free, simple, and intuitive online database diagram editor and SQL generator.

## README要約
## drawdb-io/drawdb の詳細な要約

drawdbは、無料でシンプルで直感的なオンラインデータベース図エディタであり、SQLジェネレータとしても機能します。ブラウザ上でデータベースのエンティティリレーションシップ（DBER）図を簡単に作成、編集し、SQLスクリプトを生成できます。アカウント作成は不要です。

**主な特徴:**

*   **DBER図エディタ:** ドラッグ＆ドロップでテーブルやリレーションシップを作成し、直感的にデータベーススキーマを設計できます。
*   **SQL生成:** 図からSQLスクリプトを自動生成します。
*   **カスタマイズ:** エディタを自分の好みに合わせてカスタマイズできます。
*   **アカウント不要:** すぐに使い始めることができます。

**READMEに記載されている内容:**

*   drawdbのロゴと短い説明。
*   Webサイトへのリンク、Discordへの招待リンク、X (Twitter)へのリンク。
*   drawdbのデモンストレーション画像。
*   drawdbの主な機能への言及。
*   **ローカル開発の手順:**
    *   GitHubリポジトリからコードをクローン。
    *   依存関係のインストール（`npm install`）。
    *   開発サーバーの起動（`npm run dev`）。
*   **ビルドの手順:**
    *   GitHubリポジトリからコードをクローン。
    *   依存関係のインストール（`npm install`）。
    *   ビルドの実行（`npm run build`）。
*   **Docker Buildの手順:**
    *   Dockerイメージのビルド。
    *   コンテナの実行。
*   **サーバー設定:** サーベイとバグレポートフォームの利用のために、drawdb-serverリポジトリと `.env.sample` ファイルに従って環境変数を設定する必要があります。

drawdbは、データベースの設計と管理を効率化するための強力なツールです。

