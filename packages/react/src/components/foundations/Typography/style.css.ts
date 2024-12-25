import { Typography } from '@/constants/typography'
import { style } from '@vanilla-extract/css'

const baseStyle = style({
  letterSpacing: Typography.LetterSpacing,
})

export const monospacedTypographyStyle = style([baseStyle, {
  fontFamily: ['Geist Mono', 'monospace'],
}])

export const heroStyle = style([baseStyle, {
  fontSize: Typography.Size.Hero,
  lineHeight: Typography.LineHeight.Hero,
  fontWeight: Typography.Weight.Semibold,
}])

export const displayStyle = style([baseStyle, {
  fontSize: Typography.Size.Display,
  lineHeight: Typography.LineHeight.Display,
}])

export const titleStyle = style([baseStyle, {
  fontSize: Typography.Size.Title,
  lineHeight: Typography.LineHeight.Title,
}])

export const headlineStyle = style([baseStyle, {
  fontSize: Typography.Size.Headline,
  lineHeight: Typography.LineHeight.Headline,
}])

export const bodyStyle = style([baseStyle, {
  fontSize: Typography.Size.Body,
  lineHeight: Typography.LineHeight.Body,
}])

export const calloutStyle = style([baseStyle, {
  fontSize: Typography.Size.Callout,
  lineHeight: Typography.LineHeight.Callout,
}])

export const footnoteStyle = style([baseStyle, {
  fontSize: Typography.Size.Footnote,
  lineHeight: Typography.LineHeight.Footnote,
}])

export const captionStyle = style([baseStyle, {
  fontSize: Typography.Size.Caption,
  lineHeight: Typography.LineHeight.Caption,
}])

export const tinyStyle = style([baseStyle, {
  fontSize: Typography.Size.Tiny,
  lineHeight: Typography.LineHeight.Tiny,
}])
