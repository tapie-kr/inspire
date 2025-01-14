import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';

export const indicator = style({
  borderRadius: radiusVars.full,
  aspectRatio: '1',
  flexShrink: 0,
});

export const monochrome = style({
  background: colorVars.grayscale.translucent._90,
});

export const red = style({
  background: colorVars.solid.red,
});

export const green = style({
  background: colorVars.solid.green,
});

export const blue = style({
  background: colorVars.solid.blue,
});

export const yellow = style({
  background: colorVars.solid.yellow,
});

export const large = style({
  width: 7,
  height: 7,
});

export const small = style({
  width: 5,
  height: 5,
});
