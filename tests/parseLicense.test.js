const parseLicense = require('../lib/parseLicense')
const loadPackagejson = require('load-json-file')
const fs = require('fs')

describe('test `license` export', () => {

  test('test the output of an array that is identified by `licenses` (rather than `license`) that contains an object that has a type property', () => {
    const pkg = loadPackagejson.sync(`${__dirname}/dummy/package.arrayObjectType.json`)
    const actual = parseLicense(pkg)

    expect(actual).toEqual(
      'LOL'
    )
  })

  test('test the output of an object that is identified by `license` which has a `type` property', () => {
    const pkg = loadPackagejson.sync(`${__dirname}/dummy/package.objectType.json`)
    const actual = parseLicense(pkg)

    expect(actual).toEqual(
      'OMG'
    )
  })

})
