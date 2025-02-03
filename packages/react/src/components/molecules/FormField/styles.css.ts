import { spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getShorthandedValue } from '@/utils/style/shorthand';

export const largeLabelWrapper = style({ padding: getShorthandedValue(0, spacingVars.tiny) });

export const smallLabelWrapper = style({ padding: getShorthandedValue(0, spacingVars.optical) });

export const descriptionWrapper = style({ padding: getShorthandedValue(0, spacingVars.micro) });
