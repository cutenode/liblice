// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenseObject } = require('../index')

const jsonReport = JSON.stringify(licenseObject('.'), null, 2)

console.log(jsonReport)
