/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const path = require(`path`)
// const slash = require(`slash`)

/*
// Create pages/posts etc templates
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
              templateKey
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Filter data as Collections
  const data = result.data.allMarkdownRemark.edges
  const posts = data.filter(
    ({ node }) => node.frontmatter.templateKey === 'posts'
  )
  // For each Post
  const postTemplate = path.resolve(`./src/templates/post.tsx`)
  posts.forEach(({ node: { id, fileAbsolutePath } }) => {
    // Build slug from file name and rm date & .extension
    const slug = path.basename(String(fileAbsolutePath)).slice(11, -3)
    createPage({
      path: `/blog/${slug}/`,
      component: slash(postTemplate),
      context: {
        id
      }
    })
  })

}
*/
