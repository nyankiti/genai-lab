# Implementing Unions in Hibernate | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920359853/0/baeldung~Implementing-Unions-in-Hibernate)

## Hibernate での Union の実装 | Baeldung 要約

この記事では、Hibernate で Union クエリを実装するさまざまな方法を解説しています。Baeldung大学のスキーマを例として、パートタイム講師と研究者の情報を別々のテーブルに格納し、それらを単一のグループとしてクエリする方法を紹介しています。

**主な内容:**

1.  **JPQLクエリでのUnionの使用:**
    *   Hibernate 6 以降では、 `union` ステートメントを `createQuery()` で直接使用できます。
    *   コンストラクタ式を使用することで、結果を `PersonDto` に自動的にマッピングできます。
    *   `union` ステートメントは重複行を削除し、`union all` はすべての行を返します。

2.  **メモリ内での Union ステートメントのシミュレーション:**
    *   `JpaRepository` の `findAll()` メソッドを使用して2つのクエリの結果を収集します。
    *   `Stream.concat()` を使用して結果をマージし、役割プロパティの適切な値を設定します。
    *   `List` にマージする場合は `union all` と同様の結果が得られます。
    *   重複を削除するには、結果を `Set` に収集し、`PersonDto` で `equals()` と `hashCode()` をオーバーライドする必要があります。
    *   欠点として、クエリが2つになるためパフォーマンスが低下し、ページネーションが難しくなる可能性があります。

3.  **Union を使用した View のマッピング:**
    *   クエリが複雑な場合は、データベースで Union クエリを作成し、Java でのみマッピングできます。
    *   `CREATE VIEW` を使用してビューを作成します。
    *   `createNativeQuery()` を使用して、Unionの結果を `PersonDto` に直接マッピングできます。
    *   `@Query` アノテーションを使用したプロジェクションインターフェースを作成することもできます。

4.  **CriteriaBuilder の使用:**
    *   `CriteriaBuilder` は、Hibernate の Union ステートメントもサポートしています。
    *   Hibernate の実装にアクセスするには、`Session` をアンラップする必要があります。
    *   各サブクエリを個別に生成し、`unionAll()` を呼び出して結果を返します。
    *   動的なクエリを構築する場合に特に有効です。

**結論:**

記事では、Hibernate で Union クエリを実装するさまざまな方法を提示し、それぞれにパフォーマンス、保守性、ページネーションサポートなどのトレードオフがあることを解説しています。Hibernate 6 以降のネイティブサポートや、メモリ内でのマージ、データベースビューのマッピングといった代替手段を紹介し、状況に応じた適切な方法を選択できるよう説明しています。

---
# VMware Tanzu Gemfire 10.1をOrbStackのLinux Machine上のRocky Linuxにインストールするメモ - IK.AM

[View on IK.AM](https://ik.am/entries/854)

## VMware Tanzu GemFire 10.1をOrbStackのLinux Machine上のRocky Linuxにインストールするメモ - 要約

本記事は、OrbStackのLinux Machine上でRocky Linux環境を構築し、VMware Tanzu GemFire 10.1をインストールする手順をまとめたものです。

**環境構築:**

*   最新のJava 21をサポートするGemFire 10.1を使用。
*   cloud-configファイルを用いて、Java 21 OpenJDKのインストール、Gemfireユーザーの作成、メモリ設定を行います。
*   OrbStackのLinux Machine上でGemFireクラスター(Locator x 2, Server x 3)を構築します。

**インストール手順:**

1.  GemFire 10.1のアーカイブを展開。
2.  cloud-init-gemfire.yamlファイルで、Java環境設定とGemFire関連設定を定義。
3.  OrbStackの`orb create`コマンドで、GemFireのLocator（2台）とServer（3台）のLinux Machineを作成し、`orbctl start`コマンドで起動。
4.  `gfsh`コマンドを使用して、各LocatorとServerを起動。
5.  `gfsh`シェルでGemFireクラスターに接続し、`create region`コマンドでPARTITION\_PERSISTENTタイプのRegionを作成。
6.  `put`コマンドでテストデータを追加し、`query`と`locate entry`コマンドでデータの格納を確認。
7.  耐障害性のテストとして、Serverを停止し、データへのアクセスが継続できることを確認。
8.  停止したServerでデータの冗長性を回復するために、`rebalance`コマンドを実行。
9.  停止したServerを再起動し、`rebalance`を再度実行してデータが正しく配置されることを確認。

**その他:**

*   Tanzu GemFire Management ConsoleをDockerコンテナとして実行し、クラスターを可視化。
*   チュートリアル終了後、`gfsh`コマンドでクラスターを停止し、`orbctl delete`コマンドで作成したMachineを削除してクリーンアップ。

この手順により、OrbStack上のRocky Linux環境でGemFireクラスターを構築し、データの分散、レプリケーション、耐障害性を確認できます。
