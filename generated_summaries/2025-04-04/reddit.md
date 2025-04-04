
# 'Getting into DevOps'

**Upvotes**: 888



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

はい、承知いたしました。以下に、ご質問への回答を示します。

### 1. このポストの内容の説明

このRedditポストは、「DevOps入門」というタイトルで、DevOpsを学ぶための情報源をまとめたものです。投稿文は以下のように構成されています。

*   **DevOpsとは？**：AWSの記事へのリンクを紹介し、DevOpsの概要（開発チームと運用チームが連携し、自動化を進めるワークフロー）を説明しています。
*   **読むべき書籍**：DevOpsの文化や実践に関する書籍をリストアップしています。『The Phoenix Project』、『The DevOps Handbook』、『Google's Site Reliability Engineering』などが含まれます。
*   **何を学ぶべきか？**：インフラストラクチャ as Codeの重要性、DevOpsに必要なスキル、DevOpsの問題解決に対する考え方など、学ぶべき内容についての情報源へのリンクを紹介しています。
*   **注意点**：DevOpsは文化的な変化であり、特定のツールセットに限定されないことを強調しています。スキルやツールセットの推奨はあくまで提案として受け止めるべきだと述べています。

全体として、DevOpsの概念、学習リソース、必要なスキル、およびDevOpsの実践における注意点について包括的な情報を提供し、DevOps初学者向けのガイドとして機能することを意図した投稿です。

### 2. このポストに対するコメントのうち、特に興味深いもの

複数のコメントが興味深いですが、特に以下の３つのコメントが参考になります。

*   **Kubernetes入門コースの紹介（209 upvotes）**: Kubernetesのアーキテクチャを学ぶための実践的な方法（Kubernetesクラスタを構築し、コンポーネントを無効化して動作を確認する）を紹介しています。座学だけでなく、手を動かしながら学べるため、知識の定着に繋がりやすいと思われます。
    *   紹介されたYouTubeリンク: [https://youtu.be/n4zxKk2an3U](https://youtu.be/n4zxKk2an3U)

*   **実践の重要性に関するコメント（122 upvotes）**: DevOpsの学習において、実践とGoogle検索が最も効率的であると主張しています。ビデオコースよりも、具体的なタスクを通じてハンズオンでスキルを習得することを推奨しています。紹介された[https://github.com/100daysofdevops/100daysofdevops](https://github.com/100daysofdevops/100daysofdevops)も参考になります。

*   **DevOpsの3つの原則（57 upvotes）**: DevOpsの原則として、自動化、監視、統合を挙げています。それぞれの原則について具体的なツール（Terraform, Ansible, Netdataなど）やプラクティスを紹介しており、DevOpsを実践するための具体的な指針を提供しています。

これらのコメントは、DevOpsの学習方法や実践における重要な考え方を示唆しており、特にDevOps初心者が学習を進める上で参考になるでしょう。


---

# Released an AWS EC2 Pricing API - live spot pricing across regions

**Upvotes**: 29



[View on Reddit](https://www.reddit.com/r/devops/comments/1jqm221/released_an_aws_ec2_pricing_api_live_spot_pricing/)

はい、承知いたしました。以下に、ご質問に対する回答をmarkdown形式で記述します。

### 1. このポストの内容の説明

このRedditのポストは、投稿者が作成した**AWS EC2の料金API**に関するものです。

*   **概要:** このAPIは、AWS EC2インスタンスの料金情報をリアルタイムに近い形で提供します。具体的には、リージョン、プラットフォームごとのインスタンスタイプ、オンデマンド料金、スポット料金などを取得できます。さらに、インスタンスのスペック（vCPU数、メモリ容量、GPUの有無など）やシングルスレッドCPU性能に関する情報も含まれています。
*   **データ更新頻度:** データベースは1時間ごとに更新され、約8万件のデータポイントが含まれています。
*   **APIの使用例:**
    *   特定のインスタンスタイプ（例：c7a.xlarge）の全リージョン・AZにおける料金情報を取得する方法が、`curl`コマンドを使った例で示されています。
    *   利用可能なインスタンスタイプと、全リージョンでの平均料金を取得する方法も同様に`curl`コマンドで示されています。
*   **利点:** 常に最新のEC2料金情報を取得できるため、コスト最適化に役立ちます。特にスポットインスタンスの価格変動を監視するのに有効です。

### 2. 特に興味深いコメント

3つのコメントのうち、特に興味深いのは以下のコメントです。

> Hey this is awesome. Iv been looking into something like this for awhile after out avg spot cost jumped a few years ago. Thanks for this and runs-on!

このコメントは、投稿されたAPIに対するニーズが実際に存在することを示唆しています。具体的には、

*   **過去の課題:** コメント投稿者は、数年前にスポットインスタンスの平均コストが急騰した経験から、同様のツールを探していた。
*   **APIの有用性:** 今回のAPIが、まさに彼が探し求めていたものに合致していることを表明している。
*   **感謝の意:** 投稿者への感謝の意を述べており、このAPIが実用的な価値を持つことを示唆している。
    
このコメントから、EC2のスポットインスタンスの価格変動を監視し、コストを最適化したいというニーズが潜在的に存在し、このAPIがそのニーズを満たす可能性があることがわかります。

---

# What’s the most frustrating part of DevOps that no one talks about?

**Upvotes**: 60



[View on Reddit](https://www.reddit.com/r/devops/comments/1jqbexk/whats_the_most_frustrating_part_of_devops_that_no/)

1.  **ポストの内容の説明**

    このRedditのポストは、DevOpsの実践における「誰も語らない、しかし非常にイライラする問題点」について議論を呼んでいます。投稿者は、自動化やCI/CDといったDevOpsの利点は広く認識されているものの、日常的に直面する、見過ごされがちな頭痛の種は何かを問いかけています。つまり、DevOpsの理想と現実のギャップ、もしくは一般的に語られない苦労について議論を求めていることがわかります。

2.  **特に興味深いコメント**

    複数のコメントが興味深いですが、ここでは特に2つ取り上げます。

    *   **138 upvotesのコメント：「コードの品質維持、抽象化、ドキュメント作成などの価値を過小評価すること」**

        このコメントは、DevOpsの本質的な問題点を突いています。自動化やCI/CDは重要ですが、それらを支えるコードの品質、整理されたアーキテクチャ、適切なドキュメントがなければ、DevOpsの効率は大幅に低下します。家を掃除する例えを用いて、日々の小さな努力が後々の大きな負担を軽減することを示唆しており、非常に共感を呼びやすいでしょう。DevOpsに限らず、ソフトウェア開発全般に通じる普遍的な問題点を指摘している点が興味深いです。

    *   **150 upvotesのコメント：「DevOpsをOpsと混同している人が多すぎる」**

        このコメントは、DevOpsの定義に関する誤解を指摘しています。DevOpsは単なる運用（Ops）の自動化ではなく、開発（Dev）と運用（Ops）の連携、文化、考え方を含む包括的なアプローチです。このコメントは、DevOpsの本質を理解せずにOpsの自動化だけを進めてしまうことへの警鐘と解釈できます。DevOpsの本質を理解しているかどうかで、その効果やアプローチが大きく変わるため、非常に重要な指摘と言えるでしょう。


---

# Malware hiding in plain sight: Spying on North Korean Hackers

**Upvotes**: 282



[View on Reddit](https://www.reddit.com/r/devops/comments/1jpteaw/malware_hiding_in_plain_sight_spying_on_north/)

はい、承知いたしました。以下に、ご質問への回答をmarkdown形式で記載します。

### 1. このポストの内容の説明

このRedditのポストは、投稿者が「Lazarus group」（北朝鮮のAPTグループ）がNPM（Node Package Manager）にアップロードした悪意のあるパッケージ（`react-html2pdf.js`）をリアルタイムでデバッグしようとする様子を観察したという内容です。

**概要:**

*   **マルウェアの発見:** 投稿者は、NPMにアップロードされたマルウェアを監視しており、怪しいパッケージを発見しました。
*   **隠蔽工作:** 一見すると、パッケージのコードは無害に見えましたが、実際には大量のスペースで悪意のあるコードが隠されていました。スクロールバーを右に移動させると、そのコードが表示されるようになっていました。
*   **悪意のあるコードの内容:** 隠されたコードは、`axios`というライブラリを使って外部のURLからペイロードをダウンロードし、`eval()`関数で実行するものでした。
*   **デバッグの試み:** Lazarus groupは、`axios`が定義されていないなどのエラーに気づき、リアルタイムでパッケージを更新してデバッグを試みました。投稿者は、その様子を観察しました。
*   **ペイロードの詳細:** 最終的なペイロードは、以下の様な悪質な動作をするものでした。
    *   アクティブなセッション・トークンの窃盗
    *   ブラウザのプロファイルの検索と、キャッシュなどのデータの窃盗
    *   MetaMaskのようなブラウザ拡張機能ベースの暗号通貨ウォレットの識別と窃盗
    *   MacOSキーチェーンの窃盗
    *   バックドアと更なるマルウェアのダウンロードと感染
*   **Lazarus groupの特定:** 過去の攻撃との類似性、IPアドレス、URL、NPMアカウント、Githubアカウントなどの情報から、この攻撃がLazarus groupによるものと特定しました。
*   **注意喚起:** 投稿者は、悪意のあるURLへのアクセスを避け、詳細な分析はブログ記事とYouTubeビデオを参照するように促しています。

### 2. このポストに対するコメントのうち、特に興味深いもの

このポストに対するコメントの中で、特に興味深いのは以下の2点です。

*   **サプライチェーン攻撃の危険性:** 40 upvotesのコメントは、この事件がサプライチェーン攻撃の危険性を示している点を指摘しています。開発者が多くの依存関係を容易に追加する傾向があるため、悪意のあるパッケージが紛れ込むリスクがあることを強調しています。

*   **サンドボックス化されたランタイムの提案:** 20 upvotesのコメントは、サンドボックス化されたランタイムと最小権限のポリシーの重要性を主張しています。DenoやWASMランタイムなどの例を挙げ、依存関係が実行できるJavaScriptの範囲を制限することで、セキュリティを強化できると提案しています。

これらのコメントは、今回の事件が単なるマルウェアの発見にとどまらず、ソフトウェア開発のサプライチェーン全体におけるセキュリティ対策の必要性を示唆しているという点で非常に興味深いです。


---

# Don’t Make the Same Mistake I Did

**Upvotes**: 163



[View on Reddit](https://www.reddit.com/r/devops/comments/1jpwlot/dont_make_the_same_mistake_i_did/)



---

# Color palettes inspired by Mexican architecture

**Upvotes**: 91



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1jpyjys/color_palettes_inspired_by_mexican_architecture/)



---

# An extensive list of free and open-source SVG icon resources for your next project

**Upvotes**: 36



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1jplboi/an_extensive_list_of_free_and_opensource_svg_icon/)



---

# Feeling java spring boot is difficult

**Upvotes**: 28



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1jpx39l/feeling_java_spring_boot_is_difficult/)



---

# How do you like this Resume

**Upvotes**: 58

![Image](https://i.redd.it/izihjfkq3kse1.jpeg)

[View on Reddit](https://www.reddit.com/r/SQL/comments/1jqae1f/how_do_you_like_this_resume/)



---

# What's a powerful SQL feature that not many people may know about?

**Upvotes**: 160



[View on Reddit](https://www.reddit.com/r/SQL/comments/1jptu2r/whats_a_powerful_sql_feature_that_not_many_people/)



---

# The website for (newly-released) Anime.js v4 is just incredible.

**Upvotes**: 734



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqmqkn/the_website_for_newlyreleased_animejs_v4_is_just/)



---

# LinkedIn is awesome

**Upvotes**: 407

![Image](https://i.redd.it/22cupl940nse1.jpeg)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1jql6z0/linkedin_is_awesome/)



---

# how do you code everyday without getting burnt out

**Upvotes**: 83



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqsn2i/how_do_you_code_everyday_without_getting_burnt_out/)

1.  **このポストの内容の説明**

このRedditのポストは、ソフトウェアエンジニアがバーンアウト（燃え尽き症候群）に陥っている現状を訴えるものです。投稿者は5年の経験を持つエンジニアで、過去6ヶ月間ほぼ休みなく働き、残業も多かったため、コードやタスク管理ツールのJIRAを見るだけで嫌気がさしている状態です。仕事の内容がつまらないと感じ、精神的に疲弊しているため、この状況に対するアドバイスを求めています。要するに、長時間労働と単調なタスクによってバーンアウト寸前であり、打開策を探しているという内容です。

2.  **特に興味深いコメント**

以下のコメントが特に興味深いと考えられます。

*   **59 upvotesのコメント:** このコメントは、具体的な解決策を複数提示しています。
    *   **「Get out of the house and work somewhere else.」：** 環境を変えることの重要性を示唆しています。在宅勤務の孤独感を解消し、気分転換を図るために、コワーキングスペースなどの利用を勧めています。
    *   **「Take more time off.」：** 休養の重要性を強調しています。バーンアウトの根本的な解決策として、休息を取ることを勧めています。
    *   **「Don't work after hours, at least for a while.」：** 残業を避けることを勧めています。ワークライフバランスを取り戻すために、労働時間を制限することを推奨しています。
    *   **「Give yourself a ton of padding so you can work on only 4-5 hours a day of focused work, rest for meetings and random things.」：** 集中できる作業時間を短くし、休憩や会議などの時間を入れることで、効率的に仕事を進めることを提案しています。
*   **35 upvotesのコメント:**
    *   **「I work the time I am paid for according to my contract then I stop.」：** 契約時間外には働かないという割り切った考え方を示しています。これは、ワークライフバランスを重視し、バーンアウトを防ぐための有効な戦略です。

これらのコメントは、バーンアウトに対する具体的な対策や考え方を示しており、投稿者だけでなく、同様の悩みを抱える他のエンジニアにとっても参考になると思われます。


---

# I made a “Time Machine” page showing what my site might’ve looked like from 1999 to 2016

**Upvotes**: 65



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqpwcs/i_made_a_time_machine_page_showing_what_my_site/)

1.  **ポストの内容の説明**

    このRedditのポストは、あるユーザーが自分のウェブサイトに作成した「タイムマシン」ページを紹介するものです。このページは、1991年から2016年までのウェブサイトの見た目を模倣しており、各年代のウェブデザインのトレンドや特徴を再現しています。投稿者は、各年代の前に、その年代に関するちょっとした豆知識や懐かしい瞬間を紹介しています。投稿者は、自身がこれらの時代を経験していないため、調査や父親への聞き取りを行い、可能な限り当時のウェブサイトの見た目を忠実に再現しようと試みたようです。最後に、タイムマシンページのリンクを共有し、フィードバックを求めています。

2.  **特に興味深いコメント**

    最も興味深いコメントは、以下の2つです。

    *   **24 upvotes:** 
        > Fun idea. The one thing that feels missing from this is the visuals. There were a lot of particular design styles especially late 90s early-mid 2000s, where this largely seems to just be text and boxes. Eg. stuff like embossed buttons, pixel borders on buttons, link exchange banners, etc.

        このコメントは、タイムマシンページのコンセプトを評価しつつも、視覚的な要素の欠如を指摘しています。特に1990年代後半から2000年代初頭のデザインスタイル（エンボス加工されたボタン、ピクセルボーダー、リンクエクスチェンジバナーなど）が不足していると指摘しており、今後の改善点を示唆する有益なフィードバックです。

    *   **7 upvotes:** 
        > .<blink>cool idea!</blink>
        > The “my dad was building sites back then” comment makes me feel old

        このコメントは、投稿のアイデアを評価しつつ、投稿者が父親から情報を得たという記述から、時の流れを感じていることをユーモラスに表現しています。このコメントは、投稿のテーマである「過去のウェブ」に対するユーザーの共感を呼び起こしている点において興味深いです。


---

# Am I the only one who hates gimmicky heavy scroll animation?

**Upvotes**: 144



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqimil/am_i_the_only_one_who_hates_gimmicky_heavy_scroll/)

## このポストの内容

このRedditのポストは、投稿者が「凝ったスクロールアニメーション」に対する嫌悪感を表明しているものです。具体的には、スクロールに合わせてCGIのアニメーションが再生されるようなウェブサイトを指しており、以下のような問題点を指摘しています。

*   **パフォーマンスの問題:** アニメーションによってウェブサイトの読み込みが遅くなり、ユーザーがコンテンツを十分に閲覧できなくなる可能性がある。
*   **ユーザビリティの問題:** アニメーションがユーザーを混乱させたり、本来の目的から気をそらしたりする。
*   **過剰な装飾:** アニメーションがないシンプルなウェブサイト（例：Fly.io）の方が優れている場合もある。
*   **矛盾:** こうしたアニメーションを多用したウェブサイトが、ウェブデザイン関連のコミュニティで賞賛されていることへの疑問。

要するに、投稿者は、過剰なアニメーションがウェブサイトのユーザビリティを損なうと考えており、シンプルなデザインの方が優れている場合もあると主張しています。

## 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いのは以下の3つです。

1.  **71 upvotesのコメント:**
    *   **概要:** スクロールアニメーションを多用したサイトでは、通常よりも多くのスクロールが必要になるため、スクロールホイールが壊れそうだと感じると述べています。また、スクロールホイールの動きとページの動きが1:1で対応していないことにも不満を抱いており、「ベーシック」なサイトを好むとしています。
    *   **理由:** このコメントは、投稿者が指摘するユーザビリティの問題を具体的に示しています。過剰なスクロールアニメーションが、物理的な負担や操作性の悪化につながるという、ユーザーの具体的な不満を反映している点が興味深いです。

2.  **17 upvotesのコメント:**
    *   **概要:** 「できるからといって、すべきではない」という格言を引用し、アニメーション技術の濫用を批判しています。
    *   **理由:** このコメントは、技術的な能力とユーザビリティのバランスの重要性を示唆しています。ウェブデザイナーが最新技術を駆使すること自体は悪いことではありませんが、それがユーザーエクスペリエンスを損なう場合は本末転倒であることを簡潔に表現しています。

3.  **9 upvotesのコメント:**
    *   **概要:** アニメーションや特殊なスクロール挙動が適切な場合もあるものの、優れたUXを維持しながらそれらを実装することは非常に難しいと述べています。そして、正当化できる使用例があったとしても、実装に十分な時間と労力が費やされていないことが多いと指摘しています。
    *   **理由:** このコメントは、アニメーションの使用を全面的に否定するのではなく、その難易度と実装の重要性を強調している点が興味深いです。適切な場面で使用すれば効果的なアニメーションも、十分な検討と努力なしに実装すれば逆効果になる可能性を示唆しています。

これらのコメントは、過剰なアニメーションに対する不満だけでなく、ユーザビリティ、パフォーマンス、技術の適切な使用といった、ウェブデザインにおける重要な要素について考えさせられる内容となっています。


---

# How much do you pay for Vercel hosting as a solo developer

**Upvotes**: 32



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1jqe1yp/how_much_do_you_pay_for_vercel_hosting_as_a_solo/)

1.  **ポストの内容の説明**

このRedditのポストは、個人開発者（solo developer）がVercel hostingの利用料金について質問しているものです。投稿者は小規模なSaaSを立ち上げる予定で、Vercelの利用料金がどれくらいになるか見当がつかないため、他の開発者の経験を聞きたいと考えています。Vercelの料金体系が理解できていない「noob（初心者）」であることも表明しています。

2.  **興味深いコメント**

いくつかのコメントが興味深いですが、特に以下の3つが参考になります。

*   **27 upvotesのコメント：** Vercelの無料プランについて言及しています。収益が出るまで、または無料プランの制限を超えない限りは費用がかからないことを指摘しています。ただし、Vercelのどの機能を利用し、どの制限を超えるかによって料金が変わるため、具体的な利用状況を説明する必要があるとしています。Vercelを使い始めたばかりの人にとって、まずは無料プランを意識して利用状況を把握することが重要だと分かります。
*   **43 upvotesのコメント：** Self Hosting、つまり自分でサーバーを管理することを勧めています。Coolifyというツールを推奨しています。Vercelにこだわらず、自分でインフラを構築するという選択肢もあることが分かります。
*   **24 upvotesのコメント：** VPS（Virtual Private Server）を利用してself hostingした結果、月数十ドルから数百ドルの節約になっていると述べています。self hostingに対する恐れを克服すれば、コストを大幅に削減できる可能性があることを示唆しています。VPSを利用したSelf Hostingは上級者向けではあるものの、コスト削減に繋がる可能性があることが分かります。

これらのコメントから、Vercelの利用料金は利用状況によって異なり、無料プランを活用できる場合もある一方で、Self Hostingによって大幅なコスト削減も可能であることが分かります。

