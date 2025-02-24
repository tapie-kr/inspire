import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';

export const base = style({
  minWidth:     200,
  padding:      spacingVars.base,
  background:   colorVars.surface.default,
  borderRadius: radiusVars.rounded,
});

