
# 'Getting into DevOps'

**Upvotes**: 885



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

1.  **ポストの内容の説明**

このRedditポストは、DevOpsに興味を持つ初心者向けのリソース集です。以下のような内容がまとめられています。

*   **DevOpsの定義:** AWSの記事へのリンクを提示し、DevOpsとは開発チームと運用チームが連携し、アプリケーションライフサイクル全体で協力するワーク環境であると説明しています。また、従来手動で行われていたプロセスを自動化することも重要であると述べています。

*   **おすすめの書籍:** DevOpsの文化や実践について学べる書籍のリストが紹介されています。
    *   *The Phoenix Project*：DevOps文化を小説形式で解説。
    *   *The DevOps Handbook*：*The Phoenix Project*の実践的な続編。
    *   *Google's Site Reliability Engineering*：Googleのエンジニアがシステムの構築、デプロイ、監視、保守について解説。
    *   *The Site Reliability Workbook*：*Google's Site Reliability Engineering*の実践的な補助教材。
    *   *The Unicorn Project*：*The Phoenix Project*の続編。
    *   *DevOps for Dummies*：初心者向け。

*   **学ぶべきこと:** DevOpsエンジニアに必要なスキルや知識についての情報源が紹介されています。
    *   Emily Woodのエッセイ：Infrastructure as Code（IaC）の重要性を解説。
    *   2019 DevOps Roadmap：DevOpsに必要なスキルのロードマップ。ただし、特定のユースケースに偏っている可能性があるとの注意書きがあります。
    *   /u/mdaffinのコメント：DevOpsは問題解決に対する考え方（マインドセット）であり、特定のツールや資格よりも問題解決能力が重要であると強調。
    *   /u/jpswadeのコメント：DevOpsの定義と関連用語の説明。
    *   Roadmap.sh：DevOpsやその他の運用ロールのためのステップバイステップガイド。

*   **DevOpsの性質:** DevOpsは常に変化しており、特定のツールセットよりも文化的な変化が重要であると強調しています。スキルやツールセットの推奨はあくまで提案として受け止めるべきだと述べています。

2.  **特に興味深いコメント**

いくつかのコメントが興味深いですが、特に以下のコメントが参考になります。

*   **実践重視のコメント (123 upvotes):** このコメントは、動画や書籍に時間を費やすよりも、実践とGoogle検索を通じて学ぶことの重要性を強調しています。100daysofdevopsプロジェクトへのリンクも提示しており、具体的なタスクを通じてスキルを習得することを推奨しています。DevOpsの経験豊富なメンターとしての視点から、リストアップされたリソースがすでにDevOpsに携わっている人向けであると指摘している点も重要です。

*   **3つの主要原則のコメント (58 upvotes):** DevOpsの原則を「自動化」「モニタリング」「統合」の3つに集約し、それぞれの原則について具体的なツール（Terraform, Ansible, Netdata）を紹介しています。特に、モニタリングの重要性を強調し、顧客体験を監視するためのポイントを簡潔にまとめています。

これらのコメントは、DevOpsを学ぶ上で、実践的な経験と基礎原則の理解が重要であることを示唆しています。


---

# Malware hiding in plain sight: Spying on North Korean Hackers

**Upvotes**: 160



[View on Reddit](https://www.reddit.com/r/devops/comments/1jpteaw/malware_hiding_in_plain_sight_spying_on_north/)

はい、承知いたしました。以下に、ご質問に対する回答をmarkdown形式で記述します。

### 1. このポストの内容

このRedditのポストは、投稿者が、北朝鮮のAPTグループであるLazarus groupがNPM（Node Package Manager）にアップロードした悪意のあるパッケージを監視し、彼らがリアルタイムでエクスプロイトをデバッグしようとする様子を観察したという内容です。

具体的には、以下の内容が記述されています。

*   **マルウェアの隠蔽:** Lazarus groupは、`react-html2pdf.js`というパッケージにマルウェアを仕込みました。彼らは、コードの末尾に大量の空白文字を挿入することで、悪意のあるコードを画面外に隠蔽していました。
*   **マルウェアの動作:** 隠蔽されたコードは、`axios`というライブラリを使って、悪意のあるエンドポイントからペイロードをダウンロードし、`eval`関数を使って実行しようとします。このペイロードは、以下のような悪意のある動作を行います。
    *   アクティブなセッショントークンの窃取
    *   ブラウザプロファイルの検索と、キャッシュやデータの窃取
    *   暗号通貨ウォレットの特定と窃取
    *   MacOSキーチェーンの窃取
    *   バックドアと更なるマルウェアのダウンロードと感染
*   **デバッグの試行:** 投稿者は、Lazarus groupが`axios`ライブラリをインポートまたは`require`していないため、マルウェアが動作しないことに気づきました。その後、Lazarus groupは10分おきに新しいバージョンをアップロードし、リアルタイムでデバッグを試みました。
*   **Lazarus groupの特定:** 投稿者は、過去に同様のペイロードを確認しており、IPアドレス、URL、NPMアカウント、GitHubアカウントなどの複数の指標から、この攻撃がLazarus groupによるものであると特定しました。

要するに、この投稿は、サプライチェーン攻撃の試みをリアルタイムで監視し、その過程を詳細に記録した貴重な情報を提供しています。

### 2. このポストに対するコメントのうち、特に興味深いもの

このポストに対するコメントの中で、特に興味深いのは以下の3つです。

1.  **サプライチェーン攻撃への懸念:** 最初のコメントは、この事件がサプライチェーン攻撃の恐ろしさを示している点を指摘しています。開発者が多数のパッケージを依存関係として追加することの危険性について触れており、セキュリティ対策の重要性を強調しています。

    > "thats pretty neat. and also frightening in terms of supply chain attack. devs seem to like to add dozens upon dozens of packages from all sorts of sources"
2.  **URLの安全性への懸念:** 2番目のコメントは、投稿に含まれるURLの安全性について懸念を示しています。誤ってクリックした場合のリスクを指摘し、URLを含めることの是非について疑問を呈しています。

    > "While I understand why you wanted to include the URL, I think it would be much safer for everyone to NOT include it. It's too easy to click something by accident, perhaps a user hovers or half-clicks it and without actually opening a new page their browser may start to load it. Just seems risky for no reason."
3.  **サンドボックス化されたランタイムの提案:** 3番目のコメントは、サンドボックス化されたランタイムと最小権限のポリシーを使用することを提案しています。`Deno`や`WASM`といった具体的なランタイムの例を挙げ、依存関係のあるコードが実行できる操作を制限することの重要性を説明しています。

    > "Sandboxed runtimes with least-privileged policies is the way to go. Nowadays most production apps use +1k npm deps, and most of the time these dependencies should only be able to run a subset of JS (no IO, no FS, no eval). Deno (a js runtime) has implemented this, [https://docs.deno.com/runtime/fundamentals/security/](https://docs.deno.com/runtime/fundamentals/security/) Also WASM runtimes have implemented it, example [https://docs.wasmtime.dev/security.html](https://docs.wasmtime.dev/security.html)"

これらのコメントは、今回の事件がもたらすセキュリティ上のリスク、情報の共有方法、そして今後の対策について、重要な視点を提供しています。特に、サンドボックス化されたランタイムの提案は、将来的なセキュリティ対策の方向性を示唆しており、非常に興味深いと言えます。


---

# Don’t Make the Same Mistake I Did

**Upvotes**: 39



[View on Reddit](https://www.reddit.com/r/devops/comments/1jpwlot/dont_make_the_same_mistake_i_did/)

1.  **ポストの内容の説明**

このRedditの投稿は、ソフトウェア開発者としてのキャリアから、マーケティング分野での自動化ツール開発という長期の仕事に移行した経験を持つ人物からのアドバイスです。投稿者は、高収入で安定した仕事に就いたものの、その間にコーディングを全く行わなくなったことを後悔しています。技術は急速に進歩し、現在、ソフトウェア開発の仕事に戻ろうとしても、最新の技術やコーディングスキルがないために苦労しているとのことです。

投稿者は、自身の経験から、開発者に対して「たとえ他の分野に転向しても、コーディングを止めないで、学び続け、開発を続けるように」と強く勧めています。一度遅れを取ってしまうと、再スタートが非常に困難になるからです。現在、投稿者はコーディングスキルを取り戻すために努力していますが、以前にコーディングから離れなければよかったと後悔しています。最後に、同じような経験をした人がいれば、どのようにして元の状態に戻ったのかアドバイスを求めています。

2.  **特に興味深いコメント**

この投稿に対するコメントの中で特に興味深いのは以下の2つです。

*   **7 upvotesのコメント:** 「It's not just about coding. It's also about keeping up with new frameworks, learning about new technologies and getting the relevant certifications today.」

    このコメントは、投稿者の問題点をより具体的に指摘しています。単にコーディングを続けるだけでなく、新しいフレームワークやテクノロジーを常に学び、必要に応じて資格を取得することも重要であると述べています。技術の進歩が速い現代において、継続的な学習が不可欠であることを強調しており、投稿者の経験に対するより深い洞察を提供しています。

*   **1 upvoteのコメント:** 「Same boat, I've learned a lot on the cyber security front & accepted I will likely never be capable of app / backend development roles again. Pipelines, scripts, and other sorts no problem」

    このコメントは、投稿者と同じような状況にある人の経験を共有しています。このコメント投稿者は、サイバーセキュリティの分野で多くのことを学びましたが、アプリケーションやバックエンド開発の役割に戻ることは難しいと認識しています。しかし、パイプラインやスクリプトなど、他の関連スキルは問題なく扱えることを示しており、キャリアチェンジやスキルアップの方向性を示唆しています。これは、完全に元の状態に戻るのが難しい場合でも、現在のスキルを活かせる別の道を探すことができるという希望を与えます。


---

# Color palettes inspired by Mexican architecture

**Upvotes**: 40



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1jpyjys/color_palettes_inspired_by_mexican_architecture/)

はい、承知いたしました。以下に、ご質問への回答をmarkdown形式で示します。

---

1.  **このポストの内容を説明してください。**

このRedditのポストは、メキシコの建築にインスパイアされたカラーパレットを紹介するものです。投稿者は、自身が作成したカラーパレットのソースコードが格納されているGitHubリポジトリへのリンクと、145種類のカラーパレットが掲載されているウェブサイトへのリンクを共有しています。つまり、メキシコの建築様式から着想を得た様々な色の組み合わせを紹介し、それらを自身のプロジェクトで利用したいユーザーのために情報を提供しています。

2.  **このポストに対するコメントのうち、特に興味深いものを教えてください。**

特に興味深いコメントは以下のとおりです。

*   **"Fourth one is actually nice" (2 upvotes):** このコメントは、投稿されたカラーパレットに対する主観的な評価を示しています。具体的なカラーパレット番号は示されていませんが、「4番目」のパレットが特に良いと感じたユーザーがいることがわかります。この意見は、他のユーザーがカラーパレットを選ぶ際の参考になる可能性があります。
*   **"Calling it "architecture" is a bit of a stretch isn't it? ;D" (-6 upvotes):** このコメントは、ポストのタイトルに対する批判的な意見です。「メキシコの建築」という表現が適切ではないと感じたユーザーがいたことを示しています。また、-6 upvotesという評価から、他のユーザーもこの意見に同意しているか、あるいはユーモラスなコメントとして受け止めている可能性があります。このコメントは、"メキシコの建築"という言葉に対する解釈の違いを示唆しており、興味深いです。

これらのコメントは、カラーパレットに対する肯定的な意見と否定的な意見の両方を示しており、議論を呼ぶ可能性のある点を示唆しています。


---

# An extensive list of free and open-source SVG icon resources for your next project

**Upvotes**: 33



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1jplboi/an_extensive_list_of_free_and_opensource_svg_icon/)



---

# What's a powerful SQL feature that not many people may know about?

**Upvotes**: 79



[View on Reddit](https://www.reddit.com/r/SQL/comments/1jptu2r/whats_a_powerful_sql_feature_that_not_many_people/)



---

# Best Netlify alternatives?

**Upvotes**: 65



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jppnv4/best_netlify_alternatives/)



---

# Laid off twice in two years at startups

**Upvotes**: 104



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jpl1b2/laid_off_twice_in_two_years_at_startups/)



---

# The product always feels off when you build for people you don’t understand

**Upvotes**: 268

![Image](https://i.redd.it/lm46yby80cse1.png)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1jpdss1/the_product_always_feels_off_when_you_build_for/)



---

# Does your company use activity tracking software like Hubstaff or Monitask?

**Upvotes**: 76



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jpitc0/does_your_company_use_activity_tracking_software/)



---

# Why We Moved off Next.js

**Upvotes**: 256



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1jphzy5/why_we_moved_off_nextjs/)



---

# Lessons from Next.js Middleware vulnerability CVE-2025-29927: Why Route-Level Auth Checks Are Worth the Extra Work

**Upvotes**: 27



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1jpqw5h/lessons_from_nextjs_middleware_vulnerability/)


