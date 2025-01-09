import { Variant, TypographyVariantClass } from '@/components/foundations/Typography/shared'
import { Color, Radius, Spacing } from '@/constants'
import { style } from '@vanilla-extract/css'

export const base = style({
  padding: Spacing.Petite,
  background: Color.Surface.Default,
  color: Color.Content.Default,
  border: `1px solid ${Color.Grayscale.Translucent._10}`,
  borderRadius: Radius.Default,
  cursor: 'text',
  ':hover': {
    borderColor: Color.Grayscale.Translucent._50,
  },
  selectors: {
    '&:has(:focus)': {
      borderColor: Color.Grayscale.Translucent._90,
    },
  },
})

export const input = style([TypographyVariantClass[Variant.BASE], {
  color: Color.Content.Emphasized,
  '::placeholder': {
    color: Color.Content.Muted,
  },
}])
