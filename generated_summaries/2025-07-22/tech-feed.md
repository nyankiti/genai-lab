# A Friendly Introduction to SVG • Josh W. Comeau

[View on Josh W Comeau's Blog](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/)

## SVGの入門：Josh W. Comeauによる分かりやすい解説

**概要**

この記事は、SVG（Scalable Vector Graphics）の基本と、Web開発者がすぐに活用できるいくつかのテクニックを紹介するものです。SVGは、.jpgや.gifと同様の画像フォーマットでありながら、HTMLのようにXML構文で記述されるため、CSSやJavaScriptを使って動的に操作できるという特徴があります。この記事では、SVGの基本的な概念、基本的な図形の描画方法、ビューボックスによるスケーラビリティの実現、プレゼンテーション属性を用いたアニメーションなどについて解説しています。

**内容詳細**

*   **SVGの紹介**: SVGは、HTMLと同様にテキストエディタで編集可能なXMLベースの画像フォーマットです。画像内の各ピクセルの色を指定する代わりに、イラストを描画するための描画指示が記述されています。SVGは、HTML要素のようにCSSとJavaScriptを使って操作できるため、動的な表現が可能です。
*   **基本的な図形**: SVGには、線（`<line>`）、長方形（`<rect>`）、円（`<circle>`）、楕円（`<ellipse>`）、多角形（`<polygon>`）といった基本的な図形要素が用意されています。各要素には、位置やサイズ、色などを指定する属性があります。
*   **スケーラブルなSVG**: SVGは、`viewBox`属性を使用することで、画像のサイズを変えても画質を劣化させずに表示できます。`viewBox`は、SVGの内部座標系を定義し、図形の座標を相対的に指定することを可能にします。これにより、SVGはさまざまなサイズで表示できます。
*   **プレゼンテーション属性とアニメーション**: SVGの図形には、色（`fill`）、線の太さ（`stroke-width`）、線のスタイル（`stroke-dasharray`）、線の端の形状（`stroke-linecap`）など、さまざまなプレゼンテーション属性があり、これらはCSSのプロパティとしても機能します。これにより、CSSトランジションやアニメーションを使って、SVGの図形を動的に変化させることができます。特に、`stroke-dashoffset`属性を用いることで、線の描画や消去のようなアニメーションを作成することができます。

**著者の意図と今後の展開**

著者は、SVGの基本的な概念を理解してもらい、すぐに使えるテクニックを紹介することを目指しています。また、SVGを使ったより高度なアニメーションに関するコースを準備しており、その中で`<path>`要素などについても解説する予定です。
---
# OpenAI-compatible API endpoints now supported in AI Gateway - Vercel

[View on Vercel Blog](https://vercel.com/changelog/openai-compatible-api-endpoints-now-supported-in-ai-gateway)

## VercelのAI GatewayでOpenAI互換APIエンドポイントのサポートが開始

**要約:**

VercelのAI Gatewayは、OpenAI互換のクライアントライブラリやツールをサポートするようになりました。これにより、コードを書き換えることなく、URLを変更するだけで、数百種類のモデルにアクセスできるようになります。

**詳細:**

*   **利点:** 既存のツールとワークフローを維持しながら、AI Gatewayを通じて、アップタイム、トークン/分、クォータ、信頼性を向上させることができます。これは、プロバイダーのフェイルオーバーやAI Gateway経由での可観測性の追加によって実現されます。
*   **実装方法:** OpenAIのクライアントライブラリを使用する場合、APIキーとベースURLをVercelのAI Gatewayのものに設定するだけで、簡単に利用できます。
*   **例:** Pythonでの簡単な利用例が示されており、`openai`ライブラリを使用してAnthropicのClaudeモデルにアクセスする方法が示されています。
*   **その他:** より詳しい情報は、AI Gatewayのドキュメントを参照してください。

---
# Using a Different Client Certificate per Connection in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921947534/0/baeldung~Using-a-Different-Client-Certificate-per-Connection-in-Java)

## Javaで接続ごとに異なるクライアント証明書を使用する方法

### 概要

このチュートリアルでは、Javaで異なるHTTPSエンドポイントに対して、接続ごとに異なるクライアント証明書を使用する方法について解説しています。Apache HttpComponentsライブラリを使用したマルチクライアントソリューションと、カスタムのKeyManagerとTrustManager実装を使用したコアJavaでのカスタムソリューションの2つのアプローチを紹介します。

### 1. はじめに

JavaのSSLContextを構成して、ターゲットサーバーに応じて異なるクライアント証明書を使用する方法を説明します。Apache HttpComponentsを使用したシンプルな方法から始め、ルーティングKeyManagerとTrustManagerを使用したカスタムソリューションを実装します。

### 2. シナリオとセットアップ

相互TLS認証を必要とする2つの異なるエンドポイントへのHTTPS呼び出しを行う必要のあるJavaクライアントをシミュレートします。ここでは、`https://api.service1/`と`https://api.service2/`をイントラネットサービスとして想定します。

#### 2.1. CA、キー、トラストストアの生成

各ホストに対してクライアント/サーバーキーペアを使用し、各キーは共有認証局(CA)によって署名され、TLS接続の両側でCAを信頼する設定です。

手動でCA、署名付き証明書、キーストア、トラストストアを作成することはエラーが発生しやすいため、以下の手順を自動化するヘルパースクリプトを使用します。

*   プライベート認証局(CA)を作成し、`trust.api.service1.p12`などのトラストストアに追加します。
*   クライアントとサーバーの個別のキーペアを生成します。
*   CAを使用して、クライアント証明書とサーバー証明書の両方に署名します。
*   各証明書とキーをPKCS12キーストアにパッケージ化して簡単にロードできるようにします（例：`client.api.service1.p12`と`server.api.service1.p12`）。

ホスト名と同じ値を持つエイリアスを使用し、各ファイルにプレフィックスを付けることで区別しやすくします。また、例を簡素化するために同じパスワードを使用しますが、実際には異なるパスワードを使用します。

#### 2.2. サーバーと証明書のモック設定

WireMockを使用してサーバーをシミュレートします。`CERTS_DIR`プロパティ（両方のサーバーのp12ファイルを含むディレクトリ）と`PASSWORD`プロパティに依存します。

`bind address`、`HTTPS port`、`Keystore path`、`trust store path`、`Client auth`、`Passwords`などの重要なオプションについて説明します。

### 3. Apache HTTPコンポーネントの使用

ApacheのHTTPライブラリを使用して、独自のSSLコンテキストを持つ異なるクライアントを設定する方法を説明します。

#### 3.1. クライアントの構成

`trust.`をトラストストアのプレフィックス、`client.`をクライアントキーストアのプレフィックスとして想定し、エンドポイントのホスト名を受け取る1つのパラメータだけでSSLContextを構築します。ライブラリのSSLContextsを使用して、トラストマテリアルとキーマテリアルをロードします。

次に、接続マネージャを作成し、新しく作成したSSLコンテキストをTLSソケット戦略として設定します。HttpComponents Core 5で導入されたDefaultClientTlsStrategyを使用します。

最後に、マネージャーを使用して、安全なAPI呼び出しを行う準備ができた、設定済みのHTTPSクライアントを返します。

#### 3.2. エンドポイントの呼び出し

定型的な作業の準備ができたら、各API呼び出しに対して異なるクライアント構成を作成します。

### 4. カスタムKeyManagerとTrustManagerの作成

X509ExtendedKeyManagerとX509ExtendedTrustManagerは、JavaのSSLパッケージからの抽象クラスであり、SSLハンドシェイク中に証明書キーとトラストストアがどのようにロードおよび使用されるかを完全に制御できます。これらを使用して、ホスト名に基づいて正しい証明書を選択できるRoutingSslContextBuilderクラスを作成します。

#### 4.1. KeyStoreのロード

最初に、キーとトラストマネージャーをロードするためのユーティリティから始めます。このメソッドを使用して、KeyStoreをメモリにロードします。

#### 4.2. KeyManagerとTrustManagerのロード

次に、X509KeyManager型のキーマネージャーをロードします。KeyManagerはマーカーインターフェースにすぎず、X.509は証明書形式の標準であるため、この型を使用します。

また、トラストストア用のトラストマネージャーもロードします。

#### 4.3. RoutingKeyManagerの作成

カスタムキーマネージャーを使用すると、ホスト名または証明書エイリアスに基づいて使用するストアを決定できます。各キーストアをMapに保存し、X509ExtendedKeyManagerのメソッドをオーバーライドすることで実現します。

このクラスを拡張する場合、ホスト名を取得できない場合があります。そのような場合、代わりにselect()メソッドでエイリアスを受け取ります。したがって、この戦略は、ターゲットサーバーのホスト名が証明書のエイリアスと一致する場合にのみ機能します。

chooseEngineClientAlias()メソッドは、クライアントを認証するためのエイリアスを選択するために呼び出されます。SSLEngineパラメータからホストを取得し、Socketパラメータを無視して、そのマネージャーのchooseClientAlias()に呼び出しを委譲します。

次に、getCertificateChain()をオーバーライドして委譲します。今回は、エイリアスに基づいてキーマネージャーを選択することに注意してください。

最後に委譲する必要のあるメソッドはgetPrivateKey()です。

目的のために、X509KeyManagerの他のメソッドは必要ないため、残りのオーバーライドに対してUnsupportedOperationExceptionをスローします。

#### 4.4. RoutingTrustManagerの作成

カスタムのトラストマネージャーは、RoutingKeyManagerと同じ考え方を踏襲し、ホスト名に基づいて登録されたトラストマネージャーの1つに委譲します。

今回、注意する必要がある唯一の実装は、SSLEngineパラメータを使用したcheckServerTrusted()です。

同様に、他のオーバーライドに対してUnsupportedOperationExceptionをスローする必要があります。

### 5. RoutingSslContextBuilderの作成

最後の部分はSSLコンテキストの構築です。実装が内部でルーティングを処理するため、異なる証明書を必要とする場合でも、すべてのAPI呼び出しに単一のHttpClientが必要になります。

#### 5.1. ビルダーの作成

カスタムマネージャーを組み合わせるためのビルダーから始めます。

インスタンスを構築するときは、アクセスする必要のあるすべてのサーバーに対して、ホストと証明書のすべての組み合わせに対してこのメソッドを呼び出します。これにより、キーマネージャーとトラストマネージャーの両方がロードされます。

最後に、カスタムマネージャーを使用してSSLコンテキストを初期化し、SecureRandomパラメータをnullにしてデフォルトの実装を取得します。

#### 5.2. JavaのHttpClientでのテスト

Apache HttpComponentsライブラリに依存していないため、コアJavaを使用して呼び出しを行います。SSLコンテキストとHttpClientを構築することから始めます。

次に、最初の呼び出しを行います。

そして、2番目の呼び出しを行います。

予想どおり、同じSSLコンテキストを使用して、異なる証明書を必要とする異なるサーバーへの安全なリクエストを行うことができました。

### 6. 結論

この記事では、異なるHTTPSエンドポイントとの対話時に、Javaで複数のクライアント証明書を使用する方法を説明しました。Apache HttpComponentsを使用したマルチクライアントソリューションから開始し、カスタムKeyManagerおよびTrustManagerの実装を使用して、コアJavaでカスタムソリューションを構築しました。このアプローチは、サービスメッシュ、マルチテナントクライアント、またはAPIゲートウェイなど、動的なTLSクレデンシャルの選択を必要とするシステムで特に役立ちます。

---
# OpenAI and UK Government announce strategic partnership to deliver AI-driven growth | OpenAI

[View on OpenAI News](https://openai.com/global-affairs/openai-and-uk-government-partnership)

2025年7月21日、OpenAIと英国政府は、AI主導の成長を促進するための戦略的パートナーシップを発表しました。この提携は、英国の「AI機会行動計画」の目標達成と、AIを共有の繁栄のために活用するという野心を具現化することを目的としています。

OpenAIのサム・アルトマンCEOと英国科学・イノベーション・技術大臣ピーター・カイルMPは、AIの経済的・社会的な利点を開放することに焦点を当てた了解覚書（MOU）に署名しました。このMOUには、公共サービスと民間セクターの両方におけるAIの導入、インフラ開発、技術情報の交換を通じた、英国におけるAI主導の成長の促進に関する協力が含まれます。

英国政府は、AIがNHS（国民保健サービス）の改善、機会への障壁の打破、経済成長の促進において不可欠であると強調しています。このパートナーシップは、OpenAIの活動を英国で拡大させ、高給のテクノロジー職を創出し、インフラへの投資を促進し、この世界を変える技術の発展に対する英国の主導権を確立することを目指しています。

OpenAIは、英国が科学的リーダーシップを持つ国であり、AIの可能性を最初に認識した政府の一つであると評価しています。今回のMOUは、政府と民間セクターでの先進AIモデルの展開、AI機会行動計画で示されたインフラ整備の優先順位の実現、そして、新たな技術情報共有プログラムの開発を含む、OpenAIと英国AI安全保障研究所間の既存のパートナーシップの拡大といった、非拘束的なコミットメントを含んでいます。

OpenAIは、2023年にロンドンに最初の海外オフィスを開設しており、研究やエンジニアリングを含む100人以上のスタッフを抱えています。OpenAIは、英国での活動拡大の詳細を夏に発表する予定です。

英国政府は既に、OpenAIのAPIを使用して、中小企業がGOV.UKの情報からビジネスルールやサポートに関するアドバイスを容易に得られるAIチャットボットを開発しています。また、OpenAIの技術は、行政負担を軽減する目的で開発されたホワイトホールのAIアシスタント「Humphrey」や、政策決定プロセスを迅速化する「Consult」といったツールにも活用されています。

---
# Join the Prompt API origin trial  |  Blog  |  Chrome for DevelopersGitHubLinkedInMastodonBlueskyHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/prompt-multimodal-origin-trial?hl=en)

## Prompt APIのオリジン試用への参加

このブログ記事は、Chrome for Developersによるもので、Prompt APIのオリジン試用への参加を呼びかけています。

**概要:**

*   Prompt APIは、ウェブサイトやウェブアプリケーションで利用できるAPIで、テキスト、画像、音声の入力を受け付けます。
*   現在、Chrome 139からChrome 144までの期間、オリジン試用が実施されています。
*   オリジン試用は、実験的なプラットフォーム機能を早期に利用できる、期間限定のプログラムです。
*   開発者は、実際のユーザー環境でこの機能をテストし、フィードバックを収集できます。

**Prompt APIのユースケース例:**

*   **テキスト入力:**
    *   ユーザーが質問をして情報を消化できるようにする（例：ホテルレビューでWi-Fiに言及している部分をハイライト表示）。
    *   ユーザー生成コンテンツを構造化データで強化する（例：レビューに基づいて星評価を提案）。
*   **画像入力:**
    *   画像がIDやパスポートかどうかを分類し、手動検証前に確認する。
    *   ブログ投稿プラットフォームで、代替テキストを提案する。
*   **音声入力:**
    *   音声メッセージをテキストに変換する（例：エンドツーエンド暗号化チャットアプリケーション）。
    *   ライブ録音をフィルタリングする（例：音楽コレクション）。

**フィードバックの提供方法:**

*   Prompt APIの形状に関するフィードバックは、Prompt API GitHubリポジトリで既存のイシューにコメントするか、新しいイシューを開くことで行えます。
*   Chromeの実装に関するフィードバックは、Chromiumバグを報告することで行えます。

**その他:**

*   Prompt APIの使用方法については、ドキュメントを参照してください。
*   Chrome拡張機能でのPrompt APIの使用方法についても学習できます。
*   記事の内容は、Creative Commons Attribution 4.0 Licenseの下でライセンスされており、コードサンプルはApache 2.0 Licenseの下でライセンスされています。

---
# 2025-07-21のJS: Nuxt 4.0、Next.js 15.4、npmのパッケージメンテナーを狙ったフィッシング - JSer.info

[View on jser.info](https://jser.info/2025/07/21/nuxt-4.0-next.js-15.4-npm/)

JSer.info #742の要約です。

**Nuxt 4.0のリリース**

*   新しいプロジェクト構造としてapp/ディレクトリがデフォルトになり、useAsyncDataとuseFetchが同じキーでキャッシュを共有するようになった。
*   TypeScriptの設定ファイルがapp/server/node/shared用にそれぞれ作成され、CLIの改善も行われた。
*   マイグレーションガイドも公開されている。

**Next.js 15.4のリリース**

*   Turbopackが全てのIntegration Testに合格し、Next.js 16でStableになる予定。
*   Next.js 16に向けた新機能がexperimentalフラグで利用可能になっている。

**npmパッケージメンテナーを狙ったフィッシング**

*   著名なnpmパッケージにマルウェアが混入する事例が発生している。
*   以下のパッケージの特定のバージョンにマルウェアが含まれていた。
    *   eslint-config-prettier: 8.10.1, 9.1.1, 10.1.6, 10.1.7
    *   eslint-plugin-prettier: 4.2.2, 4.2.3
    *   synckit: 0.11.9
    *   @pkgr/core: 0.2.8
    *   napi-postinstall: 0.3.1
    *   is: 3.3.1
*   npnjs[.]comというドメインでフィッシングサイトが作られ、メールでパッケージメンテナーにログインを促し認証情報を盗む手口が用いられた。

**その他**

*   tiptap v3.0.1リリース、tsupへの移行によるUMDビルドのサポート廃止、型定義の改善などが行われた。
*   esbuild v0.25.7リリース、import deferとimport sourceのサポート、--abs-paths= flagの追加などが行われた。
*   npmパッケージを狙ったフィッシングキャンペーンに関する情報。
*   React Hooksへの移行に関する記事。
*   Bunでの大規模ファイル読み取り、WebCodecs APIを使ったメディアライブラリ、TypeScriptプラグインなどの情報も紹介。
