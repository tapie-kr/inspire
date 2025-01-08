import { Color, Radius, Spacing } from '@/constants'
import { style } from '@vanilla-extract/css'

export const monochrome = style({
  background: Color.Grayscale.Translucent._10,
  color: Color.Content.Emphasized,
})

export const red = style({
  background: Color.Solid.Translucent.Red._10,
  color: Color.Solid.Red,
})

export const green = style({
  background: Color.Solid.Translucent.Green._10,
  color: Color.Solid.Green,
})

export const blue = style({
  background: Color.Solid.Translucent.Blue._10,
  color: Color.Solid.Blue,
})

export const yellow = style({
  background: Color.Solid.Translucent.Yellow._10,
  color: Color.Solid.Yellow,
})

export const large = style({
  padding: `${Spacing.Mini} ${Spacing.Micro}`,
  borderRadius: Radius.Subtle,
})

export const small = style({
  padding: `${Spacing.Optical} ${Spacing.Mini}`,
  borderRadius: Radius.Sharp,
})
