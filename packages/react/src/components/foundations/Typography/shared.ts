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
  Giant = 'Giant',
  Jumbo = 'Jumbo',
  Large = 'Large',
  Medium = 'Medium',
  Moderate = 'Moderate',
  Base = 'Base',
  Petite = 'Petite',
  Micro = 'Micro',
  Tiny = 'Tiny',
  Mini = 'Mini',
}

export const TypographyVariantClass = {
  Giant: 'typo-giant',
  Jumbo: 'typo-jumbo',
  Large: 'typo-large',
  Medium: 'typo-medium',
  Moderate: 'typo-moderate',
  Base: 'typo-base',
  Petite: 'typo-petite',
  Micro: 'typo-micro',
  Tiny: 'typo-tiny',
  Mini: 'typo-mini',
} as const

export enum TypographyWeight {
  Extrabold = 'Extrabold',
  Bold = 'Bold',
  Semibold = 'Semibold',
  Medium = 'Medium',
  Regular = 'Regular',
  Light = 'Light',
}

export {
  TypographyTag as Tag,
  TypographyVariant as Variant,
  TypographyWeight as Weight,
}

export const TypographyWeightClass = {
  Extrabold: 'typo-weight-extrabold',
  Bold: 'typo-weight-bold',
  Semibold: 'typo-weight-semibold',
  Medium: 'typo-weight-medium',
  Regular: 'typo-weight-regular',
  Light: 'typo-weight-light',
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
