import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { maxWidths } from '../config/theme'
import { ImageFuildProps } from '../utils/propTypes'
import { Heading, Flex, Text, Container, Box } from '../utils/rebass'
import { fadeFromLeft } from '../utils/animations'

const AboutPage = ({ data }) => {
  const {
    title,
    excerpt,
    cover,
    ecoTitle,
    ecoBody,
    ecoItems,
    partnerTitle,
    teamTitle,
    partners,
    team
  } = data.markdownRemark.frontmatter

  const { src } = cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} src={src} />
      <Container as="section" maxWidth={maxWidths.medium} py={5}>
        <Flex flexWrap="wrap" mx={[-3, -4]}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromLeft(isVisible)}>
                <Box px={[3, 4]} textAlign="center">
                  <Heading>{title}</Heading>
                  <Text fontStyle="italic">{ecoBody}</Text>
                </Box>
              </Tween>
            )}
          </VisibilitySensor>
        </Flex>
      </Container>

      {// eslint-disable-next-line no-console
      console.log({
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
        cover: ImageFuildProps.isRequired,
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
        cover {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
