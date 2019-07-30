// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenses } = require('../index')

console.log(JSON.stringify(licenses('.'), null, 2))