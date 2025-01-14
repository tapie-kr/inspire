import { style } from '@vanilla-extract/css';
import { getMobileMediaQuery } from '@/lib/style/media';

export const typography = style({
  letterSpacing: -0.01,
  transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  ...getMobileMediaQuery({
    letterSpacing: 0,
  }),
});
