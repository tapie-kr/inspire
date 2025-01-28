import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import svgr from '@svgr/rollup';
import strip from '@rollup/plugin-strip';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import _swc from 'rollup-plugin-swc';
import json from '@rollup/plugin-json';
import preserveDirectives from './preserve-directives.mjs';
import removeCSS from './remove-css.mjs';

const swc = _swc.default;

/**
 * @param {string} currentPath
 * @returns {Array<import('rollup').Plugin>}
 */
function defaultPlugins(currentPath) {
  return [
    peerDepsExternal(),
    resolve({
      extensions: ['.ts', '.tsx', '.svg'],
    }),
    commonjs(),
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    svgr({
      svgrOptions: { exportType: 'default' },
      include: /\.svg$/,
    }),
    postcss({ inject: true }),
    json(),
    swc({
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
          runtime: 'automatic',
        },
        transform: {
          react: { runtime: 'automatic' },
        },
        baseUrl: currentPath,
        paths: {
          '@/*': ['./src/*'],
        },
      },
      sourceMaps: false,
      minify: true,
    }),
    strip({
      functions: ['console.log', 'console.info', 'console.debug'],
      sourceMap: false,
      exclude: ['**/*.svg'],
    }),
    preserveDirectives(),
    removeCSS(),
  ];
}

export default defaultPlugins;
