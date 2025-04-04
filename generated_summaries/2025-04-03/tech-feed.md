# CVE-2025-30218 - Vercel

[View on Vercel Blog](https://vercel.com/changelog/cve-2025-30218)

## CVE-2025-30218 の詳細な要約

**概要:**

CVE-2025-30218 は、Next.js の Middleware における軽微な脆弱性で、Vercel プラットフォームに特有の影響を及ぼします。これは、CVE-2025-29927 の修正プロセスにおいて発見されたもので、独立した研究者からの報告とも一致しました。

**脆弱性の内容:**

Next.js の Middleware では、`x-middleware-subrequest-id` というヘッダーが複数リクエスト間で保持され、再帰処理を防ぐために使用されていました。しかし、この ID は、Next.js アプリケーションとは異なるホストへのリクエストに対しても送信されていました。具体的には、Middleware 内でサードパーティへの `fetch` リクエストを行う際に、`x-middleware-subrequest-id` がサードパーティに漏洩する可能性がありました。

**影響:**

この脆弱性の悪用は、攻撃者がサードパーティを制御する必要があるため可能性は低いとされています。しかし、Vercel は予防的な措置を講じることにしました。この再帰防止ロジックはすでに Middleware から削除する計画があり、Node.js ランタイムの新しいアップデートではサポートされていなかったため、今回の開示によってランタイム間のパリティを向上させる取り組みが加速されました。

**対策:**

Vercel の顧客は、プラットフォーム環境にすでに実装されている緩和策によって保護されています。Vercel は、最新の Next.js パッチバージョンまたは選択したバックポートにアップデートすることを推奨しています。他のインフラストラクチャプロバイダーでホストされている Next.js アプリケーションは、Vercel の再帰保護の実装に固有の問題であるため、影響を受けません。

**修正:**

CVE-2025-29927 の事後検証に基づいて策定された新しい社内プロセスに従い、脆弱性情報が開示されました。15.x バージョンにはパッチが適用され、新たに公開された LTS ポリシーの例外として、12.x から 14.x バージョンまでのバックポートが提供されました。また、Vercel は Next.js の新しいパートナーと協力し、早期に情報開示を行いました。

**謝辞:**

本脆弱性の報告に貢献した Jinseo Kim (kjsman) 氏と ryotak 氏に謝意が表されています。これらの研究者は、バグ報奨金プログラムの一環として報酬が授与されました。

---
# The no-nonsense guide to composable commerce - Vercel

[View on Vercel Blog](https://vercel.com/blog/the-no-nonsense-guide-to-composable-commerce)

## Vercelによるコンポーザブルコマースの現実的な導入ガイド：ビジネス成果に焦点を当てる

この記事では、Vercelが提唱するコンポーザブルコマース導入における現実的なフレームワークを紹介しています。コンポーザブルコマースプロジェクトが複雑化し、目標達成を阻害し、コスト増を招くことが多い現状を踏まえ、ビジネス成果に焦点を当てた、無駄を省いたアプローチを提案しています。

**5つの重要な原則**

1. **目的とする成果に焦点を当てる:** コンポーザブルコマースへの移行理由は、主にフロントエンドの強化、特定のツール連携、バックエンドの最適化の3つです。モノリシックなシステムからの移行であれば、これらの主要な目標を達成するために必要最小限の変更に留め、不要な作業を避けるべきです。

2. **モノリスをバックエンドとして活用:** 特にフロントエンドの強化やツール連携が目的の場合、既存のモノリシックプラットフォームをAPIバックエンドとして維持することを推奨します。これにより、システムの切り替えリスクを軽減し、迅速なイテレーションを可能にします。

3. **フロントエンドプロジェクトは低コストで実現可能:** ツール連携やバックエンドの最適化が目的の場合、ユーザーエクスペリエンスの再設計に過度な労力をかける必要はありません。AI支援ツールを活用して、既存のUXを効率的に再現することで、迅速な移行を実現できます。

4. **必ずしも統合レイヤー（ミドルウェア）は必要ない:** 最新のフロントエンドフレームワーク（Next.jsなど）は、統合レイヤーとして効果的に機能するため、多くの場合、ミドルウェアは不要です。複雑なマルチバックエンド環境を除き、ミドルウェアは不必要なオーバーヘッドを生む可能性があります。

5. **シンプル化と削減:** 特定のビジネスニーズに合致したソフトウェアソリューションを優先し、複雑な統合よりもシンプルさと柔軟性を重視します。AI駆動の開発により、カスタムソリューションのコストが大幅に低下し、外部ベンダーへの依存度を下げることができます。

**主なポイント**

*   アーキテクチャの決定は常にビジネス目標に沿うべきである。
*   コンポーザブルコマース戦略の成功の鍵は、目標とするビジネス成果に焦点を絞ること。
*   具体的な目標を達成するために、可能な限り最小限のプロジェクトから始める、反復的なアプローチを採用する。
*   最新のツール（Next.js、AI駆動ソリューションなど）を活用して複雑さを軽減し、プロジェクトを加速させ、より迅速に成果を出す。

この記事は、過度な複雑化を避け、ビジネス成果に直結するコンポーザブルコマース戦略を構築するための実践的なガイドラインを提供しています。

---
# Attack Challenge Mode now allows verified bots and Vercel cron jobs - Vercel

[View on Vercel Blog](https://vercel.com/changelog/attack-challenge-mode-now-allows-verified-bots-and-vercel-cron-jobs)

## Vercel Attack Challenge Mode のアップデート：検証済みボットと Vercel Cron Jobs を自動許可

Vercel は Attack Challenge Mode をアップデートし、**Stripe や PayPal など検証済みのWebhookプロバイダ**からのリクエストを自動的に許可するようになりました。これにより、支払い処理が中断される心配なく利用できます。

また、**Googlebotなどの主要な検索エンジンや、一般的な分析プラットフォームからの、適切に動作するボット**もサポート対象となりました。

さらに、**同じアカウント内で実行される Vercel Cron Jobs** は、Attack Challenge Mode の対象から除外されます。他の信頼できる内部トラフィックと同様に、自動的にバイパスされます。

特定のボットをブロックしたい場合は、**User Agent を照合するカスタムルールを作成**してください。Attack Challenge Mode を回避するためにボットを偽装することはできません。

Vercel は、正規のボットディレクトリを管理しており、Attack Challenge Mode の詳細と合わせて、公式ドキュメントで確認できます。

---
# Connect Java Spring Boot to Db2 Database | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/915967940/0/baeldung~Connect-Java-Spring-Boot-to-Db-Database)


---
# Securing Spring AI MCP servers with OAuth2

[View on Spring Blog](https://spring.io/blog/2025/04/02/mcp-server-oauth2)


---
# Amper Update April 2025 – IDE and CLI Feature Drop! | The Amper Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/amper/2025/04/amper-update-april-2025/)


---
# New commission to provide insight as OpenAI builds the world’s best-equipped nonprofit | OpenAI

[View on OpenAI News](https://openai.com/index/nonprofit-commission-guidance)


---
# PaperBench: Evaluating AI’s Ability to Replicate AI Research | OpenAI

[View on OpenAI News](https://openai.com/index/paperbench)

