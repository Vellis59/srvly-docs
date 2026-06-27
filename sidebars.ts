import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/introduction'},
      items: [
        'getting-started/quick-start',
        'getting-started/features',
      ],
    },
    {
      type: 'category',
      label: 'Self-Hosting',
      link: {type: 'doc', id: 'self-hosting/requirements'},
      items: [
        'self-hosting/installation',
        'self-hosting/configuration',
        'self-hosting/reverse-proxy',
        'self-hosting/security',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      link: {type: 'doc', id: 'guide/adding-servers'},
      items: [
        'guide/adding-servers',
        'guide/server-connection',
        'guide/dashboard',
        'guide/app-installation',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {type: 'doc', id: 'api/overview'},
      items: [
        'api/authentication',
        'api/deploy',
        'api/docker',
        'api/domains',
      ],
    },
    {
      type: 'category',
      label: 'App Catalog',
      link: {type: 'doc', id: 'catalog/overview'},
      items: [
        'catalog/browsing',
        'catalog/installing',
      ],
    },
  ],
};

export default sidebars;
