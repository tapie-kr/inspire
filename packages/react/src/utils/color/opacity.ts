export function addOpacity(hex: string, opacity: number) {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${hex}${opacityHex}`;
}
