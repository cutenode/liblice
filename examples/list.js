// Run this in the root project directory:
// $ node examples/list-my-licenses.js

// We're looking at /tests since it has a dummy set of package.jsons for this express purpose
const { list } = require('../index')

console.log(JSON.stringify(list('./tests'), null, 2))
