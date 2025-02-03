import { cell as baseCell, cellContent as baseCellContent } from './base.css';
import { colorVars } from '@/lib/style/contract/color.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const head = style({
  textAlign: 'left',
  color:     colorVars.content.muted,
});

export const cell = style([
  baseCell,
  { borderBottom: getShorthandedValue('1px', 'solid', colorVars.line.border) },
]);

export const cellContent = style([
  baseCellContent,
  {
    borderRight: getShorthandedValue('1px', 'solid', colorVars.line.border),
    selectors:   { [`${cell}:last-of-type &`]: { borderRight: 'none' } },
  },
]);
