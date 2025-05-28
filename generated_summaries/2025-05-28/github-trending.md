
# pathwaycom/pathway

**stars**: 26162

[View Repository on Github](https://github.com/pathwaycom/pathway)

Python ETL framework for stream processing, real-time analytics, LLM pipelines, and RAG.

## README要約
## Pathway: ライブデータフレームワークの詳細な要約

**Pathway** は、ストリーム処理、リアルタイム分析、LLMパイプライン、RAG（Retrieval-Augmented Generation）向けのPython ETLフレームワークです。

**主な特徴**:

*   **Python API**: 使いやすいPython APIにより、お気に入りのPython MLライブラリをシームレスに統合できます。
*   **開発と本番環境の両方に対応**: バッチデータとストリーミングデータの両方を効果的に処理できます。
*   **Rustエンジン**: Differential Dataflowに基づいたスケーラブルなRustエンジンが、マルチスレッド、マルチプロセッシング、分散計算を実現します。
*   **コンテナ化とデプロイ**: DockerとKubernetesを使用して簡単にデプロイできます。
*   **豊富なコネクタ**: Kafka、GDrive、PostgreSQL、SharePointなどの外部データソースに接続するためのコネクタを提供。Airbyteコネクタを使用すると、300以上のデータソースに接続できます。
*   **ステートフル/ステートレス変換**: ジョイン、ウィンドウ処理、ソートなどのステートフル変換をサポート。Rustで直接実装された多くの変換を提供し、Python関数やライブラリも利用できます。
*   **永続化**: 計算の状態を保存し、更新やクラッシュ後にパイプラインを再起動できます。
*   **整合性**: 時系列データを管理し、計算の整合性を保証します。「少なくとも1回」の整合性は無料版で提供され、エンタープライズ版では「正確に1回」の整合性が提供されます。
*   **LLMサポート**: LLM拡張機能を提供し、LLMおよびRAGパイプライン（LLMラッパー、パーサー、エンベッダー、スプリッターなど）をデータパイプラインに統合するためのユーティリティが含まれます。インメモリリアルタイムベクトルインデックス、LLamaIndexおよびLangChainとの統合も可能です。

**ユースケース**:

*   **リアルタイムETL**
*   **アラート付きイベント駆動型パイプライン**
*   **リアルタイム分析**
*   **AIパイプライン**: LLMおよびRAGパイプライン構築用のツールを提供
    *   Unstructured data to SQL on-the-fly
    *   Private RAG with Ollama and Mistral AI
    *   Adaptive RAG
    *   Multimodal RAG with gpt-4o

**インストール**:

```bash
pip install -U pathway
```

**使用例**:

```python
import pathway as pw

class InputSchema(pw.Schema):
  value: int

input_table = pw.io.csv.read(
  "./input/",
  schema=InputSchema
)

filtered_table = input_table.filter(input_table.value>=0)
result_table = filtered_table.reduce(
  sum_value = pw.reducers.sum(filtered_table.value)
)

pw.io.jsonlines.write(result_table, "output.jsonl")

pw.run()
```

**デプロイ**:

*   **ローカル**: `import pathway as pw` してパイプラインを作成し、`pw.run()` で実行。
*   **Docker**: Dockerイメージ (`pathwaycom/pathway:latest`) を使用して、Dockerfileを作成し、Docker buildとrunを実行。また、Pythonスクリプトを直接実行することも可能。
*   **Kubernetes/クラウド**: KubernetesまたはRenderのようなサービスへのデプロイに対応。Pathway for Enterprise（商用）を利用すると、分散コンピューティングとKubernetesデプロイメントによるスケーリングが可能。

**パフォーマンス**:

Flink、Spark、Kafka Streamingなどの既存技術よりも高いパフォーマンスを発揮することを目指しています。特に、時間的ジョイン、反復グラフアルゴリズム、機械学習ルーチンなど、他のストリーミングフレームワークでは容易にサポートされないアルゴリズムをストリーミングモードで実装できます。

**ドキュメントとサポート**:

*   [pathway.com/developers/](https://pathway.com/developers/)
*   [Discord](https://discord.com/invite/pathway)
*   [contact@pathway.com](mailto:contact@pathway.com)

**ライセンス**:

BSL 1.1 ライセンス（非商用利用無制限、ほとんどの商用目的で無料）で配布。4年後にApache 2.0ライセンスに自動的に移行。一部の補完的なリポジトリ（例：サンプル、ライブラリ、コネクタなど）は、MITライセンスでオープンソース化されています。

**コントリビューション**:

コア機能に関する問題はGitHub Issuesで報告。ライブラリやコネクタを統合したい場合は、MIT/Apache 2.0ライセンスで別のリポジトリとしてリリースすることを推奨。


---

# microsoft/RD-Agent

**stars**: 4981

[View Repository on Github](https://github.com/microsoft/RD-Agent)

Research and development (R&D) is crucial for the enhancement of industrial productivity, especially in the AI era, where the core aspects of R&D are mainly focused on data and models. We are committed to automating these high-value generic R&D processes through R&D-Agent, which lets AI drive data-driven AI. 🔗https://aka.ms/RD-Agent-Tech-Report

## README要約
## Microsoft/RD-Agent の詳細な要約

このリポジトリは、Microsoftが開発した、AIを活用してデータ駆動型のAI開発を自動化する研究開発（R&D）エージェント「R&D-Agent」に関するものです。R&D-Agentは、特にAI時代において重要性が増しているデータとモデルを中心としたR&Dプロセスを自動化することを目指しています。

**主な特徴:**

*   **目的:** 産業界におけるR&Dプロセスの中でも、特にデータとモデルに焦点を当てた、価値の高い部分を自動化すること。
*   **基盤技術:** LLM（大規模言語モデル）を活用し、自動化された研究、開発、進化を可能にするフレームワーク。
*   **主要コンポーネント:** 「R」は新しいアイデアの提案、「D」はそれらの実装を担当。
*   **実績:** MLE-bench（機械学習エンジニアリングタスクの性能を評価する包括的なベンチマーク）において、トップクラスの性能を達成。
*   **デモ:**
    *   **ライブデモ:** [https://rdagent.azurewebsites.net/](https://rdagent.azurewebsites.net/)
    *   **デモ動画:**
        *   自動定量取引＆反復要因の進化: [https://rdagent.azurewebsites.net/factor_loop](https://rdagent.azurewebsites.net/factor_loop)
        *   データマイニングエージェント: [https://rdagent.azurewebsites.net/model_loop](https://rdagent.azurewebsites.net/model_loop), [https://rdagent.azurewebsites.net/dmm](https://rdagent.azurewebsites.net/dmm)
        *   研究コパイロット: [https://rdagent.azurewebsites.net/report_model](https://rdagent.azurewebsites.net/report_model), [https://rdagent.azurewebsites.net/report_factor](https://rdagent.azurewebsites.net/report_factor)
        *   その他のデモ動画はYouTubeのプレイリストで公開。
*   **機能:**
    *   自動化されたQuant Factory（定量取引）。
    *   データマイニングエージェントによるデータとモデルの反復的な提案。
    *   研究論文や財務報告書の自動読み込みと実装。
    *   Kaggleエージェントによるモデルチューニングと特徴量エンジニアリング。
*   **使用方法 (Quick Start):**
    1.  Dockerのインストール（必須）。
    2.  Conda環境の作成とアクティベーション。
    3.  R&D-Agentパッケージのインストール（pip install rdagent）。
    4.  `.env` ファイルによるAPIキーやモデルなどの設定。LiteLLMバックエンドもサポート。
    5.  各種デモの実行 (`rdagent fin_factor`, `rdagent fin_model`など)。
    6.  UIによる実行結果のモニタリング (`rdagent ui`)。
*   **シナリオ:**
    *   金融分野 (自動取引、レポートからの要因抽出)。
    *   医療分野 (モデル開発)。
    *   一般分野 (論文の自動読み込みと実装、Kaggleコンペティション)。
*   **フレームワーク:**
    *   R&Dの能力をベンチマーク。
    *   アイデア提案 (研究)。
    *   アイデアの実装と実行 (開発)。
*   **関連論文:**
    *   R&D-Agent: Automating Data-Driven AI Solution Building Through LLM-Powered Automated Research, Development, and Evolution (全体的な技術レポート)
    *   Towards Data-Centric Automatic R&D (ベンチマーク)
    *   Collaborative Evolving Strategy for Automatic Data-Centric Development (開発)
    *   R&D-Agent-Quant: A Multi-Agent Framework for Data-Centric Factors and Model Joint Optimization (応用)
*   **貢献:** 貢献を歓迎し、CONTRIBUTING.mdに詳細なガイドラインを提供。
*   **法的免責事項:** RD-agentは「現状のまま」提供され、金融投資助言を目的とせず、ユーザーは自身の責任において使用する必要があります。

**要するに、R&D-Agentは、LLMを活用してデータ駆動型のAI研究開発プロセスを自動化し、特に金融、医療、一般分野でのモデル開発やデータ分析を効率化することを目指す、革新的な研究プロジェクトです。**


---

# stalwartlabs/stalwart

**stars**: 8046

[View Repository on Github](https://github.com/stalwartlabs/stalwart)

All-in-one Mail & Collaboration server. Secure, scalable and fluent in every protocol (IMAP, JMAP, SMTP, CalDAV, CardDAV, WebDAV).

## README要約
## Stalwart の詳細な要約

Stalwart は、安全でスケーラブルで、あらゆるプロトコル（IMAP、JMAP、SMTP、CalDAV、CardDAV、WebDAV）に対応した、オールインワンのメール＆コラボレーションサーバーです。Rust で記述されており、セキュリティ、速度、堅牢性、拡張性を重視して設計されています。

**主な特徴:**

*   **メールサーバー:**
    *   JMAP (RFC8621、RFC8887、RFC9404、RFC9425)
    *   IMAP4rev2/IMAP4rev1 (RFC9051、RFC3501) および ManageSieve (RFC5804)
    *   POP3 (RFC1939)
    *   SMTP (DMARC, DKIM, SPF, ARC)
    *   DANE, MTA-STS, SMTP TLS
    *   インバウンドスロットリング、フィルタリング、Sieveスクリプティング
    *   分散仮想キュー、優先配信、クォータ、ルーティングルール
    *   エンベロープの書き換えとメッセージの変更
*   **コラボレーションサーバー:**
    *   CalDAV (カレンダーとスケジューリング)
    *   CardDAV (連絡先管理)
    *   WebDAV (ファイルストレージと共有)
*   **スパムとフィッシング対策:**
    *   包括的なフィルタリングルール
    *   LLMによるスパムフィルタリングとメッセージ分析
    *   統計的なスパム分類器とアドレス帳統合
    *   DNS Blocklists (DNSBLs) チェック
    *   Pyzor を使用した協調的なスパムフィルタリング
    *   URL攻撃、送信者詐称に対するフィッシング対策
    *   信頼できる返信の追跡
    *   送信者レピュテーション監視
    *   グレイリスト
    *   スパムトラップ
*   **柔軟性:**
    *   RocksDB, FoundationDB, PostgreSQL, mySQL, SQLite, S3-Compatible, Azure, Redis, ElasticSearchなど、プラグ可能なストレージバックエンド
    *   17言語対応の全文検索
    *   Sieveスクリプト
    *   エイリアス、メーリングリスト、サブアドレス、キャッチオールアドレス
    *   autoconfig/autodiscoverによる自動アカウント設定
    *   マルチテナンシー
    *   ユーザー/テナントごとのディスククォータ
*   **セキュリティと堅牢性:**
    *   S/MIMEまたはOpenPGPによる保存時の暗号化
    *   ACME による TLS 証明書の自動プロビジョニング
    *   攻撃や悪用を検知した IP アドレスの自動ブロック
    *   レート制限
    *   セキュリティ監査
    *   メモリ安全性 (Rust)
*   **拡張性と耐障害性:**
    *   小規模から大規模まで対応
    *   耐障害性と高可用性の設計
    *   ピアツーピアクラスタリング、Kafka, Redpanda, NATS, Redis
    *   Kubernetes, Apache Mesos, Docker Swarm サポート
    *   リードレプリカ、シャード blob ストレージ、インメモリデータストア
*   **認証と認可:**
    *   OpenID Connect認証
    *   OAuth 2.0 (Authorization code, device authorization)
    *   LDAP, OIDC, SQL認証バックエンドサポート
    *   2段階認証 (2FA-TOTP)
    *   アプリケーションパスワード
    *   ロールと権限
    *   ACL
*   **可観測性:**
    *   OpenTelemetry, journald, ログファイル、コンソールによるロギングとトレース
    *   OpenTelemetry, Prometheusによるメトリクス
    *   Webhooks
    *   アラート
    *   ライブトレースとメトリクス
*   **Webベースの管理:**
    *   ダッシュボード
    *   アカウント、ドメイン、グループ、メーリングリスト管理
    *   SMTP キュー管理
    *   DMARC、TLS-RPT、Failure (ARF) レポートの表示
    *   すべての側面の設定
    *   ログビューア
    *   セルフサービスポータル

**インストール:**
Linux/MacOS、Windows、Dockerに対応。

**サポート:**
GitHub Discussions、Reddit、Discord でサポートを提供。Enterprise License を購入することで、優先サポートも利用可能。

**ロードマップ:**
JMAP for Calendars, Contacts, File Storage のサポート、Webメールクライアント。

**資金提供:**
NLnet および欧州委員会からの資金提供を受けている。

**ライセンス:**
GNU Affero General Public License v3.0 (AGPL-3.0) と Stalwart Enterprise License v1 (SELv1) のデュアルライセンス。

