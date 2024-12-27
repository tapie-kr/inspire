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
  Hero = 'Hero',
  Display = 'Display',
  Title = 'Title',
  Headline = 'Headline',
  Body = 'Body',
  Callout = 'Callout',
  Footnote = 'Footnote',
  Caption = 'Caption',
  Tiny = 'Tiny',
}

export enum TypographyWeight {
  Extrabold = 'extraboldStyle',
  Bold = 'boldStyle',
  Semibold = 'semiboldStyle',
  Medium = 'mediumStyle',
  Regular = 'regularStyle',
  Light = 'lightStyle',
}

export type TypographyPropsBase = DetailsHTMLAttributes<
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
>

export type TypographyProps = TypographyPropsBase & {
  tag?: TypographyTag
  monospaced?: boolean
  weight?: TypographyWeight
  children?: ReactNode
}
