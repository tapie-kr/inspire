import { typographyGlobalStyle } from '../layer.css';
import { typographyVars } from '@/lib/style/contract/typography.css';

import { assignVars, globalFontFace } from '@vanilla-extract/css';
import { capitalizeFirstLetter } from '@/utils/string/capitalize-first-letter';
import { getMobileMediaQuery } from '@/utils/style/responsive';
import { desktopLineHeight } from './values/line-height';
import { desktopSize } from './values/size';
import { weight } from './values/weight';

export const inspireFontKit = 'INSPIRE Font Kit';

globalFontFace(inspireFontKit,
  Object.entries(weight).map(([name, weight]) => ({
    src:         `url('./src/assets/fonts/INSPIRE_Font_Kit-${capitalizeFirstLetter(name)}.woff2') format('woff2')`,
    fontWeight:  weight,
    fontDisplay: 'block',
  })));

typographyGlobalStyle(':root', {
  vars: assignVars(typographyVars, {
    weight,
    size:          desktopSize,
    'line-height': desktopLineHeight,
  }),
  ...getMobileMediaQuery({ vars: assignVars(typographyVars, {
    weight,
    size:          desktopSize,
    'line-height': desktopLineHeight,
  }) }),
});
