import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { UtilityClass } from '@/constants/class';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style([
  UtilityClass.InteractiveInverted,
  {
    padding: getShorthandedValue(spacingVars.tiny, spacingVars.base),
    borderRadius: radiusVars.subtle,
    background: colorVars.surface.elevated,
    color: colorVars.content.default,
  },
]);

export const active = style({
  background: colorVars.surface.inverted.elevated,
  color: colorVars.content.inverted.emphasized,
});
