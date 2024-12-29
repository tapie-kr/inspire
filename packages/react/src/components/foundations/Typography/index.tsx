import { JSX } from 'react'
import TypographyBuilder from './Builder'
import { TypographyProps, TypographyTag, TypographyVariant, TypographyVariantClass } from './shared'

const TypographyContract = {
  [TypographyVariant.Giant]: TypographyTag.H1,
  [TypographyVariant.Jumbo]: TypographyTag.H1,
  [TypographyVariant.Large]: TypographyTag.H1,
  [TypographyVariant.Medium]: TypographyTag.H2,
  [TypographyVariant.Small]: TypographyTag.H3,
  [TypographyVariant.Base]: TypographyTag.P,
  [TypographyVariant.Petite]: TypographyTag.P,
  [TypographyVariant.Micro]: TypographyTag.P,
  [TypographyVariant.Tiny]: TypographyTag.P,
  [TypographyVariant.Mini]: TypographyTag.P,
} as const

function typographyFactory(variant: TypographyVariant, tag: TypographyTag = TypographyTag.P) {
  const defaultTag = TypographyContract[variant] || tag
  return (props: TypographyProps) => (
    <TypographyBuilder tag={defaultTag} className={TypographyVariantClass[variant]} props={props} />
  )
}

const Typography = Object.keys(TypographyVariant).reduce((acc, key) => {
  const variant = TypographyVariant[key as keyof typeof TypographyVariant]
  const tag = TypographyContract[variant]
  acc[variant] = typographyFactory(variant, tag)
  return acc
}, {} as Record<TypographyVariant, (props: TypographyProps) => JSX.Element>)

export { Typography, Typography as Typo }
