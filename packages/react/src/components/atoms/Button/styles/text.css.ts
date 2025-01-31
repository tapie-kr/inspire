import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { componentStyle } from '@/styles/layer.css';

import { utilityClass } from '@/lib/style/utility';

import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = componentStyle([utilityClass.interactive]);

export const large = componentStyle({
  padding:      getShorthandedValue(spacingVars.tiny, spacingVars.micro),
  borderRadius: radiusVars.default,
});

export const medium = componentStyle({
  padding:      getShorthandedValue(spacingVars.micro, spacingVars.tiny),
  borderRadius: radiusVars.subtle,
});

export const small = componentStyle({
  padding:      getShorthandedValue(spacingVars.optical, spacingVars.mini),
  borderRadius: radiusVars.sharp,
});
