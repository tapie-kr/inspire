import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';
import { componentStyle } from '@/styles/layer.css';

import { utilityClass } from '@/lib/style/utility';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const primary = componentStyle([
  utilityClass.interactiveInverted,
  {
    background: colorVars.surface.inverted.elevated,
    color: colorVars.content.inverted.emphasized,
  },
]);

export const secondary = componentStyle([
  utilityClass.interactive,
  {
    background: colorVars.surface.elevated,
    color: colorVars.content.emphasized,
  },
]);

export const large = componentStyle({
  padding: getShorthandedValue(spacingVars.petite, spacingVars.base),
  borderRadius: radiusVars.default,
});

export const medium = componentStyle({
  padding: getShorthandedValue(spacingVars.micro, spacingVars.base),
  borderRadius: radiusVars.subtle,
});

export const small = componentStyle({
  padding: getShorthandedValue(spacingVars.tiny, spacingVars.petite),
  borderRadius: radiusVars.sharp,
});
