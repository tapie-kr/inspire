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
    borderColor: Color.Grayscale.Translucent._30,
  },
  selectors: {
    '&:has(:focus)': {
      borderColor: Color.Grayscale.Translucent._70,
    },
  },
})

export const input = style([TypographyVariantClass[Variant.BASE], {
  width: '100%',
  color: Color.Content.Emphasized,
  '::placeholder': {
    color: Color.Content.Muted,
  },
}])
