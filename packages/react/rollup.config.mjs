import { defineConfig } from 'rollup'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

import { readFileSync } from 'fs'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString()
)

const config = defineConfig([
  {
    input: 'src/styles/index.scss',
    output: {
      file: 'dist/bundle.js',
    },
    plugins: [
      scss({
        processor: () => postcss([autoprefixer()]),
        // outputStyle: 'compressed',
        fileName: 'styles.min.css',
        includePaths: ['node_modules', 'src/styles'],
        silenceDeprecations: ['legacy-js-api'],
      }),
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'EMPTY_BUNDLE') {
        warn(warning)
      }
    }
  },
])

export default config
