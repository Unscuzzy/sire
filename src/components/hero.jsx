import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'
import { Parallax } from 'react-parallax'

import { Box, Card, Heading } from '../utils/rebass'
import { fadeFromBottom } from '../utils/animations'

const Hero = ({ title, src }) => (
  <Box mx={[null, null, 3]}>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Tween to={fadeFromBottom(isVisible)}>
            <Parallax bgImage={src} strength={-350} boxShadow={2}>
              <Heading
                py={5} 
                textAlign="center"
                fontFamily="lato"
                fontSize={[4, 5, 5, 6]}
                fontWeight={4}
                color="white"
                style={{textShadow:"1px 1px 10px rgba(0,0,0,0.25)"}}
              >
                {title}
              </Heading>
            </Parallax>
        </Tween>
      )}
    </VisibilitySensor>
  </Box>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Hero
