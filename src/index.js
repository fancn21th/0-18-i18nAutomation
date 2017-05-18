import path from 'path'
import jsonfile from 'jsonfile'

class JsonReader {
  constructor(filePath) {
    this.json = jsonfile.readFileSync(path.resolve(filePath))
  }
  getJson() {
    return this.json
  }
}
export default JsonReader

