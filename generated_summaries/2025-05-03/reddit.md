
# Which DevOps repositories need contributions?

**Upvotes**: 55



[View on Reddit](https://www.reddit.com/r/devops/comments/1kd41pq/which_devops_repositories_need_contributions/)

## 1. ポストの内容の説明

このRedditのポストは、DevOpsプロジェクトへの貢献をしたいと考える人が、どのようなリポジトリに貢献できるか、また、貢献先を探すためのヒントを求めているものです。具体的には、投稿者は余暇を使ってDevOpsプロジェクトを手伝いたいと考えており、他のユーザーに対して、貢献するのに良いプロジェクトや、改善が必要なプロジェクトを尋ねています。投稿者は、ドキュメントの作成、ランタイムの改善、機能の追加など、様々な貢献の形に関心があるようです。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **「あなたの好きなものに貢献しましょう」**: このコメントは、貢献先を選ぶ上で、自分の興味や関心、そして普段から使用しているツールを基盤にすべきだと提案しています。ドキュメントの修正から、大規模なプロジェクトへの貢献まで、貢献の規模は問わないとしながらも、自身の経験や知識を活かせるプロジェクトを選ぶことが重要だと述べています。

*   **「ニッチなプロジェクトへの貢献」**: あるユーザーは、メインフレームジョブとモダンなクラウドスタックを統合するための、独自のオーケストレーションエンジンを開発しており、そのコードベースへの参加を呼びかけています。これは、ニッチな分野ではありますが、自分の問題意識から生まれたプロジェクトであり、興味を持つ人にとっては貢献の機会となり得ることを示しています。

*   **「自分の不満を解決するために貢献する」**: 他のユーザーは、Terraform、Azure DevOps、Ansibleなどのツールで経験した不満を解決するために、Azureモジュールに貢献した経験を共有しています。これは、自分が普段使用しているツールで感じている課題を解決するために、積極的に貢献するアプローチを提案しています。

*   **具体的なプロジェクトの提案**: OpenTofu、Atmosなど、貢献できる具体的なプロジェクトの名前が挙げられています。これは、貢献先を探している人にとって、すぐに役立つ情報源となります。


---

# Should we use Grafana open source in a medium company

**Upvotes**: 35



[View on Reddit](https://www.reddit.com/r/devops/comments/1kcz9e5/should_we_use_grafana_open_source_in_a_medium/)

## 1. ポストの内容の説明

このポストは、中規模企業でオブザーバビリティツールとしてNew Relicを利用している投稿者が、Grafana、Prometheus、OpenTelemetry (LGTMスタック) への移行を検討していることについて議論を呼びかけています。New Relicのコストが高騰していることが主な理由です。

**投稿者の状況:**

*   **規模:** 中規模企業 (20以上のサービス、毎月4TBのデータ、MongoDBを使用)。
*   **現状:** New Relicを利用し、ログ、メトリクス、トレース、MongoDBの監視を行っているが、費用が高くなっている。
*   **検討事項:** Grafana、Prometheus、OpenTelemetry (LGTMスタック) への移行を検討。
*   **課題:**
    *   Grafanaの設定に手間がかかる (特にMongoDB用のダッシュボードが少ない)。
    *   データとダッシュボードの増加に伴い、Grafanaが遅くなり、インフラのコストと複雑さが増加する可能性。
*   **質問:**
    *   中規模企業にとって、OSSへの移行は実現可能か？長期的なセットアップとメンテナンスコストは高いのか？
    *   Grafana OSSを大規模に運用している人はいるか？データ量が多くても問題なく動作するか？
    *   New RelicやDatadogのような、安価な有償プラットフォームも検討している。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **規模の定義に関するコメント:**
    *   「中規模」の定義が曖昧であり、投稿者の会社の規模は「80GB/月」というデータ量からすると、それほど大きくないのではないかと指摘しています。
    *   LGTMスタックを運用する場合、オブザーバビリティに専任のエンジニアが必要になる可能性があると示唆しています。
    *   New Relicのコストが年間15万ドルを超えるかどうかを質問し、コスト対効果を比較するよう提案しています。

*   **Grafana Cloudの提案:**
    *   Grafana Cloudの利用を検討することを提案。
    *   現在は小規模な組織でも、コスト効率が良い。
    *   最終的には自己ホストに移行できる柔軟性があり、ダッシュボードの移行も容易。
    *   Grafana Cloudのセールスチームに問い合わせて、価格を確認することを推奨しています。

*   **大規模環境でのGrafanaの経験:**
    *   以前の職場で大規模な企業（数百のダッシュボード、多数のユーザー）でGrafanaを使用していた経験を共有。
    *   セットアップにはコストがかかるが、他の代替手段よりも安価だった。
    *   速度に関する問題はなく、安定して動作していた。

*   **データ量の認識に関するコメント:**
    *   「80GB/月」のデータ量は「中規模」とは言えないという意見。
    *   データ量が増加すれば、サーバーの性能も向上させる必要があるのは当然。
    *   データの保持期間を適切に管理する (古いデータを長期間保持しない) ことが重要。

*   **他のモニタリングプラットフォームの提案:**
    *   Signozのような、より簡単なセットアップを売りにしているプロジェクトの利用を提案。ただし、安易に飛びつくべきではないと警告。
    *   Lokiの代替案について触れています。

*   **二層構造のモニタリングシステムの提案:**
    *   LGTMスタックで詳細なデータを収集し、重要なメトリクスや集計データをNew RelicやDatadogなどのプラットフォームに送信する二層構造のシステムを提案。
    *   この方法により、全社的な可視性と、運用担当者のための詳細なデータアクセスを両立できる。



---

# I built my own cloud-based collaborative code editor with Spring Boot

**Upvotes**: 66

![Image](https://i.redd.it/epbcpbtmjcye1.gif)

[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1kcxr9q/i_built_my_own_cloudbased_collaborative_code/)

## ポストの内容の説明

このRedditの投稿は、プログラマーがSpring Bootを使って開発した、クラウドベースの共同コードエディタ「CodeCafé」について紹介しています。

*   **概要:** CodeCaféは、VS CodeやReplitにインスパイアされたブラウザベースのコードエディタです。特徴として、ダウンロードやサインアップ、セットアップが不要で、リンクを開くだけで他のユーザーと共同でコードを記述できます。
*   **技術スタック:**
    *   **フロントエンド:** ReactとTypeScriptを使用。
    *   **バックエンド:** Spring Bootを使用し、WebSocketを介してリアルタイム編集を処理。RedisとカスタムのOperational Transformationシステム（サードパーティライブラリは不使用）を用いて変更を同期。
*   **開発の動機:** 著者は、地元のサマースクールがGoogle Docsを使ってコーディングを教えていることに気づき、実際のコードを記述・実行できる、より本格的なツールを求めてCodeCaféを開発しました。
*   **現在の機能:** まだファイルの保存やエクスポート機能はありませんが、現在開発中です。
*   **その他:** GitHubのリポジトリへのスターを呼びかけ、Webアプリへのリンクを提示しています。

## 興味深いコメント

投稿に対するコメントとして、以下の点が興味深いと考えられます。

*   **質問:** "So it only works with html css and js code right now?" (現時点では、HTML、CSS、JavaScriptのみに対応しているのか？) - これは、CodeCaféがサポートするプログラミング言語に関する具体的な質問であり、ユーザーがどのような用途でこのツールを利用できるのかを理解するために重要です。
*   **肯定的な反応:** "Amazing work" (素晴らしい) 、"That's awesome 🤯👑" (すごい！) - 開発者に対する賞賛の声は、プロジェクトへの興味と期待を示しています。
*   **開発者自身のアイデア:** "I'm planning to built shareing code editor for like pair programming And sharing code. Moreover collaborative platform" (自分もペアプログラミングやコード共有のためのコードエディタやコラボレーションプラットフォームを構築する予定だ) - 別の開発者が、同様のアイデアに関心を持っていることが示唆されています。
*   **インフラに関する質問:** "where to deploy the BE?" (バックエンドはどこにデプロイするのか？) - サーバーのデプロイ方法に関する質問は、技術的な詳細への関心を示しており、CodeCaféの運用に関する疑問を提起しています。


---

# Query multiple CSVs with SQL

**Upvotes**: 51

<video src="https://v.redd.it/t6eyr5jmw8ye1/DASH_1080.mp4?source=fallback" controls style="width: 100%; height: auto; max-height: 500px;"></video>

[View on Reddit](https://www.reddit.com/r/SQL/comments/1kcldzm/query_multiple_csvs_with_sql/)

## 1. ポストの内容の説明

このRedditのポストは、投稿者が開発した無料のSQLエディタ「soarSQL」のアップデートについて発表しています。

具体的には、以下の点が強調されています。

*   以前に投稿したSQLエディタについて、多くのユーザーからのフィードバックがあったことへの感謝。
*   主なアップデート内容：
    *   Windowsインストーラーの追加。
    *   複数のCSVファイルの同時クエリ（マルチCSVクエリ）。
    *   最大50個のタブで、複数のクエリとデータセットを同時に操作可能。
    *   クエリと接続の保存機能。
*   soarSQLに関する情報交換やアップデート情報の入手のために、Discordサーバーを開設したこと。
*   ユーザーからの要望を募っていること。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「Was waiting on windows. Tks」**: Windows版のリリースを待っていたユーザーからの感謝の言葉であり、Windows版に対する需要があったことがわかります。
*   **「does it have a size limit for CSV or is it whatever the machine's memory can handle?」**: CSVファイルのサイズ制限に関する質問です。これは、巨大なCSVファイルを扱うことを想定しているツールにとって重要な要素であり、ユーザーが関心を持っている点を示しています。
*   **「I use [https://colrows.com](https://colrows.com); its a web based and found it pretty powerful.」**: 競合製品と思われるwebベースのツールを推薦するコメントです。ユーザーが他の選択肢と比較検討していることが示唆されます。
*   **「Maybe use duckdb」**: 内部的な技術に関する提案です。duckdbを実装すると、さらなる機能向上が期待できることを示唆しています。


---

# GSAP is free now, including all their plugins

**Upvotes**: 301



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kcxtew/gsap_is_free_now_including_all_their_plugins/)

## 1. ポストの内容の説明

このRedditのポストは、JavaScriptのアニメーションライブラリであるGSAP (GreenSock Animation Platform) に関する重要なニュースを伝えています。具体的には以下の内容です。

*   **GSAPの変更点:** GSAPとそのすべてのプラグインが、Webflowのサポートのおかげで**完全に無料**になったという発表です。以前は一部の機能やプラグインが有料だったようです。
*   **情報源:** GSAPの公式サイトの価格設定ページへのリンクが示されています。
*   **目的:** ポスト主は、このニュースがWeb開発に興味のある人々に役立つと考え、情報を共有しています。

## 2. 特に興味深いコメント

このポストに対するコメントで特に興味深いものは以下の通りです。

*   **有料だったことへの驚き:** 多くのユーザーが、GSAPが以前は有料だったことに驚いています。一部のユーザーは、GSAPがオープンソースだと誤解していたようです。
*   **有料ライセンスが利用を妨げていた:** 以前の有料ライセンスが、GSAPを利用しない主な理由だったと述べるユーザーが複数います。
*   **代替手段の利用:** GSAPの代わりに[motion.dev](http://motion.dev)のような代替手段を利用していたユーザーが、GSAPの無料化を歓迎しています。
*   **オープンソースライセンスへの期待:** 一部のユーザーは、GSAPがオープンソースライセンスを採用することを求めています。これは、彼らがGSAPを利用するための条件となっているようです。


---

# I’m really sorry for this question but I’m an overwhelmed old man that wants a basic website but I feel I can’t trust any info on google

**Upvotes**: 81



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kd3a7b/im_really_sorry_for_this_question_but_im_an/)

## 1. ポストの内容の説明

Redditの投稿者は、シンプルなウェブサイトを作成したいと考えている高齢男性です。彼はGoogle検索で得られる情報に不安を感じており、Webサイトの作成方法について助けを求めています。

具体的には、以下のような悩みを抱えています。

*   プログラミングの知識がない。
*   過去にGoDaddyで高額な料金を請求された経験があり、詐欺を恐れている。
*   「Netlify」のようなプラットフォームの使い方がわからない。
*   小さなビジネスの紹介ページ（写真と説明文）を掲載したい。
*   希望するウェブサイトアドレスを取得したい。
*   ウェブサイトを持つことが、現代のビジネスにおいて重要であると考えている。

彼は、安価で、簡単にウェブサイトを作成できる方法を探しています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものは以下の通りです。

*   **WixやSquarespaceの推奨:** 多くのコメントが、WixやSquarespaceのような、プログラミング知識がなくても簡単にウェブサイトを作成できるサービスを推奨しています。これらのサービスは、直感的なインターフェースと豊富なテンプレートを提供しており、初心者でも手軽にウェブサイトを構築できます。
*   **ドメイン名の取得:** ドメイン名の取得に関しては、NamecheapやCloudflare、Porkbunが推奨されています。これらのサービスは、手頃な価格でドメイン名を提供し、ドメインプライバシーなどのオプションも利用できます。
*   **Carrdの提案:** Carrdという、シンプルな1ページウェブサイトを手軽に作成できるサービスが紹介されています。Carrdは非常に安価で、簡単な情報発信に最適です。
*   **GoDaddyへの警告:** GoDaddyのようなサービスを避けるようにという注意喚起も行われています。過去の経験から、高額な料金請求やサービスの分かりにくさを懸念する投稿者の不安を理解したコメントです。
*   **No-codeツールの推奨:** WixやSquarespaceのようなno-codeのサービスが、投稿者のようなウェブサイト初心者にとって良い選択肢であることを強調しています。


---

# I was fed up with paid productivity apps so I built a free Chrome extension for people like me

**Upvotes**: 39



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kd6jgl/i_was_fed_up_with_paid_productivity_apps_so_i/)

## ポストの内容の説明

このポストは、無料のChrome拡張機能「Deep Focus」を紹介するものです。投稿者は、有料の生産性向上アプリに不満を感じ、基本的な機能を使うためだけに料金を支払うことにうんざりしていました。そこで、余計な機能や料金体系がなく、実際に集中できるシンプルなツールを自ら開発しました。

「Deep Focus」は、以下の機能を備えた無料のChrome拡張機能です。

*   **Pomodoroタイマー:** 作業と休憩を構造化します。
*   **ウェブサイトブロッカー:** 時間を浪費するサイトへのアクセスをブロックします。
*   **環境音:** Lo-Fi、雨、森などの環境音で集中力を高めます。
*   **広告、サインアップ、料金なし:** 完全無料で使用できます。

投稿者は、この拡張機能が単なるツールではなく、集中力を高めるために必要なものだと述べています。また、将来的にはモバイルアプリ版も開発する予定です。Chrome拡張機能へのリンクも記載されています。

## 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものは以下の通りです。

*   **「Imagine all the productivity gained if there was only one productivity tool and nobody had to build 10,000 more」 (10 upvotes):** このコメントは、生産性向上ツールが乱立している現状に対する皮肉を込めたものです。多くのツールが存在することで、かえって混乱を招く可能性を示唆しています。
*   **「Won't work on Vivaldi browser. I'll wait for the update. Seems pretty cool anyway. Good luck with your project!」 (2 upvotes):** このコメントは、Vivaldiブラウザで動作しないことを指摘し、アップデートを期待しています。他のブラウザへの対応が求められていることがわかります。また、プロジェクトへの応援の言葉も添えられています。


---

# Hosting [cloudpanel] recommendations?

**Upvotes**: 48



[View on Reddit](https://www.reddit.com/r/webdev/comments/1kd1iio/hosting_cloudpanel_recommendations/)

### 1. ポストの内容の説明

このRedditのポストは、VPS（Virtual Private Server）ホスティングプロバイダーに関するものです。投稿者は、現在HostingerのVPSを利用していますが、価格が高く、システム障害やサポート対応の悪さに不満を感じています。そこで、CloudPanel（Webサーバー管理ツール）のプリインストールをサポートし、Hostingerよりも価格が手頃なVPSプロバイダーの推薦を求めています。

### 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **Hetzner and chill. 😌 (6 upvotes):** HetznerがVPSプロバイダーとして推奨されています。このコメントは、多くのユーザーから支持を得ており、Hetznerが信頼できる選択肢であることを示唆しています。
*   **Digitalocean, maybe. (3 upvotes):** DigitalOceanもVPSプロバイダーとして提案されています。
*   **Just cancelled my hostinger VPS because of bad uptime but in my view they are the cheapest providers of VPS’? I can’t find any provider come close to their price except hetzner auctions (1 upvotes):** 別のユーザーもHostingerの利用を中止した経験を共有しており、Hostingerの価格は魅力的であるものの、安定性に問題があることを示唆しています。また、HetznerのオークションがHostingerに匹敵する価格帯であることも言及しています。
*   **Depends where you want your servers, but yes, DO, Hetzner or AWS LightSail (1 upvotes):** サーバーの場所によって最適なプロバイダーが異なるとしつつ、DigitalOcean (DO), Hetzner, AWS LightSailを推奨しています。
*   **Hetzner with Coolify and CF (1 upvotes):** HetznerとCoolify (アプリケーションデプロイツール) と Cloudflare (CF, CDNサービス) を組み合わせる提案です。これは、Hetznerを基盤として、CoolifyやCloudflareのような他のツールやサービスを組み合わせることで、より高度なインフラを構築できることを示唆しています。

