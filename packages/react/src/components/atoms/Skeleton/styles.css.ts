import { colorVars } from '@/lib/style/contract/color.css';

import { keyframes, style } from '@vanilla-extract/css';

import { defaultCubicBezier } from '@/lib/animation/cubic-bezier';

const blinking = keyframes({
  '0%':   { opacity: 0 },
  '50%':  { opacity: 1 },
  '100%': { opacity: 0 },
});

export const skeleton = style({
  position:   'relative',
  background: colorVars.surface.elevated,
  overflow:   'hidden',
  '::after':  {
    content:    '""',
    position:   'absolute',
    display:    'inline-block',
    top:        0,
    right:      0,
    bottom:     0,
    left:       0,
    opacity:    0,
    background: colorVars.grayscale.translucent._10,
    animation:  `${blinking} 1.3s cubic-bezier(${defaultCubicBezier.join(',')}) infinite`,
  },
});
