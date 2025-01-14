export function addOpacity(hex: string, opacity: number) {
  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return `${hex}${opacityHex}`;
}
