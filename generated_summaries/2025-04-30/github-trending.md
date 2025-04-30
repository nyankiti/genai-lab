
# bgstaal/multipleWindow3dScene

**stars**: 17889

[View Repository on Github](https://github.com/bgstaal/multipleWindow3dScene)

A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage

## README要約
## bgstaal/multipleWindow3dScene リポジトリ概要 (日本語)

このリポジトリは、Three.js と localStorage を利用して、複数のブラウザウィンドウ間で 3D シーンを「同期」させるためのシンプルな例を提供しています。高度な Web グラフィックスとウィンドウ管理技術に関心のある開発者向けに設計されています。

**主な機能:**

*   Three.js を使用した 3D シーンの作成とレンダリング。
*   複数のブラウザウィンドウ間での 3D シーンの同期。
*   localStorage を使用した動的なウィンドウ管理と状態の同期。

**インストールと実行方法:**

1.  リポジトリをクローンします。
    ```bash
    git clone https://github.com/bgstaal/multipleWindow3dScene
    ```
2.  `index.html` をブラウザで開きます。

**主なファイル構成:**

*   `index.html`: HTML 構造を設定し、Three.js ライブラリとメインスクリプトをインクルードするエントリポイント。
*   `WindowManager.js`: 複数のウィンドウの作成、同期、状態管理を制御する中核的なクラス。
*   `main.js`: 3D シーンの初期化、ウィンドウイベントの処理、シーンのレンダリングを行うロジックを含むファイル。
*   `three.r124.min.js`: 3D グラフィックスレンダリングに使用される Three.js ライブラリの最小化版。

**詳細な機能:**

*   `WindowManager.js` は、作成、同期、削除を含む、複数のブラウザウィンドウのライフサイクルを管理します。ウィンドウ間で状態を維持するために localStorage を使用します。
*   `main.js` は、Three.js を使用して 3D シーンを初期化し、ウィンドウのリサイズイベントを管理し、ウィンドウのインタラクションに基づいてシーンを更新します。

**コントリビューション:**

プロジェクトの改善や拡張への貢献を歓迎しています。フォークを作成し、変更を加え、プルリクエストを送信してください。

**ライセンス:**

このプロジェクトは MIT ライセンスの下でオープンソース化されています。

**謝辞:**

*   包括的な 3D ライブラリを提供した Three.js チーム。
*   この README を作成した x.com/didntdrinkwater。

**連絡先:**

詳細情報と最新情報については、Twitter の [@_nonfigurativ_](https://twitter.com/_nonfigurativ_) をフォローしてください。


---

# LadybirdBrowser/ladybird

**stars**: 37805

[View Repository on Github](https://github.com/LadybirdBrowser/ladybird)

Truly independent web browser

## README要約
## Ladybird Web Browser の概要

Ladybird は、ウェブ標準に基づいた新しいエンジンを使用する、完全に独立した Web ブラウザです。現在、開発者向けであり、プレアルファ版の状態です。

**主な特徴:**

*   **マルチプロセスアーキテクチャ:** メインUIプロセス、複数の WebContent レンダラープロセス、ImageDecoder プロセス、RequestServer プロセスから構成されています。
*   **アウトオブプロセス処理:** 画像デコードとネットワーク接続を別プロセスで行い、悪意のあるコンテンツに対する堅牢性を高めています。
*   **タブごとのレンダラープロセス:** 各タブは、システムからサンドボックス化された独自のレンダラープロセスを持っています。
*   **SerenityOSからの主要コンポーネントの継承:**
    *   LibWeb (Web レンダリングエンジン)
    *   LibJS (JavaScript エンジン)
    *   LibWasm (WebAssembly 実装)
    *   LibCrypto/LibTLS (暗号化プリミティブと Transport Layer Security)
    *   LibHTTP (HTTP/1.1 クライアント)
    *   LibGfx (2D グラフィックスライブラリ、画像デコードとレンダリング)
    *   LibUnicode (Unicode とロケールサポート)
    *   LibMedia (音声と動画再生)
    *   LibCore (イベントループ、OS 抽象化レイヤー)
    *   LibIPC (プロセス間通信)

**ビルドと実行:**

*   [ビルド手順](Documentation/BuildInstructionsLadybird.md) を参照してください。
*   Linux, macOS, Windows (WSL2 付き), およびその他の \*Nix 系 OS で動作します。

**ドキュメント:**

*   コード関連のドキュメントは [documentation](Documentation/) フォルダにあります。

**参加:**

*   開発に関する議論は [Discord サーバー](https://discord.gg/nvfjVJ4Svh) で行われています。
*   コントリビュートを希望する方は、[Getting started contributing](Documentation/GettingStartedContributing.md) を参照してください。
*   問題を報告する前に、[issue policy](CONTRIBUTING.md#issue-policy) と [詳細な問題報告ガイドライン](ISSUES.md) を確認してください。
*   コントリビュートに関する詳細なガイドラインは [`CONTRIBUTING.md`](CONTRIBUTING.md) にあります。

**ライセンス:**

*   2条項 BSD ライセンスの下でライセンスされています。


---

# jackfrued/Python-100-Days

**stars**: 165008

[View Repository on Github](https://github.com/jackfrued/Python-100-Days)

Python - 100天从新手到大师

## README要約
## jackfrued/Python-100-Days リポジトリ概要（日本語）

このリポジトリは、Pythonの初心者から上級者を目指すための100日間の学習コースを提供しています。著者は駱昊氏で、知乎（中国版Quora）の[Python-Jack](https://www.zhihu.com/people/jackfrued)アカウントでも関連情報を発信しています。Bilibili（中国版YouTube）でも、一部の動画が公開されています。

### Pythonの適用分野とキャリアパス

Pythonは、シンプルで読みやすく、多用途なプログラミング言語です。

**特徴:**

*   学習曲線が低い
*   オープンソースで、豊富なライブラリとエコシステム
*   プラットフォームに依存しない
*   オブジェクト指向と関数型プログラミングをサポート
*   コードの可読性が高い

**適用分野:**

*   バックエンド開発（Python / Java / Go / PHP）
*   DevOps（Python / Shell / Ruby）
*   データ収集（Python / C++ / Java）
*   計量取引（Python / C++ / R）
*   データサイエンス（Python / R / Julia / Matlab）
*   機械学習（Python / R / C++ / Julia）
*   自動化テスト（Python / Shell）

**キャリアパス:**

*   Pythonバックエンド開発エンジニア
*   Python運用エンジニア
*   Pythonデータアナリスト
*   Pythonデータサイエンティスト
*   Pythonクローラーエンジニア (非推奨)
*   Pythonテストエンジニア

データサイエンス分野は特に需要が高く、企業のデータに基づいた意思決定を支援する役割として重要視されています。

**学習アドバイス:**

*   英語を仕事の言語にする
*   練習は完璧を作る
*   経験はエラーから生まれる
*   甘えない
*   秀でるか、去るか

### 学習内容の概要

100日間のコースは、Python言語の基礎から応用、Web開発、データ分析、機械学習、チームプロジェクト開発までを網羅しています。

**Day 1-20: Python言語基礎**

*   Pythonの概要、環境構築、最初のプログラム
*   変数、演算子、分岐構造、ループ構造
*   リスト、タプル、文字列、集合、辞書といったデータ構造
*   関数とモジュール、高階関数、Lambda関数、デコレータ
*   オブジェクト指向プログラミングの基礎

**Day 21-30: Python言語応用**

*   ファイル入出力、例外処理
*   オブジェクトのシリアライズとデシリアライズ (JSON)
*   CSV、Excel、Word/PowerPoint/PDFファイルの操作
*   画像処理 (Pillow)
*   メールとSMSの送信
*   正規表現

**Day 31-35: その他の関連内容**

*   Python言語の進歩的なトピック
*   Webフロントエンド入門（HTML, CSS, JavaScript, Vue.js, Element, Bootstrap）
*   Linuxオペレーティングシステム入門

**Day 36-45: データベース基礎と進歩**

*   リレーショナルデータベースとMySQLの概要
*   SQL (DDL, DML, DQL, DCL)
*   MySQLの新機能 (JSON, ウィンドウ関数, CTE)
*   ビュー、関数、プロシージャ
*   インデックス
*   PythonからのMySQL接続
*   ビッグデータプラットフォームとHiveSQL

**Day 46-60: 実践 Django**

*   Djangoの基礎
*   モデル、静的リソース、Ajaxリクエスト
*   CookieとSession
*   レポートとログ、デバッグツールバー
*   ミドルウェア
*   フロントエンド/バックエンド分離開発
*   RESTfulアーキテクチャとDRF
*   キャッシング
*   サードパーティプラットフォームとの連携
*   非同期タスクと定期タスク
*   ユニットテスト
*   プロジェクトの公開

**Day 61-65: ネットワークデータ収集**

*   ネットワーククローリングの概要
*   データ取得と解析 (requests, XPath, CSSセレクタ)
*   Pythonの並行プログラミング (マルチスレッド、マルチプロセス、非同期I/O)
*   Seleniumによる動的コンテンツのクローリング
*   Scrapyフレームワーク入門

**Day 66-80: Pythonデータ分析**

*   データ分析の概要
*   環境準備 (Anaconda, JupyterLab)
*   NumPy (配列操作、数学関数、ベクトル、行列)
*   Pandas (Series, DataFrame, データ整形、データクリーニング、データ透視、可視化)
*   データ可視化 (Matplotlib, Seaborn, Pyecharts)

**Day 81-90: 機械学習**

*   機械学習の概要
*   k最近傍法 (kNN)
*   決定木とランダムフォレスト
*   ナイーブベイズ
*   回帰モデル
*   K-Meansクラスタリング
*   アンサンブル学習 (AdaBoost, GBDT, XGBoost, LightGBM)
*   ニューラルネットワーク
*   自然言語処理入門
*   機械学習の実践

**Day 91-99: チームプロジェクト開発**

*   チーム開発の問題と解決策 (ソフトウェアプロセスモデル、アジャイル開発、Git, GitLab, Redmine, Jira)
*   プロジェクトの選定と要件定義
*   チームの構成と役割、コーディング規約、コードレビュー
*   Dockerコンテナ技術
*   MySQLのパフォーマンス最適化
*   ネットワークAPIインターフェース設計
*   Djangoでの商用プロジェクト開発
*   ソフトウェアテストと自動化テスト
*   eコマースサイトの技術的なポイント
*   プロジェクトのデプロイとパフォーマンスチューニング
*   面接でよくある質問

**Day 100: 補足**

*   面接対策 (Python, SQL, ビジネス分析, 機械学習)
*   機械学習の数学的基礎
*   深層学習 (コンピュータビジョン、大規模言語モデル)

このコースは、Pythonの基礎を固め、Web開発、データ分析、機械学習などの分野で実践的なスキルを習得することを目指しています。


---

# juspay/hyperswitch

**stars**: 16436

[View Repository on Github](https://github.com/juspay/hyperswitch)

An open source payments switch written in Rust to make payments fast, reliable and affordable

## README要約
## juspay/hyperswitch リポジトリ概要

このリポジトリは、Rustで記述されたオープンソースの決済スイッチ「Hyperswitch」に関するものです。決済を高速、信頼性、かつ手頃な価格で提供することを目的としています。

**主な特徴:**

*   **決済オーケストレーション:** 単一のAPIを通じて決済エコシステムとその機能にアクセスできます。
*   **オープンソース:** 商用利用可能なオープンソースであり、透明性とモジュール性を重視しています。
*   **Rustで記述:** 高いパフォーマンスと信頼性を実現しています。

**主なコンポーネント:**

*   **Hyperswitch Backend:** 決済処理の中核を担い、承認、認証、無効化、キャプチャなどの様々な決済フローを包括的にサポートします。払い戻しやチャージバック処理などの決済後のプロセスも管理します。また、外部のFRM（不正リスク管理）プロバイダーや認証プロバイダーとの連携も可能です。成功率ベース、ルールベース、ボリューム分散、フォールバック処理、エラーコードに基づいたリトライなど、カスタマイズ可能なワークフローで決済ルーティングを最適化します。
*   **SDK (Frontend):** Web、Android、iOS向けのSDKを提供し、カード、ウォレット、BNPL、銀行振込など、様々な決済方法を統一的に提供します。基盤となるPSP（Payment Service Provider）の多様な決済フローをサポートします。ロッカーと組み合わせることで、ユーザーの保存された支払い方法を表示します。
*   **Control Center:** コーディングなしで決済スタック全体を管理できます。ルーティング、リトライ、3DS、FRM、追加料金モジュールの呼び出し条件を定義するワークフローを作成できます。統合されたすべてのPSPにおけるトランザクション、払い戻し、チャージバック操作へのアクセスを提供し、トランザクションレベルのログによるデバッグ、決済パフォーマンスの詳細な分析とインサイトを提供します。

**利用方法:**

1.  **ローカルセットアップ:** Docker Composeを使用して、このリポジトリをクローンし、`docker compose up -d` コマンドを実行して起動できます。
2.  **クラウドデプロイ:** AWSへのデプロイは、提供されているCloudFormationスクリプトを使用すると、素早く簡単に行えます。GCPやAzureへのデプロイもHelmチャートを通じてサポートされています。
3.  **ホスト型サンドボックス:** [https://app.hyperswitch.io/](https://app.hyperswitch.io/) からサインアップすることで、Control Centerの全機能にアクセスできるサンドボックスを体験できます。

**アーキテクチャ:**

Hyperswitchのアーキテクチャは、複数のコンポーネントと非機能的な特徴（パフォーマンス、セキュリティ、スケーラビリティなど）で構成されています。

**サポートと貢献:**

*   **サポート:** Slackチャンネルで質問やサポートを受け付けています。
*   **機能リクエストとディスカッション:** GitHub Discussions で行われます。
*   **バグ報告:** Issue Guidelines を参照し、既存のIssueを検索してから、新しいIssueを開いてください。

**ビジョン:**

Hyperswitch は、「決済のためのLinux」を目指しており、決済プロセッサ、不正検出システム、認証モジュール、新しい決済方法が急速に発展する中で、企業が独自の決済スタックを所有し、カスタマイズできるように設計された、高品質な決済プラットフォームを提供しています。

**ライセンス:**

Apache 2.0 License

**その他:**

*   CHANGELOG.md でバージョン情報を確認できます。
*   Juspay がこのプロジェクトを開発・維持しています。
*   コントリビューターのリストが提供されています。


---

# carykh/jes

**stars**: 82

[View Repository on Github](https://github.com/carykh/jes)

Jelly Evolution Simulator

## README要約
## Carykh/jes (Jelly Evolution Simulator) の詳細な要約

このリポジトリは、**Jelly Evolution Simulator (JES)** を公開しています。これは、Carykh氏が個人的な実験として開発したもので、完璧な品質管理や消費者向けの製品を意図したものではありません。 

**実行方法:**

プログラムを実行するには、以下のコマンドを使用します。

```
cmd python jes.py
```

**免責事項:**

このプロジェクトは、バグ修正や技術サポートは提供されません。

**主な機能と操作方法:**

*   **ESC:** プログラムを終了します。
*   **X:** 殺されたジェリーの上にXを表示/非表示を切り替えます。
*   **S:** ハイライトされている種をメモリに保存します（2回押すと解除）。これは、特定の世代でナンバーワンになったクリーチャーを見つけ、その情報を追跡するために使用できます。保存された種の情報は、左上に表示される種バブルにマウスを置くことで確認できます。
*   **C:** ハイライトされている種のカラーを変更します。異なる種の色が似ている場合に、区別しやすくするために使用します。
*   **Q:** クリーチャーモザイクを開閉します（「Show creatures」ボタンをクリックすることでも可能です）。
*   **LEFT/RIGHT:** タイムラインを前後にスクロールします（スクロールバーを使用することでも可能です）。
*   **最初のユーザー入力:** シミュレーション内のクリーチャー数を変更できます。

**最近のアップデート (2025-01-11):**

*   **突然変異検出のバグ修正:** シミュレーション後半で大きな突然変異の検出に時間がかかるバグが修正されました (0.5+ rigidity-forcing が原因)。
*   **キーコントロールの追加:** 上記のキー操作が実装されました。
*   **クリーチャー数の変更可能:** ユーザーがシミュレーション内のクリーチャー数を変更できるようになりました。
*   **「Watch sample」の修正:** 「Watch sample」をクリックした際、現在のスクロールバー位置の世代からサンプルが表示されるようになりました (以前は最新世代の8匹のみ)。

