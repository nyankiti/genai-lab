
# 'Getting into DevOps'

**Upvotes**: 888



[View on Reddit](https://www.reddit.com/r/devops/comments/yjdscp/getting_into_devops/)

## 1. ポストの内容の説明

このRedditのポストは、DevOpsの世界に足を踏み入れたいと考えている人たちに向けた情報源として作成されました。投稿者は、DevOpsの基本的な概念と、学習に役立つリソースを共有しています。

**DevOpsの定義:**

*   DevOpsは、開発チームと運用チームが「サイロ化」することなく、アプリケーションのライフサイクル全体（開発、テスト、デプロイ、運用）を通して協力し、従来は手作業で時間がかかっていたプロセスを自動化する働き方です。

**学習リソース:**

投稿者は、DevOpsについて学ぶための様々なリソースを紹介しています。

*   **書籍:**
    *   The Phoenix Project: DevOpsの文化を、フィクションの物語を通して解説した書籍。
    *   The DevOps Handbook: The Phoenix Projectの実践的な「続編」。
    *   Google's Site Reliability Engineering: Googleのエンジニアが、システムの構築、デプロイ、監視、保守について解説。
    *   The Site Reliability Workbook: Google's Site Reliability Engineering Bookの実践的なコンパニオン。
    *   The Unicorn Project: The Phoenix Projectの「続編」。
    *   DevOps for Dummies: DevOpsの入門書。
*   **エッセイ、ロードマップ、Gist、Webサイト:**
    *   Emily Woodのエッセイ: Infrastructure as Code (IaC)の重要性についての解説。
    *   2019 DevOps Roadmap: DevOpsの世界で必要とされるスキルに関するロードマップ。
    *   /u/mdaffinのコメント: DevOpsは問題解決に対する考え方であり、特定のツールや資格よりも重要であること。
    *   /u/jpswadeのコメント: DevOpsとその関連用語についての解説。
    *   Roadmap.sh: DevOpsまたはその他のオペレーションロールのためのステップバイステップガイド。

**重要なポイント:**

*   DevOpsは、特定のツールセットよりも、文化的な変化に重点が置かれています。
*   特定のスキルやツールは普遍的ではなく、推奨事項はあくまでも提案として受け止めるべきです。

## 2. 興味深いコメントの紹介

このポストに対するコメントには、様々な視点と情報が提供されており、特に以下のものが興味深いと考えられます。

*   **Kubernetesの紹介コース:** Kubernetesのアーキテクチャに関する無料の1時間入門コースへのリンクが紹介されています。Kubernetesクラスターを構築し、各コンポーネントを無効化してテストすることで、Kubernetesの仕組みを理解するユニークなアプローチです。
*   **実践重視の意見:** DevOpsへの効率的なアプローチは、実践と検索（Google検索など）であり、ビデオコースよりも実践的なタスクから得られる経験の方が大きいという意見です。
*   **DevOpsの3つの主要原則:**
    *   **自動化:** 手作業を避け、TerraformやAnsibleなどのツールを使用してシステムとアプリケーションをプロビジョニングすること。
    *   **監視:** すべてのインフラコンポーネントとアプリケーションを監視し、アラートを設定すること。Netdataなどのツールが推奨されています。
    *   **統合:** クラウドプロバイダーのAPIを理解し、監視ソリューションの機能を理解すること。
*   **Kubernetes関連のビデオ:** KustomizeとHelmに関するビデオへのリンクが紹介されており、Kubernetesツールに関する具体的な情報が提供されています。
*   **Fakespotレビュー分析:** The Phoenix Projectのレビューの信憑性を分析したFakespotの結果へのリンクが提供されています。レビューの信頼性を評価するのに役立ちます。


---

# What’s the most frustrating part of DevOps that no one talks about?

**Upvotes**: 59



[View on Reddit](https://www.reddit.com/r/devops/comments/1jqbexk/whats_the_most_frustrating_part_of_devops_that_no/)

## ポストの内容の説明

このRedditの投稿は、DevOpsに関連する日常的な課題について議論を促すものです。具体的には、以下の内容を問いかけています。

*   **投稿タイトル:** 「誰も話題にしない、DevOpsで最もイライラする部分は何か？」
*   **投稿本文:** 自動化とCI/CD（継続的インテグレーション/継続的デリバリー）は素晴らしいが、人々が見落としがちなDevOpsの日常的な問題は何か？

つまり、投稿者はDevOpsの技術的な側面（自動化など）ではなく、日々の運用やプロセス、組織文化に関連する、あまり語られない課題に焦点を当てています。

## 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか紹介します。

1.  **クリーンコード、抽象化、ドキュメントの重要性:** 「クリーンコード/抽象化/ドキュメントなどを維持することの価値を過小評価すること」というコメントは、非常に多くの賛成を得ています。これは、DevOpsに限らず、ソフトウェア開発全体における普遍的な問題を示唆しています。日々の小さな努力を怠ると、後で大規模な修正が必要になり、結果的に作業効率を大きく低下させるという教訓です。

2.  **近道をする人たち:** 「もっと速く進みたいがために『近道』をする人たち、そしてDevOpsが彼らを遅くしていると文句を言う人たち」というコメントも、重要な組織的な課題を指摘しています。DevOpsは、効率化を目指すものですが、安易なやり方は長期的に見ると逆効果になることがあります。

3.  **ログを読まない人たち:** 「パイプラインが失敗したら直してくれ」というコメントは、問題解決のための基本的な手順を怠る人たちに対する不満を表しています。ログに解決策が示されているにも関わらず、それを読まずに他人に頼ることは、非効率的であり、DevOpsの精神に反します。

4.  **依存関係と責任の所在:** 「チームの構造が悪いか、責任が誤って割り当てられたことによる依存関係に対処すること」というコメントは、組織構造とDevOpsの役割の関連性を指摘しています。DevOpsの担当者は、しばしばこのような問題に対処しなければならず、それがイライラの原因となることがあります。

5.  **DevOpsとOpsの混同:** 「DevOpsをOpsと混同している人たちが多すぎる」というコメントは、DevOpsの定義に関する誤解を指摘しています。DevOpsは単なるOpsの拡張ではなく、開発と運用の間の連携を重視する文化的な側面も持ち合わせています。


---

# Malware hiding in plain sight: Spying on North Korean Hackers

**Upvotes**: 281



[View on Reddit](https://www.reddit.com/r/devops/comments/1jpteaw/malware_hiding_in_plain_sight_spying_on_north/)

## 質問1: このポストの内容を説明してください。

このRedditの投稿は、北朝鮮のハッカー集団「Lazarus Group」がnpm（Node Package Manager）にアップロードした悪質なパッケージ「react-html2pdf.js」を、作者がリアルタイムで監視し、その過程で彼らが悪質なコードのデバッグを試みる様子を観察したという興味深い内容です。

**主な内容:**

1.  **発見と初期調査:** 作者は、npmにアップロードされた「react-html2pdf.js」というパッケージを発見。一見すると無害に見えたが、詳細に調べた結果、悪質なコードが隠されていることに気づきました。
2.  **隠された悪質なコード:** 悪質なコードは、コードの可読性を下げるために大量のスペースを使用して隠されていました。スクロールバーを動かすことで、隠されたコードが明らかになりました。このコードは、`eval()`関数を使用して、外部のURLからペイロードを読み込み、実行しようとしていました。
3.  **デバッグの観察:** 作者は、Lazarus Groupがこの悪質なコードをデバッグしている様子をリアルタイムで観察しました。彼らは、axiosモジュールをインポートし忘れたり、`eval()`で実行するデータフィールドを間違えたりするなど、いくつかのミスを犯しました。作者は、このデバッグ過程で修正された複数のバージョンを目撃しました。
4.  **ペイロードの詳細:** ペイロードは、headers `{ "x-secret-key": "locationchecking" }` が含まれている場合にのみ実行されるようになっていました。このペイロードは、以下のような活動を行うように設計されていました。
    *   アクティブなセッショントークンの盗取
    *   ブラウザプロファイルの検索とデータの盗取
    *   暗号通貨ウォレットの特定と盗取（MetaMaskなど）
    *   MacOSキーチェーンの盗取
    *   バックドアやその他のマルウェアのダウンロードと感染
5.  **Lazarus Groupの特定:** 作者は、この悪質なパッケージがLazarus Groupによるものであると特定するための証拠として、IPアドレス、URL、npmアカウント、Githubアカウントなどの情報を提供しています。
6.  **追加情報:** 作者は、ブログ記事とYouTube動画へのリンクを提供し、より詳細な情報やペイロードの詳細について解説しています。

## 質問2: このポストに対するコメントのうち、特に興味深いものを教えてください。

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「42 upvotes: thats pretty neat. and also frightening in terms of supply chain attack. devs seem to like to add dozens upon dozens of packages from all sorts of sources」**
    *   このコメントは、投稿の内容（Lazarus Groupによるサプライチェーン攻撃の試み）が興味深いと同時に、開発者が多数のパッケージを様々なソースから追加することの危険性を指摘しています。これは、npmなどのパッケージマネージャーにおけるサプライチェーン攻撃のリスクを認識し、注意を喚起しています。

*   **「19 upvotes: Sandboxed runtimes with least-privileged policies is the way to go. Nowadays most production apps use +1k npm deps, and most of the time these dependencies should only be able to run a subset of JS (no IO, no FS, no eval). Deno (a js runtime) has implemented this, https://docs.deno.com/runtime/fundamentals/security/ Also WASM runtimes have implemented it, example https://docs.wasmtime.dev/security.html」**
    *   このコメントは、サンドボックス化されたランタイム（権限を最小限に抑えた環境）の重要性を強調しています。現在のアプリケーションでは、多数のnpm依存関係が使用されており、これらの依存関係がJSのサブセット（IO、FS、evalなし）のみを実行できるようにすべきと提案しています。DenoやWASMランタイムなどの技術が、このセキュリティ対策として有効であると述べています。

*   **「11 upvotes: While I understand why you wanted to include the URL, I think it would be much safer for everyone to NOT include it. It's too easy to click something by accident, perhaps a user hovers or half-clicks it and without actually opening a new page their browser may start to load it. Just seems risky for no reason.」**
    *   このコメントは、投稿者が悪質なURLを含めたことに対して、安全性の観点から注意を促しています。誤ってURLをクリックしてしまい、意図せずマルウェアが実行されるリスクを指摘しています。


---

# Don’t Make the Same Mistake I Did

**Upvotes**: 162



[View on Reddit](https://www.reddit.com/r/devops/comments/1jpwlot/dont_make_the_same_mistake_i_did/)

## 1. ポストの内容の説明

このRedditのポストは、ソフトウェア開発者としてのキャリアをスタートさせ、フリーランス、そしてマーケティングの仕事へとキャリアチェンジした投稿者の経験談を共有しています。

**投稿者が伝えたかったこと:**

*   **経験:** 元々ソフトウェア開発者だった投稿者は、その後マーケティングの仕事に就き、12年間そこで働きました。
*   **後悔:** マーケティングの仕事に集中するあまり、プログラミングから離れてしまったことが大きな後悔となりました。テクノロジーは常に進化しており、プログラミングから遠ざかっていたことで、再び開発の仕事に就くことが難しくなっていると感じています。データベース、アプリケーション、マーケティング、デザインに関する知識はあるものの、最新のプログラミング経験がないことが問題となっています。
*   **教訓:** 投稿者は、開発者であれば、たとえ他の分野に転向しても、常に学び続け、コーディングを続けるべきだとアドバイスしています。一度離れてしまうと、復帰するのが非常に難しいと述べています。
*   **質問:** 現在、プログラミングへの復帰に取り組んでいるものの、他の人が同様の経験をした場合、どのようにして復帰できたのか、アドバイスを求めています。

**要するに:** ポストは、プログラミングスキルを維持することの重要性を強調し、キャリアチェンジに伴う技術的な後退からどのように脱却するかという問題提起をしています。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **「42 upvotes: It's not just about coding. It's also about keeping up with new frameworks, learning about new technologies and getting the relevant certifications today.」**
    *   このコメントは、投稿者の問題に対する重要な視点を提供しています。単にコーディングを続けるだけでなく、新しいフレームワーク、テクノロジー、そして関連する資格を習得することが重要であると指摘しています。技術の世界は常に変化しており、単にコーディングスキルを維持するだけでは、市場での競争力を保つことは難しいという点を強調しています。
*   **「5 upvotes: That’s why I force myself to always strictly use tools/frameworks/languages that I judge will be long-lasting even for small/stupid projects, so I can always try to be up to date. We don’t have the “privilege” of the generation of our parents, where they only became dinosaurs after retirement.」**
    *   このコメントは、長期的に使用される可能性の高いツールやフレームワークを選択することで、最新の状態を維持しようとする積極的な姿勢を示しています。また、親世代のように退職後に技術的な遅れを取るという「特権」は、今の世代にはないと述べており、継続的な学習の必要性を強く訴えています。
*   **「2 upvotes: Learn go its possible to get in a weekend and many devops jobs use it. It also evolves slowly so its less effort to keep up with.」**
    *   このコメントは、特定のプログラミング言語（Go）を学習することを提案しています。Goは比較的習得しやすく、DevOps分野で広く使用されているため、キャリアの再構築に役立つ可能性があると示唆しています。また、Goは進化が緩やかであるため、最新の状態を維持する労力も少ないという利点も指摘しています。


---

# Color palettes inspired by Mexican architecture

**Upvotes**: 94



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1jpyjys/color_palettes_inspired_by_mexican_architecture/)

## Redditのポストの内容

1.  **ポストのタイトル:** 「メキシコ建築にインスパイアされたカラーパレット」
2.  **内容:**
    *   メキシコの建築からインスピレーションを得たカラーパレットが紹介されています。
    *   145種類のカラーパレットが利用可能であることが示されています。
    *   カラーパレットのソースコードと、カラーパレットを閲覧できるウェブサイトへのリンクが提供されています。

## ポストに対するコメントで興味深いもの

1.  **肯定的なコメント:**
    *   「愛してる！」（"love it!"）というシンプルな表現で、カラーパレットに対する好意的な感情が示されています。
    *   「4番目のものは本当に素晴らしい」（"Fourth one is actually nice"）というコメントは、特定のカラーパレットへの肯定的な意見を表しています。

2.  **批判的なコメント:**
    *   「「建築」と呼ぶのは、ちょっと大げさじゃない？ ;D」（"Calling it "architecture" is a bit of a stretch isn't it? ;D"）というコメントは、カラーパレットのテーマ設定に対する疑念を表明しています。これは、カラーパレットが本当に建築からインスピレーションを得ているのか疑問を投げかけています。
3.  **ソースコードとカラーパレットへのリンクの提供:**
    *   4 upvotes: Source Code: [https://github.com/TravisBumgarner/pointless-projects/tree/main/seis-colores](https://github.com/TravisBumgarner/pointless-projects/tree/main/seis-colores)
        145 Color Palettes: [https://seis.pointlessprojects.com/](https://seis.pointlessprojects.com/)
    *   このコメントは、カラーパレットの作成に使用されたソースコードへのリンクと、実際にカラーパレットを閲覧できるウェブサイトへのリンクを提供しています。


---

# An extensive list of free and open-source SVG icon resources for your next project

**Upvotes**: 39



[View on Reddit](https://www.reddit.com/r/Frontend/comments/1jplboi/an_extensive_list_of_free_and_opensource_svg_icon/)

## 1. ポストの内容の説明

このRedditのポストは、次のプロジェクトに使える**無料かつオープンソースのSVGアイコンのリソース**をまとめたものです。投稿者は、SVGアイコンを探している人たちに向けて、役立つ情報を提供しようとしています。

## 2. 特に興味深いコメント

このポストに対するコメントで特に興味深いものは、以下の2つです。

*   **icones.js.org:**
    *   **内容:** 複数の人気アイコンライブラリを統合した検索システムへのリンクです。Vue/Nuxt/Viteのコア開発者によって作成されており、非常に使いやすいと評価されています。アイコンのIDをアプリに貼り付けるだけで利用できる手軽さが魅力です。
    *   **興味深い理由:** 複数のライブラリを横断的に検索できる点、開発者による質の高さ、そして手軽さが、実用的なツールとして注目を集めていることを示唆しています。

*   **thenounproject.com:**
    *   **内容:** 独立した大規模なSVGアイコンリソースへのリンクです。長年ブックマークされていることからも、その信頼性と豊富さが伺えます。
    *   **興味深い理由:** 長い間利用されている実績が、このリソースの価値を裏付けています。膨大な数のアイコンが利用できることも魅力です。


---

# How do you like this Resume

**Upvotes**: 56

![Image](https://i.redd.it/izihjfkq3kse1.jpeg)

[View on Reddit](https://www.reddit.com/r/SQL/comments/1jqae1f/how_do_you_like_this_resume/)

## ポストの内容の説明

1.  **投稿者の目的:** 投稿者は、SQL開発者としての職を得るために、参考にしたいレジュメについて、SQLに関する知識を持つ人々に意見を求めています。 投稿文では、実際に作成したレジュメではなく、類似のものを参考にしたいと述べています。
2.  **レジュメの評価を求める理由:** 投稿者は、SQL開発者としての経験や知識を持つ人々の意見を聞くことで、レジュメの改善点や、採用担当者に好印象を与えるポイントを把握したいと考えています。

## 特に興味深いコメント

1.  **構造とパーセンテージに対する批判 (66 upvotes):**
    *   **内容:** レジュメの構造は良いものの、多くのパーセンテージが羅列されている点が、採用担当者から見て不自然に感じられる可能性があるという意見です。パーセンテージの多用は、まるでガムの広告のようで、信頼性を損なう可能性があると指摘しています。
    *   **興味深い点:** レジュメにおける数値表現の重要性と、その表現方法によっては逆効果になる可能性を示唆しています。 具体的な数値データがない場合、パーセンテージの使用は、誇張した印象を与え、信用を失うリスクがあることを示唆しています。
2.  **2段組レイアウトに関する注意点 (20 upvotes):**
    *   **内容:** 2段組のレジュメは、一部の採用管理システム（ATS）との相性が悪く、正しく情報を読み取れない可能性があるという警告です。
    *   **興味深い点:** レジュメのレイアウトが、採用プロセスに影響を与える可能性があるという点を示しています。採用管理システムの互換性を考慮したレジュメ作成の重要性を示唆しています。
3.  **パーセンテージの具体性と信憑性に関する批判 (11 upvotes):**
    *   **内容:** レジュメの冒頭部分は良いものの、パーセンテージが多用されているため、AIによって生成されたレジュメではないかと疑われる可能性があると指摘しています。また、改善の内容が数値化しにくいものに対して、パーセンテージを使用することの不自然さも指摘しています。
    *   **興味深い点:** レジュメの信憑性について、数値データの根拠や客観性、そして具体的な説明の重要性を強調しています。また、レジュメがAIによって生成されたのではないかと疑われる可能性がある点も指摘しています。


---

# The website for (newly-released) Anime.js v4 is just incredible.

**Upvotes**: 758



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqmqkn/the_website_for_newlyreleased_animejs_v4_is_just/)

## 1. ポストの内容の説明

このRedditのポストは、新しくリリースされたアニメーションライブラリ「Anime.js v4」のウェブサイトについて言及しています。 ポストのタイトルから、ウェブサイトのデザインが非常に優れており、素晴らしいという印象を受けていることがわかります。

## 2. 特に興味深いコメント

このポストに対するコメントの中で、特に興味深いものを以下に示します。

*   **「Check out the documentation too. Insanely polished.」（140 upvotes）:** ウェブサイトだけでなく、ドキュメントも素晴らしいという意見です。ライブラリの品質を評価する上で、ドキュメントの質も重要であり、その両方が高い水準にあることを示唆しています。
*   **「f\*\*\* me that’s beautiful」（131 upvotes）:** ウェブサイトのデザインに対する強い感動を表すコメントです。
*   **「I generally don't like scrolljacking sites, but this is one of the nicest ones I've ever seen, and if it helps people build nicer ones, fair play to them.」（125 upvotes）:** スクロールジャッキング（スクロール操作によってアニメーションがトリガーされるデザイン）は、一般的に好まれない傾向にありますが、このウェブサイトのデザインは非常に優れていると評価しています。また、このデザインがより良いウェブサイト構築に貢献するなら、それは良いことだと述べています。
*   **「Good lord this is crazy good. Is there an authoring tool one can use to export these animations?」（43 upvotes）:** ウェブサイトの出来の良さを絶賛し、さらに、これらのアニメーションを生成するためのオーサリングツールが存在するのかという、より専門的な質問をしています。
*   **「Damn thats a work of art.」（9 upvotes）:** デザインを芸術作品とまで評価するコメントです。


---

# LinkedIn is awesome

**Upvotes**: 417

![Image](https://i.redd.it/22cupl940nse1.jpeg)

[View on Reddit](https://www.reddit.com/r/webdev/comments/1jql6z0/linkedin_is_awesome/)

## ポストの内容の説明

1.  **タイトルの意味:** ポストのタイトルは「LinkedIn is awesome (LinkedIn最高)」です。
2.  **投稿文の意味:** 投稿文は「Motivation to keep applying for that role (あの役職に応募し続けるモチベーション)」です。これは、LinkedInを使って仕事を探すことに対する皮肉を込めた表現だと考えられます。つまり、LinkedIn上での仕事探しは、まるでモチベーションを保つのが難しい、苦行のようであるということを示唆しています。

    投稿者は、LinkedInでの仕事探しがいかに大変で、なかなかうまくいかないかということを暗に伝えている可能性があります。

## 特に興味深いコメント

1.  **「43 upvotes: I assume it failed to fetch the actual number and defaulted to 0. Still pretty funny though.」**
    *   このコメントは、LinkedIn上で何らかの数字が表示されなかったか、あるいは0と表示されたことに対しての言及です。LinkedInの機能の不具合を推測し、皮肉を込めています。
2.  **「15 upvotes: "168,915 others with the title \*\*Software Engineer\*\* stay sharp with our daily \*\*Zip\*\* puzzle." every time I turn off a notification for their stupid games, they just send a different game the next time.」**
    *   このコメントは、LinkedInが提供するゲームなどの通知に対して不満を述べています。不要な通知をオフにしても、別のゲームの通知が送られてくることにうんざりしているようです。
3.  **「27 upvotes: git commit -m "implemented youAreLoserNotification(loserId: string)"」**
    *   このコメントは、プログラマーが使うgitのコミットメッセージを模倣して、LinkedInへの皮肉を表現しています。このメッセージは、LinkedInがユーザーに対して「あなたは負け組」という通知を実装したかのようなユーモラスな表現です。

これらのコメントは、LinkedInに対するユーザーの様々な感情を反映しており、プラットフォームの使用感、特に通知や機能について、批判的またはユーモラスな意見を述べています。


---

# how do you code everyday without getting burnt out

**Upvotes**: 84



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqsn2i/how_do_you_code_everyday_without_getting_burnt_out/)

## 質問への回答

### 1. ポストの内容の説明

このRedditの投稿は、プログラマーが「燃え尽き症候群」に陥っている現状について吐露するものです。投稿者は、過去6ヶ月間ほぼ休みなく働き、終業後も作業を余儀なくされた結果、コードやタスク管理ツール（Jira）を見るだけで憂鬱になるほど疲弊していると述べています。5年の経験を持ちながらも、この職業を選んだことを後悔し、精神的な負担や、一日中画面に向かうことによる孤独感に苦しんでいるようです。最終的に、この状況に対するアドバイスを求めています。

### 2. 特に興味深いコメント

この投稿に対するコメントの中で、特に興味深いものをいくつか挙げます。

*   **PTO取得の推奨 (88 upvotes):** これは、燃え尽き症候群に対する最も一般的なアドバイスの一つであり、シンプルながらも有効な解決策です。休暇を取ることで、心身ともにリフレッシュし、仕事への意欲を取り戻すことができます。

*   **環境を変えることの提案 (66 upvotes):** コワーキングスペースの利用を推奨し、自宅以外の場所で働くことで、他の人と交流し、精神的な負担を軽減することを提案しています。また、残業をしないこと、必要であれば転職も視野に入れることを提案しており、労働環境の改善を促しています。

*   **仕事への向き合い方の提案 (24 upvotes):** 燃え尽き症候群は頻繁に起こるものであり、休暇と心構えを変えることが重要だと指摘しています。また、クライアントの期待に応えることが仕事であるという考えを示し、仕事への向き合い方を変えることを提案しています。興味のある仕事を探すことも推奨しています。

*   **仕事とプライベートの区別 (34 upvotes):** 契約時間内だけ働き、それ以上は仕事をしないというシンプルな対処法を提示しています。これは、仕事とプライベートのバランスを保ち、燃え尽き症候群を防ぐ有効な手段の一つです。


---

# I made a “Time Machine” page showing what my site might’ve looked like from 1999 to 2016

**Upvotes**: 69



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqpwcs/i_made_a_time_machine_page_showing_what_my_site/)

## 1. ポストの内容の説明

このRedditのポストは、あるユーザーが自身のウェブサイトを「タイムマシン」のように再現したページを作成したことを報告しています。そのページは、1991年から2016年までのウェブデザインの変遷を、それぞれの時代のデザインスタイル（HTML、Flash、React-Flexboxなど）で表現しています。

投稿者は、各年代のデザインを再現するために、リサーチを行ったり、父親（昔ウェブサイトを制作していた）にアドバイスを求めたりして、当時の技術的な制約やフォントなども含めて、できる限り忠実に再現したと述べています。

投稿の目的は、古いウェブデザインへのトリビュートであり、興味のある人に見てもらって感想を聞きたいと考えています。投稿には、実際に作成された「タイムマシン」ページのURLも記載されています。

## 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **最初のコメント（24 upvotes）:** このコメントは、アイデア自体は面白いと評価しつつ、デザインの再現性について具体的な改善点を指摘しています。特に、90年代後半から2000年代前半に見られたデザインスタイル（エンボス加工のボタン、ピクセルボーダー、リンク交換バナーなど）が、テキストとボックスだけのシンプルな表現になっている点が、物足りないと指摘しています。この指摘は、投稿者のウェブサイト再現に対する取り組みをさらに向上させるための具体的なフィードバックとして有効です。
*   **2番目のコメント（8 upvotes）:** このコメントは、シンプルな賛同を示しており、当時のウェブデザインを象徴する`<blink>`タグを使用して、投稿を評価しています。
*   **「my dad was building sites back then」というコメントに対する反応:** このコメントは、投稿者の父親が昔からウェブサイト制作に関わっていたという事実に触発され、「自分が年老いたと感じる」という反応を示しています。これは、テクノロジーの進化や過去のデザインに対する懐古的な感情を表現しており、ウェブデザインの歴史に対する感慨深さを表しています。


---

# Am I the only one who hates gimmicky heavy scroll animation?

**Upvotes**: 146



[View on Reddit](https://www.reddit.com/r/webdev/comments/1jqimil/am_i_the_only_one_who_hates_gimmicky_heavy_scroll/)

## ポストの内容の説明

1.  **投稿者の不満:** 投稿者は、ウェブサイトでスクロールすると再生される派手なアニメーション（CGIアニメ映画のような）を嫌っていると述べています。
2.  **不満の理由:**
    *   **パフォーマンスへの影響:** 重いアニメーションは、読み込みの遅延やインターネット接続が遅い場合に、ユーザーがウェブサイトのコンテンツを完全に閲覧できない原因となる可能性があると指摘しています。
    *   **ユーザビリティへの影響:** アニメーションは、ユーザーを混乱させ、本来の目的から気をそらす可能性があると述べています。
3.  **良い例:** 投稿者は、[Fly.io](https://fly.io/)のホームページを例に挙げ、アニメーションがないにもかかわらず、優れたウェブサイトの例としています。
4.  **投稿者の意見:** 投稿者は、派手なアニメーションを多用するウェブサイトが、r/web\_designのようなコミュニティで賞賛されていることに不満を感じています。

## 特に興味深いコメント

1.  **スクロールホイールへの影響:** 「スクロールホイールが壊れるのではないか」と感じるほど、スクロール量が増えることへの不満が述べられています。通常のスクロールよりも何倍もスクロールしなければならない場合があるため、使い勝手が悪いと感じているようです。
2.  **「できるからといって、やるべきではない」:** ウェブデザインにおける「できることすべてをする必要はない」という、技術的実現性とユーザビリティのバランスを意識することの重要性を示唆するコメントです。
3.  **アニメーションの適切な利用:** アニメーションや特殊なスクロール挙動には、利用すべき場面があることを認めていますが、優れたUXを維持するためには、実装に十分な時間と労力をかける必要があると指摘しています。
4.  **「スクロールを奪わないで」:** 投稿者と同様に、派手なアニメーションによるスクロール体験を嫌い、そのようなウェブサイトを閉じてしまうという感情的な反応を示しています。
5.  **「Am I the only one…？」への回答:** 「自分だけではない」という、多くの人が同じ意見を持っていることを示す簡潔なコメントです。

