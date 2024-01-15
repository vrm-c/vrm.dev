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
    title: '[Unite Tokyo 2019] Detailed explanation of 3D avatar file format “VRM”',
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
