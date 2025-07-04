import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>📧 <a href="mailto:eliot@eliotcowley.dev">eliot@eliotcowley.dev</a> | <i className="bi bi-linkedin"></i> <a href="www.linkedin.com/in/eliotcowley">LinkedIn</a></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg padding-horiz--md"
            to="/docs">
            📖 Read my blog
          </Link>
        </div>
        <div className="ratio ratio-16x9 margin-top--lg">
          <iframe
            src="https://www.youtube.com/embed/HXnrO7fs9f0?rel=0"
            title="Portfolio YouTube video"
            allowFullScreen={true}
            width="960"
            height="540"
          ></iframe>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p>
                Hi, I'm Eliot! I've worked as a Technical Writer at companies like Microsoft, Sony, and Indeed, and I have a passion for making games.
              </p>
              <p>
                This portfolio is where I show the documentation projects I've worked on at various companies, games I've made, skills I've learned, and experience I've gained.
              </p>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}
