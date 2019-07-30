const loadPackagejson = require('load-json-file')
const compliance = require('compliance')
const filtered = require('../lib/filterFileTree')

const buildObjectExport = function (directory) {
  const arrayOfPackageJsonFiles = filtered(directory)
  const objectOfLicenses = {}

  arrayOfPackageJsonFiles.forEach(function (jsonFile) {
    const loadedJSON = loadPackagejson.sync(jsonFile)
    const loadedCompliance = compliance(loadedJSON.license)

    objectOfLicenses[loadedJSON.name] = {
      license: loadedJSON.license
        ? loadedJSON.license
        : undefined,
      path: jsonFile,
      version: loadedJSON.version
        ? loadedJSON.version
        : undefined,
      author: loadedJSON.author
        ? loadedJSON.author
        : undefined,
      compliance: compliance
        ? loadedCompliance
        : undefined
    }
  })

  return objectOfLicenses
}

module.exports = buildObjectExport
