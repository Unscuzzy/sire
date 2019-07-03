/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const slash = require(`slash`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  // Relative image Sharp in Markdown
  fmImagesToRelative(node)
}

// Create projects templates
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
    ({ node }) => node.frontmatter.templateKey === 'projects'
  )
  // For each projects
  const projectsTemplate = path.resolve(`./src/templates/project.jsx`)
  posts.forEach(({ node: { id, fileAbsolutePath } }) => {
    // Build slug from file name and rm date & .extension
    // This slugify  function is duplicate in the frontend
    const slug = path.basename(String(fileAbsolutePath)).slice(11, -3)
    createPage({
      path: `/portfolio/${slug}/`,
      component: slash(projectsTemplate),
      context: {
        id
      }
    })
  })
}
