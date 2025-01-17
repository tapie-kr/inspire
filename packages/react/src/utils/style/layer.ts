import { globalStyle as _globalStyle, style as _style, type StyleRule } from '@vanilla-extract/css';

type StyleFunction = typeof _style;
type GlobalStyleFunction = typeof _globalStyle;

export function getLayerApplier(layer: string) {
  function style(...args: Parameters<StyleFunction>) {
    const [rule, debugId] = args;
    return _style(Array.isArray(rule) ? rule : applyLayer(layer, rule), debugId);
  }

  function globalStyle(...args: Parameters<GlobalStyleFunction>) {
    const [selector, rule] = args;
    return _globalStyle(selector, applyLayer(layer, rule));
  }

  return { style, globalStyle };
}

export function applyLayer(layer: string, rule: StyleRule) {
  return {
    '@layer': {
      [layer]: rule,
    },
  };
}
