// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { modules } = require('../index')

// We're looking at /tests since it has a dummy set of package.jsons for this express purpose
console.log(JSON.stringify(modules('./tests'), null, 2))
