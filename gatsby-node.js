/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const path = require(`path`)
// const slash = require(`slash`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  // Relative image Sharp in Markdown
  fmImagesToRelative(node)
}

// Relation with portfolio
exports.sourceNodes = ({
  getNodes,
  getNode,
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode, createNodeField } = actions

  const projects = getNodes()
    .filter(node => node.internal.type === 'MarkdownRemark')
    .filter(node => node.frontmatter.templateKey === 'projects')

  console.log(projects)

  /*
  const portofioItems = {}
  const markdownNodes = getNodes()
    .filter(node => node.internal.type === 'MarkdownRemark')
    .forEach(node => {
      if (node.frontmatter.title) {
        const portfolioNode = getNodes().find(
          node2 =>
            node2.internal.type === 'MarkdownRemark' &&
            node2.frontmatter.templateKey === 'Projects' &&
            node2.frontmatter.title === node.frontmatter.portfolioProject
        )

        if (portfolioNode) {
          createNodeField({
            node,
            name: 'portfolioItem',
            value: portfolioNode.id
          })

          // if it's first time for this author init empty array for his posts
          if (!(portfolioNode.id in portofioItems)) {
            portofioItems[portfolioNode.id] = []
          }
          // add book to this author
          portofioItems[portfolioNode.id].push(node.id)
        }
      }
    })

  Object.entries(portofioItems).forEach(([portfolioNodeId, projectsIds]) => {
    createNodeField({
      node: getNode(portfolioNodeId),
      name: 'projects',
      value: projectsIds
    })
  })

  // Data can come from anywhere, but for now create it manually
  const myData = {
    key: 123,
    foo: `The foo field of my node`,
    bar: `Baz`
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData)
    }
  }

  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)

   */
}

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
