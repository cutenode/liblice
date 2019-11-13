const list = require('../exports/list')

describe('test `list` export', () => {
  test('Test the throw when a directory that doesn\'t exist is passed.', () => {    
    const throwingList = function() {
      list('./some-directory-that-doesnt-exist') // this "directory" is hard coded in the line below as well
    }

    expect(throwingList).toThrowError(new Error(`Passed directory /Users/cyren/GitHub/liblice/some-directory-that-doesnt-exist does not exist.`))
  })
})