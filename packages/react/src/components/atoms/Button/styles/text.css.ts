import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { utilityClass } from '@/lib/style/utility';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style([
  utilityClass.interactive,
  {
    color: colorVars.content.emphasized,
  },
]);

export const large = style({
  padding: getShorthandedValue(spacingVars.tiny, spacingVars.micro),
  borderRadius: radiusVars.default,
});

export const medium = style({
  padding: getShorthandedValue(spacingVars.micro, spacingVars.tiny),
  borderRadius: radiusVars.subtle,
});

export const small = style({
  padding: getShorthandedValue(spacingVars.optical, spacingVars.mini),
  borderRadius: radiusVars.sharp,
});
