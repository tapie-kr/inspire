import { colorVars } from '@/lib/style/contract/color.css';

import { componentStyle } from '@/styles/layer.css';

import { Theme } from '@/lib/style/theme';

export const secondaryThemes = {
  [Theme.MONOCHROME]: componentStyle({
    background: colorVars.surface.elevated,
    color:      colorVars.content.emphasized,
  }),
  [Theme.RED]: componentStyle({
    background: colorVars.solid.translucent.red._20,
    color:      colorVars.solid.red,
  }),
  [Theme.GREEN]: componentStyle({
    background: colorVars.solid.translucent.green._20,
    color:      colorVars.solid.green,
  }),
  [Theme.BLUE]: componentStyle({
    background: colorVars.solid.translucent.blue._20,
    color:      colorVars.solid.blue,
  }),
  [Theme.YELLOW]: componentStyle({
    background: colorVars.solid.translucent.yellow._20,
    color:      colorVars.solid.yellow,
  }),
};
