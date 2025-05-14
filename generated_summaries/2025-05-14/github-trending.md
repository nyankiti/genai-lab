
# xming521/WeClone

**stars**: 5643

[View Repository on Github](https://github.com/xming521/WeClone)

🚀从聊天记录创造数字分身的一站式解决方案💡 使用微信聊天记录微调大语言模型，让大模型有“那味儿”，并绑定到聊天机器人，实现自己的数字分身。 数字克隆/数字分身/数字永生/声音克隆/LLM/大语言模型/微信聊天机器人/LoRA

## README要約
## xming521/WeClone リポジトリ詳細要約

このリポジトリ「WeClone」は、チャット履歴からデジタルクローン（デジタル分身）を作成するための包括的なソリューションを提供するプロジェクトです。 微信（WeChat）のチャット履歴を使用して大規模言語モデル（LLM）を微調整し、チャットボットに統合することで、ユーザー自身のデジタルクローンを生成できます。

**主な機能:**

*   **エンドツーエンドソリューション:** チャットデータの抽出、前処理、モデルのトレーニング、およびデプロイメントを含む、デジタルクローンの作成プロセス全体をカバーしています。
*   **LLMの微調整:** 微信（WeChat）のチャット履歴を使用してLLMを微調整し、ユーザーのチャットスタイルや個性を反映させます。
*   **複数のプラットフォームへの対応:** 微信（WeChat）、QQ、Telegram、企業微信、飛書（Feishu）などのチャットボットに統合できます。
*   **プライバシー保護:** 個人情報のフィルタリング、ローカルでの微調整とデプロイメントにより、データの安全性を確保しています。

**特徴と説明:**

*   **コマンドラインツール:** バージョン0.2.1から、コマンドラインツールが追加されました。使用前に`uv pip install -e .`を実行する必要があります。
*   **データセットの構成変更:** バージョン0.2.0以降、データセットのディレクトリ構造とスクリプトパスが変更されています。`csv`フォルダは`dataset`フォルダ内に配置し、依存関係を再インストールする必要があります。
*   **開発の活発さ:** プロジェクトは活発に開発されており、現在の効果は最終的なものではない場合があります。
*   **影響要因:** LLMの微調整効果は、モデルのサイズ、チャットデータの量と質に大きく依存します。
*   **ハードウェア要件:** デフォルトではQwen2.5-7B-Instructモデルを使用し、LoRA（Low-Rank Adaptation）手法によるSFT（Supervised Fine-Tuning）段階での微調整には、約16GBのVRAMが必要です。Llama Factoryのサポートする他のモデルや手法も利用できます。
*   **環境構築:** CUDA、Python環境、依存関係のインストール、設定ファイルの作成と編集など、詳細な手順が提供されています。
*   **FlashAttentionの利用:** FlashAttentionをインストールすることで、トレーニングと推論を高速化できます。
*   **データ準備:** PyWxDumpを使用して微信（WeChat）のチャット履歴を抽出します。
*   **データ前処理:** 携帯電話番号、ID番号、メールアドレス、ウェブサイトなどの個人情報の削除と、ブロックワードの追加によるフィルタリングを行います。`weclone-cli make-dataset`コマンドでデータ処理を実行できます。
*   **モデルダウンロード:** Qwen2.5-7B-Instructモデルをダウンロードするためのコマンドが提供されています。
*   **モデル微調整:** `settings.jsonc`ファイルを編集して、モデルパス、テンプレート、トレーニングパラメータ（`per_device_train_batch_size`、`gradient_accumulation_steps`、`num_train_epochs`、`lora_rank`、`lora_dropout`など）を設定し、`weclone-cli train-sft`コマンドで単一GPUで微調整を実行できます。多GPU環境では、`deepspeed`を使用してトレーニングできます。
*   **推論:** ブラウザデモによる簡単な推論、APIを使用した推論、および一般的なチャット問題のテストが可能です。
*   **微調整の効果:** Qwen2.5-14B-Instructモデルを使用して、約3万件の処理済みデータセットで微調整を行った結果のスクリーンショットが提供されています。
*   **チャットボットへのデプロイ:** AstrBotなどのチャットボットフレームワークを使用して、デジタルクローンをチャットボットにデプロイするための手順が説明されています。APIサービスを開始し、AstrBotでOpenAIサービスプロバイダーを設定することで連携できます。

**ロードマップ:**

*   より豊富なコンテキスト（会話履歴、チャット相手情報、時間など）の追加。
*   メモリ機能のサポート。
*   マルチモーダル対応。
*   データ拡張。
*   GUIのサポート。

**問題解決:**

*   LLaMA-Factoryに関するFAQや、DeepWikiでの質問が可能です。

**貢献:**

*   IssueやPull Requestによる貢献を歓迎しています。
*   開発依存関係をインストールするには`uv pip install --group dev -e .`を実行します。
*   `pytest`、`pyright`、`ruff`を使用したテスト、型チェック、コードフォーマットが使用されています。

**免責事項:**

*   プロジェクトは学習と交流のみを目的とし、違法行為への利用を禁止しています。
*   データの使用期間は24時間以内とし、それ以降の使用は自己責任となります。
*   個人情報の窃盗やプライバシー侵害を禁止しています。
*   免責事項は変更される可能性があります。

**Star History:**

*   プロジェクトへの貢献や今後の開発への関心を示すために、Starを付けることが推奨されています。

**プロジェクトのスローガン:** クローンを作って、魂の香りを残しましょう。


---

# harry0703/MoneyPrinterTurbo

**stars**: 32241

[View Repository on Github](https://github.com/harry0703/MoneyPrinterTurbo)

利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.

## README要約
MoneyPrinterTurbo は、AI 大規模言語モデル (LLM) を利用して、高品質の短編動画をワンクリックで生成する Python プロジェクトです。

**主な機能:**

*   **自動化された動画生成:** 提供されたテーマまたはキーワードに基づいて、動画スクリプト、素材、字幕、BGM を自動的に生成し、高画質の短編動画を合成します。
*   **WebUI と API インターフェース:** Web インターフェースと API インターフェースの両方をサポートしています。
*   **多様な動画フォーマット:** 縦型 (9:16, 1080x1920) および横型 (16:9, 1920x1080) の動画サイズに対応しています。
*   **バッチ処理:** 複数の動画を一度に生成し、最適なものを選ぶことができます。
*   **柔軟な設定:** ビデオクリップの長さ、日本語と英語のスクリプト、多言語音声合成、字幕のカスタマイズ (フォント、位置、色、サイズ、アウトライン)、BGM の設定（ランダムまたは指定、音量調節）をサポートしています。
*   **高品質な素材:** 高品質で著作権フリーの動画素材を提供し、ローカル素材の使用も可能です。
*   **LLM サポート:** OpenAI、Moonshot、Azure、gpt4free、one-api、通義千問、Google Gemini、Ollama、DeepSeek、文心一言、Pollinations など、さまざまな大規模言語モデル (LLM) に対応しています。中国ユーザー向けには、DeepSeek または Moonshot の使用が推奨されています。
*   **字幕生成:** edge または whisper の2つの字幕生成方法をサポートしています。

**今後の計画:**

*   GPT-SoVITS 音声合成のサポート
*   より自然で感情豊かな音声合成の最適化
*   トランジション効果の追加
*   動画素材とスクリプトのマッチングの改善
*   動画の長さオプションの追加
*   音声合成プロバイダーの拡張
*   YouTube への自動アップロード

**動画デモ:**

*   **縦型動画:**
    *   「人生の楽しみ方を増やす方法」
    *   「お金の役割」
    *   「人生の意味」
*   **横型動画:**
    *   「人生の意味」
    *   「運動をする理由」

**技術的な要件:**

*   CPU: 4 コア以上を推奨
*   メモリ: 4GB 以上を推奨
*   GPU: 必須ではありません
*   OS: Windows 10 以降または macOS 11.0 以降

**インストールと使用方法:**

1.  **Google Colab:** Google Colab で直接実行できます。
2.  **Windows 一括起動パッケージ:** 事前に環境設定を行うことなく、手軽に利用できる一括起動パッケージが提供されています。
3.  **Docker:** Docker を使用したデプロイ方法が提供されています。
4.  **手動インストール:**

    *   コードのクローン
    *   仮想環境の作成とライブラリのインストール (conda が推奨)
    *   ImageMagick のインストール (Windows、macOS、Ubuntu、CentOS 向けの手順あり)
    *   WebUI の起動 (Windows、macOS/Linux 向けの手順あり)
    *   API サービスの起動

**音声合成:**

[音声リスト](./docs/voice-list.txt) を参照して、利用可能な音声を確認できます。 Azure の音声合成（API KEY が必要）も利用可能です。

**字幕生成:**

`config.toml` ファイルで `subtitle_provider` を設定して、字幕生成方法を切り替えることができます。 edge モードを推奨し、品質が悪い場合は whisper モードに切り替えます。 whisper モードでは、Hugging Face からモデルファイルをダウンロードする必要があります。

**背景音楽:**

動画の背景音楽は、`resource/songs` ディレクトリに保存されています。

**字幕フォント:**

動画字幕に使用するフォントは、`resource/fonts` ディレクトリに配置できます。

**トラブルシューティング:**

*   `RuntimeError: No ffmpeg exe could be found`: ffmpeg が見つからない場合、ffmpeg をインストールし、`ffmpeg_path` を設定します。
*   `ImageMagick` のセキュリティポリシー関連のエラー: `policy.xml` ファイルを編集して、権限を変更します。
*   `OSError: [Errno 24] Too many open files`: システムのファイルオープン数の制限を調整します。
*   `Whisper` モデルのダウンロードエラー: モデルを手動でダウンロードして、適切なディレクトリに配置します。

**フィードバック:**

[issue](https://github.com/harry0703/MoneyPrinterTurbo/issues) または [pull request](https://github.com/harry0703/MoneyPrinterTurbo/pulls) でフィードバックを送信できます。

**ライセンス:**

[`LICENSE`](LICENSE) ファイルを参照してください。

**スター履歴:**

[Star History Chart](https://api.star-history.com/svg?repos=harry0703/MoneyPrinterTurbo&type=Date) でスターの履歴を確認できます。


---

# alibaba/spring-ai-alibaba

**stars**: 2906

[View Repository on Github](https://github.com/alibaba/spring-ai-alibaba)

Agentic AI Framework for Java Developers

## README要約
## Spring AI Alibaba の詳細な要約

Spring AI Alibaba は、Java 開発者向けの AI アプリケーションフレームワークです。Spring AI をベースに構築されており、Alibaba Cloud の QWen LLM サービスやクラウドネイティブインフラストラクチャとのシームレスな統合を提供します。

**主な特徴:**

*   **Alibaba Cloud サービスとの統合:** Alibaba Cloud QWen モデルおよび Dashscope モデルサービスをサポートします。
*   **高レベルの AI エージェント:** `ChatClient` を介した、使いやすい AI エージェントの抽象化を提供します。
*   **多岐にわたるモデルタイプ:** チャット、テキスト to 画像、音声文字変換、テキスト to 音声など、様々なモデルタイプをサポートします。
*   **柔軟な API:** 同期およびストリーム API オプションに対応しています。
*   **POJO マッピング:** AI モデルの出力を POJO (Plain Old Java Object) にマッピングできます。
*   **ベクターストアのポータビリティ:** 様々なベクターストアプロバイダ間で API の移植性を提供します。
*   **関数呼び出し:** 関数の呼び出しをサポートしています。
*   **Spring Boot の自動設定とスターター:** Spring Boot の自動設定とスターターを提供します。
*   **RAG (Retrieval-Augmented Generation) サポート:** DocumentReader、Splitter、Embedding、VectorStore、Retriever をサポートし、RAG を容易に実装できます。
*   **チャットメモリ:** `ChatMemory` を使用した会話のサポート。

**始めるには:**

1.  Spring Boot 3.x (JDK 17 以降) を使用していることを確認します。
2.  プロジェクトに `spring-ai-alibaba-starter` の依存関係を追加します。

    ```xml
    <dependency>
        <groupId>com.alibaba.cloud.ai</groupId>
        <artifactId>spring-ai-alibaba-starter</artifactId>
        <version>1.0.0-M6.1</version>
    </dependency>
    ```

3.  Spring AI 関連のパッケージがまだ Central Repository に公開されていないため、以下の Maven リポジトリをプロジェクトに追加する必要があります。

    ```xml
    <repositories>
         <repository>
              <id>spring-milestones</id>
              <name>Spring Milestones</name>
              <url>https://repo.spring.io/milestone</url>
              <snapshots>
                   <enabled>false</enabled>
              </snapshots>
         </repository>
    </repositories>
    ```

    また、ローカルの Maven settings.xml で `<mirrorOf>` タグにワイルドカード `*` が設定されている場合は、上記の例のように修正する必要があります。

4.  `ChatClient` を注入して使用します。

    ```java
    @RestController
    public class ChatController {

         private final ChatClient chatClient;

         public ChatController(ChatClient.Builder builder) {
          this.chatClient = builder.build();
         }

         @GetMapping("/chat")
         public String chat(String input) {
          return this.chatClient.prompt()
            .user(input)
            .call()
            .content();
         }
    }
    ```

**今後のロードマップ:**

Spring AI Alibaba は、開発、評価、デプロイ、可観測性といった AI ネイティブ Java アプリケーション構築の複雑さを軽減することを目指しており、以下の機能のサポートを計画しています。

*   プロンプトテンプレート管理
*   イベント駆動型 AI アプリケーション
*   より多くのベクタデータベースのサポート
*   関数デプロイ
*   可観測性
*   AI プロキシサポート（プロンプトフィルタリング、レート制限、複数のモデルなど）
*   開発ツール

**コミュニティへの参加:**

*   [コントリビューションガイド](CONTRIBUTING.md) を参照して開発に参加できます。
*   質問や連絡は、Dingtalk Group (ID: 61290041831) または WeChat Group の QR コードから可能です。

**参考:**

*   [Spring AI](https://docs.spring.io/spring-ai/reference/index.html)
*   [Spring AI Alibaba](https://java2ai.com/docs/dev/overview/)
*   [Alibaba Cloud Dashscope Model Service Platform (阿里云百炼模型服务及应用开发平台)](https://help.aliyun.com/zh/model-studio/getting-started/what-is-model-studio/)

**謝辞:**

このプロジェクトは、Spring AI、Langgraph、Langgraph4J などのプロジェクトから着想を得ており、これらのプロジェクトの作成者へ感謝しています。


---

# mlabonne/llm-course

**stars**: 50681

[View Repository on Github](https://github.com/mlabonne/llm-course)

Course to get into Large Language Models (LLMs) with roadmaps and Colab notebooks.

## README要約
## mlabonne/llm-course リポジトリの日本語要約

このリポジトリは、大規模言語モデル（LLM）に関するコースを提供しており、ロードマップとColabノートブックを通じてLLMの世界への入り口を提供することを目的としています。コースは3つの主要な部分に分かれています。

1.  **🧩 LLM Fundamentals（LLMの基礎）**: 数学、Python、ニューラルネットワークに関する基礎知識をカバーするオプションのセクションです。
2.  **🧑‍🔬 The LLM Scientist（LLM科学者）**: 最新の技術を用いて、最高のLLMを構築することに焦点を当てています。
3.  **👷 The LLM Engineer（LLMエンジニア）**: LLMベースのアプリケーションを作成し、展開することに焦点を当てています。

著者は、このコースに基づいて、LLMアプリケーションを設計から展開まで網羅した実践的な書籍「LLM Engineer's Handbook」を執筆しています。コースは無料で提供されており、書籍の購入を通じて著者をサポートすることも可能です。

このコースのインタラクティブ版として、HuggingChatまたはChatGPT上で質問に答えたり、知識をテストしたりするLLMアシスタントも提供されています。

### ノートブック

このリポジトリには、LLMに関するノートブックと記事が多数含まれています。

**ツール**

| ノートブック | 説明 |
|---------------|-----------------------------------------------------------------------------------|
| LLM AutoEval | RunPodを使用してLLMを自動的に評価する |
| LazyMergekit | MergeKitを使用してモデルをワンクリックで簡単にマージする |
| LazyAxolotl | Axolotlを使用してモデルをワンクリックでクラウドで微調整する |
| AutoQuant | LLMをGGUF、GPTQ、EXL2、AWQ、HQQ形式でワンクリックで量子化する |
| Model Family Tree | マージされたモデルのファミリーツリーを可視化する |
| ZeroSpace | 無料のZeroGPUを使用してGradioチャットインターフェースを自動的に作成する |

**ファインチューニング**

| ノートブック | 説明 | 記事 |
|-----------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Fine-tune Llama 3.1 with Unsloth | Google Colabでの超効率的な教師ありファインチューニング | [記事](https://mlabonne.github.io/blog/posts/2024-07-29_Finetune_Llama31.html) |
| Fine-tune Llama 3 with ORPO | ORPOを使用した、より安価で高速な単一段階のファインチューニング | [記事](https://mlabonne.github.io/blog/posts/2024-04-19_Fine_tune_Llama_3_with_ORPO.html) |
| Fine-tune Mistral-7b with DPO | DPOで教師ありファインチューニングされたモデルのパフォーマンスを向上させる | [記事](https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html) |
| Fine-tune Mistral-7b with QLoRA | TRLを使用して、無料のGoogle ColabでMistral-7bを教師ありファインチューニングする |  |
| Fine-tune CodeLlama using Axolotl | ファインチューニングの最先端ツールに関するエンドツーエンドガイド | [記事](https://mlabonne.github.io/blog/posts/A_Beginners_Guide_to_LLM_Finetuning.html) |
| Fine-tune Llama 2 with QLoRA | Google ColabでLlama 2を教師ありファインチューニングするためのステップバイステップガイド | [記事](https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html) |

**量子化**

| ノートブック | 説明 | 記事 |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Introduction to Quantization | 8ビット量子化を使用した大規模言語モデルの最適化 | [記事](https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html) |
| 4-bit Quantization using GPTQ | 独自のオープンソースLLMを量子化して、コンシューマーハードウェアで実行する | [記事](https://mlabonne.github.io/blog/4bit_quantization/) |
| Quantization with GGUF and llama.cpp | llama.cppを使用してLlama 2モデルを量子化し、GGUFバージョンをHF Hubにアップロードする | [記事](https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html) |
| ExLlamaV2: The Fastest Library to Run LLMs | EXL2モデルを量子化して実行し、HF Hubにアップロードする | [記事](https://mlabonne.github.io/blog/posts/ExLlamaV2_The_Fastest_Library_to_Run%C2%A0LLMs.html) |

**その他**

| ノートブック | 説明 | 記事 |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Merge LLMs with MergeKit | 独自のモデルを簡単に作成（GPU不要） | [記事](https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit%20copy.html) |
| Create MoEs with MergeKit | 複数のエキスパートを単一のfrankenMoEに結合する | [記事](https://mlabonne.github.io/blog/posts/2024-03-28_Create_Mixture_of_Experts_with_MergeKit.html) |
| Uncensor any LLM with abliteration | 再トレーニングなしでのファインチューニング | [記事](https://mlabonne.github.io/blog/posts/2024-06-04_Uncensor_any_LLM_with_abliteration.html) |
| Improve ChatGPT with Knowledge Graphs | 知識グラフでChatGPTの回答を拡張する | [記事](https://mlabonne.github.io/blog/posts/Article_Improve_ChatGPT_with_Knowledge_Graphs.html) |
| Decoding Strategies in Large Language Models | ビームサーチから核サンプリングまでのテキスト生成ガイド | [記事](https://mlabonne.github.io/blog/posts/2022-06-07-Decoding_strategies.html) |

### 各セクションの概要

*   **LLM Fundamentals（LLMの基礎）**: 機械学習に必要な数学、Python、ニューラルネットワークの基礎知識をカバーします。
*   **The LLM Scientist（LLM科学者）**: LLMのアーキテクチャ、事前学習、事後学習データセット、教師ありファインチューニング、嗜好性調整、評価、量子化、および新しいトレンド（モデルのマージ、マルチモーダルモデル、解釈可能性、テスト時の計算スケーリング）に焦点を当てています。
*   **The LLM Engineer（LLMエンジニア）**: LLMの実行、ベクターストレージの構築、検索拡張生成（RAG）、高度なRAG、エージェント、推論の最適化、LLMの展開、およびLLMのセキュリティについて説明します。

このリポジトリは、LLMに関する広範な知識と実践的なスキルを習得するための包括的なリソースとなっています。


---

# microsoft/BitNet

**stars**: 19072

[View Repository on Github](https://github.com/microsoft/BitNet)

Official inference framework for 1-bit LLMs

## README要約
## Microsoft/BitNet リポジトリ概要（日本語）

このリポジトリは、Microsoftが開発した1ビットLLM（大規模言語モデル）のための公式推論フレームワーク「bitnet.cpp」を提供しています。特に、BitNet b1.58などの1.58ビットモデルの高速かつ無損失な推論をCPU上で実現することに焦点を当てています。NPUやGPUへの対応も今後予定されています。

**主な特徴:**

*   **高速化:** CPU上で1.37倍～6.17倍の高速化を達成（モデルやCPUの種類による）。ARM CPUでは1.37倍～5.07倍、x86 CPUでは2.37倍～6.17倍の速度向上。
*   **省電力化:** 55.4%～82.2%の省電力化を実現。
*   **100Bモデルの動作:** 単一のCPUで100BパラメータのBitNet b1.58モデルを実行可能で、人間が読書する速度と同等の推論速度（5～7トークン/秒）を実現。これにより、LLMをローカルデバイスで実行する可能性を大きく向上。
*   **最適化されたカーネル:** 高度なカーネル群を搭載し、1.58ビットモデルの効率的な推論をサポート。
*   **対応モデル:** 公式モデルとして「BitNet-b1.58-2B-4T」を提供。また、様々な1ビットLLM（Hugging Face で利用可能なモデル）での推論をサポート。
*   **ベースフレームワーク:**  [llama.cpp](https://github.com/ggerganov/llama.cpp) をベースとし、 [T-MAC](https://github.com/microsoft/T-MAC/) で開拓されたルックアップテーブル手法を活用。

**最新情報:**

*   2024年10月17日: bitnet.cpp 1.0 リリース。
*   2025年4月14日: [BitNet 公式 2B パラメータモデル（Hugging Face）](https://huggingface.co/microsoft/BitNet-b1.58-2B-4T)
*   2025年2月18日: [Bitnet.cpp: Efficient Edge Inference for Ternary LLMs](https://arxiv.org/abs/2502.11880)
*   2024年11月8日: [BitNet a4.8: 4-bit Activations for 1-bit LLMs](https://arxiv.org/abs/2411.04965)
*   2024年10月21日: [1-bit AI Infra: Part 1.1, Fast and Lossless BitNet b1.58 Inference on CPUs](https://arxiv.org/abs/2410.16144)

**利用方法:**

1.  **必要条件:** Python (>=3.9), CMake (>=3.22), Clang (>=18)
2.  **インストール:**
    *   リポジトリをクローン: `git clone --recursive https://github.com/microsoft/BitNet.git`
    *   依存関係をインストール (conda環境を推奨): `conda create -n bitnet-cpp python=3.9; conda activate bitnet-cpp; pip install -r requirements.txt`
    *   プロジェクトをビルド:  モデルのダウンロードと`setup_env.py`の実行。モデルのパスと量子化タイプを指定。
3.  **基本的な使用方法:** `run_inference.py` スクリプトで、モデルのパス、プロンプト、およびその他のオプションを指定して推論を実行。
4.  **ベンチマーク:** `e2e_benchmark.py` スクリプトを使用して推論性能を測定。モデルパス、生成トークン数、プロンプト長、スレッド数を指定。
5.  **FAQ:** ビルドエラーの修正、WindowsでのClangのビルドなどに関するFAQ。

**その他:**

*   Hugging Face 上で利用可能なモデルを積極的に活用して、1ビットLLMの推論能力を示しています。
*   1ビットLLMの研究開発を促進することを目指しています。


---

# comet-ml/opik

**stars**: 7902

[View Repository on Github](https://github.com/comet-ml/opik)

Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, automated evaluations, and production-ready dashboards.

## README要約
## Opik リポジトリ概要

このリポジトリは、LLM (大規模言語モデル) アプリケーションのデバッグ、評価、モニタリングを包括的なトレース、自動化された評価、および本番環境対応のダッシュボードを用いて行うためのオープンソースフレームワーク「Opik」を提供しています。 Comet によって開発されています。

Opik は、RAG (Retrieval-Augmented Generation) チャットボットからコードアシスタント、複雑なエージェントパイプラインまで、さまざまな LLM システムを効率的、高速、かつ低コストで構築するためのツールを提供します。

**主な機能:**

*   **開発:**
    *   **トレース:** LLM のすべての呼び出しとトレースを開発および本番環境で追跡できます。
    *   **アノテーション:** Python SDK または UI を使用して、フィードバックスコアを記録することで LLM 呼び出しに注釈を付けることができます。
    *   **Playground:** さまざまなプロンプトとモデルを試すことができます。
*   **評価:**
    *   **データセットと実験:** テストケースを保存し、実験を実行できます。
    *   **LLM を Judge とするメトリクス:** Opik の LLM を使用して、ハルシネーション検出、モデレーション、RAG評価 (回答の関連性、コンテキストの精度など) のような複雑な問題のメトリクスを評価できます。
    *   **CI/CD 統合:** PyTest 統合を使用して、CI/CD パイプラインの一部として評価を実行できます。
*   **本番環境モニタリング:**
    *   **本番環境トレースのログ:** 高容量のトレースをサポートし、本番環境アプリケーションのモニタリングを容易にします。
    *   **モニタリングダッシュボード:** フィードバックスコア、トレース数、トークンを時間経過とともに確認できます。
    *   **オンライン評価メトリクス:** LLM を Judge とするメトリクスを使用して、本番環境のすべてのトレースを簡単にスコアリングし、問題点を特定できます。

**主な特徴:**

*   **オープンソース:** 誰でも自由に利用、改変、配布できます。
*   **さまざまな LLM フレームワークとの統合:** OpenAI、LiteLLM、LangChain、Haystack、Anthropic、Bedrock、CrewAI、DeepSeek、DSPy、Gemini、Groq、Guardrails、Instructor、LangGraph、LlamaIndex、Ollama、Predibase、Pydantic AI、Ragas、watsonx など、幅広いフレームワークと統合できます。
*   **柔軟なデプロイオプション:** ローカルインストール、または Comet.com を利用したホスト型ソリューションを選択できます。
*   **活発なコミュニティ:** Slack コミュニティ、Twitter などで活発な情報交換が行われています。

**インストール:**

Opik は、ローカル環境へのインストールと、Comet.com を利用したホスト型ソリューションの両方に対応しています。

1.  **ローカルインストール:** `git clone` でリポジトリをクローンし、 `./opik.sh` (Linux/Mac) または `.\opik.ps1` (Windows) を実行して Opik プラットフォームを起動します。
2.  **Python SDK のインストール:** `pip install opik` で Python SDK をインストールし、`opik configure` コマンドで設定を行います。

**利用開始:**

1.  Python SDK をインストールします。
2.  `opik configure` コマンドを実行して、ローカルサーバーのアドレスまたは API キーを設定します。
3.  統合のいずれかを使用してトレースをログに記録するか、`@opik.track` デコレータを使用してカスタム関数を追跡します。

**貢献:**

Opik への貢献は、バグ報告、機能リクエスト、ドキュメントの改善、Opik に関する発信など、様々な方法で可能です。貢献方法については、CONTRIBUTING.md を参照してください。

**その他:**

*   リポジトリには、日本語版の README が用意されています。
*   Colab でのクイックスタートが利用可能です。
*   LLM as a Judge メトリクスを用いた評価機能を提供します。
*   GitHub スターを集めています。
*   バージョン1.7.0での重要な変更については、CHANGELOG.md を参照してください。

