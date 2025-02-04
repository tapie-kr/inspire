import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import swc from '@rollup/plugin-swc';
import svgr from '@svgr/rollup';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from './preserve-directives.mjs';
import removeCSS from './remove-css.mjs';

/**
 * @param {string} currentPath
 * @returns {Array<import('rollup').Plugin>}
 */
function defaultPlugins(currentPath) {
  return [
    peerDepsExternal(),
    resolve({ extensions: [
      '.ts',
      '.tsx',
      '.svg',
    ] }),
    commonjs(),
    vanillaExtractPlugin({ identifiers: meta => {
      let target = meta.hash;

      if (meta.debugId) {
        target = meta.debugId;
      }

      return `isp_${target}`;
    } }),
    svgr({
      svgrOptions: { exportType: 'default' },
      include:     /\.svg$/,
    }),
    postcss({ inject: true }),
    json(),
    swc({ swc: {
      jsc: {
        parser: {
          syntax:  'typescript',
          tsx:     true,
          runtime: 'automatic',
        },
        transform: { react: { runtime: 'automatic' } },
        baseUrl:   currentPath,
        paths:     { '@/*': ['./src/*'] },
      },
      sourceMaps: false,
      minify:     true,
    } }),
    strip({
      functions: [
        'console.log',
        'console.info',
        'console.debug',
      ],
      sourceMap: false,
      exclude:   ['**/*.svg'],
    }),
    preserveDirectives(),
    removeCSS(),
  ];
}

export default defaultPlugins;
