# The Post-Developer Era • Josh W. Comeau

[View on Josh W Comeau's Blog](https://www.joshwcomeau.com/blog/the-post-developer-era/)

## 「ポスト・デベロッパー時代」：AIによる開発者への影響とキャリア展望

本記事は、AI技術の進化がソフトウェア開発者の職に与える影響について、2023年に書かれた「フロントエンド開発の終焉」というブログ記事へのアンサーとして書かれています。著者は、AIが人間の開発者を完全に置き換えるという予測に懐疑的であり、LLM（大規模言語モデル）は開発者を補完するツールとして機能すると考えています。

**AIの活用状況と現状**

*   **企業でのAI導入:** Googleでは、AIがコードの25%を生成していますが、これは人間の開発者がAIをガイドし、出力を編集・整形して既存のコードと統合しているためです。AIはあくまでツールの一つであり、人間の開発者がいない状況は起きていません。
*   **AIによる開発自動化の限界:** 開発を完全に自動化するAIツール（Cognition社のDevinなど）も存在しますが、実際の使用では問題が発生しています。タスクの完了率が低く、人間による介入が必要となるため、実用性に課題があります。
*   **AIツールの活用と課題:** 著者はAI搭載のIDEを試した経験から、AIは特定のタスクで効率的であり、TypeScriptのエラー修正などにも役立つと評価しています。しかし、AIは完璧ではなく、人間の監督と修正が必要であり、開発者のスキルが不可欠であることを強調しています。

**現在の開発者を取り巻く状況**

*   **厳しい就職状況:** 開発者の求人数は減少し、競争が激化しています。
*   **AIに対する誤解と企業の姿勢:** 一部の企業は、AGI（汎用人工知能）の出現を過度に期待し、開発者の採用を控える傾向があります。

**将来の展望とアドバイス**

*   **開発者の役割の重要性:** AI技術の進化にも関わらず、開発者のスキルは引き続き重要であり、AIを最大限に活用するための知識が求められます。
*   **キャリア形成へのアドバイス:** 就職活動においては、早期の応募やネットワークの活用が重要です。地域のミートアップやオンラインコミュニティへの参加を通じて、人間関係を築くことが有効です。
*   **AIに対する心構え:** AIの過度な期待に惑わされず、自身のスキルを磨き、AIを効果的に活用する能力を身につけることが、今後のキャリア成功の鍵となります。

**最終的に、著者は、AIが開発者を完全に置き換えるという考えに反対し、開発者のスキルは依然として重要であると強調しています。AIは開発者を支援するツールであり、人間の開発者がAIを活用することで、より高い成果を上げることができると結論づけています。**

---
# Migrating Grep from Create React App to Next.js - Vercel

[View on Vercel Blog](https://vercel.com/blog/migrating-grep-from-create-react-app-to-next-js)

この記事は、高速コード検索ツール「Grep」を、元々Create React App (CRA) で構築されていたものを、Next.js に移行した経緯とその結果を詳細に解説しています。CRAの非推奨化に伴い、パフォーマンス向上とメンテナンス性の向上を目指してNext.jsへの移行を決断しました。

**Next.js への移行の主な理由と利点:**

*   **高速な初期ページロード:** Next.js のプリレンダリング機能により、初期ロード時間を短縮。
*   **SPAライクなナビゲーション:** SPAのようにページ間の高速なナビゲーションを実現。
*   **React Server Components の活用:** パフォーマンス向上とメンテナンス性の向上。

**移行プロセスにおける主な課題と解決策:**

*   **検索バーの表示と状態管理:**
    *   検索バーをルートレイアウトに配置すると、レイアウトシフトやハイドレーションの不整合が発生。
    *   解決策として、ホームページとヘッダーで検索バーを条件付きでレンダリングし、URLベースの状態管理と軽量な状態管理を組み合わせることで、状態の一貫性を維持。
*   **データフェッチと検索結果の表示:**
    *   初期表示の高速化とクライアントサイドでのインタラクティブな更新を両立するために、TanStack Query を使用。
    *   サーバーサイドでのデータプリフェッチとクライアントサイドでのインクリメンタルな更新を組み合わせる。
*   **入力中のパフォーマンス最適化:**
    *   `useDeferredValue` を使用して入力変更のデバウンスを行い、ネットワークリクエストの過剰な発生を防ぐ。
    *   `useOptimistic` と TanStack Query のキャッシュキーを用いて、最新のリクエストの結果をUIに表示し、古い結果の表示を防ぐ。
*   **動的ルートのプリフェッチ:**
    *   `PrefetchSearchLayout` コンポーネントを使用して、`/search?q=react`のような動的ルートを明示的にプリフェッチし、ページ遷移を高速化。
*   **モバイル環境での課題と解決策:**
    *   モバイル Safari での検索入力へのフォーカスによるレイアウト崩れを、`usePreventScroll` フックを使用して防止。

**パフォーマンスの改善:**

*   移行により、モバイル環境における First Contentful Paint (FCP) が70%高速化、Speed Index が38.3%高速化など、大幅な改善を達成。
*   Next.js の実験的機能である Partial Prerendering (PPR) を有効にすることで、さらなる高速化を実現。

**今後の展望:**

*   プライベートリポジトリのインデックス化
*   高度なクエリ構文のサポート

Next.jsへの移行は、Grep のパフォーマンス向上だけでなく、今後の機能拡張とメンテナンス性向上にも繋がりました。
---
# Vercel Observability is now route-aware for SvelteKit apps - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-observability-is-now-route-aware-for-sveltekit-apps)

## Vercel ObservabilityがSvelteKitアプリのルートを認識するように

Vercel Observabilityが、SvelteKitアプリの動的セグメントを含むルート（例：`/blog/[slug]`）を個別に認識し、表示するようになりました。以前は、すべての動的ルートが単一の`/fn`エントリとして表示されていましたが、このアップデートにより改善されました。

この機能は、`@sveltejs/adapter-vercel`のバージョン5.7.0以降で利用可能です。SvelteKitプロジェクトの可観測性を向上させるために、アップグレードを推奨します。

また、`@sveltejs/adapter-auto`経由でVercelアダプターを使用している場合は、`@sveltejs/adapter-vercel`を直接使用することをお勧めします。

Vercel Observabilityの詳細については、関連ドキュメントを参照してください。

---
# Introducing GPT-4.1 in the API | OpenAI

[View on OpenAI News](https://openai.com/index/gpt-4-1)

## OpenAI、GPT-4.1をAPIで提供開始：コーディング、指示追従、長文コンテキスト理解が大幅向上

OpenAIは、コーディング、指示追従、長文コンテキスト理解を大幅に改善した新しいGPTモデルシリーズ「GPT-4.1」をAPIで提供開始します。今回の発表では、GPT-4.1、GPT-4.1 mini、GPT-4.1 nanoの3つのモデルがリリースされました。

**主な特徴と改善点:**

*   **コーディング能力の向上:** SWE-bench Verifiedベンチマークにおいて、GPT-4oとGPT-4.5を大幅に上回るスコアを達成。実世界のソフトウェアエンジニアリングタスクで優れたパフォーマンスを発揮します。
*   **指示追従能力の向上:** ScaleのMultiChallengeベンチマークでGPT-4oを上回り、指示に忠実に従う能力が向上しました。
*   **長文コンテキスト理解の向上:** 最大100万トークン（以前のGPT-4oは128,000トークン）の長文コンテキストに対応し、長文理解能力が向上。複雑な文書や大規模なコードベースの処理に最適です。
*   **新しい知識カットオフ:** 2024年6月までの知識を反映。
*   **GPT-4.1 mini:** 小規模モデルでありながら、多くのベンチマークでGPT-4oを上回る性能を発揮。レイテンシを約半分に、コストを83%削減。
*   **GPT-4.1 nano:** 低レイテンシを重視した最速・最安のモデル。分類や自動補完などのタスクに最適。

**性能詳細:**

*   **コーディング:** SWE-bench Verifiedで54.6%を達成。実世界のソフトウェアエンジニアリングスキルが向上し、コードリポジトリの探索、タスクの完了、実行可能なコード生成能力が向上しました。
*   **指示追従:** ScaleのMultiChallengeベンチマークでGPT-4oより10.5%向上。複雑な指示への対応能力が向上しました。
*   **長文コンテキスト:** Video-MME（字幕なしの長尺動画理解）において、GPT-4oより6.7%向上。

**実世界での活用事例:**

*   **Windsurf:** コーディングベンチマークでGPT-4oより60%高いスコアを獲得。ツール呼び出しの効率が30%向上、不要な編集の繰り返しが約50%減少。
*   **Qodo:** GitHubのプルリクエストからの高品質なコードレビュー生成において、GPT-4.1が55%のケースでより良い提案を提示。
*   **Blue J:** 税務シナリオでの精度が53%向上。長文コンテキストでの複雑な規制理解が向上しました。
*   **Hex:** SQL評価セットでほぼ2倍の改善。スキーマからの適切なテーブル選択能力が向上しました。
*   **Thomson Reuters:** CoCounselの複数文書レビュー精度が17%向上。長文コンテキストでの正確な情報抽出能力が向上しました。
*   **Carlyle:** 50%以上の性能向上。PDFやExcelファイルなどの複雑な形式からのデータ抽出が大幅に改善。

**価格と提供開始:**

GPT-4.1、GPT-4.1 mini、GPT-4.1 nanoは、APIを通じて全ての開発者が利用可能になりました。推論システムの効率化により、価格が引き下げられています。

*   GPT-4.1: GPT-4oよりも26%安価
*   GPT-4.1 nano: 最も安価で高速なモデル

**今後の展開:**

GPT-4.1の登場に伴い、APIではGPT-4.5 Previewが3ヶ月後の2025年7月14日に廃止される予定です。GPT-4.5で得られた知見は、今後のAPIモデルに活かされます。

**その他:**

*   指示追従、コーディング、インテリジェンスの改善は、ChatGPTの最新バージョンにも段階的に組み込まれています。
*   長文コンテキスト理解能力を評価するための新しい評価セット「OpenAI-MRCR」や「Graphwalks」を公開。
*   プロンプトキャッシュ割引が最大75%に向上。
*   バッチAPIで50%の追加割引が適用されます。

このGPT-4.1は、開発者のニーズに合わせた改善を施し、インテリジェントシステムやエージェントアプリケーションの構築に新たな可能性を切り開きます。
