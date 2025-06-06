# Sanitize HTML Code to Prevent XSS Attacks | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/918953579/0/baeldung)

## HTMLコードのサニタイズによるXSS攻撃対策 | Baeldung

**概要:**

本記事は、XSS（クロスサイトスクリプティング）攻撃を防ぐために、JavaアプリケーションでHTML入力をサニタイズする方法について解説しています。OWASP Java HTML SanitizerとJSoupという2つのライブラリを用いた実装例を紹介し、それぞれの利点と利用シナリオを比較しています。

**内容:**

1.  **XSS攻撃とは:**
    *   XSSは、攻撃者が悪意のあるスクリプトをウェブアプリケーションに注入し、ユーザーのブラウザで実行させる攻撃手法です。これにより、データの盗難、セッションハイジャック、ウェブサイトの改ざんなどが行われる可能性があります。

2.  **OWASP Java HTML Sanitizerによるサニタイズ:**
    *   **セットアップ:** OWASP Java HTML Sanitizerライブラリをpom.xmlに追加します。
    *   **基本的な実装:** 既存のサニタイザーである`Sanitizers.FORMATTING`と`Sanitizers.LINKS`を組み合わせたデフォルトポリシーを使用するユーティリティメソッドを定義します。これにより、基本的なフォーマットタグ（<b>、<i>、<u>など）とハイパーリンク（<a>タグ）のみを許可します。
    *   **柔軟なサニタイズ:** `HtmlPolicyBuilder` APIを使用して、許可するHTML要素と属性を細かく制御するカスタムポリシーを定義します。ブロックレベル要素とインラインフォーマット要素を許可するポリシーや、より高度なカスタムポリシーの例を紹介しています。カスタムポリシーでは、許可する要素、URLプロトコル、属性、スタイルなどを柔軟に設定できます。
    *   **テスト:** サニタイズされた結果が期待通りになるか、テストコードを用いて検証します。

3.  **JSoup HTML Cleanerによるサニタイズ:**
    *   **セットアップ:** JSoupライブラリをpom.xmlに追加します。
    *   **実装:** `Safelist`を使用して、許可するHTML要素と属性を定義します。基本的なHTMLタグに加えて、見出しタグや特定の属性を追加する例を示しています。JSoupは、HTMLの解析とクリーニングに優れており、DOMの検査や操作が必要な場合に適しています。
    *   **特徴:** JSoupは、`target="_blank"`を使用する`<a>`タグに自動的に`rel="nofollow"`を追加し、タブナッビング攻撃を防ぎます。

4.  **結論:**
    *   厳格なXSS保護と詳細なポリシー制御が必要な場合は、OWASP Java HTML Sanitizerが適しています。HTMLの解析、操作、または単純なsafelistベースのアプローチが必要な場合は、JSoupがより適しています。

**補足:**

*   記事内では、各実装例に対して、テストコードも提示しています。
*   OWASP Java HTML SanitizerとJSoupのどちらも、GitHubで利用可能なソースコードが提供されています。
