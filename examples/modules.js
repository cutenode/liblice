// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { modules } = require('../index')

console.log(JSON.stringify(modules('.'), null, 2))
