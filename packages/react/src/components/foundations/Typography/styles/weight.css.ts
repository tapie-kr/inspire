import { typographyVars } from '@/lib/style/contract/typography.css';

import { style } from '@vanilla-extract/css';

export const extrabold = style({
  fontWeight: typographyVars.weight.extrabold,
});

export const bold = style({
  fontWeight: typographyVars.weight.bold,
});

export const semibold = style({
  fontWeight: typographyVars.weight.semibold,
});

export const medium = style({
  fontWeight: typographyVars.weight.medium,
});

export const regular = style({
  fontWeight: typographyVars.weight.regular,
});

export const light = style({
  fontWeight: typographyVars.weight.light,
});
