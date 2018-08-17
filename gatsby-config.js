module.exports = {
  siteMetadata: {
    title: 'Michelle JL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r7cyj3cr2xt1`,
        accessToken: `6dfa472801a70251dfd82d91f295b7c51f9868eb7051cb07f4c80cb2005a5cf8`,
      },
    },
  ],
}
