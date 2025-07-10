# Web Application Firewall control now available with vercel.json - Vercel

[View on Vercel Blog](https://vercel.com/changelog/web-application-firewall-control-now-available-with-vercel-json)

## Vercel、Web Application Firewall (WAF) の制御を `vercel.json` で利用可能に

Vercelは、Web Application Firewall (WAF) のアクションを、ダッシュボード、API、Terraformに加え、`vercel.json` ファイル内で直接制御できるようになったと発表しました。

今回のアップデートでは、`vercel.json` 内の `has` および `missing` マッチャーが強化され、ヘッダー、リライト、リダイレクト、ルート全体で、より表現力豊かな条件をサポートできるようになりました。マッチングオプションには以下が含まれます。

*   文字列の等価性と不等価
*   正規表現
*   プレフィックスとサフィックス
*   文字列配列への包含と除外
*   数値比較

以下は、特定のヘッダーで始まるリクエストを拒否する例です。

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "routes": [
    {
      "src": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": {
            "pre": "x-bad-header-"
          }
        }
      ],
      "mitigate": {
        "action": "deny"
      }
    }
  ]
}
```

VercelのWAFと、`vercel.json` でのWAFルールの設定方法について詳しくは、公式ドキュメントを参照してください。

---
# Inngest joins the Vercel Marketplace - Vercel

[View on Vercel Blog](https://vercel.com/changelog/inngest-joins-the-vercel-marketplace)

## 要約：Vercel MarketplaceにInngestが登場

InngestがVercel Marketplaceに加わり、Next.jsアプリ向けの信頼性の高いバックグラウンドジョブとAIワークフローを簡単に構築できるようになりました。

**主な利点:**

*   **Next.jsアプリとの統合:** `app/`ディレクトリ内で直接バックグラウンドジョブを記述できます。
*   **プレビュー環境とブランチのサポート:** プレビュー環境とブランチを完全にサポートします。
*   **ワンクリックインストールと統合課金:** ワンクリックでインストールでき、無料枠 (月間10万回の実行) が用意された統合課金システムを利用できます。
*   **AI機能の実装:** AI機能を簡単に実装したり、新しいエージェントパターンを取り入れることができます。

Vercel MarketplaceからInngestをインストールして、すぐにワークフローの構築を開始できます。

---
# Passkey への道 #3 | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-07-10/load-to-passkey-3.html)

## Passkey への道 #3 要約

本記事は、パスワード認証の脆弱性と、フィッシング詐欺から身を守るための対策について解説しています。

**現状の課題:**

*   パスワード認証だけでは不十分であり、TOTP（時間ベースのワンタイムパスワード）による2段階認証もフィッシング詐欺によって突破されるケースが増加しています。
*   フィッシング詐欺では、本物そっくりの偽サイトでパスワードとTOTPの両方を盗み取り、正規ユーザーになりすます手口が横行しています。
*   従来の対策であるURL確認の徹底は、サイト数が多いため現実的ではありません。

**有効な対策:**

*   **パスワードマネージャーの活用:** パスワードマネージャーのAutofill機能を積極的に利用し、ログイン時に自動入力されるかどうかでサイトの安全性を確認します。Autofillされない場合は、フィッシング詐欺の可能性を疑うことができます。
*   **パスワードマネージャーでのTOTP管理:** パスワードマネージャーでパスワードとTOTPをまとめて管理することで、Autofillによるセキュリティ強化を図り、管理の手間を軽減します。
*   **サービス側のAutofill対応:** サービス側は、Autofillを正しく機能させるために、適切なHTMLタグを使用し、アカウント登録とログインのドメインを一致させる必要があります。

**結論:**

*   手入力でのパスワード入力や、Autofillできないサイトでは、セキュリティ対策として不十分です。
*   パスワードマネージャーによるAutofillの徹底と、サービス側のAutofill対応が重要です。
*   最終的には、文字列入力に頼らない認証方式（Passkeyなど）が理想的です。
