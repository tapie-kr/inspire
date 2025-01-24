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
