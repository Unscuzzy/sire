import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Heading } from '../utils/rebass'

const BackgroundImage = styled(Box).attrs({})``

const Title = styled(Heading).attrs({
  color: 'white'
})``

const Hero = ({ title }) => (
  <BackgroundImage>
    <Title>{title}</Title>
  </BackgroundImage>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired
}

export default Hero
