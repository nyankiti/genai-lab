# Zero-configuration support for Nitro - Vercel

[View on Vercel Blog](https://vercel.com/changelog/zero-configuration-support-for-nitro)

## VercelのNitroサポートに関する要約

Vercelは、Webサーバー構築のためのバックエンドツールキットであるNitroアプリケーションのゼロコンフィギュレーションサポートを開始しました。Nitroは、Nuxt.js、TanStack Start、SolidStartなどのフレームワークで利用されています。Vercel上でNitroをデプロイするか、NitroのVercelドキュメントを参照できます。

---
# New usage dashboard for Pro customers - Vercel

[View on Vercel Blog](https://vercel.com/changelog/new-usage-dashboard-for-pro-customers)

## Vercel Pro向け新利用状況ダッシュボードの詳細な要約

Vercelは、Proプランの顧客向けに、**新しい利用状況ダッシュボード**を公開しました。このダッシュボードは、これまでEnterpriseプランの顧客のみが利用可能だった機能です。

このダッシュボードは、**改善されたフィルタリング、詳細な内訳、そしてエクスポートオプション**を備えており、Proチームは製品とプロジェクトごとの利用状況とコストをより深く理解できるようになります。

具体的には、以下の点で利用状況を分析できます。

*   **製品別**: 各製品の利用状況をすばやく特定し、スパイクを掘り下げて、単一または一連の製品のコストを追跡できます。
*   **チームとプロジェクト別**: コストを把握し、すべてのアプリまたは特定のアプリにおけるチームの活動を監視できます。
*   **CSVエクスポート**: コスト可視化ツールやスプレッドシートへの統合を通じて、外部での詳細な分析が可能です。

Proユーザーは、今すぐ新しいダッシュボードを試すことができます。

---
# CVE-2025-49826 - Vercel

[View on Vercel Blog](https://vercel.com/changelog/cve-2025-49826)

## CVE-2025-49826 - Vercel に関する詳細な要約

この要約は、Next.js に影響を与える脆弱性（CVE-2025-49826）について解説しています。

**要点:**

*   **脆弱性の概要:** Next.js のバージョン 15.1.0 から 15.1.8 にかけて影響があった、キャッシュポイズニングのバグです。これにより、サービス拒否 (DoS) 状態が発生する可能性があります。
*   **影響範囲:**
    *   Vercel でホストされている顧客には影響しません。
    *   特定の条件下で、静的ページに対して HTTP 204 レスポンスがキャッシュされ、そのページにアクセスしようとするすべてのユーザーに同じ 204 レスポンスが提供される可能性があります。
    *   **脆弱性の悪用条件:**
        *   影響を受ける Next.js バージョンの使用
        *   ISR（Incremental Static Regeneration）を用いたキャッシュ再検証を使用しているルート（next start または standalone モード）
        *   SSR（Server-Side Rendering）を使用し、204 レスポンスをキャッシュするように設定された CDN を利用しているルート
*   **解決策:**
    *   204 レスポンスが設定される原因となっていた問題のあるコードパスを削除しました。
    *   Next.js レスポンスキャッシュを共有レスポンスオブジェクトに依存しないようにし、キャッシュポイズニングにつながる可能性のある競合状態を解消しました。
*   **クレジット:** 責任ある開示を行った Allam Rachid (zhero) と Allam Yasser (inzo_) に感謝します。
*   **参照:** GHSA-67rr-84xm-4c7r が関連する情報源です。

---
# CVE-2025-49005 - Vercel

[View on Vercel Blog](https://vercel.com/changelog/cve-2025-49005)

## CVE-2025-49005 - Vercel の詳細な要約

この脆弱性は、Next.js App Router 15.3.0 から 15.3.3 未満 / Vercel CLI 41.4.1–42.2.0 に影響を与えるキャッシュポイズニングの脆弱性です。

**概要:**

*   **問題:** 特定の条件下で、HTMLコンテンツのリクエストがReact Server Component (RSC) ペイロードを返してしまう。
*   **影響:**
    *   Vercel上では、ブラウザキャッシュのみに影響し、CDNへの影響は限定的。
    *   自己ホスト環境では、CDNがRSCとHTMLをキャッシュキーで適切に区別しない場合、キャッシュポイズニングが発生する可能性。
    *   具体的には、App Router、ミドルウェアリダイレクト、Varyヘッダーの欠如が組み合わさった場合に、以下の現象が発生する可能性。
        *   HTMLの代わりにRSCペイロードが提供される。
        *   ブラウザまたはCDNレイヤーでこれらのレスポンスがキャッシュされる。
        *   クライアント側で壊れたり、誤ったコンテンツが表示される。
*   **原因:** ミドルウェアのリライトまたはリダイレクトによって、フレームワークが追加するキャッシュバスターパラメータが削除され、キャッシュキーが正しく区別されないこと。
*   **解決策:** Next.js 15.3.3で修正。Varyヘッダーを正しく設定し、コンテンツタイプを区別する。
    *   **Vercelを利用している場合:** 影響を受けるCLIバージョンを使用していた場合は、再デプロイが必要。
*   **回避策:**
    *   RSCレスポンスにVaryヘッダーを手動で追加する (Vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch)。
    *   ミドルウェアリダイレクトの宛先に、ユニークなキャッシュバスター検索パラメータを適用する。
*   **クレジット:** 迅速な報告とデバッグ支援を行ったVercelの内部チームと影響を受けた顧客に感謝。
*   **参考資料:** Next.js v15.3.3での修正、GitHub Issue #79346 GHSA-r2fc-ccr8-96c4。

---
# Java Weekly, Issue 601 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921102938/0/baeldung)

## Java Weekly, Issue 601 の要約

2025年6月20日更新のJava Weekly Issue 601の内容は以下の通りです。

**1. SpringとJava**

*   **Jakarta EE 11 リリース:** Jakarta EEワーキンググループがJakarta EE 11をリリース。新仕様1つと、16の仕様更新、TCKの近代化が含まれる。
*   **Hibernate ORM 7 on Quarkus:** QuarkusとHibernate 7の組み合わせによるパフォーマンス向上と新機能（findMultiple()、getMultiple()等）の紹介。
*   **その他:**
    *   Quarkusを使用したセンチメント分析APIの構築
    *   Optimizer HubによるJavaアプリケーションの起動とコンパイル速度の向上
    *   JDK 25のJEP 514: Ahead-of-Time Command-Line Ergonomics
    *   Module Import Declarationsの改善
    *   本番環境でのテストに関する記事

*   **ウェビナーとプレゼンテーション:**
    *   Javaアプリケーションの最大限の活用
    *   Project LeydenのAOT（Ahead-of-Time）
    *   DevOpsとAIに関するポッドキャスト
    *   Javaの言語ルネサンス
    *   AI、ChatGPT、LLM、ML、RAG、MCP、GenAIなどに関するポッドキャスト

*   **アップグレード情報:**
    *   Spring for GraphQL 1.3.6と1.4.1
    *   MicroProfile 7.1
    *   Spring Cloud 2023.0.6 (aka Leyton)
    *   Quarkus 3.24.1
    *   Maven 4.0.0-rc-4
    *   Zuul v3.1.3

**2. 技術的な考察と考察**

*   **Growing Expert Generalists:** 現代のチームでの働き方、AIの活用、採用とキャリア構築に関する考察。
*   **その他:**
    *   2025 JVM Language Summit
    *   MCP Authorizationのステップバイステップ解説 (パート2)

**3. 今週のおすすめ**

*   **The Best Essey:** Paul Grahamによるエッセイ。

---
# Kodee’s Kotlin Roundup: A Carefully Curated June Edition | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/07/kodees-kotlin-roundup-june-edition/)

## KodeeのKotlin Roundup: June Edition 要約

これは、JetBrainsのKotlinブログのKodeeによる、Kotlinエコシステムの6月版のまとめ記事です。

**主な内容:**

*   **Kotlin 2.2.0 リリース:** 新機能、ツール更新、プラットフォーム全体のパフォーマンス向上、バグ修正を含む。
*   **KotlinConf 2025の話題:** 講演動画と写真が公開され、Kotlinの最新情報にアクセス可能に。
*   **AIを活用したKotlin開発:** KotlinをAIプロジェクトで利用するためのドキュメントページが公開され、KotlinベースのAIフレームワークKoogを紹介。
*   **サーバーサイド開発におけるKotlin:** Ktor 3.2.0リリース、依存性注入やHTMXのための新しいモジュール、Gradleバージョンカタログのサポート、自動設定のデシリアライズなど。
*   **Compose Multiplatform:** Compose Hot Reloadの実装方法がKotlinConfで紹介。
*   **Kotlin Multiplatform (KMP)に関する質問への回答:** KotlinConf 2025での議論でカバーされなかった、KMPに関するよくある質問への回答がブログ記事で公開。
*   **LinkedIn Learningでの新しいKotlin Multiplatformコース:** Compose MultiplatformとネイティブUI間のアーキテクチャ選択、Ktorを使用した共有ネットワーキングレイヤーの作成、SQLDelightを使用したデータの永続化などを学ぶ。
*   **Gradle 9.0.0-rc-1:** Kotlin 2.1へのアップデート、DSLの新機能など。
*   **その他:** KotlinConf 2025での開発者の年収を推測するゲーム、YouTubeハイライト、Kotlin NotebookのUI改善、McDonald'sでのKMP活用事例、NESエミュレータ作成、クリーンアーキテクチャ、iOS向けCompose Multiplatformの安定化など。

Kodeeは、Kotlinエコシステムの最新情報を収集し、次回のまとめ記事のために情報を収集し続けます。

---
# Case Study: Why Kakao Pay Chose Kotlin for Backend Development | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/07/case-study-why-kakao-pay-chose-kotlin-for-backend-development/)

## Kakao Pay がバックエンド開発に Kotlin を採用した理由

この記事は、Kakao Pay のバックエンド開発者である katfun.joy 氏による投稿の翻訳です。Kakao Pay では、保険サービスを含む様々なサービスでバックエンド開発に Kotlin と Spring を採用しています。Kotlin が保険業界の複雑な要件に対応し、サービスの安定した開発と運用を可能にしている様子が紹介されています。

**概要:**

Katfun.joy 氏は、Kotlin を使用したバックエンド開発の経験から、その魅力的な側面を4つに焦点を当てて紹介しています。

1.  **値の検証を伴うオブジェクトの作成:** Kotlin の value class、private constructor、`invoke`演算子、`@JsonCreator`アノテーションなどの機能を組み合わせることで、データの整合性を保証し、安定したサービスを構築することができます。具体的には、自動車ナンバーのバリデーションを行う VO (Value Object) を例に、インスタンス生成時の検証方法、コンストラクタの制限、シリアライズ/デシリアライズ時の対応などを解説しています。
2.  **null 安全性の確保:** Kotlin の不変性（immutability）とスマートキャストを活用することで、null チェック後の値が確実に null でないことを保証し、安全なコードを実現しています。`requireNotNull` 関数を使用した例を挙げ、null チェックと同時に型推論が行われ、コードの可読性と安全性を高める様子を説明しています。
3.  **拡張関数によるユーティリティライブラリの作成:** 拡張関数とオブジェクト宣言を組み合わせることで、保険サービスの開発で頻繁に使用されるユーティリティコード（文字列操作など）をライブラリ化し、コードの重複を削減、可読性を向上させています。`maskingName` 関数を例に、Kotlinオブジェクト宣言を活用してシングルトンとして実装することで、リソース管理の効率化を図っています。
4.  **データクラスによるシンプルで効率的な単体テスト:** データクラスの `copy()` 関数を利用することで、単体テストの可読性を向上させ、テスト対象を明確にすることができます。UserInformation クラスの年齢検証テストを例に、`copy()` を使用することで、テストコードの重複を減らし、どの値が例外の原因となっているかを明確に表示しています。

**全体的な効果:**

Katfun.joy 氏は、Kotlin を使用することで、サービスの安定性、可読性、スケーラビリティを向上させることができたと述べています。Kotlin のこれらの機能は、安定したバックエンドシステムの構築と運用に貢献すると結論付けています。
