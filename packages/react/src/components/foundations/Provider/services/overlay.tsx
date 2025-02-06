'use client';

import { overlay, visible } from './overlay.css';

import cn from 'classnames';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { overlayAtom } from '@/lib/atoms';

export function OverlayService() {
  const [overlayMeta, setOverlayMeta] = useAtom(overlayAtom);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setOverlayMeta(prev => ({
        ...prev,
        dom: ref.current,
      }));
    }
  }, [ref]);

  const classNames = [
    overlay,
    overlayMeta.wrapperClassName,
    { [visible]: overlayMeta.activeChildren.length > 0 },
  ];

  return (
    <div
      ref={ref}
      id={overlayMeta.id}
      className={cn(classNames)}
    />
  );
}
