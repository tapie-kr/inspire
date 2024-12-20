import { Typography } from '@/constants/typography'
import { variable } from '@/utils/style'
import { style } from '@vanilla-extract/css'

const baseStyle = style({
  letterSpacing: variable(Typography.LetterSpacing),
})

export const monospacedTypographyStyle = style([baseStyle, {
  fontFamily: ['Geist Mono', 'monospace'],
}])

export const heroStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Hero),
  lineHeight: variable(Typography.LineHeight.Hero),
  fontWeight: variable(Typography.Weight.Semibold),
}])

export const displayStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Display),
  lineHeight: variable(Typography.LineHeight.Display),
}])

export const headlineStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Headline),
  lineHeight: variable(Typography.LineHeight.Headline),
}])

export const bodyStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Body),
  lineHeight: variable(Typography.LineHeight.Body),
}])

export const calloutStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Callout),
  lineHeight: variable(Typography.LineHeight.Callout),
}])

export const footnoteStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Footnote),
  lineHeight: variable(Typography.LineHeight.Footnote),
}])

export const captionStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Caption),
  lineHeight: variable(Typography.LineHeight.Caption),
}])

export const tinyStyle = style([baseStyle, {
  fontSize: variable(Typography.Size.Tiny),
  lineHeight: variable(Typography.LineHeight.Tiny),
}])
