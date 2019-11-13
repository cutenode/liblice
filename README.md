# liblice

liblice is a module to detect licenses throughout your entire _installed_ dependency tree.

liblice crawls `node_modules`, fetches all `package.json` files, and parses them. It can return the data it fetches in a few different ways, depending on how you want to consume it.

## Installation

```bash
npm install liblice
```

## Usage

### `list` Output

Returns an array of all licenses – plus any invalid licenses – within the node modules of the passed directory.

```js
const { list } = require('liblice')

licenseArray('.') // where the current working directory has node_moodules
```

### `modules` Output

Returns an object of all modules, their license expression, the path to the module, their version, their author, and their [conformance information](#what-is-conformance-information).

```js
const { modules } = require('liblice')

licenseObject('.') // where the current working directory has node_moodules
```

### `licenses` Output

Returns an object the names of every license as a key, with the value being an object of objects that includes:

- All packages that use the license
- Conformance information for that license
- Total number of occurances of the license

```js
const { licenses }  = require('../index')

licenseReport('.') // where the current working directory has node_moodules
```

## What is Conformance Information

Conformance information is information that could be useful in the context of license conformance. Specifically, information included is a full list of all individual license IDs in the license expression (often this is identical to the license expression itself, but sometimes it's not), the links to the SPDX-hosted versions of the included licenses, and information that mirrors what can be found in the SPDX license list:

- The `osi` property, which indicates if all licenses in the license expression are OSI compliant
- The `fsf` property, which indicates if all licenses in the license expression are FSF compliant
- The `fsfAndOSI` property, which indicates if all licenses in the license expression are **both** OSI and FSF compliant
- The `includesDeprecated` property, which indicates if **one or more** licenses in the license expression are deprecated IDs.

## Caveats

Currently, liblice excludes searching any directory in `node_modules` that includes `/test/` because people publish tests for `package.json` files and it creates a bunch of noisy false positives.

## TODOs

- Perhaps detect pacakge.json in passed path as validation?
- Tests. Always tests.
