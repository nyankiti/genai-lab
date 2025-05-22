
# microsoft/WSL

**stars**: 25295

[View Repository on Github](https://github.com/microsoft/WSL)

Windows Subsystem for Linux

## README要約
## microsoft/WSL リポジトリ概要 (日本語)

このリポジトリは、**Windows Subsystem for Linux (WSL)** の主要なリポジトリです。WSL は、従来の仮想マシンやデュアルブートのオーバーヘッドなしに、Linux のコマンドラインツール、ユーティリティ、およびアプリケーションを Windows 上で直接、変更なしで実行するための強力な方法を提供します。

**主な内容:**

*   **機能:**
    *   Linux コマンドラインツールの実行
    *   Linux アプリケーションの実行 (未変更)
*   **インストール:**
    *   Windows コマンドラインで `wsl --install` を実行することで簡単にインストールできます。
*   **ドキュメント:**
    *   [WSL ドキュメント](https://learn.microsoft.com/windows/wsl/) に詳細な情報が記載されています。
    *   [ダウンロードとリリースノート](https://github.com/microsoft/WSL/releases)
*   **関連リポジトリ:**
    *   [microsoft/WSL2-Linux-Kernel](https://github.com/microsoft/WSL2-Linux-Kernel) - WSL に同梱される Linux カーネル
    *   [microsoft/WSLg](https://github.com/microsoft/wslg) - WSL での Linux GUI アプリのサポート
    *   [microsoftdocs/wsl](https://github.com/microsoftdocs/wsl) - WSL ドキュメント (aka.ms/wsldocs)
*   **貢献:**
    *   機能追加、バグ修正、ドキュメント修正、設計提案など、あらゆる種類の貢献を歓迎しています。
    *   [Contributor's Guide](./CONTRIBUTING.md) を参照してください。
    *   [developer docs](./doc/docs/dev-loop.md) に開発に関する詳細情報があります。
*   **行動規範:**
    *   [Microsoft Open Source Code of Conduct](./CODE_OF_CONDUCT.md) を採用しています。
*   **商標:**
    *   Microsoft の商標やロゴの使用に関するガイドラインが記載されています。
*   **プライバシーとテレメトリ:**
    *   基本的な診断データ (テレメトリ) を収集します。
    *   詳細については、[data and privacy documentation](DATA_AND_PRIVACY.md) を参照してください。
    *   テレメトリをオフにすることもできます。
    *   Microsoft のプライバシーに関する声明はこちら: [https://go.microsoft.com/fwlink/?LinkID=824704](https://go.microsoft.com/fwlink/?LinkID=824704)

**要するに、このリポジトリは、Windows 上で Linux 環境をシームレスに実行できるようにする WSL の開発の中心的な場所です。貢献を歓迎し、開発者向けの豊富なドキュメントを提供しています。**


---

# donnemartin/system-design-primer

**stars**: 300265

[View Repository on Github](https://github.com/donnemartin/system-design-primer)

Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.

## README要約
## donnemartin/system-design-primer リポジトリの日本語要約

このリポジトリは、大規模システムの設計方法を学び、システム設計の面接対策を行うための包括的なリソースです。Ankiフラッシュカードも含まれています。

**主な内容:**

*   **大規模システム設計の学習:** スケーラブルなシステム設計を学ぶことで、より優れたエンジニアを目指すことができます。ウェブ上に散在するシステム設計の原則に関する膨大なリソースを整理し、大規模システムの構築方法を学習するための体系的なコレクションを提供しています。
*   **オープンソースコミュニティからの学習:** このリポジトリは、継続的に更新されるオープンソースプロジェクトであり、貢献を歓迎しています。
*   **システム設計面接対策:** コーディング面接に加えて、システム設計は多くのテクノロジー企業における技術面接の必須要素です。システム設計面接でよくある質問を練習し、サンプルソリューション（議論、コード、図）と比較することができます。
    *   [学習ガイド](#study-guide)
    *   [システム設計面接の質問へのアプローチ方法](#how-to-approach-a-system-design-interview-question)
    *   システム設計面接の質問と**ソリューション**
    *   オブジェクト指向設計面接の質問と**ソリューション**
    *   追加のシステム設計面接の質問

**Ankiフラッシュカード:**

*   [システム設計デッキ](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
*   [システム設計演習デッキ](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
*   [オブジェクト指向設計演習デッキ](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

**姉妹リポジトリ:**

*   [インタラクティブコーディングチャレンジ](https://github.com/donnemartin/interactive-coding-challenges): コーディング面接対策に役立つリソース。追加のAnkiデッキが含まれています。
    *   [コーディングデッキ](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

**貢献:**

*   誤りの修正
*   セクションの改善
*   新しいセクションの追加
*   [翻訳](https://github.com/donnemartin/system-design-primer/issues/28)

**システム設計トピックのインデックス:**

システム設計のさまざまなトピックの概要（長所と短所を含む）がまとめられています。各セクションには、より詳細なリソースへのリンクが含まれています。

*   [システム設計トピック：ここから開始](#system-design-topics-start-here)
    *   [ステップ1：スケーラビリティビデオ講義のレビュー](#step-1-review-the-scalability-video-lecture)
    *   [ステップ2：スケーラビリティ記事のレビュー](#step-2-review-the-scalability-article)
    *   [次のステップ](#next-steps)
*   [パフォーマンスとスケーラビリティ](#performance-vs-scalability)
*   [レイテンシとスループット](#latency-vs-throughput)
*   [可用性と一貫性](#availability-vs-consistency)
    *   [CAP定理](#cap-theorem)
        *   CP - 一貫性とパーティショニング耐性
        *   AP - 可用性とパーティショニング耐性
*   [一貫性パターン](#consistency-patterns)
    *   弱い一貫性
    *   最終的な一貫性
    *   強い一貫性
*   [可用性パターン](#availability-patterns)
    *   フェイルオーバー
    *   レプリケーション
    *   数値による可用性
*   [ドメインネームシステム](#domain-name-system)
*   [コンテンツ配信ネットワーク](#content-delivery-network)
    *   プッシュCDN
    *   プルCDN
*   [ロードバランサー](#load-balancer)
    *   アクティブ/パッシブ
    *   アクティブ/アクティブ
    *   レイヤー4ロードバランシング
    *   レイヤー7ロードバランシング
    *   水平スケーリング
*   [リバースプロキシ（ウェブサーバー）](#reverse-proxy-web-server)
    *   ロードバランサーとリバースプロキシ
*   [アプリケーション層](#application-layer)
    *   マイクロサービス
    *   サービスディスカバリ
*   [データベース](#database)
    *   リレーショナルデータベース管理システム（RDBMS）
        *   マスター/スレーブレプリケーション
        *   マスター/マスターレプリケーション
        *   フェデレーション
        *   シャーディング
        *   非正規化
        *   SQLチューニング
    *   NoSQL
        *   キーバリューストア
        *   ドキュメントストア
        *   ワイドカラムストア
        *   グラフデータベース
    *   SQLまたはNoSQL
*   [キャッシュ](#cache)
    *   クライアントキャッシング
    *   CDNキャッシング
    *   ウェブサーバーキャッシング
    *   データベースキャッシング
    *   アプリケーションキャッシング
    *   データベースクエリレベルでのキャッシング
    *   オブジェクトレベルでのキャッシング
    *   キャッシュの更新タイミング
        *   キャッシュアサイド
        *   ライトスルー
        *   ライトビハインド（ライトバック）
        *   リフレッシュアヘッド
*   [非同期性](#asynchronism)
    *   メッセージキュー
    *   タスクキュー
    *   バックプレッシャー
*   [通信](#communication)
    *   伝送制御プロトコル（TCP）
    *   ユーザデータグラムプロトコル（UDP）
    *   リモートプロシージャコール（RPC）
    *   Representational State Transfer（REST）
*   [セキュリティ](#security)
*   [付録](#appendix)
    *   2の累乗テーブル
    *   すべてのプログラマーが知っておくべきレイテンシ番号
    *   追加のシステム設計面接の質問
    *   現実世界のアーキテクチャ
    *   企業のアーキテクチャ
    *   企業の技術ブログ
*   [開発中](#under-development)
*   [クレジット](#credits)
*   [連絡先情報](#contact-info)
*   [ライセンス](#license)

**学習ガイド:**

面接までの期間に基づいた、レビューすべきトピックが提案されています（短い、中間、長い）。

*   **短い期間** - システム設計トピックの**広範な**理解を目指します。いくつかの面接の質問を解くことで練習します。
*   **中間期間** - システム設計トピックの**広さとある程度の深さ**を目指します。多くの面接の質問を解くことで練習します。
*   **長い期間** - システム設計トピックの**広さとさらに深い深さ**を目指します。ほとんどの面接の質問を解くことで練習します。

**システム設計面接の質問へのアプローチ方法:**

システム設計面接は**オープンエンドな会話**です。以下の手順を使用して議論を導くことができます。

1.  **ユースケース、制約、仮定を概説する:** 要件を収集し、問題を範囲設定します。ユースケースと制約を明確にするための質問をします。仮定について議論します。
2.  **高レベル設計を作成する:** すべての重要なコンポーネントを含む高レベル設計を概説します。
3.  **コアコンポーネントを設計する:** 各コアコンポーネントの詳細を掘り下げます。
4.  **設計をスケーリングする:** 制約を与えられた上で、ボトルネックを特定し、対処します。

**付録:**

*   [2の累乗テーブル](#powers-of-two-table)
*   [すべてのプログラマーが知っておくべきレイテンシ番号](#latency-numbers-every-programmer-should-know)
*   追加のシステム設計面接の質問
*   現実世界のアーキテクチャ
*   企業のアーキテクチャ
*   企業の技術ブログ

**ソリューション付きのシステム設計面接の質問:**

一般的なシステム設計の面接の質問と、サンプルディスカッション、コード、図が含まれています。

*   Pastebin.com（またはBit.ly）の設計
*   Twitterのタイムラインと検索（またはFacebookフィードと検索）の設計
*   ウェブクローラーの設計
*   Mint.comの設計
*   ソーシャルネットワークのデータ構造の設計
*   検索エンジンのキーバリューストアの設計
*   Amazonのカテゴリ別売上ランキング機能の設計
*   AWSで数百万人のユーザーにスケーリングするシステムの設計

**ソリューション付きのオブジェクト指向設計面接の質問:**

一般的なオブジェクト指向設計の面接の質問と、サンプルディスカッション、コード、図が含まれています。

*   ハッシュマップの設計
*   LRUキャッシュの設計
*   コールセンターの設計
*   トランプのデッキの設計
*   駐車場設計
*   チャットサーバーの設計

**このリポジトリの目的:**

*   システム設計の学習
*   面接対策
*   コミュニティとの連携


---

# microsoft/vscode

**stars**: 171901

[View Repository on Github](https://github.com/microsoft/vscode)

Visual Studio Code

## README要約
## microsoft/vscode リポジトリ概要

このリポジトリ (`Code - OSS`) は、Microsoftがコミュニティと共に開発している [Visual Studio Code](https://code.visualstudio.com) のオープンソース版です。MITライセンスの下で公開されており、誰でも利用できます。

**主な内容:**

*   **Visual Studio Codeのソースコード:**  このリポジトリは、Visual Studio Codeのソースコードをホストしています。
*   **コミュニティとの協同開発:**  Microsoftはここでコードと課題に取り組み、ロードマップ、月次イテレーションプラン、エンドゲームプランなどを公開しています。
*   **Visual Studio Codeとの関係:**  [Visual Studio Code](https://code.visualstudio.com) は、このリポジトリをベースに Microsoft が独自にカスタマイズしたもので、Microsoft 製品ライセンスの下で提供されています。
*   **機能:** VS Codeは、コード編集、ナビゲーション、理解を支援し、軽量なデバッグ機能、豊富な拡張機能モデル、既存ツールとの連携を提供します。
*   **更新:** 新機能とバグ修正は毎月更新されています。Windows, macOS, Linuxで利用できます。
*   **貢献:** コミュニティは、バグの報告、機能のリクエスト、コードのレビュー、ドキュメントの改善など、様々な形で貢献できます。
*   **貢献の方法:** コードベースへの直接的な貢献に興味がある場合は、[How to Contribute](https://github.com/microsoft/vscode/wiki/How-to-Contribute) のドキュメントを参照してください。ビルドと実行の方法、開発ワークフロー、コーディングガイドライン、プルリクエストの送信方法、問題の探し方、翻訳への貢献について説明されています。
*   **フィードバック:**  Stack Overflow、機能リクエスト、GitHub Issues、GitHub Discussions、Slack、Twitterなどを通じてフィードバックを送信できます。
*   **関連プロジェクト:** VS Code の多くのコアコンポーネントと拡張機能は、GitHub上の別のリポジトリに存在します。
*   **バンドルされた拡張機能:** VS Code には、多くの言語の文法やスニペットを含む、組み込みの拡張機能が含まれています。
*   **開発コンテナ:**  このリポジトリには、Visual Studio Code Dev Containers / GitHub Codespaces 開発コンテナが含まれています。
*   **ライセンス:**  MITライセンスです。
*   **行動規範:**  Microsoft オープンソース行動規範を採用しています。

**要するに、このリポジトリは、Visual Studio Codeの開発が行われている場所であり、コミュニティがオープンに貢献できるプラットフォームです。**

