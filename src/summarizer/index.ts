import { TechFeed } from './tech-feed';

(async () => {
  const techFeed = new TechFeed();
  await techFeed.run();

  // TODO: その他のsummarizerの実行
})();
