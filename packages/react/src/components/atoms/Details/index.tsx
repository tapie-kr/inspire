'use client';

import { details, icon, rotateIcon, summary, titleContainer } from './styles.css';
import { colorVars } from '@/lib/style/contract/color.css';
import { spacingVars } from '@/lib/style/contract/component.css';

import { Icon } from '@/components/foundations/Icon';
import { GlyphIcon } from '@/components/foundations/Icon/icon-set';
import { HStack } from '@/components/miscellaneous/layout/HStack';
import { VStack } from '@/components/miscellaneous/layout/VStack';

import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { type MouseEvent, type ReactNode, useCallback, useState } from 'react';
import { StackAlign } from '@/lib/layout/types';
import { utilityClass } from '@/lib/style/utility';
import { type DefaultProps } from '@/types/prop';
import { getTransition } from '@/utils/motion/transition';

type DetailsProps = DefaultProps & {
  title:            ReactNode;
  defaultOpen?:     boolean;
  hideDefaultIcon?: boolean;
  disabled?:        boolean;
  onToggle?:        (isOpened: boolean) => unknown;
};

export function Details(props: DetailsProps) {
  const { title, defaultOpen, hideDefaultIcon, disabled, onToggle } = props;

  const [isOpened, setIsOpened] = useState(defaultOpen || false);

  const handleDetailsClick = useCallback((e: MouseEvent<HTMLDetailsElement>) => {
    e.preventDefault();

    if (disabled) return;

    const newIsOpened = !isOpened;

    setIsOpened(newIsOpened);

    onToggle?.(newIsOpened);
  },
  [disabled, isOpened, onToggle]);

  return (
    <VStack
      align={StackAlign.START}
      spacing={spacingVars.micro}
    >
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
        aria-hidden
        initial={false}
        animate={{ height: isOpened ? 'auto' : 0 }}
        transition={getTransition({ duration: 0.35 })}
      >
        <AnimatePresence initial={false}>
          {isOpened
            ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y:       -20,
                }}
                exit={{
                  opacity:    0,
                  y:          -20,
                  transition: getTransition({ duration: 0.3 }),
                }}
                animate={{
                  opacity:    1,
                  y:          0,
                  transition: getTransition({
                    duration: 0.3,
                    delay:    0.06,
                  }),
                }}
              >
                {props.children}
              </motion.div>
            )
            : null}
        </AnimatePresence>
      </motion.div>
    </VStack>
  );
}
