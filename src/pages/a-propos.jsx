import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { ImageFuildProps } from '../utils/propTypes'

// Gatsby Page query (inject data to frontend template)
const AboutPage = ({ data }) => {
  const {
    title,
    excerpt,
    ecoTitle,
    ecoBody,
    ecoItems,
    partnerTitle,
    teamTitle,
    partners,
    team
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} />
      {console.log({
        title,
        excerpt,
        ecoTitle,
        ecoBody,
        ecoItems,
        partnerTitle,
        teamTitle,
        partners,
        team
      })}
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        ecoTitle: PropTypes.string.isRequired,
        ecoBody: PropTypes.string.isRequired,
        ecoItems: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
          })
        ),
        partnerTitle: PropTypes.string.isRequired,
        partners: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            logo: ImageFuildProps.isRequired
          })
        ),
        teamTitle: PropTypes.string.isRequired,
        team: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            photo: ImageFuildProps.isRequired
          })
        )
      }).isRequired
    }).isRequired
  }).isRequired
}

export default AboutPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        excerpt
        ecoTitle
        ecoBody
        ecoItems {
          content
          name
        }
        partnerTitle
        teamTitle
        partners {
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        team {
          content
          name
          photo {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
