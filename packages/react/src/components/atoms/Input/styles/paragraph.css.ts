import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { typographyVariantClass, Variant } from '@/components/foundations/Typography/shared';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const container = style({
  position: 'relative',
});

export const base = style({
  background: colorVars.surface.default,
  color: colorVars.content.emphasized,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  cursor: 'text',
  ':hover': {
    borderColor: colorVars.grayscale.translucent._30,
  },
  ':focus': {
    borderColor: colorVars.grayscale.translucent._70,
  },
  '::placeholder': {
    color: colorVars.content.muted,
  },
  width: '100%',
});

export const baseHorizontal = style({
  width: 'auto',
});

export const baseLarge = style([
  typographyVariantClass[Variant.BASE],
  {
    padding: getShorthandedValue(spacingVars.petite, spacingVars.base),
    paddingBottom: 16,
    borderRadius: radiusVars.default,
    minHeight: 48,
  },
]);

export const baseMedium = style([
  typographyVariantClass[Variant.PETITE],
  {
    padding: getShorthandedValue(spacingVars.micro, spacingVars.petite),
    borderRadius: radiusVars.subtle,
    minHeight: 36,
  },
]);

export const maxLength = style({
  position: 'absolute',
});

export const maxLengthLarge = style({
  bottom: spacingVars.petite,
  right: spacingVars.base,
});

export const maxLengthMedium = style({
  bottom: spacingVars.micro,
  right: spacingVars.petite,
});
