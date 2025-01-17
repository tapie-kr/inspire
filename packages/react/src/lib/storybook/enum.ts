export function getEnumArgType(targetEnum: Record<string, string>) {
  return {
    options: Object.values(targetEnum),
    control: 'select',
  } as const;
}
