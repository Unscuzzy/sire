import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import uniqid from 'uniqid'

import { Card, Flex, Container, Heading } from '../../utils/rebass'
import { ImageFuildProps } from '../../utils/propTypes'
import SlickHelper from '../../utils/slick-helper'

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
    <Container as="section">
      <SlickHelper />
      <Slider {...settings}>
        {slides.map(({ image, title }) => {
          const { src } = image.childImageSharp.fluid
          return (
            <Card backgroundImage={`url(${src})`} key={uniqid(title)}>
              <Flex
                pl={[5, 6]}
                pr={[5, 0]}
                width={[1, 3 / 4, 2 / 3]}
                flexDirection="column"
                justifyContent="center"
                height={['300px', '518px']}
                zIndex="2"
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
            </Card>
          )
        })}
      </Slider>
    </Container>
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
