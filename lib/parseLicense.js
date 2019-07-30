// parse as many possible ways a license could be expressed as is humanly possible

function parse(file) {
  if(file.license !== undefined) {
    if(typeof file.license === 'string') {
      return file.license
    } else if(typeof file.license === 'objcet') {
        return file.license.type
    }
  } else if (file.licenses !== undefined) {
    return file.licenses.type
  }
}

module.exports = parse