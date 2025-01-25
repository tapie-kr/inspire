import { type ReactNode } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';

export type Action = {
  icon?: IconName;
  label: string;
  handleClick?: () => unknown;
};

export type Filter = {
  label: string;
  options: Array<FilterOption>;
};

export type FilterOption = {
  icon?: IconName;
  label: string;
  value: string;
  onToggle?: (isActive?: boolean) => unknown;
};

export type Column<T, K extends keyof T> = {
  key: K;
  label: string;
  width?: number | string;
  isSortable?: boolean;
  cell?: (data?: T[K]) => ReactNode;
};
