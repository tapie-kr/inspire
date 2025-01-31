import { type BaseStackProps, type LayoutTag, StackDirection } from '@/lib/layout/types';

import { Stack } from '../Stack';

type HStackProps<T extends LayoutTag> = Omit<BaseStackProps<T>, 'direction'>;

export function HStack<T extends LayoutTag>(props: HStackProps<T>) {
  return (
    <Stack
      direction={StackDirection.ROW}
      {...props}
    />
  );
}
