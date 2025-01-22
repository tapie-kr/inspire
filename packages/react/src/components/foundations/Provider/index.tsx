'use client';

import '@/styles/reset.css';

import { type ReactNode, useEffect, useState } from 'react';
import { showSignature } from './shared';

type InspireProviderProps = {
  clarityId?: string;
  googleAnalyticsId?: string;
  hideSignature?: boolean;
  children?: ReactNode;
};

export function InspireProvider(props: InspireProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      !props.hideSignature && showSignature();
      setIsInitialized(true);
    }
  }, [isInitialized, props.hideSignature]);

  return props.children;
}
