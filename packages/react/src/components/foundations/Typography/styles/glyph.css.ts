import { TypographyVariable } from '@/constants/typography'
import { style } from '@vanilla-extract/css'
import { regularStyle, semiboldStyle } from './weight.css'

const baseStyle = style({
  letterSpacing: TypographyVariable.LetterSpacing,
})

export const monospacedTypographyStyle = style([baseStyle, regularStyle, {
  fontFamily: ['Geist Mono', 'monospace'],
}])

export const heroStyle = style([baseStyle, semiboldStyle, {
  fontSize: TypographyVariable.Size.Hero,
  lineHeight: TypographyVariable.LineHeight.Hero,
}])

export const displayStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Display,
  lineHeight: TypographyVariable.LineHeight.Display,
}])

export const titleStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Title,
  lineHeight: TypographyVariable.LineHeight.Title,
}])

export const headlineStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Headline,
  lineHeight: TypographyVariable.LineHeight.Headline,
}])

export const bodyStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Body,
  lineHeight: TypographyVariable.LineHeight.Body,
}])

export const calloutStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Callout,
  lineHeight: TypographyVariable.LineHeight.Callout,
}])

export const footnoteStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Footnote,
  lineHeight: TypographyVariable.LineHeight.Footnote,
}])

export const captionStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Caption,
  lineHeight: TypographyVariable.LineHeight.Caption,
}])

export const tinyStyle = style([baseStyle, {
  fontSize: TypographyVariable.Size.Tiny,
  lineHeight: TypographyVariable.LineHeight.Tiny,
}])
