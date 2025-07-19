# Introduction to Jimmer ORM | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921833603/0/baeldung~Introduction-to-Jimmer-ORM)

## Jimmer ORM入門：Baeldung記事の要約

このBaeldungの記事では、Jimmer ORMというフレームワークを紹介しています。Jimmerは、JPAの実装ではなく、HibernateのようなJPAの概念を参考にしながら、独自の設計思想を持つORMです。

**主な特徴:**

*   **エンティティ**: Jimmerのエンティティは、データベースのスキーマを表現することに特化しており、アノテーションではなく、実行時に必要な情報を指定します。
*   **DTOの使用**: データを読み書きする際には、DTO（Data Transfer Object）を使用します。これらのDTOは、データベースとのやり取りに必要なデータの形状を正確に定義します。DTOは手動で作成することも、Jimmer独自のDTO言語を使用してコンパイル時に生成することも可能です。
*   **Nullの扱い**: Jimmerでは、DTOに含まれていないプロパティはSQLに現れず、明示的に`null`に設定されたプロパティは、`null`としてSQLに反映されます。
*   **DTO言語**: Jimmerは、DTOの定義を簡素化するための専用言語を提供しています。この言語を使用すると、コンパイル時にDTOを生成できます。
*   **読み取り**: データの読み取り時も、DTOを使用して必要なフィールドを明示的に指定します。
*   **トランザクション管理**: Jimmerは、Spring Frameworkのトランザクション管理インフラストラクチャに依存しており、Springの`@Transactional`アノテーションや`TransactionTemplate`を使用できます。

**Jimmerの設計思想:**

Jimmerは、データベースとのやり取りをより柔軟にするために、実行時にすべての情報を指定する設計を採用しています。これにより、DTOを多用する必要があるものの、Jimmer独自のDTO言語を使用することでDTOの作成を効率化できます。

**まとめ:**

Jimmerは、JPAとは異なるアプローチでデータ操作を行うORMです。実行時に必要な情報を指定することで柔軟性を高めています。トランザクション管理はSpring Frameworkに依存しており、Springを使用しているプロジェクトにスムーズに統合できます。

---
# Convert JSON Object to JSON Array in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921829163/0/baeldung~Convert-JSON-Object-to-JSON-Array-in-Java)

## 記事要約: JavaでJSONオブジェクトをJSON配列に変換する方法

このチュートリアル記事では、JavaでJSONオブジェクトをJSON配列に変換する方法について解説しています。JSONは、データ交換、設定、API通信に広く使用される軽量な構造化フォーマットであり、Javaでは`org.json`、Jackson、Gsonなどのライブラリがよく利用されます。

**1. 変換の必要性と考慮事項:**

*   REST API、データパイプライン、設定ファイルとの連携において、JSONオブジェクトからJSON配列への変換は頻繁に必要となります。
*   変換を行う前に、JSONオブジェクトから必要なのが値だけなのか、キーと値の両方が必要なのか、変換後のJSON配列の利用目的（表示、送信、操作など）を考慮することが重要です。これにより、適切なライブラリと変換方法を選択できます。

**2. 3つの変換アプローチ:**

*   **org.jsonライブラリ:** シンプルで使いやすいライブラリで、多くのJavaプロジェクトに標準で含まれています。

    *   `convertValuesToArray()`: 値のみのJSON配列を生成（`jsonObject.toMap().values()`を利用）。
    *   `convertToEntryArray()`: キーと値のペアを個別のJSONオブジェクトとして含むJSON配列を生成（キーと値を"key"と"value"のフィールドに格納）。

    *   **テスト:** Junitによる検証が提供されており、`convertValuesToArray`で値が正しく配列に格納されること、`convertToEntryArray`でキーと値のペアが正しくJSONオブジェクトとして配列に格納されることを確認しています。
*   **Jacksonライブラリ:** JSONデータの処理に強力な機能を持つ多目的Javaライブラリです。

    *   `convertToArray()`: JSONObjectをJacksonの内部モデルに変換し、キーと値のペアを持つ`ArrayNode`を生成（JSONObjectをMapに変換し、`JsonNode`として扱った後、`ArrayNode`を作成）。

    *   **テスト:** キーと値のペアが、個別のキーと値のオブジェクトとして`ArrayNode`に格納されることを検証しています。
*   **Gsonライブラリ:** シンプルで軽量なJava JSONライブラリです。

    *   `convertToKeyValueArray()`: 各要素がキーと値のペアであるJsonArrayを作成（JSONObjectのキーをイテレートし、"key"と"value"を持つJsonObjectsを生成）。

    *   **テスト:** JSONObjectの各エントリがJsonArray内のキーと値のオブジェクトに変換されることを検証しています。

**3. まとめ:**

*   `org.json`は、値のみの変換とキーと値のペア変換の両方にシンプルなツールを提供します。
*   Jacksonは、複雑なデータモデルやJacksonベースの機能との統合に適しています。
*   Gsonは、Androidやマイクロサービス環境で軽量かつクリーンな方法を提供します。

それぞれの方法には、GitHubで公開されているサンプルコードが付属しています。アプリケーションの要件に応じて、最適な方法を選択することが推奨されています。

---
# Does Spring @Transactional Annotation Work on a Private Method? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921829166/0/baeldung~Does-Spring-Transactional-Annotation-Work-on-a-Private-Method)

このBaeldungの記事では、Springの `@Transactional` アノテーションがプライベートメソッドで機能するかどうかについて解説しています。

**1. 概要**

記事は、Springアプリケーションにおけるトランザクション管理の基盤である `@Transactional` アノテーションが、メソッドの可視性との関係でどのような動作をするかを解説しています。具体的には、プライベートメソッドに `@Transactional` を適用した場合の動作とその理由、そしてその問題に対する解決策を提示しています。

**2. `@Transactional` の仕組み**

*   `@Transactional` は、メソッドやクラスにトランザクションの境界を定義するために使用されます。
*   メソッドが呼び出されると、Springのトランザクション管理機能がトランザクションを開始し、コミットまたはロールバックを処理し、データベース接続などのリソースを管理します。
*   SpringはAOP (Aspect-Oriented Programming) フレームワークを使用して、メソッド呼び出しをインターセプトし、トランザクションの動作を織り込みます。
*   AOPでは、プロキシがターゲットオブジェクトをラップしてメソッドへのアクセスを制御し、トランザクション管理などの追加の動作を可能にします。

**3. プライベートメソッドでの `@Transactional` の動作**

*   デフォルトでは、`@Transactional` はプライベートメソッドでは機能しません。
*   SpringのAOPプロキシは、アクセス可能なメソッド、つまり通常はパブリックメソッドのみをインターセプトできます。
*   Spring 6.0からは、クラスベースのプロキシではプロテクトおよびパッケージ可視性のメソッドもサポートされるようになりました。
*   Javaでは、プライベートメソッドは継承できず、オーバーライドもできないため、プロキシはそれらを認識できません。そのため、トランザクション動作は無視されます。

**4. 実験と結果**

記事では、さまざまな可視性（public、private、package-private、protected）を持つメソッドに `@Transactional` を適用し、例外発生時のロールバック動作をテストしています。

*   **プライベートメソッド**: `@Transactional` が適用されていてもロールバックは行われません。
*   **パブリックメソッド、パッケージプライベートメソッド、プロテクトメソッド**: 例外発生時にロールバックが行われます（CGLIBプロキシを使用している場合）。

**5. 解決策**

プライベートメソッドで `@Transactional` を使用できない場合の解決策がいくつか提案されています。

*   **パブリックメソッドの使用**: ロジックをパブリックメソッドに移動し、プロキシが確実にインターセプトできるようにします。ただし、カプセル化が損なわれる可能性があるため、インターフェースの設計やパッケージプライベートメソッドの使用を検討します。
*   **AspectJ weaving の使用**: AspectJを使用すると、コンパイル時またはロード時にバイトコードにアスペクトを直接織り込むことで、プロキシの制限を回避できます。
*   **別のBeanへの抽出**: トランザクションロジックをパブリックメソッドを持つ別のSpring Beanに抽出し、元のサービスからそのBeanを呼び出します。

**6. まとめ**

記事は、`@Transactional` がプライベートメソッドで機能しない理由を説明し、その問題を解決するためのさまざまな方法を提示しています。プロキシベースのAOPの仕組みを理解し、適切な解決策を選択することで、Springアプリケーションで信頼性の高いトランザクションを確保することができます。

---
# Secure Kafka With SASL/PLAIN Authentication | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921829169/0/baeldung~Secure-Kafka-With-SASLPLAIN-Authentication)

このBaeldungの記事は、「SASL/PLAIN認証を使用したKafkaのセキュア化」について解説しています。

**要約:**

1.  **SASL/PLAIN認証の概要:** この記事では、KafkaサービスでSASL/PLAIN認証を実装する方法を解説しています。SASL（Simple Authentication and Security Layer）は、GSSAPI、OAuthBearer、SCRAM、PLAINなどの認証メカニズムを統合するためのフレームワークです。SASL/PLAIN認証は、平文で資格情報がネットワーク上に公開されるため、本番環境での使用は推奨されませんが、ローカル開発環境での利用には便利です。本番環境では、SASL/PLAINとSSL/TLSを組み合わせたSASL-SSLを使用することで、トラフィックを暗号化し、資格情報の安全性を高めることが推奨されています。

2.  **Docker環境での実装:** Docker環境でSASL/PLAIN認証をサポートするKafkaサービスを構築する手順を説明しています。具体的には、JAAS設定ファイルを使用してユーザー資格情報を設定し、KafkaとZooKeeperの両方のサービスをセキュアにする方法を解説しています。Docker Composeファイルを使用して、ZooKeeperとKafkaサービスを起動し、認証設定を適用します。

    *   **Kafka設定:** `kafka_server_jaas.conf`ファイルを使用して、adminとuser1のユーザー資格情報を定義します。
    *   **ZooKeeper設定:** `zookeeper_jaas.conf`ファイルを使用してZooKeeperの資格情報を設定し、`kafka_server_jaas.conf`ファイルにZooKeeperのクライアント資格情報も追加します。
    *   **Docker Compose:** Docker Composeファイルを使用して、ZooKeeperとKafkaサービスを起動し、SASL/PLAIN認証を有効にします。

3.  **Spring Kafkaクライアントの実装:** Spring Kafkaを使用してプロデューサーとコンシューマーサービスを実装し、SASL/PLAIN認証を設定する方法を説明しています。

    *   **依存関係:** Spring Kafkaの依存関係を追加します。
    *   **プロデューサー:** KafkaTemplateクラスを使用してメッセージを送信するプロデューサーを実装します。
    *   **コンシューマー:** @KafkaListenerアノテーションとConsumerRecordクラスを使用してメッセージを受信するコンシューマーを実装します。
    *   **Springアプリケーション設定:** `application.yml`ファイルでKafka関連のプロパティ（ブートストラップサーバー、グループID、デシリアライザーなど）を設定します。
    *   **クライアント認証設定:** `spring.kafka.properties`設定を使用して、SASL/PLAINの設定（SASLメカニズム、JAAS設定、セキュリティプロトコル）を提供します。

4.  **テスト:** Testcontainersフレームワークを使用して、Kafkaクライアントアプリケーションをテストする方法を説明しています。DockerComposeContainerを使用して、KafkaとZooKeeperのサービスを起動し、プロデューサーがメッセージを送信し、コンシューマーが正常に受信することを確認するテストケースを実装します。

5.  **まとめ:** SASL/PLAIN認証をDocker環境でKafkaサービスに設定し、Spring Kafkaを使用してプロデューサー/コンシューマーを実装し、Testcontainersを使用してテストする方法を解説しています。記事では、実際のコード例とGitHubへのリンクも提供しています。

---
# MongoDB互換のFerretDBにSpring Boot + Testcontainersでアクセスするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/862)

## MongoDB互換のFerretDBにSpring Boot + Testcontainersでアクセスするメモ - 要約

本記事は、MongoDB互換のOSSデータベースであるFerretDBに、Spring BootとSpring Data MongoDB、そしてTestcontainersを用いてアクセスする方法を解説しています。FerretDBは、MongoDBがSSPLライセンスを採用したのに対し、Apache 2.0ライセンスで提供されており、Tanzu for PostgreSQLでもサポートされています。

記事では、Spring Bootプロジェクトの雛形作成から始まり、シンプルなメッセージの保存・取得アプリケーションの実装を通じて、FerretDBへの接続方法を具体的に説明しています。Testcontainersを利用して、FerretDBをコンテナとして起動し、アプリケーションからアクセスする手順を詳細に示しています。

重要な点として、FerretDBへの切り替えは、アプリケーションのコードを変更することなく、Testcontainersの設定のみを変更することで実現できると述べています。具体的には、`MongoDBContainer`の代わりに`GenericContainer`を使用し、`DynamicPropertyRegistrar`を用いてMongoDBの接続情報を動的に登録するように変更しています。また、FerretDBがデフォルトで認証を有効にしているため、ユーザー名とパスワードを含めた`spring.data.mongodb.uri`を設定する必要があります。

記事の最後では、Testcontainersを使わずにFerretDBをスタンドアローンで起動し、アプリケーションからアクセスする方法も紹介しています。FerretDBをDockerで起動し、`spring.data.mongodb.uri`を設定してアプリケーションを実行することで、同様に動作することを確認しています。

結論として、FerretDBはMongoDBの代替として、ライセンスの問題を回避しつつ、MongoDB互換の機能を利用できる選択肢として提案されています。
