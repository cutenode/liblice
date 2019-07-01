const recursive = require('./recursiveFileSearch')

const filterFileTree = function (directory) {
  const filteredFileTree = recursive(directory).filter(function (path) {
    if (!path.includes('/test') && path.includes('/package.json')) { // exclude paths that include `/test/` – may want a more precise solution in the future
      return path
    }

  })

  return filteredFileTree
}

module.exports = filterFileTree