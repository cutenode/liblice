// parse as many possible ways a license could be expressed as is humanly possible

function parse(file) {
  let returnable = ''

  if(file.license !== undefined) {
    if(typeof file.license === 'string') {
      returnable = handleUndefinedAndNull(file.license)
    } else if(typeof file.license === 'objcet') {
      returnable = handleUndefinedAndNull(file.license.type)
    }
  } else if (file.licenses !== undefined) {
    returnable = handleUndefinedAndNull(file.licenses.type)
  }

  return returnable
}

function handleUndefinedAndNull(licenseString) {
  if(licenseString === null) {
    return 'invalid license'
  } else if (licenseString === undefined) {
    return 'invalid license'
  } else {
    return licenseString
  }
}

module.exports = parse