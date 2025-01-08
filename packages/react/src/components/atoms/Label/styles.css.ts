import { Color, Radius, Spacing, UtilityClass } from '@/constants';
import { style } from '@vanilla-extract/css';

export const base = style({
  color: Color.Content.Emphasized,
});

export const disabled = style({
  color: Color.Content.Disabled,
});
