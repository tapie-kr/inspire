'use client';

import * as s from '../styles/text-indicator.css';

import { Flex } from '@cottons-kr/react-foundation';

import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';

import { useMemo } from 'react';

import { Weight } from '@/components/foundations/Typography/shared';

export enum TextIndicatorBadgeVariant {
  DEFAULT = 'default',
  EMPHASIZED = 'emphasized',
}

type TextIndicatorBadgeProps = {
  variant?: TextIndicatorBadgeVariant;
  children: string | number;
};

export function TextIndicatorBadge(props: TextIndicatorBadgeProps) {
  const { variant = TextIndicatorBadgeVariant.DEFAULT, children } = props;

  const label = useMemo(() => {
    if (typeof children === 'number' && children > 99) {
      return '99+';
    }

    return children.toString();
  }, [children]);

  const classNames = [
    s.textIndicator,
    variant === TextIndicatorBadgeVariant.EMPHASIZED && s.emphasized,
  ];

  return (
    <Flex
      fitContent
      className={cn(classNames)}
    >
      <Typo.Mini weight={Weight.MEDIUM}>{label}</Typo.Mini>
    </Flex>
  );
}
