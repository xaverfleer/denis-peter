const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = {
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: { '/.netlify/functions/': '' },
      })
    )
  },
  siteMetadata: {
    title: 'Permakultur Handwerk | Denis Peter',
    author: 'Xaver Fleer',
    description:
      'Permakultur Handwerk | Beratung, Planung und Gestaltung von Permakultur-Projekten',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/content/pages` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `img`, path: `${__dirname}/static/img/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/content/blog` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.svg',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: { modulePath: `${__dirname}/src/cms/cms.js` },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}
