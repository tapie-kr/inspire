import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style({
  padding:      spacingVars.petite,
  border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.default,
  cursor:       'pointer',
});

export const input = style({ width: '100%' });
