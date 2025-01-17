import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';
import { componentStyle } from '@/styles/layer.css';

import { getShorthandedValue } from '@/utils/style/shorthand';

export const textIndicator = componentStyle({
  padding: getShorthandedValue(0, spacingVars.mini),
  borderRadius: radiusVars.pill,
  background: colorVars.surface.inverted.default,
  color: colorVars.content.inverted.emphasized,
});

export const emphasized = componentStyle({
  background: colorVars.solid.red,
  color: colorVars.solid.white,
});
