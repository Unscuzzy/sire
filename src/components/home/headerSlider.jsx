import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import { Box, Flex, Container, Heading } from '../../utils/rebass'

const Slider = styled(Box).attrs({})``

const Slide = styled(BackgroundImage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const HeaderSlider = ({ slides }) => (
  <Container>
    <Slider>
      {slides.map(({ image, title }) => {
        const { fluid } = image.childImageSharp
        return (
          <Slide Tag="div" fluid={fluid}>
            <Flex
              pl={[5, 6]}
              pr={[5, 0]}
              width={[1, 3 / 4, 2 / 3]}
              flexDirection="column"
              justifyContent="center"
              height={['300px', '518px']}
            >
              <Heading
                fontFamily="lato"
                fontSize={[4, 5, 5, 6]}
                fontWeight={4}
                color="white"
              >
                {title}
              </Heading>
            </Flex>
          </Slide>
        )
      })}
    </Slider>
  </Container>
)

HeaderSlider.propTypes = {
  slides: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired
}

export default HeaderSlider
