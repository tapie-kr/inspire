'use client';

import { backdrop, directionStyle, sheet } from './styles/sheet.css';

import { VStack } from '@/components/miscellaneous/layout/VStack';
import { Overlay } from '@/components/miscellaneous/Overlay';

import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useToggle } from '@/hooks/use-toggle';
import { StackAlign } from '@/lib/layout/types';
import { DefaultProps } from '@/types/prop';
import { getTransition } from '@/utils/motion/transition';
import { SheetHeader } from './header';
import {
  backdropVariants,
  SheetContext,
  SheetDirection,
  sheetVariants,
} from './shared';

type SheetProps = DefaultProps & {
  toggler:    ReturnType<typeof useToggle>;
  direction?: SheetDirection;
};

export function Sheet(props: SheetProps) {
  const {
    toggler,
    direction = SheetDirection.RIGHT,
    children,
  } = props;

  const [
    showSheet,
    _,
    setShowSheet,
  ] = toggler;

  const handleSheetClose = () => {
    setShowSheet(false);
  };

  return (
    <SheetContext value={{
      direction, close: handleSheetClose,
    }}
    >
      <AnimatePresence>{showSheet && (
        <Overlay>
          <motion.div
            className={backdrop}
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={getTransition({ duration: 0.3 })}
            onClick={handleSheetClose}
          >
            <motion.div
              className={cn(sheet, directionStyle[direction])}
              variants={sheetVariants[direction]}
              initial='hidden'
              animate='visible'
              exit='hidden'
              transition={getTransition({ duration: 0.4 })}
              onClick={e => e.stopPropagation()}
            >
              <VStack
                fullWidth
                align={StackAlign.START}
              >
                <SheetHeader />
                {children}
              </VStack>
            </motion.div>
          </motion.div>
        </Overlay>
      )}
      </AnimatePresence>
    </SheetContext>
  );
}
