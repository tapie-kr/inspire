import { type InputHTMLAttributes } from 'react';

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'>;

export enum InputSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}
