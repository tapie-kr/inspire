import { colorVars } from '@/lib/style/contract/color.css';

import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { componentStyle } from '@/styles/layer.css';

import { utilityClass } from '@/lib/style/utility';

export const segment = componentStyle([
  utilityClass.interactive,
  {
    padding:      spacingVars.tiny,
    color:        colorVars.content.default,
    borderRadius: radiusVars.sharp,
  },
]);

export const active = componentStyle({
  background: colorVars.grayscale.translucent._5,
  color:      colorVars.content.emphasized,
});
