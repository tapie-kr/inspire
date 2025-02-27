import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useToggle } from '@/hooks/use-toggle';
import { type HTMLInputProps, type HTMLTextAreaProps } from '../shared';

type ElementType<T> = T extends HTMLInputProps
  ? HTMLInputElement
  : T extends HTMLTextAreaProps
    ? HTMLTextAreaElement
    : never;

export function useTextInputController<T extends HTMLInputProps | HTMLTextAreaProps>(inputProps: T) {
  const [value, setValue] = useState(valueConverter(inputProps.value || inputProps.defaultValue || ''));

  const [
    isFocused,
    _,
    setIsFocused,
  ] = useToggle(false);

  const onChange = useCallback((e: ChangeEvent<ElementType<T>>) => {
    if (inputProps.maxLength && e.target.value.length > inputProps.maxLength) {
      return;
    }

    if (inputProps.disabled) {
      return;
    }

    if (inputProps.onChange) {
      inputProps.onChange(e as unknown as ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>);
    }

    setValue(valueConverter(e.target.value));
  },
  [
    inputProps.maxLength,
    inputProps.disabled,
    inputProps.onChange,
  ]);

  const onFocus = useCallback(() => setIsFocused(true), [setIsFocused]);
  const onBlur = useCallback(() => setIsFocused(false), [setIsFocused]);

  const clearValue = useCallback(() => {
    if (!inputProps.disabled) {
      setValue('');
    }
  }, [inputProps.disabled]);

  const controller = {
    value,
    onChange,
    onFocus,
    onBlur,
  };

  const tools = { clearValue };

  useEffect(() => {
    setValue(valueConverter(inputProps.value || ''));
  }, [inputProps.value]);

  return {
    value,
    isFocused,
    tools,
    controller,
  };
}

function valueConverter(value: HTMLInputProps['value']): string {
  if (typeof value === 'object') {
    return value.join(', ');
  }

  return value?.toString() || '';
}
