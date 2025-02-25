import TypographyBuilder from './builder';
import {
  Tag,
  type TypographyProps,
  typographyVariantClass,
  Variant,
} from './shared';

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

  return (props: Omit<TypographyProps, 'variant'>) => (
    <TypographyBuilder
      tag={defaultTag}
      className={typographyVariantClass[variant]}
      props={props}
    />
  );
}

function Typography(props: TypographyProps) {
  const TargetTypo = typographyFactory(props.variant || Variant.BASE, props.tag);

  return <TargetTypo {...props} />;
}

Typography.Giant = typographyFactory(Variant.GIANT);

Typography.Jumbo = typographyFactory(Variant.JUMBO);

Typography.Large = typographyFactory(Variant.LARGE);

Typography.Medium = typographyFactory(Variant.MEDIUM);

Typography.Moderate = typographyFactory(Variant.MODERATE);

Typography.Base = typographyFactory(Variant.BASE);

Typography.Petite = typographyFactory(Variant.PETITE);

Typography.Micro = typographyFactory(Variant.MICRO);

Typography.Tiny = typographyFactory(Variant.TINY);

Typography.Mini = typographyFactory(Variant.MINI);

export {
  Typography, Typography as Typo,
};
