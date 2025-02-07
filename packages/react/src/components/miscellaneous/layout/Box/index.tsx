import * as s from './styles.css';

import cn from 'classnames';
import { createElement } from 'react';
import { BaseLayoutProps, LayoutTag } from '@/lib/layout/types';

type BoxProps<T extends LayoutTag> = BaseLayoutProps<T> & {
  padding?: string | number;
};

export function Box<T extends LayoutTag>(props: BoxProps<T>) {
  const {
    tag: Tag = LayoutTag.DIV,
    fullWidth,
    fullHeight,
    className,
    padding,
    style,
    ...rest
  } = props;

  const classNames = [
    className,
    {
      [s.fullWidth]:  fullWidth,
      [s.fullHeight]: fullHeight,
    },
  ];

  return createElement(Tag,
    {
      className: cn(classNames),
      style:     {
        padding,
        ...style,
      },
      ...rest,
    },
    props.children);
}
