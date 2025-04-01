# Flags SDK 3.2 - Vercel

[View on Vercel Blog](https://vercel.com/changelog/flags-sdk-3-2)

## Flags SDK 3.2 リリース：SvelteKit での事前計算されたフィーチャーフラグのサポート

Vercel の Flags SDK 3.2 がリリースされ、SvelteKit 環境において**事前計算されたフィーチャーフラグ**のサポートが追加されました。

**主なメリット：**

*   **マーケティングページでの実験が容易に:** レイアウトシフトを回避しつつ、高速な表示を維持しながら、マーケティングページでの実験がより簡単になります。
*   **パフォーマンス向上:** 事前計算されたフラグは、Edge Middleware で評価され、表示するページの種類を決定します。これにより、ページは静的になり、Edge Network を通じて静的バリアントを提供できるため、グローバルレイテンシーが低減されます。
*   **組み合わせの爆発への対処:** 複数のフィーチャーフラグを静的に使用する場合に生じる組み合わせの爆発を `Precompute` が処理します。
*   **柔軟な生成方法:** ビルド時に異なるバリアントのページを生成したり、オンデマンドで特定の組み合わせのみを構築するために Incremental Static Regeneration を利用したりできます。

**その他：**

*   Flags SDK のドキュメントが改善され、フレームワークごとに分割され、Flags SDK のアダプターを持つすべてのプロバイダーが明示的にリストアップされました。

**詳細:**

SvelteKit での Flags SDK の使用方法と事前計算パターンについて、詳しくは公式ドキュメントを参照してください。

**要するに、Flags SDK 3.2 は、SvelteKit を使用するマーケティング担当者や開発者が、より高速かつ効率的にフィーチャーフラグを活用し、A/B テストなどの実験を行うことを可能にするアップデートです。**

---
# Yarn 2+ dependency caching now supported - Vercel

[View on Vercel Blog](https://vercel.com/changelog/yarn-2-dependency-caching-now-supported)

## Vercel、Yarn 2+ の依存関係キャッシュをサポート開始：ビルド時間短縮とパフォーマンス向上

Vercelは、Yarn 2以降を使用するプロジェクトにおいて、依存関係のキャッシュをサポートを開始しました。これにより、インストール時間が短縮され、ビルドパフォーマンスが向上します。

これまで、Vercelではnpm、pnpm、Yarn 1のみがキャッシュをサポートしていました。

**キャッシュを無効にする場合：**

プロジェクト設定で環境変数 `VERCEL_FORCE_NO_BUILD_CACHE` に `1` を設定することで、キャッシュを無効にできます。

**Yarn 4 を使用する場合：**

Yarn 4を使用している場合は、Yarnが推奨するようにCorepackを有効にしてください。

詳細は、[Build Cacheドキュメント](リンク先未記載) を参照してください。

---
# 

[View on OpenAI News](https://openai.com/index/march-funding-updates)

記事本文が提供されていません。記事のタイトルと本文を入力してください。それに基づいて、詳細な要約を日本語で作成します。
