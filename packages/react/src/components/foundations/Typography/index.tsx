import { JSX } from 'react'
import TypographyBuilder from './Builder'
import { TypographyProps, TypographyTag, TypographyVariant, TypographyWeight } from './shared'
import { bodyStyle, calloutStyle, captionStyle, displayStyle, footnoteStyle, headlineStyle, heroStyle, tinyStyle, titleStyle } from './styles/glyph.css'

enum ContractKey {
  TAG,
  STYLE,
}

const TypographyContract = {
  [TypographyVariant.Hero]: [TypographyTag.P, heroStyle],
  [TypographyVariant.Display]: [TypographyTag.H1, displayStyle],
  [TypographyVariant.Title]: [TypographyTag.H1, titleStyle],
  [TypographyVariant.Headline]: [TypographyTag.H2, headlineStyle],
  [TypographyVariant.Body]: [TypographyTag.P, bodyStyle],
  [TypographyVariant.Callout]: [TypographyTag.P, calloutStyle],
  [TypographyVariant.Footnote]: [TypographyTag.P, footnoteStyle],
  [TypographyVariant.Caption]: [TypographyTag.P, captionStyle],
  [TypographyVariant.Tiny]: [TypographyTag.P, tinyStyle],
} as const

function typographyFactory(variant: TypographyVariant, tag: TypographyTag = TypographyTag.P) {
  const style = TypographyContract[variant][ContractKey.STYLE]
  return (props: TypographyProps) => (
    <TypographyBuilder tag={tag} styleClassName={style} props={props} />
  )
}

const Typography = Object.keys(TypographyVariant).reduce((acc, key) => {
  const variant = TypographyVariant[key as keyof typeof TypographyVariant]
  const contract = TypographyContract[variant]
  acc[variant] = typographyFactory(variant, contract[ContractKey.TAG])
  return acc
}, {} as Record<TypographyVariant, (props: TypographyProps) => JSX.Element>)

export { Typography, Typography as Typo }
