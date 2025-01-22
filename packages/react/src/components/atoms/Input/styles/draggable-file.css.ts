import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { typographyVariantClass, Variant } from '@/components/foundations/Typography/shared';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style([
  // utilityClass.interactive,
  {
    background: colorVars.surface.default,
    color: colorVars.content.default,
    border: getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._10),
    cursor: 'pointer',
    ':hover': {
      borderColor: colorVars.grayscale.translucent._30,
    },
    selectors: {
      '&:has(:focus)': {
        borderColor: colorVars.grayscale.translucent._70,
      },
    },
  },
]);

export const baseDragging = style({
  '::after': {
    outline: getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._30),
    background: colorVars.interaction.hovered,
  },
});

export const baseLarge = style({
  borderRadius: radiusVars.default,
  padding: spacingVars.base,
});

export const baseMedium = style({
  borderRadius: radiusVars.subtle,
  padding: spacingVars.petite,
});

export const iconContainer = style({
  padding: spacingVars.micro,
  background: colorVars.grayscale.translucent._5,
  borderRadius: radiusVars.full,
  aspectRatio: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const inputContainer = style({
  padding: `0 ${spacingVars.mini}`,
  minWidth: 0,
  flex: 1,
  userSelect: 'none',
});

export const input = style({
  display: 'none',
});

export const file = style({
  background: colorVars.surface.elevated,
  borderRadius: radiusVars.subtle,
});

export const fileLarge = style({
  padding: spacingVars.tiny,
});

export const fileMedium = style({
  padding: spacingVars.mini,
});

export const inputLarge = style([typographyVariantClass[Variant.BASE]]);

export const inputMedium = style([typographyVariantClass[Variant.PETITE]]);

export const inputText = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  flex: 1,
});
