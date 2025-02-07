import * as variantStyles from './styles/variant.css';
import * as weightStyles from './styles/weight.css';

import { DetailsHTMLAttributes, ReactNode } from 'react';

export enum TypographyTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
}

export enum TypographyVariant {
  GIANT = 'Giant',
  JUMBO = 'Jumbo',
  LARGE = 'Large',
  MEDIUM = 'Medium',
  MODERATE = 'Moderate',
  BASE = 'Base',
  PETITE = 'Petite',
  MICRO = 'Micro',
  TINY = 'Tiny',
  MINI = 'Mini',
}

export enum TypographyWeight {
  EXTRABOLD = 'extrabold',
  BOLD = 'bold',
  SEMIBOLD = 'semibold',
  MEDIUM = 'medium',
  REGULAR = 'regular',
  LIGHT = 'light',
}

export const typographyVariantClass = {
  [TypographyVariant.GIANT]:    variantStyles.giant,
  [TypographyVariant.JUMBO]:    variantStyles.jumbo,
  [TypographyVariant.LARGE]:    variantStyles.large,
  [TypographyVariant.MEDIUM]:   variantStyles.medium,
  [TypographyVariant.MODERATE]: variantStyles.moderate,
  [TypographyVariant.BASE]:     variantStyles.base,
  [TypographyVariant.PETITE]:   variantStyles.petite,
  [TypographyVariant.MICRO]:    variantStyles.micro,
  [TypographyVariant.TINY]:     variantStyles.tiny,
  [TypographyVariant.MINI]:     variantStyles.mini,
};

export const typographyWeightClass = {
  [TypographyWeight.EXTRABOLD]: weightStyles.extrabold,
  [TypographyWeight.BOLD]:      weightStyles.bold,
  [TypographyWeight.SEMIBOLD]:  weightStyles.semibold,
  [TypographyWeight.MEDIUM]:    weightStyles.medium,
  [TypographyWeight.REGULAR]:   weightStyles.regular,
  [TypographyWeight.LIGHT]:     weightStyles.light,
};

export {
  TypographyTag as Tag, TypographyVariant as Variant, TypographyWeight as Weight,
};

export type TypographyPropsBase = DetailsHTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
>;

export type TypographyProps = TypographyPropsBase & {
  tag?:        TypographyTag;
  variant?:    TypographyVariant;
  monospaced?: boolean;
  weight?:     TypographyWeight;
  color?:      string;
  nowrap?:     boolean;
  children?:   ReactNode;
};
