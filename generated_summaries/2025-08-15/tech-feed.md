# Java Weekly, Issue 607 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/923221844/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 607 の要約

Java Weekly の Issue 607 は、2025年8月14日に更新され、Java関連の技術情報、ニュース、ツール、イベントなどをまとめたものです。

**1. Java技術ニュース:**

*   **SpringとJava:** Spring Framework 7 および Spring Boot 4 への準備に関する情報と、Jakarta EE 12 の新機能 (JDK 21 サポートなど) に焦点を当てています。
*   **IntelliJ IDEA:** IntelliJ IDEA 2025.2 の Spring Modulith サポート強化について言及しています。アーキテクチャ違反に対するフィードバックがIDE内で即座に得られるようになります。
*   その他、Jakarta EE 11 の新機能、OpenTelemetry 設定の注意点、JUnit に関する情報も紹介しています。
*   **ウェビナーとプレゼンテーション:** Jetbrains の Andrey Belaev による Bootiful Podcast、IntelliJ IDEA 2025.2 の新機能、#JVMLS に関する情報、Spring Cloud Vault、JSON シリアル化のベストプラクティス、JUnit に関するプレゼンテーションへのリンクが掲載されています。
*   **アップグレード情報:** Graal Dev Kit for Micronaut 4.9.1、Spring gRPC 0.10.0、Spring AI 1.0.1、Hibernate Search 8.1.0.Final、Quarkus 3.25.2、Hibernate 7.1.0.Final、Elasticsearch 9.1.2、Payara Platform Community 6.2025.8 など、様々なライブラリやフレームワークの最新バージョンに関する情報が提供されています。

**2. 技術と考察:**

*   **Impact Intelligence (インパクトインテリジェンス):** 開発者の生産性ではなく、チームのビジネスへの実際のインパクトを測定することの重要性について議論しています。
*   その他、Impact Intelligenceを向上させるためのアクション、エージェント認証、CTO向けの Impact Intelligence ガイド、チューリングマシンに関する記事も紹介しています。

**3. 今週のおすすめ:**

*   **Live coding sucks (ライブコーディングは嫌だ):** ライブコーディングに関する記事が紹介されています。
---
# What's New in Web UI: I/O 2025 Recap  |  Blog  |  Chrome for DevelopersXMastodonHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap?hl=en)

Google I/O 2025イベントのリキャップとして、Chrome for Developersブログは、CSSとWeb UIの最新情報と今後の展望について紹介しています。

**主な内容:**

*   **カスタム可能なセレクトメニュー:**  `<select>` 要素は、Popover API と CSS Anchor Positioning API を利用して、今まで難しかったCSSによるスタイル設定を可能にします。  Popover API は、Baseline Newly availableステータスとなり、主要ブラウザで安定して利用できるようになりました。

    *   Popover API: トリガー要素とpopover要素を関連付け、トップレイヤーレンダリング、自動フォーカス管理、アクセシビリティなどを提供します。
    *   `<dialog>` 要素の進化: `closedby="any"` 属性により、モーダルダイアログに、外部クリックやEscキーでのクローズ機能が追加されました。
    *   Command Invokers: JavaScriptを使わずに、ボタンとアクションを連携させる方法を提供します。

*   **CSS Anchor Positioning:** 要素同士を宣言的に関連付け、画面端に近づいた際の自動的な位置調整を実現します。Chrome 125から利用可能で、Interoperability 2025の取り組みにより、2025年末までに主要ブラウザでサポートされる見込みです。

*   **A truly customizable select:**  Chrome 134から、`appearance: base-select;` と新しい疑似要素、`<selectedcontent>` を利用することで、`<select>` 要素のカスタマイズが可能になりました。これにより、よりリッチなコンテンツ表示や、細かな表示制御が可能になります。

*   **カルーセル:** カルーセルの構築を容易にするための新機能が紹介されています。

    *   `scrollbar-width: none`, `scroll-snap-type`, `scroll-snap-align` : スクロールバーの非表示や、アイテムのスナップを制御します。
    *   `::scroll-button()` 疑似要素:  アクセシブルな「次へ」「前へ」ボタンを生成します。
    *   `::scroll-marker` と `::scroll-marker-group` 疑似要素: ナビゲーションマーカーをスクロールコンテナ内のアイテムに直接関連付けます。
    *   Scroll-state queries:  スクロールの状態（スナップ、スティッキー、スクロール可能）に基づいてスタイルを適用します。

*   **インタラクティブホバーカード:** ユーザーの「関心」に基づいて表示されるホバーカードを、より簡単に構築できる新機能が紹介されています。

    *   `[interestfor]` 属性: ポインターオーバー、タブナビゲーション、長押しなどのユーザーの「関心」に基づいてPopoverを表示します。
    *   `interest-target-delay` プロパティ: エントリーおよびイグジットの遅延を制御します。
    *   `:has-interest` 疑似クラス: 関連要素にスタイルを設定できます。
    *   `popover="hint"`: 他のPopoverを閉じずに表示できるヒントタイプのPopover。

これらの機能は、より強力で宣言的なWebプラットフォームへの移行を促進し、JavaScriptの量を減らし、パフォーマンスを向上させ、クリエイティブなUI作成に集中することを可能にします。
