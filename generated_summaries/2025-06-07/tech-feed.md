# Claude Code and Cursor Agent no longer require a team seat - Vercel

[View on Vercel Blog](https://vercel.com/changelog/claude-code-and-cursor-agent-no-longer-require-a-team-seat)

Vercelは、Claude CodeとCursor Agentによって作成されたGitコミットがVercel上でデプロイをトリガーできるようにビルドロジックを更新しました。これにより、チームシートは不要となりました。もし、これらのエージェントがVercel上でのビルドで問題に遭遇した場合は、Vercelまで連絡してください。

---
# Guide to Java Diff Utils | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919793519/0/baeldung~Guide-to-Java-Diff-Utils)

## Java Diff Utils ガイド 要約

このガイドは、Javaアプリケーションでテキストデータの差分を計算するための軽量で強力なライブラリであるJava Diff Utilsについて解説しています。

**1. Java Diff Utils の概要と主な利点**

*   Java Diff Utilsは、テキストデータの差分を計算するためのライブラリです。
*   行単位と文字単位の比較をサポートし、統一された差分出力を生成します。
*   バージョン管理システムやパッチの適用に利用されます。
*   主な利点：
    *   シンプルさ：クリーンで直感的なAPIを提供。
    *   拡張性：Spring Bootサービスやコントローラーと容易に統合。
    *   クロスプラットフォーム：JavaをサポートするあらゆるOSで動作。
    *   オープンソース：Apacheライセンスで利用可能。

**2. 設定**

*   Mavenを使用し、Java Diff Utilsの依存関係をpom.xmlに追加します。
*   これにより、コンパイル時と実行時に必要なバージョンが利用可能になります。
*   DiffUtils, Patch, UnifiedDiffUtilsなどのコアクラスを直接使用できます。

**3. Javaでの使用例**

*   **TextComparatorUtil**：2つの文字列リストを比較し、差分を表すパッチを生成するユーティリティクラス。
*   **UnifiedDiffGeneratorUtil**：2つの文字列リスト間の統一された差分（標準パッチ形式）を生成します。
*   **PatchUtil**：パッチを生成し、元の内容に適用して更新します。
*   **SideBySideViewUtil**：2つの文字列リストの差分を読みやすい形式で表示します。

**4. まとめ**

Java Diff Utilsは、Javaアプリケーションでテキストデータの比較を行うための、柔軟でオープンソースのソリューションです。行単位の差分から、統一された差分の生成、パッチ適用機能まで、バージョン管理や変更追跡システムを構築するための基盤となるツールです。

---
# Resolving Spring JDBC “IncorrectResultSetColumnCountException: Incorrect column count” | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919793522/0/baeldung~Resolving-Spring-JDBC-IncorrectResultSetColumnCountException-Incorrect-column-count)

このBaeldungの記事は、Spring JDBCを使用する際に発生する「IncorrectResultSetColumnCountException: Incorrect column count」という例外の解決方法について解説しています。

**1. 問題の概要**

記事は、SpringのJdbcTemplateを使ってデータベースからデータを取得し、POJO（プレーン・オールド・Java・オブジェクト）にマッピングする際に、queryForList()メソッドを誤って使用するとIncorrectResultSetColumnCountExceptionが発生する原因と、その解決策を説明しています。

**2. 問題の再現と原因**

*   STUDENT\_TBLというテーブルとStudentというPOJOクラスを例に、queryForList("SELECT \* FROM STUDENT\_TBL", Student.class)のように記述すると例外が発生することを示しています。
*   queryForList()メソッドの2つのバリエーション（queryForList(String sql, Class<T> elementType)とqueryForList(String sql)）について説明し、前者は単一の列（カラム）をListで取得するために使用され、複数列の問い合わせには適していないため、Student.classのようなクラスを渡すと例外が発生すると説明しています。

**3. 解決策：RowMapperの使用**

*   queryForList()の代わりに、query()メソッドとRowMapperインターフェースを使用することが推奨されています。
*   特に、BeanPropertyRowMapperという便利なクラスを紹介し、データベースの列名とJavaクラスのプロパティ名が一致する場合に、手軽にマッピングできることを示しています。
*   BeanPropertyRowMapperを使うことで、各データベースの行をStudentオブジェクトにマップし、List<Student>として結果を取得する方法を提示しています。

**4. まとめ**

記事は、queryForList()メソッドの誤用によるIncorrectResultSetColumnCountExceptionの問題を理解し、RowMapper（特にBeanPropertyRowMapper）を活用して、データベースの結果をPOJOに正しくマッピングする方法を解説しています。

---
# What's happening in Chrome Extensions, June 2025  |  Blog  |  Chrome for DevelopersXGitHubBlueskyHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/extension-news-june-2025?hl=en)

## Chrome拡張機能の最新情報（2025年6月）

このブログ記事では、2025年6月6日現在のChrome拡張機能とChrome Web Storeに関する最新情報が紹介されています。

**ハイライト:**

*   **Google I/O:** Chrome拡張機能とChrome Web Storeの最新情報について、HafsahとDavidが概要を説明。
    *   「Gemini in your browser」と題し、GeminiとChrome拡張機能の組み合わせによる可能性をSebastianが解説。
    *   Thomasによる「Practical built-in AI with Gemini Nano in Chrome」など、関連する講演のプレイリストが公開。
    *   ベンガルールとベルリンで開催されるイベントへの参加を呼びかけ。
*   **userScripts.executeメソッド:** User Scripts APIが、特定のページで実行するユーザー スクリプトを登録できるように進化。
    *   `userScripts.execute()`メソッドにより、事前のスクリプト登録なしで、任意のタイミングでユーザー スクリプトを実行可能に。
    *   今後の変更も予定 (Upcoming Features参照)。
*   **レビューのキャンセル:** Chrome Web Storeに拡張機能を提出した後で修正が必要になった場合に、保留中の提出をキャンセルして、新しいものを即座に提出できるようになりました。
*   **検証済みのCRXアップロード:** Chrome Web Storeへのアップロードに使用する秘密鍵を生成できるようになりました。
    *   開発者ダッシュボードで対応する公開鍵を提供することで、秘密鍵で署名されていないアップロードを拒否し、セキュリティを強化。
    *   詳細は「Chrome Web Storeでの検証済みのアップロード」を参照。
*   **テストアカウントの認証情報:** 開発者ダッシュボードでテストの手順を記載できるようになりました。
    *   アカウントや有料コンテンツを必要とする拡張機能の場合、レビューチームに認証情報を提供することが可能に。
    *   フィーチャーバッジの候補として評価しやすくなるため、必要な場合は含めることを推奨。
*   **ポリシーの更新:** Chrome Web Storeのポリシーが更新され、一般的な更新とアフィリエイト広告ポリシーの変更が含まれます。詳細はプログラムポリシーページを参照。
*   **廃止予定:** `--load-extension`フラグはChrome 137で廃止予定。
    *   不正なソフトウェアの読み込みに悪用されていたため。
    *   Puppeteerの拡張機能読み込み機能が改善され、他のツールやテストライブラリとの連携も進んでいます。
*   **今後の機能:**
    *   User Scripts APIの有効化に関する新しいトグルが導入される予定。詳細は「Enabling chrome.userScripts in changing」を参照。
*   **コミュニティの更新:**
    *   WECG (W3C WebExtensions Community Group)の3月のミートアップがベルリンで開催され、今後のプラットフォームの追加や、ブラウザ間での拡張機能の一貫性について話し合われました。議事録はこちらから。
    *   Svelte LondonでOliver Turner氏が拡張機能開発の経験について講演。
    *   「Extensions are neat」シリーズで、様々な種類の拡張機能が紹介された新しいエピソードが公開。
    *   Oliver氏によるデモゲーム「Whack-a-mole」の制作方法に関する動画も公開。
    *   Chromeの実験的な新しい拡張機能メニューと、それと同時にリリースされる新しいAPIをOliver氏が紹介。

記事は、クリエイティブ・コモンズ表示4.0ライセンス、コードサンプルはApache 2.0ライセンスに基づいて提供されています。
