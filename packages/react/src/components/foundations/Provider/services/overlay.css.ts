import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top:      0,
  left:     0,
  width:    '100%',
  height:   '100%',
  zIndex:   999,
  display:  'none',
});

export const visible = style({ display: 'block' });
