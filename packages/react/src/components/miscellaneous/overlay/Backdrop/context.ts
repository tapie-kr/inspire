import { Variants } from 'framer-motion';
import { createContext } from 'react';

type BackdropContextType = {
  isOpen: boolean;
  close:  () => void;
};

export const BackdropContext = createContext({} as BackdropContextType);

export const variants: Variants = {
  hidden: {
    backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)',
  },
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(4px)',
  },
};
