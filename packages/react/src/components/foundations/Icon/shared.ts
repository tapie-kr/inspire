import { type BrandIcon, BrandIconMap, type GlyphIcon, GlyphIconMap } from './icon-set';

export type IconName = GlyphIcon | BrandIcon;

export function isGlyphIconName(name: IconName): name is GlyphIcon {
  return Object.keys(GlyphIconMap).includes(name);
}

export function isBrandIconName(name: IconName): name is BrandIcon {
  return Object.keys(BrandIconMap).includes(name);
}
