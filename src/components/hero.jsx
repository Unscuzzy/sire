import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'
import { Parallax, Background } from 'react-parallax'

import { Box, Heading, Card } from '../utils/rebass'
import { fadeFromBottom } from '../utils/animations'

const Hero = ({ title, src }) => (
  <Box mx={[null, null, 3]}>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Tween to={fadeFromBottom(isVisible)}>
          <Card boxShadow={2}>
            <Parallax strength={-500}>
              <Heading
                py={5}
                textAlign="center"
                fontFamily="lato"
                fontSize={[4, 5, 5, 6]}
                fontWeight={4}
                color="white"
                style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.25)" }}
              >
                {title}
              </Heading>
              <Background>
                <img src={src} />
              </Background>
            </Parallax>
          </Card>
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
