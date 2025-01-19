/**
 * @param {{
 *   preserveModules?: boolean
 *   exports?: { import: string, require: string }
 *   banner?: string
 * }} options
 * @returns
 */
function outputGenerator(options) {
  const defaultOptions = {
    sourcemap: true,
    exports: 'named',
    banner: options.banner,
  };
  const esmOutput = {
    format: 'esm',
    ...defaultOptions,
  };
  const cjsOutput = {
    format: 'cjs',
    ...defaultOptions,
  };

  if (options.preserveModules) {
    esmOutput.preserveModules = true;
    esmOutput.preserveModulesRoot = 'src';
    esmOutput.dir = 'dist/esm';
    cjsOutput.preserveModules = true;
    cjsOutput.preserveModulesRoot = 'src';
    cjsOutput.dir = 'dist/cjs';
  }

  if (options.exports) {
    esmOutput.file = options.exports.import;
    cjsOutput.file = options.exports.require;
  }

  if (options.preserveModules && options.exports) {
    throw new Error('preserveModules와 exports는 함께 사용할 수 없습니다.');
  }

  console.log('esmOutput', esmOutput);
  console.log('cjsOutput', cjsOutput);

  return [esmOutput, cjsOutput];
}

export default outputGenerator;
