import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  flexShrink: 0,
});

export const content = style({
  position: 'absolute',
  top: 0,
  left: 0,
});
