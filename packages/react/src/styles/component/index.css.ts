import { componentLayer } from '../layer.css';
import { componentVars } from '@/lib/style/contract/component.css';

import { assignVars } from '@vanilla-extract/css';
import { getLayerApplier } from '@/utils/style/layer';
import { getMobileMediaQuery } from '@/utils/style/responsive';
import { desktopRadius, mobileRadius } from './values/radius';
import { desktopSpacing, mobileSpacing } from './values/spacing';

const { globalStyle } = getLayerApplier(componentLayer);

globalStyle(':root', {
  vars: assignVars(componentVars, { radius: desktopRadius, spacing: desktopSpacing }),
  ...getMobileMediaQuery({
    vars: assignVars(componentVars, { radius: mobileRadius, spacing: mobileSpacing }),
  }),
});
