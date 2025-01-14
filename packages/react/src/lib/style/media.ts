import { type GlobalStyleRule } from '@vanilla-extract/css';

export function getMobileMediaQuery(properties: GlobalStyleRule) {
  return {
    '@media': {
      'screen and (max-width: 768px)': {
        ...properties,
      },
    },
  };
}
