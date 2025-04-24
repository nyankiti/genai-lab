
# hydralauncher/hydra

**stars**: 12703

[View Repository on Github](https://github.com/hydralauncher/hydra)

Hydra is a game launcher with its own embedded bittorrent client

## README要約
## Hydra Launcher の詳細な要約

**Hydra** は、独自の組み込み BitTorrent クライアントを備えたゲームランチャーです。Electron (TypeScript) と Python で記述されており、libtorrent を使用して torrent システムを処理します。

**主な機能**:

*   独自の組み込み BitTorrent クライアント
*   ゲームページでの How Long To Beat (HLTB) 統合
*   ダウンロードパスのカスタマイズ
*   Windows および Linux サポート
*   継続的な更新

**インストール**:

1.  [Releases](https://github.com/hydralauncher/hydra/releases/latest) ページから Hydra の最新バージョンをダウンロードします。
    *   Windows にインストールする場合は `.exe` をダウンロードします。
    *   Linux にインストールする場合は、ディストリビューションに応じて `.deb`、`.rpm`、または `.zip` をダウンロードします。
2.  ダウンロードしたファイルを実行します。
3.  Hydra をお楽しみください！

**貢献**:

*   [Telegram](https://t.me/hydralauncher) でディスカッションに参加できます。
*   翻訳、コードの貢献が可能です。
*   プロジェクト構造は以下の通りです:
    *   `torrent-client`: torrent ダウンロードを管理するために使用する Python ライブラリ (libtorrent)
    *   `src/renderer`: アプリケーションの UI
    *   `src/main`: 全てのロジック

**ビルド方法**:

1.  **前提条件**:
    *   Node.js (nodejs.org からダウンロードしてインストール)
    *   Yarn (yarnpkg.com からの指示に従ってインストール)
    *   OpenSSL 1.1 (libtorrent が Windows で必要)
    *   Python 3.9 (python.org からダウンロードしてインストール)
2.  **手順**:
    *   Node.js の依存関係を `yarn` でインストール。
    *   Python の依存関係を `pip install -r requirements.txt` でインストール。
    *   環境変数 (`.env` ファイル内) に SteamGridDB API キーを設定。
    *   Torrent クライアントを `python torrent-client/setup.py build` でビルド。
    *   Electron アプリケーションを Windows では `yarn build:win`、Linux では `yarn build:linux` でビルド。
3.  **実行**:
    *   `yarn dev` で Electron プロセスと BitTorrent クライアントの両方を起動します。

**ライセンス**:

*   Hydra は [MIT License](LICENSE) の下でライセンスされています。


---

# bytedance/UI-TARS

**stars**: 4587

[View Repository on Github](https://github.com/bytedance/UI-TARS)



## README要約
## UI-TARS リポジトリ概要（日本語）

このリポジトリは、ByteDanceが開発した、ネイティブエージェントによる自動GUI操作を先駆的に行うことを目指したオープンソースのマルチモーダルエージェント「UI-TARS-1.5」に関するものです。

**主な内容:**

*   **UI-TARS-1.5:** 強力なビジョン言語モデルに基づいて構築されたオープンソースのマルチモーダルエージェントです。仮想世界内で様々なタスクを効果的に実行できます。
*   **アーキテクチャ:** 最新の論文[https://arxiv.org/abs/2501.12326](https://arxiv.org/abs/2501.12326)で紹介された基盤アーキテクチャを活用し、強化学習による高度な推論を統合しています。これにより、アクションを実行する前に思考を巡らせることができ、パフォーマンスと適応性を向上させています。
*   **UI-TARS-1.5-7Bモデル:** Hugging Faceで公開されています。[https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B](https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B)
*   **UI-TARS-desktop:** ローカルデバイスで動作するバージョンです。詳細は[https://github.com/bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop)を参照してください。
*   **Midscene:** Web自動化にUI-TARSを使用する場合、[https://github.com/web-infra-dev/Midscene](https://github.com/web-infra-dev/Midscene)を参照してください。
*   **OSWorldインフェレンススクリプト:** OSWorld公式インフェレンススクリプトを利用して結果を再現できます。
*   **デモ動画:** UI-TARSのGUI操作とゲームプレイのデモ動画が提供されています。
*   **デプロイ:** デプロイに関するガイドは[README\_deploy.md](README_deploy.md)を参照してください。座標処理については[README\_coordinates.md](README_coordinates.md)を、アクションスペースの完全な解析については[OSWorld uitars\_agent.py](https://github.com/xlang-ai/OSWorld/blob/main/mm_agents/uitars_agent.py)を参照してください。
*   **システムプロンプト:** [prompts.py](prompts.py)を参照してください。
*   **パフォーマンス:** 複数のベンチマークで評価されており、他のモデルと比較して優れた結果を示しています。

    *   **オンラインベンチマーク評価:** OSworld、Windows Agent Arena、WebVoyager、Online-Mind2web、Android Worldなどで高いスコアを達成しています。
    *   **グラウンディング能力評価:** ScreenSpot-V2、ScreenSpotProにおいても高い性能を発揮しています。
    *   **Poki Game:** 様々なゲームで高い成功率を示しています。
    *   **Minecraft:** 複数のタスクで優れた性能を発揮しています。
*   **モデルスケールの比較:** UI-TARSの様々なモデルスケール（UI-TARS-72B-DPO, UI-TARS-1.5-7B, UI-TARS-1.5）をOSWorldとScreenSpotProのベンチマークで比較した結果も示されています。

**制限事項:**

*   **誤用:** UI-TARS-1.5は、CAPTCHAのような認証を突破するなど、GUIタスクで高度な能力を発揮するため、不正アクセスや保護されたコンテンツの自動化に悪用される可能性があります。
*   **計算リソース:** 大規模タスクや長時間のゲームプレイには、相応の計算リソースが必要です。
*   **幻覚:** 不正確な説明、GUI要素の誤認識、または不適切なアクションにつながる可能性があります。
*   **モデルのスケール:** UI-TARS-1.5-7Bは、ゲームシナリオ向けに最適化されておらず、UI-TARS-1.5の方が優位性を持っています。

**今後の展望:**

UI-TARSは、現実世界の行動を実行できる、より洗練されたエージェント体験へと進化することを目指しており、[doubao](https://team.doubao.com/en/)のようなプラットフォームがより複雑なタスクを実行できるようになることを目指しています。

**その他:**

*   Star Historyグラフで、このリポジトリのStar数の推移を確認できます。
*   論文とモデルは研究利用を推奨しており、引用情報が提供されています。
*   研究協力のために、UI-TARS-1.5の早期研究アクセスが提供されています。興味のある研究者はTARS@bytedance.comまで連絡できます。


---

# anthropics/courses

**stars**: 10742

[View Repository on Github](https://github.com/anthropics/courses)

Anthropic's educational courses

## README要約
## Anthropicの教育コース概要

このリポジトリは、Anthropicが提供する教育コースをまとめたものです。

**内容:**

現在、以下の5つのコースが含まれています。

1.  **Anthropic API fundamentals:** Claude SDKの基本を学びます。APIキーの取得、モデルパラメータの操作、マルチモーダルプロンプトの作成、レスポンスのストリーミングなど、Claude SDKを使い始めるために必要な知識を習得できます。
2.  **Prompt engineering interactive tutorial:** 主要なプロンプト技術をステップバイステップで学ぶ包括的なガイドです。[AWS Workshop版](https://catalog.us-east-1.prod.workshops.aws/workshops/0644c9e9-5b82-45f2-8835-3b5aa30b1848/en-US)も提供されています。
3.  **Real world prompting:** 複雑で現実的なプロンプトにプロンプト技術を組み込む方法を学びます。[Google Vertex版](https://github.com/anthropics/courses/tree/vertex/real_world_prompting)も利用可能です。
4.  **Prompt evaluations:** プロンプトの品質を測定するための、実用的なプロンプト評価の作成方法を学びます。
5.  **Tool use:** Claudeを使用してワークフローでツール利用を実装するために必要なすべての情報を学びます。

**コースの推奨順:**

1.  Anthropic API fundamentals
2.  Prompt engineering interactive tutorial
3.  Real world prompting
4.  Prompt evaluations
5.  Tool use

**注意点:**

これらのコースでは、APIコストを抑えるため、Anthropicの低コストモデルであるClaude 3 Haikuを推奨しています。必要に応じて他のClaudeモデルを使用することも可能です。

