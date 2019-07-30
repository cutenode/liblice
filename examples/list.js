// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenseArray } = require('../index')

console.log(JSON.stringify(licenseArray('./'), null, 2))