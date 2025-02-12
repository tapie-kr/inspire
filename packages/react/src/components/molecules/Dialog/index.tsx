import { base } from './styles.css';

import { Backdrop } from '@/components/miscellaneous/overlay/Backdrop';

import { motion } from 'framer-motion';
import { Toggler } from '@/hooks/use-toggle';
import { DefaultProps } from '@/types/prop';
import { getTransition } from '@/utils/motion/transition';
import { variants } from './shared';

type DialogProps = DefaultProps & {
  toggler: Toggler;
};

export function Dialog(props: DialogProps) {
  return (
    <Backdrop toggler={props.toggler}>
      <motion.div
        className={base}
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={getTransition({ duration: 0.3 })}
      >{props.children}
      </motion.div>
    </Backdrop>
  );
}
