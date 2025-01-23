import { style } from '@vanilla-extract/css';
import { getCSSTransition } from '@/lib/animation/css';

export const summary = style({
  listStyleType: 'none',
  userSelect: 'none',
});

export const icon = style({
  transition: getCSSTransition('transform', 0.2),
});

export const rotateIcon = style({
  transform: 'rotate(-90deg)',
});
