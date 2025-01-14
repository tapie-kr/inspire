import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { utilityClass } from '@/lib/style/utility';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const primary = style([
  utilityClass.interactiveInverted,
  {
    background: colorVars.surface.inverted.elevated,
    color: colorVars.content.inverted.emphasized,
  },
]);

export const secondary = style([
  utilityClass.interactive,
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
