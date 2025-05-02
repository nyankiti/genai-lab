# iOS developers can now offer commission-free payments on web - Vercel

[View on Vercel Blog](https://vercel.com/blog/ios-developers-can-now-offer-commission-free-payments-on-web)

## iOS開発者がWebで手数料無料の支払いを提供可能に：Vercel

この記事は、Epic Games v. Appleの連邦裁判所の判決を受け、iOS開発者がアプリ内での外部支払い方法への誘導をより自由に、そしてより有利な条件で行えるようになったことを解説しています。

**背景**

Appleは長らくApp Store内で支払い方法を厳格に管理し、30%の「Apple税」を課してきました。2021年の差し止め命令後、Appleは外部支払いへのリンクを許可するものの、27%の手数料を課し、ユーザーに警告画面を表示するなど、事実上、価格競争を阻害していました。

**判決の主な変更点**

*   開発者はアプリ内でユーザーを外部の支払いページに直接誘導できるようになりました。
*   Appleは、自社で処理しない支払いに対して27%の手数料を課すことができなくなりました。
*   ユーザー体験が向上し、警告画面や無意味なリダイレクトがなくなりました。

**判決の影響とメリット**

*   開発者は支払い体験を自ら設計し、所有できるようになりました。
*   価格を抑えたり、利益を再投資したりできるようになりました。
*   ユーザーは透明性の高い価格設定、割引モデル、スムーズな購入フローを期待できます。

**Webの役割の拡大**

今回の判決はWebに直接関係するものではありませんが、Webをモバイルコマースの有力なプラットフォームとして再認識させることになります。ネイティブ開発者は、App Storeの制限なく、高速で安全、そしてカスタマイズ可能なチェックアウトフローをWebで構築できるようになります。

**Vercelの取り組み**

Vercelは、iOS開発者がWebでの支払いを容易にするためのスターターキットをリリースしました。このキットは、Stripe Checkoutとの連携をサポートし、Vercel上で簡単にデプロイできます。Vercelは、開発者にパフォーマンス、信頼性、そしてコントロールを提供するプラットフォームとして、ネイティブアプリとオープンなWebを繋ぐことで、iOS開発者をサポートしていくことを目指しています。

**まとめ**

今回の判決は、iOS開発者にとって大きな転換点であり、Webを介した支払い方法の自由度を向上させました。Vercelなどのツールを活用することで、開発者はユーザーに優れた体験を提供し、ビジネスを成長させる新たな機会を得ることができます。

---
# Optionally disable deployment_status webhook events for GitHub Actions - Vercel

[View on Vercel Blog](https://vercel.com/changelog/optionally-disable-deployment_status-webhook-events-for-github-actions)

## VercelにおけるGitHub Actionsの `deployment_status` Webhookイベントの無効化に関する要約

この短い記事では、VercelがGitHubリポジトリに接続されている際に送信する `deployment_status` Webhookイベントを無効にできるようになったことを説明しています。

**詳細:**

*   **`deployment_status` イベントとは:** Vercelがデプロイメントを行うたびにGitHubに送信されるイベントで、GitHubのプルリクエストのアクティビティログにステータスイベントを追加します。これにより、チームは最新情報を把握できますが、デプロイメントイベントが多いリポジトリ、特にモノレポではログが煩雑になる可能性があります。
*   **無効化のメリット:** イベントを無効にすることで、GitHub PRのイベント履歴が整理され、よりクリーンで焦点を絞ったプルリクエストのアクティビティ表示が可能になります。
*   **Vercelコメントは継続:** プレビューデプロイメントへのリンクを含むVercelのGitHubコメントは、これまで通り投稿され続けます。
*   **`repository_dispatch` イベントへの移行推奨:** `deployment_status` イベントは、GitHub Actionsのトリガーとしてよく使用されますが、より豊富なVercelデプロイメント情報を含むワークフローを簡素化するために、`repository_dispatch` イベントへの移行が推奨されています。
*   **関連情報:** 詳細については、Vercelのドキュメントを参照してください。

---
# Create custom WAF rules directly from the Vercel Firewall tab - Vercel

[View on Vercel Blog](https://vercel.com/changelog/create-custom-waf-rules-directly-from-the-vercel-firewall-tab)

## Vercel FirewallタブからのカスタムWAFルールの直接作成に関する要約

この記事は、Vercelのファイアウォールタブから直接カスタムWAFルールを作成できるようになったことを説明しています。

**主なポイント:**

*   **機能:** ファイアウォールタブで、トラフィックをパラメータ（IPアドレス、ユーザーエージェント、リクエストパスなど）でグループ分けして表示した際に、各タイムシリーズのアクションメニューから「カスタムルールの作成」を選択できるようになりました。
*   **仕組み:** 選択したパラメータに合致するカスタムWAFルールのドラフトが自動的に生成され、編集して保存、公開できます。
*   **即時反映:** 保存・公開されたWAFルールは、Vercelのグローバルネットワーク全体に即座に反映されます。
*   **利用料金:** この機能は、すべてのプランのユーザーが追加料金なしで利用できます。
*   **その他:** Vercelファイアウォールに関する詳細については、関連リンクを参照してください。

**要するに、Vercelユーザーはファイアウォールタブからトラフィックを分析し、異常なパターンを特定して、簡単にカスタムWAFルールを作成し、Webサイトを保護できるようになったということです。**
