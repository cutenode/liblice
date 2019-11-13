const modules = require('../exports/modules')

describe('test `modules` export', () => {
  test('test dummy node_modules and expect a specific object back', () => {
    const actual = modules(`./tests`)

    expect(actual).toEqual(
      {
        "@babel/code-frame": {
          "license": "MIT",
          "path": "tests/node_modules/@babel/code-frame/package.json",
          "version": "7.5.5",
          "author": {
            "name": "Sebastian McKenzie",
            "email": "sebmck@gmail.com"
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
          }
        },
        "chalk": {
          "license": "MIT",
          "path": "tests/node_modules/chalk/package.json",
          "version": "2.4.2",
          "author": null,
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
          }
        },
        "color-convert": {
          "license": "MIT",
          "path": "tests/node_modules/color-convert/package.json",
          "version": "1.9.3",
          "author": {
            "name": "Heather Arthur",
            "email": "fayearthur@gmail.com"
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
          }
        },
        "color-name": {
          "license": "MIT",
          "path": "tests/node_modules/color-name/package.json",
          "version": "1.1.3",
          "author": {
            "name": "DY",
            "email": "dfcreative@gmail.com"
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
          }
        },
        "conformance": {
          "license": "MIT",
          "path": "tests/node_modules/conformance/package.json",
          "version": "1.0.0",
          "author": {
            "name": "Tierney Cyren",
            "email": "hello@bnb.im"
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
          }
        },
        "deep-is": {
          "license": "MIT",
          "path": "tests/node_modules/deep-is/package.json",
          "version": "0.1.3",
          "author": {
            "name": "Thorsten Lorenz",
            "email": "thlorenz@gmx.de",
            "url": "http://thlorenz.com"
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
          }
        },
        "error-ex": {
          "license": "MIT",
          "path": "tests/node_modules/error-ex/package.json",
          "version": "1.3.2",
          "author": null,
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
          }
        },
        "escape-string-regexp": {
          "license": "MIT",
          "path": "tests/node_modules/escape-string-regexp/package.json",
          "version": "1.0.5",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        },
        "esutils": {
          "license": "BSD",
          "path": "tests/node_modules/esutils/package.json",
          "version": "2.0.2",
          "author": null,
          "conformance": {
            "license": "BSD",
            "error": "Passed license expression was not a valid license expression. Error from spdx-expression-parse: Error: Unexpected `B` at offset 0"
          }
        },
        "fakefail": {
          "license": "invalid license",
          "path": "tests/node_modules/fakefail/package.json",
          "version": "0.2.0",
          "author": null,
          "conformance": {
            "license": "invalid license",
            "error": "Passed license expression was not a valid license expression. Error from spdx-expression-parse: Error: Unexpected `i` at offset 0"
          }
        },
        "graceful-fs": {
          "license": "ISC",
          "path": "tests/node_modules/graceful-fs/package.json",
          "version": "4.2.0",
          "author": null,
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
          }
        },
        "has-flag": {
          "license": "MIT",
          "path": "tests/node_modules/has-flag/package.json",
          "version": "3.0.0",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        },
        "is-arrayish": {
          "license": "MIT",
          "path": "tests/node_modules/is-arrayish/package.json",
          "version": "0.2.1",
          "author": {
            "name": "Qix",
            "url": "http://github.com/qix-"
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
          }
        },
        "js-tokens": {
          "license": "MIT",
          "path": "tests/node_modules/js-tokens/package.json",
          "version": "4.0.0",
          "author": {
            "name": "Simon Lydell"
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
          }
        },
        "json-parse-better-errors": {
          "license": "MIT",
          "path": "tests/node_modules/json-parse-better-errors/package.json",
          "version": "1.0.2",
          "author": {
            "name": "Kat Marchán",
            "email": "kzm@zkat.tech"
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
          }
        },
        "lines-and-columns": {
          "license": "MIT",
          "path": "tests/node_modules/lines-and-columns/package.json",
          "version": "1.1.6",
          "author": {
            "name": "Brian Donovan",
            "email": "me@brian-donovan.com"
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
          }
        },
        "load-json-file": {
          "license": "MIT",
          "path": "tests/node_modules/load-json-file/package.json",
          "version": "6.2.0",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        },
        "parse-json": {
          "license": "MIT",
          "path": "tests/node_modules/parse-json/package.json",
          "version": "5.0.0",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        },
        "querystring": {
          "license": "MIT",
          "path": "tests/node_modules/querystring/package.json",
          "version": "0.2.0",
          "author": {
            "name": "Irakli Gozalishvili",
            "email": "rfobic@gmail.com"
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
          }
        },
        "spdx-exceptions": {
          "license": "CC-BY-3.0",
          "path": "tests/node_modules/spdx-exceptions/package.json",
          "version": "2.2.0",
          "author": {
            "name": "The Linux Foundation"
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
          }
        },
        "spdx-expression-parse": {
          "license": "MIT",
          "path": "tests/node_modules/spdx-expression-parse/package.json",
          "version": "3.0.0",
          "author": {
            "name": "Kyle E. Mitchell",
            "email": "kyle@kemitchell.com",
            "url": "http://kemitchell.com"
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
          }
        },
        "spdx-license-ids": {
          "license": "CC0-1.0",
          "path": "tests/node_modules/spdx-license-ids/package.json",
          "version": "3.0.5",
          "author": {
            "name": "Shinnosuke Watanabe",
            "url": "https://github.com/shinnn"
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
          }
        },
        "strip-bom": {
          "license": "MIT",
          "path": "tests/node_modules/strip-bom/package.json",
          "version": "4.0.0",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        },
        "supports-color": {
          "license": "MIT",
          "path": "tests/node_modules/supports-color/package.json",
          "version": "5.5.0",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        },
        "type-fest": {
          "license": "(MIT OR CC0-1.0)",
          "path": "tests/node_modules/type-fest/package.json",
          "version": "0.6.0",
          "author": {
            "name": "Sindre Sorhus",
            "email": "sindresorhus@gmail.com",
            "url": "sindresorhus.com"
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
          }
        }
      }
    )
  })
})
