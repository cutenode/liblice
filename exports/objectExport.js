const loadPackagejson = require('load-json-file')
const filtered = require('../lib/filterFileTree')

const buildObjectExport = function (directory) {
  const arrayOfPackageJsonFiles = filtered(directory)
  const objectOfLicenses = {}

  arrayOfPackageJsonFiles.forEach(function (jsonFile) {
    const loadedJSON = loadPackagejson.sync(jsonFile)
    objectOfLicenses[loadedJSON.name] = { license: loadPackagejson.sync(jsonFile).license ? loadPackagejson.sync(jsonFile).license : undefined, path: jsonFile, version: loadPackagejson.sync(jsonFile).version ? loadPackagejson.sync(jsonFile).version : undefined, author: loadPackagejson.sync(jsonFile).author ? loadPackagejson.sync(jsonFile).author : undefined }
  })

  return objectOfLicenses
}

module.exports = buildObjectExport
