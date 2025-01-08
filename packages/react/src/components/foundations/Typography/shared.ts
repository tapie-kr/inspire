import { DetailsHTMLAttributes, ReactNode } from 'react'

export enum TypographyTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  Span = 'span',
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

export const TypographyVariantClass = {
  [TypographyVariant.GIANT]: 'typo-giant',
  [TypographyVariant.JUMBO]: 'typo-jumbo',
  [TypographyVariant.LARGE]: 'typo-large',
  [TypographyVariant.MEDIUM]: 'typo-medium',
  [TypographyVariant.MODERATE]: 'typo-moderate',
  [TypographyVariant.BASE]: 'typo-base',
  [TypographyVariant.PETITE]: 'typo-petite',
  [TypographyVariant.MICRO]: 'typo-micro',
  [TypographyVariant.TINY]: 'typo-tiny',
  [TypographyVariant.MINI]: 'typo-mini',
} as const

export enum TypographyWeight {
  EXTRABOLD = 'Extrabold',
  BOLD = 'Bold',
  SEMIBOLD = 'Semibold',
  MEDIUM = 'Medium',
  REGULAR = 'Regular',
  LIGHT = 'Light',
}

export {
  TypographyTag as Tag,
  TypographyVariant as Variant,
  TypographyWeight as Weight,
}

export const TypographyWeightClass = {
  [TypographyWeight.EXTRABOLD]: 'typo-weight-extrabold',
  [TypographyWeight.BOLD]: 'typo-weight-bold',
  [TypographyWeight.SEMIBOLD]: 'typo-weight-semibold',
  [TypographyWeight.MEDIUM]: 'typo-weight-medium',
  [TypographyWeight.REGULAR]: 'typo-weight-regular',
  [TypographyWeight.LIGHT]: 'typo-weight-light',
} as const

export type TypographyPropsBase = DetailsHTMLAttributes<
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
>

export type TypographyProps = TypographyPropsBase & {
  tag?: TypographyTag
  monospaced?: boolean
  weight?: TypographyWeight
  color?: string
  nowrap?: boolean
  children?: ReactNode
}
