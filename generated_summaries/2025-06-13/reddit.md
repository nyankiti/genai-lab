
# 'Getting into DevOps'

**Upvotes**: 942



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

## 1. ポストの内容の説明

この Reddit のポストは、DevOps に興味がある人向けの入門ガイドとして作成されました。以下に、投稿文の内容を詳細にまとめます。

*   **DevOps とは？**
    *   DevOps の基本的な定義が示されています。開発チームと運用チームが分離するのではなく、アプリケーションのライフサイクル全体 (開発、テスト、デプロイ、運用) で協力し、手動で時間がかかっていたプロセスを自動化する働き方であると説明されています。
    *   AWS の記事 ([https://aws.amazon.com/devops/what-is-devops/](https://aws.amazon.com/devops/what-is-devops/)) が、この説明の参考資料として挙げられています。

*   **読むべき書籍**
    *   DevOps の文化を理解するための書籍として、以下のものが紹介されています。
        *   *The Phoenix Project*: フィクションの物語を通じて DevOps の考え方を解説。
        *   *The DevOps Handbook*: The Phoenix Project の実践的な続編。
        *   *Google's Site Reliability Engineering*: Google のエンジニアが、システムの構築、デプロイ、監視、保守について説明。
        *   *The Site Reliability Workbook*: Google SRE の実践的なワークブック。
        *   *The Unicorn Project*: The Phoenix Project の続編。
        *   *DevOps for Dummies*: タイトルに惑わされず、DevOps を学ぶための入門書として勧められています。

*   **何を学ぶべきか**
    *   DevOps を学ぶ上で役立つリソースとして、以下が紹介されています。
        *   Emily Wood による「インフラストラクチャ as コード」に関するエッセイ ([https://crate.io/a/infrastructure-as-code-part-one/](https://crate.io/a/infrastructure-as-code-part-one/))。
        *   2019 年の DevOps ロードマップ ([https://github.com/kamranahmedse/developer-roadmap#devops-roadmap](https://github.com/kamranahmedse/developer-roadmap#devops-roadmap))。
            *   このロードマップは、特定のユースケースに特化している可能性があるため、議論の余地があるが、DevOps の世界で現在使用されているツールを知るための良い出発点となる可能性があるとされています。
        *   /u/mdaffin によるコメント ([https://www.reddit.com/r/devops/comments/abcyl2/sorry_having_a_midlife_tech_crisis/eczhsu1/](https://www.reddit.com/r/devops/comments/abcyl2/sorry_having_a_midlife_tech_crisis/eczhsu1/)): DevOps は問題解決のための考え方であり、特定のツールや資格よりも、問題解決へのアプローチが重要であると述べています。
        *   /u/jpswade によるコメント ([https://gist.github.com/jpswade/4135841363e72ece8086146bd7bb5d91](https://gist.github.com/jpswade/4135841363e72ece8086146bd7bb5d91)): DevOps および関連用語の説明。
        *   Roadmap.sh ([https://roadmap.sh/devops](https://roadmap.sh/devops)): DevOps やその他の運用ロールのためのステップバイステップガイド。

*   **その他**
    *   DevOps はまだ変化の途中にあり、特定のツールよりも文化的な変化が重要であると強調しています。そのため、特定のスキルやツールセットは普遍的ではなく、推奨事項はあくまで提案として受け止めるべきです。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **Kubernetes の入門コースの紹介 (227 upvotes)**
    *   Kubernetes アーキテクチャに関する無料の 1 時間の入門コースを紹介しています。このコースは、Kubernetes クラスターを構築し、各コンポーネントを無効化し、Kubernetes を使用しようと試みるという、実践的なアプローチを取っています。
    *   YouTube ([https://youtu.be/n4zxKk2an3U](https://youtu.be/n4zxKk2an3U)) と Udemy で公開されています。

*   **実践重視の学習を推奨するコメント (138 upvotes)**
    *   DevOps を学ぶには、多くの実践と Google 検索が最も効果的であると主張しています。ビデオコースよりも、実践的なタスクから得られる経験の方が重要であると述べています。
    *   100daysofdevops ([https://github.com/100daysofdevops/100daysofdevops](https://github.com/100daysofdevops/100daysofdevops)) を参考にすることをお勧めしています。

*   **DevOps の 3 つの主要原則 (64 upvotes)**
    *   DevOps の主要原則として、自動化、監視、統合を挙げています。
    *   Terraform ([https://www.terraform.io/](https://www.terraform.io/)) や Ansible ([https://www.ansible.com/](https://www.ansible.com/)) などのツールを使用して自動化を行うこと、Netdata ([https://github.com/netdata/netdata](https://github.com/netdata/netdata)) などの監視ツールを使用して、インフラストラクチャとアプリケーションを監視すること、クラウドプロバイダーの API を学習し、それらを通じてインフラストラクチャを管理することの重要性を強調しています。

*   **Kubernetes 関連の動画紹介 (42 upvotes)**
    *   Kustomize と Helm などの Kubernetes ツールに関する動画を紹介しています。
    *   Kustomize: ([https://youtu.be/spCdNeNCuFU](https://youtu.be/spCdNeNCuFU))
    *   Helm Playlist: ([https://www.youtube.com/watch?v=w51lDVuRWuk&list=PLnFWJCugpwfzCjufOk52ufg7CDxpLEmXi](https://www.youtube.com/watch?v=w51lDVuRWuk&list=PLnFWJCugpwfzCjufOk52ufg7CDxpLEmXi))

*   **Amazon レビュー分析 (24 upvotes)**
    *   The Phoenix Project の Amazon レビューを分析した Fakespot のレポートへのリンクを提供しています。レビューの信頼性を評価するためのもので、製品自体の評価とは異なります。


---

# Stop the madness: DevOps trends that are ruining teams in 2025

**Upvotes**: 171



[View on Reddit](https://www.reddit.com/r/devops/comments/1l9t7mb/stop_the_madness_devops_trends_that_are_ruining/)

1.  **このポストの内容の説明**

    この Reddit の投稿は、10 年の DevOps 経験を持つ投稿者による、最近の DevOps トレンドへの不満を表明するものです。投稿者は、チームが新しいトレンドを追いかけすぎていること、過剰な複雑さをもたらし、非効率的になっている例を挙げています。

    具体的には、以下のような問題点を指摘しています。

    *   **マイクロサービスの乱用:** Todoアプリに 12 個のマイクロサービスを使用しているスタートアップの例を挙げ、サービスの数がアクティブユーザー数よりも多い状況を批判しています。
    *   **Kubernetes の過剰な利用:** 1 日 100 リクエスト程度の PHP アプリを Kubernetes で実行するために、運用コストが EC2 インスタンスよりも高くなっている例を挙げています。
    *   **GitOps の過度な依存:** 本番データベースの容量不足という単純な問題に対し、GitOps ワークフローの待ち時間によって、解決が遅延し、データベースがダウンした例を挙げています。
    *   **シンプルさの重要性:** 投稿者は、成功しているチームは、実績のある技術を選び、アーキテクチャをシンプルに保ち、インフラの再構築よりも機能の構築に時間をかけていると主張しています。
    *   **SSH を使った修正の必要性:** 投稿者は、状況によっては SSH でサーバーにログインして設定を変更することが、迅速な解決策として必要であると述べています。

    投稿者は、これらのトレンドに疲れており、よりシンプルで実用的なアプローチを求めています。投稿文には、自身の意見を詳細に述べた記事へのリンクも含まれています。

2.  **このポストに対する特に興味深いコメント**

    *   **「Hot take: monoliths aren't bad things.」:** このコメントは、マイクロサービスへの過度な移行に対する反論として興味深いものです。モノリシックなアーキテクチャは、シンプルなケースでは有効な選択肢であると示唆しています。
    *   **「How often does your morning commute fail??」:** 投稿文中の「デプロイプロセスは朝の通勤時間より長く、同じくらい頻繁に失敗する」という表現に対する皮肉なコメントです。
    *   **「Sounds like a made-up story for a “decent” company.」:** このコメントは、投稿された話が誇張されているか、または実際に起こりえないのではないかと疑っていることを示唆しています。
    *   **「Umm.. if you’re able to “ssh into a server and just change a value” as a permanent “fix”, then you’re not doing DevOps right.」:** 投稿者が SSH で直接変更を加えることを示唆したことに対する批判的なコメントです。DevOps のベストプラクティスでは、変更はインフラストラクチャコードを通じて行われるべきであるという考え方を示唆しています。
    *   **「Agreed, the sector is chasing shiny toys more than ever. I'd dare say there is ALOT of overengineering as of late in devops to likely attempt to bake in job security but most shops should probably just be following the KISS method.」:** これは、投稿者の意見に同意し、DevOps 分野における過剰なエンジニアリングと、ジョブセキュリティを確保するための試みについて言及しています。KISS (Keep It Simple, Stupid) 原則を推奨しています。


---

# I know it's only me thinking this, but Tailwind is turning us schizophrenics?

**Upvotes**: 129



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1l9k4sj/i_know_its_only_me_thinking_this_but_tailwind_is/)

## 1. ポストの内容の説明

このRedditのポストは、Tailwind CSSの使用に対する不満を表明しています。投稿者は、Tailwind CSSが、従来のCSSクラスを定義する代わりに、ユーティリティクラスを使用することを強要し、フロントエンド開発者を混乱させ、まるで「統合失調症」のように感じさせると皮肉っています。

投稿者は、Tailwind CSSの使用例として、画像を示しています。この画像は、CSSスタイルをTailwind CSSのユーティリティクラスを使って表現したもので、その複雑さを示しています。投稿者は、「これは従来のCSSクラスを使用するよりも優れているのか？」と疑問を呈しています。

要するに、このポストは、Tailwind CSSの複雑さと、従来のCSSと比較しての利点についての疑問を提起していると言えます。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **多くの支持を得ているネガティブな意見:**
    *   「Tailwindは好みません。CSSを本当に使いこなせない人たちのための補助具であり、その熱狂にはうんざりする」という意見は、Tailwind CSSに対する一般的な批判を反映しています。これは、Tailwind CSSがCSSの知識を必要とせずに簡単にスタイルを適用できるため、CSSの基礎を理解していない開発者にとって「便利」であると同時に、CSSの知識を深めることを妨げているという批判です。
    *   「これはあなただけの考えではない」というコメントは、Tailwind CSSに対する批判が広く共有されていることを示唆しています。

*   **Tailwind CSSの目的と使用場面に関する意見:**
    *   「特定の理由（デザインシステムを構築するため）がある」というコメントは、Tailwind CSSが特定の目的（デザインシステムの構築）においては有用であることを示唆しています。
    *   「状態とバリエーションの組み合わせが複雑になる要素（例：フォーム要素）をスタイリングする際には、どのような方法を用いても苦労する」というコメントは、Tailwind CSSが、状態やバリエーションが多い要素をスタイリングする際に、その複雑さを軽減できる可能性があることを示唆しています。
    *   「開発者にとってシンプルなインターフェースを提供することが目的」というコメントは、Tailwind CSSが、開発者が複雑なCSSを書くことなく、デザインシステムを簡単に利用できるようにすることを目的としていることを示唆しています。

これらのコメントは、Tailwind CSSに対する多様な意見と、その使用に対するさまざまな視点を示しており、Tailwind CSSのメリットとデメリットについて、より深く理解するのに役立ちます。


---

# Feeling pretty proud of this

**Upvotes**: 104



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1l9j8ug/feeling_pretty_proud_of_this/)

## 1. ポストの内容の説明

このRedditのポストのタイトルは「Feeling pretty proud of this（これについてかなり誇らしく思っています）」です。これは、投稿者が自身の何か成果を上げたことに対して、達成感や喜びを感じていることを表現しています。具体的な内容は本文がないため不明ですが、何かを完成させたり、良い結果を出したりしたという状況が推測できます。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **Ahhhh I know the feeling! ... but then the Marketing team adds a 1000 tracking scripts in GTM ... (50 upvotes):** このコメントは、投稿者の達成感に共感しつつ、その後に発生する可能性がある課題をユーモラスに表現しています。GTM（Google Tag Manager）でマーケティングチームが大量のトラッキングスクリプトを追加することで、ウェブサイトのパフォーマンスが低下するという皮肉を込めた内容です。多くのUpvoteを獲得していることから、多くの人が共感していることが分かります。
*   **Just a heads up, Lighthouse DevTools usually runs much faster because it uses your computers local resources. Try scanning the same site with Google's PageSpeed Insights and see if it gives the same results: https://pagespeed.web.dev/ (16 upvotes):** このコメントは、Lighthouse DevToolsというウェブサイトのパフォーマンスを測定するツールと、Google PageSpeed Insightsという別のツールの比較について言及しています。Lighthouse DevToolsがローカルリソースを使用するため高速に動作すること、PageSpeed Insightsでも同様の結果が得られるか試してみることを勧めています。技術的なアドバイスを含んでおり、ウェブ開発やパフォーマンス最適化に興味のある人にとって有益な情報です。
*   **Amazing! What stack did you use? (4 upvotes):** 投稿者が何を作成したのか興味を持ち、使用した技術スタック（プログラミング言語、フレームワーク、ライブラリなど）について質問しています。具体的な内容が分からないため、何について「Amazing!」と感じたのかは不明ですが、その成果に対して肯定的な感情を表していることは明らかです。


---

# Already tired of Liquid Glass

**Upvotes**: 317



[View on Reddit](https://www.reddit.com/r/webdev/comments/1l9umtr/already_tired_of_liquid_glass/)

## ポストの内容

1.  **タイトル:** 「Liquid Glass（リキッドグラス）にすでに飽きている」

2.  **投稿文:**
    *   投稿者は、まだリリースもされていない「Liquid Glass」について、多くのウェブ開発者が話していることにすでに疲れていると感じています。
    *   投稿者は、Appleを含め、様々な取り組みがある中で、「Liquid Glass」への注力は優先順位が低いと考えています。

つまり、投稿者は「Liquid Glass」という技術について、まだリリースもされていない段階ですでに過剰な注目が集まっていることに不満を感じています。

## 特に興味深いコメント

1.  **「61 upvotes: Meh. backdrop-filter: blur(4px) and call it a day. Close enough.」:**
    *   このコメントは、「Liquid Glass」の代替手段として、CSSの `backdrop-filter` プロパティと `blur(4px)` を使用することを提案しています。
    *   つまり、Liquid Glassの本質的な効果は、CSSだけで実現できると示唆しています。

2.  **「250 upvotes: Liquid Ass」:**
    *   これは言葉遊びで、「Liquid Glass」をもじって、不快感を表している可能性があります。

3.  **「99 upvotes: Is this not another post about liquid glass?」:**
    *   このコメントは、Liquid Glassに関する話題が頻繁に投稿されていることを示唆しています。
    *   投稿者と同様に、飽きているユーザーがいることがわかります。

4.  **「81 upvotes: looks aero feels aero」:**
    *   このコメントは、Liquid GlassがWindows VistaのAeroデザインのような視覚効果を想起させると述べています。

5.  **「13 upvotes: Let’s go Vista aesthetic I’m here for it」:**
    *   上記のコメントとは対照的に、このコメントはWindows VistaのAeroデザインのような視覚効果を好むことを表明しています。


---

# Finally a proper usage of meta tags

**Upvotes**: 441

![Image](https://i.redd.it/4kr0fny4ih6f1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1l9keeh/finally_a_proper_usage_of_meta_tags/)

## 1. ポストの内容の説明

このRedditのポストのタイトルは「ついにメタタグの適切な使用例」です。投稿の内容は具体的なメタタグの使用例について言及していると推測されますが、タイトルだけでは詳細は不明です。ポスト本文や関連する画像などが存在すれば、より詳細な内容を理解することができます。

## 2. コメントで特に興味深いもの

コメントの中で特に興味深いものは以下の2つです。

*   **101 upvotes: Nice. This is a common problem. Twitch brand guidelines start with something along the lines of thanks for not using an artwork from 2019**
    *   このコメントは、投稿された内容が「一般的な問題」に対する解決策であることを示唆しています。Twitchのブランドガイドラインが、古いアートワークの使用を避けるように促すことから始まっているという言及は、具体的な事例を示唆し、メタタグの適切な使用が重要であることを裏付けていると考えられます。
*   **14 upvotes: Best part is going to the founders Twitter profile, where he pokes fun of guys like Pieter Levels by having $0/mo MRR, $0/mo MRR, and $10,000k/MRR in his bio (Sentry makes $12m/yr)**
    *   このコメントは、Sentryの創設者のTwitterプロフィールに焦点を当てています。創設者が、月次経常収益（MRR）を皮肉を込めて表現し、他の起業家をからかっている様子を示唆しています。Sentryが年間1200万ドルの収益を上げているという事実と対比することで、起業家の成功と、それに対する皮肉を表現していると考えられます。このコメントは、投稿内容とは直接関係なく、別の話題を提供しており、皮肉めいたユーモアを含んでいます。


---

# Vibe coders irk me

**Upvotes**: 147



[View on Reddit](https://www.reddit.com/r/webdev/comments/1l9nzbs/vibe_coders_irk_me/)

## ポストの内容の説明

このRedditの投稿は、**"Vibe coders irk me"（雰囲気コーダーは私をイライラさせる）**というタイトルで、投稿者は、**「Vibe coding」**と呼ばれる、AIや自動コード生成ツールを使ってアプリケーションを作成する人々の投稿に対する違和感を表明しています。

具体的には、以下の点を指摘しています。

*   **達成感のずれ:** アイデアを具現化すること自体は素晴らしいと認めつつも、AIを使ってコードを生成することは、街のアーティストに肖像画を描いてもらい、それを「自分が描いた」と自慢するようなものだと例えています。つまり、コードを書くという具体的な作業を自分でしたわけではないのに、あたかも自分で作ったかのように振る舞うことに違和感を感じています。
*   **コスト削減:** AIツールを使うことで、プロのコーダーに依頼するよりも安価にアプリケーションを作成できるようになった点は認めています。
*   **「Vibe coding」に対する個人的な感情:** 投稿者は、自分だけがこのように感じているのか疑問を呈しています。

## 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「Hello World」との比較:** プログラミングを始めたばかりの人が「Hello World」プログラムを作成しても、それを大々的に発表するようなことはしないという意見です。Vibe codingで何かを作り上げた人が、あたかも大きな功績を成し遂げたかのように振る舞うことへの批判として、非常に的確な表現だと言えるでしょう。
*   **LLMツールへのマーケティング疑惑:** 投稿の多くが、大規模言語モデル（LLM）ツールの宣伝に利用されているのではないかという指摘です。Vibe codingの普及が、単なる技術的な進歩だけでなく、商業的な意図に基づいている可能性を示唆しています。
*   **「AI」は「ツール」ではなく「家電」:** 「AI」を「家電」に例えることで、AIが単なるツールではなく、より手軽に利用できる存在であることを強調しています。そして、Vibe codersを「AI」の消費者と表現し、彼らが真の開発者ではないと指摘しています。これは、AI技術の利用と開発者の役割に対する深い考察を示唆しています。

