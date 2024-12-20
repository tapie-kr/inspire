import { DetailsHTMLAttributes } from 'react'

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
  HERO = 'Hero',
  DISPLAY = 'Display',
  TITLE = 'Title',
  HEADLINE = 'Headline',
  BODY = 'Body',
  CALLOUT = 'Callout',
  FOOTNOTE = 'Footnote',
  CAPTION = 'Caption',
  TINY = 'Tiny',
}

export type TypographyPropsBase = DetailsHTMLAttributes<
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
>

export type TypographyProps = TypographyPropsBase & {
  tag?: TypographyTag
  monospaced?: boolean
  children?: React.ReactNode
}
