
# SigmaHQ/sigma

**stars**: 8978

[View Repository on Github](https://github.com/SigmaHQ/sigma)

Main Sigma Rule Repository

## README要約
## SigmaHQ/sigma リポジトリ概要

このリポジトリは、SIEM（Security Information and Event Management）システム向けの汎用シグネチャフォーマットである Sigma の主要なルールリポジトリです。検出エンジニア、脅威ハンター、その他の防御セキュリティの実践者が検出ルールを共同で作成するための場所として機能しています。

### 主な内容

*   **検出ルールのコレクション:** 3,000以上の検出ルールを提供し、脅威に依存しない「汎用検出ルール」、潜在的な疑わしい活動を特定するための「脅威ハンティングルール」、特定の脅威（APTキャンペーン、ゼロデイ脆弱性の悪用、マルウェアなど）を対象とした「Emerging Threat Rules」の3つのカテゴリに分類されています。
*   **Sigma の概要:** Sigma は、関連するログイベントを簡潔に記述するためのオープンで汎用のシグネチャ形式です。このフォーマットは柔軟性が高く、記述が容易で、あらゆる種類のログファイルに適用できます。Sigma は、ログファイルに対する Snort（ネットワークトラフィック用）や YARA（ファイル用）のようなものです。
*   **目的:** 検出方法を構造化された形式で共有し、検出能力を向上させることを目指しています。
*   **利点:**
    *   専門の検出エンジニアのコミュニティによるレビュー済みの検出およびハンティングルールが継続的に増加しています。
    *   ベンダーに依存しない検出ルールです。
    *   コミュニティやレポート間で容易に共有できます。
*   **ルール作成:** ルールの作成方法については、リポジトリ内の「Rule Creation Guide」や外部のリソースを参照できます。
*   **貢献:** 新しいルールの貢献に関するガイドラインが提供されています。
*   **ルールパッケージ:** リリースページから最新のルールパッケージをダウンロードできます。
*   **ルールの使用と変換:** Sigma CLI や sigconverter.io、pySigma などのツールを使用して、Sigmaルールを変換したり、ツールチェーンに統合したりできます。
*   **問題報告:** 誤検知や新しいルールのアイデアは、GitHub の issue を通じて報告できます。
*   **参考資料:** Sigma に関する様々なリソースへのリンクが提供されています。
*   **利用ツール/製品:** Sigma ルールを利用しているまたは統合している、多数のプロジェクトや製品がリストアップされています。
*   **メンテナ:** リポジトリのメンテナが記載されています。
*   **ライセンス:** Detection Rule License (DRL) 1.1 の下でコンテンツが公開されています。

このリポジトリは、セキュリティ専門家が検出能力を向上させるための重要なリソースであり、コミュニティによる継続的な貢献と活発な開発が行われています。


---

# docmost/docmost

**stars**: 13656

[View Repository on Github](https://github.com/docmost/docmost)

Docmost is an open-source collaborative wiki and documentation software. It is an open-source alternative to Confluence and Notion.

## README要約
## docmost/docmost リポジトリ概要

このリポジトリは、Confluence や Notion のオープンソース代替となる、共同作業可能な Wiki およびドキュメントソフトウェア「Docmost」のソースコードを公開しています。

**主な特徴:**

*   **リアルタイムコラボレーション:** 複数人で同時にドキュメントを編集できます。
*   **図のサポート:** Draw.io、Excalidraw、Mermaid を使った図の作成・埋め込みが可能です。
*   **スペース:** ドキュメントを整理するためのスペース機能。
*   **権限管理:** きめ細かいアクセス権限の設定。
*   **グループ:** ユーザーをグループ化して管理できます。
*   **コメント:** ドキュメントに対してコメントを付与できます。
*   **ページ履歴:** ページの変更履歴を確認できます。
*   **検索:** ドキュメント内を検索できます。
*   **ファイル添付:** ファイルを添付できます。
*   **埋め込み:** Airtable, Loom, Miro などのサービスを埋め込むことができます。
*   **翻訳:** 10以上の言語に対応しています。

**ライセンス:**

*   **コア機能:** AGPL 3.0 (オープンソース)
*   **エンタープライズ機能:** エンタープライズライセンス (Enterprise Edition)

**貢献:**

開発に関する情報は、[開発ドキュメント](https://docmost.com/docs/self-hosting/development) を参照してください。

**その他:**

*   [Webサイト](https://docmost.com)
*   [ドキュメント](https://docmost.com/docs)
*   [スクリーンショット](https://docmost.com/screenshots/home.png) と [エディタ](https://docmost.com/screenshots/editor.png)


---

# midday-ai/midday

**stars**: 7608

[View Repository on Github](https://github.com/midday-ai/midday)

Invoicing, Time tracking, File reconciliation, Storage, Financial Overview & your own Assistant made for Freelancers

## README要約
## Midday - フリーランス向けオールインワンビジネスツール

Middayは、フリーランス、コントラクター、コンサルタント、個人事業主がビジネス運営をより効率的に行えるように設計されたオールインワンツールです。 複数のプラットフォームにまたがる様々な機能を1つのシステムに統合することで、業務効率化を支援します。

**主な機能:**

*   **時間追跡:** プロジェクトの時間追跡を行い、生産性とコラボレーションを向上させ、プロジェクトの概要を把握します。
*   **請求書作成:** ウェブベースの請求書を作成し、リアルタイムで共同作業し、プロジェクトをシームレスに同期できる機能（今後実装予定）。
*   **Magic Inbox:** 受け取った請求書や領収書を適切な取引に自動的に照合し、財務追跡と整理を簡素化します。
*   **Vault:** 契約書などの重要なファイルを安全に保管し、アクセスを容易にします。
*   **シームレスなエクスポート:** 会計士向けに、財務データをCSVファイル形式で簡単にエクスポートできます。
*   **アシスタント:** 財務状況に関するパーソナライズされたインサイトを提供し、支出パターンを理解し、コストを削減し、ドキュメントを見つけるのに役立ちます。

**注目点:**

*   Hacker News および Product Hunt で紹介されています。
*   ローカル開発を始めるためのドキュメントが作成中です: [https://docs.midday.ai](https://docs.midday.ai)

**技術スタック:**

*   モノレポ
*   Bun
*   React
*   TypeScript
*   Next.js
*   Supabase
*   Shadcn
*   ToDesktop
*   Expo
*   TailwindCSS

**ホスティング:**

*   Supabase (データベース、ストレージ、リアルタイム、認証)
*   Vercel (ウェブサイト、エッジ設定、メトリクス)
*   Upstash (Redis)

**サービス:**

*   Trigger.dev (バックグラウンドジョブ)
*   Resend (トランザクションおよびマーケティング)
*   Novu (通知)
*   Github Actions (CI/CD)
*   GoCardLess (EU銀行接続)
*   Plaid (カナダおよび米国の銀行接続)
*   Teller (米国の銀行接続)
*   OpenPanel (イベントと分析)
*   Dub (ショートURL)
*   Polar (支払い処理)
*   Typesense (検索)

**ライセンス:**

*   **非商用利用**には **AGPL-3.0** ライセンスが適用されます。
*   **商用利用**やセットアップ料金が必要なデプロイには、[engineer@midday.ai](mailto:engineer@midday.ai) までご連絡ください。商用ライセンスが必要になります。


---

# elastic/detection-rules

**stars**: 2190

[View Repository on Github](https://github.com/elastic/detection-rules)



## README要約
## elastic/detection-rules リポジトリの概要

このリポジトリは、Elastic Securityで使用される検出ルールの開発、保守、テスト、検証、およびリリースを目的としています。Elastic SecurityのDetection Engine向けのルールの開発拠点であり、Elastic SecurityのDetection Engine内で使用されるルールが格納されています。

### 主な機能と内容

*   **ルール管理:** `.toml`形式のルールファイルを扱うPythonモジュールを提供し、ルールの作成とユニットテストを支援します。
*   **検出ルールとしてのコード (DaC):**  DaC (Detections as Code) パイプラインの構築、Pythonでのユニットテスト、KibanaのDetection Engineとの統合を行うためのコードが含まれています。
*   **ディレクトリ構造:**
    *   `detection_rules/`: ルールの解析、検証、パッケージングを行うPythonモジュール。
    *   `etc/`: ECS (Elastic Common Schema) やBeatsのスキーマ、設定ファイルなどのファイル。
    *   `hunting/`: 脅威ハンティングパッケージとクエリが格納されるルートディレクトリ。
    *   `kibana/`: Kibana APIコールとDetection Engineを処理するPythonライブラリ。
    *   `kql/`: Kibana Query Languageの解析と検証を行うPythonライブラリ。
    *   `rules/`: ルールが格納されるルートディレクトリ。
    *   `rules_building_block/`: ビルディングブロックルールが格納されるルートディレクトリ。
    *   `tests/`: ルールをユニットテストするためのPythonコード。
*   **ユニットテスト:** ルールが正しく動作することを確認するためのユニットテストが可能です。
*   **Kibana統合:** Kibanaとの連携により、Detection Engineでルールを使用できます。
*   **RTAs:** 攻撃者のテクニックをエミュレートし、ルールが検証できることを確認するためのRed Team Automations（RTAs）は、別のリポジトリ（[Cortado](https://github.com/elastic/cortado)）にあります。

### 技術情報

*   **Python:** Python 3.12以降をサポートしており、依存関係をインストールするために`make`コマンドまたは`pip3 install ".[dev]"`が使用できます。
*   **ライセンス:**  Elastic License v2に基づいてライセンスされています。

### 貢献とサポート

*   **貢献:** ルールの追加や改善は歓迎され、[貢献ガイド](CONTRIBUTING.md)に沿って行われます。
*   **問題報告:**  GitHub Issueを作成して問題を報告できます。
*   **サポート:**  問題や質問は、[Security Discuss Forum](https://discuss.elastic.co/c/security/)またはSlackの**#security-detection-rules**チャンネルで質問できます。

### その他

*   Elastic CloudのマネージドサービスやElastic Stackのデフォルトディストリビューションを使用している場合、最新のルールはDetection Engineにアクセスした際に取得されます。
*   最新のルールセットについては、[Prebuilt rule reference](https://www.elastic.co/guide/en/security/current/prebuilt-rules-downloadable-updates.html)を参照してください。
*   DaCに関するサポートとスコープについては、[docs-dev/detections-as-code.md#support-and-scope](docs-dev/detections-as-code.md#support-and-scope)を参照してください。


---

# microsoft/BitNet

**stars**: 13402

[View Repository on Github](https://github.com/microsoft/BitNet)

Official inference framework for 1-bit LLMs

## README要約
## Microsoft/BitNet リポジトリ概要 (日本語)

本リポジトリは、1-bit LLM (大規模言語モデル) の公式推論フレームワークである **bitnet.cpp** を提供しています。

### 主な内容

*   **1-bit LLM の高速かつロスレスな推論**: bitnet.cpp は、1-bit LLM (例: BitNet b1.58) の高速かつロスレスな推論をCPU上で行うための最適化されたカーネル群を提供します。
*   **CPU 推論の最適化**: 現状では CPU での推論に焦点を当てており、ARM CPU で **1.37x ～ 5.07x**、x86 CPU で **2.37x ～ 6.17x** の速度向上を実現しています。
*   **省電力性能**: エネルギー消費量を、ARM CPU で **55.4% ～ 70.0%**、x86 CPU で **71.9% ～ 82.2%** 削減し、効率性を高めています。
*   **ローカルデバイスでの実行**: 100B の BitNet b1.58 モデルを単一の CPU で実行でき、人間の読書速度に匹敵する 5～7 トークン/秒の速度を実現します。これにより、LLM をローカルデバイスで実行する可能性が大きく広がります。
*   **デモとモデル**: BitNet b1.58 3B モデルを Apple M2 で実行するデモが公開されており、Hugging Face 上で公開されている BitNet-b1.58-2B-4T モデルなどの公式モデルも提供されています。

### 最新情報

*   **2025年4月14日**: Hugging Face 上で BitNet 公式 2B パラメータモデルが公開。
*   **2025年2月18日**: Ternary LLM 向けの効率的なエッジ推論に関する論文発表。
*   **2024年11月8日**: 1-bit LLM 用の 4-bit アクティベーションに関する論文発表。
*   **2024年10月21日**: CPU 上での高速かつロスレスな BitNet b1.58 推論に関する論文発表。
*   **2024年10月17日**: bitnet.cpp 1.0 リリース。

### 関連技術

*   **llama.cpp**: 本プロジェクトは llama.cpp フレームワークを基盤としています。
*   **T-MAC**: カーネルは、T-MAC で開拓されたルックアップテーブル手法に基づいています。

### サポートモデル

公式モデルとして、BitNet-b1.58-2B-4T (2.4B パラメータ) がサポートされています。また、Hugging Face 上で公開されている bitnet\_b1\_58-large (0.7B)、bitnet\_b1\_58-3B (3.3B)、Llama3-8B-1.58-100B-tokens (8.0B)、Falcon3 ファミリー (1B-10B) などのモデルもサポートされています。

### インストール

*   **前提条件**: Python 3.9 以降、CMake 3.22 以降、Clang 18 以降、conda (推奨) が必要です。Windows ユーザーは Visual Studio 2022 を、Debian/Ubuntu ユーザーは自動インストールスクリプトを利用できます。
*   **ビルド手順**: リポジトリのクローン、依存関係のインストール、プロジェクトのビルドを行います。Windows環境では、Visual Studio 2022 の開発者コマンドプロンプト/PowerShellの使用が推奨されます。

### 使用方法

*   基本的な推論の実行方法、会話モードの有効化、ベンチマークの実行方法について説明しています。
*   `setup_env.py` スクリプトを使用して、モデルのダウンロードや環境設定を行います。
*   `run_inference.py` スクリプトを使用して、推論を実行します。
*   `e2e_benchmark.py` スクリプトを使用して、ベンチマークを実行します。
*   モデルレイアウトが公開モデルでサポートされていない場合、ダミーモデルを生成するスクリプトも提供しています。

### FAQ (よくある質問)

*   llama.cpp のビルドエラーに関する問題と解決策。
*   Windows 上での conda 環境での clang ビルド方法。

