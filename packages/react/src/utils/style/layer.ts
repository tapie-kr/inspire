import { globalStyle as _globalStyle, style as _style } from '@vanilla-extract/css';

type StyleFunction = typeof _style;
type GlobalStyleFunction = typeof _globalStyle;

export function getLayerApplier(layer: string) {
  function style(...args: Parameters<StyleFunction>) {
    const [rule, debugId] = args;
    return _style(
      Array.isArray(rule)
        ? rule
        : {
            '@layer': {
              [layer]: rule,
            },
          },
      debugId,
    );
  }

  function globalStyle(...args: Parameters<GlobalStyleFunction>) {
    const [selector, rule] = args;
    return _globalStyle(selector, {
      '@layer': {
        [layer]: rule,
      },
    });
  }

  return { style, globalStyle };
}
