import { style } from '@vanilla-extract/css';
import { getMobileMediaQuery } from '@/utils/style/responsive';

export const typography = style({
  color: 'inherit',
  letterSpacing: -0.01,
  transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  ...getMobileMediaQuery({
    letterSpacing: 0,
  }),
});
