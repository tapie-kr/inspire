'use client';

import { base } from './styles.css';

import { Backdrop } from '@/components/miscellaneous/overlay/Backdrop';

import { motion } from 'framer-motion';
import { type Toggler } from '@/hooks/use-toggle';
import { type DefaultProps } from '@/types/prop';
import { getTransition } from '@/utils/motion/transition';
import { dialogVariants } from './shared';

type DialogProps = DefaultProps & {
  toggler: Toggler;
  modal?:  boolean;
};

export function Dialog(props: DialogProps) {
  return (
    <Backdrop
      toggler={props.toggler}
      preventBackdropClick={props.modal}
    >
      <motion.div
        className={base}
        variants={dialogVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={getTransition({ duration: 0.3 })}
      >{props.children}
      </motion.div>
    </Backdrop>
  );
}
