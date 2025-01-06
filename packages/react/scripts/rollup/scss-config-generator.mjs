import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import copy from 'rollup-plugin-copy'
import customLogger from './custom-logger.mjs'

/**
 * @param {'production' | 'development'} type 
 * @param {string} currentPath
 * @returns {import('rollup').RollupOptions}
 */
function scssConfigGenerator(type, currentPath) {
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
      customLogger('css', currentPath),
    ],
    onwarn(warning, warn) {
      const IGNORED_WARNINGS = ['EMPTY_BUNDLE', 'FILE_NAME_CONFLICT']
      if (!IGNORED_WARNINGS.includes(warning.code)) {
        warn(warning)
      }
    },
  }
}

export default scssConfigGenerator
