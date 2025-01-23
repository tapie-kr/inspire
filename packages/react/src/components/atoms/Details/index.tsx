'use client';

import { icon, rotateIcon, summary } from './styles.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { HStack } from '@/components/miscellaneous/layout/HStack';

import cn from 'classnames';
import { type MouseEvent, type ReactNode, useCallback, useState } from 'react';
import { type DefaultProps } from '@/types/props';

type DetailsProps = DefaultProps & {
  title: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  onToggle?: (isOpened: boolean) => unknown;
};

export function Details(props: DetailsProps) {
  const { title, defaultOpen, disabled, onToggle } = props;
  const [isOpened, setIsOpened] = useState(defaultOpen || false);

  const handleDetailsClick = useCallback(
    (e: MouseEvent<HTMLDetailsElement>) => {
      e.preventDefault();
      if (disabled) return;

      const newIsOpened = !isOpened;
      setIsOpened(newIsOpened);
      onToggle?.(newIsOpened);
    },
    [disabled, isOpened, onToggle],
  );

  return (
    <details
      open={isOpened}
      onClick={handleDetailsClick}
    >
      <summary className={summary}>
        <HStack spacing={spacingVars.mini}>
          <Icon
            className={cn(icon, { [rotateIcon]: !isOpened })}
            name={GlyphIcon.KEYBOARD_ARROW_DOWN}
            size={16}
          />
          {title}
        </HStack>
      </summary>
      {props.children}
    </details>
  );
}
