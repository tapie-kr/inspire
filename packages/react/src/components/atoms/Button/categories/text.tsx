'use client';

import * as base from '../styles/base.css';

import * as s from '../styles/text.css';

import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';

import { Icon } from '@/components/foundations/Icon';

import cn from 'classnames';

import { type ReactNode, useMemo } from 'react';

import { type IconName } from '@/components/foundations/Icon/shared';

import { ButtonIconSizeMap, type ButtonPropsBase, ButtonSize, ButtonTypoSizeMap } from '../shared';

const GapMap = {
  [ButtonSize.LARGE]:  spacingVars.tiny,
  [ButtonSize.MEDIUM]: spacingVars.mini,
  [ButtonSize.SMALL]:  spacingVars.optical,
} as const;

type DefaultButtonProps = ButtonPropsBase & {
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  children?: ReactNode;
};

export function TextButton(props: DefaultButtonProps) {
  const {
    size: propSize,
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    fullHeight = false,
    className: propClassName,
    children,
    ...restProps
  } = props;

  const size = useMemo(() => propSize || ButtonSize.LARGE, [propSize]);

  const Typo = useMemo(() => ButtonTypoSizeMap[size], [size]);

  const classNames = [
    propClassName,
    s.base,
    s[size],
    {
      [base.fullWidth]:  fullWidth,
      [base.fullHeight]: fullHeight,
    },
  ];

  return (
    <button
      {...restProps}
      className={cn(classNames)}
    >
      <HStack
        fitContent={!fullWidth}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        align='center'
        justify='center'
        gap={GapMap[size]}
      >
        <Icon
          name={leadingIcon}
          size={ButtonIconSizeMap[size]}
        />

        <Typo>{children}</Typo>

        <Icon
          name={trailingIcon}
          size={ButtonIconSizeMap[size]}
        />
      </HStack>
    </button>
  );
}
