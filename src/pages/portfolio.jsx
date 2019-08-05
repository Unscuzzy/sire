import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Tween } from 'react-gsap'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import ProjectsList from '../components/projects-list'
import { ImageFuildProps } from '../utils/propTypes'
import { Container, Heading, Text } from '../utils/rebass'
import { fadeFromBottom } from '../utils/animations'

const PortfolioPage = ({ data }) => {
  const {
    title,
    excerpt,
    cover,
    subTitle,
    presentation,
    portfolioProjects
  } = data.markdownRemark.frontmatter

  const { src } = cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} src={src} />
      <Container py={[4, 5]}>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Tween to={fadeFromBottom(isVisible)}>
              <Heading textAlign="center">{subTitle}</Heading>
              <Text fontStyle="italic"  textAlign="justify">
                {presentation}
              </Text>
            </Tween>
          )}
        </VisibilitySensor>
        <ProjectsList projectsList={portfolioProjects} />
      </Container>
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        cover: ImageFuildProps.isRequired,
        subTitle: PropTypes.string.isRequired,
        presentation: PropTypes.string.isRequired,
        portfolioProjects: PropTypes.arrayOf(PropTypes.string).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "portfolio-page" } }) {
      frontmatter {
        title
        excerpt
        cover {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subTitle
        presentation
        portfolioProjects
      }
    }
  }
`
