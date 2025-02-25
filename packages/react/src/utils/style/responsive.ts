import { type CSSProperties } from '@vanilla-extract/css';

type CSSPropertiesWithVars = CSSProperties & {
  vars?: {
    [key: string]: string;
  };
};

export function getResponsiveQuery(maxWidth: number, properties: CSSPropertiesWithVars) {
  return { '@media': { [`screen and (max-width: ${maxWidth}px)`]: { ...properties } } } as const;
}

export function getMobileMediaQuery(properties: CSSPropertiesWithVars) {
  return getResponsiveQuery(768, properties);
}
