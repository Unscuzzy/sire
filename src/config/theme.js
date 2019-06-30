/**
 * Theme
 *
 * Build using Theme UI specifications
 * Used by styled-system functions
 * Injected via themeProvider from styled-components
 *
 *
 * Key Reference (styled-system)
 *
 * Used here
 *
 space	        margin, margin-top, margin-right, margin-bottom, margin-left,
                padding, padding-top, padding-right, padding-bottom, padding-left,
                grid-gap, grid-column-gap, grid-row-gap
 fontSizes	    font-size
 colors	        color, background-color, border-color
 fonts	        font-family
 fontWeights	  font-weight
 lineHeights	  line-height
 radii	        border-radius
 shadows	      box-shadow, text-shadow
 *
 *
 * Available in styled-system but not used here:
 *
 letterSpacings	letter-spacing
 sizes	        width, height, min-width, max-width, min-height, max-height
 borders	      border, border-top, border-right, border-bottom, border-left
 borderWidths	  border-width
 borderStyles	  border-style
 zIndices	      z-index
 *
 *
 * Additional custom theme props
 *
 transitions
 breakpoints
 mediaQueries
 buttons
 *
 *
 * Enjoy & extends it !!
 */

export const space = [0, 4, 8, 16, 32, 64, 128, 256]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 90, 120]

export const colors = {
  black: `#000000`,
  grey: `#929292`,
  lightGrey: `#f7f4f1`,
  white: `#ffffff`,

  brown: `#a48249`,
  ocre: `#b8a25d`,
  fadeOcre: `#afa376`,
  ocreLight: `#b7ad85`
}

export const fonts = {
  open: `'Open Sans', sans-serif`,
  lato: `'Lato', sans-serif`
}

export const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
}

export const radii = [0, 1, 2, 4, 8, '100%', 9999]

export const shadows = [
  '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
  '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
  '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
]

/*
Next custom styles
 */

export const transitions = [0.25, 0.5, 1, 2.5]

export const breakpoints = [640, 832, 960]

export const mediaQueries = {
  onlySmall: `@media screen and (max-width: ${breakpoints[0] - 1}px)`,
  small: `@media screen and (min-width: ${breakpoints[0]}px)`,
  medium: `@media screen and (min-width: ${breakpoints[1]}px)`,
  large: `@media screen and (min-width: ${breakpoints[2]}px)`
}

export const buttons = {
  primary: {
    color: colors.brown,
    backgroundColor: colors.white,
    borderColor: colors.brown
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.brown,
    borderColor: colors.brown
  }
}

// Push all styles in a global object
const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  transitions,
  mediaQueries,
  buttons
}

export default theme
