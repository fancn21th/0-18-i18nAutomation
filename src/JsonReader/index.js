import jsonfile from 'jsonfile'

class JsonReader {
  constructor(filePath) {
    this.json = jsonfile.readFileSync(filePath)
  }
  getJson() {
    return this.json
  }
}
export default JsonReader
