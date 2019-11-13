const list = require('../exports/list')
const path = require('path')

describe('test `list` export', () => {
  test('Test the throw when a directory that doesn\'t exist is passed.', () => {
    const fakeDirectoryName = 'some-directory-that-doesnt-exist'
    const fakeFullPath = process.cwd() + fakeDirectoryName
    const errorMessage = `Passed directory ${fakeFullPath} does not exist.`
    const normalisedPath = fakeFullPath.split(path.sep).join('/')

    const throwingList = function() {
      list(normalisedPath)
    }

    expect(throwingList).toThrowError(new Error(errorMessage))
  })
})