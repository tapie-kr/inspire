'use client';

import { Button } from '@/components/atoms/Button';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { ButtonSize } from '@/components/atoms/Button/shared';
import { StackAlign, StackJustify } from '@/lib/layout/types';
import { Filter } from './filter';
import { type Action, type Filter as FilterType } from './shared';

type DataViewProps = {
  actions?: Array<Action>;
  filters?: Array<FilterType>;
};

export function DataView(props: DataViewProps) {
  return (
    <VStack fullWidth>
      <HStack
        fullWidth
        align={StackAlign.START}
        justify={StackJustify.BETWEEN}
      >
        <Filter filters={props.filters} />
        <HStack>
          {props.actions?.map(a => (
            <Button.Default
              size={ButtonSize.MEDIUM}
              leadingIcon={a.icon}
              onClick={a.handleClick}
            >
              {a.label}
            </Button.Default>
          ))}
        </HStack>
      </HStack>
    </VStack>
  );
}
