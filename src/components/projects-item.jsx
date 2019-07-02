import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'

import { Box, Container, Flex, Heading } from '../utils/rebass'
import {
  fadeFromRight,
  fadeFromLeft,
  fadeFromBottom
} from '../utils/animations'

const ProjectItem = ({ title, fluid, index, total }) => {
  const reverse = index % 2 === 0 ? `row` : `row-reverse`
  const animationDirection = isVisible =>
    index % 2 === 0 ? fadeFromRight(isVisible) : fadeFromLeft(isVisible)
  const animation = isVisible =>
    total === 1 ? fadeFromBottom(isVisible) : animationDirection(isVisible)
  return (
    <Container as="section" maxWidth={940} py={[4, 5]}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Tween to={animation(isVisible)}>
            <Flex flexDirection={reverse} flexWrap="wrap">
              <Box width={[1, 1 / 3]} pt={4}>
                <Box bg="fadeOcre" pt={5} pb={4} px={[3, 3, 4]}>
                  <Heading
                    fontSize={[2, 3, 4]}
                    color="white"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {title}
                  </Heading>
                </Box>
              </Box>
              <Box width={[1, 2 / 3]}>
                <Img fluid={fluid} />
              </Box>
            </Flex>
          </Tween>
        )}
      </VisibilitySensor>
    </Container>
  )
}

ProjectItem.propTypes = {
  fluid: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default ProjectItem
