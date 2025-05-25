
# lobehub/lobe-chat

**stars**: 61165

[View Repository on Github](https://github.com/lobehub/lobe-chat)

🤯 Lobe Chat - an open-source, modern-design AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / DeepSeek / Qwen), Knowledge Base (file upload / knowledge management / RAG ), Multi-Modals (Plugins/Artifacts) and Thinking. One-click FREE deployment of your private ChatGPT/ Claude / DeepSeek application.

## README要約
## Lobe Chat: 日本語による詳細な要約

Lobe Chat は、オープンソースでモダンなデザインの AI チャットフレームワークです。様々な AI プロバイダー (OpenAI / Claude 3 / Gemini / Ollama / DeepSeek / Qwen) をサポートし、ファイルアップロードや知識ベース管理、RAG (Retrieval-Augmented Generation) といった知識ベース機能、プラグインやアーティファクトなどのマルチモーダル対応、思考の可視化などの機能を備えています。個人用の ChatGPT/Claude/DeepSeek アプリケーションをワンクリックで無料でデプロイできます。

**主な機能**

*   **多彩な AI プロバイダーのサポート:** OpenAI、Ollama、Anthropic、Bedrock、Google、DeepSeek、PPIO、HuggingFace、OpenRouter、Cloudflare Workers AI など、41 以上の AI プロバイダーをサポートしており、ユーザーは多様な選択肢から好みのモデルを利用できます。
*   **Chain of Thought (CoT) の可視化:** AI の思考プロセスをステップごとに可視化し、複雑な問題解決における透明性を高めます。
*   **分岐会話:** 会話の流れを複数方向に展開でき、より自然で柔軟な会話を実現します。
*   **アーティファクトのサポート:** Claude のアーティファクトを統合し、SVG グラフィック、HTML ページのリアルタイム生成と表示、様々な形式のドキュメント作成を可能にします。
*   **ファイルアップロード / 知識ベース:** 様々な種類のファイルをアップロードして知識ベースを作成し、会話中に利用できます。
*   **ローカル LLM のサポート:** Ollama をベースとしたローカルモデルにも対応し、プライバシー保護と柔軟なカスタマイズを実現します。
*   **モデル視覚認識:** OpenAI の gpt-4-vision モデルをサポートし、画像をアップロードして内容認識に基づいた対話が可能です。
*   **TTS & STT 音声会話:** 音声による会話が可能で、TTS (テキスト読み上げ) と STT (音声認識) 技術により、視覚的な情報だけでなく、音声による情報取得も可能にします。
*   **テキストからの画像生成:** DALL-E 3、MidJourney、Pollinations などの AI ツールを利用して、会話から直接画像を生成できます。
*   **プラグインシステム (Function Calling):** ウェブ検索、ドキュメント検索、画像生成など、様々な機能を拡張できるプラグインシステムを搭載しています。現在 42 個のプラグインが利用可能です。
*   **Agent Market (GPTs):** 多様なエージェントが集まるマーケットプレイスを提供しており、ユーザーは様々な用途に特化したエージェントを見つけて利用したり、自分で作成したエージェントを公開したりできます。現在 488 個のエージェントが公開されています。
*   **ローカル / リモートデータベースのサポート:** データの所有権とプライバシーを重視するユーザー向けにローカルデータベース、利便性を重視するユーザー向けに PostgreSQL を利用したサーバーサイドデータベースをサポートしています。
*   **マルチユーザー管理:** next-auth と Clerk を利用した、多様な認証方法と高度なユーザー管理機能を実装しています。
*   **PWA (Progressive Web App) 対応:** デスクトップとモバイルデバイスの両方でネイティブアプリのような体験を提供します。
*   **モバイルデバイスへの最適化:** モバイルデバイスでのスムーズなユーザーエクスペリエンスを実現するための最適化が行われています。
*   **カスタムテーマ:** ライト/ダークテーマの切り替え、カラーカスタマイズなど、パーソナライズされたテーマ設定が可能です。

**その他**

*   高速デプロイ（Vercel、Docker 等）
*   カスタムドメイン対応
*   データはローカルブラウザに保存され、プライバシーを保護
*   洗練された UI デザイン
*   スムーズな会話体験 (Markdown 対応)

**パフォーマンス**

Lighthouse レポートによる、デスクトップとモバイルデバイスでのパフォーマンス評価が公開されています。

**セルフホスティング**

Vercel、Zeabur、Sealos、Alibaba Cloud などのプラットフォームや、Docker イメージを使用して、Lobe Chat を簡単にセルフホスティングできます。

**エコシステム**

*   @lobehub/ui: UI コンポーネントライブラリ
*   @lobehub/icons: AI / LLM モデルの SVG ロゴとアイコン集
*   @lobehub/tts: 高品質な TTS/STT React Hooks ライブラリ
*   @lobehub/lint: ESlint, Stylelint, Commitlint, Prettier, Remark, Semantic Release の設定

**プラグイン**

Function Calling 機能を拡張するプラグインを開発できます。Lobe Chat プラグイン開発ガイドも公開されています。

**ローカル開発**

GitHub Codespaces を利用したオンライン開発、またはローカル環境での開発が可能です。

**貢献**

コードの貢献は大歓迎で、GitHub の Issues や Projects から参加できます。

**スポンサー**

Open Collective での寄付によるサポートを募っています。

**関連プロダクト**

*   Lobe SD Theme (Stable Diffusion WebUI 向けテーマ)
*   Lobe Midjourney WebUI (Midjourney 用 WebUI)
*   Lobe i18n (i18n 翻訳自動化ツール)
*   Lobe Commit (Gitmoji ベースのコミットメッセージ生成ツール)

