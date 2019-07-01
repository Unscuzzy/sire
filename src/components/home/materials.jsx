import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Flex, Container, Heading, Text, Card, Box } from '../../utils/rebass'
import { ImageFuildProps } from '../../utils/propTypes'

const Square = styled(Box)`
  width: 100%;
  :after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const Image = styled(Img)`
  min-width: 100%;
  min-height: 100%;
  height: auto;
`

const Materials = ({ title, materials }) => (
  <Container as="section" py={[4, 5]}>
    <Heading textAlign="center">{title}</Heading>
    <Flex flexWrap="wrap">
      {materials &&
        materials.map(({ title: subTitle, content, image }, i) => {
          const { fluid } = image.childImageSharp
          const direction = i % 2 === 0 ? 'column' : 'column-reverse'
          return (
            <Card width={[1, 1 / 3]} px={[3, 3, 4]} py={4}>
              <Flex flexDirection={direction}>
                <Square position="relative">
                  <Box
                    position="absolute"
                    top="0"
                    bottom="0"
                    right="0"
                    left="0"
                    width={1}
                  >
                    <Image fluid={fluid} />
                  </Box>
                </Square>
                <Box bg="lightGrey" py={[4, 5]} px={[3, 3, 4]}>
                  <Heading
                    fontSize={[3, 4]}
                    textAlign="center"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {subTitle}
                  </Heading>
                  <Text fontStyle="italic">{content}</Text>
                </Box>
              </Flex>
            </Card>
          )
        })}
    </Flex>
  </Container>
)

Materials.propTypes = {
  title: PropTypes.string.isRequired,
  materials: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: ImageFuildProps,
    content: PropTypes.string
  }).isRequired
}

export default Materials
