import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import uniqid from 'uniqid'

import { Card, Flex, Box, Heading, Container } from '../../utils/rebass'
import { ImageFuildProps } from '../../utils/propTypes'
import SlickHelper from '../../utils/slick-helper'
import { maxWidths } from '../../config/theme'

const HeaderSlider = ({ slides }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Box as="section" mx={[null, null, 3]}>
      <SlickHelper />
      <Card boxShadow={2}>
        <Slider {...settings}>
          {slides.map(({ image, title }) => {
            const { src } = image.childImageSharp.fluid
            return (
              <Card backgroundImage={`url(${src})`} key={uniqid(title)}>
                <Container as="section" maxWidth={maxWidths.medium} py={5}>
                  <Flex flexWrap="wrap" mx={[-3, -4]} height={['300px', '350px']}>
                    <Heading
                      fontFamily="lato"
                      fontSize={[4, 5, 5, 6]}
                      fontWeight={4}
                      color="white"
                      px={[3, 4]}
                      display="flex"
                      flexDirection="column"
                      textAlign="center"
                      justifyContent="center"
                    >
                      {title}
                    </Heading>
                  </Flex>
                </Container>
              </Card>
            )
          })}
        </Slider>
      </Card>
    </Box>
  )
}

HeaderSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: ImageFuildProps
    })
  ).isRequired
}

export default HeaderSlider
