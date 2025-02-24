import { radiusVars } from '@/lib/style/contract/component.css';
import { componentStyle } from '@/styles/layer.css';

import { utilityClass } from '@/lib/style/utility';

export const base = componentStyle({
  aspectRatio:    '1 / 1',
  display:        'inline-flex',
  alignItems:     'center',
  justifyContent: 'center',
  flexShrink:     0,
});

export const primary = componentStyle([base, utilityClass.interactiveInverted]);
export const secondary = componentStyle([base, utilityClass.interactive]);

export const large = componentStyle({
  width:        48,
  borderRadius: radiusVars.default,
});

export const medium = componentStyle({
  width:        34,
  borderRadius: radiusVars.subtle,
});

export const small = componentStyle({
  width:        28,
  borderRadius: radiusVars.subtle,
});
