import { readFileSync } from 'fs';
import { defineConfig } from 'rollup';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import _swc from 'rollup-plugin-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import svgr from '@svgr/rollup';
import strip from '@rollup/plugin-strip';
import postcss from 'rollup-plugin-postcss';

import customLogger from './scripts/rollup/custom-logger.mjs';

const swc = _swc.default;
const currentPath = new URL('.', import.meta.url).pathname;
const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)).toString());

const banner = [
  '/* eslint-disable */',
  '/*',
  ' * INSPIRE : Creative Kit',
  ` * ${packageJson.description}`,
  ' *',
  ' * This file is generated automatically. Do not modify it manually',
  ` * Generated at : ${new Date().toLocaleString()}`,
  ` * ${packageJson.name} version: ${packageJson.version}`,
  ' *',
  ` * (c) ${new Date().getFullYear()} TAPIE. All rights reserved.`,
  ` * ${packageJson.license} License`,
  '*/',
].join('\n');
const footer = '';

const config = defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.exports['.'].import,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        banner,
        footer,
      },
      {
        file: packageJson.exports['.'].require,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        banner,
        footer,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx', '.svg'],
      }),
      commonjs(),
      vanillaExtractPlugin({ identifiers: 'short' }),
      svgr({
        svgrOptions: { exportType: 'default' },
        include: /\.svg$/,
      }),
      postcss({ inject: true }),
      swc({
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            runtime: 'automatic;',
          },
          transform: {
            react: { runtime: 'automatic' },
          },
          baseUrl: currentPath,
          paths: {
            '@/*': ['./src/*'],
          },
        },
        sourceMaps: true,
        minify: true,
      }),
      strip({
        functions: ['console.log', 'console.info', 'console.debug'],
        sourceMap: true,
        exclude: ['**/*.scss', '**/*.css', '**/*.svg'],
      }),
      customLogger('components', currentPath),
    ],
  },
]);

export default () => {
  const target = process.env.BUILD_TARGET;
  if (!target) {
    throw new Error('Missing BUILD_TARGET environment variable');
  }

  switch (target) {
    case 'components':
      return config[0];

    case 'all':
      return config;
    default:
      throw new Error(`Unknown BUILD_TARGET: ${target}`);
  }
};
