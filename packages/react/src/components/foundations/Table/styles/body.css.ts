import { cell as baseCell } from './base.css';

import { spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';

export const body = style({});

export const row = style({});

export const cell = style([
  baseCell,
  { selectors: { [`${row}:first-of-type &`]: { paddingTop: `calc(${spacingVars.petite} + ${spacingVars.mini})` } } },
]);
