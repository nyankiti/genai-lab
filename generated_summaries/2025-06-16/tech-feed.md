# 2025-06-15のJS: Safari 26 Beta、pnpm 10.12、Jest 30 - JSer.info

[View on jser.info](https://jser.info/2025/06/15/safari-26-beta-pnpm-10.12-jest-30/)

2025年6月15日のJSer.infoの記事では、以下の内容が扱われています。

**主要なトピック:**

*   **Safari 26 Beta:**
    *   WWDC25で発表されたSafari 26 Betaがリリースされました。バージョン表記がmacOSと統一され、西暦の下2桁で表されるようになります。
    *   CSSではAnchor Positioning、Scroll-driven Animations、text-wrap:pretty、contrast-color()、progress()がサポートされました。
    *   Web APIではWebGPU、HDR Images、Digital Credentials API、Trusted Types API、URL Patternが新たにサポートされました。
    *   Web InspectorのService Workerや非同期処理のデバッグが改善されました。
    *   SVGファビコンの対応、WebAssemblyのインタープリタ対応による実行開始速度の改善も行われました。
*   **pnpm 10.12.1:**
    *   グローバル仮想ストアを実験的にサポートする`enableGlobalVirtualStore`オプションが追加され、依存関係キャッシュがある場合のインストール速度が向上しました。
    *   `pnpm update`がcatalogをサポートし、`catalogMode`オプションと`--save-catalog`フラグが追加されました。
*   **Jest 30:**
    *   Node.js 14/16/19/21のサポートが終了しました。
    *   TypeScript 5.4+、jsdom 26へアップデートされました。
    *   `unrs-resolver`によるパフォーマンスとメモリの改善、設定ファイルのTypeScriptサポート、`import.meta`のサポート、`using`を使ったspyの自動復元などが追加されました。
    *   `expect.arrayOf`、`jest.advanceTimersToNextFrame()`、`jest.unstable_unmockModule()`などの新しいAPIも追加されました。

**その他の情報源と関連情報:**

*   Oxlint v1.0 Stable リリース。
*   core-js v3.43.0 リリース（Explicit Resource Management、Array.fromAsync、Error.isErrorがStableに移行）。
*   Node.js v24.2.0 リリース（HTTP/2 priority signalingの削除、import.meta.mainのサポート）。
*   CSSの開発者アンケート「State of CSS 2025」の募集開始。
*   WebプラットフォームのBaselineの実装状況を可視化するダッシュボード「WebStatus.dev」について。
*   Cloudflare WorkersのFinalizationRegistry APIに関する注意喚起（使用非推奨）。
*   Storybook 9の変更点（破壊的変更、VitestとPlaywrightを使ったStorybookテストのStable化、パッケージサイズの削減、新しい機能の追加など）。

**ソフトウェア、ツール、ライブラリ関連:**

*   Rspackを使ったテストフレームワーク「rstest」。
*   React/Next.js/Vueなどに対応したi18nフレームワーク「intlayer」。
*   barrel importsを検知して修正できるツール「no-barrel-file」。
