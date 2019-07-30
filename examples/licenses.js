// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenseReport } = require('../index')

console.log(JSON.stringify(licenseReport('.'), null, 2))