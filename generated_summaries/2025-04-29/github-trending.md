
# hacksider/Deep-Live-Cam

**stars**: 51741

[View Repository on Github](https://github.com/hacksider/Deep-Live-Cam)

real time face swap and one-click video deepfake with only a single image

## README要約
## Deep-Live-Cam の概要

**Deep-Live-Cam** は、単一の画像だけでリアルタイムの顔スワップとワンクリックでのビデオディープフェイクを実現するプロジェクトです。

**主な特徴:**

*   **リアルタイム処理:** ライブカメラ映像やビデオに対して、リアルタイムで顔スワップやディープフェイクを適用できます。
*   **ワンクリック:** 簡単な操作で、顔の選択、カメラの選択、ライブ開始の3ステップでディープフェイクを作成できます。
*   **単一の画像:** 顔スワップのソースとなる画像は、1枚で済みます。
*   **多様な機能:**
    *   **口のマスク:** 元の口の動きを保持し、自然な表情を再現します。
    *   **顔マッピング:** 複数の被写体に異なる顔を同時に適用できます。
    *   **映画への顔適用:** 映画の登場人物の顔を自分の顔に置き換えることができます。
    *   **ライブパフォーマンス:** ライブショーやパフォーマンスに利用できます。
    *   **ミーム作成:** 印象的なミームを作成できます。
    *   **Omegleへの対応:** Omegleなどのプラットフォームで、サプライズを提供できます。

**免責事項と倫理的な使用:**

*   **倫理的な使用:** 本ソフトウェアは、AI生成メディア業界向けのツールとして設計されています。ユーザーは、責任を持ってかつ合法的に使用する必要があります。他人の顔を使用する場合は、本人の同意を得て、オンラインで共有する際はディープフェイクであることを明示する必要があります。
*   **コンテンツ制限:** ヌード、露骨な表現、または機密性の高い内容（戦争の映像など）の処理を防ぐための組み込みのチェックが含まれています。
*   **法的コンプライアンス:** 関連するすべての法律および倫理的ガイドラインを遵守します。法的要件がある場合は、プロジェクトを終了するか、透かしを追加する場合があります。
*   **ユーザーの責任:** エンドユーザーの行為について責任を負いません。ユーザーは、ソフトウェアの使用が倫理基準と法的要件に合致していることを確認する必要があります。

**インストール:**

*   **プレビルド版:** NVIDIA GPUを搭載したWindowsユーザー向けに、最も簡単に利用できるプレビルド版が提供されています。
*   **手動インストール:** 技術的なスキルが必要であり、初心者向けではありません。

    1.  **環境設定:** Python (3.10推奨), pip, git, ffmpeg, Visual Studio 2022 Runtimes (Windows) が必要です。macOSの場合は、Python 3.10およびtkinterパッケージのインストールが必要になります。
    2.  **リポジトリのクローン:** `git clone https://github.com/hacksider/Deep-Live-Cam.git`
    3.  **モデルのダウンロード:** `GFPGANv1.4.pth`と`inswapper_128_fp16.onnx`を`models`フォルダに配置します。
    4.  **依存関係のインストール:** `venv`を使用して仮想環境を作成し、`pip install -r requirements.txt`を実行します。 macOSでは、Python 3.10で仮想環境を作成し、`pip install -r requirements.txt`を実行します。
    5.  **GPUアクセラレーション (オプション):** CUDA (Nvidia), CoreML (Apple Silicon), DirectML (Windows), OpenVINO (Intel)などのExecution Providerに対応しています。それぞれの環境に合わせて、必要なライブラリをインストールし、コマンドラインオプションを指定して実行します。

**使用方法:**

*   **画像/ビデオモード:** `python run.py`を実行し、ソース画像とターゲット画像/ビデオを選択し、「Start」をクリックします。出力は、ターゲットビデオの名前のディレクトリに保存されます。
*   **Webcamモード:** `python run.py`を実行し、ソース画像を選択し、「Live」をクリックします。プレビューが表示されるのを待ち、OBSなどの画面キャプチャツールを使用してストリーミングします。顔を変更するには、新しいソース画像を選択します。

**TipsとTrics:**

*   Perfect Deepfake Imageの作成方法
*   Video Call with DeepLiveCam (OBSとの連携)
*   Have a Special Guest! (顔マッピング)
*   Watch Deepfake Movies in Realtime
*   Better Quality without Sacrificing Speed
*   Instant Vtuber! (バーチャルYouTuberの作成)

**コマンドライン引数:**

CLIモードでの実行も可能で、引数 `-s` を指定するとCLIモードで実行できます。

**Press(報道):**

Ars Technica, Dataconomy, NewsBytes, Creative Bloq, PetaPixel, TechEBlog, Telegrafi, Decrypt, Digital Music News, DIYPhotography, SomeOrdinaryGamers, IShowSpeedなど、多くのメディアやインフルエンサーに取り上げられています。

**Credits:**

ffmpeg, deepinsight (insightface), havok2-htwo, GosuDRM, pereiraroland26, vic4key, kier007, qitianai, s0md3v (ベースコードの作者), およびプロジェクトに貢献したすべての開発者。

**貢献:**

プロジェクトへの貢献を歓迎しています。

**スター履歴:**

プロジェクトのスター数は増加傾向にあります。


---

# drawdb-io/drawdb

**stars**: 29082

[View Repository on Github](https://github.com/drawdb-io/drawdb)

Free, simple, and intuitive online database diagram editor and SQL generator.

## README要約
## drawdb-io/drawdb リポジトリ概要

このリポジトリは、無料でシンプルで直感的なオンラインデータベース図エディタ「drawDB」のソースコードです。drawDBは、データベースのスキーマを視覚的に編集し、SQLスクリプトを生成するためのツールです。

**主な特徴:**

*   **無料**
*   **アカウント登録不要**
*   **直感的なインターフェース**：数回のクリックでデータベース図を作成可能
*   **SQLスクリプトの生成**：作成した図からSQLスクリプトをエクスポート
*   **カスタマイズ可能**：エディタの見た目を調整可能
*   **Webブラウザ上で動作**：どこからでもアクセス可能

**使用方法:**

*   [https://drawdb.app/](https://drawdb.app/) からdrawDBを直接利用できます。
*   **ローカル開発:**
    1.  リポジトリをクローン: `git clone https://github.com/drawdb-io/drawdb`
    2.  ディレクトリに移動: `cd drawdb`
    3.  依存関係をインストール: `npm install`
    4.  開発サーバー起動: `npm run dev`
*   **ビルド:**
    1.  リポジトリをクローン: `git clone https://github.com/drawdb-io/drawdb`
    2.  ディレクトリに移動: `cd drawdb`
    3.  依存関係をインストール: `npm install`
    4.  ビルド: `npm run build`
*   **Dockerビルド:**
    1.  Dockerイメージをビルド: `docker build -t drawdb .`
    2.  コンテナを実行: `docker run -p 3000:80 drawdb`

**補足:**

*   ファイル共有機能を使用する場合は、[drawdb-server](https://github.com/drawdb-io/drawdb-server) をセットアップし、`.env.sample` に従って環境変数を設定する必要があります。

**その他:**

*   リポジトリには、drawDBのロゴ画像、デモ画像、Discordへの参加バッジ、X (Twitter)へのリンクバッジが含まれています。
*   Warp (AI搭載ターミナル)からの特別な支援を受けています。
*   DiscordサーバーとX (Twitter)アカウントへのリンクが提供されています。


---

# Tencent/Hunyuan3D-2

**stars**: 8999

[View Repository on Github](https://github.com/Tencent/Hunyuan3D-2)

High-Resolution 3D Assets Generation with Large Scale Hunyuan3D Diffusion Models.

## README要約
## Tencent/Hunyuan3D-2 リポジトリ概要（日本語）

このリポジトリは、Tencentが開発した高解像度3Dアセット生成システム「Hunyuan3D 2.0」に関するものです。大規模なHunyuan3D拡散モデルを活用し、高品質なテクスチャ付き3Dアセットを生成することを目指しています。

**主な特徴:**

*   **高解像度3Dアセット生成:** テクスチャ付きの高品質な3Dモデルを生成できます。
*   **二段階パイプライン:** 形状生成モデル（Hunyuan3D-DiT）とテクスチャ合成モデル（Hunyuan3D-Paint）の二つの主要コンポーネントで構成されています。これにより、形状とテクスチャの生成を分離し、柔軟性を高めています。
*   **高性能:** 他のオープンソースおよびクローズドソースの3D生成手法と比較して、形状の詳細さ、条件への適合性、テクスチャの品質において優れた性能を示しています。
*   **Hunyuan3D-Studio:** 3Dアセットの作成を容易にする、使いやすいプラットフォーム。プロ・アマ問わず、効率的にメッシュを操作・アニメーション化できます。
*   **多様なモデル:** 様々なサイズのモデル（Hunyuan3D-2miniシリーズ、Hunyuan3D-2mvシリーズ、Hunyuan3D-2シリーズ）が提供されており、それぞれ異なる用途に適しています。また、ターボモデルや高速化モデルもリリースされています。

**主な内容:**

*   **README:** リポジトリの説明、使い方、モデルの紹介などが記載されています。日本語版も用意されています。
*   **モデル:** Hunyuan3D-DiT（形状生成）およびHunyuan3D-Paint（テクスチャ生成）の事前学習済みモデルが提供されています。
*   **サンプルコード:** diffusersライクなAPIを用いたモデルの使用例、Gradio App、APIサーバー、Blender Addonの使用方法が示されています。
*   **ドキュメント:** モデルのアーキテクチャ、性能評価結果、オープンソース化の計画、引用方法などが記載されています。
*   **コミュニティリソース:** コミュニティメンバーによる拡張機能へのリンクが掲載されています。
*   **ニュース:** モデルのリリース情報、Blenderアドオンのリリース、コミュニティの貢献への感謝などがアナウンスされています。

**使い方:**

1.  **環境構築:** PyTorchを含む必要なライブラリをインストールします。
2.  **コードでの利用:** 提供されているPythonコードを使用して、形状生成やテクスチャ生成を行います。
3.  **Gradio App:** Gradio Appをローカルで起動して、インタラクティブにモデルを利用できます。
4.  **APIサーバー:** ローカルにAPIサーバーを立てて、Webリクエストで3D生成などの処理を呼び出すことができます。
5.  **Blender Addon:** Blender AddonをBlenderにインストールし、APIサーバーと連携してBlender内でHunyuan3D 2.0を利用できます。
6.  **Hunyuan3D Studio (公式ウェブサイト):** 公式サイトから直接モデルを利用することも可能です。

**モデルの種類:**

提供されているモデルは、サイズや目的に応じていくつか種類があります。主なものとして、Hunyuan3D-2miniシリーズ（軽量モデル）、Hunyuan3D-2mvシリーズ（マルチビューモデル）、Hunyuan3D-2シリーズ（フルモデル）があります。また、高速化されたターボモデルや、テクスチャ生成に特化したモデルも存在します。

**オープンソース化の計画:**

*   推論コード
*   モデルのチェックポイント
*   技術レポート
*   ComfyUI対応
*   TensorRTバージョン（計画中）
*   ファインチューニング（計画中）

**その他:**

このリポジトリは、3Dアセット生成技術の研究開発に貢献することを目的としています。技術レポート、APIサーバー、Blenderアドオン、コミュニティリソースの紹介など、活発な開発と情報公開が行われています。


---

# langgenius/dify

**stars**: 94858

[View Repository on Github](https://github.com/langgenius/dify)

Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.

## README要約
## langgenius/dify リポジトリ要約

Dify は、オープンソースの LLM (Large Language Model) アプリケーション開発プラットフォームです。直感的なインターフェースを備え、AI ワークフロー、RAG (Retrieval-Augmented Generation) パイプライン、エージェント機能、モデル管理、オブザーバビリティ機能を組み合わせ、プロトタイプから本番環境への迅速な移行を可能にします。

**主な特徴:**

*   **AI ワークフロー:** 視覚的なキャンバス上で強力な AI ワークフローを構築・テストできます。
*   **幅広いモデルサポート:** GPT、Mistral、Llama3、OpenAI API 互換モデルなど、多数のインファレンスプロバイダーや自己ホスト型ソリューションからの数百種類の LLM をシームレスに統合します。
*   **プロンプト IDE:** プロンプトの作成、モデルのパフォーマンス比較、チャットベースのアプリケーションへのテキスト読み上げなどの機能追加を直感的に行えます。
*   **RAG パイプライン:** ドキュメントの取り込みから検索まで、包括的な RAG 機能を提供し、PDF、PPT などの一般的なドキュメント形式からのテキスト抽出をサポートします。
*   **エージェント機能:** LLM Function Calling または ReAct に基づいてエージェントを定義し、事前構築済みまたはカスタムツールを追加できます。Google 検索、DALL·E、Stable Diffusion、WolframAlpha など、50 以上の組み込みツールを提供します。
*   **LLMOps:** アプリケーションログとパフォーマンスを長期的に監視・分析できます。本番データとアノテーションに基づいて、プロンプト、データセット、モデルを継続的に改善できます。
*   **Backend-as-a-Service:** すべての機能に API が付属しており、独自のビジネスロジックに簡単に統合できます。

**提供形態:**

*   **Dify Cloud:** セットアップ不要で利用できるクラウドサービス。サンドボックスプランでは、200 回の無料の GPT-4 呼び出しが含まれます。
*   **Self-hosting (Dify Community Edition):**  Docker Compose を使用した簡単なセットアップ方法が提供されています。また、[ドキュメント](https://docs.dify.ai) にて詳細な情報が公開されています。
*   **Dify for enterprise / organizations:** 企業向け機能も提供されており、[チャットボット](https://udify.app/chat/22L1zSxg6yW1cWQg) または [メール](mailto:business@dify.ai?subject=[GitHub]Business%20License%20Inquiry) で問い合わせが可能です。AWS を使用するスタートアップや中小企業向けには、AWS Marketplace で [Dify Premium](https://aws.amazon.com/marketplace/pp/prodview-t22mebxzwjhu6) が提供されており、ワンクリックで独自の AWS VPC にデプロイできます。

**インストールとセットアップ:**

Dify をインストールする前に、CPU (2 コア以上) と RAM (4 GiB 以上) が必要です。Docker と Docker Compose がインストールされていることを確認し、`docker/docker-compose.yaml` にある docker-compose を使用して簡単に開始できます。

```bash
cd dify
cd docker
cp .env.example .env
docker compose up -d
```

その後、ブラウザで `http://localhost/install` にアクセスして初期化プロセスを開始します。詳細な設定やカスタマイズについては、`.env.example` ファイルを参照し、`docker-compose.yaml` ファイルを必要に応じて編集してください。高可用性の設定には、コミュニティによって提供されている Helm Chart や YAML ファイルが利用できます。

**貢献とコミュニティ:**

*   [貢献ガイド](https://github.com/langgenius/dify/blob/main/CONTRIBUTING.md) を参照し、コードの貢献が可能です。
*   [多言語対応](https://github.com/langgenius/dify/blob/main/web/i18n/README.md) の翻訳も歓迎されています。
*   活発なコミュニティが存在し、GitHub Discussions、GitHub Issues、Discord、X(Twitter) で交流できます。

**ライセンス:**

[Dify Open Source License](LICENSE) に基づいており、実質的に Apache 2.0 にいくつかの制限を追加したものです。

**セキュリティ:**

セキュリティに関する問題は、GitHub ではなく `security@dify.ai` に報告してください。

