import { stack } from './base.css';

import { getLayerApplier } from '@/utils/style/layer';

const { style } = getLayerApplier(stack);

export const nowrap = style({ flexWrap: 'nowrap' });
export const wrap = style({ flexWrap: 'wrap' });
export const reverse = style({ flexWrap: 'wrap-reverse' });
