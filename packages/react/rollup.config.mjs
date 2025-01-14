import { readFileSync } from 'fs';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import customLogger from './scripts/rollup/custom-logger.mjs';
import defaultPlugins from './scripts/rollup/default-plugins.mjs';
import outputGenerator from './scripts/rollup/output-generator.mjs';
import removeCSS from './scripts/rollup/remove-css.mjs';

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
    output: outputGenerator(packageJson.exports['.'], banner, footer),
    plugins: [
      ...defaultPlugins(currentPath),
      copy({
        targets: [
          {
            src: 'src/assets/fonts/*.woff2',
            dest: 'dist/assets/src/styles/typography/src/assets/fonts',
          },
        ],
      }),
      customLogger('components', currentPath),
    ],
  },
  {
    input: 'src/lib/index.ts',
    output: outputGenerator(packageJson.exports['./lib'], banner, footer),
    plugins: [...defaultPlugins(currentPath), removeCSS(), customLogger('lib', currentPath)],
  },
  {
    input: 'src/utils/index.ts',
    output: outputGenerator(packageJson.exports['./utils'], banner, footer),
    plugins: [...defaultPlugins(currentPath), removeCSS(), customLogger('utils', currentPath)],
  },
]);

export default config;
