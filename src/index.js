import TranslateWriter from './TranslateWriter'

const args = {
  templateVariables: {
    resKey: 'ResKey',
    resNS: 'ResNS',
    resVal: 'ResVal',
  },
  templatePath: 'templates/translateHelper.js',
  destPath: 'output',
}

const translateWriter = new TranslateWriter(args)

console.log(translateWriter.renderTemplate(args))
