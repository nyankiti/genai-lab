# What's New in WebGPU (Chrome 137)  |  Blog  |  Chrome for DevelopersGitHub

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/new-in-webgpu-137?hl=en)

## WebGPUの最新情報 (Chrome 137) の要約

この記事は、Chrome for Developersブログで公開された、WebGPUの最新情報（Chrome 137）についてまとめたものです。

**主な変更点:**

*   **externalTextureバインディングにテクスチャビューを使用可能に:** GPUExternalTexture (動画ソース用) とGPUTextureView (中間処理用) を両方扱うビデオエフェクトパイプラインのシェーダーロジックを簡素化。シェーダーの動的コンパイルの必要性を軽減。
*   **オフセットとサイズの指定なしでのバッファコピー:** copyBufferToBuffer() メソッドに、バッファ全体のコピーを簡素化するためのオーバーロードを追加。
*   **WGSLのworkgroupUniformLoad関数の拡張:** atomicへのポインタを使用可能にし、ワークグループ内の全インボケーションに値をアトミックにロードして返す機能を追加。
*   **GPUAdapterInfoのpowerPreference属性:** "WebGPU Developer Features" フラグが有効になっている場合に、GPUAdapterInfoにpowerPreference属性が追加され、GPUの電力設定 ("low-power" または "high-performance") を取得可能に。
*   **GPURequestAdapterOptionsのcompatibilityMode属性の削除:** 標準化された featureLevel 属性 (Chrome 133で追加) に置き換えられました。
*   **Dawnのアップデート:** WebAssemblyと特定のプラットフォームの両方をターゲットとするwebgpu.hの実装を更新。最新のwebgpu.hが実装されたemdawnwebgpuを使用するように推奨。

**その他の情報:**

*   過去のWebGPUに関する情報がChrome 113からChrome 136までの変更点と共にまとめられています。
*   記事のコンテンツは Creative Commons Attribution 4.0 License、コードサンプルは Apache 2.0 License でライセンスされています。
*   最終更新日は2025年5月26日です。
