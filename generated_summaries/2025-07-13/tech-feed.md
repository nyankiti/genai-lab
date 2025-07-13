# Passkey への道 #6: タブーを破った Apple | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-07-13/load-to-passkey-6.html)

## Passkey への道 #6: タブーを破った Apple - 要約

この記事は、Apple がパスワードに代わる新たな認証技術「Passkey」を発表したことの意義を解説しています。

**背景:**

*   従来の認証方法、特に WebAuthn や TOTP では、バックアップコードの管理や物理的な認証デバイスの扱いが複雑であり、ユーザーにとって使いにくいものでした。
*   Apple は、セキュリティとプライバシーを重視し、パスワードの問題を解決するために Passkey を発表しました。

**Passkey の革新性:**

*   Passkey は、WebAuthn API を利用した秘密鍵認証ですが、iPhone の内部で生成された鍵を iCloud Keychain で同期するという点で画期的です。
*   認証業界の常識であった「鍵を外部に持ち出さない」というタブーを破り、利便性とセキュリティを両立させました。
*   これにより、ユーザーは iCloud にログインしたデバイスで Passkey をタップするだけでログインできるようになり、パスワードを入力する手間が省けました。

**Passkey のメリット:**

*   フィッシング詐欺や情報漏洩のリスクを低減します。
*   iPhone を紛失しても、他のデバイスで Passkey を利用できます。
*   Apple の垂直統合により、ユーザーエクスペリエンスが向上し、セキュリティが強化されています。

**生体認証との比較:**

*   生体認証は、プライバシーの問題や、一度漏洩すると変更できないというリスクがあります。
*   Passkey は、生体認証の代替手段として、より安全で使いやすい選択肢です。

**デバイスの生体認証と Passkey の関係:**

*   Passkey でのログイン時には、Face ID や Touch ID が使用されることがありますが、これは「生体認証で GitHub にログインしている」わけではありません。
*   生体認証は、あくまで iCloud Keychain をアンロックするためのものであり、ユーザー認証（User Verification）の役割を果たします。

**結論:**

*   Apple の Passkey は、パスワードに代わる革新的な認証技術であり、認証業界に大きなイノベーションをもたらしました。
*   Passkey は、セキュリティ、プライバシー、利便性を重視する Apple の姿勢を象徴しています。

---
# 2025-07-12のJS: TypeScript 5.9 Beta、i18nとローカライズ、Node.jsのモダンな機能 - JSer.info

[View on jser.info](https://jser.info/2025/07/12/typescript-5.9-beta-i18n-node.js/)

2025年7月12日のJSer.infoは、TypeScript 5.9 Betaのリリース、国際化とローカライズに関する記事、そして2025年を見据えたNode.jsの最新機能に関する情報を中心に構成されています。

**主な内容:**

*   **TypeScript 5.9 Beta:**
    *   `tsc --init` で生成される設定の変更、`import defer` 構文のサポート、`--module node20` オプションの追加など、新しい機能と改善が含まれています。
    *   型チェックの改善とパフォーマンス向上も行われています。
*   **国際化とローカライズ (i18n):**
    *   Patreonの国際化に関する記事を通して、ローカライズの際に注意すべき点（条件式での文の分割、Intl APIの活用、複数形の表現のローカライズなど）が紹介されています。
    *   ローカライズシステムの移行における問題と解決策についても触れられています。
*   **Node.jsのモダンな機能 (2025年向け):**
    *   ESM、built-in fetch API、Worker threadsによる並列処理、AbortControllerによるキャンセル処理など、Node.jsの最新機能の活用方法が解説されています。
    *   Permission model、import maps、Single Executable Applicationsなどの新機能についても言及されています。

**その他:**

*   Nuxt.jsの開発元であるNuxtLabsがVercelに買収されたというニュース。
*   Node.js v24.4.0、webpack v5.100.0、Playwright v1.54.0などのリリース情報。
*   NGINXのnjsでQuickJSエンジンが利用可能になったこと。
*   RollupなどのScope HoistingとCode Splittingの相性の問題。
*   TypeScriptのMCPサーバフレームワークや、TSLintのルールをtsgoで実装することで高速化を図る試みなど、TypeScript関連のライブラリ情報。
*   JSONの修復ツール。
