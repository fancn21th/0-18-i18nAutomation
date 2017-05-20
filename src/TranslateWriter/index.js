import ejs from 'ejs'
import { outputFileSync } from 'fs-extra'
import { readFile } from '../util'

class TranslateWriter {
  constructor(args) {
    this.templateVariables = args.templateVariables
    this.templatePath = args.templatePath
    this.destPath = args.destPath
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
    outputFileSync(this.destPath, fileContent)
  }
}
export default TranslateWriter
