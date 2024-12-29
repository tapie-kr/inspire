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
import svgr from '@svgr/rollup'
import copy from 'rollup-plugin-copy'

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
const customLogger = title => {
  let buildStartedTime = null

  /** @type {import('rollup').Plugin} */
  const plugin = {
    name: 'custom-logger',
    buildStart() {
      console.log(chalk.yellow(`🏗️  Building [${chalk.greenBright(title)}]...`))
      buildStartedTime = Date.now()
    },
    transform(_code, id) {
      const colorMap = {
        'ts': 'white',
        'tsx': 'blue',
        'scss': 'magenta',
        'svg': 'cyan',
      }

      const file = id.replace(currentPath, '')
      const extension = file.split('.').pop()
      console.log(chalk.gray(`🔄 Processing: ${chalk[colorMap[extension]](file)}`))
    },
    buildEnd() {
      const time = Date.now() - buildStartedTime
      console.log(chalk.greenBright(`✅ Finished building [${title}] in ${time / 1000}s`))
    }
  }

  return plugin
}

/**
 * 
 * @param {'production' | 'development'} type 
 * @returns {import('rollup').Plugin}
 */
const scssConfigGenerator = type => {
  const isProduction = type === 'production'
  const postcssPlugins = isProduction ? [autoprefixer(), cssnano()] : [autoprefixer()]
  const outputFileName = isProduction ? 'styles.min.css' : 'styles.debug.css'

  return {
    input: 'src/styles/index.scss',
    output: {
      file: `dist/${outputFileName}`,
    },
    plugins: [
      copy({
        targets: [
          { src: 'src/assets/fonts/*.woff2', dest: 'dist/assets/fonts' },
        ],
      }),
      scss({
        processor: () => postcss(postcssPlugins),
        outputStyle: isProduction ? 'compressed' : 'expanded',
        includePaths: ['src/styles'],
        silenceDeprecations: ['legacy-js-api'],
        fileName: outputFileName,
      }),
      customLogger('css'),
    ],
    onwarn(warning, warn) {
      const IGNORED_WARNINGS = ['EMPTY_BUNDLE', 'FILE_NAME_CONFLICT']
      if (!IGNORED_WARNINGS.includes(warning.code)) {
        warn(warning)
      }
    },
  }
}

const config = defineConfig([
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
      resolve({
        extensions: ['.ts', '.tsx', '.svg']
      }),
      commonjs(),
      vanillaExtractPlugin({ identifiers: 'short' }),
      svgr({
        svgrOptions: { exportType: 'default' },
        include: /\.svg$/,
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
  },
  {
    input: 'src/constants/index.ts',
    output: [
      {
        file: packageJson.exports['./variables'].import,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.exports['./variables'].require,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.ts']
      }),
      commonjs(),
      swc({
        jsc: {
          parser: {
            syntax: 'typescript',
            runtime: 'automatic;',
          },
        },
        sourceMaps: false,
        minify: true,
      }),
      customLogger('constants'),
    ],
  }
])

export default () => {
  const target = process.env.BUILD_TARGET
  if (!target) {
    throw new Error('Missing BUILD_TARGET environment variable')
  }
  
  switch (target) {
    case 'css': return scssConfigGenerator('production')
    case 'css-dev': return scssConfigGenerator('development')
    case 'components': return config[0]
    case 'constants': return config[1]
    
    case 'all': return config
    default: throw new Error(`Unknown BUILD_TARGET: ${target}`)
  }
}
