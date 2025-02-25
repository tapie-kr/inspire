import { type IconName } from '@/components/foundations/Icon/shared';

export type FilterGroup = {
  label:   string;
  options: Array<FilterOption>;
};

export type FilterOption = {
  icon?:     IconName;
  label:     string;
  value:     string;
  onToggle?: (isActive?: boolean) => unknown;
};
