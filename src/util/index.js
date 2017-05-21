import fs from 'fs'
import path from 'path'
import humps from 'humps'

const rootPath = process.cwd()

export const readFile = (filename) => {
  const filePath = path.join(rootPath, filename)
  return fs.readFileSync(filePath, 'utf8')
}

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)

export const removeNonAlphanumericChars = key => key.replace(/[^A-Za-z0-9_ ]/g, ' ')

export const removeDuplicateSpace = key => key.replace(/\s{2,}/g, ' ')

export const shortenKey = (key) => {
  const separtor = ' '
  const splitedArray = key.split(separtor)
  if (splitedArray.length > 5) {
    return splitedArray.slice(0, 5).join(separtor)
  }
  return key
}

const humpsKey = key => humps.pascalize(key, { separator: '' })

export const convertKeyCollection = keyCollection => keyCollection.map((key) => {
  const pipeline = pipe(
    removeNonAlphanumericChars,
    removeDuplicateSpace,
    shortenKey,
    humpsKey,
  )
  return {
    humpsKey: pipeline(key),
    originalKey: key,
  }
})

export default {
  readFile,
}
