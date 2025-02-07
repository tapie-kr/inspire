import { ReactNode } from 'react';

export type OverlayMeta = {
  id:                string;
  dom:               HTMLDivElement | null;
  activeChildren:    Array<ReactNode>;
  wrapperClassName?: string | null;
};

export type MousePosition = {
  x: number;
  y: number;
};
