export type NestedObject<T> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? { [K in First]: NestedObject<Rest> }
    : never
  : {
  };

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function capitalizeFirstLetter(str: string) {
  if (!str) return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createNestedObjectFromArray<T extends string[]>(keys: T, value: string) {
  return keys.reduceRight((acc, key, index) => {
    const formattedKey = (/^\d+$/).test(key) ? `_${key}` : key;

    if (index === keys.length - 1) {
      return { [formattedKey]: value };
    } else {
      return { [formattedKey]: acc };
    }
  }, {}) as NestedObject<T>;
}

export function deepMerge<T extends Record<string, unknown>>(target: T, source: DeepPartial<T>) {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      const targetValue = target[key as keyof T];

      const sourceValue = source[key as keyof DeepPartial<T>];

      if (isObject(targetValue) && sourceValue !== undefined) {
        if (isObject(sourceValue)) {
          output[key as keyof T] = deepMerge(targetValue as Record<string, unknown>,
            sourceValue as DeepPartial<Record<string, unknown>>) as T[keyof T];
        } else {
          output[key as keyof T] = sourceValue as T[keyof T];
        }
      } else if (sourceValue !== undefined) {
        output[key as keyof T] = sourceValue as T[keyof T];
      }
    });
  }

  return output;
}

function isObject(item: unknown): item is Record<string, unknown> {
  return Boolean(item && typeof item === 'object' && !Array.isArray(item));
}
