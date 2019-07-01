import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

import Link from '../link'
import {
  Container,
  Heading,
  Box,
  Link as BaseLink,
  Flex
} from '../../utils/rebass'
import { colors } from '../../config/theme'

const Titles = styled(Heading).attrs({
  color: 'white',
  fontWeight: 4,
  fontFamily: 'lato'
})`
  line-height: 1;
`

const MenuItem = styled(BaseLink).attrs({
  py: 3,
  px: 2
})`
  color: ${colors.grey};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.8px;

  &.active {
    color: ${colors.black};
    font-weight: 400;
  }
`

const Header = ({ siteTitle, siteDescription, links }) => (
  <header>
    <Container>
      <Box bg="ocre" textAlign="center">
        <Titles fontSize={[9, 10]}>{siteTitle}</Titles>
        <Titles fontSize={[3, 4]}>{siteDescription}</Titles>
      </Box>
      <Flex justifyContent="center">
        {links &&
          links.map(({ label, link }) => (
            <MenuItem as={Link} to={link} key={uniqid(link)}>
              {label}
            </MenuItem>
          ))}
      </Flex>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
}

Header.defaultProps = {
  links: [
    { label: 'Accueil', link: '/' },
    // { label: 'à propos', link: '/a-propos' },
    // { label: 'Portfolio', link: '/portfolio' },
    // { label: 'Contact', link: '/contact' },
    { label: 'Demo', link: '/demo' }
  ]
}

export default Header
