
# awslabs/agent-squad

**stars**: 5077

[View Repository on Github](https://github.com/awslabs/agent-squad)

Flexible and powerful framework for managing multiple AI agents and handling complex conversations

## README要約
## Agent Squad: 多様なAIエージェントを連携させる柔軟なフレームワークの要約

### 概要

Agent Squadは、複数のAIエージェントを管理し、複雑な会話を処理するための柔軟で軽量なオープンソースフレームワークです。以前はMulti-Agent Orchestratorという名称で知られていましたが、現在はAgent Squadとして再ブランドされています。このフレームワークは、PythonとTypeScriptの両方で実装されており、多様なユースケースに対応できるように設計されています。

### 特徴

*   **インテリジェントな意図分類**: コンテキストと内容に基づいて、最も適切なエージェントにクエリを動的にルーティングします。
*   **デュアル言語サポート**: PythonとTypeScriptの両方で完全に実装されています。
*   **柔軟なエージェント応答**: さまざまなエージェントからのストリーミングおよび非ストリーミング応答の両方をサポートします。
*   **コンテキスト管理**: 複数のエージェント間で会話のコンテキストを維持し、相互作用の整合性を保ちます。
*   **拡張可能なアーキテクチャ**: 新しいエージェントを容易に統合したり、既存のエージェントをカスタマイズしたりできます。
*   **ユニバーサルデプロイメント**: AWS Lambdaからローカル環境、または任意のクラウドプラットフォームで実行できます。
*   **プリビルドされたエージェントと分類器**: すぐに使えるエージェントと複数の分類器の実装が利用可能です。

### アーキテクチャ

Agent Squadの基本的なアーキテクチャは以下の通りです。

1.  **ユーザー入力**: ユーザーからの入力が開始点です。
2.  **分類器**: 入力されたユーザークエリを分析します。
3.  **エージェント選択**: 分類器は、エージェントの特性と会話履歴の両方を活用して、タスクに最も適したエージェントを選択します。
4.  **エージェント処理**: 選択されたエージェントがユーザー入力を処理します。
5.  **会話の保存と応答**: オーケストレーターは会話を保存し、エージェントの会話履歴を更新した後、ユーザーにレスポンスを返します。

### 新機能: SupervisorAgent

Agent Squadには、複数の専門エージェント間の洗練されたチーム連携を可能にする、強力なSupervisorAgentが追加されました。このコンポーネントは「agent-as-tools」アーキテクチャを実装しており、リードエージェントが専門エージェントのチームを並行して調整し、コンテキストを維持しながら整合性のあるレスポンスを提供できます。

**主な機能**:

*   **チーム連携**: 複数の専門エージェントが複雑なタスクで協調
*   **並列処理**: 複数のエージェントクエリを同時に実行
*   **スマートコンテキスト管理**: チーム全体で会話履歴を維持
*   **動的委任**: 適切なチームメンバーにサブタスクをインテリジェントに分配
*   **エージェント互換性**: すべてのエージェントタイプ（Bedrock、Anthropic、Lexなど）と連携

SupervisorAgentは、以下の2つの方法で使用できます。

1.  **直接使用**: 特定のタスクで専用のチーム連携が必要な場合に直接呼び出します。
2.  **分類器の統合**: 複雑な階層システムを構築するために、分類器内にエージェントとして追加します。

### デモアプリ

デモアプリでは、以下の6つの専門エージェントを使用する拡張バージョンが紹介されています。

*   **旅行エージェント**: Amazon Lex Botを利用
*   **天気エージェント**: オープンメテオAPIにクエリを実行するためのツールを持つBedrock LLMエージェントを利用
*   **レストランエージェント**: Amazon Bedrock Agentとして実装
*   **数学エージェント**: 数学演算を実行するための2つのツールを備えたBedrock LLMエージェントを利用
*   **テックエージェント**: 技術的なトピックに関する質問に答えるように設計されたBedrock LLMエージェント
*   **ヘルスエージェント**: 健康関連のクエリに焦点を当てたBedrock LLMエージェント

デモでは、フライトの予約から天気の確認、数学の問題解決、健康情報提供まで、さまざまなトピック間でシームレスにコンテキストが切り替わる様子が示されています。

### サンプルとクイックスタート

Agent Squadの体験を深めるための様々なサンプルが提供されています。

*   **デモアプリケーション**:
    *   Streamlit Global Demo
    *   Chat Demo App
    *   E-commerce Support Simulator
*   **サンプルプロジェクト**:
    *   chat-demo-app
    *   ecommerce-support-simulator
    *   chat-chainlit-app
    *   fast-api-streaming
    *   text-2-structured-output
    *   bedrock-inline-agents
    *   bedrock-prompt-routing

### 貢献

Agent Squadは活発なコミュニティによって開発されており、貢献を歓迎しています。貢献する前に、GitHub Issueを作成して提案を共有することをお勧めします。プルリクエストを作成する際には、既存のIssueにリンクし、プロジェクトの構造に従ってドキュメントを含める必要があります。

### ライセンス

Apache 2.0ライセンスでライセンスされています。


---

# n8n-io/n8n

**stars**: 89621

[View Repository on Github](https://github.com/n8n-io/n8n)

Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.

## README要約
## n8n: 技術チーム向けのセキュアなワークフロー自動化プラットフォーム

このリポジトリは、技術チーム向けに設計された、ノーコードとコードの柔軟性を組み合わせたワークフロー自動化プラットフォームである「n8n」のものです。n8nは、400以上のインテグレーション、ネイティブAI機能、フェアコードライセンスを備えており、データの完全な制御とデプロイを維持しながら、強力な自動化を構築できます。

**主な機能:**

*   **コードとビジュアルの融合:** JavaScript/Pythonのコード記述、npmパッケージの追加、ビジュアルインターフェースによる構築が可能
*   **AIネイティブプラットフォーム:** LangChainに基づいたAIエージェントワークフローを、独自のデータとモデルで構築
*   **フルコントロール:** フェアコードライセンスによるセルフホスト、またはクラウドサービスを選択可能
*   **エンタープライズ向け:** 高度な権限管理、SSO、エアギャップデプロイメント対応
*   **活発なコミュニティ:** 400以上のインテグレーションと900以上のテンプレートが利用可能

**クイックスタート:**

*   **npx:** `npx n8n` (Node.jsが必要)
*   **Docker:**

    ```bash
    docker volume create n8n_data
    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
    ```

    エディタへのアクセスは http://localhost:5678

**主なリソース:**

*   ドキュメント
*   400以上のインテグレーション
*   サンプルワークフロー
*   AI & LangChainガイド
*   コミュニティフォーラム
*   コミュニティチュートリアル

**ライセンス:**

n8nは、[Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) および [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md)の下で配布される[フェアコード](https://faircode.io)です。

*   **ソースコード公開:** 常にソースコードが利用可能
*   **セルフホスト可能:** どこでもデプロイ可能
*   **拡張可能:** 独自のノードと機能を追加可能

追加の機能とサポートについては、[エンタープライズライセンス](mailto:license@n8n.io)が利用可能です。

**コントリビューション:**

バグ報告や機能のリクエストは、[Contributing Guide](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md)を参照してください。

**チームへの参加:**

自動化の未来を形作りたい方は、[求人情報](https://n8n.io/careers)をご確認ください。

**n8nの意味:**

"nodemation"の略であり、n-eight-nと発音します。 Node.jsを使用していることと自動化を支援することに由来しています。


---

# huggingface/agents-course

**stars**: 17528

[View Repository on Github](https://github.com/huggingface/agents-course)

This repository contains the Hugging Face Agents Course.

## README要約
このリポジトリは、Hugging Faceが提供する「Hugging Face Agents Course」をホストしています。コースは、エージェントの基礎から最終的な課題までを網羅しており、4つのユニットに分かれています。

**主な内容:**

*   **コースの概要:** エージェント、LLM、モデルファミリー、特殊トークンなど、エージェントに関する基礎知識を学びます。
*   **フレームワーク:** `smolagents`、`LangGraph`、`LlamaIndex`などのAIエージェント構築フレームワークを学びます。
*   **実践的な内容:** `smolagents`を使用したエージェント構築、`LlamaIndex`を使用したデータに対するLLM搭載エージェントの構築、`LangGraph`フレームワークを使用した実用的なアプリケーション開発などを学びます。
*   **ボーナスユニット:** Function-callingのためのLLMのファインチューニング、エージェントの可観測性と評価についても扱います。
*   **ユースケース:** Agentic RAG（Retrieval-Augmented Generation）を活用したエージェントの応用を学びます。
*   **最終プロジェクト:** エージェントの作成、テスト、認証を行い、自動評価とリーダーボードを通じて学習成果を確認します。

**前提知識:**

*   Pythonの基本的な知識
*   LLMの基本的な知識

**貢献について:**

コースへの貢献を歓迎しており、Typo修正や新しいユニットの追加提案を受け付けています。新しいユニットを追加する場合は、まずIssueを立てて提案する必要があります。

**引用:**

論文などでこのリポジトリを引用する際のBibTeX形式の引用情報が提供されています。

**コースへのリンク:**

*   コースへの登録: [https://bit.ly/hf-learn-agents](https://bit.ly/hf-learn-agents)
*   コースへのアクセス: [https://hf.co/learn/agents-course](https://hf.co/learn/agents-course)

**その他:**

リポジトリを気に入ったらスターを付けることが推奨されています。また、コースに関する質問や議論はDiscordで可能です。

