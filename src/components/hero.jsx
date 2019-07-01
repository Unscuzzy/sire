import React from 'react'
import PropTypes from 'prop-types'

import { Container, Card, Heading } from '../utils/rebass'

const Hero = ({ title, src }) => (
  <Container>
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
  </Container>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Hero
