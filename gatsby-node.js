const config = require('./src/utils/site-config')

const path = require(`path`)

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({page, actions}) => {
  const {createPage} = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    // Update the page.
    createPage(page)
  }
}

// eslint-disable-next-line max-lines-per-function
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  const loadPosts = new Promise(resolve => {
    graphql(`
      {
        allContentfulPost(
          sort: {fields: [publishDate], order: DESC}
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage,
      )

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.tsx`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create additional pagination on home page if needed
      Array.from({length: numPages}).forEach((_, i) => {
        createPage({
          path: `/${i + 2}/`,
          component: path.resolve(`./src/templates/index.tsx`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.tsx`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise(resolve => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({node}) => {
        // eslint-disable-next-line no-negated-condition
        const totalPosts = node.post !== null ? node.post.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({length: numPages}).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.tsx`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
        return false
      })
      resolve()
    })
  })

  const loadPages = new Promise(resolve => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({node}) => {
        return createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.tsx`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags, loadPages])
}
