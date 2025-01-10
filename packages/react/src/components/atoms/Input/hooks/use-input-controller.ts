import { useToggle } from '@/hooks/use-toggle'
import { ChangeEvent, useCallback, useState } from 'react'
import { HTMLInputProps } from '../shared'

export function useInputController(inputProps: HTMLInputProps) {
  const [value, setValue] = useState(valueConverter(inputProps.value || inputProps.defaultValue || ''))
  const [isFocused, _, setIsFocused] = useToggle(false)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(valueConverter(e.target.value))
  }, [])
  const onFocus = useCallback(() => setIsFocused(true), [])
  const onBlur = useCallback(() => setIsFocused(false), [])

  const clearValue = useCallback(() => setValue(''), [])

  const controller = {
    value,
    onChange,
    onFocus, onBlur,
  }
  
  const tools = {
    clearValue,
  }

  return {
    value,
    isFocused,
    tools,
    controller,
  }
}

function valueConverter(value: HTMLInputProps['value']) {
  if (typeof value === 'object') {
    return value.join(', ')
  }
  return value?.toString() || ''
}
