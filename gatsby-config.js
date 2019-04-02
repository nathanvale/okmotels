const config = require('./src/utils/siteConfig')

let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const {spaceId, accessToken} = contentfulConfig.production
  if (!spaceId || !accessToken) {
    // eslint-disable-next-line no-unsafe-finally
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      // eslint-disable-next-line babel/camelcase
      site_url: config.siteUrl,
      // eslint-disable-next-line babel/camelcase
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      // eslint-disable-next-line babel/camelcase
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        // eslint-disable-next-line babel/camelcase
        short_name: config.shortTitle,
        description: config.siteDescription,
        // eslint-disable-next-line babel/camelcase
        start_url: '/',
        // eslint-disable-next-line babel/camelcase
        background_color: config.backgroundColor,
        // eslint-disable-next-line babel/camelcase
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `static${config.siteLogo}`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = 'GatsbyJS GCN Starter'
          return ret
        },
        query: `
    {
      site {
        siteMetadata {
          rssMetadata {
            site_url
            feed_url
            title
            description
            image_url
            author
            copyright
          }
        }
      }
    }
  `,
        feeds: [
          {
            serialize(ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allContentfulPost.edges.map(edge => ({
                date: edge.node.publishDate,
                title: edge.node.title,
                description: edge.node.body.childMarkdownRemark.excerpt,

                url: `${rssMetadata.site_url}/${edge.node.slug}`,
                guid: `${rssMetadata.site_url}/${edge.node.slug}`,
                // eslint-disable-next-line babel/camelcase
                custom_elements: [
                  {
                    'content:encoded': edge.node.body.childMarkdownRemark.html,
                  },
                ],
              }))
            },
            query: `
              {
            allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
               edges {
                 node {
                   title
                   slug
                   publishDate(formatString: "MMMM DD, YYYY")
                   body {
                     childMarkdownRemark {
                       html
                       excerpt(pruneLength: 80)
                     }
                   }
                 }
               }
             }
           }
      `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
