import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'
import uniqid from 'uniqid'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Link from '../components/link'
import { maxWidths } from '../config/theme'
import { ImageFuildProps } from '../utils/propTypes'
import { Heading, Flex, Text, Container, Box, Card } from '../utils/rebass'
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
        <Flex flexWrap="wrap" mx={[null, -3, -4]}>
          <Box px={[3, 4]} textAlign="center">
            <Heading>{ecoTitle}</Heading>
            <Text fontStyle="italic">{ecoBody}</Text>
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mx={[null, -3, -4]}>
          {ecoItems.map(({ name, content }, i) =>
            <Card key={uniqid(i)} width={[1, 1 / 2]} px={[null, 3, 4]} py={4}>
              <h3 fontStyle="italic">{name}</h3>
              <Text>{content}</Text>
            </Card>
          )}
        </Flex>
        <Box mx={[-3, -4]}>
          <Heading px={[null, 3, 4]}>{partnerTitle}</Heading>
          <Flex px={[null, 3, 4]} flexWrap="wrap" mx={[-3, -4]}>
            {partners.map(({ url, logo }, i) => {
            const { fluid } = logo.childImageSharp
              return (
                <Box width={[1, 1 / 4]} px={[3, 4]} textAlign="center" key={uniqid(i)}>
                  <Link to={`${url}`}>
                    <Img fluid={fluid} />
                  </Link>
                </Box>
              )
            })}
          </Flex>
        </Box>
        <Box mx={[-3, -4]}>
          <Heading px={[null, 3, 4]}>{teamTitle}</Heading>
          <Flex px={[null, 3, 4]} flexWrap="wrap" mx={[-3, -4]}>
            {team.map(({ name, content, photo }, i) => {
            const { fluid } = photo.childImageSharp
              return (
                <Box width={[1, 1 / 3]} px={[3, 4]} textAlign="center" key={uniqid(i)}>
                  <h3 style={{ textTransform: 'uppercase' }} textTransform="uppercase">{name}</h3>
                  <p>{content}</p>
                  <Img fluid={fluid} />
                </Box>
              )
            })}
          </Flex>
        </Box>
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
