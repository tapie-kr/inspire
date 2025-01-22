import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { typographyVariantClass, Variant } from '@/components/foundations/Typography/shared';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style({
  background: colorVars.surface.default,
  color: colorVars.content.default,
  border: getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._10),
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

export const baseLarge = style({
  padding: spacingVars.petite,
  borderRadius: radiusVars.default,
});

export const baseMedium = style({
  padding: spacingVars.micro,
  borderRadius: radiusVars.subtle,
});

export const inputContainer = style({
  padding: `0 ${spacingVars.mini}`,
});

export const input = style({
  width: '100%',
  color: colorVars.content.emphasized,
  '::placeholder': {
    color: colorVars.content.muted,
    userSelect: 'none',
  },
});

export const inputLarge = style([typographyVariantClass[Variant.BASE]]);

export const inputMedium = style([typographyVariantClass[Variant.PETITE]]);
