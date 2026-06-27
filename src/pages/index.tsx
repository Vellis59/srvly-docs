import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/introduction">
            Get Started →
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/self-hosting/installation"
            style={{marginLeft: '1rem'}}>
            Install srvly
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Docs"
      description="srvly documentation — deploy, monitor, and manage your VPS fleet">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="card" style={{padding: '1.5rem', height: '100%'}}>
                  <h3>🚀 Getting Started</h3>
                  <p>Learn what srvly is and how to get up and running in minutes.</p>
                  <Link to="/getting-started/introduction">Read more →</Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="card" style={{padding: '1.5rem', height: '100%'}}>
                  <h3>🏠 Self-Hosting</h3>
                  <p>Deploy srvly on your own server with Docker Compose and Caddy.</p>
                  <Link to="/self-hosting/requirements">Read more →</Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="card" style={{padding: '1.5rem', height: '100%'}}>
                  <h3>🔌 API Reference</h3>
                  <p>Integrate your AI agent with the srvly REST API.</p>
                  <Link to="/api/overview">Read more →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
