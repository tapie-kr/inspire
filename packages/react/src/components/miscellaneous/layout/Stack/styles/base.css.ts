import { layoutLayer } from '@/styles/layer.css';

import { layer, style } from '@vanilla-extract/css';

import { applyLayer } from '@/utils/style/layer';

export const reset = layer({ parent: layoutLayer }, 'reset');

export const stack = layer({ parent: reset }, 'stack');

export const base = style(applyLayer(reset, {
  width:   'fit-content',
  height:  'fit-content',
  display: 'flex',
}));
