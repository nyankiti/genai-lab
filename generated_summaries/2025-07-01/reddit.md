
# [VENT] Seeing engineers use LLMs to generate all the code that I used to write for them is concerning

**Upvotes**: 56



[View on Reddit](https://www.reddit.com/r/devops/comments/1lodvtm/vent_seeing_engineers_use_llms_to_generate_all/)

## 1. ポストの内容の説明

このRedditのポストは、あるエンジニアが、AIを活用したプログラミングツールの台頭に対する懸念を表明しているものです。具体的には以下の点が述べられています。

*   **懸念の対象:** ポスト主は、上司がLLM（大規模言語モデル、AI）を使って、以前自分が行っていたインフラ構築やデプロイのスクリプトを、短時間で、しかも質の高いコードとして生成していることに衝撃を受けています。
*   **自身の役割への影響:** これは、自分がこれまで担当していたタスクがAIによって代替され、将来的に自分の必要性が薄れるのではないかという不安につながっています。
*   **問題意識:** ポスト主は、AIの台頭に対し、単に「過去のもの」として受け入れるのではなく、どのように対応していくべきか、つまり、今後どのようなスキルを習得し、どのようなタスクに注力すべきか模索しています。
*   **ポジティブな側面への言及:** ポスト主は、AIツールが生産性を向上させることに肯定的な見解を示し、自身もこれまで単調で面白くないと感じていたスクリプト作成から解放されることを歓迎しています。

## 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **ドメイン知識の重要性に関するコメント:**
    *   LLMが生成するコードは一見きれいに見えるものの、実際の運用で発生しうるエラーケースやセキュリティ上の問題など、専門的な知識がないと見過ごされがちであると指摘しています。
    *   AIは特定の状況下で誤ったコードを生成することがあり、それらを修正・改善するには、システムの深い理解が必要であると述べています。
    *   AIに依存しすぎると、エンジニアがシステム全体のコンテキスト（要求仕様、実装方法、過去の修正など）を理解する能力を失い、将来的に生産性が低下する可能性があると警告しています。
*   **過去の技術革新との比較に関するコメント:**
    *   LLMの登場を、高水準言語の登場に例え、新しいツールとして受け入れ、自身のスキルを磨き、ツールを活用して更なる価値を生み出すことが重要だと示唆しています。
*   **将来のエンジニアの役割に関するコメント:**
    *   AIが生成したコードによって生じた問題点や、複雑化したシステムの「修正」に特化する、という将来の役割を示唆しています。
    *   AIが生成したコードを理解し、問題点を特定し、改善する能力が重要になると示唆しています。
*   **ビジネス的な視点からのアドバイスに関するコメント:**
    *   単なるコード作成者ではなく、ビジネス上の問題を特定し、解決策を見つける能力を磨くことが重要であると述べています。
    *   上司とのコミュニケーションを密にし、自身の価値を明確にすることが重要であるとアドバイスしています。


---

# Twitter API plans are a joke!

**Upvotes**: 212



[View on Reddit](https://www.reddit.com/r/webdev/comments/1lnzgs2/twitter_api_plans_are_a_joke/)

## 1. ポストの内容の説明

このRedditのポストは、Twitter APIの料金プランに対する著者の不満を表明しています。著者は、Twitter APIの料金が高額で、無料のプランはほとんど役に立たないと感じています。

*   **問題点:** 著者は、ログインしているユーザーのツイートの一部を処理する必要があるプラットフォームを構築しようとしていますが、Twitter APIの料金プランが法外であるため、困っています。無料プランでは要件を満たせず、他の方法（スクレイピングなど）を検討せざるを得ない状況です。
*   **技術的な質問:** Next.jsフレームワークでTwitterのOAuth 1.0a認証をサポートしているものを探しています。ClerkがTwitter v1を非推奨としていることも言及しています。
*   **代替案の模索:** Twitter v1.1 APIの方が料金設定が良いものの、Twitter v1の認証を自分で実装する必要があるかもしれないと考えています。
*   **添付画像:** TwitterのAPI料金プランのスクリーンショットを添付しています。

## 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「Yeah, that's why my SaaS stopped supporting the twitter API altogether. I'm not paying that kind of money for that shit. It's not worth it to me and it's not worth it to my customers.」 (289 upvotes):** 
    *   このコメントは、Twitter APIの料金が高すぎるという著者の意見に同調しています。Twitter APIのコストが非常に高いため、自分のSaaS（Software as a Service）でTwitter APIのサポートを完全に打ち切ったと述べています。API料金を支払う価値がないと考えていることが示されています。
*   **「They deliberately destroyed their own API so that only grok would be able to harvest their sweet, sweet data. If you need to look at a user's Twitter feed, you may as well scrape it.」 (244 upvotes):**
    *   このコメントは、Twitterが意図的にAPIを破壊し、特定の目的（おそらくは内部的なデータ収集）のために利用できるようにしたと非難しています。ユーザーのTwitterフィードを閲覧する必要がある場合は、スクレイピングが現実的な選択肢であると示唆しています。
*   **「Allowing API requests in 2025 is basically like sponsoring AI bots to gangbang your entire infrastructure so they can make profit.」 (186 upvotes):**
    *   このコメントは、APIリクエストを許可することが、AIボットによるインフラへの攻撃を招き、結果的に利益を生むことになると皮肉っています。Twitter APIの開放性に対する懸念を表しています。
*   **「Why anyone does anything with twitter these days is a mystery to me, that place is a festering trash pile that just needs to be burnt to the ground.」 (42 upvotes):**
    *   このコメントは、Twitter自体に対する否定的な意見を表明しています。Twitterを「ゴミの山」と表現し、もはや利用する価値がないという強い感情を示しています。


---

# Show me your portfolios

**Upvotes**: 36



[View on Reddit](https://www.reddit.com/r/webdev/comments/1lo6i8m/show_me_your_portfolios/)

## 1. ポストの内容の説明

このRedditのポストは、自分のポートフォリオを作成中で、他の人のポートフォリオを見て参考にしたいと考えているユーザーによって投稿されました。投稿者は、他のユーザーのポートフォリオを見せてくれるようにお願いしています。投稿への感謝の言葉も添えられています。

## 2. 特に興味深いコメント

このポストへのコメントは、主に他のユーザーが自分のポートフォリオへのリンクを提示している点が興味深いです。

*   **様々なポートフォリオの提示:** 複数のユーザーが自分のポートフォリオへのリンクを共有しています。これらのポートフォリオは、デザインや技術、目的が異なる可能性があり、投稿者にとって非常に参考になるでしょう。
*   **フィードバックの要求:** いくつかのコメントでは、ポートフォリオに対するフィードバックを求めています。これは、他のユーザーの作品に対する意見交換の場が生まれていることを示唆しています。
*   **技術的な問題への言及:** 一部のコメントでは、ポートフォリオに発生した技術的な問題（モバイル表示の不具合や修正の遅れなど）に触れています。これは、ポートフォリオ作成における現実的な課題や、開発者の視点を示しています。
*   **ユニークなデザインのポートフォリオ:** Windows 98 OSにインスパイアされたデザインのポートフォリオへの言及があり、デザインの多様性を示唆しています。

