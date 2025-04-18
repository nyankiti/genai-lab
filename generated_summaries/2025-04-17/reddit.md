
# Been doing interviews for my org. What the fuck is going on.

**Upvotes**: 1399



[View on Reddit](https://www.reddit.com/r/devops/comments/1k0hhvk/been_doing_interviews_for_my_org_what_the_fuck_is/)

## ポストの内容の説明

このRedditのポストは、投稿者が所属する組織で行ったDevOpsエンジニアの中間レベルの面接に関する不満を表明しています。

主な内容は以下の通りです。

*   **面接での問題点**: 経験豊富な候補者（7〜10年の経験あり）が、ネットワークの基礎知識（NATとLBの違い）、データベース知識、OSI参照モデル、コンテナとVMの違いなど、DevOpsエンジニアとして不可欠な基本的な技術知識を理解していない。
*   **スキルのミスマッチ**: 候補者は、AWSのUIでボタンをクリックして組織に貢献した経験について話すことは得意だが、深い技術的な理解に欠けている。
*   **DevOpsの定義に対する批判**: 投稿者は、DevOpsが単にUIでボタンを押すだけの役割として定義されていることに落胆しており、企業がそのような人材を雇用していることに不満を抱いている。

要するに、投稿者は、採用面接で「実力」を測ることができず、表面的な経験と実質的な技術力のギャップに失望しているという内容です。

## 興味深いコメント

このポストに対するコメントの中で、特に興味深いものは以下の通りです。

*   **実用的な問題へのフォーカス (564 upvotes)**: 面接では、AIで回答できるような一般的な質問ではなく、現実世界の問題（例: 非コンテナ化アプリケーションをコンテナ化環境に移行する手順）に焦点を当てるべきという提案。これにより、候補者の経験と理解度を深く評価できる。
*   **スキルの多様性と価値観の変化 (1105 upvotes)**: 職場ごとに求められるスキルセットが異なり、特定の環境で有効なスキルが、別の場所では重要視されないことがあるという指摘。これは、DevOpsエンジニアのスキルセットの多様性と、企業文化やニーズの違いを反映している。
*   **ビジネスの要件と技術的知識の優先順位 (94 upvotes)**: 企業は、ビジネスニーズ（例: コスト削減、システムの可用性）を満たすために、特定のタスクを効率的に実行できる人材を求めるという視点。技術的知識は、直接的なビジネス価値に貢献する場合にのみ重視される。
*   **専門性と組織の規模 (65 upvotes)**: 大規模な組織では、KubernetesやCI/CDの知識がなく、特定のツール（Splunkなど）に特化したスキルを持つ人材が、非常に重要になることがあるという指摘。これは、組織の規模が大きくなるにつれて、役割が分業化され、専門性が重視される傾向があることを示唆している。
*   **面接と実務の乖離 (209 upvotes)**: 面接での評価と実際の仕事内容が大きく異なることがあるという指摘。面接で優れた評価を得たとしても、実務で必ずしも成功するとは限らないことを示唆している。


---

# Earthly Shutting Down Earthfiles

**Upvotes**: 40



[View on Reddit](https://www.reddit.com/r/devops/comments/1k0p57f/earthly_shutting_down_earthfiles/)

## 1. ポストの内容の説明

このRedditのポストは、Earthlyというツールを開発・提供していたチームが、そのサービスを終了することを発表したものです。具体的には、以下の点が明示されています。

*   **Earthly Satelliteの終了:** Earthlyが提供していた商用のCI（継続的インテグレーション）ビルドランナーサービスであるEarthly Satellite（クラウド、自己ホスト、BYOCなどを含む）が、2025年7月16日に終了します。
*   **オープンソースプロジェクトのメンテナンス終了:** オープンソースのEarthlyプロジェクトの積極的なメンテナンスも、2025年7月16日に終了します。ただし、CLI（コマンドラインインターフェース）は引き続き利用可能ですが、新しい機能追加やプルリクエストのマージは行われなくなります。
*   **終了の理由:**
    *   **オープンソースによるカニバリゼーション:** Earthlyは、多くの価値をローカルで得られるように設計されていたため、商用サービスを利用しなくても、一部のユーザーは同様の高速化を実現できてしまい、収益化が難しかった。
    *   **底上げ型（ボトムアップ）の利用からの収益化の難しさ:** 個人開発者（IC）からは支持を得ていたものの、組織全体での導入には手間がかかり、プラットフォームの予算も厳しかった。
    *   **市場の変化:** インフラストラクチャとOSS（オープンソースソフトウェア）に対する投資家の関心が薄れ、VC（ベンチャーキャピタル）の資金調達環境も変化し、オープンソースプロジェクトの長期的な成長をサポートしにくくなった。
*   **今後の対応:**
    *   **コミュニティフォークの支援:** コミュニティによるEarthlyのフォーク（派生プロジェクト）の作成をサポートする。
    *   **Daggerとの連携:** Daggerという類似のツールへの移行パスを提供し、Dagger Cloud ProをEarthlyユーザー向けに1年間無料にする。
    *   **Buildkit remote runnerの利用:** キャッシュ共有のために、自身のBuildkit remote runnerを自己ホストすることも可能。
*   **感謝のメッセージ:** Earthlyに関わったユーザーへの感謝の気持ちを表明。
*   **質問への回答:** 投稿者は、質問があれば回答する意向を示している。

## 2. 興味深いコメント

このポストに対するコメントで特に興味深いのは、以下の点です。

*   **Earthlyの理解の難しさ:** 複数のユーザーが、Earthlyが具体的にどのようなツールなのか、何を解決するものなのかを理解するのが難しかったと述べています。Makeの代替として認識していたが、ネイティブなコンテナサポートがあること、Earthlyをインストールする必要があることなどから、導入のハードルを感じていたようです。これは、製品のポジショニングや説明の不足が、利用を妨げる要因になっていた可能性を示唆しています。
*   **オープンソースコミュニティへの期待:** Earthlyがオープンソースとして公開されていることから、コミュニティが主体となって開発を続けることへの期待が示されています。


---

# Leave a secret in this city

**Upvotes**: 204



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k0tjcu/leave_a_secret_in_this_city/)

## ポストの内容

このRedditの投稿は、3D都市を舞台にしたインタラクティブなWebプロジェクトについて紹介しています。

*   **プロジェクトの概要:** 投稿者は、three.jsというJavaScriptライブラリを使って、ユーザーがメッセージを残せる3D都市を作成しました。ユーザーは都市内を自由に移動し、特定の場所にメッセージを残したり、他のユーザーが残したメッセージを見つけたりすることができます。
*   **目的:** 投稿者は、three.jsの学習のためにこのプロジェクトを作成したと述べています。
*   **公開:** プロジェクトは、ウェブサイトとして公開されており、リンクが提供されています。
*   **呼びかけ:** 投稿者は、他のユーザーにメッセージを残すように促しています。

## コメントの中で興味深いもの

この投稿に対するコメントの中で、特に注目すべきものは以下の通りです。

*   **モバイルでの動作に関する高評価:** 多くのコメントが、モバイルデバイスでの動作が非常にスムーズであることを高く評価しています。これは、技術的な実装が優れていることの証左であり、多くのユーザーが快適に利用できることを示唆しています。
    *   「Didn’t expect it to be working THIS good on mobile. Very nice project!」（モバイルでこんなにうまく動作するとは予想していませんでした。とても素敵なプロジェクトですね！）
    *   「Easily navigable on mobile too, great job! 🫡」（モバイルでも簡単にナビゲートできる、素晴らしい出来ですね！🫡）
*   **プロジェクトに対する肯定的な評価:** 多くのコメントが、プロジェクトのアイデアや実装を称賛しています。
    *   「Nice job.」（よくできました。）
    *   「Super nifty!!!」（超すてき！！！）
    *   「nice, nifty project!」（いいですね、すてきなプロジェクト！）
*   **コンテンツに関する懸念:** 1つのコメントは、残されているメッセージの数が少ないことに触れており、ユーザーの参加を促す可能性があります。
    *   「So many buildings so few notes 😩」（こんなにたくさんの建物があるのに、メッセージが少ないのは残念😩）


---

# Figma is trying to trademark the word 'Dev Mode' and is sending cease and desists

**Upvotes**: 1939



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k0dbgm/figma_is_trying_to_trademark_the_word_dev_mode/)

## ポストの内容の説明

このRedditのポストは、デザインツール **Figma** が「Dev Mode」（開発モード）という言葉の商標登録を試み、それに関連して他者に使用停止を要求していることについて話題にしています。投稿者は、Figmaのこの行動に批判的な立場をとっています。商標登録が認められるべきではない、一般的な言葉である「Dev Mode」を商標登録しようとしていることに、多くの人が不満を感じているようです。

## コメントで特に興味深いもの

このポストに対するコメントで特に興味深いものは以下の通りです。

*   **「God I hate people who trade mark common stuf.（一般的なものを商標登録する人が嫌いだ）」**：このコメントは、商標登録という概念に対する一般的な不満を表明しています。特に、歴史的に使用されてきたものや、特定の文化に根ざしたものを商標登録する試みに対して、強い嫌悪感を示しています。事例として、オランダの会社が何世紀も東アフリカで使われてきた穀物「テフ」の粉を商標登録しようとしたケースを挙げています。
*   **「If a common phrase like "Dev Mode" can be trademarked, I'm really not sure what I should think of the whole trademark concept...（「Dev Mode」のような一般的なフレーズが商標登録できるなら、商標という概念について本当にどう考えたらいいのかわからない）」**：このコメントは、商標登録の有効性に対する疑問を投げかけています。「Dev Mode」のような一般的な言葉が商標登録される可能性があることに対して、商標制度全体の信頼性を揺るがす懸念を示しています。
*   **「Lmao “Dev Mode” isn’t even original Feels like trying to trademark “Dark Mode” next（笑。「Dev Mode」はオリジナルですらない。「Dark Mode」を次に商標登録しようとするようなものだ）」**：このコメントは、「Dev Mode」という言葉の普遍性と、Figmaの試みが不適切であると示唆しています。また、同様に広く使われている「Dark Mode」を例に出し、Figmaの行動を揶揄しています。
*   **「Here's the trademark in question:（問題の商標はこちら）」**：このコメントは、実際にFigmaが商標登録を申請した内容へのリンクを提示しています。これにより、読者はFigmaの具体的な行動を確認し、より具体的な議論に参加できます。


---

# If you were to build an e-commerce store for your wife, which technologies would you choose?

**Upvotes**: 45



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k0iyd9/if_you_were_to_build_an_ecommerce_store_for_your/)

## ポストの内容の説明

1.  **質問者の状況**:
    *   質問者は、奥さんのために小規模なeコマースストアを構築することを考えています。奥さんは手作りの商品を販売したいと考えています。
    *   質問者はReactとNext.jsを使用して、主にダッシュボードを構築する開発者です。

2.  **提案された技術**:
    *   質問者は、Next.js、NextAuth、Supabase、Stripeを使用してeコマースストアを構築することを検討しています。
    *   このプロジェクトは大規模ではないが、安定性、セキュリティ、ユーザーフレンドリーであることを重視しています。

3.  **質問点**:
    *   製品情報を複数の場所で重複して作成することを避けたいと考えています。
    *   製品を一度作成し、Stripeアカウントと同期させる良い方法を探しています。
    *   経験豊富なeコマースストア構築者からのフィードバックを求めています。

## コメントのうち特に興味深いもの

1.  **Shopify 推奨 (148 upvotes)**:
    *   Shopifyの使用を強く推奨しています。
    *   メンテナンスや支払いオプションについて悩む必要がないため、既存の優れたソリューションを利用すべきだと述べています。

2.  **構築しないことの推奨 (89 upvotes)**:
    *   eコマースはすでに解決済みの問題であり、多くの既存のソリューションがあるため、自分で構築することは価値がないと述べています。
    *   WooCommerceを例に挙げ、自分でホストするソリューション、ヘッドレスソリューション、Shopifyのようなプラットフォームなど、様々な選択肢を提示しています。
    *   技術的な問題に取り組む前に、まずは実際に販売し、収益を得ることを優先すべきだとアドバイスしています。

3.  **Shopify 推奨 (86 upvotes)**:
    *   Shopifyを利用することを推奨し、プラットフォームの再構築は大変であるため、避けるべきだと述べています。

4.  **Shopify 推奨とマーケティングの重要性 (47 upvotes)**:
    *   Shopifyを使用し、技術的なプラットフォーム構築に費やす時間を、製品のマーケティングとプロモーションに費やすことを推奨しています。
    *   迅速な発送と販売に焦点を当てることが、優れた技術的プラットフォームよりも重要だと述べています。
    *   ビジネスが軌道に乗ってから、カスタムソリューションを構築することも可能だと提案しています。

これらのコメントは、eコマースストア構築における技術的な側面だけでなく、ビジネスの成功に必要な他の要素（マーケティング、使いやすさなど）についても言及しており、非常に示唆に富んでいます。


---

# Remote Work Isn’t a Privilege—It’s Progress [working in Japan and to companies like mine]

**Upvotes**: 165



[View on Reddit](https://www.reddit.com/r/webdev/comments/1k08mso/remote_work_isnt_a_privilegeits_progress_working/)

## ポストの内容の説明

このポストは、リモートワークの重要性と、オフィスへの出勤を強いることに対する投稿者の怒りを訴えています。投稿者は日本の満員電車での通勤の過酷さを例に挙げ、オフィスに出勤することによる時間と精神的な負担、そしてその不合理さを強調しています。

具体的には、以下の点を主張しています。

*   **リモートワークの利点**: 時間の節約、休息や家族との時間の確保、自己啓発など、より充実した生活を送れること。
*   **オフィス出勤の不合理さ**: IT業界にいるにも関わらず、過去の慣習に固執し、効率を阻害するオフィス出勤の必要性。
*   **コストの問題**: 通勤にかかる時間と労力、そしてその対価として得られるものが少ないこと。
*   **業界への失望**: テクノロジーの進化を先導するはずのIT業界が、時代遅れの働き方をしていることへの不満。
*   **企業文化への批判**: 生産性や信頼関係はオフィスでの物理的な距離ではなく、尊重と結果によって築かれるという主張。

投稿者は、リモートワークを「特権」ではなく「進歩」と捉え、企業の対応を「企業のノスタルジー」と表現し、時代遅れの慣習からの脱却を訴えています。

## ポストに対するコメントのうち、特に興味深いもの

このポストに対するコメントの中で、特に興味深いものをいくつか紹介します。

1.  **ITの略語の訂正**: ITが「Internet Technology」ではなく「Information Technology」を意味することを示すコメント。
    *   これは、投稿文の誤りを指摘するもので、内容自体への批判ではありませんが、細部への注意と正確性を求める姿勢を示しています。

2.  **「対面での交流」の価値への疑問**: チームが複数の場所に分散している状況下で、対面での交流がほとんど行われていないという経験談。
    *   リモートワークの正当性を裏付ける現実的な状況を提示し、対面での交流の価値を疑問視しています。

3.  **AIによる投稿の可能性の指摘**: 投稿文の洗練された文体や比喩表現、Redditの他の投稿との差異などを根拠に、AIによって書かれた可能性を指摘するコメント。
    *   Redditの投稿の特性と、AI生成コンテンツへの懸念が示されています。このコメントは、投稿内容の真実性や人間性に対して疑問を投げかけており、現代社会におけるAIの役割と影響を考えるきっかけとなります。

4.  **RTO（オフィス回帰）に対する強い反発と個人の経験**: 通勤に費やす時間と精神的な負担から、退職や鬱病に繋がったという個人の経験。
    *   オフィス回帰が個人の生活に与える影響の大きさを具体的に示し、リモートワークの重要性を訴えています。
    *   個人の経験を通じて、リモートワークの必要性を訴える力強い意見です。

5.  **AIによる投稿の可能性に対する同意**: AIによる投稿の可能性を肯定するコメント。
    *   上記のコメントに対する支持を示し、AI生成コンテンツに対する懸念を共有しています。

---

# Why does everyone recommend Clerk/Auth0/etc when NextAuth is this easy??

**Upvotes**: 74



[View on Reddit](https://www.reddit.com/r/nextjs/comments/1k02xki/why_does_everyone_recommend_clerkauth0etc_when/)

## ポストの内容の説明

このRedditのポストは、Next.jsの認証ライブラリであるNextAuthの利便性について疑問を呈しています。投稿者は、NextAuthを使ってGitHub認証とメール/パスワード認証を簡単に実装できた経験から、ClerkやAuth0などの有料の認証サービスが「簡単」であると推奨されている理由を疑問視しています。

投稿者は、NextAuthのドキュメントに従い、PrismaとPostgresを使用して認証機能を1時間足らずで実装できたと述べています。経験があることは認めているものの、それでもNextAuthがスムーズに機能したことに驚いています。

投稿者は、NextAuthの欠点や、有料サービスが人気を集める理由について、以下のような疑問を投げかけています。

*   NextAuthにはまだ気づいていない落とし穴があるのか？
*   将来的に苦労する点があるのか？
*   有料サービスの宣伝（アフィリエイトリンクなど）なのか？
*   NextAuthが過小評価されているだけなのか？

## 特に興味深いコメント

この投稿に対するコメントの中で、以下が特に興味深いと考えられます。

*   **認証サービスの利用を推奨する理由（91 upvotes）**: 多くの企業がユーザーデータの管理を避けたいため、Clerkなどのサービスを利用するとのことです。データ漏洩やGDPRなどのリスクを避けるため、専門のサービスに任せるという考え方です。

*   **認証の実装における労力（16 upvotes）**: LaravelのバックエンドでDB認証を実装した経験から、認証機能の実装がいかに大変であるかを説明しています。トークンの更新、パスワードのリセット、メール認証など、多くの機能を自分で実装する必要があり、時間と労力がかかることが示唆されています。Clerkなどのサービスを利用することで、これらの面倒な部分を省き、本来の機能開発に集中できるという利点があります。

*   **NextAuth/auth.jsへの移行に関する懸念（13 upvotes）**: `next-auth` から `auth.js` への移行がスムーズではなく、実装に不満を感じている人がいることが述べられています。自分で認証機能を実装することを選択する人もいるようです。

