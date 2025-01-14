import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { utilityClass } from '@/lib/style/utility';

export const base = style({
  aspectRatio: '1 / 1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const primary = style([
  base,
  utilityClass.interactiveInverted,
  {
    background: colorVars.surface.inverted.elevated,
    color: colorVars.content.inverted.emphasized,
  },
]);

export const secondary = style([
  base,
  utilityClass.interactive,
  {
    background: colorVars.surface.elevated,
  },
]);

export const large = style({
  width: 48,
  borderRadius: radiusVars.default,
});

export const medium = style({
  width: 34,
  borderRadius: radiusVars.subtle,
});

export const small = style({
  width: 28,
  borderRadius: radiusVars.subtle,
});
