import { type JSX } from 'react';

import TypographyBuilder from './builder';

import { Tag, type TypographyProps, typographyVariantClass, Variant } from './shared';

const TypographyContract = {
  [Variant.GIANT]:    Tag.H1,
  [Variant.JUMBO]:    Tag.H1,
  [Variant.LARGE]:    Tag.H1,
  [Variant.MEDIUM]:   Tag.H2,
  [Variant.MODERATE]: Tag.H3,
  [Variant.BASE]:     Tag.P,
  [Variant.PETITE]:   Tag.P,
  [Variant.MICRO]:    Tag.P,
  [Variant.TINY]:     Tag.P,
  [Variant.MINI]:     Tag.P,
} as const;

function typographyFactory(variant: Variant, tag: Tag = Tag.P) {
  const defaultTag = TypographyContract[variant] || tag;

  return (props: TypographyProps) => (
    <TypographyBuilder
      tag={defaultTag}
      className={typographyVariantClass[variant]}
      props={props}
    />
  );
}

const Typography = Object.keys(Variant).reduce((acc, key) => {
  const variant = Variant[key as keyof typeof Variant];

  const tag = TypographyContract[variant];

  acc[variant] = typographyFactory(variant, tag);

  return acc;
},
{} as Record<Variant, (props: TypographyProps) => JSX.Element>);

export { Typography, Typography as Typo };
