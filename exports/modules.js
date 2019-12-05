const path = require('path')
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

    if (objectOfLicenses[loadedJSON.name] !== undefined) {
      objectOfLicenses[loadedJSON.name].push({ // push additional instances if one already exists
        license: parsed,
        path: jsonFile.split(path.sep).join('/'),
        version: loadedJSON.version,
        author: loadedJSON.author ? loadedJSON.author : null,
        conformance: loadedConformance
      })
    } else {
      objectOfLicenses[loadedJSON.name] = []

      objectOfLicenses[loadedJSON.name].push({ // push the first instance
        license: parsed,
        path: jsonFile.split(path.sep).join('/'),
        version: loadedJSON.version,
        author: loadedJSON.author ? loadedJSON.author : null,
        conformance: loadedConformance
      })
    }
  })

  return objectOfLicenses
}

module.exports = buildObjectExport
