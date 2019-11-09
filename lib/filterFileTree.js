const path = require('path')
const recursive = require('./recursiveFileSearch')

const filterFileTree = function (directory) {
  const filteredFileTree = recursive(directory).filter(function (filePath) {
    const normalisedPath = filePath.split(path.sep).join('/');
    if (!normalisedPath.includes('/test') && normalisedPath.includes('/package.json')) { // exclude paths that include `/test/` – may want a more precise solution in the future
      return normalisedPath
    }
  })

  return filteredFileTree
}

module.exports = filterFileTree
