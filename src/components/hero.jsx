import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'

import { Container, Card, Heading } from '../utils/rebass'
import { fadeFromBottom } from '../utils/animations'

const Hero = ({ title, src }) => (
  <Container>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Tween to={fadeFromBottom(isVisible)}>
          <Card py={5} backgroundImage={`url(${src})`}>
            <Heading
              textAlign="center"
              fontFamily="lato"
              fontSize={[4, 5, 5, 6]}
              fontWeight={4}
              color="white"
            >
              {title}
            </Heading>
          </Card>
        </Tween>
      )}
    </VisibilitySensor>
  </Container>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Hero
