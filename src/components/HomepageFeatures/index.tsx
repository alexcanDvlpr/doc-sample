import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Clona el proyecto",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Accede a nuestro repositorio y clona el proyecto para poder empezar a trabajar.
      </>
    ),
  },
  {
    title: "Descubre las piezas de Hamelyn",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Entiende todas las <b>entidades</b> y los elementos que hacen que <b>Hamelyn</b> sea posible
      </>
    ),
  },
  {
    title: "Descubre la arquitectura",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Descubre como trabajamos en el departamento de IT de Hamelyn. Ademas de coleccionar patitos de goma 🐣 también sabemos lo que hacemos
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
