// Run this in the root project directory:
// $ node examples/list-my-licenses.js

const arborist = require('../exports/arbor')

// We're looking at /tests since it has a dummy set of package.jsons for this express purpose.
// Note that we're using a relative path as well. Both relative and absolute paths are accepted.
async function log () {
  const modulesFromArborist = await arborist(`${process.cwd()}/tests`)
  console.log(JSON.stringify(modulesFromArborist, null, 2))
}

log()