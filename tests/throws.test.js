const list = require('../exports/list')

describe('test `list` export', () => {
  test('Test the throw when a directory that doesn\'t exist is passed.', () => {    
    const fakeDirectoryName = 'some-directory-that-doesnt-exist'
    const errorMessage = `Passed directory ${process.cwd()}/${fakeDirectoryName} does not exist.`

    const throwingList = function() {
      list(`./${fakeDirectoryName}`)
    }

    expect(throwingList).toThrowError(new Error(errorMessage))
  })
})