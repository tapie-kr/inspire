import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';
import { componentStyle } from '@/styles/layer.css';

import { getShorthandedValue } from '@/utils/style/shorthand';

export const monochrome = componentStyle({
  background: colorVars.grayscale.translucent._10,
  color: colorVars.content.emphasized,
});

export const red = componentStyle({
  background: colorVars.solid.translucent.red._10,
  color: colorVars.solid.red,
});

export const green = componentStyle({
  background: colorVars.solid.translucent.green._10,
  color: colorVars.solid.green,
});

export const blue = componentStyle({
  background: colorVars.solid.translucent.blue._10,
  color: colorVars.solid.blue,
});

export const yellow = componentStyle({
  background: colorVars.solid.translucent.yellow._10,
  color: colorVars.solid.yellow,
});

export const large = componentStyle({
  padding: getShorthandedValue(spacingVars.mini, spacingVars.micro),
  borderRadius: radiusVars.subtle,
});

export const small = componentStyle({
  padding: getShorthandedValue(spacingVars.optical, spacingVars.mini),
  borderRadius: radiusVars.sharp,
});
