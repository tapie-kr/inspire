import { style } from '@vanilla-extract/css'

export const monospaced = style({
  fontFamily: ['Geist Mono', 'monospace'],
})

export const transition = style({
  transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
})
