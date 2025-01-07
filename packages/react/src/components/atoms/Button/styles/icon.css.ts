import { Color, Radius, UtilityClass } from '@/constants'
import { style } from '@vanilla-extract/css'

export const base = style({
  aspectRatio: '1 / 1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const primary = style([base, UtilityClass.InteractiveInverted, {
  background: Color.Surface.Inverted.Elevated,
  color: Color.Content.Inverted.Emphasized,
}])

export const secondary = style([base, UtilityClass.Interactive, {
  background: Color.Surface.Elevated,
}])

export const large = style({
  width: 48,
  borderRadius: Radius.Default,
})

export const medium = style({
  width: 34,
  borderRadius: Radius.Subtle,
})

export const small = style({
  width: 28,
  borderRadius: Radius.Sharp,
})
