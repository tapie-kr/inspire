import * as alignStyle from './styles/align.css';
import { base } from './styles/base.css';
import * as directionStyle from './styles/direction.css';
import * as justifyStyle from './styles/justify.css';
import * as wrapStyle from './styles/wrap.css';

import cn from 'classnames';
import {
  type BaseStackProps,
  type LayoutTag,
  StackAlign,
  StackDirection,
  StackJustify,
  StackWrap,
} from '@/lib/layout/types';
import { Box } from '../Box';

type StackProps<T extends LayoutTag.DIV = LayoutTag.DIV> = BaseStackProps<T> & {};

export function Stack(props: StackProps) {
  const {
    align = StackAlign.START,
    direction = StackDirection.ROW,
    justify = StackJustify.START,
    wrap = StackWrap.NO_WRAP,
    spacing,
    className,
    style: baseStyle,
    ...rest
  } = props;

  const classNames = [
    className,
    base,
    alignStyle[align],
    directionStyle[direction],
    justifyStyle[justify],
    wrapStyle[wrap],
  ];

  const style = {
    ...baseStyle,
    gap: typeof spacing === 'number' ? `${spacing}px` : spacing,
  };

  return (
    <Box
      className={cn(classNames)}
      style={style}
      {...rest}
    />
  );
}
