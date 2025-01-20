/**
 * @returns {import('rollup').Plugin}
 */
function removeCSS() {
  /** @type {import('rollup').Plugin} */
  const plugin = {
    name: 'remove-css',
    renderChunk(code, _chunk, options) {
      const isESM = options.format === 'es';
      const lines = code.split('\n');
      const importKeyword = isESM ? 'import' : 'require';

      code = lines
        .filter(line =>
          line.startsWith(importKeyword) ? !parsePath(line, importKeyword).isCSS : true,
        )
        .join('\n');

      return { code, map: null };
    },
  };

  return plugin;
}

export default removeCSS;

/**
 * @param {string} importLine
 * @param {string} keyword
 */
function parsePath(importLine, keyword) {
  const path = importLine
    .split(keyword)[1]
    .trim()
    .replaceAll(/['";()]/g, '');
  const isCSS = path.endsWith('.css');
  return { path, isCSS };
}
