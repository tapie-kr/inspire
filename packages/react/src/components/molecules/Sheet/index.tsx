'use client';

import { directionStyle, sheet } from './styles/sheet.css';

import { VStack } from '@/components/miscellaneous/layout/VStack';
import { Backdrop } from '@/components/miscellaneous/overlay/Backdrop';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { useToggle } from '@/hooks/use-toggle';
import { StackAlign } from '@/lib/layout/types';
import { DefaultProps } from '@/types/prop';
import { getTransition } from '@/utils/motion/transition';
import { SheetHeader } from './header';
import { SheetDirection, sheetVariants } from './shared';

type SheetProps = DefaultProps & {
  toggler:    ReturnType<typeof useToggle>;
  title?:     string;
  direction?: SheetDirection;
};

export function Sheet(props: SheetProps) {
  const {
    toggler,
    title,
    direction = SheetDirection.RIGHT,
    children,
  } = props;

  return (
    <Backdrop toggler={toggler}>
      <motion.div
        className={cn(sheet, directionStyle[direction])}
        variants={sheetVariants[direction]}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={getTransition({ duration: 0.4 })}
      >
        <VStack
          fullWidth
          align={StackAlign.START}
        >
          <SheetHeader
            title={title}
            direction={direction}
          />
          {children}
        </VStack>
      </motion.div>
    </Backdrop>
  );
}
