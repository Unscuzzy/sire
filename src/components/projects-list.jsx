import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectItem from './projects-item'

const ProjectsList = ({ projectsList }) => {
  const data = useStaticQuery(graphql`
    query PortfolioData {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "projects" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              templateKey
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

  return (
    <>
      {projects.map(({ node }, i) => {
        const { title, thumbnail } = node.frontmatter
        const { fluid } = thumbnail.childImageSharp
        return (
          <ProjectItem
            key={uniqid(title)}
            title={title}
            fluid={fluid}
            index={i}
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
