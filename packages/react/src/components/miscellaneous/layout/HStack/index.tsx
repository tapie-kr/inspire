import { type BaseStackProps, type LayoutTag, StackDirection } from '@/lib/layout/types';
import { Stack } from '../Stack';

type HStackProps<T extends LayoutTag = LayoutTag.DIV> = Omit<BaseStackProps<T>, 'direction'>;

export function HStack(props: HStackProps) {
  return (
    <Stack
      direction={StackDirection.ROW}
      {...props}
    />
  );
}
