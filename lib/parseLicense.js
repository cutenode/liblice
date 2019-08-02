// parse as many possible ways a license could be expressed as is humanly possible

function parse (file) {
  if (file.license !== undefined) {
    if (typeof file.license === 'string') {
      return handleUndefinedAndNull(file.license)
    }

    if (typeof file.license === 'object') {
      return handleUndefinedAndNull(file.license.type)
    }
  }
  
  if (file.licenses !== undefined) {
    return handleUndefinedAndNull(file.licenses[0].type)
  }
}

function handleUndefinedAndNull (licenseString) {
  if (licenseString === undefined) {
    return 'invalid license'
  } else {
    return licenseString
  }
}

module.exports = parse
