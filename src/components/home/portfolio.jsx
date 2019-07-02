import React from 'react'
import PropTypes from 'prop-types'

import { Container, Heading, Text } from '../../utils/rebass'
import ProjectsList from '../projects-list'

const Portfolio = ({ title, html, portfolio }) => (
  <>
    <Container as="section" maxWidth={940} py={[4, 5]}>
      <Heading textAlign="center">{title}</Heading>
      <Text fontStyle="italic" textAlign="center">
        {html}
      </Text>
    </Container>
    <ProjectsList projectsList={[portfolio]} />
  </>
)

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
}

export default Portfolio
