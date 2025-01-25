import { type ReactNode } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';

export type Action = {
  icon?: IconName;
  label: string;
  handleClick?: () => unknown;
};

export type Column<T extends object, K extends keyof T> = {
  [U in K]: {
    key: U;
    label: string;
    width?: number | string;
    isSortable?: boolean;
    cell?: (value: T[U]) => ReactNode;
  };
}[K];
