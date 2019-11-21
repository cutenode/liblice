# Changelog

## 3.2.0

- Re-ignore `/tests` within `node_modules/*` [#13](https://github.com/cutenode/liblice/pull/13)

## 3.1.0

- Added `paths` property to `licenses` export [#12](https://github.com/cutenode/liblice/pull/12)

## 3.0.0

- **BREAKING:** API typo fixed – `occurance` is now `occurrence` [#3](https://github.com/cutenode/liblice/pull/3)
- README docs were improved [#5](https://github.com/cutenode/liblice/pull/5)
- Moved to GitHub CI and removed Azure Pipelines [#6](https://github.com/cutenode/liblice/pull/6)
- Windows compatability was improved [#7](https://github.com/cutenode/liblice/pull/7)
- Added npm run test:generate to CI. [#9](https://github.com/cutenode/liblice/pull/9)
- Fixed a bug in the README examples that may or may not have been introduced by the PR [#9](https://github.com/cutenode/liblice/pull/9)
- Deleted package-lock.json [#9](https://github.com/cutenode/liblice/pull/9)
- Updated examples to use multiple approaches (full paths and relative paths) [#9](https://github.com/cutenode/liblice/pull/9)
- Improved comments for examples [#9](https://github.com/cutenode/liblice/pull/9)
- Made full paths and relative paths work [#9](https://github.com/cutenode/liblice/pull/9)
- Uses path.resolve() for this under the hood [#9](https://github.com/cutenode/liblice/pull/9)
- Introduced path validation [#9](https://github.com/cutenode/liblice/pull/9)
- Removed the ability to parse */.bin/* since it was extremely problematic and not particularly useful since we can extract this information anyway from package.json [#9](https://github.com/cutenode/liblice/pull/9)
- If we want to re-introduce this as an integrity check we'd want to parse seperately from the license parsing logic. perhaps a good module idea. [#9](https://github.com/cutenode/liblice/pull/9)
- Moved all test /output generation to a single file and command rather than having independent commands
deduped some output in list.json [#9](https://github.com/cutenode/liblice/pull/9)
- Added throws.test.js which is intended to be a catch-all test file for things that should throw. [#9](https://github.com/cutenode/liblice/pull/9)
- Removed mock module from tests since the functionality it was testing was functionally removed [#10](https://github.com/cutenode/liblice/pull/10)
