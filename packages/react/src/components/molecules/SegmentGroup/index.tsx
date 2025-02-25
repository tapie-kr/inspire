'use client';

import { segmentGroup } from './styles.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@/components/miscellaneous/layout/HStack';

import { type ReactNode, useCallback, useState } from 'react';
import { SegmentGroupContext } from './context';

type SegmentGroupProps = {
  defaultValue: string;
  onChange?:    (value: string) => unknown;
  children?:    ReactNode;
};

export function SegmentGroup(props: SegmentGroupProps) {
  const [currentValue, setCurrentValue] = useState(props.defaultValue);

  const handleChange = useCallback((value: string) => {
    setCurrentValue(value);

    props.onChange?.(value);
  },
  [props]);

  return (
    <SegmentGroupContext.Provider value={{
      value:    currentValue,
      onChange: handleChange,
    }}
    >
      <HStack
        fullWidth
        className={segmentGroup}
        spacing={spacingVars.mini}
      >
        {props.children}
      </HStack>
    </SegmentGroupContext.Provider>
  );
}
