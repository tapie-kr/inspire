import { BaseStackProps, LayoutTag, StackDirection } from '@/lib/layout/types';
import { Stack } from '../Stack';

type VStackProps<T extends LayoutTag = LayoutTag.DIV> = Omit<BaseStackProps<T>, 'direction'>;

export function VStack(props: VStackProps) {
  return (
    <Stack
      direction={StackDirection.COLUMN}
      {...props}
    />
  );
}
