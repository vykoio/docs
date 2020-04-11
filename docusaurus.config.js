module.exports = {
  title: "Vyko",
  tagline: "The tagline of my site",
  url: "https://vyko.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "vykoio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: null,
      logo: {
        alt: "Vyko Icon",
        src: "https://cdn.oxro.io/img/icons/vyko.svg",
      },
      links: [
        {
          to: "/overview",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/vykoio/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: null,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/vykoio/docs/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
