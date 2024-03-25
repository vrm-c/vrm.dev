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
    title: '技術仕様',
    description: (
      <>
        <a href="https://github.com/vrm-c/vrm-specification">vrm-specification</a>
      </>
    ),
  },
  {
    title: 'VRMコンソーシアム',
    description: (
      <>
        <a href="https://vrm-consortium.org/">vrm-consortium</a>
      </>
    ),
  },
  {
    title: '【C4】新しい概念を規格として定義する～アバターのための規格「VRM」を考えた話',
    description: (
      <>
        <a href="https://www.youtube.com/watch?v=rya1SeMBkxY">video</a>
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
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
