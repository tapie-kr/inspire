import { Color, Radius, Spacing, UtilityClass } from '@/constants'
import { style } from '@vanilla-extract/css'

export const base = style([UtilityClass.Interactive, {
  color: Color.Content.Emphasized,
  selectors: {
    '&:disabled::after': {
      background: 'transparent',
    },
  },
}])

export const large = style({
  padding: `${Spacing.Tiny} ${Spacing.Micro}`,
  borderRadius: Radius.Default,
})

export const medium = style({
  padding: `${Spacing.Mini} ${Spacing.Tiny}`,
  borderRadius: Radius.Subtle,
})

export const small = style({
  padding: `${Spacing.Optical} ${Spacing.Mini}`,
  borderRadius: Radius.Sharp,
})
