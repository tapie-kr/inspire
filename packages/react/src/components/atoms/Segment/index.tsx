'use client';

import { active, segment } from './styles.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Icon } from '@/components/foundations/Icon';
import { Typo } from '@/components/foundations/Typography';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { SegmentGroupContext } from '@/components/molecules/SegmentGroup/context';

import cn from 'classnames';
import { useCallback, useContext, useMemo } from 'react';
import { type IconName } from '@/components/foundations/Icon/shared';
import { Weight } from '@/components/foundations/Typography/shared';

type SegmentProps = {
  leadingIcon?: IconName;
  label: string;
  value: string;
};

export function Segment(props: SegmentProps) {
  const { value, onChange } = useContext(SegmentGroupContext);
  const isContextInitialized = value !== undefined && onChange !== undefined;
  const isActive = useMemo(() => value === props.value, [value, props.value]);

  const handleClick = useCallback(() => {
    onChange?.(props.value);
  }, [onChange, props.value]);

  return (
    <HStack
      className={cn(segment, {
        [active]: isActive,
      })}
      fullWidth={isContextInitialized}
      spacing={spacingVars.mini}
      onClick={handleClick}
    >
      <Icon
        name={props.leadingIcon}
        size={20}
      />
      <Typo.Petite weight={isActive ? Weight.SEMIBOLD : Weight.MEDIUM}>{props.label}</Typo.Petite>
    </HStack>
  );
}
