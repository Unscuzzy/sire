import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { ImageFuildProps } from '../utils/propTypes'
import { Container, Heading, Text } from '../utils/rebass'

const ContactPage = ({ data }) => {
  const { title, excerpt, cover, content } = data.markdownRemark.frontmatter

  const { src } = cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} src={src} />
      <Container py={[4, 5]}>
        <Text fontStyle="italic" textAlign="center">
          {content}
        </Text>
      </Container>
      <Container maxWidth={600} pb={[4, 5]}>
        <Heading
          style={{ border: `2px dashed #666` }}
          py={6}
          textAlign="center"
        >
          Form
        </Heading>
      </Container>
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        cover: ImageFuildProps.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default ContactPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
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
        content
      }
    }
  }
`
