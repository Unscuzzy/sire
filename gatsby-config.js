const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `SIRE`,
    description: `Sire website.`,
    author: `@junscuzzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
        // eslint-disable-next-line
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: { defaultQuality: 75 }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SIRE`,
        short_name: `sire`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Open+Sans:300,400,400i,600,600i,800,800i',
            'Lato:400,400i'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // modulePath: `path/to/custom/script.js`, // default: undefined
        // enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `SIRE Administration`
      }
    }
  ]
}
