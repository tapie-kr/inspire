import { createThemeContract } from '@vanilla-extract/css';

const grayscaleLevel = createThemeContract({
  _5:  '',
  _10: '',
  _15: '',
  _20: '',
  _30: '',
  _40: '',
  _50: '',
  _60: '',
  _70: '',
  _80: '',
  _85: '',
  _90: '',
  _95: '',
});

const solidTranslucentLevel = createThemeContract({
  _10: '',
  _20: '',
  _30: '',
  _40: '',
  _50: '',
  _60: '',
});

const surfaceVariant = createThemeContract({
  default:  '',
  elevated: '',
  raised:   '',
  clear:    '',
});

const contentVariant = createThemeContract({
  emphasized: '',
  default:    '',
  muted:      '',
  disabled:   '',
});

const interactiveVariant = createThemeContract({
  hovered:  '',
  pressed:  '',
  focused:  '',
  disabled: '',
});

export const colorVars = createThemeContract({
  grayscale: {
    solid:       grayscaleLevel,
    translucent: grayscaleLevel,
  },
  solid: {
    white:       '',
    black:       '',
    red:         '',
    green:       '',
    blue:        '',
    yellow:      '',
    translucent: {
      white:  grayscaleLevel,
      black:  grayscaleLevel,
      red:    solidTranslucentLevel,
      green:  solidTranslucentLevel,
      blue:   solidTranslucentLevel,
      yellow: solidTranslucentLevel,
    },
  },
  brand: {
    solid: {
      everyday: '',
      family:   '',
      world:    '',
    },
    monochrome: {
      everyday: '',
      family:   '',
      world:    '',
    },
  },
  surface: {
    ...surfaceVariant,
    inverted: surfaceVariant,
  },
  content: {
    ...contentVariant,
    inverted: contentVariant,
  },
  line: {
    border:  '',
    divider: '',
  },
  interaction: {
    ...interactiveVariant,
    inverted: interactiveVariant,
  },
});
