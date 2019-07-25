import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'

import { Flex, Container, Heading, Text } from '../../utils/rebass'
import { fadeFromBottom } from '../../utils/animations'

const CreatingProcess = ({ title, process }) => (
  <Container as="section">
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Tween to={fadeFromBottom(isVisible)}>
          <Heading textAlign="center">{title}</Heading>
          <Flex flexWrap="wrap">
            {process &&
              process.map(({ step }, i) => (
                <Flex mt={ i % 2 !== 0 ? 5 : 3 } key={uniqid(i)} width={[1, 1 / 2, 1 / 4]} ph={[3, 3, 5]}>
                  <Heading>{i + 1}.</Heading>
                  <Text fontStyle="italic">{step}</Text>
                </Flex>
              ))}
          </Flex>
        </Tween>
      )}
    </VisibilitySensor>
  </Container>
)

CreatingProcess.propTypes = {
  title: PropTypes.string.isRequired,
  process: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CreatingProcess
