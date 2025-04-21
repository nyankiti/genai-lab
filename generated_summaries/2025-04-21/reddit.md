
# I have developed a full website for practice SQL for everyone

**Upvotes**: 84



[View on Reddit](https://www.reddit.com/r/SQL/comments/1k3ind1/i_have_developed_a_full_website_for_practice_sql/)

## ポストの内容の説明

このRedditのポストは、SQL学習用のウェブサイトを開発したユーザーが、そのウェブサイトを紹介し、フィードバックを求めているものです。

*   **開発者の意図:** SQL学習を始めた頃に欲しかったウェブサイトを自作した。SQLZOOやSQLBOLTを参考に、より良いものにしたいと考えている。
*   **ウェブサイトの特徴:**
    *   SQLの練習ができる。
    *   AIチャットボットによる質問対応機能がある。
    *   URL: [https://sqlsnake.com](https://sqlsnake.com)
*   **注意点:**
    *   モバイルサポートはなし。
    *   既知のバグとして、画面回転時にモバイル表示されてしまうことがある。
*   **目的:** ユーザーからの正直なフィードバックを得て、ウェブサイトを改善したい。

## 特に興味深いコメント

いくつかのコメントがウェブサイトについて具体的な意見を述べており、開発者にとって役立つ情報を含んでいます。

*   **モバイルサポートに関するコメント:** モバイルサポートがないことへの懸念を表明するコメントがあり、モバイル環境でのユーザーエクスペリエンスへの影響を指摘している。このコメントは、モバイルユーザーを逃す可能性があるという問題点を指摘しています。
*   **他の学習サイトとの比較:** SQLBoltとの比較において、どのような点が優れているのかという質問があり、競合との差別化について疑問を呈しています。
*   **ナビゲーションと問題の難易度に関するコメント:** ページごとのナビゲーションや問題の易しさ、1つのトピックに1つの演習しかない点について、改善の提案がされています。
*   **高度なSQL機能に関するコメント:** ストアドプロシージャ、トリガー、関数などの高度なSQL機能に関する演習が追加されているかどうかの質問があり、より高度な学習ニーズへの対応について言及しています。
*   **サンプルコードの整合性に関するコメント:** JOINの例で使用されているテーブルの定義に誤りがあるという指摘があり、コンテンツの正確性について言及しています。


---

# Why do websites still restrict password length?

**Upvotes**: 393



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k3in2d/why_do_websites_still_restrict_password_length/)

## ポストの内容の説明

Redditの投稿者は、ウェブサイトがパスワードの最大長を制限している理由について疑問を抱いています。投稿者は、長いランダムなパスワード（50文字）を使用したいと考えていますが、多くのサイトで20文字以下に制限されることに不満を持っています。

投稿者は、その理由として2つの可能性を挙げています。

1.  **単なる設計の不備**: 特別な理由もなく、パスワードの長さを制限している。
2.  **プレーンテキストでのパスワード保存**: パスワードをハッシュ化していないため、パスワードの長さに制限がある。

投稿者は、前者の可能性が高いと考えていますが、他の理由があるのか、もしあれば正当な理由があるのかを知りたいと思っています。

## コメントのうち特に興味深いもの

この投稿に対するコメントの中で、特に興味深いものは以下の通りです。

*   **最も多くの支持を得たコメント (634 upvotes):** このコメントは、パスワード長制限に関する誤解を解き、いくつかの技術的な詳細を説明しています。
    *   **データベースとの関係:** パスワード長の制限は、データベースのデータ量とは関係ない。ハッシュ化アルゴリズムは、入力の長さに関わらず、固定サイズの出力を生成する。
    *   **DDoS攻撃対策との関係:** パスワード長制限は、DDoS攻撃を防止するためではない。ウェブサーバーは、リクエストのサイズを制限する設定があり、認証エンドポイントはレート制限で保護されている。
    *   **Bcryptの「難易度」との関係:** Bcryptの「難易度」を変更しても、弱いパスワードを推測されにくくする効果はない。
    *   **実際の理由:** パスワード長制限の主な理由は、パスワードハッシュ化アルゴリズムが入力の長さに制限を持っていること。多くのBcrypt実装では、最大50文字程度に制限されている。または、開発チームが怠惰である可能性もある。
*   **113 upvotesのコメント:** パスワード長を制限すること自体は良いが、1000文字のように非常に長く制限するべきであり、20文字に制限するのは不適切であるという意見。
*   **38 upvotesのコメント:** 一部のハッシュ化アルゴリズム（例：bcrypt）は、入力文字数に上限がある。Bcryptは最初の72バイトのみをハッシュ化する。ソルト（通常16〜32バイト）を追加するため、bcryptを使用する場合は、制限を考慮する必要がある。
*   **22 upvotesのコメント:** 登録時に長いパスワードを受け入れるが、内部で切り捨て、ログイン時に切り捨てられたパスワードを考慮せず「パスワードが間違っています」と表示するウェブサイトの例。
*   **15 upvotesのコメント:** 一部のハッシュ化方法（例：bcrypt）は、Xバイト以上の入力を受け付けないため、パスワード長制限が必要になる場合がある。20文字に制限するのは不合理だが、一般ユーザーにとっては20文字でも十分長い場合があり、登録やパスワード忘れ時の手間を減らすために制限している可能性もある。


---

# I started my website with "npm create vite@latest", not knowing the difference between SPA and SSG. Now I don't know what to do.

**Upvotes**: 35



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k3r5vo/i_started_my_website_with_npm_create_vitelatest/)

## ポストの内容の説明

このポストは、ウェブ開発初心者である投稿者が、Reactを使ってSPA (Single Page Application)のウェブサイトを作成したものの、そのウェブサイトの読み込み速度が遅いことに気づき、解決策を探しているという内容です。

投稿者は、

*   ゲーム開発出身でウェブ開発は初心者であること。
*   `npm create vite@latest`を使ってReactでウェブサイトを構築したこと。
*   ウェブサイトで多くのプロジェクトやページを作成し、バックエンド開発も始めたこと。
*   ウェブサイトの読み込みに1秒ほどかかり、接続が悪いせいだと思っていたこと。
*   SSR (Server Side Rendering)について知り、SPAではSSRができないことに気づいたこと。
*   Next.jsやAstroへの移行を検討していること。

などを説明しています。最終的に、何が最善の解決策なのかわからず、他の人に助言を求めています。また、Reactを使っていることを追記しています。

## ポストに対する興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **SSRに関するViteのドキュメントの紹介 (34 upvotes):** Vite自体がSSRをサポートしているため、Next.jsなどに移行しなくても、Viteの設定を変更することでSSRを試せる可能性を示唆しています。具体的なURLも提示し、すぐに試せるようにしています。
*   **ボトルネックの特定と修正 (31 upvotes):** 読み込み速度が遅い原因を特定するために、ネットワークタブでの分析や、ブラウザでのプロファイリングを提案しています。フレームワークの変更ではなく、問題の根本原因を特定し、修正することを推奨しています。
*   **Suspenseと階層構造の利用 (62 upvotes):** SSRではなくても、Suspenseを活用してコンテンツのロード順序を調整することで、体感速度を改善できる可能性を示唆しています。
*   **Lazy Loadingとコード分割 (18 upvotes):** 読み込み速度を改善するための別の方法として、コード分割（Code Splitting）を提案しています。Lazy Loadingや`@loadable/component`を使って、必要なコードだけをロードすることで、初期の読み込み時間を短縮できる可能性があります。


---

# I made Google Docs but for Web Development

**Upvotes**: 301

![Image](https://i.redd.it/dbph3xc3kwve1.gif)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1k3crcb/i_made_google_docs_but_for_web_development/)

## 1. ポストの内容の説明

このポストは、CodeCaféというWeb開発者向けのブラウザベースのコラボレーションコードエディタを紹介しています。

*   **CodeCaféの概要:**
    *   VS CodeやReplitにインスパイアされた、ダウンロードやサインアップ、セットアップが不要なWebアプリケーションです。
    *   リンクを開くだけで、すぐに共同でコーディングを開始できます。
    *   **技術スタック:**
        *   フロントエンド: React + TypeScript
        *   バックエンド: Spring Boot
        *   リアルタイム編集: Redisと独自のOperational Transformationシステム
*   **開発の動機:**
    *   地元のサマースクールがGoogleドキュメントでコーディングを教えているのを見て、Googleドキュメントのシンプルさを活かしつつ、実際にコードを書いて実行できるツールを作りたいと考えた。
*   **情報:**
    *   GitHubリポジトリへのリンク: [github.com/mrktsm/codecafe](http://github.com/mrktsm/codecafe)
    *   Webアプリケーションへのリンク: [codecafe.app](http://codecafe.app)

## 2. 特に興味深いコメント

この投稿へのコメントの中で、特に興味深いものをいくつか挙げます。

*   **「Well, I hope you share your app with that summer school, cus that’s your audience. (53 upvotes)」:**  CodeCaféのターゲット層として、投稿者が着想を得たサマースクールを具体的に提案しており、CodeCaféの潜在的な利用者を明確に示唆しています。
*   **「Congratulations, sounds like a great idea. In my opinion keeping it free with enterprise licensing is the way to go. I think with the introduction of AI to the coding world, true real time collaboration is inevitable. (11 upvotes)」:**  CodeCaféのアイデアを評価し、無料での提供とエンタープライズライセンスというビジネスモデルを提案しています。AIの進化と共に、リアルタイムコラボレーションの重要性が増すという将来性にも言及しています。
*   **「You should repackage this as an app and introduce temporary environments or you should integrate some popular tutorials on Udemy or Youtube and promote this as a learning resource. (8 upvotes)」:** CodeCaféの機能拡張と、学習リソースとしての活用を提案しています。アプリ化や、チュートリアルの統合は、ユーザーの増加に繋がる可能性があります。
*   **「How much does the infrastructure cost you? (14 upvotes)」:** CodeCaféのインフラコストに関する質問は、技術的な関心と、プロジェクトの持続可能性への懸念を示唆しています。
*   **「I see this has a lot of potential (3 upvotes)」:**  CodeCaféの将来性を高く評価するシンプルなコメントです。


---

# Is anyone building an even-better-auth?

**Upvotes**: 106

![Image](https://i.redd.it/8kcdomu1a0we1.jpeg)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1k3oo0i/is_anyone_building_an_evenbetterauth/)

1.  **このポストの内容の説明**

    このRedditの投稿は、誰かが「より良い認証（auth）」システムを開発しているか、あるいは開発を検討しているかについて尋ねています。「even-better-auth」という表現から、既存の認証システムよりもさらに優れたものを求めていることがわかります。 投稿者は、認証システムの改善に関心があるようです。

2.  **興味深いコメントの解説**

    *   **"Someone should just make the-best-auth and just win forever." (29 upvotes)**:
        このコメントは、究極の認証システムを開発すれば、競合他社を圧倒し、長期的に成功できるという考えを示しています。 "the-best-auth"という表現が、最高の認証システムに対する願望を表しています。

    *   **"no need, it's already better." (45 upvotes)**:
        このコメントは、既存の認証システムが既に優れているため、新しいものを作る必要はないと主張しています。 どのシステムを指しているかは明確ではありませんが、このコメントは、既に十分なクオリティを持つ認証システムが存在するという意見を表しています。

    *   **"Better then AuthJS?" (17 upvotes)**:
        このコメントは、既存の認証システムであるAuthJSと比較し、それよりも優れているか疑問を呈しています。 AuthJSがすでに優れた認証システムとして認知されていることを示唆しています。

    *   **その他**:
        "moar-better-auth" (8 upvotes) や "even-much-better-auth" (7 upvotes) のようなコメントは、単に「もっと良い認証」という願望を表現したもので、ユーモラスなニュアンスが含まれています。

