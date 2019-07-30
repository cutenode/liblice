// source for the outputs that are tested in /tests

const { licenses } = require('../index')
const { list } = require('../index')
const { modules } = require('../index')

console.log(JSON.stringify(licenses('./tests'), null, 2))
console.log(JSON.stringify(list('./tests'), null, 2))
console.log(JSON.stringify(modules('./tests'), null, 2))
