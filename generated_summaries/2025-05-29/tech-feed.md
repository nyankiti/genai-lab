# Chrome 138 beta  |  Blog  |  Chrome for DevelopersXGitHubLinkedInMastodonBlueskyHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/chrome-138-beta?hl=en)

## Chrome 138 ベータ版 リリース内容 要約

このブログ記事は、2025年5月28日にリリースされたChrome 138 ベータ版の変更点について解説しています。Android、ChromeOS、Linux、macOS、Windows版を対象とし、主にCSS、UI、Web API、デプレケーションと削除に関する新機能や変更点を紹介しています。

**主な変更点:**

*   **CSSとUI:**
    *   CSSのサイジングキーワード `stretch` の追加
    *   CSSの符号関連関数 `abs()` と `sign()` の追加
    *   OSレベルのフォントスケールをCSSに反映する環境変数
    *   要素の位置や総数を基にスタイルを設定できる `sibling-index()` と `sibling-count()` 関数
    *   `progress()` 関数によるインタポレーションの進捗表現
    *   ビューポートセグメント列挙APIによる折りたたみデバイスへの対応

*   **Web API:**
    *   WebCodecsにビデオフレームの向きに関するメタデータ対応
    *   クラッシュレポートAPIへの `is_top_level` と `visibility_state` フィールド追加
    *   属性のシリアル化における `<` と `>` のエスケープ
    *   Integrity Policy for scriptsによるスクリプトの完全性検証
    *   ストレージクォータの予測可能性向上
    *   pushsubscriptionchangeイベントの強化
    *   Speculation rulesの拡張（`prefetchCache`、`prerenderCache`、`target_hint` フィールド）
    *   Storage Access API の厳格な Same Origin Policy に準拠
    *   AIを活用したテキスト要約、言語検出、翻訳APIの導入。企業ポリシーによる無効化も可能。
    *   Web app scope extensionsによるWebアプリのスコープ拡張
    *   AndroidでのBluetooth経由のWeb Serial APIのサポート

*   **デプレケーションと削除:**
    *   非同期範囲削除の非推奨（Media Source Extensions）
    *   SwiftShaderフォールバックの削除

**その他:**

*   この記事は、Chrome for Developersのブログとして公開されています。
*   提供される機能の詳細については、リンクやChromeStatus.comを参照できます。
*   記事はクリエイティブ・コモンズ表示4.0ライセンスに基づいており、コードサンプルはApache 2.0ライセンスに基づいて提供されています。