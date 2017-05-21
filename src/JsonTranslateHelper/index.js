import walkSync from 'walk-sync'
import path from 'path'
import JsonReader from '../JsonReader'
import { convertJsonRes2VarArgs } from '../TranslateWriterArgsConverter'
import TranslateWriter from '../TranslateWriter'

const rootPath = process.cwd()

class JsonTranslateHelper {
  constructor(jsonFolderPath, templateFilePath, targetFolderPath) {
    this.jsonFolderPath = jsonFolderPath
    this.jsonFilePathArray = walkSync(jsonFolderPath)
    this.templateFilePath = templateFilePath
    this.targetFolderPath = targetFolderPath
  }
  translate() {
    this.jsonFilePathArray.forEach((filePath) => {
      const resolvedFilePath = path.join(rootPath, this.jsonFolderPath, filePath)
      const jsonReader = new JsonReader(resolvedFilePath)
      const namespace = path.basename(resolvedFilePath, '.json')
      let args = convertJsonRes2VarArgs(jsonReader.getJson(), namespace)
      args = {
        ...args,
        templatePath: this.templateFilePath,
        targetFolderPath: this.targetFolderPath,
      }
      const translateWriter = new TranslateWriter(args)
      translateWriter.writeFile()
    })
  }
}
export default JsonTranslateHelper
