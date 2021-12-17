require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://danielsobisz.github.io",
    title: "Sonia Kuras",
  },
  pathPrefix: "/sonia-kuras-new",
  plugins: [
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        pageId: 102870105571124,
        params: {
          fields: ["name,events"],
        },
        accessToken: process.env.FB_TOKEN,
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
