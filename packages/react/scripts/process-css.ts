import fs from 'fs';
import { glob } from 'glob';
import path from 'path';

async function matchCSSAssets(moduleSystem: string) {
  const cssFiles = await glob(`dist/${moduleSystem}/**/*.css`);
  cssFiles.push('@cottons-kr/react-foundation/styles.css');
  return cssFiles;
}

async function generateImportCssCode(
  moduleSystem: string,
  providerDir: string,
  cssFiles: string[],
) {
  const result = cssFiles.map(file => {
    const relativePath = file.startsWith('@') ? file : path.relative(providerDir, file);
    const token = moduleSystem === 'esm' ? 'import' : 'require';
    if (moduleSystem === 'esm') {
      return `${token} '${relativePath}';`;
    } else {
      return `${token}('${relativePath}');`;
    }
  });

  if (moduleSystem === 'esm') {
    result.push(''); // Add an empty line for better readability
  }

  return result.join('\n');
}

function getCSSInjectionPoint(providerSource: string) {
  const lines = providerSource.split('\n');
  const commentToken = ['//', '/*', '*/', ' *'];
  const directiveToken = ['use strict', 'use client'];
  const otherTokens = ['import', 'export', 'require', 'module.exports'];

  for (let index = 0; index < lines.length; index++) {
    const targetLine = lines[index];
    if (
      [commentToken, directiveToken, otherTokens].flat().some(token => targetLine.includes(token))
    ) {
      continue;
    }
    return index + 1;
  }

  throw new Error('Cannot find the insertion point');
}

async function main() {
  const providerJs = await glob('dist/**/Provider/index.js');
  for (const file of providerJs) {
    const moduleSystem = file.includes('esm') ? 'esm' : 'cjs';
    const cssFiles = await matchCSSAssets(moduleSystem);
    const providerDir = path.dirname(file);
    const importCssCode = await generateImportCssCode(moduleSystem, providerDir, cssFiles);

    const providerSource = fs.readFileSync(file, 'utf-8');
    const importInsertionPoint = getCSSInjectionPoint(providerSource);

    const lines = providerSource.split('\n');
    lines.splice(importInsertionPoint, 0, importCssCode);
    const updatedSource = lines.join('\n');

    fs.writeFileSync(file, updatedSource);
  }
}

main().catch(console.error);
