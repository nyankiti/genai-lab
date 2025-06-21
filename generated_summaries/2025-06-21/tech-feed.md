# Turso Cloud joins the Vercel Marketplace  - Vercel

[View on Vercel Blog](https://vercel.com/changelog/turso-cloud-joins-the-vercel-marketplace)

## Vercel Marketplace に Turso Cloud が登場 - 詳細要約

この記事は、Turso Cloud が Vercel Marketplace に統合されたことを発表しています。この統合により、Vercel プロジェクトに高速で分散型の SQLite データベースを簡単に導入できるようになりました。

**主な特徴:**

*   **シームレスな統合:** ワンクリックでのセットアップと統一された請求システムにより、Vercel との連携がスムーズに行えます。
*   **エッジホストの SQLite データベース:** 速度とグローバルな分散を目的としたエッジホストの SQLite データベースを提供します。
*   **開発者フレンドリーな体験:** Vercel CLI ワークフローを通じて簡単に設定できます。

記事は、Vercel Marketplace で Turso を始められることを推奨しています。

---
# HashMap Implementation to Count the Occurrences of Each Character in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920511305/0/baeldung~HashMap-Implementation-to-Count-the-Occurrences-of-Each-Character-in-Java)

このBaeldungの記事は、Javaで文字列中の各文字の出現回数をカウントする方法について解説しています。

**主な内容:**

*   **目的:** 文字列中の各文字の出現回数をカウントする一般的なタスクの効率的な実装方法を示す。
*   **HashMapの利用:** JavaのHashMapを使用して、各文字をキー、出現回数を値として格納することで、効率的にカウントを行う。
*   **実装方法:**
    *   **Forループ:** 文字列をchar配列に変換し、各文字に対してHashMapの`getOrDefault()`メソッドを使用してカウントを更新するシンプルな方法。
    *   **Java Streams:** Java Streams APIを使用して、より宣言的な方法でカウントを行う。`Collectors.groupingBy()`と`Collectors.counting()`を用いて文字をグループ化し、カウントする。
*   **ユニットテスト:** 両方の実装（forループとStreams）が正しく機能することを確認するためのJUnitテストの例。入力文字列 "test" に対して、各文字の出現回数（'t'が2回、'e'と's'がそれぞれ1回）が正しくカウントされることを検証。
*   **利点:** HashMapを利用することで、文字の出現回数を効率的に追跡し、テキスト処理やアルゴリズムの問題解決に役立てることができる。
*   **ソースコード:** GitHubで利用可能。

記事は、Azure Container Apps、Orkes Cloud、Mockito、Java Concurrency、Spring WebFlux、Java Streams、JSON処理、Apache HTTP Client、Maven、Spring、Spring Boot、Spring Security、Spring Data JPA、エンドツーエンドテスト(Playwright)などの他の関連トピックも紹介しています。

---
# Text-to-SQL Implementation Using Spring AI | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920511308/0/baeldung~TexttoSQL-Implementation-Using-Spring-AI)

## Spring AI を使用した Text-to-SQL 実装 | Baeldung 要約

本記事では、Spring AI を使用して Text-to-SQL チャットボットを実装する方法について解説しています。このチャットボットは、自然言語の質問を SQL クエリに変換し、データベースから情報を取得するものです。

**主な内容:**

1.  **概要:** 近年、自然言語インターフェースは、データ検索を容易にするためにますます普及しています。このチャットボットは、大規模言語モデル (LLM) を利用して、人間の言語をデータベースと結びつけます。ユーザーの自然言語の質問を SQL クエリに変換し、データベースに対して実行して情報を表示します。
2.  **プロジェクト設定:**
    *   **依存関係:** Spring AI および Anthropic の Claude モデルとの連携に必要な依存関係を追加します。
    *   **設定:** Anthropic の API キーとチャットモデルを `application.yaml` ファイルで設定します。
    *   **データベーススキーマ:** Flyway を使用して、MySQL データベースにウィザード管理データベーススキーマを作成します。
        *   `hogwarts_houses` テーブル: ホグワーツ寮に関する情報を格納します。
        *   `wizards` テーブル: ウィザードに関する情報を格納します。
        *   データ移行スクリプトを作成し、データベースを初期化します。
    *   **AI プロンプト:** LLM が正確な SQL クエリを生成するために、詳細なシステムプロンプトを定義します。プロンプトは、SQL クエリの生成に関するガイドラインを提供し、SQL インジェクションや DoS 攻撃を検出するように設計されています。
    *   **データベース権限:** 読み取り専用の MySQL ユーザーを作成し、必要なデータベーステーブルに対する SELECT 権限を付与します。
3.  **Text-to-SQL チャットボットの構築:**
    *   **チャットボットビーンの定義:** `PromptTemplate` および `ChatClient` ビーンを定義します。
    *   **サービスの実装:**
        *   `SqlGenerator` クラス: 自然言語の質問を SQL クエリに変換します。`ChatClient` を使用して LLM に質問を送信し、SELECT クエリであることを検証します。
        *   `SqlExecutor` クラス: 生成された SQL クエリをデータベースに対して実行し、結果を返します。
    *   **REST API の公開:** `/query` エンドポイントを公開し、自然言語の質問を受け取り、SQL クエリを生成し、データベースから結果を取得して、`QueryResponse` レコードでラップして返します。
4.  **チャットボットとの対話:** HTTPie CLI を使用して API エンドポイントを呼び出し、チャットボットと対話します。ログで生成された SQL クエリを確認します。
5.  **結論:** Spring AI を使用した Text-to-SQL チャットボットの実装について説明しました。AI およびデータベースの設定、チャットボットの構築、REST API の公開、およびチャットボットの検証について解説しました。

記事のコード例は GitHub で公開されています。

---
# Java Weekly, Issue 599 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920492891/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 599 要約

このJava Weekly、Issue 599は、2025年6月20日に更新され、JavaとSpring、その他様々なトピックに関する最新情報を提供しています。

**1. SpringとJava:**

*   **Java 25:** JDK 25では、Compact Object Headersが実験的機能から製品機能に統合され、Amazonによる大規模なテストでパフォーマンス向上が確認されました。
*   **IntelliJ IDEAへの移行:** CursorからIntelliJ IDEAへの移行に関する記事が紹介されています。
*   **JDK 25 ターゲットのJEP:** JEP 507 (Primitive Types in Patterns, instanceof, and switch)とJEP 470 (PEM Encodings of Cryptographic Objects)がJDK 25でプレビューされる予定です。
*   **その他の記事:** MongoDBにおけるJavaの並行処理ベストプラクティス、ReadyNowによるJavaのウォームアップ時間の改善、データ指向プログラミングの探求、Develocityによる継続的デリバリーとDORA目標の達成に関する記事が紹介されています。
*   **ウェビナーとプレゼンテーション:** Foojay Podcast #73 (JCon Report, Part 2)、FFM APIによるJavaとネイティブコードの相互接続、Daniel Garnier-Moiroux氏によるセキュリティ、AI、MCPなどに関するA Bootiful Podcastが紹介されています。
*   **アップデート:** Spring for Apache Kafka 3.3.7/3.2.10、Spring Authorization Server 1.5.1/1.4.4/1.3.7、Spring Web Services 4.0.15、Spring for Apache Pulsar 1.1.13/1.2.7、Hibernate Validator 9.0.1.Final、Spring Data 2025.0.1/2024.1.7/2024.0.13、Spring Framework 6.1.21/6.2.8 (CVE-2025-41234修正)、Spring Framework 7.0.0-M6、Spring Tools 4.31.0、Quarkus 3.24.0.CR1、Micronaut Core 4.9.3、Payara Platform Community 6.2025.6といった様々なライブラリやフレームワークの最新版がリリースされています。

**2. 技術と考察:**

*   **データベース最適化:** Jakarta EEアプリケーションにおけるデータベースレベルでのパフォーマンス改善に関するヒントが紹介されています。
*   **その他の記事:** Expert Generalists、Agentic Coding Recommendations、AI Agent Delegation、AppleによるSwiftへの主要エコシステムサービスの移行と40%のパフォーマンス向上、ITセキュリティ専門家の採用に関する考察、OIDC CIBAによるエージェント自律性と人間監督の橋渡しに関する記事が紹介されています。

**3. 今週のおすすめ (Pick of the Week):**

*   Survivor Biasに悩まされるビジネスアドバイスに関する記事。
