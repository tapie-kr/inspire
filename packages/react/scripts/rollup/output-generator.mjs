/**
 *
 * @param {{ import: string, require: string }} exports
 * @param {string} banner
 * @param {string} footer
 * @returns
 */
function outputGenerator(exports, banner, footer) {
  return [
    {
      file: exports.import,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      banner,
      footer,
    },
    {
      file: exports.require,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      banner,
      footer,
    },
  ];
}

export default outputGenerator;
