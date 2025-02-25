'use client';

import { useEffect, useState } from 'react';
import {
  type BaseStackProps,
  type LayoutTag,
  Stack,
  StackDirection,
  useMediaQuery,
} from '@/index';

type DStackProps<T extends LayoutTag> = Omit<BaseStackProps<T>, 'direction'> & {
  defaultDirection?: StackDirection;
  breakpoint?:       number;
};

export function DStack<T extends LayoutTag>(props: DStackProps<T>) {
  const {
    defaultDirection,
    breakpoint,
    ...rest
  } = props;

  const isInBreakpoint = useMediaQuery(breakpoint);
  const [direction, setDirection] = useState<StackDirection>(defaultDirection || StackDirection.ROW);

  useEffect(() => {
    if (isInBreakpoint) {
      setDirection(getInvertedDirection);
    } else {
      setDirection(defaultDirection || StackDirection.ROW);
    }
  }, [isInBreakpoint, defaultDirection]);

  return (
    <Stack
      direction={direction}
      {...rest}
    />
  );
}

function getInvertedDirection(direction: StackDirection): StackDirection {
  return direction === StackDirection.ROW ? StackDirection.COLUMN : StackDirection.ROW;
}
