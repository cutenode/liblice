// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenseReport } = require('../index')

const jsonReport = JSON.stringify(licenseReport('.'), null, 2)

console.log(jsonReport)

// Approximate Expected Output:
// {
//   "MIT": {
//     "packages": {
//       "error-ex": "1.3.2",
//       "is-arrayish": "0.2.1",
//       "json-parse-better-errors": "1.0.2",
//       "load-json-file": "6.1.0",
//       "parse-json": "4.0.0",
//       "strip-bom": "4.0.0"
//     },
//     "occurance": 6
//   },
//   "ISC": {
//     "packages": {
//       "graceful-fs": "4.2.0"
//     },
//     "occurance": 1
//   },
//   "(MIT OR CC0-1.0)": {
//     "packages": {
//       "type-fest": "0.5.2"
//     },
//     "occurance": 1
//   }
// }
