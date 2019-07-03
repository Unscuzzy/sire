import React from 'react'
import PropTypes from 'prop-types'
import { Tween } from 'react-gsap'
import VisibilitySensor from 'react-visibility-sensor'

import { Container, Heading, Text } from '../../utils/rebass'
import ProjectsList from '../projects-list'
import { fadeFromBottom } from '../../utils/animations'
import { maxWidths } from '../../config/theme'

const Portfolio = ({ title, html, portfolio }) => (
  <>
    <Container as="section" maxWidth={maxWidths.medium} py={[4, 5]}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Tween to={fadeFromBottom(isVisible)}>
            <Heading textAlign="center">{title}</Heading>
            <Text fontStyle="italic" textAlign="center">
              {html}
            </Text>
          </Tween>
        )}
      </VisibilitySensor>
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
