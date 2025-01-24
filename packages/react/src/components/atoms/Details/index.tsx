'use client';

import { details, icon, rotateIcon, summary, titleContainer } from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { HStack } from '@/components/miscellaneous/layout/HStack';

import cn from 'classnames';
import { motion } from 'motion/react';
import { type MouseEvent, type ReactNode, useCallback, useState } from 'react';
import { utilityClass } from '@/lib/style/utility';
import { type DefaultProps } from '@/types/props';
import { getTransition } from '@/utils/motion/transition';

type DetailsProps = DefaultProps & {
  title: ReactNode;
  defaultOpen?: boolean;
  hideDefaultIcon?: boolean;
  disabled?: boolean;
  onToggle?: (isOpened: boolean) => unknown;
};

export function Details(props: DetailsProps) {
  const { title, defaultOpen, hideDefaultIcon, disabled, onToggle } = props;
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
    <div>
      <details
        className={details}
        open={isOpened}
        onClick={handleDetailsClick}
      >
        <summary className={summary}>
          <HStack
            className={titleContainer}
            spacing={spacingVars.mini}
          >
            <Icon
              className={cn(icon, { [rotateIcon]: !isOpened })}
              name={!hideDefaultIcon && GlyphIcon.KEYBOARD_ARROW_DOWN}
              color={colorVars.content.default}
              size={16}
            />
            {title}
          </HStack>
        </summary>
        <div className={utilityClass.visuallyHidden}>{props.children}</div>
      </details>
      <motion.div
        className={utilityClass.hideOverflow}
        initial={false}
        animate={{ height: isOpened ? 'auto' : 0 }}
        transition={getTransition({ duration: 0.35 })}
        aria-hidden
      >
        <motion.div
          initial={false}
          animate={{
            opacity: isOpened ? 1 : 0,
            y: isOpened ? 0 : -20,
          }}
          transition={getTransition({ duration: 0.3, delay: isOpened ? 0.06 : 0 })}
        >
          {props.children}
        </motion.div>
      </motion.div>
    </div>
  );
}
