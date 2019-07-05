const arrayOfLicenses = require('./exports/arrayExport')
const objectOfLicenses = require('./exports/objectExport')
const objectLicenseReport = require('./exports/objectLicenseReport')

module.exports = {
  licenseArray: arrayOfLicenses,
  licenseObject: objectOfLicenses,
  licenseReport: objectLicenseReport
}
