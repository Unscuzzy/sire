/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { Box } from '../utils/rebass'



const Pattern = ({ children }) => {
  if(typeof window === 'undefined') {
    return null
  }

  const body = document.body
  const html = document.documentElement

  const getHeight = () => Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight )


  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [documentHeight, setDocumentHeight] = useState(getHeight());

  useEffect(() => { 
    function handleResize() {
      setDocumentHeight(getHeight())
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  console.log({windowHeight, documentHeight})

  const data = useStaticQuery(graphql`
    query patternImg {
      pattern: file(relativePath: {eq: "pattern.png"}) {
        childImageSharp {
          fluid(maxWidth:600, quality:1) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { fluid } = data.pattern.childImageSharp
  return (
    <Box position="absolute" top="0" left='0' width={1} height="100%" zIndex='-1'>
        <Box position="relative" width="100%" height="100vh" style={{ border: "1px solid yellow"}}>
            <Box position="absolute" width="100px" zIndex="-1" top="50%" style={{ transform: 'translateY(-50%)'}}>
              <Img fluid={fluid} />
            </Box>
        </Box>
        <Box position="relative" width="100%" height="100vh" style={{ border: "1px solid yellow"}}>
            <Box position="absolute" width="100px" zIndex="-1" top="50%" right="0"  style={{ transform: 'translateY(-50%) rotate(180deg)'}}>
              <Img fluid={fluid} />
            </Box>
        </Box>
    </Box>
  )
}

export default Pattern
