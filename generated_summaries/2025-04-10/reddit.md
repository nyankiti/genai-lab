
# I wrote a free GitHub Actions guide based on stuff I wish I knew earlier

**Upvotes**: 219



[View on Reddit](https://www.reddit.com/r/devops/comments/1jutazf/i_wrote_a_free_github_actions_guide_based_on/)

## ポストの内容の説明

1.  **投稿者の目的:** 投稿者は、GitHub Actionsについて学習する際に自分が知りたかったことをまとめた無料のガイドを作成し、公開しました。
2.  **ガイドの目的:** GitHub ActionsのワークフローYAMLを理解し、CI/CDパイプラインを構築・構造化できるようになることを目指しています。
3.  **ガイドの内容:**
    *   最初のワークフローをゼロから作成する方法
    *   プッシュとプルリクエストでテストを実行する方法
    *   サービスのビルドとデプロイのワークフロー
    *   再利用可能なワークフローの設定方法
    *   独自の複合アクションとJavaScriptアクションの作成方法
4.  **フィードバックの募集:** 投稿者は、ガイドについて以下のフィードバックを求めています。
    *   分かりにくい点
    *   追加すべき点
    *   実際の問題解決に役立ったかどうか

## コメントのうち、特に興味深いもの

1.  **「Awesome. Minor feedback, since I haven’t looked that much at it yet, but calling chapters “chap1”, “chap2” and sections “section1”, “section2” and so on, instead of just the title , seems a little redundant 😊」というコメント:** ガイドの章やセクションの命名方法について、"chap1"や"section1"のような形式は冗長ではないかというフィードバックをしています。より直感的なタイトルのみの使用を提案しています。
2.  **「One thing worth mentioning here is that you should *never* reuse workflows by pointing at that workflow's tag.」というコメント:** 再利用可能なワークフローを使用する際の注意点について言及しています。ワークフローのタグを直接参照することは、セキュリティ上のリスクがあるため避けるべきだと指摘しています。具体的には、タグが変更される可能性があり、過去に`tj-actions/changed-files` がマルウェアに感染し、秘密鍵が漏洩した事例を挙げています。このコメントは、GitHub Actionsのセキュリティに関する重要な注意喚起を含んでいます。


---

# I am a Software Developer and I am tired and I never want to sit in front of a computer again. A rant

**Upvotes**: 503



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jvf7he/i_am_a_software_developer_and_i_am_tired_and_i/)

## 1. ポストの内容の説明

このポストは、ソフトウェア開発者である投稿者が、仕事に対する強い疲労と嫌悪感を表明するものです。投稿者は、高収入で需要の高い分野で働いているにも関わらず、現在の仕事内容、開発環境、そしてソフトウェア開発を取り巻く様々な側面に対して強い不満を抱いています。

投稿者の不満は多岐にわたり、以下のような具体的な事柄が挙げられています。

*   **開発プロセスへの不満:** 「アジャイル」や「プランニングポーカー」などのアジャイル開発手法、最新技術の急速な変化、フレームワークの陳腐化、コミットのロールバック、Zshのアップデートなど、開発プロセスや技術的変化への対応に対する負担を感じています。
*   **開発環境への不満:** IDE、APIドキュメント、GPUの不足、ブラウザ間の互換性、モデルカードの比較、コードのリファクタリング、コメントの冗長性、Tailwindによる可読性の低下、UXに関する議論など、開発環境や技術的な課題に対する不満です。
*   **コミュニケーションと職場環境への不満:** UXに関する議論、女性に対する先入観、データ管理の問題、Readmeの作成、プロンプトの作成、jupyter notebookの再起動、依存関係の問題、コミュニケーションツール（Slack, Teams, Discord）の乱立、Miroでの付箋、gifの検索など、職場環境、コミュニケーション、ツールに対する不満です。
*   **集中力の低下と過度な情報への不満:** インターネットへの嫌悪感、複数のモニターやデスクトップ環境にも関わらずタスクを処理しきれないこと、情報過多、集中力の低下。
*   **その他の不満:** 既存のIT業界の決まり文句（enhance, leverage, delveなど）に対する嫌悪感。

投稿者は、これらの不満が職場環境に起因する部分もあると認識していますが、独立して作業する環境でも同様の疲労を感じていることから、ソフトウェア開発という仕事そのものに対する嫌悪感が強いことが伺えます。投稿は、現状からの脱却を希望し、上記のような内容を含まない仕事の提案を求めています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「Burnout?」（442 upvotes）**: このコメントは、投稿者の状態を「バーンアウト（燃え尽き症候群）」と診断しています。投稿者の抱える多岐にわたる不満や疲労感は、バーンアウトの典型的な症状と合致しており、的確な指摘と言えます。

*   **「Dang.. step away for a bit. You need a vacation. You need a hobby that's offline.」（144 upvotes）**: このコメントは、休息と現実世界での趣味を持つことを提案しています。ソフトウェア開発から一時的に離れること、オフラインでの活動を通して精神的なバランスを保つことの重要性を説いています。

*   **「Damn I applaud the effort you put into writing this. I hope things get better」（49 upvotes）**: 投稿者が抱える感情を理解し、共感を示すコメントです。投稿文の熱量と、その内容への共感を示しています。

*   **「Wow. You are me. I don’t have a solution either.」（47 upvotes）**: 投稿者の状況に共感し、自分も同様の状況に陥っていると告白するコメントです。多くの人が同じような問題を抱えていることを示唆しています。

これらのコメントは、投稿者の抱える問題に対する様々な視点と対応策を提示しており、それぞれのコメントが、投稿者の状況や感情に共感したり、解決策を提案したりすることで、このポストの議論を深めています。


---

# The difference of speed between Firefox and Chromium based browsers are insane

**Upvotes**: 397



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jv139b/the_difference_of_speed_between_firefox_and/)

## ポストの内容の説明

このRedditのポストは、FirefoxとChromiumベースのブラウザ（ChromeやEdgeなど）の処理速度の違いについて報告しています。

*   **何をしているか:** 投稿者は、複数のExcelファイルを検索し、特定の参照を見つけたらPDFとしてダウンロードできる小さなWebアプリケーションを開発しています。このアプリケーションでは、Web Workerを使用して処理を並列化し、速度を向上させています。
*   **テスト結果:** 123個のExcelファイル（合計7,096シート）を使用してテストを行った結果、Firefoxでは約65秒かかったのに対し、Chrome/Edgeでは約25秒で処理が完了しました。約60%の速度差があるとしています。
*   **投稿者の意見:** Chromiumの独占を好まないものの、特定のタスクにおいてはその速度に感銘を受けています。
*   **補足:** 投稿者は、テスト中にプロファイル記録を開始すると、処理速度が2倍になるという現象にも気づいています（詳細はYouTube動画で確認できます）。

## 興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **プロファイリングの提案:** 処理速度の違いの原因を特定するために、Firefoxのプロファイラー（[https://profiler.firefox.com/](https://profiler.firefox.com/) ）を使用してプロファイルを記録し、バグをMozillaのBugzillaに報告することを提案しています。これは、問題の根本原因を特定し、Firefoxのパフォーマンス改善に貢献するための具体的なアクションです。
*   **最適化の違いの可能性:** 処理速度の違いは、Firefoxが特定の、統計的にまれなユースケース（大量のファイルの読み込みなど）に対する最適化が十分でないことに起因する可能性があると指摘しています。
*   **Chromiumの市場シェア:** 多くの主要ブラウザがChromiumをベースにしているため、WebがChromiumに標準化されつつあるという意見です。これは、Chromiumの普及が、Web開発における互換性やパフォーマンスに大きな影響を与えていることを示唆しています。
*   **ニッチなワークロードに対する最適化:** 特定のニッチなタスク（この場合はExcelファイルの処理）において、Chromiumベースのブラウザが優れていることは、ブラウザのコア機能とは直接関係がないため、ある意味驚くべきことであるという意見です。
*   **Chromiumへの依存に対する懸念:** 一部のユーザーは、WebサイトがChromeブラウザを要求することに対する不満を表明しています。これは、Chromiumの優位性が、Web利用の選択肢を狭める可能性があるという懸念を示唆しています。


---

# GoDaddy Review, why you need to AVOID them!

**Upvotes**: 67



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jv8xez/godaddy_review_why_you_need_to_avoid_them/)

## ポストの内容の説明

このRedditのポストは、GoDaddyというドメイン登録・ウェブホスティングサービスに関するレビューであり、GoDaddyを避けるべき理由について詳しく説明しています。著者は、GoDaddyが初心者向けに魅力的なマーケティングを行っているものの、実際には割高な価格設定や、技術的な問題を引き起こす可能性があると主張しています。

具体的には、以下の点について言及しています。

*   **ドメイン名:** GoDaddyの.comドメインの更新料金は$22/年であり、他のレジストラ（Namecheap、Porkbun、Cloudflare）と比較して割高である。
*   **追加サービスのアップセル:** ドメイン購入後に、ウェブホスティング、メールサービス、ウェブサイトビルダーなどの追加サービスを積極的に販売しようとする。これらのサービスも、価格が高く、隠れた更新料金がある。
*   **SSL証明書:** GoDaddyのSSL証明書は$100/年と高額であり、無料のLet's Encrypt SSLのインストールも困難である。
*   **ウェブホスティング:** GoDaddyのウェブホスティングは、他のプロバイダーと比較して価格が高く、サポート体制も良くない。
*   **メールサービス:** GoDaddyのメールサービスはMicrosoft 365を使用しているが、機能が制限されている。
*   **ウェブサイトビルダー:** 著者はGoDaddyのウェブサイトビルダーを実際に使用したことがないため、コメントを控えているが、GoDaddyのエコシステム全体を避けるべきという自身の意見を述べている。

著者は、ドメイン名、ウェブホスティング、メールサービスを別々のプロバイダーから購入することで、セキュリティを向上させ、コストを削減できると推奨しています。

## ポストに対するコメントのうち、特に興味深いもの

この投稿に対するコメントは、GoDaddyに対する過去の経験や、他のサービスプロバイダーの利用に関する情報を提供しており、全体的に著者の意見に賛同する内容となっています。特に興味深いコメントを以下にまとめます。

*   **「Didn't we all figured that out 15 years ago?」**: このコメントは、GoDaddyが以前から問題視されていたことを示唆し、多くのユーザーがすでにGoDaddyの悪評を知っていたことを示唆しています。
*   **「Fairly accurate. I just migrated my domain from NameCheap to Porkbun and it was several dollars cheaper.」**: このコメントは、Porkbunへの移行がコスト削減につながったことを具体的に示しており、ドメインレジストラを比較検討することの有効性を裏付けています。また、著者の意見の正確性を支持する内容となっています。
*   **「I’m curious what your “security” reasons are for separating your registrar and dns? Is it purely if someone compromises your CloudFlare account they can’t change both?」**: このコメントは、著者がドメインレジストラとDNSを分ける理由について質問しており、セキュリティに関する具体的な疑問を提起しています。これは、セキュリティに関するより深い議論につながる可能性を示唆しています。
*   **「I couldn’t get a .fr TLD on Cloudflare, otherwise they have been great」**: Cloudflareの特定のTLD（トップレベルドメイン）に関する制限について言及しており、特定の状況下でのサービス利用の注意点を示唆しています。
*   **「I made the mistake of going GoDaddy many many many years ago. I ***finally*** transitioned all my shit off last summer, thank God....」**: このコメントは、GoDaddyを利用していた過去の経験と、そこからの移行に関する苦労を語っており、GoDaddyに対するネガティブな感情を表しています。

