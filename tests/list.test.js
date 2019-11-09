const list = require('../exports/list')

describe('test `list` export', () => {
  test('test dummy node_modules and expect a specific set of outputs', () => {
    const actual = list('./tests')

    expect(actual).toEqual(
      [
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "BSD",
        "MIT",
        "invalid license",
        "ISC",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "MIT",
        "CC-BY-3.0",
        "MIT",
        "CC0-1.0",
        "MIT",
        "MIT",
        "(MIT OR CC0-1.0)"
      ]
    )
  })
})
