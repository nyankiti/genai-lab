
# All-Hands-AI/OpenHands

**stars**: 55184

[View Repository on Github](https://github.com/All-Hands-AI/OpenHands)

🙌 OpenHands: Code Less, Make More

## README要約
## OpenHands (旧称 OpenDevin) の概要

OpenHandsは、AIを活用したソフトウェア開発エージェントのためのプラットフォームです。このプラットフォームは、人間が開発で行うことができるほぼすべてのタスクをAIエージェントに実行させることができます。具体的には、コードの修正、コマンドの実行、Webの閲覧、APIの呼び出し、さらにはStackOverflowからのコードスニペットのコピーなど、幅広い機能を提供します。

**主な特徴:**

*   **コード開発の効率化:** 少ないコードでより多くの作業を実現することを目的としています。
*   **AI主導のエージェント:** コードの修正、Web閲覧、API呼び出しなど、様々なタスクを実行できます。
*   **柔軟な実行環境:** OpenHands Cloud、Dockerを使用したローカル実行、ヘッドレスモード、CLIモード、GitHubアクションなど、複数の実行方法が提供されています。
*   **コミュニティ主導:** Slack、Discord、GitHub Issueを通じて活発なコミュニティが形成されています。
*   **包括的なドキュメント:** 詳細なドキュメントが用意されており、OpenHandsの利用方法やトラブルシューティングに関する情報を提供しています。

**利用方法:**

*   **OpenHands Cloud:** 新規ユーザー向けに$50の無料クレジットが付与されます。
*   **Docker:** Dockerを使用してローカル環境で実行できます。
*   **その他の方法:** ヘッドレスモード、CLIモード、GitHubアクションなど、様々な方法でOpenHandsを利用できます。

**重要な注意点:**

*   OpenHandsは、シングルユーザーのローカル環境での利用を想定しており、マルチテナント環境での利用には適していません。

**ドキュメントとコミュニティ:**

*   公式ドキュメント([https://docs.all-hands.dev](https://docs.all-hands.dev))で詳細な情報が得られます。
*   Slack([https://join.slack.com/t/openhands-ai/shared\_invite/zt-34zm4j0gj-Qz5kRHoca8DFCbqXPS~f\_A](https://join.slack.com/t/openhands-ai/shared_invite/zt-34zm4j0gj-Qz5kRHoca8DFCbqXPS~f_A))、Discord([https://discord.gg/ESHStjSjD4](https://discord.gg/ESHStjSjD4))、GitHub Issuesを通じてコミュニティに参加できます。

**その他:**

*   プロジェクトの進捗は、[https://github.com/orgs/All-Hands-AI/projects/1](https://github.com/orgs/All-Hands-AI/projects/1) で確認できます。
*   MITライセンスで公開されています。
*   論文([https://arxiv.org/abs/2407.16741](https://arxiv.org/abs/2407.16741))で詳細が解説されています。


---

# panaversity/learn-agentic-ai

**stars**: 2441

[View Repository on Github](https://github.com/panaversity/learn-agentic-ai)

Learn Agentic AI using Dapr Agentic Cloud Ascent (DACA) Design Pattern and Agent-Native Cloud Technologies: OpenAI Agents SDK, Memory, MCP, A2A, Knowledge Graphs, Dapr, Rancher Desktop, and Kubernetes.

## README要約
## panaversity/learn-agentic-ai リポジトリ要約

このリポジトリは、[Panaversity Certified Agentic & Robotic AI Engineer](https://docs.google.com/document/d/15usu1hkrrRLRjcq_3nCTT-0ljEcgiC44iSdvdqrCprk/edit?usp=sharing)プログラムの一環として、AI-201、AI-202、AI-301の各コースを網羅し、Dapr Agentic Cloud Ascent (DACA) 設計パターンとAgent-Native Cloud技術を用いたAgentic AIの学習を目的としています。

**リポジトリの主な目的と焦点:**

*   **1000万の同時実行AIエージェントに対応できるAIエージェントの設計**
    *   特に、トレーニング中に利用できる限られた資金の中で、この問題を解決するための指導を行うことを目指しています。
*   **DaprとOpenAI Agents SDKの活用:**
    *   Daprは、次世代のマルチAIエージェントシステムの構築における中核技術として、Dapr Actors、Dapr Workflows、Dapr Agentsなどを中心に据えています。
    *   OpenAI Agents SDKは、Agentic AIの学習を始めるための優れたフレームワークとしています。

**DACA設計パターンについて:**

DACA (Dapr Agentic Cloud Ascent)は、洗練された、スケーラブルで、回復力のあるエージェントAIシステムを構築およびデプロイするための戦略的設計パターンです。

*   **DACAの主要コンポーネント:**
    *   OpenAI Agents SDK（コアエージェントロジック）
    *   Model Context Protocol (MCP)（標準化されたツール利用）
    *   Agent2Agent (A2A)プロトコル（エージェント間のシームレスな通信）
    *   Dapr（分散機能の基盤）
*   **特徴:**
    *   AI-first、cloud-firstの原則に基づき、Azure Container AppsやKubernetesなどのプラットフォームにデプロイされたステートレスでコンテナ化されたアプリケーションの使用を促進。
    *   モジュール性、コンテキスト認識、標準化された通信を重視し、多様なAIエージェントがインテリジェントに連携する「Agentia World」を構想。
*   **メリット:**
    *   複雑なクラウドネイティブなAgentic AIアプリケーションを構築するための、堅牢で柔軟かつ費用対効果の高いフレームワークを提供。
    *   最初からスケーラビリティと回復力を備えた設計。

**OpenAI Agents SDKの優位性:**

Agentic AI開発の主要フレームワークとして、OpenAI Agents SDKを推奨しています。その理由は以下の通りです。

*   **高いシンプルさと使いやすさ:** 迅速な開発と幅広いアクセシビリティに最適。
*   **高い制御性と最小限の抽象化:** Agentic開発に必要な柔軟性を提供しつつ、LangGraphのようなフレームワークよりもシンプル。

**DACAコースの概要:**

コースはAI-201、AI-202、AI-301の3つのコースで構成されており、それぞれ14週間かけてAgentic AIの基礎から、Kubernetes、Dapr、Planet-Scaleな分散AIエージェントの開発までを網羅します。

*   **AI-201: Fundamentals of Agentic AI and DACA AI-First Development (14週間)**
    *   Agentic & DACA理論、OpenAI Agents SDK、Agentic設計パターン、メモリ、Postgres/Redis、FastAPI、コンテナ化（Rancher Desktop）、Hugging Face Docker Spacesなど。
    *   [AI-201ビデオプレイリスト](https://www.youtube.com/playlist?list=PL0vKVrkG4hWovpr0FX6Gs-06hfsPDEUe6)
    *   前提条件：[AI-101: Modern AI Python Programming - Your Launchpad into Intelligent Systems](https://github.com/panaversity/learn-modern-ai-python)の修了
*   **AI-202: DACA Cloud-First Agentic AI Development (14週間)**
    *   Rancher Desktop with Local Kubernetes、Advanced FastAPI with Kubernetes、Dapr（workflows, state, pubsub, secrets）、CockRoachdb & RabbitMQ Managed Services、Model Context Protocol、Serverless Containers Deployment (ACA)など。
    *   前提条件：AI-201の修了
*   **AI-301 DACA Planet-Scale Distributed AI Agents (14 週間)**
    *   Certified Kubernetes Application Developer (CKAD)、A2A Protocol、Voice Agents、Dapr Agents/Google ADK、Self-LLMs Hosting、Finetuning LLMsなど。
    *   前提条件：AI-201 & AI-202の修了

**評価方法:**

クイズとハッカソン（すべてオンサイト）を通じて評価を行います。評価内容は、Advanced Modern Python、OpenAI Agents SDK、Protocols & Design Patterns (A2A and MCP)、Hackathon、Containerization + FastAPI、Kubernetes (Rancher Desktop)、Dapr-1、Dapr-2、Hackathon2、CKAD + DAPR + ArgoCD (Simulations) など多岐にわたります。


---

# usebruno/bruno

**stars**: 34072

[View Repository on Github](https://github.com/usebruno/bruno)

Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)

## README要約


---

# virattt/ai-hedge-fund

**stars**: 32302

[View Repository on Github](https://github.com/virattt/ai-hedge-fund)

An AI Hedge Fund Team

## README要約
## AIヘッジファンドの概要

このリポジトリは、AIを活用したヘッジファンドのコンセプト実証プロジェクトです。教育目的のみに開発されており、実際の取引や投資を意図したものではありません。

### 主な目的

AIを活用してトレーディングの意思決定を行うための実験的な試みです。

### 構成要素

このシステムは、以下の16の異なるエージェントが連携して機能します。

1.  **Aswath Damodaran Agent (バリュエーションの専門家):** ストーリー、数字、そして規律あるバリュエーションに焦点を当てます。
2.  **Ben Graham Agent (バリュー投資の父):** 安全域を持つ隠れた優良株のみを購入します。
3.  **Bill Ackman Agent (アクティビスト投資家):** 大胆なポジションを取り、変化を促します。
4.  **Cathie Wood Agent (成長投資の女王):** イノベーションと破壊的な技術の力を信じています。
5.  **Charlie Munger Agent (ウォーレン・バフェットのパートナー):** 妥当な価格で素晴らしい企業のみを購入します。
6.  **Michael Burry Agent (逆張り投資家):** ディープバリューを発掘します。
7.  **Peter Lynch Agent (実用的な投資家):** 日常的なビジネスで「テンバガー」を探します。
8.  **Phil Fisher Agent (成長投資家):** 詳細な「風説」調査を使用します。
9.  **Stanley Druckenmiller Agent (マクロのレジェンド):** 成長の潜在力を持つ非対称な機会を探します。
10. **Warren Buffett Agent (オマハの賢人):** 妥当な価格で素晴らしい企業を探します。
11. **Valuation Agent (バリュエーションエージェント):** 株式の潜在的な価値を計算し、トレーディングシグナルを生成します。
12. **Sentiment Agent (センチメントエージェント):** 市場のセンチメントを分析し、トレーディングシグナルを生成します。
13. **Fundamentals Agent (ファンダメンタルズエージェント):** ファンダメンタルズデータを分析し、トレーディングシグナルを生成します。
14. **Technicals Agent (テクニカルエージェント):** テクニカル指標を分析し、トレーディングシグナルを生成します。
15. **Risk Manager (リスクマネージャー):** リスクメトリクスを計算し、ポジション制限を設定します。
16. **Portfolio Manager (ポートフォリオマネージャー):** 最終的なトレーディングの意思決定を行い、注文を生成します。

**重要な注意点:** このシステムは、取引の意思決定をシミュレーションしますが、実際の取引は行いません。

### 免責事項

このプロジェクトは、**教育および研究目的のみ**です。

*   実際の取引や投資を意図していません。
*   投資アドバイスや保証は提供されていません。
*   開発者は、金銭的損失に対して一切の責任を負いません。
*   投資判断については、金融アドバイザーに相談してください。
*   過去のパフォーマンスは、将来の結果を示すものではありません。

このソフトウェアを使用することにより、学習目的のみで使用することに同意したことになります。

### セットアップ

1.  **Poetryを使用する場合:**
    *   リポジトリをクローンします。
    *   Poetryをインストールします (まだインストールされていない場合)。
    *   依存関係をインストールします。
    *   環境変数を設定します (`.env`ファイルを作成し、APIキーを設定します)。

2.  **Dockerを使用する場合:**
    *   Dockerがインストールされていることを確認します。
    *   リポジトリをクローンします。
    *   環境変数を設定します (`.env`ファイルを作成し、APIキーを設定します)。
    *   Dockerイメージをビルドします。

**重要:** ヘッジファンドを動作させるには、`OPENAI_API_KEY`, `GROQ_API_KEY`, `ANTHROPIC_API_KEY`または`DEEPSEEK_API_KEY`のいずれかのAPIキーを設定する必要があります。すべてのプロバイダーのLLMを使用する場合は、すべてのAPIキーを設定する必要があります。

AAPL、GOOGL、MSFT、NVDA、およびTSLAの財務データは無料で利用できます。他のティッカーについては、`.env`ファイルに`FINANCIAL_DATASETS_API_KEY`を設定する必要があります。

### 使用方法

1.  **ヘッジファンドの実行:**

    *   **Poetryを使用:** `poetry run python src/main.py --ticker AAPL,MSFT,NVDA`
    *   **Dockerを使用:** `./run.sh --ticker AAPL,MSFT,NVDA main` (Linux/Mac), `run.bat --ticker AAPL,MSFT,NVDA main` (Windows)
    *   `--ollama`フラグを使用すると、ローカルLLMを使用してヘッジファンドを実行できます。
    *   `--show-reasoning`フラグを使用すると、各エージェントの推論が出力されます。
    *   `--start-date`と`--end-date`を使用して、特定の期間の意思決定を指定できます。

2.  **バックテスターの実行:**

    *   **Poetryを使用:** `poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA`
    *   **Dockerを使用:** `./run.sh --ticker AAPL,MSFT,NVDA backtest` (Linux/Mac), `run.bat --ticker AAPL,MSFT,NVDA backtest` (Windows)
    *   `--ollama`フラグを使用すると、ローカルLLMを使用してバックテスターを実行できます。
    *   `--start-date`と`--end-date`を使用して、特定の期間のバックテストを指定できます。

### プロジェクト構造

```
ai-hedge-fund/
├── src/
│   ├── agents/                   # Agent definitions and workflow
│   │   ├── bill_ackman.py        # Bill Ackman agent
│   │   ├── fundamentals.py       # Fundamental analysis agent
│   │   ├── portfolio_manager.py  # Portfolio management agent
│   │   ├── risk_manager.py       # Risk management agent
│   │   ├── sentiment.py          # Sentiment analysis agent
│   │   ├── technicals.py         # Technical analysis agent
│   │   ├── valuation.py          # Valuation analysis agent
│   │   ├── ...                   # Other agents
│   │   ├── warren_buffett.py     # Warren Buffett agent
│   │   ├── aswath_damodaran.py   # Aswath Damodaran agent
│   │   ├── ...                   # Other agents
│   │   ├── ...                   # Other agents
│   ├── tools/                    # Agent tools
│   │   ├── api.py                # API tools
│   ├── backtester.py             # Backtesting tools
│   ├── main.py # Main entry point
├── pyproject.toml
├── ...
```

### 貢献

1.  リポジトリをフォークします。
2.  フィーチャーブランチを作成します。
3.  変更をコミットします。
4.  ブランチをプッシュします。
5.  プルリクエストを作成します。

**重要:** プルリクエストは、小さく焦点を絞って行ってください。レビューとマージを容易にするためです。

### 機能のリクエスト

機能リクエストがある場合は、[issue](https://github.com/virattt/ai-hedge-fund/issues)を開き、`enhancement`でタグ付けしてください。

### ライセンス

このプロジェクトは、MITライセンスの下でライセンスされています。詳細については、LICENSEファイルを参照してください。

