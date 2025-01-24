import { spacingVars } from '@/lib/style/contract/component.css';

import { Details } from '@/components/atoms/Details';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { type ReactNode } from 'react';
import { StackJustify } from '@/lib/layout/types';

type DataViewProps = {
  actions?: ReactNode;
};

export function DataView(props: DataViewProps) {
  return (
    <VStack fullWidth>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
      >
        <Details
          title={
            <HStack spacing={spacingVars.mini}>
              <Icon name={GlyphIcon.FILTER_LIST} />
              <Typo.Petite>필터</Typo.Petite>
            </HStack>
          }
        ></Details>
        <HStack>{props.actions}</HStack>
      </HStack>
    </VStack>
  );
}
