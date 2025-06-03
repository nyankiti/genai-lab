
# 'Getting into DevOps'

**Upvotes**: 944



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

## ポストの内容の説明

このRedditのポストは、DevOpsの世界に足を踏み入れたいと考えている人たちに向けた情報源として作成されています。内容は以下の通りです。

1.  **DevOpsとは何か？**: DevOpsの基本的な定義が示されています。AWSの記事を引用し、開発チームと運用チームが連携し、アプリケーションのライフサイクル全体（開発、テスト、デプロイ、運用）で協力し、手作業で時間がかかっていたプロセスを自動化することであると説明しています。
2.  **読むべき書籍**: DevOpsの文化や概念を理解するための書籍がいくつか紹介されています。
    *   **The Phoenix Project**: DevOpsの概念を物語を通して解説した、DevOps入門書の定番。
    *   **The DevOps Handbook**: The Phoenix Projectの実践的な続編。
    *   **Google's Site Reliability Engineering**: GoogleのSRE (Site Reliability Engineering)に関する書籍。
    *   **The Site Reliability Workbook**: Google SREの書籍の実践的なワークブック。
    *   **The Unicorn Project**: The Phoenix Projectの続編。
    *   **DevOps for Dummies**: DevOpsの入門書。
3.  **何を学ぶべきか**: DevOpsの世界で役立つスキルや知識について、いくつかの情報源が紹介されています。
    *   **Emily Woodのエッセイ**: Infrastructure as Code (IaC)の重要性について。
    *   **2019 DevOps Roadmap**: DevOpsエンジニアが習得すべきツールや技術をまとめたロードマップ（ただし、特定のユースケースに偏っているという意見もある）。
    *   **Redditのコメント (by /u/mdaffin)**: DevOpsは特定のツールや資格よりも、問題解決に対する考え方（マインドセット）が重要であるという意見。
    *   **Redditのコメント (by /u/jpswade)**: DevOpsとその関連用語に関する説明。
    *   **Roadmap.sh**: DevOpsエンジニアなどのOps系の職種向けのステップバイステップガイド。
4.  **DevOpsに関する注意点**: DevOpsはまだ発展途上の概念であり、文化的な変化を伴うため、特定のツールやスキルセットが普遍的ではないこと。そのため、推奨事項はあくまでも参考として捉えるべきであると強調しています。

## 特に興味深いコメント

以下は、このポストに対するコメントの中で、特に興味深いものです。

*   **Kubernetesの入門コースの紹介**: Kubernetesのアーキテクチャを学べる1時間の無料コースを紹介。実際にKubernetesクラスターを構築し、各コンポーネントを無効化・有効化しながら学ぶという、実践的な内容です。YouTubeとUdemyで公開されています。
*   **実践重視の意見**: DevOpsを学ぶ上で、実践とGoogle検索が重要であると主張するコメント。動画コースなどの座学よりも、実践的なタスクを通じて経験を積むことが大切であると述べています。
    *   100daysofdevopsのGitHubリポジトリを紹介し、具体的な実践方法を提案しています。
*   **DevOpsの3つの主要原則**: DevOpsの3つの主要原則（自動化、監視、統合）を提示しているコメント。
    *   **自動化**: 手作業を避け、TerraformやAnsibleなどのツールを活用してインフラをコード化することを推奨。
    *   **監視**: すべてのコンポーネントを監視し、Netdataなどのツールを使用して自動化されたダッシュボードとアラートを設定することを推奨。
    *   **統合**: クラウドプロバイダーのAPIを習得し、監視ソリューションの機能を理解し、様々なものを連携させるための「グルーコード」を作成することを推奨。
*   **Kubernetes関連の動画紹介**: Kubernetesのツール（KustomizeとHelm）に関する動画を紹介しています。
*   **Fakespotレビュー分析**: Amazonの商品レビューの信頼性を評価するFakespotによる分析結果を紹介。The Phoenix Projectのレビューが「B」評価であると示しています。


---

# Tracking without cookies? IP scanning? How does it work?

**Upvotes**: 378



[View on Reddit](https://www.reddit.com/r/webdev/comments/1l13vrt/tracking_without_cookies_ip_scanning_how_does_it/)

## 1. ポストの内容の説明

このRedditの投稿は、ユーザーがポルノサイト（おそらくPornHub）をシークレットモードで利用しているにも関わらず、過去の検索履歴に基づいたコンテンツが表示されることに疑問を抱いているという内容です。

*   **問題:** ユーザーは、シークレットモードを使用しているため、Cookieによる追跡はあり得ないと考えています。しかし、サイトは過去の検索履歴に基づいたコンテンツを表示しており、これがどのように実現されているのか理解できずにいます。
*   **推測:** ユーザーは、自分のIPアドレスが追跡に利用されているのではないかと推測しています。

## 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **フィンガープリンティング (493 upvotes, 87 upvotes, 149 upvotes):** 多くのコメントが、Cookieを使わずにユーザーを追跡する手法として「フィンガープリンティング」を挙げています。フィンガープリンティングとは、IPアドレス、ブラウザの種類とバージョン、画面解像度、言語設定、インストールされている拡張機能など、様々な情報を組み合わせて、ユーザーを特定する技術です。これらの情報は組み合わさると、ユーザーごとにユニークな「指紋」となり、Cookieを使わなくても追跡を可能にします。コメントの中には、広告技術の専門家が、フィンガープリンティングが第三者Cookieがブロックされた場合に利用される手法であると説明しているものもあります。

*   **「これは面白い」(108 upvotes):** ポストの「すべてのユーザーに同じコンテンツが表示されるはずがない」という主張に対する皮肉なコメントです。これは、サイトがパーソナライズされたコンテンツを提供していることに対する皮肉と受け取れます。

*   **関連リンク (34 upvotes):** フィンガープリンティングに関する追加情報を提供するリンクがコメントとして提示されています。これらのリンクは、フィンガープリンティングの詳細や、シークレットモードの限界について解説しています。


---

# PSA: This code is not secure

**Upvotes**: 211

![Image](https://i.redd.it/gtnp6892fj4f1.png)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1l1lxd6/psa_this_code_is_not_secure/)

## 1. ポストの内容の説明

このRedditのポストは、**セキュリティに関する注意喚起 (PSA: Public Service Announcement)** です。具体的な内容は、Next.jsなどのフレームワークにおける「サーバーアクション」の安全性についてです。

**問題点:**

*   サーバーアクションは、サーバーサイドで実行される関数であり、APIエンドポイントとして公開される。
*   サーバーアクションが正しく認証されていない場合、悪意のあるユーザーは、サーバーアクションのURLを直接呼び出すことで、認証を回避して不正な操作を実行できてしまう。
*   サーバーコンポーネント内での認証だけでは不十分であり、サーバーアクション自体でも認証を行う必要がある。

**要約:**

サーバーアクションは、認証なしで公開される可能性があるため、APIエンドポイントと同様に、個別に認証と認可の処理を行う必要があるという警告です。これは、サーバーアクションが、本来ユーザーが操作できないはずの機密性の高いデータを変更したり、不正な操作を可能にする可能性があるため、重要なセキュリティ上の問題となります。

## 2. 特に興味深いコメント

コメントは、この問題に対する理解を深め、対策を具体的に示すために役立つ情報を提供しています。以下、特に興味深いコメントをいくつか紹介します。

*   **「Check auth/session in the server action too」（84 upvotes）:** サーバーアクション内でも、認証（auth）やセッション（session）を確認する必要があることを直接的に示唆しています。これが根本的な解決策であることを示唆しています。

*   **「If you’re wondering why, it’s because all Server Actions are exposed as public-facing API endpoints. The solution here is to use a controller to protect the ORM call」（100 upvotes）:** サーバーアクションがなぜ危険なのかを説明しています。サーバーアクションがAPIエンドポイントとして公開されるため、外部から直接呼び出される可能性があるという点を明確にしています。ORM呼び出しを保護するためにコントローラーを使用することを提案しており、具体的な対策を示唆しています。

*   **「This one raised my eyebrows. Would someone actually put a server action of that impact inline on a click with no controller or extra verification? God damn terrifying.」（48 upvotes）:** サーバーアクションが直接クリックイベントハンドラに埋め込まれ、認証や追加の検証なしに使用されている状況について、その危険性を指摘しています。開発者に対して、セキュリティ対策の重要性を強く訴えています。

*   **「I see this type of security vulnerability submitted all the time in code review, so thought it may be helpful to make a little post here.」（57 upvotes）:** 経験豊富な開発者が、コードレビューで頻繁にこの種の脆弱性を見かけるため、注意喚起のポストを作成したことを示しています。この問題が現実的であり、多くの開発者が直面する問題であることを示唆しています。

*   **「PSA: Middleware is not solving the issue as well!」（11 upvotes）:** ミドルウェアだけではこの問題の解決にならないことを指摘しています。ミドルウェアはリクエストの前に実行されるもので、サーバーアクション自体の認証を保証するものではありません。

これらのコメントは、問題の本質を理解し、具体的な対策を示唆し、この問題の深刻さを強調することで、読者の理解を深めています。


---

# Lib vs Utils vs Services Folders: Simple Explanation for Developers

**Upvotes**: 94



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1l1csl7/lib_vs_utils_vs_services_folders_simple/)

## 1. ポストの内容の説明

このRedditのポストは、ソフトウェア開発における「lib」、「utils」、「services」という3つのフォルダの使い分けについて、分かりやすく解説しています。それぞれのフォルダの目的と、そこに何を入れるべきかを説明することで、コードの整理と保守性の向上を促しています。

*   **Lib (Library) フォルダ:**
    *   **目的:** 再利用可能な、より大きなコードブロック（ミニパッケージのようなもの）。他のプロジェクトでも使える可能性のある、完成度の高いコードが格納される。
    *   **内容:** カスタムの日付操作ライブラリ、数学ライブラリ、サードパーティパッケージのローカルコピーなど。
    *   **特徴:** Utilsよりもフォーマルで、洗練されている。

*   **Utils (Utilities) フォルダ:**
    *   **目的:** 小さな、汎用的なヘルパー関数やスニペットの集まり。特定の機能やモジュールに属さない、便利な小道具。
    *   **内容:** 日付のフォーマット、ランダムなIDの生成、URLの解析など。
    *   **特徴:** Libsよりも整理されておらず、手軽に使えるコードを格納する。大きくなりすぎたら構造を見直すサイン。

*   **Services フォルダ:**
    *   **目的:** ビジネスロジックや外部との連携を扱うコード。アプリケーションが提供または利用する「サービス」。
    *   **内容:** APIとのやり取り、データベース操作、認証、外部システムとの連携など。例: ユーザーデータの取得/保存を行う`userService`、メール送信を行う`emailService`。
    *   **特徴:** 明確なスコープを持ち、アプリケーションが外部とどのように対話するか、または複雑なビジネスルールをどのように管理するかをカプセル化する。

ポストの最後では、どのフォルダに入れるか迷った場合の質問を提示し、それぞれのフォルダに入れるべきコードのタイプを簡単に判断できるようにしています。

*   ミニパッケージ？ → lib
*   汎用的なヘルパー？ → utils
*   ビジネスロジックや連携？ → services

## 2. 特に興味深いコメント

このポストに対するコメントは、内容を高く評価するものが多く、具体的な質問は含まれていません。その中でも以下のようなものが、興味深いと言えるでしょう。

*   「この説明はとても良い、ありがとう！」 (This is really nice, thanks!)：投稿内容をシンプルに賞賛しています。
*   「いくつかのプロジェクトで/libs/services/.../utilsを作成したことがある」 (I have seen and created /libs/services/.../utils in a couple of projects.)：実際にこれらのフォルダ構成を経験した開発者のコメントであり、ポストの有用性を示唆しています。
*   「大規模なコードの再編成の最中で、これらの微妙な違いが曖昧だった。ありがとう。」 (I’m in the middle of a big code reorganization and the nuances of these have been fuzzy for me. Thanks for this.)：コードの整理に役立つ情報として受け止められており、ポストが抱える課題に対して具体的な解決策を提示していることが分かります。

