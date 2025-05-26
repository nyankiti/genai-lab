
# groupultra/telegram-search

**stars**: 1453

[View Repository on Github](https://github.com/groupultra/telegram-search)

🔍 一个功能强大的 Telegram 聊天记录搜索客户端，支持聊天记录备份和向量搜索。

## README要約
## groupultra/telegram-search の概要（日本語）

このリポジトリは、Telegramのチャット履歴を検索するための強力なクライアントアプリケーション「Telegram Search」です。主な機能は以下の通りです。

*   **ベクトル検索とセマンティックマッチング**: OpenAIのセマンティックベクトル技術を利用して、Telegramメッセージをよりインテリジェントかつ正確に検索できます。
*   **チャット履歴のバックアップ**: チャット履歴のバックアップ機能もサポートしています。
*   **APIキー**: APIキーの取得方法については、[#111](https://github.com/GramSearch/telegram-search/issues/111)を参照してください。

### 特徴

*   **高性能**: ベクトル検索により、高度な検索能力を提供します。
*   **使いやすさ**: 直感的なインターフェースで、簡単に検索できます。

### 貢献

*   PR（プルリクエスト）を歓迎しています。

### 注意事項

*   プロジェクトは活発に開発されており、データベースの互換性に問題が発生する可能性があります。定期的にデータのバックアップを行うことを推奨します。

### 快速开始（クイックスタート）

1.  **リポジトリのクローン**:

    ```bash
    git clone https://github.com/GramSearch/telegram-search.git
    cd telegram-search
    ```
2.  **依存関係のインストール**:

    ```bash
    pnpm install
    ```
3.  **環境設定**:

    ```bash
    cp config/config.example.yaml config/config.yaml
    ```
4.  **データベースコンテナの起動**:

    ```bash
    docker compose up -d
    ```
5.  **データベーステーブル構造の同期**:

    ```bash
    pnpm run db:migrate
    ```
6.  **サービスの起動**:

    ```bash
    # バックエンドサービスの起動
    pnpm run dev:server

    # フロントエンドインターフェースの起動
    pnpm run dev:frontend
    ```

    ブラウザで `http://localhost:3333` にアクセスすると、検索インターフェースが表示されます。

### その他の情報

*   **スポンサー**:  スポンサーに関する情報が表示されています。
*   **アクティビティ**: スターの推移や、リポジトリの活動状況がグラフで表示されています。
*   **ライセンス**:  MITライセンスで公開されています。
*   **コミュニティ**: TelegramおよびDiscordのリンクが提供されています。


---

# comfyanonymous/ComfyUI

**stars**: 77865

[View Repository on Github](https://github.com/comfyanonymous/ComfyUI)

The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.

## README要約
## ComfyUI の詳細な要約

**ComfyUI** は、グラフ/ノードインターフェースを介して高度な Stable Diffusion パイプラインを設計および実行できる、強力かつモジュール性の高いビジュアルAIエンジンおよびアプリケーションです。Windows、Linux、macOS で利用できます。

**主な特徴:**

*   **ノードベースのインターフェース:** コードを書かずに、複雑なStable Diffusionワークフローを作成、実験できます。
*   **多様なモデルのサポート:** SD1.x、SD2.x、SDXL、SDXL Turbo、Stable Cascade、SD3/3.5、Pixart、AuraFlow、HunyuanDiT、Flux、Lumina Image 2.0、HiDream などの画像モデル、Stable Video Diffusion、Mochi、LTX-Video、Hunyuan Video、Nvidia Cosmos、Wan 2.1 などの動画モデル、Stable Audio、ACE Step などのオーディオモデル、Hunyuan3D 2.0 などの3Dモデルをサポート。
*   **高度な最適化:** ワークフローの変更された部分のみを再実行します。1GBのVRAMでも動作します。GPUがない場合でも、CPUモードで動作可能。
*   **モデル形式のサポート:** ckpt、safetensors、diffusersモデル/チェックポイント、スタンドアロンVAEおよびCLIPモデルを読み込み可能。
*   **拡張機能:** LoRA、Hypernetworks、埋め込み（Textual inversion）に対応。
*   **柔軟なワークフロー:** 生成された PNG、WebP、FLACファイルからシードを含む完全なワークフローを読み込み、JSONファイルとしてワークフローを保存/読み込み。
*   **高度な機能:** Hires fix、Area Composition、Inpainting、ControlNet、T2I-Adapter、Upscale Models、unCLIP Models、GLIGEN、Model Merging、LCM モデルと LoRA に対応。
*   **高速起動:** 素早く起動します。
*   **完全オフライン動作:** 常にローカルで動作し、インターネットへの依存はありません。
*   **設定ファイル:** モデル検索パスを設定するための `extra_model_paths.yaml.example` を提供。

**利用可能な入手方法:**

*   **デスクトップアプリケーション:** Windows および macOS で利用可能な、最も簡単な方法です。
*   **Windows ポータブルパッケージ:** 最新のコミットを利用でき、完全にポータブルです。
*   **手動インストール:** すべてのオペレーティングシステムおよび GPU タイプ (NVIDIA、AMD、Intel、Apple Silicon、Ascend) をサポート。

**主要なショートカット:**

*   `Ctrl + Enter`: 現在のグラフを生成キューに追加
*   `Ctrl + Shift + Enter`: 現在のグラフを最初の生成キューに追加
*   `Ctrl + Alt + Enter`: 現在の生成をキャンセル
*   `Ctrl + Z`/`Ctrl + Y`: 元に戻す/やり直し
*   `Ctrl + S`: ワークフローを保存
*   `Ctrl + O`: ワークフローをロード
*   `Ctrl + A`: すべてのノードを選択
*   `Alt + C`: 選択したノードの折りたたみ/展開
*   `Ctrl + M`: 選択したノードのミュート/ミュート解除
*   `Ctrl + B`: 選択したノードをバイパス
*   `Delete`/`Backspace`: 選択したノードを削除
*   `Ctrl + Backspace`: 現在のグラフを削除
*   `Space`: キャンバスの移動
*   `Ctrl`/`Shift + Click`: 選択にノードを追加
*   `Ctrl + C`/`Ctrl + V`: 選択したノードのコピーと貼り付け
*   `Ctrl + C`/`Ctrl + Shift + V`: 選択したノードのコピーと貼り付け（接続を維持）
*   `Shift + Drag`: 複数のノードを同時に移動
*   `Ctrl + D`: デフォルトグラフをロード
*   `Alt + +`: キャンバスのズームイン
*   `Alt + -`: キャンバスのズームアウト
*   `Ctrl + Shift + LMB + Vertical drag`: キャンバスのズームイン/ズームアウト
*   `P`: 選択したノードのピン/ピン解除
*   `Ctrl + G`: 選択したノードをグループ化
*   `Q`: キューの表示/非表示の切り替え
*   `H`: 履歴の表示/非表示の切り替え
*   `R`: グラフのリフレッシュ
*   `F`: メニューの表示/非表示の切り替え
*   `.`: 選択範囲にビューを合わせる
*   ダブルクリック: ノードクイック検索パレットを開く
*   `Shift + Drag`: 複数のワイヤーを同時に移動
*   `Ctrl + Alt + LMB`: クリックしたスロットからすべてのワイヤーを切断

**インストール:**

*   **Windows ポータブル:** リリースページからダウンロードし、7-Zip で解凍して実行します。モデルファイルは `ComfyUI\models\checkpoints` に配置。
*   **Jupyter Notebook:** paperspace、kaggle、colab などで利用可能。
*   **comfy-cli:** `pip install comfy-cli` 後に `comfy install` でインストール。
*   **手動インストール (Windows, Linux):**
    1.  リポジトリをクローン。
    2.  モデルファイルは `models/checkpoints`、VAE は `models/vae` に配置。
    3.  必要に応じて、AMD、Intel、NVIDIA、Apple Mac silicon、Ascend、Cambricon MLU のインストール手順に従って PyTorch をインストール。
    4.  依存関係をインストール: `pip install -r requirements.txt`
    5.  `python main.py` で実行。
*   **DirectML (AMD on Windows):** `pip install torch-directml` 後に `python main.py --directml` で実行。

**その他:**

*   高画質プレビューには、`--preview-method taesd` を使用。
*   TLS/SSL の設定方法も説明されています。

**サポートと開発:**

*   [Discord](https://comfy.org/discord): ヘルプやフィードバック用のチャンネルがあります。
*   [Matrix](https://app.element.io/#/room/%23comfyui_space%3Amatrix.org)
*   [Webサイト](https://www.comfy.org/)

**フロントエンド開発:**

*   フロントエンドは、別のリポジトリ [ComfyUI Frontend](https://github.com/Comfy-Org/ComfyUI_frontend) に移行。
*   フロントエンドに関する問題や機能要求は、こちらのリポジトリで報告。
*   最新のフロントエンドを使用するには、`--front-end-version Comfy-Org/ComfyUI_frontend@latest` を使用。
*   特定のバージョンを使用するには、`@latest` をバージョン番号に置き換える。
*   従来のフロントエンドを使用するには、`--front-end-version Comfy-Org/ComfyUI_legacy_frontend@latest` を使用。

**GPU 選びのヒント:**
[Which GPU should I buy for ComfyUI](https://github.com/comfyanonymous/ComfyUI/wiki/Which-GPU-should-I-buy-for-ComfyUI) で推奨 GPU を参照。


---

# hiyouga/LLaMA-Factory

**stars**: 50329

[View Repository on Github](https://github.com/hiyouga/LLaMA-Factory)

Unified Efficient Fine-Tuning of 100+ LLMs & VLMs (ACL 2024)

## README要約
## LLaMA-Factory 詳細要約 (日本語)

**リポジトリ概要:**

本リポジトリは、100以上のLLM (大規模言語モデル) およびVLM (大規模言語ビジョンモデル) の統一的な効率的ファインチューニングを目的としたツールです。ACL 2024で発表された論文に基づいています。

**主な特徴:**

*   **多様なモデルのサポート:** LLaMA、LLaVA、Mistral、Mixtral-MoE、Qwen、Qwen2-VL、DeepSeek、Yi、Gemma、ChatGLM、Phiなど、幅広いモデルに対応しています。
*   **統合されたトレーニング方法:** (継続的) 事前学習、(マルチモーダル) 指導付きファインチューニング、報酬モデリング、PPO、DPO、KTO、ORPOなど、様々なトレーニング手法をサポートしています。
*   **スケーラブルなリソース:** 16ビットフルチューニング、フリーズチューニング、LoRA、2/3/4/5/6/8ビットQLoRAによる効率的なチューニングを実現しています。AQLM/AWQ/GPTQ/LLM.int8/HQQ/EETQなどの手法に対応しています。
*   **高度なアルゴリズム:** GaLore、BAdam、APOLLO、Adam-mini、Muon、DoRA、LongLoRA、LLaMA Pro、Mixture-of-Depths、LoRA+、LoftQ、PiSSAなど、最先端のアルゴリズムをサポートしています。
*   **実用的なテクニック:** FlashAttention-2、Unsloth、Liger Kernel、RoPEスケーリング、NEFTune、rsLoRAなど、トレーニングを効率化する様々なテクニックを統合しています。
*   **幅広いタスク:** 多様なタスクに対応しており、マルチターンダイアログ、ツール利用、画像理解、視覚的グラウンディング、動画認識、音声理解などに対応しています。
*   **実験モニタリング:** LlamaBoard、TensorBoard、Wandb、MLflow、SwanLabなどのモニタリングツールをサポートしています。
*   **高速な推論:** OpenAI形式のAPI、Gradio UI、vLLM workerまたはSGLang workerを用いたCLIにより、高速な推論を実現しています。

**最新のサポート情報:**

*   Qwen3/Qwen2.5-VL/Gemma 3/InternLM 3/MiniCPM-o-2.6のDay 0サポート
*   Llama 3 / GLM-4 / Mistral Small / PaliGemma2 / Llama 4のDay 1サポート
*   Muonオプティマイザーのサポート
*   InternVL3モデルのファインチューニングサポート
*   GLM-Z1とKimi-VLモデルのファインチューニングサポート

**その他の注目点:**

*   [Amazon](https://aws.amazon.com/cn/blogs/machine-learning/how-apoidea-group-enhances-visual-information-extraction-from-banking-documents-with-multimodal-models-using-llama-factory-on-amazon-sagemaker-hyperpod/)、[NVIDIA](https://developer.nvidia.com/rtx/ai-toolkit)、[Aliyun](https://help.aliyun.com/zh/pai/use-cases/fine-tune-a-llama-3-model-with-llama-factory)など、様々な企業で利用されています。
*   Warp、Discord、GitCode、Colab、DSW、Hugging Face Spaces、ModelScope Studios、SageMakerといった多様なプラットフォームでの利用をサポートしています。
*   [Warp, the agentic terminal for developers](https://warp.dev/llama-factory)もサポートされています。
*   ゼロコードで100以上のLLMを簡単にファインチューニングできるCLIとWeb UIを提供しています。

**利用方法:**

*   **ドキュメント:** [https://llamafactory.readthedocs.io/en/latest/](https://llamafactory.readthedocs.io/en/latest/)
*   **Colab (無料):** [https://colab.research.google.com/drive/1eRTPn37ltBbYsISy9Aw2NuI2Aq5CQrD9?usp=sharing](https://colab.research.google.com/drive/1eRTPn37ltBbYsISy9Aw2NuI2Aq5CQrD9?usp=sharing)
*   **ローカル環境:** [Getting Started](#getting-started) を参照してください。
*   **PAI-DSW (無料トライアル):** [https://gallery.pai-ml.com/#/preview/deepLearning/nlp/llama_factory](https://gallery.pai-ml.com/#/preview/deepLearning/nlp/llama_factory)

**目次:**

*   [Features](#features)
*   [Blogs](#blogs)
*   [Changelog](#changelog)
*   [Supported Models](#supported-models)
*   [Supported Training Approaches](#supported-training-approaches)
*   [Provided Datasets](#provided-datasets)
*   [Requirement](#requirement)
*   [Getting Started](#getting-started)
    *   [Installation](#installation)
    *   [Data Preparation](#data-preparation)
    *   [Quickstart](#quickstart)
    *   [Fine-Tuning with LLaMA Board GUI](#fine-tuning-with-llama-board-gui-powered-by-gradio)
    *   [Build Docker](#build-docker)
    *   [Deploy with OpenAI-style API and vLLM](#deploy-with-openai-style-api-and-vllm)
    *   [Download from ModelScope Hub](#download-from-modelscope-hub)
    *   [Download from Modelers Hub](#download-from-modelers-hub)
    *   [Use W&B Logger](#use-wb-logger)
    *   [Use SwanLab Logger](#use-swanlab-logger)
*   [Projects using LLaMA Factory](#projects-using-llama-factory)
*   [License](#license)
*   [Citation](#citation)
*   [Acknowledgement](#acknowledgement)

**インストール:**

```bash
git clone --depth 1 https://github.com/hiyouga/LLaMA-Factory.git
cd LLaMA-Factory
pip install -e ".[torch,metrics]" --no-build-isolation
```

**Quickstart:**

LoRAファインチューニング、推論、マージを以下の3つのコマンドで実行できます。

```bash
llamafactory-cli train examples/train_lora/llama3_lora_sft.yaml
llamafactory-cli chat examples/inference/llama3_lora_sft.yaml
llamafactory-cli export examples/merge_lora/llama3_lora_sft.yaml
```

**ライセンス:**

Apache-2.0 License

**引用:**

[Citation](#citation) を参照してください。

**謝辞:**

PEFT、TRL、QLoRA、FastChat に感謝しています。


---

# shadps4-emu/shadPS4

**stars**: 22461

[View Repository on Github](https://github.com/shadps4-emu/shadPS4)

PlayStation 4 emulator for Windows, Linux and macOS written in C++

## README要約
## shadPS4: PlayStation 4 エミュレーターの概要 (日本語)

**shadPS4** は、Windows、Linux、macOS で動作する C++ で書かれた PlayStation 4 (PS4) エミュレーターです。現在開発初期段階にあり、一部のゲームが動作します。

**主な特徴:**

*   **対応プラットフォーム:** Windows, Linux, macOS
*   **プログラミング言語:** C++
*   **ライセンス:** GPL-2.0-or-later
*   **公式サイト/関連リンク:**
    *   [ウェブサイト](https://shadps4.net/)
    *   [Discord サーバー](https://discord.gg/bFJxfftGW6)
    *   [X (Twitter)](https://x.com/shadps4)
    *   [GitHub リリース](https://github.com/shadps4-emu/shadPS4/releases)
    *   [Kofi ページ](https://ko-fi.com/shadps4)

**現在のステータス:**

エミュレーターはまだ開発初期段階であり、完全な動作を期待することはできません。現時点では、**Bloodborne**, **Dark Souls Remastered**, **Red Dead Redemption** などのゲームが部分的に動作します。

**開発の目的:**

このプロジェクトは、個人的な興味から始まりました。開発者の限られた時間の中で、定期的なアップデートを提供することを目指しています。

**ビルド方法:**

*   **Windows:** [ビルド手順](https://github.com/shadps4-emu/shadPS4/blob/main/documents/building-windows.md) を参照。
*   **Linux:** [ビルド手順](https://github.com/shadps4-emu/shadPS4/blob/main/documents/building-linux.md) を参照。
*   **macOS:** [ビルド手順](https://github.com/shadps4-emu/shadPS4/blob/main/documents/building-macos.md) を参照。 (macOS 15.4 以降が必要、Intel Mac ではGPUの問題で不具合が多い)

**ゲームプレイのためにビルドする必要はありません。** リリース タブまたはアクション タブからエミュレーターをダウンロードできます。

**デバッグと問題報告:**

エミュレーターまたはゲームに関する問題のテスト、デバッグ、報告については、[デバッグ ドキュメント](https://github.com/shadps4-emu/shadPS4/blob/main/documents/Debugging/Debugging.md) を参照してください。

**キーボードとマウスの操作:**

| ボタン | 機能 |
|---|---|
| F10 | FPSカウンター |
| Ctrl+F10 | ビデオ デバッグ情報 |
| F11 | フルスクリーン |
| F12 | RenderDoc キャプチャのトリガー |

*   Xbox および DualShock コントローラーはデフォルトで動作します。
*   キーボードとマウスの入力は、設定メニューでカスタマイズできます。
    *   カスタム バインディングはゲームごとに保存されます。
    *   1つのバインディングに最大3つのキー、マウスボタン、マウスの移動をジョイスティック入力にマッピングなどに対応しています。

| コントローラーボタン | キーボード相当 |
|---|---|
| LEFT AXIS UP | W |
| LEFT AXIS DOWN | S |
| LEFT AXIS LEFT | A |
| LEFT AXIS RIGHT | D |
| RIGHT AXIS UP | I |
| RIGHT AXIS DOWN | K |
| RIGHT AXIS LEFT | J |
| RIGHT AXIS RIGHT | L |
| TRIANGLE | Numpad 8 or C |
| CIRCLE | Numpad 6 or B |
| CROSS | Numpad 2 or N |
| SQUARE | Numpad 4 or V |
| PAD UP | UP |
| PAD DOWN | DOWN |
| PAD LEFT | LEFT |
| PAD RIGHT | RIGHT |
| OPTIONS | RETURN |
| BACK BUTTON / TOUCH PAD | SPACE |
| L1 | Q |
| R1 | U |
| L2 | E |
| R2 | O |
| L3 | X |
| R3 | M |

**ファームウェアファイル:**

shadPS4 は、PlayStation 4 からダンプされた一部のファームウェアファイルを読み込むことができます。必要なモジュールは、`user/sys_modules` フォルダーに配置する必要があります。

| モジュール | モジュール | モジュール | モジュール |
|---|---|---|---|
| libSceCesCs.sprx | libSceFont.sprx | libSceFontFt.sprx | libSceFreeTypeOt.sprx |
| libSceJson.sprx | libSceJson2.sprx | libSceLibcInternal.sprx | libSceNgs2.sprx |
| libSceRtc.sprx | libSceUlt.sprx |  |  |

**注意:** 上記のモジュールは、ゲームを正しく実行するために必要であり、PlayStation 4 から抽出する必要があります。

**主要開発者:**

*   georgemoralis
*   psucien
*   viniciuslrangel
*   roamic
*   squidbus
*   frodo
*   Stephen Miller
*   kalaposfos13
*   ロゴは Xphalnos が作成

**貢献:**

コントリビュートする場合は、[CONTRIBUTING.md](https://github.com/shadps4-emu/shadPS4/blob/main/CONTRIBUTING.md) を確認し、プルリクエストを送信してください。

**翻訳:**

shadPS4 を他の言語に翻訳する場合は、[Crowdin](https://crowdin.com/project/shadps4-emulator) を使用してください。

**特別な感謝:**

*   Panda3DS (3DS エミュレーター)
*   fpPS4 (PS4 OS とライブラリの研究)
*   yuzu (シェーダーコンパイラーの設計)
*   felix86 (x86-64 → RISC-V Linux ユーザースペースエミュレーター)

