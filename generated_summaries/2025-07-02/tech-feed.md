# Genspark ships no-code personal agents with GPT-4.1 and OpenAI Realtime API | OpenAI

[View on OpenAI News](https://openai.com/index/genspark)

## Genspark、GPT-4.1とOpenAI Realtime APIを活用したノーコードのパーソナルエージェントをリリース

Gensparkは、GPT-4.1とOpenAI Realtime APIを利用した、ノーコードで利用可能なパーソナルAIエージェント「Super Agent」をリリースし、わずか45日で3600万ドルの年間経常収益（ARR）を達成しました。

**Super Agentの概要:**

*   **ノーコード:** ユーザーは、電話をかけたり、プレゼンテーションを作成したり、レシピを短いビデオに変換したりといった、様々なタスクをシンプルなプロンプトで自動化できます。
*   **マルチモーダル:** OpenAIのマルチモーダルモデルとRealtime APIを活用し、テキスト、画像、音声に対応。
*   **多様な機能:** 電話予約、退職の電話、プレゼンテーション作成、ビデオ生成など、幅広いタスクに対応。
*   **OpenAIモデルの活用:** GPT-4.1（100万トークンのコンテキストウィンドウ）による情報処理、GPT-image-1による画像生成など。
*   **Realtime API:** 音声対話におけるリアルタイムなやり取りを実現。

**背景:**

元々AI検索エンジンとしてスタートしたGensparkは、ユーザーニーズの変化に対応し、2025年4月にエージェント型AIに完全移行しました。ユーザーは単なる情報だけでなく、アウトカムを求めており、モデルの性能向上も後押しとなりました。

**成功の要因:**

*   **OpenAIとの連携:** OpenAIのAPI設計とサポートにより、開発スピードを向上。
*   **使いやすさ:** ユーザーは複雑な設定をすることなく、必要なものを記述するだけでエージェントを利用可能。
*   **革新的な機能:** 退職の電話代行など、従来のAIでは実現困難な機能を提供。
*   **成長の加速:** 製品のバイラル性と口コミにより、ゼロ広告で驚異的な成長を達成。

**今後の展望:**

Gensparkは、AIブラウザやAIドキュメントなど、自律型エージェントがさらなる価値を生み出す分野への展開を目指しています。

---
# CSS conditionals with the new if() function  |  Blog  |  Chrome for DevelopersXMastodonHomepage

[View on Google Chrome Developers Blog](https://developer.chrome.com/blog/if-article?hl=en)

## CSSのif()関数による条件付きスタイルの利用

この記事は、Chrome 137から利用可能になったCSSの新しい `if()`関数について解説しています。 `if()`関数は、スタイルクエリやメディアクエリなど、動的なスタイルをよりクリーンに記述するための機能です。

**`if()`関数の基本構造:**

`if()`関数は、条件-値のペアを組み合わせて使用します。

```css
property: if(condition-1: value-1; condition-2: value-2; condition-3: value-3);
```

`else`ステートメントを使用して、どの条件にも一致しない場合のデフォルト値を指定することも可能です。

```css
property: if(condition-1: value-1; condition-2: value-2; condition-3: value-3; else: value-4);
```

**`if()`関数で利用できるクエリ:**

現時点では、`if()`関数は以下の3種類のクエリに対応しています。

*   `style()`: スタイルクエリ
*   `media()`: メディアクエリ
*   `supports()`: サポートクエリ

**具体的な利用例:**

1.  **インラインメディアクエリ:**
    ユーザーのテーマ設定（ライト/ダーク）や、ビューポート幅に応じてスタイルを適用できます。例えば、ポインターデバイスの種類に応じてボタンのサイズを変更する例が挙げられています。

    ```css
    button {
      aspect-ratio: 1;
      width: if(media(any-pointer: fine): 30px; else: 44px);
    }
    ```

2.  **インラインサポートクエリ:**
    `supports()`を使用して、OKLCHのような広色域カラーのサポートをチェックし、対応している場合にのみそのカラーを使用する例が紹介されています。

    ```css
    body {
      background-color: if(
        supports(color: oklch(0.7 0.185 232)): oklch(0.7 0.185 232);
        else: #00adf3;
      );
    }
    ```

3.  **UI状態の可視化:**
    `style()`クエリとカスタムプロパティを組み合わせて、UIの状態（保留中/完了）に応じてカードのスタイルを変更する例が示されています。

    ```css
    .card {
      --status: attr(data-status type(<custom-ident>));
      border-color: if(
                    style(--status: pending): royalblue;
                    style(--status: complete): seagreen;
                    else: gray);
    }
    ```

**`if()`関数のメリット:**

*   スタイルのロジックをインラインで記述できるため、コードがより整理され、可読性が向上します。
*   CSSカスタムプロパティと組み合わせることで、メディアクエリや疑似状態（`:hover`など）を使用して簡単にスタイルを更新できます。

**今後の展望:**

`if()`関数は、CSS開発者にとって新たな可能性を開くものであり、スタイルクエリの進化に伴い、範囲クエリなども利用できるようになる可能性があります。また、将来的に導入が予定されているカスタム関数（CSS `@function`）との組み合わせも期待されています。

**参考情報:**

*   3分間のデモ動画
*   Lea Verou氏の記事
