import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box } from '../utils/rebass'
import { mediaQueries } from './theme'

const Container = styled(Box)`
  width: ${p => (p.fullOnSmall ? '100%' : '92%')};
  margin-left: auto;
  margin-right: auto;

  ${mediaQueries.medium} {
    width: ${p => (p.full ? '100%' : '92%')};
  }

  ${mediaQueries.large} {
    max-width: ${p => (p.fluid || p.full ? 'initial' : '1024px')};
  }
`

Container.propTypes = {
  fluid: PropTypes.boolean,
  full: PropTypes.boolean,
  fullOnSmall: PropTypes.boolean
}

Container.defaultProps = {
  fluid: false,
  full: false,
  fullOnSmall: false
}

export default Container
