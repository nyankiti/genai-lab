# Eve 氏への事実誤認についての謝罪とお詫び | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-04-01/dont-be-eveil.html)

## Eve 氏への事実誤認についての謝罪とお詫び：詳細な要約

この記事は、著者の Jxck 氏が、ネットワークセキュリティ解説における登場人物「Eve」の役割について、誤った認識に基づいた記述をしていたことを謝罪するものです。

**背景:**

*   ネットワークセキュリティの説明では、通信の主体を Alice と Bob という登場人物で例えるのが一般的です。
*   その通信を盗み聞きする存在として「Eve」が登場します。
*   著者はこれまで、中間者攻撃（Person in the Middle）に起因するあらゆる攻撃を、Eve によるものとして解説していました。

**事実誤認:**

*   著者は、Bruce Schneier 著の書籍「暗号技術大全」で、Eve の役割が「傍受者、盗聴のような受動的攻撃を行う」であると定義されていることを知りました。
*   一方、「邪悪な能動的攻撃者、改変や妨害など能動的攻撃を行う」のは、Mallory という別の人物であると判明しました。
*   つまり、著者がこれまで Eve の仕業としていた「ページ改ざん」、「Cookie 窃取」、「フィッシング攻撃」などの能動的攻撃は、実際には Mallory の役割だったのです。

**謝罪と今後の対応:**

*   著者は、これまで全ての罪を Eve に着せてきたことを深く謝罪し、今後は「雰囲気での引用」をしないよう注意すると述べています。
*   しかし、著者の原稿では、中間者攻撃が「成立する状態自体が問題」であり、攻撃者の意図によって Eve と Mallory の役割が変化するため、「Eve と Mallory 同一人物説」を採用することで、過去の記述を正当化するとしています。
*   将来的には、Eve や Mallory という名前ではなく、"Attacker" や "Eavesdropper" など、より一般的な役名に置き換えることも検討するとしています。

**結論:**

この記事は、著者のセキュリティに関する知識の誤りを認め、謝罪するとともに、今後の対応について説明するものです。また、最後に Charlie の役割についても言及し、今後も4人の登場人物の活躍に期待してほしいと結んでいます。全体として、ユーモラスな語り口で、技術的な誤りを認めつつも、今後の情報発信に対する姿勢を示す内容となっています。

---
# PatroniをサポートしたTanzu for Postgres on Kubernetes 4.0をインストールしてSpring Bootアプリからアクセスするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/844)

## PatroniをサポートしたTanzu for Postgres on Kubernetes 4.0をインストールしてSpring Bootアプリからアクセスするメモ - 要約

このブログ記事は、Kubernetes上で動作するTanzu for Postgresの最新バージョン4.0をインストールし、Spring Bootアプリケーションからアクセスする方法を詳細に解説しています。特に、バージョン4.0からHigh Availability (HA) の実現にPatroniが採用された点に焦点を当て、その設定と動作検証を行っています。

**主な内容:**

1.  **Tanzu for Postgres on Kubernetes 4.0の概要:**
    *   HA構成にPatroniを使用 (以前はpg\_auto\_failover)
    *   Docker Registryからのアクセス、Helm Chartのリロケート
2.  **インストール手順:**
    *   Broadcom SupportからDocker Registryのアクセストークンを取得
    *   Helm Chartとコンテナイメージをghcr.ioなどのコンテナレジストリにリロケート
    *   Postgres Operatorをインストール (前提条件としてcert-managerが必要)
    *   Postgresインスタンスを作成
3.  **Postgresインスタンスへのアクセス:**
    *   kubectl exec でpsqlにアクセスし、初期状態や利用可能なExtensionを確認
    *   Patroniのクラスタ情報を確認し、Read Replicaの数を変更
    *   クラスタ外部からpsqlでRead-Write/Read-Onlyエンドポイントにアクセス
4.  **Spring Bootアプリとの連携:**
    *   サンプルアプリ (room-reservation) をデプロイ
    *   Service Binding Specification for Kubernetes (Spring Cloud Bindings)を利用
    *   read-writeなエンドポイントへの接続を確認
5.  **高負荷テストとフェイルオーバー検証:**
    *   vegetaでAPIに負荷をかけ、Patroniクラスタをローリング再起動
    *   Postgresのローリング再起動時に発生するアプリケーションのエラーを確認
6.  **Read Replicaへのルーティング設定:**
    *   アプリのダウンタイムを短縮するため、参照系のアクセスをRead Replicaにルーティング
    *   Spring Cloud Bindingを利用しつつ、`read-replica.datasource.*` プロパティを設定
    *   再度負荷テストを実施し、エラーの減少を確認

**ポイント:**

*   Tanzu for Postgres 4.0は、Patroniの採用により、より堅牢なHA構成を実現
*   コンテナレジストリへのリロケートにより、アクセストークンのローテーションの手間を軽減
*   Service Bindingによる設定自動化で、アプリケーションとデータベースの連携が容易
*   Read Replicaへのルーティングにより、フェイルオーバー時のダウンタイムを大幅に短縮

**結論:**

PatroniをサポートしたTanzu for Postgres on Kubernetes 4.0は、アプリケーション側の設定次第で、Postgresのアップデート時におけるダウンタイムを最小限に抑えることが可能であることが示唆されています。

---
# llama.cppでGemma 3 27Bを動かしてSpring AIからアクセスする (MCP連携あり) - IK.AM

[View on IK.AM](https://ik.am/entries/843)

## 記事の要約：llama.cppでGemma 3 27Bを動かしSpring AIからアクセス（MCP連携あり）

このブログ記事では、ローカル環境でllama.cppを用いてGoogleが公開したGemma 3 27Bモデルを動作させ、Spring AIフレームワークを通じてこのモデルにアクセスする方法を解説しています。具体的には、以下の内容を実践し、その手順を詳細に説明しています。

1.  **llama.cppのインストールとOpenAI APIサーバーの起動:**

    *   `brew install llama.cpp` コマンドでllama.cppをインストールし、必要なGGUFフォーマットのモデルファイルをダウンロードします。
    *   `llama-server` コマンドを用いて、Gemma 3 27Bモデルをロードし、OpenAI API互換のエンドポイント（localhost:8000）を起動します。`--jinja` オプションにより、Tool Calling機能が有効になります。

2.  **Spring AIによるアクセス:**

    *   Spring AIを使用して、llama.cppで起動したAPIサーバーにアクセスするサンプルアプリケーションを作成します。
    *   `spring.ai.openai.base-url` プロパティにllama.cppサーバーのURLを設定し、Spring AIのChatClientを通じてプロンプトを送信し、レスポンスを取得します。
    *   GETリクエストとPOSTリクエストの両方でプロンプトを送信し、Server Sent Events (SSE) でストリーミング応答を処理する方法を示します。

3.  **Tool Callingの検証:**

    *   LLMが通常知らない情報（現在時刻など）を取得するために、Spring AIのTool Calling機能を活用します。
    *   `DateTimeTools` クラスで現在時刻を取得するツールを定義し、`tools()` メソッドを使ってChatClientに登録します。
    *   LLMからのFunction Callingリクエストを受け、ツールを実行し、その結果をLLMにフィードバックすることで、正確な回答を得るプロセスを解説します。

4.  **Model Context Protocol (MCP) 連携:**

    *   Spring AI 1.0.0.M6で導入されたMCP連携を試し、LLMでは得られない情報を既存のMCPサーバーから取得します。
    *   Fetch MCP Serverを使用し、LLMに足りない情報をインターネットから取得させます。
    *   `mcp-servers-config.json` でMCPサーバーの設定を定義し、`spring.ai.mcp.client.stdio.servers-configuration` プロパティで設定ファイルを指定します。
    *   LLMがMCPサーバーに問い合わせを行い、その結果を元に回答を生成する様子を、アクセスログと共に詳細に説明します。

**結論:**

この記事は、llama.cppとSpring AIを組み合わせることで、ローカル環境で大規模言語モデルを効率的に利用し、Tool CallingやMCP連携によってLLMの知識を拡張する方法を具体的に示しています。プライベートLLMであっても、これらの機能を活用することで、様々な場面で実用的なアプリケーションを開発できる可能性を示唆しています。
