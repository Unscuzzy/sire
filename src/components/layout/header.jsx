import PropTypes from 'prop-types'
import React from 'react'

import Link from '../link'
import { Container, Heading, Link as BaseLink } from '../../utils/rebass'

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Heading>
        <BaseLink as={Link} to="/">
          {siteTitle}
        </BaseLink>
      </Heading>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
