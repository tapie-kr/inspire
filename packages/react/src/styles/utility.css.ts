import { utilityStyle } from './layer.css';

import { getMobileMediaQuery } from '@/utils/style/responsive';

export const hideOverflow = utilityStyle({ overflow: 'hidden' });

export const forceHide = utilityStyle({
  display:    'none !important',
  visibility: 'hidden',
  width:      0,
  height:     0,
  opacity:    0,
  userSelect: 'none',
});

export const visuallyHidden = utilityStyle({
  position:   'absolute',
  width:      1,
  height:     1,
  padding:    0,
  margin:     -1,
  overflow:   'hidden',
  clip:       'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border:     0,
});

export const mobileOnly = utilityStyle({
  display: 'none',
  ...getMobileMediaQuery({ display: 'block' }),
});

export const mobileOnlyFlex = utilityStyle({
  display: 'none',
  ...getMobileMediaQuery({ display: 'flex' }),
});

export const mobileOnlyGrid = utilityStyle({
  display: 'none',
  ...getMobileMediaQuery({ display: 'grid' }),
});

export const desktopOnly = utilityStyle({ ...getMobileMediaQuery({ display: 'none' }) });
