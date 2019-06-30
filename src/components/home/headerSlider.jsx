import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import uniqid from 'uniqid'

import { Card, Flex, Container, Heading } from '../../utils/rebass'
import { ImageFuildProps } from '../../utils/propTypes'

const HeaderSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Container>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
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
  slides: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: ImageFuildProps
  }).isRequired
}

export default HeaderSlider
