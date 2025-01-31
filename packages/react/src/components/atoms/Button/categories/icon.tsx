'use client';

import * as base from '../styles/base.css';

import * as s from '../styles/icon.css';

import { primaryThemes } from '../styles/themes/primary.css';

import { secondaryThemes } from '../styles/themes/secondary.css';

import { Icon } from '@/components/foundations/Icon';

import cn from 'classnames';

import { type IconName } from '@/components/foundations/Icon/shared';

import { Theme } from '@/lib/style/theme';

import { ButtonIconSizeMap, type ButtonPropsBase, ButtonSize, ButtonVariant } from '../shared';

type IconButtonProps = ButtonPropsBase & {
  variant?: ButtonVariant;
  theme?: Theme;
  icon: IconName;
};

export function IconButton(props: IconButtonProps) {
  const {
    variant = ButtonVariant.PRIMARY,
    theme = Theme.MONOCHROME,
    size = ButtonSize.LARGE,
    icon,
    fullWidth = false,
    fullHeight = false,
    className: propClassName,
    ...restProps
  } = props;

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
      <Icon
        name={icon}
        size={ButtonIconSizeMap[size]}
      />
    </button>
  );
}
