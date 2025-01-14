import { type CSSProperties } from '@vanilla-extract/css';

type CSSPropertiesWithVars = CSSProperties & {
  vars?: {
    [key: string]: string;
  };
};

export function getMobileMediaQuery(properties: CSSPropertiesWithVars) {
  return {
    '@media': {
      'screen and (max-width: 768px)': {
        ...properties,
      },
    },
  } as const;
}
