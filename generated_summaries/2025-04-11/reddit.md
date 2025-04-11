
# When DevOps Goes Wrong: My Epic Fail Story

**Upvotes**: 337



[View on Reddit](https://www.reddit.com/r/devops/comments/1jvzjsu/when_devops_goes_wrong_my_epic_fail_story/)

## 1. ポストの内容の説明

このRedditの投稿は、著者がDevOpsの世界に足を踏み入れた際の「失敗談」として、一風変わったエピソードを共有しています。

著者は、あるプロジェクトのために新しい環境を構築することになり、DevOpsの初心者だったため、とりあえずで環境を構築し、後でより良く作り直そうと考えていました。しかし、そこで大きな間違いを犯します。データベースやサービスアカウントに、飼い猫である「ミスター・ウィスカーズ」の名前を付けたのです。

数週間後、上司は「問題ないから」という理由で、その環境をそのまま本番環境として使用することを決定します。

その後、著者は会社を退職し、2年後に再び同じ会社からオファーを受けます。すると、以前に構築した環境は、依然として「ミスター・ウィスカーズ」の名前だらけで、新しい従業員からは「伝説のミスター・ウィスカーズ」として認識される始末だったという、コミカルな状況を描いています。

つまり、このポストは、DevOpsにおける安易なネーミングの失敗談であり、それが長期にわたって残り、後々まで語り継がれることになったという、ある種の「レガシー」をユーモラスに表現したものです。

## 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **162 upvotes: I'm still waiting for the fail story. All I see here is an epic win:**
    *   このコメントは、著者の「失敗談」という表現とは裏腹に、結果としてユニークで記憶に残る環境を作り上げたことを「エピックな勝利」と皮肉を込めて評価しています。DevOpsの世界で、予期せぬ形でレガシーが形成されることへの共感を表現していると言えるでしょう。

*   **82 upvotes: About 20 years ago, I was a System Administrator for a small-to-medium enterprise...**
    *   このコメントは、同様の経験を持つ別のユーザーの体験談です。Mortal Kombatのキャラクターの名前をサーバーに付けたというエピソードを紹介しており、システム管理者がシステムに個人的なタッチを加えるという、あるある的な側面を垣間見ることができます。

*   **34 upvotes: There are a bunch of Gen X and Elder Millenial DevOps and Sysadmins who have legacy environments full of Simpsons jokes...**
    *   このコメントは、特定の世代のDevOps/Sysadminが、The Simpsonsのようなポップカルチャーのジョークをレガシー環境に残す傾向があることを指摘しています。これは、システム管理者が自身の個性をシステムに反映させる、ある種の共通認識を示唆しています。

*   **21 upvotes: Naming services and service components after movies, characters or pets is fairly common in my experience...**
    *   このコメントは、サービスやコンポーネントに映画やキャラクター、ペットの名前を付けることが、経験上よくあることだと述べています。そして、そのようなネーミングが、大規模な組織で、何の機能を表しているのか分かりにくい名前として残ってしまうことの煩わしさを指摘しています。


---

# Cutting 55% off our $80K/m cloud monitoring cost at my company.

**Upvotes**: 126



[View on Reddit](https://www.reddit.com/r/devops/comments/1jvnts3/cutting_55_off_our_80km_cloud_monitoring_cost_at/)

1.  **このポストの内容の説明**

    このRedditの投稿は、ある企業がKubernetes（K8s）環境におけるモニタリングコストを削減しようとしている経験について書かれています。企業は以前から高額なモニタリングコスト（月額8万ドル）に悩んでおり、データ階層化によって35～40%の削減に成功しました。

    投稿者は、eBPF（extended Berkeley Packet Filter）ソリューションのパイロット運用を開始し、良い結果を得ています。その後、Groundcover（GC）という企業のソリューションについて検討し、彼らとの技術的な議論を通じて、そのソリューションの可能性について評価しています。

    GCの提案には以下の4つの主要な特徴が含まれています。

    *   **Bring Your Own Cloud (BYOC):** 独自のK8s環境内にGCのスタックをインストールし、独自のオブジェクトストレージを利用する。
    *   **Unified Platform (MELT + RUM, Hybrid eBPF/OTEL):** RUM（Real User Monitoring）からインフラストラクチャまでをカバーする統合プラットフォーム。eBPFとOTEL (OpenTelemetry)のトレースを組み合わせ、OTELデータのエンリッチメントも可能にする。
    *   **Scalability claims:** VictoriaMetrics (VM) や ClickHouse を使用した、大規模環境向けのアーキテクチャ。自動スケーリングによるコストと可用性の管理。
    *   **Reduced Vendor Lock-in:** BYOCであり、オープンコンポーネントを使用するため、ベンダーロックインが低い。

    投稿者は、これらの提案に魅力を感じつつも、新しい運用上の複雑さや、問題のすり替えになるのではないかという懸念も抱いています。特に、以下の点について疑問を持っています。

    *   BYOCモデルにおける運用上のオーバーヘッド
    *   eBPFとOTELの統合の成熟度
    *   バックエンドコンポーネント（VM/ClickHouse）のスケーリングとリソース消費
    *   ベンダーロックインからの脱却の容易さ

    最後に、投稿者は、コミュニティに対して、GCまたは類似のBYOC eBPFモデルを大規模に運用している人の経験、eBPFとOTELの統合の実際的な問題、バックエンドコンポーネントのスケーリングに関する問題、そして「gotchas」（落とし穴）について、情報提供を求めています。

2.  **このポストに対するコメントのうち、特に興味深いもの**

    *   **「96 upvotes: Good luck, OP, but I gotta say, you sound like someone who would instantly give me a headache if I had to sit in a meeting with you.」**

        このコメントは、投稿者の分析的で詳細な説明が、まるで会議で議論をリードするような人物であると示唆しており、良い意味でも悪い意味でも、その詳細さに言及しています。

    *   **「48 upvotes: This post sounds like a GC sales pitch」**

        このコメントは、投稿の詳細な説明がGCの販売促進のように聞こえるという批判的な意見を述べています。投稿の肯定的な側面への言及が多いため、このような印象を与えた可能性があります。


---

# [Rant] Fuck Leetcode interviews

**Upvotes**: 655



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jvzi6h/rant_fuck_leetcode_interviews/)

## 1. ポストの内容の説明

このRedditのポストは、ソフトウェアエンジニアリングの求人面接、特にLeetCodeスタイルのコーディング問題に対する不満を表明しています。投稿者は、10年以上の経験を持ち、様々な企業で「シニア」の肩書きも持つベテランエンジニアです。しかし、LeetCodeの問題を時間制限のある面接環境で解くことに苦労しています。

投稿者の主な主張は以下の通りです。

*   **LeetCodeの問題は、実際の仕事内容とはかけ離れている:** 実際の仕事では、同僚との議論、オンラインリソースの利用、そして数学的な問題よりも、システムアーキテクチャやコミュニケーション能力が重要になる。
*   **LeetCodeは不公平な判断基準:** 長年の経験と実績を持つエンジニアであっても、LeetCodeの問題が解けないという理由で、評価を下げられる可能性がある。
*   **面接の状況は非現実的:** 実際の仕事では、時間制限はなく、同僚との協調やリソースの利用が可能である。面接では、そのような現実的な条件が考慮されない。
*   **投稿者の動機:** 引越しのため転職活動をしているが、LeetCodeの面接は非常にストレスであり、不快感を覚えている。

要するに、投稿者は、LeetCodeがエンジニアの能力を適切に評価するものではなく、採用プロセスの大きな欠点だと考えています。

## 2. 特に興味深いコメント

このポストに対するコメントは、多くのユーザーが同様の経験や考えを持っていることを示しており、共感を呼んでいます。以下に、特に興味深いコメントをいくつか挙げます。

*   **共感の声 (227 upvotes):** 多くの人が、LeetCodeのような面接方法に対する不満を共有しています。これらの面接が、実際の能力を測るものではなく、運や特定の知識に依存すると考えていることが分かります。
*   **経験談 (133 upvotes):** あるコンサルタントが、12年間の経験と実績が評価され、採用の話まで進んでいたにも関わらず、LeetCodeの面接に失敗したために採用を断られたというエピソードが語られています。これは、LeetCodeが実際の能力よりも、特定のスキルを重視する傾向があることを示唆しています。
*   **システムアーキテクチャへの言及 (62 upvotes):** LeetCodeが、Web開発における重要なスキルであるシステムアーキテクチャの知識を評価できない点を指摘しています。スケーラビリティ、適切なツールの選択、マイクロサービスの設計など、実際の開発現場で不可欠な能力が、LeetCodeの問題では測れないと主張しています。
*   **奇妙な問題の例 (29 upvotes):** フロントエンドエンジニアの面接で、技術的な問題を全てクリアしたにも関わらず、パズルや論理的な思考力を問う問題（例えば、卵の重さや嘘つきの謎など）が原因で不採用となった例を挙げています。これは、LeetCodeの問題だけでなく、採用プロセス全体が、実際の仕事に必要ないスキルを評価する方向に偏っている可能性があることを示唆しています。

これらのコメントは、LeetCodeに対する批判が単なる個人の意見ではなく、多くのエンジニアが共有する問題意識であることを裏付けています。また、採用プロセスの改善や、より現実的な評価方法の必要性を示唆しています。


---

# The "grind mindset" is a disease.

**Upvotes**: 749

![Image](https://i.redd.it/1gmhacs4lyte1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1jvs29v/the_grind_mindset_is_a_disease/)

## 1. ポストの内容の説明

このRedditのポストのタイトルは「The "grind mindset" is a disease. (「根性思考」は病気だ)」です。これは、過度な労働や成果主義を重視する「grind mindset（根性思考）」に対する批判的な意見を表しています。ポスト全体を通して、この「根性思考」が引き起こす問題点、特にアメリカの労働文化における問題点を指摘しています。

つまり、このポストは、長時間労働を肯定し、私生活を犠牲にしてでも成果を求めるような考え方に対して、警鐘を鳴らしていると解釈できます。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **314 upvotes: I’d get hired and ping my boss daily at 3 AM with the smallest bug fix, tell him to get out of bed and check (採用されたら、毎朝3時に小さなバグ修正について上司にpingを送り、起きて確認しろと言うだろう)**： これは、過剰な労働を強いるような「grind mindset」を皮肉るコメントです。上司の睡眠時間を奪うような行為を、批判的に表現しています。
*   **117 upvotes: If they want the top 1/1000th they better be paying top 1/1000th pay as well (もし上位1/1000の人材が欲しいなら、上位1/1000の給料を払うべきだ)**： これは、高い成果を求めるのであれば、それに見合うだけの対価を支払うべきだという意見です。不当な低賃金で、高いパフォーマンスを求めることへの批判を示唆しています。
*   **101 upvotes: Also expect your life expectancy to be shorter than average in the requirement. (また、その要求では、平均よりも短い余命を覚悟しておけ)**： これは、過度な労働は健康を害し、寿命を縮める可能性があるという、非常に直接的な批判です。過度な労働がもたらすネガティブな影響を端的に表しています。
*   **171 upvotes: Pay $18.23/ hr (時給18.23ドル)**： これは、低賃金で高い労働力を求めている状況を批判していると解釈できます。過酷な労働条件と低い給料の組み合わせに対する不満を表しています。
*   **423 upvotes: Just a summary of what’s wrong with American work culture. An economy driven by sociopaths. (これはアメリカの労働文化の何が間違っているかをまとめたものだ。サイコパスによって動かされている経済だ)**： このコメントは、より広い視点から「grind mindset」を批判しています。アメリカの労働文化が、共感性に欠ける人々によって支配され、過酷な労働環境を生み出していると指摘しています。

これらのコメントは、いずれも「grind mindset」がもたらす問題点、例えば過剰な労働、不当な対価、健康への悪影響、そして社会的な問題などを浮き彫りにしています。


---

# [Rant] Take home tests and live coding exercises should be illegal unless you're paid for your time

**Upvotes**: 39



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jwaf6y/rant_take_home_tests_and_live_coding_exercises/)

## 1. ポストの内容の説明

この Reddit のポストは、ソフトウェア開発業界における採用プロセス、特に「持ち帰りテスト (take-home tests)」と「ライブコーディング」に対する不満を表明しています。

**主な主張:**

*   **無給労働への反対:** ポスト主は、採用前に無給で仕事をするよう求められることに強く反対しています。 20 年の経験と学位を持っていても、採用面接でコーディングを強いられること、特に週末の貴重な時間を費やすことに不満を感じています。
*   **採用プロセスの毒性:** 採用プロセスがますます「毒性」を帯びており、この業界からの転向も検討していると述べています。
*   **持ち帰りテストとライブコーディングへの批判:** ポスト主は、持ち帰りテストやライブコーディングが、給料をもらう前の無給労働であるとしています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **共感の声と不採用への落胆:** 多くのユーザーが、テストを通過しても最終的に採用されない経験に共感しています。
    *   「全てのテストに合格したにも関わらず、採用が見送られるのはつらい」
*   **持ち帰りテストへの賛否両論:** 持ち帰りテストに対する意見は分かれています。
    *   「持ち帰りテストは自分のペースでできるので、ライブコーディングよりはましだ」
    *   「持ち帰りテストは、時間がかかるため、特に家族持ちなど、他の責任を抱える人にとっては負担になる」
*   **ライブコーディングの代替案の提案:** あるユーザーは、ライブコーディングの代替として、事前にコードを渡して質問する、または、エラーのあるコードを修正させるなどの手法を提案しています。
    *   これらの方法は、経験や知識を測るのに役立ち、プレッシャーによるパフォーマンスの低下を避けることができるとしています。
    *   また、過去の職務経験について質問し、技術的な問題や解決策について議論することも、候補者の能力を評価する良い方法だと提案しています。
*   **業界の類似性:** 他の業界（演劇など）でも、同様に無給労働が発生するという意見もあり、階級格差を助長する可能性も指摘されています。


---

# Next.js 15.3: Turbopack for builds, Rspack support

**Upvotes**: 56



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1jvgn9m/nextjs_153_turbopack_for_builds_rspack_support/)

## ポストの内容の説明

このRedditのポストは、Next.jsのバージョン15.3のリリースについて発表しています。具体的には、以下の2つの主要な機能強化に焦点を当てています。

*   **Turbopack for builds:** Turbopackは、Next.jsのビルドプロセスを高速化するためのツールです。これにより、開発者はより速くアプリケーションをビルドし、より短い時間で変更を確認できるようになります。
*   **Rspack support:** Rspackは、Webpackに代わるビルドツールです。Webpackよりも高速にビルドを行うことができ、Next.jsのパフォーマンス向上に貢献することが期待されています。

## コメントの中で興味深いもの

このポストに対するコメントは、主にRspackのサポートに注目しています。特に興味深いコメントをいくつか挙げます。

*   **「Rspack support is huge. The whole toolchain is full of incredible stuff, really excited to see how it plays into my flow. Great stuff.」（16 upvotes）**：Rspackサポートが非常に重要であると評価しています。Next.jsのツールチェーン全体が素晴らしい機能で満たされており、開発ワークフローへの影響に期待を示しています。
*   **「Rspack support is extremely exciting. App router performance is not good yet, apparently, but this will be huge for folks who can’t move to turbopack.」（9 upvotes）**：Rspackのサポートに興奮しており、App routerのパフォーマンスがまだ改善の余地があることを示唆しつつ、Turbopackに移行できない人々にとってRspackが大きな助けになると指摘しています。
*   **「Sooo does Rspack have potential to replace Turbopack?」（1 upvotes）**：RspackがTurbopackを置き換える可能性について疑問を呈しています。

