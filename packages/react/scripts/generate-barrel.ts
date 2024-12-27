import * as fs from 'fs'
import * as path from 'path'
import { glob } from 'glob'

interface BarrelOptions {
  include: string[]
  exclude: string[]
  exportStyle: 'star' | 'named'
  barrelFileName: string
}

class SingleBarrelGenerator {
  private readonly options: BarrelOptions

  constructor(options: Partial<BarrelOptions> = {}) {
    const defaultOptions: BarrelOptions = {
      include: ['**/*.{ts,tsx}'],
      exclude: [
        '**/index.ts',
        '**/node_modules/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*.test.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        '**/*.styles.{ts,tsx}',
        '**/*.type.{ts,tsx}',
        '**/*.d.ts',
      ],
      exportStyle: 'star',
      barrelFileName: 'index.ts',
    }

    this.options = {
      ...defaultOptions,
      ...options,
      include: options.include || defaultOptions.include,
      exclude: options.exclude || defaultOptions.exclude
    }
  }

  public async generate(directory: string): Promise<void> {
    try {
      if (!fs.existsSync(directory)) {
        throw new Error(`Directory not found: ${directory}`)
      }

      const files = await this.findExportableFiles(directory)
      const exports = this.getExportPaths(directory, files)
      const content = this.generateBarrelContent(exports)
      this.writeBarrelFile(directory, content)

      console.log('✅ Barrel file generated successfully!')
    } catch (error) {
      console.error('❌ Error generating barrel file:', error instanceof Error ? error.message : error)
    }
  }

  private async findExportableFiles(directory: string): Promise<string[]> {
    const files = await glob(this.options.include, {
      cwd: directory,
      ignore: this.options.exclude,
      absolute: false,
      nodir: true,
      dot: false
    })

    return files
  }

  private getExportPaths(baseDir: string, files: string[]): string[] {
    return files.map(file => {
      const extension = path.extname(file)
      return file.slice(0, -extension.length)
    }).sort()
  }

  private generateBarrelContent(exports: string[]): string {
    return exports
      .map(exportPath => {
        const importPath = `./${exportPath}`

        return this.options.exportStyle === 'star'
          ? `export * from '${importPath}'`
          : `export { default as ${path.basename(exportPath)} } from '${importPath}'`
      })
      .join('\n') + '\n'
  }

  private writeBarrelFile(directory: string, content: string): void {
    const barrelPath = path.join(directory, this.options.barrelFileName)
    fs.writeFileSync(barrelPath, content)
    console.log(`📝 Generated barrel file: ${barrelPath}`)
    console.log(`📊 Total exports: ${content.split('\n').length - 1}`)
  }
}

const generator = new SingleBarrelGenerator()

const run = async () => {
  const targetDirectory = process.argv[2] || './src'
  await generator.generate(targetDirectory)
}

run().catch(console.error)
