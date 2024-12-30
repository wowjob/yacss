import fs from 'node:fs'
import path from 'node:path'

console.log('build css')

const styleFileList = [
  "src/css/reset.css",
  "src/css/all.css",
]

const buildCss = () => {
  // create dir structure
  const outputDir = 'dist/css'
  fs.mkdirSync(outputDir, { recursive: true })

  // copy css files
  for (const styleFile of styleFileList) {
    const filePath = path.resolve(styleFile)
    const fileName = styleFile.split('/').reverse()[0]
    const fileContent = fs.readFileSync(filePath, 'utf8')
    fs.writeFileSync(path.join(outputDir, fileName), fileContent, 'utf8')
  }
}

buildCss()
