import { globalLayer } from '@vanilla-extract/css';

export const resetLayer = globalLayer('reset');

export const componentLayer = globalLayer('component');
export const layoutLayer = globalLayer({ parent: componentLayer }, 'layout');
export const typographyLayer = globalLayer({ parent: componentLayer }, 'typography');

export const utilityLayer = globalLayer('utility');
