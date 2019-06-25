import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import tachyonsDebug from '../utils/tachyons-debug'
import { colors, fonts, transitions } from './theme'

export const isDev = process.env.NODE_ENV === 'development'

const GlobalStyle = createGlobalStyle`

  ${styledNormalize};
  ${isDev && tachyonsDebug};

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5em;
    line-height: 1.6;
    font-family: ${fonts.opensans};
    font-weight: 400;
    color: ${colors.black};
    background-color: ${colors.white};
    overflow-x: hidden;
  }
  
  a, button {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.black};
    transition: all ${transitions.fast} ease-in-out;
  
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`

export default GlobalStyle
