import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'

import { Box, Container, Flex, Heading } from '../utils/rebass'

const ProjectItem = ({ title, fluid, index }) => {
  const reverse = index % 2 === 0 ? `row` : `row-reverse`
  return (
    <Container as="section" maxWidth={940} py={[4, 5]}>
      <Flex flexDirection={reverse} flexWrap="wrap">
        <Box width={[1, 1 / 3]} pt={4}>
          <Box bg="fadeOcre" pt={5} pb={4} px={[3, 3, 4]}>
            <Heading fontSize={[2, 3, 4]} color="white" style={{ textTransform: 'uppercase' }}>
              {title}
            </Heading>
          </Box>
        </Box>
        <Box width={[1, 2 / 3]}>
          <Img fluid={fluid} />
        </Box>
      </Flex>
    </Container>
  )
}

ProjectItem.propTypes = {
  fluid: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default ProjectItem
