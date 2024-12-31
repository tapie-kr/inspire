export const TAPIESymbolSize = {
  _8: 8,
  _16: 16,
  _20: 20,
  _24: 24,
  _32: 32,
  _48: 48,
  _56: 56,
  _72: 72,
  _80: 80,
  _96: 96,
} as const

export type TAPIESymbolSize = typeof TAPIESymbolSize[keyof typeof TAPIESymbolSize]

export { TAPIESymbolSize as Size }
