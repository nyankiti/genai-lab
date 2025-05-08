
# crewAIInc/crewAI

**stars**: 31169

[View Repository on Github](https://github.com/crewAIInc/crewAI)

Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks.

## README要約
## CrewAI の詳細な要約

CrewAI は、ロールプレイング、自律型 AI エージェントをオーケストレーションするためのフレームワークです。コラボレーティブ・インテリジェンスを育成することにより、CrewAI はエージェントがシームレスに連携し、複雑なタスクに取り組むことを可能にします。

**主な特徴:**

*   **高速で柔軟性の高いマルチエージェント自動化フレームワーク**:
    *   ゼロから構築された、LangChain や他のエージェントフレームワークに完全に対応しない、軽量で高速な Python フレームワークです。
    *   高レベルのシンプルさと、正確な低レベルの制御の両方を提供し、あらゆるシナリオに合わせてカスタマイズされた自律型 AI エージェントの作成に最適です。
*   **CrewAI Crews**:
    *   自律性と協調的インテリジェンスに最適化されています。
*   **CrewAI Flows**:
    *   きめ細やかなイベント駆動型制御、正確なタスクオーケストレーションのための単一の LLM 呼び出し、Crews をネイティブにサポートします。
*   **CrewAI Enterprise Suite**:
    *   安全でスケーラブルで、管理が容易なエージェント駆動型自動化を必要とする組織向けに調整された包括的なバンドルです。
    *   **主な機能**:
        *   **Tracing & Observability**: AI エージェントとワークフローをリアルタイムで監視および追跡（メトリクス、ログ、トレースを含む）。
        *   **Unified Control Plane**: AI エージェントとワークフローを管理、監視、スケーリングするための一元化されたプラットフォーム。
        *   **Seamless Integrations**: 既存のエンタープライズシステム、データソース、クラウドインフラストラクチャとの簡単な接続。
        *   **Advanced Security**: 安全な展開と管理を保証する、堅牢なセキュリティとコンプライアンス対策を内蔵。
        *   **Actionable Insights**: パフォーマンスと意思決定を最適化するためのリアルタイム分析とレポート。
        *   **24/7 Support**: 中断のない運用と問題の迅速な解決を保証するための、専用のエンタープライズサポート。
        *   **On-premise and Cloud Deployment Options**: セキュリティとコンプライアンスの要件に応じて、オンプレミスまたはクラウドに CrewAI Enterprise を展開できます。
*   **活発なコミュニティ**:
    *   [learn.crewai.com](https://learn.crewai.com) でのコミュニティコースを通じて 100,000 人以上の認定開発者がおり、急速にエンタープライズ対応の AI 自動化の標準となりつつあります。

**CrewAI の利点:**

*   スタンドアロンフレームワーク。LangChain や他のエージェントフレームワークに依存しません。
*   高いパフォーマンス。高速化とリソース使用量の最小化に最適化されています。
*   柔軟な低レベルカスタマイズ。高レベルのワークフローから低レベルのエージェントの動作、内部プロンプト、実行ロジックまで、完全に自由なカスタマイズが可能です。
*   あらゆるユースケースに最適。単純なタスクから非常に複雑なエンタープライズグレードのシナリオまで、効果的であることが証明されています。
*   堅牢なコミュニティ。100,000 人以上の認定開発者の活発なコミュニティによって支えられており、包括的なサポートとリソースを提供しています。

**インストール:**

1.  Python >=3.10 <3.13 がシステムにインストールされていることを確認します。
2.  CrewAI をインストールします。
    ```bash
    pip install crewai
    ```
3.  オプションのツールを含む場合は、次のコマンドを使用します。
    ```bash
    pip install 'crewai[tools]'
    ```

**CrewAI を使用して始める:**

1.  CrewAI プロジェクトを作成するには、次の CLI (Command Line Interface) コマンドを実行します。
    ```bash
    crewai create crew <project_name>
    ```
2.  プロジェクトのファイルを編集して、エージェント、タスク、およびクルーを定義します。
3.  環境変数 (`.env` ファイル内) として、OpenAI API キーと Serper.dev API キーを設定します。
4.  依存関係をロックし、CLI コマンドを使用してインストールします (任意)。
    ```bash
    cd my_project
    crewai install
    ```
5.  クルーを実行します。
    ```bash
    crewai run
    ```
    または
    ```bash
    python src/my_project/main.py
    ```

**Crews と Flows の違い:**

*   **Crews**:
    *   自律性があり、タスクを完了するために協力する AI エージェントのチームです。
    *   エージェント間の自然な自律的意思決定を可能にします。
    *   動的なタスク委任とコラボレーションをサポートします。
    *   明確な目標と専門知識を持つ専門的な役割を提供します。
    *   柔軟な問題解決アプローチを可能にします。
*   **Flows**:
    *   複雑な自動化を正確に制御できる、本番環境対応のイベント駆動型ワークフローです。
    *   現実世界のシナリオにおける実行パスをきめ細かく制御します。
    *   タスク間の安全で一貫した状態管理を提供します。
    *   AI エージェントと本番環境の Python コードをクリーンに統合します。
    *   複雑なビジネスロジックのための条件分岐をサポートします。

CrewAI の真の力は、Crews と Flows を組み合わせることで発揮されます。この相乗効果により、次のことが可能になります。

*   複雑な本番環境対応アプリケーションを構築する。
*   自律性と正確な制御のバランスを取る。
*   洗練された現実世界のシナリオを処理する。
*   クリーンで保守性の高いコード構造を維持する。

**比較:**

*   **LangGraph**:
    *   エージェントワークフローを構築するための基盤を提供しますが、ボイラープレートコードと複雑な状態管理パターンが必要です。
    *   LangChain との密接な結合は、カスタムエージェントの動作を実装したり、外部システムと統合したりする際の柔軟性を制限する可能性があります。
*   **Autogen**:
    *   会話型エージェントの作成に優れており、エージェントが連携できますが、プロセスという概念が本質的に欠けています。
    *   Autogen では、エージェントの対話をオーケストレーションするには追加のプログラミングが必要となり、タスクの規模が大きくなると複雑で煩雑になる可能性があります。
*   **ChatDev**:
    *   AI エージェントの世界にプロセスという概念を導入しましたが、その実装は非常に硬直的です。
    *   ChatDev でのカスタマイズは制限されており、本番環境向けではないため、現実世界のアプリケーションでのスケーラビリティと柔軟性を妨げる可能性があります。

**CrewAI の優位性**:
CrewAI は、独自の Crews および Flows アーキテクチャを通じて、自律型エージェントのインテリジェンスと正確なワークフロー制御を組み合わせています。このフレームワークは、高レベルのオーケストレーションと低レベルのカスタマイズの両方に優れており、きめ細かい制御を備えた複雑な本番環境グレードのシステムを実現します。CrewAI は、LangGraph よりも著しいパフォーマンス上の利点を示し、特定の QA タスクの例 ([比較を参照](https://github.com/crewAIInc/crewAI-examples/tree/main/Notebooks/CrewAI%20Flows%20%26%20Langgraph/QA%20Agent))で 5.76 倍高速に実行され、特定のコーディングタスク ([詳細分析](https://github.com/crewAIInc/crewAI-examples/blob/main/Notebooks/CrewAI%20Flows%20%26%20Langgraph/Coding%20Assistant/coding_assistant_eval.ipynb)) で、より高い評価スコアと高速な完了時間を達成しています。

**寄稿:**

貢献は大歓迎です。
*   リポジトリをフォークします。
*   新しいブランチを作成します。
*   機能または改善を追加します。
*   プルリクエストを送信します。

**テレメトリ:**

CrewAI は、ライブラリを改善するために使用状況データを収集し、最も使用されている機能、統合、およびツールに焦点を当てています。
プロンプト、タスクの説明、エージェントの背景や目標、ツールの使用、API 呼び出し、応答、エージェントによって処理されたデータ、またはシークレットや環境変数に関するデータは収集されません。 ユーザーは、環境変数 OTEL_SDK_DISABLED を true に設定することで、テレメトリを無効にすることができます。

**ライセンス:**
CrewAI は、[MIT ライセンス](https://github.com/crewAIInc/crewAI/blob/main/LICENSE)の下でリリースされています。

**よくある質問 (FAQ):**

*   **一般:** CrewAI とは何か、CrewAI をインストールする方法、CrewAI が LangChain に依存しているか、CrewAI がオープンソースであるか、CrewAI がユーザーからデータを収集するか。
*   **機能と能力:** CrewAI が複雑なユースケースを処理できるか、ローカル AI モデルで CrewAI を使用できるか、Crews と Flows の違い、CrewAI が LangChain より優れている点、CrewAI がカスタムモデルの微調整またはトレーニングをサポートするか。
*   **リソースとコミュニティ:** CrewAI の現実世界の例を見つける場所、CrewAI に貢献する方法。
*   **エンタープライズ機能:** CrewAI Enterprise が提供する追加機能、CrewAI Enterprise がクラウドおよびオンプレミス展開で利用可能であるか、CrewAI Enterprise を無料で試せるか。

これらの質問への回答は、README の FAQ セクションに記載されています。


---

# voideditor/void

**stars**: 12703

[View Repository on Github](https://github.com/voideditor/void)



## README要約
## voideditor/void リポジトリ概要 (日本語)

**概要:**

このリポジトリは、オープンソースの Cursor (コードエディタ) の代替品である「Void」の完全なソースコードを含んでいます。

**主な特徴:**

*   **Cursor の代替:** Void は、Cursor に似た機能を持つオープンソースのコードエディタを目指しています。
*   **オープンソース:** ソースコードは公開されており、誰でも自由に利用、貢献できます。
*   **VS Code のフォーク:** Void は、Microsoft の VS Code リポジトリを基盤としています。

**貢献について:**

*   **貢献方法:** [`HOW_TO_CONTRIBUTE.md`](https://github.com/voideditor/void/blob/main/HOW_TO_CONTRIBUTE.md) に貢献方法が詳しく記載されています。
*   **コミュニティ:** Discord チャンネルで毎週ミーティングを開催し、活発な議論やコラボレーションが行われています。
*   **提案:** 幅広い種類のコラボレーションと提案を歓迎しています。

**その他:**

*   **ロードマップ:** [ロードマップ](https://github.com/orgs/voideditor/projects/2) から今後の開発計画を確認できます。
*   **変更履歴:** [変更履歴](https://voideditor.com/changelog) で、Void の変更点を確認できます。
*   **コードベースガイド:** [`VOID_CODEBASE_GUIDE.md`](https://github.com/voideditor/void/blob/main/VOID_CODEBASE_GUIDE.md) でコードベースのガイドを確認できます。
*   **サポート:** Discord サーバーまたはメール (hello@voideditor.com) でサポートを受けられます。
*   **公式サイト:** [Void](https://voideditor.com)

**補足:**

このリポジトリは、VS Code をベースに開発されているため、VS Code の知識があると、より理解しやすくなっています。


---

# evroon/bracket

**stars**: 891

[View Repository on Github](https://github.com/evroon/bracket)

Selfhosted tournament system

## README要約
## evroon/bracket の要約

「bracket」は、自己ホスト型のトーナメントシステムです。Async Python（FastAPIを使用）とNext.jsをフロントエンドとして、Mantineライブラリを使用して構築されています。

**主な特徴:**

*   **トーナメント形式:** シングルエリミネーション、ラウンドロビン、スイス方式をサポート。
*   **トーナメント構造:** 複数のステージ、グループ/ブラケットを持つトーナメント構造を構築可能。
*   **ドラッグ＆ドロップ:** マッチをコートに移動したり、開始時間を変更したりできます。
*   **ダッシュボード:** 観客向けにカスタマイズ可能なダッシュボードページを公開可能（ロゴ表示も可能）。
*   **チーム管理:** チームの作成/更新、選手追加機能。
*   **クラブとトーナメント:** 複数のクラブ、各クラブで複数のトーナメントを作成可能。
*   **スイス方式:** 自動マッチスケジュールによる動的な処理。

**利用方法:**

*   **デモ:** <https://www.bracketapp.nl/demo>で無料のデモが利用可能（30分間）。
*   **クイックスタート:** `docker compose up`コマンドで、Docker経由ですぐに起動可能。
    *   `git clone git@github.com:evroon/bracket.git`
    *   `cd bracket`
    *   `sudo docker compose up -d`
    *   ブラウザで http://localhost:3000 にアクセス。
    *   ログイン情報: ユーザー名: `test@example.org`、パスワード: `aeGhoe1ahng2Aezai0Dei6Aih6dieHoo`
    *   初期データの挿入: `sudo docker exec bracket-backend pipenv run ./cli.py create-dev-db`
*   **ドキュメント:** [https://docs.bracketapp.nl](https://docs.bracketapp.nl)
    *   使用方法: [https://docs.bracketapp.nl/docs/usage/guide](https://docs.bracketapp.nl/docs/usage/guide)
    *   設定方法: [https://docs.bracketapp.nl/docs/running-bracket/configuration](https://docs.bracketapp.nl/docs/running-bracket/configuration)
    *   デプロイ方法: [https://docs.bracketapp.nl/docs/deployment](https://docs.bracketapp.nl/docs/deployment)
    *   開発環境設定: [https://docs.bracketapp.nl/docs/community/development](https://docs.bracketapp.nl/docs/community/development)

**設定:**

*   バックエンドは `.env` ファイル（`prod.env`、`dev.env`など）または環境変数で設定。
*   フロントエンドも環境変数またはNext.jsの `.env` ファイルで設定可能。

**多言語対応:**

*   ブラウザの設定に基づき、自動的に言語が検出され読み込まれます。
*   翻訳にはCrowdinを使用。[https://crowdin.com/project/bracket](https://crowdin.com/project/bracket)

**貢献:**

*   GitHubでスターを付ける。
*   翻訳（Crowdin経由）で貢献する。
*   Bracketを広める。
*   PRを送信し、機能追加、バグ修正、ドキュメントの更新を行う。

**ライセンス:**

*   AGPL-v3.0。


---

# beekeeper-studio/beekeeper-studio

**stars**: 18880

[View Repository on Github](https://github.com/beekeeper-studio/beekeeper-studio)

Modern and easy to use SQL client for MySQL, Postgres, SQLite, SQL Server, and more. Linux, MacOS, and Windows.

## README要約
## Beekeeper Studio の詳細な要約

Beekeeper Studio は、MySQL、Postgres、SQLite、SQL Server などに対応した、モダンで使いやすいクロスプラットフォームの SQL エディター兼データベースマネージャーです。Linux、MacOS、Windows で利用できます。

**主な特徴：**

*   **クロスプラットフォーム対応:** Windows, MacOS, Linux で動作します。
*   **SQL エディター:**
    *   SQL クエリの自動補完と構文ハイライト
    *   タブインターフェースによるマルチタスク
    *   データのソートとフィルタリング
    *   使いやすいキーボードショートカット
    *   クエリの保存
    *   クエリ実行履歴
    *   優れたダークテーマ
    *   インポート/エクスポート
    *   バックアップ/リストア
    *   JSON としてのデータ表示
*   **対応データベース:**
    *   PostgreSQL、MySQL、SQLite、SQL Server、Amazon Redshift、CockroachDB、MariaDB、TiDB、Google BigQuery、Oracle Database、Cassandra、Firebird、LibSQL、ClickHouse、DuckDB をフルサポート
    *   MongoDB (アルファサポート)
    *   Snowflake、Trino / Presto、Redis、DynamoDB (近日対応予定)

**料金体系：**

*   Beekeeper Studio は無料でダウンロードして利用できます。無料版でも多くの機能が利用でき、登録やクレジットカード情報は不要です。
*   プレミアム機能を利用するための有料版 (ライセンス) もあり、詳細については[こちら](https://beekeeperstudio.io/pricing)で確認できます。

**ライセンス：**

*   コミュニティ版 (このリポジトリのコード) は GPLv3 ライセンスの下で公開されています。
*   Ultimate Edition は追加機能を含み、商用利用許諾契約 (EULA) の下でライセンスされています。
*   Beekeeper Studio の商標 (ワードマークとロゴ) はオープンソースではありません。商標ガイドラインについては[こちら](https://beekeeperstudio.io/legal/trademark/)を参照してください。

**貢献について：**

*   活発なコミュニティ参加を歓迎しています。
*   [貢献者ガイドライン](CONTRIBUTING.md)に従う必要があります。
*   コードを書かずに貢献する方法も用意されています。
*   ローカル環境でのビルドと実行の方法が提供されています。
*   変更を送信する方法が説明されています。

**その他：**

*   Beekeeper Studio は、Sqlectron プロジェクトのコアデータベースライブラリから派生したものです。
*   [ドキュメント](https://docs.beekeeperstudio.io)も用意されています。
*   Electron のアップグレードに関する注意点、リリースプロセス、メンテナンスに関するメモも記載されています。
*   Beekeeper Studio の商標ガイドラインは[こちら](https://beekeeperstudio.io/legal/trademark/)を参照。


---

# JetBrains/compose-multiplatform

**stars**: 17314

[View Repository on Github](https://github.com/JetBrains/compose-multiplatform)

Compose Multiplatform, a modern UI framework for Kotlin that makes building performant and beautiful user interfaces easy and enjoyable.

## README要約
## JetBrains/compose-multiplatform リポジトリ概要（日本語）

このリポジトリは、JetBrainsが開発し、オープンソースコミュニティが貢献している、Kotlin用のUIフレームワーク「Compose Multiplatform」のものです。Compose Multiplatformは、Kotlinを使用して複数のプラットフォーム（iOS, Android, Desktop, Web）でUIを共有するための宣言型フレームワークであり、パフォーマンスが高く美しいUIを簡単かつ楽しく構築できます。

**主な特徴:**

*   **プラットフォーム間のUI共有:** iOS、Android、デスクトップ（Windows, MacOS, Linux）、Web（Alpha）といった複数のプラットフォームでUIを共有できます。
*   **Jetpack Composeとの互換性:** Android向けUIフレームワークであるJetpack ComposeとAPIの多くを共有しているため、AndroidとiOSの両方で同じAPIを使ってUIを構築できます。
*   **Kotlin Multiplatformとの連携:** Kotlin Multiplatformを基盤としているため、ネイティブAPI（カメラAPIなど）へのアクセスや、ネイティブUIビュー（MKMapViewなど）の埋め込みが容易です。
*   **各プラットフォームの状態:**
    *   **iOS (Beta):** 機能はほぼ完成しており、マイグレーションの問題は最小限に抑えられています。バグやパフォーマンス、開発体験に関する問題が発生する可能性がありますが、Alpha段階ほどではありません。
    *   **Android:** Jetpack ComposeでAndroidアプリを開発する場合と同様の体験を得られます。
    *   **Desktop:** JVMをターゲットとし、MacOS、Windows、Linuxといった主要デスクトッププラットフォームで、高性能なハードウェアアクセラレーションによるUIレンダリングをサポートします。メニュー、キーボードショートカット、ウィンドウ操作、通知管理などのデスクトップ拡張機能も提供しています。
    *   **Web (Alpha):** WebAssemblyベースのKotlin/Wasmを利用して、Web上でもUIを共有できます。

**関連ライブラリ:**

*   **Compose HTML:** Kotlin/JSをターゲットとし、HTMLとCSSを使用してWeb UIを構築するためのComposableな構成要素を提供するライブラリです（Multiplatformライブラリではありません）。

**その他:**

*   公式プロジェクトとして公開されており、JetBrainsが積極的に開発・メンテナンスを行っています。
*   安定版、プレリリース版、開発版のリリースの状況がREADMEで確認できます。
*   FAQ、サンプル、チュートリアル、互換性情報、変更履歴などのドキュメントが提供されています。
*   各プラットフォームに関するフィードバックは、Kotlin Slackの特定のチャンネルで受け付けています。
*   問題が発生した場合は、YouTrackで報告できます。

**[Compose Multiplatformを始める](https://jb.gg/start-cmp)**ための情報が提供されています。

