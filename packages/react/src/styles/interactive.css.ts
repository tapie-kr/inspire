import { utilityStyle } from './layer.css';
import { colorVars } from '@/lib/style/contract/color.css';

import { getCSSTransition } from '@/utils/motion/css';

export const interactive = utilityStyle({
  position:   'relative',
  overflow:   'hidden',
  userSelect: 'none',
  cursor:     'pointer',
  transition: getCSSTransition('transform', 0.2),
  '::after':  {
    content:    '',
    position:   'absolute',
    top:        0,
    left:       0,
    width:      '100%',
    height:     '100%',
    background: 'transparent',
    transition: getCSSTransition('background', 0.2),
  },
  ':disabled': {
    cursor: 'not-allowed',
    color:  colorVars.content.muted,
  },
  selectors: {
    '&:not(:disabled):active':        { transform: 'scale(0.98)' },
    '&:disabled::after':              { background: colorVars.interaction.disabled },
    '&:not(:disabled):hover::after':  { background: colorVars.interaction.hovered },
    '&:not(:disabled):active::after': { background: colorVars.interaction.pressed },
  },
});

export const interactiveInverted = utilityStyle([
  interactive,
  {
    ':disabled': { color: colorVars.content.inverted.muted },
    selectors:   {
      '&:disabled::after':              { background: colorVars.interaction.inverted.disabled },
      '&:not(:disabled):hover::after':  { background: colorVars.interaction.inverted.hovered },
      '&:not(:disabled):active::after': { background: colorVars.interaction.inverted.pressed },
    },
  },
]);

export const interactiveNoBackground = utilityStyle({
  userSelect:  'none',
  cursor:      'pointer',
  transition:  getCSSTransition('transform', 0.2),
  ':disabled': {
    cursor: 'not-allowed',
    color:  colorVars.content.muted,
  },
  selectors: { '&:not(:disabled):active': { transform: 'scale(0.98)' } },
});
