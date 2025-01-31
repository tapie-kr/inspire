import { addOpacity } from '@/utils/style/color/opacity';

const WHITE = '#FFFFFF';

const BLACK = '#0A0A0A';

const REAL_BLACK = '#000000';

const RED = '#F74C43';

const GREEN = '#07D957';

const BLUE = '#3130F0';

const YELLOW = '#FFE100';

const DARK_VISIBILITY_COMPENSATION = 0.05;

enum grayscaleOpacityMap {
  _5 = 0.04,
  _10 = 0.08,
  _15 = 0.14,
  _20 = 0.2,
  _30 = 0.33,
  _40 = 0.46,
  _50 = 0.56,
  _60 = 0.66,
  _70 = 0.76,
  _80 = 0.82,
  _85 = 0.86,
  _90 = 0.9,
  _95 = 0.95,
}

enum solidOpacityMap {
  _10 = 0.05,
  _20 = 0.2,
  _30 = 0.35,
  _40 = 0.5,
  _50 = 0.65,
  _60 = 0.8,
}

export const solid = {
  white:  WHITE,
  black:  BLACK,
  red:    RED,
  green:  GREEN,
  blue:   BLUE,
  yellow: YELLOW,
};

export const solidTranslucentWhite = {
  _5:  addOpacity(WHITE, grayscaleOpacityMap._5),
  _10: addOpacity(WHITE, grayscaleOpacityMap._10),
  _15: addOpacity(WHITE, grayscaleOpacityMap._15),
  _20: addOpacity(WHITE, grayscaleOpacityMap._20),
  _30: addOpacity(WHITE, grayscaleOpacityMap._30),
  _40: addOpacity(WHITE, grayscaleOpacityMap._40),
  _50: addOpacity(WHITE, grayscaleOpacityMap._50),
  _60: addOpacity(WHITE, grayscaleOpacityMap._60),
  _70: addOpacity(WHITE, grayscaleOpacityMap._70),
  _80: addOpacity(WHITE, grayscaleOpacityMap._80),
  _85: addOpacity(WHITE, grayscaleOpacityMap._85),
  _90: addOpacity(WHITE, grayscaleOpacityMap._90),
  _95: addOpacity(WHITE, grayscaleOpacityMap._95),
};

export const solidTranslucentBlack = {
  _5:  addOpacity(REAL_BLACK, grayscaleOpacityMap._5),
  _10: addOpacity(REAL_BLACK, grayscaleOpacityMap._10),
  _15: addOpacity(REAL_BLACK, grayscaleOpacityMap._15),
  _20: addOpacity(REAL_BLACK, grayscaleOpacityMap._20),
  _30: addOpacity(REAL_BLACK, grayscaleOpacityMap._30),
  _40: addOpacity(REAL_BLACK, grayscaleOpacityMap._40),
  _50: addOpacity(REAL_BLACK, grayscaleOpacityMap._50),
  _60: addOpacity(REAL_BLACK, grayscaleOpacityMap._60),
  _70: addOpacity(REAL_BLACK, grayscaleOpacityMap._70),
  _80: addOpacity(REAL_BLACK, grayscaleOpacityMap._80),
  _85: addOpacity(REAL_BLACK, grayscaleOpacityMap._85),
  _90: addOpacity(REAL_BLACK, grayscaleOpacityMap._90),
  _95: addOpacity(REAL_BLACK, grayscaleOpacityMap._95),
};

export const lightSolidTranslucentRed = {
  _10: addOpacity(RED, solidOpacityMap._10),
  _20: addOpacity(RED, solidOpacityMap._20),
  _30: addOpacity(RED, solidOpacityMap._30),
  _40: addOpacity(RED, solidOpacityMap._40),
  _50: addOpacity(RED, solidOpacityMap._50),
  _60: addOpacity(RED, solidOpacityMap._60),
};

export const darkSolidTranslucentRed = {
  _10: addOpacity(RED, solidOpacityMap._10 + DARK_VISIBILITY_COMPENSATION),
  _20: addOpacity(RED, solidOpacityMap._20 + DARK_VISIBILITY_COMPENSATION),
  _30: addOpacity(RED, solidOpacityMap._30 + DARK_VISIBILITY_COMPENSATION),
  _40: addOpacity(RED, solidOpacityMap._40 + DARK_VISIBILITY_COMPENSATION),
  _50: addOpacity(RED, solidOpacityMap._50 + DARK_VISIBILITY_COMPENSATION),
  _60: addOpacity(RED, solidOpacityMap._60 + DARK_VISIBILITY_COMPENSATION),
};

export const lightSolidTranslucentGreen = {
  _10: addOpacity(GREEN, solidOpacityMap._10),
  _20: addOpacity(GREEN, solidOpacityMap._20),
  _30: addOpacity(GREEN, solidOpacityMap._30),
  _40: addOpacity(GREEN, solidOpacityMap._40),
  _50: addOpacity(GREEN, solidOpacityMap._50),
  _60: addOpacity(GREEN, solidOpacityMap._60),
};

export const darkSolidTranslucentGreen = {
  _10: addOpacity(GREEN, solidOpacityMap._10 + DARK_VISIBILITY_COMPENSATION),
  _20: addOpacity(GREEN, solidOpacityMap._20 + DARK_VISIBILITY_COMPENSATION),
  _30: addOpacity(GREEN, solidOpacityMap._30 + DARK_VISIBILITY_COMPENSATION),
  _40: addOpacity(GREEN, solidOpacityMap._40 + DARK_VISIBILITY_COMPENSATION),
  _50: addOpacity(GREEN, solidOpacityMap._50 + DARK_VISIBILITY_COMPENSATION),
  _60: addOpacity(GREEN, solidOpacityMap._60 + DARK_VISIBILITY_COMPENSATION),
};

export const lightSolidTranslucentBlue = {
  _10: addOpacity(BLUE, solidOpacityMap._10),
  _20: addOpacity(BLUE, solidOpacityMap._20),
  _30: addOpacity(BLUE, solidOpacityMap._30),
  _40: addOpacity(BLUE, solidOpacityMap._40),
  _50: addOpacity(BLUE, solidOpacityMap._50),
  _60: addOpacity(BLUE, solidOpacityMap._60),
};

export const darkSolidTranslucentBlue = {
  _10: addOpacity(BLUE, solidOpacityMap._10 + DARK_VISIBILITY_COMPENSATION),
  _20: addOpacity(BLUE, solidOpacityMap._20 + DARK_VISIBILITY_COMPENSATION),
  _30: addOpacity(BLUE, solidOpacityMap._30 + DARK_VISIBILITY_COMPENSATION),
  _40: addOpacity(BLUE, solidOpacityMap._40 + DARK_VISIBILITY_COMPENSATION),
  _50: addOpacity(BLUE, solidOpacityMap._50 + DARK_VISIBILITY_COMPENSATION),
  _60: addOpacity(BLUE, solidOpacityMap._60 + DARK_VISIBILITY_COMPENSATION),
};

export const lightSolidTranslucentYellow = {
  _10: addOpacity(YELLOW, solidOpacityMap._10),
  _20: addOpacity(YELLOW, solidOpacityMap._20),
  _30: addOpacity(YELLOW, solidOpacityMap._30),
  _40: addOpacity(YELLOW, solidOpacityMap._40),
  _50: addOpacity(YELLOW, solidOpacityMap._50),
  _60: addOpacity(YELLOW, solidOpacityMap._60),
};

export const darkSolidTranslucentYellow = {
  _10: addOpacity(YELLOW, solidOpacityMap._10 + DARK_VISIBILITY_COMPENSATION),
  _20: addOpacity(YELLOW, solidOpacityMap._20 + DARK_VISIBILITY_COMPENSATION),
  _30: addOpacity(YELLOW, solidOpacityMap._30 + DARK_VISIBILITY_COMPENSATION),
  _40: addOpacity(YELLOW, solidOpacityMap._40 + DARK_VISIBILITY_COMPENSATION),
  _50: addOpacity(YELLOW, solidOpacityMap._50 + DARK_VISIBILITY_COMPENSATION),
  _60: addOpacity(YELLOW, solidOpacityMap._60 + DARK_VISIBILITY_COMPENSATION),
};
