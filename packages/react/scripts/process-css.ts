import { glob } from 'glob';

async function main() {
  const cssAssets = await glob('dist/esm/**/*.css');
  console.log(cssAssets);
}

main().catch(console.error);
