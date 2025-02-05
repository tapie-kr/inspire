import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { typographyVariantClass, Variant } from '@/components/foundations/Typography/shared';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style({
  background:     colorVars.surface.default,
  color:          colorVars.content.default,
  border:         getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._10),
  padding:        spacingVars.moderate,
  borderRadius:   radiusVars.default,
  overflow:       'hidden',
  cursor:         'pointer',
  backgroundSize: 'cover',
  position:       'relative',
  ':hover':       { borderColor: colorVars.grayscale.translucent._30 },
  selectors:      { '&:has(:focus)': { borderColor: colorVars.grayscale.translucent._70 } },
});

export const baseCircle = style({ borderRadius: radiusVars.full });

export const overlay = style({
  display:        'none',
  borderRadius:   radiusVars.pill,
  background:     colorVars.solid.translucent.black._30,
  backdropFilter: 'blur(4px)',
  position:       'absolute',
  padding:        getShorthandedValue(spacingVars.mini, spacingVars.micro),
});

export const overlayVisible = style({ display: 'flex' });
export const baseHasValue = style({ borderColor: colorVars.line.border });

export const iconContainer = style({
  padding:        spacingVars.micro,
  background:     colorVars.grayscale.translucent._5,
  borderRadius:   radiusVars.full,
  aspectRatio:    '1 / 1',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  flexShrink:     0,
});

export const inputContainer = style({
  padding:  `0 ${spacingVars.mini}`,
  minWidth: 0,
  flex:     1,
});

export const input = style({ display: 'none' });

export const file = style({
  background:   colorVars.surface.elevated,
  borderRadius: radiusVars.subtle,
});

export const fileLarge = style({ padding: spacingVars.tiny });
export const fileMedium = style({ padding: spacingVars.mini });
export const inputLarge = style([typographyVariantClass[Variant.BASE]]);
export const inputMedium = style([typographyVariantClass[Variant.PETITE]]);

export const inputText = style({
  overflow:     'hidden',
  textOverflow: 'ellipsis',
  maxWidth:     '100%',
  flex:         1,
});
