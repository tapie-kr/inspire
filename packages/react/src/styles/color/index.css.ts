import { colorVars } from '@/lib/style/contract/color.css';

import { createGlobalTheme } from '@vanilla-extract/css';

import { brandSolid, darkBrandMonochrome, lightBrandMonochrome } from './values/brand';

import { content, darkContentInverted, lightContentInverted } from './values/content';

import {
  darkGrayscaleSolid,
  darkGrayscaleTranslucent,
  lightGrayscaleSolid,
  lightGrayscaleTranslucent,
} from './values/grayscale';

import {
  darkInteractionInverted,
  interaction,
  lightInteractionInverted,
} from './values/interaction';

import { darkLine, lightLine } from './values/line';

import {
  darkSolidTranslucentBlue,
  darkSolidTranslucentGreen,
  darkSolidTranslucentRed,
  darkSolidTranslucentYellow,
  lightSolidTranslucentBlue,
  lightSolidTranslucentGreen,
  lightSolidTranslucentRed,
  lightSolidTranslucentYellow,
  solid,
  solidTranslucentBlack,
  solidTranslucentWhite,
} from './values/solid';

import {
  darkSurface,
  darkSurfaceInverted,
  lightSurface,
  lightSurfaceInverted,
} from './values/surface';

const lightColorTheme = {
  grayscale: {
    solid:       lightGrayscaleSolid,
    translucent: lightGrayscaleTranslucent,
  },
  solid: {
    ...solid,
    translucent: {
      white:  solidTranslucentWhite,
      black:  solidTranslucentBlack,
      red:    lightSolidTranslucentRed,
      green:  lightSolidTranslucentGreen,
      blue:   lightSolidTranslucentBlue,
      yellow: lightSolidTranslucentYellow,
    },
  },
  brand: {
    solid:      brandSolid,
    monochrome: lightBrandMonochrome,
  },
  surface: {
    ...lightSurface,
    inverted: lightSurfaceInverted,
  },
  content: {
    ...content,
    inverted: lightContentInverted,
  },
  line:        lightLine,
  interaction: {
    ...interaction,
    inverted: lightInteractionInverted,
  },
};

const darkColorTheme = {
  grayscale: {
    solid:       darkGrayscaleSolid,
    translucent: darkGrayscaleTranslucent,
  },
  solid: {
    ...solid,
    translucent: {
      white:  solidTranslucentWhite,
      black:  solidTranslucentBlack,
      red:    darkSolidTranslucentRed,
      green:  darkSolidTranslucentGreen,
      blue:   darkSolidTranslucentBlue,
      yellow: darkSolidTranslucentYellow,
    },
  },
  brand: {
    solid:      brandSolid,
    monochrome: darkBrandMonochrome,
  },
  surface: {
    ...darkSurface,
    inverted: darkSurfaceInverted,
  },
  content: {
    ...content,
    inverted: darkContentInverted,
  },
  line:        darkLine,
  interaction: {
    ...interaction,
    inverted: darkInteractionInverted,
  },
};

createGlobalTheme(':root, [data-theme=light]', colorVars, lightColorTheme);

createGlobalTheme('[data-theme=dark]', colorVars, darkColorTheme);
