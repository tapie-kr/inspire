import { Color, Radius, Spacing, UtilityClass } from '@/constants'
import { style } from '@vanilla-extract/css'

export const primary = style([UtilityClass.InteractiveInverted, {
  background: Color.Surface.Inverted.Elevated,
  color: Color.Content.Inverted.Emphasized,
}])

export const secondary = style([UtilityClass.Interactive, {
  background: Color.Surface.Elevated,
  color: Color.Content.Emphasized,
}])

export const large = style({
  padding: `${Spacing.Petite} ${Spacing.Base}`,
  borderRadius: Radius.Default,
})

export const medium = style({
  padding: `${Spacing.Micro} ${Spacing.Base}`,
  borderRadius: Radius.Subtle,
})

export const small = style({
  padding: `${Spacing.Tiny} ${Spacing.Petite}`,
  borderRadius: Radius.Sharp,
})
