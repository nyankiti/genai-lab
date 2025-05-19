# Spring gRPC 0.8.0を試す - IK.AM

[View on IK.AM](https://ik.am/entries/850)

## Spring gRPC 0.8.0 を試す - 詳細要約

この記事は、SpringアプリケーションでgRPCを利用するためのSpring公式プロジェクトであるSpring gRPCのバージョン0.8.0を試す内容について解説しています。Spring Boot 3.4.5との組み合わせで動作確認を行い、gRPCサービスをSpring Bootアプリケーションに統合する方法を、Hello Worldアプリを通して紹介しています。

**主な内容:**

1.  **gRPC Serverの作成:**
    *   NettyベースとGrpcServletベースのサーバーから、今回はServletベースを選択。
    *   Spring Initializrを使用してプロジェクトを作成（Spring WebとSpring gRPCを同時選択）。
    *   Protocol Buffersのスキーマファイル（hello.proto）を作成し、Javaコードを生成。
    *   `HelloServiceGrpc.HelloServiceImplBase`を継承したgRPCサービスを実装し、`@Service`アノテーションでSpringのDIコンテナに登録。
    *   `grpcurl`コマンドを使用して、gRPCサービスのリスト、Healthチェック、`SayHello`、`LotsOfReplies`メソッドの動作確認。
    *   Spring Bootのテスト機能を利用した、gRPCサービスのIntegration Testの実装。

2.  **gRPC Clientの作成:**
    *   Spring Initializrでクライアントアプリケーションを作成。
    *   サーバー側と同じprotoファイルをコピーし、スタブコードを生成。
    *   Spring MVCコントローラーを実装し、gRPCクライアントスタブをインジェクション。
    *   クライアントアプリケーションを起動し、`curl`でgRPCサービスのレスポンスを確認。

3.  **MicrometerによるObservability連携:**
    *   Spring gRPCは、MicrometerによるObservabilityをOut of the Boxでサポート。
    *   OpenTelemetryとZipkinを使用してTracingを設定。
    *   Prometheusを使用してMetricsをエクスポート。
    *   Zipkin UIでトレースを確認し、PrometheusのMetricsエンドポイントからgRPC関連のメトリクスを取得。

4.  **ReactorによるReactiveプログラミングの導入:**
    *   Reactor（Reactiveプログラミング）を利用することで、より宣言的で簡潔なgRPCサービスの実装が可能。
    *   `reactive-grpc`ライブラリを使用して、ReactorベースのgRPCスタブを生成。
    *   クライアント側とサーバー側のコントローラーとサービスをReactorベースのAPIを使用するように変更。
    *   クライアント側では、`@ImportGrpcClients`を使用してReactorベースのクライアントスタブをDIコンテナに登録。
    *   Flux型のレスポンスを返すことで、改行区切りJSON形式やServer-Sent Events形式など、Streamingに適した形式でのレスポンスを実装。

5.  **Native Imageビルド:**
    *   GraalVMを使用して、serverとclientのネイティブイメージをビルド。
    *   ネイティブイメージビルドにより、起動時間の短縮とメモリ使用量の削減。

**まとめ:**

記事では、Spring gRPCの基本的な使い方、Observability連携、Reactorとの統合、Native Imageビルドについて解説し、Spring BootアプリケーションでのgRPCサービスの実装を容易にする方法を示しています。今後はSpring Securityを使った認証の実装についても検討するとしています。
