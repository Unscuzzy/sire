/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Img from "gatsby-image"

import theme from '../../config/theme'
import GlobalStyle from '../../utils/GlobalStyle'
import Header from './header'
import Footer from './footer'
import SEO from '../seo'
import { Flex, Box } from '../../utils/rebass'
import Pattern from '../pattern'



const Layout = ({ children }) => {


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
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO title={title} />
        <Wrapper flexDirection="column">
          <Header siteTitle={title} siteDescription={description} />
          <main>{children}</main>
          <Pattern />
          <Footer title={title} />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

// Keep the footer at bottom
const Wrapper = styled(Flex)`
  min-height: 100vh;
  main {
    flex: 1;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
