
# Why is managing cloud server schedules such a nightmare no one warned me about?

**Upvotes**: 39



[View on Reddit](https://www.reddit.com/r/devops/comments/1mq34s7/why_is_managing_cloud_server_schedules_such_a/)

## 1. ポストの内容の説明

投稿者は、クラウドサーバーの起動/停止スケジュールの設定に苦労していると述べています。当初は簡単な作業だと考えていたものの、設定したスケジュール通りにサーバーが動作せず、料金が余分にかかってしまっているとのこと。

投稿者は、権限、ロール、トリガーなど、考えられる原因をすべて確認しましたが、問題が解決しないと感じています。他の人も同様の経験をしたことがあるかどうか、また、クラウドサーバーの自動化で遭遇した問題について経験談を求めています。

さらに、大量のログやアラートを見ることなくスケジュールを確認する方法についても質問しています。

## 2. 特に興味深いコメント

*   **「詳細が不足しているため、誰も助けられない」**: このコメントは、投稿者が問題解決に必要な情報を十分に提供していないことを指摘しており、的を射ています。
*   **「タイムゾーンのミスマッチ」**: スケジュール設定のタイムゾーンが、クラウドプロバイダーのデフォルト（UTCなど）と一致していない場合に、スケジュールが正しく動作しない可能性があるという指摘は、見落としがちな問題であり、解決の糸口になる可能性があります。
*   **「他のルールによる上書き」**: インスタンスレベルのオーバーライドや古い自動化ポリシーなど、他のルールがスケジュールに影響を与えている可能性を指摘しています。ライフサイクルルールやCloudWatchイベント、スケーリンググループの設定なども確認すべきだと助言しており、具体的な解決策を提示しています。
*   **「Server SchedulerやCloud Skedの利用」**: ネイティブのツールを複雑に操作するのではなく、Server SchedulerやCloudSkedのようなサードパーティ製のツールを利用して、スケジュール管理を簡素化する方法を提案しています。


---

# Why no one promotes to use springboot as other backend tech stack

**Upvotes**: 59



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1mpal8g/why_no_one_promotes_to_use_springboot_as_other/)

## ポストの内容の説明

投稿者は、ソーシャルメディア（X、旧Twitter）で、Node.jsやMERNスタックなど、他のバックエンド技術スタックを熱心に宣伝する人々やインフルエンサーをよく見かけるが、Spring Bootに関しては、そのような宣伝やインフルエンサーが少ないことに疑問を抱いています。なぜSpring Bootは、他のバックエンド技術のように頻繁に宣伝されないのか、Spring Bootに何か欠点があるのか、それとも単に学習するのが難しいのか、といった疑問を投げかけています。投稿者は、他の人の意見、経験、あるいは具体的な事例を聞きたいと考えています。

## 特に興味深いコメント

投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「Big tech will keep using springboot no matter what influencers or their followers say.」 (79 upvotes)**: 大企業は、インフルエンサーやそのフォロワーが何を言おうと、Spring Bootを使い続けるだろうというコメントです。Spring Bootが、市場において一定の地位を確立していることを示唆しています。

*   **「have you ever seen a Ferrari or Lamborghini advertisement?」 (65 upvotes)**: フェラーリやランボルギーニの広告を見たことがあるか？という質問を通して、Spring Bootがすでに高い品質と認知度を持っており、積極的に宣伝する必要がないということを示唆しています。

*   **「Twitter is a big bubble, it doesn’t reflect the actual market. If you listen to the Primeagen he says it all the time that if you want to get a job in IT you shouldn’t listen to what people say on Twitter.」 (22 upvotes)**: Twitterは現実を反映していないという意見で、IT業界の仕事を得るために、Twitterの情報に耳を傾けるべきではないというPrimeagenの発言を紹介しています。ソーシャルメディア上の情報と、実際の市場の状況との乖離を示唆しています。

*   **「IMO springboot is more traditional in that regard so theres little "dev influencers" of java/spring compared to nodejs」 (17 upvotes)**: Spring Bootがより伝統的な技術であり、Node.jsと比べてJava/Springに「開発インフルエンサー」が少ないという意見です。伝統的な技術は、宣伝よりも実用性で評価される傾向があることを示唆しています。

*   **「I started doing Java 25 years ago ... For me, Java/Spring Boot is a solid back-end environment, nothing will convince me otherwise.」 (13 upvotes)**: Java/Spring Bootを長年使用しているユーザーからのコメントで、Java/Spring Bootが堅牢なバックエンド環境であるという確信が表明されています。JavaScript/Node.jsに対する否定的な見解も示しており、技術選択に対する個々の意見の違いが表れています。このコメントは、Spring Bootの長所と、他の技術との比較を通じて、その価値を強調しています。


---

# Failed my final round interview today

**Upvotes**: 54



[View on Reddit](https://www.reddit.com/r/SQL/comments/1mprqgk/failed_my_final_round_interview_today/)

## ポストの内容の説明

このRedditのポストは、あるユーザーが最終面接に落ちた経験について語っています。

*   **状況:** ユーザーは最終面接に進み、5人の面接官と面接を行いました。最初の4人は好印象だったようです。しかし、最後の面接官（採用担当者）が、SQLクエリを手書きで記述するテストを実施しました。
*   **問題:** ユーザーはSQLの基本的な知識はありましたが、手書きでの記述に慣れていなかったため、文法上のミス（カンマ忘れ、ON句忘れ、FROM句忘れなど）をしてしまい、テストに失敗しました。
*   **感情:** ユーザーは、最終面接まで進んだ努力が無駄になったこと、そしてSQLの知識はあるのに手書きテストで実力を発揮できなかったことで、非常に落胆しています。面接官の態度や言葉からも、ユーザーの能力が正しく評価されなかったと感じています。
*   **提案:** ユーザーは、面接官にメールで、手書きテストが実際の能力を測るものではないと説明するべきか悩んでいます。

## コメントのうち、特に興味深いもの

このポストに対するコメントは、ユーザーの状況に対する様々な意見やアドバイスを含んでいます。特に興味深いものをいくつか紹介します。

*   **「F that boomer. You deserve better. Who takes a paper SQL test?」**: このコメントは、手書きのSQLテストという時代遅れな方法を採用した面接官に対して批判的な意見を表明しています。このような非標準的なテスト方法は、ユーザーの能力を正確に評価するものではないという意見です。
*   **「While I agree it's a bit janky, if I was administering this test, I would have to assume that you are someone who either has basically no real SQL experience or someone who does not check their work / is not very methodical. Because a SELECT without FROM or a JOIN without ON should leap out immediately on a brief look.」**: このコメントは、手書きテスト自体に疑問を呈しつつも、文法上の基本的なミスが多いことに対して、ユーザーのSQL経験や、仕事への取り組み方（確認の甘さ、非論理性）に疑問を呈しています。
*   **「Lol, this is so silly. Seems like they should be testing for you to understand the logic, not to avoid every syntax error. Also, that way of speaking to people… as if you lied about your abilities. Maybe you dodged the bullet.」**: このコメントは、SQLのロジックを理解しているかを評価するのではなく、文法上のミスに焦点を当てたテスト方法を批判しています。また、面接官の言い方にも問題があり、ユーザーがこの会社に入らなくて良かったかもしれないという意見も述べています。
*   **「Don't need to feel down. I failed a many of test because of nervouness, too much coffee, etc. ... All good though, 6 years later I'm an analytics manager making 160k+, fully remote and maybe do 1-2 days of real work in the week. Kinda glad I didn't get that job. I would have been stuck at 110k or whatever they were paying. Failures are often blessings in disguise.」**: 失敗しても落ち込む必要はないという励ましのコメントです。自身の経験を例に挙げ、最終的にはより良いキャリアを築くことができたと述べています。
*   **「On the one hand... a handwritten SQL test is garbage. On the other hand, forgetting the *FROM* clause makes me raise an eyebrow at how you think about SQL. ... Obviously in complex queries this kind of gets silly but if you can subvocalize this way as you think through/write a query, you'll find it's pretty impossible to miss something like a FROM clause unless you're exhausted and hungover and multitasking between 20 things without paying attention.」**: このコメントは、手書きテスト自体を否定しつつも、FROM句を忘れるというミスは、SQLの理解度や、クエリを組み立てる際の思考プロセスに問題がある可能性があると指摘しています。SQLの「構造」を意識して、クエリを書くことを勧めています。


---

# Distinct vs Group by

**Upvotes**: 36



[View on Reddit](https://www.reddit.com/r/SQL/comments/1mpb9le/distinct_vs_group_by/)

## 1. ポストの内容の説明

このRedditの投稿は、SQLクエリにおける `SELECT DISTINCT` と `GROUP BY` の違いについて議論しています。投稿者は、両方の構文が同じ結果を返すことは知っているものの、両者の違いについて疑問を投げかけています。具体的には、`SELECT column FROM table GROUP BY column` と `SELECT DISTINCT column FROM table` が同じ結果を返すことは分かっているが、それ以外の違いや、どちらを使うべきかについて質問しています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものは以下の通りです。

*   **`DISTINCT` の適切な使用と意図**:
    *   `DISTINCT` は重複を排除するためのものであり、集計を行う場合は `GROUP BY` を使用するべきという意見。
    *   `DISTINCT` は、単にユニークな値が必要な場合に可読性が高いという意見。
*   **パフォーマンスとクエリの拡張性**:
    *   単一の列に対する単純なクエリでは、パフォーマンスはそれほど変わらない可能性がある。
    *   しかし、複数の列や集計関数を追加すると、実行計画が異なり、パフォーマンスに差が出る可能性がある。
    *   `DISTINCT` は、`SELECT` 句のすべての列が重複を判断する基準になる。
    *   `GROUP BY` は、集計を行う際に、集計対象でない列も指定できる。
*   **`DISTINCT` の使用に対する批判**:
    *   `DISTINCT` は、JOINの理解が不十分な場合に、結果の重複を隠すために使用されることが多い。
    *   クエリの意図を明確にするために、`DISTINCT` よりも、`GROUP BY` を使用して意図を明確にする方が良い。
*   **具体的なユースケース**:
    *   重複を排除しつつ、他の列を追加する場合、`DISTINCT` を使用する。
    *   集計統計（例：合計、カウント）を取得する場合は、`GROUP BY` を使用する。


---

# I made a fun little tool for converting IP's to RGBA

**Upvotes**: 384

![Image](https://i.redd.it/dywqbxqqm0jf1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1mq69wz/i_made_a_fun_little_tool_for_converting_ips_to/)

## 1. ポストの内容の説明

このRedditのポストは、あるユーザーが作成した、IPアドレスをRGBAカラーコードに変換するツールを紹介しています。投稿者は、IPアドレスの4つの数字（0-255）とRGBAカラーコードの4つの数値（赤、緑、青、アルファ、それぞれ0-255）の類似性に気づき、このツールを趣味で作成したと述べています。ツールのURLも提示しています。

簡単に言うと、この投稿は「IPアドレスを入力すると、それに対応するRGBAカラーコードが表示されるツール」の紹介です。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **IPv6サポートの追加の提案:** 「Very fun tool! Any chance you'd be able to add IPv6 support?」 (高評価) IPv4アドレスだけでなく、より長いIPv6アドレスにも対応するように拡張してほしいという提案です。IPv6アドレスはIPv4よりも桁数が多いため、このツールを拡張する上での技術的な課題も考えられます。
*   **カラーローレットオプションの提案:** 「Idea: a “color roulette option” where users choose a color from a picker and you redirect them to whatever the hell that IP resolves to😎」 (高評価) ユーザーが色を選択すると、その色に対応するIPアドレスを持つWebサイトにリダイレクトするという、よりインタラクティブな機能の提案です。これは、ツールの利用方法を拡張する面白いアイデアです。
*   **ポートフォリオへの活用への言及:** 「Nice little thing that is fun and can be used for a web-dev portfolio. Cool :)」 (高評価) このツールが、Web開発者のポートフォリオで面白い表現方法として使える可能性があるというコメントです。
*   **無用だけど面白いという評価:** 「This is entirely useless and yet amazingly neat. What a cool idea.」 (高評価) このツールが実用的ではないかもしれないが、ユニークで面白いという評価です。
*   **個人の体験談:** 「Something unique! It gave my favourite colour for my IP 💜」 (高評価) 自分のIPアドレスに対応する色が表示され、それが自分の好きな色だったという、個人的な体験を共有するコメントです。


---

# Meet "Mr. Git," the guy who lives in VS Code and gits stuff for us.

**Upvotes**: 133



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mqce1m/meet_mr_git_the_guy_who_lives_in_vs_code_and_gits/)

### 1. ポストの内容の説明

このRedditの投稿は、投稿者がパートナーのビジネスのために作成したウェブサイトの更新方法を彼女に教えた際の面白いエピソードを共有しています。

*   **背景:** 投稿者は、パートナーのためにイベントのサインアップページを持つシンプルなランディングサイトを作成しました。
*   **問題:** パートナーは自分でウェブサイトを更新したいと考えており、投稿者は彼女にどのファイルを編集し、イベントのタイトルと説明を見つける場所を教えました。
*   **解決策:** パートナーが更新しようとした際に、ローカルコピーが最新でないことに気づき、投稿者は彼女に`git pull`を実行するように指示しました。その後、変更をコミットしてプッシュする方法を教え、新しいデプロイをトリガーしました。
*   **結果:** パートナーは、Gitを「Mr. Git」と呼び、VS Codeに住んでファイルを取得してくれる「素晴らしい人」として認識するようになりました。投稿者はGitがバージョン管理システムであることを説明しようとしましたが、パートナーは「Mr. Git」の愛称を気に入っています。

要するに、技術的な説明をすることなく、Gitを擬人化して理解したパートナーの面白い体験談です。

### 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものは以下の通りです。

*   **「77 upvotes: These are the clients that you want.」:** これは、投稿者のように技術的な知識を必要とせず、技術を理解しようとしない人でも、Gitのようなツールを「魔法」のように使えるように支援する能力を高く評価しているコメントです。
*   **「30 upvotes: I have a "developer" who isn't able to use git properly. Maybe I need to introduce him to Mr. Git....」:** Gitを使いこなせない開発者がいるという現実を皮肉り、投稿のパートナーのようにGitを擬人化して理解することの有効性を示唆しているコメントです。
*   **「4 upvotes: Honestly, I'm gonna start doing this too. Life needs a little more whimsy.」:** 技術用語を擬人化することで、技術に対する理解を深めることの面白さや有効性に共感しているコメントです。


---

# CEO brought up idea about penalizing dev salary for bugs

**Upvotes**: 429



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mq0wfj/ceo_brought_up_idea_about_penalizing_dev_salary/)

## 1. ポストの内容の説明

このRedditのポストは、あるソフトウェア開発会社のCEOが、開発者の給与にバグ発生によるペナルティを科すという考えを示したことについて、投稿者が疑問を投げかけているものです。

具体的には以下の点が述べられています。

*   **CEOの提案:** CEOは、バグが顧客と収益を損なうことを念頭に、開発者の給与をバグによって減額する「思考実験」を行った。さらに、年末ボーナスもバグによって減額される可能性があると示唆した。
*   **提案の背景:** CEOは、過去数年間の開発とは関係のないソフトウェアの不具合が原因で、潜在顧客との商談がうまくいかなかったことに言及した。彼は、バグと収益の関係を開発者に理解させたいと考えている。
*   **現状の課題:** 投稿者の会社は小規模で、QA（品質保証）チームがなく、十分なテスト体制が整っていない。ユニットテストはバックエンドで導入され始めたばかりで、UIのテストは行われていない。
*   **投稿者の疑問:** 投稿者は、このようなCEOの考えに対して、どのように考えるべきか、他の人々の意見を求めている。

## 2. 興味深いコメントの紹介

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「開発は停滞するだろう」:** バグによるペナルティが導入されれば、開発者は慎重になりすぎて、開発スピードが著しく低下するだろうという意見。また、適切なQAプロセスが不可欠であり、それには時間とコストがかかることも指摘している。
*   **「CEOの給与は？」:** バグが開発者の責任だけではないことを指摘し、CEOの給与も会社の業績（例:株価下落）によって変動するのかと問うている。
*   **「新機能はもう出さない」:** ペナルティが適用されるのであれば、リスクを避けるために新機能の開発を控えるという皮肉な意見。
*   **「赤信号」:** 経営者の無能さを露呈する良い機会であり、早めに問題点に気づくことは重要であるという意見。
*   **「テストプロセスの重要性」:** バグを検出するためのテストプロセスの導入を推奨。ペナルティは生産性を低下させるだけで、改善にはつながらないという意見。


---

# What website builder do you guys recommend for a simple product page?

**Upvotes**: 51



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mqcqfy/what_website_builder_do_you_guys_recommend_for_a/)

## 1. ポストの内容の説明

この Reddit のポストは、シンプルな製品ページを作成するためのウェブサイトビルダーの推奨について尋ねています。投稿者は、1つの製品を展示するための、清潔でプロフェッショナルなウェブサイトを必要としており、メールフォームと連絡先番号を含めたいと考えています。 過去に Wix を使用した経験があり、レイアウトの自由度が低いと感じています。 Squarespace と Webflow を検討しており、Squarespace は使いやすそうだが柔軟性に欠ける可能性があり、Webflow は強力だが習得に時間がかかる可能性があると考えています。投稿者は、デザインの自由度を求めつつ、ゼロからコードを書くことは避けたいと考えており、Webflow が小さなプロジェクトに適した選択肢であるかどうかを知りたいと思っています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「can they buy the product from the page or is it just to display it?」（5 upvotes）**: このコメントは、製品ページで実際に製品を販売するのか、単に表示するだけなのかという、重要な機能に関する質問をしています。これは、ウェブサイトビルダーの選択肢を大きく左右する可能性があるため、重要なポイントです。
*   **「I'd say if it's literally just product+contact+phone number then keep it simple, focus on your actual product, and use something like wix or shopify for now」（1 upvotes）**: このコメントは、投稿者のニーズ（製品、連絡先、電話番号だけのシンプルなサイト）に基づき、Wix や Shopify のようなよりシンプルな選択肢を提案しています。これは、投稿者のニーズに対する具体的なアドバイスであり、Webflow の学習コストを考慮すると、現実的な選択肢です。
*   **「Pay someone.」（-5 upvotes）**: 専門家に依頼することを勧めるコメントですが、マイナス評価を受けており、投稿者が自分で解決したいという意向があることを示唆しています。

