import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { viewportWidthAtom } from '@/lib/atoms';

export function CheckMobileService() {
  const setViewportWidth = useSetAtom(viewportWidthAtom);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.outerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}
