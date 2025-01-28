'use client';

import { createContext } from 'react';

type SegmentGroupContextType = {
  value: string;
  onChange: (value: string) => unknown;
};

export const SegmentGroupContext = createContext({} as SegmentGroupContextType);
