import { style } from '@vanilla-extract/css';
import { getMobileMediaQuery } from '@/utils/style/responsive';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const grid = style({
  display: 'grid',
  ...getMobileMediaQuery({ gridTemplateColumns: getShorthandedValue('1fr', '!important') }),
});
