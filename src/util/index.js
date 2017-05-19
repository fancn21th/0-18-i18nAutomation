import fs from 'fs'
import path from 'path'

const rootPath = process.cwd()

export const readFile = (filename) => {
  const filePath = path.join(rootPath, filename)
  console.log(`reading a file at ${filePath}`)
  return fs.readFileSync(filePath, 'utf8')
}

export default {
  readFile,
}
