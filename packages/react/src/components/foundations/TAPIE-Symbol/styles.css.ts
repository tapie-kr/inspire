import { colorVars } from '@/lib/style/contract/color.css';

import { style } from '@vanilla-extract/css';

export const colorBinding = style({
  vars: {
    '--color-brand-monochrome-everyday': colorVars.brand.monochrome.everyday,
    '--color-brand-monochrome-family': colorVars.brand.monochrome.family,
    '--color-brand-monochrome-world': colorVars.brand.monochrome.world,
  },
});
