
# 'Getting into DevOps'

**Upvotes**: 918



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

## 1. ポストの内容の説明

このRedditのポストは、「DevOpsを始めるにあたって」というテーマで、DevOpsに関する情報と、DevOpsの世界へ足を踏み入れる人たちへのアドバイスをまとめたものです。

**主な内容は以下の通りです。**

*   **DevOpsとは？**
    *   AWSの解説記事へのリンクを通して、DevOpsが開発チームと運用チームが連携し、アプリケーションのライフサイクル全体で協力し、手作業で時間がかかっていたプロセスを自動化する働き方であると説明しています。
*   **読むべき書籍**
    *   DevOpsの文化や考え方を理解するための書籍として、具体的な書籍名と簡単な内容の紹介をしています。例として、「The Phoenix Project」、「The DevOps Handbook」、「Google's Site Reliability Engineering」などがあります。
*   **何を学ぶべきか？**
    *   DevOpsを学ぶ上で参考になる情報源として、記事、ロードマップ、コメントへのリンクが紹介されています。
        *   インフラをコード化することの重要性を説明したエッセイ
        *   DevOpsのスキルセットをまとめたロードマップ（ただし、意見が分かれる場合もあると注意書きあり）
        *   DevOpsは問題解決のための考え方であり、特定のツールや資格よりも重要であるというコメント
        *   DevOpsと関連用語についての解説
        *   DevOpsのステップバイステップガイド
*   **DevOpsの性質と注意点**
    *   DevOpsは変化し続けている概念であり、特定のツールやスキルセットが普遍的ではないため、推奨事項はあくまで参考として捉えるべきであると注意喚起しています。
    *   ポストの目的は、DevOps初心者のための参考情報を提供することです。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、以下が特に興味深いと考えられます。

*   **Kubernetesの入門コース紹介（213 upvotes）**
    *   Kubernetesのアーキテクチャについて解説する、実践的な無料入門コースへのリンクを提供しています。Kubernetesクラスタを実際に構築し、コンポーネントを一つずつ無効化してKubernetesを使用しようとすることで、各コンポーネントの役割を理解するというユニークなアプローチです。
*   **実践重視の学習方法の提案（132 upvotes）**
    *   DevOpsの学習は、動画講座などよりも実践とGoogle検索を通して学ぶべきであると主張しています。具体的な実践タスクから得られる経験の重要性を強調し、100 Days of DevOpsなどの学習リソースを推奨しています。
*   **DevOpsの3つの主要原則（59 upvotes）**
    *   DevOpsの3つの主要原則として「自動化」、「監視」、「統合」を提示しています。
        *   自動化：手作業を避け、インフラのプロビジョニングを自動化することの重要性を強調し、TerraformやAnsibleなどのツールを推奨しています。
        *   監視：全てを監視することの重要性を説き、Netdataのようなツールを活用して監視システムを構築することを推奨しています。
        *   統合：クラウドプロバイダーのAPIを学び、監視ソリューションの機能を理解し、全てを繋ぐコードを書くことの重要性を説いています。
*   **KustomizeとHelmの動画紹介（41 upvotes）**
    *   Kubernetes関連のツールであるKustomizeとHelmに関する動画へのリンクを提供しています。Helmの概要、アプリケーションのデプロイ方法、Helmチャートの作成方法など、具体的なトピックを扱っています。
*   **Fakespot Reviews Analysis（24 upvotes）**
    *   Amazonのレビューの信頼性を分析するFakespotというツールの分析結果を共有しています。「The Phoenix Project」という書籍のレビューの信頼性を分析し、その結果を示しています。

---

# From Rejection to Redemption: How I Broke Into DevOps

**Upvotes**: 143



[View on Reddit](https://www.reddit.com/r/devops/comments/1ke1fjq/from_rejection_to_redemption_how_i_broke_into/)

## ポストの内容の説明

このポストは、DevOpsエンジニアへの転職に成功したユーザーの体験談です。

*   **状況:** IT業界で10年以上の経験を持ち、WindowsとLinuxシステムのサポート、問題解決、高度なセキュリティクリアランスなど、豊富な経験を持つ投稿者は、DevOpsの面接でことごとく不採用となり、自信を失っていました。
*   **問題点:** 面接では「経験不足」を理由に不採用となり、過去の給与水準が高いことも不利に働いていたようです。
*   **解決策:** 最後のチャンスとして、あるリクルーターからの紹介を受け、採用担当者との面接後に、技術的なラウンドに備えるために2週間の準備期間をもらいました。この期間に、投稿者は自宅にホームラボを構築し、以下の技術を習得しました。
    *   ホームラボの構築
    *   ArgoCDを使用したSock Shopアプリのデプロイ
    *   Terraformによるインフラストラクチャのプロビジョニング
    *   Prometheus、Grafana、Kuberhealthyを使用した監視設定
    *   HackerRank対策
*   **結果:** 技術面接では、構築した環境やアーキテクチャについて説明したところ、面接官から「残りの面接はスキップし、オファーを出します」と言われ、見事内定を獲得しました。
*   **結論:** 過去の経歴や高い給与水準ではなく、「粘り強さ、犠牲、そして能力の実証」が成功の鍵だったと述べています。また、DevOpsへの転職を目指す人へ、準備を待つのではなく、実際に構築し、学び続け、積極的に行動することの大切さを説いています。

## ポストに対するコメントで興味深いもの

以下に、特に興味深いコメントをいくつか紹介します。

*   **「This be the kind of content that should be here as well」 (53 upvotes):** ポストの内容が、このsubreddit（Redditのコミュニティ）にふさわしい内容であるという評価。
*   **「Happy for you, the kind of perseverance an engineer needs in this fast growing era of technologies in a market as cold as ice. Congratulations on the new job!」 (22 upvotes):** 投稿者の粘り強さを高く評価し、新しい仕事への成功を祝福しています。DevOpsのような技術革新が早い分野でのエンジニアの姿勢について言及している点が興味深いです。
*   **「Fair play, I’m so happy for you. 

I’m also a sysadmin with decade of experience with Win, Mac and Linux, and have been helping out my company with devops stuff every opportunity I get (pipelines, terraform). 

They have expressed interest in me moving into their devops/sre team a while back, but I haven’t been taking that too seriously. However, your story is inspiring me to fire up the extra server in my rack and give learning k8s a go. I find it difficult to stay motivated to study anything while being short staffed and basically spending 80% of my work on grinding helpdesk stuff hoping for day end.」 (10 upvotes):** 投稿者と同じように、ITインフラの経験があり、DevOps関連の業務にも関わっているユーザーからのコメント。投稿者の成功に触発され、Kubernetesの学習を始める意欲を得たことが語られています。日々の業務に追われ、なかなか学習のモチベーションを維持できないという、多くの人が抱える課題についても言及しており、共感を呼ぶ内容です。
*   **「Could you share more details of your observability stack, the implementation and relevant metrics collected?」 (3 upvotes):** 投稿者が構築した監視システム（Prometheus, Grafana, Kuberhealthy）の詳細な情報を求めているコメント。技術的な内容への関心を示しています。
*   **「Congratulations, and you are in the top 5% of devops. 

How did  you build your homelab?」 (3 upvotes):** 投稿者の成功を称え、ホームラボの構築方法について質問しています。


---

# Redis is open source again?

**Upvotes**: 219



[View on Reddit](https://www.reddit.com/r/devops/comments/1kdlg94/redis_is_open_source_again/)

## 1. ポストの内容の説明

このRedditのポストは、Redisが再びオープンソースになる可能性があるというニュースについて議論を呼びかけています。

*   **タイトルの要約:** 「Redisは再びオープンソースになったのか？」という疑問を投げかけています。
*   **投稿文の要約:** Redis 8で、Redisコミュニティがオープンソースに戻ることを検討しているというニュース（The New Stackの記事へのリンク付き）を紹介し、読者にこの件について議論することを呼びかけています。投稿者は、この情報が真実なのか、また、それについてどう思うかを知りたいと考えています。

## 2. 特に興味深いコメント

このポストに対するコメントは、Redisの過去のライセンス変更に対するユーザーの反応を色濃く反映しており、いくつかの重要なポイントが浮き彫りになっています。

*   **信頼の喪失:** 多くのユーザーが、Redisの過去のライセンス変更（クローズドソースへの動き）によってRedisへの信頼を失ったとコメントしています。一度失われた信頼は、たとえオープンソースに戻ったとしても、容易には回復しないという意見が多く見られます。

*   **Valkeyへの移行:** 多くのユーザーが、Redisの代替としてValkeyなどの他のデータベースへの移行を検討している、または既に移行したとコメントしています。Redisのライセンス変更は、Valkeyのような代替データベースの成長を促進したようです。

*   **企業倫理への批判:** ユーザーは、Redisの経営陣の行動を批判し、彼らが「信頼を裏切った」と非難しています。MySQLの例を引き合いに出し、同様のライセンス変更を行った企業に対する批判や、経営陣への処罰を求める声も上がっています。

*   **オープンソースへの回帰の効果に対する懐疑的な見方:** 一部のユーザーは、Redisがオープンソースに戻ったとしても、Valkeyのような代替データベースへの移行の流れを止めることは難しいだろうと予測しています。

これらのコメントは、Redisがオープンソースに戻るというニュースに対する、ユーザーの複雑な感情と、過去の行動が将来に与える影響を示唆しています。


---

# Just got laid off — Fullstack/Creative Developer

**Upvotes**: 170



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1kdex8t/just_got_laid_off_fullstackcreative_developer/)

## 1. ポストの内容の説明

このRedditのポストは、最近レイオフされたフルスタック/クリエイティブデベロッパーが、フリーランスの仕事やフルタイムのリモートポジションを探していることを表明しています。

投稿者は、6年の経験があり、以下のようなスキルセットを持っています。

*   **フロントエンド:** Framer Motion, GSAP, Tailwind CSS, Next.js, React
*   **バックエンド:** Firebase, Prisma, PostgreSQL, Express, Node.js
*   **DevOps / ツール:** GitHub, Vercel, Docker (基本)
*   **デザイン指向:** UX/UIに精通し、クリーンなインターフェースと洗練されたマイクロインタラクションを重視

また、以前にエージェンシーを運営していた経験から、技術面とビジネス面の両方の視点を持っていると自己紹介しています。

投稿者は、既存のプロダクトのスケールアップ、ランディングページの改善、新しいMVPのリリースなどを手伝えるとしており、DMまたはコメントでの連絡を呼びかけています。仕事のサンプルを共有したり、どのように貢献できるか話したりすることも可能であると述べています。リード、紹介、または機会があれば大歓迎とのことです。

## 2. ポストに対する特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「Commenting for reach! This market is crazy, I am sorry that happened to you.」**: ポストの可視性を高めるためにコメントしたという内容です。現在の市場の状況について言及し、投稿者の状況を気の毒に思っていることが示されています。
*   **「Where are you located? Could you PM me some examples of your work?」**: 投稿者の所在地と、ポートフォリオのサンプルを尋ねるコメントです。潜在的な採用担当者からの問い合わせである可能性があります。
*   **「If you’re in Canada, DM me your CV we’re looking for someone with your exact profile」**: カナダにいる場合は、履歴書を送るように呼びかけるコメントです。投稿者のスキルセットに合致する人材を探している企業の可能性があり、具体的な採用の申し出となっています。
*   **「I’d cross-post in other startup subs as well, since most people here already know how to code. Good luck friend. I hope you find a great position that you enjoy.」**: 別のsubredditへの転載を提案するコメントです。このsubredditの読者は既にコーディングの知識を持っている人が多いため、別の場所でより良い機会を見つけられるかもしれないというアドバイスです。
*   **「Crazy. You got this many responses just from making a Reddit post? I want to be you rn.」**: ポストへの反響の大きさに驚いているコメントです。


---

# Help! Beginner here. How to

**Upvotes**: 61

![Image](https://i.redd.it/q0ikovl13lye1.jpeg)

[View on Reddit](https://www.reddit.com/r/SQL/comments/1kdvb7q/help_beginner_here_how_to/)

## 1. ポストの内容の説明

このRedditのポストは、SQL初心者である投稿者が、映画のカテゴリに関するクエリを作成するのに苦労していることを示しています。具体的には以下の内容が記されています。

*   **問題:** R指定映画のトップカテゴリを見つけるSQLクエリを作成すること。投稿者は、'Family', 'Foreign', 'Sports', 'Action', 'Sci-Fi'の5つのカテゴリについて結果を求めています。
*   **投稿者の試みと結果:** 投稿者は既にクエリを試みていますが、結果は期待通りではありません。投稿者は、特定のカテゴリごとの映画の数を表示するクエリを求めています。
*   **期待する結果:** 投稿者は、カテゴリ名と、それぞれのカテゴリに属する映画の数を表示する表形式の結果を期待しています。例えば、以下のような形式です。

    ```
    name       total    
    Family      20
    Foreign    20
    Sports      25
    Action      30
    Sci-Fi        60
    ```

## 2. コメントの中で特に興味深いもの

このポストに対するコメントはいくつかあり、それぞれ異なる視点から投稿者を支援しています。特に興味深いコメントをいくつか紹介します。

*   **`41 upvotes: SELECT ... JOIN ... ON ...`**: このコメントは、投稿者が使用している古い構文（暗黙的なJOIN）が誤った結果を生み出していると指摘し、より現代的な`JOIN ... ON`構文を使用するようにアドバイスしています。これは、クエリの正確性を高めるための重要な提案です。また、クエリの書き方そのものの修正を示唆しています。

*   **`7 upvotes: I teach basic SQL ...`**: このコメントは、SQLを平易な言葉で説明し、クエリの各要素（SELECT、FROM、JOIN、WHERE）が何を表しているかを分かりやすく解説しています。初心者がSQLの概念を理解するのに役立つでしょう。このコメントは、SQLの基本的な考え方を伝える点で、非常に教育的です。

*   **`6 upvotes: Some helpful advice, I hope. no judgment. ...`**: このコメントは、スクリーンショットの取り方といった、技術的な問題解決へのアドバイスと、クエリの構造を改善するためのヒントを提供しています。スキーマに関する情報を要求し、クエリの例を示しています。スキーマがわからない状況でも、クエリ作成を支援しようという姿勢が見られます。

*   **`1 upvotes: People have already given you some guidance already but here’s whats happening: ...`**: このコメントは、投稿者が直面している問題が、2つのテーブル間の**直積**（cartesian product）によるものであると説明しています。これは、誤ったJOINの構文を使用した結果として発生する問題であり、投稿者が抱える問題を正確に特定し、その原因と解決策を提示しています。また、外部キー（FOREIGN KEY）の使用についても言及し、データベース設計の重要性を示唆しています。


---

# how do you actually use sql in practice?

**Upvotes**: 59



[View on Reddit](https://www.reddit.com/r/SQL/comments/1kdi8u5/how_do_you_actually_use_sql_in_practice/)

## 1. ポストの内容の説明

このRedditのポストは、SQLの学習を始めたばかりのユーザーが、SQLを実際にどのように活用するのか、そしてPower BIとどのように連携させるのか、という疑問を抱いていることを中心に展開されています。 具体的には、以下の点が主な質問として挙げられています。

*   **SQLの出力の活用方法:** SQLクエリを実行して結果が出力された後、その結果をどのように処理すればよいのか分からない。
*   **SQLとPower BIの連携:** SQLとPower BIを組み合わせて使用する方法が具体的にイメージできない。SQLの出力をPower BIに取り込む方法、Power BIでSQLクエリを活用する方法について知りたい。
*   **SQLの目的:** SQLは単にデータを見るためだけのものなのか、それとももっと別の使い道があるのか。SQLの役割について理解を深めたい。

投稿者は、`WHERE`, `HAVING`, `GROUP BY`, `CASE`などのSQLの基本的な構文は理解しているものの、それらを実際にどのように活用するのか、具体的な使用例を知りたいと考えています。

## 2. 特に興味深いコメント

このポストに対するコメントは、SQLの実用的な使用例や、Power BIとの連携方法について、様々な視点から回答しており、どれも参考になります。特に、以下のようなコメントが興味深いと考えられます。

*   **「電卓」の例え (55 upvotes):** SQLの使用方法を「電卓」の例えで説明しているコメントは、SQLの本質を捉えており、非常に分かりやすいです。SQLは、特定の計算や分析が必要な場合に「ツール」として利用されるという視点を示唆しています。このコメントでは、銀行のウェブサイトの例と、CEO向けのレポート作成の例を挙げて、SQLの具体的な使用例を示しています。Power BIとの連携についても触れ、SQLクエリをPower BIに組み込んで、ライブデータに基づいてビジュアルを作成する方法を説明しています。

*   **Power BIとの直接接続とCSVエクスポート (17 upvotes):** SQL Serverに直接接続し、SQLクエリの結果をテーブルとして作成し、クエリの実行とテーブルの更新をスケジュールする方法を説明しています。また、小規模なデータの場合は、CSVファイルとしてエクスポートし、Power BIにインポートする方法も提案しています。

*   **大規模組織での利用例 (12 upvotes):** 大規模組織でのSQLの利用例として、複数のテーブルや列から情報を取得し、それを組み合わせて分析に役立つ情報を生成する方法を挙げています。Excelへのエクスポートや、Power BIやTableauなどのBIツールへのデータセットのインポートについても触れています。

*   **データ変換の例 (3 upvotes):** データ変換の具体的な例として、複数のテーブルから必要なデータを抽出し、結合して新しいテーブルを作成する方法を説明しています。また、ExcelやPower BIからODBC接続を利用したり、SSRS (SQL Server Reporting Services)でレポートを作成したりする方法についても言及しています。さらに、WebサイトのユーザーデータやWebフォームからのデータをデータベースに格納し、分析に活用する例も挙げています。


---

# divs are not buttons and they certainly aren't links

**Upvotes**: 55



[View on Reddit](https://www.reddit.com/r/webdev/comments/1ke5uta/divs_are_not_buttons_and_they_certainly_arent/)

## 質問1: このポストの内容を説明してください。

このポストは、ウェブサイトの設計における**アクセシビリティ（使いやすさ）とユーザビリティ（使い勝手）の問題点**について、Redditのユーザーが不満を表明しています。具体的には、ウェブサイトのコンテンツ（商品ページや動画など）へのリンクとして、本来`<a>`タグ（リンク）や`<button>`タグ（ボタン）を使用すべきところを、**`<div>`タグが代用されている**状況について言及しています。

**問題点**:

*   **使い勝手の悪さ**: `<div>`タグはデフォルトではリンクやボタンのような振る舞いをしないため、ユーザーが新しいタブで開いたり、キーボード操作でナビゲートしたりすることが難しくなります。
*   **アクセシビリティの低下**: 特に、視覚障碍者など、キーボード操作やスクリーンリーダーを利用するユーザーにとって、`<div>`タグを使ったリンクは利用できない可能性があります。
*   **コーディングの疑問**: なぜこのような方法がとられるのか、投稿者はHTML/CSSの初心者であるため、それが単なる怠慢なのか、あるいは意図的なものなのか、疑問を呈しています。

**投稿文の例**:

投稿者は、あるお茶のオンラインストアの例を挙げ、`<div>`タグがボタンとして実装されているものの、マウスのクリックにしか反応せず、キーボード操作ではナビゲートできないことを指摘しています。

**結論**:

投稿者は、ウェブサイトの設計において、より良いユーザーエクスペリエンスとアクセシビリティを確保するために、適切なHTML要素（`<a>`や`<button>`）を使用することを強く求めています。

## 質問2: このポストに対するコメントのうち、特に興味深いものを教えてください。

このポストに対するコメントは、様々な角度からこの問題について考察しており、いくつかの興味深い意見が寄せられています。

*   **29 upvotes: "My guess is that they want to make the whole product card clickable and have some other links inside. It requires a bit more effort to do it properly"**
    *   これは、`<div>`タグを使う理由として、商品カード全体をクリック可能にするため、という可能性を指摘しています。しかし、正しく実装するには、より多くの努力が必要であることも示唆しています。
*   **17 upvotes: "I've seen this before when back end devs are called on to write front end code. It's cumbersome to reset all the browser default styles that a button or link has, and sometimes the typical back end developer isn't as concerned with usability, accessibility, etc. as the typical front end developer may be. So it's easier for them to reach for a div when putting something new on the page."**
    *   これは、バックエンド開発者がフロントエンドのコードを書く際に、デフォルトのスタイルをリセットする手間を避けるため、`<div>`タグを安易に利用してしまう傾向がある、という指摘です。また、ユーザビリティやアクセシビリティに対する意識が、フロントエンド開発者ほど高くないことも理由として挙げられています。
*   **14 upvotes: "People are coding everything using frameworks, so they never had to go through the phase of learning what each element did and experiencing the UX on a fundamental level"**
    *   フレームワークの使用により、HTML要素の役割やユーザーエクスペリエンスを深く理解する機会が失われている可能性がある、という意見です。
*   **4 upvotes: "It's funny you mentioned this, some context: ... This is all too say I suspect we'll see it more often"**
    *   AI（おそらくコード生成ツール）が同様のコードを生成している例を挙げ、今後この種の設計が増える可能性があると指摘しています。
*   **1 upvotes: "great question, u/\_htmx wrote a nice essay on this topic [https://htmx.org/essays/hateoas/](https://htmx.org/essays/hateoas/) ... many sites use scripting to add interactivity where HTML should be able to help you but the original idea of REST was lost."**
    *   関連する記事へのリンクを紹介し、HTMLで実現できる機能をスクリプトで実装する傾向を指摘しています。また、REST（Representational State Transfer）の原則が失われている可能性についても言及しています。

これらのコメントは、`<div>`タグをリンクとして使用することに対する様々な理由や背景を考察しており、ウェブデザインにおける技術的側面や、開発者の意識、そして今後の傾向について示唆を与えています。


---

# Why has there been a recent surge in criticism toward Next.js?

**Upvotes**: 65



[View on Reddit](https://www.reddit.com/r/webdev/comments/1ke39dl/why_has_there_been_a_recent_surge_in_criticism/)

## 1. ポストの内容の説明

この Reddit のポストは、Next.js (JavaScriptのウェブフレームワーク) に対する最近の批判が増加している理由について疑問を呈しています。投稿者は、批判が本物であるなら、代替案は何なのか、Ruby on Rails のような他の技術に回帰するべきなのかと尋ねています。つまり、Next.js に何らかの問題があり、人々がそれを批判し始めているという認識を示唆しています。

## 2. 特に興味深いコメント

このポストに対するコメントは、Next.js への批判に関する様々な視点を提供しています。特に興味深いコメントを以下にまとめます。

*   **長期的な安定性への懸念 (99 upvotes):** 多くのユーザーが、Next.js の長期的な安定性、特に LTS (Long Term Support) やエッジ戦略について懸念を表明しています。プロジェクトの寿命が長いほど、安定性へのニーズは高まります。

*   **Vercel による影響 (67 upvotes):** Next.js は Vercel 社によって開発されており、Vercel が自社のプラットフォームで Next.js が最適に動作するように設計していることへの批判があります。Vercel の投資回収のために、ユーザーがプラットフォームにロックインされる可能性があるという懸念も示唆されています。これは、オープンソースプロジェクトにおける資金調達と収益化モデルに対する一般的な批判です。

*   **SPA (Single Page Application) への回帰 (106 upvotes):** Next.js を SPA に無理に適用することへの批判。Next.js が必ずしも全てのプロジェクトに最適なソリューションではなく、SPA が適している場合もあるという意見です。

*   **具体的な批判点 (63 upvotes):** このコメントは、Next.js への批判の具体的な理由を複数挙げています。
    *   **セキュリティ脆弱性:** 過去にセキュリティ上の問題が発生し、修正されたこと。
    *   **API の変更:** API が頻繁に変更されることへの不満。
    *   **サーバーコンポーネントへの懐疑的な見方:** サーバーコンポーネントに対する理解や信頼がまだ確立されていないこと。
    *   **ベンダーロックインへの懸念:** Vercel のインフラストラクチャに密接に統合されているため、移行が難しいという懸念。
    *   **新しい App Router の複雑さ:** 新しい App Router が、ファイルルーティングのインフラストラクチャに必ずしも合わず、過剰で混乱を招く可能性があること。
    *   **ユーザー数の多さ:** 人気があるため、批判される機会も多くなること。


---

# I built a web app which creates 3D holographic trading cards

**Upvotes**: 120



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kdskwa/i_built_a_web_app_which_creates_3d_holographic/)

1.  **このポストの内容の説明:**

    Redditの投稿者は、3Dホログラフィックトレーディングカードを作成できるウェブアプリケーションを開発したと発表しています。このウェブアプリは、Three.jsとバニラJavaScriptを使用して構築された個人の趣味プロジェクトです。ユーザーは、カードの画像とテキストを編集し、カードを回転させ、ホログラフィックの強度を調整し、最終的に画像をエクスポートすることができます。投稿者は、このアプリを無料で利用できるリンクも提供しています。

2.  **特に興味深いコメント:**

    *   **「Is there a way we can play with this?」 (11アップボート):** このコメントは、実際にアプリを試してみたいというユーザーの強い関心を示しています。アプリのインタラクティブな性質と、トレーディングカードを作成するというユニークなアイデアに対する期待感が伺えます。
    *   **「Create your own cards for free here: [https://canigetyourholograph.netlify.app/](https://canigetyourholograph.netlify.app/)」 (6アップボート):** これは、投稿者自身が提供したアプリへのリンクを共有したコメントです。ユーザーが実際にアプリを試せるようにすることで、プロジェクトへの興味を深め、使用を促しています。
    *   **「What technology did you use to make it, it's very cool.」 (2アップボート):** このコメントは、技術的な詳細に対するユーザーの興味を示しています。Three.jsやJavaScriptなどの使用技術について尋ねることで、開発の裏側への関心と、プロジェクトの技術的な側面への称賛を表しています。


---

# I made a free tool to generate color palettes, shades and font pairings with real-time preview. No signup required!

**Upvotes**: 58



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kdrq4o/i_made_a_free_tool_to_generate_color_palettes/)

## 1. ポストの内容の説明

このRedditのポストは、19歳の大学生が作成した無料のWebデザインツール「StartUI」の紹介です。彼は、新しいプロジェクトを始める際に色、フォント、スタイルで詰まってしまい、デザインの決定に時間がかかってしまうことに不満を感じ、このツールを開発したと述べています。

「StartUI」の主な機能は以下の通りです。

*   **カラーパレットジェネレーター:** 色の組み合わせを生成します。
*   **Tailwind-like shadesジェネレーター:** Tailwind CSSの4色スケールに似た、一貫性のあるシェードを生成します。
*   **フォントペアリング:** Google Fontsライブラリからランダムまたは厳選されたフォントペアリングを提供します。
*   **リアルタイムプレビュー:** デザインの変更をリアルタイムで確認できます。
*   **エクスポート機能:** Tailwind, CSS, SCSS形式でコードをエクスポートできます。
*   **APCAコンプライアンスチェッカー:** 色のアクセシビリティ（コントラスト比）をチェックします。
*   **FastForward:** アプリやWebサイトの説明を入力すると、関連する色とフォントペアリングを提案します（まだテスト段階）。

彼は、このツールを[startui.app](https://startui.app/)で公開しており、フィードバックを求めています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「Great work! Will be putting this to use.」（5 upvotes）:** このコメントは、ツールの有用性を認め、実際に使用する意向を示しています。
*   **「This is actually pretty cool, thanks! Working on a side project right now, and I'm terrible at design/UI stuff, so at least having colors will definitely help. :)」（2 upvotes）:** このコメントは、ツールの価値を認め、デザインが苦手なユーザーにとって役立つと具体的に述べています。
*   **「Looks great! Bookmarked for the future. You got a bright future ahead of you if this is where you’re at at 19.」（1 upvote）:** このコメントは、ツールの見た目を評価し、将来の使用を約束し、19歳でこのレベルのツールを開発した投稿者の将来性を高く評価しています。
*   **「Very simple idea but great execution, well done」（1 upvote）:** このコメントは、シンプルなアイデアでありながら、その実装の質を高く評価しています。

