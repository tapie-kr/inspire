import { useAtomValue } from 'jotai';
import { mousePositionAtom } from '@/lib/atoms';

export function useMousePosition() {
  return useAtomValue(mousePositionAtom);
}
