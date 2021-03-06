/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  /* Your site config here */
  plugins: [
    {resolve: "gatsby-source-filesystem", options: {
    name: "images",
      path: `${__dirname}/src/images/`
    }},"gatsby-plugin-styled-components", "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },],
}
