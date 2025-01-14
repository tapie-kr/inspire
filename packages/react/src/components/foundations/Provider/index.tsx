import '@/styles/reset.css';

import { type ReactNode } from 'react';

type InspireProviderProps = {
  children?: ReactNode;
};

export function InspireProvider(props: InspireProviderProps) {
  return props.children;
}
