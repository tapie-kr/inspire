import { typography } from './styles/default.css';

import cn from 'classnames';
import { createElement } from 'react';
import {
  Tag,
  TypographyProps,
  typographyWeightClass,
  Weight,
} from './shared';

type TypographyBuilderProps = {
  tag:        Tag;
  className?: string;
  props:      Omit<TypographyProps, 'variant'>;
};

export default function TypographyBuilder(props: TypographyBuilderProps) {
  const {
    tag: defaultTag,
    className: defaultClassName,
    props: baseProps,
  } = props;

  const {
    tag,
    className,
    nowrap,
    weight,
    color,
    style,
    children,
    ...restProps
  } = baseProps;

  const classes = [
    defaultClassName,
    className,
    typographyWeightClass[weight || Weight.REGULAR],
    typography,
  ];

  return createElement(tag || defaultTag || Tag.P,
    {
      ...restProps,
      className: cn(classes),
      style:     {
        color,
        whiteSpace: nowrap ? 'nowrap' : undefined,
        ...style,
      },
    },
    children);
}
