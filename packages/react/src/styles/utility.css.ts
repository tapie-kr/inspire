import { utilityLayer } from './layer.css';

import { getLayerApplier } from '@/utils/style/layer';
import { getMobileMediaQuery } from '@/utils/style/responsive';

const { style } = getLayerApplier(utilityLayer);

export const hideOverflow = style({
  overflow: 'hidden',
});

export const forceHide = style({
  display: 'none !important',
  visibility: 'hidden',
  width: 0,
  height: 0,
  opacity: 0,
  userSelect: 'none',
});

export const mobileOnly = style({
  display: 'none',
  ...getMobileMediaQuery({
    display: 'block',
  }),
});

export const mobileOnlyFlex = style({
  display: 'none',
  ...getMobileMediaQuery({
    display: 'flex',
  }),
});

export const mobileOnlyGrid = style({
  display: 'none',
  ...getMobileMediaQuery({
    display: 'grid',
  }),
});

export const desktopOnly = style({
  ...getMobileMediaQuery({
    display: 'none',
  }),
});
