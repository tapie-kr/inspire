import { colorVars } from '@/lib/style/contract/color.css';

import { componentStyle } from '@/styles/layer.css';

export const colorBinding = componentStyle({
  vars: {
    '--color-brand-monochrome-everyday': colorVars.brand.monochrome.everyday,
    '--color-brand-monochrome-family':   colorVars.brand.monochrome.family,
    '--color-brand-monochrome-world':    colorVars.brand.monochrome.world,
  },
});
