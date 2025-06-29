
# GetDate()

**Upvotes**: 111



[View on Reddit](https://www.reddit.com/r/SQL/comments/1lmbkbb/getdate/)

## 1. ポストの内容の説明

この Reddit のポストは、投稿者が Reddit に参加して 7 年が経過したことを記念して投稿されたものです。

*   **お祝いの言葉:** 投稿者は、r/SQL コミュニティが唯一の非攻撃的なコミュニティであると感謝の意を表しています。
*   **SQL コードの記述:** 投稿文には、SQL コード `select cast(getdate() as date) as AGoodDay` が含まれています。これは、現在の日付を「AGoodDay」という名前で返す SQL クエリです。投稿者がプログラマーであり、SQL に精通していることを示唆しています。
*   **「Cake Day」の言及:** 投稿者がRedditに登録した記念日である「Cake Day」を祝う投稿です。

## 2. 特に興味深いコメント

このポストに対するコメントで、特に興味深いものは以下の通りです。

*   **コメント1:** 25 upvotes: "Unlike a CROSS JOIN with drama, this community's INNER JOINed with wisdom ;) happy cake day."
    *   これは SQL 用語（CROSS JOIN、INNER JOIN）を使って、コミュニティの質を表現した秀逸なコメントです。 CROSS JOIN は、ドラマや不要な情報を連想させ、 INNER JOIN は知恵と知識を連想させます。ケーキデーのお祝いも兼ねており、ユーモアがあり、コミュニティへの愛着が感じられます。
*   **コメント4:** 4 upvotes: "Every day is a good day? /s Happy to have you here (:"
    *   SQL クエリ `select cast(getdate() as date) as AGoodDay` に関連して、「毎日が良い日」という解釈を提示し、皮肉（/s）を交えて表現しています。投稿者への祝福の言葉も含まれています。
*   **コメント5:** 3 upvotes: "SELECT 'You''re welcome!' as Acknowledgement"
    *   SQL の SELECT 文を使って、投稿者への感謝に「どういたしまして」と返答するコメントです。これも SQL の知識を活かした、機知に富んだコメントです。


---

# What's a performance bottleneck that surprised you when you found it?

**Upvotes**: 42



[View on Reddit](https://www.reddit.com/r/webdev/comments/1lmxf2j/whats_a_performance_bottleneck_that_surprised_you/)

## 1. ポストの内容の説明

このRedditのポストは、パフォーマンスのボトルネック（アプリケーションやシステムで、処理速度を遅らせる原因となっている部分）について、ユーザーが発見した意外な事例を共有し合うものです。

**投稿者（OP）は、自身の経験として、**

*   アプリケーションのロード時に、多数の小さな（そしてインデックスが設定された）クエリを実行すると、かなりの時間がかかることに気づいた。
*   クエリの回数を減らすようにアプローチを変更したところ、パフォーマンスが大幅に改善された。

**そして、他のユーザーにも、**

*   「皆さんが見つけたパフォーマンスのボトルネックは何ですか？」と質問している。

つまり、このポストは、パフォーマンスチューニングに関する経験談を共有し、互いに学び合うための呼びかけであると言えます。

## 2. 特に興味深いコメント

このポストに対するコメントは、様々な種類のパフォーマンスボトルネックについて言及しており、それぞれ興味深い点があります。以下にいくつかピックアップします。

*   **77 upvotes: JavaScriptエンジンのシングルスレッド**
    *   JavaScriptエンジンがすべてを1つのスレッドで実行するため、コードの実行量が多いほどUIが遅くなり、簡単に並列化できないという問題点を指摘しています。Web開発における根本的な制約を示唆しており、UIパフォーマンスに大きな影響を与える可能性があります。
*   **44 upvotes: パスワードクラッキングにおける出力のコスト**
    *   1990年代に`/etc/passwd`のブルートフォースツールを作成した際の経験談です。文字列の表示（出力）にかかるコストが、実際の暗号化とマッチングのテストよりもずっと大きかったことに気づき、ファイルに出力することで速度が劇的に向上したという事例です。これにより、ツールの設計における出力の重要性を理解したというエピソードが語られています。
*   **22 upvotes: MongoDBの検索**
    *   MongoDB（NoSQLデータベース）で、数百万件のドキュメントから検索を行う際に、パフォーマンス上の課題が発生する可能性があることを指摘しています。大規模データにおける検索の最適化の重要性を示唆しています。
*   **22 upvotes: CSSの `backdrop-filter: blur`**
    *   CSSの`backdrop-filter: blur`プロパティが、特に低スペックの環境でウェブページのパフォーマンスを著しく低下させる可能性があることを指摘しています。開発環境では問題なくても、ユーザー環境で問題が発生する場合があり、メディアクエリによる制御も難しいという問題点を示唆しています。GPUの品質をJavaScriptで検出し、CSSの使用を制御する必要があるという解決策についても触れられています。
*   **14 upvotes: ブラウザにおける描画の限界**
    *   ブラウザが一度に描画できる要素数には制限があり、その限界に近づくとパフォーマンスが低下すること、そして、オフスクリーンでの事前レンダリングでも問題が起こりうることを指摘しています。また、ブラウザが特定のTLD（トップレベルドメイン）に対して行える同時接続数にも制限があり、これが複数のタブにまたがって影響する場合もあることを示唆しています。一方、Canvas APIは非常に高性能であるという点も言及されています。


---

# Built a browser piano for your numpad with vanilla JS and HTML

**Upvotes**: 131

![Image](https://i.redd.it/ry77hz7hxn9f1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1lmltbi/built_a_browser_piano_for_your_numpad_with/)

## 1. ポストの内容の説明

このRedditのポストは、プログラマーが作成した、NumPad（テンキー）を使って演奏できるブラウザピアノについて紹介しています。投稿者は、キーボードをピアノの鍵盤のように使えるようにするウェブアプリケーションを、バニラJS (JavaScript)とHTMLを使って開発しました。投稿文には、キーボードをピアノに変えたいと思ったことはありますか？という問いかけがあり、このウェブアプリケーションがその願いを叶えるものであることを示唆しています。

## 2. ポストに対する興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **高い評価を得たコメント:** 多くのユーザーから支持を得ているコメントとして、**曲の楽譜が一緒に表示されていること**を評価する声があります。これは、初心者でも簡単に演奏を楽しめるようにするための工夫として高く評価されています。
*   **リンクの共有:** 投稿されたブラウザピアノへの**リンク**が共有されています。実際に試してみたいユーザーにとって、非常に役立つ情報です。
*   **肯定的なフィードバック:** プロジェクトを「楽しい」と評価する声や、開発者を「developer」と称賛し、プロジェクトを「cool」と表現するコメントが見られます。これらのコメントは、プロジェクトへの肯定的な評価を示しています。
*   **機能に関するフィードバック:** 一部のユーザーからは、ワイヤレスNumPadやキーボード上段の数字キーでは動作しないという報告が寄せられています。これは、今後の改善点を示唆する貴重なフィードバックです。


---

# I made a web app that can track your Vscode progress

**Upvotes**: 192

![Image](https://i.redd.it/ipjjhoeoxl9f1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1lmfgxy/i_made_a_web_app_that_can_track_your_vscode/)

## 1. ポストの内容の説明

このRedditの投稿は、プログラマーが開発したWebアプリケーション「RanksDevs」の紹介です。 RanksDevsは、Visual Studio Code (VSCode) の拡張機能を通じて、プログラミング活動を追跡し、ランキングやダッシュボードを提供するものです。 wakatimeのようなコーディング生産性向上ツールの一種と考えて良いでしょう。

投稿者は、

*   **RanksDevsの主な機能:** 自分のVSCodeでの作業を追跡し、ランキングを表示する、ミニポートフォリオとしても利用できるダッシュボードを提供する。
*   **利用状況:** 現在100人のユーザーがいる。
*   **アピールポイント:** 無料で利用でき、参加を呼びかけている。また、ユーザーからの意見や改善提案を求めている。
*   **その他:** コードはオープンソースであり、他の開発者からのプルリクエストも受け付ける予定。

を紹介しています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「vs code progress」の意味:** この質問は、RanksDevsがどのような指標でVSCodeでの進捗を測るのか、具体的にどのようなデータを収集・分析するのか、ユーザーが理解したいことを示唆しています。
*   **wakatimeとの違い:** wakatimeは類似の機能を持つツールであるため、RanksDevsがwakatimeと比べてどのような特徴や強みを持っているのか、競合との差別化に関心があることを示しています。
*   **プライバシーへの懸念:** 拡張機能がユーザーの活動を追跡することから、データの収集と利用方法に関するプライバシーへの懸念を表明しています。
*   **UI/UXに関するフィードバック:** デザインに関する肯定的な意見と、ランディングページのコンテンツ表現に関する具体的な改善提案が含まれています。これは、ユーザーがアプリケーションのデザインや使いやすさにも注目していることを示しています。


---

# I built a hand gesture 3D globe explorer

**Upvotes**: 55

![Image](https://i.redd.it/9nnwe7fbvn9f1.gif)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1lmlmim/i_built_a_hand_gesture_3d_globe_explorer/)

## 1. ポストの内容の説明

このRedditのポストは、ユーザーが作成した「手ジェスチャーで操作できる3D地球儀エクスプローラー」について紹介しています。主な内容は以下の通りです。

*   **機能:** 手のジェスチャーを使って、地図のズーム、回転、レイヤー表示の切り替えを操作できます。
*   **動作環境:** 通常のラップトップとウェブカメラがあれば、ウェブ上でリアルタイムに動作します。
*   **使用技術:**
    *   CesiumJS: 地図レイヤーの表示に使用。
    *   MediaPipe: コンピュータビジョンによるハンドトラッキングに使用。
*   **その他:** デモ、コード、チュートリアルが、[https://www.funwithcomputervision.com/](https://www.funwithcomputervision.com/) で公開されています。

要するに、ユーザーは自分の手を使って、ウェブ上で3D地球儀を操作できる革新的なプロジェクトを開発し、その情報を共有しています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、いくつか興味深いものがあります。

*   **「Nice work! Now add a shadow onto the globe that shows the day and night cycle :D」:** 開発者への提案として、地球儀に昼夜のサイクルを表示する影を追加することを提案しています。これは、地球の視覚的な表現をさらに豊かにする機能追加のアイデアとして興味深いです。
*   **「bro your computer vision / interaction softwares you've been creating are awesome」:** 開発者が過去にもコンピュータビジョン関連のプロジェクトを手掛けていることを示唆し、その継続的な活動を称賛するコメントです。開発者の他の作品への関心を示しており、コミュニティの興味を引いていることがわかります。
*   **「Here's a better demo video on yt: [https://www.youtube.com/watch?v=s7\_0iBvSe14](https://www.youtube.com/watch?v=s7_0iBvSe14)」:** 別のデモ動画へのリンクを提供することで、より多くの情報を提供し、他のユーザーがプロジェクトをより深く理解するのを助けています。これは、コミュニティ内での情報共有と、プロジェクトへの関心の高さを示しています。


---

# Weekly Showoff Thread! Share what you've created with Next.js or for the community in this thread only!

**Upvotes**: 37



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1i91mp7/weekly_showoff_thread_share_what_youve_created/)

## 1. ポストの内容の説明

このポストは、Redditの特定のコミュニティ（subreddit）で、毎週行われる「成果発表スレッド」です。Next.js（またはそれに関連する技術）を使って何かを制作した人たちが、その成果を共有するための場として設けられています。

投稿者は、小さいサイドプロジェクト、大きなアプリケーション、またはコミュニティのために何かを構築した場合など、様々な成果を共有することを呼びかけています。

つまり、このポストは、**Next.jsを使った開発に関する、ユーザー同士の成果発表と情報交換の場**として機能しています。

## 2. 特に興味深いコメント

このポストに対するコメントの中から、特に興味深いものをいくつか紹介します。

*   **drawwwtime:** シンプルなWeb版お絵かきアプリ。デスクトップとグラフィックタブレットの組み合わせで最高の体験が得られるとのこと。
*   **Open Source Shared Music Queue for Parties:** パーティーで、酔った友人たちがMacBookに大量の音楽を追加するのを防ぐために作られた共有音楽キュー。GitHubリポジトリへのリンクも提供されており、オープンソースで公開されています。
*   **scrapestudio:** Web開発者向けの新しいChrome拡張機能とWebアプリ。Webコンポーネントの抽出、カスタマイズ、再利用を数クリックで行えるようにするツールで、現在はウェイティングリストを公開しています。
*   **Next Presidential Election:** Next.js、Tailwind、TypeScriptを使って作られた、次期大統領選挙に関するサイト。静的に生成されており、Cookieや個人データの収集は行われていないとのこと。
*   **Hypership.dev:** Next.jsアプリを1クリックでデプロイできるプラットフォーム。ユーザー認証、ページビュー分析、イベントトラッキング、管理ダッシュボードなど、アプリの構築、公開、管理に必要な機能を網羅している。

