'use client';

import { base, input } from './styles.css';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { Temporal } from '@js-temporal/polyfill';
import { type InputHTMLAttributes, useRef } from 'react';
import { StackJustify } from '@/lib/layout/types';

type DatetimePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
  value?:    Temporal.PlainDateTime;
  onChange?: (date: Temporal.PlainDateTime | undefined) => void;
};

export function DatetimePicker(props: DatetimePickerProps) {
  const {
    value,
    onChange,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    inputRef.current?.showPicker?.();

    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!inputValue) {
      onChange?.(undefined);

      return;
    }

    try {
      onChange?.(Temporal.PlainDateTime.from(inputValue));
    } catch {
      console.error('Invalid date format:', inputValue);
    }
  };

  return (
    <HStack
      fullWidth
      tag='label'
      className={base}
      justify={StackJustify.BETWEEN}
      onClick={handleOpen}
    >
      {/* <HStack
        spacing={spacingVars.mini}
      >
        <Icon name={GlyphIcon.CALENDAR_MONTH} />
        <Typo.Base color={value ? colorVars.content.emphasized : colorVars.content.default}>
          {value?.toLocaleString() || placeholder}
        </Typo.Base>
      </HStack>
      <Icon
        name={GlyphIcon.KEYBOARD_ARROW_UP}
      /> */}
      <input
        ref={inputRef}
        className={input}
        type='datetime-local'
        value={value ? value.toString() : ''}
        onChange={handleChange}
        onClick={event => event.stopPropagation()}
        {...rest}
      />
    </HStack>
  );
}
