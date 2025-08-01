# AI SDK 5 - Vercel

[View on Vercel Blog](https://vercel.com/blog/ai-sdk-5)

## AI SDK 5 - Vercel 要約

Vercelは、TypeScriptとJavaScript向けのオープンソースAIアプリケーションツールキットであるAI SDKのバージョン5をリリースしました。このバージョンは、完全型安全性、カスタマイズ可能なチャット統合、エージェント制御、音声生成と文字起こし、ツール改善、V2仕様、グローバルプロバイダー、生のレスポンスへのアクセス、Zod 4サポートなど、様々な新機能を提供しています。

**主な新機能と改善点:**

*   **再設計されたチャット:**
    *   UIとモデルメッセージの分離による永続化の簡素化。
    *   UIメッセージのカスタマイズによる型安全なデータ構造の実現。
    *   データパーツによる、型安全なカスタムデータのストリーミング。
    *   トランジェントデータパーツと`onData`フックによるUIの動的更新。
    *   型安全なツール呼び出し。
*   **エージェント制御:**
    *   `stopWhen`によるツール呼び出しループの制御。
    *   `prepareStep`によるステップごとの設定調整。
    *   `Agent`クラスによるエージェント構成と実行のカプセル化。
*   **音声生成と文字起こし:**
    *   統一されたプロバイダーインターフェースによる音声生成と文字起こしのサポート。
*   **ツール改善:**
    *   パラメータと結果の命名規則の変更。
    *   動的ツールのサポート。
    *   プロバイダー実行ツール。
    *   ツールライフサイクルフック。
    *   ツールレベルのプロバイダーオプション。
*   **V2仕様:**
    *   仕様のV2への更新による機能拡張と柔軟性の向上。
*   **グローバルプロバイダー:**
    *   `model`引数にモデルID文字列を指定するだけで利用できるグローバルプロバイダー。
    *   デフォルトではVercel AI Gatewayを使用。
*   **生のレスポンスへのアクセス:**
    *   `includeRawChunks`オプションと`fullStream`による生のストリーミングチャンクへのアクセス。
    *   `request`と`response`プロパティによるリクエストとレスポンスボディへのアクセス。
*   **Zod 4サポート:**
    *   Zod 4に対応。
*   **Vue、Svelte、Angularのサポート:**
    *   Reactと同様の機能が利用可能。

**その他:**

*   SSEストリーミングを標準化。
*   自動化された移行ツールによるAI SDK 5への移行支援。
*   詳細なドキュメントとテンプレートを提供。
*   GitHub Discussionsでのコミュニティサポート。
*   Vercelのコアチームとコミュニティコントリビューターによる開発。
---
# Java Weekly, Issue 605 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/922497656/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 605 の要約

この Java Weekly の第 605 号は、2025 年 7 月 24 日に更新されました。主な内容は以下の通りです。

**1. Spring と Java:**

*   **Jakarta EE 11:** Jakarta Data サポートや JDK 21 との完全な互換性など、最新の機能が導入され、注目されています。
*   **CodeRabbit:** Java 開発者向けの新しいコードレビューツールで、構文、コーディングのベストプラクティス、一般的なパターンを分析します。
*   その他、Java 22 から 24 への新機能の活用、LangChain4j Guardrails と Spring Boot を使用した堅牢な AI アプリケーション、仮想スレッドに関する記事などが紹介されています。
*   **ウェビナーとプレゼンテーション:** Deprecations & Removals に関するエピソード、Java オブジェクト初期化の新しいモデル、Java 開発者 advocate である José Paumard に関するポッドキャストなど。
*   **アップデート情報:** Hibernate Search 8.1.0.Alpha1、Spring Boot 4.0.0-M1、Spring Integration 7.0 Milestone 1、Quarkus、Eclipse-collections、Elasticsearch、Spring Boot、IntelliJ IDEA の最新バージョンがリリースされました。

**2. 技術と考察:**

*   **Git のデフォルトオプション:** 開発者の日常的なワークフローに不可欠な Git の `git push` と `git rebase` コマンドについて考察しています。
*   その他、Enterprise Java と Quarkus の半年間の経験、A2A OAuth ユーザー委任に関する記事が紹介されています。

**3. 今週のおすすめ (Pick of the Week):**

*   Not sure? (よくわからない場合について)
