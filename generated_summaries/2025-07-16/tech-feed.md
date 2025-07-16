# OAuth support added to MCP Adapter - Vercel

[View on Vercel Blog](https://vercel.com/changelog/oauth-support-added-to-mcp-adapter)

## Vercel、MCPアダプターにOAuthサポートを追加

VercelのMCPアダプターのバージョン1.0.0がリリースされ、MCP Authorization specの公式サポートが追加されました。これにより、MCPサーバーのセキュリティが向上します。

**主な変更点:**

*   OAuth準拠の認証フローを支援するヘルパー関数
*   ルートを保護するための新しい `withMcpAuth` ラッパー
*   Better Auth、Clerk、Descope、Stytch、WorkOSなどの一般的な認証プロバイダーを使用した、ワンクリックでデプロイ可能なサンプル
*   MCP Auth ドキュメントに詳細情報と、保護されたリソースサーバーのメタデータを公開するための `protectedResourceHandler` の導入

**認証の統合例:**

記事内には、`withMcpAuth` ラッパーと認証トークン検証関数 (`verifyToken`) を使用して、MCPサーバーに認証を統合するコード例が示されています。

**開始方法:**

*   Next.js MCPテンプレートをクローンして、すぐにデプロイ可能なサンプルサーバーを構築できます。
*   Better Auth、Clerk、Descope、Stytch、WorkOSなどの認証パートナーのスターターインテグレーションを探索できます。

**要約:**

このアップデートにより、VercelユーザーはOAuthを使用してMCPサーバーを安全に構築できるようになり、様々な認証プロバイダーとの統合が容易になりました。詳細については、MCP Authドキュメントを参照してください。

---
# How to Fix PatternSyntaxException: “Illegal repetition near index” in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921714419/0/baeldung~How-to-Fix-PatternSyntaxException-Illegal-repetition-near-index-in-Java)

## 「JavaのPatternSyntaxException: “Illegal repetition near index”を修正する方法」の要約

このBaeldungの記事は、Javaの正規表現(regex)を使用する際に発生する一般的なエラーである`PatternSyntaxException: “Illegal repetition near index”`について、その原因と解決策を詳細に解説しています。

**1. 例外の理解**:
- この例外は、正規表現パターンに構文エラーがある場合に発生し、特に繰り返し演算子（quantifiers）が不正に使用された場合に表示されます。
- 正規表現における主なquantifiers: `*` (0回以上), `+` (1回以上), `?` (0回または1回), `{n}` (n回), `{n,}` (n回以上), `{n,m}` (n回からm回)。
- これらのquantifiersは、直前の要素（文字、グループ、文字クラス）に適用されます。

**2. 「Illegal Repetition」の原因**:
- **孤立したquantifier**: quantifierが有効な要素の前にない。
- **ネストされたquantifier（グループ化なし）**: quantifierが直接別のquantifierの後に続く（グループ化がない場合）。
- **未閉じまたは不正な波括弧**: 繰り返し回数を指定する波括弧 `{}` が正しくない形式。
- **繰り返すことができない要素または不適切な要素のquantification**: quantifierが、繰り返しをサポートしない要素に適用されている。
- **literal quantifier文字のエスケープ忘れ**: quantifierシンボルを文字通りにマッチングさせる場合にエスケープを忘れる。

**3. 解決策とベストプラクティス**:
- **quantifierの正しい配置**: 必ず有効な要素の後にquantifierを配置する。
- **quantifierで開始しない**: 正規表現パターンをquantifierで開始しない。
- **グループ化**: 同じセクションに複数のquantifierを適用する場合は、括弧 `()` を使用して要素をグループ化する。
- **完全な波括弧の使用**: 波括弧quantifierは、両方の波括弧を完全な形式 `{}` で記述する。
- **特殊文字のエスケープ**: 特殊文字を文字通りにマッチングさせる場合は、適切にエスケープする。
- **例外メッセージのインデックス活用**: エラーを迅速に見つけるために、例外メッセージのインデックスを使用する。
- **オンラインツールでのテストと検証**: 信頼できるオンラインregexテストツールでregexパターンをテストし、検証する。
- **動的regexの入力検証**: 動的にregexパターンを構築する場合は、入力をサニタイズし、最終的なパターンを検証する。

**4. まとめ**:
この例外は、quantifierの誤った配置、構文の誤り、または繰り返しできない要素へのquantifierの適用によって引き起こされます。この記事では、quantifierの正しい使用法、繰り返し範囲の正確な記述、および特殊文字の適切なエスケープを検証することで、このエラーを効率的に解決する方法を示しています。また、GitHubで利用可能な記事のコードも提供されています。

---
# How to Implement a Thread-Safe Singleton in Java? | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921714422/0/baeldung~How-to-Implement-a-ThreadSafe-Singleton-in-Java)

## スレッドセーフなSingletonの実装方法

この記事は、JavaでスレッドセーフなSingletonパターンを実装する方法について解説しています。

**1. はじめに**

Singletonパターンは、アプリケーション全体で単一のインスタンスしか持たないことを保証し、そのインスタンスへのグローバルアクセスを提供するデザインパターンです。その用途として、データベース接続プール、ロガー、設定マネージャー、キャッシュマネージャー、スレッドプールなどが挙げられます。

しかし、マルチスレッド環境でSingletonを実装する際には注意が必要です。スレッドセーフな対策を施さないと、複数のスレッドが同時にインスタンスを作成してしまい、Singletonの原則が破綻する可能性があります。

**2. 基本的なSingletonの問題点**

基本的なlazy-initialized（遅延初期化）Singleton実装は、マルチスレッド環境でレースコンディションが発生し、複数のインスタンスが生成される可能性があります。

**3. Synchronized Accessor：シンプルで安全**

`getInstance()`メソッドを`synchronized`にすることで、スレッドセーフを確保できます。これは相互排他を保証しますが、すべてのアクセスで同期が発生するため、パフォーマンスのオーバーヘッドが発生します。

**4. Eager Initialization：クラスローディングによるスレッドセーフ**

Eager Singletonは、静的フィールドの初期化を利用します。JVMがクラスの初期化をアトミックに保証するため、スレッドセーフです。欠点としては、インスタンスが使用されなくても作成されるため、リソースコストが高い場合に最適ではありません。

**5. Double-Checked Locking (DCL)：遅延初期化と効率**

DCLは、遅延初期化と同期の削減を組み合わせた方法です。`instance`変数を`volatile`で宣言する必要があり、インスタンスが初期化された後は同期を回避することでパフォーマンスを向上させます。

**6. Bill Pugh Singleton：遅延初期化とエレガントさ**

Bill Pugh Singletonは、静的内部クラスを使用します。クラスは参照されるまでロードされないため、遅延初期化とスレッドセーフを同期なしで実現できます。

**7. Enum Singleton：最もシンプルなスレッドセーフSingleton**

Enum（列挙型）は、堅牢なSingletonソリューションを提供します。JVMはenumの値を一度だけインスタンス化します。また、シリアル化とリフレクションに対しても安全です。

**8. まとめ**

スレッドセーフなSingletonの実装は、並行Javaアプリケーションにおいて重要です。同期メソッドは実装が簡単ですが、高並行性下ではスケーラビリティが低下します。最適な選択肢としては以下が挙げられます。

*   ほとんどのケースでは、Bill Pugh Singleton
*   パフォーマンスが重要で遅延初期化が必要な場合は、Double-Checked Locking
*   シンプルさと安全性を重視する場合は、Enum Singleton

各手法は、異なるトレードオフを持って同じ問題を解決します。アプリケーションの要件に最適なものを選択してください。
