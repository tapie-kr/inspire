import { spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  border: 'none',
  borderCollapse: 'separate',
  borderSpacing: 0,
  tableLayout: 'fixed',
});

export const cell = style({
  padding: spacingVars.petite,
  selectors: {
    '&:not(:first-of-type)': {
      paddingLeft: spacingVars.none,
    },
  },
});

export const cellContent = style({
  paddingRight: spacingVars.micro,
});
