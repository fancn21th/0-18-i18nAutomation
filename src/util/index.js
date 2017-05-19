import fs from 'fs'
import path from 'path'

const rootPath = process.cwd()

const readFile = (filename) => {
  const filePath = path.join(rootPath, filename)
  console.log(`file to read is at ${filePath}`)
  return fs.readFileSync(filePath, 'utf8')
}

export default {
  readFile,
}
