import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const square = style({
  width: 36,
  height: 36,
  flexShrink: 0,
  aspectRatio: '1 / 1',
  color: colorVars.content.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: getShorthandedValue('1px', 'solid', 'transparent'),
  borderRadius: radiusVars.default,
});

export const active = style({
  color: colorVars.content.emphasized,
  borderColor: colorVars.line.border,
});
