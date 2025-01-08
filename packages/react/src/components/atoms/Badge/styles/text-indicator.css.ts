import { Color, Radius, Spacing } from '@/constants'
import { style } from '@vanilla-extract/css'

export const textIndicator = style({
  padding: `0 ${Spacing.Mini}`,
  borderRadius: Radius.Pill,
  background: Color.Surface.Inverted.Default,
  color: Color.Content.Inverted.Emphasized,
})

export const emphasized = style({
  background: Color.Solid.Red,
  color: Color.Solid.White,
})
