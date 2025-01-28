import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';
import { componentStyle } from '@/styles/layer.css';

export const segment = componentStyle({
  padding: spacingVars.tiny,
  color: colorVars.content.default,
  borderRadius: radiusVars.sharp,
});

export const active = componentStyle({
  background: colorVars.grayscale.translucent._5,
  color: colorVars.content.emphasized,
});
