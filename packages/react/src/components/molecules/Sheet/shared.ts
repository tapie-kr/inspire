import { Variants } from 'framer-motion';
import { createContext } from 'react';

type SheetContextType = {
  direction: SheetDirection;
  close:     () => void;
};

export const SheetContext = createContext({} as SheetContextType);

export enum SheetHeaderType {
  TITLE = 'title',
  HANDLE_BAR = 'handle-bar',
}

export enum SheetDirection {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const backdropVariants: Variants = {
  hidden: {
    backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)',
  },
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(4px)',
  },
};

export const sheetVariants: Record<SheetDirection, Variants> = {
  [SheetDirection.LEFT]: {
    hidden:  { x: '-100%' },
    visible: { x: 0 },
  },
  [SheetDirection.RIGHT]: {
    hidden:  { x: '100%' },
    visible: { x: 0 },
  },
  [SheetDirection.TOP]: {
    hidden:  { y: '-100%' },
    visible: { y: 0 },
  },
  [SheetDirection.BOTTOM]: {
    hidden:  { y: '100%' },
    visible: { y: 0 },
  },
};
