import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'srvly',
  tagline: 'Open-source VPS management platform',
  favicon: 'img/favicon.ico',

  url: 'https://docs.srvly.app',
  baseUrl: '/',

  organizationName: 'Vellis59',
  projectName: 'srvly-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Vellis59/srvly-docs/tree/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'srvly',
      logo: {
        alt: 'srvly Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Vellis59/srvly',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://srvly.app',
          label: 'srvly.app',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/getting-started/introduction'},
            {label: 'Self-Hosting', to: '/self-hosting/requirements'},
            {label: 'API Reference', to: '/api/overview'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub Issues', href: 'https://github.com/Vellis59/srvly/issues'},
            {label: 'GitHub Discussions', href: 'https://github.com/Vellis59/srvly/discussions'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'srvly.app', href: 'https://srvly.app'},
            {label: 'Console', href: 'https://console.srvly.app'},
            {label: 'GitHub', href: 'https://github.com/Vellis59/srvly'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} srvly — MIT License`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'docker', 'yaml', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
