# Claude Opus 4.1 is now supported in Vercel AI Gateway - Vercel

[View on Vercel Blog](https://vercel.com/changelog/claude-4-1-opus-is-now-supported-in-vercel-ai-gateway)

## Vercel AI Gateway で Claude Opus 4.1 が利用可能に

本日リリースされた Anthropic の新モデル、Claude Opus 4.1 が、Vercel の AI Gateway を通じて利用できるようになりました。これにより、他のプロバイダのアカウントを別途取得することなく、Claude Opus 4.1 にアクセスできます。Claude Opus 4.1 は、前モデルである Opus 4 から、エージェントタスク実行、実世界のコーディング、推論能力が向上しています。

**AI Gateway の特徴:**

*   **統一された API:** 一貫した API を使用してモデルを呼び出すことができます。
*   **利用状況とコストの追跡:** モデルの使用状況とコストを簡単に追跡できます。
*   **パフォーマンス最適化:** パフォーマンス最適化、リトライ、フェイルオーバー設定により、プロバイダ平均以上の稼働時間を実現します。

**AI SDK v5 での利用方法:**

1.  `pnpm i ai` を使用してパッケージをインストールします。
2.  モデルを `anthropic/claude-4.1-opus` に設定します。

    ```javascript
    import { streamText } from 'ai'
    const result = streamText({  model: "anthropic/claude-4.1-opus",  prompt: "what's the history of Taqueria La Cumbre in San Francisco?" })
    ```

**AI Gateway のその他の機能:**

*   組み込みの可観測性
*   BYOK (Bring Your Own Key) サポート
*   インテリジェントなプロバイダルーティングと自動リトライ

**AI Gateway の裏側:**

Claude Opus 4.1 の高いパフォーマンスと信頼性を実現するため、AI Gateway は Anthropic および Bedrock を含む複数のモデルプロバイダを活用しています。

**AI Gateway モデルリーダーボード:**

AI Gateway は、ゲートウェイ経由の全トラフィックにおけるトークン量に基づいて、最も利用されている AI モデルをランキングするモデルリーダーボードを提供しています。リーダーボードは定期的に更新されます。

---
# gpt-oss-20b and gpt-oss-120b are now supported in Vercel AI Gateway - Vercel

[View on Vercel Blog](https://vercel.com/changelog/gpt-oss-20b-and-gpt-oss-120b-are-now-supported-in-vercel-ai-gateway)

## Vercel AI Gatewayでgpt-oss-20bとgpt-oss-120bが利用可能に

VercelのAI Gatewayを通じて、OpenAIのオープンウェイト推論モデルであるgpt-oss-20bとgpt-oss-120bにアクセスできるようになりました。これにより、他のプロバイダーアカウントを別途用意する必要なく、これらのモデルを利用できます。

**主な特徴:**

*   **統一API:** 一貫したAPIを通じてモデルを呼び出し可能。
*   **簡単な設定:** 1つの文字列の更新だけで利用開始できます。
*   **利用状況とコストの追跡:** 使用量とコストを簡単に把握できます。
*   **パフォーマンス最適化:** パフォーマンス最適化、リトライ、フェイルオーバーの設定が可能です。
*   **AI SDK v5との連携:**  `pnpm i ai`でパッケージをインストールし、`openai/gpt-oss-20b` または `openai/gpt-oss-120b`をモデルとして指定して利用できます。
*   **組み込みの可観測性:** 監視機能が組み込まれています。
*   **BYOK (Bring Your Own Key)サポート:** 独自のキーを使用できます。
*   **インテリジェントなプロバイダールーティング:** 自動リトライ機能を備えたインテリジェントなプロバイダールーティングを提供します。
*   **高パフォーマンスと信頼性:** Groq、Baseten、Cerebras、Huggingfaceなどの複数のモデルプロバイダーを活用して、gpt-ossの高いパフォーマンスと信頼性を実現しています。
*   **AI Gateway Model Leaderboard:** AI Gatewayを通じて利用されている主要なAIモデルを、総トークン量に基づいてランキング形式で表示しています。

Vercelはgpt-ossのリリースパートナーであり、AI GatewayのDay 1の準備を確実にするためにOpenAIと協力しています。
