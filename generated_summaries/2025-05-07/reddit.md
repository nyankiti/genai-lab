
# Backstage feels like a fools errand

**Upvotes**: 45



[View on Reddit](https://www.reddit.com/r/devops/comments/1kgfqys/backstage_feels_like_a_fools_errand/)

## ポストの内容の説明

1.  **投稿者の問題:**
    *   投稿者は、以前の従業員が Backstage を利用してインフラのプロビジョニングを推進していたのを引き継いだ。
    *   Backstage を利用することで、Bash スクリプトを実行するための React アプリケーションを開発する必要があった。
    *   スクリプトの更新には Backstage の完全なアップグレードが必要となり、手間がかかる。
    *   Bash のワンライナーをテンプレートに追加したいが、適切なランナーがないため、自作するか、セキュリティチームが承認しないサードパーティ製のものを使うしかない。

2.  **投稿者の疑問:**
    *   なぜ多くの人が React アプリケーションを使ってインフラのプロビジョニングを行うことを推奨するのか？

3.  **投稿者の背景:**
    *   投稿者は、Backstage を使うことの複雑さや非効率性、特に React を使ってインフラ管理をすることに疑問を抱いている。

## 特に興味深いコメント

1.  **「無料のIDP (Internal Developer Platform)の罠」**:
    *   Backstage を「無料の」 IDP に例え、「シボレーの部品をすべて渡されて『さあ、これであなたの車です』と言われるようなもの」と表現している。
    *   趣味で使うには良いかもしれないが、Day 1 から使える、他の会社がメンテナンスしてくれる Port のような IDP を購入することを推奨している。

2.  **「エンジニアの人件費」の皮肉**:
    *   SaaS の IDP の料金よりも、エンジニアチームを雇って Backstage を運用・保守する方が「安い」と皮肉っている。

3.  **「Bootcamp 出身者のJS」**:
    *   バックエンドの知識がなく、JS のみ学んだようなエンジニアが、Backstage のようなツールを扱う際に、JS だけで全てを解決しようとすることがあると指摘している。

4.  **「Backstage に対する否定的な意見」**:
    *   以前の職場での Backstage の利用経験があり、それを「嫌いだった」と明確に述べている。

5.  **「Backstage の潜在的なターゲット層」**:
    *   Backstage が Typescript を中心としたツール群であることを踏まえ、Ops/プラットフォームエンジニアリングの知識がない開発者が、より多くの Ops の責任を負うことになった結果、Backstage が彼らの主要なソリューションとなる可能性があると推測している。
    *   Backstage の盛り上がりの背景には、Ops への知識がないエンジニアが Ops 的な役割を担わされるという状況があるのではないかと示唆している。


---

# Was pushed into a Devops role. Never got the chance to learn properly

**Upvotes**: 69



[View on Reddit](https://www.reddit.com/r/devops/comments/1kg53p9/was_pushed_into_a_devops_role_never_got_the/)

## ポストの内容の説明

この Reddit のポストは、DevOps ロールに配属されたものの、十分な学習時間を与えられなかったユーザーの経験について語っています。彼は締め切りに追われ、Istio や監視ツールなどの高度な技術について深く学ぶ機会がなかったと感じています。彼は自分の仕事は問題なくこなせるものの、知識の深さに不安を感じており、この状況を変えたいと考えています。しかし、DevOps の変化の速さから、どこから始めれば良いのか途方に暮れています。ロードマップを参考にすべきか、何かを実装してみるべきか、もしそうなら何から始めるべきか、アドバイスを求めています。

## コメントのうち特に興味深いもの

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **roadmap.sh/devops への言及:** あるコメントは、DevOps の学習に役立つロードマップを提供している Web サイトへのリンクを提示しています。このロードマップは、DevOps の学習の道筋を示す貴重なリソースとなる可能性があります。
*   **「正しい方法」は存在しないという意見:** あるコメントは、DevOps には「正しい方法」が一つだけあるわけではないと指摘しています。重要なのは、自分のワークフローに合ったツールを選択し、管理上のオーバーヘッドを最小限に抑えることです。GitOps の導入も提案されており、Git リポジトリをあらゆるものの真実の情報源とするアプローチは、DevOps の実践において非常に重要です。
*   **John Savill の DevOps マスタークラスの推奨:** あるコメントは、YouTube で公開されている John Savill の DevOps マスタークラスを視聴することを推奨しています。このコースは、DevOps プロセスの概要を体系的に学ぶのに役立つ可能性があります。
*   **DevOps の現実への言及:** あるコメントは、投稿者の経験が DevOps の世界では一般的であると述べています。
*   **DevOps ロールへの感謝と学習の勧め:** 別のコメントは、DevOps ロールを得られたことに感謝し、学習を始めるように促しています。厳しい雇用市場において、DevOps の仕事に就けることは貴重な機会であるという認識を示しています。

---

# What really makes an Internal Developer Platform succeed?

**Upvotes**: 41



[View on Reddit](https://www.reddit.com/r/devops/comments/1kg3gj4/what_really_makes_an_internal_developer_platform/)

## 1. ポストの内容の説明

このRedditのポストは、Pulumiのコミュニティエンジニアである投稿者が、Internal Developer Platform (IDP) の成功要因について、他の開発者の意見を求めているものです。投稿者は、IDPの機能がデモ向けのものと、実際に長期的にプラットフォームを運用する上で重要なものを見分けるのが難しいと感じています。

具体的には、以下のような質問をしています。

*   **IDPの運用において、本当に重要な機能は何か？**
*   **インフラのライフサイクル管理をどのように行っているか、またはどのように行いたいか？**
*   **1クリックでプロビジョニングできるポータルを成功させている事例があれば知りたい。**

投稿者は、IDPの「Day-2-and-beyond」の課題、つまり運用開始後の問題に関心を持っており、特にインフラ管理の現実的な側面について、他の開発者の経験や知見を求めています。

## 2. 興味深いコメントの紹介

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **Backstageの経験談 (12 upvotes):**  Backstageを導入したものの、サービスカタログとしての利用は評価している一方で、アプリの開発・デプロイツールとしては使い勝手が悪いと感じているという意見です。GitHubテンプレートの方がよりシンプルで効果的であると述べています。

*   **共通プラクティスの重要性 (4 upvotes):** 特定の技術スタックよりも、チーム内での共通のワークフローと期待値を共有することの方が重要であるという意見です。プラットフォーム構築の基盤として、技術よりもチーム内の連携や標準化を重視する考え方が示唆されています。

*   **CLIによる自動化 (3 upvotes):** CLI (コマンドラインインターフェース) を利用して、サービスの起動、Kindクラスタのブートストラップ、開発リソースの設定などを自動化している事例です。CLIはマニフェストの検証にも利用されており、Spotifyとの連携をエイプリルフールのジョークとして実装したというエピソードも含まれています。

*   **シンプルさの重要性 (10 upvotes):** "dumber and more boring"、つまりシンプルで退屈なほど、安定性と自動化が向上するという意見です。`./run-cli.sh deploy all/staging/demo/test/whatever/yolo` のような単一のCLIコマンドで、インフラからアプリケーションのデプロイまでを完結させています。Ansible、API呼び出し、GitHub Actionsなどを組み合わせており、再現性、予測可能性、そして "just *works*" を重視しています。開発者は、Terraformの内部構造を理解したり、コードを書いたり、UIを操作したりする必要がなく、プッシュだけでデプロイが完了するよう設計されています。

*   **インフラとソフトウェアライフサイクルの分離 (2 upvotes):** インフラとソフトウェアのライフサイクルを分離することで、開発プロセスを効率化できるという意見です。ただし、クラウドプロバイダーが過剰な支出を促すことができなくなるため、クラウドプロバイダーにとっては不利になる可能性があります。 IDPは、IaC (Infrastructure as Code) の楽しさよりも、開発者が求めるものを実現することに重点を置いていると述べられています。


---

# Google frontend interview

**Upvotes**: 45



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1kfv4ic/google_frontend_interview/)

## ポストの内容

1.  **投稿者の状況:** 投稿者は、GoogleのL4ポジションのフロントエンド面接を数日後に控えているインド在住の人物です。過去にいくつかの面接を経験していますが、Googleの面接に特有の期待について不安を感じています。
2.  **質問内容:**
    *   フロントエンドの面接形式について（UI開発がGoogleドキュメント上で行われるのか、コードエディターが使用できるのか）。
    *   面接でどのような問題が出題されるのか。
    *   残りの期間でどのようなリソースに焦点を当てて準備すれば良いか。
    *   面接の経験がある人からの具体的なアドバイスを求めています。
3.  **補足情報:** 投稿者は、オンサイト面接の一環として、既に2回のDSA（データ構造とアルゴリズム）ラウンドを通過しています。今回のフロントエンドラウンドは、オンサイト面接の3回目のラウンドです。

## 特に興味深いコメント

1.  **UI構築に関するコメント (20 upvotes):** 過去の経験に基づき、Googleドキュメント上でUIを構築する形式であったと述べています。基本的なToDoリストのようなUIを構築し、使用する言語/フレームワークは自由に選択できたとのことです。コンポーネントの設計、状態管理、アクセシビリティなどを考慮することが重要であり、スタイルは重要視されないとアドバイスしています。
2.  **DSAラウンドの質問に関するコメント (12 upvotes):** DSAラウンドでどのような質問があったのか、他のユーザーが質問をしています。
3.  **リクルーターへの質問を勧めるコメント (9 upvotes):** 面接の形式や準備について、リクルーターに直接質問することを推奨しています。
4.  **過去の経験に基づくコメント (6 upvotes):** ホワイトボードベースの面接で、debounce/throttleの実装やチェックボックスの構築を求められたという経験談が述べられています。さらに、Googleの面接でよく出題される問題のリストが掲載されたWebサイトへのリンクも共有されています。
5.  **jQueryの構築に関するコメント (5 upvotes):** jQueryをJavaScriptで構築するという課題が出題されたという、ユニークな経験談が共有されています。


---

# Why almost all of libraries are free?

**Upvotes**: 92



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kgcnze/why_almost_all_of_libraries_are_free/)

## 1. ポストの内容の説明

Redditのこのポストは、プログラミングライブラリがなぜほとんど無料で利用できるのかという疑問について提起しています。投稿者は、ReactやAngularのような大規模な企業が開発したライブラリでさえ、なぜ無料で提供されているのか理解できないと述べています。これらのライブラリの開発と維持には多大な時間と労力が費やされており、有料化されてもおかしくないと考えています。

投稿者は、WinRARのように、個人利用は無料、企業利用は有料というビジネスモデルを採用することも可能なのではないかと提案しています。しかし、なぜ多くのライブラリが無料で提供され続けているのか、その理由に疑問を抱いています。投稿者は、これはあくまで疑問であり、文句を言っているわけではないと強調しています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **556 upvotes: Long story short, if you don't make it free, nobody will use it.** (要約すると、無料でなければ誰も使わない。)
    *   このコメントは、ライブラリが無料で提供される理由を簡潔に説明しています。多くのユーザーに利用してもらうためには、無料であることが不可欠であるという考えを示しています。
*   **124 upvotes: I think because they get other kind of value. Meta most surely developed react because they needed that framework for themselves. It being open source also helps to mantain it and it being free helps create a great userbase with a huge ecosystem.** (彼らは別の種類の価値を得ているのだと思います。MetaはReactを自社のツールとして必要としたから開発したはずです。オープンソースにすることでメンテナンスを助け、無料で提供することで、巨大なユーザーベースとエコシステムを構築できます。)
    *   このコメントは、企業が無料でライブラリを提供する理由を、金銭的な対価以外の「価値」に注目して説明しています。例えば、自社製品の開発に必要だったから、オープンソースにすることで開発を促進できるから、といった理由を挙げています。また、無料にすることでユーザーベースを拡大し、エコシステムを構築できることも利点としています。
*   **147 upvotes: It’s one of my favorite parts about this profession, programmers openly share a lot of knowledge, reusable code, and trade secrets with each other. It’s one of the industry’s best traits imo!** (これは私がこの仕事で好きなことの1つです。プログラマーは、多くの知識、再利用可能なコード、そして企業秘密を互いにオープンに共有しています。それは業界の最高の特性の1つだと思います！)
    *   このコメントは、プログラミング業界におけるオープンソース文化を肯定的に評価しています。プログラマーが知識やコードを共有することによって、業界全体が発展するという考えを示しています。


---

# What Do You Think of the New GTA VI Webpage Design?

**Upvotes**: 172



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kg7bdl/what_do_you_think_of_the_new_gta_vi_webpage_design/)

## 1. ポストの内容の説明

このRedditのポストは、Rockstar Gamesのウェブサイトにある、新作ゲーム「Grand Theft Auto VI (GTA VI)」のウェブページのデザインについて、ユーザーに意見を求めるものです。

*   **投稿者:** Web開発者ではないものの、GTA VIのウェブページが視覚的に魅力的で、没入感があると評価しています。
*   **質問:** デザイン、アニメーション、パフォーマンスについて、他のユーザーの意見を求めています。特に、クールな機能や技術的な点で、何か気づいた点があれば教えてほしいと尋ねています。

要するに、この投稿はGTA VIのウェブサイトのデザインに対する一般ユーザーの評価や、技術的な詳細について議論するためのものです。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **パフォーマンスに関するコメント:**
    *   多くのユーザーが、モバイル端末でのパフォーマンスに問題を指摘しています。特に、読み込み時間の長さ（12秒〜20秒）や、スクロール時のフレームレートの低下（10fps）といった報告が目立ちます。
    *   一部のユーザーは、画像が表示されないリンクがあったと報告しており、トラフィック集中による問題を示唆しています。

*   **デザイン意図に関するコメント:**
    *   デザインの意図を評価するコメントがあり、派手で人目を引くことを目的としており、アクセシビリティを重視していないと指摘しています。これは、デザインの目的とユーザーエクスペリエンスの優先順位について、議論を呼ぶ可能性があります。

これらのコメントは、ウェブサイトのデザインが、視覚的な魅力と同時に、パフォーマンスやユーザーエクスペリエンスとのバランスをどのように取るべきかという、重要な側面を浮き彫りにしています。


---

# Why do MNCs seem to avoid the MERN stack?

**Upvotes**: 57



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kfw7zr/why_do_mncs_seem_to_avoid_the_mern_stack/)

## 1. ポストの内容の説明

このRedditの投稿は、MNC（多国籍企業）がMERNスタックを避ける傾向がある理由について尋ねています。投稿者は、小規模なスタートアップやテック企業ではMERNスタックが人気がある一方、MNCの求人ではJava、.NET、Python/Djangoなどが主流であることに気づき、その理由を探求しています。 投稿者は、技術的な理由や組織的な理由があるのか、他の人の経験や意見を求めています。

## 2. 興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **コメント1 (177 upvotes):** 大手企業が既存の技術スタック（Java、.NETなど）に深く投資しており、特に問題がない限り、安易に技術スタックを切り替えることはしないという意見です。既存のシステムとの互換性や、技術的なリスクを考慮した現実的な視点を示しています。

*   **コメント2 (131 upvotes):** MERNスタックがMongoDBのマーケティング戦略の一環として広まったという、やや批判的な意見です。 業界全体を反映しているわけではなく、新しい開発者がYouTubeなどの情報に影響されて使っているという見解を示しています。

*   **コメント3 (152 upvotes):** 大手企業でNoSQLデータベースであるMongoDBよりも、リレーショナルデータベースの方が広く使われている点を指摘しています。 企業が持つデータの構造や、データの管理方法との関連性を示唆しています。

*   **コメント4 (66 upvotes):** MERNスタックを「YouTuber/Twitter stack」と表現し、その人気が特定のプラットフォームや情報源に依存していることを示唆しています。

*   **コメント5 (26 upvotes):** MERNスタックが、小規模なWeb企業やブートキャンプ以外ではあまり普及していないと指摘しています。また、サポートの質、ロードマップの予測可能性、エコシステムの互換性などの点で課題があることを示唆し、リレーショナルデータベースの方が多くのユースケースで優れているという意見を述べています。


---

# The new GTA 6 website was made with NEXT.js

**Upvotes**: 209



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1kg93s4/the_new_gta_6_website_was_made_with_nextjs/)

## ポストの内容の説明

このRedditのポストは、新しいゲーム「Grand Theft Auto VI (GTA 6)」の公式ウェブサイトが、Webサイト構築フレームワークであるNext.jsを使用して作成されたことを報告しています。

*   **タイトル:** 「新しいGTA 6のウェブサイトはNext.jsで作られました」
*   **投稿文:** GTA 6の公式ウェブサイトへのリンクを提示し、ユーザーに確認を促しています。
*   **ウェブサイトのURL:** [https://www.rockstargames.com/VI](https://www.rockstargames.com/VI)

つまり、投稿者は、GTA 6のウェブサイトがNext.jsという技術を使って構築されていることを発見し、その情報を共有しています。

## コメントのうち、特に興味深いもの

このポストに対するコメントは、ウェブサイトの技術的な側面と、ユーザーエクスペリエンスに関する意見に大きく分かれます。

1.  **パフォーマンスに関するコメント:**
    *   多くのユーザーがウェブサイトのパフォーマンス（特に読み込み速度や、動画再生の滑らかさ）について言及しています。
    *   一部のユーザーは、高性能なPC環境でもウェブサイトが重く感じると報告しており、技術的な最適化不足を指摘しています。
    *   「Looks cool, but they have to really take a look at the performance. It's so incredibly laggy on Windows, Firefox with a 3080ti :D」というコメントは、3080tiというハイエンドグラフィックボードを搭載した環境でもラグが発生していると報告しています。
    *   「I've seen websites with much more action load with less lag. It's almost like it had a hard time with the video... the one thing that should be smooth. Tested in both chrome and firefox. My pc is way over powered for this so it should not be a problem.」というコメントは、ウェブサイトが動画再生で問題を起こしているのではないかと推測しています。
2.  **Next.jsの使用に対するコメント:**
    *   Next.jsを使用していること自体を肯定的に評価するコメントがあります。「Entirety of \[https://www.rockstargames.com/](https://www.rockstargames.com/) seems to be made with NextJS, yeah. Awesome!」というコメントは、Rockstar Gamesがウェブサイト全体でNext.jsを使用していることに感銘を受けています。
    *   一方で、Next.jsをこのシンプルなウェブサイトに使う必要性について疑問を呈するコメントもあります。「Why do you need Nextjs for this onepage thing???」
3.  **読み込みに関するコメント:**
    *   一部のユーザーはウェブサイトが読み込まれないという問題を報告しています。「Doesn't load for me」「Holy cow, now it does, and looks great」というコメントは、ウェブサイトの読み込みに問題があったものの、後に解決したことを示しています。

これらのコメントは、ウェブサイトの技術的な実装（Next.jsの使用）、パフォーマンス（読み込み速度、動画の滑らかさ）、ユーザーエクスペリエンスに関する様々な視点を示しており、ウェブサイトの改善点を示唆しています。


---

# Switched to pnpm — My Next.js Docker image size dropped from 4.1 GB to 1.6 GB 😮

**Upvotes**: 163



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1kg12p8/switched_to_pnpm_my_nextjs_docker_image_size/)

## 1. ポストの内容の説明

このポストは、Next.jsアプリケーションのDockerイメージサイズを大幅に削減することに成功した経験について述べています。 具体的には、npmからpnpmというパッケージマネージャーに切り替えた結果、Dockerイメージのサイズが4.1GBから1.6GBにまで減少したと報告しています。

**主なポイント:**

*   **問題:** npmを使用していた際、Next.jsアプリケーションのDockerイメージサイズが大きかった（4.1GB）。
*   **解決策:** pnpmへの移行。
*   **結果:** Dockerイメージサイズが1.6GBにまで縮小（約60%の削減）。
*   **pnpmの利点:**
    *   依存関係をグローバルで管理し、symlinkを使用することで、`node_modules`内のファイル重複を回避。
    *   Dockerビルドの高速化。
    *   イメージのPull/Push時間の短縮。
    *   CI/CDの待ち時間の短縮。
    *   依存関係管理の簡素化。
*   **推奨:** Node/Next.jsアプリでDockerを使用している場合は、pnpmを試してみることを推奨。
*   **補足:** 投稿者は、さらなる最適化を行い、最終的には230MBまでイメージサイズを削減することに成功した。詳細は、関連するスレッドとブログ記事を参照。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「1.6GB is so big, how you even managed to get 4GB is beyond me. Are you not staging your dockerfile? My image for a pretty heavy nextjs app is like 300MB. Copy only the relevant files and folders to the production stage in your dockerfile and then run a --production install. Should leave you with a slim final image for prod.」**：イメージサイズが大きいことに対する疑問と、Dockerファイルでの最適化方法の提案（ステージングと`--production`オプションの使用）が示されています。このコメントは、Dockerイメージの最適化に関する重要なヒントを提供しています。

*   **「1.6Gb is too big. You should be able to have something like 500Mb at maximum. Use alpine source images maybe? Also if your goal is to improve docker build times, CI/CD wait times and cleaner dependency management, then there’s nothing better than Yarn Zero installs,  pnpm won’t come close, even if you’re caching and using multi steps builds properly. I don’t understand why people still talk about Yarn v1. Yarn v2 and superior is the same as pnpm, and better if you use plug n play / zero installs」**：イメージサイズについてさらなる最適化の可能性を指摘し、Alpineイメージの使用を提案しています。また、Yarn Zero installsをpnpmよりも優れた解決策として推奨しています。これは、他のパッケージマネージャーの選択肢と、それらの利点について議論を呼ぶ可能性があります。

*   **「do I need to change some config or just install pnpm and use pnpm command in place of npm ?」**：pnpmへの移行の具体的な方法についての質問です。これは、実際にpnpmを試してみたいと考えているユーザーにとって、非常に重要な疑問です。

*   **「i don't understand how package managers impact docker image sizes?」**：パッケージマネージャーがDockerイメージサイズに影響を与える仕組みについて理解を深めようとする質問です。これは、このテーマに関する基本的な理解を求めるユーザーにとって、重要なポイントです。


---

# Also had a runaway bill of $949.32 on Vercel after upgrading to Pro, here's what you should do to prevent this

**Upvotes**: 172

![Image](https://i.redd.it/tj00lfh2g2ze1.png)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1kft7i3/also_had_a_runaway_bill_of_94932_on_vercel_after/)

## 1. ポストの内容の説明

このポストは、Next.js + RSC (React Server Components) を使用して構築されたサイドプロジェクトで、Vercel Proにアップグレードした後、予期せぬボットトラフィックによって$949.32という高額な請求が発生した経験を共有しています。著者は、同様の問題を回避するための対策として、以下の5つの推奨事項を提示しています。

1.  **支出制限の設定:** Vercelの「支出管理」機能を使って、予期せぬ請求を防ぐ。
2.  **新しいボットフィルターの有効化:** プロジェクトのファイアウォール設定でボットフィルターを有効にし、ボットトラフィックをブロックする。
3.  **Fluid Computeの有効化:** VercelのFluid Compute機能を利用して、関数実行時間の最適化とコスト削減を図る。
4.  **`next/link` の自動プリフェッチの無効化:** `next/link` コンポーネントのプリフェッチ機能を無効にすることで、不要なリソースの読み込みを防ぐ。カスタムコンポーネント `NoPrefetchLink` を使用して実現できる。
5.  **クライアントサイドレンダリングの利用:** 重いサーバーサイド処理はクライアントサイドレンダリング (CSR) に移行し、サーバー側の負荷を軽減する。

著者は、この問題についてVercelのサポートに連絡を取り、25%の割引を受けたことも報告しています。

## 2. ポストに対するコメントのうち、特に興味深いもの

以下に、特に興味深いコメントをいくつか紹介します。

*   **「ちょうどアップグレードしようとしていたところ...これは非常にタイムリーな投稿でした。本当にありがとうございます。」 (37 upvotes)**
    *   このコメントは、多くのユーザーが同様の状況に直面する可能性があり、この投稿が非常に役立つ情報を提供していることを示しています。

*   **「> 重いサーバーサイド処理にはクライアントサイドレンダリングを使用する。

    これはどう考えてもおかしいと思いませんか？ウェブサイトを最適化し、最新のサーバーサイドレンダリング技術を使っているのに、このような略奪的な価格設定のためにダウングレードしなければならないなんて...」 (56 upvotes)**
    *   このコメントは、著者が提案したCSRへの移行に対する批判的な意見です。Vercelの価格設定が、本来の目的であるサーバーサイドレンダリング技術の利点を損なう可能性があると指摘しています。

*   **「これの問題を防ぐには？Cloudflare Pagesを使いましょう。月額5ドルです。楽しい人生を。」 (26 upvotes)**
    *   このコメントは、Vercelの代替手段としてCloudflare Pagesを提案しています。料金体系がよりシンプルで、コストを抑えられる可能性があることを示唆しています。

*   **「あなたがすべきこと？自己ホストすること。」 (16 upvotes)**
    *   このコメントは、Vercelのようなプラットフォームに依存するのではなく、自己ホスト (自分でサーバーを管理する) することの利点を主張しています。

*   **「より関連性の高いグラフ - 関数の持続時間」 (4 upvotes)**
    *   このコメントは、問題の原因と対策を理解する上で役立つであろうグラフへのリンクを共有しています。


---

# I will help your team migrate your app to Cloudflare Workers/Pages off of Vercel for free

**Upvotes**: 36



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1kg0fhl/i_will_help_your_team_migrate_your_app_to/)

## ポストの内容

1.  **概要:** このポストは、Vercel (ウェブサイトのホスティングサービス) からCloudflare Workers/Pagesへのアプリケーション移行を無料で支援するという内容です。
2.  **目的:** Vercelの料金に関する問題がユーザーの間で話題になっているのを見て、Cloudflareへの移行を支援することで、コスト削減とパフォーマンス向上に貢献したいと考えています。
3.  **提供内容:** 無料のコンサルティングを提供し、Cloudflareへの移行に関するアドバイスやサポートを行います。
4.  **経験:** 投稿者は自身も2つのミディアムサイズのアプリをCloudflareに移行した経験があり、その結果に満足していると述べています。
5.  **連絡方法:** 興味のある人は、投稿者にDMを送り、Calendlyのリンクから予約するように促しています。

## 興味深いコメント

1.  **Vercelユーザーからの意見:** Vercelの料金設定や監視システムは分かりやすく、料金に驚いた経験はあるものの、それは自身のコードの問題であり、簡単に修正できたという意見があります。
2.  **Cloudflare PagesのSSRに関する質問:** Cloudflare Pagesがサーバーサイドロジックを実行できるのか、それとも完全に静的サイトまたはSPA（シングルページアプリケーション）に限定されるのかという質問が寄せられています。
3.  **Vercel社員からの代替提案:** Vercelの社員が、Vercelの利用状況を最適化するための支援を申し出ています。移行ではなく、現在のサービス内で問題を解決する提案です。
4.  **Cloudflareに対する注意喚起:** Cloudflareが、最初は寛大な利用量を謳いながら、実際には隠れた制限があり、企業向けの有料プランへのアップグレードを迫る可能性があるという懸念が示されています。
5.  **Cloudflare PagesのSSRに関する追加情報:** Cloudflare PagesでNext.jsを使ってサーバーサイドレンダリング（SSR）を実装する方法へのリンクが提供されています。
6.  **ブログ記事の提案:** 投稿者が、Cloudflare Workersでの環境構築について、ブログ記事を書くことを提案されています。

