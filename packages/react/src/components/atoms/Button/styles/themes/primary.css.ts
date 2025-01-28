import { colorVars } from '@/lib/style/contract/color.css';
import { componentStyle } from '@/styles/layer.css';

import { Theme } from '@/lib/style/theme';

export const primaryThemes = {
  [Theme.MONOCHROME]: componentStyle({
    background: colorVars.surface.inverted.elevated,
    color: colorVars.content.inverted.emphasized,
  }),
  [Theme.RED]: componentStyle({
    background: colorVars.solid.translucent.red._60,
    color: colorVars.content.inverted.emphasized,
  }),
  [Theme.GREEN]: componentStyle({
    background: colorVars.solid.translucent.green._60,
    color: colorVars.content.inverted.emphasized,
  }),
  [Theme.BLUE]: componentStyle({
    background: colorVars.solid.translucent.blue._60,
    color: colorVars.content.inverted.emphasized,
  }),
  [Theme.YELLOW]: componentStyle({
    background: colorVars.solid.translucent.yellow._60,
    color: colorVars.content.emphasized,
  }),
};
