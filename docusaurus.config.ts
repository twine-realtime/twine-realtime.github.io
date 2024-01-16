import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

dotenv.config({path: './.env.local'});

const config: Config = {
  title: 'Twine',
  tagline: 'Twine Real-Time',
  favicon: 'img/favicon.ico',
  url: 'https://twine-realtime.github.io',
  baseUrl: '/',
  organizationName: 'twine-realtime', // Usually your GitHub org/user name.
  projectName: 'twine-realtime.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/twine-logo',
    navbar: {
      title: 'Twine Real-Time',
      logo: {
        alt: 'logo',
        src: 'img/twine-logo.png',
      },
      items: [
        {to: '/case-study', label: 'Case-Study', position: 'right'},
        {to: '/#tech-talk-container', label: 'Tech Talk', position: 'right', activeBasePath: 'never-active'},
        {to: '/#team', label: 'Team', position: 'right', activeBasePath: 'never-active'},
        {type: 'doc', docId: "deployment", label: 'Docs', position: 'right'},
        {to: 'https://github.com/twine-realtime/', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      // logo: {
      //   alt: "Twine Logo",
      //   src: "img/twine-logo.png",
      //   width: 80,
      // },
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: "Case Study",
              href: "/case-study",
            },
            {
              label: "Tech Talk",
              href: "/#tech-talk-container",
            },
            {
              label: "Docs",
              href: "/docs/deployment"
            },
            {
              label: "GitHub",
              href: "https://github.com/twine-realtime",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Case Study",
        //       href: "/case-study",
        //     },
        //     {
        //       label: "Docs",
        //       href: "/docs/API"
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/Arbiter-WRTC",
        //     },
        //     {
        //       label: "Tech Talk",
        //       href: "https://www.youtube.com/watch?v=3BMGsQI5XOI",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Twine`,
    },
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;