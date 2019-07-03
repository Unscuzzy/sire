import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Tween, Timeline } from 'react-gsap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Link as BaseLink,
  Button,
  Heading,
  Box,
  Text,
  Flex,
  Container
} from '../utils/rebass'
import { maxWidths } from '../config/theme'
import MediaQ from '../components/responsive'
import Link from '../components/link'
import {
  fadeFromBottom,
  fadeFromRight,
  fadeFromLeft,
  fadeFromTop,
  growFromBottom,
  discover
} from '../utils/animations'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Box bg="brown" py={5} my={4}>
      <Container>
        <Heading as="h1" color="white" fontSize={[5, 6, 7]}>
          Démo page
        </Heading>
        <BaseLink as={Link} to="/" color="white">
          Go back to the homepage
        </BaseLink>
      </Container>
    </Box>

    <Container>
      <Box mb={4}>
        <Heading fontSize={[4, 5, 6]} as="h2">
          Button
        </Heading>

        <Button as={Link} m={3} to="/">
          Button primary link
        </Button>
        <Button variant="secondary" m={3}>
          Button secondary
        </Button>
      </Box>

      <Box mb={4}>
        <Heading fontSize={[4, 5, 6]} as="h2">
          Responsive
        </Heading>
        <Text fontSize={[2, 3, 4]}>Eesize the window</Text>

        {/* The following API is not minimalist ? */}
        <MediaQ type="mobile">
          <Heading>mobile</Heading>
        </MediaQ>

        <MediaQ type="tablet">
          <Heading>tablet</Heading>
        </MediaQ>

        <MediaQ type="phablet">
          <Heading>phablet</Heading>
        </MediaQ>

        <MediaQ type="desktop">
          <Heading>desktop</Heading>
        </MediaQ>

        <MediaQ type="notSmall">
          <Heading>notSmall</Heading>
        </MediaQ>

        <MediaQ min="tablet">
          <Heading>notSmall2</Heading>
        </MediaQ>

        <MediaQ min="tablet" max="desktop">
          <Heading>Tablet and phablet</Heading>
        </MediaQ>

        <MediaQ max="tablet">
          <Heading>Mobile & Tablet</Heading>
        </MediaQ>
      </Box>

      <Box mb={4}>
        <Heading fontSize={[4, 5, 6]} as="h2">
          Animations onVisibility
        </Heading>

        <Timeline
          target={
            <div>Target element which will be visible and gets tweened</div>
          }
        >
          {/* This Timeline is running on load */}
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
          <Tween to={{ x: '50px' }} />
        </Timeline>
      </Box>

      <Box mb={4}>
        <Heading fontSize={[4, 5, 6]} as="h2">
          Grid
        </Heading>
        <Flex flexWrap="wrap">
          <Box p={2} width={[1, 1 / 2, 1 / 3]}>
            <Box bg="brown">Box</Box>
          </Box>
          <Box p={2} width={[1, 1 / 2, 1 / 3]}>
            <Box bg="brown">Box</Box>
          </Box>
          <Box p={2} width={[1, 1 / 2, 1 / 3]}>
            <Box bg="brown">Box</Box>
          </Box>
          <Box p={2} width={[1, 1 / 2, 1 / 3]}>
            <Box bg="brown">Box</Box>
          </Box>
          <Box p={2} width={[1, 1 / 2, 1 / 3]}>
            <Box bg="brown">Box</Box>
          </Box>
          <Box p={2} width={[1, 1 / 2, 1 / 3]}>
            <Box bg="brown">Box</Box>
          </Box>
        </Flex>
        <Flex flexWrap="wrap">
          <Box p={2} width={1 / 2}>
            <Box bg="brown">Box</Box>
          </Box>
          <Box p={2} width={1 / 2}>
            <Box bg="brown">Box</Box>
          </Box>
        </Flex>
      </Box>
    </Container>

    <Box pb={4}>
      <Container>
        <Heading fontSize={[4, 5, 6]} as="h2">
          Container(s)
        </Heading>
      </Container>

      <Container bg="grey" maxWidth={maxWidths.small}>
        <Heading fontSize={[3, 3, 4]} color="white" textAlign="center" p={4}>
          Small
        </Heading>
      </Container>

      <Container bg="grey" maxWidth={maxWidths.medium}>
        <Heading fontSize={[3, 3, 4]} color="white" textAlign="center" p={4}>
          medium
        </Heading>
      </Container>

      <Container bg="grey" maxWidth={maxWidths.large}>
        <Heading fontSize={[3, 3, 4]} color="white" textAlign="center" p={4}>
          large
        </Heading>
      </Container>

      <Box bg="grey" mx={[null, null, 3]}>
        <Heading fontSize={[3, 3, 4]} color="white" textAlign="center" p={4}>
          Full on mobile and fluid on desktop
        </Heading>
      </Box>
    </Box>
    <Container>
      <Box pb={4}>
        {/* All the next components are animated on screen enter ;) */}
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromTop(isVisible)}>
                <Heading textAlign="center">Hello</Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromBottom(isVisible)}>
                <Heading textAlign="center">Hello</Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={discover(isVisible)}>
                <Heading textAlign="center">Hello</Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromBottom(isVisible)}>
                <Heading textAlign="center">Hello</Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromRight(isVisible)}>
                <Heading py={6} textAlign="center">
                  Hello
                </Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={growFromBottom(isVisible)}>
                <Heading py={6} textAlign="center">
                  Hello
                </Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
        <Box py={6}>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Tween to={fadeFromLeft(isVisible)}>
                <Heading py={6} textAlign="center">
                  Hello
                </Heading>
              </Tween>
            )}
          </VisibilitySensor>
        </Box>
      </Box>
    </Container>
  </Layout>
)

export default SecondPage
