import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VRM',
  tagline: 'VR向け3Dアバターファイルフォーマット',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://vrm.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
    defaultLocale: 'ja',
    locales: ['ja'],
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
      title: '',
      logo: {
        alt: 'Vrm Logo',
        src: 'images/vrm/card.png',
      },
      items: [
        {
          label: 'VRM',
          type: 'docSidebar',
          sidebarId: 'vrmSidebar',
          position: 'left',
        },
        { to: '/showcase', label: 'ShowCase', position: 'left' },
        {
          label: 'VRM-1.0',
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
        { to: '/tags', label: 'Tags', position: 'left' },
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
          href: 'https://github.com/vrm-c/vrm.dev',
          position: 'right',
          className: "github-link icon-black",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'VRM Consortium',
          items: [
            {
              label: 'VRM Consortium',
              href: 'https://vrm-consortium.org',
            },
            {
              label: 'vrm.dev(This site)',
              href: 'https://github.com/vrm-c/vrm.dev',
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
            {
              label: 'vrm.dev.en (English translation)',
              href: 'https://github.com/vrm-c/vrm.dev.en',
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
            {
              label: 'vrm-specification',
              href: 'https://github.com/vrm-c/vrm-specification',
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
          ]
        },
        {
          title: 'UniVRM',
          items: [
            {
              label: 'UniVRM',
              href: 'https://github.com/vrm-c/UniVRM',
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
            {
              label: 'ReleaseNote',
              to: '/release',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'glTF',
              href: 'https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VRM Consortium. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/showcase',
            from: '/vrm/vrm_applications/',
          },
        ],
      },
    ],
  ],
};

export default config;