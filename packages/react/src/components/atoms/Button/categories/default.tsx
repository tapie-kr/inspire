'use client';

import * as s from '../styles/default.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';
import { Icon } from '@/components/foundations/Icon';

import cn from 'classnames';
import { type ReactNode, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import {
  ButtonIconSizeMap,
  type ButtonPropsBase,
  ButtonSize,
  ButtonTypoSizeMap,
  ButtonVariant,
} from '../shared';

const GapMap = {
  [ButtonSize.LARGE]: spacingVars.micro,
  [ButtonSize.MEDIUM]: spacingVars.mini,
  [ButtonSize.SMALL]: spacingVars.mini,
} as const;

type DefaultButtonProps = ButtonPropsBase & {
  variant?: ButtonVariant;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  children?: ReactNode;
};

export function DefaultButton(props: DefaultButtonProps) {
  const {
    size: propSize,
    variant: propVariant,
    leadingIcon,
    trailingIcon,
    className: propClassName,
    ...restProps
  } = props;

  const size = useMemo(() => propSize || ButtonSize.LARGE, [propSize]);
  const variant = useMemo(() => propVariant || ButtonVariant.PRIMARY, [propVariant]);
  const Typo = useMemo(() => ButtonTypoSizeMap[size], [size]);

  const classNames = [propClassName, s[variant], s[size]];

  return (
    <button
      {...restProps}
      className={cn(classNames)}
    >
      <HStack
        fitContent
        align='center'
        justify='center'
        gap={GapMap[size]}
      >
        <Icon
          name={leadingIcon}
          size={ButtonIconSizeMap[size]}
        />
        <Typo>{props.children}</Typo>
        <Icon
          name={trailingIcon}
          size={ButtonIconSizeMap[size]}
        />
      </HStack>
    </button>
  );
}
