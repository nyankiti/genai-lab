
# Peterande/D-FINE

**stars**: 2147

[View Repository on Github](https://github.com/Peterande/D-FINE)

D-FINE: Redefine Regression Task of DETRs as Fine-grained Distribution Refinement [ICLR 2025 Spotlight]

## README要約
## D-FINE: DETRの回帰タスクを細粒度分布洗練として再定義する

このリポジトリは、[ICLR 2025 Spotlight] で発表された論文「D-FINE: Redefine Regression Task of DETRs as Fine-grained Distribution Refinement」の公式実装です。D-FINEは、DETR（Detection Transformer）におけるバウンディングボックス回帰タスクを細粒度分布洗練（FDR）として再定義し、グローバル最適局所化自己蒸留（GO-LSD）を導入した、高性能なリアルタイムオブジェクト検出器です。追加の推論や学習コストをかけずに優れた性能を発揮します。

**主要な特徴:**

*   FDR (Fine-grained Distribution Refinement): DETRのバウンディングボックス回帰タスクを、より細かく調整された中間表現として確率分布を反復的に洗練することで再定義します。
*   GO-LSD (Global Optimal Localization Self-Distillation): 最終層の洗練された分布から得られた局所化の知識を、DDF損失と分離した重み付け戦略を用いて、早期層に蒸留します。
*   リアルタイム性能: 高い精度を維持しながら、リアルタイムでのオブジェクト検出を可能にします。

**更新履歴:**

*   \[2024.10.18\] D-FINEシリーズのリリース。
*   \[2024.10.25\] カスタムデータセットの微調整設定を追加。
*   \[2024.10.30\] D-FINE-L (E25) 事前学習済みモデルを更新、2.0%の性能向上。
*   \[2024.11.07\] **D-FINE-N**をリリースし、COCOデータセットで42.8% AP<sup>val</sup>を達成 (472 FPS<sup>T4</sup>)。

**モデルZoo:**

様々なサイズ（N, S, M, L, X）のD-FINEモデルが提供されており、COCO、Objects365+COCO、Objects365データセットでの評価結果と、モデルのパラメータ数、レイテンシ、GFLOPsが一覧でまとめられています。

| モデル        | データセット         | AP<sup>val</sup> | #Params | Latency (ms) | GFLOPs | config                                                    | checkpoint                                                                 | logs                                                                                |
| ------------- | -------------------- | ---------------- | ------- | ------------ | ------ | --------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| D-FINE-N      | COCO                 | 42.8             | 4M      | 2.12         | 7      | `configs/dfine/dfine_hgnetv2_n_coco.yml`               | [42.8](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_n_coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/coco/dfine_n_coco_log.txt)                  |
| D-FINE-S      | COCO                 | 48.5             | 10M     | 3.49         | 25     | `configs/dfine/dfine_hgnetv2_s_coco.yml`               | [48.5](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_s_coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/coco/dfine_s_coco_log.txt)                  |
| D-FINE-M      | COCO                 | 52.3             | 19M     | 5.62         | 57     | `configs/dfine/dfine_hgnetv2_m_coco.yml`               | [52.3](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_m_coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/coco/dfine_m_coco_log.txt)                  |
| D-FINE-L      | COCO                 | 54.0             | 31M     | 8.07         | 91     | `configs/dfine/dfine_hgnetv2_l_coco.yml`               | [54.0](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_l_coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/coco/dfine_l_coco_log.txt)                  |
| D-FINE-X      | COCO                 | 55.8             | 62M     | 12.89        | 202    | `configs/dfine/dfine_hgnetv2_x_coco.yml`               | [55.8](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_x_coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/coco/dfine_x_coco_log.txt)                  |
| D-FINE-S      | Objects365+COCO       | 50.7             | 10M     | 3.49         | 25     | `configs/dfine/objects365/dfine_hgnetv2_s_obj2coco.yml` | [50.7](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_s_obj2coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj2coco/dfine_s_obj2coco_log.txt)             |
| D-FINE-M      | Objects365+COCO       | 55.1             | 19M     | 5.62         | 57     | `configs/dfine/objects365/dfine_hgnetv2_m_obj2coco.yml` | [55.1](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_m_obj2coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj2coco/dfine_m_obj2coco_log.txt)             |
| D-FINE-L      | Objects365+COCO       | 57.3             | 31M     | 8.07         | 91     | `configs/dfine/objects365/dfine_hgnetv2_l_obj2coco.yml` | [57.3](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_l_obj2coco_e25.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj2coco/dfine_l_obj2coco_log_e25.txt)         |
| D-FINE-X      | Objects365+COCO       | 59.3             | 62M     | 12.89        | 202    | `configs/dfine/objects365/dfine_hgnetv2_x_obj2coco.yml` | [59.3](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_x_obj2coco.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj2coco/dfine_x_obj2coco_log.txt)             |
| D-FINE-S      | Objects365            | 31.0             | 10M     | 3.49         | 25     | `configs/dfine/objects365/dfine_hgnetv2_s_obj365.yml`    | [30.5](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_s_obj365.pth)   | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj365/dfine_s_obj365_log.txt)                 |
| D-FINE-M      | Objects365            | 38.6             | 19M     | 5.62         | 57     | `configs/dfine/objects365/dfine_hgnetv2_m_obj365.yml`    | [37.4](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_m_obj365.pth)   | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj365/dfine_m_obj365_log.txt)                 |
| D-FINE-L      | Objects365            | -                | 31M     | 8.07         | 91     | `configs/dfine/objects365/dfine_hgnetv2_l_obj365.yml`    | [40.6](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_l_obj365.pth)   | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj365/dfine_l_obj365_log.txt)                 |
| D-FINE-L (E25) | Objects365            | 44.7             | 31M     | 8.07         | 91     | `configs/dfine/objects365/dfine_hgnetv2_l_obj365.yml`    | [42.6](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_l_obj365_e25.pth) | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj365/dfine_l_obj365_log_e25.txt)             |
| D-FINE-X      | Objects365            | 49.5             | 62M     | 12.89        | 202    | `configs/dfine/objects365/dfine_hgnetv2_x_obj365.yml`    | [46.5](https://github.com/Peterande/storage/releases/download/dfinev1.0/dfine_x_obj365.pth)   | [url](https://raw.githubusercontent.com/Peterande/storage/refs/heads/master/logs/obj365/dfine_x_obj365_log.txt)                 |

**注記:**

*   AP<sup>val</sup> は、MSCOCO val2017 データセットで評価されています。
*   Latency は、単一の T4 GPU、batch\_size = 1、fp16、TensorRT==10.4.0 で評価されています。
*   Objects365+COCO は、Objects365 で事前学習した重みを使用して COCO で微調整されたモデルを意味します。

**Objects365 事前学習済みモデルの使用を推奨します。**複雑なシーンの理解に役立ちます。ただし、カテゴリが非常に単純な場合は、過学習や最適以下のパフォーマンスにつながる可能性があります。

**クイックスタート:**

1.  **セットアップ:**
    ```shell
    conda create -n dfine python=3.11.9
    conda activate dfine
    pip install -r requirements.txt
    ```
2.  **データ準備:** COCO2017、Objects365、またはカスタムデータセットを準備し、`configs/dataset`内の設定ファイルを修正します。
    *   COCO2017 の場合、[OpenDataLab](https://opendatalab.com/OpenDataLab/COCO_2017) または [COCO](https://cocodataset.org/#download) から COCO2017 をダウンロードし、`coco_detection.yml` 内のパスを修正します。
    *   Objects365 の場合、[OpenDataLab](https://opendatalab.com/OpenDataLab/Objects365) からダウンロードし、`BASE_DIR` 環境変数を設定し、`obj365_detection.yml` 内のパスを修正します。
    *   カスタムデータセットの場合、COCO形式でデータを整理し、`custom_detection.yml` 内の設定を修正します。
3.  **使用方法:**
    *   COCO2017 でトレーニングとテストを行うには、以下のコマンドを使用します。
        ```shell
        export model=l  # n s m l x
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/dfine_hgnetv2_${model}_coco.yml --use-amp --seed=0
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/dfine_hgnetv2_${model}_coco.yml --test-only -r model.pth
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/dfine_hgnetv2_${model}_coco.yml --use-amp --seed=0 -t model.pth
        ```
    *   Objects365 で事前学習し、COCO2017 で微調整するには、以下のコマンドを使用します。
        ```shell
        export model=l  # n s m l x
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/objects365/dfine_hgnetv2_${model}_obj365.yml --use-amp --seed=0
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/objects365/dfine_hgnetv2_${model}_obj2coco.yml --use-amp --seed=0 -t model.pth
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/dfine_hgnetv2_${model}_coco.yml --test-only -r model.pth
        ```
    *   カスタムデータセットでトレーニングとテストを行うには、以下のコマンドを使用します。
        ```shell
        export model=l  # n s m l x
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/custom/dfine_hgnetv2_${model}_custom.yml --use-amp --seed=0
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/custom/dfine_hgnetv2_${model}_custom.yml --test-only -r model.pth
        CUDA_VISIBLE_DEVICES=0,1,2,3 torchrun --master_port=7777 --nproc_per_node=4 train.py -c configs/dfine/custom/objects365/dfine_hgnetv2_${model}_obj2custom.yml --use-amp --seed=0 -t model.pth
        ```
4.  **その他のオプション:**
    *   バッチサイズのカスタマイズ
    *   入力サイズのカスタマイズ
    *   トレーニングの自動再開
    *   モデルの重みの変換

**ツール:**

*   **デプロイメント:** ONNXエクスポート、TensorRTエクスポート
*   **推論:** ONNXRuntime/TensorRT/Torch を使用した推論（画像/動画対応）
*   **ベンチマーク:** モデルのFLOPs、MACs、パラメータ数の取得、TensorRTレイテンシの評価
*   **Fiftyone Visualization:** Voxel51 Fiftyoneを使用した可視化

**図と可視化:**

*   FDRとGO-LSDの概念図
*   様々な検出シナリオにおけるFDRの可視化
*   困難なケースでのD-FINEの予測

**引用:**

D-FINEまたはその方法を使用する場合は、論文を引用してください。

**謝辞:**

この研究は、RT-DETR、GFocal、LD、YOLOv9 からのインスピレーションを受けています。

**質問がある場合は、お気軽にご連絡ください！**


---

# shane-mason/FieldStation42

**stars**: 463

[View Repository on Github](https://github.com/shane-mason/FieldStation42)

Broadcast TV simulator

## README要約
## FieldStation42 の概要

FieldStation42 は、ケーブルテレビや放送テレビのシミュレーターであり、昔のテレビ視聴体験を再現することを目指しています。主な目標は、テレビをオンにすると、その時間帯とネットワークにふさわしい番組が流れ、チャンネルを切り替えるたびに、番組がまるで最初から放送されていたかのようにシームレスに再生されることです。

**主な機能:**

*   複数のチャンネルを同時サポート
*   コマーシャルブレイクや番組間のつなぎを自動的に挿入
*   各ステーションの設定に基づいて週ごとの番組表を生成
*   映画尺のコンテンツに対応
*   最近再生されていない番組をランダムに選択して、番組の新鮮さを保つ
*   季節限定のスポーツ番組やホリデー番組などの番組期間を設定可能
*   各ステーションに合わせた、放送終了時のビデオやオフエアループの設定
*   カタログと番組表を管理できるUX (ユーザーインターフェース)
*   チャンネルを変更するためのハードウェア接続 (オプション)
*   ループチャンネル（地域情報チャンネルなど）
*   ビデオ埋め込みと設定可能なメッセージを備えたプレビュー/ガイドチャンネル (新しい機能で、詳細は[FieldStation42 Guide](https://github.com/shane-mason/FieldStation42/wiki)を参照)
*   あらゆる種類のチャンネルタイプに対応する柔軟なスケジュール設定 (従来のネットワークチャンネル、コマーシャルのないチャンネル、ループチャンネルなど)

**インストールと設定:**

これはまだ開発中のプロジェクトであり、インストールには以下の知識が多少必要です。

*   基本的なLinuxコマンドラインの使用
*   JSON設定ファイルの読み書きと編集
*   動画ファイルの変換とフォルダへの整理

詳細なインストール手順は、[FieldStation42 Guide](https://github.com/shane-mason/FieldStation42/wiki) を参照してください。

**Quickstartセットアップ:**

1.  Python 3 と MPV をシステムにインストールする。
2.  リポジトリをクローンする（これが作業ディレクトリになります）。
3.  インストールスクリプトを実行する。
4.  動画コンテンツを追加する。
5.  ステーションを設定する。
    *   `confs/examples`から`.json`ファイルを`confs/`にコピーする。
6.  週ごとの番組表を生成する。
    *   コマンドラインで `python3 station_42.py` を実行する。
        *   コンテンツが変更された場合は、`--rebuild_catalog`オプションを使用する。
7.  テレビを視聴する。
    *   コマンドラインで `field_player.py` を実行する。
8.  起動時に自動的に開始するように設定する (オプション、専用デバイス以外では推奨されません)
    *   コマンドラインで `fs42/hot_start.sh` を実行する。

**仕組み:**

FieldStation42 は、昔懐かしいテレビ体験を再現するために複数のコンポーネントが連携して動作します。

*   `station_42.py`: カタログの作成と番組表の生成に使用します。 カタログはステーションのコンテンツに関するメタデータを保存するために使用され、コンテンツが変更されるたびに再構築する必要があります。 このスクリプトはディスク上のファイルを検査するため、コンテンツライブラリ内の動画数によっては時間がかかることがあります。 liquid-scheduler はカタログとステーションの設定を使用して番組表を作成するため、最初にカタログを作成する必要があります。引数なしで `station_42.py` を実行すると、ターミナルでUIが起動します。 これを使用してカタログと番組表を管理できます。または、UIを使用せずにコマンドライン引数を使用してすべての操作を実行できます。 すべてのオプションのリストを表示するには、`station_42.py --help` を実行してください。

*   `field_player.py`: メインのテレビインターフェースです。起動時に番組表を読み込み、現在の時間に基づいて正しいビデオファイルを開き、正しい位置にスキップします。 チャンネルが変更されるたびに、この手順が繰り返されます。前のチャンネルに戻ると、現在の時間を取得し、最初から再生されていたかのように再生を開始します。

    プレイヤーは、`runtime/channel.socket`のプレーンテキストファイルを監視し、チャンネルを変更するためのコマンドを受け取ります。 `main_config`で設定された次のステーションに切り替わります。

    `echo {\"command\": \"direct\", \"channel\": 3} > runtime/channel.socket`
    上記のコマンドでチャンネル3に切り替えることができます。
    他のコマンドとして `{"command": "up", "channel": -1}`(チャンネルアップ)と`{"command": "down", "channel": -1}`(チャンネルダウン)があります。
    プレイヤーは、ステータスと現在のチャンネルを`runtime/play_status.socket`に書き込みます。

*   `command_input.py`: 外部デバイスまたはプログラムを接続してチャンネル変更を呼び出し、ステータス情報を渡す方法を示すサンプルコンポーネントとして提供されています。 このスクリプトは、pi の UART 接続で受信するコマンドをリッスンし、`runtime/channel.socket`にチャンネル変更コマンドを書き込みます。

*   `hotstart.sh`: 設定とテストが完了した実行中のシステムで使用するためのファイルです。 起動時にプレイヤーを開始するために使用します。

**テレビへの接続:**

Raspberry Pi は HDMI 出力を持っていますが、古いテレビに接続するには、HDMI をテレビが理解できる入力信号に変換する必要があります。テレビにコンポジットまたは RF がある場合は、HDMI-コンポジットまたは HDMI-RF アダプタを使用できます。

**リモコンやその他のデバイスの接続:**

プレイヤーは外部コマンドを受信し、ステータスを発行できるため、あらゆる種類の外部デバイスを簡単に接続できます。

**Raspberry Pico の設定:**

これは、チャンネル変更検出コンポーネントを構築する場合にのみ必要です。

*   Circuit Pythonをインストールし、Neopixelsの依存関係をインストールします。
*   `aerial_listener.py`の内容をデバイス上の`code.py`に追加し、起動時に開始するようにします。

Fritzing 図は、チャンネル変更を有効にするためにコンポーネントを接続する方法を示しています。


---

# wolfpld/tracy

**stars**: 11528

[View Repository on Github](https://github.com/wolfpld/tracy)

Frame profiler

## README要約
## Tracy Profiler - 要約

このリポジトリは、ゲームやその他のアプリケーション向けのリアルタイムかつナノ秒単位の解像度を持つリモートテレメトリ、ハイブリッドフレームおよびサンプリングプロファイラーである「Tracy Profiler」を提供しています。

**主な特徴:**

*   **高精度:** ナノ秒単位の解像度でのプロファイリング。
*   **リモートテレメトリ:** 遠隔地でのプロファイリングが可能。
*   **ハイブリッドプロファイリング:** フレームベースとサンプリングベースのプロファイリングを組み合わせる。
*   **多言語対応:** C, C++, Lua, Python, Fortranで直接サポートされており、Rust, Zig, C#, OCaml, Odinなど、多くの言語のバインディングが存在。
*   **GPUサポート:** OpenGL, Vulkan, Direct3D 11/12, Metal, OpenCLなどの主要なグラフィックAPIをサポート。
*   **その他:** メモリ割り当て、ロック、コンテキストスイッチのプロファイリング、フレームへのスクリーンショットの自動付与など、多様な機能を提供。

**利用可能な情報:**

*   **ドキュメント:** 使用方法とビルドプロセスに関するドキュメントが提供されています。
*   **リリース:** ドキュメント（tracy.pdf）とコンパイル済みのWindows x64バイナリ（Tracy-<version>.7z）が含まれています。
*   **変更履歴:** 最新の変更履歴が提供されています。
*   **インタラクティブデモ:** 実際に Tracy Profiler を試せるデモが公開されています。
*   **チュートリアル動画:** Tracy Profiler の概要、新機能などを解説する動画が複数公開されています。

**まとめ:**

Tracy Profiler は、CPU、GPU、メモリ、ロックなど、様々な要素を高い精度でプロファイリングできる強力なツールです。幅広い言語とグラフィックAPIをサポートしており、ゲーム開発者やパフォーマンスチューニングを必要とする開発者にとって、貴重なツールとなるでしょう。

