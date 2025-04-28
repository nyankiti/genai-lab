# Serialization of Enum Values in Avro | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917399111/0/baeldung~Serialization-of-Enum-Values-in-Avro)

## AvroにおけるEnum値のシリアライゼーションの要約

この記事では、Apache Avro で Java の enum 値を適切にシリアライズする方法について解説しています。

**1. Avro での enum シリアライゼーションの基本**

*   Avro は、データ構造を定義するスキーマに基づいてデータをシリアライズします。enum を扱う場合、スキーマの定義と Java の enum の定義が一致している必要があります。
*   Avro では、enum は名前と一連のシンボルで定義されます。

**2. Enum の定義とシリアライズ**

*   Avro スキーマ内で enum を定義するには、`SchemaBuilder.enumeration()` を使用します。名前空間とシンボルを定義することで、enum の構造を定義します。
*   enum 値をシリアライズするには、`GenericData.EnumSymbol` オブジェクトを作成し、enum スキーマと値を指定します。
*   `DatumWriter` と `DataFileWriter` を使用して、enum 値を含む `GenericRecord` をファイルに書き込みます。

**3. Union 型での enum の扱い**

*   Avro では、union 型を使用して、enum を null 可能にするなど、柔軟なデータ構造を表現できます。
*   union 内の enum をシリアライズする際、`GenericData.EnumSymbol` を使用しますが、enum スキーマを参照することに注意する必要があります。

**4. スキーマの進化と互換性**

*   enum に新しい値を後から追加する場合、後方互換性を保つために、デフォルト値を設定することが重要です。
*   デフォルト値は、フィールドレベルではなく、enum 型レベルで指定する必要があります。
*   デフォルト値を設定することで、古いスキーマで読み取った際に、新しい enum 値がデフォルト値として扱われるようになります。

**5. まとめ**

*   Avro で enum を扱う際の注意点として、enum スキーマの正しい定義、`GenericData.EnumSymbol` の使用、union 型におけるスキーマの参照、およびスキーマの進化に対する考慮事項が挙げられます。
*   GitHub でコード例が公開されています。

---
# 2025-04-27のJS: Node v22.15.0、Reactの実験的な機能、Node.jsとV8 GC - JSer.info

[View on jser.info](https://jser.info/2025/04/27/node-v22.15.0-react-node.jsv8-gc/)

## JSer.info #733 要約 (2025-04-27)

今回のJSer.infoでは、Node.js、React、Playwright、pnpm、axios、ECMAScript、パフォーマンスに関する情報が主なトピックとして取り上げられています。

**主要なトピック:**

*   **Node.js v22.15.0 リリース:**
    *   `assert.partialDeepStrictEqual()`、`module.registerHooks()`、`util.diff()`などの新しいAPIが追加。
    *   zstdのサポート。
*   **Reactの実験的な機能:**
    *   `<ViewTransition>`、`addTransitionType()`、`<Activity>`などの実験的APIを紹介。
    *   DevToolsのPerformance Profilerの改善、依存のない`useEffect`、React Compilerなど。
*   **Node.jsとV8 GCの解説:**
    *   V8の世代別GCの仕組みや、高速なGC処理、メモリチューニングについて解説。
*   **その他:**
    *   ECMAScript 2025への対応に関するjsprimerのコントリビューターとスポンサー募集。
    *   Playwright v1.52.0、@fastify/react 1.0.0、pnpm v10.9.0、axios v1.9.0などのリリース。
    *   TailwindとLinariaのパフォーマンス比較記事。
    *   パッケージのセキュリティアップデート修正を行う`socket fix`コマンド。
    *   `1lh`、`1rlh`を使ったタイポグラフィについての記事。

**ライブラリ、ツール、サービス関連:**

*   `orpc`: ルーティング定義からOpenAPI Specを出力できるHTTPフレームワーク。
*   `oniguruma-to-es`: Onigurumaの正規表現をJavaScriptの正規表現に変換するライブラリ。
*   `flash-install`: キャッシュとスナップショットをサポートしたnpmパッケージインストールツール。
*   `hako`: QuickJSベースのWebAssemblyにコンパイルして利用するJavaScriptエンジン。

**サポートの呼びかけ:**

*   JSer.infoへのサポートとして、知人にすすめたり、GitHub Sponsorsでの支援を呼びかけています。
