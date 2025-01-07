import * as s from '../styles/icon.css'

import { IconName } from '@/components/foundations/Icon/shared'
import { useMemo } from 'react'
import { ButtonIconSizeMap, ButtonPropsBase, ButtonSize, ButtonVariant } from '../shared'
import cn from 'classnames'
import { ButtonIcon } from '../icon'

type IconButtonProps = ButtonPropsBase & {
  variant?: ButtonVariant
  icon: IconName
}

export function IconButton(props: IconButtonProps) {
  const {
    variant: propVariant, size: propSize, icon,
    className: propClassName, ...restProps
  } = props

  const size = useMemo(() => propSize || ButtonSize.LARGE, [propSize])
  const variant = useMemo(() => propVariant || ButtonVariant.PRIMARY, [propVariant])

  const classNames = [
    propClassName,
    s[variant],
    s[size],
  ]

  return <>
    <button {...restProps} className={cn(classNames)}>
      <ButtonIcon name={icon} size={ButtonIconSizeMap[size]} />
    </button>
  </>
}
