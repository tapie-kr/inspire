import { Color, Radius, Spacing, UtilityClass } from '@/constants'
import { style } from '@vanilla-extract/css'

export const base = style([UtilityClass.InteractiveInverted, {
  padding: `${Spacing.Tiny} ${Spacing.Base}`,
  borderRadius: Radius.Subtle,
  background: Color.Surface.Elevated,
  color: Color.Content.Default,
}])

export const active = style({
  background: Color.Surface.Inverted.Elevated,
  color: Color.Content.Inverted.Emphasized,
})
