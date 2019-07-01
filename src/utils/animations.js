/**
 * This file is separate in two parts:
 * 1. Primitives styles
 * 2. Compositions
 */

/*
 * 1. Primitives animations styles functions
 */
// From [direction]
export const fromRight = isVisible => ({ x: isVisible ? 0 : 50 })
export const fromLeft = isVisible => ({ x: isVisible ? 0 : -50 })
export const fromTop = isVisible => ({ y: isVisible ? 0 : -100 })
export const fromBottom = isVisible => ({ y: isVisible ? 0 : 100 })

// Effect on/off
export const fade = isVisible => ({ opacity: isVisible ? 1 : 0 })
export const grow = isVisible => ({ scale: isVisible ? 1 : 0.2 })

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

// Grow + direction
export const growFromBottom = isVisible => ({
  ...grow(isVisible),
  ...fromBottom(isVisible)
})

// Signature
export const discover = isVisible => ({
  ...grow(isVisible),
  ...fade(isVisible),
  ...fromBottom(isVisible)
})
