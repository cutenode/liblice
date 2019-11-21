const fs = require('fs')
const path = require('path')

/** Retrieve file paths from a given folder and its subfolders. */
const getFilePaths = (folderPath) => {
  if (!folderPath.includes('.bin') && !folderPath.includes('.git') && !folderPath.match(/(node_modules\/)(?:@([^/]+?)[/])?([^/]+?)(\/test)/g)) {
    const entryPaths = fs.readdirSync(folderPath).map(entry => path.join(folderPath, entry))
    const filePaths = entryPaths.filter(entryPath => fs.lstatSync(entryPath).isFile())
    const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath))
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), [])
    return [...filePaths, ...dirFiles]
  }

  return []
}

module.exports = getFilePaths
