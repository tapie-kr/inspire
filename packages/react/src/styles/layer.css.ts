import { globalLayer } from '@vanilla-extract/css';
import { getLayerApplier } from '@/utils/style/layer';

export const resetLayer = globalLayer('reset');

export const componentLayer = globalLayer('component');

export const layoutLayer = globalLayer({ parent: componentLayer }, 'layout');

export const typographyLayer = globalLayer({ parent: componentLayer }, 'typography');

export const utilityLayer = globalLayer('utility');

export const { style: resetStyle, globalStyle: resetGlobalStyle } = getLayerApplier(resetLayer);

export const { style: layoutStyle, globalStyle: layoutGlobalStyle } = getLayerApplier(layoutLayer);

export const { style: componentStyle, globalStyle: componentGlobalStyle } =
  getLayerApplier(componentLayer);

export const { style: typographyStyle, globalStyle: typographyGlobalStyle } =
  getLayerApplier(typographyLayer);

export const { style: utilityStyle, globalStyle: utilityGlobalStyle } =
  getLayerApplier(utilityLayer);
