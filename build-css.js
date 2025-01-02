import fs from 'node:fs'
import path from 'node:path'
import { propertyMap } from './src/style/property-map'
import { cssDefaultPropertyValueMap } from './src/style/default-value-map'

const styleFileList = [
  'src/css/reset.css',
  'src/css/all.css',
  'src/css/all.min.css',
]
const allCSSNameMap = { dev: 'src/css/all.css', prod: 'src/css/all.min.css' }

const propertyList = Object.keys(propertyMap)

const buildCss = () => {
  // create dir structure
  const outputDir = 'dist/css'
  fs.mkdirSync(outputDir, { recursive: true })

  const finalCSSMap = {
    dev: [],
    prod: [],
  }

  const finalCSS = {
    dev: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    prod: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
  }

  for (const env of ['dev', 'prod']) {
    for (const property of propertyList) {
      finalCSSMap[env].push({
        cssPropertyName: property,
        className: propertyMap[property].className[env],
        responsive: {
          mobile: propertyMap[property].className[env],
          tablet: `t-${propertyMap[property].className[env]}`,
          desktop: `d-${propertyMap[property].className[env]}`,
        },
      })
    }
  }

  for (const env of ['dev', 'prod']) {
    for (const screenType of ['mobile', 'tablet', 'desktop']) {
      for (const property of finalCSSMap[env]) {
        const varName = `--${property.responsive[screenType]}`
        const defaultValue =
          cssDefaultPropertyValueMap[property.cssPropertyName]

        console.log(property)
        finalCSS[env][screenType] +=
          env === 'dev'
            ? `.${property.className} {
  ${varName}: ${defaultValue};
  ${property.cssPropertyName}: var(${varName});
}
`
            : `.${property.className}{${varName}:${defaultValue};${property.cssPropertyName}:var(${varName});}`
      }
    }

    const filePath = path.resolve(allCSSNameMap[env])

    const fileContent =
      env === 'dev'
        ? `${finalCSS[env].mobile}

@media screen and (min-width: 48rem) {
${finalCSS[env].tablet}
}

@media screen and (min-width: 80rem) {
 ${finalCSS[env].desktop}
}`
        : `${finalCSS[env].mobile}@media screen and (min-width: 48rem) {${finalCSS[env].tablet}}@media screen and (min-width: 80rem) {${finalCSS[env].desktop}}`

    fs.writeFileSync(filePath, fileContent, 'utf8')
  }

  // console.log(JSON.stringify(finalCSS, null, 2))

  // copy css files
  for (const styleFile of styleFileList) {
    const filePath = path.resolve(styleFile)
    const fileName = styleFile.split('/').reverse()[0]
    const fileContent = fs.readFileSync(filePath, 'utf8')
    fs.writeFileSync(path.join(outputDir, fileName), fileContent, 'utf8')
  }
}

buildCss()
