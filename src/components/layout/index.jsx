/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../../config/theme'
import GlobalStyle from '../../utils/GlobalStyle'
import Header from './header'
import Footer from './footer'
import SEO from '../seo'
import { Flex } from '../../utils/rebass'
// import Pattern from '../pattern'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
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
  const pattern = {
    backgroundImage: `url(${fluid.src})`,
    backgroundSize: '100% auto',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
    zIndex: '-1'
  }
  const { title, description } = data.site.siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO title={title} />
        <Wrapper flexDirection="column" style={pattern}>
          <Header siteTitle={title} siteDescription={description} />
          <main>{children}</main>
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
