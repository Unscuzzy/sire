/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from '../utils/rebass'

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

  const { fluid } = data.pattern.childImageSharp
  const divStyle = {
    backgroundImage: `url(${fluid})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
    zIndex: '-1'
  }
  console.log(fluid)
  return <Box style={divStyle} className="test" />
}

export default Pattern
