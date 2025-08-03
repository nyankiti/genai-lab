# A Practical Guide to Null-Safety in Java With JSpecify | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922603523/0/baeldung~A-Practical-Guide-to-NullSafety-in-Java-With-JSpecify)

## JavaにおけるNull安全性の実践ガイド - JSpecifyでNullPointerExceptionを撲滅

**概要**

この記事では、JavaにおけるNullPointerException（NPE）問題の解決策として、JSpecifyというツールを紹介しています。JSpecifyは、Javaコードのnull可能性を明示的に宣言するための標準的なアノテーションを提供し、IDEや静的解析ツールが開発中に潜在的なnull関連の問題を検出できるようにすることで、より堅牢なコードベースの構築を支援します。

**主な内容**

1.  **JSpecifyとは？**

    *   Javaコードのnull可能性を明示的に表現するための標準的なアノテーションのセットを提供。
    *   特定のフレームワークやIDEに依存せず、Javaエコシステム全体で機能する。
    *   メソッド、フィールド、パラメータ（ジェネリックパラメータを含む）がnullを保持できるかどうかをアノテーションで指定可能。
    *   異なるプロジェクトやツールで異なるアノテーションが使用されていた問題を解決し、統一された標準を提供。

2.  **Null安全性の重要性**

    *   暗黙的なnull可能性に依存していたJavaにおいて、明示的にnull可能性を定義することで、バグを早期に発見。
    *   APIの利用者は、メソッドがnullを返す可能性があるか、パラメータがnullを受け入れるかを明確に理解できるため、IDEがnull可能性に関するヒントや警告を表示。

3.  **JSpecifyの使い方**

    *   `org.jspecify:jspecify`を依存関係に追加。
    *   `@Nullable`アノテーションは、アノテーションが付けられた要素がnullを許容することを意味。`@NonNull`は、nullであってはならない要素を意味。
    *   パッケージまたはクラスレベルでnull可能性を指定することも可能（`@NullMarked`と`@NullUnmarked`）。
    *   段階的な導入が可能で、`@NullMarked`を使用してデフォルトで非nullを適用し、必要な箇所に`@Nullable`を明示的に追加することで、アノテーションの数を減らすことができる。

4.  **他のnullチェック手法との比較**

    *   **Optional:** メソッドの戻り値に主に用いられ、値の有無を安全に扱うことができるが、フィールドやメソッドパラメータに使用すると複雑さが増す可能性や、わずかなパフォーマンスコストが発生。
    *   **Objects.requireNonNull():** 実行時にnullをチェックし、NullPointerExceptionをスローする。開発時やテスト時に問題を早期に発見できるが、コンパイル時やIDEでのヒントは提供されない。

5.  **JSpecifyの導入戦略**

    *   小さな自己完結型のパッケージまたはクラスからアノテーションを開始。
    *   `@NullMarked`で非nullのデフォルトを適用し、アノテーションの数を減らす。
    *   `@Nullable`を必要な箇所に明示的に追加。
    *   静的解析ツールを実行して矛盾を検出し、アノテーションを洗練させる。
    *   徐々にコードベース全体に適用範囲を拡大。

6.  **ツールとエコシステムのサポート**

    *   Checker FrameworkやNullAwayなどの静的解析ツールがJSpecifyアノテーションをサポート。
    *   IntelliJ IDEAはJSpecifyアノテーションの基本的な認識を提供し、矛盾や潜在的なnull可能性の問題をハイライト表示。

7.  **結論**

    *   JSpecifyは、Java開発者がnull関連のエラーを大幅に削減するのに役立つツール。
    *   Javaコードベースをより堅牢にし、本番環境での予期しない問題を減らす。
    *   ツールサポートはまだ発展途上だが、JSpecifyの勢いから、Javaにおけるnull可能性を表現するための標準的なアプローチになることが期待される。
---
# Inline Images in Email Using Java Mail | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922603526/0/baeldung~Inline-Images-in-Email-Using-Java-Mail)

## Java Mailを使ったメールへのインライン画像の埋め込み | Baeldung 要約

この記事では、Java Mail API を使用してメールの本文に画像を埋め込む方法について解説しています。

**1. 概要:**

*   メールに画像を添付ファイルとしてではなく、本文に直接表示する方法を説明。
*   Java Mail API の `MimeBodyPart` と `MimeMultipart` クラスを使用して、インライン画像を実現。
*   Content ID を使用して画像を識別し、HTML 本文からその ID を参照する方法を紹介。
*   GreenMail ライブラリをモック SMTP サーバーとして使用した単体テストの記述方法も説明。

**2. プロジェクトセットアップ:**

*   Maven を使用した Java アプリケーションの基本的なセットアップ。
*   Jakarta Mail API の実装である `angus-mail` と、モック SMTP サーバーである `greenmail` の依存関係を追加。
*   SMTP サーバーへの接続に必要なプロパティ（ユーザー名、パスワード、ホスト、ポートなど）の設定。
*   画像ファイル（`java.png`）をプロジェクトのリソースディレクトリに配置。

**3. MimeMultipart と MimeBodyPart を使用したインライン画像の埋め込み:**

*   SMTP サーバーへの接続情報を格納した `Properties` オブジェクトの設定。
*   `Session` オブジェクトの作成（認証情報を含む）。
*   インライン画像を含むメールを送信するための `sendEmail()` メソッドの定義：
    *   `MimeMessage` を作成。
    *   HTML 部分と画像部分を含む `MimeBodyPart` を作成。
    *   画像部分に `attachFile()` で画像ファイルを追加。
    *   `setContentID()` で画像に一意の ID を割り当て。
    *   `setDisposition(MimeBodyPart.INLINE)` で画像を添付ファイルではなくインライン表示に設定。
    *   `MimeMultipart` オブジェクトで両方の部分を関連付け。
    *   `Transport.send()` でメールを送信。
*   `sendEmail()` メソッドを呼び出し、HTML 本文で `<img src='cid:image1'></img>` タグを使用して画像を埋め込み。

**4. 単体テスト:**

*   本番環境の SMTP サーバーではなく、モック SMTP サーバーを使用。
*   GreenMail の SMTP サービスを使用した `Session` オブジェクトの作成。
*   `sendEmail()` メソッドの単体テスト：
    *   受信したメールが HTML 本文とインライン画像からなる2つの部分で構成されていることを検証。
    *   HTML 本文に `cid:image1` への参照が含まれていることを確認。
    *   画像部分の Disposition が INLINE に設定されていることを確認。

**5. まとめ:**

*   メールに複数の部分を定義し、画像に一意の Content-ID を割り当てることで、インライン画像を送信する方法を解説。
*   `cid:` URI スキームを使用して、メッセージ本文で画像を参照する方法を説明。
*   サンプルコードは GitHub で公開。
