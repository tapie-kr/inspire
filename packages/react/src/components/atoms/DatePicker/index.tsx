'use client';

import { base, input } from './styles.css';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { type InputHTMLAttributes } from 'react';

type DatePickerProps = InputHTMLAttributes<HTMLInputElement> & {
  withTime?: boolean;
};

export function DatePicker(props: DatePickerProps) {
  return (
    <HStack
      fullWidth
      tag='label'
      className={base}
    >
      <input
        className={input}
        type={props.withTime ? 'datetime-local' : 'date'}
        {...props}
      />
    </HStack>
  );
}
