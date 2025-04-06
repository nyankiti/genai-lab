# genai-lab

## setup
```
pnpm install
```

### redditのaccess token生成
[こちらの記事](https://www.geeksnipe.com/article/546)を参考に https://not-an-aardvark.github.io/reddit-oauth-helper/ を用いて生成

## Tech情報要約機能
海外Techブログやraddit, トレンドのrepositoryなどを日次で日本語要約を実施し、以下のパスに保存する
- generated_summaries
保存した情報は以下のgithub pagesで公開
- https://nyankiti.github.io/genai-lab/summary/{dateString}.json

#### TODO
- [ ] ブラウザ通知で要約が作成されたことを通知する機能を実装する
- [ ] 1ヶ月以上経った要約を自動で削除する
  - ファイル削除だけでは.gitの肥大化は止められないので、git hisotryまで削除する必要がありそう