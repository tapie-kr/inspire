import { useCallback, useState } from 'react';
import { useToggle } from '@/hooks/use-toggle';
import { type HTMLSelectProps } from '../shared';

export function useSelectController(selectProps: HTMLSelectProps) {
  const [value, setValue] = useState(selectProps.value || selectProps.defaultValue || '');

  const [
    isOpen,
    toggleOpen,
    setIsOpen,
  ] = useToggle(false);

  const [
    isFocused,
    _,
    setIsFocused,
  ] = useToggle(false);

  const handleSelect = useCallback((newValue: string) => {
    if (selectProps.onChange) {
      const event = { target: { value: newValue } } as React.ChangeEvent<HTMLSelectElement>;

      selectProps.onChange(event);
    }

    setValue(newValue);

    setIsOpen(false);
  }, [selectProps.onChange, setIsOpen]);

  const onFocus = useCallback(() => setIsFocused(true), [setIsFocused]);

  const onBlur = useCallback(() => {
    setIsFocused(false);

    setTimeout(() => setIsOpen(false), 200);
  }, [setIsFocused, setIsOpen]);

  return {
    value,
    isOpen,
    isFocused,
    toggleOpen,
    handleSelect,
    onFocus,
    onBlur,
  };
}
