import { createThemeContract } from '@vanilla-extract/css';

const weightVars = createThemeContract({
  extrabold: '',
  bold: '',
  semibold: '',
  medium: '',
  regular: '',
  light: '',
});

const sizeVars = createThemeContract({
  giant: '',
  jumbo: '',
  large: '',
  medium: '',
  moderate: '',
  base: '',
  petite: '',
  micro: '',
  tiny: '',
  mini: '',
});

export const typographyVars = createThemeContract({
  weight: weightVars,
  size: sizeVars,
  'line-height': sizeVars,
});
