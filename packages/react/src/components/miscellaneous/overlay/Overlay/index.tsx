'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { overlayAtom } from '@/lib/atoms';
import { type DefaultProps } from '@/types/prop';

type OverlayProps = DefaultProps & {
  key?: string;
};

export function Overlay(props: OverlayProps) {
  const id = useMemo(() => Math.random().toString(36)
    .slice(2), []);

  const overlayMeta = useAtomValue(overlayAtom);
  const setOverlayMeta = useSetAtom(overlayAtom);

  useEffect(() => {
    setOverlayMeta(prev => ({
      ...prev,
      activeChildren:   [...prev.activeChildren, id],
      wrapperClassName: props.className,
    }));

    return () => {
      setOverlayMeta(prev => ({
        ...prev,
        activeChildren:   prev.activeChildren.filter(child => child !== id),
        wrapperClassName: null,
      }));
    };
  }, [props.className]);

  return overlayMeta.dom
    ? createPortal(props.children, overlayMeta.dom, props.key) as React.ReactNode
    : null;
}
