import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { UtilityClass } from '@/constants/class';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const base = style([
  UtilityClass.Interactive,
  {
    color: colorVars.content.emphasized,
    selectors: {
      '&:disabled::after': {
        background: 'transparent',
      },
    },
  },
]);

export const large = style({
  padding: getShorthandedValue(spacingVars.tiny, spacingVars.micro),
  borderRadius: radiusVars.default,
});

export const medium = style({
  padding: getShorthandedValue(spacingVars.micro, spacingVars.tiny),
  borderRadius: radiusVars.subtle,
});

export const small = style({
  padding: getShorthandedValue(spacingVars.optical, spacingVars.mini),
  borderRadius: radiusVars.sharp,
});
