import { colorVars } from '@/lib/style/contract/color.css';

import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { componentStyle } from '@/styles/layer.css';

export const segmentGroup = componentStyle({
  padding:      spacingVars.mini,
  background:   colorVars.surface.elevated,
  borderRadius: radiusVars.default,
});
