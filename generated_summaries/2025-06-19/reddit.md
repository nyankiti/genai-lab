
# Hackathon challenge: Monitor EKS with literally just bash (no joke, it worked)

**Upvotes**: 178



[View on Reddit](https://www.reddit.com/r/devops/comments/1ledzu9/hackathon_challenge_monitor_eks_with_literally/)

## 1. ポストの内容の説明

このRedditの投稿は、あるユーザーがハッカソンで「複雑さをシンプルにする」というテーマに沿って、BashスクリプトのみでAmazon EKS (Elastic Kubernetes Service)のノード監視システムを構築したというものです。

**主な内容:**

*   **課題:** Prometheus/Grafanaのような既存の監視スタックを、Bashスクリプトだけで置き換える。
*   **制約:** 高度な可観測性ツール、ベンダー製品は使用禁止。Linuxボックスに標準搭載されているものだけを使用。
*   **結果:**
    *   `/proc`から情報を収集するBashループを実行するDaemonSet。
    *   gnuplotを用いてグラフを作成（意外と高性能）。
    *   合計12MBのサイズで、リソース消費量が少ない。
    *   ポートフォワード可能なシンプルなWebダッシュボード。
*   **評価:** 審査員からは「素晴らしい」と「呪われている」という二極の評価を受け、結果的に優勝。
*   **考察:** 可観測性について、本当に複雑なシステムが必要なのか疑問を抱き始めた。例えば、ディスク容量がいっぱいになることを知るのに、分散トレーシングプラットフォームは本当に必要か？
*   **補足:** 詳細な実装は、投稿されたMediumの記事で公開されている。
*   **結論:** ハッカソンを通して、既存の技術スタックを再考するきっかけになった。

## 2. 興味深いコメント

この投稿に対するコメントの中で、特に興味深いものは以下の通りです。

*   **「haha congratulations it is definitely brilliant, but also it is definitely cursed :) no way this is less complex to deploy and maintain than the typical solutions out there! :P」**（58 upvotes）:
    *   投稿者の取り組みを「素晴らしい」と認めつつ、同時に「呪われている」と評しています。一般的な監視ソリューションよりも、デプロイとメンテナンスが簡単ではないだろうという意見です。Bashスクリプトでの実装は、ある種の斬新さと同時に、複雑さも孕んでいるという両側面を捉えています。

*   **「People tend to underestimate bash, I've been using bash and it's based derivatives for 25 years, I have yet to reach a limitation in this capability. I have also been in situations where I've had to create bash equivalent tools that were programmed in Python or Perl. It's really about as good as you can get until you need bytecode, even then there are some things that could be done...」**（18 upvotes）:
    *   Bashの能力に対する過小評価を指摘し、25年の経験からBashの限界を感じたことがないとしています。PythonやPerlで作成されたツールをBashで再実装した経験にも触れており、Bashの強力さと汎用性を強調しています。

*   **「> Now I'm wondering if I accidentally proved that we're all overthinking observability. Like maybe we don't need a distributed tracing platform to know if disk is full? I think this is true but also wrong. The biggest thing people aren't doing with observability is that next step: dig into the why. Using a big distributed tracing and observability platform to see that disks are getting full, cpu loads are too high, and response times are long -- that's just data. You need to use that data to build correlations and find difficult to diagnose but systemic issues (or even specific app or specific infra issues).」**（15 upvotes）:
    *   投稿者の疑問に共感しつつ、可観測性の本質について論じています。単にデータを収集するだけでなく、なぜ問題が発生しているのかを分析し、根本原因を突き止めることが重要であると指摘しています。大規模なプラットフォームは、データの相関関係を見つけ、複雑な問題を特定するのに役立つという意見です。

*   **「The people who make observability platform reached the same conclusion and monetized it. You built an MVP lol.」**（6 upvotes）:
    *   投稿者が構築したBash監視システムを、可観測性プラットフォームのMVP（Minimum Viable Product、実用最小限の製品）と表現しています。可観測性プラットフォームの開発者が同様の結論に至り、それをビジネスモデルにしているという視点です。


---

# AI is flooding codebases, and most teams aren’t reviewing it before deploy

**Upvotes**: 39



[View on Reddit](https://www.reddit.com/r/devops/comments/1lecppz/ai_is_flooding_codebases_and_most_teams_arent/)

## ポストの内容の説明

このRedditのポストは、AIがコードベースに浸透し、多くのチームがAI生成コードをデプロイ前にレビューしていないという現状について警鐘を鳴らすものです。

具体的には、以下の点が強調されています。

*   **調査結果の提示:** Cloudsmith社によるDevOps実務者307人への調査結果が引用されています。
    *   AIを利用する開発者の42%が、**少なくとも**コードの半分をAIが生成していると回答。
    *   AI生成コードをデプロイ前にレビューしているのは67%のみ。
    *   80%が、AI利用によりOSS（オープンソースソフトウェア）におけるマルウェアのリスクが増加すると回答。
*   **リスクの指摘:** AIが生成したコードがレビューされないままデプロイされることによる、セキュリティ上のリスクを指摘しています。特に、サプライチェーン攻撃や、依存関係の悪用リスクの増加を懸念しています。
*   **問題提起:** コード生成の速度向上はメリットがあるものの、セキュリティ対策が追いついていない現状を問題としています。
*   **提言:** アーティファクトの完全性、プロバイナンス（由来の確認）、自動化された信頼チェックなどの対策の必要性を訴えています。
*   **調査レポートへのリンク:** 詳細は、Cloudsmith社の調査レポートを参照するように促しています。

## 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「LGTM」:** 19 upvotes。これは「Looks Good To Me（私には問題ない）」の略で、コードレビューにおける承認のサインとして使われます。皮肉を込めて、AI生成コードをレビューせずにデプロイすることに対する懸念を表現していると考えられます。

*   **経験談:** 10 upvotes。AIが80%以上のコードを生成したプロジェクトで、そのコードを1行ずつ理解し、修正を加えたという経験が語られています。AI生成コードを適切にレビューし、理解することの重要性を示唆しています。また、AI生成コードをそのまま利用することに対する疑問を表明しています。

これらのコメントは、AIによるコード生成に対する様々な意見や懸念、そして実際の経験を表しており、このポストが提起する問題に対する多様な視点を示唆しています。


---

# Our company is going all in on AI

**Upvotes**: 268



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1lenbnl/our_company_is_going_all_in_on_ai/)

## 1. ポストの内容の説明

このRedditの投稿は、投稿者の会社がAIの導入を本格的に始めたことによる問題点と懸念について述べています。

*   **背景**: 会社はAIツールの導入により、スプリントの成果を2倍から3倍に増やすことを期待している。
*   **問題点**:
    *   UIとコードの品質が急速に低下している。
    *   AIによるコード生成または支援が多いため、修正を重ねる「モンキーパッチ」が増加。
    *   コードのスタイルやパターンに一貫性がなくなり、コードレビューで見過ごされる問題が増加。
    *   アーキテクチャの統一性が失われ、継ぎ接ぎだらけの印象。
*   **懸念**:
    *   チームは、スピードを優先するために、コードの品質について厳しくしないことに同意している。
    *   これにより、将来的に深刻な技術的負債と混乱が蓄積されるのではないかと懸念している。
*   **質問**: 同様の状況に直面している人や、どのように対処しているかを知りたいと考えている。

要するに、AI導入による生産性向上を目指す中で、コード品質の低下と技術的負債の増大という問題に直面し、将来への不安を感じているという内容です。

## 2. 特に興味深いコメント

この投稿に対するコメントは、同様の問題に直面している人々の声や、将来への懸念を共有しており、特に以下のコメントが興味深いと考えられます。

*   **「経済的な圧力」とAI導入の矛盾 (105 upvotes)**: 以前は人件費削減のために採用を抑制していた会社が、AIの活用を義務付け、使わない場合は管理者が注意するという状況。AI導入が、コスト削減のための一つの手段になっていることを示唆しています。
*   **「次世代AIが現在のAIの悪いコードを修正する」(142 upvotes)**: 経営陣は、現在のAIの欠点を、将来のAIで解決できると考えているのではないかという皮肉なコメント。AI技術への過度な期待と、技術的負債への無関心を示唆しています。
*   **「生産性/コストのために品質を犠牲にする」(31 upvotes)**: 会社が、生産性とコストを優先するために、品質と使いやすさを犠牲にしているという、普遍的な問題点を指摘しています。
*   **「AI開発者が主流になり、ベテランエンジニアの需要が高まる」(73 upvotes)**: 今後数年で、多くの企業が使い物にならないコードベースを持つようになり、ベテランエンジニアの需要が高まると予測するコメント。技術的負債の蓄積による将来的な影響を示唆しています。


---

# Don’t buy premium domain from GoDaddy

**Upvotes**: 56



[View on Reddit](https://www.reddit.com/r/webdev/comments/1leqwq7/dont_buy_premium_domain_from_godaddy/)

## ポストの内容の説明

このRedditのポストは、GoDaddyでプレミアムドメインを購入したユーザーの体験談です。

1.  **購入の経緯:** ポスト主は、GoDaddyのウェブサイトで「今すぐ購入」と表示された固定価格のプレミアムドメインを購入しました。GoDaddyでの登録済みのドメインであり、売り主の所有権やドメインの利用可能性に問題はないと判断しました。
2.  **問題発生:** しかし、購入後、ドメインを受け取ることができませんでした。売り主は販売に非協力的で、GoDaddyからの連絡にも応じなかったのです。
3.  **GoDaddyの対応:** ポスト主は、ドメインの譲渡を求めましたが、GoDaddyは3週間後に返金という対応をしました。GoDaddyの利用規約では、違反者に対してドメインの譲渡ができると明記されているにも関わらず、GoDaddyはそれを実行しませんでした。カスタマーサービスも問題点を認めましたが、別の部署が担当しており、対応できないと言われました。
4.  **不満:** ポスト主は、GoDaddyが利用規約に違反している売り主を保護し、役に立たないオークションシステムを助長していると非難しています。また、売り主にも直接手紙を送りましたが、結局ドメインは譲渡されませんでした。
5.  **結論:** ポスト主は、GoDaddyが「今すぐ購入」という表示をしながら、実際には購入後に問題が発生する可能性があると警告しています。GoDaddyでのドメイン購入は推奨できないとし、訴訟を起こさなければ対応しない可能性があると述べています。

## コメントのうち、特に興味深いもの

1.  **多くのアップボートを受けたコメント:**

    *   「Don't give your money to GoDaddy, ever, and if you already have domains registered there, move them.」（GoDaddyにお金を払うのはやめろ、そしてすでにドメインを登録しているなら、移転しろ。）このコメントは、GoDaddyを全面的に避けるべきだという強い意見を示しており、多くのユーザーの共感を呼んでいます。
    *   「Don't buy anything from GoDaddy」（GoDaddyからは何も買うな）プレミアムドメインだけでなく、GoDaddyの全てのサービスに対して否定的な意見を表明しており、同様に多くの支持を得ています。
2.  **GoDaddyのビジネスモデルを指摘するコメント:**

    *   「GoDaddy premium domains are just a platform to connect you with 3rd party sellers. Sounds like the seller is being difficult. You could also say "don't buy stuff on ebay" because the seller could be an ass for all you know.」（GoDaddyのプレミアムドメインは、単に第三者の売り手とあなたをつなぐプラットフォームにすぎない。売り手が難癖をつけているようだ。「eBayで物を買うな」と言うこともできるだろう。売り手がどんな人か分からないから。）このコメントは、GoDaddyが仲介業者であり、売り主の行動に責任を持たないビジネスモデルを指摘しています。
3.  **問題の矮小化を試みるコメント:**

    *   「As long as your money is refunded I would just move on.」（お金が返金されたなら、それで済ませるべきだ。）このコメントは、返金で問題は解決したと見ており、ポスト主の不満を理解していない可能性があります。


---

# JSON module scripts are now Baseline Newly available

**Upvotes**: 64



[View on Reddit](https://www.reddit.com/r/webdev/comments/1lem294/json_module_scripts_are_now_baseline_newly/)

## 1. ポストの内容の説明

このRedditのポストは、**JSONモジュールスクリプトが新たに利用可能になった**ことを発表しています。つまり、JSON (JavaScript Object Notation) 形式のデータを扱うためのモジュール（プログラムの部品）が、利用できるようになったという報告です。この発表は、JSON形式のデータを利用するJavaScript開発者にとって、重要な変化を意味します。

## 2. 特に興味深いコメント

コメントにあるように、**「CSS next please 😁」**という内容は、CSS（Cascading Style Sheets）に関する同様の進展を期待していることを表しています。このコメントは、JSONモジュールスクリプトの利用可能になったことへの興奮と、CSS関連の機能改善への期待を表現しており、開発者コミュニティの関心事を示唆している点で興味深いです。


---

# Junior devs: what's something you thought would be easy but turned out to be surprisingly complex?

**Upvotes**: 222



[View on Reddit](https://www.reddit.com/r/webdev/comments/1le5dx3/junior_devs_whats_something_you_thought_would_be/)

## 1. ポストの内容の説明

この Reddit のポストは、ジュニアレベルの開発者（Junior devs）を対象として、**「プログラミングにおいて、簡単だと思っていたけれど、実際には予想以上に複雑だったことは何ですか？」**という質問を投げかけています。投稿者は、ジュニア開発者が日々の業務の中で直面する、意外な複雑性について知りたいと考えています。

## 2. 特に興味深いコメント

このポストに対するコメントは、様々な観点からジュニア開発者が直面する複雑性を示唆しており、いくつか特に興味深いものがあります。

*   **「大きなIT企業では、ほとんどすべてが複雑」**というコメントは、大規模な組織特有の課題を浮き彫りにしています。複雑なツール、膨大な内部ドキュメント、そして古くなった情報や死んだリンクなど、ジュニア開発者が効率的に作業を進める上で障害となる要素について言及しています。このコメントは、コードベース自体よりも、開発プロセスを取り巻く環境の複雑さが、大きな問題となりうることを示唆しています。

*   **「時差」**というコメントは、一見単純に見える問題が、実際には非常に複雑になる可能性を示唆しています。時差は、システム全体に影響を与える可能性があり、時間に関する計算やデータの整合性など、様々な側面で考慮すべき点が出てきます。

*   **「認証/状態管理」**というコメントは、Webアプリケーション開発における普遍的な課題を指摘しています。認証と状態管理は、セキュリティ、ユーザーエクスペリエンス、データ管理など、多くの要素が絡み合い、実装が複雑になりがちな領域です。

*   **「セレクトボックス、日付選択、そしてそれ自体が小さなアプリケーションであるようなウィジェット」**というコメントは、UIコンポーネントの複雑さに焦点を当てています。これらのコンポーネントは、ユーザーインターフェース上は単純に見えても、裏側では様々な機能や振る舞いを実装する必要があり、意外なほど複雑になることがあります。

*   **「見積もりの難しさ」**というコメントは、隠れた実装の詳細が原因で、タスクの見積もりが難しくなることを指摘しています。これは、ジュニア開発者だけでなく、経験豊富な開発者にとっても共通の課題であり、現実の開発現場における見積もりの困難さを表しています。


---

# I hate shortcuts

**Upvotes**: 37



[View on Reddit](https://www.reddit.com/r/webdev/comments/1lebvdn/i_hate_shortcuts/)

## 1. ポストの内容の説明

このRedditの投稿は、MicrosoftのWeb版Excelにおけるショートカットキーの動作に対する不満を表明しています。 具体的には、ノルウェー語版Excelで`CMD+F`（Macの場合。Windowsでは`CTRL+F`に相当）を使用した場合に、検索機能ではなくテキストが太字になってしまうという問題について言及しています。

投稿者は、Webアプリケーションにショートカットキーを追加する理由、および`CMD+T`、`CMD+R`、`CMD+F`などのブラウザの標準的なショートカットキーを上書きする正当性について疑問を呈しています。問題の本質は、ショートカットキーが言語によって翻訳され、その結果、意図した機能と異なる動作をしてしまうことにあると考えています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、以下は特に興味深いものです。

*   **「I would assume that the Norwegian word for "bold" starts with F. 」（22 upvotes）**: このコメントは、`CMD+F`が太字になる原因を、ノルウェー語で「太字」を表す単語が「F」で始まるからではないかと推測しています。これは、Microsoftがショートカットキーを翻訳した結果、標準的な機能を上書きしてしまった可能性を示唆しています。
*   **「The problem are not shortcuts, it's Microsoft. For some reason \_someone\_ there thinks that shortcuts should be translated.」（41 upvotes）**: このコメントは、問題はショートカットキー自体ではなく、Microsoftがショートカットキーを翻訳するという決定にあると指摘しています。これは、投稿者の不満の核心を捉えており、多くのユーザーが共感していることを示しています。
*   **「It's a Microsoft problem and in German it's the exact same. Ideally shortcuts shouldn't be translated because mishaps like CTRL+F can and will happen」（12 upvotes）**: このコメントは、同様の問題がドイツ語版Excelでも発生していることを報告しています。また、ショートカットキーを翻訳しないことが望ましいという意見を述べており、多言語対応におけるショートカットキーの問題点を浮き彫りにしています。
*   **「It sounds like you don't hate shortcuts, since you want to use Ctrl-F to find, but Excel has assigned it to something else. If it had done this as per your expectations, it would still override Ctrl-F, but with a custom find implementation. What you really seem to hate is inconsistent shortcuts.」（6 upvotes）**: このコメントは、投稿者がショートカットキー自体を嫌っているのではなく、ショートカットキーの動作が一貫していないことに不満を感じていると指摘しています。


---

# Weekly Showoff Thread! Share what you've created with Next.js or for the community in this thread only!

**Upvotes**: 37



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1i91mp7/weekly_showoff_thread_share_what_youve_created/)

## 1. ポストの内容の説明

このポストは、Redditの「Weekly Showoff Thread!」というスレッドです。これは、Next.jsを使って何かを制作した人や、コミュニティのために何かを構築した人が、その成果を共有するための場です。

投稿者は、小さなサイドプロジェクト、大きなアプリケーション、その他のコミュニティ向けのものなど、あらゆるものをここで発表するように呼びかけています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **Drawwwtime (26 upvotes):** ウェブ向けのシンプルな描画アプリ。デスクトップと安価なグラフィックタブレットとの組み合わせで最高の体験が得られるとのこと。
*   **Open Source Shared Music Queue (15 upvotes):** パーティー向けのオープンソースの共有音楽キュー。酔った友人がMacBookに大量の悪い曲を追加するのを防ぐために作成された。GitHubのリンクも提供されています。
*   **Scrapestudio (12 upvotes):** Web開発者向けの、Webコンポーネントの抽出、カスタマイズ、再利用を可能にするChrome拡張機能とWebアプリ。ウェイティングリストへの参加を呼びかけています。
*   **Next Presidential Election Site (11 upvotes):** Next.js, Tailwind, TypeScriptを使って構築された、次回の米国大統領選挙に関する情報サイト。静的に生成され、ブラウザ内ですべてが完結する設計。
*   **Hypership.dev (37 upvotes):** 1-ClickでNext.jsアプリをデプロイできるプラットフォーム。ユーザー認証、ページビュー分析、イベントトラッキング、管理ダッシュボードなど、Reactアプリの構築、リリース、管理に必要なすべての機能を提供するとのこと。

