import { layer, style } from '@vanilla-extract/css';

export const reset = layer('reset');
export const stack = layer('stack');

export const base = style({
  '@layer': {
    [reset]: {
      width: 'fit-content',
      height: 'fit-content',
      display: 'flex',
    },
  },
});
