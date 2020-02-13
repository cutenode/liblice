const Arborist = require('@npmcli/arborist')
const conformance = require('conformance')

const properties = {}

async function executeArborist (path) { // our export
  const arboristOptions = {}

  if (path) { // only use the options that arborist actually takes
    arboristOptions.path = path
  }

  const arborist = new Arborist(arboristOptions)

  const tree = arborist.loadActual().then(node => {
    node.children.forEach(packageMapHandler) // iterate over the chidlren Map() with the packageMapHandler method
  }).then(() => {
    return properties // once iteration is complete, return the data
  }).catch((error) => {
    throw error
  })

  return tree
}

async function packageMapHandler (value, key, map) {
  const symbols = Object.getOwnPropertySymbols(value) // simple way to access the symbols
  const module = map.get(key) // 'key' is the name of the currently iterated module - this gets that value
  const _package = module[symbols[0]] // gets additional metadata that we need stored in the Symbol(_package) in map.get(key)

  const iteration = {
    name: module.name,
    license: _package.license,
    path: module.realpath, // I just assumed realpath was the best option - path may be better
    version: _package.version,
    author: _package.author,
    conformance: conformance(_package.license) // build conformance profile from the license
  }

  if (properties[iteration.name] === undefined) {
    properties[iteration.name] = iteration
  }
}

module.exports = executeArborist
