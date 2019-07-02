import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import uniqid from 'uniqid'
import Img from 'gatsby-image'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween } from 'react-gsap'

import MediaQ from '../responsive'
import { Flex, Box, Heading, Text, Container, Card } from '../../utils/rebass'
import { colors } from '../../config/theme'
import { ImageFuildProps } from '../../utils/propTypes'
import { fadeFromLeft, fadeFromRight } from '../../utils/animations'

const MySlider = styled(Slider)`
  .slick-arrow {
    background: ${colors.brown};
    height: 44px;
    width: 44px;
  }
`

const Presentation = ({ title, html, slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Container as="section" maxWidth={940} py={5}>
      <Flex flexWrap="wrap">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Tween to={fadeFromLeft(isVisible)}>
              <Box px={[3, 4]} width={[1, 1 / 2]}>
                <Heading>{title}</Heading>
                <Text fontStyle="italic">{html}</Text>
              </Box>
            </Tween>
          )}
        </VisibilitySensor>
        <MediaQ type="notSmall">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromRight(isVisible)}>
                <Box width={[1, 1 / 2]}>
                  <MySlider {...settings}>
                    {slides.map(({ title: name, image }) => {
                      const { fluid } = image.childImageSharp
                      return (
                        <Card key={uniqid(name)}>
                          <Img fluid={fluid} />
                          <Heading
                            bg="fadeOcre"
                            color="white"
                            fontSize={3}
                            py={3}
                            textAlign="center"
                          >
                            {name}
                          </Heading>
                        </Card>
                      )
                    })}
                  </MySlider>
                </Box>
              </Tween>
            )}
          </VisibilitySensor>
        </MediaQ>
      </Flex>
    </Container>
  )
}

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: ImageFuildProps
    })
  ).isRequired
}

export default Presentation
