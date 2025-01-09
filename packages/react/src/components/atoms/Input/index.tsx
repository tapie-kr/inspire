import { GlyphIcon } from '@/components/foundations/Icon/icon-set'
import * as s from './styles.css'

import { Icon } from '@/components/foundations/Icon'
import { IconName } from '@/components/foundations/Icon/shared'
import { Spacing } from '@/constants'
import { HStack } from '@cottons-kr/react-foundation'
import { InputHTMLAttributes, useRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: IconName
  secure?: boolean
}

export function Input(props: InputProps) {
  const {
    leadingIcon, secure,
    ...restProps
  } = props

  return <>
    <HStack tag='label' className={s.base} align='center' fullWidth>
      <HStack align='center' gap={Spacing.Micro}>
        {props.leadingIcon && <Icon name={props.leadingIcon} />}
        <input className={s.input} {...restProps} />
      </HStack>
      <HStack gap={Spacing.Mini}>

      </HStack>
    </HStack>
  </>
}
