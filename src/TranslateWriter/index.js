import ejs from 'ejs'
import { outputFileSync } from 'fs-extra'
import path from 'path'
import { readFile } from '../util'

class TranslateWriter {
  constructor(args) {
    this.templateVariables = args.templateVariables
    this.templatePath = args.templatePath
    this.targetFolderPath = args.targetFolderPath
  }
  renderTemplate() {
    let renderContent
    const template = readFile(this.templatePath, 'utf8')
    try {
      renderContent = ejs.render(template, this.templateVariables)
    } catch (err) {
      console.error(err)
    }
    return renderContent
  }
  writeFile() {
    const fileContent = this.renderTemplate()
    const fileName = `${this.templateVariables.resNS}.js`
    const filePath = path.resolve(this.targetFolderPath, fileName)
    outputFileSync(filePath, fileContent)
  }
}
export default TranslateWriter
