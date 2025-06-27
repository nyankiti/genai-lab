
# Spring Boot 3.5.0 available now

**Upvotes**: 59



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1kwitne/spring_boot_350_available_now/)

1.  **ポストの内容の説明:**

    このRedditの投稿は、Spring Bootのバージョン3.5.0が利用可能になったことを発表しています。Spring Bootは、Javaアプリケーションの開発を容易にするためのフレームワークです。

2.  **特に興味深いコメント:**

    この投稿に対するコメントで特に興味深いのは、以下の2つです。

    *   **Springdoc-openapiとの互換性の問題:** 
        *   あるユーザーは、Spring Boot 3.5.0へのアップデートが、Springdoc-openapi (APIドキュメント生成ツール) を利用している場合に互換性を損なうことを報告しています。
        *   幸い、修正作業が既に開始されていることも示されています。問題が起きた場合、この修正によって解決される可能性があります。
        *   具体的なIssueへのリンクも提示されており、より詳細な情報を確認できます。
    *   **Hibernate enhance maven pluginとの互換性の問題:**
        *   別のユーザーは、Hibernate enhance maven pluginを利用しているアプリケーションが、Spring Boot 3.5.0へのアップデートによって影響を受けると報告しています。
        *   このコメントは、特定のライブラリやプラグインとの互換性の問題が実際に発生していることを示しており、Spring Bootのアップデートが既存のプロジェクトに影響を与える可能性を示唆しています。


---

# a brief DISTINCT rant

**Upvotes**: 85



[View on Reddit](https://www.reddit.com/r/SQL/comments/1lkgyzm/a_brief_distinct_rant/)

## 1. ポストの内容の説明

この Reddit のポストは、SQL クエリにおける `DISTINCT` の不適切な使用に対するフラストレーションを表明しています。投稿者は、同僚の SQL クエリを開いたところ、すべての `SELECT` ステートメントとサブ `SELECT` ステートメントに `DISTINCT` が使用されているのを発見しました。そして、結合のカーディナリティ（テーブル間の関連性）から判断して、`DISTINCT` が全く必要ない状況だと結論付けました。投稿者はこの状況に不満を感じ、ため息をついています。

要するに、投稿者は、不要な `DISTINCT` の乱用は、効率の悪いクエリ、あるいは SQL に精通していないことの表れであると捉えているようです。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、いくつか興味深いものを紹介します。

*   **「上司になるかのように振る舞う」系のコメント（50 upvotes）:** このコメントは、投稿者のフラストレーションに対して、同僚を叱責するような、ややユーモラスな解決策を提案しています。

*   **経験に基づくコメント（12 upvotes）:** このコメントは、病院の BI 開発チームを管理する立場からのもので、`DISTINCT` の過剰な使用が日常的に発生する問題であると述べています。その原因として、クロス結合をトラブルシューティングしたくないという怠惰さを指摘し、チーム全体への教育が重要であると説明しています。

*   **類似の問題提起コメント（17 upvotes）:** このコメントは、`GROUP BY` の後の過剰な列の羅列など、SQL における他の問題点にも言及しています。

*   **`DISTINCT` の使用に関する建設的なコメント（9 upvotes）:** このコメントは、`DISTINCT` を学習ツールとして使用することの正当性を認めつつ、本番環境での使用には慎重であるべきだと論じています。具体的には、データセットの理解のために一時的に使用することは良いが、その理由を説明なしに、他の人が使用するようなコードに組み込むべきではないと述べています。

*   **共感を示すコメント（7 upvotes）:** このコメントは、投稿者の意見に全面的に賛同し、`DISTINCT` の不適切な使用は、プログラマーの怠惰さと無能さの表れであると断言しています。


---

# Average React hook hater experience

**Upvotes**: 1188

![Image](https://i.redd.it/6mhxyapfna9f1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1ll3sgc/average_react_hook_hater_experience/)

## ポストの内容

このRedditのポストのタイトルは「Average React hook hater experience」です。これは、ReactのHooks（Reactの関数コンポーネントで状態管理や副作用を扱うための機能）を嫌う人々の典型的な経験を表現していると解釈できます。つまり、Hooksを批判するような内容の投稿である可能性が高いです。

## コメントのうち興味深いもの

以下に、特に興味深いコメントをいくつか紹介します。

1.  **「This belongs on /r/dontyouknowwhoiam」:** これは、投稿者が誰を批判しているのか、または批判の対象が誰なのかを指している可能性があります。Michael Jackson（Reactのライブラリ作成者）を知らないで批判しているのか？と言う皮肉です。
2.  **「Michael Jackson isn't some random noob. I'm pretty sure he's trolling」:** Reactのライブラリ作成者であるMichael Jacksonを「random noob（ただの素人）」と表現している批判に対して、彼を「ただの素人」とみなすことへの反論です。彼が皮肉を言っているのではないか？という推測もしています。
3.  **「The other guy's comment is the dumb one. "You need to study FP to understand hooks" doesn't contradict the claim that it's unnecessarily complex, because 95% of React devs have never studied FP」:** Hooksの理解に「関数プログラミング（FP）」の知識が必要という意見に対し、React開発者の大多数がFPを学んでいないため、Hookが不必要に複雑であるという主張は矛盾しないと反論しています。
4.  **「The weirdest thing is people using hooks for things that don't need to be part of React runtime. It's as if people have forgotten what import declaration does. Then you start seeing components with 10 hooks and noone has any clue about what's going on. Using React or any other framework/lib doesn't mean everything has to be pushed inside it. You can still write independent plain JavaScript and then provide the functionality ( auth, data, network etc) to the app as needed」:** Reactランタイムの一部である必要のないものにHooksを使用することについて、多くのHookを使用し、何が起こっているのか理解していない開発者がいると批判しています。Reactなどのフレームワークを使用しても、すべての機能をフレームワーク内に詰め込む必要はなく、独立したJavaScriptコードで必要な機能を提供できると指摘しています。
5.  **「Imagine being such an idiot that you think the author of react-router and Remix doesn’t know what they’re talking about. That’s you, OP. But also the reply guy.」:** これは、React RouterやRemixの作者の意見を理解できない人がいることを批判しています。これは、Reactのライブラリ作成者であるMichael Jacksonについて言及している可能性があります。
6.  **「Plus he is Michael Jackson. Terrific singer and dancer. Love his work in Thriller.」:** 上記のReactのライブラリ作成者であるMichael Jacksonについて、彼が素晴らしい歌手でありダンサーであると補足しています。


---

# Looks like we’re finally Turbo!

**Upvotes**: 149

![Image](https://i.redd.it/p6htbwx8y89f1.jpeg)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1lkwfr0/looks_like_were_finally_turbo/)

## 1. ポストの内容の説明

このRedditのポストは、Vercelが開発しているJavaScriptのビルドツール「Turbopack」に関するものです。

*   **タイトル:** 「Looks like we’re finally Turbo! (ついにTurboのようだ！)」とあり、Turbopackが何らかの節目を迎えたことを示唆しています。
*   **投稿文:**
    *   投稿者は、すべてのテストが本番環境向けビルドでパスしていることに気づいたと述べています。
    *   これは、Next.jsの新しいリリース（15.4）が近づいていることを示唆している可能性があります。
    *   areweturboyet.comというウェブサイトへのリンクが貼られており、Turbopackの進捗状況を確認できる可能性があります。

    つまり、この投稿は、Turbopackの開発が重要な段階に達し、リリースが近づいている可能性について報告しています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「68 upvotes: Well that's good. But the fact it took a company like Vercel over 2 years tells something about how ridiculous these js tooling/build systems have become. (それは良いことだ。しかし、Vercelのような会社が2年以上かかったという事実は、これらのJSツール/ビルドシステムがいかに不合理になったかを示している。) 」**
    *   Turbopackの開発に時間がかかったことに対する批判的な意見です。JSエコシステムにおけるツールの複雑さに対する懸念を表しています。

*   **「19 upvotes: This is great news, I've been looking forward to Turbopack since it was announced. But personally I'm skeptical about the future of Turbopack: (これは素晴らしいニュースだ。発表以来、Turbopackを楽しみにしていた。しかし、個人的にはTurbopackの将来に懐疑的だ)」**
    *   Turbopackへの期待を示しつつ、その将来性について疑問を呈するコメントです。
    *   **懐疑的な理由:**
        *   開発に時間がかかりすぎたこと。
        *   turbo.buildがturborepo.comにリダイレクトされ、Turbopackのドキュメントが見つけにくいこと（現在はNext.jsに統合）。
        *   Next.jsがrspackのサポートを追加したこと。
        *   Viteの普及が進んでいること。

    *   このコメントは、Turbopackを取り巻く競争環境と、Viteやrspackといった競合技術の台頭について考察しています。

*   **「2 upvotes: Great, time to wait another 3 months for someone else to be the guinea pig on the actual production release operating more like a beta. (素晴らしい、他の誰かがベータ版のように動作する実際の製品リリースのモルモットになるのを、あと3ヶ月待つ時間だ。) 」**
    *   本番環境でのTurbopackの安定性に対する懐疑的な見方を示しています。
    *   Next.jsのdev serverとキャッシュに関する課題に言及し、Turbopackがこれらの問題を解決することを期待しています。


---

# Cost comparision of hosting Next.js app (after becoming little famous)

**Upvotes**: 144



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1lksj0w/cost_comparision_of_hosting_nextjs_app_after/)

## ポストの内容の説明

このRedditの投稿は、Next.jsアプリケーションをホスティングする際のコスト比較についてまとめたものです。投稿者は、Next.jsアプリが「少し有名になった後」、つまりユーザー数が増加した場合のコストを比較しています。比較の前提条件として、月間10万人のアクティブユーザーを想定し、各ユーザーが5回のSSRリクエストを生成し、平均レンダリング時間150ms、1ページあたり150KBのHTML、月間の帯域幅は約75GBという条件を設定しています。

投稿では、以下のホスティングプラットフォームについて、それぞれの月間コストの見積もりを提示しています。

1.  Cloudflare Workers + OpenNext: $5–15
2.  Hetzner VPS (DIY Node.js): $4–8
3.  Railway (official Next.js): $10–15
4.  Fly.io (official Next.js): $10–20
5.  Render (official Next.js): $7–15
6.  DigitalOcean App Platform (official Next.js): $5–15
7.  Netlify OpenNext: $20–40
8.  Deno Deploy OpenNext: $10–25
9.  Vercel (official SSR): $20以上

この投稿は、Next.jsアプリケーションのホスティングコストを比較検討する際に役立つ情報を提供することを目的としています。

## 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **Coolifyへの移行を勧めるコメント:** 「I have moved all my NextJS projects from Vercel to Coolify. Now everything is sorted. I will suggest, if you are growing quickly, it's good to switch to something self-hosted and cost-effective.」というコメントは、VercelからCoolifyという別のホスティングプラットフォームに移行した経験を共有し、急成長している場合は、自己ホスト型で費用対効果の高いプラットフォームへの移行が有効であると提案しています。これは、コスト削減の可能性を示唆しており、Vercelのようなプラットフォームが高コストであるという認識を示唆しています。

*   **比較の質に対する批判的なコメント:** 「This is a complete tiktok grade comparison. I can spend 5-500 on a meal as well.」というコメントは、提示されたコスト比較が、詳細さに欠けていると批判しています。これは、コスト見積もりだけでは十分ではなく、より詳細な情報（例：トラフィックパターンや具体的なサービス内容など）が必要であることを示唆しています。

*   **Vercelの価格設定に対する批判的なコメント:** 「Vercel things are all expensive」というコメントは、Vercelの価格設定が高いという一般的な意見を表明しています。

*   **Oracle CloudとCloudflareの組み合わせの提案:** 「i run Oracle cloud PAYG + Cloudflare = 0$ not a high traffic site but cloudflare free tier handles my traffic without an issue」というコメントは、Oracle CloudのPAYG（従量課金）プランとCloudflareを組み合わせて、無料に近いコストで運用している例を挙げています。ただし、これは高トラフィックサイトには向かない可能性があると補足しています。

*   **Hetznerの代替プロバイダーの提案:** 「For anyone looking for other alternatives to Hetzner because of their strict selection process, try this: - Netcup」というコメントは、Hetznerの代替としてNetcupを提案しています。Hetznerの利用に際して、厳しい審査があることを示唆しており、他の選択肢があることを示しています。

