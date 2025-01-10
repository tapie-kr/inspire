import * as s from './styles.css'

import { Icon } from '@/components/foundations/Icon'
import { IconName } from '@/components/foundations/Icon/shared'
import { Color, Spacing } from '@/constants'
import { HStack } from '@cottons-kr/react-foundation'
import { useInputController } from './hooks/use-input-controller'
import { HTMLInputProps } from './shared'
import { useMemo } from 'react'
import { GlyphIcon } from '@/components/foundations/Icon/icon-set'
import { useToggle } from '@/hooks/use-toggle'

type InputProps = HTMLInputProps & {
  leadingIcon?: IconName
  secure?: boolean
}

export function Input(props: InputProps) {
  const {
    leadingIcon, secure,
    ...restProps
  } = props
  const { value, isFocused, tools, controller } = useInputController(restProps)
  const [hideValue, toggleHideValue] = useToggle(secure)
  
  const hasValue = useMemo(() => value.length > 0, [value])
  const showClearButton = hasValue
  const showVisibilityButton = useMemo(() => hasValue && secure, [hasValue, secure])

  return <>
    <HStack tag='label' className={s.base} align='center' fullWidth gap={Spacing.Mini}>
      <HStack align='center' gap={Spacing.Micro}>
        <Icon name={props.leadingIcon} color={isFocused && Color.Content.Emphasized} />
        <input
          {...restProps}
          className={s.input} type={hideValue ? 'password' : 'text'}
          {...controller}
        />
      </HStack>
      <HStack gap={Spacing.Micro} fitContent>
        <Icon
          name={
            showVisibilityButton &&
            (hideValue ? GlyphIcon.VISIBILITY : GlyphIcon.DEFAULT) // TODO: Change DEFAULT to VISIBILITY_OFF
          } size={20}
          onClick={toggleHideValue}
        />
        <Icon
          name={showClearButton && GlyphIcon.CLOSE} size={20}
          onClick={tools.clearValue}
        />
      </HStack>
    </HStack>
  </>
}
