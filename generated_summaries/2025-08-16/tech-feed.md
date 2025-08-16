# Improved fake hardware detection with Vercel BotID - Vercel

[View on Vercel Blog](https://vercel.com/changelog/botid-deep-analysis-model-improved-for-fake-hardware-detection)

## Vercel BotID の機能向上：精巧な偽装ハードウェア検出能力の強化

この記事は、Vercel の BotID が、高度な偽装ボットの検出能力を向上させたことを伝えています。

**要約:**

*   **機能強化:** Vercel の BotID Deep Analysis が、偽装されたヘッドレスブラウザやシミュレーションされたデバイスハードウェアのフィンガープリンティング範囲を拡大し、検出モデルを更新しました。
*   **BotID の概要:** BotID は、本物のユーザーを邪魔することなく、洗練されたボットを分類する不可視の CAPTCHA です。
*   **更新による効果:** 新しい Deep Analysis モデルにより、ステルス性の高い自動化フレームワークや偽装されたハードウェアプロファイルをリアルタイムでより正確に識別できるようになりました。
*   **ユーザーへの影響:** BotID Deep Analysis を利用しているユーザーは、特別な操作なしに即座にこの機能強化の恩恵を受けられます。ただし、最新版の botid@1.5.2 へのアップグレードが推奨されています。
*   **推奨事項:** BotID の利用開始が推奨されています。

---
# Function Pointers Equivalent in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923263262/0/baeldung~Function-Pointers-Equivalent-in-Java)

## Javaにおける関数ポインタの代替手段 | Baeldung

このチュートリアルでは、Javaで関数ポインタと同等の振る舞いを実現するための様々な方法を探求しています。

**1. はじめに**

C/C++のような言語では、関数をポインタとして変数に格納し、それを渡すことができます。Javaには関数ポインタはありませんが、他の技術を使って同様の動作を達成できます。

**2. インターフェースと匿名クラス**

Java 8以前では、単一メソッドインターフェースを定義し、それを匿名クラスで実装することで関数ポインタをシミュレートしていました。これは、レガシーコードの維持や、Java 8+ が利用できない環境での作業に有効です。

```java
public interface MathOperation {
    int operate(int a, int b);
}
```

このインターフェースを持つ`Calculator`クラスを定義し、匿名クラスを使って加算をテストします。

```java
@Test
void givenAnonymousAddition_whenCalculate_thenReturnSum() {
    Calculator calculator = new Calculator();
    MathOperation addition = new MathOperation() {
        @Override
        public int operate(int a, int b) {
            return a + b;
        }
    };
    int result = calculator.calculate(2, 3, addition);
    assertEquals(5, result);
}
```

この方法は、すべてのJavaバージョンで動作し、明確な型安全性を提供しますが、単純な操作でも多くのボイラープレートコードが必要となります。

**3. ラムダ式 (Java 8+)**

Java 8で導入されたラムダ式は、振る舞いを渡すためのより簡潔で読みやすい方法を提供します。

```java
@Test
void givenLambdaSubtraction_whenCalculate_thenReturnDifference() {
    Calculator calculator = new Calculator();
    MathOperation subtract = (a, b) -> a - b;
    int result = calculator.calculate(10, 4, subtract);
    assertEquals(6, result);
}
```

ラムダ式を使用すると、`Calculator`クラスは変更せずに、より簡潔に振る舞いを渡すことができます。

**4. 組み込みの関数型インターフェース**

Java 8では、`java.util.function`パッケージに定義済みの関数型インターフェースも導入されました。これにより、独自のインターフェースを作成する必要がなくなります。`BiFunction`インターフェースを使用して、乗算をテストします。

```java
@Test
void givenBiFunctionMultiply_whenApply_thenReturnProduct() {
    BiFunction<Integer, Integer, Integer> multiply = (a, b) -> a * b;
    int result = multiply.apply(6, 7);
    assertEquals(42, result);
}
```

**5. メソッド参照**

メソッド参照は、既存のメソッドを呼び出すためのラムダ式の短縮形を提供します。

```java
public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
}

@Test
void givenMethodReference_whenCalculate_thenReturnSum() {
    Calculator calculator = new Calculator();
    MathOperation operation = MathUtils::add;
    int result = calculator.calculate(5, 10, operation);
    assertEquals(15, result);
}
```

メソッド参照は、既存の静的メソッドまたはインスタンスメソッドがある場合に役立ちます。

**6. リフレクション**

Javaでは、リフレクションを使用してメソッドを動的に呼び出すことも可能です。

```java
public class DynamicOps {
    public int power(int a, int b) {
        return (int) Math.pow(a, b);
    }
}

@Test
void givenReflection_whenInvokePower_thenReturnResult() throws Exception {
    DynamicOps ops = new DynamicOps();
    Method method = DynamicOps.class.getMethod("power", int.class, int.class);
    int result = (int) method.invoke(ops, 2, 3);
    assertEquals(8, result);
}
```

リフレクションは、コンパイル時にメソッドがわからない場合に強力ですが、他の技術よりも遅く、エラーが発生しやすいため、一般的なアプリケーションロジックでの使用は避けるべきです。

**7. コマンドパターン**

コマンドパターンは、振る舞いを独立したオブジェクトにカプセル化することで、Javaで関数ポインタをシミュレートする別の方法です。

```java
public class AddCommand implements MathOperation {
    @Override
    public int operate(int a, int b) {
        return a + b;
    }
}

@Test
void givenAddCommand_whenCalculate_thenReturnSum() {
    Calculator calculator = new Calculator();
    MathOperation add = new AddCommand();
    int result = calculator.calculate(3, 7, add);
    assertEquals(10, result);
}
```

このパターンは、操作をパラメータ化し、実行を遅延させたり、動的にキューに入れたりする場合に特に役立ちます。

**8. Enumベース**

Java enumは定数だけでなく、ロジックをカプセル化することもできます。

```java
public enum MathOperationEnum {
    ADD {
        @Override
        public int apply(int a, int b) {
            return a + b;
        }
    },
    SUBTRACT {
        @Override
        public int apply(int a, int b) {
            return a - b;
        }
    },
    MULTIPLY {
        @Override
        public int apply(int a, int b) {
            return a * b;
        }
    },
    DIVIDE {
        @Override
        public int apply(int a, int b) {
            if (b == 0) throw new ArithmeticException("Division by zero");
            return a / b;
        }
    };

    public abstract int apply(int a, int b);
}

@Test
void givenEnumSubtract_whenCalculate_thenReturnResult() {
    EnumCalculator calculator = new EnumCalculator();
    int result = calculator.calculate(9, 4, MathOperationEnum.SUBTRACT);
    assertEquals(5, result);
}
```

このパターンは、定義済みの有限な振る舞いのセットを論理的にグループ化する必要がある場合に最適です。

**9. まとめ**

最も一般的に使用されるアプローチの比較を示します。

**10. 結論**

この記事では、Javaでさまざまな技術を使用して関数ポインタの概念をシミュレートする方法を説明しました。現代のJava開発では、ラムダ式と組み込みの関数型インターフェースが、そのシンプルさと読みやすさから最も一般的に使用されるアプローチです。Java 8の機能が利用できない古いコードベースでは、匿名クラスを持つインターフェースの使用が引き続き信頼できる代替手段です。

---
# Google Protobuf ByteString vs. Byte[] | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923263265/0/baeldung~Google-Protobuf-ByteString-vs-Byte)

## Google Protobuf ByteString vs. Byte[] | Baeldung の要約

この記事では、Google Protobuf における `ByteString` と `byte[]` の違いについて解説しています。

**1. 概要**

*   Protobuf でバイナリデータを扱う際、`byte[]` (標準 Java のバイト配列) と Protobuf の `ByteString` のどちらを使うか選択することになります。
*   両者ともバイトのシーケンスを表しますが、設計と用途に根本的な違いがあります。
*   記事では、それぞれの特徴、主な違い、コード例、最適な利用方法を説明しています。

**2.  依存関係**

*   Protobuf を使用するには、`protobuf-java` 依存関係をプロジェクトに追加する必要があります。

**3.  `byte[]` の特徴**

*   Java の基本データ構造で、可変性 (mutable) が特徴です。
*   作成後に要素を直接変更できます。ストリームからのデータの読み込みなどの場合に柔軟に使用できます。

**4.  `ByteString` の特徴**

*   Protobuf ライブラリが提供する、バイトのシーケンスを扱うクラスです。
*   不変性 (immutable) が特徴です。作成後の内容の変更はできません。
*   スレッドセーフ性、効率性 (substring() や concat() の最適化) などの利点があります。

**5.  主な違い**

*   **可変性 vs. 不変性:** `byte[]` は可変、`ByteString` は不変。
*   **パフォーマンス:**  単純な読み書きでは同様のパフォーマンスですが、`ByteString` は連結 (concatenation) などの複雑な操作で効率的。
*   **API と Protobuf の統合:** `ByteString` はバイナリデータに特化した豊富な API (startsWith()、substring()、indexOf() など) を持ち、Protobuf メッセージ内の bytes 型のネイティブ型として利用され、シリアル化とデシリアライゼーションを効率的に行います。

**6.  型の変換**

*   **`byte[]` から `ByteString` への変換:** `ByteString.copyFrom()` メソッドを使用。新しい `ByteString` インスタンスを作成し、データをコピーします。
*   **`ByteString` から `byte[]` への変換:** `toByteArray()` メソッドを使用。新しい `byte[]` インスタンスを返し、データをコピーします。
*   両方の変換は、大きなバイトシーケンスの場合、オーバーヘッドが発生する可能性があります。

**7.  結論**

*   `byte[]` は、可変の汎用バッファに使用します。
*   `ByteString` は、Protobuf メッセージ内のすべてのバイナリデータのデフォルトとして使用します。

---
# Execute mTLS Calls Using Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923263268/0/baeldung~Execute-mTLS-Calls-Using-Java)

このBaeldungの記事では、JavaでmTLS（Mutual TLS）呼び出しを実行する方法について解説しています。

**1. mTLSの概要**
mTLSは、クライアントとサーバーの両方がX.509証明書を提示し検証することで、双方向の認証を可能にするセキュリティプロトコルです。これにより、サーバーだけでなくクライアントの身元も確認され、高いセキュリティが要求される環境に最適です。マイクロサービス、API、エンタープライズシステムなどで、サービス間の内部通信、パスワードなしでのユーザー/デバイス認証、ゼロトラストセキュリティモデルの実施によく利用されます。

**2. NginxでのmTLS設定**
記事では、NginxサーバーでmTLSを設定する方法を説明しています。具体的には、自己署名証明書を使用したサーバーとクライアントの証明書生成方法、Nginxの設定ファイルへのmTLS設定の追加方法を解説しています。Nginxの設定では、HTTPSサーバーをポート443で起動し、クライアント証明書の検証を行うように設定します。

**3. JavaクライアントでのmTLS実装**
JavaクライアントでmTLS呼び出しを行うために、SSLContextを構築する必要があります。具体的には、クライアントの秘密鍵をDER形式に変換し、鍵と証明書をJavaのKeyStoreにロードし、KeyManagerFactoryを初期化します。自己署名証明書を使用しているため、信頼できる証明書を受け入れるTrustManagerも必要です。
  * SSLContextの構築方法
  * HttpClientとHttpsURLConnectionを使用したmTLS呼び出しのテスト

**4. まとめ**
記事では、mTLSの概要と、証明機関の設定から、サーバーとクライアントの証明書生成、NginxでのmTLS設定、Javaアプリケーションでの証明書のロードとSSLContextの初期化、HttpClientとHttpsURLConnectionを使用したmTLS呼び出しのテストまで、一連の手順を説明しています。この記事で提供されているコード例は、GitHubで公開されています。

---
# Implementing CQRS with Spring Modulith | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923263271/0/baeldung~Implementing-CQRS-with-Spring-Modulith)

## Implementing CQRS with Spring Modulith: 要約

この記事では、Spring Modulith を使用して CQRS (Command Query Responsibility Segregation) パターンを実装する方法について解説しています。

**1. CQRS と Spring Modulith の概要**

*   CQRS は、アプリケーションの読み取り (クエリ) と書き込み (コマンド) の操作を分離するアーキテクチャパターンです。それぞれの目的に最適化されたモデルを使用します。
*   Spring Modulith は、Spring Boot アプリケーションをビジネス領域に基づいてモジュール化し、モジュール間の依存関係を管理するのに役立ちます。

**2. 実装のステップ**

*   映画チケット予約システムを例に、"movies" モジュールと "tickets" モジュールに分割します。
*   **モジュールの定義:** Spring Modulith を使用して、"movie" と "ticket" パッケージをルートレベルで作成し、モジュール構造を定義します。
*   **コマンドサイド (Write Side):** チケット予約とキャンセルのコマンドを定義し、データベースに保存します。`@Command` アノテーションでコマンドをマークします。
*   **ドメインイベントの公開:** 予約とキャンセルの際に、`BookingCreated` および `BookingCancelled` ドメインイベントを生成し、Spring Modulith のトランザクションアウトボックスパターンを使用して非同期に公開します。`@DomainEvent` アノテーションでドメインイベントをマークします。
*   **クエリサイド (Read Side):** イベントリスナーを使用して、"movie" モジュールが "ticket" モジュールからのイベントを非同期に受け取り、関連データを更新します。`@ApplicationModuleListener` を使用して、非同期イベントリスナーを定義します。
*   **クエリモデルとコントローラー:** クエリモデルを定義し、REST コントローラーでリポジトリから直接クエリを実行して、読み取り専用のデータを返します。`@QueryModel` アノテーションでクエリモデルをマークします。

**3. 利点とトレードオフ**

*   **利点:** 関心の分離、スケーラビリティの向上、モジュールの拡張性の向上。
*   **トレードオフ:** 実装の複雑さが増加、結果整合性によるデータの一時的な不整合。

**4. Spring Modulith の活用**

*   Spring Modulith は、モジュール間の依存関係を検証し、非同期イベント通信を容易にします。
*   jMolecules ライブラリの `@Command`、`@DomainEvent`、`@QueryModel` などのアノテーションを使用して、アーキテクチャ上の役割を明確にすることができます。

**5. まとめ**

この記事では、Spring Modulith を活用して、CQRS パターンを実装し、アプリケーションをモジュール化する方法を示しています。非同期ドメインイベントを利用することで、モジュール間の緩やかな結合を実現し、拡張性と保守性を向上させることができます。

---
# Register ServletContextListener in Spring Boot | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923263274/0/baeldung~Register-ServletContextListener-in-Spring-Boot)

このBaeldungの記事は、Spring Bootアプリケーションで`ServletContextListener`を登録する方法について解説しています。

**主な内容:**

*   **ServletContextListenerの概要:**  アプリケーションの起動時とシャットダウン時に特定の処理を実行するためのインタフェース。`contextInitialized()`メソッドでアプリケーション起動時の処理を、`contextDestroyed()`メソッドでシャットダウン時の処理を定義する。
*   **ServletContextListenerの実装:**  簡単な`ServletContextListener`の実装例として、アプリケーションの起動と停止をログに出力する`CustomLifecycleLoggingListener`が示されている。
*   **Spring Bootでの登録方法:**
    *   **@WebListenerと@ServletComponentScan:** 伝統的なJava EEスタイル。`@WebListener`アノテーションをリスナークラスに付与し、Spring Bootアプリケーションで`@ServletComponentScan`を有効にする。`spring-boot-starter-web`の依存関係が必要。
    *   **ServletListenerRegistrationBean:**  Spring Bootのネイティブな方法。`ServletListenerRegistrationBean`を使用してリスナーをSpring Beanとして登録する。アノテーションを使用せず、Servlet APIのスキャンにも依存しない。Executable JARとWARの両方のデプロイメントをサポートし、より柔軟で移植性が高い。
*   **どちらの方法を選ぶべきか:**  新しいSpring Bootアプリケーションやコードの移行を行う場合は、`ServletListenerRegistrationBean`の使用が推奨される。

記事は、Azure Container AppsやOrkesなどの他のツールやプラットフォームに関する情報も紹介していますが、主な焦点はSpring Bootにおける`ServletContextListener`の登録方法にあります。また、GitHubで完全なソースコードが利用可能であることも言及されています。
