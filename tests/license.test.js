const licenses = require('../exports/licenses')

describe('test `license` export', () => {

  test('test dummy node_modules and expect a specific set of outputs that have been JSON.stringified', () => {
    const actual = licenses('./tests')

    expect(actual).toEqual(
      {
        "MIT": {
          "packages": {
            "@babel/code-frame": "7.5.5",
            "chalk": "2.4.2",
            "color-convert": "1.9.3",
            "color-name": "1.1.3",
            "conformance": "1.0.0",
            "deep-is": "0.1.3",
            "error-ex": "1.3.2",
            "escape-string-regexp": "1.0.5",
            "has-flag": "3.0.0",
            "is-arrayish": "0.2.1",
            "js-tokens": "4.0.0",
            "json-parse-better-errors": "1.0.2",
            "lines-and-columns": "1.1.6",
            "load-json-file": "6.2.0",
            "parse-json": "5.0.0",
            "querystring": "0.2.0",
            "spdx-expression-parse": "3.0.0",
            "strip-bom": "4.0.0",
            "supports-color": "5.5.0"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "MIT"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/MIT.html#licenseText"
            ],
            "spdx": {
              "osi": true,
              "fsf": true,
              "fsfAndOsi": true,
              "includesDeprecated": false
            }
          },
          "occurrences": 19
        },
        "BSD": {
          "packages": {
            "esutils": "2.0.2"
          },
          "conformance": {
            "license": "BSD",
            "error": "Passed license expression was not a valid license expression. Error from spdx-expression-parse: Error: Unexpected `B` at offset 0"
          },
          "occurrences": 1
        },
        "invalid license": {
          "packages": {
            "fakefail": "0.2.0"
          },
          "conformance": {
            "license": "invalid license",
            "error": "Passed license expression was not a valid license expression. Error from spdx-expression-parse: Error: Unexpected `i` at offset 0"
          },
          "occurrences": 1
        },
        "ISC": {
          "packages": {
            "graceful-fs": "4.2.0"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "ISC"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/ISC.html#licenseText"
            ],
            "spdx": {
              "osi": true,
              "fsf": true,
              "fsfAndOsi": true,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        },
        "CC-BY-3.0": {
          "packages": {
            "spdx-exceptions": "2.2.0"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "CC-BY-3.0"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/CC-BY-3.0.html#licenseText"
            ],
            "spdx": {
              "osi": false,
              "fsf": false,
              "fsfAndOsi": false,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        },
        "CC0-1.0": {
          "packages": {
            "spdx-license-ids": "3.0.5"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "CC0-1.0"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/CC0-1.0.html#licenseText"
            ],
            "spdx": {
              "osi": false,
              "fsf": true,
              "fsfAndOsi": false,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        },
        "(MIT OR CC0-1.0)": {
          "packages": {
            "type-fest": "0.6.0"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "MIT",
              "CC0-1.0"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/MIT.html#licenseText",
              "https://spdx.org/licenses/CC0-1.0.html#licenseText"
            ],
            "spdx": {
              "osi": false,
              "fsf": true,
              "fsfAndOsi": false,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        }
      }
    )
  })
})
