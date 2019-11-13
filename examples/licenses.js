// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const { licenses } = require('../index')

// We're looking at /tests since it has a dummy set of package.jsons for this express purpose.
// Note that we're using a relative path as well. Both relative and absolute paths are accepted.
console.log(JSON.stringify(licenses('../tests'), null, 2))
