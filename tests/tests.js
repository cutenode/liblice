// source for the outputs that are tested in /tests
//
// to capture each output, I've built this file to output both JS objects
// and JSON to the tests/outputs/ directory. Every time this file is run,
// all of the outputs there will be overwritten.
//
// From there, the outputs can be copy/pasted into the tests. We intentionally
// are not reading from the files, as that could enable bugs to surface without
// awareness of the maintainers. Instead, this just provides an *easier*
// way for us to get the expected outputs when something within the module
// changes substantially. In those cases, the existing tests should fail and
// this file should be executed to capture the *new* outputs.
//
// from there, I can just paste the new output into the appropriate test

const fs = require('fs')

const { licenses } = require('../index')
const { list } = require('../index')
const { modules } = require('../index')

// Licenses
const licenseJSON = JSON.stringify(licenses('./tests'), null, 2)
writeSources('/outputs/licenses.json', licenseJSON)
console.log(licenseJSON)

// List
const listJSON = JSON.stringify(list('./tests'), null, 2)
writeSources('/outputs/list.json', listJSON)

// Modules
const modulesJSON = JSON.stringify(modules('./tests'), null, 2)
writeSources('/outputs/modules.json', modulesJSON)

function writeSources (path, output) {
  fs.writeFile (__dirname + path, output, (error) => {
    if (error) throw error
    
    console.log(`wrote ${path} successfully`)
  })
  
}