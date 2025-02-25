'use client';

import { base, input } from './styles.css';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { Temporal } from '@js-temporal/polyfill';
import { type InputHTMLAttributes, useRef } from 'react';
import { StackJustify } from '@/lib/layout/types';

export type DateType = Temporal.PlainDate | Temporal.PlainDateTime;

type DatePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
  withTime?: boolean;
  value?:    DateType;
  onChange?: (date: DateType | undefined) => void;
};

export function DatePicker(props: DatePickerProps) {
  const {
    withTime,
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
      const newDate = withTime
        ? Temporal.PlainDateTime.from(inputValue)
        : Temporal.PlainDate.from(inputValue);

      onChange?.(newDate);
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
        type={withTime ? 'datetime-local' : 'date'}
        value={value ? value.toString() : ''}
        onChange={handleChange}
        onClick={event => event.stopPropagation()}
        {...rest}
      />
    </HStack>
  );
}
