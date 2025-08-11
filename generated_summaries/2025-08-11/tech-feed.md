# Fixing HibernateException: Illegal Attempt to Associate a Collection With Two Open Sessions | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922995461/0/baeldung~Fixing-HibernateException-Illegal-Attempt-to-Associate-a-Collection-With-Two-Open-Sessions)

このBaeldungの記事は、Hibernate で発生する `HibernateException: Illegal attempt to associate a collection with two open sessions` を修正する方法について解説しています。

**1. 問題の概要:**

この例外は、`@OneToMany` でマップされた遅延読み込みコレクションが、最初の Hibernate セッションの外で変更された場合に発生します。Hibernate は、コレクションをそれらをロードしたセッションに密接に結び付けているため、別のセッションでアクセスまたは変更しようとすると競合が発生します。特に、非推奨の `update()` メソッドを分離されたエンティティに使用すると発生します。

**2. 例:**

記事では、`Author` および `Book` エンティティクラスを使用して問題を再現する例を示しています。`Author` は `@OneToMany` を使用して `books` コレクションを関連付けています。問題は、`author` インスタンスが最初のセッションでロードされ、その後、`book` が追加されてから別のセッションで `update()` が呼び出された場合に発生します。これにより、例外が発生します。

**3. 解決策:**

*   **`merge()` メソッドの使用:** 分離されたエンティティ（とそのコレクション）を新しいセッションに安全に再アタッチします。`merge()` メソッドは、分離されたインスタンスの状態を現在のセッションの新しい管理されたインスタンスにコピーします。これにより、新しいインスタンスとそのコレクションが現在のセッションのみに関連付けられます。
*   **単一セッションの使用:** すべての操作を単一のセッション内で行うことで、コレクションが複数のセッションに同時に関連付けられるのを防ぎます。これにより、セッション管理を簡素化し、問題を回避できます。

**4. 結論:**

この記事は、この Hibernate 例外の根本原因と、それを解決するための具体的な解決策を提供しています。
