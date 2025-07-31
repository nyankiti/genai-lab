# How to Pass a Variable From One Thread Group to Another in JMeter | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922429586/0/baeldung~How-to-Pass-a-Variable-From-One-Thread-Group-to-Another-in-JMeter)

## JMeterでスレッドグループ間で変数を渡す方法

このチュートリアルでは、JMeterでスレッドグループ間で変数を共有する方法について解説しています。これは、あるグループが設定タスク（認証やデータ準備など）を実行し、別のグループがその結果を利用する場合に役立ちます。

**1. はじめに**

JMeterの変数は各スレッドにローカルであるため、このチュートリアルでは、グループ間でデータを渡すためのいくつかのテクニックを紹介します。

**2. シナリオとセットアップ**

*   POSTリクエストでデータを送信し、UUIDを取得
*   そのUUIDを使用してGETリクエストで送信されたデータを取得

この2つのアクションを2つのスレッドグループに分けます。

*   最初のスレッドグループ：POSTリクエストを処理し、返されたUUIDを保存
*   2番目のスレッドグループ：保存されたUUIDを使用してGETリクエストを実行

**2.1. セットアップスレッドグループの作成**

デフォルトではJMeterはスレッドグループを並行して実行するため、実行順序を制御するために特別なスレッドグループタイプを使用します。

*   テストプランを右クリックし、Add -> Threads (Users) -> setUp Thread Groupを選択

これにより、セットアップロジック（POSTリクエストと変数の保存）が他のスレッドグループが開始される前に実行されるようになります。

**2.2. ランダムデータのPOST**

ランダムなテストデータをPOSTするには、${\_\_RandomString(5)}を使用したシンプルなHTTPリクエスト要素を使用します。

すべての手法において、POSTリクエストの後にJSR223 PostProcessor要素を使用して、レスポンステキストを取得し、スレッドグループ間で共有可能な方法で保存します。次に、GETリクエストの前にJSR223 PreProcessorを使用して、保存されたレスポンス値を取得し、リクエストで使用します。スクリプトの言語としてはJavaを使用します。

**2.3. JMeterコンテキスト変数の理解**

Sampler、PreProcessor、PostProcessorなどのJMeterコンポーネントを操作する場合、組み込みのスクリプト変数にアクセスできます。このチュートリアルでは、prev、props、varsを使用します。

*   prev: 前のサンプラー（通常はHTTPリクエスト）のSampleResult。レスポンス本文とステータスコードの抽出に使用されます。
*   props: JMeterのPropertiesオブジェクト。テスト全体でグローバルであり、スレッドまたはスレッドグループ間で値を共有するのに役立ちます。
*   vars: 現在のスレッドのJMeter変数。コンポーネントで値を読み書きするのに役立ちます（${}構文を介してアクセス可能）。

**3. JMeter Propertiesの使用**

スレッドグループ間で値を共有する最も簡単な方法は、propsを使用することです。これらはテスト実行全体で共有され、実行全体で保持されます。

```java
String response = prev.getResponseDataAsString();
props.put("uuid", response);
```

props変数はObjectマップであるため、String値に限定されません。次に、別のスレッドグループでそれを取得し、varsに保存して、他の要素で利用できるようにします。

```java
String uuid = props.get("uuid");
vars.put("uuid", uuid);
```

varsに保存されたら、HTTPリクエストまたは他のテスト要素で${uuid}構文を使用します。

Propertiesはスレッドとスレッドグループ間で共有されます。これは、単一の値や、セットアップスレッドグループが1つのスレッドしか使用しない場合にうまく機能します。より複雑な調整が必要な場合は、他のアプローチを見てみましょう。

**4. bsh.shared名前空間の使用**

より柔軟（ただし古い）オプションは、BeanShell共有名前空間bsh.sharedを使用することです。これは、テストプラン全体で、すべてのBeanShellスクリプト間で共有されるグローバルオブジェクトストアのように機能します。このテクニックは、キューやマップなどのより複雑なデータ構造を共有する場合に役立ちます。

新しい変数uuidQueueを作成します。voidと比較して定義されているかどうかを確認し、LinkedListとして初期化します。

```java
String response = prev.getResponseDataAsString();

if (bsh.shared.uuidQueue == void) {
    bsh.shared.uuidQueue = new LinkedList();
}
```

その後、通常どおり、アイテムを追加するために使用できます。

```java
bsh.shared.uuidQueue.add(response);
```

逆に、別のスレッドグループでそれを取得するには、

```java
String uuid = bsh.shared.uuidQueue.poll();
vars.put("uuid", uuid);
```

注意点として、BeanShellはGroovyまたは純粋なJavaスクリプトよりも遅く、安全性が低いと考えられています。

**5. ファイルへの書き込みと読み取り**

実行間の完全な可視性または永続性が必要な場合は、ファイルベースの通信も実行可能なオプションですが、より冗長です。この例では、ctx.getThreadNum()を使用して、スレッド番号に基づいて個別のファイルを作成します。

```java
String response = prev.getResponseDataAsString();
File file = new File("/tmp/shared-file" + ctx.getThreadNum() + ".txt");
```

次に、ファイルへの書き込みの標準ボイラープレートは次のとおりです。

```java
try {
    FileWriter writer = new FileWriter(file);
    writer.write(response);
    writer.close();
} catch (IOException e) {
    log.error("Failed to write file", e);
}
```

最終的に、それを読み戻します。

```java
File file = new File("/tmp/shared-file" + ctx.getThreadNum() + ".txt");

try {
    Scanner reader = new Scanner(file);
    String uuid = reader.hasNextLine() ? reader.nextLine().trim() : "";
    reader.close();

    vars.put("uuid", uuid);
} catch (IOException e) {
    log.error("Failed to read file", e);
}
```

**利点:**

*   デバッグ、永続化、または実行間の手動操作に適しています
*   大規模なデータセットまたは一括エクスポートの場合により安全です

**欠点:**

*   ディスクI/Oにより遅くなります
*   ファイルクリーンアップとスレッド固有のパスを慎重に管理する必要があります

**6. 結論**

この記事では、JMeterでスレッドグループ間でデータを渡すためのいくつかのテクニックを検討しました。シンプルな単一の値データ共有にはJMeter Propertiesが適しています。高度なシナリオ（スレッドごとのキューや永続的なテスト成果物など）には、古くてもbsh.sharedが役立ちます。最後に、より高い柔軟性のためのファイルベースのアプローチを見てきました。

ソースコードはGitHubで入手できます。

---
# Change the Alias of a Key Within a Keystore in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922428881/0/baeldung~Change-the-Alias-of-a-Key-Within-a-Keystore-in-Java)

このチュートリアルでは、Javaのキーストア内にあるキーのエイリアスを変更する2つの方法について解説しています。

**1. 概要**

キーストア内のキーのエイリアスを変更する方法として、keytoolユーティリティとJava KeyStore APIの2つを紹介します。

**2. 設定**

最初に、keytoolユーティリティを使用して、テスト用のキーストアファイルを作成します。

```bash
keytool -genkey \
  -keyalg rsa \
  -alias baeldung \
  -dname "cn=my-cn.localhost, ou=Java Devs, o=Baeldung, l=London, s=Greater London, c=GB" \
  -keystore my-keystore.jks \
  -storepass storepw@1
```

正常に作成されたことを確認するために、`grep`コマンドを使用してキーストアファイルの内容を確認します。

```bash
keytool -list -v -keystore my-keystore.jks -storepass storepw@1 \
  | grep -iE "keystore contains|alias|my-cn.localhost"
```

**3. keytoolユーティリティを使用したエイリアスの変更**

`keytool`ユーティリティの`changealias`オプションを使用してエイリアスを変更します。

```bash
keytool -changealias -alias baeldung -destalias baeldung.com -keystore my-keystore.jks -storepass storepw@1
```

変更を確認するために、再度`keytool -list`コマンドを実行します。

**4. Javaを使用したエイリアスの変更**

Java KeyStore APIを使用する方法です。KeyStore APIはエイリアスの直接的な変更をサポートしていませんが、既存のキーを新しいエイリアスで複製し、元のエイリアスを削除することで、間接的にエイリアスを変更します。

```java
private static final String KEYSTORE = "my-keystore.jks";
private static final String PWD = "storepw@1";
private static final String OLD_ALIAS = "baeldung";
private static final String NEW_ALIAS = "baeldung.com";

@Test
void whenAliasIsRenamed_thenNewAliasIsCreated() throws Exception {
    KeyStore keystore = KeyStore.getInstance(KeyStore.getDefaultType());
    keystore.load(getClass().getResourceAsStream(KEYSTORE), PWD.toCharArray());

    assertThat(keystore.containsAlias(OLD_ALIAS)).isTrue();
    assertThat(keystore.containsAlias(NEW_ALIAS)).isFalse();

    Key key = keystore.getKey(OLD_ALIAS, PWD.toCharArray());
    Certificate[] certificateChain = keystore.getCertificateChain(OLD_ALIAS);

    keystore.deleteEntry(OLD_ALIAS);
    keystore.setKeyEntry(NEW_ALIAS, key, PWD.toCharArray(), certificateChain);

    assertThat(keystore.containsAlias(OLD_ALIAS)).isFalse();
    assertThat(keystore.containsAlias(NEW_ALIAS)).isTrue();
}
```

この方法は、変更がインメモリのキーストアに適用されるため、永続的にするにはキーストアをディスクに書き出す必要があります。

**5. まとめ**

この記事では、Javaのキーストアファイル内のキーのエイリアスを変更する2つの方法を紹介しました。ほとんどの場合、`keytool`ユーティリティを使用する方法が推奨されます。Java KeyStore APIを使用する方法は、Javaコードから直接変更する必要がある場合に有効です。

---
# 2025-07-31のJS: Nuxt 3.18、Bun v1.2.19、SVG入門 - JSer.info

[View on jser.info](https://jser.info/2025/07/31/nuxt-3.18-bun-v1.2.19-svg/)

JSer.info #743の概要です。

**主要なトピック:**

*   **Nuxt 3.18のリリース:** 遅延ハイドレーション用のLazy Hydration Macros、アクセシビリティ改善のための`<NuxtRouteAnnouncer>`、Chrome DevToolsワークスペース統合、`onWatcherCleanup`のauto-import、パフォーマンス改善が含まれています。
*   **Bun v1.2.19のリリース:** `bun install --linker=isolated`、`bun update --interactive`、`bun pm pkg`コマンドの追加、`process.features.typescript`のサポート、`fs.glob`のexcludeオプションサポートなどが追加されました。
*   **SVG入門記事:** SVGの基本概念（基本図形、スケーラブルな仕組み、`viewBox`の使い方、stroke属性によるアニメーションなど）を手書きのSVGコードを使って解説しています。

**その他:**

*   Node.js、TypeScript、Corepack、ts-patternの各リリース情報
*   npmでのstylusパッケージ削除に関する問題
*   HTMLに関する調査のアンケート募集
*   最近のHTML機能に関する記事
*   ParcelでのReact Server Components (RSC)のバンドルについて
*   TanStack DB（クライアントサイドDB）に関する情報
*   Lynx（TikTokのUIフレームワーク）についての解説
*   React Compilerに関するドキュメント
*   Tailwind UI Componentsをフレームワークに依存せずに動かすためのランタイムライブラリ`@tailwindplus/elements`の紹介。