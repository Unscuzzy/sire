import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Container, Flex, Heading, Text } from '../../utils/rebass'

const Portfolio = ({ title, html, portfolio }) => {
  const data = useStaticQuery(graphql`
    query PortfolioData {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "projects" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              templateKey
              excerpt
              business
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.title === portfolio
  )
  const project = projects[0].node.frontmatter

  return (
    <Container as="section" maxWidth={940}>
      <Heading textAlign="center">{title}</Heading>
      <Text fontStyle="italic" textAlign="center">
        {html}
      </Text>
      <Flex flexWrap="wrap">{console.log(project)}</Flex>
    </Container>
  )
}

/*
{portfolio &&
      portfolio.map(({ step }, i) => (
        <Flex width={[1, 1 / 2, 1 / 4]} ph={[3, 3, 5]}>
          <Heading>{i + 1}.</Heading>
          <Text fontStyle="italic">{step}</Text>
        </Flex>
      ))}
 */

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
}

export default Portfolio
