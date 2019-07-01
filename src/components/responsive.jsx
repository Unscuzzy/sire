import * as React from 'react'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

import { breakpoints as bp } from '../config/theme'
import { childrenProps } from '../utils/propTypes'

// if min-width is 500, the max-width is 499
const decrement = val => val - 1

// Translator slug => number
const breakpoint = {
  tablet: bp[0],
  phablet: bp[1],
  desktop: bp[2]
}

// Object as props
export const desktop = { minWidth: bp[2] }
export const phablet = { minWidth: bp[1], maxWidth: decrement(bp[2]) }
export const notSmall = { minWidth: bp[0] }
export const tablet = { minWidth: bp[0], maxWidth: decrement(bp[1]) }
export const mobile = { maxWidth: decrement(bp[0]) }

// Group all query props into one parent object
export const screen = { desktop, notSmall, phablet, tablet, mobile }

const MediaQ = ({ children, min, max, type }) => {
  let props = {}
  if (min) props.minWidth = breakpoint[min]
  if (max) props.maxWidth = decrement(breakpoint[max])
  if (type) props = { ...props, ...screen[type] }

  console.log(props)
  return <MediaQuery {...props}>{matches => matches && children}</MediaQuery>
}

MediaQ.propTypes = {
  children: childrenProps.isRequired,
  type: PropTypes.oneOf(['mobile', 'tablet', 'phablet', 'desktop', 'notSmall']),
  min: PropTypes.oneOf(['tablet', 'phablet', 'desktop']),
  max: PropTypes.oneOf(['mobile', 'tablet', 'phablet'])
}

MediaQ.defaultProps = {
  type: undefined,
  min: undefined,
  max: undefined
}

export default MediaQ
