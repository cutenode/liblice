// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { list } = require('../index')

console.log(JSON.stringify(list('./'), null, 2))