
# Fosowl/agenticSeek

**stars**: 11726

[View Repository on Github](https://github.com/Fosowl/agenticSeek)

Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code for the sole cost of electricity.

## README要約
## AgenticSeek: 詳細な要約 (日本語)

AgenticSeek は、クラウドサービスや API を利用せずに、完全にローカルで動作する自律型 AI エージェントです。  ウェブの閲覧、コードの記述、タスクの計画を、電力コストのみで実現します。完全なプライバシーとクラウドへの依存ゼロを保証し、ローカル推論モデルに最適化されています。

**主な特徴:**

*   **100% ローカル & プライベート:** すべてがあなたのデバイス上で動作し、クラウドへのデータ共有はありません。ファイル、会話、検索は完全にプライベートに保たれます。
*   **インテリジェントなウェブブラウジング:**  自律的にインターネットを閲覧し、検索、情報抽出、フォームへの入力が可能です。
*   **自律的なコーディングアシスタント:** Python、C、Go、Java などでコードの記述、デバッグ、実行を監督なしで行えます。
*   **スマートなエージェント選択:** 質問に応じて最適なエージェントを自動的に選択します。
*   **複雑なタスクの計画と実行:**  旅行計画から複雑なプロジェクトまで、大きなタスクを段階に分割し、複数の AI エージェントを使用して実行します。
*   **音声対応:**  SF 映画のような、クリアで高速な音声によるテキスト読み上げと音声入力が可能です。

**デモ動画:**

AgenticSeek がどのように動作するかを示すデモ動画が提供されています。 例えば、プロジェクトのスキルを調べ、CV ファイルを開き、最適な人材を特定するようなタスクを実行できます。

**重要な注意点:**

*   **開発中:** コード/Bash はまだ Docker 化されていません。
*   **実験的プロジェクト:** 安定版ではなく、貢献とフィードバックを歓迎しています。

**インストール:**

1.  **リポジトリのクローンとセットアップ:**
    ```bash
    git clone https://github.com/Fosowl/agenticSeek.git
    cd agenticSeek
    mv .env.example .env
    ```
2.  **仮想環境の作成:**
    ```bash
    python3 -m venv agentic_seek_env
    source agentic_seek_env/bin/activate
    # Windows: agentic_seek_env\Scripts\activate
    ```
3.  **パッケージのインストール:**
    *   Python、Docker、docker compose、Google Chrome がインストールされていることを確認してください。
    *   Python 3.10 を推奨します。
    *   **自動インストール (推奨):**
        *   Linux/MacOS: `./install.sh`
        *   Windows: `./install.bat`
    *   **手動インストール:** 各 OS に応じて、ChromeDriver のインストール、依存関係のインストールを行います。 Chrome のバージョンと ChromeDriver のバージョンが一致することを確認してください。
        *   **Linux:** `apt update`、依存関係インストール、ChromeDriver インストール、`pip3 install -r requirements.txt`
        *   **MacOS:** `brew update`、ChromeDriver インストール、portaudio インストール、`pip3 install --upgrade pip`、`pip3 install --upgrade setuptools wheel`、`pip3 install -r requirements.txt`
        *   **Windows:** pyreadline3 インストール、portaudio 手動インストール、ChromeDriver 手動インストール、`pip install -r requirements.txt`

**ローカルで LLM を実行するための設定:**

*   **ハードウェア要件:**  Qwen/Deepseek 14B を実行できる GPU が必要です。詳細な推奨事項は FAQ を参照してください。
*   **ローカルプロバイダーの設定:** Ollama などのローカルプロバイダーを起動します。
    ```bash
    ollama serve
    ```
    他のローカルプロバイダーも利用可能です。
*   **config.ini の更新:** `config.ini` ファイルを編集し、`provider_name` をサポートされているプロバイダーに、`provider_model` をお使いのプロバイダーがサポートしている LLM に設定します。
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
    [BROWSER]
    headless_browser = True
    stealth_mode = True
    ```
*   **ローカルプロバイダーの例:**
    *   ollama: `Yes` (Ollama を使用して LLM をローカルで簡単に実行)
    *   lm-studio: `Yes` (LM Studio を使用して LLM をローカルで実行)
    *   openai: `Yes` (openai 互換 API を使用)

**API を使用して実行するための設定:**

1.  `config.ini` ファイルで、使用したいプロバイダーを設定します。
    ```ini
    [MAIN]
    is_local = False
    provider_name = google
    provider_model = gemini-2.0-flash
    provider_server_address = 127.0.0.1:5000
    ```
2.  API キーをエクスポートします。
    ```bash
    export <<PROVIDER>>_API_KEY="xxx"
    ```
    例: `export TOGETHER_API_KEY="xxxxx"`
*   **API プロバイダーの例:**
    *   openai (ChatGPT API)
    *   deepseek (Deepseek API)
    *   huggingface (Hugging-Face API)
    *   togetherAI (together AI API)
    *   google (google gemini API)
    *   API を使用する場合、 `is_local = False`に設定します。

**サービスの起動と実行:**

1.  Python 環境をアクティブにします (必要な場合)。
    ```bash
    source agentic_seek_env/bin/activate
    ```
2.  必要なサービスを起動します。
    ```bash
    sudo ./start_services.sh  # MacOS
    start ./start_services.cmd # Windows
    ```
3.  **オプション 1:** CLI インターフェースで実行します。
    ```bash
    python3 cli.py
    ```
    CLI モードでは、`config.ini` で `headless_browser` を `False` に設定することを推奨します。
4.  **オプション 2:** Web インターフェースで実行します。
    *   バックエンドを起動します。
        ```bash
        python3 api.py
        ```
    *   `http://localhost:3000/` にアクセスすると、Web インターフェースが表示されます。

**使用方法:**

*   サービスが `./start_services.sh` で起動されていることを確認します。
*   CLI モードでは `python3 cli.py` を実行します。
*   Web インターフェースでは、`python3 api.py` を実行し、`localhost:3000` にアクセスします。
*   CLI モードでは、`config.ini` で `listen = True` に設定することで、音声入力を利用できます。
*   終了するには、`goodbye` と入力または発話します。

**使用例:**

*   「Python でスネークゲームを作って！」
*   「フランスのレンヌにある最高のカフェをウェブ検索し、住所とともに 3 つリストして、rennes\_cafes.txt に保存して。」
*   「Go で数値の階乗を計算するプログラムを書き、workspace に factorial.go として保存して。」
*   「summer\_pictures フォルダからすべての JPG ファイルを検索し、今日の日付で名前を変更し、名前変更されたファイルのリストを photos\_list.txt に保存して。」
*   「2024 年の人気の SF 映画をオンラインで検索し、今夜見る 3 つを選んで、movie\_night.txt にリストして。」
*   「2025 年の最新の AI ニュース記事をウェブで検索し、3 つを選択し、タイトルと概要をスクレイピングする Python スクリプトを作成して。スクリプトを news\_scraper.py として、概要を /home/projects の ai\_news.txt に保存して。」

**LLM を独自サーバーで実行するための設定:**

1.  LLM を実行する「サーバー」の IP アドレスを取得します。
    ```bash
    ip a | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | cut -d/ -f1 # ローカル IP
    curl https://ipinfo.io/ip # 公開 IP
    ```
2.  リポジトリをクローンし、`server/` フォルダに入ります。
    ```bash
    git clone --depth 1 https://github.com/Fosowl/agenticSeek.git
    cd agenticSeek/llm_server/
    ```
3.  サーバー固有の要件をインストールします。
    ```bash
    pip3 install -r requirements.txt
    ```
4.  サーバー スクリプトを実行します。
    ```bash
    python3 app.py --provider ollama --port 3333
    ```
5.  個人用コンピュータで `config.ini` ファイルを変更し、`provider_name` を `server` に、`provider_model` を `deepseek-r1:xxb` に設定します。
    ```ini
    [MAIN]
    is_local = False
    provider_name = server
    provider_model = deepseek-r1:70b
    provider_server_address = x.x.x.x:3333
    ```
    `provider_server_address` を LLM を実行するマシンの IP アドレスに設定します。

**音声入力 (Speech to Text):**

*   現在、音声入力は英語のみ対応しています。
*   デフォルトでは無効になっています。`config.ini` で `listen = True` に設定して有効にします。
*   エージェント名をトリガーキーワードとして、エージェントの名前 (`agent_name`) を設定できます。
*   エージェントの名前を呼ぶと、音声入力が開始されます。例: "Friday"。
*   クエリを明確に話します。
*   要求を「do it」、「go ahead」などの確認フレーズで終了します。

**config.ini の詳細:**

設定ファイルの各項目の説明と設定例が提供されています。

**利用可能なプロバイダー:**

*   ollama、server、lm-studio (ローカル)
*   openai、deepseek-api、huggingface、togetherAI、google (API)

プロバイダーを選択するには、`config.ini` を編集します。

**既知の問題:**

*   Chromedriver の問題: ブラウザと ChromeDriver のバージョンの不一致。
*   接続アダプタの問題: `provider_server_address` に `http://` を追加する。
*   SearxNG のベース URL が必要。
*   FAQ があり、ハードウェア要件、Deepseek R1 を使用する理由、エラー解決方法、ローカルでの実行可能性などについて説明されています。

**貢献:**

AgenticSeek の改善に貢献する開発者を募集しています。 問題や議論を確認してください。 [貢献ガイド](./docs/CONTRIBUTING.md)

**メンテナ:**

*   Fosowl
*   antoineVIVIES
*   steveh8758


---

# duixcom/Duix.mobile

**stars**: 6527

[View Repository on Github](https://github.com/duixcom/Duix.mobile)



## README要約
## duixcom/Duix.mobile リポジトリ概要（日本語）

このリポジトリは、DUIX（Dialogue User Interface System）によって開発された、リアルタイムインタラクションのためのオンデバイスAI搭載デジタルヒューマンSDK「DUIX-Mobile」のモバイル版（Android/iOS）です。

**主な特徴:**

*   **リアルなAI:** 人間の表情、話し方、共感を模倣します。
*   **高速応答:** 1.5秒以内のリアルタイムインタラクションを実現します。
*   **低コスト展開:** モバイルデバイスやスマートスクリーンなど、低リソース環境での迅速なセットアップが可能です。
*   **ネットワーク負荷の軽減:** デバイス内処理により、通信要件を最小限に抑え、金融、政府、法律などの分野に適しています。
*   **高い適応性:** モジュール化されたスケーラブルなアーキテクチャにより、様々な業界のニーズに合わせてデジタルヒューマンとシナリオをカスタマイズできます。

**主な機能:**

*   デジタルヒューマンのリアルタイムインタラクション
*   LLM、音声認識（ASR）、テキスト読み上げ（TTS）などの技術統合
*   Android/iOS向けワンクリックデプロイ
*   多様な業界シナリオへの適応（スマートカスタマーサービス、バーチャル弁護士/医師、AIアシスタントなど）

**ドキュメント:**

*   Android開発者向け: [DUIX-Mobile SDK: [Android]](https://github.com/GuijiAI/duix.ai/blob/main/duix-android/dh_aigc_android/README_en.md)
*   iOS開発者向け: [DUIX-Mobile SDK: [iOS]](https://github.com/GuijiAI/duix.ai/blob/main/duix-ios/GJLocalDigitalDemo/GJLocalDigitalSDK_en.md)

**モデルダウンロード:**

リポジトリには、すぐに利用できる公開テストモデルが提供されています。女性と男性のデジタルヒューマンモデルがそれぞれ複数用意されており、サンプル動画とともにダウンロードできます。

**ユースケース:**

様々なプラットフォーム（ウェブ、モバイル、Androidスマートディスプレイなど）でのアプリケーションをサポートしており、以下の例が紹介されています。

*   **ビジネスケースプレゼンテーション:** デジタル弁護士、デジタル医師、バーチャルコンパニオン、スピーチ家庭教師など
*   **ローエンド端末:** 財神、観音菩薩、蘇軾、バーチャルガールフレンドなど

**FAQ:**

カスタマイズアバターの作成方法、価格設定、カスタムアバターの更新、APIの利用可能性、アバターのジェスチャー制御、ダウンロードファイルの交換、高度なソリューションに関するFAQが掲載されています。

**その他:**

*   DUIX.comのウェブサイトへのリンク、APIリファレンス、デジタルヒューマンの作成ツール、その他の情報が提供されています。
*   質問がある場合は、Issueを上げるか、james@duix.comまで連絡するように促しています。
*   Star Historyのチャートへのリンクがあり、リポジトリのスター数の推移を確認できます。


---

# microsoft/qlib

**stars**: 22948

[View Repository on Github](https://github.com/microsoft/qlib)

Qlib is an AI-oriented quantitative investment platform that aims to realize the potential, empower research, and create value using AI technologies in quantitative investment, from exploring ideas to implementing productions. Qlib supports diverse machine learning modeling paradigms. including supervised learning, market dynamics modeling, and RL.

## README要約
## Microsoft/qlib リポジトリ概要 (日本語)

このリポジトリは、Microsoftが開発した、AIを活用した定量投資プラットフォーム「Qlib」です。アイデア創出から本番運用まで、AI技術を駆使して定量投資の可能性を追求し、研究を促進し、価値を創造することを目指しています。

**主な特徴と機能:**

*   **AI指向:** AI技術を駆使した定量投資プラットフォーム
*   **多様なモデリングパラダイム:** 監督学習、市場力学モデリング、強化学習など、様々な機械学習モデルに対応
*   **エンドツーエンドパイプライン:** データ処理、モデル学習、バックテストまで、定量投資の全工程をサポート
*   **強力なインフラストラクチャ:** データ処理、学習フレームワーク、取引戦略、実行、分析、オンラインサービングなど、Quantの研究を強力にサポート
*   **オープンソース:** 活発な開発が行われ、コミュニティへの貢献を歓迎
*   **最新情報:** 最新のR&D成果である「RD-Agent」をリリース（LLMベースの自動化されたファクターマイニングとモデル最適化ツール）

**主な機能:**

*   **データ処理:** 豊富な金融データの処理能力
*   **モデル学習:** 様々な機械学習モデルのサポート (LightGBM, LSTM, Transformerなど多数)
*   **バックテスト:** モデルの性能評価
*   **取引戦略:** ポートフォリオ最適化、注文執行
*   **分析:** 詳細な分析レポートの生成
*   **オンラインサービング:** 低コストでのモデルのオンライン提供

**最近の更新:**

*   **RD-Agentのリリース:** LLMを活用した自動ファクターマイニングとモデル最適化ツール
    *   GitHub: [https://github.com/microsoft/RD-Agent](https://github.com/microsoft/RD-Agent)
    *   デモページ: [https://rdagent.azurewebsites.net/](https://rdagent.azurewebsites.net/)
    *   論文: [https://arxiv.org/abs/2505.15155](https://arxiv.org/abs/2505.15155)

**その他:**

*   **インストール:** `pip install pyqlib` で簡単にインストール可能
*   **データ準備:** 公開データまたは自身のデータを利用可能
*   **Dockerイメージ:** Docker Hubからイメージをpullし、Qlib環境を簡単に構築可能
*   **自動Quant研究ワークフロー:** `qrun`ツールによる自動化されたワークフローの実行
*   **カスタマイズ可能なワークフロー:** コードによる柔軟なワークフロー構築
*   **Quant Dataset Zoo:** 様々なデータセットを提供
*   **学習フレームワーク:** 監督学習および強化学習に対応
*   **オフライン/オンラインモード:** データサーバーはオフラインまたはオンラインモードで運用可能
*   **関連レポート:** Qlibに関する記事や論文へのリンク

**貢献:**

*   積極的な貢献を歓迎
*   バグ修正、ドキュメント改善、新機能の実装など、様々な貢献が可能
*   貢献の方法については、[コード標準と開発ガイド](docs/developer/code_standard_and_dev_guide.rst)を参照

**その他情報:**

*   問題や質問は、[issues](https://github.com/microsoft/qlib/issues/new/choose)または[gitter](https://gitter.im/Microsoft/qlib)で連絡可能
*   メールでの問い合わせ: [qlib@microsoft.com](mailto:qlib@microsoft.com)

このリポジトリは、AIを活用した定量投資の研究と実践を支援する強力なプラットフォームであり、オープンソースであるため、活発なコミュニティの貢献を通じて進化を続けています。


---

# langflow-ai/langflow

**stars**: 65369

[View Repository on Github](https://github.com/langflow-ai/langflow)

Langflow is a powerful tool for building and deploying AI-powered agents and workflows.

## README要約
## Langflow の概要

Langflow は、AI を活用したエージェントとワークフローを構築およびデプロイするための強力なツールです。開発者向けに、視覚的なオーサリング体験と、すべてのエージェントを任意のフレームワークやスタックで構築されたアプリケーションに統合できる API エンドポイントに変える組み込みの API サーバーの両方を提供します。主要な LLM、ベクトルデータベース、および増え続ける AI ツールライブラリをサポートし、すぐに利用できる機能を備えています。

**主な特徴:**

1.  **ビジュアルビルダー:** 迅速な開始と反復を可能にします。
2.  **コードへのアクセス:** 開発者は Python を使用して任意のコンポーネントを調整できます。
3.  **プレイグラウンド:** ステップバイステップの制御により、フローをすぐにテストおよび反復できます。
4.  **マルチエージェント:** オーケストレーション、会話管理、検索をサポートします。
5.  **API としてデプロイ:** または Python アプリケーション用に JSON としてエクスポートできます。
6.  **オブザーバビリティ:** LangSmith、LangFuse などの統合により、監視機能を提供します。
7.  **エンタープライズ対応:** セキュリティとスケーラビリティを備えています。

**クイックスタート:**

Langflow は Python 3.10 から 3.13 に対応しています。

**インストール方法:**

*   `uv` を使用 (推奨): `uv pip install langflow`
*   `pip` を使用: `pip install langflow`

**デプロイメント:**

*   **セルフマネージド:** オープンソースであり、主要なデプロイメントクラウドにデプロイできます。Docker を使用したデプロイ方法については、[ガイド](https://docs.langflow.org/deployment-docker)を参照してください。
*   **フルマネージド (DataStax):** DataStax Langflow は、ゼロセットアップのフルマネージド環境です。[無料アカウント](https://astra.datastax.com/signup?type=langflow)にサインアップして開始できます。

**その他:**

*   GitHub で Star を付けることで、新しいリリースに関する通知を受け取ることができます。
*   貢献を歓迎しており、[貢献ガイドライン](./CONTRIBUTING.md)を確認してください。
*   コントリビューターのリストが提供されています。


---

# n8n-io/n8n

**stars**: 100402

[View Repository on Github](https://github.com/n8n-io/n8n)

Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.

## README要約
## n8n - 概要

**n8n**は、技術チーム向けのワークフロー自動化プラットフォームです。ノーコードの利便性と、コードの柔軟性を両立しています。400以上のインテグレーション、ネイティブAI機能、そしてフェアコードライセンスにより、データの完全な管理を維持しながら、強力な自動化を構築できます。

### 主な機能

*   **コードの活用:** JavaScript/Pythonの記述、npmパッケージの追加、またはビジュアルインターフェースの使用が可能
*   **AIネイティブプラットフォーム:** LangChainに基づいたAIエージェントワークフローを、独自のデータとモデルで構築
*   **完全な制御:** フェアコードライセンスによりセルフホスト可能、またはクラウドサービスを利用可能
*   **エンタープライズ対応:** 高度な権限管理、SSO、エアギャップ環境へのデプロイに対応
*   **活発なコミュニティ:** 400以上のインテグレーションと900以上のテンプレートが利用可能

### 簡単な始め方

*   **npxでの実行:** `npx n8n` （Node.jsが必要）
*   **Dockerでのデプロイ:** 提供されているDockerコマンドを実行

    Dockerを使用してデプロイ後、エディタはhttp://localhost:5678からアクセスできます。

### リソース

*   ドキュメント
*   400以上のインテグレーション
*   ワークフローの例
*   AI & LangChainガイド
*   コミュニティフォーラム
*   コミュニティチュートリアル

### サポート

ヘルプが必要な場合は、コミュニティフォーラムで他のユーザーと繋がることができます。

### ライセンス

n8nは[fair-code](https://faircode.io)であり、[Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) および [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md)の下で配布されています。

*   **ソースコードの公開:** 常にソースコードが利用可能
*   **セルフホスト可能:** どこにでもデプロイ可能
*   **拡張性:** 独自のノードや機能を容易に追加可能

追加の機能とサポートについては、エンタープライズライセンスが利用可能です。

### 貢献について

バグや機能アイデアがある場合は、コントリビューティングガイドを参照してください。

### チームへの参加

自動化の未来を形作りたい場合は、求人情報を確認してください。

### n8nの意味

「nodemation」を意味し、n-eight-nと発音します。Node.jsを使用し、ノードベースであることから「node-」と自動化を意味する「-mation」を組み合わせた造語です。


---

# zhayujie/chatgpt-on-wechat

**stars**: 37071

[View Repository on Github](https://github.com/zhayujie/chatgpt-on-wechat)

基于大模型搭建的聊天机器人，同时支持 微信公众号、企业微信应用、飞书、钉钉 等接入，可选择GPT4.1/GPT-4o/GPT-o1/ DeepSeek/Claude/文心一言/讯飞星火/通义千问/ Gemini/GLM-4/Kimi/LinkAI，能处理文本、语音和图片，访问操作系统和互联网，支持基于自有知识库进行定制企业智能客服。

## README要約
## zhayujie/chatgpt-on-wechat リポジトリの日本語要約

このリポジトリは、大規模言語モデル（LLM）を基盤としたチャットボットを構築するためのものです。微信公众号（WeChat Official Account）、企業微信アプリ、飞书（Feishu）、钉钉（DingTalk）など、様々なプラットフォームへの接続をサポートしています。

**主な特徴:**

*   **多種多様なLLMの選択肢:** GPT-4o、GPT-4.1、GPT-o1、DeepSeek、Claude、文心一言、讯飞星火、通义千问、Gemini、GLM-4、Kimi、LinkAIなど、複数のLLMをサポート。
*   **マルチモーダル対応:** テキスト、音声、画像に対応。
*   **外部リソースへのアクセス:** オペレーティングシステムへのアクセスやインターネット検索が可能。
*   **企業向けカスタマイズ:** 独自の知識ベースに基づいた企業向けインテリジェントカスタマーサービスの構築をサポート。

**主な機能:**

*   **多様なプラットフォームへの対応:** 微信公众号、企業微信アプリ、飞书、钉钉など、複数のプラットフォームへのデプロイをサポート。
*   **基本会話:** 個人的なチャットやグループチャットでのインテリジェントな返信、複数ターンの会話のコンテキスト記憶をサポート。
*   **音声機能:** 音声メッセージの認識、テキストまたは音声による応答（azure, baidu, google, openai(whisper/tts)など複数の音声モデルをサポート）。
*   **画像機能:** 画像生成、画像認識、画像編集（写真修復など、Dall-E-3, stable diffusion, replicate, midjourney, CogView-3, visionモデルなど）。
*   **豊富なプラグイン:** 個別プラグインによる拡張をサポート。多重人格切り替え、テキストアドベンチャー、不適切語句フィルタリング、チャットログの要約、ドキュメント要約、ネット検索などのプラグインが利用可能。
*   **知識ベース:** 知識ベースファイルをアップロードすることで、カスタムロボットを作成可能。デジタルクローン、インテリジェントカスタマーサービス、プライベートドメインアシスタントとして使用可能。LinkAIを基盤として実現。

**利用上の注意点:**

1.  本プロジェクトは[MITライセンス]に基づいており、技術研究と学習のみを目的としています。
2.  中国国内での使用は、国内のモデルサービスを使用し、コンテンツの安全審査とフィルタリングを行う必要があります。
3.  主な接続先は協調オフィスプラットフォームであり、公众号、企業微信の自社開発アプリケーション、钉钉、飞书などのアクセスチャネルを使用することが推奨されています。
4.  個人、チーム、企業が本プロジェクトをどのような方法で使用し、どのような対象にサービスを提供しても、発生するすべての結果に対して、本プロジェクトは一切の責任を負いません。

**技術スタック:**

*   Python

**導入方法:**

1.  **OpenAI API Keyの取得:** OpenAIアカウントを作成し、APIキーを取得する必要があります。
2.  **Python環境の準備:** Python 3.7.1～3.9.xを推奨。
3.  **コードのクローン:** `git clone https://github.com/zhayujie/chatgpt-on-wechat`
4.  **依存関係のインストール:** `pip3 install -r requirements.txt` (必須) および `pip3 install -r requirements-optional.txt` (オプション)。
5.  **設定ファイルの作成:** `cp config-template.json config.json` し、`config.json`を編集してAPIキー、プロキシなどの設定を行います。
6.  **実行:** `python3 app.py` (ローカル) または `nohup python3 app.py & tail -f nohup.out` (サーバー)。 Docker、Railwayへのデプロイも可能です。

**その他:**

*   [LinkAI](https://link-ai.tech)プラットフォームとの連携により、知識ベースの構築や、Midjourneyによる画像生成などの機能を利用可能。
*   [一键安装启动脚本](https://github.com/zhayujie/chatgpt-on-wechat/wiki/%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E5%90%AF%E5%8A%A8%E8%84%9A%E6%9C%AC)
*   [プロジェクト管理脚本](https://github.com/zhayujie/chatgpt-on-wechat/wiki/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%E8%84%9A%E6%9C%AC)
*   [FAQ](https://github.com/zhayujie/chatgpt-on-wechat/wiki/FAQs) でよくある質問への回答を参照できます。
*   開発への貢献を歓迎しており、プラグインの追加や、他のアプリケーションへの接続などが可能です。
*   [製品コンサルタント](https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/product-manager-qrcode.jpg)への問い合わせも可能です。

**更新履歴:** リポジトリのREADMEには、最新バージョンの機能追加やバグ修正に関する詳細な更新履歴が記載されています。


---

# NomicFoundation/hardhat

**stars**: 7772

[View Repository on Github](https://github.com/NomicFoundation/hardhat)

Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software.

## README要約
## NomicFoundation/hardhat リポジトリの日本語要約

このリポジトリは、Ethereumソフトウェアの開発、デプロイ、テスト、デバッグを行うための開発環境「Hardhat」を提供しています。

**Hardhat の主な特徴:**

*   **Ethereum 開発環境:** SolidityなどのEthereumスマートコントラクト開発に必要なツールを提供します。
*   **コンパイル:** スマートコントラクトのコンパイル機能。
*   **デプロイ:** Ethereumネットワークへのスマートコントラクトのデプロイ機能。
*   **テスト:** スマートコントラクトの単体テストと統合テストの実行環境。
*   **デバッグ:** スマートコントラクトのデバッグツール。
*   **拡張性:** プラグインを通じて機能を拡張可能。
*   **設定可能:** プロジェクトに合わせて設定をカスタマイズ可能。

**README:**

リポジトリには、 `packages/hardhat-core/README.md` が含まれています。 これは、Hardhatの中核部分に関する詳細な情報を提供しており、Hardhatのインストール方法、基本的な使い方、機能、設定方法、プラグインの追加方法など、Hardhatを使い始めるために必要な情報が記載されていると推測されます。

