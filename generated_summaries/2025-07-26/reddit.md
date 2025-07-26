
# Git Gud: Setting Up a Better Git Config

**Upvotes**: 48



[View on Reddit](https://www.reddit.com/r/devops/comments/1m95els/git_gud_setting_up_a_better_git_config/)

## 1. ポストの内容の説明

このRedditのポストは、Gitの設定 (`.gitconfig`) をより良くするための、様々なチューニング方法を紹介しています。 著者は、自身の経験に基づき、Gitの使用をより快適で生産的にするための設定方法を共有しています。 具体的には、以下の点について言及しています。

*   `git commit` でエディタにフルdiffを表示する
*   ブランチとタグを最終更新日時またはバージョン番号でソートする
*   `diff-so-fancy` を使用してdiffを見やすくする
*   `--set-upstream` を毎回入力しなくても済むように、upstreamリモートを自動設定する
*   Gitエイリアスとシェルエイリアスを使用してキーストロークを節約する
*   バックグラウンドメンテナンスを有効にしてリポジトリの肥大化を抑制する
*   GPG署名を使用してコミットに「Verified」バッジを表示する
*   rerere (再利用可能な解決) を有効にして、繰り返しのマージコンフリクトを自動解決する
*   エディタの調整、タイプミス修正、空白ハイライトなど、その他の追加機能

この投稿は、既にGitを使用している開発者が、Gitの設定をより自分のワークフローに合わせたい場合に役立つように設計されています。 著者は、読者に対して、自身が見逃した点や、お気に入りの`.gitconfig`の調整やエイリアスがあれば、共有してほしいと呼びかけています。

## 2. ポストに対するコメントのうち、特に興味深いもの

コメントの中で特に興味深いものは以下の通りです。

*   **「Nice! Will checkout the auto-setting upstream. That is so annoying.」 (2 upvotes)**
    *   `--set-upstream` オプションを毎回手動で入力する必要があることに対する不満を共有し、著者が提案した解決策に関心を示している点が興味深いです。 これは、多くのGitユーザーが共通して抱える問題に対する解決策を示唆していることを示しています。

*   **「Also setup your global gitignore files people. If I had a dollar for every time someone wanted to add .DS_Store to a repository gitignore!」 (4 upvotes)**
    *   .gitignoreファイルに関する重要なヒントを提供しています。特定のファイルやディレクトリ（例：.DS_Store）を誤ってリポジトリに追加してしまう問題は、多くの開発者が遭遇する可能性のある一般的な問題であり、このコメントは、その対策としてグローバルな.gitignoreファイルを設定することの重要性を強調しています。


---

# Forgot 'where'

**Upvotes**: 795

![Image](https://i.redd.it/9uw2ipv9jyef1.jpeg)

[View on Reddit](https://www.reddit.com/r/SQL/comments/1m8r1ip/forgot_where/)

## 1. ポストの内容の説明

このRedditのポストのタイトルは「Forgot 'where'」であり、SQLのUPDATE文で「WHERE」句を書き忘れてしまった状況を指していると考えられます。SQLのUPDATE文は、特定の条件（WHERE句で指定）に合致するレコードの値を更新するために使用されます。WHERE句を省略すると、データベース内のすべてのレコードが更新されてしまうという、非常に危険な事態を引き起こす可能性があります。このポストは、そのように重要な句を書き忘れた、またはその可能性のある状況について言及していると推測できます。

## 2. 特に興味深いコメント

このポストに対するコメントで特に興味深いものは以下の通りです。

*   **123 upvotes: If it wasn't supposed to happen, Jesus would have stopped my hand.**
    *   これは、ユーモラスな表現で、ミスが起きてしまったことに対する皮肉や諦めを表しています。SQLのミスは取り返しがつかない場合もあるため、ある種の共感を呼ぶ表現と言えるでしょう。
*   **144 upvotes: Ok, two solutions: ... 1) Proofread your queries before committing them. 2) Deactivated auto-commit, and use rollback. 3) Stop procrastinating on reddit.**
    *   具体的な対策を提案しているコメントです。1つ目はコードの確認を徹底すること、2つ目は自動コミットを無効にし、問題が起きた場合にロールバックできるようにすること、そして3つ目はRedditでの時間つぶしを控え、集中して作業することを促しています。実用的なアドバイスと、ユーモアを交えた表現が印象的です。
*   **41 upvotes: This is why you always write the where clause first for update statements, or at least put an empty where clause so it won’t be valid sql until you finish it.**
    *   UPDATE文を書く際の安全なコーディング方法を提案しています。WHERE句を最初に記述し、後から条件を追加することで、WHERE句を書き忘れることによるリスクを減らすことができます。
*   **21 upvotes: ROLLBACK! ROLLBACK? ROLLBACK :(**
    *   データベースの操作を取り消す「ROLLBACK」コマンドを呼びかけています。WHERE句を書き忘れた結果、誤ったデータ更新が行われた場合に、変更を元に戻すための重要な手段です。悲しそうな顔文字が、事態の深刻さを表しています。
*   **16 upvotes: One of my old coworkers did this to a live production database. Every customer's phone number became the same thing... Have a test environment everyone. Otherwise you're just one mistake away from needing to roll back to a backup**
    *   実体験に基づいたコメントで、WHERE句を書き忘れたことによる深刻な被害の例を挙げています。テスト環境の重要性を強調し、本番環境での誤った操作がいかに大きな問題を引き起こす可能性があるかを具体的に示しています。


---

# To the developers at CT.gov, FUCK YOU.

**Upvotes**: 137



[View on Reddit](https://www.reddit.com/r/webdev/comments/1m95suf/to_the_developers_at_ctgov_fuck_you/)

1.  **このポストの内容の説明**

    このRedditの投稿は、CT.gov (コネチカット州のウェブサイト) の開発者に対する怒りを表明しています。投稿者は、失業保険の申請手続きが困難である上に、パスワードの変更を強制されることに不満を感じています。投稿には、パスワードの要件を示すスクリーンショット画像が添付されており、パスワードが特定の文字で始まる必要があることなどが示されています。投稿者は、パスワード変更の必要性が手続きを更に複雑にしていると訴えています。

2.  **特に興味深いコメント**

    *   **「Must start with a letter? Why is that I genuinely wonder...」 (154 upvotes)**: パスワードが文字で始まる必要があるという要件に対する疑問を表明しています。なぜそのような制約があるのか、その理由を知りたいというシンプルな問いかけは、多くのユーザーの共感を呼んでいます。
    *   **「Shit like this isn’t helpful at all it just narrows down the search if ever a brute force was done against their hashes lmao」 (53 upvotes)**: パスワードの複雑さに関する要件が、実際にはセキュリティを低下させる可能性があるという意見です。パスワードの制限は、ブルートフォース攻撃を容易にする可能性があると指摘しています。
    *   **「NIST password guidelines: - minimum length, no maximum length (for security reasons, a maximum length for practical concerns such as server resources is allowed) - prefer blocklists, password generators, and rate limiting over character complexity requirements」 (24 upvotes)**: NIST (National Institute of Standards and Technology: 米国国立標準技術研究所) のパスワードに関するガイドラインを引用し、パスワードの複雑さよりも、長さやブラックリスト、パスワードジェネレータ、レート制限を重視すべきであると指摘しています。これは、投稿者の不満に対する技術的な裏付けを与え、より洗練された議論を促しています。
    *   **「As someone that has worked on countless .govs, I can tell you 2 things: 1. It's not our decision. We're just following the spec. 2. We hate it just as much as (if not more than) you do.」 (11 upvotes)**: 政府系のウェブサイトの開発者として、パスワード要件が開発者の決定ではなく、仕様に基づいていることを説明しています。また、開発者自身もユーザーと同様に、このような要件に不満を感じていることを示唆しています。これにより、技術的な制約と、開発者のジレンマが示されています。


---

# My manager and my senior DevOps guy wanted me to "hide" the api link and key in frontend?

**Upvotes**: 428



[View on Reddit](https://www.reddit.com/r/webdev/comments/1m8wcsr/my_manager_and_my_senior_devops_guy_wanted_me_to/)

## ポストの内容の説明

このRedditの投稿は、Reactフロントエンドインターンが、上司とDevOpsの先輩からAPIのリンクとキーをフロントエンドで「隠す」ように指示されたことについて困惑している内容です。

投稿者は、フロントエンドで実装されたものは、ブラウザの開発者ツール（NetworkタブやSourcesタブ）から誰でも見れるため、APIキーを隠すことは不可能ではないかと疑問に思っています。オンラインで調べた結果、多くの開発者も同様の見解を示しているようです。

投稿文は、APIキーを隠すことに関する混乱を説明するために、具体的な流れを追記しています。

-   **現状の流れ:** フロントエンドからのリクエスト -> バックエンドが`data`と`session_id`を返す
-   **DevOpsの希望:**
    -   ネットワークタブで`session_id`を表示しない、または暗号化する
    -   ソースタブにAPIのリンクを表示しない
    -   以前にAPIキーをリクエストで送信しないように指示された

## 興味深いコメント

この投稿に対するコメントは、APIキーを隠す方法について、いくつかの重要なポイントを指摘しています。

1.  **バックエンドプロキシ:** APIキーを隠すための最も一般的な方法は、バックエンドをプロキシとして使用することです。フロントエンドはバックエンドのエンドポイントにリクエストを送信し、バックエンドがAPIキーを使用して実際のAPIを呼び出し、その結果をフロントエンドに返します。これにより、APIキーがフロントエンドに直接公開されることを防ぎます。
2.  **認証とアクセストークン:** ユーザーをログインさせ、アクセストークンを付与することで、APIへのアクセスを制御することができます。アクセストークンは、特定のAPIエンドポイントを呼び出す権限を付与します。
3.  **フロントエンドの限界:** フロントエンドでAPIキーを完全に隠すことは不可能であるという認識が重要です。フロントエンドに存在するものは、最終的にユーザーがアクセスできる可能性があります。
4.  **例外:** Google MapsなどのAPIのように、バックエンドから呼び出すことができないAPIキーは、保護が難しい場合があります。


---

# Anyone else feel like AI is not really helping devs, its just giving clients delusions?

**Upvotes**: 540



[View on Reddit](https://www.reddit.com/r/webdev/comments/1m8uysx/anyone_else_feel_like_ai_is_not_really_helping/)

## ポストの内容の説明

このRedditの投稿は、**AIが開発者にとって本当に役立っているのか、それともクライアントに誤った認識を与えているだけなのか**、という疑問を提起しています。

投稿者は、クライアントがAIのデモンストレーションを見て、「AIを使ってサイトを構築できないか？」というような安易な要求をしてくることに不満を感じています。具体的には、

*   クライアントはAIが非常に短期間で高度な機能を実装できると誤解し、開発者に過度な期待を押し付けてくる。
*   AIが生成したコードは、レイアウトの崩れ、誤ったプロパティ、意味不明なコードなど、多くの問題を含んでいることが多く、結局は開発者がそれらを修正しなければならない。
*   AIはまだ「次のAirbnb」のような複雑なプロジェクトに対応できるレベルにはなく、開発者の負担を増やす可能性が高い。

投稿者は、AIはあくまで補助的なツールであり、開発者の役割を完全に置き換えるものではないと考えています。そして、クライアントの誤解や過度な期待が、開発者の作業効率を低下させ、結果的にプロジェクトの質を損なう可能性を指摘しています。

## 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「もしそんなに簡単なら、彼らはあなたを必要としない。彼ら自身で試させて、十分になったら電話をかけてもらえばいい。」** （227 upvotes）
    *   このコメントは、クライアントのAIに対する誤解が甚だしい場合、開発者は無理に説明したり、対応したりするのではなく、クライアント自身にAIを試させて、その困難さを理解させるという、ある種の戦略を提案しています。

*   **「クライアントは派手なデモを見て、生成されたコードのアーキテクチャ設計、デバッグ、テスト、メンテナンスが必要であることを理解していない。」** （38 upvotes）
    *   AIが生成したコードの品質問題や、その後のメンテナンスにかかるコストなど、クライアントが軽視しがちな側面を指摘しています。

*   **「コーディングの知識があり、AIをいつ使うべきか（定型コード、変換タスク、対応表など）を知っていれば、生産性を向上させることができるが、すべてにAIを使おうとすると、実際には妨げになる。」** （134 upvotes）
    *   AIを効果的に活用するためには、開発者自身の知識と経験が不可欠であると述べています。AIはあくまで補助的なツールであり、万能ではないことを強調しています。

*   **「LLMが実際にAIであると主張することは、人々を本当に騙している。それはAI全体の一部に過ぎない。それはテキストを理解するが、コードのロジックをうまく実行できず、構築しているもののコンテキストを保持することもできない。」** （96 upvotes）
    *   LLM（大規模言語モデル）の限界を明確に指摘し、AI技術の過度な期待に対する警鐘を鳴らしています。さらに、経営者がコスト削減のためにAIを過信し、結果的にビジネスを損なう可能性にも言及しています。


---

# Change My Mind: AI Is Worse For Devs Than Social Media Is To Gen Pop

**Upvotes**: 126



[View on Reddit](https://www.reddit.com/r/webdev/comments/1m90p8v/change_my_mind_ai_is_worse_for_devs_than_social/)

## 1. ポストの内容の説明

このポストは、AIが開発者（devs）にとって、ソーシャルメディアが一般の人々（Gen Pop）に与える影響よりも悪い影響を与える可能性があるという意見を表明しています。 投稿者は、AIが開発者に次のような悪影響を及ぼすと主張しています。

*   **依存性の助長:** AIは、開発者がより多くの成果を上げ、進歩しているように「感じさせる」ことでドーパミンを分泌させ、一方で問題解決や深い思考力を奪い、創造性を抑制し、指示に従うだけの存在にしてしまう。
*   **根本的なスキルの衰退:** 投稿者は、AIが開発者の思考力を鈍らせ、5年後には「独立した思考」が最も価値のあるスキルになると予測しています。

投稿者は、AIが「JSONオブジェクトの生成」のような単純なタスク以外には使用を避け、その影響を最小限に抑えるべきだと主張しています。

## 2. 興味深いコメント

以下に、特に興味深いコメントをいくつか紹介します。

*   **高レベルの教育関係者からのコメント（116 upvotes）:** このコメントは、AIが開発者の基礎的な理解を損なう可能性を指摘しています。 具体的には、AIが誤った答え（例えば、6 x 8 = 52）を提示した場合、開発者がその誤りに気づくことができなくなるかもしれない、という問題点を提示しています。

*   **AIを「アドバイザー」として利用する考え方（22 upvotes）:** このコメントは、AIを完全に信頼するのではなく、「アドバイザー」として利用し、最終的な判断は開発者自身が行うべきだと主張しています。 また、優れた開発者はAIが生成したコードを理解し、その品質を評価できると述べています。

*   **技術の進化への適応を促す意見（75 upvotes）:** このコメントは、AIに対する懸念は、過去の技術革新に対する懸念と同様のものであると指摘しています。 過去には、特定の書籍やオンラインリソースの使用、学位の有無などに対して批判がありましたが、技術の進化とともにその価値観も変化しました。 コメント主は、AIを適切に活用しつつ、自身のスキルを維持することが重要だと述べています。

*   **AIを教育ツールとして捉える考え方（4 upvotes）:** このコメントは、AIを単なる答えを得るためのツールではなく、理解を深めるためのツールとして捉えるべきだと主張しています。 質問の仕方や、なぜその答えが導き出されたのかを理解することが重要であり、AIは他のリソースへのアクセスを支援する役割を果たすとしています。

*   **AIによる価値向上を期待する意見（11 upvotes）:** このコメントは、AIによって「思考力を使わない」開発者が増えることで、より高度な問題解決能力を持つ開発者の価値が高まると主張しています。 AIの登場によって、開発者間の役割分担が進み、それぞれが自身の得意分野に集中できるようになる可能性があるという視点です。


---

# The Hater's Guide To The AI Bubble

**Upvotes**: 122



[View on Reddit](https://www.reddit.com/r/webdev/comments/1m8xqs7/the_haters_guide_to_the_ai_bubble/)

## 1. ポストの内容の説明

この Reddit のポストは、AIバブルの持続可能性について懐疑的な見解を示しています。投稿者は、長文のブログ記事を読み、その内容を要約した上で、AI技術への投資が将来的に持続可能ではない可能性を指摘しています。

**主な論点:**

*   **コストと収益のギャップ:** AI技術の開発には莫大なコストがかかる一方、現在の収益はそれに見合っていない。
*   **FAANGとNvidiaの関係:** FAANG企業（Facebook、Apple、Amazon、Netflix、Googleなど）とNvidiaの関係が、AIバブルの重要な側面であり、バブル崩壊時には大きな影響を与える可能性がある。
*   **LLMの収益化の難しさ:** 大規模言語モデル（LLM）は、収益化までに多額の投資が必要であり、個々のユーザーからの収益は限定的である。
*   **持続可能性への疑問:** AI技術の収益化には長い年月がかかり、継続的な運営コストも高額であるため、現在の投資モデルは持続可能ではない可能性がある。
*   **代替企業の可能性:** AIバブル崩壊後、現在の巨大企業に対抗できる代替企業に投資する機会が生まれる可能性がある。

投稿者は、AI技術の現状を批判的に捉え、その経済的な持続可能性に疑問を呈しています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「Sheesh. I know that a cost -> revenue delta is common in early-stage tech but those numbers are nuts. Also good callout on the incestuous relationship between FAANG and Nvidia. When the bubble pops, it will immediately vaporize a huge proportion of the US stock market's value.」** (70 upvotes): 初期段階のテクノロジーではコストと収益の差はよくあることだが、AIバブルの数字は異常であると指摘。FAANGとNvidiaの密接な関係にも言及し、バブル崩壊時の市場への影響を懸念しています。

*   **「It's a game of poker crossed with a tower of cards. They invested so much, and the moment one of the big players folds, it will all come crashing down.」** (16 upvotes): AI技術への巨額投資が、ポーカーとトランプタワーに例えられ、主要プレイヤーの撤退が連鎖的な崩壊を招く可能性を示唆しています。NvidiaとAMDの役割と、LLMの収益化の難しさについても言及しています。

*   **「The entire AI movement is speculative on the idea that eventually it will replace a lot of human labor. Most would agree that this hasn't come to pass yet. So the current revenue numbers obviously do not justify any of the investment.」** (7 upvotes): AI技術が最終的に人間の労働を代替するという期待に基づいており、現在の収益が投資に見合っていないと指摘。労働力代替の実現可能性は、今後の研究開発に依存し、現時点では推測の域を出ないと述べています。

*   **「wallstreet's obsession with growth at all costs is really what this is. tech supplies the hype/buzz, wallstreet provides the capital, nobody cares if it actually works or provides value. it's really about providing a facade for investors/capital to invest in (e.g., it's more about selling hype than selling a sustainable or profitable business) eventually this economic model is going to fail. growth for all time/all the things is not sustainable.」** (16 upvotes): ウォール街の「成長至上主義」がこの状況を引き起こしていると分析。テクノロジーが誇大広告を供給し、ウォール街が資金を提供する構図であり、実際の価値や持続可能性よりも、投資家を惹きつけるための「見せかけ」が重視されていると指摘しています。この経済モデルの限界と、永遠の成長の不可能性を訴えています。


---

# open source next.js better-auth admin panel

**Upvotes**: 41



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1m942ew/open_source_nextjs_betterauth_admin_panel/)

## 1. このポストの内容の説明

このRedditの投稿は、Next.js、Better Auth (認証ライブラリ)、PostgreSQL (データベース) を組み合わせた、管理者向けダッシュボード付きのオープンソーススターターキットを紹介しています。

具体的に含まれる機能は以下の通りです。

*   **認証機能:**
    *   メールアドレスとパスワードによるログイン
    *   GitHubとGoogleアカウントでのソーシャルログイン
    *   アカウントの連携
    *   メールアドレスの確認 (Resendを使用)
*   **アクセス制御:**
    *   ロールベースのアクセス制御
    *   管理者向けプラグイン
*   **管理者向けダッシュボード:**
    *   ユーザーの表示と追加
    *   ユーザーのBAN/UNBAN (有効期限付き)
    *   ロールの管理
    *   セッションの取り消し
    *   ユーザーの削除

投稿者は、このスターターキットを自身のプロジェクトで使用しており、MVP (Minimum Viable Product)、SaaS製品、クライアントプロジェクトに最適であると述べています。GitHubのリンクが提供されており、利用者はコードをフォークして自身のプロジェクトに利用できます。

## 2. このポストに対するコメントのうち、特に興味深いもの

この投稿には、コメントがありません。

