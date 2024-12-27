import { defineConfig } from 'rollup'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import _swc from 'rollup-plugin-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'

import chalk from 'chalk'
import { readFileSync } from 'fs'

const swc = _swc.default
const currentPath = new URL('.', import.meta.url).pathname
const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString()
)

/**
 * @param {string} title
 * @returns {import('rollup').Plugin}
 */
function customLogger(title) {
  /** @type {import('rollup').Plugin} */
  let buildStartedTime = null

  const plugin = {
    name: 'custom-logger',
    buildStart() {
      console.log(chalk.yellow(`🏗️  Building [${chalk.greenBright(title)}]...`))
      buildStartedTime = Date.now()
    },
    transform(_code, id) {
      const isComponent = id.endsWith('.tsx')
      const file = chalk[isComponent ? 'blue' : 'white'](id.replace(currentPath, ''))
      console.log(chalk.gray(`🔄 Processing: ${file}`))
    },
    buildEnd() {
      const time = Date.now() - buildStartedTime
      console.log(chalk.greenBright(`✅ Finished building [${title}] in ${time / 1000}s`))
    }
  }

  return plugin
}

const config = defineConfig([
  {
    input: 'src/styles/index.scss',
    output: {
      file: 'dist/styles.min.css',
    },
    plugins: [
      scss({
        processor: () => postcss([autoprefixer(), cssnano()]),
        outputStyle: 'compressed',
        includePaths: ['src/styles'],
        silenceDeprecations: ['legacy-js-api'],
        fileName: 'styles.min.css',
      }),
      customLogger('css'),
    ],
    onwarn(warning, warn) {
      const IGNORED_WARNINGS = ['EMPTY_BUNDLE', 'FILE_NAME_CONFLICT']
      if (!IGNORED_WARNINGS.includes(warning.code)) {
        warn(warning)
      }
    },
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.exports['.'].import,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.exports['.'].require,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: ['react', 'react-dom', 'classnames'],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: ['.ts', '.tsx'], }),
      commonjs(),
      vanillaExtractPlugin({
        identifiers: 'short',
      }),
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
        },
        sourceMaps: false,
        minify: true,
      }),
      customLogger('components'),
    ],
  }
])

export default () => {
  const target = process.env.BUILD_TARGET
  if (!target) {
    throw new Error('Missing BUILD_TARGET environment variable')
  }
  
  switch (target) {
    case 'css': return config[0]
    case 'components': return config[1]
    
    case 'all': return config
    default: throw new Error(`Unknown BUILD_TARGET: ${target}`)
  }
}
