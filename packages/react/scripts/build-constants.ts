import * as css from 'css'
import * as fs from 'fs'

import { capitalizeFirstLetter, createNestedObjectFromArray, deepMerge } from './lib'

const targetCSSPath = 'dist/styles.min.css'
const cssContent = fs.readFileSync(targetCSSPath, 'utf-8')
if (!cssContent) {
  throw new Error('CSS 파일이 비었습니다. build:css 스크립트를 먼저 실행해주세요.')
}

const parsed = css.parse(cssContent)
if (!parsed.stylesheet) {
  throw new Error('CSS 파일을 파싱할 수 없습니다.')
}

const rules = parsed.stylesheet.rules.filter(rule => rule.type === 'rule')

const rawProperties = rules
  .flatMap(rule => rule.declarations)
  .filter(declaration => declaration?.type === 'declaration')
  .map(declaration => declaration.property) as Array<string>

const properties = [...new Set(rawProperties)]
const groupedProperties = Object.groupBy(properties, property => property.replace('--', '').split('-')[0])

const constants = Object.entries(groupedProperties).map(([name, properties]) => {
  return properties.reduce((acc, property) => {
    const key = property.replace(`--${name}-`, '')
      .replace('line-height', 'lineHeight')
      .split('-')
      .map(capitalizeFirstLetter)

    return deepMerge(acc, createNestedObjectFromArray(key, property))
  }, {} as Record<string, string>)
})
const constantNames = Object.keys(groupedProperties)

const resultDirectory = 'src/constants'
for (const constant of constants) {
  const name = constantNames[constants.indexOf(constant)]
  const stringified = JSON.stringify(constant, null, 2).replace(/"(\w+)":/g, '$1:').replace(/"/g, "'")
  const content = `export const ${capitalizeFirstLetter(name)} = ${stringified} as const\n`
  fs.writeFileSync(`${resultDirectory}/${name}.ts`, content)
}

console.log('🎨 INSPIRE CSS Variable 바인딩 작업 완료')
