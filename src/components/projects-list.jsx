import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import { useStaticQuery, graphql } from 'gatsby'
import path from 'path'

import ProjectItem from './projects-item'

const ProjectsList = ({ projectsList }) => {
  const data = useStaticQuery(graphql`
    query PortfolioData {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "projects" } } }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              excerpt
              business
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Filter projects with props list
  const projects = data.allMarkdownRemark.edges.filter(({ node }) =>
    projectsList.includes(node.frontmatter.title)
  )
  const total = projects.length

  return (
    <>
      {projects.map(({ node }, i) => {
        const { fileAbsolutePath, frontmatter } = node
        const { title, thumbnail } = frontmatter
        const { fluid } = thumbnail.childImageSharp
        // Build slug from file name and rm date & .extension
        // This slugify  function is duplicate in gatsby-node.js
        const slug = path.basename(String(fileAbsolutePath)).slice(11, -3)
        return (
          <ProjectItem
            key={uniqid(title)}
            title={title}
            fluid={fluid}
            index={i}
            total={total}
            slug={slug}
          />
        )
      })}
    </>
  )
}

ProjectsList.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ProjectsList
