const fs = require('fs')
const path = require('path')

/** Retrieve file paths from a given folder and its subfolders. */
const getFilePaths = (folderPath) => {
  // need to find a way to exclude /test/ and /tests/ everywhere except when we're running our tests
  if (!folderPath.includes('/test/') && !folderPath.match(/(\/.bin\/$)/g) && !folderPath.match(/(\/.git\/$)/g) && !folderPath.match(/(node_modules\/)(?:@([^/]+?)[/])?([^/]+?)(\/test)/g)) { // exclude `/test/` and `/node_modules/<anything>/test`
    const entryPaths = fs.readdirSync(folderPath, { withFileTypes: true }).map(function (entry) { // read the directory, and ensure we're getting Dirent to detect symlinks
      if (entry.isSymbolicLink() === false) { // pass the entry along if it's not a symbolic link
        return path.join(folderPath, entry.name) // join the path with the entry, enabling us to get a nice path to check
      }
    })
    const noUndefinedEntryPaths = entryPaths.filter(entry => typeof entry === 'string') // filter the  previously built path to ensure it's not an empty array. This solves the problem of returning empty arrays in the previous step, which is problematic when trying to follow through on the next few steps.
    const filePaths = noUndefinedEntryPaths.filter(entryPath => fs.lstatSync(entryPath).isFile()) // if it's a file, add it to this list
    const dirPaths = noUndefinedEntryPaths.filter(entryPath => !filePaths.includes(entryPath)) // if it's a directory, add it to this list
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), []) // recurisvely call this entire method (!) on each path that is detected as a directory rather than a file, until all files are discovered and there are no more paths left
    return [...filePaths, ...dirFiles] // return all top level and deeply nested files as a flat array
  }

  return [] // if the above checking returns nothing
}

module.exports = getFilePaths
