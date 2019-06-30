import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Container, Heading, Text } from '../../utils/rebass'

const CreatingProcess = ({ title, process }) => (
  <Container as="section">
    <Heading textAlign="center">{title}</Heading>
    <Flex flexWrap="wrap">
      {process &&
        process.map(({ step }, i) => (
          <Flex width={[1, 1 / 2, 1 / 4]} ph={[3, 3, 5]}>
            <Heading>{i + 1}.</Heading>
            <Text fontStyle="italic">{step}</Text>
          </Flex>
        ))}
    </Flex>
  </Container>
)

CreatingProcess.propTypes = {
  title: PropTypes.string.isRequired,
  process: PropTypes.arrayOf({
    step: PropTypes.string.isRequired
  }).isRequired
}

export default CreatingProcess
