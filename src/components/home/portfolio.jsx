import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { Box, Container, Flex, Heading, Text, Button } from '../../utils/rebass'
import Link from '../link'

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
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
  const { fluid } = project.thumbnail.childImageSharp

  return (
    <Container as="section" maxWidth={940} py={[4, 5]}>
      <Heading textAlign="center">{title}</Heading>
      <Text fontStyle="italic" textAlign="center">
        {html}
      </Text>
      <Flex>
        <Box width={1 / 3}>
          <Box bg="fadeOcre" pt={5} pb={4} px={4}>
            <Heading color="white" style={{ textTransform: 'uppercase' }}>
              {project.title}
            </Heading>
          </Box>
          <Button
            as={Link}
            to="/portfolio"
            style={{ textTransform: 'uppercase' }}
          >
            Le portfolio
          </Button>
        </Box>
        <Box width={2 / 3}>
          <Img fluid={fluid} />
        </Box>
      </Flex>
    </Container>
  )
}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
}

export default Portfolio
