/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { Box } from '../utils/rebass'



const Pattern = ({ pattern }) => {

  const data = useStaticQuery(graphql`
    query patternImg {
      pattern: file(relativePath: {eq: "pattern.png"}) {
        childImageSharp {
          fluid(maxWidth:1920, quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { fluid } = data.pattern.childImageSharp
  var divStyle = {
    backgroundImage: `url(${fluid})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
    zIndex: '-1'
  };
  return (
    <BackgroundImage
      fluid={fluid}
      position="absolute"
      top="0"
      left='0'
      width={1}
      height="100%"
      style={{divStyle}}
    />
  )
}


export default Pattern
