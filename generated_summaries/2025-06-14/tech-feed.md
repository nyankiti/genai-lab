# Transactional Messaging for Microservices Using Eventuate Tram | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920173283/0/baeldung~Transactional-Messaging-for-Microservices-Using-Eventuate-Tram)

## Eventuate Tram を使用したマイクロサービスのトランザクションメッセージング | Baeldung 要約

このチュートリアル記事では、マイクロサービスにおけるトランザクションメッセージングの課題とその解決策について解説しています。

**1. 問題点:**

*   データベース操作とメッセージングの整合性の問題：データベースへのデータの保存とメッセージブローカーへのメッセージの送信を単一のトランザクションで行う必要性。
*   従来の解決策の問題点：`@Transactional`アノテーションを使用すると、コミット前にメッセージが送信されるリスクや、コミット失敗時にメッセージが送信されないリスクが発生し、データの不整合を引き起こす可能性がある。

**2. 解決策：トランザクションアウトボックスパターン:**

*   アウトボックスパターンの概要：データベースのトランザクション内（データベース変更と同一トランザクション）でメッセージを特別なテーブル（アウトボックス）に保存し、別のプロセスがアウトボックスを読み取り、メッセージブローカーにメッセージを公開する。
*   利点："少なくとも1回"の配信を保証し、重複を避けることよりも信頼性を優先する。

**3. Eventuate Tram の活用:**

*   Eventuate Tram の役割：CQRS、イベントソーシング、トランザクションサガなどのマイクロサービスパターンをサポートする Java プラットフォームであり、トランザクションアウトボックスパターンとイベント公開を通じてサービス間の信頼性の高い通信を実現する。
*   Eventuate Tram の実装：`eventuate-tram-spring-jdbc-kafka`と`eventuate-tram-spring-events`の依存関係を追加し、設定クラスをインポートし、`DomainEvent`インターフェースを実装したイベントを作成し、`DomainEventPublisher`を使用してメッセージを公開する。
*   Eventuate CDC Service の役割：アウトボックステーブルの変更を監視し、メッセージブローカーにイベントとして公開するコンポーネント。Apache Kafka、ActiveMQ、RabbitMQ、Redis などのメッセージブローカーをサポートし、MySQL および Postgres のトランザクションログテーリング、または JDBC 互換データベースのポーリングによる変更検出をサポートする。

**4. 実装例:**

*   記事のコメント管理を例に、Eventuate Tram を利用して、データベースへの Comment エンティティの保存と Kafka への CommentAddedEvent の公開を、トランザクション内で確実に行う方法を示す。
*   Eventuate CDC Service を実行して、アウトボックステーブルのエントリが公開済みとしてマークされることを確認。

**5. 結論:**

*   トランザクションメッセージングの複雑さを探求し、データベース操作とドメインイベントの公開を原子的に実行するための課題と、トランザクションアウトボックスパターンがそれらをどのように解決するかを説明。
*   Eventuate Tram フレームワークと Eventuate CDC Service を使用して、最終的な整合性を実現し、システム内で「少なくとも1回」の配信を保証する方法を説明。

記事は、GitHub で公開されているコードへのリンクも提供しています。

---
# How to Resolve “Could Not Autowire org.springframework.mail.javamail.JavaMailSender” | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920173286/0/baeldung~How-to-Resolve-Could-Not-Autowire-orgspringframeworkmailjavamailJavaMailSender)

この記事は、Spring Bootでメール機能を実装する際に発生する一般的なエラー「Could not autowire org.springframework.mail.javamail.JavaMailSender」を解決する方法について解説しています。

**1. エラーの理解:**
このエラーは、Springがメール送信を抽象化するためのインターフェースである`JavaMailSender`の依存関係を解決できない場合に発生します。Springは、 `@Autowired` アノテーションやコンストラクタインジェクションを通じて必要な場所に`JavaMailSender`のインスタンスを注入しようとしますが、見つからない場合にエラーとなります。

**2. 原因:**
このエラーの主な原因は以下の通りです。

*   **依存関係の不足:** `spring-boot-starter-mail`依存関係がプロジェクトに含まれていない場合、Springは`JavaMailSender`のBeanを構成しません。
*   **設定の不備:** `spring-boot-starter-mail`依存関係は存在するものの、メール関連のプロパティ（特に`spring.mail.host`）が正しく設定されていない場合、Spring Bootはデフォルトの`JavaMailSender`Beanの作成をスキップします。
*   **自動構成の無効化:** メールサポートの自動構成を明示的に無効にしている場合（例: `@SpringBootApplication(exclude = MailSenderAutoConfiguration.class)`）、Springは`JavaMailSender`Beanを生成しません。
*   **手動設定の誤り:** 手動で`JavaMailSender`Beanを定義する場合、パッケージ構造やコンポーネントスキャンの設定が誤っていると、依存関係の解決に失敗します。

**3. 解決策:**
エラーを解決するための具体的な方法は以下の通りです。

*   **自動構成の有効化:**
    *   `spring-boot-starter-mail`依存関係がプロジェクトに含まれていることを確認します。
    *   `spring.mail.host`など、必要なメール関連プロパティを正しく設定します。
    *   メール関連の自動構成を明示的に無効にしていないことを確認します。
*   **手動でのBean定義:**
    *   `JavaMailSender`Beanを `@Configuration` アノテーションが付いたクラスで手動で定義します。
    *   Bean定義クラスがアプリケーションのベースパッケージ外にある場合は、 `@SpringBootApplication`の`scanBasePackages`属性で正しいパッケージを指定し、コンポーネントスキャンが正しく行われるようにします。

**4. まとめ:**
記事では、`JavaMailSender`の自動構成と手動構成の両方を通じてエラーを回避する方法を解説し、各アプローチの重要な考慮事項を説明しています。 適切な依存関係、必要なプロパティの設定、パッケージ構造への注意を払うことで、Spring Bootプロジェクトにメール機能を簡単に統合できます。

---
# CSS の ident() による動的な custom-ident の生成 | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-06-14/ident.html)

## CSSのident()による動的なcustom-identの生成に関する要約

この記事は、CSSの`ident()`関数を用いた動的なcustom-ident（カスタム識別子）の生成について解説しています。

**背景と問題点:**

*   CSSでAnchor（アンカー）要素とPopover（ポップオーバー）要素を紐付ける際、複数のAnchorに対して単一のPopoverを再利用する場合、各Anchorに`anchor-name`を設定し、Popoverの`position-anchor`を動的に変更する必要がありました。
*   従来のやり方では、HTMLのAnchor属性を用いてAnchorのIDを指定することも検討されましたが、これはデザイン要素がHTMLに過度に現れるという問題がありました。

**解決策：ident()関数の活用:**

*   `ident()`関数を用いることで、AnchorのIDに基づいて動的に`anchor-name`を生成できます。例えば、`anchor-name: ident("--" attr(id));`のように記述できます。
*   これにより、HTML属性に依存することなく、CSS内でAnchorの識別子を生成できます。
*   `ident()`は文字列連結の機能も内包しており、`--`のような接頭辞とIDを組み合わせることも可能です。
*   `ident()`は`<custom-ident>`や`<dashed-ident>`型の値を生成し、他のCSS APIとの連携も期待できます。

**その他の機能と応用:**

*   IDを持たない要素に対しても、`sibling-index()`関数と組み合わせることで、動的な識別子を生成できます。
*   現在、`anchor-name`, `timeline-name`, `container-name`, `@position-try`, `@property`などのCSSプロパティでの`ident()`実装が進められています。
*   文字列連結を行うための`concat()`/`string()`関数も議論されています。

**今後の展望と課題:**

*   CSSで動的に文字列を生成できることで、View TransitionやAnchor PositioningなどのAPIの制御がより柔軟になります。
*   CSSに閉じ込めることで、コードの可読性と保守性が向上し、最小限のJavaScriptで済むようになります。
*   一方、動的な値が増えることで、デバッグの難易度が増加する可能性があります。
*   `@if()`や`@function()`といった機能との組み合わせで、さらに強力なCSSユーティリティが生まれる可能性があります。
*   CSSのステップ実行やテストの必要性も出てくるかもしれません。

**その他:**

*   記事内には、仕様、Explainer、Chrome Platform Statusなどの関連情報へのリンクが掲載されています。
*   デモは公開されていますが、現時点では動作するブラウザはありません。

---
# VMware Tanzu Gemfire 10.1をOrbStackのLinux Machine上のRocky Linuxにインストールするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/854)

## VMware Tanzu Gemfire 10.1 を OrbStack の Linux Machine 上の Rocky Linux にインストールするメモ

本記事は、OrbStackのLinux Machine上のRocky LinuxにVMware Tanzu Gemfire 10.1をインストールする手順をまとめたものです。Java 21をサポートしたGemfire 10.1を最新のJava 21環境で構築し、Gemfireクラスター（Locator x 2, Server x 3）の構築、耐障害性テスト、Tanzu GemFire Management Consoleによる可視化までを解説しています。

**主な手順:**

1.  **Gemfireの準備:**
    *   Gemfire 10.1をダウンロードし、OrbStackのLinux Machine上で展開します。
    *   Gemfireユーザーの作成、Java 21 OpenJDKのインストール、メモリ設定などの環境構築を`cloud-init-gemfire.yaml`ファイルを使用して行います。

2.  **Linux Machineの作成と起動:**
    *   `orb create`コマンドでRocky Linux 8のLinux Machineを作成し、`cloud-init-gemfire.yaml`で初期設定を行います。
    *   作成したMachineをクローンして、Locator（gemfire-locator-2）とServer（gemfire-server-1, 2, 3）を作成します。
    *   `orbctl start`コマンドでLocatorとServerを起動します。

3.  **Locatorの起動と確認:**
    *   `gfsh start locator`コマンドでLocatorを起動し、`gfsh`でクラスターに接続してメンバーリストを確認します。

4.  **Serverの起動と確認:**
    *   `gfsh start server`コマンドでServerを起動し、再度メンバーリストを確認して、全メンバーが正常に起動していることを確認します。

5.  **Regionの作成とデータ操作:**
    *   `gfsh`シェルでクラスターに接続し、`create region`コマンドでPARTITION\_PERSISTENTタイプのRegionを作成します。
    *   `put`コマンドでテストデータを追加し、`query`と`locate entry`コマンドでデータの格納と冗長性（冗長度1）を確認します。

6.  **耐障害性テスト:**
    *   `stop server`コマンドでServerを停止し、データのアクセスと冗長性が維持されていることを確認します。
    *   `rebalance`コマンドでデータの再分散を行い、冗長性を回復させます。
    *   停止したServerを再起動し、データが正しく配置されることを確認します。

7.  **Tanzu GemFire Management Consoleの可視化:**
    *   Tanzu GemFire Management ConsoleをDockerコンテナとして起動し、ブラウザからアクセスしてクラスターの状態を可視化します。

8.  **クリーンアップ:**
    *   `gfsh shutdown`コマンドでクラスターを停止し、`orbctl delete`コマンドで作成したMachineを削除します。

この手順により、OrbStackのLinux Machine上のRocky Linux環境でGemfireクラスターを構築し、データの冗長性と耐障害性を確認できます。また、Tanzu GemFire Management Consoleを利用して、クラスターの可視化も行えます。
