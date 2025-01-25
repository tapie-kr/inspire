import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});
