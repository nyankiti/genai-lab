
# Pennyw0rth/NetExec

**stars**: 3916

[View Repository on Github](https://github.com/Pennyw0rth/NetExec)

The Network Execution Tool

## README要約
## NetExec - ネットワーク実行ツールの概要

NetExec は、ネットワーク実行ツールであり、元々は @byt3bl33d3r によって 2015 年に CrackMapExec として開発されました。2019 年からは @mpgn_x64 がプロジェクトを引き継ぎ、様々な機能を追加していましたが、2023 年 9 月にメンテナンスを引退しました。

その後、主要な貢献者である NeffIsBack, Marshall-Hallenbeck, zblurx が中心となり、CrackMapExec の新しい機能開発、バグ修正、メンテナンスを行ってきました。 これまでのプライベートリポジトリとパブリックリポジトリの間のコードのずれから発生していた問題を解決するため、彼らは NetExec という名称で完全にフリーでオープンソースのプロジェクトとして再始動し、コミュニティ主導のメンテナンス体制を構築しました。

**主な特徴:**

*   ネットワークの実行ツール
*   Python 3.10 以降をサポート
*   活発なコミュニティによる開発とメンテナンス
*   問題報告、コントリビュート、ディスカッションのための仕組みを提供
*   Discord チャンネルでの質疑応答が可能

**利用方法:**

*   問題報告は [Issue](https://github.com/Pennyw0rth/NetExec/issues) から
*   コントリビュートは [Pull Request](https://github.com/Pennyw0rth/NetExec/pulls) から
*   ディスカッションは [Discussion](https://github.com/Pennyw0rth/NetExec/discussions) から

**ドキュメント:**

*   ドキュメントと使用例は、開発中の [wiki](https://netexec.wiki/) を参照

**インストール:**

*   [wiki](https://netexec.wiki/getting-started/installation) の指示に従う

    *   Linux の例:
        ```
        sudo apt install pipx git
        pipx ensurepath
        pipx install git+https://github.com/Pennyw0rth/NetExec
        ```

**その他:**

*   Unix ディストリビューションでの利用状況は [Packaging status](https://repology.org/project/netexec/versions) で確認可能
*   開発ガイドラインと推奨事項は開発中
*   CrackMapExec プロジェクトの貢献者への謝辞
*   コード貢献者として、mpgn, Marshall-Hallenbeck, zblurx, NeffIsBack, Hackndo, XiaoliChan が紹介されています。


---

# freqtrade/freqtrade

**stars**: 38250

[View Repository on Github](https://github.com/freqtrade/freqtrade)

Free, open source crypto trading bot

## README要約
## freqtrade/freqtrade の詳細な要約 (日本語)

Freqtrade は、Python で記述された無料かつオープンソースの仮想通貨取引ボットです。主な特徴は以下の通りです。

**主な機能:**

*   **主要取引所対応:** 主要な仮想通貨取引所 (Binance, Bybit, Gate.io, OKXなど) に対応し、TelegramまたはWebUIを介して操作できます。
*   **多機能:** バックテスト、プロット、資金管理ツール、機械学習による戦略最適化機能などが搭載されています。
*   **Dry-run モード:** 実際の資金を使わずにボットを試すことができます。
*   **高度な機能:**
    *   **FreqAI:** Adaptive prediction modelingで、機械学習を活用したスマートな戦略を構築します。
    *   **Edge position sizing:** 各市場の勝率、リスクリワード比率、最適なストップロス、ポジションサイズを計算できます。
*   **WebUIとTelegram連携:** WebUIを介してボットを管理し、Telegramコマンドによる操作も可能です。
*   **フィアット表示:** 損益をフィアット通貨で表示します。
*   **パフォーマンスレポート:** 現在の取引のパフォーマンスステータスを提供します。

**免責事項:**

本ソフトウェアは教育目的でのみ提供されており、利用者の自己責任で使用する必要があります。著者は取引結果について一切の責任を負いません。Dry-run で動作を確認し、十分理解してから資金を投入することを強く推奨しています。

**対応取引所:**

Binance, Bitmart, BingX, Bybit, Gate.io, HTX, Hyperliquid (DEX), Kraken, OKX, MyOKX, Bitvavo, Kucoinなど、多くの取引所に対応しています。

**Docker Quickstart:**

Dockerを使用した簡単なセットアップ方法については、ドキュメントを参照してください。

**基本コマンド:**

Freqtrade は、さまざまなコマンドをサポートしています。主なものは以下の通りです。詳細なコマンドリストはドキュメントを参照してください。

*   `trade`: 取引を開始します。
*   `backtesting`: バックテストを実行します。
*   `hyperopt`: ハイパーパラメータ最適化を実行します。
*   `edge`: Edge モジュールを実行します。
*   `download-data`: バックテスト用データのダウンロード。

**Telegram RPC コマンド:**

Telegramを利用してボットを制御できます。主なコマンドは以下の通りです。

*   `/start`, `/stop`: 取引の開始・停止
*   `/status`: 現在の取引状況の表示
*   `/profit`: 累計利益の表示
*   `/forceexit`, `/fx`: 特定の取引を強制的に終了
*   `/performance`: ペアごとのパフォーマンスの表示
*   `/balance`: アカウント残高の表示
*   `/daily`: 日次利益の表示
*   `/help`, `/version`: ヘルプとバージョン情報の表示

**開発ブランチ:**

*   `develop`: 最新機能が追加されるブランチ（不安定な可能性あり）。
*   `stable`: 最新の安定版リリースを含むブランチ。
*   `feat/*`: 特定の機能の開発に利用されるブランチ（テスト用）。

**サポート:**

*   質問は、Discord サーバーで受け付けています。
*   バグや問題は Issue Tracker から報告してください。
*   機能追加の提案は、Issue Tracker の Enhancement から行ってください。
*   プルリクエストも歓迎しています。

**必要要件:**

*   正確なクロック（NTPサーバーとの同期）。
*   **推奨ハードウェア:** 2GB RAM, 1GB disk space, 2vCPU
*   **ソフトウェア:** Python 3.10+, pip, git, TA-Lib, virtualenv (推奨), Docker (推奨)

**その他:**

ドキュメントの参照、貢献方法、コミュニティポリシーについても記載されています。

