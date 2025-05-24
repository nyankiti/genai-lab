
# microsoft/qlib

**stars**: 20175

[View Repository on Github](https://github.com/microsoft/qlib)

Qlib is an AI-oriented quantitative investment platform that aims to realize the potential, empower research, and create value using AI technologies in quantitative investment, from exploring ideas to implementing productions. Qlib supports diverse machine learning modeling paradigms. including supervised learning, market dynamics modeling, and RL.

## README要約
## Microsoft Qlib の詳細な要約（日本語）

Microsoft が開発した Qlib は、AI を活用した定量的投資プラットフォームであり、アイデアの探索から実際の運用まで、AI技術を用いて定量的投資の可能性を実現し、研究を促進し、価値を創造することを目指しています。

### 主な特徴と機能

*   **AI を活用:** Qlib は、様々な機械学習モデルをサポートしており、教師あり学習、市場力学モデリング、強化学習など、多様なパラダイムに対応しています。
*   **包括的なパイプライン:** データ処理、モデルのトレーニング、バックテスト、評価といった機械学習の全工程を網羅し、アルファ探索、リスクモデリング、ポートフォリオ最適化、注文執行まで、定量的投資の全領域をカバーします。
*   **モジュール設計:** 各コンポーネントは緩やかに結合されたモジュールとして設計されており、単独での使用も可能です。
*   **データインフラストラクチャ:** データの取得、保存、処理に優れたインフラストラクチャを提供します。
*   **学習フレームワーク:** 強力な学習フレームワークにより、強化学習や教師あり学習など、多様な学習パラダイムをサポートします。
*   **オンライン/オフラインモード:** データサーバーはオフラインまたはオンラインモードで展開でき、オンラインモードではキャッシュの効率化とディスク容量の削減が可能です。
*   **R&D-Agent:** LLMに基づいた自律進化エージェントにより、定量投資研究における自動化されたファクターマイニングとモデル最適化をサポートします。

### 最新情報

*   **RD-Agent:** LLMベースの自律進化エージェントであり、自動化されたファクターマイニングとモデル最適化をサポート。[GitHub](https://github.com/microsoft/RD-Agent)にて公開。デモ動画も公開されています。
*   **BPQP for End-to-end learning:** 近日公開予定。
*   **LLM-driven Auto Quant Factory:** RD-Agentにてリリース済み。
*   **KRNN および Sandwich モデル:** リリース済み。
*   **Qlib v0.9.0 リリース:** 2022年12月9日にリリース。
*   **RL Learning Framework:** 2022年11月10日にリリース。
*   **HIST および IGMTF モデル:** リリース済み。
*   **Qlib ノートブックチュートリアル:** リリース済み。
*   **Ibovespa 指数データ:** リリース済み。
*   **Point-in-Time データベース:** リリース済み。
*   **Arctic Provider Backend & Orderbook データ例:** リリース済み。
*   **Meta-Learning-based framework & DDG-DA:** リリース済み。
*   **Planning-based ポートフォリオ最適化:** リリース済み。
*   **Qlib v0.8.0 リリース:** リリース済み。
*   **ADD モデル:** リリース済み。
*   **ADARNN モデル:** リリース済み。
*   **TCN モデル:** リリース済み。
*   **Nested Decision Framework:** リリース済み。
*   **Temporal Routing Adaptor (TRA):** リリース済み。
*   **Transformer & Localformer:** リリース済み。
*   **Qlib v0.7.0 リリース:** リリース済み。
*   **TCTS モデル:** リリース済み。
*   **オンラインサービングと自動モデルローリング:** リリース済み。
*   **DoubleEnsemble モデル:** リリース済み。
*   **高頻度データ処理例:** リリース済み。
*   **高頻度取引例:** 一部のコードがリリース。
*   **高頻度データ (1分):** リリース済み。
*   **Tabnet モデル:** リリース済み。

### クイックスタート

Qlib を使用した定量的研究ワークフローの構築と、機械学習技術が実用的な定量投資において非常に有効であることを示すためのクイックスタートガイドが提供されています。
*   **インストール:** pip またはソースコードからインストールできます。Python 3.8 以降が推奨されます。
*   **データ準備:** データの取得方法について説明されています。中国市場のデータ、またはコミュニティが提供する[データソース](https://github.com/chenditc/investment_data/releases) を利用できます。公式データセットは一時的に利用不可となっています。
*   **自動更新:** Yahoo Finance からのデータの自動更新と、データの健全性のチェック方法についても説明されています。
*   **Docker イメージ:** Docker Hub からのイメージの取得、コンテナの起動・停止方法についても説明されています。
*   **自動 Quant 研究ワークフロー:** `qrun` を使用してワークフロー全体を自動的に実行し、グラフィカルレポートで分析する方法が示されています。LightGBM のワークフロー設定例が提供されています。
*   **コードによる Quant 研究ワークフローの構築:** コードによって独自のワークフローを構築するためのモジュール化されたインターフェースが提供されており、その例が示されています。

### 定量的研究における主な課題と解決策

1.  **予測:** 株式価格のトレンドを正確に予測することは、収益性の高いポートフォリオを構築する上で重要です。Qlib は、複雑な金融データから価値あるシグナル/パターンを発見するための予測モデル構築に焦点を当てています。
    *   **Quant モデル (Paper) Zoo:** LightGBM、LSTM、Transformer など、様々なモデルが提供されています。各モデルのパフォーマンスは、Alpha158 および Alpha360 データセットで確認できます。
    *   **単一モデルの実行:** `qrun` ツール、`workflow_by_code` スクリプト、または `run_all_model.py` スクリプトを使用して単一モデルを実行できます。
    *   **複数モデルの実行:** `run_all_model.py` スクリプトを使用して、複数のモデルを繰り返し実行できます。
    *   **変更点:** `pandas`の`group_key`パラメータの変更による問題に対応しています。

2.  **市場ダイナミクスへの適応:** 金融市場の非定常性により、モデルのパフォーマンスが低下する可能性があります。Qlib は、予測モデル/戦略を市場ダイナミクスに適応させるためのソリューションを提供しています。
    *   **Rolling Retraining:** ローリングリトレーニング
    *   **DDG-DA:** DDG-DA

3.  **強化学習: 継続的な意思決定のモデリング:** Qlib は強化学習をサポートし、継続的な投資判断をモデル化します。
    *   **RL for order execution:** 注文執行に強化学習を適用する例が提供されています。TWAP、PPO、OPDSなどのモデルが比較されています。

### Quant データセット Zoo

*   **Alpha360**
*   **Alpha158**

### 学習フレームワーク

Qlib は、`Forecast Model` および `Trading Agent` のインスタンスを学習可能としており、これらは `Learning Framework` レイヤーに基づいて学習され、`Workflow` レイヤーの様々なシナリオに適用されます。
学習フレームワークは `Workflow` レイヤーも活用します (例: `Information Extractor` の共有、`Execution Env` に基づく環境の作成)。

### 詳細情報

*   **チュートリアル:** よく使用される Qlib コンポーネントの簡単な紹介は、[examples/tutorial/](examples/tutorial/) にあるノートブックで確認できます。
*   **ドキュメント:** 詳細なドキュメントは [docs/](docs/) にまとめられています。
*   **オンラインドキュメント:** [http://qlib.readthedocs.io/](http://qlib.readthedocs.io/)

### その他

*   **Qlib Data Server のパフォーマンス:** Qlib データサーバーは、データストレージとデータ処理に優れたパフォーマンスを発揮します。
*   **関連レポート:** Qlib に関する記事やレポートへのリンクが提供されています。
*   **連絡先:** 問題、貢献、その他の問い合わせは、Issue、Gitter、またはメールで連絡できます。
*   **貢献:** 貢献を歓迎しており、貢献ガイドラインが提供されています。
*   **ライセンス:** 貢献には、コントリビューターライセンス契約（CLA）への同意が必要です。
*   **行動規範:** Microsoft Open Source Code of Conduct に従っています。



---

# mindsdb/mindsdb

**stars**: 28984

[View Repository on Github](https://github.com/mindsdb/mindsdb)

AI's query engine - Platform for building AI that can answer questions over large scale federated data. - The only MCP Server you'll ever need

## README要約
## MindsDBの概要

MindsDBは、大規模なフェデレーテッドデータソースに対して質問に答えることができるAIプラットフォームです。複数のデータソースにまたがるデータに対して、人間、AI、エージェント、アプリケーションが正確な回答を得られるようにすることを目的としています。MCP (Model Context Protocol) サーバーを内蔵しており、MCPアプリケーションが大規模なフェデレーテッドデータ（データベース、データウェアハウス、SaaSアプリケーションなど）に接続し、統合して質問に対応できるようにします。

### 主な特徴

*   **データ接続:** 多数のエンタープライズデータソースに接続できます。これにより、データがどこにあってもアクセスできます。
*   **データ統合:** 接続されたデータソースは、単一のデータベースの一部であるかのように、SQLを使用してクエリできます。フェデレーテッドクエリエンジンがSQLクエリを変換し、適切なデータソースで実行します。
    *   **ビュー:** 異なるソース間で統合されたビューを作成して、データアクセスを簡素化します（ETL不要）。
    *   **ナレッジベース:** 非構造化データをインデックス化して整理し、効率的な検索を実現します。
    *   **MLモデル:** AI/ML変換を適用して、データから洞察を得ます。
*   **データからの応答:**
    *   **エージェント:** 接続および統合されたデータに関する質問に答えることに特化した組み込みエージェントを構成できます。
    *   **MCP:** MCP (Model Context Protocol) を介してMindsDBに接続し、シームレスなインタラクションを実現します。
    *   **ジョブ:** 同期と変換タスクをスケジュールして、リアルタイム処理を行います。

### インストール方法

MindsDBはオープンソースのサーバーであり、ラップトップからクラウドまで、さまざまな環境にデプロイできます。

*   Docker Desktopを使用する方法 (最も速く、推奨される方法)
*   Dockerを使用する方法 (より柔軟なカスタマイズが可能)
*   PyPIを使用する方法 (MindsDBへの貢献を可能にする)

### コミュニティとサポート

*   [ウェブサイト](https://www.mindsdb.com?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo)
*   [ドキュメント](https://docs.mindsdb.com?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo)
*   [デモ](https://mdb.ai/register)
*   [コミュニティSlack](https://mindsdb.com/joincommunity?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo)
*   [GitHub Discussions](https://github.com/mindsdb/mindsdb/discussions)
*   [Stack Overflow](https://stackoverflow.com/questions/tagged/mindsdb)
*   商用サポートについては、[MindsDBチームにお問い合わせください](https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo)。

### 貢献について

MindsDBへの貢献を歓迎しており、[貢献ガイド](https://docs.mindsdb.com/contribute/contribute?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo)を参照していただくことができます。バグ報告やアイデアは、GitHubの[issue](https://github.com/mindsdb/mindsdb/issues/new/choose)を通じて受け付けています。


---

# XiaoYouChR/Ghost-Downloader-3

**stars**: 1526

[View Repository on Github](https://github.com/XiaoYouChR/Ghost-Downloader-3)

A cross-platform fluent-design AI-boost multi-threaded downloader built with Python.

## README要約
## Ghost-Downloader-3 の詳細な要約

**概要:**

Ghost-Downloader-3 は、Python で構築されたクロスプラットフォームの洗練されたデザイン（Fluent Design）の AI 搭載マルチスレッドダウンローダーです。開発者本人の個人的な興味から開発が始まり、元々は Bilibili のアップローダーのリソース統合を支援するために設計されました。IDM のようなインテリジェントなチャンク分割（ファイルのマージなし）と AI を活用したスマートブースト機能を備えています。

**主な特徴:**

*   クロスプラットフォーム対応（Linux, Windows, macOS）
*   AI を活用したスマートブースト
*   IDM ライクなインテリジェントなチャンク分割（ファイルのマージなし）
*   将来的なプラグインサポートによる Python の利点の最大化

**対応プラットフォーム:**

| プラットフォーム | 必須バージョン | アーキテクチャ | 互換性 |
| :--------------: | :--------------: | :--------------: | :----: |
|     🐧 Linux      |    `glibc 2.35+`   |  `x86_64`/`arm64` |   ✅   |
|    🪟 Windows    |     `7 SP1+`     |  `x86_64`/`arm64` |   ✅   |
|     🍎 macOS     |     `11.0+`      |  `x86_64`/`arm64` |   ✅   |

**注意点:**

*   開発者は大学入学試験の準備のため、プロジェクトの更新は一時的に中断されています。
*   Windows 7 で Ghost-Downloader-3 を使用する場合は、`v3.5.8-Portable` バージョンをダウンロードしてください。
*   Arch Linux AUR には、コミュニティがメンテナンスしているパッケージ (`ghost-downloader-bin` と `ghost-downloader-git`) があります。

**ロードマップ:**

*   ✅ グローバル設定
*   ✅ より詳細なダウンロード情報
*   ✅ スケジュールタスク
*   ✅ ブラウザ拡張機能の最適化
*   ✅ グローバル速度制限
*   ✅ メモリ最適化
    *   ✅ Qt バージョンのアップグレード
    *   ✅ HttpClient の再利用の実装
    *   ✅ 一部のマルチスレッドをコルーチンに置き換える
*   ❌ MVC -> MVVM アーキテクチャへのアップグレードとプラグインサポート (進行中... Folk: feature/Plugins を参照)
*   ❌ タスク編集の強化 (複数のクライアントを 1 つのタスクにバインドするなどの強力な機能)
*   ❌ Magnet/BT ダウンロード (libtorrent の実装を検討中)

**貢献:**

プロジェクトへの貢献を歓迎しています。バグ報告や機能要求は、GitHub の issues から行えます。改善提案がある場合は、fork して pull request を作成してください。

**スポンサー:**

SignPath.io による Windows での無料コード署名を提供しています。

**参考:**

*   [PyQt-Fluent-Widgets](https://github.com/zhiyiYo/PyQt-Fluent-Widgets)
*   [Httpx](https://github.com/projectdiscovery/httpx)
*   [Aiofiles](https://github.com/Tinche/aiofiles)
*   [Loguru](https://github.com/Delgan/loguru)
*   [Nuitka](https://github.com/Nuitka/Nuitka)
*   [PySide6](https://github.com/PySide/pyside-setup)
*   [Darkdetect](https://github.com/albertosottile/darkdetect)
*   [pyqt5-concurrent](https://github.com/AresConnor/pyqt5-concurrent)

**謝辞:**

*   [@zhiyiYo](https://github.com/zhiyiYo/)
*   [@一只透明人-](https://space.bilibili.com/554365148/)
*   [@Sky·SuGar](https://github.com/SuGar0218/)

**連絡先:**

*   E-mail: XiaoYouChR@qq.com
*   QQ グループ: 531928387


---

# freeCodeCamp/freeCodeCamp

**stars**: 418548

[View Repository on Github](https://github.com/freeCodeCamp/freeCodeCamp)

freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

## README要約
## freeCodeCamp/freeCodeCamp リポジトリ概要

このリポジトリは、freeCodeCamp.org のオープンソースのコードベースとカリキュラムを公開しています。無料の数学、プログラミング、コンピュータサイエンスの学習に利用できます。

### 主な内容

*   **無料のプログラミング学習プラットフォーム:** freeCodeCamp.org は、フルスタック Web 開発と機械学習のカリキュラムを無料で提供しています。自己学習型で、インタラクティブなコーディングチャレンジが多数用意されています。
*   **無料の認定:** 複数の無料のプログラミング認定を提供しており、各認定には、必要な Web アプリプロジェクトの構築と、プロジェクトの準備に役立つオプションのコーディングチャレンジが含まれています。 認定取得者は、LinkedIn や履歴書にリンクでき、雇用主やフリーランスのクライアントが検証済みの認定を確認できます。
*   **主要な認定:**
    1.  Responsive Web Design Certification
    2.  JavaScript Algorithms and Data Structures Certification
    3.  Front End Libraries Certification
    4.  Data Visualization Certification
    5.  Relational Database
    6.  Back End Development and APIs Certification
    7.  Quality Assurance Certification
    8.  Scientific Computing with Python Certification
    9.  Data Analysis with Python Certification
    10. Information Security Certification
    11. Machine Learning with Python Certification
    12. College Algebra with Python
*   **Legacy 認定:** 上記の主要な認定に加えて、レガシー認定も提供しています。
*   **無料のプロフェッショナル認定:** Foundational C# with Microsoft
*   **コミュニティ:** フォーラム、YouTubeチャンネル、技術出版物、Discord サーバーがあり、学習者間のサポート体制が整っています。
*   **バグ報告:** バグを見つけた場合は、報告方法に従い GitHub Issue を作成します。
*   **セキュリティ問題の報告:** セキュリティポリシーに従い脆弱性を報告します。
*   **貢献:** コミュニティへの貢献を歓迎しています。貢献方法については、[https://contribute.freecodecamp.org](https://contribute.freecodecamp.org) を参照してください。
*   **ライセンス:** BSD-3-Clause ライセンス

### その他

*   [freeCodeCamp.org](https://www.freecodecamp.org) で実際に稼働しています。
*   Gitpod を利用したセットアップの自動化に対応しています。
*   プルリクエストを歓迎しています。
*   コミュニティの貢献者の分析が提供されています。


---

# Fosowl/agenticSeek

**stars**: 3324

[View Repository on Github](https://github.com/Fosowl/agenticSeek)

Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code for the sole cost of electricity.

## README要約
## AgenticSeek: 詳細な要約 (日本語)

AgenticSeekは、クラウドに依存せず、完全にローカルで動作する、音声対応のAIアシスタントです。Webブラウジング、コーディング、タスク計画を自律的に行い、すべてのデータはデバイス内に保持されます。これにより、プライバシーが完全に保護され、API利用料などのコストも発生しません。

### 主な特徴

*   **完全ローカル & プライベート:** すべての処理が自分のマシン上で行われるため、データの共有やクラウドへの依存がありません。ファイル、会話、検索履歴はすべてプライベートに保たれます。
*   **スマートWebブラウジング:** 自律的にインターネットをブラウズし、検索、情報抽出、Webフォームへの入力など、すべてハンズフリーで行えます。
*   **自律的なコーディングアシスタント:** Python、C、Go、Javaなど、さまざまな言語でのコードの記述、デバッグ、実行をサポートします。
*   **スマートエージェント選択:** 質問に応じて、最適なエージェントを自動的に選択します。複数の専門家チームがいるようなものです。
*   **複雑なタスクの計画と実行:** 旅行計画から複雑なプロジェクトまで、大きなタスクをステップに分割し、複数のAIエージェントを使用して実行します。
*   **音声対応:** クリーンで高速な、SF映画のような音声とテキスト読み上げ機能により、まるで個人のAIと話しているような体験ができます。

### デモ

デモ動画が提供されており、AgenticSeekがどのように動作するかの例を確認できます。デモで使用されているファイルは全てフィクションであり、オープンソースの貢献者を求めていることが明記されています。

### インストール

AgenticSeekを使用するには、Chromeドライバー、Docker、Python 3.10が必要です。

**1. リポジトリのクローンとセットアップ:**

```bash
git clone https://github.com/Fosowl/agenticSeek.git
cd agenticSeek
mv .env.example .env
```

**2. 仮想環境の作成:**

```bash
python3 -m venv agentic_seek_env
source agentic_seek_env/bin/activate
# Windowsの場合: agentic_seek_env\Scripts\activate
```

**3. パッケージのインストール:**

*   **自動インストール（推奨）:**

    *   Linux/MacOS: `./install.sh`
    *   Windows: `./install.bat`
*   **手動インストール:**

    *   **Linux:** `sudo apt update`、依存関係のインストール、Chromeドライバーのインストール（Chromeのバージョンに一致させる）、`pip3 install -r requirements.txt`
    *   **MacOS:** `brew update`、`brew install --cask chromedriver`、`brew install portaudio`、`pip3 install --upgrade pip`、`pip3 install --upgrade setuptools wheel`、`pip3 install -r requirements.txt`
    *   **Windows:** `pip install pyreadline3`、`pip install pyaudio`、Chromeドライバーの手動インストール、`pip3 install -r requirements.txt`

### ローカルLLMの実行設定

ローカルでLLMを実行するには、十分なハードウェアが必要です。Qwen/Deepseek 14Bを実行するには、最低限GPUが必要です。FAQで詳細なモデルとパフォーマンスの推奨事項を確認してください。

**ローカルプロバイダーの設定:**

Ollamaなどのローカルプロバイダーを起動します。

```bash
ollama serve
```

**config.iniの更新:**

`config.ini`ファイルで、`provider_name`をサポートされているプロバイダーに、`provider_model`をプロバイダーがサポートするLLMに設定します。QwenまたはDeepseekなどの推論モデルが推奨されます。

```ini
[MAIN]
is_local = True
provider_name = ollama
provider_model = deepseek-r1:14b
provider_server_address = 127.0.0.1:11434
agent_name = Jarvis
recover_last_session = True
save_session = True
speak = True
listen = False
work_dir =  /Users/mlg/Documents/workspace
jarvis_personality = False
languages = en zh
```

**ローカルプロバイダーのリスト:**

| プロバイダー  | ローカル? | 説明                                                  |
| :----------- | :-------- | :---------------------------------------------------- |
| ollama       | はい       | ollamaをLLMプロバイダーとして使用して、ローカルでLLMを簡単に実行 |
| lm-studio    | はい       | LM studioでローカルLLMを実行 (`provider_name`を`lm-studio`に設定) |
| openai       | はい       | OpenAI互換APIを使用 (例: llama.cppサーバー)              |

### APIを使用した実行設定

`config.ini`で目的のプロバイダーを設定します。

```ini
[MAIN]
is_local = False
provider_name = google
provider_model = gemini-2.0-flash
provider_server_address = 127.0.0.1:5000
```

APIキーをエクスポートします。 `export <<PROVIDER>>_API_KEY="xxx"`

例: `export TOGETHER_API_KEY="xxxxx"`

**APIプロバイダーのリスト:**

| プロバイダー  | ローカル? | 説明                                                  |
| :----------- | :-------- | :---------------------------------------------------- |
| openai       | 可変      | ChatGPT APIを使用 (非プライベート)                                    |
| deepseek     | いいえ      | Deepseek API (非プライベート)                                   |
| huggingface  | いいえ      | Hugging-Face API (非プライベート)                                  |
| togetherAI   | いいえ      | together AI APIを使用 (非プライベート)                                |
| google       | いいえ      | Google Gemini APIを使用 (非プライベート)                              |

### サービスの開始と実行

仮想環境をアクティブ化します。

```bash
source agentic_seek_env/bin/activate
```

必要なサービスを開始します。これは、docker-compose.ymlからすべてのサービスを開始します。

```bash
sudo ./start_services.sh # MacOS
start ./start_services.cmd # Window
```

**オプション1：CLIインターフェースで実行:**

```bash
python3 cli.py
```

CLIモードでは、`config.ini`で`headless_browser`をFalseに設定することをお勧めします。

**オプション2：Webインターフェースで実行:**

バックエンドを起動します。

```bash
python3 api.py
```

`http://localhost:3000/`にアクセスすると、Webインターフェースが表示されます。

### 使用方法

サービスが`./start_services.sh`で起動していることを確認し、CLIモードの場合は`python3 cli.py`を実行するか、Webインターフェースの場合は`python3 api.py`を実行して`localhost:3000`にアクセスします。

CLIモードでのみ、`config.ini`で`listen = True`に設定することで、音声入力を使用できます。

終了するには、`goodbye`と発話または入力します。

**使用例:**

> `Make a snake game in python!`
> `Search the web for top cafes in Rennes, France, and save a list of three with their addresses in rennes_cafes.txt.`
> `Write a Go program to calculate the factorial of a number, save it as factorial.go in your workspace`

タスクを要求すると、AgenticSeekは最適なエージェントを割り当てます。初期のプロトタイプであるため、クエリによっては適切なエージェントが割り当てられない場合があります。

### ローカルでLLMを実行するための設定

強力なコンピュータやサーバーを持っている場合、カスタムLLMサーバーを使用して、ラップトップからリモートサーバーでLLMを実行できます。

1.  LLMを実行するサーバーでIPアドレスを取得します。

    ```bash
    ip a | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | cut -d/ -f1 # local ip
    curl https://ipinfo.io/ip # public ip
    ```
    WindowsまたはmacOSの場合は、ipconfigまたはifconfigを使用してIPアドレスを見つけます。
2.  リポジトリをクローンし、`server/`フォルダーに入ります。

    ```bash
    git clone --depth 1 https://github.com/Fosowl/agenticSeek.git
    cd agenticSeek/llm_server/
    ```
3.  サーバー固有の要件をインストールします。

    ```bash
    pip3 install -r requirements.txt
    ```
4.  サーバーのスクリプトを実行します。

    ```bash
    python3 app.py --provider ollama --port 3333
    ```

    `ollama`と`llamacpp`をLLMサービスとして使用できます。
5.  自分のコンピュータで:

    `config.ini`ファイルを変更して、`provider_name`を`server`に、`provider_model`を`deepseek-r1:xxb`に設定します。`provider_server_address`を、モデルを実行するマシンのIPアドレスに設定します。

    ```ini
    [MAIN]
    is_local = False
    provider_name = server
    provider_model = deepseek-r1:70b
    provider_server_address = x.x.x.x:3333
    ```

### 音声入力

現在、音声入力は英語でのみ機能します。

音声入力はデフォルトで無効になっています。有効にするには、`config.ini`ファイルでlistenオプションをTrueに設定します。

```ini
listen = True
```

有効にすると、音声入力機能は、入力の処理を開始する前に、トリガーキーワード（エージェント名）をリスニングします。エージェント名は、`config.ini`ファイルで`agent_name`値を更新することでカスタマイズできます。

```ini
agent_name = Friday
```

最適な認識のために、「John」や「Emma」などの一般的な英語名を使用することをお勧めします。

文字起こしが表示され始めたら、エージェントの名前を声に出して起動します（例： "Friday"）。

クエリを明確に話します。

システムに続行を指示するために、確認フレーズで要求を終了します。確認フレーズの例は次のとおりです。

```
"do it", "go ahead", "execute", "run", "start", "thanks", "would ya", "please", "okay?", "proceed", "continue", "go on", "do that", "go it", "do you understand?"
```

### config.iniの設定

```ini
[MAIN]
is_local = True
provider_name = ollama
provider_model = deepseek-r1:32b
provider_server_address = 127.0.0.1:11434
agent_name = Friday
recover_last_session = False
save_session = False
speak = False
listen = False
work_dir =  /Users/mlg/Documents/ai_folder
jarvis_personality = False
languages = en zh
[BROWSER]
headless_browser = False
stealth_mode = False
```

**説明:**

*   `is_local` -> エージェントをローカルで実行するか（True）、リモートサーバーで実行するか（False）
*   `provider_name` -> 使用するプロバイダー（`ollama`、`server`、`lm-studio`、`deepseek-api`のいずれか）
*   `provider_model` -> 使用するモデル (例: deepseek-r1:32b)
*   `provider_server_address` -> サーバーアドレス。例: ローカルの場合は127.0.0.1:11434。非ローカルAPIの場合は任意の値。
*   `agent_name` -> エージェントの名前。例: Friday。TTSのトリガーワードとして使用。
*   `recover_last_session` -> 前回のセッションから再開するか（True）、しないか（False）
*   `save_session` -> セッションデータを保存するか（True）、しないか（False）
*   `speak` -> 音声出力を有効にするか（True）、しないか（False）
*   `listen` -> 音声入力を聞くか（True）、しないか（False）
*   `work_dir` -> AIがアクセスできるフォルダー。例: /Users/user/Documents/
*   `jarvis_personality` -> JARVISのようなパーソナリティを使用するか（True）、しないか（False）。プロンプトファイルを変更するだけ。
*   `languages` -> サポートされている言語のリスト。llmルーターが正しく機能するために必要。言語が多すぎると、ダウンロードされるモデルも多くなる。
*   `headless_browser` -> ブラウザーを可視ウィンドウなしで実行するか（True）、しないか（False）
*   `stealth_mode` -> ボット検出を難しくします。唯一の欠点は、anticaptcha拡張機能を手動でインストールする必要があることです。

### プロバイダー

| プロバイダー      | ローカル? | 説明                                                  |
| :--------------- | :-------- | :---------------------------------------------------- |
| ollama           | はい       | ollamaをLLMプロバイダーとして使用して、ローカルでLLMを簡単に実行 |
| server           | はい       | モデルを別のマシンでホストし、ローカルマシンを実行する         |
| lm-studio        | はい       | LM studioでローカルLLMを実行 (`lm-studio`)               |
| openai           | 可変      | ChatGPT APIを使用 (非プライベート)またはopenai互換API       |
| deepseek-api     | いいえ      | Deepseek API (非プライベート)                                   |
| huggingface      | いいえ      | Hugging-Face API (非プライベート)                                  |
| togetherAI       | いいえ      | together AI APIを使用 (非プライベート)                                |
| google           | いいえ      | Google Gemini APIを使用 (非プライベート)                              |

プロバイダーを選択するには、`config.ini`を変更します。

```ini
is_local = True
provider_name = ollama
provider_model = deepseek-r1:32b
provider_server_address = 127.0.0.1:5000
```

*   `is_local`: ローカルでLLMを実行する場合はTrue、それ以外の場合はFalse。
*   `provider_name`: プロバイダーをその名前で選択します。上記のプロバイダーリストを参照してください。
*   `provider_model`: エージェントが使用するモデルを設定します。
*   `provider_server_address`: サーバープロバイダーを使用していない場合は、任意の値に設定できます。

### 既知の問題

*   **Chromedriverの問題:**
    *   **Chromedriverのバージョンミスマッチ:** ChromeとChromedriverのバージョンが一致しない場合。

        *   最新バージョンのChromedriverをダウンロードしてください。
            *   Chromeバージョン115以降の場合は、[https://googlechromelabs.github.io/chrome-for-testing/](https://googlechromelabs.github.io/chrome-for-testing/)から、OSに合ったChromedriverをダウンロードします。
    *   問題があれば、issueを報告してください。
*   **connection adaptersの問題:** `No connection adapters were found for '127.0.0.1:11434/v1/chat/completions'`などのエラーが表示される場合、プロバイダーのIPアドレスの前に`http://`があることを確認してください。
    `provider_server_address = http://127.0.0.1:11434`
*   **SearxNG base URL must be provided:** `.env.example`を`.env`として移動したか、または`SEARXNG_BASE_URL`をエクスポートしたかを確認してください。
    `export  SEARXNG_BASE_URL="http://127.0.0.1:8080"`

### FAQ

*   **Q: 必要なハードウェアは？**

    | モデルサイズ | GPU         | コメント                                                                                                       |
    | :---------- | :---------- | :------------------------------------------------------------------------------------------------------------- |
    | 7B          | 8GB VRAM    | 推奨しません。パフォーマンスが低く、幻覚が頻繁に発生し、プランナーエージェントは失敗する可能性が高いです。                        |
    | 14B         | 12 GB VRAM (例: RTX 3060) | 簡単なタスクには使用できます。Webブラウジングや計画タスクには苦労する可能性があります。                                            |
    | 32B         | 24+ GB VRAM (例: RTX 4090) | ほとんどのタスクで成功しますが、タスク計画にはまだ苦労する可能性があります。                                                       |
    | 70B+        | 48+ GB VRAM (例: Mac Studio) | 優れています。高度なユースケースに推奨。                                                                             |
*   **Q: なぜ他のモデルではなくDeepseek R1なのか？**

    Deepseek R1は、そのサイズに対して推論とツール利用に優れています。他のモデルも問題なく動作しますが、Deepseekが主な選択肢です。
*   **Q: `cli.py`を実行するとエラーが発生します。どうすればいいですか？**

    ローカルが実行されていること（`ollama serve`）、`config.ini`がプロバイダーと一致していること、依存関係がインストールされていることを確認してください。
*   **Q: 100%ローカルで本当に実行できますか？**

    はい、Ollama、lm-studio、またはサーバープロバイダーを使用すると、すべての音声入力、LLM、およびテキスト読み上げモデルがローカルで実行されます。非ローカルオプション（OpenAIまたはその他のAPI）はオプションです。
*   **Q: Manusがあるのに、なぜAgenticSeekを使用するのですか？**

    これは、AIエージェントに関する興味から始まったサイドプロジェクトです。ローカルモデルを使用し、APIを回避したいと考えています。
    Manusとは異なり、AgenticSeekは外部システムからの独立性を優先し、より多くの制御、プライバシーを提供し、APIコストを回避します。

### 貢献

AgenticSeekを改善するための開発者を募集しています。オープンイシューまたはディスカッションを確認してください。

### メンテナ

*   [Fosowl](https://github.com/Fosowl) | パリ時間 | (時々忙しい)
*   [https://github.com/antoineVIVIES](antoineVIVIES) | 台北時間 | (よく忙しい)
*   [steveh8758](https://github.com/steveh8758) | 台北時間 | (いつも忙しい)

