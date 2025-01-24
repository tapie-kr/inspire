import { style } from '@vanilla-extract/css';
import { getCSSTransition } from '@/utils/motion/css';

export const details = style({
  zIndex: 1,
});

export const summary = style({
  listStyleType: 'none',
  cursor: 'pointer',
});

export const titleContainer = style({
  userSelect: 'none',
  transition: getCSSTransition('transform', 0.2),
  selectors: {
    [`${details}:active &`]: {
      transform: 'scale(0.98)',
    },
  },
});

export const icon = style({
  transition: getCSSTransition('transform', 0.2),
});

export const rotateIcon = style({
  transform: 'rotate(-90deg)',
});

export const content = style({});
