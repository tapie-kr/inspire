import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { typographyVariantClass, Variant } from '@/components/foundations/Typography/shared';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style({
  background: colorVars.surface.default,
  color:      colorVars.content.default,
  border:     getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._10),
  cursor:     'pointer',
  ':hover':   { borderColor: colorVars.grayscale.translucent._30 },
  selectors:  { '&:has(:focus)': { borderColor: colorVars.grayscale.translucent._70 } },
});

export const baseLarge = style({ borderRadius: radiusVars.default });

export const baseMedium = style({ borderRadius: radiusVars.subtle });

export const label = style({ cursor: 'pointer' });

export const labelLarge = style({ padding: spacingVars.petite });

export const labelMedium = style({ padding: spacingVars.micro });

export const inputContainer = style({
  padding:  `0 ${spacingVars.mini}`,
  minWidth: 0,
  flex:     1,
});

export const input = style({ display: 'none' });

export const inputText = style({
  overflow:     'hidden',
  textOverflow: 'ellipsis',
  userSelect:   'none',
});

export const inputLarge = style([typographyVariantClass[Variant.BASE]]);

export const inputMedium = style([typographyVariantClass[Variant.PETITE]]);
