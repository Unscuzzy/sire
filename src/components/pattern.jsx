/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Pattern = () => {
  const data = useStaticQuery(graphql`
    query patternImg {
      pattern: file(relativePath: { eq: "pattern.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { imageData } = data.pattern.childImageSharp
  const divStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
    zIndex: '-1'
  }
  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor="#040e18"
      style={divStyle}
    >
      <h1>Hello gatsby-background-image</h1>
    </BackgroundImage>
  )
}

export default Pattern
