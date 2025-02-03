import { style } from '@vanilla-extract/css';
import { getCSSTransition } from '@/utils/motion/css';

export const children = style({
  opacity:    0,
  transition: getCSSTransition('opacity', 0),
});

export const visible = style({ opacity: 1 });
