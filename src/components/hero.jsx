import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'
import { Parallax } from 'react-parallax'

import { Box, Heading, Card } from '../utils/rebass'
import { fromBottom } from '../utils/animations'

const Hero = ({ title, src }) => (
  <VisibilitySensor partialVisibility>
    {({ isVisible }) => (
      <Tween to={fromBottom(isVisible)}>
        <Box mx={[null, null, 3]} boxShadow={2}>
          <Card boxShadow={2}>
            <Parallax strength={-150} bgImage={src}>
              <Heading
                py={5}
                textAlign="center"
                fontFamily="lato"
                fontSize={[4, 5, 5, 6]}
                fontWeight={4}
                color="white"
                style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.25)' }}
              >
                {title}
              </Heading>
            </Parallax>
          </Card>
        </Box>
      </Tween>
    )}
  </VisibilitySensor>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Hero
