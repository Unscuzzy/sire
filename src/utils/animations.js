/**
 * This file is separate in two parts:
 * 1. Primitives styles
 * 2. Compositions
 */

/*
 * 1. Primitives styles
 */
// From [direction]
export const fromRight = isVisible => ({ x: isVisible ? 0 : 50 })
export const fromLeft = isVisible => ({ x: isVisible ? 0 : -50 })
export const fromTop = isVisible => ({ y: isVisible ? 0 : -50 })
export const fromBottom = isVisible => ({ y: isVisible ? 0 : 50 })

// Fade
export const fade = isVisible => ({ opacity: isVisible ? 1 : 0 })

/*
 * 2. Compositions
 */

// Fade + direction
export const fadeFromLeft = isVisible => ({
  ...fade(isVisible),
  ...fromLeft(isVisible)
})

export const fadeFromRight = isVisible => ({
  ...fade(isVisible),
  ...fromRight(isVisible)
})

export const fadeFromTop = isVisible => ({
  ...fade(isVisible),
  ...fromTop(isVisible)
})

export const fadeFromBottom = isVisible => ({
  ...fade(isVisible),
  ...fromBottom(isVisible)
})
