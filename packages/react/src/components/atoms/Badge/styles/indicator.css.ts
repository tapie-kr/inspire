import { Color, Radius } from '@/constants'
import { style } from '@vanilla-extract/css'

export const indicator = style({
  borderRadius: Radius.Full,
  aspectRatio: '1',
  flexShrink: 0,
})

export const monochrome = style({
  background: Color.Grayscale.Translucent._90,
})

export const red = style({
  background: Color.Solid.Red,
})

export const green = style({
  background: Color.Solid.Green,
})

export const blue = style({
  background: Color.Solid.Blue,
})

export const yellow = style({
  background: Color.Solid.Yellow,
})

export const large = style({
  width: 7,
  height: 7,
})

export const small = style({
  width: 5,
  height: 5,
})
