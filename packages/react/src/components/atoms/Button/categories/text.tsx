import * as s from '../styles/text.css'

import { ReactNode, useMemo } from 'react'
import { ButtonIconSizeMap, ButtonPropsBase, ButtonSize, ButtonTypoSizeMap } from '../shared'
import { HStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@/constants'
import { ButtonIcon } from '../icon'
import cn from 'classnames'
import { IconName } from '@/components/foundations/Icon/shared'

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
        <ButtonIcon name={props.leadingIcon} size={ButtonIconSizeMap[size]} />
        <Typo>{props.children}</Typo>
        <ButtonIcon name={props.trailingIcon} size={ButtonIconSizeMap[size]} />
      </HStack>
    </button>
  </>
}
