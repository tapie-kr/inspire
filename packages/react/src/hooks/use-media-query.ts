import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { viewportWidthAtom } from '@/lib/atoms';

export function useMediaQuery(width = 768) {
  const viewportWidth = useAtomValue(viewportWidthAtom);

  const isSatisfied = useMemo(() => {
    if (viewportWidth === null) {
      return false;
    }

    return viewportWidth <= width;
  }, [viewportWidth, width]);

  return isSatisfied;
}
