type FeedType = 'rss' | 'atom' | 'browserFriendlyFeed';

type SiteMetadata = {
  siteName: string;
  feedUrl: string;
  feedType: FeedType;
  siteDescription: string;
};

export const WATCHING_TECH_SITES_FRONTEND: SiteMetadata[] = [
  {
    siteName: "Josh W Comeau's Blog",
    feedType: 'rss',
    feedUrl: 'https://www.joshwcomeau.com/rss.xml',
    siteDescription:
      'ReactやTypeScriptを扱うフロントエンド開発者向けの記事が多い。インタラクティブな解説が特徴的。',
  },
  {
    siteName: "Kent C. Dodds' Blog",
    feedType: 'rss',
    feedUrl: 'https://kentcdodds.com/blog/rss.xml',
    siteDescription: 'TypeScriptやReactに関するモダンな開発手法についての深い考察がある。',
  },
  {
    siteName: 'Vercel Blog',
    feedType: 'atom',
    feedUrl: 'https://vercel.com/atom',
    siteDescription:
      'tRPCの開発者であるTheo氏のブログ。TypeScript、Next.js、バックエンド開発に関する記事が多い。',
  },
  {
    siteName: 'Baeldung',
    feedType: 'browserFriendlyFeed',
    feedUrl: 'https://feeds.feedblitz.com/baeldung',
    siteDescription:
      'Java、Springに関する技術記事が豊富。チュートリアル形式の解説が多く、実践的な知識を得られる。',
  },
  {
    siteName: 'Spring Blog',
    feedType: 'atom',
    feedUrl: 'https://spring.io/blog.atom',
    siteDescription: 'Spring公式のブログ。Spring BootやSpring Cloudなどの最新情報が得られる。',
  },
  {
    siteName: 'JetBrains Blog (Kotlin)',
    feedType: 'rss',
    siteDescription:
      'Kotlinの開発元であるJetBrainsの公式ブログ。Kotlinの最新機能やベストプラクティスを紹介。',
    feedUrl: 'https://blog.jetbrains.com/kotlin/feed/',
  },
  {
    siteName: "A Java geek Nicolas Fränkel's blog",
    feedType: 'rss',
    siteDescription: 'Spring、Java、マイクロサービスに関する技術記事が充実している。',
    feedUrl: 'https://blog.frankel.ch/feed.xml',
  },
  {
    siteName: 'blog.jxck.io',
    feedType: 'atom',
    siteDescription: 'Web Technology Blog by Jxck',
    feedUrl: 'https://blog.jxck.io/feeds/atom.xml',
  },
  {
    siteName: 'IK.AM',
    siteDescription: '槙 俊明さんのブログ',
    feedType: 'rss',
    feedUrl: 'https://ik.am/feed',
  },
  {
    siteName: 'OpenAI News',
    feedType: 'rss',
    feedUrl: 'https://openai.com/news/rss.xml',
    siteDescription:
      'OpenAIの最新情報や研究成果を紹介する公式ブログ。AI技術の進展に関する洞察が得られる。',
  },
];

export const SUB_REDDITS = ['devops', 'Frontend', 'SpringBoot', 'SQL', 'webdev', 'nextjs'];
