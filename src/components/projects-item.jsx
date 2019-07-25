import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'

import { Box, Container, Flex, Heading } from '../utils/rebass'
import { maxWidths } from '../config/theme'
import {
  fadeFromRight,
  fadeFromLeft,
  fadeFromBottom
} from '../utils/animations'
import Link from './link'

const ProjectItem = ({ title, fluid, index, total, slug }) => {
  const reverse = index % 2 === 0 ? `row` : `row-reverse`
  const animationDirection = isVisible =>
    index % 2 === 0 ? fadeFromRight(isVisible) : fadeFromLeft(isVisible)
  const animation = isVisible =>
    total === 1 ? fadeFromBottom(isVisible) : animationDirection(isVisible)
  return (
    <Container as="section" maxWidth={maxWidths.medium} py={[4, 5]}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Tween to={animation(isVisible)}>
            <Link to={`/portfolio/${slug}`}>
              <Flex flexDirection={reverse} flexWrap="wrap">
                <Box width={[1, 1 / 3]} pt={4}>
                  <Box bg="fadeOcre" py={[5, 6]} px={[3, 3, 4]} mr={[0,-3,-5]} zIndex="999" position="relative">
                    <Box bg="white" width={1 / 2} height={1} mb={[3, 3, 4]}></Box>
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
            </Link>
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
  total: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
}

export default ProjectItem
