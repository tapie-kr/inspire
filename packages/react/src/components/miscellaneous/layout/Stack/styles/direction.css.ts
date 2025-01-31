import { stack } from './base.css';

import { getLayerApplier } from '@/utils/style/layer';

const { style } = getLayerApplier(stack);

export const row = style({ flexDirection: 'row' });

export const column = style({ flexDirection: 'column' });
