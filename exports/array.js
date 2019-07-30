const loadPackagejson = require('load-json-file')
const filtered = require('../lib/filterFileTree')

const buildArrayExport = function (directory) {
  const arrayOfPackageJsonFiles = filtered(directory)
  const arrayOfLicenses = []

  arrayOfPackageJsonFiles.forEach(function (jsonFile) {
    const loadedJSON = loadPackagejson.sync(jsonFile)
    arrayOfLicenses.push(loadedJSON.license)
  })

  return arrayOfLicenses
}

module.exports = buildArrayExport
