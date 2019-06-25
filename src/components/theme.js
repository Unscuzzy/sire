export const colors = {
  white: `#ffffff`,
  black: `#000000`,
  ocre: `#b8a25d`,
  fadeOcre: `#afa376`,
  ocreLight: `#b7ad85`,
  grey: `#929292`,
  lightGrey: `#f7f4f1`
}

export const fonts = {
  opensans: `'Open Sans', sans-serif`,
  lato: `'Lato', sans-serif`
}

export const space = [0, 4, 8, 16, 32, 64, 128, 256]
export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 90]
export const breakpoints = ['640px', '832px', '960px']

// Helper: return breakpoints without 'px" as number inteads string
export const numberBreakpoints = breakpoints.map(el =>
  Number(el.replace('px', ''))
)

export const transitions = {
  fast: 0.25,
  medium: 0.85,
  slow: 2.5
}

export const mediaQueries = {
  onlySmall: `@media screen and (max-width: ${numberBreakpoints[0]}px)`,
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
}

export const buttons = {
  red: {
    color: colors.white,
    backgroundColor: colors.fushia
  },
  blue: {
    color: colors.white,
    backgroundColor: colors.blue
  }
}

const theme = {
  colors,
  fonts,
  space,
  fontSizes,
  transitions,
  breakpoints,
  numberBreakpoints,
  mediaQueries,
  buttons
}

export default theme
