import { JSX } from 'react'
import TypographyBuilder from './Builder'
import { TypographyProps, TypographyTag, TypographyVariant } from './shared'
import { bodyStyle, calloutStyle, captionStyle, displayStyle, footnoteStyle, headlineStyle, heroStyle, tinyStyle, titleStyle } from './style.css'

enum ContractKey {
  TAG,
  STYLE,
}

const TypographyContract = {
  [TypographyVariant.HERO]: [TypographyTag.P, heroStyle],
  [TypographyVariant.DISPLAY]: [TypographyTag.H1, displayStyle],
  [TypographyVariant.TITLE]: [TypographyTag.H1, titleStyle],
  [TypographyVariant.HEADLINE]: [TypographyTag.H2, headlineStyle],
  [TypographyVariant.BODY]: [TypographyTag.P, bodyStyle],
  [TypographyVariant.CALLOUT]: [TypographyTag.P, calloutStyle],
  [TypographyVariant.FOOTNOTE]: [TypographyTag.P, footnoteStyle],
  [TypographyVariant.CAPTION]: [TypographyTag.P, captionStyle],
  [TypographyVariant.TINY]: [TypographyTag.P, tinyStyle],
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
