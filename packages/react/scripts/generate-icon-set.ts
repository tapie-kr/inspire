import fs from 'fs/promises'
import path from 'path'
import { DOMParser, XMLSerializer } from 'xmldom'

const PATH = {
  GLYPH: 'src/components/foundations/Icon/assets/glyph',
  BRAND: 'src/components/foundations/Icon/assets/brand',
  RESULT: 'src/components/foundations/Icon/icon-set.ts',
} as const

const FILL_COLOR = 'currentColor'

function fileNameToKey(fileName: string): string {
  return fileName
    .replace('.svg', '')
    .replace(/-./g, x => x[1].toUpperCase())
}

function fileNameToEnumName(fileName: string): string {
  return fileName
    .replace('.svg', '')
    .replace(/-|_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

function generateFileContent(imports: string, iconMap: string, iconEnum: string, brandMap: string, brandEnum: string): string {
  return `${imports}\n\nexport const GlyphIconMap = {\n${iconMap}\n} as const\n\nexport enum GlyphIcon {\n${iconEnum}\n}\n\nexport const BrandIconMap = {\n${brandMap}\n} as const\n\nexport enum BrandIcon {\n${brandEnum}\n}\n`
}

async function modifySvgFile(filePath: string) {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'image/svg+xml')
    
    const svg = doc.getElementsByTagName('svg')[0]
    const paths = doc.getElementsByTagName('path')
    
    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.removeAttribute('fill-opacity')

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i]
      
      path.removeAttribute('width')
      path.removeAttribute('height')
      path.removeAttribute('fill-opacity')
      
      path.setAttribute('fill', FILL_COLOR)
    }
    
    const serializer = new XMLSerializer()
    const modifiedContent = serializer.serializeToString(doc)
    
    await fs.writeFile(filePath, modifiedContent, 'utf-8')

    console.log(`Modified: ${path.basename(filePath)}`)
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error)
  }
}

async function modifySvgFiles(directory: string) {
  try {
    const files = await fs.readdir(directory)
    const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg')
    
    for (const file of svgFiles) {
      const filePath = path.join(directory, file)
      await modifySvgFile(filePath)
    }
    
    console.log(`\nCompleted processing directory: ${directory}`)
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error)
  }
}

async function generateIconSet() {
  try {
    const glyphFiles = await fs.readdir(PATH.GLYPH)
    const glyphSvgFiles = glyphFiles.filter(file => path.extname(file).toLowerCase() === '.svg')

    const brandFiles = await fs.readdir(PATH.BRAND)
    const brandSvgFiles = brandFiles.filter(file => path.extname(file).toLowerCase() === '.svg')

    const imports = [
      ...glyphSvgFiles.map(file => 
        `import ${fileNameToEnumName(file)}Glyph from './assets/glyph/${file}'`
      ),
      '',
      ...brandSvgFiles.map(file =>
        `import ${fileNameToEnumName(file)}Brand from './assets/brand/${file}'`
      ),
    ].join('\n')

    const glyphIconObject = glyphSvgFiles
      .map(file => `  ${fileNameToKey(file)}: ${fileNameToEnumName(file)}Glyph`)
      .join(',\n')

    const glyphIconEnum = glyphSvgFiles
      .map(file => `  ${fileNameToEnumName(file)} = '${fileNameToKey(file)}'`)
      .join(',\n')

    const brandIconObject = brandSvgFiles
      .map(file => `  ${fileNameToKey(file)}: ${fileNameToEnumName(file)}Brand`)
      .join(',\n')

    const brandIconEnum = brandSvgFiles
      .map(file => `  ${fileNameToEnumName(file)} = '${fileNameToKey(file)}'`)
      .join(',\n')

    const content = generateFileContent(imports, glyphIconObject, glyphIconEnum, brandIconObject, brandIconEnum)

    await fs.writeFile(PATH.RESULT, content, 'utf-8')
    console.log('Successfully generated icon-set.ts')

  } catch (error) {
    console.error('Error generating icon-set.ts:', error)
  }
}

async function main() {
  for (const dir of [PATH.GLYPH, PATH.BRAND]) {
    console.log(`\nProcessing directory: ${dir}`)
    await modifySvgFiles(dir)
  }

  await generateIconSet()
}

main().catch(console.error)
