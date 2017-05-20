import JsonTranslateHelper from './JsonTranslateHelper'

const jsonTranslateHelper = new JsonTranslateHelper('resources')
jsonTranslateHelper.translate()

// import JsonReader from './JsonReader'
// import TranslateWriter from './TranslateWriter'
//
// const jsonReader = new JsonReader('resources')
//
// const args = {
//   templateVariables: {
//     resKeyCollection: [
//       'Key1',
//       'Key2',
//       'Key3Key4',
//     ],
//     resNS: 'simple',
//   },
//   templatePath: 'templates/translateHelper.js',
//   destPath: 'output/transHelper.js',
// }
//
// const translateWriter = new TranslateWriter(args)
//
// translateWriter.writeFile()
