import { style } from '@vanilla-extract/css';
import { getCSSTransition } from '@/utils/motion/css';

export const children = style({
  position:   'relative',
  opacity:    0,
  transition: getCSSTransition('opacity', 0),
});

export const visible = style({ opacity: 1 });
