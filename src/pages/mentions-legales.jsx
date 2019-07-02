import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Wysiwyg from '../components/wysiwyg'
import { ImageFuildProps } from '../utils/propTypes'
import { Container } from '../utils/rebass'

const MentionsLegalePage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, excerpt, cover } = frontmatter
  const { src } = cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} src={src} />
      <Container py={[4, 5]}>
        <Wysiwyg __html={html} />
      </Container>
    </Layout>
  )
}

MentionsLegalePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        cover: ImageFuildProps.isRequired
      }).isRequired,
      html: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default MentionsLegalePage

export const pageQuery = graphql`
  query {
    markdownRemark(
      frontmatter: { templateKey: { eq: "mentions-legales-page" } }
    ) {
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
      }
      html
    }
  }
`
