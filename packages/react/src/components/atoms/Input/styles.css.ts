import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { typographyVariantClass, Variant } from '@/components/foundations/Typography/shared';
import { getShorthandedValue } from '@/utils/color/shorthand';

export const base = style({
  padding: spacingVars.petite,
  background: colorVars.surface.default,
  color: colorVars.content.default,
  border: getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._10),
  borderRadius: radiusVars.default,
  cursor: 'text',
  ':hover': {
    borderColor: colorVars.grayscale.translucent._30,
  },
  selectors: {
    '&:has(:focus)': {
      borderColor: colorVars.grayscale.translucent._70,
    },
  },
});

export const input = style([
  typographyVariantClass[Variant.BASE],
  {
    width: '100%',
    color: colorVars.content.emphasized,
    '::placeholder': {
      color: colorVars.content.muted,
    },
  },
]);
