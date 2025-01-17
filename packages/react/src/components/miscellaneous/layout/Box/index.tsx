import * as s from './styles.css';

import cn from 'classnames';
import { type BaseLayoutProps, LayoutTag } from '@/lib/layout/types';

type BoxProps<T extends LayoutTag = LayoutTag.DIV> = BaseLayoutProps<T> & {
  padding?: string | number;
};

export function Box(props: BoxProps) {
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
      [s.fullWidth]: fullWidth,
      [s.fullHeight]: fullHeight,
    },
  ];

  return (
    <Tag
      className={cn(classNames)}
      style={{ ...style, padding }}
      {...rest}
    >
      {props.children}
    </Tag>
  );
}
