# How PAIGE grew revenue by 22% with Shopify, Next.js, and Vercel - Vercel

[View on Vercel Blog](https://vercel.com/blog/how-paige-grew-revenue-by-22-with-shopify-next-js-and-vercel)

## PAIGE、Shopify、Next.js、Vercel で収益を 22% 増加

デニム・アパレル小売大手の PAIGE は、既存のeコマースアーキテクチャの複雑さに直面していました。より高速で信頼性の高いオンライン体験を求め、Shopify、Next.js、Vercel を活用したよりシンプルなヘッドレス技術スタックを採用することで、eコマース戦略を再構築しました。これにより、ブラックフライデーの収益が 22% 増加し、コンバージョン率が 76% 向上しました。

**複雑さの克服：**

PAIGE のエンジニアリングディレクターである Michael La Colla 氏は、Commercetools、Angular、Bloomreach で構築された複雑なシステムを引き継ぎました。ヘッドレスアプローチであるにもかかわらず、統合やデータ同期の問題が技術力とオムニチャネル戦略を阻害していました。これらの制限はイノベーションを遅らせ、開発を遅延させ、部門間の業務上の課題を生み出しました。PAIGE の優先事項は、技術スタックを簡素化することでした。

**完全なアーキテクチャの再構築による簡素化：**

PAIGE は、サイトを単に再設計するのではなく、eコマースプラットフォームのアーキテクチャを再構築することにしました。古い Angular コード、業務上の摩擦、複雑なベンダー統合などの主要な問題を洗い出すために部門間で協力し、その整合性を利用してツール選定を合理化し、不要な依存関係を排除しました。

新しいアーキテクチャは、部門間の既存の制限を解消し、持続可能な成長を可能にしました。

*   **Shopify:** eコマース、小売、フルフィルメント、カスタマーサービス、マーケティング全体でスムーズに統合され、オムニチャネル機能を強化しました。
*   **Next.js:** サーバーサイドレンダリング (SSR) を提供し、以前Angularで発生したSEOの問題を解決し、PAIGE を業界標準に適合させ、ベンダーロックインのない柔軟性を提供しました。
*   **Vercel:** 自動デプロイとグローバル CDN により、トラフィックのピーク時でも信頼性の高いユーザーエクスペリエンスを保証し、プレビューデプロイやインスタントロールバックなどの機能を通じて開発者のエクスペリエンスを簡素化しました。また、Next.js と React の専門知識への継続的なアクセスも提供しました。

**記録的なブラックフライデーの実績：**

新しい PAIGE のウェブサイトはブラックフライデーの数ヶ月前に公開され、厳格なストレステストにより信頼性の高いパフォーマンスが保証されました。その結果は明確な成功を示し、記録的なパフォーマンスでありながら問題のない「退屈な」ブラックフライデーとなりました。

*   トラフィックが 22% 増加し、ダウンタイムはなし (前年からの大幅な改善)
*   コンバージョン率が 76% 増加
*   1分あたりの平均注文数が 24% 増加
*   ブラックフライデー/サイバーマンデーの収益が全体で 22% 増加

**オムニチャネル機能の拡大：**

PAIGE の簡素化された技術スタックは、継続的なイノベーションを推進し、オンライン購入、店舗からのフルフィルメント、新しいロイヤリティプログラムの導入など、マルチチャネル機能の迅速な拡大を可能にしています。UX/UI デザインの改善とサイトパフォーマンスの高速化により、コンバージョンの継続的な増加と顧客エンゲージメントの強化にもつながっています。

PAIGE は、安定した柔軟な基盤により、新しい機能を迅速に実装し、ビジネス上の要求に迅速に対応し、顧客の期待と市場のトレンドを常に先取りすることができます。PAIGE は、今後のピークシーズン以降に向けて万全の体制を整えています。

---
# Multi-Factor Authentication (MFA) is now available - Vercel

[View on Vercel Blog](https://vercel.com/changelog/mfa-is-now-available)

## Vercel が多要素認証 (MFA) を導入：アカウントセキュリティを強化

Vercel は、アカウントのセキュリティを向上させるため、多要素認証 (MFA) の提供を開始しました。

**概要:**

*   **MFA の仕組み:** 時間ベースのワンタイムパスワード (TOTP) を使用し、Google Authenticator や Authy などの認証アプリで生成されるコードを入力します。既存のパスキー (WebAuthn キー) も第二要素として使用できます。
*   **導入効果:** MFA を有効にすることで、最初のログイン方法が万が一漏洩した場合でも、アカウントへの不正アクセスを防ぐことができます。
*   **設定方法:**
    1.  アカウント設定の「認証」セクションに移動し、MFA を有効にします。
    2.  既存のログイン方法（メール OTP または Git プロバイダー）を使用して最初の認証を行います。
    3.  TOTP 認証アプリを使用して第二要素の認証を完了します。

**重要な情報:**

*   パスキー (WebAuthn) ログインは本質的に二要素認証であるため、追加の認証は不要です。
*   チームスコープの SAML SSO ログインは、認証責任を ID プロバイダー (IdP) に委譲するため、Vercel 内で追加の要素は必要ありません。

MFA を有効にして、アカウントのセキュリティを強化しましょう。詳細はアカウント設定または公式ドキュメントをご覧ください。

---
# Vercel Secure Compute now supports multiple environments - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-secure-compute-now-supports-multiple-environments)

## Vercel Secure Compute が複数環境のサポートを開始

Vercel Secure Compute がアップデートされ、プロジェクトの各環境（Production, Preview, カスタム）を個別の Secure Compute ネットワークに関連付けられるようになりました。これにより、単一のプロジェクト内で、環境ごとにネットワーク分離を簡単に行えるようになります。

**主な変更点:**

*   **環境ごとのネットワーク分離:** プロジェクトの各環境を、個別の Secure Compute ネットワークに接続可能。
*   **簡素化された設定:** プロジェクトの設定ページから、各環境の Secure Compute ネットワークを直接指定。
*   **フェイルオーバー設定:** アクティブなネットワークに加え、オプションでパッシブネットワークを選択することで、フェイルオーバーを有効化可能。
*   **ビルドコンテナの連携:** オプションで、プロジェクトのビルドコンテナをネットワークに含めることが可能。

**設定方法:**

1.  プロジェクトの設定ページに移動し、Secure Compute セクションを開く。
2.  Secure Compute に接続したい環境ごとに、以下の設定を行う。
    *   アクティブなネットワークを選択。
    *   (オプション) フェイルオーバー用にパッシブネットワークを選択。
    *   (オプション) ビルドにプロジェクトのビルドコンテナを含めることを有効化。
3.  変更を保存。

詳細はドキュメントを参照してください。

**要するに、今回のアップデートにより、Vercel Secure Compute でプロジェクトの各環境に対して、より柔軟で安全なネットワーク設定が可能になったということです。**

---
# CVE-2025-30218 - Vercel

[View on Vercel Blog](https://vercel.com/changelog/cve-2025-30218)

## CVE-2025-30218 に関する詳細な要約

**概要:**

CVE-2025-30218 は、Next.js の Middleware に存在する低重要度の脆弱性に関するものです。この脆弱性は、Middleware 内でサードパーティへのリクエストが発生した場合に、`x-middleware-subrequest-id` ヘッダーがサードパーティに送信されてしまうという問題です。Vercel は、独立した研究者からの報告を受け、この脆弱性を独自に検証しました。

**詳細:**

元々 CVE-2025-29927 の対策として、Next.js はリクエスト間で保持される `x-middleware-subrequest-id` を検証していました。この ID は、以下のように生成されます。

```javascript
const randomBytes = new Uint8Array(8)
crypto.getRandomValues(randomBytes)
const middlewareSubrequestId = Buffer.from(randomBytes).toString('hex')
;(globalThis as any)[Symbol.for('@next/middleware-subrequest-id')] =
  middlewareSubrequestId
```

問題点は、このサブクエスト ID が、Next.js アプリケーションと同じホスト宛てではないリクエストにも送信されることです。具体的には、Middleware 内で `fetch` リクエストをサードパーティに発行した場合、`x-middleware-subrequest-id` ヘッダーがそのサードパーティに送信されてしまいます。

```javascript
init.headers.set(
  'x-middleware-subrequest-id',
  (globalThis as any)[Symbol.for('@next/middleware-subrequest-id')]
)
```

**影響:**

この脆弱性の悪用は、攻撃者がサードパーティを制御する必要があるため、可能性は低いと考えられています。しかし、Vercel は予防的な措置として対策を講じました。Middleware からこの再帰防止ロジックを削除する予定がありましたが、今回の脆弱性の開示により、Node.js ランタイムをサポートするための Middleware の新しいアップデートとの整合性を高める作業を加速させました。

**対策:**

Vercel の顧客は、プラットフォーム環境内に既に実装されている緩和策によって保護されています。ただし、チームは最新の Next.js パッチバージョンまたは選択したバックポートにアップデートすることを推奨しています。Vercel の再帰保護の実装に固有の問題であるため、Next.js アプリケーションをホストする他のインフラストラクチャプロバイダーには影響しません。

Vercel は、CVE-2025-29927 の事後分析に基づいて、OSS パッケージ内の脆弱性の開示に関する新しい内部プロセスに従ってこの勧告を公開しました。15.x にパッチを適用し、新しく公開された LTS ポリシーの例外として、12.x から 14.x までのバージョンに対してバックポートを提供しました。また、早期開示のために Next.js の新しいパートナーとも協力しました。

**謝辞:**

この脆弱性の責任ある開示をしてくれた Jinseo Kim (kjsman) 氏と ryotak 氏に感謝します。これらの研究者は、バグ報奨金プログラムの一環として表彰されました。

---
# Java Weekly, Issue 588 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/916103168/0/baeldung~Java-Weekly-Issue)


---
# Web における Security, Safety, Trust の相対性 | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-04-03/security-safety-trust.html)


---
# Bringing intelligence to every workflow | OpenAI

[View on OpenAI News](https://openai.com/index/notion)


---
# New commission to provide insight as OpenAI builds the world’s best-equipped nonprofit | OpenAI

[View on OpenAI News](https://openai.com/index/nonprofit-commission-guidance)


---
# PaperBench: Evaluating AI’s Ability to Replicate AI Research | OpenAI

[View on OpenAI News](https://openai.com/index/paperbench)


---
# Our response to the UK’s copyright consultation | OpenAI

[View on OpenAI News](https://openai.com/global-affairs/response-to-uk-copyright-consultation)

## OpenAI、英国の著作権に関する協議への回答：英国をAIの中心地とするための提言

OpenAIは、英国議会の科学・イノベーション・技術委員会に対し、英国政府のAIと著作権に関する協議に対する意見書を提出しました。この意見書では、OpenAIが考える、英国をヨーロッパにおけるAIの中心地とし、同時に著作権者の正当な利益を保護するための政策提言がまとめられています。

**OpenAIの提言の要点:**

*   **国際的な競争力:** 技術は国境を越えるため、英国がAIの中心地となるためには、明確で、AIへの投資、インフラ、人材の獲得において他国との競争力を高めるような規則と規制が必要です。
*   **広範なテキスト・データマイニング（TDM）の例外:** 政府が国民のためにAIの幅広い利益を活用するためには、協議提案のオプション2に記載されているような、広範なTDMの例外を設けることが最も効果的です。
*   **3つの主要原則:** OpenAIの立場は、以下の3つの主要原則に基づいています。（具体的な内容は本文に記載されていません）
*   **明確な選択:** 英国は、教育、科学、医療におけるブレークスルーを促進する政策を採用し、イノベーションを促進するか、AIのリーダーシップと、この変革的な技術の未来に対する影響力を他国に譲り渡すかの選択を迫られています。

**OpenAIのメッセージ:**

OpenAIは、政府やクリエイターと協力して、AIイノベーションと著作権の未来を形作ることを楽しみにしています。英国政府が、AIの進歩を促進しつつ、著作権者の権利も保護するバランスの取れた政策を策定することを期待しており、そのために協力していく姿勢を示しています。

**要約:**

OpenAIは、英国をヨーロッパのAIの中心地とするためには、広範なTDMの例外を設け、国際競争力を高める政策を採用すべきだと提言しています。これは、AIの進歩を促進し、同時に著作権者の権利も保護するための重要なステップであると考えています。OpenAIは、政府やクリエイターと協力して、この目標を達成するために貢献していく意向です。
