const path = require('path')
const fs = require('fs')
const recursive = require('./recursiveFileSearch')

const filterFileTree = function (directory) {
  const parsedDirectory = path.resolve(directory)

  if (!fs.existsSync(parsedDirectory)) {
    throw new Error(`Passed directory ${parsedDirectory} does not exist.`)
  }
  const filteredFileTree = recursive(directory).filter(function (filePath) {
    const normalisedPath = filePath.split(path.sep).join('/')
    if (normalisedPath.includes('/package.json')) { // exclude paths that include `/test/` – may want a more precise solution in the future
      return normalisedPath
    }
  })

  return filteredFileTree
}

module.exports = filterFileTree
