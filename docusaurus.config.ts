import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VRM',
  tagline: '3D avatar file format for VR',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://vrm-c.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vrm.dev.en/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VRM Consortium', // Usually your GitHub org/user name.
  projectName: 'VRM', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: false,
          routeBasePath: '/blog',
          path: './blog',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Vrm Logo',
        src: '/images/vrm/card.png',
      },
      items: [
        {
          label: 'Vrm',
          type: 'docSidebar',
          sidebarId: 'vrmSidebar',
          position: 'left',
        },
        {
          label: 'UniVRM',
          type: 'docSidebar',
          sidebarId: 'univrmSidebar',
          position: 'left',
        },
        {
          label: 'glTF',
          type: 'docSidebar',
          sidebarId: 'gltfSidebar',
          position: 'left',
        },
        {
          label: 'Vrm-1.0',
          type: 'docSidebar',
          sidebarId: 'vrm1Sidebar',
          position: 'left',
        },
        {
          label: 'UniVRM-1.0',
          type: 'docSidebar',
          sidebarId: 'univrm1Sidebar',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        //
        {
          label: 'UniHumanoid',
          type: 'docSidebar',
          sidebarId: 'unihumanoidSidebar',
          position: 'right',
        },
        {
          label: 'API',
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'right',
        },
        {
          label: 'Implementation',
          type: 'docSidebar',
          sidebarId: 'implSidebar',
          position: 'right',
        },

        {
          label: 'ReleaseNote',
          type: 'docSidebar',
          sidebarId: 'releaseSidebar',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/vrm-c/vrm.dev',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'ReleaseNote',
              to: '/release',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VRM Consortium. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};


// for debug
// config.url = 'https://ousttrue.github.io';
// config.baseUrl = '/vrm.dev/';


export default config;
