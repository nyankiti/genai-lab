
# I got slammed with a $3,200 AWS bill because of a misconfigured Lambda, how are you all catching these before they hit?

**Upvotes**: 58



[View on Reddit](https://www.reddit.com/r/devops/comments/1ltdt4q/i_got_slammed_with_a_3200_aws_bill_because_of_a/)

## 1. ポストの内容の説明

このRedditのポストは、AWS（Amazon Web Services）のLambda関数（サーバーレスコンピューティングサービス）の設定ミスによって、著者が3,200ドルの請求を受けてしまった経験について語っています。

具体的には、Lambda関数とS3（オブジェクトストレージサービス）を用いた簡単なデータ取り込みパイプラインを構築中に、誤ってイベントループを作成してしまい、Lambda関数が無限に実行され続けてしまったという事象です。その結果、AWSからの通知やアラートは一切なく、請求ダッシュボードを開いた時に初めて高額な料金が発生していることに気づきました。

著者は、このような事態を未然に防ぐための**ガードレール**が自社には存在しないことを痛感し、以下の3つの質問をコミュニティに投げかけています。

*   **どのようにして予期せぬインフラコストを監視しているのか？**
*   **コストの異常を実際にインシデントとして扱っているのか？**
*   **これはSRE/DevOpsの責任なのか、それともエンジニアやマネージャーに任せているのか？**

要約すると、このポストはAWSのコスト管理における課題と、それを解決するためのベストプラクティスについて、他のユーザーの意見を求めているものです。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものを以下にまとめます。

*   **AWS Cost Anomaly Detection（54 upvotes）:** AWS Cost Anomaly Detectionは、AWSの費用に異常がないかを検知してくれるサービスです。これとAWS Budgetsを組み合わせることで、不審なコスト増加を早期に発見し、アラートを受け取ることができます。コメント主は、アラートを受けたらすぐに調査を開始し、必要に応じてインシデントとして対応することを推奨しています。また、FinOps（FinancesとDevOpsを組み合わせた造語）チームがこの責任を担うことが望ましいと述べています。

*   **AWS Budgetsによる予算設定（21 upvotes）:** AWSのBilling and Management機能を利用して、カスタム予算を設定し、コストが一定額を超えた場合にメールでアラームを受け取ることができます。

*   **CloudWatchアラーム/メトリクス（6 upvotes、5 upvotes）:** CloudWatchは、AWSのリソースを監視するためのサービスで、アラームを設定することで、特定のメトリクスの異常値を検知できます。しかし、CloudWatchは請求額そのものではなく、各リソースの利用状況を監視するため、請求額の異常を直接的に検知するには、別途設定が必要です。コスト管理はアクセス権限の問題で、開発者と経理で担当が分かれることがある点も指摘されています。


---

# Which design do you prefer for my website?

**Upvotes**: 40



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1ls9dse/which_design_do_you_prefer_for_my_website/)

## ポストの内容の説明

1.  **タイトル:** ウェブサイトのデザインについて、どちらが良いか意見を求めています。
2.  **投稿文:**
    *   ウェブサイトのデモへのリンクが提示されています。
    *   デモサイトは投稿者の書いた記事の一覧を表示するもので、2種類のデザインが提示されているものと推測されます。

## 特に興味深いコメント

1.  **デザインの比較と分析:**
    *   2つのデザインを比較し、それぞれの長所と短所を分析しています。
    *   第一のデザイン（1st）は、記事に焦点を当て、すっきりとしたミニマルな印象を与え、CTA（Call To Action、行動喚起）が明確であると評価しています。記事の詳細情報（閲覧数、説明、日付など）も優れていると評価しています。
    *   第二のデザイン（2nd）については、記事が焦点から外れ、コーディング統計や台湾の地図が大きく表示され、ブログの目的と合致しない可能性を指摘しています。
    *   デザインを統合する提案をしています。具体的には、第二のデザインの色を第一のデザインに取り入れる、台湾の地図やGitHubのコードコミットトラッカーを小さくして右側に配置する、といった提案がされています。
2.  **目的の明確化の重要性:**
    *   ウェブサイトの目的（ターゲットオーディエンス、訪問者に何をしてもらいたいか、何を伝えたいか）を明確にすることを推奨しています。
    *   目的が明確になれば、デザインをより効果的に改善できると述べています。


---

# Spring Boot 3.5.0 available now

**Upvotes**: 63



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1kwitne/spring_boot_350_available_now/)

## ポストの内容の説明

このRedditのポストは、Spring Bootのバージョン3.5.0が利用可能になったことを発表しています。

## コメントのうち、特に興味深いもの

このポストに対するコメントで特に興味深いものは以下の2つです。

1.  **Springdoc-openapiとの互換性に関する問題:** このコメントは、Spring Boot 3.5.0へのアップデートが`springdoc-openapi`（APIドキュメント生成ライブラリ）を壊す可能性があることを指摘しています。問題は既に認識されており、修正作業が進められています。これにより、Spring Boot 3.5.0にアップデートしたユーザーは、APIドキュメントの生成に問題が生じる可能性があります。
2.  **Hibernate enhance maven pluginとの互換性に関する問題:** このコメントは、Spring Boot 3.5.0へのアップデートが`hibernate enhance maven plugin`を使用しているアプリケーションを壊す可能性があることを示唆しています。Hibernate enhance maven plugin を利用しているアプリケーションは、Spring Boot 3.5.0へのアップデートにより、アプリケーションが正常に動作しなくなる可能性があります。


---

# Project Ideas to build with Spring Boot for Resume

**Upvotes**: 38



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1lskjx3/project_ideas_to_build_with_spring_boot_for_resume/)

## ポストの内容の説明

このRedditのポストは、プログラミングのチュートリアル地獄にはまり、重要なプロジェクトを構築できなかった大学生が、Spring Bootなどの技術を学び、卒業を控えて就職活動に役立つプロジェクトのアイデアを探しているという内容です。

具体的には以下の点を述べています。

*   **現状:** 最終学年でありながら、これまでの学習が表面的なものに留まり、具体的なプロジェクトを完成させた経験がない。Spring Boot、Spring Data JPA、Hibernate、Spring Securityなどを学習済み。
*   **悩み:** 履歴書に書けるような、意味のあるプロジェクトのアイデアが見つからない。ToDoリストやEコマースアプリは競合が多いと感じている。学生管理システムや病院管理システムなど、特定の用途を思いつかない。
*   **目標:** 履歴書がATS（採用管理システム）を通過し、オンライン試験（OA）に進めるようにしたい。そのために、プロジェクトを通して自分のスキルをアピールしたい。
*   **要望:** 履歴書に書けるプロジェクトの提案を求めている。必要であれば、新しい技術を学ぶことも厭わない。

## 特に興味深いコメント

このポストに対するコメントの中で、以下が特に興味深いと考えられます。

*   **マイクロサービスを活用したプロジェクトの提案（8 upvotes）:** どんなプロジェクトでも良いので、マイクロサービスを使って開発することを推奨しています。これにより、実践的な経験を積むことができます。また、自分自身で使うものや、一般的な問題を解決するものを開発することを提案しています。

*   **エンタープライズグレードのアプリケーション構築の提案（4 upvotes）:** ユニークなアイデアに固執せず、マイクロサービス、AWSのサービス、Docker、スケーリングなどを活用したエンタープライズグレードのアプリケーション構築を提案しています。これは、実践的なスキルを身につけるための良い方法です。コアなDBMSとOSの知識が重要であるとも述べています。

*   **既存のアプリのクローン作成の提案（3 upvotes）:** 人気のあるアプリケーションのクローンを作成し、スケーラブルでセキュアなものを作ることで、スキルをアピールできると提案しています。

これらのコメントは、著者の状況（チュートリアル地獄にはまり、具体的なプロジェクト経験がない）を踏まえ、実践的なスキルを習得し、就職活動に役立つようにするための具体的なアドバイスを提供しています。


---

# Amazon abandoned Goodreads. So I built the replacement

**Upvotes**: 1040



[View on Reddit](https://www.reddit.com/r/webdev/comments/1lssfag/amazon_abandoned_goodreads_so_i_built_the/)

## 1. ポストの内容の説明

このRedditのポストは、Goodreadsの代替サービスとして、ユーザーが独自に開発したウェブサイト「Kaguya」の紹介です。

*   **問題提起:** AmazonがGoodreadsを買収した後、長期間にわたってサービス改善がほとんど行われていないことへの不満を表明しています。 具体的には、デザインの古さ、使いにくさ、ハーフスター評価や「未読」ステータスといった基本的な機能の欠如などを指摘しています。
*   **解決策の提示:** その問題を解決するため、投稿者はGoodreadsの代替となる「Kaguya」を開発したことを発表しています。 Kaguyaは、Goodreadsの既存の機能に加え、ブックリスト、強力な検索機能、美しい読書統計などの特徴を備えています。
*   **サービスの詳細:** Kaguyaは、LetterboxdやAnilistといった他のメディアトラッキングサイトからインスピレーションを受けて開発され、現在728人のユーザーを抱え、毎週成長しています。
*   **サービスへの誘導:** ポストの最後に、Kaguyaのウェブサイトへのリンクを提示し、読書好きや本のトラッキングに興味のあるユーザーに利用を呼びかけています。

## 2. 興味深いコメントの紹介

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **ユーザーからのフィードバック:**
    *   **名前に関する指摘:** サイト名「Kaguya」が、そのサービスの目的を直感的に伝えにくい可能性があるという指摘。 サービスの性質を理解するには、Goodreadsを知っていることが前提となるという意見。
    *   **代替サービスの紹介:** Goodreadsの代替サービスとして、既に存在する「StoryGraph」を紹介するコメント。
*   **技術的な情報:**
    *   **技術スタックの開示:** Kaguyaのバックエンド、フロントエンド、データベース、認証、UIコンポーネント、API、ホスティング、ストレージといった技術的な構成要素が詳細に説明されています。
    *   **開発体制:** 2人の開発者によって開発されたことが言及されています。
*   **開発者からのアドバイス:**
    *   **料金設定に関する示唆:** 他の同様のサービス「Hardcover」の開発者が、有料ユーザーを獲得することの難しさについて言及。早期の有料化は、機能よりもプロジェクトへのサポートとしての側面が強いこと、および広告以外の収益化の難しさについて語っています。
    *   **法的なアドバイス:** 著作権侵害に関する注意喚起と、DMCA（デジタルミレニアム著作権法）エージェントへの登録の重要性についてアドバイスしています。
    *   **Goodreadsからのデータ移行に関する問題点:** Goodreadsからのデータインポートの課題と、読書開始日の取得に関する問題について言及しています。
*   **サービスの評価:**
    *   **好意的な評価:** サービスの完成度を高く評価するコメント。
    *   **Goodreadsからのデータインポートの体験談:** Goodreadsからのデータ移行がスムーズに行われたが、一部のデータが正しくインポートされなかったという報告。
