const languages = {
  langs: ['en', 'zh-Hant', 'zh-Hans'],
  defaultLangKey: 'en'
}

module.exports = {
  siteMetadata: {
    title: `Booguu Company Limited`,
    description: `Booguu Company Limited main website.`,
    author: `Booguu Company Limited`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'en',
        useLangKeyLayout: true,
        langKeyDefault: languages.defaultLangKey,
        prefixDefault: true,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
