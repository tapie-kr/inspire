'use client';

import * as s from './styles.css';

import { spacingVars } from '@/lib/style/contract/component.css';

import { HStack } from '@cottons-kr/react-foundation';

import { Icon } from '@/components/foundations/Icon';

import { Typo } from '@/components/foundations/Typography';

import cn from 'classnames';

import { type IconName } from '@/components/foundations/Icon/shared';

import { Weight } from '@/components/foundations/Typography/shared';

type ChipProps = {
  leadingIcon?:  IconName;
  trailingIcon?: IconName;
  isActive?:     boolean;
  onClick?:      () => unknown;
  children?:     string;
};

export function Chip(props: ChipProps) {
  const { leadingIcon, trailingIcon, isActive = false } = props;

  return (
    <button
      className={cn(s.base, isActive && s.active)}
      onClick={props.onClick}
    >
      <HStack
        fitContent
        align='center'
        justify='center'
        gap={spacingVars.tiny}
      >
        <Icon
          name={leadingIcon}
          size={16}
        />

        <Typo.Tiny weight={Weight.MEDIUM}>{props.children}</Typo.Tiny>

        <Icon
          name={trailingIcon}
          size={16}
        />
      </HStack>
    </button>
  );
}
