
# Do you monitor SSL certificate expiry dates?

**Upvotes**: 45



[View on Reddit](https://www.reddit.com/r/devops/comments/1k1hypz/do_you_monitor_ssl_certificate_expiry_dates/)

### 1. ポストの内容の説明

このRedditのポストは、SSL証明書の有効期限を監視しているかどうか、そしてその理由について、他のDevOpsエンジニアに尋ねるものです。

*   **投稿者の質問:**
    *   SSL証明書の有効期限を監視している人がいるのか？
    *   もし監視しているなら、なぜ監視を始めたのか？
*   **投稿者の背景:**
    *   投稿者は、SSL証明書を監視する機能を備えたプロジェクトを最近リリースした。
    *   自身は、証明書の有効期限切れを防ぐために監視を行うことを好んでいる。
*   **目的:**
    *   他のr/devopsコミュニティのメンバーが、SSL証明書の有効期限についてどのような対応をしているのかを知りたい。

### 2. 特に興味深いコメント

このポストに対するコメントで、特に興味深いものを以下に示します。

*   **コメント1 (65 upvotes):** "Automate the renewal. Monitor the automation. Manually renewed certs is not a DevOps approach."
    *   このコメントは、SSL証明書の有効期限監視だけでなく、自動更新の重要性を強調しています。DevOpsの原則に基づき、手動での証明書更新は非効率的であり、自動化されたプロセスを監視することが推奨されています。
*   **コメント2 (46 upvotes):** "We use uptime kuma"
    *   uptime kumaは、Webサイトやサービスの状態を監視するためのオープンソースツールです。このコメントは、特定のツールを使用してSSL証明書の有効期限を監視していることを示しています。
*   **コメント3 (29 upvotes):** "We don't which is why expiration month is always a cluster fuck."
    *   このコメントは、SSL証明書の有効期限を監視していないことによる問題点を皮肉を込めて述べています。有効期限切れが頻繁に発生し、大きな問題となっている状況を示唆しています。
*   **コメント4 (16 upvotes):** "SSL certificate monitoring is easily visible on \[https://pulsetic.com](https://pulsetic.com) \- it's free for up to 10 monitors."
    *   このコメントは、特定のツール (pulsetic.com) を使用してSSL証明書を監視できることを提案しています。無料プランがあることも示しています。
*   **コメント5 (14 upvotes):** "We use grafana probes to monitor those"
    *   Grafanaは、データ可視化と監視のためのプラットフォームです。このコメントは、Grafanaを使用してSSL証明書の監視を行っていることを示しています。

---

# PostgreSQL or SQL Server?

**Upvotes**: 44



[View on Reddit](https://www.reddit.com/r/SQL/comments/1k0np3d/postgresql_or_sql_server/)

## 1. ポストの内容の説明

このRedditのポストは、SQL初心者である投稿者が、PostgreSQLとSQL Serverのどちらを学ぶべきか迷っている状況を共有しています。投稿者は、DatacampのSQL入門コースを修了し、卒業後にアメリカで働く予定です。

投稿者は、どちらのデータベースシステムを学ぶべきか、それぞれの利点や、将来のキャリアパスへの影響についてアドバイスを求めています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

*   **PostgreSQLをわずかに推奨するコメント (34 upvotes):** 他のデータベースシステムがPostgreSQLに近い構文を持つ傾向があるため、PostgreSQLを学ぶ方が、将来他のデータベースに移行する際に学習コストが低くなる可能性があると指摘しています。

*   **SQL Serverを推奨するコメント (11 upvotes):** SQL Serverの専門家であるコメント投稿者は、SQL Server Developer Editionを無料で利用できること、無料のサンプルデータベース（Northwind）が利用できること、そしてMicrosoft Learnで無料のトレーニングが利用できることを挙げています。SQL Serverの学習環境が充実している点を強調しています。

*   **どちらでも問題ないとするコメント (9 upvotes):** SQL Serverを学んだ経験から、他のデータベースでも構文の違いを理解することで対応できると述べています。データベース間の構文の違いは、Node vs .NETのような技術スタックの違いほど大きくないという意見も示しています。

*   **SQL Serverの構文の特殊性を指摘するコメント (6 upvotes):** SQL Serverの構文が、他の主要なデータベースと異なる点をいくつか具体的に挙げています (例: `APPLY` vs `LATERAL JOIN`, `+` vs `||` for string concatenation, `TOP` vs `LIMIT`, `STRING_AGG`関数の実装の遅さ)。ただし、これらの違いはわずかで、他のデータベースに移行する際に少しの翻訳作業で済むと付け加えています。また、Microsoft環境以外ではPostgreSQL、Microsoft環境ではSQL Serverの方が良いという、環境による使い分けを提案しています。


---

# Is there a "LeetCode" equivalent for practicing Web Development?

**Upvotes**: 126



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k1jpv2/is_there_a_leetcode_equivalent_for_practicing_web/)

## ポストの内容の説明

1.  **質問の核心**: ポストの投稿者は、LeetCodeのような、データ構造とアルゴリズム（DSA）の練習に特化したプラットフォームに相当する、Web開発の練習に使えるプラットフォームを探しています。
2.  **目的**: フロントエンド、バックエンド、フルスタックの開発タスク、または現実的なシナリオに基づいた小規模プロジェクトを練習できるような場所を求めています。
3.  **投稿文の締めくくり**: 提案を求めており、感謝の言葉で締めくくられています。

## 特に興味深いコメント

1.  **CSS Zen Garden**: CSSの練習に使えるプラットフォームとして紹介されています。これは、2010年より前から存在しているとコメントされており、歴史の長さから信頼性が伺えます。
2.  **SQL Practice**: SQLの練習に特化したプラットフォームとして紹介されています。
3.  **Big Frontend**: Web開発の練習に使えるプラットフォームとして紹介されており、具体的なURLも提供されています。
4.  **Frontendmentor & Greatfrontend**: LeetCodeと完全に同じではないものの、Web開発の練習に役立つプラットフォームとして紹介されています。具体的なURLはGreatfrontendのみ提供されています。


---

# What's the one web dev framework or library you can't live without?

**Upvotes**: 146



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k1b0oc/whats_the_one_web_dev_framework_or_library_you/)

## ポストの内容の説明

この Reddit の投稿は、Web 開発者に対して、彼らが最も頼りにしている Web 開発ツール、フレームワーク、またはライブラリについて尋ねるものです。投稿者は、バックエンド、フロントエンド、またはその間のあらゆるものを含め、どんなものでも構わないと述べています。また、なぜそのツールが他のツールよりも優れていると感じるのか、その理由も尋ねています。

## 特に興味深いコメント

この投稿へのコメントの中で、特に興味深いものをいくつか紹介します。

*   **Prettier**: コードフォーマッターで、チーム開発においてコードの整合性を保つために非常に役立ちます。
*   **Datefns**: 日付操作のための JavaScript ライブラリ。
*   **Zod**: 型検証ライブラリ。入力データの検証に利用し、データ型を正しく保つことが重要です。
*   **react-query**: React 用のデータフェッチライブラリ。
*   **Playwright**: UI テストのためのツール。ブラウザの自動化を通じて、Web アプリケーションのテストを効率的に行うことができます。

