import { type ReactNode } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';

export type Action = {
  icon?: IconName;
  label: string;
  handleClick?: () => unknown;
};

export type AcceptableData = Record<string | number | symbol, unknown>;

export type Column<T extends AcceptableData, K extends keyof T> = {
  key: K;
  label: string;
  width?: number | string;
  isSortable?: boolean;
  cell?: (data?: T[K]) => ReactNode;
};
