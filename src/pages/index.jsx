import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderSlider from '../components/home/headerSlider'
import Presentation from '../components/home/presentation'
import CreatingProcess from '../components/home/creating-process'
import Materials from '../components/home/materials'
import Portfolio from '../components/home/portfolio'
import { ImageFuildProps } from '../utils/propTypes'
import Link from '../components/link'
import { Button, Container } from '../utils/rebass'

const IndexPage = ({ data }) => {
  const {
    title,
    excerpt,
    headerSlider,
    presentationTitle,
    presentationBody,
    presentationSlider,
    processTitle,
    process,
    materialTitle,
    materials,
    portfolioTitle,
    portfolioBody,
    portfolioProject
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <HeaderSlider slides={headerSlider} />
      <Presentation
        title={presentationTitle}
        html={presentationBody}
        slides={presentationSlider}
      />
      <CreatingProcess title={processTitle} process={process} />
      <Materials title={materialTitle} materials={materials} />
      <Portfolio
        title={portfolioTitle}
        html={portfolioBody}
        portfolio={portfolioProject}
      />
      <Container position="relative">
        <Button
          as={Link}
          to="/portfolio"
          style={{ textTransform: 'uppercase' }}
        >
          Le portfolio
        </Button>
      </Container>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        headerSlider: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: ImageFuildProps.isRequired
          })
        ),
        presentationTitle: PropTypes.string.isRequired,
        presentationBody: PropTypes.string.isRequired,
        presentationSlider: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: ImageFuildProps.isRequired
          })
        ),
        processTitle: PropTypes.string.isRequired,
        process: PropTypes.arrayOf(
          PropTypes.shape({
            step: PropTypes.string.isRequired
          })
        ),
        materialTitle: PropTypes.string.isRequired,
        materials: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: ImageFuildProps.isRequired,
            content: PropTypes.string.isRequired
          })
        ),
        portfolioTitle: PropTypes.string.isRequired,
        portfolioBody: PropTypes.string.isRequired,
        portfolioProject: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        excerpt
        headerSlider {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        presentationTitle
        presentationBody
        presentationSlider {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        processTitle
        process {
          step
        }
        materialTitle
        materials {
          title
          content
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        portfolioTitle
        portfolioBody
        portfolioProject
      }
    }
  }
`
