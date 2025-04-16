# Currency Code to Currency Symbol Mapping in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916703195/0/baeldung~Currency-Code-to-Currency-Symbol-Mapping-in-Java)

## Javaにおける通貨コードから通貨記号へのマッピング

**概要:**

この記事は、Javaで通貨コード（例：USD, EUR）を対応する通貨記号（例：$, €）にマッピングする様々な方法を解説しています。金融アプリケーションにおいて、通貨コードと通貨記号の変換は不可欠であり、ユーザーの可読性を向上させるために通貨記号を表示することが重要です。この記事では、組み込みの `Currency` クラス、ハードコードされた `Map`、`Locale` サポートといった複数のアプローチについて、詳細な説明とパフォーマンス比較、JUnitテストによる検証を含めています。

**1. 導入:**

通貨コードと通貨記号の適切なマッピングは、金融アプリケーションにおいて不可欠です。通貨コードはトランザクションに役立ちますが、ユーザーは通貨記号の方がより理解しやすく、読みやすいと感じる傾向があります。Javaでは、通貨記号を正しく表示するための複数の方法が提供されており、特にローカリゼーションを考慮する場合、注意が必要です。

**2. アプローチ:**

アプリケーションは、ローカリゼーションの必要性、一貫性、メンテナンスの容易さなど、さまざまな要件に基づいて通貨記号を取得するアプローチを使い分ける必要があります。

*   **2.1. `Currency` クラスの使用:**

    Javaの `Currency` クラスを使用すると、ISO 4217通貨コードに基づいて通貨記号を取得できます。これは `java.util` パッケージで定義されています。

    ```java
    public class CurrencyUtil {
        public static String getSymbol(String currencyCode) {
            Currency currency = Currency.getInstance(currencyCode);
            return currency.getSymbol();
        }
    }
    ```

    `getInstance()` メソッドで通貨コードを渡し、対応する `Currency` クラスのインスタンスを取得し、`getSymbol()` メソッドで通貨記号を取得します。無効なコードが提供された場合は、例外がスローされます。
*   **2.2. `Locale` と `Currency` クラスの組み合わせ:**

    `Locale` クラスと `Currency` クラスを組み合わせて、ローカライズされた通貨記号を取得することも可能です。

    ```java
    public class CurrencyLocaleUtil {
        public String getSymbolForLocale(Locale locale) {
            Currency currency = Currency.getInstance(locale);
            return currency.getSymbol();
        }
    }
    ```

    これは、ユーザーのロケールに基づいて動的に通貨記号を調整する国際化されたアプリケーションに適しています。
*   **2.3. ハードコードされた `Map` の使用:**

    ハードコードされた `Map` は、通貨記号のマッピングを明示的に制御するためのシンプルで柔軟な方法です。UIで一貫した記号を表示する場合、一般的な通貨以外の通貨を処理する場合、またはロケール設定に依存しない特定のフォーマットルールを適用する場合に役立ちます。サポートされる通貨のセットが限定的で、頻繁に変更される可能性が低い場合に最適です。

    ```java
    public class CurrencyMapUtil {
        private static final Map<String, String> currencymap = Map.of(
            "USD", "$",
            "EUR", "€",
            "INR", "₹"
        );

        public static String getSymbol(String currencyCode) {
            return currencymap.getOrDefault(currencyCode, "Unknown");
        }
    }
    ```

    このアプローチでは、未認識の通貨コードに対してデフォルトで "Unknown" が返されます。

**3. 比較:**

各アプローチは、異なる特性を持っています。アプリケーションの要件に応じて適切な方法を選択する必要があります。

| 方法                  | ユースケース                                      | メンテナンスの容易さ |
| :-------------------- | :----------------------------------------------- | :--------------------- |
| `Currency` クラス      | 幅広い通貨をサポート、ローカライズが必要     | 中                      |
| `Locale`-ベース        | ローカライズが必要、地域ごとの記号が必要        | 中                      |
| ハードコードされた `Map` | 固定された通貨記号のセット、UIの一貫性が必要 | 高                      |

**4. 結論:**

最適なアプローチは、アプリケーションの要件によって異なります。 `Currency` クラスは信頼性が高く、ハードコードされた `Map` は固定された記号のセットに最適で、`Locale` アプローチは地域ごとの適応が必要なアプリケーションに最適です。

---
# How to Check if Zookeeper Is Running or up From Command Prompt? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916703198/0/baeldung~How-to-Check-if-Zookeeper-Is-Running-or-up-From-Command-Prompt)

このBaeldungの記事は、Apache ZooKeeperがコマンドプロンプトから実行されているかどうかを確認する方法について解説しています。

**1. ZooKeeperの概要と重要性:**
ZooKeeperは、分散アプリケーションの開発を容易にする分散調整サービスです。分散アプリケーションにおける調整、構成管理、リーダー選出などの課題を解決し、Apache HadoopやSolrなどのオープンソース製品で広く利用されています。

**2. インストール:**
ZooKeeperは、スタンドアロンモードとクラスター（アンサンブル）モードでインストールできます。開発目的ではスタンドアロンモードが一般的ですが、本番環境ではフォールトトレランスのためにアンサンブルモードが推奨されます。

**3. ZooKeeperノードのステータス確認方法:**

*   **OSコマンド:**
    *   Unix/Linux/Macでは `ps -ef | grep Zookeeper` を使用してJavaプロセスとして実行されているZooKeeperを確認できます。
    *   `jps` コマンドでもZooKeeperのプロセスを確認できます。
    *   ただし、プロセスが実行されていても応答がない場合があるため、OSコマンドだけでは完全な確認とは言えません。
*   **zkServerとzkCliスクリプト:**
    *   `zkServer.sh status` コマンドを使用して、ZooKeeperサーバーのステータスを確認できます（znodeにログインする必要があります）。
    *   `zkCli.sh` はZooKeeperのコマンドラインクライアントであり、リモートサーバーのステータスも確認できます。
    *   `./bin/zkCli.sh -waitforconnection -timeout 3000 -server 127.0.0.1:2181` のように使用して、接続を確認できます。
*   **ZooKeeperコマンド:**
    *   ZooKeeperは、リモートから状態を確認するための4文字のコマンドを提供しています。
    *   `ruok` コマンドは、サーバーが稼働しているか（`imok`と応答するか）を確認します。
    *   これらのコマンドを使用するには、`zoo.cfg` ファイルでホワイトリストに登録する必要があります。
    *   `telnet localhost 2181` または `echo ruok | nc localhost 2181` などのネットワークコマンドを使用して、`ruok` コマンドを送信できます。

**4. まとめ:**
記事では、ZooKeeperの概要、インストール方法、およびコマンドプロンプトからZooKeeperノードのステータスを確認するための様々な方法について説明しています。 `zkCli.sh` や `ruok` コマンドなどのツールを使用して、リモートからznodesのステータスをチェックできます。

---
# Monitor a Java Application With New Relic | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916703201/0/baeldung~Monitor-a-Java-Application-With-New-Relic)

このチュートリアルでは、JavaアプリケーションをNew Relicを使用して監視する方法について説明しています。

**1. 概要:**
New Relicは、アプリケーションのパフォーマンスに関するリアルタイムの洞察を提供する強力なオブザーバビリティプラットフォームです。レスポンス時間、スループット、エラー率などを監視できます。簡単なSpring Bootアプリケーションを構築し、New Relic Javaエージェントを設定して、アプリケーションのパフォーマンスとエラーを監視する例を示します。

**2. プロジェクトのセットアップ:**
まず、Spring Bootアプリケーションを設定し、いくつかのRESTエンドポイントを追加します。
*   **RESTコントローラー:** `/hello`エンドポイントは単純なメッセージを返し、`/error`エンドポイントは例外をスローします。これらのエンドポイントを使用して、New Relicがアプリケーションのパフォーマンスとエラーを監視する方法を示します。

**3. New Relicのインストール:**
JavaアプリケーションをNew Relicで監視するには、アカウントにサインアップし、New Relic Javaエージェントを設定する必要があります。
*   **Maven依存関係:** `newrelic-java`Maven依存関係をzipファイルとして含めます。`provided`スコープは、実行時にNew Relicエージェントが利用可能であることを保証しますが、アプリケーションのJARファイルには含まれません。
*   **Maven依存関係プラグインへのunpack-dependenciesゴールを追加:** アプリケーションがパッケージ化されるときにZIPファイルを解凍するようにMaven依存関係プラグインを設定します。
*   **エージェントの設定:** アカウントと設定を使用するようにエージェントをカスタマイズするために、`newrelic.yml`ファイルのテンプレートをダウンロードして編集できます。最も重要な2つのエントリは、`app_name`と`license_key`です。

**4. アプリケーションの実行:**
依存関係が利用可能になったら、エージェントをクラスパスに追加して、New Relicでアプリケーションを監視します。APIに対していくつかのリクエストを行い、ダッシュボードを確認します。
*   **エージェントの起動:** アプリケーションを実行する際に、`-javaagent`JVMオプションを使用できます。
*   **リクエストの作成:**  `/hello`および`/error`エンドポイントを呼び出し、監視データを生成します。

**5. 監視ダッシュボード:**
アプリケーションが実行され、トラフィックを受信したら、New Relicダッシュボードに移動して、取得されたメトリックと洞察を表示できます。
*   **アプリケーションの概要:** レスポンス時間、スループット、エラー率などのメトリックを含む、アプリケーションのパフォーマンスの概要です。
*   **APIパフォーマンスの詳細:** 特定のリクエストを詳細に調べ、各エンドポイントの詳細なメトリックを表示できます。
*   **JVMメトリック:** CPU使用率、メモリ使用量、ヒープメモリ、非ヒープメモリ、ガベージコレクション時間などのJVMメトリックを表示できます。

**6. 結論:**
New Relicは、Javaアプリケーションのパフォーマンスを監視および最適化するための強力なプラットフォームです。これらの洞察を活用することにより、ボトルネックを特定し、パフォーマンスを最適化し、アプリケーションの信頼性を確保できます。

---
# How to Run a Java Program in the Background | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916702619/0/baeldung~How-to-Run-a-Java-Program-in-the-Background)

## Javaプログラムをバックグラウンドで実行する方法

このチュートリアルでは、Javaプログラムをバックグラウンドで実行し、ターミナルを閉じてもプログラムが継続して実行されるようにする方法について解説します。

**1. はじめに**

ターミナルを閉じてもJavaプログラムが継続して実行されるようにする方法を探ります。

**2. バックグラウンドプロセスとしてのJavaの実行**

*   **`&`演算子:** シェルスクリプト内で`&`演算子を使用すると、Javaプログラムをバックグラウンドで実行できます。これにより、ターミナルを待つことなく使用できます。プロセスID（PID）は`$!`で取得し、`startupApp.pid`ファイルに保存することで、プロセスの管理に役立ちます。
    *   **欠点:** ターミナルを閉じるとプロセスが終了する可能性があります。また、`systemd`のようなサービスマネージャーと比較して、ログの表示やプロセスの開始/停止が容易ではありません。

**3. `nohup`を使用したプロセスの継続**

*   **`nohup`コマンド:** `nohup`を使用すると、セッションまたはターミナルを閉じた後もプロセスが継続して実行されます。標準出力と標準エラー出力をファイルにリダイレクト（例：`> output.log 2>&1`）することで、後でログを確認できます。
*   **PIDの取得:** `echo $! > startupApp.pid`でPIDを`startupApp.pid`ファイルに保存します。
*   **プロセスの停止:** `kill $(cat startupApp.pid)`を使用してプロセスを停止できます。

**4. `systemd`サービスとしてのJavaの実行（Linuxサーバー向け）**

*   **推奨される方法:** 長時間実行のJavaプロセスやより良い管理には、`systemd`を使用してサービスとして管理することが推奨されます。
*   **手順:**
    1.  `.service`ファイルの作成: `sudo nano /etc/systemd/system/myjavaapp.service`
    2.  ファイルへの設定の追加:
        ```
        [Unit]
        Description: Java Background Service
        After=network.target

        [Service]
        ExecStart=/usr/bin/java -jar /web/server.jar
        WorkingDirectory=/web
        Restart=always
        User=root
        StandardOutput=append:/var/log/myjavaapp.log
        StandardError=append:/var/log/myjavaapp.err

        [Install]
        WantedBy=multi-user.target
        ```
        *   `[Unit]`セクション: サービスの動作条件（ネットワークの利用可否など）を指定します。
        *   `[Service]`セクション: Javaアプリケーションの実行方法（実行コマンド、作業ディレクトリ、再起動ポリシー、ユーザー、ログ出力）を定義します。
        *   `[Install]`セクション: システムの起動時にサービスを自動的に開始するための設定です。
    3.  `systemd`のリロード: `sudo systemctl daemon-reload`
    4.  サービスの有効化: `sudo systemctl enable myjavaapp`
    5.  サービスの開始: `sudo systemctl start myjavaapp` (またはシステムのリブート)
    6.  ステータスの確認: `sudo systemctl status myjavaapp`
    7.  サービスの停止: `sudo systemctl stop myjavaapp`
*   **注意点:** より安全な環境では、非rootユーザーとしてサービスを実行することが推奨されます。

**5. `screen`または`tmux`を使用したバックグラウンドプロセスとしてのJavaの実行**

*   **特徴:** `screen`または`tmux`を使用すると、実行中のプロセスを停止せずにセッションからデタッチし、後で再アタッチできます。
*   **`screen`の場合:**
    *   開始: `screen -S myjavaapp java -jar /web/server.jar`
    *   デタッチ: `Ctrl+A`、`D`
    *   再アタッチ: `screen -r myjavaapp`
*   **`tmux`の場合:**
    *   開始: `tmux new-session -s myjavaapp 'java -jar /web/server.jar'`
    *   デタッチ: `Ctrl+B`、`D`
    *   再アタッチ: `tmux attach-session -t myjavaapp`
*   **比較:** `tmux`はよりモダンで強力ですが、`screen`はシンプルで基本的なニーズに適しています。多くのLinuxディストリビューションには`screen`がプリインストールされており、`tmux`は別途インストールが必要な場合があります。

**6. まとめ**

このチュートリアルでは、Javaアプリケーションをバックグラウンドで実行する方法、ターミナルを閉じても継続して実行する方法、ログを使用して監視する方法について解説しました。簡単なケースでは`nohup`や`&`が使えますが、本番環境では`systemd`がより信頼性の高い方法です。`screen`や`tmux`を使用すると、再起動後もプロセスを継続できる柔軟性が得られます。使用ケースに最適な方法を選択する必要があります。

---
# How to Serialize and Deserialize Dates in Avro | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916702622/0/baeldung~How-to-Serialize-and-Deserialize-Dates-in-Avro)

このチュートリアルでは、Apache Avroを使用してJavaでDateオブジェクトをシリアル化およびデシリアル化するさまざまな方法を探求しています。Avroは、スキーマベースのデータ定義とともに、コンパクトで高速なバイナリデータ形式を提供するデータシリアル化システムです。

**1. はじめに**
AvroはJavaのDateクラスをネイティブにサポートしていないため、Avroで日付を扱う際には課題が生じます。

**2. 日付シリアル化の課題**
Avroの型システムは、null、boolean、int、long、float、double、bytes、stringのプリミティブ型で構成されています。さらに、record、enum、array、map、union、fixedの複合型もサポートしています。
Dateクラスを直接シリアル化しようとすると、Avroの反射ベースのシリアル化は内部的にDateオブジェクトをlong値（エポックからのミリ秒数）に変換するデフォルトの動作をします。このプロセスは精度問題を引き起こす可能性があります。

**3. 日付シリアル化の実装**
論理型（GenericRecordを使用）とAvroの変換APIの2つの方法を使用して、日付のシリアル化とデシリアル化を実装します。

*   **3.1. 論理型とGenericRecordの使用**
    Avro 1.8以降、フレームワークは論理型を提供しています。これらは、基盤となるプリミティブ型に適切な意味を追加します。日付の場合、日付、timestamp-millis、timestamp-microsの3つの論理型があります。
    論理型をAvroスキーマで使用する方法を示し、LocalDateをエポックからの日数、タイムスタンプをエポックからのミリ秒に変換して、論理型を使用できるようにします。
    また、テストを実行して、timestamp-millis論理型が精度を維持し、タイムスタンプが期待どおりに一致することを確認します。

*   **3.2. Avroの変換APIの使用**
    Avroは、論理型を自動的に処理できる変換APIを提供しています。このAPIは、論理型に基づいており、変換プロセスを高速化するのに役立ちます。手動でJava型とAvroの内部表現を変換する必要がなくなり、変換プロセスに型安全性を付加できます。

**4. java.util.Dateを使用するレガシーコードの処理**
多くの既存のJavaアプリケーションは、レガシーなjava.util.Dateクラスを使用しています。このようなコードベースの場合、Avroでシリアル化する際にこれらのオブジェクトを処理するための戦略が必要になります。
レガシー日付をシリアル化する前に、最新のJava時間APIに変換する方法を示します。

**5. まとめ**
この記事では、Avroを使用してDateオブジェクトをシリアル化するさまざまな方法を探求し、Avroの論理型を使用して日付とタイムスタンプの値を適切に表現する方法を学びました。
ほとんどの最新アプリケーションでは、java.timeクラスでAvroの論理型を処理するためにAvroの変換APIを使用するのが最良のアプローチです。この組み合わせにより、型安全性、適切なセマンティクス、およびAvroのスキーマ拡張機能との互換性が得られます。

---
# OpenAI announces nonprofit commission advisors | OpenAI

[View on OpenAI News](https://openai.com/index/nonprofit-commission-advisors)

OpenAIは、慈善活動を強化するために、非営利委員会の顧問を任命しました。この委員会は、ヘルスケア、教育、公共サービス、科学的発見など、喫緊の世界的課題に取り組むコミュニティやミッション主導の組織を支援するためのものです。

顧問には、社会正義の推進に尽力してきた労働指導者兼公民権活動家のドロレス・ウエルタ氏、教育、メディア、コミュニティエンパワーメントで活躍するモニカ・ロザーノ氏、公衆衛生、慈善活動、社会変革の分野で著名なロバート・K・ロス博士、政府、技術、ビジネス、アドボカシーのリーダーであるジャック・オリバー氏が就任します。ダニエル・ジンゲール氏が委員会の議長を務めます。

顧問は、透明性のあるコミュニティエンゲージメントプロセスに関する助言、ヘルスケア、科学、教育、公共サービスに焦点を当てた人々と組織からの知見の収集、AIの利点とリスクを考慮した上で、90日以内に委員会に調査結果を提出するなどの役割を担います。

この取り組みは、AIを活用して非営利団体の規模と影響力を高めるというOpenAIの目標を反映しています。これにより、非営利団体は、研究、発見、診断、新薬開発、教育、進捗状況の追跡など、さまざまな分野でリソースを有効活用し、より広範囲に影響を与えることが可能になります。
