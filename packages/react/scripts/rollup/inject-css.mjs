const CSS_FILE = 'styles.min.css'

/**
* @returns {import('rollup').Plugin}
*/
function injectCSS() {
  /** @type {import('rollup').Plugin} */
  const plugin = {
    name: 'inject-css',
    renderChunk(code, _chunk, options) {
      const isESM = options.format === 'es'
      const cssInjection = isESM ? `import "./${CSS_FILE}";` : `require("./${CSS_FILE}");`
      const lines = code.split('\n')

      if (isESM) {
        const lastImportIndex = lines.findLastIndex(line => line.includes('import'))
        if (lastImportIndex === -1) {
          return { code: `${cssInjection}\n${code}`, map: null }
        }
        lines.splice(lastImportIndex + 1, 0, cssInjection)
        return { code: lines.join('\n'), map: null }
      }

      const lastRequireIndex = lines.findLastIndex(line => line.includes('require('))
      if (lastRequireIndex === -1) {
        return { code: `${cssInjection}\n${code}`, map: null }
      }

      lines.splice(lastRequireIndex + 1, 0, cssInjection)
      return { code: lines.join('\n'), map: null }
    }
  }

  return plugin
}

export default injectCSS
