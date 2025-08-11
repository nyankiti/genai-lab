
# Spring Boot 3.5.0 available now

**Upvotes**: 66



[View on Reddit](https://www.reddit.com/r/SpringBoot/comments/1kwitne/spring_boot_350_available_now/)

### 1. ポストの内容の説明

このRedditのポストは、Spring Bootの新しいバージョンである3.5.0がリリースされたことを伝えています。

### 2. 特に興味深いコメント

このポストへのコメントの中で、特に興味深いのは以下の2つです。

*   **コメント1:** Spring Boot 3.5.0へのアップデートが、`springdoc-openapi`というライブラリと互換性がないという問題が発生していることを指摘しています。この問題は、Spring Boot 3.5.0と`springdoc-openapi`の組み合わせで、アプリケーションが正しく動作しなくなる可能性があることを意味します。幸い、修正作業は既に進行中であり、問題の解決に向けて動いているようです。
*   **コメント2:** Spring Boot 3.5.0へのアップデートが、Hibernateのenhance maven pluginを使用しているアプリケーションを壊してしまうという問題が発生していることを指摘しています。これにより、Spring Boot 3.5.0にアップデートすることで、特定のHibernateプラグインを使用しているアプリケーションが正常に動作しなくなる可能性があることが示唆されています。


---

# Cloudflare recommends migrating from Pages to Workers

**Upvotes**: 151



[View on Reddit](https://www.reddit.com/r/webdev/comments/1mme85y/cloudflare_recommends_migrating_from_pages_to/)

## 1. ポストの内容の説明

このRedditのポストは、Cloudflareが提供しているWebサイト/アプリケーションのホスティングサービスに関するものです。具体的には、Cloudflareが提供する静的サイトホスティングサービス「Cloudflare Pages」から、より汎用的なサーバーレスコンピューティングプラットフォームである「Cloudflare Workers」への移行を推奨していることについて議論しています。

*   **タイトル:** 「CloudflareはPagesからWorkersへの移行を推奨しています」
*   **内容の要約:** Cloudflareが、静的サイトをホストするためのPagesから、より高度な機能を持つWorkersへの移行を推奨していることを伝えています。

## 2. 特に興味深いコメント

このポストに対するコメントは、主にCloudflareの移行推奨に対するユーザーの意見や懸念点を表しています。以下に特に興味深いコメントをいくつか紹介します。

*   **「壊れていないなら、直す必要はない」 (70 upvotes):** 多くのユーザーが抱くであろう、現状に満足している、つまり、Pagesが問題なく機能しているため、Workersへの移行を積極的に行う必要性を感じていないという意見です。
*   **「なぜCloudflareはPagesを残して、WorkersでPagesを動かすようにしないのか」 (58 upvotes):** Pagesのシンプルさを高く評価し、Workersのような複雑なものにする必要はないという意見です。Pagesの使いやすさを維持したまま、Workersのパワーを利用できれば良いのに、という提案です。Cloudflareが提供するサービスの方向性に対する疑問を投げかけています。
*   **「移行は簡単だが、Pagesにあった便利な機能が失われる」 (78 upvotes):** 移行自体は比較的簡単であると認めつつも、Pagesにあったワンクリックで分析機能を組み込むような便利な機能がWorkersでは失われることに言及しています。
*   **「WorkersへのデプロイはPagesよりも複雑」 (69 upvotes):** 実際にPagesとWorkersの両方でデプロイを試したユーザーの意見です。Pagesの簡単さを高く評価し、Workersへの移行には、より多くの手順が必要であり、Cloudflareは、より静的なウェブサイトをWorkersに簡単にデプロイできるようにするべきだと提案しています。
*   **「CNAMEドメインがWorkersで使えないのは問題」 (15 upvotes):** Workersの大きな制約として、Cloudflareゾーン外のCNAMEドメインが使用できないことを指摘しています。この制約により、顧客のドメインをCloudflareに完全に移行する必要があり、それが不便であるという意見です。

