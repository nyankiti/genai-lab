
# microsoft/BitNet

**stars**: 16221

[View Repository on Github](https://github.com/microsoft/BitNet)

Official inference framework for 1-bit LLMs

## README要約
## microsoft/BitNet リポジトリ詳細要約

### 概要

このリポジトリは、1ビットLLM（大規模言語モデル）の高速かつ無損失な推論フレームワークである `bitnet.cpp` を公式に提供しています。CPUでの1.58ビットモデルの推論に特化しており、NPUやGPUへの対応も予定されています。ARM CPUでは最大5.07倍、x86 CPUでは最大6.17倍の速度向上を実現し、消費電力も大幅に削減しています。これにより、ローカルデバイスでのLLM実行の可能性が広がります。

### 特徴

*   **高速推論:** CPU上で最適化されたカーネルにより、1.58ビットLLMの高速な推論を実現。
*   **無損失推論:** 情報損失を最小限に抑え、正確な推論結果を保証。
*   **高効率:** ARM CPUで最大70.0%、x86 CPUで最大82.2%の消費電力削減。
*   **ローカルデバイスでの実行:** 100BのBitNet b1.58モデルをシングルCPUで実行可能。
*   **多様なモデル対応:** Hugging Faceで利用可能な様々な1ビットLLMをサポート。

### 最新情報

*   2025年4月14日: [BitNet Official 2B Parameter Model on Hugging Face](https://huggingface.co/microsoft/BitNet-b1.58-2B-4T)
*   2025年2月18日: [Bitnet.cpp: Efficient Edge Inference for Ternary LLMs](https://arxiv.org/abs/2502.11880)
*   2024年11月8日: [BitNet a4.8: 4-bit Activations for 1-bit LLMs](https://arxiv.org/abs/2411.04965)
*   2024年10月21日: [1-bit AI Infra: Part 1.1, Fast and Lossless BitNet b1.58 Inference on CPUs](https://arxiv.org/abs/2410.16144)
*   2024年10月17日: bitnet.cpp 1.0リリース

### 謝辞

このプロジェクトは [llama.cpp](https://github.com/ggerganov/llama.cpp) をベースにしており、[T-MAC](https://github.com/microsoft/T-MAC/) で導入されたLookup Table手法を基盤としています。

### サポートモデル

| モデル                                                                          | パラメータ | CPU  | I2\_S | TL1  | TL2  |
| :----------------------------------------------------------------------------- | :---------- | :--- | :---: | :---: | :---: |
| [BitNet-b1.58-2B-4T](https://huggingface.co/microsoft/BitNet-b1.58-2B-4T)        | 2.4B        | x86  |   ✔️   |   ❌   |   ✔️   |
|                                                                                |             | ARM  |   ✔️   |   ✔️   |   ❌   |
| [bitnet\_b1\_58-large](https://huggingface.co/1bitLLM/bitnet_b1_58-large)        | 0.7B        | x86  |   ✔️   |   ❌   |   ✔️   |
|                                                                                |             | ARM  |   ✔️   |   ✔️   |   ❌   |
| [bitnet\_b1\_58-3B](https://huggingface.co/1bitLLM/bitnet_b1_58-3B)            | 3.3B        | x86  |   ❌   |   ❌   |   ✔️   |
|                                                                                |             | ARM  |   ❌   |   ✔️   |   ❌   |
| [Llama3-8B-1.58-100B-tokens](https://huggingface.co/HF1BitLLM/Llama3-8B-1.58-100B-tokens) | 8.0B        | x86  |   ✔️   |   ❌   |   ✔️   |
|                                                                                |             | ARM  |   ✔️   |   ✔️   |   ❌   |
| [Falcon3 Family](https://huggingface.co/collections/tiiuae/falcon3-67605ae03578be86e4e87026) | 1B-10B      | x86  |   ✔️   |   ❌   |   ✔️   |
|                                                                                |             | ARM  |   ✔️   |   ✔️   |   ❌   |

### インストール

**必要条件:**

*   python>=3.9
*   cmake>=3.22
*   clang>=18
*   conda (推奨)

**手順:**

1.  リポジトリのクローン
2.  依存関係のインストール
3.  プロジェクトのビルド

### 使用方法

*   基本的な推論実行
*   ベンチマーク実行
*   ダミーモデルの生成とベンチマーク

### FAQ

*   **Q1:** `llama.cpp` のビルドエラー (std::chrono関連)
    *   **A:** [このコミット](https://github.com/tinglou/llama.cpp/commit/4e3db1e3d78cc1bcd22bcb3af54bd2a4628dd323)を参照して問題を解決してください。
*   **Q2:** Windowsでのclangを使ったconda環境でのビルド方法
    *   **A:**  事前にclangのインストールとVisual Studioツールの設定を確認してください。コマンドプロンプトまたはPowerShellで、適切なツールを初期化する必要があります。



---

# microsoft/generative-ai-for-beginners

**stars**: 78948

[View Repository on Github](https://github.com/microsoft/generative-ai-for-beginners)

21 Lessons, Get Started Building with Generative AI 🔗 https://microsoft.github.io/generative-ai-for-beginners/

## README要約
## Microsoft/generative-ai-for-beginners リポジトリ概要（日本語）

このリポジトリは、Microsoftが提供する「Generative AI for Beginners」コースの教材です。全21のレッスンを通して、生成AIアプリケーションの開発に必要な知識を網羅的に学べるように構成されています。

**主な内容:**

*   **21のレッスン:** 生成AIの概念を解説する「Learn」レッスンと、PythonまたはTypeScriptのコードサンプルを交えて実践的な知識を学ぶ「Build」レッスンがあります。
*   **コースの目的:** 生成AIアプリケーションの基礎を学び、実際に構築できるようになること。
*   **対象者:** 生成AIに興味のある初心者、またはPython/TypeScriptの基本的な知識がある人。
*   **使用する技術:** Azure OpenAI Service、GitHub Marketplace Model Catalog、OpenAI APIのいずれかを利用してコードを実行します。
*   **提供されるコードサンプル:** PythonとTypeScriptのコードサンプルが提供されており、Azure OpenAIとOpenAI APIに対応しています。
*   **.NET版のコース:** .NET開発者向けに「Generative AI for Beginners (.NET Edition)」も提供されています。
*   **追加学習:** 各レッスンには、さらに学習を深めるためのリソースへのリンクが含まれています。

**各レッスンの構成:**

*   トピック紹介の短いビデオ
*   READMEに記載された文章によるレッスン
*   Azure OpenAIおよびOpenAI APIをサポートするPythonとTypeScriptのコードサンプル
*   追加学習用のリソースへのリンク

**各レッスンの内容:**

| 番号 | レッスンのリンク                                                                        | 説明                                                                              | ビデオ                                                                      | 追加学習                                                                      |
| :-- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| 00  | [Course Setup](./00-course-setup/README.md?WT.mc_id=academic-105485-koreyst)          | 開発環境の設定方法                                                                | 動画は近日公開                                                                      | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 01  | [Introduction to Generative AI and LLMs](./01-introduction-to-genai/README.md)       | 生成AIとLLMの基礎                                                                | [ビデオ](https://aka.ms/gen-ai-lesson-1-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 02  | [Exploring and comparing different LLMs](./02-exploring-and-comparing-different-llms/) | 様々なLLMの比較と、ユースケースに合ったモデルの選び方                                | [ビデオ](https://aka.ms/gen-ai-lesson2-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 03  | [Using Generative AI Responsibly](./03-using-generative-ai-responsibly/)               | 責任ある生成AIアプリケーションの開発方法                                                   | [ビデオ](https://aka.ms/gen-ai-lesson3-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 04  | [Understanding Prompt Engineering Fundamentals](./04-prompt-engineering-fundamentals/) | プロンプトエンジニアリングの基礎と実践的なベストプラクティス                                       | [ビデオ](https://aka.ms/gen-ai-lesson4-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 05  | [Creating Advanced Prompts](./05-advanced-prompts/)                                     | プロンプトの効果を高めるための高度なプロンプトエンジニアリング技術                                 | [ビデオ](https://aka.ms/gen-ai-lesson5-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 06  | [Building Text Generation Applications](./06-text-generation-apps/)                       | Azure OpenAI / OpenAI APIを使用したテキスト生成アプリケーションの構築                                 | [ビデオ](https://aka.ms/gen-ai-lesson6-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 07  | [Building Chat Applications](./07-building-chat-applications/)                           | チャットアプリケーションを効率的に構築し統合するためのテクニック                                | [ビデオ](https://aka.ms/gen-ai-lessons7-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 08  | [Building Search Apps Vector Databases](./08-building-search-applications/)               | 埋め込みを使用してデータを検索する検索アプリケーション                                           | [ビデオ](https://aka.ms/gen-ai-lesson8-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 09  | [Building Image Generation Applications](./09-building-image-applications/)               | 画像生成アプリケーションの構築                                                                    | [ビデオ](https://aka.ms/gen-ai-lesson9-gh?WT.mc_id=academic-105485-koreyst)  | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 10  | [Building Low Code AI Applications](./10-building-low-code-ai-applications/)              | ローコードツールを使用した生成AIアプリケーションの構築                                                | [ビデオ](https://aka.ms/gen-ai-lesson10-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 11  | [Integrating External Applications with Function Calling](./11-integrating-with-function-calling/) | Function Callingとそのアプリケーションでのユースケース                                              | [ビデオ](https://aka.ms/gen-ai-lesson11-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 12  | [Designing UX for AI Applications](./12-designing-ux-for-ai-applications/)               | 生成AIアプリケーション開発におけるUXデザインの原則の適用方法                                               | [ビデオ](https://aka.ms/gen-ai-lesson12-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 13  | [Securing Your Generative AI Applications](./13-securing-ai-applications/)               | AIシステムへの脅威とリスク、およびそれらを保護するための方法                                                | [ビデオ](https://aka.ms/gen-ai-lesson13-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 14  | [The Generative AI Application Lifecycle](./14-the-generative-ai-application-lifecycle/)    | LLMのライフサイクルとLLMOpsを管理するためのツールとメトリクス                                                | [ビデオ](https://aka.ms/gen-ai-lesson14-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 15  | [Retrieval Augmented Generation (RAG) and Vector Databases](./15-rag-and-vector-databases/) | RAGフレームワークを使用して、ベクトルデータベースから埋め込みを取得するアプリケーション                                | [ビデオ](https://aka.ms/gen-ai-lesson15-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 16  | [Open Source Models and Hugging Face](./16-open-source-models/)                                 | Hugging Faceで利用可能なオープンソースモデルを使用したアプリケーション                                    | [ビデオ](https://aka.ms/gen-ai-lesson16-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 17  | [AI Agents](./17-ai-agents/)                                                                       | AIエージェントフレームワークを使用したアプリケーション                                                      | [ビデオ](https://aka.ms/gen-ai-lesson17-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 18  | [Fine-Tuning LLMs](./18-fine-tuning/)                                                              | LLMのファインチューニングの概要、理由、方法                                                                    | [ビデオ](https://aka.ms/gen-ai-lesson18-gh?WT.mc_id=academic-105485-koreyst) | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 19  | [Building with SLMs](./19-slm/)                                                               | Small Language Models(SLM)で構築する利点                                                                    | 動画は近日公開 | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 20  | [Building with Mistral Models](./20-mistral/)                                                               | Mistral Familyモデルの機能と違い                                                                    | 動画は近日公開 | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |
| 21  | [Building with Meta Models](./21-meta/)                                                               | Meta Familyモデルの機能と違い                                                                    | 動画は近日公開 | [詳細はこちら](https://aka.ms/genai-collection?WT.mc_id=academic-105485-koreyst) |

**その他:**

*   コースに関する質問や提案は、GitHubのIssueやPull Requestで受け付けています。
*   コースの進捗状況や他の学習者との交流は、Discordサーバーで可能です。
*   Microsoft for Startups Founders Hubに登録すると、OpenAIクレジットやAzureクレジットの特典が受けられます。
*   他にも、Web Dev、AI、ML、Data Science、IoT、Cybersecurityなどの初心者向けコースが提供されています。

---

# CoatiSoftware/Sourcetrail

**stars**: 15850

[View Repository on Github](https://github.com/CoatiSoftware/Sourcetrail)

Sourcetrail - free and open-source interactive source explorer

## README要約
## Sourcetrail の概要

Sourcetrail は、無料かつオープンソースの、対話型のソースコードエクスプローラーです。Windows、macOS、Linux で動作し、C、C++、Java、Python をサポートしています。未知のソースコードの理解を助け、生産性を向上させることを目的としています。

**重要なお知らせ**: このプロジェクトは、2021年末に元の開発者とメンテナによってアーカイブされました。詳細については、[ブログ](https://web.archive.org/web/20211119200517/https://www.sourcetrail.com/blog/)を参照してください。

**主な特徴**:

*   無料
*   オフラインで動作
*   クロスプラットフォーム対応 (Windows, macOS, Linux)
*   C、C++、Java、Python をサポート
*   カスタム言語拡張を開発するための SDK ([SourcetrailDB](https://github.com/CoatiSoftware/SourcetrailDB)) を提供

**ダウンロードとインストール**:

*   [リリース](https://github.com/CoatiSoftware/Sourcetrail/releases) ページから、使用している OS に合ったビルドをダウンロードしてインストールします。
*   [Chocolatey package](https://chocolatey.org/packages/sourcetrail) を使用して `choco install sourcetrail` でインストールすることも可能です。
*   インストール後、[クイックスタートガイド](DOCUMENTATION.md#getting-started)に従って Sourcetrail の使い方を学ぶことができます。

**利用方法**:

1.  Sourcetrail をダウンロードしてインストールします。
2.  [クイックスタートガイド](DOCUMENTATION.md#getting-started)で使い方を学びます。

**問題の報告と貢献**:

*   機能リクエストやバグ報告は、[issue tracker](https://github.com/CoatiSoftware/Sourcetrail/issues) で行うことができます。
*   issue をサポートする場合は、コメントに "+1" を投稿するか、issue ID を添えて support@sourcetrail.com にメールを送信します。
*   貢献については、[CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。[good first issue](https://github.com/CoatiSoftware/Sourcetrail/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) とラベル付けされた issue は、初心者向けのタスクです。
*   Sourcetrail ソフトウェア開発の詳細については、[wiki](https://github.com/CoatiSoftware/Sourcetrail/wiki)を参照してください。

**ビルド方法**:

Sourcetrail をビルドするには、いくつかの依存関係が必要です。CMake を使用することで、特定の言語のインデックス作成サポートを無効にすることで、依存関係を最小限に抑えることができます。

*   **必要なツール**:
    *   CMake v3.12 (必須)
    *   Git (必須)
    *   Visual Studio (Windows 必須)
    *   ccache (Linux および macOS ではオプション)
*   **必須の依存関係**:
    *   Boost 1.67
    *   Qt 5.12.3
*   **C/C++ 言語サポートを有効にする場合**:
    *   LLVM/Clang 11.0.0
*   **Java 言語サポートを有効にする場合**:
    *   JDK 1.8
    *   Maven
*   **Python 言語サポートを有効にする場合**:
    *   7z (Windows 必須)

各 OS (Windows, Unix) でのビルド手順は、README に詳細に記載されています。

**テストの実行**:

Sourcetrail の自動テストスイートは [Catch2](https://github.com/catchorg/Catch2) によって提供されています。テストを実行するには、`Sourcetrail_test` バイナリを実行します。実行前に、作業ディレクトリを `./bin/test` に設定してください。

**ライセンス**:

Sourcetrail は、[GNU General Public License Version 3](LICENSE.txt) でライセンスされています。

**商標**:

"Sourcetrail" という名称は、Coati Software が所有する商標であり、GNU GPLv3 ライセンスの下では含まれません。

