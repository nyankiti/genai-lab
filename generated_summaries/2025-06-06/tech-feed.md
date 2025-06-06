# Pre-generate domain SSL certs, now in dashboard - Vercel

[View on Vercel Blog](https://vercel.com/changelog/pre-generate-domain-ssl-certs-now-in-dashboard)

## Vercel、ダッシュボードでのドメインSSL証明書の事前生成機能を発表

この記事は、Vercelがダッシュボードから直接SSL証明書を事前生成できる機能をリリースしたことを伝えています。この新機能により、CLIを使用することなく、ダウンタイムゼロでドメイン移行が可能になります。

既存のドメインをプロジェクトに追加した後、「証明書の事前生成」を選択することで、DNSレコードを更新し、ドメイン移行の残りの部分を開始する前に証明書を発行できます。

以前のプロバイダーからDNSレコードを移行するために、ゾーンファイルをインポートしたり、Domain Connectを使用したりすることも可能です。

記事では、この新機能を試すことや、詳細についてはドキュメントを参照することを推奨しています。

---
# Bot Protection is now generally available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/bot-protection-is-now-generally-available)

## VercelのBot Protectionが一般公開

Vercel Web Application FirewallのBot Protectionマネージドルールセットが、すべてのユーザー向けに一般公開されました。追加費用はかかりません。

**Bot Protectionの概要:**

*   **目的:** ブラウザ以外のソースからの自動トラフィックを削減。
*   **機能:**
    *   **Log Only Action (ログのみ):** 識別されたボットトラフィックをファイアウォールタブに記録し、リクエストをブロックしません。
    *   **Challenge Action (チャレンジ):** ブラウザ以外のソースからのトラフィックに対し、ブラウザチャレンジを提供します。検証済みのボットは自動的に除外されます。
*   **ベータ期間中の実績:** ベータ期間中、6億5,000万件以上の潜在的な非ブラウザリクエストを検証しました。
*   **既存のセキュリティ対策との連携:** DDoS攻撃、低品質トラフィック、スプーフィングトラフィックといった一般的な脅威に対するVercelの既存の対策を補完し、明らかに悪意のない自動トラフィックに対して追加の保護レイヤーを提供します。

Bot Protectionマネージドルールセットの詳細については、Vercel Firewallのページを参照してください。

---
# How we’re responding to The New York Times’ data demands in order to protect user privacy | OpenAI

[View on OpenAI News](https://openai.com/index/response-to-nyt-data-demands)

## OpenAI、ニューヨーク・タイムズのデータ要求への対応について：ユーザーのプライバシー保護のために

OpenAIは、2025年6月5日付で、ニューヨーク・タイムズ（NYT）からのデータ要求に対する対応について声明を発表しました。

**背景:**

*   NYTはOpenAIを提訴しており、その訴訟の一環として、裁判所に対し、消費者のChatGPTとAPI利用者のデータを無期限に保持することを要求しています。
*   OpenAIは、この要求がユーザーのプライバシー保護に対するコミットメントに反し、プライバシーに関する既存の規範を損なうとして強く反対しています。
*   OpenAIは、ユーザーデータに対して透明性を保ち、データの管理に関するツールを提供することに重点を置いています（例：30日以内の削除オプション）。

**対応と影響:**

*   **データ保持の対象:** ChatGPT Free, Plus, Pro, Teamのサブスクリプション利用者、およびZero Data Retention契約がないOpenAI APIの利用者のデータが対象となります。ChatGPT EnterpriseおよびChatGPT Eduの利用者は対象外です。
*   **データの取り扱い:** 裁判所命令の対象となるデータは、安全なシステムに別途保管され、法的な義務を果たす目的以外にはアクセスできません。OpenAIの法務・セキュリティチームが、法的な義務を遵守するために必要な範囲でアクセスします。
*   **NYTなどとの共有:** データはNYTや他の原告と自動的に共有されることはありません。厳格な法的手続きの下で保護されており、OpenAIはユーザーのプライバシー保護のためにあらゆる段階で戦うとしています。
*   **データ保持期間:** 現在、裁判所命令により消費者のChatGPTとAPIコンテンツの保持が義務付けられています。OpenAIは命令に異議を申し立てており、成功すれば通常のデータ保持方針に戻ります。
*   **GDPRや他のプライバシー法との関係:** OpenAIは法に従うために現時点で対応していますが、NYTの要求はOpenAIのプライバシー基準に沿わないため、異議を唱えています。
*   **トレーニングポリシーへの影響:** ビジネス利用者のデータはデフォルトでモデルのトレーニングには使用されず、裁判所命令による変更もありません。一般利用者は、チャットをChatGPTの改善に利用するかどうかを自分で制御できます。
*   **進捗状況の報告:** OpenAIは、命令の変更やユーザーデータへの影響など、重要な情報について透明性を保ち、定期的に情報を共有します。

**OpenAIのデータ保持ポリシー:**

*   ChatGPT Free, Plus, Pro: チャットまたはアカウントを削除すると、30日以内にシステムから完全に削除されます（法的またはセキュリティ上の理由がない限り）。
*   ChatGPT Team: 各ユーザーが会話の保持を管理します。削除または未保存の会話は30日以内にシステムから削除されます（法的要件がない限り）。
*   ChatGPT Enterprise、ChatGPT Edu: ワークスペース管理者が顧客コンテンツの保持期間を管理します。削除された会話は30日以内にシステムから削除されます（法的要件がない限り）。
*   API: ビジネス利用者は、API利用状況に応じて、顧客コンテンツの保持期間を管理します。30日後、APIの入力と出力はOpenAIのログから削除されます（法的要件がない限り）。
*   Zero Data Retention API: Zero Data Retentionエンドポイントを使用している場合、入力と出力は記録されず、保持されません。

**結論:**

OpenAIは、ユーザーのプライバシー保護を最優先事項としており、NYTのデータ要求に対し、ユーザーの権利とプライバシーを守るために積極的に対応しています。

---
# Disrupting malicious uses of AI: June 2025 | OpenAI

[View on OpenAI News](https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-june-2025)

## OpenAI「AIの悪用を阻止：2025年6月」要約

2025年6月5日、OpenAIは最新の報告書を発表し、AIの悪用を検出し防止するための取り組みについて事例を交えて報告しました。OpenAIは、汎用人工知能（AGI）が人類全体に利益をもたらすことをミッションとしており、そのために革新的な技術を開発し、人々の困難な問題解決を支援しています。

2025年3月には、米国の科学技術政策室のAI行動計画への提出を通じて、AIが可能な限り多くの人々に利益をもたらすためには、人々の実際の危害から保護するための常識的なルールに基づいたAIの実現と、民主的なAIの構築が必要であると提唱しました。

この取り組みには、権威主義的な政権がAIツールを使用して権力を蓄積し、国民を支配したり、他国を脅迫したりするのを防ぐこと、秘密裏の世論操作（IO）、児童虐待、詐欺、スパム、悪意のあるサイバー活動などを阻止することが含まれます。

さらに、AIを悪用に対抗する新たな画期的なツール開発にも活用しています。前回の報告書から3ヶ月間で、AIを専門家チームの戦力増強として活用し、ソーシャルエンジニアリング、サイバースパイ、欺瞞的な雇用スキーム、秘密裏の世論操作、詐欺などの悪質な活動を検出し、阻止し、暴露することに成功しました。

詳細については、全文報告書を参照ください。

---
# 2025-06-06のJS: Rolldown-Vite、Vite 3.2、React RouterのGovernance Model - JSer.info

[View on jser.info](https://jser.info/2025/06/06/rolldown-vite-vite-3.2-react-routergovernance-model/)

## JSer.info #737 要約

JSer.info #737 では、2025年6月6日に公開されたJavaScript関連の技術情報がまとめられています。

**主なトピック:**

*   **Rolldown-Vite:** Rustで開発されたJavaScriptバンドラーRolldownをベースにしたViteであるRolldown-Viteがリリースされました。パフォーマンス向上を目指し、既存のViteとの互換性検証を目的として公開されています。
*   **Vitest 3.2:** Vitest 3.2がリリースされ、workspaceオプションの非推奨化、projectsオプション/vitest.workspaceファイルの推奨、context.annotate APIの追加、test.extendsにscopeオプションの追加、locators.extendの追加、context.signalの追加、usingによるモック関数の自動クリーンアップ、sequence.groupOrderオプションの追加など、様々な新機能が追加されました。
*   **React RouterのGovernance Model:** React Routerの開発プロセスに関する詳細な説明が公開されました。ステージ制を含む開発プロセスや今後の開発方針について解説されています。

**その他のトピック:**

*   **Babel v8.0.0-beta.0:** Babelのベータ版がリリースされました。
*   **Astro v5.9.0:** Astro v5.9.0がリリースされ、Content Security Policy (CSP)の実験的なサポートや、Content LoaderへのMarkdownレンダラーの提供などが行われました。
*   **ECMAScript Proposal Updates (2025-05):** 2025年5月のTC39ミーティングにおけるECMAScript Proposalのステータス変更がまとめられました。
    *   Inspector/More Random FunctionsがStage 1に新規追加
    *   SeededPRNG/Math.clampがStage 2に
    *   Error.isErrorがStage 4となりES2026で実装予定
*   **Resilient Import Maps:** Import Mapsに関する問題と、その解決策に関する記事。
*   **PHPとNode.jsの統合:** Node.js内でPHPを実行する `@platformatic/php-node` について。
*   **minifyの効果を最大限に引き出すTypeScriptコード:** minifyされやすいコードの書き方についての記事。
*   **OKLCHエコシステム:** OKLCHを使ったテーマの扱い方に関する記事。
*   **Node.jsサーバーのパフォーマンス改善:** プロファイラを利用してNode.jsサーバーのレスポンス時間を改善した事例。
*   **JavaScriptフレームワークのDOMレンダリング方法:** フレームワークにおけるDOMレンダリング方法 (Dirty Check, Virtual DOM, Fine-Grained Rendering) について解説した動画。
*   **react-just:** ViteベースのReact Server Componentをサポートするフレームワーク。

**サポートのお願い:** JSer.infoは、読者からのサポート（友人への紹介、GitHub Sponsorsでの支援、Twitterフォロー）を募っています。
