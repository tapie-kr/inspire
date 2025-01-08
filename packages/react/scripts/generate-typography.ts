import * as css from 'css'
import * as fs from 'fs'
import { capitalizeFirstLetter } from './lib'

const PATH = {
  CSS: 'dist/styles.min.css',
  OUTPUT: 'src/components/foundations/Typography/shared.ts',
} as const

const POINT = {
  VARIANT: 'export enum TypographyVariant {',
  VARIANT_CLASS: 'export const TypographyVariantClass = {',
  WEIGHT: 'export enum TypographyWeight {',
  WEIGHT_CLASS: 'export const TypographyWeightClass = {',
}
const POINTS = Object.values(POINT)

function fileNameToCapsSnakeCase(fileName: string) {
  return fileName
    .replace('.svg', '')
    .replace(/-|_/g, '_')
    .toUpperCase()
}

const cssContent = fs.readFileSync(PATH.CSS, 'utf-8')
if (!cssContent) {
  throw new Error('CSS 파일이 비었습니다. build:css 스크립트를 먼저 실행해주세요.')
}

const parsed = css.parse(cssContent)
if (!parsed.stylesheet) {
  throw new Error('CSS 파일을 파싱할 수 없습니다.')
}

const typographyClasses = parsed.stylesheet.rules
  .filter(rule => rule.type === 'rule')
  .filter(rule => rule.selectors?.[0]?.startsWith('.typo'))
  .flatMap(rule => rule.selectors?.[0])

const sizeClasses = typographyClasses.filter(className => !className?.includes('weight')) as Array<string>
const weightClasses = typographyClasses.filter(className => className?.includes('weight')) as Array<string>

const outputFileContent = fs.readFileSync(PATH.OUTPUT, 'utf-8').split('\n')

for (const [index, line] of outputFileContent.entries()) {
  if (POINTS.includes(line)) {
    const startIndex = index + 1
    const lineCount = outputFileContent
      .slice(startIndex)
      .findIndex(line => line === '}' || line === '} as const')
    outputFileContent.splice(startIndex, lineCount)
  }

  switch (line) {
    case POINT.VARIANT: {
      outputFileContent.splice(index + 1, 0, ...sizeClasses.map(className => {
        const variant = fileNameToCapsSnakeCase(className.replace('.typo-', ''))
        const value = capitalizeFirstLetter(variant.toLowerCase())
        return `  ${variant} = '${value}',`
      }))
      break
    }
    case POINT.VARIANT_CLASS: {
      outputFileContent.splice(index + 1, 0, ...sizeClasses.map(className => {
        const variant = fileNameToCapsSnakeCase(className.replace('.typo-', ''))
        return `  [TypographyVariant.${variant}]: '${className.replace('.', '')}',`
      }))
      break
    }
    case POINT.WEIGHT: {
      outputFileContent.splice(index + 1, 0, ...weightClasses.map(className => {
        const weight = fileNameToCapsSnakeCase(className.replace('.typo-weight-', ''))
        const value = capitalizeFirstLetter(weight.toLowerCase())
        return `  ${weight} = '${value}',`
      }))
      break
    }
    case POINT.WEIGHT_CLASS: {
      outputFileContent.splice(index + 1, 0, ...weightClasses.map(className => {
        const weight = fileNameToCapsSnakeCase(className.replace('.typo-weight-', ''))
        return `  [TypographyWeight.${weight}]: '${className.replace('.', '')}',`
      }))
      break
    }
  }
}

fs.writeFileSync(PATH.OUTPUT, outputFileContent.join('\n'))

console.log('🎨 INSPIRE Typography 바인딩 작업 완료')
