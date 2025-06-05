
# Does anyone in the DevOps world uses Bash?

**Upvotes**: 149



[View on Reddit](https://www.reddit.com/r/devops/comments/1l3465f/does_anyone_in_the_devops_world_uses_bash/)

## ポストの内容

1.  **投稿者の質問:** DevOpsエンジニアとして10年の経験を持つ投稿者が、DevOpsの世界でBashを現在も頻繁に使用している人がいるのかを尋ねています。
2.  **投稿者の背景:** 投稿者は自身も毎日Bashを使用しており、他のDevOpsエンジニアがどのような状況で使用しているのかを知りたいと考えています。

## コメントで興味深いもの

*   **「691 upvotes: Who isn’t?」:** 多くの人がBashを日常的に使用していることを示唆しています。
*   **「131 upvotes: I mean I try to keep my Bash under fifty lines or so before replacing a script with Go or Python, but it’s still there in a number of little scripts in pretty much every repo I touch.」:** Bashスクリプトの規模を小さく保ち、より複雑な処理にはGoやPythonなどの言語を使用する一方、Bashは小規模なスクリプトやプロジェクトに不可欠であるという意見を示しています。
*   **「142 upvotes: Whoever told you that must be delusional. Any modern day CI/CD pipeline using Linux-based runners will use Bash for running their processes. Someone must be fucking with ya.」:** CI/CDパイプラインなどのLinuxベースの環境ではBashが不可欠であり、Bashを使わないという情報が誤っている可能性を指摘しています。
*   **「63 upvotes: Yep, its my automation glue.」:** Bashが自動化において重要な役割を果たしていることを示唆しています。
*   **「51 upvotes: Who doesn’t?」:** 多くの人がBashを日常的に使用していることを示唆しています。

---

# Cloud taught me to stop thinking like a “Python dev” and start thinking like a systems person

**Upvotes**: 72



[View on Reddit](https://www.reddit.com/r/devops/comments/1l32fp7/cloud_taught_me_to_stop_thinking_like_a_python/)

## 1. ポストの内容の説明

このポストは、あるPythonプログラマーがクラウド環境での開発を通して得た気づきについて語っています。彼は、従来の「Python開発者」としての考え方から、「システムエンジニア」としての考え方へとシフトしたと述べています。

具体的には、従来の開発では、コードを書いて、例外処理を行い、再利用性を考慮すれば完了だったのに対し、クラウド環境では、以下のような点を考慮する必要が出てきたと説明しています。

*   Lambda関数のリトライ時の動作
*   リージョンの可用性
*   インフラコストの漏洩

彼は、クラウド開発を通じて、コードレベルを超えて、システム全体を俯瞰し、システムの障害、コスト、スケーリングなどを意識するようになったと述べています。最初は戸惑ったものの、結果として、より良いエンジニアになれたと感じています。

最後に、同じような経験をした人がいるか、質問を投げかけています。

## 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **"Distributed systems are fun. Scaling is hard and brings up a completely new breed of systems problems. You need to think like a systems architect."** (32 upvotes): クラウドに限らず、分散システム全体に言えることとして、スケーリングの難しさと、システム設計の重要性を指摘しています。
*   **"You just described a Senior Software Engineer"** (13 upvotes): ポストの内容が、シニアソフトウェアエンジニアの役割そのものであると指摘しています。これは、クラウド開発を通して、より高度なエンジニアリングスキルが求められるようになったことを示唆しています。
*   **"To me as a "classically trained" developer...this is really funny. These things you're worrying about got abstracted in to meaningless-ness..."** (11 upvotes): 従来のプログラミング教育を受けた開発者から見ると、クラウドで意識すべき点（ハードウェア、ネットワークなど）は、抽象化されて見えなくなっていた部分であり、クラウドが、その抽象化を解除し、開発者に新たな視点を与えたという視点が興味深いです。また、「Python a thing」という表現で、単に言語を使って何かを作ることに固執する傾向を皮肉っています。さらに、クラウドが、非効率なコードとコストの直接的な関係性をもたらしたことで、より注意深く開発を行う必要性を指摘しています。
*   **"Thanks! this gave me a new perspective now. As I write lambda functions a lot, so from now onwards I gotta focus on other things such as costs, scaling, multi-region access and sharing data in s3 buckets across different regions. I am still new to this stuff tho"** (1 upvotes): ポストが、読者の視点を変え、今後の開発における注意点を示唆したというコメントです。クラウド開発初心者が、具体的な課題への意識を高めるきっかけになったことがわかります。


---

# How much CSS is too much / hard to render?

**Upvotes**: 52



[View on Reddit](https://www.reddit.com/r/webdev/comments/1l30y5a/how_much_css_is_too_much_hard_to_render/)

## ポストの内容の説明

このRedditのポストは、CSS（Cascading Style Sheets）のコード量に関するものです。投稿者は、自身のウェブサイトのCSSファイルが約700行に達していることに少し不安を感じています。CSSファイルは、ウェブサイトのデザインやレイアウトを定義するもので、投稿者は、そのコード量が多いと、ウェブサイトの読み込み速度に悪影響が出るのではないかと懸念しています。

投稿文では、700行のCSSが4〜5ページに分散されており、その中には空白行やコメントも含まれていることが言及されています。投稿者は、このCSSの量が多いかどうか、またウェブサイトの読み込みに影響があるかどうかを質問しています。

## 特に興味深いコメント

このポストに対するコメントで、特に興味深いものをいくつか挙げます。

*   **「That's absolutely nothing. If you want to, you could minify the file.」**: 700行のCSSは全く多くないという意見です。ファイルサイズを小さくするために、CSSファイルをminify（圧縮）することを提案しています。
*   **「I'm not gonna lie, I chuckled a bit.」**: 投稿者のCSSコード量に対する懸念が、ウェブ開発の世界では非常に一般的なことであるため、面白がって笑ってしまったというコメントです。
*   **「wait until you find out about js」**: JavaScriptのコード量に比べれば、CSSの700行は大したことない、という意味のコメントです。
*   **「It's not too much. As soon as you start using some CSS framework you'll have thousands of lines of CSS.」**: CSSフレームワークを使うと、簡単に何千行ものCSSコードになるため、700行は全然多くない、という意見です。
*   **「Regardless why do you think it should have an impact? What's your use case? Have you tried diagnose and profile it by yourself? Be curious.」**: 影響があると思う理由は何ですか？あなたのユースケースは何ですか？自分で診断やプロファイリングを試しましたか？と、投稿者に問いかけています。問題解決へのアプローチを促す、実践的なコメントです。
*   **「https://a.singlediv.com」**: 単一の`<div>`要素だけで様々なデザインを作成できることを示すウェブサイトへのリンクです。CSSの表現力の豊かさを示唆しています。


---

# Nextjs

**Upvotes**: 541

![Image](https://i.redd.it/sjf4tk320x4f1.jpeg)

[View on Reddit](https://www.reddit.com/r/nextjs/comments/1l35z21/nextjs/)

## ポストの内容の説明

1.  **ポストのタイトル:** "Nextjs"  
    *   このタイトルは、Next.jsというJavaScriptフレームワークについて言及していることを示唆しています。Next.jsは、Reactをベースにした、サーバーサイドレンダリングや静的サイト生成など、Webアプリケーション開発に役立つ機能を提供するフレームワークです。

2.  **ポストの内容の推測:**  
    *   タイトルがNext.jsであることから、このポストはNext.jsに関するものであると推測できます。具体的な内容は、ユーザーがNext.jsについて何かを質問したり、Next.jsを使った開発での問題や経験を共有したり、あるいは単にNext.jsについて言及するだけの可能性もあります。投稿本文がないため、正確な内容は不明です。

## 特に興味深いコメント

このポストに対するコメントで、特に興味深いものをいくつか紹介します。

1.  **"git commit -m "Fix deployment"" (71 upvotes):**  
    *   これは、Gitを使ったバージョン管理でのコミットメッセージを示唆しています。具体的には、デプロイ（公開）に関する問題を修正したことを示唆しています。このコメントは、Next.jsプロジェクトのデプロイに関する一般的な問題を連想させ、多くのユーザーに共感を得ている可能性があります。

2.  **画像 (51 upvotes):**  
    *   画像のURLがコメントに添えられています。画像の内容によって、コメントの文脈が大きく左右されます。Next.js開発における問題点や、面白さを表現している可能性があります。

3.  **"Nothing frustrates me more, followed by an email" (20 upvotes):**  
    *   これは、「これ以上にイライラすることはなく、さらにメールが来る」という意味で、何らかの問題が発生し、さらにそれに関する通知メールが来たことに対する不満を表現していると思われます。Next.js開発における、特定の状況や問題に対するフラストレーションを共有しているのかもしれません。

4.  **"Exit code 1." (18 upvotes):**  
    *   これは、プログラムがエラーで終了したことを示すメッセージです。Next.jsプロジェクトの開発中に何らかのエラーが発生し、ビルドや実行に失敗したことを示唆しています。

5.  **"Error: '\`' can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. react/no-unescaped-entities" (20 upvotes):**  
    *   これは、Reactコンポーネント内でエスケープされていない文字があることによるエラーメッセージです。具体的には、シングルクォーテーション（'）が正しくエスケープされていないために発生しています。Next.jsプロジェクトでReactを使用している際に、よく遭遇するエラーの1つです。


---

# The biggest list of Shadcn/ui Related stuff on Github!

**Upvotes**: 60



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1l33ylb/the_biggest_list_of_shadcnui_related_stuff_on/)

## 1. ポストの内容の説明

このRedditのポストは、`shadcn/ui`関連のリソースをまとめたGithubのリストを紹介しています。投稿者は、スクロールなどの機能に役立つ情報も含まれていると述べており、ユーザーがこれらのリソースを活用することを促しています。要するに、`shadcn/ui`を利用する開発者にとって役立つ情報源の紹介となっています。

## 2. 興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **[https://tweakcn.com/](https://tweakcn.com/)への言及:** このコメントは、`shadcn/ui`のテーマ作成に役立つウェブサイト`tweakcn.com`を紹介しています。このサイトは`v0` (おそらく別のUIライブラリ)と同様の機能を提供し、アカウントを作成することで、プリセットのカスタマイズと更新ができるエージェントを利用できるという点を示唆しています。これは、`shadcn/ui`のカスタマイズを容易にする、非常に有用なリソースであると考えられます。

*   **LLMs (大規模言語モデル) を活用する提案:** 最後のコメントは、このGithubのリストをLLMの学習データとして使用し、`shadcn`特有の機能を実装する際にLLMをガイドすることを提案しています。これは、AI技術を活用して、`shadcn/ui`の開発を効率化する可能性を示唆しており、技術的な興味を引く提案です。

