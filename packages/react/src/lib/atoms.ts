import { atom } from 'jotai';
import { type OverlayMeta } from '@/types/atom';

export const viewportWidthAtom = atom<number | null>(null);

export const overlayAtom = atom<OverlayMeta>({
  id:               'inspire-overlay',
  dom:              null,
  activeChildren:   [],
  wrapperClassName: null,
});
