// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenses } = require('../index')

// We're looking at /tests since it has a dummy set of package.jsons for this express purpose
console.log(JSON.stringify(licenses(`${process.cwd()}/tests`), null, 2))
