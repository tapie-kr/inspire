import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style({
  background:     colorVars.surface.default,
  color:          colorVars.content.default,
  border:         getShorthandedValue('1px', 'solid', colorVars.grayscale.translucent._10),
  cursor:         'pointer',
  display:        'flex',
  justifyContent: 'space-between',
  padding:        spacingVars.micro,
  borderRadius:   radiusVars.subtle,
});

export const baseLarge = style({
  padding:      spacingVars.petite,
  borderRadius: radiusVars.default,
});

export const select = style({
  background:       'transparent',
  border:           'none',
  outline:          'none',
  width:            '100%',
  color:            colorVars.content.emphasized,
  cursor:           'pointer',
  WebkitAppearance: 'none',
  selectors:        {
    '&::placeholder': {
      color:      colorVars.content.muted,
      userSelect: 'none',
    },
    '&::-ms-expand': { display: 'none' },
  },
});

export const value = style({ marginInline: spacingVars.micro });

export const dropdown = style({
  position:     'absolute',
  top:          '100%',
  left:         0,
  right:        0,
  background:   colorVars.surface.default,
  border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.subtle,
  marginTop:    spacingVars.micro,
  padding:      spacingVars.mini,
  maxHeight:    '200px',
  overflowY:    'auto',
  zIndex:       1000,
});

export const option = style({
  padding:      getShorthandedValue(spacingVars.tiny, spacingVars.petite),
  borderRadius: radiusVars.subtle,
  cursor:       'pointer',
  color:        colorVars.content.default,
  selectors:    { '&[data-selected="true"]': {
    background: colorVars.surface.elevated,
    color:      colorVars.content.emphasized,
  } },
});

