import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box, Heading } from '../../utils/rebass'

const BackgroundImage = styled(Box).attrs({})``

const Title = styled(Heading).attrs({
  color: 'white'
})``

const Portfolio = ({ title }) => (
  <BackgroundImage>
    <Title>{title}</Title>
  </BackgroundImage>
)

Portfolio.propTypes = {
  title: PropTypes.string.isRequired
}

export default Portfolio
