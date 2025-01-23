import { type ReactNode } from 'react';

type DefaultProps<NO_CHILDREN extends boolean = false> = {
  className?: string;
  children?: NO_CHILDREN extends true ? never : ReactNode;
};
