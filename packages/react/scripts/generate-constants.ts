import * as css from 'css'
import * as fs from 'fs'

import { capitalizeFirstLetter, createNestedObjectFromArray, deepMerge } from './lib'

const PATH = {
  CSS: 'dist/styles.min.css',
  CONSTANTS: 'src/constants',
} as const

const RESERVED_VARIABLE_NAMES = {
  'line-height': 'lineHeight',
  'letter-spacing': 'letterSpacing',
  'icon-button': 'iconButton',
  'text-button': 'textButton',
} as const

const cssContent = fs.readFileSync(PATH.CSS, 'utf-8')
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
  .filter(declaration => declaration)
  .map(declaration => declaration.property) as Array<string>

const properties = [...new Set(rawProperties)].filter(property => property.startsWith('--'))
const groupedProperties = Object.groupBy(properties, property => property.replace('--', '').split('-')[0])

const constants = Object.entries(groupedProperties).map(([name, properties]) => {
  if (!properties) {
    throw new Error('상수를 생성할 수 없습니다.')
  }

  return properties.reduce((acc, property) => {
    let key = property.replace(`--${name}-`, '')

    Object.entries(RESERVED_VARIABLE_NAMES).forEach(([variableName, reserved]) => {
      if (key.includes(variableName)) {
        key = key.replace(variableName, reserved)
      }
    })

    const keys = key.split('-').map(capitalizeFirstLetter)

    return deepMerge(acc, createNestedObjectFromArray(keys, `var(${property})`))
  }, {} as Record<string, string>)
})
const constantNames = Object.keys(groupedProperties)

for (const constant of constants) {
  const name = constantNames[constants.indexOf(constant)]
  const stringified = JSON.stringify(constant, null, 2).replace(/"(\w+)":/g, '$1:').replace(/"/g, "'")
  const content = `export const ${capitalizeFirstLetter(name)} = ${stringified} as const\n`
  fs.writeFileSync(`${PATH.CONSTANTS}/${name}.ts`, content)
}

console.log('🎨 INSPIRE CSS Variable 바인딩 작업 완료')
