import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { mousePositionAtom } from '@/lib/atoms';

export function MousePositionService() {
  const setPosition = useSetAtom(mousePositionAtom);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setPosition({
        x: event.clientX, y: event.clientY,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return null;
}
