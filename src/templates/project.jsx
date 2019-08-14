import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { Tween } from 'react-gsap'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Wysiwyg from '../components/wysiwyg'
import { Container, Heading, Box, Text, Flex } from '../utils/rebass'
import { ImageFuildProps } from '../utils/propTypes'
import SlickHelper from '../utils/slick-helper'
import { fade } from '../utils/animations'
import { maxWidths } from '../config/theme'

const Title = styled(Heading).attrs({
  color: 'black'
})`
  :after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: #879999;
  }
`

const Meta = ({ h1, h2 }) => (
  <Box width={[1, 1, 1 / 3]} mx={-2}>
    <Box px={2}>
      <Title>{h1}</Title>
      <Text color="grey" fontSize={1} py={3}>
        {h2}
      </Text>
    </Box>
  </Box>
)

Meta.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired
}

const ProjectTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, excerpt, date, business, thumbnail, images } = frontmatter
  const { src } = thumbnail.childImageSharp.fluid
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero title={title} src={src} />
      <Container maxWidth={maxWidths.medium} py={[4, 5]}>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Tween to={fade(isVisible)}>
              <Flex flexWrap="wrap" justifyContent="space-between">
                <Meta h1={`L'entreprise`} h3={business} />
                <Meta h1="Date" h3={`Le ${date}`} />
                <Meta h1="Partager" h3="TODO" />
              </Flex>
            </Tween>
          )}
        </VisibilitySensor>
      </Container>
      <Container pb={[4, 5]}>
        {images && images.length !== 0 ? (
          <>
            <SlickHelper />
            <Slider {...settings}>
              {images.map(image => (
                <Img key={image.id} fluid={image.childImageSharp.fluid} />
              ))}
            </Slider>
          </>
        ) : (
          <Img fluid={thumbnail.childImageSharp.fluid} />
        )}
      </Container>
      <Container py={[4, 5]}>
        <Title>Description</Title>
        <Text textAlign="justify">{html && <Wysiwyg __html={html} />}</Text>
      </Container>
    </Layout>
  )
}

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
        thumbnail: ImageFuildProps.isRequired,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            ...ImageFuildProps
          })
        )
      }).isRequired,
      html: PropTypes.string
    }).isRequired
  }).isRequired
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        excerpt
        date(formatString: "DD/MM/YYYY")
        business
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          id
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
