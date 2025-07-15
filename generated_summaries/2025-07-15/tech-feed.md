# Search any public GitHub repo with Grep - Vercel

[View on Vercel Blog](https://vercel.com/changelog/search-any-public-github-repo-with-grep)

## Grep を使って GitHub の公開リポジトリを検索できるようになりました - Vercel

この短い記事では、Vercel が提供する Grep サービスを使って、GitHub 上のあらゆる公開リポジトリを検索できるようになったことを伝えています。

以前は、Grep は事前にインデックス化された 100 万以上のリポジトリに限定されていましたが、今回のアップデートにより、ユーザーは任意の公開リポジトリを検索できるようになりました。

特定の GitHub リポジトリを検索するには、`grep.app/[owner]/[repo]` という形式の URL を使用します。

例えば、`grep.app/vercel/ai` にアクセスして検索語 (例: "streamText") を入力すると、リポジトリ全体で高速な全文検索と正規表現検索を実行できます。特別なセットアップは必要ありません。

---
# Clerk joins the Vercel Marketplace - Vercel

[View on Vercel Blog](https://vercel.com/changelog/clerk-joins-the-vercel-marketplace)

## Vercel MarketplaceにClerkが仲間入り

この記事は、認証プロバイダーであるClerkがVercel Marketplaceに加わったことを発表しています。

**要点:**

*   **Clerkとは:** Next.jsなどのモダンフレームワーク向けに設計されており、認証を簡素化しつつ、UI、セッション、ユーザーロールをチームが完全に制御できるようにします。Vercelのデプロイモデルとの緊密な統合が特徴です。
*   **Vercel Marketplaceとの連携によるメリット:**
    *   VercelダッシュボードからのClerkアプリの即時プロビジョニング
    *   ホスト型ダッシュボード、セッション、ロールによる完全なユーザー管理
    *   組み込みの拡張可能な請求およびサブスクリプション管理
*   **最後に:** ClerkをVercel Marketplaceで利用開始できます。

---
# More Secure Deployment Protection - Vercel

[View on Vercel Blog](https://vercel.com/changelog/more-secure-deployment-protection)

## Vercel のより安全なデプロイ保護 - 要約

Vercel の「デプロイ保護」機能が強化されました。これにより、プレビューや本番環境の URL を保護し、意図しないユーザーがアクセスできないようにできます。

今回のアップデートでは、新しいプロジェクトでは、本番ブランチの Git ドメイン (例: project-git-main.vercel.app) を含む、自動生成されたすべてのドメインが標準のデプロイ保護によって保護されるようになりました。

既存のプロジェクトは、Vercel ダッシュボードのプロジェクト設定ページで、この新しい保護機能を有効にできます。

---
# Using Groq Chat with Spring AI | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921621275/0/baeldung~Using-Groq-Chat-with-Spring-AI)

このBaeldungの記事では、Spring AIを使ってGroq Chatを利用する方法を解説しています。

**概要:**

*   Groqは、LPUベースの推論エンジンを提供し、Spring AIを通じてチャットボットの構築に利用できます。
*   GroqはOpenAIのクライアントライブラリと互換性があり、Spring AIのOpenAIチャットクライアントを最小限の設定変更でGroqに接続できます。
*   Spring AIはGroq用の独自のライブラリは提供していません。

**前提条件:**

*   Spring AIのOpenAIスターターライブラリを依存関係として追加する必要があります。
*   Groqクラウドに登録し、APIキーを取得する必要があります。

**主なSpring AIコンポーネントと設定:**

*   OpenAiChatModelクラスは、プロンプトを使用してOpenAIサービスを呼び出すクライアントクラスです。
*   OpenAiChatOptionsクラスは、Groqで利用可能なモデル名、温度、maxTokensなどのプロパティを指定するために使用します。
*   spring.ai.openai.chat名前空間で、Groq APIのエンドポイントとAPIキーを設定します。

**OpenAiAutoConfigurationとGroqChatService:**

*   OpenAiAutoConfigurationクラスは、アプリケーションプロパティファイルの設定に基づいてOpenAiChatModelビーンを自動構成します。
*   GroqChatServiceクラスは、Groqサービスを呼び出す役割を担い、OpenAiChatModelビーンを注入して、chat()メソッドでGroqサービスを呼び出します。
*   Junitテストで、GroqChatServiceを使用してGroqサービスからの応答を検証します。

**Groqクライアントのカスタマイズ:**

*   カスタムOpenAiChatModelビーンをSpring設定クラスで定義できます。
*   OpenAiApiクラスを使用して、APIキーとURLをプロパティファイルから読み込み、chatクライアントを構築します。
*   CustomGroqChatServiceクラスでは、Custom OpenAIChatModelビーンを注入し、chat()メソッドでモデルや温度などの設定をChatOptionsオブジェクトで設定します。
*   Junitテストで、CustomGroqChatServiceを使用してカスタムGroqクライアントを呼び出し、応答を検証します。

**結論:**

*   Groqの推論エンジンとSpring AIのOpenAIライブラリの統合を説明。
*   Groqのツール機能を利用して、外部ツールを登録し、呼び出すことができます。
*   Groqはマルチモーダルモデルのサポートに制限があり、Spring AIもその機能を持っていません。
*   GroqはOpenAIと完全互換ではないため、APIの使用時に注意が必要です。

---
# A Practical Guide to RecordBuilder in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921621278/0/baeldung~A-Practical-Guide-to-RecordBuilder-in-Java)

この記事は、Javaのレコードの柔軟性を向上させるためのライブラリ、RecordBuilderについて解説しています。

**要約**

Java 16で導入されたレコードは、不変データモデルを簡潔に表現できますが、フィールドの宣言方法、セッターの非許容、拡張性の制限などの制約があります。RecordBuilderは、これらの制限に対処し、レコードにビルダーパターンを導入することで、柔軟なオブジェクト構築を可能にします。

RecordBuilderを使用すると、@RecordBuilderアノテーションを追加し、オプションでWithインターフェースを実装することで、インラインビルダーとfluentなwithX()メソッドが利用可能になります。これにより、fluentで安全かつ読みやすい方法でレコードインスタンスを構築および変更できます。

RecordBuilderの主な利点は、不変性を維持しながらフィールドを個別に更新できるwithX()メソッドや、fluentビルダー構文を使用して複数のフィールドを一度に変更できる点です。また、インラインのコンシューマーベースの変更もサポートし、条件付きロジックもビルダーコンテキスト内で適用できます。さらに、静的なビルダーファクトリーも提供され、分離されたビルダーや外部データ変換、テストユーティリティでの利用に便利です。

RecordBuilderは、ステージドビルダーによる必須フィールドのコンパイル時強制、テストフレームワークや依存性注入ツールとの統合など、カスタマイズ機能も提供します。手動でビルダーを作成する場合と比較して、RecordBuilderはレコード構造の変更に自動的に対応し、メンテナンスの負担を軽減します。

RecordBuilderは、DTOs、API応答、設定オブジェクトなどの構築に最適で、クリーンでスケーラブルなJava開発のための強力なツールです。

---
# Create Array of Linked Lists in Java | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921621281/0/baeldung~Create-Array-of-Linked-Lists-in-Java)

このBaeldungの記事は、Javaでリンクリストの配列を作成する方法について解説しています。

**1. リンクリストの配列とは？**

リンクリストの配列は、各インデックスが `LinkedList<T>` を保持するデータ構造です。これにより、配列のインデックスアクセスと、リンクリストの動的な挿入と削除の両方をサポートできます。

**2. どのような場面で利用できるか？**

*   **グラフ表現（隣接リスト）：** 各ノードが隣接ノードのリストを格納する場合に最適です。
*   **チェーン法によるハッシュテーブル：** 複数のキーが同じインデックスにハッシュされる場合に、衝突する値をリンクリストで格納できます。
*   **バケットソート：** 数値を範囲に基づいてバケットに分割し、各バケットを個別にソートします。
*   **インデックスベースのグループ化：** ユーザー、ログ、イベントなどを優先度、地域、年齢層などの属性でグループ化できます。

**3. リンクリストの配列を作成する方法**

記事では、リンクリストの配列を作成するさまざまな方法を紹介しています。

*   **raw arrayによる初期化ループ:**
    *   最も直接的な方法で、指定されたサイズの配列を宣言し、各要素を初期化します。
    *   `@SuppressWarnings("unchecked")` を使用してジェネリック配列作成時の警告を抑制します。
    *   固定サイズのバケットのような問題に最適です。

*   **ArrayList<LinkedList<Integer>>を利用:**
    *   より安全で柔軟な方法で、型安全性が高く、未チェック警告を回避します。
    *   実用的なJavaアプリケーションでよく使用されるパターンです。

*   **Java 8 Streamsの使用:**
    *   Stream APIを使用して、簡潔にリンクリストのリストを生成できます。
    *   宣言的なスタイルのコードを好む場合や、定型文を減らしたい場合に便利です。

*   **Java 8以降のArrays.setAll()の使用:**
    *   生の配列を使用する場合に、明示的なループを避けたい場合に利用できます。
    *   配列の各インデックスに新しいリンクリストを設定します。
    *   簡潔で表現力豊かです。

**4. まとめ**

記事は、リンクリストの配列が、インデックスアクセスと動的なデータ処理を組み合わせた、多用途で効率的なデータ構造であることを示しています。グラフのモデリング、ハッシュテーブルの実装、または複数の動的リストへの要素の編成など、さまざまなシナリオで役立ちます。Javaは、手動初期化を行う生配列から、リストやストリームを使用するより最新で型安全な代替手段まで、リンクリストの配列を作成および整理するためのいくつかの方法をサポートしています。それぞれの方法にはトレードオフがあり、適切な選択は、ユースケース、パフォーマンス目標、およびコードの可読性の優先順位によって異なります。
