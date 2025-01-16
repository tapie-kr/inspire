import { type InputHTMLAttributes } from 'react';

export type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;
export type HTMLTextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>;

export enum InputSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}
