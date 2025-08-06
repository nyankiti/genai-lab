
# Spring Boot 3.5.0 available now

**Upvotes**: 66



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1kwitne/spring_boot_350_available_now/)

1.  **このポストの内容を説明してください。**

    このRedditの投稿は、Spring Bootの新しいバージョンである3.5.0が利用可能になったことを発表しています。
2.  **このポストに対するコメントのうち、特に興味深いものを教えてください。**

    この投稿に対するコメントの中で特に興味深いのは、**Spring Boot 3.5.0へのアップデートが、一部のライブラリとの互換性を壊す可能性があることを指摘しているコメント**です。具体的には、`springdoc-openapi`というライブラリ（Swagger/OpenAPIのドキュメント生成に使用）と、`hibernate enhance maven plugin`を使用しているアプリケーションが影響を受けているという報告があります。このコメントは、問題が発生した場合の解決策へのリンクも提供しており、他のユーザーにとって非常に役立つ情報を提供しています。


---

# Teaching data analytics has made me realize how much AI is eroding critical thinking skills.

**Upvotes**: 99



[View on Reddit](https://www.reddit.com/r/SQL/comments/1migcyr/teaching_data_analytics_has_made_me_realize_how/)

## ポストの内容の説明

この Reddit のポストは、データ分析を教えている投稿者（u/tits_mcgee_92）が、AI の利用が学生の批判的思考能力を低下させているのではないかと懸念している内容です。

具体的には、以下の点が語られています。

*   **授業での AI 利用:** 投稿者は、SQL とデータベースの基礎を教えており、AI の利用を推奨しつつも、思考を AI に依存しないように指導しています。しかし、最終的なプロジェクトで、AI に頼りきった学生が問題に直面する様子を観察しています。
*   **現実のデータ分析の難しさ:** 投稿者は、実際のデータ分析の現場では、問題が明確に定義されていないことが多く、批判的思考能力が重要であると強調しています。AI は、明確な質問に対する答えを出すことは得意ですが、曖昧な問題に対しては有効ではありません。
*   **学生の状況:** AI に頼りきった学生が、`GROUP BY` や `ORDER BY` といった基本的な SQL の概念を理解していなかったことに驚き、懸念を深めています。また、宿題の提出物で、文法的な誤りが AI 利用を示唆するケースや、不適切な情報をコピー＆ペーストしてしまうケースも見られるとしています。
*   **学校側の対応:** 投稿者は、AI の不正利用に対して、直接的な注意をすることが難しく、上長への報告が必要になる場合があること、また、誤った疑いをかけてしまうリスクがあることにも言及しています。
*   **結論:** 投稿者は、AI の台頭によって、学生の批判的思考能力が損なわれるのではないかと懸念し、同じような懸念を持つ人がいるのか Reddit で意見を求めています。

## コメントの中で特に興味深いもの

このポストへのコメントはいくつか興味深いものがありますが、特に以下のものが参考になります。

*   **40 upvotes のコメント:** 現実の SQL を使い始めた際の難しさについて語っています。授業での演習とは異なり、実際の現場では質問が曖昧で、AI では対応しきれないことが多いことを経験として語っています。投稿者のように、学生が批判的思考能力を養うための指導は重要であると述べています。
*   **16 upvotes のコメント:** データ分析の採用面接での AI 対策について語っています。AI では答えられないような問題をテストに出したところ、応募者のほとんどが解答できなかったという経験を紹介しています。これは、AI が浸透する中で、批判的思考能力がますます重要になっていることを示唆しています。
*   **11 upvotes のコメント:** AI の適切な活用方法について言及しています。AI を、概念の理解や構文の確認に利用することには価値があるものの、複雑なデータモデルの構築においては、AI に頼るとかえって非効率になる場合があることを自身の経験から語っています。
*   **6 upvotes のコメント:** 授業の構成に関する提案です。AI が苦手とするようなデータ分析の課題を授業の早い段階で提示することで、学生に「AI が使えない」という認識を持たせ、批判的思考能力を鍛えるための意識改革を促すというものです。


---

# how do you usually handle storing historical changes in a SQL database without making things a nightmare to query?

**Upvotes**: 48



[View on Reddit](https://www.reddit.com/r/SQL/comments/1mhxwf8/how_do_you_usually_handle_storing_historical/)

## ポストの内容の説明

この Reddit のポストは、SQL データベースにおける履歴データの保存方法に関するものです。投稿者は、プロジェクトで編集履歴やステータスの更新履歴などを保存する必要があり、効率的かつクエリしやすい方法を探しています。

投稿者は、バージョン管理や監査テーブルを検討したものの、複雑になりやすいと感じています。そして、現実世界でどのような方法が使われているのか、スナップショットの作成、履歴テーブルの分離など、具体的な実装方法について、その経験や意見を求めています。つまり、履歴データをどのように効率的に保存し、クエリできるかという課題について、他のユーザーからの知見を求めているのです。

## 特に興味深いコメント

投稿に対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **「Separate history tables」 (63 upvotes)**: 多くのユーザーから支持されており、履歴データを別のテーブルに格納するという、最も一般的なアプローチの一つを示唆しています。シンプルで分かりやすい解決策として、多くの人に支持されていることがわかります。

*   **「Check out slowly changing dimensions」 (47 upvotes)**: ゆっくり変化するディメンション（SCD）について言及しています。これは、データウェアハウスで履歴データを扱うための手法であり、変更のタイプに応じて、履歴データを効率的に保存できます。

*   **「SQL Server temporal tables is what we use...」 (24 upvotes)**: SQL Server の Temporal Tables を推奨しています。Temporal Tables は、履歴テーブルと現在のテーブルを自動的に管理し、クエリを容易にする機能を提供します。これにより、特定の時点のデータを取得したり、データの復元を行うことが容易になります。

*   **「SCD-2」 (9 upvotes)**: SCDの中でも、SCD Type 2 (SCD-2) について言及しています。これは、変更された属性の新しい行を作成し、以前の行を履歴テーブルに保存する手法です。履歴データの追跡に特化しています。

*   **「Is it a dimensional model? Or transactional? Do you need history of all changes to all data in all tables or just specific ones? I would start by defining real requirements first.」 (6 upvotes)**: 履歴データ保存方法を選択する前に、具体的な要件を明確にする必要があると指摘しています。これは、問題の本質を理解し、最適な解決策を見つけるために重要な視点です。


---

# What are some things in programming that seem simple, but are surprisingly painful to implement?

**Upvotes**: 322



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mi7nel/what_are_some_things_in_programming_that_seem/)

## 1. ポストの内容の説明

この Reddit のポストは、プログラミングにおける「一見簡単そうに見えるが、実装すると意外と苦労する」機能について議論するものです。

*   **投稿者は、テーブルのソート機能の実装を例に挙げています。** 一見単純な機能（列ヘッダーをクリックしてソート）に見えるものの、実際には多くのコードと複雑なロジックが必要になり、予想以上に苦労した経験を語っています。
*   **投稿者は、他のプログラマーに対して、同様に実装が難しいと思われる機能の例を尋ねています。** 具体的には、プログラミング初心者にとって特に難しいと感じる機能を求めています。

## 2. 特に興味深いコメント

このポストに対するコメントは、様々な種類の「一見簡単そうに見えるが、実は難しい」機能の例を挙げており、その中でも以下のものが特に興味深いと考えられます。

*   **マルチステップフォーム:** 投稿者と同様に、実装が複雑になりがちな機能として挙げられています。状態管理、動的なステップ変更、ブラウザの戻るボタンへの対応、バリデーション、デバッグ、そしてAPIエラーなど、多くの課題があることが詳細に説明されています。特に、最後のまとめ画面について「すべて1ページに収まるのでは？」という皮肉が面白く、共感を呼ぶポイントです。
*   **日付関連の処理:** プログラミングにおける日付の扱いの難しさを示唆しています。日付形式、タイムゾーン、うるう年、サマータイムなど、様々な要素が絡み合い、思わぬバグの原因となることがあります。
*   **検索バー:** 投稿者の笑いを含んだ表現が、検索バーの実装における複雑さへの皮肉を表しています。検索機能は一見単純ですが、高度な検索アルゴリズム、インデックスの最適化、ユーザーインターフェースなど、考慮すべき点が多岐にわたります。
*   **キャッシュ:** データの再利用を目的としたキャッシュですが、その利用方法によっては、データの鮮度や整合性の問題を引き起こす可能性があり、注意深く実装する必要があることが示唆されています。
*   **認証（Authentication）、SSO (Single Sign-On):** ユーザー認証は、セキュリティに関わる重要な要素であり、実装には高度な知識と注意が必要です。SSOの実装は、さらに複雑さが増します。


---

# The famous friend who makes websites

**Upvotes**: 91



[View on Reddit](https://www.reddit.com/r/webdev/comments/1migna5/the_famous_friend_who_makes_websites/)

## 1. ポストの内容の説明

このRedditの投稿は、ある26歳の男性（投稿者）が、自身の経験を語っています。彼はB2B企業で6年間働き、最初は営業として入社しましたが、徐々にデジタル部門の管理を任されるようになりました。しかし、その企業はデジタル化に対する意識が非常に低く、投稿者はWebサイトのリニューアルを提案するものの、経営陣は「知り合いの友人」に格安でWebサイト制作を依頼してしまいます。

投稿者は、プロのWeb制作会社に見積もりを依頼し、3つの提案をしました。しかし、経営陣は高額だと難色を示し、最終的に友人に1800ユーロでWebサイト制作を依頼しました。その結果、Webサイトは1年かけて制作され、古く、見栄えが悪く、整理されていないものになりました。さらに、経営陣はコピーライティングに対しても細かく口出しし、投稿者の自由な働きを妨げました。

投稿者は、この経験について、同じような経験をした人がいないか、または自分が間違っていないかを知りたいと述べています。

## 2. コメントの中で特に興味深いもの

*   **100 upvotes: (ウェブサイト制作のビジネスに関わっている人からのコメント)**: このコメントは、ビジネスオーナーがWebサイトの価値を過小評価している現状について言及しています。マーケティングには高額な費用をかける一方で、Webサイト制作は安価な素人に依頼してしまう傾向があると指摘しています。

*   **37 upvotes: (Webサイトの閲覧を希望するコメント)**: 投稿されたWebサイトを実際に見てみたいという、率直な興味を示したコメントです。Webサイトの具体的な問題点を評価する上で、参考になるかもしれません。

*   **19 upvotes: (Web制作をする側からの助言)**: 低予算でWebサイトを制作したい場合は、SquareSpace/Wix/Shopifyなどのサービスを利用することを勧めています。

*   **16 upvotes: (Web制作にかかった費用に対する疑問)**: 1800ユーロで1年間かけてWebサイトを制作したことに対して、その対価が少なすぎるのではないかという疑問を呈しています。

*   **9 upvotes: (Web開発者の視点)**: 質の低いWebサイトが、企業の印象を悪くすることを指摘し、なぜ適切な価格設定でWebサイトを制作する必要があるかを説明しています。


---

# AV laws are killing small websites, so I built a fake age verification popup in protest.

**Upvotes**: 160



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mi75ca/av_laws_are_killing_small_websites_so_i_built_a/)

## 1. ポストの内容の説明

このRedditの投稿は、**年齢確認法（AV laws）が小規模なWebサイトを圧迫していることに対する抗議**として、**偽の年齢確認ポップアップを開発した**という内容です。

**主なポイント:**

*   **問題提起:** 政府が、ソーシャルコンテンツや「成人向け」コンテンツへのアクセスにID確認を義務付ける法律を制定しつつあります。これらの法律は、小規模なサイト運営者や開発者にも適用され、高額な罰金が科される可能性があります。
*   **解決策（提案）:** 著者は、これらの法律に準拠するための努力をする一方で、小規模な開発者が問題に巻き込まれるのを防ぐために、実際に何も検証しない偽の年齢確認ポップアップを作成し、GitHubで公開しました。
*   **警告:** 著者は、このスクリプトが法的な問題を回避するものではないと警告しています。あくまで、法規制に対応するための準備をするまでの、一時的な手段として利用することを推奨しています。
*   **問題点の指摘:** 著者は、これらの法律が、
    *   オープンウェブと匿名性の破壊
    *   小規模なサイト運営者の犯罪者化
    *   個人情報漏洩のリスク増大
    *   インターネットの企業と監視国家への支配
    につながると訴えています。
*   **資料へのリンク:** 法に関する情報や、それに対する取り組みに関するリンクもGitHubリポジトリに掲載されています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **批判的なコメント:**
    *   **"Seems to me this would get you into more trouble than just saying “I didn’t realize my site needed age verification”" (187 upvotes)**: このスクリプトを使用することで、単に「年齢確認が必要だと知らなかった」と言うよりも、かえって問題が大きくなる可能性があると指摘しています。年齢確認の必要性を認識していながら、意図的にそれを回避していると見なされる可能性があるためです。
    *   **"In what world would this help anyone? You’re actually opening them up to significantly more harm because by faking the age verification you lose any capacity of claiming ignorance. This might as well be malware for business. You should delete this post and not share this with anyone at all." (91 upvotes)**: 偽の年齢確認は、実際にはより大きなリスクをもたらす可能性があり、無知を主張する余地を失わせると批判しています。
    *   **"Unfortunately as others have said, this is worse than doing nothing since you're demonstrating you know you need to verify ages but are intentionally not doing it." (35 upvotes)**: 投稿者が年齢確認の必要性を理解していながら、意図的にそれを行わないことを示しているため、何もしないよりも事態を悪化させる可能性があると指摘しています。また、ユーザーが偽の年齢確認に個人情報をアップロードすることに対する懸念も示しています。

*   **代替案の提案:**
    *   **"Nah, just switch your site over to single sign in and put it on them to verify. If their API has an option for the user wanting to see NSFW, that works best for checking age because they will need to comply too for that option to be true." (8 upvotes)**: シングルサインオン（SSO）を利用して、年齢確認を外部サービスに委ねる方法を提案しています。これにより、サイト運営者は年齢確認の責任を負わずに済みます。
    *   **"Age verification is nothing a site will do. There will be one (or a hand full) of those services that verify your age then you add them to your site and get an OK or NOT OK from them. Pretty much the same as with oauth through google or whatever. It probably will even be implemented in those. So you dont only get the "this user is authenticated with this account" but also an "is old enough for your shit"." (3 upvotes)**: 年齢確認サービスを利用し、OAuthと同様の方法で年齢認証を行う方法を提案しています。

---

# 35 seconds is fucking ridiculous

**Upvotes**: 168

![Image](https://i.redd.it/efpj2ewcx6hf1.png)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1mi771x/35_seconds_is_fucking_ridiculous/)

## ポストの内容の説明

このRedditのポストは、Next.jsのパフォーマンスに関する苦情を表明しています。タイトルにある「35 seconds is fucking ridiculous（35秒は冗談だ）」という表現から、Next.jsの特定の動作（おそらくビルド時間またはリクエスト処理時間）が非常に長く、不満を抱いていることがわかります。

## 特に興味深いコメント

以下に、特に興味深いコメントとその理由をいくつか挙げます。

*   **「I love whining about NextJS performance as much as anyone, but sometimes your code can actually be the problem. Just saying.（私もNextJSのパフォーマンスについて文句を言うのは好きだけど、時には自分のコードが問題の場合もあるよ。念のため。）」（200アップボート）:** これは、問題の原因をNext.jsのフレームワーク自体ではなく、ユーザー自身のコードに求める可能性を示唆しています。Next.jsのパフォーマンス問題は、しばしばコードの最適化不足や、不適切な設定が原因で発生することがあるため、非常に的を射たコメントと言えます。

*   **「It only for dev mode and for first request on that endpoint, right? Pls share the code, next version and server specs. It would be interesting to see what takes so many time.（これはdevモードと、そのエンドポイントへの最初のリクエストだけですよね？コード、Next.jsのバージョン、サーバーのスペックを教えてください。何にそんなに時間がかかっているのか見てみたいです。）」（42アップボート）:**  このコメントは、問題が特定の状況（開発モードや初回リクエスト）に限定される可能性があることを指摘し、問題解決のために、より多くの情報（コード、バージョン、サーバー環境）を求めています。詳細な情報がないと、問題の原因を特定することは難しいため、非常に建設的なアプローチです。

*   **「Queue the OP not replying to anyone, or being on an ancient version, or making easily preventable mistakes because they don't understand how Next.js works.（投稿者が誰にも返信せず、古いバージョンを使用し、Next.jsの仕組みを理解していないために簡単に防げる間違いをしている可能性が高い。）」（77アップボート）:** これは、多くのユーザーが経験する典型的な問題パターンを指摘しています。問題を報告するだけで、詳細な情報を提供しない、または古いバージョンのNext.jsを使用している、Next.jsの基本的な仕組みを理解していないといった場合、問題解決が困難になることが多いです。

*   **「Are you running in a docker container? NextJS is having major issues with a virtualized file system with a volume mount to a mac os file system(apple silicon). My first debugging suggestion is to run on bare metal and not in a container. Based on your logs, looks like docker compose.（Dockerコンテナで実行していますか？NextJSは、macOSファイルシステムへのボリュームマウントを使用した仮想ファイルシステムで大きな問題を抱えています（Appleシリコン）。最初のデバッグの提案は、ベアメタルで実行し、コンテナ内ではないことです。ログを見ると、docker composeを使用しているようです。）」（10アップボート）:**  これは、特定の環境（Dockerコンテナ、特にAppleシリコン搭載Macでの問題）に焦点を当てた具体的な問題を示唆しています。Docker環境特有の問題は、Next.jsのパフォーマンスに大きな影響を与える可能性があります。問題の原因を特定するための、具体的なアドバイスを提供しています。

*   **「I have the same problem. Mine is a monorepo with several packages. The first build takes about 18 seconds.（私も同じ問題を抱えています。私の場合は、いくつかのパッケージを持つモノレポです。最初のビルドに約18秒かかります。）」（8アップボート）:** これは、同様の問題を抱えている他のユーザーが存在することを示しています。モノレポ構造がビルド時間の長さに影響を与える可能性があることを示唆しています。


---

# Tech stack that i use as a solo developer

**Upvotes**: 82

![Image](https://i.redd.it/ap8fjheng5hf1.jpeg)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1mi2a8x/tech_stack_that_i_use_as_a_solo_developer/)

## ポストの内容の説明

このRedditのポストは、ソロ開発者が自身のプロジェクトで使用している技術スタック（Tech Stack）を紹介しています。投稿者は、複数のプロジェクトを構築した経験から、非常に生産的だと感じている技術の組み合わせを共有しています。具体的な技術スタックは以下の通りです。

*   **フレームワーク:** Next.js（App Routerを使用、Page Routerは使用しない）
    *   フロントエンドとバックエンドのロジックを統合し、Server Componentsによるパフォーマンス向上を評価しています。
*   **スタイリング:** Tailwind CSS + shadcn/ui
    *   ユーティリティファーストCSSの高速性と、美しくデザインされ、アクセス可能で、カスタマイズしやすいコンポーネントを組み合わせている点をメリットとしています。
*   **データベース:** Convex
    *   リアルタイムのサーバーレスバックエンドであり、APIレイヤーを不要にできる点、型安全性が高い点を評価しています。
*   **認証:** Clerk
    *   認証の複雑さを処理し、プリビルドコンポーネントとソーシャルログインにより開発時間を短縮できる点を評価しています。
*   **ホスティング:** Vercel
    *   Next.jsアプリとの親和性、CI/CDのシームレスさ、プレビューデプロイがクライアントからのフィードバックに役立つ点を評価しています。

投稿者は、自身の技術スタックを紹介した上で、他のユーザーにも彼らの現在のプロジェクトで使用している技術スタックを尋ねています。

## ポストに対する興味深いコメント

いくつかの興味深いコメントがあります。

*   **「How original」（58 upvotes）:** これは、この技術スタックが非常に一般的であるという意味を示唆しており、投稿者の選択が「革新的」というよりは「主流」であることを指摘しています。

*   **"Hello, I'm no one"（42 upvotes）:** 投稿文中の「(no one use the pages router)」という部分に対する皮肉な返信です。投稿者が「誰もPage Routerを使わない」と表現したことに対して、自分はPage Routerを使っているとユーモラスに返信しています。

*   **「Wasn't this a new video which listed exactly same thing...」（12 upvotes）:** この技術スタックに関するYouTubeビデオへの言及です。これは、投稿者の選択が、他の情報源でも推奨されている一般的な組み合わせであることを示唆しています。

*   **「I've settled on the same except...」（7 upvotes）:** 投稿者と似た技術スタックを使用しているユーザーのコメントです。Convex AuthやCapacitorの使用など、若干の差異を述べています。

*   **「This is what I call the "Corporate Stack"...」（6 upvotes）:** これは、投稿者が使用している技術が、一部の企業によって課金される傾向があるという批判的な意見です。これらの技術が、基本的な機能に対して高額な料金を請求していると解釈できます。

