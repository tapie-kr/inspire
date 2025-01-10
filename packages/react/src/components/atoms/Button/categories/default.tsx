import * as s from '../styles/default.css'

import { ReactNode, useMemo } from 'react'
import { ButtonIconSizeMap, ButtonPropsBase, ButtonSize, ButtonTypoSizeMap, ButtonVariant } from '../shared'
import { HStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@/constants'
import cn from 'classnames'
import { IconName } from '@/components/foundations/Icon/shared'
import { Icon } from '@/components/foundations/Icon'

const GapMap = {
  [ButtonSize.LARGE]: Spacing.Micro,
  [ButtonSize.MEDIUM]: Spacing.Mini,
  [ButtonSize.SMALL]: Spacing.Mini,
} as const

type DefaultButtonProps = ButtonPropsBase & {
  variant?: ButtonVariant
  leadingIcon?: IconName
  trailingIcon?: IconName
  children?: ReactNode
}

export function DefaultButton(props: DefaultButtonProps) {
  const {
    size: propSize, variant: propVariant, leadingIcon, trailingIcon,
    className: propClassName, ...restProps
  } = props

  const size = useMemo(() => propSize || ButtonSize.LARGE, [propSize])
  const variant = useMemo(() => propVariant || ButtonVariant.PRIMARY, [propVariant])
  const Typo = useMemo(() => ButtonTypoSizeMap[size], [size])

  const classNames = [
    propClassName,
    s[variant],
    s[size],
  ]

  return <>
    <button {...restProps} className={cn(classNames)}>
      <HStack fitContent align='center' justify='center' gap={GapMap[size]}>
        <Icon name={props.leadingIcon} size={ButtonIconSizeMap[size]} />
        <Typo>{props.children}</Typo>
        <Icon name={props.trailingIcon} size={ButtonIconSizeMap[size]} />
      </HStack>
    </button>
  </>
}
