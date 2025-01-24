'use client';

import { filterLabel } from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Button } from '@/components/atoms/Button';
import { Chip } from '@/components/atoms/Chip';
import { Details } from '@/components/atoms/Details';
import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { Typo } from '@/components/foundations/Typography';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { Stack } from '@/components/miscellaneous/layout/Stack';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import { ButtonSize } from '@/components/atoms/Button/shared';
import { StackAlign, StackJustify } from '@/lib/layout/types';
import { type Action, type Filter } from './shared';

type DataViewProps = {
  actions?: Array<Action>;
  filters?: Array<Filter>;
};

export function DataView(props: DataViewProps) {
  return (
    <VStack fullWidth>
      <HStack
        fullWidth
        align={StackAlign.START}
        justify={StackJustify.BETWEEN}
      >
        <Details
          title={
            <HStack spacing={spacingVars.mini}>
              <Icon name={GlyphIcon.FILTER_LIST} />
              <Typo.Petite>필터</Typo.Petite>
            </HStack>
          }
        >
          <HStack spacing={spacingVars.base}>
            <VStack
              align={StackAlign.START}
              spacing={spacingVars.micro}
            >
              {props.filters?.map(f => (
                <Stack
                  key={f.label}
                  className={filterLabel}
                >
                  <Typo.Petite color={colorVars.content.default}>{f.label}</Typo.Petite>
                </Stack>
              ))}
            </VStack>
            <VStack spacing={spacingVars.micro}>
              {props.filters?.map(f => (
                <HStack
                  key={f.label}
                  spacing={spacingVars.micro}
                >
                  {f.options.map(o => (
                    <Chip
                      key={o.value}
                      leadingIcon={o.icon}
                    >
                      {o.label}
                    </Chip>
                  ))}
                </HStack>
              ))}
            </VStack>
          </HStack>
        </Details>
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
