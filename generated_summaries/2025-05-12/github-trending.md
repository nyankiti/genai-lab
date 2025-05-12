
# ggml-org/llama.cpp

**stars**: 79652

[View Repository on Github](https://github.com/ggml-org/llama.cpp)

LLM inference in C/C++

## README要約
## llama.cpp リポジトリ概要

`llama.cpp`は、MetaのLLaMAモデル（および他のモデル）を純粋なC/C++で推論（インファレンス）するためのリポジトリです。ローカル環境やクラウド環境など、幅広いハードウェアで最小限の設定で、最先端のパフォーマンスを実現することを目指しています。

**主な特徴:**

*   **純粋なC/C++実装:** 依存関係なし
*   **Apple Siliconへの最適化:** ARM NEON、Accelerate、Metalフレームワークを利用
*   **x86アーキテクチャのサポート:** AVX、AVX2、AVX512、AMX
*   **整数量子化:** 1.5-bit, 2-bit, 3-bit, 4-bit, 5-bit, 6-bit, 8-bit量子化による推論の高速化とメモリ使用量の削減
*   **CUDAカーネル:** NVIDIA GPUでのLLM実行をサポート（AMD GPUはHIP、Moore Threads MTT GPUはMUSA）
*   **VulkanおよびSYCLバックエンド:** サポート
*   **CPU+GPUハイブリッド推論:** VRAM容量を超えるモデルを部分的に高速化

`llama.cpp`プロジェクトは、[ggml](https://github.com/ggml-org/ggml)ライブラリの新機能開発のための主要な実験場でもあります。

**主なモデル:**

*   LLaMA, LLaMA 2, LLaMA 3
*   Mistral 7B, Mixtral MoE
*   DBRX
*   Falcon
*   Chinese LLaMA / Alpaca, Chinese LLaMA-2 / Alpaca-2
*   Vigogne (French)
*   BERT
*   Koala
*   Baichuan 1 & 2
*   Aquila 1 & 2
*   Starcoder models
*   Refact
*   MPT
*   Bloom
*   Yi models
*   StableLM models
*   Deepseek models
*   Qwen models
*   PLaMo-13B
*   Phi models, PhiMoE
*   GPT-2
*   Orion 14B
*   InternLM2
*   CodeShell
*   Gemma
*   Mamba
*   Grok-1
*   Xverse
*   Command-R models
*   SEA-LION
*   GritLM-7B, GritLM-8x7B
*   OLMo, OLMo 2, OLMoE
*   Granite models
*   GPT-NeoX, Pythia
*   Snowflake-Arctic MoE
*   Smaug
*   Poro 34B
*   Bitnet b1.58 models
*   Flan T5
*   Open Elm models
*   ChatGLM3-6b, ChatGLM4-9b, GLMEdge-1.5b, GLMEdge-4b
*   GLM-4-0414
*   SmolLM
*   EXAONE-3.0-7.8B-Instruct
*   FalconMamba Models
*   Jais
*   Bielik-11B-v2.3
*   RWKV-6
*   QRWKV-6
*   GigaChat-20B-A3B
*   Trillion-7B-preview
*   Ling models
*   LLaVA 1.5, 1.6
*   BakLLaVA
*   Obsidian
*   ShareGPT4V
*   MobileVLM 1.7B/3B models
*   Yi-VL
*   Mini CPM
*   Moondream
*   Bunny
*   GLM-EDGE
*   Qwen2-VL

**主なAPI変更点:**

*   `libllama` APIの変更ログ
*   `llama-server` REST APIの変更ログ

**ホットトピック:**

*   マルチモーダルサポートが`llama-server`に実装
*   GGML開発者エクスペリエンス調査
*   `llama-mtmd-cli`の導入（`llava-cli`などを置き換え）
*   VS Code extension for FIM completions
*   Universal [tool call support](./docs/function-calling.md) in `llama-server`
*   Vim/Neovim plugin for FIM completions
*   GGUF-my-LoRA の紹介
*   Hugging Face Inference Endpoints が GGUF をネイティブサポート
*   Hugging Face GGUF エディタ

**Bindings（バインディング）:**
Python, Go, Node.js, JS/TS, JavaScript/Wasm, Typescript/Wasm, Ruby, Rust, C#/.NET, Scala 3, Clojure, React Native, Java, Zig, Flutter/Dart, PHP, Guile Scheme, Swift, Delphi など、様々な言語向けのバインディングが存在します。

**UIs（UI）:**
様々なUIが `llama.cpp` を利用しています。

**Tools（ツール）:**

*   `akx/ggify`: PyTorchモデルをHugging Face Hubからダウンロードし、GGMLに変換
*   `akx/ollama-dl`: Ollamaライブラリからモデルをダウンロードし、llama.cppで直接使用
*   `crashr/gppm`: NVIDIA Tesla P40/P100 GPUを利用して、llama.cppインスタンスを起動し、アイドル時の消費電力を削減
*   `gpustack/gguf-parser`: GGUFファイルのレビューとメモリ使用量の見積もり
*   `Styled Lines`: Unity3dゲーム開発向けのAsync wrapper of inference part

**Infrastructure（インフラ）:**

*   `Paddler`: llama.cpp向けにカスタマイズされたステートフルロードバランサー
*   `GPUStack`: LLMを実行するためのGPUクラスタ管理
*   `llama_cpp_canister`: llama.cppをWebAssemblyを使用してInternet Computer上のスマートコントラクトとして実行
*   `llama-swap`: llama-serverで自動モデル切り替えを追加する透過的なプロキシ
*   `Kalavai`: あらゆる規模でのエンドツーエンドLLMデプロイをクラウドソース
*   `llmaz`: Kubernetes上での大規模言語モデルの容易な推論プラットフォーム

**Games（ゲーム）:**

*   `Lucy's Labyrinth`: AIモデルによって制御されるエージェントがあなたを騙そうとするシンプルな迷路ゲーム

**サポートされているバックエンド:**

*   Metal (Apple Silicon)
*   BLAS
*   BLIS
*   SYCL (Intel and Nvidia GPU)
*   MUSA (Moore Threads MTT GPU)
*   CUDA (Nvidia GPU)
*   HIP (AMD GPU)
*   Vulkan (GPU)
*   CANN (Ascend NPU)
*   OpenCL (Adreno GPU)
*   RPC

**プロジェクトのビルド方法:**

`llama`ライブラリは、[include/llama.h](include/llama.h)にCスタイルインタフェースがあります。
ビルド方法は、ローカルでのクローン、MacOSまたはLinuxでのbrew/flox/nixによるインストール、Dockerイメージの使用、または[releases](https://github.com/ggml-org/llama.cpp/releases)からプリビルドバイナリのダウンロードがあります。

**モデルの取得と量子化:**

`llama.cpp`は、[Hugging Face](https://huggingface.co)でホストされている[GGUF](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md)形式のモデルをサポートしています。

*   [Trending](https://huggingface.co/models?library=gguf&sort=trending)
*   [LLaMA](https://huggingface.co/models?sort=trending&search=llama+gguf)

GGUFファイルは手動でダウンロードすることも、`llama.cpp`と互換性のあるモデルをHugging Faceまたは他のモデルホスティングサイト（[ModelScope](https://modelscope.cn/)など）から直接使用することもできます。CLI引数`-hf <user>/<model>[:quant]`を使用します。

デフォルトでは、CLIはHugging Faceからダウンロードしますが、環境変数`MODEL_ENDPOINT`を使用して、ModelScopeなどの他のオプションに切り替えることができます。

モデルをダウンロードした後、CLIツールを使用してローカルで実行します。

Hugging Faceプラットフォームは、`llama.cpp`を使用したモデルの変換、量子化、ホスティングのためのさまざまなオンラインツールを提供しています。

*   [GGUF-my-repo space](https://huggingface.co/spaces/ggml-org/gguf-my-repo) を使用して、GGUF形式に変換し、モデルの重みを小さいサイズに量子化
*   [GGUF-my-LoRA space](https://huggingface.co/spaces/ggml-org/gguf-my-lora) を使用して、LoRAアダプタをGGUF形式に変換（詳細: https://github.com/ggml-org/llama.cpp/discussions/10123）
*   [GGUF-editor space](https://huggingface.co/spaces/CISCai/gguf-editor) を使用して、ブラウザでGGUFメタデータを編集（詳細: https://github.com/ggml-org/llama.cpp/discussions/9268）
*   [Inference Endpoints](https://ui.endpoints.huggingface.co/) を使用して、`llama.cpp`をクラウドで直接ホスト（詳細: https://github.com/ggml-org/llama.cpp/discussions/9669）

モデルの量子化の詳細については、[tools/quantize/README.md](tools/quantize/README.md)を参照してください。

**主なツール:**

*   `llama-cli`: `llama.cpp`の機能のほとんどにアクセスし、実験するためのCLIツール
*   `llama-server`: LLMを提供する軽量で、[OpenAI API](https://github.com/openai/openai-openapi)互換のHTTPサーバー
*   `llama-perplexity`: 与えられたテキストに対するモデルの困惑度（パープレキシティ）[\[^1][^2]](tools/perplexity/README.md) やその他の品質指標を測定するツール
*   `llama-bench`: さまざまなパラメータでの推論のパフォーマンスをベンチマークするツール
*   `llama-run`: `llama.cpp`モデルを実行するための包括的な例。推論に役立ちます。RamaLama [^3](https://github.com/containers/ramalama) で使用します。
*   `llama-simple`: `llama.cpp`でアプリを実装するための最小限の例。開発者に役立ちます。

**コントリビューティング:**

*   コントリビューターはPRをオープンできます
*   コラボレーターは、`llama.cpp`リポジトリのブランチにプッシュし、PRを`master`ブランチにマージできます
*   コラボレーターは、貢献に基づいて招待されます
*   課題、PR、プロジェクトの管理に関するあらゆる支援は大歓迎です！
*   最初の貢献に適したタスクについては、[good first issues](https://github.com/ggml-org/llama.cpp/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)を参照してください。
*   [CONTRIBUTING.md](CONTRIBUTING.md) を読んで詳細を確認してください
*   [Inference at the edge](https://github.com/ggml-org/llama.cpp/discussions/205) を読んでください
*   [Changelog podcast](https://changelog.com/podcast/532) を読んでください。

**その他ドキュメント:**

*   [main (cli)](tools/main/README.md)
*   [server](tools/server/README.md)
*   [GBNF grammars](grammars/README.md)

**開発ドキュメント:**

*   [How to build](docs/build.md)
*   [Running on Docker](docs/docker.md)
*   [Build on Android](docs/android.md)
*   [Performance troubleshooting](docs/development/token_generation_performance_tips.md)
*   [GGML tips & tricks](https://github.com/ggml-org/llama.cpp/wiki/GGML-Tips-&-Tricks)

**モデルに関する論文と背景:**

モデルの生成品質に問題がある場合は、LLaMAモデルの限界を理解するために、以下のリンクと論文を読んでください。

**XCFramework:**
iOS, visionOS, tvOS, macOS用のライブラリのプリコンパイルされたバージョンです。Swiftプロジェクトで、ソースからライブラリをコンパイルすることなく使用できます。

**Completions:**
コマンドライン補完は、一部の環境で利用できます。Bash補完の設定例が示されています。

**References:**
参考文献が記載されています。


---

# isledecomp/isle

**stars**: 2913

[View Repository on Github](https://github.com/isledecomp/isle)

A functionally complete decompilation of LEGO Island (1997)

## README要約
## LEGO Island デコンパイルプロジェクトの詳細な要約

このプロジェクトは、1997年にリリースされたLEGO Island (バージョン1.1、英語) の完全なデコンパイルを目指しています。オリジナルと可能な限り正確に一致させることを目的とし、再コンパイルされた命令が元の機械語と一致するように努めています。最終的な目標は、修正、改善、および将来的に他のプラットフォームへの移植が可能な、実用的なコードベースを提供することです。

**プロジェクトの現状:**

*   `ISLE.EXE` と `LEGO1.DLL` は完全にデコンパイルされており、オリジナルのものと機能的に同一であるとされています。
*   ソースコードの精度、命名、ドキュメント、および構造の改善作業が進行中です。
*   まだ未解決のバグが残っている可能性がありますが、このソースコードから生成されたバイナリを使用してゲームを完全にプレイできるはずです。
*   コンパイラの複雑さにより、バイナリはオリジナルの実行ファイルとバイト単位で一致しませんが、将来的には解決することを目指しています。

**ビルド方法:**

*   このプロジェクトは、コンパイラや開発環境の柔軟性が高い[CMake](https://cmake.org/)ビルドシステムを使用しています。
*   最も正確な結果を得るためには、元のゲームのビルドに使用されたMicrosoft Visual C++ 4.20を推奨します。
*   **前提条件:**
    *   Microsoft Visual C++ 4.2。 [ポータブルバージョン](https://github.com/itsmattkc/msvc420)が利用可能です。
    *   [CMake](https://cmake.org/)。
*   **ビルド手順:**
    1.  コマンドプロンプト(`cmd`)を開きます。
    2.  Visual C++ 4.2から、`BIN/VCVARS32.BAT x86`を実行して、MSVCでコンパイルするためのパスと環境変数を設定します。
    3.  コンパイルされたオブジェクトを配置するためのビルドフォルダーを作成します。
    4.  コマンドプロンプトで、ビルドフォルダーに移動します(`cd`コマンドを使用)。
    5.  CMakeを使用してプロジェクトを構成します。
        ```
        cmake <path-to-source> -G "NMake Makefiles" -DCMAKE_BUILD_TYPE=RelWithDebInfo
        ```
        *   `<path-to-source>` をソースリポジトリのパスに置き換えます。
        *   `RelWithDebInfo` は、デバッグシンボルを生成するため推奨されます。ただし、`Release` に変更することも可能です。
        *   `NMake Makefiles` は、Visual C++ 4.2との互換性が高いため推奨されます。より高速なビルドには、`Ninja` (インストールされている場合) も使用できますが、Visual C++ 4.2の制限により、`Release` ビルドのみ可能です。
    6.  `nmake`または`cmake --build <build-folder>`を実行してプロジェクトをビルドします。
    7.  ビルドが完了すると、ビルドフォルダーに再コンパイルされた `ISLE.EXE` と `LEGO1.DLL` が生成されます。
    8.  場合によっては、`nmake`を2回実行する必要があるため、常に`nmake && nmake`を使用して(再)コンパイルすることをお勧めします。
*   **Docker:**
    *   LinuxおよびmacOSユーザー向けに、Dockerを使用したコンパイルもサポートされています。
    *   以下のコマンドでコンパイルできます。
        ```
        docker run -d \
        	-e CMAKE_FLAGS="-DCMAKE_BUILD_TYPE=RelWithDebInfo" \
        	-v <path-to-source>:/isle:rw \
        	-v <build-folder>:/build:rw \
        	ghcr.io/isledecomp/isle:latest
        ```
        *   `<path-to-source>`をソースコードディレクトリのパスに置き換えます。
        *   `<build-folder>`をCMakeが使用するビルドフォルダーのパスに置き換えます。

**使用方法:**

*   再コンパイルされたバイナリを使用する最も簡単な方法は、LEGO Islandのインストールディレクトリにあるオリジナルの実行ファイル(`ISLE.EXE`, `LEGO1.DLL`, `CONFIG.EXE`)を、ビルドしたファイルに置き換えることです。
    *   デフォルトのインストールパス:
        *   32ビットOS: `C:\Program Files\LEGO Island`
        *   64ビットOS: `C:\Program Files (x86)\LEGO Island`
*   高度なユーザー向けには、`ISLE.EXE` と `LEGO1.DLL` が同じディレクトリにあり、レジストリキー (`cdpath` および `diskpath`) がアセットファイルの正しい場所を指している限り、どこからでもLEGO Islandを実行できます。
    *   レジストリキーの場所:
        *   32ビットOS: `HKEY_LOCAL_MACHINE\Software\Mindscape\LEGO Island`
        *   64ビットOS: `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Mindscape\LEGO Island`
*   `d3drm.dll`に関するエラーが発生した場合は、このDLLをゲーム実行ファイルと同じディレクトリに配置する必要があります。[こちら](https://legoisland.org/download/d3drm.zip)から入手できます。

**貢献について:**

*   このプロジェクトへの貢献に興味がある場合は、[CONTRIBUTING](/CONTRIBUTING.md)ページを参照してください。

**追加情報:**

*   **LEGO Islandのバージョンの確認:**
    *   `LEGO1.DLL`を右クリックし、「プロパティ」を開き、「詳細」タブでバージョンを確認します。`1.0.0.0` (1.0) または `1.1.0.0` (1.1) が表示されます。
    *   ゲームディスクファイルの日付を確認します。1.0のファイルはすべて1997年8月8日、1.1のファイルはすべて1997年9月8日です。
    *   このデコンパイルは、LEGO Islandの英語版バージョン1.1を対象としています。
    *   バージョンを確認するためのチェックサム:
        *   ISLE.EXE `md5: f6da12249e03eed1c74810cd23beb9f5`
        *   LEGO1.DLL `md5: 4e2f6d969ea2ef8655ba3fc221a0c8fe`
        *   CONFIG.EXE `md5: 92d958a64a273662c591c88b09100f4a`


---

# kamranahmedse/developer-roadmap

**stars**: 319224

[View Repository on Github](https://github.com/kamranahmedse/developer-roadmap)

Interactive roadmaps, guides and other educational content to help developers grow in their careers.

## README要約

