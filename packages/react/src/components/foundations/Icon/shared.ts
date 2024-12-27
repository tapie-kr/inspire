import { GlyphIconMap, BrandIconMap, GlyphIcon, BrandIcon } from './icon-set'

export type IconType = GlyphIcon | BrandIcon

export function isGlyphIconName(name: IconType): name is GlyphIcon {
  return Object.keys(GlyphIconMap).includes(name)
}

export function isBrandIconName(name: IconType): name is BrandIcon {
  return Object.keys(BrandIconMap).includes(name)
}
