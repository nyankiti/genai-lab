
# Life before ci/cd

**Upvotes**: 82



[View on Reddit](https://www.reddit.com/r/devops/comments/1l6djk5/life_before_cicd/)

### 1. ポストの内容の説明

このRedditの投稿は、CI/CD（Continuous Integration/Continuous Deployment：継続的インテグレーション/継続的デプロイ）パイプラインが登場する前のソフトウェア開発・運用の様子について、質問と考察を求めるものです。

投稿者は、CI/CDがない時代には、開発チームと運用チームが分断されていたという認識を示し、DevOps文化がどのようにして開発を加速させたのか、具体的には、開発者が運用チームに依存せずにアプリケーションをデプロイできるようになったのか、運用チームがSRE（Site Reliability Engineering：サイト信頼性エンジニアリング）に注力できるようになったのか、といった点を疑問としています。

簡潔にまとめると、投稿者はCI/CD以前の状況とDevOps導入後の変化について理解を深めたいと考えており、その変化がもたらしたメリットについて具体的な説明を求めています。

### 2. 特に興味深いコメント

投稿に対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **初期のCI/CD以前の状況を具体的に描写したコメント**:
    *   「CI/CD以前は、動作する環境が整った唯一のワークステーションでコンパイルし、FTP経由で本番環境にプッシュしていた」
    *   「サンドボックス環境へのJavaアプリケーションのインストールに半日かかった。Linuxコマンドを一つずつ実行していた。」
    *   FTPを使っていて、誤ってWWWフォルダを消してしまったというエピソード。
*   **CI/CD以前のDevOps担当者の経験談**:
    *   「DevOpsという言葉が使われる以前にDevOpsのようなことをやっていた」という人物の回想。
    *   Visual Studio付属のソース管理ツールを利用し、ファイルのロック問題に直面した経験。
    *   .BATファイルとMS Buildコマンド、CruiseControlとNAntを利用したCI/CDの構築。ビルド失敗時にライトが点灯し「誰がビルドを壊したんだ！」と叫ぶようなシステムを構築したエピソード。
*   **DevOpsの進化と課題に関するコメント**:
    *   DevOpsは、開発と運用チームを統合するのではなく、障壁を取り除くことを目指した。
    *   CI/CDなしで、bashスクリプトとrsyncを使ってコードをデプロイしていた例。
    *   DevOpsとSREという言葉が、現状では意味を成さない場合もあるという意見。
    *   DevOpsやSREが、必ずしも速く、より信頼性が高いわけではないという意見。

これらのコメントは、CI/CD以前の具体的な開発・運用の方法、DevOpsという概念がどのように誕生し、進化してきたのか、そしてその過程で生じた課題や変化について、様々な視点から考察を提供しています。特に、当時の開発環境の具体的な状況や、DevOpsという言葉が登場する前の「DevOps的な活動」について語られている点が興味深いです。


---

# DevOps Isn’t Just Pipelines—It’s Creating Environments Where Quality Can Emerge

**Upvotes**: 69



[View on Reddit](https://www.reddit.com/r/devops/comments/1l69g0j/devops_isnt_just_pipelinesits_creating/)

## 1. ポストの内容の説明

このRedditのポストは、DevOpsの実践において、単にパイプラインや自動化ツールを導入するだけでは十分ではなく、**品質を維持できる組織文化を醸成することの重要性**を訴えています。

投稿者は、真の品質を実現するためには、以下の3つの課題を克服する必要があると指摘しています。

*   **短期的納期のプレッシャー:** 品質よりもスピードが優先される風潮。
*   **チーム間のサイロ化と連携不足:** チーム間の情報共有や共通の目標が欠如している状況。
*   **フィードバックループの貧弱さ:** 品質に関するフィードバックが得られにくい状況。

これらの課題を克服するために、投稿者は、**信頼、学習、そして共有された所有権**を促進する組織文化の構築を提唱しています。具体的には、テスト、シンプルな設計、ペアプログラミングといった品質向上プラクティスを積極的に取り入れ、それらが受け入れられやすい環境を作ることが重要であると述べています。

投稿の最後に、DevOpsの実践において、**「人」と「インセンティブ」**という側面をどのように扱っているか、他のユーザーに問いかけています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **「DevOpsリード」の専門性不足に関するコメント:** 「DevOps」という肩書きを持ちながら、その役割を十分に理解していない人がいるという指摘は、DevOpsの導入における課題を具体的に示唆しています。専門性の高い人材の確保が重要であることが示唆されています。

*   **「遊び心」と品質の関係に関するコメント:** 開発者が「遊び心」を持ってコードを書けるような環境が、質の高いコードにつながるという意見は、DevOpsにおける心理的な側面への着目を促しています。管理者の役割として、安心して挑戦できるような環境を作ることが重要であると提唱しています。

*   **Agileに対する批判的なコメント:** Agile開発手法が、短期間での成果を重視しすぎて、長期的な視点や品質保証が疎かになる可能性があるという指摘は、Agile導入の落とし穴を指摘しています。品質を重視するDevOpsの考え方との対比が興味深いです。また、製造業のトヨタの例を引き合いに出し、開発プロセス全体を一時停止してでも品質を向上させることの重要性を主張している点も、従来のソフトウェア開発とは異なる視点を示しています。


---

# Do you really get the benefit of using the "rem" unit?

**Upvotes**: 64



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1l63w3e/do_you_really_get_the_benefit_of_using_the_rem/)

## ポストの内容の説明

このRedditのポストは、CSSの単位 `rem` の利用について、その有効性と適切な使用方法について疑問を投げかけています。 投稿者は、`rem` を「ベストプラクティス」としてウェブサイト構築に利用してきたものの、モバイルフレンドリーにするために `<html>` のフォントサイズを変更しても、単に拡大・縮小されたように見えるだけで、期待したような効果が得られなかったと述べています。

投稿者は、`rem` の使い方について混乱しており、次のような疑問を抱いています。

*   `rem` を実際には何のために使うべきなのか？
*   `px` ではなく `rem` を使うことの利点とは？
*   `rem` を使って構築されたウェブサイトを見たことがあるが、どのように使用するのか理解できない場合がある。
*   モバイルクエリでルートサイズを変更する際に `rem` を使用するのは、`rem` の本来の目的と矛盾するのではないか？

投稿者は、`px`、`em` を適切な場面で使用すべきだと認識しており、`rem` の具体的な利用例や利点を求めています。

## ポストに対する興味深いコメント

このポストに対するコメントには、`rem` の使用方法に関する様々な視点が含まれており、以下のようなものが特に興味深いです。

1.  **単位の選択の重要性:** 多くのコメントは、CSSの著者の役割は単に「どのように」見えるかだけでなく、「なぜ」そのように見えるかを表現することであり、適切な単位を選択することがその一部であると指摘しています。`rem` は、フォントサイズとの関連性を保ちながら要素のサイズを調整するために役立ち、デザインの一貫性を保つのに役立ちます。

2.  **アクセシビリティと `rem` の関連性:** `rem` を使用する主な理由の一つとして、アクセシビリティが挙げられています。フォントサイズを変更してウェブサイトを読みやすくする必要があるユーザーにとって、`rem` は重要です。`rem` を使用すると、ルート要素のフォントサイズに基づいて要素のサイズが調整されるため、ユーザーのフォントサイズ設定を尊重した表示が可能になります。 `px` を使用した場合、この設定は無視され、ユーザーはズームする必要があります。

3.  **適切な単位の使い分けのガイドライン:** あるコメントでは、様々なCSS単位の適切な使い分けについて、具体的なガイドラインが示されています。

    *   `rem`: 全体的な一貫性を持たせる必要のある値（ギャップ、マージン、位置のオフセット、シャドウオフセット、レイアウトレベルのパディングなど）。
    *   `em`: UIコンポーネントのローカルフォントサイズに合わせて調整する必要のある値（ボタンのパディング、テキストの行の高さ、アイコンの寸法など）。
    *   `px`: 画面空間との関係がある値（画像サイズの制約、ボーダーとアウトラインの幅など）。
    *   `ch`: 文字幅で決定される値（テキストノードの最小および最大幅、UIテキスト行内のマイクロスペーシングなど）。
    *   `%`: 画面空間の制約やオブジェクト参照のオフセット（最大幅、変換など）。

4.  **`calc` の活用:**  コメントでは、特定のピクセル値を直接指定するのではなく、`calc` を使用して複数の単位を組み合わせることで、より柔軟で表現力のあるレイアウトを構築できることが提案されています。

これらのコメントは、`rem` の利用に関するより深い理解を提供し、ウェブデザインにおける様々な単位の適切な使い分けについて、具体的なアドバイスと洞察を与えています。


---

# Beginners question about knowing your data

**Upvotes**: 38



[View on Reddit](https://www.reddit.com/r/SQL/comments/1l5gp5v/beginners_question_about_knowing_your_data/)

## 1. ポストの内容の説明

このRedditのポストは、SQL（Structured Query Language）初心者である投稿者が、自身のデータ理解に関する問題について質問しているものです。投稿者は、仕事でSQLを使うようになり、クエリを書くことに楽しみを見出しているものの、データ理解の重要性を痛感しています。

具体的には、投稿者は以下の点について悩んでいます。

*   膨大なデータ量と、多くのスキーマ、テーブルが存在すること。
*   データの場所、内容、さらにはその存在期間（「where, what and even when」）を理解することの難しさ。
*   スキーマ、テーブル、行やレコードの命名規則を把握するためのアドバイスを求めていること。

つまり、データ理解がSQLスキルの向上に不可欠であると認識しつつ、どのようにしてデータ構造や内容を把握すれば良いのか、経験者の意見を求めている状況です。

## 2. コメントのうち、特に興味深いもの

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **「In theory, there should be a database dictionary. In reality, this never exists, so essentially it's just learning as you work with it」**: データベース辞書があれば理想的だが、実際には存在しないことが多いので、経験を通して学ぶしかない、という現実的な意見です。
*   **「SQL is relatively easy. Understanding the data is the hard part. In between is understanding the business processes the data supports」**: SQL自体は比較的容易で、データ理解が難しいという指摘は的を射ています。また、データが支えるビジネスプロセスを理解することの重要性にも言及しています。
*   **「What I found really useful was sitting down and going through each table and doing a quick SELECT TOP 100 \* from each. Then looking at each column and what it may relate to. Primary keys, foreign keys, all that sorta stuff. And then I start throwing in WHERE clauses, looking at older data vs newer data, filtering down specific values that pique my interest and are related to the work I'm doing」**: 具体的なデータ探索方法として、`SELECT TOP 100 *` でテーブルの内容を確認し、カラムの意味を理解し、WHERE句でデータを絞り込むという、実践的なアドバイスをしています。
*   **「your sql flavor may offer "navigation, exploration and discovery tools" but the best knowledge base I've found (assuming proper documentation does not exist (read: even if it is "outdated" it is good to read)) is found in 1. people who work with the data on a daily basis through sql 2. people who work with the business logic and know what the business rules are. even though they know nothing about "schemas and primary keys" they can point to critical requirements that shaped original table design and are often imprescindible when validating correctness of query output, say for specific reports and what not」**: SQLのツールも役立つが、最も頼りになるのは、日々SQLでデータに触れている人や、ビジネスロジックに詳しい人であるという意見は、データ理解のヒントとして非常に重要です。
*   **スクリプトやExcel表の活用:** データベースのメタデータを取得するスクリプトを作成したり、手動でExcel表を作成してテーブル名や説明を記録するという、具体的な解決策も参考になります。


---

# I guess I'm done for the night

**Upvotes**: 423

![Image](https://i.redd.it/2fejo3lqsl5f1.jpeg)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1l605vl/i_guess_im_done_for_the_night/)

## ポストの内容の説明

1.  **投稿者の状況:** ポストのタイトル「I guess I'm done for the night（今夜はもうおしまいかな）」から、投稿者が何らかの活動を終えようとしていることが推測できます。
2.  **背景の状況:** コメントの内容から、投稿者の近くに猫とマウスパッド、そしてSatisfactoryというゲームが存在することが分かります。
3.  **推測される状況:** 投稿者は、猫がマウスを狩ることに興味を示さない様子を見て、あるいはSatisfactoryというゲームをプレイし終えたことなど、様々な理由から活動を終えようとしている可能性があります。

## 特に興味深いコメント

*   **猫の行動に関するコメント (28 upvotes):** 「I've never seen a cat more uninterested in a mouse. What a sweet kitty <3（ネズミにこれほど興味を示さない猫は初めて見た。なんて可愛い猫ちゃん）」というコメントは、投稿された写真や動画に猫が登場し、その猫がネズミに対して無関心な様子を見せていることを指摘しています。猫の行動に対するユーザーのユニークな視点を示しており、高い評価を得ています。

*   **猫の名前を尋ねるコメント (14 upvotes):** 「What a cute cat, what's his name?（なんて可愛い猫ちゃん、名前は何？）」というコメントは、猫の可愛らしさに注目し、猫の名前を知りたいというユーザーの感情を表しています。多くの人が猫に興味を持っていることが分かります。

*   **状況を面白く捉えたコメント (22 upvotes):** 「Cat got the mousepad, eh?（猫がマウスパッドを手に入れた、ということかな？）」というコメントは、猫とマウスパッドの関係をユーモラスに表現しています。

*   **投稿者の活動を推測するコメント (5 upvotes):** 「Wait. Were you working or playing Satisfactory? 😂（待って。あなたは仕事していたの？それともSatisfactoryをプレイしていたの？）」というコメントは、投稿者の活動内容に対する疑問を投げかけています。投稿者が仕事とゲームのどちらをしていたのか、または両方を同時に行っていたのかを推測させており、興味を引きます。


---

# Weekly Showoff Thread! Share what you've created with Next.js or for the community in this thread only!

**Upvotes**: 38



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1i91mp7/weekly_showoff_thread_share_what_youve_created/)

## ポストの内容の説明

このRedditのポストは、Next.jsやコミュニティのために作成したものを共有するための「Weekly Showoff Thread（毎週の自慢スレッド）」です。 投稿者は、小さなサイドプロジェクトの完成から、大規模なアプリケーションのローンチ、あるいはコミュニティのための何かを構築したことまで、様々な成果を共有することを呼びかけています。

## 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **drawwwtime.com:** ウェブ上で利用できるシンプルな描画アプリケーション。安価なグラフィックスタブレットを使用すると、最高の体験が得られるとのことです。
*   **オープンソースの共有ミュージックキュー:** 酔った友人がMacBookに大量の悪い曲を追加するのを防ぐために作成された、パーティー用の共有ミュージックキューです。GitHubで公開されています。 ([https://github.com/motz0815/songup](https://github.com/motz0815/songup))
*   **scrapestudio:** Web開発者向けの、Webコンポーネントの抽出、カスタマイズ、再利用を可能にするChrome拡張機能とWebアプリ。現在、ウェイトリスト登録を受け付けています。
*   **www.nextpresidentialelection.us:** Next.js、Tailwind、TypeScriptを使用して構築された、静的に生成されたウェブサイト。クッキーや個人データは収集されません。
*   **Hypership.dev:** Next.jsアプリを1クリックでデプロイできるプラットフォーム。ユーザー認証、ページビュー分析、イベントトラッキング、完全な管理ダッシュボード、デプロイメントなど、多くの機能が含まれています。Reactアプリの開発、公開、管理に必要な機能を備えていることを目指しているようです。

