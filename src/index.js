import JsonTranslateHelper from './JsonTranslateHelper'

const jsonTranslateHelper =
  new JsonTranslateHelper(
    'resources',
    'templates/translateHelper.js',
    'output',
  )

jsonTranslateHelper.translate()
