'use client';

import '@/styles/reset.css';
import { children, visible } from './styles.css';

import cn from 'classnames';
import { Provider as JotaiProvider } from 'jotai';
import { type ReactNode, useEffect, useState } from 'react';
import { CheckMobileService } from './services/check-mobile';
import { OverlayService } from './services/overlay';
import { showSignature } from './shared';

type InspireProviderProps = {
  clarityId?:         string;
  googleAnalyticsId?: string;
  hideSignature?:     boolean;
  noScriptMessage?:   string;
  children?:          ReactNode;
};

export function InspireProvider(props: InspireProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      !props.hideSignature && showSignature();

      setIsInitialized(true);
    }
  }, [isInitialized, props.hideSignature]);

  return (
    <JotaiProvider>
      <div className={cn(children, isInitialized && visible)}>{props.children}</div>
      <noscript>{props.noScriptMessage || 'Javascript 실행을 허용해주세요.'}</noscript>
      <CheckMobileService />
      <OverlayService />
    </JotaiProvider>
  );
}
