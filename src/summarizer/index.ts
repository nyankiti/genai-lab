import { getPastDate } from 'libs/date';
import { TechFeed } from './tech-feed';

(async () => {
  // 遡って実行する場合は、getPastDateの引数を変更する
  // const techFeed = new TechFeed(getPastDate(2));
  const techFeed = new TechFeed(new Date());
  await techFeed.run();
})();
