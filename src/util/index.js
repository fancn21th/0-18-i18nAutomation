import fs from 'fs'
import path from 'path'
import humps from 'humps'

const rootPath = process.cwd()

export const readFile = (filename) => {
  const filePath = path.join(rootPath, filename)
  return fs.readFileSync(filePath, 'utf8')
}

export const shortenKey = (key) => {
  const separtor = ' '
  const splitedArray = key.split(separtor)
  if (splitedArray.length > 5) {
    return splitedArray.slice(0, 5).join(separtor)
  }
  return key
}

const convert2HumpsKey = preProcess => key => humps.pascalize(preProcess(key), { separator: '' })

export const convertKeyCollection = keyCollection => keyCollection.map(key => ({
  humpsKey: convert2HumpsKey(shortenKey)(key),
  originalKey: key,
}))

export default {
  readFile,
}
