import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Tween } from 'react-gsap'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { ImageFuildProps } from '../utils/propTypes'
import { Container, Heading, Text } from '../utils/rebass'
import { fadeFromBottom } from '../utils/animations'
import { maxWidths } from '../config/theme'

const ContactPage = ({ data }) => {
  const { title, excerpt, cover, content } = data.markdownRemark.frontmatter

  const { src } = cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} src={src} />
      <Container as="section" maxWidth={maxWidths.medium} py={[4, 5]}>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Tween to={fadeFromBottom(isVisible)}>
              <Text fontStyle="italic" textAlign="justify">
                {content}
              </Text>
            </Tween>
          )}
        </VisibilitySensor>
      </Container>
      <Container as="section" maxWidth={maxWidths.small} pb={[4, 5]}>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Tween to={fadeFromBottom(isVisible)}>
              <form action="/message-envoye" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label>Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email"/></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </Tween>
          )}
        </VisibilitySensor>
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
