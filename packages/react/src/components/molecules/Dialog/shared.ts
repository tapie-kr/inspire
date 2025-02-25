import { type Variants } from 'framer-motion';

export const dialogVariants: Variants = {
  hidden: {
    y:       5,
    opacity: 0,
    scale:   0.95,
  },
  visible: {
    y:       0,
    opacity: 1,
    scale:   1,
  },
};
