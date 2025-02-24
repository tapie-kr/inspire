import { style } from '@vanilla-extract/css';

export const backdrop = style({
  position:       'absolute',
  top:            0,
  bottom:         0,
  width:          '100%',
  height:         '100%',
  transition:     'none',
  zIndex:         1000,
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
});

export const content = style({ display: 'contents' });
