# Improved team overview page - Vercel

[View on Vercel Blog](https://vercel.com/changelog/improved-team-overview-page)

## Vercelのチーム概要ページが改善

Vercelは、チーム概要ページを改善しました。主な変更点は以下の通りです。

*   **アクティビティの表示:** ユーザー自身の活動に絞ってソートされるようになりました。
*   **プロジェクトのフィルタリング:** Gitリポジトリでプロジェクトをフィルタリングできるようになりました。
*   **チームの使用状況の表示:** チームの使用状況が概要ページにカードとして直接表示されるようになりました。

Vercelダッシュボードの詳細については、ドキュメントを参照してください。

---
# Improved unhandled Node.js errors in Fluid compute - Vercel

[View on Vercel Blog](https://vercel.com/changelog/improved-unhandled-node-js-errors-in-fluid-compute)

## VercelによるFluid ComputeのNode.jsエラー処理改善に関する要約

Vercelは、Fluid ComputeにおけるNode.jsのエラー処理を改善しました。具体的には、未処理の例外（uncaught exceptions）と未処理のリジェクション（unhandled rejections）が発生した場合に、以下の処理を行います。

1.  **エラーをログに記録:** 問題の詳細を把握できるようにします。
2.  **インフライトリクエストの完了を許可:** 現在処理中のリクエストが中断されるのを防ぎます。
3.  **プロセスを終了:** エラー発生後、安全にプロセスを終了させます。

この改善により、未処理のエラーが発生した場合でも、同じFluidインスタンスで実行されている他のリクエストが意図的に終了してしまうことを防ぎます。これにより、従来のサーバーレス起動における分離が実現されます。

既存のプロジェクトでFluidを有効にし、詳細はブログとドキュメントを参照できます。

---
# Java Weekly, Issue 598 | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/920129993/0/baeldung~Java-Weekly-Issue)

## Java Weekly, Issue 598 の要約

Java Weekly の Issue 598 は、2025年6月4日に更新され、Java開発に関する様々なトピックを網羅しています。

**1. Spring と Java**

*   **Java の構造化同時実行:** JDK 25 でプレビュー機能として継続され、最終リリース版に近づくための改良が加えられます。
*   **記事: GPU レベルのパフォーマンスをエンタープライズ Java に: CUDA 統合の実用的なガイド:** Java と NVIDIA の CUDA プラットフォームを統合し、パフォーマンスを向上させる方法について解説。Java Native Interface (JNI) がエンタープライズグレードの統合に最適な選択肢として紹介されています。
*   **その他:**
    *   Java でのテキストブロック: マルチライン文字列に最適
    *   Java ウォームアップの高速化: CRaC vs ReadyNow
    *   Ubuntu による Java、Spring、AOT の提供
    *   品質向上への取り組み – 別個の Metaspace と GC の出力
    *   Jakarta EE を使用した AI エージェントの構築
    *   Embabel の紹介: Java アプリケーション向けの高度な AI エージェント開発
*   **ウェビナーとプレゼンテーション:**
    *   Episode 37 “Efficient Initialization Using Stable Values” with Per Minborg
    *   Java 25 Brings 18 JEPs 😱 Inside Java Newscast #92
    *   Key Java Language Updates From 2020 to 2025
    *   A Bootiful Podcast: IntelliJ IDEA lead Aleksey Stukalov
    *   STF Milestone 4: Parameterized test classes
*   **アップグレード推奨:**
    *   Hibernate Search 8.0.0.Final
    *   Upcoming Jakarta Validation 4.0
    *   Quarkus 3.23.2
    *   Maven 3.9.10
    *   Grails-core 7.0.0-M4
    *   Micronaut Core 4.8.16
    *   Helidon 4.2.3

**2. テクニカル & 思索**

*   **RAG入門: Retrieval Augmented Generation の基礎、パート2:** GenAI の基本概念に関するシリーズの続き。MCP プロトコル、AI エージェントの定義、RAG の種類について詳しく解説。
*   **その他:**
    *   AI がすべてを変える
    *   自律型コーディングエージェント: Codex の例
    *   AI を使用したインターネット標準の評価
    *   API と AI エージェントは同じレイヤー化されたパターンに従う

**3. 今週のおすすめ**

*   **人生におけるたった一つのルール** [markmanson.net]
