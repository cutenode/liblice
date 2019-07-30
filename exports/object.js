const loadPackagejson = require('load-json-file')
const conformance = require('conformance')
const filtered = require('../lib/filterFileTree')
const parseLicense = require('../lib/parseLicense')

const buildObjectExport = function (directory) {
  const arrayOfPackageJsonFiles = filtered(directory)
  const objectOfLicenses = {}

  arrayOfPackageJsonFiles.forEach(function (jsonFile) {
    const loadedJSON = loadPackagejson.sync(jsonFile)
    const parsed = parseLicense(loadedJSON)
    const loadedConformance = conformance(parsed)
  
    objectOfLicenses[loadedJSON.name] = {
      license: parsed
        ? parsed
        : undefined,
      path: jsonFile,
      version: loadedJSON.version
        ? loadedJSON.version
        : undefined,
      author: loadedJSON.author
        ? loadedJSON.author
        : undefined,
      conformance: conformance
        ? loadedConformance
        : undefined
    }
  })

  return objectOfLicenses
}

module.exports = buildObjectExport
