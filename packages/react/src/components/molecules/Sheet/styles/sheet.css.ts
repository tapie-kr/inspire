import { colorVars } from '@/lib/style/contract/color.css';
import { radiusVars, spacingVars } from '@/lib/style/contract/component.css';

import { style } from '@vanilla-extract/css';
import { getMobileMediaQuery } from '@/utils/style/responsive';
import { getShorthandedValue } from '@/utils/style/shorthand';
import { SheetDirection } from '../shared';

export const backdrop = style({
  position:   'absolute',
  top:        0,
  bottom:     0,
  width:      '100%',
  height:     '100%',
  transition: 'none',
});

export const sheet = style({
  position:   'absolute',
  background: colorVars.surface.default,
  padding:    getShorthandedValue(0, spacingVars.petite),
  transition: 'none',
});

export const directionStyle = {
  [SheetDirection.LEFT]: style({
    borderRadius: getShorthandedValue(radiusVars.none, radiusVars.rounded, radiusVars.rounded, radiusVars.none),
    left:         0,
    minWidth:     300,
    height:       '100%',
    ...getMobileMediaQuery({
      minWidth: 'unset',
      width:    '100%',
      maxWidth: 'calc(100% - 50px)',
    }),
  }),
  [SheetDirection.RIGHT]: style({
    borderRadius: getShorthandedValue(radiusVars.rounded, radiusVars.none, radiusVars.none, radiusVars.rounded),
    right:        0,
    minWidth:     300,
    height:       '100%',
    ...getMobileMediaQuery({
      minWidth: 'unset',
      width:    '100%',
      maxWidth: 'calc(100% - 50px)',
    }),
  }),
  [SheetDirection.TOP]: style({
    borderRadius: getShorthandedValue(radiusVars.none, radiusVars.none, radiusVars.rounded, radiusVars.rounded),
    top:          0,
    width:        '100%',
    minHeight:    200,
  }),
  [SheetDirection.BOTTOM]: style({
    borderRadius: getShorthandedValue(radiusVars.rounded, radiusVars.rounded, radiusVars.none, radiusVars.none),
    bottom:       0,
    width:        '100%',
    minHeight:    200,
  }),
};
