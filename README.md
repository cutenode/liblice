# liblice

liblice is a module to detect licenses throughout your enitre _installed_ dependency tree.

liblice crawls node_modules, fetches all package.json files, and parses them. It can return the data it fetches in a few different ways, depending on how you want to consume it.

## Usage

### Array Output

```js
const arrayOfLicenses = require('liblice').licenseArray

arrayOfLicenses('.') // where the current working directory has node_moodules
```

### Object Output

```js
const objectOfLicenses = require('liblice').licenseObject

objectOfLicenses('.') // where the current working directory has node_moodules
```

## Caveats

Currently, liblice excludes searching any directory in `node_modules` that includes `/test/` because people publish tests for `package.json` files and it creates a bunch of noisy false positives.

## TODOs

- Perhaps detect pacakge.json in passed path as validation?
- Tests. Always tests.
