# Spring AI With Docker Model Runner | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921274106/0/baeldung~Spring-AI-With-Docker-Model-Runner)

## Spring AI with Docker Model Runner の要約

この記事は、Docker Model Runner を使用してローカルで大規模言語モデル（LLM）をデプロイし、Spring AI アプリケーションと統合する方法を解説しています。

**Docker Model Runner の概要:**

*   Docker Desktop 4.40 以降の Mac with Apple Silicon 向けに導入されたツールで、LLM のデプロイと管理を簡素化する。
*   複雑なセットアップ、高額なクラウド推論コスト、データプライバシーに関する懸念に対処する。
*   OpenAI 互換の API を提供し、Spring AI などのフレームワークとのシームレスな統合を可能にする。
*   主な特徴：
    *   簡素化されたモデルデプロイメント：Docker Hub の `ai` ネームスペースで標準 OCI アーティファクトとして提供。
    *   幅広いモデルサポート：Mistral、LLaMA、Phi-4 など、さまざまなプロバイダーの LLM をサポート。
    *   ローカル推論：クラウドベースの推論への依存をなくし、データプライバシーを強化。
    *   OpenAI 互換 API：既存の AI フレームワークとの容易な統合。

**環境設定と Spring AI アプリケーションとの統合:**

1.  **前提条件:**
    *   Docker Desktop 4.40 以降 (Mac with Apple Silicon)。
    *   Java 21 以降。
    *   Docker Model Runner と互換性のある LLM（LLaMA、Gemma 3 など）。
2.  **Maven 依存関係:**  `spring-boot-starter-web`, `spring-ai-openai-spring-boot-starter`, `spring-ai-spring-boot-testcontainers`, `junit-jupiter` を pom.xml に追加。
3.  **Docker Model Runner の有効化と構成:**
    *   特定の TCP ポートを使用して有効化: `docker desktop enable model-runner --tcp 12434`。
    *   Testcontainers を使用して有効化:  Testcontainers で `spring.ai.openai.base-url`, `spring.ai.openai.api-key`, `spring.ai.openai.chat.options.model` を設定。
4.  **Gemma 3 モデルのプルと確認:** `docker model pull ai/gemma3` と `docker model list` を使用。
5.  **Spring AI との統合:**
    *   `/chat` エンドポイントを持つコントローラーを作成し、Model Runner 上で実行されている LLM と対話。
    *   OpenAI クライアントを設定し、Model Runner のエンドポイントと使用するモデルを指定。
6.  **テスト:**  特定の TCP ポートまたは Testcontainers を使用して `/chat` エンドポイントをテスト。

**結論:**

Docker Model Runner は、GenAI アプリケーションを Docker エコシステム内で構築する開発者にとって、使いやすく、プライバシーに配慮し、費用対効果の高いローカル LLM 実行ソリューションを提供します。

---
# Copying Text to the Clipboard in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921273617/0/baeldung~Copying-Text-to-the-Clipboard-in-Java)

## Javaでクリップボードにテキストをコピーする方法 | Baeldung

**概要:**

この記事では、Javaでテキストをシステムクリップボードにコピーする方法について解説しています。GUIアプリケーションだけでなく、コンソールアプリケーションでも利用可能な方法であり、プラットフォームに依存しないAWT（Abstract Window Toolkit）を利用して実現します。

**詳細:**

1.  **AWT Toolkit:**
    *   AWTは、JavaでクロスプラットフォームのGUIアプリケーションを開発するためのAPIです。ネイティブOSのGUIをラップしているため、ネイティブユーザーインターフェースやクリップボードAPIなどのリソースにアクセスできます。
    *   AWTを使用することで、GUIエンジンを実行しなくても、コンソールプログラムを含むすべての種類のJavaアプリケーションでクリップボードへのテキストコピーを実現できます。

2.  **クリップボードへのコピー:**
    *   `copyToClipboard(String text)`メソッドを定義し、テキストをクリップボードにコピーします。
    *   `Toolkit.getDefaultToolkit()`は現在のプラットフォームのToolkitインスタンスを返します。
    *   `getSystemClipboard()`は、プラットフォーム共有のクリップボードのインスタンスを作成します。
    *   `StringSelection`は、プレーンテキストデータをシステムクリップボードにコピーしやすくします。
    *   `setContents()`メソッドは、コピーするテキストと`ClipboardOwner`を引数に取ります。`ClipboardOwner`は、クリップボードにコピーしたデータの所有権を追跡するためのインターフェースです。シンプルなコピー＆ペースト操作では、通常は所有権を追跡する必要がないため、nullを渡します。

3.  **クリップボードからの取得:**
    *   `copyFromClipboard()`メソッドを定義し、クリップボードからデータを取得します。
    *   システムClipboardのインスタンスを作成します。
    *   `cb.getContents(null)`で、クリップボードから生の文字列データを`Transferable`に取得します。
    *   `transferable.isDataFlavorSupported(DataFlavor.stringFlavor)`で、取得したデータが標準のStringとして使用できるかどうかをチェックします。
    *   `DataFlavor`クラスの`stringFlavor`と比較してチェックします。`DataFlavor`は、クリップボード内のデータに関するメタデータを提供します。例えば、画像データの場合は`DataFlavor.imageFlavor`を使用します。
    *   データがStringの場合、取得したデータをStringにキャストします。`getTransferData()`はObjectを返すため、適切な型にキャストする必要があります。
    *   クリップボードからのデータ取得時には例外処理を行う必要があります。

**結論:**

この記事では、Windows、macOS、Linuxで動作するJavaでクリップボードにテキストをコピーする方法について説明しています。GitHubでコードを確認できます。

---
# Pagination Support in Spring Boot GraphQL | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921273620/0/baeldung~Pagination-Support-in-Spring-Boot-GraphQL)

このブログ記事は、Spring BootアプリケーションでGraphQL APIのページネーションを実装する方法について解説しています。記事は、Azure Container AppsやOrkesといった関連技術にも言及しています。

**主な内容:**

1.  **はじめに:** GraphQL APIでのデータ効率的な処理のためにページネーションが重要であり、ページネーションの種類としてページベースとカーソルベースの2つを紹介しています。
2.  **プロジェクトの設定:** Spring Boot GraphQLとJPAの依存関係をpom.xmlに追加し、GraphQLとJPAを利用できる環境を整えます。
3.  **Bookエンティティとリポジトリの作成:** ページネーション対象のデータ（ここではBook）を表すエンティティクラスを作成し、PagingAndSortingRepositoryを拡張したリポジトリインターフェースを定義します。
4.  **ページベースのページネーションのGraphQLスキーマ定義:** ページネーションをサポートするためのGraphQLスキーマを定義します。Book型、BookPage型、Query型を使用して、データ構造とクエリを記述します。
5.  **ページベースのGraphQLクエリリゾルバの実装:** GraphQLスキーマと連携するクエリリゾルバを実装します。@QueryMappingアノテーションを使ってクエリを定義し、PageableとfindAll()メソッドを使ってページングされたデータを取得します。
6.  **BookPage DTOの作成:** GraphQLのレスポンスとスキーマが一致するように、BookPage DTOを作成します。DTOはSpring Dataのページング結果を受け取り、GraphQLレスポンスに必要なデータを格納します。
7.  **カーソルベースのページネーション:** 大規模データセットや無限スクロールに適したカーソルベースのページネーションについて説明します。

    *   **GraphQLスキーマの更新:** BookEdge、PageInfo、BookConnection型を追加して、カーソルベースのページネーションに対応したスキーマを定義します。
    *   **カーソルベースのGraphQLクエリリゾルバの実装:** Cursorベースのクエリを処理するリゾルバを実装します。カーソル、limitパラメータを受け取り、Repositoryのメソッドを使ってデータを取得します。
    *   **DTOとRepositoryの実装:** BookEdge、PageInfo、BookConnectionのDTOと、カーソルベースのクエリに対応したRepositoryのメソッドを実装します。
8.  **JUnitでのテスト:** ページネーションの実装が正しく動作することを確認するためのJUnitテストを作成します。

    *   **テストデータの準備:** 各テストの前にテストデータを初期化します。
    *   **ページベースのページネーションのテスト:** GraphQlTesterを使ってGraphQLエンドポイントをテストし、ページングされたデータの正確性を検証します。
    *   **カーソルベースのページネーションのテスト:** 最初のページのデータを取得し、カーソルを使用して次のページのデータを取得するテストを行います。
9.  **結論:** ページベースとカーソルベースのページネーションについてまとめ、どちらがどの状況に適しているかを説明しています。GitHubでソースコードが公開されています。
