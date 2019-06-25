import * as React from 'react'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

import { numberBreakpoints as bp } from '../components/theme'
import { childrenProps } from './propTypes'

/*
This file used as helper for responsive

The problem is when the breakpoint is 500px for example
The min-width is 500 and the max-width is 499
The following components solve it
 */
const decrement = val => val - 1

export const desktop = { minWidth: bp[2] }
export const phablet = { minWidth: bp[1], maxWidth: decrement(bp[2]) }
export const notSmall = { minWidth: bp[0] }
export const tablet = { minWidth: bp[0], maxWidth: decrement(bp[1]) }
export const mobile = { maxWidth: decrement(bp[0]) }

export const screen = { desktop, notSmall, phablet, tablet, mobile }

const MediaQ = ({ type, children }) => {
  const query = screen[type]
  return <MediaQuery {...query}>{matches => matches && children}</MediaQuery>
}

MediaQ.propTypes = {
  children: childrenProps.isRequired,
  type: PropTypes.oneOf(['mobile', 'tablet', 'phablet', 'desktop', 'notSmall'])
    .isRequired
}

export default MediaQ
