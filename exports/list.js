const loadPackagejson = require('load-json-file')
const parseLicense = require('../lib/parseLicense')
const filtered = require('../lib/filterFileTree')

const buildArrayExport = function (directory) {
  const arrayOfPackageJsonFiles = filtered(directory)
  const arrayOfLicenses = []

  arrayOfPackageJsonFiles.forEach(function (jsonFile) {
    const loadedJSON = loadPackagejson.sync(jsonFile)
    const parsed = parseLicense(loadedJSON)
    arrayOfLicenses.push(parsed)
  })

  return arrayOfLicenses
}

module.exports = buildArrayExport
