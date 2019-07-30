// parse as many possible ways a license could be expressed as is humanly possible

function parse(file) {
  if (file.license !== undefined) {
    if (typeof file.license === 'string') {
      return handleUndefinedAndNull(file.license)
    } else if (typeof file.license === 'objcet') {
      return handleUndefinedAndNull(file.license.type)
    }
  } else if (file.licenses !== undefined) {
    return handleUndefinedAndNull(file.licenses.type)
  }
}

function handleUndefinedAndNull(licenseString) {
  if (licenseString === null) {
    return 'invalid license'
  } else if (licenseString === undefined) {
    return 'invalid license'
  } else {
    return licenseString
  }
}

module.exports = parse