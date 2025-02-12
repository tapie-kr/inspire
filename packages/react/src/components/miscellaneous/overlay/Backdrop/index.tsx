'use client';

import { backdrop, content } from './styles.css';

import { AnimatePresence, motion } from 'framer-motion';
import { useToggle } from '@/hooks/use-toggle';
import { DefaultProps } from '@/types/prop';
import { getTransition } from '@/utils/motion/transition';
import { Overlay } from '../Overlay';
import { BackdropContext, variants } from './shared';

type BackdropProps = DefaultProps & {
  toggler: ReturnType<typeof useToggle>;
};

export function Backdrop(props: BackdropProps) {
  const { toggler, children } = props;

  const [
    isOpen,
    _,
    setIsOpen,
  ] = toggler;

  const close = () => {
    setIsOpen(false);
  };

  return (
    <BackdropContext value={{
      isOpen, close,
    }}
    >
      <AnimatePresence>{isOpen && (
        <Overlay>
          <motion.div
            className={backdrop}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={getTransition({ duration: 0.3 })}
            onClick={close}
          >
            <div
              className={content}
              onClick={e => e.stopPropagation()}
            >{children}
            </div>
          </motion.div>
        </Overlay>
      )}
      </AnimatePresence>
    </BackdropContext>
  );
}
