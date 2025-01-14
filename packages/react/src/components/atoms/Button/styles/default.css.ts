import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { UtilityClass } from '@/constants/class';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const primary = style([
  UtilityClass.InteractiveInverted,
  {
    background: colorVars.surface.inverted.elevated,
    color: colorVars.content.inverted.emphasized,
  },
]);

export const secondary = style([
  UtilityClass.Interactive,
  {
    background: colorVars.surface.elevated,
    color: colorVars.content.emphasized,
  },
]);

export const large = style({
  padding: getShorthandedValue(spacingVars.petite, spacingVars.base),
  borderRadius: radiusVars.default,
});

export const medium = style({
  padding: getShorthandedValue(spacingVars.micro, spacingVars.base),
  borderRadius: radiusVars.subtle,
});

export const small = style({
  padding: getShorthandedValue(spacingVars.optical, spacingVars.micro),
  borderRadius: radiusVars.subtle,
});
