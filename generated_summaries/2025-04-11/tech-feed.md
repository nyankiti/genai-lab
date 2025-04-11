# Java Weekly, Issue 589 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916490282/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 589 | Baeldung 要約

この記事は、2025年4月10日に更新されたJava Weeklyの第589号です。主な内容は以下の通りです。

**1. SpringとJava**

*   **JDK 24のセキュリティ強化:** 最新のJDKリリースにおけるセキュリティアップデートの詳細、特に2つの新しい量子耐性暗号アルゴリズムについて解説。
*   **Spring AI MCPサーバーのOAuth2による保護:** Spring AI MCPサーバーをリソースおよび認可サーバーとして設定し、OAuthを使用してエンドポイントを保護する方法を解説する実践的なガイド。
*   **その他:** IntelliJ IDEA Conf 2025、JDK 24の主要な機能、Project Reactor、スレッドローカル、コンテキスト伝搬に関するガイド、JavaOne 2025での関数とメモリアクセス、インナークラスコンストラクタでの新しいNullチェック、Spring AI 1.0.0-SNAPSHOTの変更点、JDK 24のG1/Parallel/Serial GCの変更点など。
*   **ウェビナーとプレゼンテーション:** Stream Gatherers、Java 24リリースノート概要（セキュリティアップデート）、Breaktime Tech Talks（Spring AIデバッグ、オープンソースへの貢献）、A Bootiful Podcast（AWS Developer Advocate）など。
*   **アップグレード推奨:** Spring gRPC 0.6.0、Spring Cloud 2025.0.0-M3 (Northfields)、Spring Cloud Configの複数のバージョン、Quarkus 3.21.1、jetty-12.0.19、5.0.0.CR6、micronaut-core v4.7.22のリリース情報。

**2. 技術と考察**

*   **プロセスの最適化に関する考察:** 食洗機に洗剤を早く入れることの例えを用いて、タスクを早期に実行することによるプロセスの効率化について解説。これは、日常的なタスクからコード最適化、ビジネスプロセスの改善まで、多くのシナリオに適用できる。
*   **その他:** AI+Coding Kata、OpenTelemetryのKubernetes特化版に関する記事。

**3. 今週のおすすめ**

*   **13のソフトウェアエンジニアリング法則** (manager.dev)

---
# Update on Context Parameters | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/04/update-on-context-parameters/)

## Kotlinブログ更新：コンテキストパラメータに関するアップデート

この記事は、Kotlinの今後の機能であるコンテキストパラメータに関する最新情報を提供しています。

**主な内容：**

*   **コンテキストパラメータの導入:** Kotlin 2.2.0でコンテキストパラメータがベータ版としてリリースされ、より強力な拡張メソッドやDSL開発のためのツールとして活用できるようになります。
*   **移行パス:** コンテキストパラメータは、以前の実験的な機能であるコンテキストレシーバーに取って代わるものです。移行を円滑に進めるために、Kotlin 2.2.0ではコンテキストレシーバーの構文も可能な限り認識され、コンパイラーとIDEが移行を支援するヒントを提供します。
*   **移行方法:**
    *   コンパイラ引数を`-Xcontext-receivers`から`-Xcontext-parameters`に変更します。
    *   IntelliJ IDEAのバージョン2025.1以降では、"Replace context receivers with context parameters"というクイックフィックスを使用して移行できます。
    *   モジュール全体またはプロジェクト全体での移行も可能です。
    *   コンテキストパラメータでは、呼び出し可能参照がまだサポートされていないため、ラムダに置き換える必要があります。
    *   クラス内のコンテキストレシーバーには直接の対応物がないため、手動での移行が必要です。
*   **IntelliJ IDEAサポート:** 2025.1からIntelliJ IDEAがコンテキストパラメータをサポートし、移行を支援するクイックフィックスが提供されます。
*   **今後の展望:** コンテキストパラメータはKotlin 2.3リリース頃にコンテキストレシーバーを置き換える予定です。Kotlinチームは、移行をできる限りスムーズに進めるための取り組みを行っています。

この記事は、コンテキストパラメータへの移行を促し、開発者がスムーズに新しい機能を利用できるよう支援することを目指しています。

---
# Geminiの無料枠でOpenAI APIを使ってSpring AIからアクセスする (MCP連携あり) - IK.AM

[View on IK.AM](https://ik.am/entries/846)

## Geminiの無料枠でOpenAI APIを使ってSpring AIからアクセスする (MCP連携あり) - 要約

本記事では、GoogleのGeminiの無料枠を利用して、OpenAI API経由でSpring AIからGeminiにアクセスする方法を紹介しています。記事執筆時点では、Gemini 2.5 Proは1日25リクエストという制限があるため、Gemini 2.0 Flashの方が試しやすいとのことです。

**主な内容:**

1.  **Gemini APIのセットアップ:**
    *   GeminiのAPIキーを取得し、環境変数に設定します。
    *   "Free"プランであることを確認します。

2.  **Gemini APIの動作確認:**
    *   Gemini APIを直接利用して、簡単なプロンプト（ジョークを求めるなど）で動作確認を行います。gemini-2.0-flashとgemini-2.5-pro-exp-03-25で試した結果、gemini-2.5-pro-exp-03-25の方がレスポンスが遅いことが確認されました。

3.  **OpenAI APIでの動作確認:**
    *   OpenAI APIのエンドポイントを用いて、Geminiにアクセスできることを確認します。gemini-2.0-flashとgemini-2.5-pro-exp-03-25でジョークを求めるプロンプトを試した結果が示されています。

4.  **Spring AIからのアクセス:**
    *   Spring AIのサンプルアプリを利用して、GeminiのOpenAI APIにアクセスします。
    *   日本の首都を尋ねるプロンプトを試し、正常に回答が得られることを確認しました。
    *   NoteStream APIはSpring AI 1.0.0.M6時点ではエラーになることが報告されています。

5.  **Tool Callingの利用:**
    *   Spring AIのTool Calling機能を使い、LLMが直接アクセスできない情報（現在時刻など）を外部のツールで取得する方法を試します。
    *   現在時刻を取得するToolを実装し、/datetimeエンドポイントでアクセスすることで、正確な時刻を取得できることを確認しました。

6.  **MCP Serverとの連携:**
    *   Spring AI 1.0.0.M6から利用可能になったModel Context Protocol（MCP）連携を試します。
    *   Fetch MCP Serverを起動し、LLMがWebサイトの情報を取得できるようにします。
    *   現在時刻を尋ねるプロンプトにヒントとしてWebサイトのURL（https://www.timeanddate.com/worldclock/japan/tokyo）を与えたところ、Webサイトから時刻情報を取得し、回答を得ることができました。
    *   Gemini 2.0 Flashの場合、Gemmaのように自動的に情報を取得するのではなく、URLを明示的に与える必要があることに注意が必要です。

**結論:**

Geminiの無料枠を利用することで、OpenAI API経由でSpring AIからGeminiにアクセスし、様々な機能を試すことができます。gemini-2.0-flashモデルを中心に、無料枠の範囲内で簡単なアプリ開発も可能であると述べられています。MCP Server連携を行うことで、LLMの能力を拡張し、より高度なアプリケーションを構築することもできます。

---
# llama.cppでGemma 3 27Bを動かしてSpring AIからアクセスする (MCP連携あり) - IK.AM

[View on IK.AM](https://ik.am/entries/843)

## 記事の要約

本記事は、GoogleのGemma 3 27Bモデルをllama.cppで動作させ、Spring AIを用いてOpenAI API経由でアクセスする方法について解説しています。さらに、Tool CallingとModel Context Protocol (MCP)連携を試み、LLMの機能を拡張する手法を紹介しています。

**主な内容:**

1.  **環境構築とモデルの準備:**
    *   llama.cppのインストール。
    *   Gemma 3 27BのGGUFフォーマットへの変換とllama-serverによるOpenAI APIサーバーの起動。
    *   Tool Callingを使用するために、llama-serverの起動時に `--jinja` オプションを指定。

2.  **Spring AIによるアクセス:**
    *   Spring AIのOpenAI互換チャットクライアントを使用して、llama.cppのAPIにアクセス。
    *   GETとPOSTリクエストによるプロンプト送信と、Server Sent Eventによる長いレスポンスのストリーミング対応。

3.  **Tool Callingの実装:**
    *   Spring AIのTool Calling機能を利用し、LLMが持たない情報を外部ツール（この例では現在時刻を取得するツール）と連携。
    *   `@Tool`アノテーションを用いてツールを定義し、`ChatClient`に渡すことで機能を実現。

4.  **Model Context Protocol (MCP)連携:**
    *   Spring AI 1.0.0.M6から利用可能になったMCP連携を試し、LLMでは得られない情報を既存のMCP Serverから取得。
    *   `uvx` (uv tool) を用いたFetch MCP Serverを起動し、LLMにインターネット上の情報を取得させる。
    *   MCP Serverと連携することで、ブログ記事の最新情報やBBCニュースのヘッドラインを日本語で取得することに成功。

**結論:**

記事では、llama.cppでGemma 3 27Bを動作させ、Spring AIと連携することで、Tool CallingやMCP連携といった高度な機能を実現できることを示しています。これにより、プライベートLLMの活用範囲を広げ、様々な場面での応用が可能になるとしています。

---
# BrowseComp: a benchmark for browsing agents | OpenAI

[View on OpenAI News](https://openai.com/index/browsecomp)

## BrowseComp: ブラウジングエージェントのための新しいベンチマーク | OpenAI の要約

OpenAI は、AIエージェントがインターネットをブラウジングして見つけにくい情報を検索する能力を評価するための、新しいベンチマーク「BrowseComp」を公開しました。

**概要:**

BrowseComp は、AIエージェントが数十から数百のウェブサイトを閲覧する必要があるような、見つけにくい情報を特定する能力を測るために設計された、シンプルでありながら挑戦的なベンチマークです。SimpleQAのような既存のベンチマークは、基本的な情報を検索する能力を測るもので、高速なブラウジングツール（GPT-4oなど）を持つモデルでは既に飽和状態になっています。BrowseComp は、このような単純な検索では見つけにくい、絡み合った情報をインターネット上で見つけ出す能力を評価することに重点を置いています。

**ベンチマークの特徴:**

*   **問題の難易度:**
    *   問題を解くには、AIエージェントがインターネット上の情報の正確性を理解し、粘り強く深くまでブラウジングし、創造的な検索方法を用いる必要があります。
    *   人間でも解くのが難しい問題が多数含まれており、人間のトレーナーが問題を解くのに数時間かかることもあります。
*   **問題の作成:**
    *   トレーナーは、簡単には見つけられないが、答えを検証しやすい「逆」の質問を作成します。
    *   例えば、「特定の科学論文のタイトルを見つける」など、検索では膨大な数の結果を検討する必要があるものの、答えを簡単に確認できるような問題です。
*   **評価の容易さ:**
    *   答えが短く、明確であるため、評価が容易です。

**評価結果:**

*   GPT-4oやGPT-4.5は、ブラウジング機能を持っても性能が低く、BrowseCompの難易度を示しています。
*   OpenAI o1（ブラウジングなし）は、推論能力により若干高い精度を示しました。
*   Deep Research（ブラウジングに特化したモデル）は、他のモデルを大幅に上回り、約半分の問題を解決しました。これは、Webの自動検索、複数の情報源からの情報の評価と統合、検索戦略の適応能力によるものです。
*   テスト時の計算能力の増加に応じて、Deep Research のパフォーマンスが向上しました。
*   複数の回答を組み合わせる戦略（多数決、重み付け投票、ベスト・オブ・N）により、Deep Research の精度がさらに向上しました。

**結論:**

BrowseComp は、AIエージェントがインターネット上で見つけにくい情報を検索する能力を評価するベンチマークです。一般的な検索能力を測定するものではありませんが、特定の情報を探し出す能力を評価しやすく、現在のブラウジングエージェントにとっては挑戦的なものとなっています。OpenAI は、BrowseComp の公開を通じて、より信頼性の高い AI 研究を促進することを目指しており、研究者に対して、AI エージェントの能力を評価し、フィードバックを提供することを呼びかけています。
