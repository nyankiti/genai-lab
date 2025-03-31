# genai-lab

## setup
```
pnpm install
```

### redditのaccess token生成
[こちらの記事](https://www.geeksnipe.com/article/546)を参考に https://not-an-aardvark.github.io/reddit-oauth-helper/ を用いて生成

## Tech情報要約機能
海外Techブログやraddit, hacker newsなどを日次で日本語要約を実施し、以下のパスに保存する
- generated_summaries
保存した情報は以下のgithub pagesで公開
- https://nyankiti.github.io/genai-lab/summary/{dateString}.json

#### TODO
- [X] 個人の技術ブログ(https://sokes-nook.net/)にて技術ブログの要約を公開
- [ ] ブラウザ通知で要約が作成されたことを通知する機能を実装する