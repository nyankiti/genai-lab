# Building secure AI agents - Vercel

[View on Vercel Blog](https://vercel.com/blog/building-secure-ai-agents)

## 安全なAIエージェント構築について - Vercelの要約

Vercelの記事は、安全なAIエージェント構築における主要なセキュリティリスクと、それに対する対策について解説しています。AIエージェントは、システムプロンプトとツールを持つ言語モデルであり、ツールの利用はAPIやファイルシステムへのアクセスを可能にする一方で、セキュリティ上の新たな脆弱性も生み出します。

**最も重要なセキュリティリスクは、プロンプトインジェクション**です。これは、攻撃者が通常の入力に見せかけてコマンドを挿入し、AIエージェントを意図しない動作をさせる攻撃手法です。LLM（大規模言語モデル）では、入力を分離したりエスケープしたりする標準的な方法がないため、攻撃者が入力、検索結果、取得したドキュメントなど、モデルが認識するあらゆるものを利用してシステムプロンプトを上書きし、ツールの呼び出しをトリガーする可能性があります。

**安全なAIエージェントを設計する上での重要な原則**は以下の通りです。

1.  **攻撃者がすべてのプロンプトを制御すると仮定する（Total Compromise）**: 攻撃者が元のクエリ、ユーザー入力、ツールから取得したデータ、モデルに渡される中間コンテンツなど、すべての要素を制御できると想定して設計する必要があります。
2.  **ツールのスコープを限定する**: ツールは、呼び出し元の権限に限定されるように設計します。ユーザーがアクセスできないものに、モデルがアクセスできないようにします。例えば、テナントIDを指定できるツールは、テナント間のデータ漏洩につながる可能性があるため、テナントIDを固定するなどの対策が必要です。
3.  **プロンプトインジェクションはデータ問題と捉える**: プロンプトインジェクションは、データベースからのデータ、Webスクレイピング、検索APIからの結果など、間接的な入力からも発生する可能性があります。攻撃者がこれらのデータを制御している場合、直接システムとやり取りすることなく、エージェントのプロンプトに指示を注入できます。
4.  **モデル出力からの情報漏洩を防止する**: モデルの出力がMarkdownとしてレンダリングされる場合、攻撃者は悪意のある画像URLを挿入してデータの流出を試みることがあります（GitLab Duoの事例）。モデルの出力は、レンダリングまたは他のシステムに渡す前にサニタイズする必要があります。CSPルールも有効な対策です。
5.  **「失敗」を前提とした設計**: プロンプトインジェクションは、特殊なケースや稀なバグではなく、言語モデルを扱う上で避けられない問題と捉えます。ユーザー入力とシステムプロンプトの分離は保証できず、モデルが常にルールに従うとも限りません。そのため、被害を最小限に抑える設計が重要になります。

**安全対策の要約**は以下の通りです。

*   ツールをユーザーまたはテナントに厳密にスコープする。
*   モデルの出力をデフォルトで信用しない。
*   MarkdownやHTMLを直接レンダリングしない。
*   秘密情報やトークンをプロンプトに含めない。

最終的に、セキュリティはモデルを信頼することではなく、モデルが誤った動作をした際の被害を最小限に抑えることに重点を置くべきです。AI SDKを使用してエージェントの構築を開始し、最初に「失敗」を想定した設計を行い、安全性を確保することが推奨されています。

---
# Observability added to AI Gateway alpha - Vercel

[View on Vercel Blog](https://vercel.com/changelog/observability-added-to-ai-gateway-alpha)

## VercelのAIゲートウェイ（アルファ版）にオブザーバビリティ機能が追加

この記事は、VercelのAIゲートウェイ（現在すべてのユーザーが利用できるアルファ版）に、オブザーバビリティ機能が追加されたことを伝えています。

**主なポイント：**

*   AIゲートウェイは、APIキー、レート制限、プロバイダーアカウントを管理することなく、約100のAIモデルを切り替えることができます。
*   Vercelダッシュボードのオブザーバビリティタブに、AIゲートウェイに関連するメトリクスを表示する専用のAIセクションが追加されました。
*   このアップデートにより、以下の情報が表示可能になりました：
    *   モデルごとのリクエスト数
    *   最初のトークンまでの時間（TTFT）
    *   リクエストの期間
    *   入力/出力トークン数
    *   リクエストごとのコスト（アルファ版中は無料）
*   これらのメトリクスは、すべてのプロジェクトで表示できるほか、プロジェクトごと、モデルごとの使用状況にドリルダウンして、どのモデルのパフォーマンスが良いか、レイテンシの比較、各リクエストの運用コストなどを把握できます。

---
# v0-1.5-md & v0-1.5-lg now in beta on the Models API - Vercel

[View on Vercel Blog](https://vercel.com/changelog/models-api-v0-1.5-beta)

VercelのModels APIにおいて、v0-1.5-md (128Kトークンコンテキスト)とv0-1.5-lg (512Kトークンコンテキスト)がベータ版として利用可能になりました。詳細と例については、Models APIのドキュメントを参照してください。

---
# Event-Driven LISTEN/NOTIFY Support in Java using PostgreSQL | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919938980/0/baeldung~EventDriven-LISTENNOTIFY-Support-in-Java-using-PostgreSQL)

## Baeldungの記事「JavaにおけるPostgreSQLでのイベントドリブンLISTEN/NOTIFYサポート」の要約

この記事では、PostgreSQLのLISTEN/NOTIFYコマンドを利用して、Javaアプリケーションで非同期イベント処理を実現する方法を解説しています。

**1. LISTEN/NOTIFYの概要:**

*   PostgreSQLのLISTEN/NOTIFYは、データベースとクライアント間の非同期通信を可能にする機能です。
*   LISTENコマンドは、特定のチャネルで発生するイベントの受信を登録します。
*   NOTIFYコマンドは、指定されたチャネルにイベントを送信します。
*   これらのコマンドにより、データベースをシンプルなメッセージングシステムとして利用し、データベース内のイベントに応じてクライアントがリアクションを起こすことができます。
*   用途としては、リアルタイムダッシュボード、キャッシュの無効化、データ監査などが挙げられます。
*   NOTIFYコマンドは、トランザクションの一部として実行され、トランザクションがコミットされるまでイベントは送信されません。

**2. JDBCでの実装:**

*   JDBCを使って、JavaアプリケーションからLISTEN/NOTIFYを利用する方法を説明しています。
*   まず、PostgreSQL JDBCドライバをプロジェクトに追加します。
*   NOTIFYは、NOTIFYコマンドまたはpg\_notify()関数を使用して実行できます。
*   LISTENの実装は、JDBCドライバ固有の機能を利用する必要があります。
*   標準のJDBCドライバでは、PGConnectionオブジェクトのgetNotifications()メソッドを使用して、ポーリングで通知を受信します。
*   PGJDBC-NGドライバを使用すると、通知のコールバックを登録し、ポーリングなしで通知を受け取ることができます。

**3. PGJDBC-NGによる効率的なリスニング:**

*   PGJDBC-NGドライバを使用すると、データベースをポーリングせずに通知を受け取ることができます。
*   PGNotificationListenerインターフェースを実装し、通知受信時のコールバックを定義します。
*   PGConnectionオブジェクトにリスナーを登録することで、通知が送信されるたびに自動的にコールバックが呼び出されます。

**4. まとめ:**

この記事では、PostgreSQLのLISTEN/NOTIFYコマンドと、JavaアプリケーションからJDBCを使用してそれらを活用する方法を解説しました。イベントをデータベースから発生させる必要のある場面で、この機能の利用を推奨しています。

---
# This Week in Spring - June 10th, 2025

[View on Spring Blog](https://spring.io/blog/2025/06/10/this-week-in-spring-june-10th-2025)

## This Week in Spring - 2025年6月10日号 詳細要約

今週のSpringに関する情報は以下の通りです。

*   **VMwareによるトレーニングと認定:** VMwareが提供するトレーニングと認定プログラムが、個人のスキルアップを支援します。
*   **Tanzu Springによるサポート:** Tanzu Springは、OpenJDK™、Spring、Apache Tomcat®に関するサポートとバイナリを、シンプルなサブスクリプション形式で提供します。
*   **今後のイベント情報:** Springコミュニティで開催されるイベント情報を確認できます。

---
# Scaling security with responsible disclosure | OpenAI

[View on OpenAI News](https://openai.com/index/scaling-coordinated-vulnerability-disclosure)

## OpenAI、責任ある情報開示によるセキュリティのスケーリング

OpenAIは、第三者ソフトウェアの脆弱性を責任を持って報告するための「Outbound Coordinated Disclosure Policy」を発表しました。これは、インテグリティ、協力、スケーリングを基盤としており、AIシステムがセキュリティ脆弱性の発見と修正にますます貢献できるようになることを予測した取り組みです。

**本ポリシーの目的と内容:**

*   OpenAIは、第三者ソフトウェア（オープンソースおよび商用）で見つかったセキュリティ問題を、協力的な方法で報告します。
*   本ポリシーは、自動/手動のコードレビュー、および第三者ソフトウェアの内部利用を通じて発見された問題に対する開示方法を規定しています。
*   具体的には、発見の検証と優先順位付け、ベンダーとの連絡方法、開示メカニズム、公開のタイミングなどを説明しています（原則として非公開を優先）。
*   OpenAIは、影響重視、協力的、デフォルトでは秘密厳守、高スケールかつ低摩擦、必要に応じた帰属表示を原則としています。

**開示に関するOpenAIのスタンス:**

*   OpenAIは、開発者フレンドリーな開示タイムラインを意図的に採用し、デフォルトでオープンエンドとしています。これは、AIシステムがコードの強みと弱みを理解し、信頼性の高いパッチを生成するようになることで、脆弱性の発見がより複雑になることを考慮したものです。
*   OpenAIは、より多くの、より複雑なバグを検出すると予想し、より深い協力と解決のための時間を要すると考えています。
*   緊急性と長期的な回復力のバランスを取るために、ソフトウェアメンテナと協力して開示規範を開発し続けます。
*   ただし、公共の利益がある場合は、開示する権利を保持します。

**今後の展望:**

*   OpenAIは、本ポリシーを継続的に改善していく予定です。
*   開示に関する質問は、outbounddisclosures@openai.com⁠まで。
*   OpenAIは、透明性のあるコミュニケーションを通じて、より健全で安全なエコシステムを構築することを目指しています。

---
# Support foldable devices with the Viewport Segments API  |  Blog  |  Chrome for DevelopersXGitHub

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/viewport-segments-api-shipped?hl=en)

## 要約：Viewport Segments APIによる折りたたみデバイス対応

この記事は、Chrome for Developersのブログ記事で、折りたたみデバイス向けにViewport Segments APIを紹介しています。

**内容:**

*   **Viewport Segments APIの概要:** このAPIは、JavaScriptまたはCSSを使用して、折りたたみデバイスなどのハードウェアの分割線（折り目やヒンジなど）によって論理的に区切られたビューポート領域の位置と寸法にアクセスできます。これにより、開発者は、デュアルペインのUIを作成したり、コンテンツが折り目にまたがらないようにしたりするなど、折りたたみデバイスに最適化されたインターフェースを構築できます。
*   **Chrome 138で利用可能:** このAPIはChrome 138から利用できます。
*   **変更点:**
    *   JavaScriptの `segments` 属性は、 `window.visualViewport` から新しく追加された `window.viewport` オブジェクトに移動しました。
    *   デバイスが折りたたまれていない場合の `segments` プロパティの動作が、CSSの動作と一致するように変更されました。折りたたまれていない場合、 `segments` プロパティは、ビューポート全体を表す単一のセグメントの配列を含みます。
*   **デモ:** 折りたたみデバイスでのAPIの動作を確認できるデモが紹介されています。

記事は、Creative Commons Attribution 4.0 LicenseとApache 2.0 Licenseに基づいてライセンスされています。
