import { JSX } from 'react'
import TypographyBuilder from './Builder'
import { TypographyProps, Tag, Variant, TypographyVariantClass } from './shared'

const TypographyContract = {
  [Variant.Giant]: Tag.H1,
  [Variant.Jumbo]: Tag.H1,
  [Variant.Large]: Tag.H1,
  [Variant.Medium]: Tag.H2,
  [Variant.Moderate]: Tag.H3,
  [Variant.Base]: Tag.P,
  [Variant.Petite]: Tag.P,
  [Variant.Micro]: Tag.P,
  [Variant.Tiny]: Tag.P,
  [Variant.Mini]: Tag.P,
} as const

function typographyFactory(variant: Variant, tag: Tag = Tag.P) {
  const defaultTag = TypographyContract[variant] || tag
  return (props: TypographyProps) => (
    <TypographyBuilder tag={defaultTag} className={TypographyVariantClass[variant]} props={props} />
  )
}

const Typography = Object.keys(Variant).reduce((acc, key) => {
  const variant = Variant[key as keyof typeof Variant]
  const tag = TypographyContract[variant]
  acc[variant] = typographyFactory(variant, tag)
  return acc
}, {} as Record<Variant, (props: TypographyProps) => JSX.Element>)

export { Typography, Typography as Typo }
