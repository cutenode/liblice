const fs = require('fs')
const path = require('path')

/** Retrieve file paths from a given folder and its subfolders. */
const getFilePaths = (folderPath) => {
  // need to find a way to exclude /test/ and /tests/ everywhere except when we're running our tests
  if (!folderPath.includes('/test/') && !folderPath.includes('/.bin/') && !folderPath.includes('/.git/') && !folderPath.match(/(node_modules\/)(?:@([^/]+?)[/])?([^/]+?)(\/test)/g)) {
    const entryPaths = fs.readdirSync(folderPath, { withFileTypes: true }).map(function (entry) {
      if (entry.isSymbolicLink() === false) {
        return path.join(folderPath, entry.name)
      }
    })
    const noUndefinedEntryPaths = entryPaths.filter(entry => typeof entry === 'string')
    const filePaths = noUndefinedEntryPaths.filter(entryPath => fs.lstatSync(entryPath).isFile())
    const dirPaths = noUndefinedEntryPaths.filter(entryPath => !filePaths.includes(entryPath))
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), [])
    return [...filePaths, ...dirFiles]
  }

  return []
}

module.exports = getFilePaths
