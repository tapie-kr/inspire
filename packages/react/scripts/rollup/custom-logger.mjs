import chalk from 'chalk';

/**
 * @param {string} title
 * @param {string} currentPath
 * @returns {import('rollup').Plugin}
 */
function customLogger(title, currentPath) {
  let buildStartedTime = null;

  /** @type {import('rollup').Plugin} */
  const plugin = {
    name: 'custom-logger',
    buildStart() {
      console.log(chalk.yellow(`🏗️  Building [${chalk.greenBright(title)}]...`));
      buildStartedTime = Date.now();
    },
    transform(_code, id) {
      const colorMap = {
        ts: 'white',
        tsx: 'blue',
        scss: 'magenta',
        svg: 'cyan',
      };

      const file = id.replace(currentPath, '');
      const extension = file.split('.').pop();
      const color = colorMap[extension] || 'gray';

      console.log(chalk.gray(`🔄 Processing: ${chalk[color](file)}`));
    },
    buildEnd() {
      const time = Date.now() - buildStartedTime;
      console.log(chalk.greenBright(`✅ Finished building [${title}] in ${time / 1000}s`));
    },
  };

  return plugin;
}

export default customLogger;
