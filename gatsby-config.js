const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://danielsobisz.github.io",
    title: "Sonia Kuras",
  },
  pathPrefix: "/sonia-kuras-new",
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "http://www.soniakuras.com/graphql",
    //   },
    // },
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        // Facebook account or page ID
        pageId: 102870105571124,
        params: {
          fields: ["name,events"],
        },
        // Access Token from facebook
        accessToken:
          "EAAmkBV5hGIsBAEBrZCxEPHeMGA5c4JJlN2j3DXtPFLTvZCgc7ZAfZB1aB9DkR36DnYWODQC7gfSmJmndlZB94jK6QuS3k5pTSZBUaEksywjC4UfgqZCzPu4GGKRQRPQzMoSZBMwmHubwbEt4gEGLpNPRVaW5a6SsO20WmYwvwfFnaNd3UUHN0juaGweg7ieB3PR4HcRAg7ZCLUSKzPblbzKKX",
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Raleway", "Arima Madurai", "Bree Serif"],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0.01, // Percentage of an element's area that needs to be visible to launch animation
    //     once: true, // Defines if animation needs to be launched once
    //     disable: false, // Flag for disabling animations
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
  ],
};
