import * as s from '../styles/text.css'

import { ReactNode, useMemo } from 'react'
import { ButtonIconSizeMap, ButtonPropsBase, ButtonSize, ButtonTypoSizeMap } from '../shared'
import { HStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@/constants'
import cn from 'classnames'
import { IconName } from '@/components/foundations/Icon/shared'
import { Icon } from '@/components/foundations/Icon'

const GapMap = {
  [ButtonSize.LARGE]: Spacing.Tiny,
  [ButtonSize.MEDIUM]: Spacing.Mini,
  [ButtonSize.SMALL]: Spacing.Optical,
} as const

type DefaultButtonProps = ButtonPropsBase & {
  leadingIcon?: IconName
  trailingIcon?: IconName
  children?: ReactNode
}

export function TextButton(props: DefaultButtonProps) {
  const {
    size: propSize, leadingIcon, trailingIcon,
    className: propClassName, ...restProps
  } = props

  const size = useMemo(() => propSize || ButtonSize.LARGE, [propSize])
  const Typo = useMemo(() => ButtonTypoSizeMap[size], [size])

  const classNames = [
    propClassName,
    s.base,
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
