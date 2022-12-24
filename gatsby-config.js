module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My portfolio",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: "images", path: `${__dirname}/src/images/` },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-brotli`,
  ],
};
