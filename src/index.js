import path from 'path'
import fs from 'fs'

class JsonReader {
  constructor(filePath) {
    this.jsonKeys = []
    this.json = JSON.parse(
      fs.readFileSync(
        path.resolve(filePath),
        'utf8'))
  }

  getJson() {
    return this.json
  }
}
export default JsonReader

