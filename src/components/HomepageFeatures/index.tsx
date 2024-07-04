import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'UnityPackage',
    description: (
      <>
        <a href="https://github.com/vrm-c/UniVRM/releases">Download</a>
      </>
    ),
  },
  {
    title: 'Technical specifications',
    description: (
      <>
        <a href="https://github.com/vrm-c/vrm-specification">vrm-specification</a>
      </>
    ),
  },
  {
    title: 'VRM consortium',
    description: (
      <>
        <a href="https://vrm-consortium.org/">vrm-consortium</a>
      </>
    ),
  },
  {
    title: '[C4] Defining a new concept as a standard - A story about creating the standard "VRM" for avatars',
    description: (
      <>
        <a href="https://www.youtube.com/watch?v=rya1SeMBkxY">video</a>
      </>
    ),
  },
  {
    title: 'アバターのための規格「VRM」の誕生秘話！　概念を規格として定義するために必要なこと',
    description: (
      <>
        <a href="https://levtech.jp/media/article/column/detail_80/">interview</a>
      </>
    ),
  },
  {
    title: '【Unite Tokyo 2019】3Dアバターファイルフォーマット「VRM」詳説',
    description: (
      <>
        <a href="https://www.slideshare.net/UnityTechnologiesJapan002/unite-tokyo-20193dvrm-176308996">slide</a>
      </>
    ),
  },
  {
    title: 'VRM meetup official Discord server',
    description: (
      <>
        <a href="http://discord.gg/26kbRgb58k">discord</a>
      </>
    ),
  },
  {
    title: 'VRM specification contributors',
    description: (
      <>
        <a href="https://github.com/vrm-c/vrm-specification/graphs/contributors">Github</a>
      </>
    ),
  },
  {
    title: 'UniVRM contributors',
    description: (
      <>
        <a href="https://github.com/vrm-c/UniVRM/graphs/contributors">Github</a>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4 card shadow--md', styles.feature)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
