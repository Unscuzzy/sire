import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Tween } from 'react-gsap'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { ImageFuildProps } from '../utils/propTypes'
import { Container, Box, Text, Button } from '../utils/rebass'
import { fadeFromBottom } from '../utils/animations'
import { Form, Input, Textarea, Label } from '../utils/form'
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
      <Container as="section" maxWidth={maxWidths.medium} pb={[4, 5]}>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Tween to={fadeFromBottom(isVisible)}>
              <Form action="/message-envoye" name="contact" method="post">
                <Box className="hidden">
                  <Label>Don’t fill this out if you are human: </Label>
                  <input name="bot-field" />
                </Box>
                <Box display="flex" flexDirection="column" py="3">
                  <Label htmlFor="firstName">Votre nom :</Label>
                  <Input id="firstName" type="text" name="name" required />
                </Box>
                <Box display="flex" flexDirection="column" py="3">
                  <Label htmlFor="eMail">Votre email :</Label>
                  <Input id="eMail" type="email" name="email" required />
                </Box>
                <Box display="flex" flexDirection="column" py="3">
                  <Label htmlFor="message">Message :</Label>
                  <Textarea id="message" name="message" required />
                </Box>
                <Box>
                  <Button type="submit">Envoyer</Button>
                </Box>
              </Form>
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
