import { getPastDate } from 'libs/date';
import { GithubTrending } from './github-trending';
import { RedditExplorer } from './reddit-explorer';
import { TechFeed } from './tech-feed';

(async () => {
  // 遡って実行する場合は、getPastDateの引数を変更する
  // const techFeed = new TechFeed(getPastDate(2));
  const techFeed = new TechFeed(new Date());
  const redditExplorer = new RedditExplorer(new Date());
  const githubTrending = new GithubTrending(new Date());

  await Promise.all([techFeed.run(), redditExplorer.run(), githubTrending.run()]);
})();
