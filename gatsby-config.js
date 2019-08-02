const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.google-analytics.com",
  "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' https://www.google-analytics.com"
]

const directivesToCspHeader = headers => headers.join(';')

module.exports = {
  siteMetadata: {
    title: `SIRE`,
    description: `Le luxe éco-responsable`,
    author: `@junscuzzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`
      }
    },
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
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: `gatsby-remark-relative-images`,
      options: {
        name: 'uploads'
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1400,
        backgroundColor: 'transparent'
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
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            `Content-Security-Policy: ${directivesToCspHeader(cspDirectives)}`,
            'Referrer-Policy: no-referrer-when-downgrade',
            'cache-control: public,max-age=31536000,immutable'
          ]
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
      }
    }
  ]
}
