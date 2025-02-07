import { atom } from 'jotai';
import { MousePosition, OverlayMeta } from '@/types/atom';

export const viewportWidthAtom = atom<number | null>(null);

export const overlayAtom = atom<OverlayMeta>({
  id:               'inspire-overlay',
  dom:              null,
  activeChildren:   [],
  wrapperClassName: null,
});

export const mousePositionAtom = atom<MousePosition>({
  x: 0,
  y: 0,
});
