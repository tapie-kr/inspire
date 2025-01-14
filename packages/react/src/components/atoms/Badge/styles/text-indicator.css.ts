import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/color/shorthand';

export const textIndicator = style({
  padding: getShorthandedValue(0, spacingVars.mini),
  borderRadius: radiusVars.pill,
  background: colorVars.surface.inverted.default,
  color: colorVars.content.inverted.emphasized,
});

export const emphasized = style({
  background: colorVars.solid.red,
  color: colorVars.solid.white,
});
