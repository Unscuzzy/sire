import { createGlobalStyle } from 'styled-components'

import normalize from './normalize'
import tachyonsDebug from './tachyons-debug'
import { colors, fonts, transitions } from '../config/theme'

export const isDev = process.env.NODE_ENV === 'development'

const GlobalStyle = createGlobalStyle`

  ${normalize};
  ${isDev && tachyonsDebug};

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5em;
    line-height: 1.6;
    font-family: ${fonts.body};
    font-weight: 400;
    color: ${colors.black};
    background-color: ${colors.white};
    overflow-x: hidden;
  }
  
  a, button {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.black};
    transition: all ${transitions[0]} ease-in-out;
  
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`

export default GlobalStyle
