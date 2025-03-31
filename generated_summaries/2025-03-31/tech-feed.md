# Mutation Testing in Rust

[View on A Java geek Nicolas Fränkel's blog](https://blog.frankel.ch/mutation-testing-rust/)

## RustにおけるMutation Testing：cargo-mutantsの活用と改善

この記事では、RustにおけるMutation Testingの現状と、`cargo-mutants`というクレートの活用について解説されています。著者は、Mutation Testingに以前から関心があり、Rustで同様のテストを行うために`cargo-mutants`を試しました。

まず、RustにおけるMutation Testingのツールとして`cargo-mutants`と`mutagen`の2つが紹介されていますが、`mutagen`はメンテナンスが停止しているため、`cargo-mutants`を使用することにしました。

簡単なサンプルコード（`LowPassPredicate`構造体とそのテスト）を用いて、`cargo-mutants`の基本的な使い方を説明しています。`cargo install --locked cargo-mutant`でインストールし、`cargo mutants`コマンドで実行します。

しかし、当初`cargo-mutants`では期待されたMutationが検出されませんでした。そこで、著者はソースコードを調査し、演算子のMutation処理に問題があることを特定しました。具体的には、`<`演算子が`<=`にMutationされていないことが原因でした。

問題を修正するために、著者は`cargo-mutants`のリポジトリをフォークし、該当箇所を修正しました。修正後、ローカルにインストールし直し、再度`cargo mutants`を実行したところ、期待通りMutationが検出されるようになりました。

次に、境界値テストを追加し、すべてのMutationが検出されるようにテストコードを改善しました。最終的に、修正内容をPull Requestとして`cargo-mutants`のリポジトリに送りました。

Pull Requestは、リポジトリのメンテナーによって大幅な支援を受け、最終的にマージされました。

結論として、この記事では、`cargo-mutants`を用いたMutation Testingの例を紹介し、バグを発見して修正し、最終的にOSSプロジェクトに貢献するまでのプロセスを詳細に説明しています。また、Mutation Testingの重要性と、`cargo-mutants`がRustのコード品質向上に貢献する可能性を示唆しています。

**要約のポイント:**

*   RustにおけるMutation Testingのツールとして`cargo-mutants`を紹介
*   `cargo-mutants`の基本的な使い方と問題点
*   問題点の特定と修正プロセス
*   境界値テストの重要性
*   Pull Requestを通じてOSSプロジェクトに貢献した事例
*   Mutation Testingの重要性と`cargo-mutants`の可能性
