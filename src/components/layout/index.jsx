/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyle from '../GlobalStyle'
import Header from './header'
import SEO from '../seo'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO title={title} />
        <Header siteTitle={title} />
        <main>{children}</main>
        <footer>
          © Copyright {new Date().getFullYear()} - {title}
        </footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
