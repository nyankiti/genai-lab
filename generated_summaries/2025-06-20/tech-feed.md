# Two-factor authentication (2FA) team enforcement - Vercel

[View on Vercel Blog](https://vercel.com/changelog/2fa-team-enforcement)

## Vercelの2要素認証（2FA）チーム強制について

このお知らせは、Vercelのチームがセキュリティを強化するために、すべてのメンバーに対して2要素認証（2FA）を必須とする機能を導入したことを伝えています。

**主な内容:**

*   **チームオーナーによる有効化:** チームオーナーは、チーム設定の「セキュリティとプライバシー」セクションから2FAの強制を有効にできます。
*   **オーナーによる管理:** チームオーナーは、チームメンバーの設定から各メンバーの2FAステータスを確認・フィルタリングできます。
*   **メンバーの制限:** 2FAが強制されている場合、2FAを有効にしていないメンバーは、以下の操作が制限されます。
    *   プルリクエストからのビルドトリガー
    *   新しいプレビューデプロイへのアクセス
    *   チームダッシュボードの閲覧
    *   APIリクエストの実行
    *   アクセストークンの使用
*   **強制的なロックインと可視性:** 2FA強制が有効になっているチームのメンバーは、チームを退会しない限り2FAを無効にできません。各ユーザーのアカウント設定には、2FAが必要なチームが明確に表示されます。
*   **推奨事項:** 今すぐ2FAの強制を有効にし、詳細はドキュメントを参照してください。

要するに、Vercelはチームのセキュリティを向上させるために、2FAの強制を可能にする機能を導入し、チームオーナーがメンバーの2FA状況を管理しやすく、2FA未設定のメンバーの行動を制限することでセキュリティを強化しています。

---
# Create and share queries with notebooks in Vercel Observability - Vercel

[View on Vercel Blog](https://vercel.com/changelog/create-and-share-queries-with-notebooks-in-vercel-observability)

## Vercel Observabilityのノートブックでクエリを作成し共有

Vercel Observability Plusのユーザーは、観測可能性データ共同で探索するためのクエリのコレクションをノートブックで作成できるようになりました。

**概要:**

*   Vercel Observabilityのクエリは、ログデータの探索、トラフィック、パフォーマンス、およびその他の主要な指標の可視化を可能にします。これらのクエリをノートブックに保存できるようになりました。
*   ノートブックはデフォルトでは作成者のみに表示されますが、チームのすべてのメンバーと共有することもできます。
*   この機能は、Observability Plusの加入者に対して追加料金なしで利用できます。

**詳細:**

Vercel Observability Plusのユーザーは、ログデータやパフォーマンス指標などを分析するためのクエリをノートブックにまとめ、チーム内で共同で分析・共有できるようになりました。ノートブックは、個人の記録用として使用することも、チーム全体で情報共有するためのツールとして活用することも可能です。
---
# Ktor 3.2.0 Is Now Available | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/06/ktor-3-2-0-is-now-available/)

## Ktor 3.2.0 リリースのお知らせ

Ktor 3.2.0 がリリースされました。これは今年2回目のマイナーリリースであり、新機能、パフォーマンス改善、バグ修正が含まれています。

**主な新機能:**

*   **依存性注入（DI）モジュール:** 開発者からの要望に応え、新たなDIモジュールが追加されました。これはオプションですが、有効にすると、KtorでDIを簡単に利用できるようになります。コルーチンを基盤としているため、アプリケーションの並行初期化を容易にします。
*   **非同期モジュール（Suspend modules）:** 非同期での初期化が必要な依存関係を待機させることが可能になり、複雑な依存関係グラフの並列化も容易になりました。
*   **Unixドメインソケットサポート（CIO）:** CIOクライアントとサーバーエンジンがUnixドメインソケットをサポートし、同一システム上のプロセス間の効率的な双方向通信を実現し、ネットワークオーバーヘッドを削減します。
*   **HTMXモジュール:** kotlinx.htmlとKtor Routing DSLとの緊密な統合により、HTMXのHTML属性の定義や、HTMXヘッダーを自動的に含むルートの定義が容易になりました。
*   **バージョンカタログ:** Gradleの依存関係管理を効率化するバージョンカタログをサポートしました。

**その他の変更点:**

*   設定ファイルからデータクラスへの自動デシリアライズ
*   Android R8 に関する既知の問題（3.2.1で修正予定）

**コミュニティへの呼びかけ:**

Ktor 3.2.0を試して、start.ktor.io からプロジェクトを作成し、フィードバックや貢献を歓迎しています。RedditとSlackのコミュニティにも参加できます。

**感謝:**

貢献者とフィードバックをくれたすべての人に感謝の意を表しています。特に、reonaore、markozajc、rururux、OmniacDev、StefMa、MarcusDunn、Philip Wedemannに感謝しています。

---
# Foundry Localを使ってSpring AIからローカルLLMにアクセスする - IK.AM

[View on IK.AM](https://ik.am/entries/856)

## Foundry Local を使用した Spring AI からのローカル LLM アクセス - 要約

本記事では、Microsoft が提供するローカル AI モデル実行環境である Foundry Local を使用して、Spring AI アプリケーションからローカルで LLM (Large Language Model) にアクセスする方法を紹介しています。

**主な内容:**

*   **Foundry Local とは:** オープンソースの AI モデルをローカルで管理・実行できる環境で、OpenAI API と互換性のある API を提供しています。
*   **インストール:** Mac では `brew` コマンドで簡単にインストールできます。
*   **モデルのロード:** 記事では `phi-4-mini` モデルを例に、`foundry model download` と `foundry model load` コマンドを使用してモデルをロードする方法を示しています。
*   **モデルの確認:**  `foundry service status` コマンドでエンドポイントの URL を確認し、 `curl` コマンドで OpenAI API にアクセスできるモデルの一覧を確認できます。
*   **Spring AI アプリケーションでの利用:** 既存の Spring AI サンプルアプリ (`hello-spring-ai`) を利用し、`--spring.ai.openai.base-url`, `--spring.ai.openai.api-key`, `--spring.ai.openai.chat.options.model`  などの設定で Foundry Local のモデルを使用する方法を解説しています。
*   **Spring AI アプリケーションの作成:** Spring Initializr を利用して、Spring AI を使用した簡単なアプリケーションをゼロから作成し、Foundry Local のモデルにアクセスする方法を紹介しています。 `application.properties` で  `spring.ai.openai.base-url`, `spring.ai.openai.api-key`, `spring.ai.openai.chat.options.model` を設定することで、ローカル LLM を利用できます。
*   **Azure OpenAI Service への切り替え:**  `spring.ai.openai.base-url`,  `spring.ai.openai.chat.options.model` といったプロパティを変更するだけで、ソースコードを変更することなく、OpenAI API を Azure OpenAI Service に切り替えることができる点も示しています。

記事を通して、ローカル LLM を Spring AI アプリケーションで手軽に利用できることが示されています。
