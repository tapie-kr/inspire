import { colorVars } from '@/lib/style/contract/color.css';

import { style } from '@vanilla-extract/css';

export const base = style({ color: colorVars.content.emphasized });

export const disabled = style({ color: colorVars.content.disabled });
