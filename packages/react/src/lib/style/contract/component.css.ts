import { createThemeContract } from '@vanilla-extract/css';

export const componentVars = createThemeContract({
  radius: {
    none:    '',
    sharp:   '',
    subtle:  '',
    default: '',
    smooth:  '',
    rounded: '',
    pill:    '',
    full:    '',
  },
  spacing: {
    none:     '',
    optical:  '',
    mini:     '',
    tiny:     '',
    micro:    '',
    petite:   '',
    base:     '',
    moderate: '',
    medium:   '',
    large:    '',
    jumbo:    '',
    giant:    '',
  },
});

export const { radius: radiusVars, spacing: spacingVars } = componentVars;
