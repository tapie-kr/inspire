import { type SelectHTMLAttributes } from 'react';

export type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

export enum SelectSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}

export type SelectItemProps = {
  label: string;
  value: string;
};
