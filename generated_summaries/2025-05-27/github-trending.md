
# mlabonne/llm-course

**stars**: 52939

[View Repository on Github](https://github.com/mlabonne/llm-course)

Course to get into Large Language Models (LLMs) with roadmaps and Colab notebooks.

## README要約
## mlabonne/llm-course リポジトリの詳細な要約（日本語）

このリポジトリは、大規模言語モデル（LLM）に関する包括的な学習コースを提供しています。ロードマップとColabノートブックを通じて、LLMの基礎から、最新技術を用いたLLMの構築、LLMベースのアプリケーション開発とデプロイまでを網羅しています。

**リポジトリの構成:**

1.  **LLM Fundamentals (オプション):** 数学、Python、ニューラルネットワークに関する基礎知識を扱います。LLMの理解に必要な前提知識の復習や習得に役立ちます。
2.  **The LLM Scientist:** 最新技術を用いて、最高のLLMを構築する方法に焦点を当てています。
3.  **The LLM Engineer:** LLMベースのアプリケーションを開発し、デプロイする方法に焦点を当てています。

**補足:**
このコースを基に、著者はLLMエンジニアリングハンドブックを執筆しています。コースは無料で公開されていますが、書籍の購入によって著者を支援することもできます。

**インタラクティブな学習:**
HuggingChatやChatGPTで、このコースに関する質問に答えたり、知識を試したりできるLLMアシスタントを利用できます。

**ノートブック:**
LLMに関する様々なノートブックと記事が提供されています。

**主要なノートブックとColabノートブックへのリンク:**

*   **Tools:**
    *   LLM AutoEval (RunPodを利用したLLMの自動評価)
    *   LazyMergekit (MergeKitを使ったモデルのマージ)
    *   LazyAxolotl (Axolotlを使ったモデルのファインチューニング)
    *   AutoQuant (様々なフォーマットでのLLMの量子化)
    *   Model Family Tree (マージされたモデルの系統図)
    *   ZeroSpace (Gradioチャットインターフェースの自動作成)
*   **Fine-tuning:**
    *   Unslothを使ったLlama 3.1のファインチューニング
    *   ORPOを使ったLlama 3のファインチューニング
    *   DPOを使ったMistral-7bのファインチューニング
    *   QLoRAを使ったMistral-7bのファインチューニング
    *   Axolotlを使ったCodeLlamaのファインチューニング
    *   QLoRAを使ったLlama 2のファインチューニング
*   **Quantization:**
    *   量子化の基礎
    *   GPTQを使った4ビット量子化
    *   GGUFとllama.cppを使った量子化
    *   ExLlamaV2を使った量子化
*   **Other:**
    *   MergeKitを使ったLLMのマージ
    *   MergeKitを使ったMoE (Mixture of Experts)の作成
    *   abliterationを使ったLLMのアンセンサー
    *   Knowledge Graphsを使ったChatGPTの改善
    *   大規模言語モデルにおけるデコーディング戦略

**各パートの詳細:**

*   **LLM Fundamentals:**
    *   機械学習に必要な数学（線形代数、微積分、確率統計）
    *   機械学習のためのPython（NumPy、Pandas、Matplotlib、Scikit-learnなど）
    *   ニューラルネットワーク（MLPの構築、PyTorchなど）
    *   自然言語処理（NLP）の基礎

*   **The LLM Scientist:**
    *   LLMアーキテクチャ（Transformer、トークン化、アテンションメカニズム、サンプリング手法）
    *   モデルの事前学習（データ準備、分散学習、学習の最適化、モニタリング）
    *   事後学習データセット
    *   教師ありファインチューニング (SFT)
    *   Preference Alignment (DPO, GRPO, PPO)
    *   評価手法（自動ベンチマーク、人間の評価、モデルベース評価）
    *   量子化（GGUF、GPTQ、AWQなど）
    *   新トレンド（モデルのマージ、マルチモーダルモデル、解釈可能性、テスト時の計算量のスケーリング）

*   **The LLM Engineer:**
    *   LLMの実行（API、オープンソースLLM、プロンプトエンジニアリング、出力構造化）
    *   ベクトルストレージの構築
    *   Retrieval Augmented Generation (RAG)
    *   Advanced RAG
    *   エージェント
    *   推論の最適化
    *   LLMのデプロイ（ローカル、デモ、サーバー、エッジ）
    *   LLMのセキュリティ（プロンプトハッキング、バックドア、防御策）

**参考文献:**

各トピックについて、豊富な参考文献（YouTube動画、記事、論文など）が提供されており、詳細な知識を深めることができます。

**その他:**

このリポジトリは、DevOps Roadmapの影響を受けて作成されました。


---

# iptv-org/iptv

**stars**: 94127

[View Repository on Github](https://github.com/iptv-org/iptv)

Collection of publicly available IPTV channels from all over the world

## README要約
## IPTV-org/iptv リポジトリの要約

このリポジトリは、世界中の公開されているIPTV (Internet Protocol Television) チャンネルのコレクションです。

**主な機能と内容:**

*   **プレイリスト:** 
    *   すべてのチャンネルを含むメインプレイリスト
    *   カテゴリ別、言語別、国別、地域別にグループ化された複数のプレイリスト
    *   NSFW (成人向け) チャンネルの配信は2024年1月30日に停止
*   **EPG (Electronic Program Guide):** 
    *   [iptv-org/epg](https://github.com/iptv-org/epg) リポジトリに公開されているユーティリティを使用して、ほとんどのチャンネルのEPGをダウンロード可能
*   **データベース:** 
    *   チャンネルデータは [iptv-org/database](https://github.com/iptv-org/database) リポジトリから取得
    *   エラーを見つけた場合は、そちらのリポジトリで issue を開くことで報告
*   **API:** 
    *   API ドキュメントは [iptv-org/api](https://github.com/iptv-org/api) リポジトリで利用可能
*   **その他のリソース:** 
    *   IPTV関連の他の有用なリソースへのリンクは [iptv-org/awesome-iptv](https://github.com/iptv-org/awesome-iptv) リポジトリで確認可能
*   **ディスカッション:** 
    *   チャンネルの検索に関するヘルプ、質問、アイデアは、[Discussions](https://github.com/orgs/iptv-org/discussions)で共有可能
*   **FAQ:** 
    *   よくある質問への回答は [FAQ.md](FAQ.md) ファイルに記載
*   **貢献:** 
    *   問題の報告やプルリクエストの送信前に [Contributing Guide](CONTRIBUTING.md) を参照
*   **法的情報:** 
    *   このリポジトリは動画ファイルを保存していません。
    *   ユーザーが提出した公開されている動画ストリームURLへのリンクのみを記載しています。
    *   著作権侵害に関する問題は、プルリクエストまたは issue を通して対応可能。
    *   ただし、リンク先のコンテンツに対しては一切の管理権限を持たないため、DMCA通知は無効。
*   **ライセンス:** CC0

**利用方法:**

1.  提供されているプレイリストのリンクを、ライブストリーミングをサポートする動画プレイヤー (例: VLC) に入力し、「開く」をクリックするだけです。

**このリポジトリの目的は、世界中の誰でも無料で利用できるIPTVチャンネルへのアクセスを提供することです。**


---

# kamranahmedse/developer-roadmap

**stars**: 323561

[View Repository on Github](https://github.com/kamranahmedse/developer-roadmap)

Interactive roadmaps, guides and other educational content to help developers grow in their careers.

## README要約

