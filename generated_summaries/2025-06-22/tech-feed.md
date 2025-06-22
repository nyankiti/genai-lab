# Building Open API Documentation Using YML File in Resources Folder | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920537708/0/baeldung~Building-Open-API-Documentation-Using-YML-File-in-Resources-Folder)

## Baeldung記事「YMLファイルを使用してリソースフォルダーでOpen APIドキュメントを構築する」の要約

この記事では、Spring BootプロジェクトでOpenAPI (Swagger) UIを、YMLファイルを使用してリソースフォルダーにドキュメントを格納し、生成する方法について解説しています。

**主な内容:**

1.  **YMLファイルによるSwaggerの利点と欠点:**
    *   **利点:**
        *   アプリケーションコードとドキュメントの分離による可読性の向上。
        *   非開発者（QAテスター、プロダクトマネージャーなど）もAPIドキュメントの編集が可能。
        *   マイクロサービスなどでの再利用性。
        *   バージョン管理によるAPIガバナンスの強化。
    *   **欠点:**
        *   APIコードの変更時に、手動でのドキュメント更新が必要。
        *   APIコードとドキュメントのずれが生じる可能性。

2.  **Spring Bootプロジェクトのセットアップ:**
    *   Spring Initializerを使用してMavenプロジェクトを作成。
    *   `springdoc-openapi-starter-webmvc-ui` と `spring-boot-starter-web`依存関係を追加。
    *   `application.properties`ファイルでSwaggerの設定:
        *   `spring.application.name`
        *   `springdoc.api-docs.enabled`
        *   `springdoc.api-docs.path`
        *   `springdoc.swagger-ui.url` (YMLファイルへのパスを指定)
        *   `springdoc.swagger-ui.path`

3.  **Swagger YMLファイルの構造:**
    *   `openapi`: OpenAPI仕様のバージョン。
    *   `info`: APIのタイトル、バージョン、説明など。
    *   `servers`: サーバー環境の情報（URL、説明、変数など）。
    *   `paths`: 各APIエンドポイントの定義（GET, POSTなどHTTPメソッド、タグ、概要、説明、レスポンスなど）。
        *   `responses`: レスポンスの詳細（ステータスコード、説明、コンテンツタイプ、スキーマなど）。
        *   `content`: レスポンスのペイロード形式（`application/json`など）。
        *   `schema`: レスポンスボディの構造（配列、アイテム、参照など）。
    *   スキーマ定義ファイル（`components/schemas`フォルダー内）：データオブジェクトの構造を定義。

4.  **出力と結論:**
    *   アプリケーションを実行すると、Swagger UIが生成され、APIの詳細が表示される。
    *   YMLファイルによるドキュメント管理は、大規模プロジェクトやチームでの共同作業に適している。

**要約:**

この記事は、Spring Bootプロジェクトで、OpenAPIドキュメントをYMLファイルを使用して構築する手順を説明しています。これにより、コードとドキュメントの分離、再利用性、APIガバナンスの強化が実現できます。 YMLファイルの構造と、Spring Bootでの設定方法についても解説しています。

---
# Introduction to Ambassador Design Pattern | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920537711/0/baeldung~Introduction-to-Ambassador-Design-Pattern)

このBaeldungの記事は、アンバサダーデザインパターンとその実装方法について解説しています。

**1. アンバサダーデザインパターンの概要:**

*   **定義:** クライアントとサーバー間のネットワークプロキシとして機能する構造的デザインパターン。外部サービスのプログラム的な呼び出しに関わる、ネットワーク関連の活動をカプセル化するライブラリとみなせる。
*   **主な目的:** ネットワークルーティング、オブザーバビリティ、リトライ、サーキットブレーカー、キャッシュ、セキュリティワークフローなどを抽象化すること。
*   **利点:** コードの再利用性、メンテナンス性の向上。

**2. Javaでの実装:**

*   **クライアント内での実装:**
    *   Spring Web、Spring Retryなどの依存関係を追加。
    *   `RestTemplate`を使用してHTTP呼び出しを行う。
    *   `@Cacheable`アノテーションで結果をキャッシュ。
    *   `@Retryable`アノテーションでリトライ戦略を定義。
    *   `@Recover`でリトライ失敗時のフォールバック処理を定義。
*   **サイドカーコンテナとしての実装:**
    *   アンバサダーを別のコンテナで実行し、REST APIとして公開。
    *   異なる言語で書かれたクライアントサービスが同じ外部APIに依存する場合に有効。
    *   `/v1/http-ambassador/names`のようなエンドポイントを定義し、外部リソースにアクセスできるようにする。

**3. 利点と欠点:**

*   **利点:**
    *   コードの再利用性: 複数のクライアントで共通のコードを使用できる。
    *   メンテナンス性の向上: ロジックを一箇所で管理できる。
*   **欠点:**
    *   レイテンシの増加: ネットワーク層が追加されるため、遅延が発生する可能性がある。
    *   潜在的な障害点: コンテナの信頼性によっては、システムの可用性に影響を与える可能性がある。

**4. まとめ:**

この記事では、さまざまなクライアントアプリケーションのネットワークプロキシとして機能する、設定されたアンバサダーアプリケーションの実装について解説しています。リトライ、キャッシング、タイムアウトを1か所にまとめて、アンバサダーパターンによるシステムのメンテナンス性の向上を目指しています。また、レイテンシの増加や、可用性の低下につながる可能性があるため、使用が推奨されない状況についても議論しています。
