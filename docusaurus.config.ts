import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const cardImage = "images/vrm/card.png";

const config: Config = {
  title: "VRM",
  tagline: "3D humanoid avatar file format for VR",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://vrm.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/en/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "VRM Consortium", // Usually your GitHub org/user name.
  projectName: "VRM", // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: false,
          routeBasePath: "/blog",
          path: "./blog",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          ignorePatterns: ["/tags/**"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: cardImage,
    navbar: {
      title: "",
      logo: {
        alt: "Vrm Logo",
        src: cardImage,
      },
      items: [
        {
          label: "VRM",
          type: "docSidebar",
          sidebarId: "vrmSidebar",
          position: "left",
        },
        { to: "/showcase", label: "ShowCase", position: "left" },
        {
          label: "VRM-1.0",
          type: "docSidebar",
          sidebarId: "vrm1Sidebar",
          position: "left",
        },
        {
          label: "UniVRM-1.0",
          type: "docSidebar",
          sidebarId: "univrm1Sidebar",
          position: "left",
        },
        {
          label: "UniVRM",
          type: "docSidebar",
          sidebarId: "univrmSidebar",
          position: "left",
        },
        {
          label: "VRM Animation",
          type: "docSidebar",
          sidebarId: "vrmaSidebar",
          position: "left",
        },
        {
          label: "glTF",
          type: "docSidebar",
          sidebarId: "gltfSidebar",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        //
        {
          label: "UniVRM-API",
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "right",
        },

        {
          label: "UniVRM-Release",
          type: "docSidebar",
          sidebarId: "releaseSidebar",
          position: "right",
        },
        {
          label: "Site",
          type: "docSidebar",
          sidebarId: "siteSidebar",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/vrm-c/vrm.dev",
          position: "right",
          className: "github-link icon-black",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "VRM Consortium",
          items: [
            {
              label: "VRM Consortium",
              href: "https://vrm-consortium.org",
            },
            {
              label: "vrm.dev(This site)",
              href: "https://github.com/vrm-c/vrm.dev",
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
            {
              label: "vrm.dev.en (English translation)",
              href: "https://github.com/vrm-c/vrm.dev.en",
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
            {
              label: "vrm-specification",
              href: "https://github.com/vrm-c/vrm-specification",
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
          ],
        },
        {
          title: "UniVRM",
          items: [
            {
              label: "UniVRM",
              href: "https://github.com/vrm-c/UniVRM",
              className: "footer__link-item github-link icon-white",
              "aria-label": "GitHub repository",
            },
            {
              label: "ReleaseNote",
              to: "/release",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "glTF",
              href: "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",
            },
            {
              label: "Docusaurus",
              href: "https://docusaurus.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VRM Consortium. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["csharp"],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

export default config;
