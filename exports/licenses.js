const modules = require('./modules')

const buildObjectLicenseReport = function (directory) {
  const data = modules(directory) // get our basic data from modules.js
  const report = {} // initalize object that we're going to export

  for (var checkedModule in data) { // loop over data that we pulled in
    const licenseName = data[checkedModule].license // short hand for license names on each loop
    const versionNumber = data[checkedModule].version // short hand for module version on each loop
    const modulePath = data[checkedModule].path // short hand for module path on each loop
    const conformance = data[checkedModule].conformance

    if (report[licenseName] === undefined) {
      report[licenseName] = {} // if the license name we're currently iterating over is not already defined, define it
    }

    if (report[licenseName].packages === undefined) {
      report[licenseName].packages = {} // if the packages property is not an object on the license name we're currently iteracting over, define it
    }

    if (report[licenseName].paths === undefined) {
      report[licenseName].paths = {} // if the path property is not an object on the license name we're currently iterating over, define it
    }

    if (report[licenseName].conformance === undefined) {
      report[licenseName].conformance = {} // if the conformance property is not an object on the license name we're currently iterating over, define it
    }

    report[licenseName].occurrences = (report[licenseName].occurrences || 0) + 1 // add one to the occurrence property each loop that the license name exists
    report[licenseName].packages[checkedModule] = versionNumber // for each module that's of a license type, add it as a property to the packages property and assgin its value as the installed version
    report[licenseName].paths[checkedModule] = modulePath
    report[licenseName].conformance = conformance
  }

  return report // stringify it so users can just consume as JSON rather than as a JavaScript object.
}

module.exports = buildObjectLicenseReport
