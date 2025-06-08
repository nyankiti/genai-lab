# Authorize Request for Certain URL and HTTP Method in Spring Security | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/919858091/0/baeldung~Authorize-Request-for-Certain-URL-and-HTTP-Method-in-Spring-Security)

このBaeldungの記事は、Spring Securityを使用して特定のURLとHTTPメソッドに対するリクエストを認可する方法について解説しています。

**主な内容:**

*   **目的:** Spring Securityを使用して、ユーザーのロールに基づいて特定のURLへのアクセスを制限したり、HTTPメソッドに基づいてアクセスを制御する方法を学ぶ。
*   **前提:** 記事はSpring Bootアプリケーションを構築し、Spring Securityの基本的な知識があることを前提としている。
*   **手順:**
    1.  **プロジェクトのセットアップ:** 必要な依存関係（spring-boot-starter-security, spring-boot-starter-data-jpa, spring-boot-starter-web, h2-database）をpom.xmlに追加し、application.propertiesファイルでH2データベースの設定を行う。
    2.  **SecurityConfigクラスの作成:** `@Configuration`, `@EnableWebSecurity`, `@EnableMethodSecurity`アノテーションを使用して、セキュリティ設定を定義する。`securityFilterChain` Bean内で、`authorizeHttpRequests`を使用して、特定のURLとHTTPメソッドに対するアクセス制御を設定する（例: `/users/register`は許可、`/h2-console/**`は許可、`/users/profile`はUSERまたはADMINロールが必要、`/posts/mine`はUSERロールが必要、`POST /posts/create`はUSERロールが必要など）。
    3.  **実装:** ユーザー登録、プロファイルの取得、投稿の作成、更新、削除などの機能を提供する。
        *   `UserController`：ユーザー登録（`/users/register`）とプロファイル取得（`/users/profile`）を処理。プロファイル取得には認証が必要。
        *   `PostController`：投稿の作成（`POST /posts/create`）、自分の投稿の一覧表示（`GET /posts/mine`）、投稿の更新（`PUT /posts/{id}`）、投稿の削除（`DELETE /posts/{id}`）を処理。`@PreAuthorize`アノテーションを使用して、メソッドレベルの認可を行う。
        *   `UserService`：ユーザー登録とプロファイル取得のロジックを実装。
        *   `CustomUserDetailService`：ユーザー名に基づいてユーザー情報をロードする。
        *   `PostService`：投稿の作成、更新、削除、自分の投稿の一覧表示などのビジネスロジックを実装。
    4.  **DTO（Data Transfer Object）の定義:** ユーザー登録リクエストDTO、ユーザープロファイルDTO、投稿リクエストDTO、投稿レスポンスDTOを定義。
*   **コード例:** 記事内には、SecurityConfigクラス、UserController、PostController、UserService、CustomUserDetailService、PostServiceのコード例が含まれている。
*   **まとめ:** 記事は、Spring Securityを使用してロールベースのアクセス制御とHTTPメソッドによるアクセス制御を実現し、アプリケーションをセキュアにする方法を解説している。また、メソッドレベルでの認可の使用方法についても説明している。
*   **GitHub:** 記事のソースコードはGitHubで公開されている。