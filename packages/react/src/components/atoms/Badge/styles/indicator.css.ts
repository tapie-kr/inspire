import { colorVars } from '@/lib/style/contract/color.css';

import { radiusVars } from '@/lib/style/contract/component.css';

import { componentStyle } from '@/styles/layer.css';

export const indicator = componentStyle({
  borderRadius: radiusVars.full,
  aspectRatio:  '1',
  flexShrink:   0,
});

export const monochrome = componentStyle({ background: colorVars.grayscale.translucent._90 });

export const red = componentStyle({ background: colorVars.solid.red });

export const green = componentStyle({ background: colorVars.solid.green });

export const blue = componentStyle({ background: colorVars.solid.blue });

export const yellow = componentStyle({ background: colorVars.solid.yellow });

export const large = componentStyle({
  width:  7,
  height: 7,
});

export const small = componentStyle({
  width:  5,
  height: 5,
});
