import { Typo } from '@/components/foundations/Typography';

import { type ButtonHTMLAttributes } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export type ButtonPropsBase = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export const ButtonTypoSizeMap = {
  [ButtonSize.LARGE]: Typo.Base,
  [ButtonSize.MEDIUM]: Typo.Petite,
  [ButtonSize.SMALL]: Typo.Tiny,
} as const;

export const ButtonIconSizeMap = {
  [ButtonSize.LARGE]: 24,
  [ButtonSize.MEDIUM]: 18,
  [ButtonSize.SMALL]: 16,
};
