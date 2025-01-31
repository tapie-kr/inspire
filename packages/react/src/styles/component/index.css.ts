import { componentGlobalStyle } from '../layer.css';

import { componentVars } from '@/lib/style/contract/component.css';

import { assignVars } from '@vanilla-extract/css';

import { getMobileMediaQuery } from '@/utils/style/responsive';

import { desktopRadius, mobileRadius } from './values/radius';

import { desktopSpacing, mobileSpacing } from './values/spacing';

componentGlobalStyle(':root', {
  vars: assignVars(componentVars, {
    radius:  desktopRadius,
    spacing: desktopSpacing,
  }),
  ...getMobileMediaQuery({
    vars: assignVars(componentVars, {
      radius:  mobileRadius,
      spacing: mobileSpacing,
    }),
  }),
});
