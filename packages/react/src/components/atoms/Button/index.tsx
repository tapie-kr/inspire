import { DefaultButton } from './categories/default';
import { IconButton } from './categories/icon';
import { TextButton } from './categories/text';

export const Button = {
  Default: DefaultButton,
  Text:    TextButton,
  Icon:    IconButton,
} as const;
