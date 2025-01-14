export function getShorthandedValue(
  first: string | number,
  second?: string | number,
  third?: string | number,
  fourth?: string | number,
): string {
  if (second === undefined) {
    return first.toString();
  }
  if (third === undefined) {
    return `${first} ${second}`;
  }
  if (fourth === undefined) {
    return `${first} ${second} ${third}`;
  }
  return `${first} ${second} ${third} ${fourth}`;
}
