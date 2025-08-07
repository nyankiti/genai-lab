
# 'Getting into DevOps'

**Upvotes**: 962



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

## ポストの内容

このRedditのポストは、DevOpsの世界への参入を目指す人々のための情報源としてまとめられています。主な内容は以下の通りです。

1.  **DevOpsの定義:** DevOpsを「開発チームと運用チームがサイロ化されず、アプリケーションのライフサイクル全体（開発、テスト、デプロイ、運用）で協力し、歴史的に手作業で時間がかかっていたプロセスを自動化する」働き方であると説明しています。
2.  **読むべき書籍:** DevOpsの文化や実践について学ぶための書籍のリストが提供されています。具体的には、以下の書籍が挙げられています。
    *   The Phoenix Project
    *   The DevOps Handbook
    *   Google's Site Reliability Engineering
    *   The Site Reliability Workbook
    *   The Unicorn Project
    *   DevOps for Dummies
3.  **学習すべきこと:** DevOpsの世界で必要とされるスキルや知識について解説したリソースが紹介されています。
    *   Emily Wood's essay (インフラをコードとして扱うことの重要性)
    *   2019 DevOps Roadmap (DevOpsのスキルセットのロードマップ)
    *   /u/mdaffinによるコメント (DevOpsは問題解決の考え方であること)
    *   /u/jpswadeによるコメント (DevOpsと関連用語)
    *   Roadmap.sh (DevOpsのステップバイステップガイド)

    また、DevOpsは変化し続けているため、特定のツールやスキルセットに固執するのではなく、柔軟に対応することが重要であると注意喚起しています。
4.  **補足:** ポストは、DevOps初心者のための参考資料として、トピックから逸脱しないように注意喚起しています。

## 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

1.  **Kubernetesの紹介コース:** Kubernetesのアーキテクチャを学ぶための1時間の無料紹介コースへのリンクが提供されています。Kubernetesクラスタを構築し、各コンポーネントを無効化してテストすることで、実践的な理解を深めることができると説明しています。
2.  **実践重視の意見:** DevOpsへの参入は、ビデオコースよりも実践とGoogle検索を通じて行うべきであるという意見が述べられています。1つの実践的なタスクから得られる経験は、ビデオコース全体よりも価値があるとして、**100daysofdevops**への取り組みを推奨しています。
3.  **DevOpsの3つの主要原則:** DevOpsの3つの主要原則（自動化、監視、統合）を提示し、それぞれについて具体的なツールや実践方法を提案しています。
    *   **自動化:** Terraform、Ansibleなどのツールを使ったシステムのプロビジョニングの自動化を推奨しています。
    *   **監視:** Netdataなどのツールを利用した包括的な監視システムの構築を推奨し、エントリーポイントの監視の重要性を強調しています。
    *   **統合:** クラウドプロバイダーのAPIの習得、監視ソリューションの理解、およびシステムを接続するコードの作成の重要性を強調しています。
4.  **Kubernetes関連の動画:** Kubernetesのツール（Kustomize、Helm）に関する動画へのリンクが提供されています。
5.  **Fakespotによるレビュー分析:**  "The Phoenix Project"のレビューの信憑性を分析したFakespotのレポートへのリンクが提供されています。


---

# Every startup wants "DevOps", until they realize what it actually takes

**Upvotes**: 673



[View on Reddit](https://www.reddit.com/r/devops/comments/1mj39oo/every_startup_wants_devops_until_they_realize/)

## 1. ポストの内容の説明

このポストは、スタートアップ企業におけるDevOpsに対する誤解と、その結果生じる問題点について警鐘を鳴らしています。

**主な主張:**

*   多くのスタートアップは、CI/CD、Infrastructure as Code (IaC)、マルチ環境設定、監視、ロールバック、ゼロダウンタイムデプロイメントなど、高度なDevOpsの機能を求めている。
*   しかし、これらの機能を、収益が安定する前に、単独のエンジニアや経験の浅いエンジニアに「副次的なタスク」として押し付けている。
*   インフラストラクチャの技術的負債（Infra debt）は誰も顧みられず、適切なツール導入のための予算も確保されない。
*   機能追加ばかりが優先され、インフラストラクチャの技術的負債の解消は後回しになる。
*   本番環境で問題が発生した場合、DevOpsチームのせいになるという風潮がある。
*   DevOpsは単なるチェックリストではなく、文化、ワークフロー、チームの成熟度に影響する長期的な投資である。
*   DevOpsを真剣に受け止めなければ、将来的に問題（例えば、深夜の緊急アラート）に悩まされることになる。

**根本的な問題:**

*   DevOpsに対する認識の甘さ: DevOpsを表面的な機能の実装と捉え、その本質である文化やチームのあり方に対する意識が低い。
*   予算配分の偏り: DevOpsへの投資よりも、より多くの機能を迅速に開発することに重点が置かれる。
*   責任の所在の不明確さ: インフラストラクチャの技術的負債を誰が負うのか、明確な責任者がいない。

## 2. 特に興味深いコメント

このポストに対するコメントは、いくつかの視点から興味深い内容を含んでいます。

*   **「Preach! They think DevOps is like plugging CI/CD YAML and calling it a day.（その通り！DevOpsはCI/CDのYAMLを繋げれば終わりと思っているんだ）」** DevOpsの本質的な理解の欠如に対する同意を示しています。DevOpsを単なるツールの導入と捉える誤解を指摘し、インフラを「第一級の製品」として扱い、明確な責任体制、ロードマップ、予算を設けることの重要性を強調しています。技術的負債が積み重なると、最終的には技術者とチームのバーンアウトを招くと警告しています。

*   **「Manager here, AI can do that in those "clouds" and can be done using shipping containers with helm or something. So get rekt!（私はマネージャーですが、AIがクラウドでそれできますし、Helmを使ったコンテナでもできます。さあ、お前ら（DevOpsエンジニア）はもう終わりだ！）」** このコメントは皮肉を込めて、DevOpsの重要性を理解していないマネージャーの考え方を風刺しています。高度な技術（AI、コンテナ、Helmなど）を利用すれば、DevOpsは簡単にできるという誤解を示唆しています。

*   **「Startups are usually lean and product-focused, where do you see these startups focusing on solid and scalable infra?（スタートアップは通常、リーンで製品にフォーカスしていますが、堅牢でスケーラブルなインフラに焦点を当てているところを見たことがありますか？）」** スタートアップの現実的な状況を指摘しています。多くのスタートアップは、リソースが限られており、製品開発に重点を置くため、インフラストラクチャへの投資は後回しになりがちであるという点を述べています。

*   **「The problem is basically pure budgeting.（問題は、基本的に予算の問題です。）」** DevOpsに関する課題は、予算配分に起因するという見解を示しています。スタートアップがデータベース管理者やネットワークエンジニアを雇わず、開発者にこれらの役割を兼務させる理由を説明しています。つまり、収益に直結しない専門的な職務よりも、コードのデプロイを「何とか」できる程度のスキルを持つ人材を優先するという現実を示唆しています。

*   **「I mean it’s a right of passage, startup everything is chaos and then it’s series B+ when it matters. Right before IPO they’re all scrambling for SOX SOC2.（まあ、通過儀礼のようなものですよ。スタートアップはすべてがカオスで、シリーズB+になって初めて重要になってきます。IPO直前には、みんなSOX SOC2（内部統制）で右往左往するんです。）」** スタートアップの成長段階におけるインフラへの取り組みの変化を表現しています。初期は混沌としていても、シリーズB以降やIPOに向けて、徐々にインフラへの投資や整備が行われるようになるという、ある種の「あるある」を述べています。


---

# Japan: Apple Must Lift Browser Engine Ban by December

**Upvotes**: 489



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mj3xid/japan_apple_must_lift_browser_engine_ban_by/)

## ポストの内容の説明

このRedditのポストは、日本がAppleに対し、12月までにブラウザエンジンの制限を解除するよう要求したというニュースを伝えています。具体的には、AppleがiOS上で他のブラウザエンジンの使用を制限している状況を、日本が是正を求めているという内容です。これは、ユーザーがより多様なブラウザを選択できるようにするため、または、競争を促進するための措置であると考えられます。

## 特に興味深いコメント

このポストに対するコメントで、特に興味深いものは以下の通りです。

*   **「141 upvotes: good! the more countries demand this, the harder it'll be for them to justify keeping things locked up elsewhere and the easier it'll be for browser makers to justify actually taking advantage of this」:** 複数の国が同様の要求をすることで、Appleが他の地域でも制限を続けることの正当性を失い、ブラウザ開発者が新しい技術を活用しやすくなる、という意見です。これは、グローバルな視点から見た規制解除の重要性を指摘しています。
*   **「101 upvotes: hahaha. falling US economic power will lead to (fair) demands like this one as countries no longer have much to lose. especially if Japan wants to create a new barganing chip to throw on trump tariff table.」:** 米国の経済力が相対的に低下することで、各国が以前より強気な要求（例えば今回のブラウザエンジンの制限解除）をしやすくなる、という分析です。また、日本がトランプ政権との貿易交渉において、この件を交渉材料として利用する可能性を示唆しています。これは、地政学的な視点から今回の要求を捉えています。
*   **「38 upvotes: Honestly, this would be fantastic because it would mean a legit adblocker could be installed.」:** 制限解除によって、より強力な広告ブロッカーが利用可能になることへの期待を表明しています。これは、ユーザーの視点から見た、具体的なメリットに焦点を当てています。
*   **「26 upvotes: Good on Japan. Hopefully app stores are the next step.」:** 日本の要求を支持し、アプリストアの規制緩和にも期待を示しています。
*   **「7 upvotes: I'm excited for firefox」:** ブラウザエンジンの選択肢が増えることに対する、特定のブラウザ（Firefox）への期待を示しています。


---

# Stress eating me alive at new dev job

**Upvotes**: 197



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mj3682/stress_eating_me_alive_at_new_dev_job/)

## 1. ポストの内容の説明

Redditのこのポストは、新しい開発職に就いたユーザーの経験について語っています。

*   **背景:** ユーザーは1.5年の経験を持つ開発者で、新しい会社に転職しました。
*   **問題点:**
    *   入社早々、非常に高いペースで仕事が振られ、圧倒されている。
    *   最初の2時間で、APIとフロントエンドの開発を3週間で完成させるというタスクを与えられた。
    *   オンボーディングがなく、製品や社内システムに関する十分な情報提供がない。
    *   追加のサポートチケットを割り当てられ、仕事量が増加している。
    *   仕事のプレッシャーにより、仕事以外の時間にも影響が出ている。
    *   「知識がある」という前提で話が進むことに不満を感じている。
*   **全体的な感情:** 仕事のペースと要求されるレベルに圧倒され、まるで溺れているような気分だと述べている。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、いくつか興味深いものがあります。

*   **「助けを求め、それが得られないなら、他の場所を探し始める」:** 困難な状況で助けが得られない場合、その職場にとどまることが最善の選択肢ではない可能性があることを示唆しています。

*   **「締め切りは現実的ではないことが多い」:** シニア開発者になるために学ぶべきこととして、締め切りは交渉可能であり、変更される可能性があることを指摘しています。

*   **「できる範囲で仕事をし、期待を管理する」:** 無理のない範囲で働き、必要に応じてタスクの完了時間を交渉し、会社側のリソース不足を指摘する。また、契約された労働時間のみ働くというアドバイスも重要です。

*   **「試されている可能性がある」:** マネージャーが、従業員の限界を探り、過剰な労働をさせるために意図的に高い負荷を与えている可能性があると指摘しています。

*   **「問題はあなたではなく、会社側にある」:** 状況がユーザー自身の能力不足ではなく、会社側の問題である可能性を示唆しています。


---

# Switching from Next.js to Vite + Hono made more sense for our use case

**Upvotes**: 51

![Image](https://i.redd.it/193zh4qeyghf1.png)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1mjhnja/switching_from_nextjs_to_vite_hono_made_more/)

## ポストの内容の説明

このポストは、開発者が自身のプロジェクトであるMCPJam inspectorの開発において、技術スタックの選択を誤った経験を共有しています。MCPJam inspectorは、MCPサーバーをテスト・デバッグするためのオープンソースの開発ツールです。

当初、開発者はVite + ExpressからNext.jsに技術スタックを移行しました。Next.jsのルーティングシステムやバックエンド機能が好みだったためです。しかし、これは結果的に誤った選択でした。

MCPJam inspectorは、ユーザーが `npx` コマンドで起動することを想定していましたが、Next.jsの採用により、npmパッケージサイズが280MBにまで膨れ上がってしまいました。これは、ローカルで実行されるWebアプリとしては大きすぎます。そこで、開発者はVite + Honoに再び切り替え、パッケージサイズを9MBまで削減しました。

このポストは、Next.jsを批判するものではなく、技術スタックの選択がいかに重要であるかを強調しています。特に、プロジェクトの具体的なユースケース（今回は`npx` での実行）を考慮せずに技術を選択すると、後で大きな問題に繋がる可能性があると注意を促しています。

最後に、Vite + HonoとNext.jsに関するコミュニティの意見を求めています。

## 興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「No offense but the use case of an npx script running next is pretty niche. I’m not sure why you picked nextjs for a local application.」（36 upvotes）**

    *   このコメントは、Next.jsをローカルアプリケーション、特に `npx` スクリプトとして実行するようなニッチなケースで採用したことに対する疑問を呈しています。Next.jsは強力なフレームワークですが、ローカルアプリケーションにはオーバーキルである可能性を指摘しています。

*   **「Are you using Hono for SSR? Or you are just replacing actions/routes of Next for Hono and running a SPA?」（3 upvotes）**

    *   このコメントは、Honoの使用方法について質問しています。Honoがサーバーサイドレンダリング（SSR）に使用されているのか、それともNext.jsの代替として単にルーティングやアクションを実装し、SPA（Single Page Application）として実行しているのかを尋ねています。

*   **「I recently started building with Next.js + Hono.js (separate node backend) and really like it so far. Only problem is, it is not so easy to deploy and can't do it for free anywhere, so probably need to get a Hetzner instance. edit: I mean with node adapter」（1 upvotes）**

    *   このコメントは、Next.jsとHono.jsを組み合わせた経験を共有しています。現状では、デプロイが容易ではなく、無料の環境では実現できないため、専用のサーバーインスタンスが必要になる可能性があると指摘しています。

*   **「I use rsbuild for locally run apps like this these days but I’ve never tried Vite. Has anyone here used both enough to get an impression how they compare?」（1 upvotes）**

    *   このコメントは、rsbuildというツールを使ってローカルで実行されるアプリを開発している経験を共有し、Viteとの比較について質問しています。rsbuildとViteの比較に興味がある開発者がいることが分かります。

*   **「Pardon my ignorance. If you are going to have an independent api and don’t need SSR or server components, wouldn’t it be just as easy to export as static?」（1 upvotes）**

    *   このコメントは、APIが独立しており、SSRやサーバーコンポーネントを必要としない場合、静的サイトとしてエクスポートする方が簡単ではないかと提案しています。プロジェクトの要件に応じて、よりシンプルなアプローチも検討できることを示唆しています。

