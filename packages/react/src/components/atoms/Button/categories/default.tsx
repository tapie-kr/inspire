'use client';

import * as base from '../styles/base.css';
import * as s from '../styles/default.css';
import { primaryThemes } from '../styles/themes/primary.css';
import { secondaryThemes } from '../styles/themes/secondary.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Icon } from '@/components/foundations/Icon';
import { HStack } from '@/components/miscellaneous/layout/HStack';

import cn from 'classnames';
import { type ReactNode, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { Theme } from '@/lib/style/theme';
import {
  ButtonIconSizeMap,
  type ButtonPropsBase,
  ButtonSize,
  ButtonTypoSizeMap,
  ButtonVariant,
} from '../shared';

const GapMap = {
  [ButtonSize.LARGE]:  spacingVars.micro,
  [ButtonSize.MEDIUM]: spacingVars.mini,
  [ButtonSize.SMALL]:  spacingVars.mini,
} as const;

type DefaultButtonProps = ButtonPropsBase & {
  variant?:      ButtonVariant;
  theme?:        Theme;
  leadingIcon?:  IconName;
  trailingIcon?: IconName;
  children?:     ReactNode;
};

export function DefaultButton(props: DefaultButtonProps) {
  const {
    size = ButtonSize.LARGE,
    variant = ButtonVariant.PRIMARY,
    theme = Theme.MONOCHROME,
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    fullHeight = false,
    className: propClassName,
    ...restProps
  } = props;

  const Typo = useMemo(() => ButtonTypoSizeMap[size], [size]);
  const themeClassName = variant === ButtonVariant.PRIMARY ? primaryThemes : secondaryThemes;

  const classNames = [
    propClassName,
    s[variant],
    themeClassName[theme],
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
        fullWidth
        fullHeight={fullHeight}
        spacing={GapMap[size]}
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
