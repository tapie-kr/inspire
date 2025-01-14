import * as s from '../styles/icon.css';

import { Icon } from '@/components/foundations/Icon';

import cn from 'classnames';
import { useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { ButtonIconSizeMap, type ButtonPropsBase, ButtonSize, ButtonVariant } from '../shared';

type IconButtonProps = ButtonPropsBase & {
  variant?: ButtonVariant;
  icon: IconName;
};

export function IconButton(props: IconButtonProps) {
  const {
    variant: propVariant,
    size: propSize,
    icon,
    className: propClassName,
    ...restProps
  } = props;

  const size = useMemo(() => propSize || ButtonSize.LARGE, [propSize]);
  const variant = useMemo(() => propVariant || ButtonVariant.PRIMARY, [propVariant]);

  const classNames = [propClassName, s[variant], s[size]];

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
