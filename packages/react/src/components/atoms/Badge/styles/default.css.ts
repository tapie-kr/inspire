import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const monochrome = style({
  background: colorVars.grayscale.translucent._10,
  color: colorVars.content.emphasized,
});

export const red = style({
  background: colorVars.solid.translucent.red._10,
  color: colorVars.solid.red,
});

export const green = style({
  background: colorVars.solid.translucent.green._10,
  color: colorVars.solid.green,
});

export const blue = style({
  background: colorVars.solid.translucent.blue._10,
  color: colorVars.solid.blue,
});

export const yellow = style({
  background: colorVars.solid.translucent.yellow._10,
  color: colorVars.solid.yellow,
});

export const large = style({
  padding: getShorthandedValue(spacingVars.mini, spacingVars.micro),
  borderRadius: radiusVars.subtle,
});

export const small = style({
  padding: getShorthandedValue(spacingVars.optical, spacingVars.mini),
  borderRadius: radiusVars.sharp,
});
