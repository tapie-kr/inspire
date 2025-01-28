/**
 * @param {string} banner
 * @returns
 */
function outputGenerator(banner) {
  return [
    {
      format: 'esm',
      dir: 'dist/esm',
      sourcemap: false,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      banner,
    },
    {
      format: 'cjs',
      dir: 'dist/cjs',
      sourcemap: false,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      banner,
    },
  ];
}

export default outputGenerator;
