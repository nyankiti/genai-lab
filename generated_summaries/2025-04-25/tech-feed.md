# Updates to Vercel Toolbar shortcuts - Vercel

[View on Vercel Blog](https://vercel.com/changelog/updates-to-vercel-toolbar-shortcuts)

## Vercel Toolbarのショートカットに関するアップデートの要約

Vercelは、Vercel Toolbarのキーボードショートカットをカスタマイズ可能にするアップデートを発表しました。これにより、Toolbarメニューの表示/非表示に関するデフォルトのショートカットを変更したり、頻繁に使用するツールに独自のショートカットを追加したりできるようになりました。

**主な変更点:**

*   Toolbarメニューの表示/非表示のショートカットをカスタマイズ可能。
*   Toolbarメニュー内で「Preferences」→「Keyboard Shortcuts」から設定できます。
*   Toolbarの表示/非表示とメニューの開閉のデフォルトショートカットが変更され、他のサイトとの競合を減らします。
    *   Mac: ⌘K から ^ (Control) に変更
    *   Windows: Ctrl+K から Ctrl に変更
*   ショートカットのカスタマイズにはブラウザ拡張機能が必要です。

より詳しい情報は、Vercel Toolbarに関するページを参照してください。

---
# How to Map an Empty String to Null Using MapStruct | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917248481/0/baeldung~How-to-Map-an-Empty-String-to-Null-Using-MapStruct)

## MapStructを使用して空文字列をNullにマッピングする方法

この記事は、MapStructを使用して空文字列をNullに変換する方法について解説しています。Javaで文字列を扱う際に、空文字列をNullとして扱うことが必要になる場合があります。MapStructは、オブジェクト間のマッピングを簡潔に記述できるライブラリであり、この要件に対応するための様々な方法を提供しています。

**1. 全体概要**
このチュートリアルでは、MapStructのカスタマイズ方法に焦点を当て、空文字列をNullに変換する3つの主要なアプローチを紹介しています。各アプローチは、制御レベルとカスタマイズ性が異なります。

**2. サンプルオブジェクト**
例として、`Student`と`Teacher`の2つのクラスを使用します。両クラスは、`firstName`と`lastName`の文字列プロパティを持ち、MapStructでマッピングを行います。

**3. グローバルマッパーの使用**
*   **方法:** `@Mapper`アノテーションを付与したインターフェース内で、すべての文字列マッピングに適用される`mapEmptyString`メソッドを定義します。
*   **実装:** このメソッドは、入力文字列がnullまたは空文字列の場合にnullを返し、それ以外の場合は元の文字列を返します。
*   **利点:** シンプルで再利用可能であり、追加のコードが最小限で済みます。
*   **欠点:** すべての文字列マッピングに影響するため、特定のマッピングのみに適用する場合は不向きです。
*   **テスト:** 空文字列を渡すと、`lastName`フィールドがNullになることを確認するテストを行います。

**4. @Condition アノテーションの使用**
*   **方法:** `@Condition`アノテーションを使用して、特定のプロパティのマッピングを行うかどうかを制御するメソッドを作成します。
*   **実装:** `isNotEmpty`メソッドは、文字列がnullまたは空文字列でない場合にtrueを返します。
*   **利点:** グローバルマッパーよりも柔軟性が高く、条件に応じたマッピングの制御が可能です。
*   **カスタマイズ:** `targetPropertyName`と`sourcePropertyName`の引数を追加することで、特定のフィールド名に対する条件を適用できます。
*   **欠点:** 条件が複雑になるとコードが煩雑になる可能性があります。
*   **テスト:** 空文字列を渡すと、`lastName`フィールドがNullになることを確認するテストを行います。

**5. 式の使用**
*   **方法:** `@Mapping`アノテーション内の`expression`属性を使用して、個別のマッピングメソッドにカスタムJavaコードを埋め込みます。
*   **実装:** `lastName`フィールドのマッピングで、`lastName`が空文字列の場合にnullを返すように指定します。
*   **利点:** 特定のフィールドにのみ適用できるため、より詳細な制御が可能です。
*   **欠点:** 非常に限定的であり、複数のマッピングには不向きです。
*   **テスト:** 空文字列を渡すと、`lastName`フィールドがNullになることを確認するテストを行います。

**6. まとめ**
この記事では、MapStructを使用して空文字列をNullにマッピングするための3つのアプローチを紹介しました。グローバルマッパーはシンプルな方法ですが、すべての文字列に適用されます。`@Condition`アノテーションは柔軟性を提供し、式は特定のフィールドに特化した制御を可能にします。

---
# Guide to Eclipse OpenJ9 JVM | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917248484/0/baeldung~Guide-to-Eclipse-OpenJ-JVM)

このBaeldungの記事は、Eclipse OpenJ9 JVMに関する包括的なガイドです。

**1. OpenJ9の概要**
*   OpenJ9は、高性能、スケーラブル、柔軟性の高いJava仮想マシンです。HotSpotの代替として利用できます。
*   IBMによって開発され、現在はEclipse Foundationによってサポートされています。
*   クラウドやコンテナ環境でのメモリフットプリントの削減と起動時間の短縮に役立ちます。
*   Java SE仕様をサポートし、OpenJDKとの互換性があります。

**2. インストール**
*   OpenJ9は、プリビルドされたOpenJDKバイナリをダウンロードしてインストールできます。Eclipse Temurinなどの多くのディストリビューションがOpenJ9をバンドルしています。
*   インストール後、JAVA\_HOME環境変数を設定し、PATH環境変数を修正します。
*   WindowsとLinuxでのインストール手順が示されています。

**3. ガベージコレクションポリシー**
*   OpenJ9は、さまざまなワークロードに最適化された複数のガベージコレクション（GC）ポリシーを提供します。
*   `-Xgcpolicy:<name>`オプションを使用して、起動時にGCポリシーを選択します。
*   利用可能なGCポリシー:
    *   Generational Concurrent GC (gencon): デフォルト。
    *   Balanced Policy: 大規模ヒープと多数のスレッド向け。
    *   Optimize for Pause Time Policy: ポーズ時間を最小化。
    *   Optimize for Throughput Policy: スループット最大化。
    *   Metronome Policy: リアルタイムアプリケーション向け。
    *   nogc Policy: テストまたは特別なユースケース向け。

**4. クラスデータ共有とAOTコンパイル**
*   OpenJ9は、クラスデータ共有とAhead-of-Time (AOT) コンパイルをサポートしています。
    *   クラスデータ共有: クラスメタデータを共有メモリキャッシュにキャッシュすることで、起動時間を短縮し、メモリ使用量を削減します。`-Xshareclasses`フラグを使用します。
    *   AOTコンパイル: Javaバイトコードを事前にネイティブコードにコンパイルすることで、JITウォームアップ時間を短縮し、起動時のパフォーマンスを向上させます。HotSpotとは異なり、OpenJ9はGraalVMなしでAOTをサポートします。`-Xnoaot`フラグで無効にできます。

**5. 診断データとツール**
*   OpenJ9は、JMXをサポートしており、既存の監視ツールと連携できます。
*   パフォーマンス問題、クラッシュ、メモリ問題のトラブルシューティングに役立つツールも提供しています。
*   IBM Health Centerを使用して、CPU、メモリ、GC、およびスレッドのアクティビティをリアルタイムで監視できます。

**6. 結論**
*   OpenJ9は、メモリ使用量の削減と起動時間の高速化に有効な選択肢です。
*   クラウドワークロード、マイクロサービス、コンテナ化されたアプリケーションに適しています。
*   本番環境での使用前に、特定のワークロードでテストすることが推奨されます。
*   GCポリシーの選択も、ワークロードに合わせて測定と比較が必要です。

---
# A Guide to RestFB | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917248487/0/baeldung~A-Guide-to-RestFB)

## RestFB ガイド | Baeldung 要約

このガイドは、Javaアプリケーション内でFacebookとプログラム的に対話するためのライブラリであるRestFBの使用方法を解説しています。

**主な内容:**

1.  **RestFBの紹介:** RestFBは、ユーザープロファイルの取得、ページへの投稿、認証など、Facebookサービスとのやり取りを可能にするライブラリです。
2.  **プロジェクトのセットアップ:** RestFBをpom.xmlファイルに依存関係として追加します。
3.  **Facebook認証:** アクセストークンとアプリシークレットを使用してFacebook APIを認証します。これらは、アプリケーション.propertiesファイルに格納します。
4.  **Facebookクライアントの初期化:** `FacebookClient`クラスは、APIリクエストを処理します。`FacebookConfig`クラスで`DefaultFacebookClient`を初期化し、Spring Beanとして登録します。
5.  **Facebookユーザープロファイルの取得:** `fetchObject()`メソッドと`User`モデルクラスを使用して、ユーザープロファイルをフェッチします。これにより、JSONレスポンスをJavaオブジェクトにマッピングし、型安全性を確保します。
6.  **ユーザーの友達リストの取得:** `fetchConnection()`メソッドを使用して、ユーザーの友達リストを取得します。
7.  **ステータスアップデートの投稿:** `publish()`メソッドを使用して、ユーザーのタイムラインまたはFacebookページにステータスアップデートを投稿します。
8.  **写真のアップロード:** `BinaryAttachment`クラスと`publish()`メソッドを使用して、写真（画像）をアップロードします。
9.  **Facebookページへの投稿:** `pages_manage_posts`権限を持つアクセストークンを使用して、Facebookページに投稿します。ページのアクセストークンを取得し、新しい`DefaultFacebookClient`を作成してページとしてアクションを実行します。
10. **エラー処理:** `FacebookOAuthException`や`FacebookResponseContentException`などの例外をキャッチし、エラーを処理します。
11. **結論:** RestFBは、認証、データの取得、投稿、写真のアップロードなど、Facebook APIとの対話に必要な基本的な操作を提供します。型安全で直感的なAPIにより、開発者はHTTPやJSONの低レベルな処理に煩わされることなくFacebookのGraph APIを操作できます。

**追加情報:**

*   本記事は2025年4月24日に更新されました。
*   記事内で紹介されているコード例は、GitHubで公開されています。

---
# Building an AI Chatbot in Java With Langchain4j and MongoDB Atlas | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/917222792/0/baeldung~Building-an-AI-Chatbot-in-Java-With-Langchainj-and-MongoDB-Atlas)

## Baeldung記事「Building an AI Chatbot in Java With Langchain4j and MongoDB Atlas」の要約

本記事では、Javaを用いてLangchain4jとMongoDB Atlasを組み合わせたAIチャットボットを構築する手順を解説しています。

**1. 概要:**
チャットボットは、Langchain4j（LangChainのJavaライブラリ）とMongoDB AtlasのVector Searchを活用し、ユーザーの質問に効率的かつインテリジェントな回答を提供します。キーワードではなく意味に基づいた検索を実現するため、ユーザーの質問の意図を正確に理解し、コンテキストに沿った回答を生成します。

**2. アプリケーションアーキテクチャ:**
アプリケーションは、HTTPエンドポイントを介してチャットボットと対話します。2つのフローがあり、1つはドキュメントローディング、もう1つはチャットボットフローです。

*   **ドキュメントローディング:** 記事データセットをロードし、埋め込みモデルを使用してベクトル埋め込みを生成します。その後、埋め込みをMongoDBに保存します。
*   **チャットボットフロー:** ユーザーからの入力を基にMongoDBで類似性検索を行い、最も関連性の高いドキュメントを取得します。取得した記事をLLMプロンプトのコンテキストとして使用し、LLMの出力に基づいて応答を生成します。

**3. 依存関係と設定:**
Spring Boot Web、Langchain4j-mongodb-atlas、およびLangchain4jの依存関係を追加します。ローカルMongoDBクラスターを設定し、OpenAI APIキーを取得します。`application.properties`ファイルでMongoDB URL、データベース名、およびOpenAI APIキーを構成します。`ChatBotConfiguration`クラスでは、MongoDBクライアントと埋め込みモデルのBeanを定義します。

**4. ベクトルストアへのドキュメントデータのロード:**
MongoDBの記事をチャットボットデータとして使用します。Hugging Faceから記事のデータセットをダウンロードし、`articles.json`ファイルとしてリソースフォルダーに保存します。`ArticlesRepository`クラスは、データセットの読み込み、埋め込みの生成、MongoDB Atlasベクトルストアへの保存を担当します。`app.load-articles`プロパティを使用して、データのロードを制御します。

*   `loadArticles()`メソッドは、`articles.json`からデータをロードし、各テキストセグメントの埋め込みを作成し、ベクトルストアに保存します。`maxTokensPerChunk`と`overlapTokens`を使用して、トークン制限とコンテキストの維持を制御します。
*   `loadJsonDocuments()`メソッドは、JSON形式の記事を読み込み、LangChain4jのDocumentオブジェクトに変換し、埋め込みの準備を行います。
*   `splitIntoChunks()`メソッドは、Documentオブジェクトを、埋め込みモデルの制限に対応するトークン単位の小さなチャンクに分割します。

**5. Chatbot API:**
チャットボットAPIフローを実装します。ベクトルストアからドキュメントを取得し、LLMと通信してコンテキストに応じた応答を生成するためのBeanを作成します。

*   `ContentRetriever` Beanは、ユーザーの入力をエンコードし、格納されている記事の埋め込みと比較して、MongoDB Atlasでベクトル検索を実行します。
*   `ChatLanguageModel` Beanは、取得されたコンテンツに基づいて応答を生成します。
*   `ArticleBasedAssistant`インターフェースは、`answer()`メソッドを定義します。
*   `articleBasedAssistant` Beanは、LangChain4jを使用して、言語モデルとコンテンツリトリーバーを組み合わせて、インターフェースを動的に実装します。
*   `ChatBotController`は、`/chat-bot`のエンドポイントを実装し、ユーザーの質問を受け取り、`ArticleBasedAssistant`に委譲して応答を返します。

**6. 結論:**
この記事では、Langchain4jとMongoDB Atlasを使用してチャットボットWebアプリケーションを実装しました。このアプリケーションを使用すると、ダウンロードされた記事から情報を取得するためにチャットボットと対話できます。今後の改善点として、クエリの事前処理と曖昧なクエリの処理を挙げることができます。また、チャットボットが回答の根拠とするデータセットを容易に拡張できます。
