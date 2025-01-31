import { colorVars } from '@/lib/style/contract/color.css';

import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { componentStyle } from '@/styles/layer.css';

import { utilityClass } from '@/lib/style/utility';

import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = componentStyle([
  utilityClass.interactiveInverted,
  {
    padding:      getShorthandedValue(spacingVars.tiny, spacingVars.petite),
    borderRadius: radiusVars.subtle,
    background:   colorVars.surface.elevated,
    color:        colorVars.content.default,
  },
]);

export const active = componentStyle({
  background: colorVars.surface.inverted.elevated,
  color:      colorVars.content.inverted.emphasized,
});
