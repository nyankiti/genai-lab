
# 'Getting into DevOps'

**Upvotes**: 961



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

## ポストの内容の説明

この Reddit のポストは、DevOps に興味を持つ人たちに向けて、DevOps とは何か、DevOps を学ぶために何を知るべきか、そしてどのようなリソースが利用できるのかをまとめたものです。

**1. DevOps とは？**

*   DevOps を、開発チームと運用チームが分離された状態ではなく、アプリケーションのライフサイクル全体（開発、テスト、デプロイ、運用）を通して協力し、従来は手作業で時間がかかっていたプロセスを自動化する「働き方」として定義しています。
*   AWS の記事へのリンクが貼られ、より詳細な説明が提供されています。

**2. 読むべき本**

*   DevOps の文化を理解するための物語形式の本、**The Phoenix Project** (邦題: The Phoenix Project: DevOpsの教訓)
*   The Phoenix Project の実用的な続編である **The DevOps Handbook**
*   Google のエンジニアがシステムの構築、デプロイ、監視、保守について解説する **Google's Site Reliability Engineering** とその実践的なガイドである **The Site Reliability Workbook**
*   The Phoenix Project の続編である **The Unicorn Project**
*   「DevOps for Dummies」というタイトルの本（初心者向けを装っているが、内容は侮れない）

**3. 何を学ぶべきか**

*   インフラストラクチャをコード化することの重要性について解説したエッセイへのリンク
*   DevOps のスキルマップへのリンク（ただし、特定のユースケースに偏っている可能性があることに注意）
*   DevOps は特定のツールや資格よりも、問題解決に対する考え方（マインドセット）が重要であるというコメントへのリンク
*   DevOps と関連用語の説明へのリンク
*   DevOps のステップバイステップガイドへのリンク

**4. まとめ**

*   DevOps はまだ発展途上の概念であり、特定のツールよりも文化的な変化が重要であるため、具体的なスキルやツールセットの推奨はあくまでも参考として受け取るべきであると結論付けています。

## コメントのうち、特に興味深いもの

この投稿に対するコメントは、DevOps の学習や実践において様々な視点を提供しています。ここでは、特に興味深いコメントをいくつか紹介します。

**1. Kubernetes に関する無料の入門コース (239 upvotes)**

*   Kubernetes アーキテクチャに関する、1時間の無料入門コースへのリンクが紹介されています。特徴的なのは、図解だけではなく、Kubernetes クラスタを構築し、各コンポーネントを無効化して試すことで、実践的に学ぶアプローチを取っている点です。
*   YouTube と Udemy で利用可能。

**2. 実践重視の意見 (141 upvotes)**

*   DevOps への近道は、ひたすら実践し、疑問点を Google で検索することであると主張しています。
*   ビデオコースのような受動的な学習ではなく、手を動かすことによる経験が重要であると強調しています。
*   100daysofdevops のような実践的なプラットフォームでの学習を推奨しています。

**3. DevOps の 3 つの主要原則 (67 upvotes)**

*   DevOps を「自動化」「監視」「統合」の 3 つの原則に集約して説明しています。
    *   **自動化:** 手作業は可能な限り避け、Terraform や Ansible などのツールを使ってインフラを自動化する。
    *   **監視:** すべてのインフラとアプリケーションを監視し、アラートを設定する。Netdata などのツールを活用し、エントリーポイントの監視に重点を置く。
    *   **統合:** クラウドプロバイダーの API を習得し、モニタリングソリューションの機能を理解する。
*   具体的なツールや手法を提示し、実践的なアドバイスを提供しています。

**4. Kubernetes 関連の動画 (37 upvotes)**

*   Kubernetes の Kustomize と Helm に関する動画へのリンクが紹介されています。
*   これらのツールは、Kubernetes 上でのアプリケーションのデプロイを効率化する上で重要な役割を果たします。

**5. Fakespot によるレビュー分析 (25 upvotes)**

*   The Phoenix Project の Amazon レビューに対する Fakespot の分析結果が共有されています。
*   レビューの信頼性や、販売者の信頼性に関する情報が得られます。


---

# Server automations like deployments without SSH

**Upvotes**: 40



[View on Reddit](https://www.reddit.com/r/devops/comments/1metswg/server_automations_like_deployments_without_ssh/)

## 1. ポストの内容の説明

このRedditのポストは、サーバーの自動化、特にSSHを使わないデプロイメント方法について議論しています。投稿者は、上司からSSHベースの自動化（GitLab CIでSSHキーを使ってデプロイメントを行うなど）を禁止されており、その理由を理解しようとしています。SSHベースの自動化は一般的に広く使われているため、投稿者はその妥当性に疑問を持ち、他の人々の意見を求めています。セキュリティの観点から、SSHを使わないデプロイメント方法の利点や、具体的な代替案について議論を展開しようとしています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **43 upvotesのコメント:** `ansible-pull`のようなプル型の自動化手法を提案しています。これは、サーバー上でプレイブックを実行し、gitリポジトリからプレイブックをプルして実行する方法です。セキュリティをさらに高めるために、GPG署名とコミットの検証も検討できます。また、上司がSSHベースの認証に反対する理由を尋ね、具体的な脅威モデルを理解することで、より適切な代替案を検討できると提案しています。プライベートランナーとVaultの組み合わせも、SSHキーを安全に管理する一例として挙げられています。
*   **26 upvotesのコメント:** 投稿者の上司の意見に賛成し、プル型のデプロイメントモデルを推奨しています。CI（継続的インテグレーション）とCD（継続的デリバリー）の分離を強調し、CIはデプロイ可能なアーティファクトの作成に専念し、CDシステムはターゲット環境内で独立して動作するべきだと述べています。CIが本番環境に直接プッシュすることは、セキュリティ上のリスクがあるため避けるべきだと指摘しています。また、SOC2やISO270001などのセキュリティ監査にも影響が出ると言及しています。
*   **2 upvotesのコメント:** Gitlab CIのジョブトークンを使ってVaultからシークレットを取得する方法や、Kubernetes Service AccountとVaultの組み合わせを使ったCDプルモデルを紹介しています。CIジョブとKubernetes Service Accountの両方を、Vaultへの認証に使用できる「ID」として設定し、特定のエンティティのみがシークレットを読み取れるように構成する方法を説明しています。


---

# If I have 2 tables (A = 100m rows & B = 2m rows) - Which is better to join?

**Upvotes**: 35



[View on Reddit](https://www.reddit.com/r/SQL/comments/1mea8ii/if_i_have_2_tables_a_100m_rows_b_2m_rows_which_is/)

## 1. ポストの内容の説明

このRedditの投稿は、2つのテーブルを `LEFT JOIN` する際のパフォーマンスと結果の違いについて質問しています。

*   **問題:** 1億行のテーブルAと200万行のテーブルBがあり、`LEFT JOIN` を使用する場合、どちらのテーブルを`FROM` 句に配置し、どちらを`JOIN` するかによって結果や効率に違いが出るのか？

*   **具体例:** 投稿者は2つのSQLクエリを示しています。

    1.  `SELECT X, Y, Z FROM Table B LEFT JOIN Table A ON B.KEY = A.KEY`
    2.  `SELECT X, Y, Z FROM Table A LEFT JOIN Table B ON A.KEY = B.KEY`

*   **要約:** どちらのクエリを使用するべきか、またそれらの違いは何なのか、という疑問を投げかけています。

## 2. 興味深いコメント

この投稿に対するコメントの中で、特に興味深いものと、その理由を以下に示します。

*   **76 upvotes: It doesn't matter about speed really it matters about the result set you want.** (速度よりも、欲しい結果セットが重要であるというコメント)

    *   **理由:** このコメントは、`LEFT JOIN` の本質を捉えています。`LEFT JOIN` は、`FROM` 句に指定したテーブルのすべての行を、`JOIN` 句に指定したテーブルとの関連があるかどうかに関わらず、結果セットに含みます。どのテーブルを`FROM` にするかによって、結果セットに含まれる行数が大きく変わります。速度も重要ですが、まずは「何を知りたいのか」という目的を明確にすることが重要です。

*   **24 upvotes: If you had inner join it wouldn't matter but there you have two different queries and two different outputs.** (INNER JOINであればどちらの順番でも結果は同じだが、LEFT JOINでは異なる結果になるというコメント)

    *   **理由:**  このコメントは、`LEFT JOIN` と `INNER JOIN` の違いを明確にしています。`INNER JOIN` は、両方のテーブルに一致する行のみを返します。そのため、どちらのテーブルを先に指定しても結果は同じです（ただし、テーブルの順序によっては、内部的な処理の効率に差が出る可能性はあります）。一方、`LEFT JOIN` では、`FROM` 句に指定したテーブルのすべての行が必ず結果に含まれるため、テーブルの順序によって結果が大きく異なります。

*   **8 upvotes: Isn’t the answer to the question based upon the actual data?  The PRIMARY table should be the one that provides the key data and key to all of the other tables.** (答えはデータそのものに依存し、主要なテーブルは、他のすべてのテーブルのキーデータを提供するべきであるというコメント)

    *   **理由:** このコメントは、データモデリングの観点から適切なテーブル選択について言及しています。テーブルの構造やデータの性質に基づいて、どのテーブルが「主要な」情報を含んでいるかを考慮し、適切なJOINの方向性を決めるべきという視点を示しています。

*   **8 upvotes: These return different results.  Which one is more efficient? The one that returns the correct result.** (異なる結果を返す。より効率的なのは、正しい結果を返す方であるというコメント)

    *   **理由:** このコメントは、効率性よりも正確性が重要であると強調しています。正しい結果を返すクエリが、最終的に最も「効率的」であると言えるでしょう。

*   **2 upvotes: A left join B results in 100 millions rows (at least).  B left join A results in 2 million rows  (at least).  Better depends on what you want.** (A left join Bは少なくとも1億行、B left join Aは少なくとも200万行を返す。どちらが良いかは、何が欲しいかによるというコメント)

    *   **理由:** このコメントは、`LEFT JOIN` の結果セットのサイズが、テーブルの順序によって大きく変わることを具体的な数値例を挙げて説明しています。結果セットのサイズが、クエリのパフォーマンスと結果の解釈に大きく影響することを明確に示しています。


---

# Just realized, if you google "bad ux", all the results come in comic sans.

**Upvotes**: 1068

![Image](https://i.redd.it/jg8lf77vyfgf1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1mf2f9g/just_realized_if_you_google_bad_ux_all_the/)

## ポストの内容の説明

1.  **投稿者の発見:** ポストの投稿者は、Googleで「bad ux」と検索した際に、検索結果の表示フォントがすべてComic Sans（コミックサンズ）になっていることに気づきました。
2.  **「bad ux」とComic Sansの関係:** ポストは、Googleが「bad ux」（悪いユーザーエクスペリエンス）という検索キーワードと、一般的にデザイン的に良くないと見なされているフォントであるComic Sansを関連付けていることを示唆しています。これは、Googleが自社の検索結果のデザインについて自己言及的に皮肉っていると解釈できます。

## 興味深いコメント

1.  **肯定的な反応と笑い:** 多くのユーザー（83 upvotes）が投稿者の発見に共感し、面白がっています。
2.  **Comic Sans擁護:** あるユーザー（296 upvotes）はComic Sansがアクセシビリティの高いフォントであると主張しています。これは、Comic Sansが視覚的なアクセシビリティの観点から利点があるかもしれないという視点を示唆しています。
3.  **Googleの自虐的な態度への言及:** あるユーザー（142 upvotes）は、Googleが「bad UX」についてよく知っているとコメントし、Googleの検索結果のデザインに対する自己認識を指摘しています。
4.  **フォント表示の違いに関するコメント:** 別のユーザー（28 upvotes）は、Comic Sansが表示されるかどうかは、ユーザーのPCにそのフォントがインストールされているかどうかに依存すると説明しています。また、代替フォントが使用される場合もあることを示唆しています。このコメントは、実際のフォント表示がユーザーの環境に依存することを示しています。


---

# Thoughts on new ENRON website? Been looking at it all morning lol

**Upvotes**: 92

![Image](https://i.redd.it/qm3gyi1ysfgf1.jpeg)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1mf1jeh/thoughts_on_new_enron_website_been_looking_at_it/)

## ポストの内容の説明

このRedditのポストは、**Enron（エンロン）社の新しいウェブサイトに関する話題**です。

*   **タイトル:** 「新しいエンロンのウェブサイトについての感想は？朝からずっと見てるんだけど」という問いかけから始まっています。これは、投稿者がエンロン社のウェブサイトに興味を持ち、その感想を他のユーザーと共有したいという意図を示唆しています。
*   **内容:** タイトルのみで、投稿者は具体的な内容は示していません。しかし、タイトルから、エンロン社のウェブサイトが新しくなったこと、投稿者がそれをじっくりと見ていることがわかります。
*   **コンテキスト:** エンロン社は、かつてアメリカのエネルギー会社として隆盛を極めましたが、不正会計により倒産したことで有名です。この背景から、このポストは皮肉や風刺を含んだものとして解釈される可能性があります。

## 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **「44 upvotes: “Looks trustworthy, I’ll invest”」:** このコメントは、皮肉を込めてエンロンのウェブサイトを「信頼できる」と表現し、「投資する」と付け加えています。倒産したエンロンを「信頼できる」と表現することは、企業の過去の不正を揶揄するユーモラスな表現です。
*   **「105 upvotes: https://mitchivin.com they should’ve hired me to design it 🥲」:** このコメントは、ウェブサイトのデザインに不満があることを示唆し、自分のデザインの方が優れていたという意見を述べています。ウェブサイトの品質に対する個人的な見解を表明しています。
*   **「9 upvotes: I especially like the huge gold chain with the giant "E" logo in it for only $6,994. \[https://enron.com/collections/shop\] Unfortunately, it's sold out, otherwise I'd get two. 🤷」:** このコメントは、エンロンのウェブサイトにあるグッズ販売について言及しています。特に、巨大な「E」ロゴが入った金のネックレス（6,994ドル）に言及し、それが売り切れであったことに言及しています。エンロンの倒産という過去を考慮すると、このコメントは皮肉めいたユーモアを含んでいます。
*   **「7 upvotes: Evil Corp?」:** このコメントは、「Evil Corp（悪の企業）」という短い言葉で、エンロンのイメージを暗に表現しています。エンロンに対する否定的な感情をストレートに表現し、倒産の原因となった不正会計を想起させるようなコメントです。

