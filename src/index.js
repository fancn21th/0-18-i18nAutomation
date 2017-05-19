import TranslateWriter from './TranslateWriter'

const args = {
  templateVariables: {
    resKeyCollection: [
      'Key1',
      'Key2',
      'Key3Key4',
    ],
    resNS: 'simple',
  },
  templatePath: 'templates/translateHelper.js',
  destPath: 'output/transHelper.js',
}

const translateWriter = new TranslateWriter(args)

translateWriter.writeFile()
