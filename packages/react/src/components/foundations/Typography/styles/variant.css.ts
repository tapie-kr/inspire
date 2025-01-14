import { typographyVars } from '@/lib/style/contract/typography.css';

import { style } from '@vanilla-extract/css';

const size = typographyVars.size;
const lineHeight = typographyVars['line-height'];

export const giant = style({
  fontSize: size.giant,
  lineHeight: lineHeight.giant,
});

export const jumbo = style({
  fontSize: size.jumbo,
  lineHeight: lineHeight.jumbo,
});

export const large = style({
  fontSize: size.large,
  lineHeight: lineHeight.large,
});

export const medium = style({
  fontSize: size.medium,
  lineHeight: lineHeight.medium,
});

export const moderate = style({
  fontSize: size.moderate,
  lineHeight: lineHeight.moderate,
});

export const base = style({
  fontSize: size.base,
  lineHeight: lineHeight.base,
});

export const petite = style({
  fontSize: size.petite,
  lineHeight: lineHeight.petite,
});

export const micro = style({
  fontSize: size.micro,
  lineHeight: lineHeight.micro,
});

export const tiny = style({
  fontSize: size.tiny,
  lineHeight: lineHeight.tiny,
});

export const mini = style({
  fontSize: size.mini,
  lineHeight: lineHeight.mini,
});
