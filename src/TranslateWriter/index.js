import ejs from 'ejs'
import util from '../util'

class TranslateWriter {
  constructor(args) {
    this.templateVariables = args.templateVariables
    this.templatePath = args.templatePath
    this.destPath = args.destPath
  }
  renderTemplate() {
    let renderContent
    const template = util.readFile(this.templatePath, 'utf8')
    try {
      renderContent = ejs.render(template, this.templateVariables)
    } catch (err) {
      console.error(err)
    }
    return renderContent
  }
}
export default TranslateWriter
