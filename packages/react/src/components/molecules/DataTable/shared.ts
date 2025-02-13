import { type ReactNode } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';

export type Column<T extends object, K extends keyof T> = {
  [U in K]: {
    key:         U;
    label:       string;
    width?:      number | string;
    isSortable?: boolean;
    cell?:       (value: T[U], index: number, data: T) => ReactNode;
  };
}[K];

export type ActionIcon<T> = {
  icon:    IconName | ((data: T) => IconName);
  onClick: (data: T) => unknown;
};
