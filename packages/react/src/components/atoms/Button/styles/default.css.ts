import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { componentStyle } from '@/styles/layer.css';

import { utilityClass } from '@/lib/style/utility';

import { getShorthandedValue } from '@/utils/style/shorthand';

export const primary = componentStyle([utilityClass.interactiveInverted]);

export const secondary = componentStyle([utilityClass.interactive]);

export const large = componentStyle({
  padding:      getShorthandedValue(spacingVars.petite, spacingVars.base),
  borderRadius: radiusVars.default,
});

export const medium = componentStyle({
  padding:      getShorthandedValue(spacingVars.micro, spacingVars.base),
  borderRadius: radiusVars.subtle,
});

export const small = componentStyle({
  padding:      getShorthandedValue(spacingVars.tiny, spacingVars.petite),
  borderRadius: radiusVars.sharp,
});

export const fullWidth = componentStyle({
  width:          '100%',
  display:        'flex',
  justifyContent: 'center',
  alignItems:     'center',
});
