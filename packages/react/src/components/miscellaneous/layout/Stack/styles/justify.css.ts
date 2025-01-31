import { stack } from './base.css';

import { getLayerApplier } from '@/utils/style/layer';

const { style } = getLayerApplier(stack);

export const start = style({ justifyContent: 'flex-start' });

export const center = style({ justifyContent: 'center' });

export const end = style({ justifyContent: 'flex-end' });

export const between = style({ justifyContent: 'space-between' });

export const around = style({ justifyContent: 'space-around' });
