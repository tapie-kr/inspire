import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const title = style({ padding: getShorthandedValue(spacingVars.petite, 0) });

export const handleBar = style({
  paddingTop:    spacingVars.base,
  paddingBottom: spacingVars.medium,
});

export const bar = style({
  width:        100,
  height:       6,
  background:   colorVars.grayscale.solid._15,
  borderRadius: radiusVars.pill,
});
